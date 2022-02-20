import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { PRIORITY_ORDER_ALGORITHMS } from "./types";

describe(getChecksumAlgorithmListForResponse.name, () => {
  it("returns empty if responseAlgorithms is empty", () => {
    expect(getChecksumAlgorithmListForResponse([])).toEqual([]);
  });

  it("returns empty if contents of responseAlgorithms is not in priority order", () => {
    expect(getChecksumAlgorithmListForResponse(["UNKNOWNALGO"])).toEqual([]);
  });

  it("returns list as per priority order", () => {
    const responseAlgorithms = [...PRIORITY_ORDER_ALGORITHMS];
    expect(getChecksumAlgorithmListForResponse(responseAlgorithms.reverse())).toEqual(PRIORITY_ORDER_ALGORITHMS);
  });
});
