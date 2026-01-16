import { HeaderBag } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { hasHeaderWithPrefix } from "./hasHeaderWithPrefix";

describe(hasHeaderWithPrefix.name, () => {
  const mockHeaders: HeaderBag = {
    "header-prefix-lowercase-1": "header-value-1",
    "HEADER-PREFIX-UPPERCASE-2": "header-value-2",
  };

  describe("contains header prefix", () => {
    it("when headerPrefix is exact", () => {
      expect(hasHeaderWithPrefix("header-prefix-lowercase-", mockHeaders)).toBe(true);
    });

    it("when headerPrefix is in different case", () => {
      expect(hasHeaderWithPrefix("HEADER-PREFIX-LOWERCASE-", mockHeaders)).toBe(true);
    });

    it("when headerPrefix in headers is in different case", () => {
      expect(hasHeaderWithPrefix("header-prefix-uppercase-", mockHeaders)).toBe(true);
    });
  });

  it("doesn't contain header with headerPrefix", () => {
    expect(hasHeaderWithPrefix("header-prefix-3", mockHeaders)).toBe(false);
  });
});
