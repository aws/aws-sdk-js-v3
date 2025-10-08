import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { widget } from "../test-schema.spec";
import { XmlShapeDeserializer } from "./XmlShapeDeserializer";

describe("", () => {
  it("placeholder", async () => {
    const xml = `<Struct xmlns="namespace">
  <blob>QUFBQQ==</blob>
  <timestamp>0</timestamp>
  <bigint>10000000000000000000000054321</bigint>
  <bigdecimal>0.10000000000000000000000054321</bigdecimal>
</Struct>`;
    const deserializer = new XmlShapeDeserializer({
      httpBindings: true,
      serviceNamespace: "namespace",
      timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
      xmlNamespace: "namespace",
    });

    const result = await deserializer.read(widget, xml);
    expect(result).toEqual({
      blob: new Uint8Array([65, 65, 65, 65]),
      timestamp: new Date(0),
      bigint: BigInt("10000000000000000000000054321"),
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
    });
  });
});
