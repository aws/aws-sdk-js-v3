// eslint-disable-next-line n/prefer-node-protocol
import { Buffer } from "buffer";
import { lstatSync, ReadStream } from "node:fs";

export interface RawDataPart {
  partNumber: number;
  data: Uint8Array;
  lastPart?: boolean;
}

export const byteLength = (input: any): number | undefined => {
  if (input == null) {
    return 0;
  }
  if (typeof input === "string") {
    return Buffer.byteLength(input);
  }
  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  } else if (typeof input.start === "number" && typeof input.end === "number") {
    return input.end + 1 - input.start;
  } else if (input instanceof ReadStream) {
    try {
      return lstatSync(input.path).size;
    } catch {
      return undefined;
    }
  }
  return undefined;
};

interface Buffers {
  chunks: Uint8Array[];
  length: number;
}

async function* getChunkStream<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Uint8Array>
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  const currentBuffer: Buffers = { chunks: [], length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.byteLength;

    while (currentBuffer.length > partSize) {
      const dataChunk = currentBuffer.chunks.length > 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];
      yield { partNumber, data: dataChunk.subarray(0, partSize) };
      currentBuffer.chunks = [dataChunk.subarray(partSize)];
      currentBuffer.length = currentBuffer.chunks[0].byteLength;
      partNumber += 1;
    }
  }

  yield {
    partNumber,
    data: currentBuffer.chunks.length !== 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0],
    lastPart: true,
  };
}

async function* getChunkUint8Array(data: Uint8Array, partSize: number): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = partSize;

  while (endByte < data.byteLength) {
    yield { partNumber, data: data.subarray(startByte, endByte) };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }

  yield { partNumber, data: data.subarray(startByte), lastPart: true };
}

async function* getDataReadable(data: AsyncIterable<any>): AsyncGenerator<Uint8Array> {
  for await (const chunk of data) {
    if (Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) {
      yield chunk;
    } else {
      yield Buffer.from(chunk);
    }
  }
}

async function* getDataReadableStream(data: ReadableStream): AsyncGenerator<Uint8Array> {
  const reader = data.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
        yield value;
      } else {
        yield Buffer.from(value);
      }
    }
  } finally {
    reader.releaseLock();
  }
}

export const getChunk = (data: any, partSize: number): AsyncGenerator<RawDataPart, void, undefined> => {
  if (data instanceof Uint8Array) {
    return getChunkUint8Array(data, partSize);
  }
  if (data instanceof String || typeof data === "string") {
    return getChunkUint8Array(Buffer.from(data), partSize);
  }
  if (data instanceof ReadableStream) {
    return getChunkStream<ReadableStream>(data, partSize, getDataReadableStream);
  }
  if (typeof (data as any).stream === "function") {
    return getChunkStream<ReadableStream>((data as any).stream(), partSize, getDataReadableStream);
  }
  if (Symbol.asyncIterator in data || typeof data[Symbol.asyncIterator] === "function") {
    return getChunkStream<AsyncIterable<any>>(data, partSize, getDataReadable);
  }
  throw new Error(
    "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."
  );
};
