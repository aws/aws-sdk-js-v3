import { XmlShapeDeserializer, XmlShapeSerializer } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type {
  $Codec,
  $ShapeDeserializer,
  $ShapeSerializer,
  StaticErrorSchema,
  TimestampDateTimeSchema,
} from "@smithy/types";

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

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    const [, namespace, name, traits, fields, members] = $error.getSchema() as StaticErrorSchema;

    const $unwrapped = [
      -3,
      namespace,
      name,
      traits,
      ["Type", "Code", ...fields, "RequestId"],
      [0, 0, ...members, 0],
    ] satisfies StaticErrorSchema;
    if (!fields.some((f) => f.toLowerCase() === "message")) {
      $unwrapped[4].push("Message");
      $unwrapped[5].push(0);
    }

    const $wrapped = [
      -3,
      namespace,
      "ErrorResponse",
      traits,
      ["Error", "RequestId"],
      [$unwrapped, 0],
    ] satisfies StaticErrorSchema;
    return [
      NormalizedSchema.of($wrapped),
      {
        ErrorResponse: {
          Error: {
            Type: "Sender",
            Code: name,
            Message: "unmodeled message.",
            ...output,
          },
          RequestId: "00000000-0000-4000-8000-000000000000",
        },
      },
    ];
  }
}
