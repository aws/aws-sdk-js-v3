/**
 * <p>The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.</p>
 */
export interface _KinesisStreamSourceConfiguration {
  /**
   * <p>The ARN of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN: string;

  /**
   * <p>The ARN of the role that provides access to the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">AWS Identity and Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN: string;
}

export type _UnmarshalledKinesisStreamSourceConfiguration = _KinesisStreamSourceConfiguration;
