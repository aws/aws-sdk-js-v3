import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

/**
 * @alpha
 * @see https://smithy.io/2.0/aws/protocols/aws-json-1_1-protocol.html#differences-between-awsjson1-0-and-awsjson1-1
 */
export class AwsJson1_0Protocol extends AwsJsonRpcProtocol {
  public constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
  }

  public getShapeId(): string {
    return "aws.protocols#awsJson1_0";
  }

  protected getJsonRpcVersion() {
    return "1.0" as const;
  }
}
