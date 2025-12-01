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

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { serializingStructIterator } from "../structIterator";
import type { JsonSettings } from "./JsonCodec";
import { JsonReplacer } from "./jsonReplacer";

/**
 * @public
 */
export class JsonShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string> {
  /**
   * Write buffer. Reused per value serialization pass.
   * In the initial implementation, this is not an incremental buffer.
   */
  protected buffer: any;
  protected useReplacer = false;
  protected rootSchema: NormalizedSchema | undefined;

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
    const { rootSchema, useReplacer } = this;
    this.rootSchema = undefined;
    this.useReplacer = false;

    if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
      if (!useReplacer) {
        return JSON.stringify(this.buffer);
      }
      const replacer = new JsonReplacer();
      return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
    }
    // non-struct root schema indicates a blob (base64 string) or plain string payload.
    return this.buffer;
  }

  /**
   * Order if-statements by order of likelihood.
   */
  protected _write(schema: Schema, value: unknown, container?: NormalizedSchema): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    if (isObject) {
      if (ns.isStructSchema()) {
        const out = {} as any;
        for (const [memberName, memberSchema] of serializingStructIterator(ns, value)) {
          const serializableValue = this._write(memberSchema, (value as any)[memberName], ns);
          if (serializableValue !== undefined) {
            const jsonName = memberSchema.getMergedTraits().jsonName;
            const targetKey = this.settings.jsonName ? jsonName ?? memberName : memberName;
            out[targetKey] = serializableValue;
          }
        }
        return out;
      }

      if (Array.isArray(value) && ns.isListSchema()) {
        const listMember = ns.getValueSchema();
        const out = [] as any[];
        const sparse = !!ns.getMergedTraits().sparse;
        for (const item of value) {
          if (sparse || item != null) {
            out.push(this._write(listMember, item));
          }
        }
        return out;
      }

      if (ns.isMapSchema()) {
        const mapMember = ns.getValueSchema();
        const out = {} as any;
        const sparse = !!ns.getMergedTraits().sparse;
        for (const [_k, _v] of Object.entries(value)) {
          if (sparse || _v != null) {
            out[_k] = this._write(mapMember, _v);
          }
        }
        return out;
      }

      if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
        if (ns === this.rootSchema) {
          return value;
        }
        return (this.serdeContext?.base64Encoder ?? toBase64)(value);
      }

      if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
        const format = determineTimestampFormat(ns, this.settings);
        switch (format) {
          case 5 satisfies TimestampDateTimeSchema:
            return value.toISOString().replace(".000Z", "Z");
          case 6 satisfies TimestampHttpDateSchema:
            return dateToUtcString(value);
          case 7 satisfies TimestampEpochSecondsSchema:
            return value.getTime() / 1000;
          default:
            console.warn("Missing timestamp format, using epoch seconds", value);
            return value.getTime() / 1000;
        }
      }

      if (value instanceof NumericValue) {
        this.useReplacer = true;
      }
    }

    if (value === null && container?.isStructSchema()) {
      return void 0;
    }

    if (ns.isStringSchema()) {
      if (typeof value === "undefined" && ns.isIdempotencyToken()) {
        return generateIdempotencyToken();
      }

      const mediaType = ns.getMergedTraits().mediaType;

      if (value != null && mediaType) {
        const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
        if (isJson) {
          return LazyJsonString.from(value);
        }
      }
      return value;
    }

    if (typeof value === "number" && ns.isNumericSchema()) {
      if (Math.abs(value) === Infinity || isNaN(value)) {
        return String(value);
      }
      return value;
    }

    if (typeof value === "string" && ns.isBlobSchema()) {
      if (ns === this.rootSchema) {
        return value;
      }
      return (this.serdeContext?.base64Encoder ?? toBase64)(value);
    }

    if (typeof value === "bigint") {
      this.useReplacer = true;
    }

    if (ns.isDocumentSchema()) {
      if (isObject) {
        const out = Array.isArray(value) ? [] : ({} as any);
        for (const [k, v] of Object.entries(value)) {
          if (v instanceof NumericValue) {
            this.useReplacer = true;
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
