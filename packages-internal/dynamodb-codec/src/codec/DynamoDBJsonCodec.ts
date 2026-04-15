import { JsonCodec, JsonShapeDeserializer, JsonShapeSerializer } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type { Schema } from "@smithy/types";
import { fromBase64, toBase64 } from "@smithy/util-base64";

/**
 * A throughput optimized version of the AWS JSON Codec
 * for use with Amazon DynamoDB in JSON RPC mode.
 *
 * @internal
 */
export class DynamoDBJsonCodec extends JsonCodec {
  public constructor() {
    super({
      timestampFormat: {
        useTrait: true,
        default: 7 as const,
      },
      jsonName: false,
    });
  }

  /**
   * @override
   */
  public createSerializer(): JsonShapeSerializer {
    const serializer = new DynamoDBJsonShapeSerializer(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }

  /**
   * @override
   */
  public createDeserializer(): JsonShapeDeserializer {
    const deserializer = new DynamoDBJsonShapeDeserializer(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}

const ATTRIBUTE_VALUE = "com.amazonaws.dynamodb#AttributeValue";

type AttributeValueInput = {
  B?: Uint8Array | string;
  BS?: Array<Uint8Array | string>;
  L?: Array<AttributeValueInput>;
  M?: Record<string, AttributeValueInput>;
};

type AttributeValueOutput = {
  B?: Uint8Array;
  BS?: Uint8Array[];
  L?: Array<AttributeValueOutput>;
  M?: Record<string, AttributeValueOutput>;
};

type SerializedAttributeValue = {
  B?: string;
  BS?: string[];
  L?: Array<SerializedAttributeValue>;
  M?: Record<string, SerializedAttributeValue>;
};

/**
 * @internal
 */
class DynamoDBJsonShapeSerializer extends JsonShapeSerializer {
  /**
   * The input value is not safe to mutate. There may be frames between this serializer and when
   * the request handler reads the object, in which mutations will derail the request.
   * @override
   */
  protected _write(schema: Schema, value: unknown, container?: NormalizedSchema): any {
    const ns = NormalizedSchema.of(schema);

    if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
      if (value && typeof value === "object") {
        const av = value as AttributeValueInput;
        const out: SerializedAttributeValue = this.copyRemoveNulls(av);
        const base64Encode = this.serdeContext?.base64Encoder ?? toBase64;

        if (av.B instanceof Uint8Array) {
          out.B = base64Encode(av.B);
        }
        if (Array.isArray(av.BS)) {
          out.BS = av.BS.map(base64Encode);
        }
        if (Array.isArray(av.L)) {
          const list = [];
          for (const v of av.L) {
            if (v != null) {
              list.push(this._write(ns, v, container));
            }
          }
          out.L = list;
        }
        if (av.M && typeof av.M === "object") {
          out.M = {};
          for (const [k, v] of Object.entries(av.M)) {
            if (v != null) {
              out.M[k] = this._write(ns, v, container);
            }
          }
        }
        return out;
      }
    }
    return super._write(ns, value, container);
  }

  private copyRemoveNulls(v: any): any {
    if (typeof v !== "object") {
      return v;
    }
    if (v === null) {
      return {};
    }
    if (Array.isArray(v)) {
      const out: any = [];
      for (const item of v) {
        if (item != null) {
          out.push(this.copyRemoveNulls(item));
        }
      }
      return out;
    }
    const out: any = {};
    for (const [k, _v] of Object.entries(v)) {
      if (_v != null) {
        if (["B", "BS", "L", "M"].includes(k)) {
          // handled by mutating serializer.
          continue;
        }
        out[k] = this.copyRemoveNulls(_v);
      }
    }
    return out;
  }
}

/**
 * @internal
 */
class DynamoDBJsonShapeDeserializer extends JsonShapeDeserializer {
  /**
   * The incoming value is safe to mutate. It is always created by the parser
   * right before entry to this function and not owned or referenceable by anyone else.
   *
   * @override
   */
  protected _read(schema: Schema, value: unknown): any {
    const ns = NormalizedSchema.of(schema);

    if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
      if (value && typeof value === "object") {
        const av = value as SerializedAttributeValue;
        const out: AttributeValueOutput = av as any;
        const base64Decoder = this.serdeContext?.base64Decoder ?? fromBase64;

        if (typeof av.B === "string") {
          out.B = base64Decoder(av.B);
        }
        if (Array.isArray(av.BS)) {
          out.BS = av.BS.map(base64Decoder);
        }
        if (Array.isArray(av.L)) {
          out.L = av.L.map((v) => this._read(ns, v));
        }
        if (av.M && typeof av.M === "object") {
          for (const [k, v] of Object.entries(av.M)) {
            out.M![k] = this._read(ns, v);
          }
        }
        return out;
      }
    }
    return super._read(ns, value);
  }
}
