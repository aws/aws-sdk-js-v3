/**
 * <p>When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. </p>
 */
export interface _LambdaOutput {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function to write to.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARN: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   */
  RoleARN: string;
}

export type _UnmarshalledLambdaOutput = _LambdaOutput;
