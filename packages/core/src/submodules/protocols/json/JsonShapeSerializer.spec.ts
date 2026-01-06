import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, widget } from "../test-schema.spec";
import { SinglePassJsonShapeSerializer } from "./experimental/SinglePassJsonShapeSerializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

describe(JsonShapeSerializer.name, () => {
  const serializer1 = new JsonShapeSerializer({
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  });

  const serializer2 = new SinglePassJsonShapeSerializer({
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
  });

  it("serializes data to JSON", async () => {
    const data = {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    };
    serializer1.write(widget, data);
    const serialization = serializer1.flush();
    expect(serialization).toEqual(
      `{"blob":"AAAAAQ==","timestamp":0,"bigint":10000000000000000000000054321,"bigdecimal":0.10000000000000000000000054321}`
    );
  });

  it("serializes $unknown union members", () => {
    serializer1.write(unionStruct, {
      union: {
        $unknown: [
          "unknownKey",
          {
            timestamp: new Date(0),
            blob: new Uint8Array([0, 1, 2, 3]),
          },
        ],
      },
    });
    const serialization = serializer1.flush();
    expect(serialization).toEqual(`{"union":{"unknownKey":{"timestamp":0,"blob":"AAECAw=="}}}`);
  });

  describe("performance baseline indicator", () => {
    for (const serializer of [serializer1, serializer2]) {
      it("should serialize objects", () => {
        const timings: string[] = [];
        const objects = [];

        // warmup
        for (let i = 0; i < 10; ++i) {
          const o = createNestingWidget(2 ** i);
          objects.push(o);
          serializer.write(nestingWidget, o);
          serializer.write(nestingWidget, o);
          serializer.write(nestingWidget, o);
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
         * par time is 0 to 30ms for up to 288899 chars of JSON. Up to 11 kb/ms. (kuhe's computer)
         *
         * In the single-pass implementation using string buildup,
         * par time is 0 to 51ms for up to 288899 chars of JSON. Up to 13 kb/ms. (kuhe's computer)
         */
        console.log(`${serializer.constructor.name} performance timings`, timings);
      });
    }
  }, 30_000);
});
