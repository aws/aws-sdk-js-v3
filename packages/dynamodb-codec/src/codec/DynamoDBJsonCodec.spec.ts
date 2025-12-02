import { JsonCodec } from "@aws-sdk/core/protocols";
import { StaticListSchema, StaticMapSchema, StaticStructureSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { DynamoDBJsonCodec } from "./DynamoDBJsonCodec";

describe(DynamoDBJsonCodec.name, () => {
  const baseCodec = new JsonCodec({
    timestampFormat: {
      useTrait: true,
      default: 7 as const,
    },
    jsonName: false,
  });
  const baseSerializer = baseCodec.createSerializer();
  const baseDeserializer = baseCodec.createDeserializer();

  const codec = new DynamoDBJsonCodec();
  const serializer = codec.createSerializer();
  const deserializer = codec.createDeserializer();

  const ns = `com.amazonaws.dynamodb`;

  const AttributeValue: StaticStructureSchema = [
    3,
    ns,
    "AttributeValue",
    0,
    ["S", "N", "B", "SS", "NS", "BS", "M", "L", "NULL", "BOOL"],
    [0, 0, 21, 64 | 0, 64 | 0, 64 | 21, () => MapAttributeValue, () => ListAttributeValue, 2, 2],
  ];
  const ListAttributeValue: StaticListSchema = [1, ns, "ListAttributeValue", 0, () => AttributeValue];
  const MapAttributeValue: StaticMapSchema = [2, ns, "MapAttributeValue", 0, 0, () => AttributeValue];

  const avInput = {
    M: {
      string: {
        S: "bar",
      },
      number: {
        N: "123",
      },
      boolean: {
        B: false,
      },
      stringSet: {
        SS: ["a", "b", "c"],
      },
      numberSet: {
        NS: ["0", "1", "2"],
      },
      blobSet: {
        BS: [new Uint8Array([0, 0, 0]), new Uint8Array([0, 1, 2, 3, 4, 5, 6])],
      },
      map: {
        M: {
          a: { S: "a" },
          b: { NULL: true },
        },
      },
      list: {
        L: [{ B: new Uint8Array([0, 0, 0]) }, { B: new Uint8Array([0, 1, 2, 3, 4, 5, 6]) }],
      },
      null: {
        NULL: true,
      },
    },
  };
  const canonicalSerialization = {
    M: {
      string: {
        S: "bar",
      },
      number: {
        N: "123",
      },
      boolean: {
        B: false,
      },
      stringSet: {
        SS: ["a", "b", "c"],
      },
      numberSet: {
        NS: ["0", "1", "2"],
      },
      blobSet: {
        BS: ["AAAA", "AAECAwQFBg=="],
      },
      map: {
        M: {
          a: { S: "a" },
          b: { NULL: true },
        },
      },
      list: {
        L: [{ B: "AAAA" }, { B: "AAECAwQFBg==" }],
      },
      null: {
        NULL: true,
      },
    },
  };

  it("serializes identically to the default codec", async () => {
    serializer.write(AttributeValue, avInput);
    const serialization = serializer.flush();
    expect(serialization).toEqual(JSON.stringify(canonicalSerialization));
    expect(JSON.parse(serialization)).toEqual(canonicalSerialization);

    baseSerializer.write(AttributeValue, avInput);
    const baseSerialization = baseSerializer.flush();
    expect(JSON.parse(baseSerialization)).toEqual(canonicalSerialization);
  });

  it("deserializes identically to the default codec", async () => {
    const deserialization = await deserializer.read(AttributeValue, JSON.stringify(canonicalSerialization));
    expect(deserialization).toEqual(avInput);

    const baseDeserialization = await baseDeserializer.read(AttributeValue, JSON.stringify(canonicalSerialization));
    expect(baseDeserialization).toEqual(avInput);
  });
});
