import { closeSync, openSync, readSync } from "node:fs";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { readExactFileSlice } from "./http-request-worker";

describe("readExactFileSlice (C7 - truncation / uninitialised memory guard)", () => {
  let dir: string;
  let filePath: string;
  const contents = Buffer.from("0123456789ABCDEF");

  beforeAll(async () => {
    dir = await mkdtemp(join(tmpdir(), "worker-read-slice-"));
    filePath = join(dir, "data.bin");
    await writeFile(filePath, contents);
  });

  afterAll(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("returns exactly the requested bytes on a full read", () => {
    const fd = openSync(filePath, "r");
    try {
      const slice = readExactFileSlice(readSync, fd, 4, 6, filePath);
      expect(slice.length).toBe(6);
      expect(slice.equals(contents.subarray(4, 10))).toBe(true);
    } finally {
      closeSync(fd);
    }
  });

  it("throws on a short read instead of returning uninitialised bytes past EOF", () => {
    const fd = openSync(filePath, "r");
    try {
      // Request more bytes than the file contains (simulates a file truncated
      // after its length was measured).
      expect(() => readExactFileSlice(readSync, fd, 10, 100, filePath)).toThrow(/short read/);
    } finally {
      closeSync(fd);
    }
  });

  it("throws when a mid-stream short read leaves the buffer tail unfilled", () => {
    // A fake read function that delivers fewer bytes than requested, then EOF.
    let calls = 0;
    const shortReader = ((_fd: number, buf: Buffer, bufOffset: number, len: number) => {
      if (calls++ === 0) {
        buf.fill(0x61, bufOffset, bufOffset + 2); // write 2 bytes
        return 2;
      }
      return 0; // EOF: remaining bytes would be uninitialised
    }) as unknown as typeof readSync;

    expect(() => readExactFileSlice(shortReader, 1, 0, 10, "/tmp/fake")).toThrow(
      /expected 10 bytes at offset 0 but only read 2/
    );
  });
});
