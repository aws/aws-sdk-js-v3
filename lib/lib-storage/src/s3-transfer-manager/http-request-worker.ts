/**
 * Worker thread that receives signed HTTP requests and sends them.
 * For file-based requests, reads the file slice, computes CRC32,
 * and sends the body in aws-chunked format with a trailing checksum.
 *
 * @internal
 */
import { HttpRequest } from "@smithy/core/protocols";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { open } from "node:fs/promises";
import { Agent as httpsAgent } from "node:https";
import { parentPort } from "node:worker_threads";
import { crc32 } from "node:zlib";

import type {
  HttpWorkerConfigMessage,
  HttpWorkerErrorMessage,
  HttpWorkerInboundMessage,
  HttpWorkerReadyMessage,
  HttpWorkerRequestMessage,
  HttpWorkerResponseMessage,
} from "./worker-http-handler";

function toBase64(n: number): string {
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt32BE(n >>> 0, 0);
  return buf.toString("base64");
}

if (parentPort) {
  let handler: NodeHttpHandler | undefined;
  const port = parentPort;

  const readFileSlice = async (filePath: string, offset: number, length: number): Promise<Buffer> => {
    const fh = await open(filePath, "r");
    try {
      const buffer = Buffer.allocUnsafe(length);
      await fh.read(buffer, 0, length, offset);
      return buffer;
    } finally {
      await fh.close();
    }
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
        const fileData = await readFileSlice(msg.filePath, msg.offset, msg.length);

        if (msg.checksumAlgorithm && msg.checksumHeader) {
          // Compute checksum and wrap in aws-chunked framing with trailing checksum.
          const crcValue = crc32(fileData);
          const checksumValue = toBase64(crcValue);
          body = buildAwsChunkedBody(fileData, msg.checksumHeader, checksumValue);
        } else {
          // No checksum requested — send raw data.
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
      handler?.destroy();
      process.exit(0);
      return;
    }

    if (msg.type === "config") {
      const { maxSockets } = msg as HttpWorkerConfigMessage;
      handler = new NodeHttpHandler({
        httpsAgent: new httpsAgent({ maxSockets }),
      });
      return;
    }

    if (msg.type === "httpRequestFromFile" || msg.type === "httpRequestFromRAM") {
      processRequest(msg);
    }
  });

  port.postMessage({ type: "ready" } satisfies HttpWorkerReadyMessage);
}
