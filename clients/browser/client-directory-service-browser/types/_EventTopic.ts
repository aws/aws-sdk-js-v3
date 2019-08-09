/**
 * <p>Information about SNS topic and AWS Directory Service directory associations.</p>
 */
export interface _EventTopic {
  /**
   * <p>The Directory ID of an AWS Directory Service directory that will publish status messages to an SNS topic.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of an AWS SNS topic the receives status messages from the directory.</p>
   */
  TopicName?: string;

  /**
   * <p>The SNS topic ARN (Amazon Resource Name).</p>
   */
  TopicArn?: string;

  /**
   * <p>The date and time of when you associated your directory with the SNS topic.</p>
   */
  CreatedDateTime?: Date | string | number;

  /**
   * <p>The topic registration status.</p>
   */
  Status?: "Registered" | "Topic not found" | "Failed" | "Deleted" | string;
}

export interface _UnmarshalledEventTopic extends _EventTopic {
  /**
   * <p>The date and time of when you associated your directory with the SNS topic.</p>
   */
  CreatedDateTime?: Date;
}
