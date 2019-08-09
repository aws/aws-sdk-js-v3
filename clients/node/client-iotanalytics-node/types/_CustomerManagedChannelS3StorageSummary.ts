/**
 * <p>Used to store channel data in an S3 bucket that you manage.</p>
 */
export interface _CustomerManagedChannelS3StorageSummary {
  /**
   * <p>The name of the Amazon S3 bucket in which channel data is stored.</p>
   */
  bucket?: string;

  /**
   * <p>The prefix used to create the keys of the channel data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn?: string;
}

export type _UnmarshalledCustomerManagedChannelS3StorageSummary = _CustomerManagedChannelS3StorageSummary;
