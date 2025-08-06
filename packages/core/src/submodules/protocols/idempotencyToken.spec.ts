import { CborShapeSerializer } from "@smithy/core/cbor";
import { sim, struct } from "@smithy/core/schema";
import { describe, expect, test as it } from "vitest";

import { JsonShapeSerializer } from "./json/JsonShapeSerializer";
import { QueryShapeSerializer } from "./query/QueryShapeSerializer";
import { XmlShapeSerializer } from "./xml/XmlShapeSerializer";

describe("idempotencyToken", () => {
  const structureSchema = struct(
    "ns",
    "StructureWithIdempotencyToken",
    0,
    ["idempotencyToken", "plain"],
    [sim("ns", "IdempotencyTokenString", 0, 0b0100), sim("ns", "PlainString", 0, 0b0000)]
  );

  it("all ShapeSerializer implementations should generate an idempotency token if no input was provided by the caller", () => {
    const serializers = [
      new JsonShapeSerializer({
        timestampFormat: { default: 7, useTrait: true },
        jsonName: true,
      }),
      new QueryShapeSerializer({
        timestampFormat: { default: 7, useTrait: true },
      }),
      new XmlShapeSerializer({
        serviceNamespace: "ServiceNamespace",
        timestampFormat: { default: 7, useTrait: true },
        xmlNamespace: "XmlNamespace",
      }),
      new CborShapeSerializer(),
    ];

    const expectedSerializations = [
      /{"idempotencyToken":"[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}","plain":"potatoes"}/,
      /&idempotencyToken=[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}&plain=potatoes/,
      /<StructureWithIdempotencyToken xmlns="XmlNamespace"><idempotencyToken>([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})<\/idempotencyToken><plain>potatoes<\/plain><\/StructureWithIdempotencyToken>/,
      /�pidempotencyTokenx\$([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})eplainhpotatoes/,
    ];

    for (let i = 0; i < expectedSerializations.length; i++) {
      const serializer = serializers[i];
      const expectedSerialization = expectedSerializations[i];

      // automatic token
      {
        serializer.write(structureSchema, {
          idempotencyToken: undefined,
          plain: "potatoes",
        });
        const data = serializer.flush();
        const serialization = Buffer.from(data).toString("utf8");
        expect(serialization).toMatch(expectedSerialization);
      }

      // manual token
      {
        serializer.write(structureSchema, {
          idempotencyToken: "00000000-0000-4000-9000-000000000000",
          plain: "potatoes",
        });
        const data = serializer.flush();
        const serialization = Buffer.from(data).toString("utf8");
        expect(serialization).toMatch(expectedSerialization);
      }
    }
  });
});
