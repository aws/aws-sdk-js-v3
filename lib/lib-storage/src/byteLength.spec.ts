import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { byteLength } from "./byteLength";

describe("byteLength", () => {
  it("should handle null and undefined input", () => {
    expect(byteLength(null)).toBe(0);
    expect(byteLength(undefined)).toBe(0);
  });

  describe("strings", () => {
    it("empty", () => {
      expect(byteLength("")).toBe(0);
    });

    it("should return correct length for ASCII characters", () => {
      expect(byteLength("hello")).toBe(5);
      expect(byteLength("12345")).toBe(5);
      expect(byteLength("!@#$%")).toBe(5);
    });

    it("should return correct length for unicode characters", () => {
      expect(byteLength("😀")).toBe(4);
    });

    it("should handle mixed ASCII and unicode characters", () => {
      expect(byteLength("hello 世界")).toBe(12);
      expect(byteLength("hi 😀")).toBe(7);
    });
  });

  describe("byte arrays", () => {
    it("should handle Uint8Array", () => {
      expect(byteLength(new Uint8Array([1, 2, 3]))).toBe(3);
      expect(byteLength(new Uint8Array([]))).toBe(0);
    });

    it("should handle Buffer", () => {
      expect(byteLength(Buffer.from([1, 2, 3]))).toBe(3);
      expect(byteLength(Buffer.from([]))).toBe(0);
    });
  });

  describe("things with length or size properties", () => {
    it("should handle arrays", () => {
      expect(byteLength([1, 2, 3])).toBe(3);
      expect(byteLength([])).toBe(0);
    });

    it("should handle objects with length property", () => {
      expect(byteLength({ length: 5 })).toBe(5);
      expect(byteLength({ length: 0 })).toBe(0);
    });

    it("should handle objects with size property", () => {
      expect(byteLength({ size: 10 })).toBe(10);
      expect(byteLength({ size: 0 })).toBe(0);
    });
  });

  describe("start end differentials", () => {
    it("should handle readable streams", () => {
      const stream = fs.createReadStream(__filename, {
        start: 1000,
        end: 1499,
      });
      expect(byteLength(stream)).toBe(500);
    });
  });

  describe("filestreams", () => {
    it("should handle readable streams", () => {
      const stream = fs.createReadStream(__filename);
      expect(byteLength(stream)).toBe(fs.statSync(__filename).size);
    });

    it("should follow symlinks and report the target file size", () => {
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lib-storage-byte-length-"));
      const target = path.join(dir, "target.bin");
      const link = path.join(dir, "link.bin");
      fs.writeFileSync(target, Buffer.alloc(5 * 1024 * 1024));
      fs.symlinkSync(target, link);

      const stream = fs.createReadStream(link);
      try {
        expect(byteLength(stream)).toBe(5 * 1024 * 1024);
        expect(byteLength(stream)).toBe(fs.statSync(link).size);
      } finally {
        stream.destroy();
      }
    });
  });
});
