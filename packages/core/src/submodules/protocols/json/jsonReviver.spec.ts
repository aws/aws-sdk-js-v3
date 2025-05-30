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
});
