import { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { Buffer } from "buffer";
import { Readable } from "stream";
import { ReadableStream } from "web-streams-polyfill";

import { chunkFromBuffer } from "./buffer-helper";
import { chunkFromReadable } from "./readable-helper";
import { chunkFromReadableStream } from "./readable-stream-helper";

export interface DataPart {
  PartNumber: number;
  Body: Buffer;
}

export function yieldChunk(data: PutObjectCommandInput["Body"], size: number): AsyncGenerator<DataPart, void, unknown> {
  let dataChunk;
  if (data instanceof Readable) {
    dataChunk = chunkFromReadable(data, size);
  } else if (data instanceof ReadableStream) {
    dataChunk = chunkFromReadableStream(data, size);
  } else if (data instanceof Buffer) {
    dataChunk = chunkFromBuffer(data, size);
  } else if (typeof (data as Blob).stream === "function") {
    // approximate support for Blobs
    dataChunk = chunkFromReadableStream((data as any).stream(), size);
  } else if (data instanceof String || typeof data == "string" || data instanceof Uint8Array) {
    dataChunk = chunkFromBuffer(Buffer.from(data), size);
  } else {
    throw new Error("Data is unsupported format.");
  }
  return dataChunk;
}
