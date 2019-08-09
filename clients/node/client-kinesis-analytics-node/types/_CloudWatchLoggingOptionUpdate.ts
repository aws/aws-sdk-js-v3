/**
 * <p>Describes CloudWatch logging option updates.</p>
 */
export interface _CloudWatchLoggingOptionUpdate {
  /**
   * <p>ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARNUpdate?: string;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARNUpdate?: string;
}

export type _UnmarshalledCloudWatchLoggingOptionUpdate = _CloudWatchLoggingOptionUpdate;
