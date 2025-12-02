import { JsonCodec, JsonShapeDeserializer, JsonShapeSerializer } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import { _json } from "@smithy/smithy-client";
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
   * @override
   */
  protected _write(schema: Schema, value: unknown, container?: NormalizedSchema): any {
    const ns = NormalizedSchema.of(schema);
    if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
      if (value && typeof value === "object") {
        const av = value as AttributeValueInput;
        const out: SerializedAttributeValue = _json(av);
        const base64Encode = this.serdeContext?.base64Encoder ?? toBase64;
        if (av.B instanceof Uint8Array) {
          out.B = base64Encode(av.B);
        }
        if (Array.isArray(av.BS)) {
          out.BS = av.BS.map(base64Encode);
        }
        if (Array.isArray(av.L)) {
          out.L = av.L.filter((v) => v != null).map((v) => this._write(ns, v, container));
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
}

/**
 * @internal
 */
class DynamoDBJsonShapeDeserializer extends JsonShapeDeserializer {
  /**
   * @override
   */
  protected _read(schema: Schema, value: unknown): any {
    const ns = NormalizedSchema.of(schema);
    if (ns.isStructSchema() && ns.getName(true) === ATTRIBUTE_VALUE) {
      if (value && typeof value === "object") {
        const av = value as SerializedAttributeValue;
        const out: AttributeValueOutput = _json(av);
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
          out.M = {};
          for (const [k, v] of Object.entries(av.M)) {
            out.M[k] = this._read(ns, v);
          }
        }
        return out;
      }
    }
    return super._read(ns, value);
  }
}
