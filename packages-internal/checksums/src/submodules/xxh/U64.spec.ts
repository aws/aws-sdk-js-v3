import { describe, expect, it } from "vitest";

import { m32, U64 } from "./U64";

describe("U64", () => {
  describe("init", () => {
    it("should create from set64", () => {
      const u = U64.create(1).write(0, 1, 2);
      expect(u.hi(0)).toBe(1);
      expect(u.lo(0)).toBe(2);
    });

    it("should overflow", () => {
      const u = U64.create(1).write(0, 1 + m32 + 1, 2 + m32 + 1);
      expect(u.hi(0)).toBe(1);
      expect(u.lo(0)).toBe(2);
    });
  });

  it("should copy64", () => {
    const u = U64.create(2).write(0, 1, 2);
    u.copy(0, 1);
    u.add(1, 0, 1);
    expect(u.hi(1)).toBe(1);
    expect(u.lo(1)).toBe(3);
    // original unchanged
    expect(u.hi(0)).toBe(1);
    expect(u.lo(0)).toBe(2);
  });

  describe("add", () => {
    it("should add without carry", () => {
      const u = U64.create(1).write(0, 0, 5);
      u.add(0, 0, 3);
      expect(u.hi(0)).toBe(0);
      expect(u.lo(0)).toBe(8);
    });

    it("should add with carry", () => {
      const u = U64.create(1).write(0, 0, m32);
      u.add(0, 0, 1);
      expect(u.hi(0)).toBe(1);
      expect(u.lo(0)).toBe(0);
      u.add(0, 0, 1);
      expect(u.hi(0)).toBe(1);
      expect(u.lo(0)).toBe(1);
      u.add(0, 1, m32);
      expect(u.hi(0)).toBe(3);
      expect(u.lo(0)).toBe(0);
    });
  });

  describe("mult", () => {
    it("should multiply", () => {
      const u = U64.create(1).write(0, 0, 2);
      u.multiply(0, 0, 3);
      expect(u.hi(0)).toBe(0);
      expect(u.lo(0)).toBe(6);
    });
  });

  describe("subtract", () => {
    it("should subtract without borrow", () => {
      const u = U64.create(1).write(0, 0, 10);
      u.subtract(0, 0, 3);
      expect(u.hi(0)).toBe(0);
      expect(u.lo(0)).toBe(7);
    });

    it("should subtract with borrow", () => {
      const u = U64.create(1).write(0, 1, 0);
      u.subtract(0, 0, 1);
      expect(u.hi(0)).toBe(0);
      expect(u.lo(0)).toBe(0xffffffff);
    });
  });

  describe("shift", () => {
    it("should left shift by 0", () => {
      const u = U64.create(1).write(0, 1, 2);
      u.left(0, 0);
      expect(u.hi(0)).toBe(1);
      expect(u.lo(0)).toBe(2);
    });

    it("should left shift by 1", () => {
      const u = U64.create(1).write(0, 0, 1);
      u.left(0, 1);
      expect(u.hi(0)).toBe(0);
      expect(u.lo(0)).toBe(2);
    });

    it("should left shift by 32", () => {
      const u = U64.create(1).write(0, 0, 5);
      u.left(0, 32);
      expect(u.hi(0)).toBe(5);
      expect(u.lo(0)).toBe(0);
    });

    describe("right", () => {
      it("should right shift by 0", () => {
        const u = U64.create(1).write(0, 1, 2);
        u.right(0, 0);
        expect(u.hi(0)).toBe(1);
        expect(u.lo(0)).toBe(2);
      });

      it("should right shift by 1", () => {
        const u = U64.create(1).write(0, 0, 2);
        u.right(0, 1);
        expect(u.hi(0)).toBe(0);
        expect(u.lo(0)).toBe(1);
      });

      it("should right shift by 32", () => {
        const u = U64.create(1).write(0, 5, 0);
        u.right(0, 32);
        expect(u.hi(0)).toBe(0);
        expect(u.lo(0)).toBe(5);
      });
    });
  });

  describe("xor", () => {
    it("should xor", () => {
      const a = 0b1001001010;
      const b = 0b0010011100;
      const c = a ^ b;

      const u = U64.create(1).write(0, a, c);
      u.xor(0, b, a);
      expect(u.hi(0)).toBe(c);
      expect(u.lo(0)).toBe(b);
    });
  });
});
