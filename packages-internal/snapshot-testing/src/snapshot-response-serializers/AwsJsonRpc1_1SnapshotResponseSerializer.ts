import { JsonCodec } from "@aws-sdk/core/protocols";
import type { TimestampEpochSecondsSchema } from "@smithy/types";

import { RpcSnapshotResponseSerializer } from "./abstract/RpcSnapshotResponseSerializer";

/**
 * @internal
 */
export class AwsJsonRpc1_1SnapshotResponseSerializer extends RpcSnapshotResponseSerializer {
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
    return "application/x-amz-json-1.1";
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_1";
  }
}
