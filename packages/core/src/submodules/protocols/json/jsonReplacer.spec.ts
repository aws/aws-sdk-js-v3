import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { JsonReplacer } from "./jsonReplacer";

describe(JsonReplacer.name, () => {
  it("serializes bigint to JSON number", async () => {
    const jsonReplacer = new JsonReplacer();
    const data = {
      bigint: 1000000000000000000000000000054321n,
    };
    const serialized = jsonReplacer.replaceInJson(JSON.stringify(data, jsonReplacer.createReplacer(), 2));

    expect(serialized).toEqual(`{
  "bigint": 1000000000000000000000000000054321
}`);
  });

  it("serializes NumericValue to JSON number", async () => {
    const jsonReplacer = new JsonReplacer();
    const data = {
      numericValue: new NumericValue("0.1000000000000000000000000000054321", "bigDecimal"),
    };
    const serialized = jsonReplacer.replaceInJson(JSON.stringify(data, jsonReplacer.createReplacer(), 2));

    expect(serialized).toEqual(`{
  "numericValue": {
    "string": "0.1000000000000000000000000000054321",
    "type": "bigDecimal"
  }
}`);
  });

  it("has lifecycle validation", async () => {
    const jsonReplacer = new JsonReplacer();
    expect(() => jsonReplacer.replaceInJson("")).toThrow();
    jsonReplacer.createReplacer();
    expect(() => jsonReplacer.createReplacer()).toThrow();
    jsonReplacer.replaceInJson("");
    expect(() => jsonReplacer.replaceInJson("")).toThrow();
    expect(() => jsonReplacer.replaceInJson("")).toThrow();
    expect(() => jsonReplacer.createReplacer()).toThrow();
    expect(() => jsonReplacer.createReplacer()).toThrow();
  });
});
