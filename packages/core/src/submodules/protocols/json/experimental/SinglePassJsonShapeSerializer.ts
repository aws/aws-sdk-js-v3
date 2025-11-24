import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { dateToUtcString, generateIdempotencyToken, LazyJsonString, NumericValue } from "@smithy/core/serde";
import type {
  Schema,
  ShapeSerializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../../ConfigurableSerdeContext";
import { serializingStructIterator } from "../../structIterator";
import type { JsonSettings } from "../JsonCodec";

/**
 * This implementation uses single-pass JSON serialization with JS code instead of
 * JSON.stringify.
 *
 * It isn't significantly faster than dual-pass ending with native JSON.stringify
 * that I would want to use it. It seems to be barely faster in some mid-range object
 * sizes but slower on the high end.
 *
 * @internal
 */
export class SinglePassJsonShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string> {
  private buffer: any;
  private rootSchema: NormalizedSchema | undefined;

  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public write(schema: Schema, value: unknown): void {
    this.rootSchema = NormalizedSchema.of(schema);
    this.buffer = this.writeObject(this.rootSchema, value);
  }

  /**
   * @internal
   */
  public writeDiscriminatedDocument(schema: Schema, value: unknown): void {
    this.write(schema, value);
    if (typeof this.buffer === "object") {
      this.buffer.__type = NormalizedSchema.of(schema).getName(true);
    }
  }

  public flush(): string {
    this.rootSchema = undefined;

    return this.buffer;
  }

  private writeObject(schema: Schema, value: unknown): string {
    if (value == undefined) {
      return "";
    }

    let b = "";
    const ns = NormalizedSchema.of(schema);
    const sparse = !!ns.getMergedTraits().sparse;

    if (Array.isArray(value) && (ns.isDocumentSchema() || ns.isListSchema())) {
      b += "[";
      for (let i = 0; i < value.length; ++i) {
        const item = value[i];
        if (item != null || sparse) {
          b += this.writeValue(ns.getValueSchema(), item);
          b += ",";
        }
      }
    } else if (ns.isStructSchema()) {
      b += "{";
      for (const [name, member] of serializingStructIterator(ns, value)) {
        const item = (value as any)[name];
        const targetKey = this.settings.jsonName ? member.getMergedTraits().jsonName ?? name : name;
        const serializableValue = this.writeValue(member, item);
        if (item != null || member.isIdempotencyToken()) {
          b += `"${targetKey}":${serializableValue}`;
          b += ",";
        }
      }
    } else if (ns.isMapSchema() || ns.isDocumentSchema()) {
      b += "{";
      for (const [k, v] of Object.entries(value)) {
        if (v != null || sparse) {
          b += `"${k}":${this.writeValue(ns, v)}`;
          b += ",";
        }
      }
    }

    if (b[b.length - 1] === ",") {
      b = b.slice(0, -1);
    }
    if (b[0] === "[") {
      b += "]";
    }
    if (b[0] === "{") {
      b += "}";
    }
    return b;
  }

  private writeValue(schema: Schema, value: unknown): string {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);
    const quote = (_: string) => `"${_}"`;

    if (
      (ns.isBlobSchema() && (value instanceof Uint8Array || typeof value === "string")) ||
      (ns.isDocumentSchema() && value instanceof Uint8Array)
    ) {
      return quote((this.serdeContext?.base64Encoder ?? toBase64)(value));
    }

    if ((ns.isTimestampSchema() || ns.isDocumentSchema()) && value instanceof Date) {
      const format = determineTimestampFormat(ns, this.settings);
      switch (format) {
        case 5 satisfies TimestampDateTimeSchema:
          return quote(value.toISOString().replace(".000Z", "Z"));
        case 6 satisfies TimestampHttpDateSchema:
          return quote(dateToUtcString(value));
        case 7 satisfies TimestampEpochSecondsSchema:
          return String(value.getTime() / 1000);
        default:
          console.warn("Missing timestamp format, using epoch seconds", value);
          return String(value.getTime() / 1000);
      }
    }

    if (ns.isNumericSchema() && typeof value === "number") {
      if (Math.abs(value) === Infinity || isNaN(value)) {
        return quote(String(value));
      }
    }

    if (ns.isStringSchema()) {
      if (typeof value === "undefined" && ns.isIdempotencyToken()) {
        return quote(generateIdempotencyToken());
      }

      if (typeof value === "string") {
        const mediaType = ns.getMergedTraits().mediaType;

        if (mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return quote(LazyJsonString.from(value).toString());
          }
        }
      }
    }

    if (value instanceof NumericValue) {
      // ns can be BigDecimal or Document.
      return value.string;
    }

    if (isObject) {
      return this.writeObject(ns, value);
    }

    return typeof value === "string" ? quote(value) : String(value);
  }
}
