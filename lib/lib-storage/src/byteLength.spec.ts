import { describe, expect, it, vi } from "vitest";

import { BYTE_LENGTH_SOURCE, byteLengthSource } from "./byteLengthSource";
import { runtimeConfig } from "./runtimeConfig";

vi.mock("./runtimeConfig", () => ({
  runtimeConfig: {
    lstatSync: vi.fn(),
  },
}));

describe("byteLengthSource", () => {
  it("should return CONTENT_LENGTH when override is provided", () => {
    expect(byteLengthSource({}, 100)).toBe(BYTE_LENGTH_SOURCE.CONTENT_LENGTH);
  });

  it("should return EMPTY_INPUT for null input", () => {
    expect(byteLengthSource(null)).toBe(BYTE_LENGTH_SOURCE.EMPTY_INPUT);
  });

  it("should return EMPTY_INPUT for undefined input", () => {
    expect(byteLengthSource(undefined)).toBe(BYTE_LENGTH_SOURCE.EMPTY_INPUT);
  });

  it("should return STRING_LENGTH for string input", () => {
    expect(byteLengthSource("test")).toBe(BYTE_LENGTH_SOURCE.STRING_LENGTH);
  });

  it("should return TYPED_ARRAY for input with byteLength", () => {
    const input = new Uint8Array(10);
    expect(byteLengthSource(input)).toBe(BYTE_LENGTH_SOURCE.TYPED_ARRAY);
  });

  it("should return LENGTH for input with length property", () => {
    const input = { length: 10 };
    expect(byteLengthSource(input)).toBe(BYTE_LENGTH_SOURCE.LENGTH);
  });

  it("should return SIZE for input with size property", () => {
    const input = { size: 10 };
    expect(byteLengthSource(input)).toBe(BYTE_LENGTH_SOURCE.SIZE);
  });

  it("should return START_END_DIFF for input with start and end properties", () => {
    const input = { start: 0, end: 10 };
    expect(byteLengthSource(input)).toBe(BYTE_LENGTH_SOURCE.START_END_DIFF);
  });

  it("should return LSTAT for input with path that exists", () => {
    const input = { path: "/test/path" };
    vi.mocked(runtimeConfig.lstatSync).mockReturnValue({ size: 100 } as any);

    expect(byteLengthSource(input)).toBe(BYTE_LENGTH_SOURCE.LSTAT);
    expect(runtimeConfig.lstatSync).toHaveBeenCalledWith("/test/path");
  });

  it("should return undefined for input with path that throws error", () => {
    const input = { path: "/test/path" };
    vi.mocked(runtimeConfig.lstatSync).mockImplementation(() => {
      throw new Error("File not found");
    });

    expect(byteLengthSource(input)).toBeUndefined();
  });

  it("should return undefined for input with no matching properties", () => {
    const input = { foo: "bar" };
    expect(byteLengthSource(input)).toBeUndefined();
  });
});
