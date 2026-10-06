// eslint-disable-next-line n/prefer-node-protocol
import { Buffer } from "buffer";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import type { RawDataPart } from "../Upload";
import { getChunkStream } from "./getChunkStream";

async function* fromArray(chunks: Uint8Array[]): AsyncGenerator<Uint8Array> {
  for (const chunk of chunks) {
    yield chunk;
  }
}

const collect = async (chunks: Uint8Array[], partSize: number): Promise<RawDataPart[]> => {
  const parts: RawDataPart[] = [];
  for await (const part of getChunkStream(chunks, partSize, fromArray)) {
    parts.push(part);
  }
  return parts;
};

const sequential = (length: number, offset = 0): Uint8Array => {
  const out = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    out[i] = (offset + i) % 251;
  }
  return out;
};

const toBytes = (data: RawDataPart["data"]): number[] => Array.from(data as Uint8Array);

const expectedParts = (input: Uint8Array[], partSize: number): number[][] => {
  const all = input.flatMap((c) => Array.from(c));
  const parts: number[][] = [];
  let offset = 0;
  while (all.length - offset > partSize) {
    parts.push(all.slice(offset, offset + partSize));
    offset += partSize;
  }
  parts.push(all.slice(offset));
  return parts;
};

const expectSameSplit = (parts: RawDataPart[], input: Uint8Array[], partSize: number) => {
  const expected = expectedParts(input, partSize);
  expect(parts.length).toEqual(expected.length);
  parts.forEach((part, i) => {
    expect(part.partNumber).toEqual(i + 1);
    expect(toBytes(part.data)).toEqual(expected[i]);
    expect(part.lastPart).toBe(i === expected.length - 1 ? true : undefined);
  });
};

describe(getChunkStream.name, () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("part splitting", () => {
    it("splits mixed chunk sizes at partSize", async () => {
      const input = [sequential(3, 0), sequential(7, 3), sequential(1, 10), sequential(15, 11), sequential(4, 26)];
      expectSameSplit(await collect(input, 10), input, 10);
    });

    it("handles input that is an exact multiple of partSize", async () => {
      const input = [sequential(5, 0), sequential(5, 5), sequential(10, 10)];
      const parts = await collect(input, 10);
      expectSameSplit(parts, input, 10);
      expect(parts.length).toEqual(2);
    });

    it("splits a single datum larger than several parts", async () => {
      const input = [sequential(35)];
      const parts = await collect(input, 10);
      expectSameSplit(parts, input, 10);
      expect(parts.length).toEqual(4);
    });

    it("yields one empty last part for an empty source", async () => {
      const parts = await collect([], 10);
      expect(parts.length).toEqual(1);
      expect(parts[0].partNumber).toEqual(1);
      expect(parts[0].lastPart).toBe(true);
      expect((parts[0].data as Uint8Array).byteLength).toEqual(0);
    });
  });

  describe("retention of backing stores", () => {
    it("copies a small view onto a large ArrayBuffer", async () => {
      const backing = new Uint8Array(8192);
      backing.set(sequential(50), 100);
      const view = new Uint8Array(backing.buffer, 100, 50);

      const parts = await collect([view], 1024);
      expect(parts.length).toEqual(1);
      const data = parts[0].data as Uint8Array;
      expect(data).not.toBe(view);
      expect(data.byteLength).toEqual(50);
      expect(data.buffer.byteLength).toEqual(50);
      expect(toBytes(data)).toEqual(Array.from(sequential(50)));
      expect(Buffer.isBuffer(data)).toBe(false);
    });

    it("copies a small pooled Buffer into a non-pooled Buffer", async () => {
      const pooled = Buffer.from("#".repeat(50));
      expect(pooled.buffer.byteLength).toBeGreaterThan(100);

      const parts = await collect([pooled], 1024);
      const data = parts[0].data as Uint8Array;
      expect(data).not.toBe(pooled);
      expect(Buffer.isBuffer(data)).toBe(true);
      expect(data.buffer.byteLength).toEqual(50);
      expect(data).toEqual(pooled);
    });

    it("does not copy a chunk that owns its backing store", async () => {
      const chunk = sequential(100);
      const parts = await collect([chunk], 1024);
      expect(parts.length).toEqual(1);
      expect(parts[0].data).toBe(chunk);
    });

    it("copies the remainder retained after a concat cut", async () => {
      const input = [sequential(6, 0), sequential(6, 6)];
      const parts = await collect(input, 10);
      expectSameSplit(parts, input, 10);
      const last = parts[1].data as Uint8Array;
      expect(last.byteLength).toEqual(2);
      expect(last.buffer.byteLength).toEqual(2);
    });

    it("copies the remainder of a large owned datum only once", async () => {
      const allocSpy = vi.spyOn(Buffer, "allocUnsafeSlow");
      // Buffer.alloc is not pooled, so the datum owns its backing store.
      const datum = Buffer.alloc(35);
      datum.set(sequential(35));
      const input = [datum];
      const parts = await collect(input, 10);
      expectSameSplit(parts, input, 10);

      // full parts are views on the original datum, not copies.
      for (const part of parts.slice(0, 3)) {
        expect((part.data as Uint8Array).buffer).toBe(input[0].buffer);
      }
      const last = parts[3].data as Uint8Array;
      expect(last.byteLength).toEqual(5);
      expect(last.buffer.byteLength).toBeLessThanOrEqual(2 * last.byteLength);
      expect(allocSpy).toHaveBeenCalledTimes(1);
      expect(allocSpy).toHaveBeenCalledWith(5);
    });

    it("bounds the backing memory retained while a part accumulates", async () => {
      const concatSpy = vi.spyOn(Buffer, "concat");
      const count = 2_000;
      const size = 50;
      const input: Uint8Array[] = [];
      for (let i = 0; i < count; i++) {
        const slab = new Uint8Array(8192);
        slab.set(sequential(size, i), 0);
        input.push(new Uint8Array(slab.buffer, 0, size));
      }

      const parts = await collect(input, 5 * 1024 * 1024);
      expectSameSplit(parts, input, 5 * 1024 * 1024);

      expect(concatSpy).toHaveBeenCalledTimes(1);
      const retained = concatSpy.mock.calls[0][0] as Uint8Array[];
      expect(retained.length).toEqual(count);
      const backingBytes = retained.reduce((sum, c) => sum + c.buffer.byteLength, 0);
      expect(backingBytes).toBeLessThanOrEqual(2 * count * size);
    });
  });
});
