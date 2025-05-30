import { list, map, SCHEMA, sim, struct } from "@smithy/core/schema";
import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { JsonShapeDeserializer } from "./JsonShapeDeserializer";

describe(JsonShapeDeserializer.name, () => {
  const deserializer = new JsonShapeDeserializer({
    jsonName: true,
    timestampFormat: { default: SCHEMA.TIMESTAMP_EPOCH_SECONDS, useTrait: true },
  });

  const schema = struct(
    "",
    "Struct",
    0,
    ["list", "sparseList", "map", "sparseMap", "blob", "media", "timestamp", "bigint", "bigdecimal", "scalar"],
    [
      [list("", "List", 0, 0), 0],
      [list("", "List", 0, 0), { sparse: 1 }],
      map("", "Map", 0, 0, 0),
      [map("", "Map", 0, 0, 0), { sparse: 1 }],
      SCHEMA.BLOB,
      sim("", "Media", 0, { mediaType: "application/json" }),
      SCHEMA.TIMESTAMP_EPOCH_SECONDS,
      SCHEMA.BIG_INTEGER,
      SCHEMA.BIG_DECIMAL,
      SCHEMA.NUMERIC,
    ]
  );

  it("understands list sparseness", async () => {
    const json = JSON.stringify({
      list: ["a", "b", null, "c"],
      sparseList: ["a", "b", null, "c"],
    });

    const data = await deserializer.read(schema, json);
    expect(data).toEqual({
      list: ["a", "b", "c"],
      sparseList: ["a", "b", null, "c"],
    });
  });

  it("understands map sparseness", async () => {
    const json = JSON.stringify({
      map: {
        a: "a",
        b: "b",
        c: null,
      },
      sparseMap: {
        a: "a",
        b: "b",
        c: null,
      },
    });

    const data = await deserializer.read(schema, json);
    expect(data).toEqual({
      map: {
        a: "a",
        b: "b",
      },
      sparseMap: {
        a: "a",
        b: "b",
        c: null,
      },
    });
  });

  it("deserializes base64 to blob", async () => {
    expect(
      await deserializer.read(
        schema,
        JSON.stringify({
          blob: "AAAA",
        })
      )
    ).toEqual({
      blob: new Uint8Array([0, 0, 0]),
    });
  });

  it("deserializes JSON media type", async () => {
    expect(
      (
        await deserializer.read(
          schema,
          JSON.stringify({
            media: `{ "data": 1 }`,
          })
        )
      ).media.deserializeJSON()
    ).toEqual({ data: 1 });
  });

  it("deserializes timestamps", async () => {
    expect(
      await deserializer.read(
        schema,
        JSON.stringify({
          timestamp: 0,
        })
      )
    ).toEqual({
      timestamp: new Date(0),
    });
  });

  it("deserializes big integers from string or number", async () => {
    expect(
      await deserializer.read(
        schema,
        `{
      "bigint": "1000000000000000000000000000000000000" 
    }`
      )
    ).toEqual({
      bigint: 1000000000000000000000000000000000000n,
    });

    expect(
      await deserializer.read(
        schema,
        `{
      "bigint": 1000000000000000000000000000000000000 
    }`
      )
    ).toEqual({
      bigint: 1000000000000000000000000000000000000n,
    });
  });

  it("deserializes big decimals", async () => {
    expect(
      await deserializer.read(
        schema,
        `{
      "bigdecimal": "0.0000000000000000000000000000000000001" 
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0000000000000000000000000000000000001", "bigDecimal"),
    });

    expect(
      await deserializer.read(
        schema,
        `{
      "bigdecimal": 0.0001 
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0001", "bigDecimal"),
    });
  });

  it("deserializes infinite and NaN numerics", async () => {
    expect(await deserializer.read(schema, JSON.stringify({ scalar: "Infinity" }))).toEqual({ scalar: Infinity });
    expect(await deserializer.read(schema, JSON.stringify({ scalar: "-Infinity" }))).toEqual({ scalar: -Infinity });
    expect(await deserializer.read(schema, JSON.stringify({ scalar: "NaN" }))).toEqual({ scalar: NaN });
  });
});
