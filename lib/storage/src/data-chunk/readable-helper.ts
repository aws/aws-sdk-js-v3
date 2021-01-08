import { Buffer } from "buffer";
import { Readable } from "stream";

import { DEFAULT } from "../upload/defaults";
import { DataPart } from "./yield-chunk";

export async function* chunkFromReadable(reader: Readable, chunkSize: number): AsyncGenerator<DataPart, void, unknown> {
  let partNumber = DEFAULT.MIN_PART_NUMBER;
  let oldBuffer = Buffer.from("");
  while (partNumber < DEFAULT.MAX_PART_NUMBER) {
    let currentBuffer = oldBuffer;
    if (reader.readable) {
      reader.resume();
      currentBuffer = await _chunkFromStream(reader, chunkSize, oldBuffer);
      reader.pause();
    }

    yield {
      Body: currentBuffer.slice(0, chunkSize),
      PartNumber: partNumber,
    };
    oldBuffer = currentBuffer.slice(chunkSize) as Buffer;
    partNumber += 1;

    if (!reader.readable && oldBuffer.length == 0) {
      return;
    }
  }
  if (partNumber >= DEFAULT.MAX_PART_NUMBER) {
    throw `Exceeded ${DEFAULT.MAX_PART_NUMBER} parts, multipart upload failed`;
  }
}

function _chunkFromStream(stream: Readable, chunkSize: number, oldBuffer: Buffer): Promise<Buffer> {
  if (!stream.readable) {
    return Promise.resolve(oldBuffer);
  }

  let currentChunk = oldBuffer;
  return new Promise((resolve, reject) => {
    const cleanupListeners = () => {
      stream.removeAllListeners("data");
      stream.removeAllListeners("error");
      stream.removeAllListeners("end");
    };

    stream.on("data", (chunk) => {
      currentChunk = Buffer.concat([currentChunk, Buffer.from(chunk)]);
      if (currentChunk.length >= chunkSize || !stream.readable) {
        cleanupListeners();
        resolve(currentChunk);
      }
    });
    stream.on("error", (err) => {
      cleanupListeners();
      reject(err);
    });
    stream.on("end", () => {
      cleanupListeners();
      resolve(currentChunk);
    });
  });
}
