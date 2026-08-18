import { SCHEMA } from "@smithy/core/schema";
import { describe, expect, test as it } from "vitest";

import type { ShapeType } from "../ast/types";
import { sentinelForSimpleShape, simpleSentinel, timestampSentinel } from "./simpleShapes";

describe("simpleSentinel", () => {
  const cases: Array<[ShapeType, number]> = [
    ["blob", SCHEMA.BLOB],
    ["boolean", SCHEMA.BOOLEAN],
    ["string", SCHEMA.STRING],
    ["enum", SCHEMA.STRING],
    ["byte", SCHEMA.NUMERIC],
    ["short", SCHEMA.NUMERIC],
    ["integer", SCHEMA.NUMERIC],
    ["intEnum", SCHEMA.NUMERIC],
    ["long", SCHEMA.NUMERIC],
    ["float", SCHEMA.NUMERIC],
    ["double", SCHEMA.NUMERIC],
    ["bigInteger", SCHEMA.BIG_INTEGER],
    ["bigDecimal", SCHEMA.BIG_DECIMAL],
    ["document", SCHEMA.DOCUMENT],
    ["timestamp", SCHEMA.TIMESTAMP_DEFAULT],
  ];

  it.each(cases)("maps %s to its sentinel", (type, expected) => {
    expect(simpleSentinel(type)).toBe(expected);
  });

  it("returns undefined for aggregate shape types", () => {
    expect(simpleSentinel("structure")).toBeUndefined();
    expect(simpleSentinel("list")).toBeUndefined();
    expect(simpleSentinel("map")).toBeUndefined();
    expect(simpleSentinel("union")).toBeUndefined();
  });
});

describe("timestampSentinel", () => {
  const cases: Array<[string | undefined, number]> = [
    ["date-time", SCHEMA.TIMESTAMP_DATE_TIME],
    ["http-date", SCHEMA.TIMESTAMP_HTTP_DATE],
    ["epoch-seconds", SCHEMA.TIMESTAMP_EPOCH_SECONDS],
    [undefined, SCHEMA.TIMESTAMP_DEFAULT],
  ];

  it.each(cases)("maps timestampFormat %s to its sentinel", (format, expected) => {
    const traits = format ? { "smithy.api#timestampFormat": format } : undefined;
    expect(timestampSentinel({ type: "timestamp", traits })).toBe(expected);
  });
});

describe("sentinelForSimpleShape", () => {
  it("honors the timestamp format for timestamp shapes", () => {
    expect(sentinelForSimpleShape({ type: "timestamp", traits: { "smithy.api#timestampFormat": "http-date" } })).toBe(
      SCHEMA.TIMESTAMP_HTTP_DATE
    );
  });

  it("maps other simple shapes by type", () => {
    expect(sentinelForSimpleShape({ type: "string" })).toBe(SCHEMA.STRING);
    expect(sentinelForSimpleShape({ type: "bigDecimal" })).toBe(SCHEMA.BIG_DECIMAL);
  });

  it("returns undefined for aggregate shapes", () => {
    expect(sentinelForSimpleShape({ type: "structure" })).toBeUndefined();
  });
});
