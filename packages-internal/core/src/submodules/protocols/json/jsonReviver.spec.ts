import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { jsonReviver } from "./jsonReviver";

describe(jsonReviver.name, () => {
  let contextSourceAvailable = false;
  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  it("control suite without reviver", async () => {
    const data = `
    {
      "smallInt": 1,
      "smallDecimal": 1.1,
      "bigint": 1000000000000000000000000000000054321,
      "bigDecimal": 0.12345000000000000000000000000000000054321
    }`;

    const parsed = JSON.parse(data);
    expect(parsed.smallInt).toBe(1);
    expect(parsed.smallDecimal).toBe(1.1);
    expect(parsed.bigint).toBe(1e36);
    expect(parsed.bigDecimal).toEqual(0.12345);
  });

  (contextSourceAvailable ? it : it.skip)("handles large numbers if context source is available", async () => {
    const data = `
    {
      "smallInt": 1,
      "smallDecimal": 1.1,
      "bigint": 1000000000000000000000000000000054321,
      "bigDecimal": 0.12345000000000000000000000000000000054321
    }`;

    const parsed = JSON.parse(data, jsonReviver);
    expect(parsed.smallInt).toBe(1);
    expect(parsed.smallDecimal).toBe(1.1);
    expect(parsed.bigint).toBe(1000000000000000000000000000000054321n);
    expect(parsed.bigDecimal).toEqual(new NumericValue("0.12345000000000000000000000000000000054321", "bigDecimal"));
  });

  (contextSourceAvailable ? it.skip : it)("doesn't handle large numbers if context source is unavailable", async () => {
    const data = `
    {
      "smallInt": 1,
      "smallDecimal": 1.1,
      "bigint": 1000000000000000000000000000000054321,
      "bigDecimal": 0.12345000000000000000000000000000000054321
    }`;

    const parsed = JSON.parse(data, jsonReviver);
    expect(parsed.smallInt).toBe(1);
    expect(parsed.smallDecimal).toBe(1.1);
    expect(parsed.bigint).toBe(1e36);
    expect(parsed.bigDecimal).toEqual(0.12345);
  });

  // Regression: https://github.com/aws/aws-sdk-js-v3/issues/8224
  // Exponent notation is valid JSON (RFC 8259) and AWS services emit it
  // for epoch-second timestamps (e.g. ECS createdAt: 1.784316439424E9).
  (contextSourceAvailable ? it : it.skip)(
    "should pass through exponent notation numbers that round-trip exactly",
    async () => {
      const data = `
      {
        "epochFractional": 1.784316439424E9,
        "epochInt": 1E9,
        "negativeExp": -1.5e+3,
        "smallExp": 1.5e-3
      }`;

      const parsed = JSON.parse(data, jsonReviver);
      // These are exactly representable as JS numbers and should not become
      // NumericValue or BigInt.
      expect(parsed.epochFractional).toBe(1784316439.424);
      expect(typeof parsed.epochFractional).toBe("number");
      expect(parsed.epochInt).toBe(1000000000);
      expect(typeof parsed.epochInt).toBe("number");
      expect(parsed.negativeExp).toBe(-1500);
      expect(typeof parsed.negativeExp).toBe("number");
      expect(parsed.smallExp).toBe(0.0015);
      expect(typeof parsed.smallExp).toBe("number");
    }
  );

  // Large exponent numbers exceed MAX_SAFE_INTEGER and must NOT be passed through
  // as plain numbers — they should remain NumericValue/BigInt.
  // Note: the fractional exponent test (1.784316439424E9) is covered above in
  // the safe-range test. This tests large values outside safe range.
  (contextSourceAvailable ? it : it.skip)(
    "should preserve precision for large exponent numbers outside safe range",
    async () => {
      const data = `
      {
        "largeIntegerExp": 1.23E100,
        "largeIntExp": 1E19
      }`;

      const parsed = JSON.parse(data, jsonReviver);
      // 1.23E100 = 123 * 10^98, a whole integer (exponent >= fractional digits) → BigInt
      expect(typeof parsed.largeIntegerExp).toBe("bigint");
      expect(parsed.largeIntegerExp).toBe(BigInt(1.23e100));
      // 1E19 has no decimal point → BigInt
      expect(typeof parsed.largeIntExp).toBe("bigint");
      expect(parsed.largeIntExp).toBe(10000000000000000000n);
    }
  );

  // Fractional exponent outside safe range → NumericValue (bigDecimal).
  // 1.123456789012345678E16: 18 frac digits, exp 16 < 18 → fractional,
  // value > MAX_SAFE_INTEGER → NumericValue.
  // Requires @smithy/core with exponent-notation support in NumericValue
  // (smithy-lang/smithy-typescript#2184).
  (contextSourceAvailable ? it.skip : it.skip)(
    "should produce NumericValue for fractional exponent outside safe range",
    async () => {
      const data = `{ "val": 1.123456789012345678E16 }`;
      const parsed = JSON.parse(data, jsonReviver);
      expect(parsed.val).toBeInstanceOf(NumericValue);
      expect(parsed.val.string).toBe("1.123456789012345678E16");
    }
  );
});
