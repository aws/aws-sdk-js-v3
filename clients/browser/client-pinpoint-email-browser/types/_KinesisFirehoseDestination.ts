/**
 * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 */
export interface _KinesisFirehoseDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email events to the Amazon Kinesis Data Firehose stream.</p>
   */
  IamRoleArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events to.</p>
   */
  DeliveryStreamArn: string;
}

export type _UnmarshalledKinesisFirehoseDestination = _KinesisFirehoseDestination;
