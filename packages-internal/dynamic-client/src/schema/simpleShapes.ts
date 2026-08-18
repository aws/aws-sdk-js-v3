import { SCHEMA } from "@smithy/core/schema";

import type { AstShape, ShapeType } from "../ast/types";

/**
 * Maps a Smithy simple shape type to its numeric schema sentinel. Enum and
 * intEnum shapes are represented by their base string/numeric sentinels at
 * runtime. Timestamp shapes default here; a more specific timestamp format is
 * applied by {@link timestampSentinel}.
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
 * @returns the schema sentinel for a simple shape, honoring timestamp formats,
 *   or `undefined` when the shape is not a simple shape.
 *
 * @internal
 */
export function sentinelForSimpleShape(shape: AstShape): number | undefined {
  if (shape.type === "timestamp") {
    return timestampSentinel(shape);
  }
  return SIMPLE_SENTINELS[shape.type];
}
