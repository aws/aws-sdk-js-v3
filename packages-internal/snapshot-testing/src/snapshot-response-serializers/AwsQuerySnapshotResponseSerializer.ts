import { XmlShapeDeserializer, XmlShapeSerializer } from "@aws-sdk/core/protocols";
import type { $Codec, $ShapeDeserializer, $ShapeSerializer, TimestampDateTimeSchema } from "@smithy/types";

import { RpcSnapshotResponseSerializer } from "./abstract/RpcSnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsQuerySnapshotResponseSerializer extends RpcSnapshotResponseSerializer {
  protected codec: $Codec<any, any> | null = null;
  protected serializer: $ShapeSerializer<any>;
  protected deserializer: $ShapeDeserializer<any>;

  public constructor() {
    super();
    const settings = {
      timestampFormat: {
        useTrait: true,
        default: 5 as const satisfies TimestampDateTimeSchema,
      },
      httpBindings: false,
      xmlNamespace: "https://placeholder.amazonaws.com",
      serviceNamespace: "Placeholder",
      serializeEmptyLists: true,
    };
    this.serializer = new XmlShapeSerializer(settings);
    this.deserializer = new XmlShapeDeserializer(settings);
  }

  /**
   * "application/x-www-form-urlencoded" is the request-side counterpart.
   * @override
   */
  public getDefaultContentType(): string {
    return "application/xml";
  }

  public getShapeId(): string {
    return "aws.protocols#awsQuery";
  }
}
