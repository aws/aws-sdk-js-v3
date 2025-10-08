import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import {
  LazyJsonString,
  NumericValue,
  parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
} from "@smithy/core/serde";
import type {
  DocumentType,
  Schema,
  ShapeDeserializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";
import { fromBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonSettings } from "./JsonCodec";
import { jsonReviver } from "./jsonReviver";
import { parseJsonBody } from "./parseJsonBody";

/**
 * @alpha
 */
export class JsonShapeDeserializer extends SerdeContextConfig implements ShapeDeserializer<string> {
  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public async read(schema: Schema, data: string | Uint8Array | unknown): Promise<any> {
    return this._read(
      schema,
      typeof data === "string" ? JSON.parse(data, jsonReviver) : await parseJsonBody(data, this.serdeContext!)
    );
  }

  public readObject(schema: Schema, data: DocumentType): any {
    return this._read(schema, data);
  }

  private _read(schema: Schema, value: unknown): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    // === aggregate types ===
    if (ns.isListSchema() && Array.isArray(value)) {
      const listMember = ns.getValueSchema();
      const out = [] as any[];
      const sparse = !!ns.getMergedTraits().sparse;
      for (const item of value) {
        if (sparse || item != null) {
          out.push(this._read(listMember, item));
        }
      }
      return out;
    } else if (ns.isMapSchema() && isObject) {
      const mapMember = ns.getValueSchema();
      const out = {} as any;
      const sparse = !!ns.getMergedTraits().sparse;
      for (const [_k, _v] of Object.entries(value)) {
        if (sparse || _v != null) {
          out[_k] = this._read(mapMember, _v);
        }
      }
      return out;
    } else if (ns.isStructSchema() && isObject) {
      const out = {} as any;
      for (const [memberName, memberSchema] of ns.structIterator()) {
        const fromKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
        const deserializedValue = this._read(memberSchema, (value as any)[fromKey]);
        if (deserializedValue != null) {
          out[memberName] = deserializedValue;
        }
      }
      return out;
    }

    // === simple types ===
    if (ns.isBlobSchema() && typeof value === "string") {
      return fromBase64(value);
    }

    const mediaType = ns.getMergedTraits().mediaType;
    if (ns.isStringSchema() && typeof value === "string" && mediaType) {
      const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
      if (isJson) {
        return LazyJsonString.from(value);
      }
    }

    if (ns.isTimestampSchema() && value != null) {
      const format = determineTimestampFormat(ns, this.settings);
      switch (format) {
        case 5 satisfies TimestampDateTimeSchema:
          return parseRfc3339DateTimeWithOffset(value);
        case 6 satisfies TimestampHttpDateSchema:
          return parseRfc7231DateTime(value);
        case 7 satisfies TimestampEpochSecondsSchema:
          return parseEpochTimestamp(value);
        default:
          console.warn("Missing timestamp format, parsing value with Date constructor:", value);
          return new Date(value as string | number);
      }
    }

    if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
      return BigInt(value as number | string);
    }

    if (ns.isBigDecimalSchema() && value != undefined) {
      if (value instanceof NumericValue) {
        return value;
      }
      const untyped = value as any;
      if (untyped.type === "bigDecimal" && "string" in untyped) {
        return new NumericValue(untyped.string, untyped.type);
      }
      return new NumericValue(String(value), "bigDecimal");
    }

    if (ns.isNumericSchema() && typeof value === "string") {
      switch (value) {
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        case "NaN":
          return NaN;
      }
    }

    if (ns.isDocumentSchema()) {
      if (isObject) {
        const out = Array.isArray(value) ? [] : ({} as any);
        for (const [k, v] of Object.entries(value)) {
          if (v instanceof NumericValue) {
            out[k] = v;
          } else {
            out[k] = this._read(ns, v);
          }
        }
        return out;
      } else {
        return structuredClone(value);
      }
    }

    // covers string, numeric, boolean, document, bigDecimal
    return value;
  }
}
