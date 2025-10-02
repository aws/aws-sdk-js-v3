import { describe, expect, test as it } from "vitest";

import { byteLength } from "../byteLength";
import { BYTE_LENGTH_SOURCE, byteLengthSource } from "../byteLengthSource";
import { RawDataPart } from "../Upload";
import { getChunkUint8Array } from "./getChunkUint8Array";

describe(getChunkUint8Array.name, () => {
  [
    { type: "Buffer", getBuffer: (size: number) => Buffer.from("#".repeat(size)) },
    { type: "Uint8Array", getBuffer: (size: number) => Uint8Array.from(Buffer.from("#".repeat(size))) },
  ].forEach(({ getBuffer, type }) => {
    describe(`${type} chunking`, () => {
      it("should come back with small sub buffers", async () => {
        const chunklength = 100;
        const totalLength = 1000;
        const buffer = getBuffer(totalLength);
        const chunker = getChunkUint8Array(buffer, chunklength);

        let chunkNum = 0;
        const expectedNumberOfChunks = totalLength / chunklength;
        for await (const chunk of chunker) {
          chunkNum += 1;
          expect(byteLength(chunk.data)).toEqual(chunklength);
          expect(byteLengthSource(chunk.data)).toEqual(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
          expect(chunk.partNumber).toEqual(chunkNum);
          if (chunkNum < expectedNumberOfChunks) {
            expect(chunk.lastPart).toBe(undefined);
          } else {
            expect(chunk.lastPart).toBe(true);
          }
        }

        expect(chunkNum).toEqual(expectedNumberOfChunks);
      });

      it("should come back with the last chunk the remainder size", async () => {
        const chunklength = 1000;
        const totalLength = 2200;
        const buffer = getBuffer(totalLength);

        const chunker = getChunkUint8Array(buffer, chunklength);
        const chunks = [] as RawDataPart[];
        for await (const chunk of chunker) {
          chunks.push(chunk);
        }

        expect(chunks.length).toEqual(3);
        expect(byteLength(chunks[0].data)).toBe(chunklength);
        expect(byteLengthSource(chunks[0].data)).toEqual(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
        expect(chunks[0].lastPart).toBe(undefined);
        expect(byteLength(chunks[1].data)).toBe(chunklength);
        expect(byteLengthSource(chunks[1].data)).toEqual(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
        expect(chunks[1].lastPart).toBe(undefined);
        expect(byteLength(chunks[2].data)).toBe(totalLength % chunklength);
        expect(byteLengthSource(chunks[2].data)).toEqual(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
        expect(chunks[2].lastPart).toBe(true);
      });

      it("should come back with one chunk if it is a small buffer", async () => {
        const chunklength = 1000;
        const totalLength = 200;
        const buffer = getBuffer(totalLength);

        const chunker = getChunkUint8Array(buffer, chunklength);
        const chunks = [] as RawDataPart[];
        for await (const chunk of chunker) {
          chunks.push(chunk);
        }

        expect(chunks.length).toEqual(1);
        expect(byteLength(chunks[0].data)).toBe(totalLength % chunklength);
        expect(byteLengthSource(chunks[0].data)).toEqual(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
        expect(chunks[0].lastPart).toBe(true);
      });
    });
  });
});
