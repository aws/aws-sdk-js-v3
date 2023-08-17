import { HeaderBag } from "@smithy/types";

import { hasHeader } from "./hasHeader";

describe(hasHeader.name, () => {
  const mockHeaders: HeaderBag = {
    "header-key-1": "header-value-1",
    "HEADER-KEY-2": "header-value-2",
  };

  describe("contains header", () => {
    it("when header to search is exact", () => {
      expect(hasHeader("header-key-1", mockHeaders)).toBe(true);
    });

    it("when header to search is in different case", () => {
      expect(hasHeader("HEADER-KEY-1", mockHeaders)).toBe(true);
    });

    it("when header in headers is in different case", () => {
      expect(hasHeader("header-key-2", mockHeaders)).toBe(true);
    });
  });

  it("doesn't contain header", () => {
    expect(hasHeader("header-key-3", mockHeaders)).toBe(false);
  });
});
