/**
 * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface _EventStream {
  /**
   * <p>The unique identifier for the application to publish event data for.</p>
   */
  ApplicationId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The date, in ISO 8601 format, when the event stream was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The IAM user who last modified the event stream.</p>
   */
  LastUpdatedBy?: string;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string;
}

export type _UnmarshalledEventStream = _EventStream;
