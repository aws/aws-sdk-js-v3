import { SCHEMA } from "@smithy/core/schema";
import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { widget } from "../test-schema.spec";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

describe(JsonShapeSerializer.name, () => {
  it("serializes data to JSON", async () => {
    const serializer = new JsonShapeSerializer({
      jsonName: true,
      timestampFormat: { default: SCHEMA.TIMESTAMP_EPOCH_SECONDS, useTrait: true },
    });
    serializer.setSerdeContext({
      base64Encoder: (input: Uint8Array) => {
        return Buffer.from(input).toString("base64");
      },
    } as any);

    const data = {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    };
    serializer.write(widget, data);
    const serialization = serializer.flush();
    expect(serialization).toEqual(
      `{"blob":"AAAAAQ==","timestamp":0,"bigint":10000000000000000000000054321,"bigdecimal":0.10000000000000000000000054321}`
    );
  });
});
