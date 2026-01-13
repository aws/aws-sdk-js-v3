import { NumericValue } from "@smithy/core/serde";
import type { TimestampDateTimeSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, unionStructControl, widget } from "../test-schema.spec";
import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

describe(XmlShapeDeserializer.name, () => {
  const deserializer = new XmlShapeDeserializer({
    httpBindings: true,
    serviceNamespace: "namespace",
    timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
    xmlNamespace: "namespace",
  });
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

  it("deserializes XML", async () => {
    const xml = `<Struct xmlns="namespace">
  <blob>QUFBQQ==</blob>
  <timestamp>0</timestamp>
  <bigint>10000000000000000000000054321</bigint>
  <bigdecimal>0.10000000000000000000000054321</bigdecimal>
</Struct>`;
    const result = await deserializer.read(widget, xml);
    expect(result).toEqual({
      blob: new Uint8Array([65, 65, 65, 65]),
      timestamp: new Date(0),
      bigint: BigInt("10000000000000000000000054321"),
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
    });
  });

  it("deserializes unknown union members", async () => {
    const xml = `<UnionStruct xmlns="namespace"><union><UK>UV</UK></union></UnionStruct>`;
    {
      const deserialization = await deserializer.read(unionStruct, xml);
      expect(deserialization).toEqual({
        union: {
          $unknown: ["UK", "UV"],
        },
      });
    }
    {
      const deserialization = await deserializer.read(unionStructControl, xml);
      expect(deserialization).toEqual({
        union: {},
      });
    }
  });

  describe("performance baseline indicator", () => {
    it("should deserialize XML strings", async () => {
      const timings: string[] = [];
      const strings = [];

      // warmup
      for (let i = 0; i < 10; ++i) {
        const o = createNestingWidget(2 ** i);
        serializer.write(nestingWidget, o);
        const json = serializer.flush();
        strings.push(json);
        await deserializer.read(nestingWidget, json);
      }

      for (const s of strings) {
        const A = performance.now();
        await deserializer.read(nestingWidget, s);
        const B = performance.now();

        timings.push(`${B - A} (XML length = ${s.length}, ${s.length / 1024 / (B - A)} kb/ms)`);
      }

      /**
       * No assertion here.
       * In the initial dual-pass implementation,
       * par time is 0 to 187ms for up to 905676 chars of XML. Up to 10 kb/ms. (kuhe's computer)
       */
      console.log("XmlShapeDeserializer performance timings", timings);
    });
  }, 30_000);
});
