import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema, SCHEMA } from "@smithy/core/schema";
import { dateToUtcString, generateIdempotencyToken, LazyJsonString, NumericValue } from "@smithy/core/serde";
import { Schema, ShapeSerializer } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonSettings } from "./JsonCodec";
import { JsonReplacer } from "./jsonReplacer";

/**
 * @alpha
 */
export class JsonShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string> {
  private buffer: any;
  private rootSchema: NormalizedSchema | undefined;

  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public write(schema: Schema, value: unknown): void {
    this.rootSchema = NormalizedSchema.of(schema);
    this.buffer = this._write(this.rootSchema, value);
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
    const { rootSchema } = this;
    this.rootSchema = undefined;

    if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
      const replacer = new JsonReplacer();
      return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
    }
    // non-struct root schema indicates a blob (base64 string) or plain string payload.
    return this.buffer;
  }

  private _write(schema: Schema, value: unknown, container?: NormalizedSchema): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    // === aggregate types ===
    if (ns.isListSchema() && Array.isArray(value)) {
      const listMember = ns.getValueSchema();
      const out = [] as any[];
      const sparse = !!ns.getMergedTraits().sparse;
      for (const item of value) {
        if (sparse || item != null) {
          out.push(this._write(listMember, item));
        }
      }
      return out;
    } else if (ns.isMapSchema() && isObject) {
      const mapMember = ns.getValueSchema();
      const out = {} as any;
      const sparse = !!ns.getMergedTraits().sparse;
      for (const [_k, _v] of Object.entries(value)) {
        if (sparse || _v != null) {
          out[_k] = this._write(mapMember, _v);
        }
      }
      return out;
    } else if (ns.isStructSchema() && isObject) {
      const out = {} as any;
      for (const [memberName, memberSchema] of ns.structIterator()) {
        const targetKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
        const serializableValue = this._write(memberSchema, (value as any)[memberName], ns);
        if (serializableValue !== undefined) {
          out[targetKey] = serializableValue;
        }
      }
      return out;
    }

    // === simple types ===
    if (value === null && container?.isStructSchema()) {
      return void 0;
    }

    if (
      (ns.isBlobSchema() && (value instanceof Uint8Array || typeof value === "string")) ||
      (ns.isDocumentSchema() && value instanceof Uint8Array)
    ) {
      if (ns === this.rootSchema) {
        return value;
      }
      if (!this.serdeContext?.base64Encoder) {
        return toBase64(value);
      }
      return this.serdeContext?.base64Encoder(value);
    }

    if ((ns.isTimestampSchema() || ns.isDocumentSchema()) && value instanceof Date) {
      const format = determineTimestampFormat(ns, this.settings);
      switch (format) {
        case SCHEMA.TIMESTAMP_DATE_TIME:
          return value.toISOString().replace(".000Z", "Z");
        case SCHEMA.TIMESTAMP_HTTP_DATE:
          return dateToUtcString(value);
        case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
          return value.getTime() / 1000;
        default:
          console.warn("Missing timestamp format, using epoch seconds", value);
          return value.getTime() / 1000;
      }
    }

    if (ns.isNumericSchema() && typeof value === "number") {
      if (Math.abs(value) === Infinity || isNaN(value)) {
        return String(value);
      }
    }

    if (ns.isStringSchema()) {
      if (typeof value === "undefined" && ns.isIdempotencyToken()) {
        return generateIdempotencyToken();
      }

      const mediaType = ns.getMergedTraits().mediaType;

      if (typeof value === "string" && mediaType) {
        const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
        if (isJson) {
          return LazyJsonString.from(value);
        }
      }
    }

    if (ns.isDocumentSchema()) {
      if (isObject) {
        const out = Array.isArray(value) ? [] : ({} as any);
        for (const [k, v] of Object.entries(value)) {
          if (v instanceof NumericValue) {
            out[k] = v;
          } else {
            out[k] = this._write(ns, v);
          }
        }
        return out;
      } else {
        return structuredClone(value);
      }
    }

    return value;
  }
}
