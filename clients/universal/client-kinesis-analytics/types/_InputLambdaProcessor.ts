/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. </p>
 */
export interface _InputLambdaProcessor {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that operates on records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARN: string;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledInputLambdaProcessor = _InputLambdaProcessor;
