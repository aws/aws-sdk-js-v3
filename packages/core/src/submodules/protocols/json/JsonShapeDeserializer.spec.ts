import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { createNestingWidget, nestingWidget, unionStruct, unionStructControl, widget } from "../test-schema.spec";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

describe(JsonShapeDeserializer.name, () => {
  let contextSourceAvailable = false;
  JSON.parse(`{ "key": 1 }`, function (key, value, context?: { source?: string }) {
    if (context?.source) {
      contextSourceAvailable = true;
    }
  });

  const deserializer = new JsonShapeDeserializer({
    jsonName: true,
    timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
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

  it("deserializes $unknown union members", async () => {
    const json = `{"union":{"unknownKey":{"timestamp":0,"blob":"AAECAw=="}}}`;
    {
      const deserialization = await deserializer.read(unionStruct, json);
      expect(deserialization).toEqual({
        union: {
          $unknown: [
            "unknownKey",
            {
              blob: "AAECAw==",
              timestamp: 0,
            },
          ],
        },
      });
    }
    {
      const deserialization = await deserializer.read(unionStructControl, json);
      expect(deserialization).toEqual({
        union: {},
      });
    }
  });

  describe("performance baseline indicator", () => {
    const serializer = new JsonShapeSerializer({
      jsonName: true,
      timestampFormat: { default: 7 satisfies TimestampEpochSecondsSchema, useTrait: true },
    });
    serializer.setSerdeContext({
      base64Encoder: (input: Uint8Array) => {
        return Buffer.from(input).toString("base64");
      },
    } as any);

    it("should deserialize JSON strings", async () => {
      const timings: string[] = [];
      const strings = [];

      // warmup
      for (let i = 0; i < 12; ++i) {
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

        timings.push(`${B - A} (JSON length = ${s.length}, ${s.length / 1024 / (B - A)} kb/ms)`);
      }

      /**
       * No assertion here.
       * In the initial dual-pass implementation,
       * par time is 0 to 25ms for up to 288899 chars of JSON. Up to 13 kb/ms. (kuhe's computer)
       */
      console.log("JsonShapeDeserializer performance timings", timings);
    });
  }, 30_000);
});
