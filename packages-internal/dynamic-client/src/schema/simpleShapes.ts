import { SCHEMA } from "@smithy/core/schema";

import type { AstShape, ShapeType } from "../ast/types";

/**
 * Maps a Smithy simple shape type to its numeric schema sentinel.
 *
 * @internal
 */
const SIMPLE_SENTINELS: Partial<Record<ShapeType, number>> = {
  blob: SCHEMA.BLOB,
  boolean: SCHEMA.BOOLEAN,
  string: SCHEMA.STRING,
  enum: SCHEMA.STRING,
  byte: SCHEMA.NUMERIC,
  short: SCHEMA.NUMERIC,
  integer: SCHEMA.NUMERIC,
  intEnum: SCHEMA.NUMERIC,
  long: SCHEMA.NUMERIC,
  float: SCHEMA.NUMERIC,
  double: SCHEMA.NUMERIC,
  bigInteger: SCHEMA.BIG_INTEGER,
  bigDecimal: SCHEMA.BIG_DECIMAL,
  document: SCHEMA.DOCUMENT,
  timestamp: SCHEMA.TIMESTAMP_DEFAULT,
};

/**
 * @returns the schema sentinel for a simple shape type, or `undefined` when the
 *   type is not a simple shape.
 *
 * @internal
 */
export function simpleSentinel(type: ShapeType): number | undefined {
  return SIMPLE_SENTINELS[type];
}

/**
 * Resolves the timestamp sentinel for a shape from its `timestampFormat` trait,
 * defaulting to the protocol-determined default when absent.
 *
 * @internal
 */
export function timestampSentinel(shape: AstShape): number {
  const format = shape.traits?.["smithy.api#timestampFormat"] as string | undefined;
  switch (format) {
    case "date-time":
      return SCHEMA.TIMESTAMP_DATE_TIME;
    case "http-date":
      return SCHEMA.TIMESTAMP_HTTP_DATE;
    case "epoch-seconds":
      return SCHEMA.TIMESTAMP_EPOCH_SECONDS;
    default:
      return SCHEMA.TIMESTAMP_DEFAULT;
  }
}

/**
 * @returns the schema sentinel for a simple shape, honoring timestamp formats
 *   and streaming blobs, or `undefined` when the shape is not a simple shape.
 *
 * @internal
 */
export function sentinelForSimpleShape(shape: AstShape): number | undefined {
  if (shape.type === "timestamp") {
    return timestampSentinel(shape);
  }
  if (shape.type === "blob" && shape.traits?.["smithy.api#streaming"] !== undefined) {
    // A streaming blob resolves to the STREAMING_BLOB sentinel so the protocol
    // treats the payload as a raw stream rather than a buffered/parsed body.
    return SCHEMA.STREAMING_BLOB;
  }
  return SIMPLE_SENTINELS[shape.type];
}
