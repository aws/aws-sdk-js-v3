// polyfill exposes the same ReadableStream API as web, allowing easy testing
import { ReadableStream } from "web-streams-polyfill";

import { byteLength } from "../bytelength";
import { getChunkStream as chunkFromReadable } from "./getChunkStream";
import { getDataReadableStream } from "./getDataReadableStream";
import { RawDataPart as DataPart } from "../Upload";

describe("chunkFromReadable.name", () => {
  // larger than the 5mb min chunk size
  const _6MB = 1024 * 1024 * 6;

  const getStreamOfUnknownlength = (chunksize: number, totalchunks: number) =>
    new ReadableStream({
      start: async (controller) => {
        for (let index = 0; index < totalchunks; index++) {
          controller.enqueue("#".repeat(chunksize));
        }
        controller.close();
      },
    });

  const getChunks = async (
    streamYieldSize: number,
    streamYieldCount: number,
    partsize: number
  ): Promise<DataPart[]> => {
    const stream = getStreamOfUnknownlength(streamYieldSize, streamYieldCount);
    const chunks: DataPart[] = [];
    const chunker = chunkFromReadable<ReadableStream>(stream, partsize, getDataReadableStream);

    for await (const chunk of chunker) {
      chunks.push(chunk);
    }
    return chunks;
  };

  it("should a single chunk if the stream is smaller than partsize", async (done) => {
    let chunks = await getChunks(34, 2, 100);

    expect(chunks.length).toBe(1);
    expect(byteLength(chunks[0].data)).toEqual(68);
    expect(chunks[0].partNumber).toEqual(1);
    expect(chunks[0].lastPart).toBe(true);

    done();
  });

  it("should return chunks of a specific size", async (done) => {
    let chunks = await getChunks(58, 1, 20);

    expect(chunks.length).toBe(3);
    expect(byteLength(chunks[0].data)).toEqual(20);
    expect(chunks[0].partNumber).toEqual(1);
    expect(chunks[0].lastPart).toBe(undefined);

    expect(byteLength(chunks[1].data)).toEqual(20);
    expect(chunks[1].partNumber).toEqual(2);
    expect(chunks[1].lastPart).toBe(undefined);

    expect(byteLength(chunks[2].data)).toEqual(18);
    expect(chunks[2].partNumber).toEqual(3);
    expect(chunks[2].lastPart).toBe(true);
    done();
  });

  it("should properly chunk a large stream of unknown size", async (done) => {
    let chunks = await getChunks(_6MB / 2, 21, _6MB);

    expect(chunks.length).toEqual(11);
    for (let index = 0; index < 10; index++) {
      expect(byteLength(chunks[index].data)).toEqual(_6MB);
      expect(chunks[index].lastPart).toBe(undefined);
    }
    expect(byteLength(chunks[10].data)).toEqual(_6MB / 2);
    expect(chunks[10].lastPart).toBe(true);
    done();
  });
});
