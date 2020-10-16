import { Buffer } from "buffer";
import { Readable } from "stream";

import { DEFAULT } from "../upload/defaults";
import { DataPart } from "./yield-chunk";

interface StreamChunk {
  Body: Buffer;
  ended: boolean;
}

export async function* chunkFromReadable(reader: Readable, chunkSize: number): AsyncGenerator<DataPart, void, unknown> {
  let partNumber = DEFAULT.MIN_PART_NUMBER;
  let oldBuffer = Buffer.from("");
  while (partNumber < DEFAULT.MAX_PART_NUMBER) {
    reader.resume();
    const result = await _chunkFromStream(reader, chunkSize, oldBuffer);
    reader.pause();

    yield {
      Body: result.Body.slice(0, chunkSize),
      PartNumber: partNumber,
    };
    oldBuffer = result.Body.slice(chunkSize) as Buffer;
    partNumber += 1;

    if (result.ended && oldBuffer.length == 0) {
      return;
    }
  }
  if (partNumber >= DEFAULT.MAX_PART_NUMBER) {
    throw `Exceeded ${DEFAULT.MAX_PART_NUMBER} parts, multipart upload failed`;
  }
}

function _chunkFromStream(stream: Readable, chunkSize: number, oldBuffer: Buffer): Promise<StreamChunk> {
  let currentChunk = oldBuffer;
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => {
      currentChunk = Buffer.concat([currentChunk, Buffer.from(chunk)]);
      if (currentChunk.length >= chunkSize) {
        resolve({
          Body: currentChunk,
          ended: false,
        });
      }
    });
    stream.on("error", reject);
    stream.on("end", () => {
      resolve({
        Body: currentChunk,
        ended: true,
      });
    });
  });
}
