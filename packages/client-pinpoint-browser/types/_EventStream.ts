/**
 * Model for an event publishing subscription export.
 */
export interface _EventStream {
  /**
   * The ID of the application from which events should be published.
   */
  ApplicationId?: string;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
   *  Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME
   *  Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME
   */
  DestinationStreamArn?: string;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
   */
  ExternalId?: string;

  /**
   * The date the event stream was last updated in ISO 8601 format.
   */
  LastModifiedDate?: string;

  /**
   * The IAM user who last modified the event stream.
   */
  LastUpdatedBy?: string;

  /**
   * The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
   */
  RoleArn?: string;
}

export type _UnmarshalledEventStream = _EventStream;
