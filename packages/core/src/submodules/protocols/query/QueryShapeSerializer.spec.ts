import { NumericValue } from "@smithy/core/serde";
import type { TimestampDateTimeSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { widget } from "../test-schema.spec";
import { QueryShapeSerializer } from "./QueryShapeSerializer";

describe(QueryShapeSerializer.name, () => {
  it("serializes data to Query", async () => {
    const serializer = new QueryShapeSerializer({
      timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
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
      `&blob=AAAAAQ%3D%3D&timestamp=0&bigint=10000000000000000000000054321&bigdecimal=0.10000000000000000000000054321`
    );
  });
});
