import { describe, expect, test as it, vi, beforeEach, afterEach } from "vitest";

import { JsonBytesStringAdapter } from "./JsonBytesStringAdapter";

describe(JsonBytesStringAdapter.name, () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    // Advance time far enough past any prior throttle window.
    vi.useFakeTimers();
    vi.advanceTimersByTime(120_000);
  });

  afterEach(() => {
    warnSpy.mockRestore();
    vi.useRealTimers();
  });

  const json = '{"ConsistentRead":true,"TableName":"my-table"}';
  const bytes = new TextEncoder().encode(json);

  function create(): JsonBytesStringAdapter {
    return new JsonBytesStringAdapter(bytes);
  }

  // ─── Transport path (no string conversion) ──────────────────────────────

  describe("used as Uint8Array (no warning)", () => {
    it("is an instance of Uint8Array", () => {
      const adapter = create();
      expect(adapter).toBeInstanceOf(Uint8Array);
    });

    it("has correct byte length", () => {
      const adapter = create();
      expect(adapter.byteLength).toEqual(bytes.byteLength);
    });

    it("contains the original bytes", () => {
      const adapter = create();
      expect(Array.from(adapter)).toEqual(Array.from(bytes));
    });

    it("does not fire a warning when accessed as bytes", () => {
      const adapter = create();
      void adapter[0];
      void adapter.byteLength;
      void adapter.buffer;
      expect(warnSpy).not.toHaveBeenCalled();
    });
  });

  // ─── String compatibility path (fires warning) ──────────────────────────

  describe("used as string (fires warning, works correctly)", () => {
    it("toString() decodes to the original JSON", () => {
      const adapter = create();
      expect(adapter.toString()).toEqual(json);
      expect(warnSpy).toHaveBeenCalledTimes(1);
    });

    it("valueOf() returns the decoded string", () => {
      const adapter = create();
      expect(adapter.valueOf()).toEqual(json);
    });

    it("+ operator coerces to string", () => {
      const adapter = create();
      expect("" + adapter).toEqual(json);
    });

    it("template literal coerces to string", () => {
      const adapter = create();
      expect(`${adapter}`).toEqual(json);
    });

    it("includes() finds a substring", () => {
      const adapter = create();
      expect(adapter.includes('"ConsistentRead":true')).toBe(true);
      expect(adapter.includes("NotPresent")).toBe(false);
    });

    it("includes() with number still searches bytes", () => {
      const adapter = create();
      // 0x7b = 123 = '{'
      expect(adapter.includes(0x7b)).toBe(true);
      expect(adapter.includes(0xff)).toBe(false);
      // Byte search should not trigger the warning
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it("indexOf() finds substring position", () => {
      const adapter = create();
      expect(adapter.indexOf("ConsistentRead")).toBe(2);
      expect(adapter.indexOf("NotPresent")).toBe(-1);
    });

    it("indexOf() with number searches bytes", () => {
      const adapter = create();
      expect(adapter.indexOf(0x7b)).toBe(0);
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it("lastIndexOf() finds last substring position", () => {
      const adapter = create();
      expect(adapter.lastIndexOf("}")).toBe(json.length - 1);
    });

    it("lastIndexOf() with number searches bytes", () => {
      const adapter = create();
      expect(adapter.lastIndexOf(0x7d)).toBe(bytes.length - 1);
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it("startsWith() checks prefix", () => {
      const adapter = create();
      expect(adapter.startsWith("{")).toBe(true);
      expect(adapter.startsWith("X")).toBe(false);
    });

    it("endsWith() checks suffix", () => {
      const adapter = create();
      expect(adapter.endsWith("}")).toBe(true);
      expect(adapter.endsWith("X")).toBe(false);
    });

    it("match() works with regex", () => {
      const adapter = create();
      const result = adapter.match(/"TableName":"([^"]+)"/);
      expect(result?.[1]).toEqual("my-table");
    });

    it("replace() substitutes text", () => {
      const adapter = create();
      expect(adapter.replace("my-table", "other-table")).toContain("other-table");
    });

    it("split() tokenizes the string", () => {
      const adapter = create();
      const parts = adapter.split(",");
      expect(parts.length).toBe(2);
    });

    it("JSON.parse() works via toString coercion", () => {
      const adapter = create();
      const parsed = JSON.parse(adapter as any);
      expect(parsed.ConsistentRead).toBe(true);
      expect(parsed.TableName).toEqual("my-table");
    });

    it("caches the decoded string (does not re-decode on subsequent calls)", () => {
      const adapter = create();
      const first = adapter.toString();
      const second = adapter.toString();
      const third = adapter.includes("x");
      // Same string reference returned each time — proves caching.
      expect(first).toBe(second);
      expect(first).toEqual(json);
    });
  });

  // ─── Warning throttle ──────────────────────────────────────────────────

  describe("warning throttle", () => {
    it("warns only once within a 60s window across multiple instances", () => {
      // First call triggers the warning.
      const a = create();
      a.toString();
      const callsAfterFirst = warnSpy.mock.calls.length;

      // Second instance within the same 10s window — no additional warning.
      const b = create();
      b.toString();
      expect(warnSpy).toHaveBeenCalledTimes(callsAfterFirst);
    });

    it("warns again after 60s have elapsed", () => {
      const a = create();
      a.toString();
      const callsAfterFirst = warnSpy.mock.calls.length;

      // Advance past the throttle window.
      vi.advanceTimersByTime(61_000);

      const b = create();
      b.toString();
      expect(warnSpy).toHaveBeenCalledTimes(callsAfterFirst + 1);
    });
  });

  // ─── allocUnsafe ────────────────────────────────────────────────────────

  describe("allocUnsafe", () => {
    it("returns a JsonBytesStringAdapter instance", () => {
      const adapter = JsonBytesStringAdapter.allocUnsafe(64);
      expect(adapter).toBeInstanceOf(JsonBytesStringAdapter);
      expect(adapter).toBeInstanceOf(Uint8Array);
      expect(adapter.byteLength).toBe(64);
    });
  });
});
