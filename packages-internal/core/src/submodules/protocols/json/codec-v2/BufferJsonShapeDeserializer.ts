import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import {
  LazyJsonString,
  NumericValue,
  parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
} from "@smithy/core/serde";
import { fromBase64 } from "@smithy/core/serde";
import type {
  DocumentType,
  Schema,
  ShapeDeserializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";

import { SerdeContextConfig } from "../../ConfigurableSerdeContext";
import { UnionSerde } from "../../UnionSerde";
import { detectBufferParsing } from "../detectBufferParsing";
import type { JsonSettings } from "../JsonCodec";
import { jsonReviver } from "../jsonReviver";
import { needsReviver } from "../needsReviver";
import { parseJsonBody } from "../parseJsonBody";
import { writeKey } from "../../writeKey";

/**
 * Performance-optimized JSON deserializer.
 *
 * Skips UTF-8 decoding when the runtime supports JSON.parse(Buffer) (Node 22+).
 *
 * After JSON.parse, lists, maps, and document containers are mutated in place
 * (element values are overwritten with their deserialized form) rather than
 * copied into new arrays/objects. Structs allocate a fresh object because
 * jsonName traits require key renaming, and building the output object
 * incrementally lets V8 assign a stable hidden class rather than
 * deoptimizing from repeated property deletion/addition on an existing shape.
 *
 * In-place mutation is safe here because the parsed tree is locally owned
 * after JSON.parse with no external references, so rewriting values avoids
 * redundant allocation and GC pressure.
 *
 * @internal
 */
export class BufferJsonShapeDeserializer extends SerdeContextConfig implements ShapeDeserializer<string> {
  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public async read(schema: Schema, data: string | Uint8Array | unknown): Promise<any> {
    const reviver = needsReviver(schema) ? jsonReviver : undefined;
    let parsed: unknown;
    if (typeof data === "string") {
      parsed = JSON.parse(data, reviver);
    } else if (data instanceof Uint8Array && detectBufferParsing()) {
      // detectBufferParsing() guarantees Buffer exists globally.
      const buf = Buffer.isBuffer(data) ? data : Buffer.from(data.buffer, data.byteOffset, data.byteLength);
      parsed = JSON.parse(buf as any, reviver);
    } else {
      // Fallback: collect stream to string, then parse.
      parsed = await parseJsonBody(data, this.serdeContext!);
    }
    return this._read(schema, parsed);
  }

  public readObject(schema: Schema, data: DocumentType): any {
    return this._read(schema, data);
  }

  protected _read(schema: Schema, value: unknown): any {
    const isObject = value !== null && typeof value === "object";

    const ns = NormalizedSchema.of(schema);

    if (isObject) {
      if (ns.isStructSchema()) {
        return this._readStruct(ns, value as Record<string, unknown>);
      }
      if (Array.isArray(value) && ns.isListSchema()) {
        const listMember = ns.getValueSchema();
        for (let i = 0; i < value.length; ++i) {
          value[i] = this._read(listMember, value[i]);
        }
        return value;
      }
      if (ns.isMapSchema()) {
        const mapMember = ns.getValueSchema();
        const map = value as Record<string, unknown>;
        for (const k in map) {
          if (k === "__proto__") {
            writeKey(map);
          }
          map[k] = this._read(mapMember, map[k]);
        }
        return map;
      }
    }

    if (ns.isBlobSchema() && typeof value === "string") {
      return fromBase64(value);
    }

    const mediaType = ns.getMergedTraits().mediaType;
    if (ns.isStringSchema() && typeof value === "string" && mediaType) {
      const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
      if (isJson) {
        return LazyJsonString.from(value);
      }
      return value;
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
      return value;
    }

    if (ns.isDocumentSchema()) {
      if (isObject) {
        // Mutate document objects in place.
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; ++i) {
            const v = value[i];
            if (!(v instanceof NumericValue)) {
              value[i] = this._read(ns, v);
            }
          }
        } else {
          const doc = value as Record<string, unknown>;
          for (const k in doc) {
            if (k === "__proto__") {
              writeKey(doc);
            }
            const v = doc[k];
            if (!(v instanceof NumericValue)) {
              doc[k] = this._read(ns, v);
            }
          }
        }
        return value;
      } else {
        // Scalar document: locally owned, no clone needed.
        return value;
      }
    }

    // covers boolean, bigint (long/BigInt), bigDecimal
    return value;
  }

  private _readStruct(ns: NormalizedSchema, record: Record<string, unknown>): any {
    const union = ns.isUnionSchema();
    const out = {} as any;
    let nameMap: Record<string, string> | undefined = void 0;
    const { jsonName } = this.settings;
    if (jsonName) {
      nameMap = {};
    }

    let unionSerde: UnionSerde;
    if (union) {
      unionSerde = new UnionSerde(record, out);
    }
    for (const [memberName, memberSchema] of ns.structIterator()) {
      let fromKey = memberName;
      if (jsonName) {
        fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
        nameMap![fromKey] = memberName;
      }
      if (union) {
        unionSerde!.mark(fromKey);
      }
      if (record[fromKey] != null) {
        out[memberName] = this._read(memberSchema, record[fromKey]);
      }
    }
    if (union) {
      unionSerde!.writeUnknown();
    } else if (typeof record.__type === "string") {
      for (const k in record) {
        const v = record[k];
        const t = jsonName ? (nameMap![k] ?? k) : k;
        if (!(t in out)) {
          out[t] = v;
        }
      }
    }
    return out;
  }
}
