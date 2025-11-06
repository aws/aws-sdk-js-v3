import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, widget } from "../test-schema.spec";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

describe(JsonShapeSerializer.name, () => {
  const serializer = new JsonShapeSerializer({
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  });
  serializer.setSerdeContext({
    base64Encoder: (input: Uint8Array) => {
      return Buffer.from(input).toString("base64");
    },
  } as any);

  it("serializes data to JSON", async () => {
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

  describe("performance baseline indicator", () => {
    it("should serialize objects", () => {
      const timings: string[] = [];
      const objects = [];

      // warmup
      for (let i = 0; i < 13; ++i) {
        const o = createNestingWidget(2 ** i);
        objects.push(o);
        serializer.write(nestingWidget, o);
        serializer.flush();
      }

      for (let i = 0; i < objects.length; ++i) {
        const o = objects[i];

        const A = performance.now();
        serializer.write(nestingWidget, o);
        const serialization = serializer.flush();
        const B = performance.now();

        timings.push(
          `${B - A} (JSON length = ${serialization.length}, ${serialization.length / 1024 / (B - A)} kb/ms)`
        );
      }

      /**
       * No assertion here.
       * In the initial dual-pass implementation,
       * par time is 0 to 30ms for up to 270392 chars of JSON. Up to 20 kb/ms. (kuhe's computer)
       */
      console.log("JsonShapeSerializer performance timings", timings);
    });
  });
});
