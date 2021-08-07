import { Readable } from "stream";
import { byteLength } from "../bytelength";
import { getChunkStream as chunkFromReadable } from "./getChunkStream";
import { getDataReadable } from "./getDataReadable";
import { RawDataPart as DataPart } from "../Upload";

const fs = require("fs");

describe(chunkFromReadable.name, () => {
  // larger than the 5mb min chunk size.
  const _6MB = 1024 * 1024 * 6;

  const getUnknownEnding = async function* (chunksize: number, totalchunks: number) {
    for (let index = 0; index < totalchunks; index++) {
      yield "#".repeat(chunksize);
    }
  };

  const getChunks = async (
    streamYieldSize: number,
    streamYieldCount: number,
    partsize: number
  ): Promise<DataPart[]> => {
    const stream = Readable.from(getUnknownEnding(streamYieldSize, streamYieldCount));
    const chunks: DataPart[] = [];
    const chunker = chunkFromReadable<Readable>(stream, partsize, getDataReadable);

    for await (const chunk of chunker) {
      chunks.push(chunk);
    }
    return chunks;
  };

  it("should return chunks of a specific size", async (done) => {
    const chunks = await getChunks(58, 1, 20);

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

  it("should properly chunk a file", async (done) => {
    const fileStream = fs.createReadStream(__dirname + "/sample.file");
    const chunks: DataPart[] = [];
    const chunker = chunkFromReadable<Readable>(fileStream, _6MB, getDataReadable);
    for await (const chunk of chunker) {
      chunks.push(chunk);
    }

    expect(chunks.length).toBe(1);
    expect(byteLength(chunks[0].data)).toEqual(byteLength(fileStream));
    expect(chunks[0].partNumber).toEqual(1);
    expect(chunks[0].lastPart).toBe(true);
    done();
  });

  it("should properly chunk a large stream of unknown size", async (done) => {
    //should go into 11 chunks. Each with ~6mb and the last with 3mb
    const chunks = await getChunks(_6MB / 2, 21, _6MB);

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
