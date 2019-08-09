/**
 * <p> When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. </p>
 */
export interface _KinesisStreamsOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export type _UnmarshalledKinesisStreamsOutputUpdate = _KinesisStreamsOutputUpdate;
