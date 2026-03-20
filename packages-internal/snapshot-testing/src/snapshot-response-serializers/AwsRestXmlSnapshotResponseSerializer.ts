import { type XmlSettings, XmlCodec } from "@aws-sdk/core/protocols";
import { HttpInterceptingShapeDeserializer, HttpInterceptingShapeSerializer } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type {
  $Codec,
  $ShapeDeserializer,
  $ShapeSerializer,
  StaticErrorSchema,
  TimestampDateTimeSchema,
} from "@smithy/types";

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

    if (namespace.endsWith("com.amazonaws.s3")) {
      return [
        NormalizedSchema.of($unwrapped),
        Object.assign(
          {
            Type: "Sender",
            Code: name,
            RequestId: "00000000-0000-4000-8000-000000000000",
            Message: "unmodeled message.",
          },
          output
        ),
      ];
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
        Error: {
          Type: "Sender",
          Code: name,
          Message: "unmodeled message.",
          ...output,
        },
        RequestId: "00000000-0000-4000-8000-000000000000",
      },
    ];
  }
}
