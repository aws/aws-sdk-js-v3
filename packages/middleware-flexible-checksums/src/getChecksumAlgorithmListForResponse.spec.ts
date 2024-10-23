import { describe, expect, test as it } from "vitest";

import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { PRIORITY_ORDER_ALGORITHMS } from "./types";

describe(getChecksumAlgorithmListForResponse.name, () => {
  const unknownAlgorithm = "UNKNOWNALGO";

  it("returns empty if responseAlgorithms is empty", () => {
    expect(getChecksumAlgorithmListForResponse([])).toEqual([]);
  });

  it("returns empty if contents of responseAlgorithms is not in priority order", () => {
    expect(getChecksumAlgorithmListForResponse([unknownAlgorithm])).toEqual([]);
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

  it("ignores algorithms not present in priority list", () => {
    expect(getChecksumAlgorithmListForResponse([unknownAlgorithm, ...PRIORITY_ORDER_ALGORITHMS].reverse())).toEqual(
      PRIORITY_ORDER_ALGORITHMS
    );
    expect(getChecksumAlgorithmListForResponse([...PRIORITY_ORDER_ALGORITHMS, unknownAlgorithm].reverse())).toEqual(
      PRIORITY_ORDER_ALGORITHMS
    );
  });
});
