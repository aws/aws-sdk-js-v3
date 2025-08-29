import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

/**
 * @alpha
 * @see https://smithy.io/2.0/aws/protocols/aws-json-1_1-protocol.html#differences-between-awsjson1-0-and-awsjson1-1
 */
export class AwsJson1_0Protocol extends AwsJsonRpcProtocol {
  public constructor({
    defaultNamespace,
    serviceTarget,
    awsQueryCompatible,
  }: {
    defaultNamespace: string;
    serviceTarget: string;
    awsQueryCompatible?: boolean;
  }) {
    super({
      defaultNamespace,
      serviceTarget,
      awsQueryCompatible,
    });
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_0";
  }

  protected getJsonRpcVersion() {
    return "1.0" as const;
  }

  /**
   * @override
   */
  protected getDefaultContentType(): string {
    return "application/x-amz-json-1.0";
  }
}
