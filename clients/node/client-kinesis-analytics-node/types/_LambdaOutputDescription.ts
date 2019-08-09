/**
 * <p>For an application output, describes the AWS Lambda function configured as its destination. </p>
 */
export interface _LambdaOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledLambdaOutputDescription = _LambdaOutputDescription;
