/**
 * <p>Describes the Amazon CloudWatch logging option.</p>
 */
export interface _CloudWatchLoggingOptionDescription {
  /**
   * <p>The ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string;

  /**
   * <p>The IAM ARN of the role to use to send application messages. </p> <note> <p>Provided for backward compatibility. Applications created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  RoleARN?: string;
}

export type _UnmarshalledCloudWatchLoggingOptionDescription = _CloudWatchLoggingOptionDescription;
