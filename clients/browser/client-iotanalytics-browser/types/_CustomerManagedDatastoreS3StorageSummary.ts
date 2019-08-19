/**
 * <p>Used to store data store data in an S3 bucket that you manage.</p>
 */
export interface _CustomerManagedDatastoreS3StorageSummary {
  /**
   * <p>The name of the Amazon S3 bucket in which data store data is stored.</p>
   */
  bucket?: string;

  /**
   * <p>The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn?: string;
}

export type _UnmarshalledCustomerManagedDatastoreS3StorageSummary = _CustomerManagedDatastoreS3StorageSummary;
