import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

/**
 * @alpha
 * @see https://smithy.io/2.0/aws/protocols/aws-json-1_1-protocol.html#differences-between-awsjson1-0-and-awsjson1-1
 */
export class AwsJson1_1Protocol extends AwsJsonRpcProtocol {
  public constructor({ defaultNamespace, serviceTarget }: { defaultNamespace: string; serviceTarget: string }) {
    super({
      defaultNamespace,
      serviceTarget,
    });
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_1";
  }

  protected getJsonRpcVersion() {
    return "1.1" as const;
  }

  protected getDefaultContentType(): string {
    return "application/x-amz-json-1.1";
  }
}
