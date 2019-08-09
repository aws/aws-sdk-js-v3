/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.</p>
 */
export interface _KinesisFirehoseOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisFirehoseOutputDescription = _KinesisFirehoseOutputDescription;
