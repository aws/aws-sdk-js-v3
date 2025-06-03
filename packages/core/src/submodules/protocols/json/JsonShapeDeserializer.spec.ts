import { SCHEMA } from "@smithy/core/schema";
import { NumericValue } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

import { widget } from "../test-schema.spec";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";

describe(JsonShapeDeserializer.name, () => {
  let contextSourceAvailable = false;
  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  const deserializer = new JsonShapeDeserializer({
    jsonName: true,
    timestampFormat: { default: SCHEMA.TIMESTAMP_EPOCH_SECONDS, useTrait: true },
  });

  it("understands list sparseness", async () => {
    const json = JSON.stringify({
      list: ["a", "b", null, "c"],
      sparseList: ["a", "b", null, "c"],
    });

    const data = await deserializer.read(widget, json);
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

    const data = await deserializer.read(widget, json);
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
        widget,
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
          widget,
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
        widget,
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
        widget,
        `{
      "bigint": "1000000000000000000000000000000000000" 
    }`
      )
    ).toEqual({
      bigint: 1000000000000000000000000000000000000n,
    });

    const impreciseParsing = 1000000000000000042420637374017961984n;

    expect(
      await deserializer.read(
        widget,
        `{
      "bigint": 1000000000000000000000000000000000000
    }`
      )
    ).toEqual({
      bigint: contextSourceAvailable ? 1000000000000000000000000000000000000n : impreciseParsing,
    });
  });

  it("deserializes big decimals", async () => {
    expect(
      await deserializer.read(
        widget,
        `{
      "bigdecimal": "0.0000000000000000000000000000000000001" 
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0000000000000000000000000000000000001", "bigDecimal"),
    });

    expect(
      await deserializer.read(
        widget,
        `{
      "bigdecimal": 0.0001 
    }`
      )
    ).toEqual({
      bigdecimal: new NumericValue("0.0001", "bigDecimal"),
    });
  });

  it("deserializes infinite and NaN numerics", async () => {
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "Infinity" }))).toEqual({ scalar: Infinity });
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "-Infinity" }))).toEqual({ scalar: -Infinity });
    expect(await deserializer.read(widget, JSON.stringify({ scalar: "NaN" }))).toEqual({ scalar: NaN });
  });
});
