import { Codec, SerdeContext, ShapeDeserializer, ShapeSerializer } from "@smithy/types";

import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

export class XmlCodec implements Codec<string, Uint8Array | string> {
  private serdeContext?: SerdeContext;

  public constructor(public readonly xmlNamespace: string, public readonly serviceNamespace: string) {}

  public createSerializer(): ShapeSerializer<string> {
    const serializer = new XmlShapeSerializer(this.xmlNamespace);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }
  public createDeserializer(): ShapeDeserializer<string> {
    const deserializer = new XmlShapeDeserializer(this.serviceNamespace);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }

  public setSerdeContext(serdeContext: SerdeContext): void {
    this.serdeContext = serdeContext;
  }
}
