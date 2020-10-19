import { Buffer } from "buffer";
import { ReadableStream } from "web-streams-polyfill";

import { DEFAULT } from "../upload/defaults";
import { DataPart } from "./yield-chunk";

interface StreamChunk {
  Body: Buffer;
  ended: boolean;
}

async function _getNextChunk(reader: ReadableStreamDefaultReader<any>): Promise<StreamChunk> {
  const { done, value } = await reader.read();
  return {
    Body: (!done && Buffer.from(value)) || Buffer.from(""),
    ended: done,
  };
}

export async function* chunkFromReadableStream(
  stream: ReadableStream,
  chunkSize: number
): AsyncGenerator<DataPart, void, unknown> {
  let partNumber = DEFAULT.MIN_PART_NUMBER;
  let runningBuffer = Buffer.from("");
  const reader = stream.getReader();
  let readerEnded = false;
  try {
    while (partNumber < DEFAULT.MAX_PART_NUMBER) {
      // when we can, fill the buffer
      while (runningBuffer.length < chunkSize && !readerEnded) {
        const { ended, Body } = await _getNextChunk(reader);
        readerEnded = ended;
        if (!ended) {
          runningBuffer = Buffer.concat([runningBuffer, Body]);
        }
      }

      yield {
        Body: runningBuffer.slice(0, chunkSize),
        PartNumber: partNumber,
      };
      runningBuffer = runningBuffer.slice(chunkSize);
      if (runningBuffer.length == 0) {
        break;
      }
      partNumber += 1;
    }
    if (partNumber >= DEFAULT.MAX_PART_NUMBER) {
      throw `Exceeded ${DEFAULT.MAX_PART_NUMBER} parts, multipart upload failed`;
    }
  } finally {
    reader.releaseLock();
  }
}
