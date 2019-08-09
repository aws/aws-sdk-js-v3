import {
  _ConfigSnapshotDeliveryProperties,
  _UnmarshalledConfigSnapshotDeliveryProperties
} from "./_ConfigSnapshotDeliveryProperties";

/**
 * <p>The channel through which AWS Config delivers notifications and updated configuration states.</p>
 */
export interface _DeliveryChannel {
  /**
   * <p>The name of the delivery channel. By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.</p>
   */
  name?: string;

  /**
   * <p>The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.</p> <p>If you specify a bucket that belongs to another AWS account, that bucket must have policies that grant access permissions to AWS Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the AWS Config Developer Guide.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The prefix for the specified Amazon S3 bucket.</p>
   */
  s3KeyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.</p> <p>If you choose a topic from another account, the topic must have policies that grant access permissions to AWS Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the AWS Config Developer Guide.</p>
   */
  snsTopicARN?: string;

  /**
   * <p>The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryProperties?: _ConfigSnapshotDeliveryProperties;
}

export interface _UnmarshalledDeliveryChannel extends _DeliveryChannel {
  /**
   * <p>The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryProperties?: _UnmarshalledConfigSnapshotDeliveryProperties;
}
