import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { convertToNative } from "./convertToNative";
import { unmarshall } from "./unmarshall";

vi.mock("./convertToNative");

describe("marshall", () => {
  const input = { a: "A" };

  beforeEach(() => {
    vi.mocked(convertToNative).mockReturnValue(input);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("calls convertToNative", () => {
    // @ts-ignore output mocked for testing
    expect(unmarshall(input)).toEqual(input);
    expect(convertToNative).toHaveBeenCalledTimes(1);
    expect(convertToNative).toHaveBeenCalledWith({ M: input }, undefined);
  });

  [false, true].forEach((wrapNumbers) => {
    it(`passes wrapNumbers=${wrapNumbers} to convertToNative`, () => {
      // @ts-ignore output mocked for testing
      expect(unmarshall(input, { wrapNumbers })).toEqual(input);
      expect(convertToNative).toHaveBeenCalledTimes(1);
      expect(convertToNative).toHaveBeenCalledWith({ M: input }, { wrapNumbers });
    });
  });
});
