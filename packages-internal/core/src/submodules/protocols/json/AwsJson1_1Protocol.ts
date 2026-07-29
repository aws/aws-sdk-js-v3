import type { TypeRegistry } from "@smithy/core/schema";

import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";
import type { JsonCodec } from "./codec-v1/JsonCodec";
import type { JsonCodec2 } from "./codec-v2/JsonCodec2";

/**
 * @public
 * @see https://smithy.io/2.0/aws/protocols/aws-json-1_1-protocol.html#differences-between-awsjson1-0-and-awsjson1-1
 */
export class AwsJson1_1Protocol extends AwsJsonRpcProtocol {
  public constructor({
    defaultNamespace,
    errorTypeRegistries,
    serviceTarget,
    awsQueryCompatible,
    jsonCodec,
  }: {
    defaultNamespace: string;
    errorTypeRegistries?: TypeRegistry[];
    serviceTarget: string;
    awsQueryCompatible?: boolean;
    jsonCodec?: JsonCodec | JsonCodec2;
  }) {
    super({
      defaultNamespace,
      errorTypeRegistries,
      serviceTarget,
      awsQueryCompatible,
      jsonCodec,
    });
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_1";
  }

  protected getJsonRpcVersion() {
    return "1.1" as const;
  }

  /**
   * @override
   */
  protected getDefaultContentType(): string {
    return "application/x-amz-json-1.1";
  }
}
