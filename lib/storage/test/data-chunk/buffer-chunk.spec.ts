import { chunkFromBuffer } from "../../src/data-chunk/buffer-helper";
import { DataPart } from "../../src/data-chunk/yield-chunk";

describe(chunkFromBuffer.name, () => {
  const INPUT_STRING = "Farmer jack realized that big yellow quilts were expensive";

  describe("String chunking", () => {
    it("should come back with small sub buffers", async (done) => {
      const length = 10;
      const chunker = chunkFromBuffer(Buffer.from(INPUT_STRING), length);
      const result = await chunker.next();
      const dataChunk = result.value as DataPart;
      expect(dataChunk.PartNumber).toEqual(1);
      expect(dataChunk.Body.toString()).toEqual(INPUT_STRING.substring(0, length));

      done();
    });

    it("should come back with many chunks on subsequent calls", async (done) => {
      const length = 10;
      const chunker = chunkFromBuffer(Buffer.from(INPUT_STRING), length);

      let result = await chunker.next();
      let dataChunk = result.value as DataPart;
      expect(dataChunk.PartNumber).toEqual(1);
      expect(dataChunk.Body.toString()).toEqual(INPUT_STRING.substring(0, length));

      result = await chunker.next();
      dataChunk = result.value as DataPart;
      expect(dataChunk.PartNumber).toEqual(2);
      expect(dataChunk.Body.toString()).toEqual(INPUT_STRING.substring(length, length * 2));

      done();
    });

    it("should have the last sub buffer be the remainder length", async (done) => {
      const length = 30;
      const chunker = chunkFromBuffer(Buffer.from(INPUT_STRING), length);
      let result = await chunker.next();
      result = await chunker.next();
      const dataChunk = result.value as DataPart;
      expect(dataChunk.Body.toString()).toEqual(INPUT_STRING.substring(length));

      done();
    });
  });
});
