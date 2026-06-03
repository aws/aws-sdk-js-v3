import { describe, expect, test as it } from "vitest";

import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { PRIORITY_ORDER_ALGORITHMS } from "./types";

describe(getChecksumAlgorithmListForResponse.name, () => {
  const u1 = "UNKNOWNALGO1";
  const u2 = "UNKNOWNALGO2";
  const u3 = "UNKNOWNALGO3";

  it("returns empty if responseAlgorithms is empty", () => {
    expect(getChecksumAlgorithmListForResponse([])).toEqual([]);
  });

  it("returns unknown algorithms in their existing order if no priority information is available", () => {
    expect(getChecksumAlgorithmListForResponse([u1, u3, u2])).toEqual([u1, u3, u2]);
  });

  describe("returns list as per priority order", () => {
    it("when all algorithms are passed in reverse order", () => {
      expect(getChecksumAlgorithmListForResponse([...PRIORITY_ORDER_ALGORITHMS].reverse())).toEqual(
        PRIORITY_ORDER_ALGORITHMS
      );
    });

    it.each([...Array(PRIORITY_ORDER_ALGORITHMS.length).keys()].filter((num) => num !== 0))(
      "when subset of algorithms are passed in reverse order starting with element at '%s'",
      (start) => {
        const responseAlgorithms = PRIORITY_ORDER_ALGORITHMS.slice(start);
        expect(getChecksumAlgorithmListForResponse([...responseAlgorithms].reverse())).toEqual(responseAlgorithms);
      }
    );

    it.each([...Array(PRIORITY_ORDER_ALGORITHMS.length).keys()].filter((num) => num !== 0))(
      "when subset of algorithms are passed in reverse order ending with element at '%s' from last",
      (end) => {
        const responseAlgorithms = PRIORITY_ORDER_ALGORITHMS.slice(PRIORITY_ORDER_ALGORITHMS.length - end);
        expect(getChecksumAlgorithmListForResponse([...responseAlgorithms].reverse())).toEqual(responseAlgorithms);
      }
    );
  });

  it("does not ignore algorithms not present in the priority list. However, they receive lowest priority.", () => {
    expect(getChecksumAlgorithmListForResponse([u1, u3, ...PRIORITY_ORDER_ALGORITHMS, u2].reverse())).toEqual([
      ...PRIORITY_ORDER_ALGORITHMS,
      u2,
      u3,
      u1,
    ]);
    expect(getChecksumAlgorithmListForResponse([u2, ...PRIORITY_ORDER_ALGORITHMS, u3, u1].reverse())).toEqual([
      ...PRIORITY_ORDER_ALGORITHMS,
      u1,
      u3,
      u2,
    ]);
  });
});
