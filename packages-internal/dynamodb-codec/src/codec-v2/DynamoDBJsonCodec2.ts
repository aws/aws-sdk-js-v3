import { JsonCodec2, JsonShapeDeserializer2, JsonShapeSerializer2 } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { fromBase64, toBase64, toUtf8 } from "@smithy/core/serde";
import type { $ShapeDeserializer, $ShapeSerializer, Schema } from "@smithy/types";

const ATTRIBUTE_VALUE = "com.amazonaws.dynamodb#AttributeValue";

type AttributeValueInput = {
  B?: Uint8Array | string;
  BS?: Array<Uint8Array | string>;
  L?: Array<AttributeValueInput>;
  M?: Record<string, AttributeValueInput>;
  [key: string]: unknown;
};

type AttributeValueOutput = {
  B?: Uint8Array;
  BS?: Uint8Array[];
  L?: Array<AttributeValueOutput>;
  M?: Record<string, AttributeValueOutput>;
  [key: string]: unknown;
};

/**
 * DynamoDB-optimized JSON byte serializer.
 *
 * Overrides writeValue to short-circuit the schema-driven traversal for
 * AttributeValue, which is a deeply recursive union that dominates DynamoDB payloads.
 * Instead of resolving schema per-value, this serializes the known fixed structure
 * directly into the byte buffer.
 *
 * @internal
 */
class DynamoDBJsonShapeSerializer2 extends JsonShapeSerializer2 {
  /**
   * @override
   */
  protected override writeValue(schema: Schema, value: unknown, container: NormalizedSchema | undefined): void {
    if (value != null && typeof value === "object") {
      const ns = NormalizedSchema.of(schema);
      if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
        this.writeAttributeValue(value as AttributeValueInput);
        return;
      }
    }
    super.writeValue(schema, value, container);
  }

  /**
   * Writes an AttributeValue directly into the byte buffer without schema lookups.
   * Handles B/BS blob encoding and recurses for L/M.
   */
  private writeAttributeValue(av: AttributeValueInput): void {
    const base64Encode = this.serdeContext?.base64Encoder ?? toBase64;

    this.writeAscii("{");
    let first = true;

    for (const key in av) {
      const val = av[key];
      if (val == null) continue;

      if (!first) {
        this.writeAscii(",");
      }
      first = false;

      this.writeAsciiQuoted(key);
      this.writeAscii(":");

      switch (key) {
        case "B":
          // Blob → base64 string
          if (val instanceof Uint8Array) {
            this.writeBase64(val);
          } else {
            // Already a string (base64 encoded)
            this.writeJsonString(val as string);
          }
          break;

        case "BS":
          // Blob set → array of base64 strings
          this.writeAscii("[");
          {
            const arr = val as Array<Uint8Array | string>;
            for (let i = 0; i < arr.length; i++) {
              if (i > 0) this.writeAscii(",");
              const item = arr[i];
              if (item instanceof Uint8Array) {
                this.writeBase64(item);
              } else {
                this.writeJsonString(base64Encode(item));
              }
            }
          }
          this.writeAscii("]");
          break;

        case "L":
          // List of AttributeValues
          this.writeAscii("[");
          {
            const arr = val as Array<AttributeValueInput>;
            for (let i = 0; i < arr.length; i++) {
              if (i > 0) this.writeAscii(",");
              if (arr[i] != null) {
                this.writeAttributeValue(arr[i]);
              } else {
                this.writeAscii("null");
              }
            }
          }
          this.writeAscii("]");
          break;

        case "M":
          // Map of string → AttributeValue
          this.writeAscii("{");
          {
            const map = val as Record<string, AttributeValueInput>;
            let mapFirst = true;
            for (const k in map) {
              if (map[k] == null) continue;
              if (!mapFirst) this.writeAscii(",");
              mapFirst = false;
              this.writeJsonString(k);
              this.writeAscii(":");
              this.writeAttributeValue(map[k]);
            }
          }
          this.writeAscii("}");
          break;

        case "SS":
        case "NS":
          // String set / Number set → array of strings
          this.writeAscii("[");
          {
            const arr = val as string[];
            for (let i = 0; i < arr.length; i++) {
              if (i > 0) this.writeAscii(",");
              this.writeJsonString(arr[i]);
            }
          }
          this.writeAscii("]");
          break;

        case "S":
        case "N":
          // String or Number → JSON string
          this.writeJsonString(val as string);
          break;

        case "BOOL":
          this.writeAscii(val ? "true" : "false");
          break;

        case "NULL":
          this.writeAscii(val ? "true" : "false");
          break;

        default:
          // Unknown member — serialize as JSON string fallback
          this.writeAscii(JSON.stringify(val));
          break;
      }
    }

    this.writeAscii("}");
  }
}

/**
 * String adapter for the DynamoDB byte serializer.
 * @internal
 */
class DynamoDBStringShapeSerializer2 extends DynamoDBJsonShapeSerializer2 implements $ShapeSerializer<string> {
  public override flush(): any {
    return (this.serdeContext?.utf8Encoder ?? toUtf8)(super.flush());
  }
}

/**
 * @internal
 */
class DynamoDBJsonShapeDeserializer2 extends JsonShapeDeserializer2 {
  /**
   * The incoming value is safe to mutate. It is always created by the parser
   * right before entry to this function and not owned or referenceable by anyone else.
   *
   * @override
   */
  protected override _read(schema: Schema, value: unknown): any {
    const ns = NormalizedSchema.of(schema);

    if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
      if (value && typeof value === "object") {
        return this.readAttributeValue(value as Record<string, unknown>);
      }
    }
    return super._read(ns, value);
  }

  /**
   * Reads an AttributeValue directly without schema lookups.
   * Handles B/BS base64 decoding and recurses for L/M.
   */
  private readAttributeValue(av: Record<string, unknown>): AttributeValueOutput {
    const base64Decode = this.serdeContext?.base64Decoder ?? fromBase64;
    const out = av as AttributeValueOutput;

    if (typeof av.B === "string") {
      out.B = base64Decode(av.B);
    }
    if (Array.isArray(av.BS)) {
      out.BS = (av.BS as string[]).map(base64Decode);
    }
    if (Array.isArray(av.L)) {
      out.L = (av.L as Array<Record<string, unknown>>).map((v) => this.readAttributeValue(v));
    }
    if (av.M && typeof av.M === "object") {
      const m = av.M as Record<string, Record<string, unknown>>;
      for (const k in m) {
        m[k] = this.readAttributeValue(m[k]) as any;
      }
    }
    return out;
  }
}

/**
 * A throughput optimized version of the AWS JSON Codec
 * for use with Amazon DynamoDB in JSON RPC mode.
 *
 * @internal
 */
export class DynamoDBJsonCodec2 extends JsonCodec2 {
  public constructor() {
    super({
      timestampFormat: {
        useTrait: true,
        default: 7 as const,
      },
      jsonName: false,
    });
  }

  public override createSerializer(): $ShapeSerializer<Uint8Array> {
    const serializer = new DynamoDBStringShapeSerializer2(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }

  public override createDeserializer(): $ShapeDeserializer<string> {
    const deserializer = new DynamoDBJsonShapeDeserializer2(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
