/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination. </p>
 */
export interface _LambdaOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN: string;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to write to the destination function.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  RoleARN?: string;
}

export type _UnmarshalledLambdaOutputDescription = _LambdaOutputDescription;
