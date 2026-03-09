import { JsonCodec } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type { StaticErrorSchema, TimestampEpochSecondsSchema } from "@smithy/types";

import { RpcSnapshotResponseSerializer } from "./abstract/RpcSnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsJsonRpc1_0SnapshotResponseSerializer extends RpcSnapshotResponseSerializer {
  protected codec = new JsonCodec({
    timestampFormat: {
      useTrait: true,
      default: 7 as const satisfies TimestampEpochSecondsSchema,
    },
    jsonName: false,
    httpBindings: false,
  });
  protected serializer = this.codec.createSerializer();
  protected deserializer = this.codec.createDeserializer();

  public getDefaultContentType(): string {
    return "application/x-amz-json-1.0";
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_0";
  }

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    const [, namespace, name, traits, fields, members] = $error.getSchema() as StaticErrorSchema;

    const $typed = [-3, namespace, name, traits, ["__type", ...fields], [0, ...members]] satisfies StaticErrorSchema;

    if (!fields.some((f) => f.toLowerCase() === "message")) {
      $typed[4].push("message");
      $typed[5].push(0);
    }

    return [
      NormalizedSchema.of($typed),
      {
        __type: `${namespace}#${name}`,
        ...output,
      },
    ];
  }
}
