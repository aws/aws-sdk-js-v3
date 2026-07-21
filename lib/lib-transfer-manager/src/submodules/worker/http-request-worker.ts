/**
 * Worker thread that receives signed HTTP requests and sends them.
 * For file-based requests, reads the file slice, computes CRC32,
 * and sends the body in aws-chunked format with a trailing checksum.
 *
 * @internal
 */
import { HttpRequest } from "@smithy/core/protocols";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import dns from "node:dns";
import { openSync, readSync, closeSync } from "node:fs";
import { Agent as httpsAgent } from "node:https";
import { parentPort } from "node:worker_threads";
import { crc32 } from "node:zlib";

/**
 * DNS spreading: resolve all A records and pick one at random per connection.
 */
const DNS_TTL_MS = 1000;
const dnsCache = new Map<string, { ips: string[]; ts: number }>();

function spreadLookup(hostname: string, options: any, callback: any): void {
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
    if (err || !ips || !ips.length) {
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

type HttpWorkerRequestMessage = HttpWorkerFileRequestMessage | HttpWorkerRAMRequestMessage;

interface HttpWorkerConfigMessage {
  type: "config";
  maxSockets: number;
}

interface HttpWorkerDoneMessage {
  type: "done";
}

type HttpWorkerInboundMessage = HttpWorkerRequestMessage | HttpWorkerConfigMessage | HttpWorkerDoneMessage;

interface HttpWorkerResponseMessage {
  type: "httpResponse";
  id: number;
  response: { statusCode: number; headers: Record<string, string>; body?: Uint8Array };
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

  const readFileSlice = (filePath: string, offset: number, length: number): Buffer => {
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

  const buildAwsChunkedBody = (data: Buffer, checksumHeader?: string, checksumValue?: string): Buffer => {
    const hexLen = data.byteLength.toString(16);
    const parts: Buffer[] = [Buffer.from(`${hexLen}\r\n`), data, Buffer.from("\r\n0\r\n")];
    if (checksumHeader && checksumValue) {
      parts.push(Buffer.from(`${checksumHeader}:${checksumValue}\r\n`));
    }
    parts.push(Buffer.from("\r\n"));
    return Buffer.concat(parts);
  };

  const processRequest = async (msg: HttpWorkerRequestMessage): Promise<void> => {
    const { id, request: serialized } = msg;

    try {
      let body: Buffer | undefined;

      if (msg.type === "httpRequestFromRAM") {
        const fileData = Buffer.from(msg.sharedBuffer, msg.offset, msg.length);

        if (msg.checksumAlgorithm && msg.checksumHeader) {
          const crcValue = crc32(fileData);
          const checksumValue = toBase64(crcValue);
          body = buildAwsChunkedBody(fileData, msg.checksumHeader, checksumValue);
        } else {
          body = fileData;
        }
      } else if (msg.type === "httpRequestFromFile") {
        const fileData = readFileSlice(msg.filePath, msg.offset, msg.length);

        if (msg.checksumAlgorithm && msg.checksumHeader) {
          const crcValue = crc32(fileData);
          const checksumValue = toBase64(crcValue);
          body = buildAwsChunkedBody(fileData, msg.checksumHeader, checksumValue);
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
        transferList
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

  port.on("message", (msg: HttpWorkerInboundMessage) => {
    if (msg.type === "done") {
      for (const fd of fdCache.values()) {
        try {
          closeSync(fd);
        } catch {
          /* ignore */
        }
      }
      handler?.destroy();
      process.exit(0);
      return;
    }

    if (msg.type === "config") {
      const { maxSockets } = msg as HttpWorkerConfigMessage;
      handler = new NodeHttpHandler({
        httpsAgent: new httpsAgent({ maxSockets, lookup: spreadLookup }),
      });
      return;
    }

    if (msg.type === "httpRequestFromFile" || msg.type === "httpRequestFromRAM") {
      processRequest(msg);
    }
  });

  port.postMessage({ type: "ready" } satisfies HttpWorkerReadyMessage);
}
