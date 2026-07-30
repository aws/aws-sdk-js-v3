import { determineTimestampFormat } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { dateToUtcString, generateIdempotencyToken, LazyJsonString, NumericValue, toBase64 } from "@smithy/core/serde";
import type {
  DocumentSchema,
  Schema,
  ShapeSerializer,
  TimestampDateTimeSchema,
  TimestampEpochSecondsSchema,
  TimestampHttpDateSchema,
} from "@smithy/types";

import { SerdeContextConfig } from "../../ConfigurableSerdeContext";
import type { JsonSettings } from "../JsonSettings";
import { writeKey } from "../../writeKey";
import { JsonBytesStringAdapter } from "./JsonBytesStringAdapter";

const encoder = new TextEncoder();

// ASCII byte constants
const OPEN_BRACE = 0x7b; // {
const CLOSE_BRACE = 0x7d; // }
const OPEN_BRACKET = 0x5b; // [
const CLOSE_BRACKET = 0x5d; // ]
const QUOTE = 0x22; // "
const COLON = 0x3a; // :
const COMMA = 0x2c; // ,
const BACKSLASH = 0x5c; // \
const TRUE = new Uint8Array([0x74, 0x72, 0x75, 0x65]);
const FALSE = new Uint8Array([0x66, 0x61, 0x6c, 0x73, 0x65]);
const NULL = new Uint8Array([0x6e, 0x75, 0x6c, 0x6c]);

// Escape lookup table for control characters and special JSON chars.
// null = no escape needed.
// string = the escape sequence characters after the backslash.
const ESCAPE_TABLE: (string | null)[] = new Array(128).fill(null);
ESCAPE_TABLE[0x08] = "b";
ESCAPE_TABLE[0x09] = "t";
ESCAPE_TABLE[0x0a] = "n";
ESCAPE_TABLE[0x0c] = "f";
ESCAPE_TABLE[0x0d] = "r";
ESCAPE_TABLE[0x22] = '"';
ESCAPE_TABLE[0x5c] = "\\";
for (let i = 0; i < 0x20; i++) {
  if (ESCAPE_TABLE[i] === null) {
    // Control chars that don't have a short escape → \u00XX
    ESCAPE_TABLE[i] = "u00" + i.toString(16).padStart(2, "0");
  }
}

const INITIAL_BUFFER_SIZE = 2048;

/**
 * Use Buffer.allocUnsafe when available (Node.js) — skips zero-filling.
 * Safe here because we track pos and always write before reading.
 */
function alloc(size: number): Uint8Array {
  // todo(kuhe): will be replaced by native Buffer/Uint8Array in the future.
  return JsonBytesStringAdapter.allocUnsafe(size);
}

/**
 * Single-pass JSON serializer that writes directly to a Uint8Array buffer.
 * Fewer intermediate states as when compared to the initial multi-pass implementation.
 *
 * @public
 */
export class JsonShapeSerializer2 extends SerdeContextConfig implements ShapeSerializer<Uint8Array> {
  private json: Uint8Array;
  private i = 0;
  private rootSchema: NormalizedSchema | undefined;
  private rawValue: unknown;
  private passthrough = false;

  public constructor(public readonly settings: JsonSettings) {
    super();
    this.json = alloc(INITIAL_BUFFER_SIZE);
  }

  public write(schema: Schema, value: unknown): void {
    this.i = 0;
    this.rawValue = value;
    this.rootSchema = NormalizedSchema.of(schema);
    this.passthrough = this.rootSchema.isBlobSchema() || this.rootSchema.isStringSchema();
    if (!this.passthrough) {
      this.writeValue(this.rootSchema, value, undefined);
    }
  }

  /**
   * @internal
   */
  public writeDiscriminatedDocument(schema: Schema, value: unknown): void {
    this.i = 0;
    this.rootSchema = NormalizedSchema.of(schema);
    const ns = this.rootSchema;
    if (ns.isStructSchema() && value != null && typeof value === "object") {
      // Serialize the struct normally, then inject __type as the first key
      // by shifting the buffer contents after the opening brace.
      this.writeValue(ns, value, undefined);
      const prefix = `"__type":"${ns.getName(true) ?? "Unknown"}",`;
      const z = prefix.length;
      this.ensure(z);
      this.json.copyWithin(1 + z, 1, this.i);
      encoder.encodeInto(prefix, this.json.subarray(1));
      this.i += z;
    } else {
      this.writeValue(ns, value, undefined);
    }
  }

  /**
   * Returns the serialized JSON as a Uint8Array (UTF-8 bytes).
   * This is the primary output — pass directly to request.body.
   */
  public flush(): Uint8Array {
    this.rootSchema = undefined;
    const finalPosition = this.i;
    this.i = 0;
    const raw = this.rawValue;
    this.rawValue = undefined;

    if (finalPosition === 0) {
      // Nothing was serialized, so return the raw input value as-is.
      // This handles httpPayload passthrough: the protocol framework
      // uses truthiness to detect "no body" (falsy) vs raw payload (truthy).
      return raw as any;
    }

    // Hand off the current buffer (subarray view) to the caller.
    // Allocate a fresh buffer for the next write so the caller owns the data.
    // Start small; ensure() will grow as needed during the next write().
    // This was benchmarked to perform better overall than e.g.
    // maintaining a larger buffer but copying out the bytes.
    const result = this.json.subarray(0, finalPosition);
    this.json = alloc(INITIAL_BUFFER_SIZE);
    return result;
  }

  protected ensure(byteCount: number): void {
    const { i, json } = this;
    if (i + byteCount > json.length) {
      let newSize = json.length * 2;
      while (newSize < i + byteCount) {
        newSize *= 2;
      }
      const next = alloc(newSize);
      next.set(this.json);
      this.json = next;
    }
  }

  /**
   * Write a raw ASCII string (no JSON escaping). Used for pre-validated content
   * like numeric literals and pre-encoded base64.
   */
  protected writeAscii(s: string): void {
    const z = s.length;
    this.ensure(z);
    let { i, json } = this;
    for (let j = 0; j < z; ++j) {
      json[i] = s.charCodeAt(j);
      i += 1;
    }
    this.i = i;
  }

  /**
   * Write a quoted ASCII string with no escape checking.
   * Used for struct member keys (jsonName or model names) which are
   * guaranteed to be safe ASCII identifiers. No control chars, quotes,
   * backslashes, or non-ASCII.
   * Ensures extra room for surrounding structural chars (comma, colon).
   */
  protected writeAsciiQuoted(s: string): void {
    const z = s.length;
    this.ensure(z + 4); // +2 quotes, +1 colon after, +1 comma before next
    let { json, i } = this;
    json[i++] = QUOTE;
    for (let j = 0; j < z; ++j) {
      json[i++] = s.charCodeAt(j);
    }
    json[i++] = QUOTE;
    this.i = i;
  }

  /**
   * Write a JSON-escaped string including the surrounding quotes.
   * Fast-path for ASCII, falls back to TextEncoder for multi-byte.
   */
  protected writeJsonString(s: string): void {
    // Worst case: every char needs \uXXXX (6 bytes) + 2 quotes
    // But we'll grow dynamically, so just ensure a reasonable amount
    this.ensure(s.length * 3 + 2);
    this.json[this.i++] = QUOTE;

    const z = s.length;
    for (let j = 0; j < z; ++j) {
      const c = s.charCodeAt(j);

      if (c > 0x22 && c < 0x5c) {
        // Fast path: printable ASCII that isn't " (0x22) or \ (0x5c)
        this.json[this.i++] = c;
      } else if (c < 0x80) {
        // ASCII range — check if it needs escaping
        const esc = ESCAPE_TABLE[c];
        if (esc !== null) {
          this.ensure(esc.length + 1);
          this.json[this.i++] = BACKSLASH;
          for (let k = 0; k < esc.length; k++) {
            this.json[this.i++] = esc.charCodeAt(k);
          }
        } else {
          this.json[this.i++] = c;
        }
      } else if (c >= 0xd800 && c <= 0xdbff) {
        // Surrogate pair — use TextEncoder for the pair
        const next = j + 1 < z ? s.charCodeAt(j + 1) : 0;
        if (next >= 0xdc00 && next <= 0xdfff) {
          this.ensure(4);
          const { written } = encoder.encodeInto(s.substring(j, j + 2), this.json.subarray(this.i));
          this.i += written!;
          ++j; // skip the low surrogate in the loop
        } else {
          this.ensure(6);
          this.writeUnicodeEscape(c);
        }
      } else if (c >= 0xdc00 && c <= 0xdfff) {
        // Lone low surrogate — escape
        this.ensure(6);
        this.writeUnicodeEscape(c);
      } else {
        let { i, json } = this;
        // Non-ASCII BMP character — encode as UTF-8 directly
        if (c < 0x800) {
          json[i++] = 0xc0 | (c >> 6);
          json[i++] = 0x80 | (c & 0x3f);
        } else {
          json[i++] = 0xe0 | (c >> 12);
          json[i++] = 0x80 | ((c >> 6) & 0x3f);
          json[i++] = 0x80 | (c & 0x3f);
        }
        this.i = i;
      }
    }

    this.json[this.i++] = QUOTE;
  }

  protected writeUnicodeEscape(code: number): void {
    let { json, i } = this;
    json[i++] = BACKSLASH;
    json[i++] = 0x75; // 'u'
    const hex = code.toString(16).padStart(4, "0");
    for (let j = 0; j < 4; ++j) {
      json[i++] = hex.charCodeAt(j);
    }
    this.i = i;
  }

  // Base64 alphabet as ASCII byte values
  protected static readonly B64: Uint8Array = /* @__PURE__ */ (() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const table = new Uint8Array(64);
    for (let i = 0; i < 64; ++i) {
      table[i] = chars.charCodeAt(i);
    }
    return table;
  })();

  /**
   * Write a Uint8Array as a quoted base64 string directly into the buffer.
   * No intermediate JS string, no escape checking (base64 alphabet is safe ASCII).
   */
  protected writeBase64(data: Uint8Array): void {
    const b64Len = Math.ceil(data.length / 3) * 4;
    this.ensure(b64Len + 2); // +2 for quotes
    const json = this.json;
    const B64 = JsonShapeSerializer2.B64;
    let i = this.i;

    json[i++] = QUOTE;

    const len = data.length;
    const remainder = len % 3;
    const mainLen = len - remainder;

    // Encode 3 bytes → 4 base64 chars
    for (let j = 0; j < mainLen; j += 3) {
      const a = data[j];
      const b = data[j + 1];
      const c = data[j + 2];
      json[i++] = B64[a >> 2];
      json[i++] = B64[((a & 0x03) << 4) | (b >> 4)];
      json[i++] = B64[((b & 0x0f) << 2) | (c >> 6)];
      json[i++] = B64[c & 0x3f];
    }

    // Handle remaining bytes with padding
    if (remainder === 2) {
      const a = data[mainLen];
      const b = data[mainLen + 1];
      json[i++] = B64[a >> 2];
      json[i++] = B64[((a & 0x03) << 4) | (b >> 4)];
      json[i++] = B64[(b & 0x0f) << 2];
      json[i++] = 0x3d; // '='
    } else if (remainder === 1) {
      const a = data[mainLen];
      json[i++] = B64[a >> 2];
      json[i++] = B64[(a & 0x03) << 4];
      json[i++] = 0x3d; // '='
      json[i++] = 0x3d; // '='
    }

    json[i++] = QUOTE;
    this.i = i;
  }

  protected writeValue(schema: Schema, value: unknown, container: NormalizedSchema | undefined): void {
    if (value == null) {
      if (container?.isStructSchema()) {
        // Idempotency tokens should be auto-generated when undefined.
        if (value === undefined) {
          const ns = NormalizedSchema.of(schema);
          if (ns.isIdempotencyToken()) {
            this.writeAsciiQuoted(generateIdempotencyToken());
            return;
          }
        }
        // In structs, nulls are omitted — this shouldn't be reached because
        // callers skip undefined/null members. But if it is, write nothing.
        return;
      }
      // In lists/maps (sparse), write "null"
      this.ensure(4);
      this.json.set(NULL, this.i);
      this.i += 4;
      return;
    }

    const ns = NormalizedSchema.of(schema);
    const isObject = typeof value === "object";

    // Media type JSON fields: serialize the value as a JSON string (double-encoded).
    // Must be checked before object/primitive branching since the value can be any type.
    if (ns.isStringSchema()) {
      const mediaType = ns.getMergedTraits().mediaType;
      if (mediaType) {
        const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
        if (isJson) {
          this.writeJsonString(LazyJsonString.from(value).toString());
          return;
        }
      }
    }

    if (isObject) {
      if (ns.isStructSchema()) {
        this.writeStruct(ns, value as Record<string, unknown>);
        return;
      }

      if (Array.isArray(value) && (ns.isListSchema() || ns.isDocumentSchema())) {
        this.writeList(ns, value, ns.isDocumentSchema());
        return;
      }

      if (ns.isMapSchema()) {
        this.writeMap(ns, value as Record<string, unknown>, false);
        return;
      }

      if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
        this.writeBase64(value);
        return;
      }

      if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
        this.writeTimestamp(ns, value);
        return;
      }

      if (value instanceof NumericValue) {
        this.writeAscii(value.string);
        return;
      }

      // Document or unknown object, recurse as map-like
      if (ns.isDocumentSchema()) {
        if (Array.isArray(value)) {
          this.writeList(ns, value, true);
        } else {
          this.writeMap(ns, value as Record<string, unknown>, true);
        }
        return;
      }

      // Fallback: stringify via JSON.stringify (should be rare)
      const json = JSON.stringify(value);
      this.writeAscii(json);
      return;
    }

    if (typeof value === "string") {
      if (ns.isBlobSchema()) {
        // string blob (already base64 or needs encoding)
        const b64 = (this.serdeContext?.base64Encoder ?? toBase64)(value);
        this.writeAsciiQuoted(b64);
        return;
      }
      this.writeJsonString(value);
      return;
    }

    if (typeof value === "number") {
      if (ns.isNumericSchema() && (Math.abs(value) === Infinity || isNaN(value))) {
        // Infinity/NaN as quoted strings
        this.writeAsciiQuoted(String(value));
        return;
      }
      // Write numeric literal directly
      const numStr = String(value);
      this.writeAscii(numStr);
      return;
    }

    if (typeof value === "boolean") {
      this.ensure(5);
      let { i, json } = this;
      if (value) {
        json.set(TRUE, i);
        i += 4;
      } else {
        json.set(FALSE, i);
        i += 5;
      }
      this.i = i;
      return;
    }

    if (typeof value === "bigint") {
      // Write bigint as raw numeric literal (no quotes)
      this.writeAscii(value.toString());
      return;
    }

    // Fallback
    this.writeAscii(String(value));
  }

  protected writeStruct(ns: NormalizedSchema, value: Record<string, unknown>): void {
    this.ensure(2);
    this.json[this.i++] = OPEN_BRACE;
    let wroteAny = false;

    // Track written keys (both source member names and target json names)
    // so we can handle __type document members below.
    const hasType = typeof value.__type === "string";
    let writtenKeys: Set<string> | undefined;
    if (hasType) {
      writtenKeys = new Set();
    }

    for (const [memberName, memberSchema] of ns.structIterator()) {
      const item = value[memberName];
      if (item == null && !memberSchema.isIdempotencyToken()) {
        continue;
      }

      if (wroteAny) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      wroteAny = true;

      const targetKey = this.settings.jsonName ? (memberSchema.getMergedTraits().jsonName ?? memberName) : memberName;
      if (writtenKeys) {
        writtenKeys.add(memberName);
        writtenKeys.add(targetKey);
      }
      this.writeAsciiQuoted(targetKey);
      this.json[this.i++] = COLON;
      this.writeValue(memberSchema, item, ns);
    }

    if (!wroteAny && ns.isUnionSchema()) {
      const { $unknown } = value as any;
      if (Array.isArray($unknown)) {
        const [k, v] = $unknown;
        this.writeAsciiQuoted(k);
        this.ensure(1);
        this.json[this.i++] = COLON;
        this.writeValue(15 satisfies DocumentSchema, v, ns);
      }
    } else if (hasType) {
      // Write extra document members not covered by the struct schema.
      for (const k in value) {
        if (writtenKeys!.has(k)) {
          continue;
        }
        writtenKeys!.add(k);
        const v = value[k];
        if (wroteAny) {
          this.ensure(1);
          this.json[this.i++] = COMMA;
        }
        wroteAny = true;
        this.writeAsciiQuoted(k);
        this.ensure(1);
        this.json[this.i++] = COLON;
        this.writeValue(15 satisfies DocumentSchema, v, undefined);
      }
    }

    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACE;
  }

  protected writeList(ns: NormalizedSchema, value: unknown[], isDocument?: boolean): void {
    const sparse = !!ns.getMergedTraits().sparse;
    const valueSchema = ns.getValueSchema();

    if (!isDocument) {
      if (valueSchema.isStringSchema() || valueSchema.isNumericSchema() || valueSchema.isBooleanSchema()) {
        const json = sparse ? JSON.stringify(value) : JSON.stringify(value.filter((_) => _ != null));
        this.ensure(json.length * 3);
        this.i += encoder.encodeInto(json, this.json.subarray(this.i)).written;
        return;
      }
    }

    this.ensure(2);
    this.json[this.i++] = OPEN_BRACKET;
    let wroteFirstItem = false;

    for (let i = 0; i < value.length; ++i) {
      const item = value[i];
      if (isDocument ? item === undefined : item == null && !sparse) {
        continue;
      }
      if (wroteFirstItem) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      // undefined is the correct "container" here.
      this.writeValue(valueSchema, item, undefined);
      wroteFirstItem = true;
    }

    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACKET;
  }

  protected writeMap(ns: NormalizedSchema, value: Record<string, unknown>, isDocument?: boolean): void {
    const sparse = !!ns.getMergedTraits().sparse;
    const valueSchema = ns.getValueSchema();

    // Fast path: when value type is a JSON-native primitive (string, number, boolean),
    // delegate the entire map to JSON.stringify + encodeInto.
    // This leverages V8's native C++ string escaping which is significantly faster than
    // character-by-character escaping in JS for string-heavy maps.
    if (!isDocument) {
      if (valueSchema.isStringSchema() || valueSchema.isNumericSchema() || valueSchema.isBooleanSchema()) {
        // For sparse maps, JSON.stringify omits undefined values instead of writing null.
        // Convert undefined to null to match production serializer behavior.
        let input: Record<string, unknown> = value;
        if (sparse) {
          input = {};
          for (const k in value) {
            if (k === "__proto__") {
              writeKey(input);
            }
            input[k] = value[k] ?? null;
          }
        }
        const json = JSON.stringify(input);
        this.ensure(json.length * 3); // worst-case UTF-8 expansion
        this.i += encoder.encodeInto(json, this.json.subarray(this.i)).written;
        return;
      }
    }

    this.ensure(2);
    this.json[this.i++] = OPEN_BRACE;
    let first = true;

    for (const k in value) {
      const v = value[k];
      if (isDocument ? v === undefined : v == null && !sparse) {
        continue;
      }
      if (!first) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      first = false;
      this.writeJsonString(k);
      this.ensure(1);
      this.json[this.i++] = COLON;
      this.writeValue(valueSchema, v, undefined);
    }
    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACE;
  }

  protected writeTimestamp(ns: NormalizedSchema, value: Date): void {
    const format = determineTimestampFormat(ns, this.settings);
    switch (format) {
      case 5 satisfies TimestampDateTimeSchema: {
        const iso = value.toISOString().replace(".000Z", "Z");
        this.writeAsciiQuoted(iso);
        return;
      }
      case 6 satisfies TimestampHttpDateSchema: {
        this.writeAsciiQuoted(dateToUtcString(value));
        return;
      }
      case 7 satisfies TimestampEpochSecondsSchema: {
        const epochSecs = String(value.getTime() / 1000);
        this.writeAscii(epochSecs);
        return;
      }
      default: {
        const epochSecs = String(value.getTime() / 1000);
        this.writeAscii(epochSecs);
        return;
      }
    }
  }
}
