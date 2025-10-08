import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { widget } from "../test-schema.spec";
import { simpleFormatXml } from "./simpleFormatXml";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

describe(XmlShapeSerializer.name, () => {
  it("serializes data to Query", async () => {
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
});
