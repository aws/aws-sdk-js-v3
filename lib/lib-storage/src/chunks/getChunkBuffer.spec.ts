import { byteLength } from "../bytelength";
import { getChunkBuffer } from "./getChunkBuffer";

describe.only(getChunkBuffer.name, () => {
  const getBuffer = (size: number) => Buffer.from("#".repeat(size));

  describe("Buffer chunking", () => {
    it("should come back with small sub buffers", async (done) => {
      const chunklength = 100;
      const totalLength = 1000;
      const buffer = getBuffer(totalLength);
      const chunker = getChunkBuffer(buffer, chunklength);

      let chunkNum = 0;
      const expectedNumberOfChunks = totalLength / chunklength;
      for await (const chunk of chunker) {
        chunkNum += 1;
        expect(byteLength(chunk.data)).toEqual(chunklength);
        expect(chunk.partNumber).toEqual(chunkNum);
        if (chunkNum < expectedNumberOfChunks) {
          expect(chunk.lastPart).toBe(undefined);
        } else {
          expect(chunk.lastPart).toBe(true);
        }
      }

      expect(chunkNum).toEqual(expectedNumberOfChunks);
      done();
    });

    it("should come back with the last chunk the remainder size", async (done) => {
      const chunklength = 1000;
      const totalLength = 2200;
      const buffer = getBuffer(totalLength);

      const chunker = getChunkBuffer(buffer, chunklength);
      const chunks = [];
      for await (const chunk of chunker) {
        chunks.push(chunk);
      }

      expect(chunks.length).toEqual(3);
      expect(byteLength(chunks[0].data)).toBe(chunklength);
      expect(chunks[0].lastPart).toBe(undefined);
      expect(byteLength(chunks[1].data)).toBe(chunklength);
      expect(chunks[1].lastPart).toBe(undefined);
      expect(byteLength(chunks[2].data)).toBe(totalLength % chunklength);
      expect(chunks[2].lastPart).toBe(true);
      done();
    });

    it("should come back with one chunk if it is a small buffer", async (done) => {
      const chunklength = 1000;
      const totalLength = 200;
      const buffer = getBuffer(totalLength);

      const chunker = getChunkBuffer(buffer, chunklength);
      const chunks = [];
      for await (const chunk of chunker) {
        chunks.push(chunk);
      }

      expect(chunks.length).toEqual(1);
      expect(byteLength(chunks[0].data)).toBe(totalLength % chunklength);
      expect(chunks[0].lastPart).toBe(true);
      done();
    });
  });
});
