/**
 * Worker thread that receives signed HTTP requests and sends them.
 * For file-based requests, reads the file slice, computes CRC32,
 * and sends the body in aws-chunked format with a trailing checksum.
 *
 * For download-to-file requests, sends the signed HTTP request,
 * validates the ContentRange offset, streams the response body
 * directly to a file at the specified offset, and optionally
 * computes an inline CRC checksum.
 *
 * @internal
 */
import { HttpRequest } from "@smithy/core/protocols";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import dns from "node:dns";
import { openSync, readSync, closeSync } from "node:fs";
import type { LookupOptions } from "node:dns";
import type { Checksum } from "@smithy/types";
import { Crc32cJs, Crc64NvmeJs } from "@aws-sdk/checksums/crc";
import { open } from "node:fs/promises";
import { Agent as httpsAgent } from "node:https";
import { parentPort } from "node:worker_threads";
import { crc32 } from "node:zlib";

const DNS_TTL_MS = 1000;
const dnsCache = new Map<string, { ips: string[]; ts: number }>();

/**
 * Resolves all A records for a hostname, picks one at random per connection
 * to spread load across S3's fleet. Falls back to dns.lookup for IPv6 or
 * on resolution failure.
 * @internal
 */
function spreadLookup(
  hostname: string,
  options: LookupOptions,
  callback: (
    err: NodeJS.ErrnoException | null,
    address: string | dns.LookupAddress[],
    family?: number,
  ) => void,
): void {
  if (options && options.family === 6) {
    return dns.lookup(hostname, options, callback);
  }

  const deliver = (ips: string[]) => {
    const ip = ips[Math.floor(Math.random() * ips.length)];
    if (options && options.all) {
      callback(null, [{ address: ip, family: 4 }]);
    } else {
      callback(null, ip, 4);
    }
  };

  const cached = dnsCache.get(hostname);
  if (cached && cached.ips.length && Date.now() - cached.ts < DNS_TTL_MS) {
    return deliver(cached.ips);
  }

  dns.resolve4(hostname, (err, ips) => {
    if (err || !ips?.length) {
      return dns.lookup(hostname, options, callback);
    }
    dnsCache.set(hostname, { ips, ts: Date.now() });
    deliver(ips);
  });
}

/**
 * Types duplicated from worker-http-handler to avoid cross-submodule imports.
 * @internal
 */

/**
 * Serializable subset of HttpRequest sent from main thread to worker.
 * Contains the signed request data without the body (body is sourced separately).
 */
interface WorkerHttpRequest {
  method: string;
  protocol: string;
  hostname: string;
  port?: number;
  path: string;
  query?: Record<string, string | string[]>;
  headers: Record<string, string>;
  body?: Uint8Array;
}

interface BaseHttpWorkerRequestMessage {
  id: number;
  request: WorkerHttpRequest;
}

interface HttpWorkerFileRequestMessage extends BaseHttpWorkerRequestMessage {
  type: "httpRequestFromFile";
  filePath: string;
  offset: number;
  length: number;
  checksumAlgorithm?: string;
  checksumHeader?: string;
}

interface HttpWorkerRAMRequestMessage extends BaseHttpWorkerRequestMessage {
  type: "httpRequestFromRAM";
  sharedBuffer: SharedArrayBuffer;
  offset: number;
  length: number;
  checksumAlgorithm?: string;
  checksumHeader?: string;
}

type HttpWorkerRequestMessage =
  | HttpWorkerFileRequestMessage
  | HttpWorkerRAMRequestMessage;

/**
 * Main thread → Worker: download a part and write the response body directly
 * to a file at the specified offset. Used for downloadToFile operations.
 */
interface HttpWorkerDownloadToFileMessage extends BaseHttpWorkerRequestMessage {
  type: "httpDownloadToFile";
  filePath: string;
  offset: number;
  expectedLength: number;
  checksumAlgorithm?: string;
}

/**
 * Main thread → Worker: download a part and stream the response back.
 */
interface HttpWorkerDownloadStreamMessage extends BaseHttpWorkerRequestMessage {
  type: "httpDownloadStream";
  /**
   * Expected response body size in bytes; used to pre-allocate the ArrayBuffer.
   */
  expectedSize: number;
  /**
   * Sequential part/range index for ordered delivery on the main thread.
   */
  rangeIndex: number;
  /**
   * Optional CRC algorithm for inline checksum validation against S3 response headers.
   */
  checksumAlgorithm?: string;
}

/**
 * Main thread → Worker: return a consumed ArrayBuffer for reuse.
 * Sent after the main-thread consumer has finished reading a transferred buffer.
 */
interface HttpWorkerReturnBufferMessage {
  type: "returnBuffer";
  /**
   * A consumed ArrayBuffer transferred back to the worker for reuse (zero-copy recycling).
   */
  buffer: ArrayBuffer;
}

/**
 * Worker → Main thread: download-to-file completed successfully.
 * Reports status, headers, bytes written, and optional checksum.
 */
interface HttpWorkerDownloadResultMessage {
  type: "httpDownloadResult";
  id: number;
  statusCode: number;
  headers: Record<string, string>;
  bytesWritten: number;
  checksum?: string;
}

/**
 * Worker → Main thread: stream-mode download completed.
 * The ArrayBuffer is transferred (zero-copy) via the postMessage transfer list.
 */
interface HttpWorkerDownloadStreamResultMessage {
  type: "httpDownloadStreamResult";
  id: number;
  rangeIndex: number;
  buffer: ArrayBuffer;
  byteLength: number;
  statusCode: number;
  headers: Record<string, string>;
  checksum?: string;
}

/**
 * Worker → Main thread: a download request (file or transfer) failed.
 */
interface HttpWorkerDownloadErrorMessage {
  type: "httpDownloadError";
  id: number;
  error: string;
  code?: string;
  name?: string;
}

/**
 * Main thread → Worker: configure the worker's HTTP agent (e.g., max sockets).
 * Sent once after the worker signals "ready".
 */
interface HttpWorkerConfigMessage {
  type: "config";
  maxSockets: number;
}

/**
 * Main thread → Worker: shut down gracefully. Worker destroys its HTTP handler and exits.
 */
interface HttpWorkerDoneMessage {
  type: "done";
}

type HttpWorkerInboundMessage =
  | HttpWorkerRequestMessage
  | HttpWorkerDownloadToFileMessage
  | HttpWorkerDownloadStreamMessage
  | HttpWorkerReturnBufferMessage
  | HttpWorkerConfigMessage
  | HttpWorkerDoneMessage;

/**
 * Worker → Main thread: upload request completed successfully.
 * Contains the HTTP response (status, headers, body).
 */
interface HttpWorkerResponseMessage {
  type: "httpResponse";
  id: number;
  response: {
    statusCode: number;
    headers: Record<string, string>;
    body?: Uint8Array;
  };
}

/**
 * Worker → Main thread: an upload request failed.
 */
interface HttpWorkerErrorMessage {
  type: "httpError";
  id: number;
  error: string;
  code?: string;
  name?: string;
}

/**
 * Worker → Main thread: worker has initialized and is ready to accept requests.
 */
interface HttpWorkerReadyMessage {
  type: "ready";
}

function toBase64(n: number): string {
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE(n >>> 0, 0);
  return buf.toString("base64");
}

// CRC Computation Helpers for Download.

function createCrcChecksum(algorithm: string): Checksum {
  if (algorithm === "CRC64NVME") {
    return new Crc64NvmeJs();
  }
  if (algorithm === "CRC32C") {
    return new Crc32cJs();
  }
  // CRC32 — use node:zlib wrapper that conforms to Checksum interface
  return new NodeCrc32();
}

/**
 * Thin wrapper around node:zlib crc32 to conform to the Checksum interface.
 */
class NodeCrc32 implements Checksum {
  private value = 0;

  update(data: Uint8Array): void {
    this.value = crc32(data, this.value);
  }

  async digest(): Promise<Uint8Array> {
    const buf = new Uint8Array(4);
    const v = this.value >>> 0;
    buf[0] = v >>> 24;
    buf[1] = (v >>> 16) & 0xff;
    buf[2] = (v >>> 8) & 0xff;
    buf[3] = v & 0xff;
    return buf;
  }

  reset(): void {
    this.value = 0;
  }
}

async function finalizeChecksumToBase64(checksum: Checksum): Promise<string> {
  const bytes = await checksum.digest();
  return Buffer.from(bytes).toString("base64");
}

/**
 * Parses the inclusive byte bounds from a ContentRange header.
 * Expected format: "bytes START-END/TOTAL".
 *
 * @returns The START and END values, or undefined if absent or unparseable.
 */
function parseContentRange(
  contentRange: string | undefined,
): { start: number; end: number } | undefined {
  if (!contentRange) return undefined;
  const match = contentRange.match(/^bytes\s+(\d+)-(\d+)\//);
  if (!match) return undefined;
  const start = Number(match[1]);
  const end = Number(match[2]);
  if (end < start) return undefined;
  return { start, end };
}

/**
 * Finds the checksum header value in the response headers for the given algorithm.
 * S3 returns per-part checksums in headers like `x-amz-checksum-crc32`.
 */
function getChecksumHeaderValue(
  headers: Record<string, string>,
  algorithm: string,
): string | undefined {
  const headerName = `x-amz-checksum-${algorithm.toLowerCase()}`;
  return headers[headerName];
}

if (parentPort) {
  let handler: NodeHttpHandler | undefined;
  const port = parentPort;

  // Hold file descriptors open for the lifetime of the worker.
  const fdCache = new Map<string, number>();
  function getFd(filePath: string): number {
    let fd = fdCache.get(filePath);
    if (fd === undefined) {
      fd = openSync(filePath, "r");
      fdCache.set(filePath, fd);
    }
    return fd;
  }

  const readFileSlice = (
    filePath: string,
    offset: number,
    length: number,
  ): Buffer => {
    const fd = getFd(filePath);
    const buffer = Buffer.allocUnsafe(length);
    let read = 0;
    while (read < length) {
      const n = readSync(fd, buffer, read, length - read, offset + read);
      if (n === 0) break;
      read += n;
    }
    return buffer;
  };

  const buildAwsChunkedBody = (
    data: Buffer,
    checksumHeader?: string,
    checksumValue?: string,
  ): Buffer => {
    const hexLen = data.byteLength.toString(16);
    const parts: Buffer[] = [
      Buffer.from(`${hexLen}\r\n`),
      data,
      Buffer.from("\r\n0\r\n"),
    ];
    if (checksumHeader && checksumValue) {
      parts.push(Buffer.from(`${checksumHeader}:${checksumValue}\r\n`));
    }
    parts.push(Buffer.from("\r\n"));
    return Buffer.concat(parts);
  };

  const processRequest = async (
    msg: HttpWorkerRequestMessage,
  ): Promise<void> => {
    const { id, request: serialized } = msg;

    try {
      let body: Buffer | undefined;

      if (msg.type === "httpRequestFromRAM") {
        const fileData = Buffer.from(msg.sharedBuffer, msg.offset, msg.length);

        if (msg.checksumAlgorithm && msg.checksumHeader) {
          const crcValue = crc32(fileData);
          const checksumValue = toBase64(crcValue);
          body = buildAwsChunkedBody(
            fileData,
            msg.checksumHeader,
            checksumValue,
          );
        } else {
          body = fileData;
        }
      } else if (msg.type === "httpRequestFromFile") {
        const fileData = readFileSlice(msg.filePath, msg.offset, msg.length);

        if (msg.checksumAlgorithm && msg.checksumHeader) {
          const crcValue = crc32(fileData);
          const checksumValue = toBase64(crcValue);
          body = buildAwsChunkedBody(
            fileData,
            msg.checksumHeader,
            checksumValue,
          );
        } else {
          body = fileData;
        }
      }

      const request = new HttpRequest({
        method: serialized.method,
        protocol: serialized.protocol,
        hostname: serialized.hostname,
        port: serialized.port,
        path: serialized.path,
        query: serialized.query,
        headers: serialized.headers,
        body,
      });

      const { response } = await handler!.handle(request);

      const chunks: Buffer[] = [];
      if (response.body) {
        for await (const chunk of response.body) {
          chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
        }
      }

      let responseBody: Uint8Array | undefined;
      const transferList: ArrayBuffer[] = [];
      if (chunks.length > 0) {
        const concatenated = Buffer.concat(chunks);
        const ab = new ArrayBuffer(concatenated.byteLength);
        new Uint8Array(ab).set(concatenated);
        responseBody = new Uint8Array(ab);
        transferList.push(ab);
      }

      port.postMessage(
        {
          type: "httpResponse",
          id,
          response: {
            statusCode: response.statusCode,
            headers: response.headers,
            body: responseBody,
          },
        } satisfies HttpWorkerResponseMessage,
        transferList,
      );
    } catch (err) {
      port.postMessage({
        type: "httpError",
        id,
        error: (err as Error).message ?? String(err),
        code: (err as any).code,
        name: (err as Error).name,
      } satisfies HttpWorkerErrorMessage);
    }
  };

  const processDownloadToFile = async (
    msg: HttpWorkerDownloadToFileMessage,
  ): Promise<void> => {
    const {
      id,
      request: serialized,
      filePath,
      offset,
      expectedLength,
      checksumAlgorithm,
    } = msg;

    try {
      // Send the signed HTTP request
      const request = new HttpRequest({
        method: serialized.method,
        protocol: serialized.protocol,
        hostname: serialized.hostname,
        port: serialized.port,
        path: serialized.path,
        query: serialized.query,
        headers: serialized.headers,
      });

      const { response } = await handler!.handle(request);

      // Resolve where and how much to write from the response's ContentRange.
      //
      // ContentRange is the source of truth since S3 multipart objects can
      // have parts of different sizes. The caller's offset/length are based on
      // part 1 and only used as a fallback when the header is missing.
      const contentRange = response.headers["content-range"];
      const range = parseContentRange(contentRange);
      const writeOffset = range ? range.start : offset;
      const targetLength = range ? range.end - range.start + 1 : expectedLength;

      // open the file (file is pre-allocated)
      const fh = await open(filePath, "r+");
      try {
        // Initialize inline CRC computation if requested
        let crcChecksum: Checksum | undefined;
        if (checksumAlgorithm) {
          crcChecksum = createCrcChecksum(checksumAlgorithm);
        }

        // Stream response body chunks to file at positioned offsets
        let bytesWritten = 0;

        if (response.body) {
          for await (const chunk of response.body) {
            const buf =
              typeof chunk === "string"
                ? Buffer.from(chunk)
                : Buffer.isBuffer(chunk)
                  ? chunk
                  : Buffer.from(chunk);

            // Verify cumulative bytes do not exceed the range's length
            if (bytesWritten + buf.length > targetLength) {
              await fh.close();
              port.postMessage({
                type: "httpDownloadError",
                id,
                error: `Bytes written (${bytesWritten + buf.length}) exceeds expected length (${targetLength})`,
                code: "BYTES_EXCEEDED",
                name: "DownloadValidationError",
              } satisfies HttpWorkerDownloadErrorMessage);
              return;
            }

            // Write chunk to file at the correct position
            await fh.write(buf, 0, buf.length, writeOffset + bytesWritten);

            // Update CRC inline
            if (crcChecksum) {
              crcChecksum.update(buf);
            }

            bytesWritten += buf.length;
          }
        }

        await fh.close();

        // Validate bytesWritten matches the range's length
        if (bytesWritten !== targetLength) {
          port.postMessage({
            type: "httpDownloadError",
            id,
            error: `Bytes written (${bytesWritten}) does not match expected length (${targetLength})`,
            code: "LENGTH_MISMATCH",
            name: "DownloadValidationError",
          } satisfies HttpWorkerDownloadErrorMessage);
          return;
        }

        // Finalize checksum and validate against S3 header if present
        let checksumBase64: string | undefined;
        if (crcChecksum && checksumAlgorithm) {
          checksumBase64 = await finalizeChecksumToBase64(crcChecksum);

          // Check if S3 returned a per-part checksum header
          const s3ChecksumValue = getChecksumHeaderValue(
            response.headers,
            checksumAlgorithm,
          );
          if (s3ChecksumValue && s3ChecksumValue !== checksumBase64) {
            port.postMessage({
              type: "httpDownloadError",
              id,
              error: `Checksum mismatch: computed ${checksumBase64}, S3 returned ${s3ChecksumValue}`,
              code: "CHECKSUM_MISMATCH",
              name: "ChecksumValidationError",
            } satisfies HttpWorkerDownloadErrorMessage);
            return;
          }
        }

        // Post success result
        port.postMessage({
          type: "httpDownloadResult",
          id,
          statusCode: response.statusCode,
          headers: response.headers,
          bytesWritten,
          checksum: checksumBase64,
        } satisfies HttpWorkerDownloadResultMessage);
      } catch (err) {
        await fh.close().catch(() => {});
        throw err;
      }
    } catch (err) {
      port.postMessage({
        type: "httpDownloadError",
        id,
        error: (err as Error).message ?? String(err),
        code: (err as any).code,
        name: (err as Error).name,
      } satisfies HttpWorkerDownloadErrorMessage);
    }
  };

  // Pool of reusable ArrayBuffers for stream-mode downloads.
  // Buffers are allocated once and transferred between worker and main thread.
  const reusableBufferPool: ArrayBuffer[] = [];

  /**
   * Acquire a reusable ArrayBuffer of at least `size` bytes.
   * Uses Buffer.allocUnsafeSlow to get a dedicated (non-pooled) ArrayBuffer
   * that is safe to transfer without detaching unrelated Buffers.
   * @internal
   */
  function acquireTransferBuffer(size: number): ArrayBuffer {
    for (let i = 0; i < reusableBufferPool.length; i++) {
      if (reusableBufferPool[i].byteLength >= size) {
        return reusableBufferPool.splice(i, 1)[0];
      }
    }
    return Buffer.allocUnsafeSlow(size).buffer;
  }

  /**
   * Downloads a part into a worker-owned ArrayBuffer and transfers ownership
   * to the main thread via postMessage transfer list (zero-copy).
   * @internal
   */
  const processDownloadToTransfer = async (
    msg: HttpWorkerDownloadStreamMessage,
  ): Promise<void> => {
    const {
      id,
      request: serialized,
      expectedSize,
      rangeIndex,
      checksumAlgorithm,
    } = msg;

    try {
      // 1. Send the signed HTTP request
      const request = new HttpRequest({
        method: serialized.method,
        protocol: serialized.protocol,
        hostname: serialized.hostname,
        port: serialized.port,
        path: serialized.path,
        query: serialized.query,
        headers: serialized.headers,
      });

      const { response } = await handler!.handle(request);

      // 2. Acquire a buffer for assembling the response body
      const ab = acquireTransferBuffer(expectedSize);
      const view = new Uint8Array(ab, 0, expectedSize);

      // 3. Initialize inline CRC computation if requested
      let crcChecksum: Checksum | undefined;
      if (checksumAlgorithm) {
        crcChecksum = createCrcChecksum(checksumAlgorithm);
      }

      // 4. Stream response body chunks into the ArrayBuffer
      let bytesWritten = 0;

      if (response.body) {
        for await (const chunk of response.body) {
          const buf: Uint8Array =
            typeof chunk === "string" ? Buffer.from(chunk) : chunk;

          // Guard against writing beyond buffer boundary
          if (bytesWritten + buf.length > expectedSize) {
            port.postMessage({
              type: "httpDownloadError",
              id,
              error: `Bytes received (${bytesWritten + buf.length}) exceeds expected size (${expectedSize}) for range index ${rangeIndex}`,
              code: "BYTES_EXCEEDED",
              name: "DownloadValidationError",
            } satisfies HttpWorkerDownloadErrorMessage);
            return;
          }

          // Copy chunk into the ArrayBuffer (this copy happens on the WORKER thread)
          view.set(buf, bytesWritten);

          // Update CRC inline
          if (crcChecksum) {
            crcChecksum.update(buf);
          }

          bytesWritten += buf.length;
        }
      }

      // 5. Finalize checksum and validate against S3 header if present
      let checksumBase64: string | undefined;
      if (crcChecksum && checksumAlgorithm) {
        checksumBase64 = await finalizeChecksumToBase64(crcChecksum);

        const s3ChecksumValue = getChecksumHeaderValue(
          response.headers,
          checksumAlgorithm,
        );
        if (s3ChecksumValue && s3ChecksumValue !== checksumBase64) {
          port.postMessage({
            type: "httpDownloadError",
            id,
            error: `Checksum mismatch: computed ${checksumBase64}, S3 returned ${s3ChecksumValue}`,
            code: "CHECKSUM_MISMATCH",
            name: "ChecksumValidationError",
          } satisfies HttpWorkerDownloadErrorMessage);
          return;
        }
      }

      // 6. Send the buffer to main thread (zero-copy). The buffer becomes
      // detached on this worker.
      port.postMessage(
        {
          type: "httpDownloadStreamResult",
          id,
          rangeIndex,
          buffer: ab,
          byteLength: bytesWritten,
          statusCode: response.statusCode,
          headers: response.headers,
          checksum: checksumBase64,
        } satisfies HttpWorkerDownloadStreamResultMessage,
        [ab],
      );
    } catch (err) {
      port.postMessage({
        type: "httpDownloadError",
        id,
        error: (err as Error).message ?? String(err),
        code: (err as any).code,
        name: (err as Error).name,
      } satisfies HttpWorkerDownloadErrorMessage);
    }
  };

  port.on("message", (msg: HttpWorkerInboundMessage) => {
    if (msg.type === "done") {
      for (const fd of fdCache.values()) {
        try {
          closeSync(fd);
        } catch {
          /**
           * Safe to ignore: process.exit(0) below will close all file descriptors.
           * If we throw here, handler.destroy() would be skipped.
           */
        }
      }
      handler?.destroy();
      process.exit(0);
      return;
    }

    if (msg.type === "config") {
      const { maxSockets } = msg as HttpWorkerConfigMessage;
      handler = new NodeHttpHandler({
        httpsAgent: new httpsAgent({
          maxSockets,
          keepAlive: true,
          lookup: spreadLookup,
        }),
      });
      return;
    }

    if (
      msg.type === "httpRequestFromFile" ||
      msg.type === "httpRequestFromRAM"
    ) {
      processRequest(msg);
    }

    if (msg.type === "httpDownloadToFile") {
      processDownloadToFile(msg);
    }

    if (msg.type === "httpDownloadStream") {
      processDownloadToTransfer(msg);
    }

    if (msg.type === "returnBuffer") {
      // Main thread returned a consumed ArrayBuffer for reuse
      reusableBufferPool.push(msg.buffer);
    }
  });

  port.postMessage({ type: "ready" } satisfies HttpWorkerReadyMessage);
}
