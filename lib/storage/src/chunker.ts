import stream from "stream";
import { Buffer } from "buffer";

import { BodyDataTypes } from "./types";
import { getChunk as getChunkBuffer } from "./chunks/getChunkBuffer";
import { getChunk as getChunkStream } from "./chunks/getChunkStream";
import { getNextData as getNextDataReadableStream } from "./chunks/getDataReadableStream";
import { getNextData as getNextDataReadable } from "./chunks/getDataReadable";

export const getChunk = (data: BodyDataTypes, partSize: number) => {
  if (data instanceof Buffer) {
    return getChunkBuffer(data, partSize);
  } else if (data instanceof stream.Readable) {
    return getChunkStream<stream.Readable>(data, partSize, getNextDataReadable);
  } else if (data instanceof String || typeof data == "string" || data instanceof Uint8Array) {
    // chunk Strings
    // chunk Uint8Array
    return getChunkBuffer(Buffer.from(data), partSize);
  }
  if (typeof (data as any).stream === "function") {
    // approximate support for Blobs
    return getChunkStream<ReadableStream>((data as any).stream(), partSize, getNextDataReadableStream);
  } else if (data instanceof ReadableStream) {
    return getChunkStream<ReadableStream>(data, partSize, getNextDataReadableStream);
  } else {
    throw new Error(
      "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."
    );
  }
};
