import { type JsonSettings, JsonCodec } from "@aws-sdk/core/protocols";
import { HttpInterceptingShapeDeserializer, HttpInterceptingShapeSerializer } from "@smithy/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type {
  $ShapeDeserializer,
  $ShapeSerializer,
  StaticErrorSchema,
  TimestampEpochSecondsSchema,
} from "@smithy/types";

import { HttpBindingSnapshotResponseSerializer } from "./abstract/HttpBindingSnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsRestJsonSnapshotResponseSerializer extends HttpBindingSnapshotResponseSerializer {
  protected codec = new JsonCodec({
    timestampFormat: {
      useTrait: true,
      default: 7 as const satisfies TimestampEpochSecondsSchema,
    },
    httpBindings: true,
    jsonName: true,
  });
  protected serializer: $ShapeSerializer<any>;
  protected deserializer: $ShapeDeserializer<any>;

  public constructor() {
    super();
    const settings: JsonSettings = {
      timestampFormat: {
        useTrait: true,
        default: 7 as const satisfies TimestampEpochSecondsSchema,
      },
      httpBindings: true,
      jsonName: true,
    };
    this.codec = new JsonCodec(settings);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
    this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
  }

  /**
   * @override
   */
  public getDefaultContentType(): string {
    return "application/json";
  }

  public getShapeId(): string {
    return "aws.protocols#restJson1";
  }

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    const [, namespace, name, traits, fields, members] = $error.getSchema() as StaticErrorSchema;

    const $typed = [
      -3,
      namespace,
      name,
      traits,
      ["XAmznErrorType", ...fields],
      [[0, { httpHeader: "x-amzn-errortype" }], ...members],
    ] satisfies StaticErrorSchema;

    if (!fields.some((f) => f.toLowerCase() === "message")) {
      $typed[4].push("message");
      $typed[5].push(0);
    }

    return [
      NormalizedSchema.of($typed),
      {
        XAmznErrorType: `${namespace}#${name}`,
        ...output,
      },
    ];
  }
}
