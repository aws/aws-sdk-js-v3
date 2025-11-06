import { NumericValue } from "@smithy/core/serde";
import type { TimestampDateTimeSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, widget } from "../test-schema.spec";
import { simpleFormatXml } from "./simpleFormatXml";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

describe(XmlShapeSerializer.name, () => {
  const serializer = new XmlShapeSerializer({
    xmlNamespace: "namespace",
    serviceNamespace: "namespace",
    timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
  });
  serializer.setSerdeContext({
    base64Encoder: (input: Uint8Array) => {
      return Buffer.from(input).toString("base64");
    },
  } as any);

  it("serializes data to Query", async () => {
    const data = {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    };
    serializer.write(widget, data);
    const serialization = serializer.flush();
    expect(simpleFormatXml(serialization as string)).toEqual(`<Struct xmlns="namespace">
  <blob>
    AAAAAQ==
  </blob>
  <timestamp>
    0
  </timestamp>
  <bigint>
    10000000000000000000000054321
  </bigint>
  <bigdecimal>
    0.10000000000000000000000054321
  </bigdecimal>
</Struct>`);
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

        timings.push(`${B - A} (XML length = ${serialization.length}, ${serialization.length / 1024 / (B - A)} kb/ms)`);
      }

      /**
       * No assertion here.
       * In the initial dual-pass implementation,
       * par time is 0 to 170ms for up to 426106 chars of XML. Up to 25 kb/ms. (kuhe's computer)
       */
      console.log("XmlShapeSerializer performance timings", timings);
    });
  });
});
