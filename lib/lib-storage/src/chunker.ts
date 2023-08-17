import { Buffer } from "buffer";
import { Readable } from "stream";

import { getChunkBuffer } from "./chunks/getChunkBuffer";
import { getChunkStream } from "./chunks/getChunkStream";
import { getDataReadable } from "./chunks/getDataReadable";
import { getDataReadableStream } from "./chunks/getDataReadableStream";
import { BodyDataTypes } from "./types";

export const getChunk = (data: BodyDataTypes, partSize: number) => {
  if (data instanceof Buffer) {
    return getChunkBuffer(data, partSize);
  } else if (data instanceof Readable) {
    return getChunkStream<Readable>(data, partSize, getDataReadable);
  } else if (data instanceof String || typeof data === "string" || data instanceof Uint8Array) {
    // chunk Strings, Uint8Array.
    return getChunkBuffer(Buffer.from(data), partSize);
  }
  if (typeof (data as any).stream === "function") {
    // approximate support for Blobs.
    return getChunkStream<ReadableStream>((data as any).stream(), partSize, getDataReadableStream);
  } else if (data instanceof ReadableStream) {
    return getChunkStream<ReadableStream>(data, partSize, getDataReadableStream);
  } else {
    throw new Error(
      "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."
    );
  }
};
