/**
 * <p> For an application output, describes the Amazon Kinesis stream configured as its destination. </p>
 */
export interface _KinesisStreamsOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

export type _UnmarshalledKinesisStreamsOutputDescription = _KinesisStreamsOutputDescription;
