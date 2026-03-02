import { type QuerySerializerSettings, XmlCodec } from "@aws-sdk/core/protocols";
import type { TimestampDateTimeSchema } from "@smithy/types";

import { AwsQuerySnapshotResponseSerializer } from "./AwsQuerySnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsEc2QuerySnapshotResponseSerializer extends AwsQuerySnapshotResponseSerializer {
  protected codec = new XmlCodec({
    timestampFormat: {
      useTrait: true,
      default: 5 as const satisfies TimestampDateTimeSchema,
    },
    httpBindings: true,
    xmlNamespace: "https://placeholder.amazonaws.com",
    serviceNamespace: "Placeholder",
  });
  protected serializer = this.codec.createSerializer();
  protected deserializer = this.codec.createDeserializer();

  public constructor() {
    super();
    const ec2Settings: Partial<QuerySerializerSettings> = {
      capitalizeKeys: true,
      flattenLists: true,
      serializeEmptyLists: false,
      ec2: true,
    };
    Object.assign(this.serializer.settings, ec2Settings);
  }

  public getShapeId(): string {
    return "aws.protocols#ec2Query";
  }
}
