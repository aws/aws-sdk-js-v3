import type { $ShapeSerializer, $Codec, $ShapeDeserializer } from "@smithy/types";

import { SerdeContextConfig } from "../../ConfigurableSerdeContext";
import { JsonShapeDeserializer2 } from "./JsonShapeDeserializer2";
import { JsonShapeSerializer2 } from "./JsonShapeSerializer2";
import type { JsonSettings } from "../JsonSettings";

/**
 * Codec grouping the v2 serializer and deserializer.
 * @public
 */
export class JsonCodec2 extends SerdeContextConfig implements $Codec<Uint8Array, string> {
  public constructor(public readonly settings: JsonSettings) {
    super();
  }

  public createSerializer(): $ShapeSerializer<Uint8Array> {
    const serializer = new JsonShapeSerializer2(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }

  public createDeserializer(): $ShapeDeserializer<string> {
    const deserializer = new JsonShapeDeserializer2(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
