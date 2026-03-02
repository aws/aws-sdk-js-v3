import { type XmlSettings, XmlCodec } from "@aws-sdk/core/protocols";
import { HttpInterceptingShapeDeserializer, HttpInterceptingShapeSerializer } from "@smithy/core/protocols";
import type { $Codec, $ShapeDeserializer, $ShapeSerializer, TimestampDateTimeSchema } from "@smithy/types";

import { HttpBindingSnapshotResponseSerializer } from "./abstract/HttpBindingSnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsRestXmlSnapshotResponseSerializer extends HttpBindingSnapshotResponseSerializer {
  protected codec: $Codec<any, any> | null;
  protected serializer: $ShapeSerializer<any>;
  protected deserializer: $ShapeDeserializer<any>;

  public constructor() {
    super();
    const settings: XmlSettings = {
      timestampFormat: {
        useTrait: true,
        default: 5 as const satisfies TimestampDateTimeSchema,
      },
      httpBindings: true,
      xmlNamespace: "https://placeholder.amazonaws.com",
      serviceNamespace: "Placeholder",
    };
    this.codec = new XmlCodec(settings);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
    this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
  }

  /**
   * @override
   */
  public getDefaultContentType(): string {
    return "application/xml";
  }

  public getShapeId(): string {
    return "aws.protocols#restXml";
  }
}
