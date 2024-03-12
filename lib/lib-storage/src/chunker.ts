import { Buffer } from "buffer"; // do not remove this import: Node.js buffer or buffer NPM module for browser.
import { Readable } from "stream";

import { getChunkStream } from "./chunks/getChunkStream";
import { getChunkUint8Array } from "./chunks/getChunkUint8Array";
import { getDataReadable } from "./chunks/getDataReadable";
import { getDataReadableStream } from "./chunks/getDataReadableStream";
import { BodyDataTypes } from "./types";
import type { RawDataPart } from "./Upload";

export const getChunk = (data: BodyDataTypes, partSize: number): AsyncGenerator<RawDataPart, void, undefined> => {
  if (data instanceof Uint8Array) {
    // includes Buffer (extends Uint8Array)
    return getChunkUint8Array(data, partSize);
  }

  if (data instanceof Readable) {
    return getChunkStream<Readable>(data, partSize, getDataReadable);
  }

  if (data instanceof String || typeof data === "string") {
    return getChunkUint8Array(Buffer.from(data), partSize);
  }

  if (typeof (data as any).stream === "function") {
    // approximate support for Blobs.
    return getChunkStream<ReadableStream>((data as any).stream(), partSize, getDataReadableStream);
  }

  if (data instanceof ReadableStream) {
    return getChunkStream<ReadableStream>(data, partSize, getDataReadableStream);
  }

  throw new Error(
    "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."
  );
};
