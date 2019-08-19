/**
 * <p/>
 */
export interface _KinesisSettings {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.</p>
   */
  StreamArn?: string;

  /**
   * <p>The output format for the records created on the endpoint. The message format is <code>JSON</code>.</p>
   */
  MessageFormat?: "json" | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Amazon Kinesis data stream.</p>
   */
  ServiceAccessRoleArn?: string;
}

export type _UnmarshalledKinesisSettings = _KinesisSettings;
