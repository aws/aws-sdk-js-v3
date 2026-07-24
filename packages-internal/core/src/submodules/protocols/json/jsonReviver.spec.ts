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

  (contextSourceAvailable ? it : it.skip)("parses numbers in exponent notation", async () => {
    // AWS services serialize epoch-second timestamps this way, e.g. ECS DescribeServices.
    const data = `
    {
      "epochSeconds": 1.784316439424E9,
      "integral": 1E9,
      "lowercase": 1e9,
      "negative": -2.5E3,
      "fraction": 1.23E1
    }`;

    const parsed = JSON.parse(data, jsonReviver);
    expect(parsed.epochSeconds).toBe(1784316439.424);
    expect(parsed.integral).toBe(1000000000);
    expect(parsed.lowercase).toBe(1000000000);
    expect(parsed.negative).toBe(-2500);
    expect(parsed.fraction).toBe(12.3);
  });

  (contextSourceAvailable ? it : it.skip)("preserves precision of exponent notation values", async () => {
    const data = `
    {
      "smallMagnitude": 1.5E-10,
      "largeMagnitude": 1.2345678901234567890E30
    }`;

    const parsed = JSON.parse(data, jsonReviver);
    expect(parsed.smallMagnitude).toEqual(new NumericValue("0.00000000015", "bigDecimal"));
    expect(parsed.largeMagnitude).toBe(1234567890123456789000000000000n);
  });

  (contextSourceAvailable ? it : it.skip)("falls back to the parsed double for extreme exponents", async () => {
    const parsed = JSON.parse(`{ "high": 1e5000, "low": 1e-5000 }`, jsonReviver);
    expect(parsed.high).toBe(Infinity);
    expect(parsed.low).toBe(0);
  });
});
