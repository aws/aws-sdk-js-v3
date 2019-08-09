/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. </p>
 */
export interface _LambdaOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARN: string;
}

export type _UnmarshalledLambdaOutput = _LambdaOutput;
