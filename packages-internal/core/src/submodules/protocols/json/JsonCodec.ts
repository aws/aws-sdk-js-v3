import type { Codec, CodecSettings } from "@smithy/types";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { JsonShapeDeserializer } from "./JsonShapeDeserializer";
import { JsonShapeSerializer } from "./JsonShapeSerializer";

/**
 * @public
 */
export type JsonSettings = CodecSettings & {
  jsonName: boolean;
};

/**
 * @public
 */
export class JsonCodec extends SerdeContextConfig implements Codec<string, string> {
  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public createSerializer(): JsonShapeSerializer {
    const serializer = new JsonShapeSerializer(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }

  public createDeserializer(): JsonShapeDeserializer {
    const deserializer = new JsonShapeDeserializer(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
