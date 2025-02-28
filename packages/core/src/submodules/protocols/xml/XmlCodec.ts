import { Codec, ShapeDeserializer, ShapeSerializer } from "@smithy/types";

import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

export class XmlCodec implements Codec<string, Uint8Array | string> {
  public constructor(public readonly xmlNamespace: string, public readonly serviceNamespace: string) {}

  public createSerializer(): ShapeSerializer<string> {
    return new XmlShapeSerializer(this.xmlNamespace);
  }
  public createDeserializer(): ShapeDeserializer<string> {
    return new XmlShapeDeserializer(this.serviceNamespace);
  }
}
