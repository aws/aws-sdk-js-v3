import { Codec, CodecSettings, ShapeDeserializer, ShapeSerializer } from "@smithy/types";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

export type XmlSettings = CodecSettings & {
  xmlNamespace: string;
  serviceNamespace: string;
};

export class XmlCodec extends SerdeContextConfig implements Codec<Uint8Array | string, Uint8Array | string> {
  public constructor(public readonly settings: XmlSettings) {
    super();
  }

  public createSerializer(): XmlShapeSerializer {
    const serializer = new XmlShapeSerializer(this.settings);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }
  public createDeserializer(): XmlShapeDeserializer {
    const deserializer = new XmlShapeDeserializer(this.settings);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
