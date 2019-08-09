/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination.</p>
 */
export interface _LambdaOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination AWS Lambda function.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARNUpdate: string;
}

export type _UnmarshalledLambdaOutputUpdate = _LambdaOutputUpdate;
