import { NumericValue } from "@smithy/core/serde";
import { beforeAll, describe, expect, test as it } from "vitest";

import { jsonReviver } from "./jsonReviver";

describe(jsonReviver.name, () => {
  let contextSourceAvailable = false;

  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  const data = `
  {
    "zero": [0E00, 0, 0.00, -0, -0.00, -0E00],
    "smallInt": [-1, 1],
    "smallDecimal": [-0.1, -0.000000000000000000000010, 5E-324, 5.0E-324, 5.01E-324, -0.0001, 0.000000000000000000000000000100, 0.01, 0.1],
    "underflow": [5E-325, 1E-400, 1.5E-1000],
    "safeBoundary": [-9007199254740992, -9007199254740991, 9007199254740991, 9007199254740991.0, 9007199254740992, 9007199254740993],
    "nearOne": [1.0000000000000002, 1.00000000000000020, 1.0000000000000003, 1.0000000000000004],
    "bigint": [-1000000000000000000000000000000054321, 1000000000000000000000000000000054321],
    "bigDecimal": [-0.123450000000000000000000000000000000543210, 0.123450000000000000000000000000000000543210],
    "epochFractional": [-1.784316439424E9, -1.7843164394240000E9, 1.784316439424E9, 1.7843164394240000E9],
    "epochInt": [-1.2E90, -1E9, 1E9, 1.2E90],
    "negativeExp": -1.5e+3,
    "smallExp": 1.5e-3,
    "largeIntegerExp": [-1.230E1000, -1.23E100, 1.23E100, 1.230E1000],
    "largeIntExp": [-1E19, 1E19],
    "fractionalExpOutsideSafe": 1.123456789012345678E16,
    "trailingZeroes": [1, 2.0, 3.00, 4.000]
  }`;

  let parsedWithoutReviver: Record<string, unknown>;
  let parsed: Record<string, unknown>;

  beforeAll(() => {
    parsedWithoutReviver = JSON.parse(data);
    parsed = JSON.parse(data, jsonReviver);
  });

  it("control - without reviver", () => {
    expect(parsedWithoutReviver).toEqual({
      zero: [0, 0, 0, -0, -0, -0],
      smallInt: [-1, 1],
      smallDecimal: [
        -0.1, -0.00000000000000000000001, 5e-324, 5e-324, 5e-324, -0.0001, 0.0000000000000000000000000001, 0.01, 0.1,
      ],
      underflow: [0, 0, 0],
      safeBoundary: [
        -9007199254740992, -9007199254740991, 9007199254740991, 9007199254740991, 9007199254740992, 9007199254740992,
      ],
      nearOne: [1.0000000000000002, 1.0000000000000002, 1.0000000000000002, 1.0000000000000004],
      bigint: [-1e36, 1e36],
      bigDecimal: [-0.12345, 0.12345],
      epochFractional: [-1784316439.424, -1784316439.424, 1784316439.424, 1784316439.424],
      epochInt: [-1.2e90, -1000000000, 1000000000, 1.2e90],
      negativeExp: -1500,
      smallExp: 0.0015,
      largeIntegerExp: [-Infinity, -1.23e100, 1.23e100, Infinity],
      largeIntExp: [-10000000000000000000, 10000000000000000000],
      fractionalExpOutsideSafe: 11234567890123456,
      trailingZeroes: [1, 2, 3, 4],
    });
  });

  (contextSourceAvailable ? it : it.skip)("with reviver", () => {
    expect(parsed).toEqual({
      zero: [0, 0, 0, -0, -0, -0],
      smallInt: [-1, 1],
      smallDecimal: [
        -0.1,
        -1e-23,
        5e-324,
        5e-324,
        new NumericValue("5.01E-324", "bigDecimal"),
        -0.0001,
        1e-28,
        0.01,
        0.1,
      ],
      underflow: [
        new NumericValue("5E-325", "bigDecimal"),
        new NumericValue("1E-400", "bigDecimal"),
        new NumericValue("1.5E-1000", "bigDecimal"),
      ],
      safeBoundary: [
        -9007199254740992n,
        -9007199254740991,
        9007199254740991,
        9007199254740991,
        9007199254740992n,
        9007199254740993n,
      ],
      nearOne: [
        1.0000000000000002,
        1.0000000000000002,
        new NumericValue("1.0000000000000003", "bigDecimal"),
        1.0000000000000004,
      ],
      bigint: [-1000000000000000000000000000000054321n, 1000000000000000000000000000000054321n],
      bigDecimal: [
        new NumericValue("-0.123450000000000000000000000000000000543210", "bigDecimal"),
        new NumericValue("0.123450000000000000000000000000000000543210", "bigDecimal"),
      ],
      epochFractional: [-1784316439.424, -1784316439.424, 1784316439.424, 1784316439.424],
      epochInt: [-BigInt("12" + "0".repeat(89)), -1000000000, 1000000000, BigInt("12" + "0".repeat(89))],
      negativeExp: -1500,
      smallExp: 0.0015,
      largeIntegerExp: [
        -BigInt("123" + "0".repeat(998)),
        -BigInt("123" + "0".repeat(98)),
        BigInt("123" + "0".repeat(98)),
        BigInt("123" + "0".repeat(998)),
      ],
      largeIntExp: [-10000000000000000000n, 10000000000000000000n],
      fractionalExpOutsideSafe: new NumericValue("1.123456789012345678E16", "bigDecimal"),
      trailingZeroes: [1, 2, 3, 4],
    });
  });
});
