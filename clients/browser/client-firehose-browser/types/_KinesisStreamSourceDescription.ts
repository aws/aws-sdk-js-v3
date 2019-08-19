/**
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.</p>
 */
export interface _KinesisStreamSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN?: string;

  /**
   * <p>The ARN of the role used by the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">AWS Identity and Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>Kinesis Data Firehose starts retrieving records from the Kinesis data stream starting with this timestamp.</p>
   */
  DeliveryStartTimestamp?: Date | string | number;
}

export interface _UnmarshalledKinesisStreamSourceDescription
  extends _KinesisStreamSourceDescription {
  /**
   * <p>Kinesis Data Firehose starts retrieving records from the Kinesis data stream starting with this timestamp.</p>
   */
  DeliveryStartTimestamp?: Date;
}
