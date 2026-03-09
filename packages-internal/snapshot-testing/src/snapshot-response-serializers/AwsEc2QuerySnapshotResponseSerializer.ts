import { type QuerySerializerSettings, XmlCodec } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, TimestampDateTimeSchema } from "@smithy/types";

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

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    const [, namespace, name, traits, fields, members] = $error.getSchema() as StaticErrorSchema;

    const $unwrapped = [
      -3,
      namespace,
      name,
      traits,
      ["Code", ...fields, "RequestId"],
      [0, ...members, 0],
    ] satisfies StaticErrorSchema;
    if (!fields.some((f) => f.toLowerCase() === "message")) {
      $unwrapped[4].push("Message");
      $unwrapped[5].push(0);
    }

    const $wrapped = [
      -3,
      namespace,
      "Response",
      traits,
      ["Errors", "RequestId"],
      [[1, namespace, "Errors", { xmlName: "Error" }, $unwrapped] satisfies StaticListSchema, 0],
    ] satisfies StaticErrorSchema;
    return [
      NormalizedSchema.of($wrapped),
      {
        Response: {
          Errors: [
            {
              Code: name,
              Message: "unmodeled message.",
              ...output,
            },
          ],
          RequestId: "00000000-0000-4000-8000-000000000000",
        },
      },
    ];
  }
}
