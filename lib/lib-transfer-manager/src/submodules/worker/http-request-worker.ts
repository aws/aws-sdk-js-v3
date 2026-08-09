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

interface HttpWorkerDownloadToFileMessage {
  type: "httpDownloadToFile";
  id: number;
  request: WorkerHttpRequest;
  filePath: string;
  offset: number;
  expectedLength: number;
  checksumAlgorithm?: string;
}

interface HttpWorkerDownloadResultMessage {
  type: "httpDownloadResult";
  id: number;
  statusCode: number;
  headers: Record<string, string>;
  bytesWritten: number;
  checksum?: string;
}

interface HttpWorkerDownloadErrorMessage {
  type: "httpDownloadError";
  id: number;
  error: string;
  code?: string;
  name?: string;
}

interface HttpWorkerConfigMessage {
  type: "config";
  maxSockets: number;
}

interface HttpWorkerDoneMessage {
  type: "done";
}

type HttpWorkerInboundMessage =
  | HttpWorkerRequestMessage
  | HttpWorkerDownloadToFileMessage
  | HttpWorkerConfigMessage
  | HttpWorkerDoneMessage;

interface HttpWorkerResponseMessage {
  type: "httpResponse";
  id: number;
  response: {
    statusCode: number;
    headers: Record<string, string>;
    body?: Uint8Array;
  };
}

interface HttpWorkerErrorMessage {
  type: "httpError";
  id: number;
  error: string;
  code?: string;
  name?: string;
}

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

      // 2. Resolve where and how much to write from the response's ContentRange.
      //
      // The header is authoritative: S3 permits multipart objects whose parts
      // differ in size, so the offset and length supplied by the caller are
      // derived from part 1 and are only a fallback for when the header is
      // missing. Trusting the header lets non-uniform objects download
      // correctly instead of being rejected as a mismatch.
      const contentRange = response.headers["content-range"];
      const range = parseContentRange(contentRange);
      const writeOffset = range ? range.start : offset;
      const targetLength = range ? range.end - range.start + 1 : expectedLength;

      // 3. Open the file with r+ flag (file is pre-allocated)
      const fh = await open(filePath, "r+");
      try {
        // 4. Initialize inline CRC computation if requested
        let crcChecksum: Checksum | undefined;
        if (checksumAlgorithm) {
          crcChecksum = createCrcChecksum(checksumAlgorithm);
        }

        // 5. Stream response body chunks to file at positioned offsets
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

        // 6. Validate bytesWritten matches the range's length
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

        // 7. Finalize checksum and validate against S3 header if present
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

        // 8. Post success result
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
  });

  port.postMessage({ type: "ready" } satisfies HttpWorkerReadyMessage);
}
