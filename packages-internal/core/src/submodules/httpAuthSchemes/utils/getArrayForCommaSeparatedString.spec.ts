import { describe, expect, it } from "vitest";

import { getArrayForCommaSeparatedString } from "./getArrayForCommaSeparatedString";

describe(getArrayForCommaSeparatedString.name, () => {
  it("should return empty array for empty string", () => {
    expect(getArrayForCommaSeparatedString("")).toEqual([]);
  });

  it("should return empty array for null/undefined input", () => {
    expect(getArrayForCommaSeparatedString(null as unknown as string)).toEqual([]);
    expect(getArrayForCommaSeparatedString(undefined as unknown as string)).toEqual([]);
  });

  it("should split comma separated string into array", () => {
    expect(getArrayForCommaSeparatedString("a,b,c")).toEqual(["a", "b", "c"]);
  });

  it("should trim whitespace from array items", () => {
    expect(getArrayForCommaSeparatedString(" a , b , c ")).toEqual(["a", "b", "c"]);
  });

  it("should handle single item", () => {
    expect(getArrayForCommaSeparatedString("a")).toEqual(["a"]);
  });
});
