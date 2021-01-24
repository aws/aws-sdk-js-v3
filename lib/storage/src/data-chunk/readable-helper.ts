import { Buffer } from "buffer";
import { Readable } from "stream";

import { DEFAULT } from "../upload/defaults";
import { DataPart } from "./yield-chunk";

type Buffers = {
  chunks: Buffer[];
  length: number;
};

export async function* chunkFromReadable(reader: Readable, chunkSize: number): AsyncGenerator<DataPart, void, unknown> {
  let partNumber = DEFAULT.MIN_PART_NUMBER;
  const buf: Buffers = { chunks: [], length: 0 };
  for await (const chunk of reader) {
    const nextChunk = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    buf.chunks.push(nextChunk);
    buf.length += nextChunk.length;

    while (buf.length >= chunkSize) {
      yield {
        Body: _chunkFromStream(buf, chunkSize),
        PartNumber: partNumber,
      };
      partNumber += 1;
      if (partNumber >= DEFAULT.MAX_PART_NUMBER) {
        throw `Exceeded ${DEFAULT.MAX_PART_NUMBER} parts, multipart upload failed`;
      }
    }
  }

  if (buf.length || partNumber === DEFAULT.MIN_PART_NUMBER)
    yield {
      Body: _chunkFromStream(buf, chunkSize),
      PartNumber: partNumber,
    };
}

function _chunkFromStream(buf: Buffers, chunkSize: number): Buffer {
  let bodyLen = 0;
  const chunk: Buffer[] = [];
  while (buf.chunks.length && bodyLen < chunkSize) {
    const nextLen = buf.chunks[0].length;
    if (nextLen <= chunkSize - bodyLen) {
      bodyLen += nextLen;
      chunk.push(buf.chunks.shift()!);
    } else {
      const slice = buf.chunks[0].slice(0, chunkSize - bodyLen);
      chunk.push(slice);
      bodyLen += slice.length;
      buf.chunks.splice(0, 1, buf.chunks[0].slice(slice.length));
    }
  }
  buf.length -= bodyLen;
  return Buffer.concat(chunk);
}
