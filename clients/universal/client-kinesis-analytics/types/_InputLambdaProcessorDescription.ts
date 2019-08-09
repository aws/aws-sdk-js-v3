/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.</p>
 */
export interface _InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledInputLambdaProcessorDescription = _InputLambdaProcessorDescription;
