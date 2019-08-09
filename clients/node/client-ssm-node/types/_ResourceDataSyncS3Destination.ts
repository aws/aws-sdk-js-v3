/**
 * <p>Information about the target Amazon S3 bucket for the Resource Data Sync.</p>
 */
export interface _ResourceDataSyncS3Destination {
  /**
   * <p>The name of the Amazon S3 bucket where the aggregated data is stored.</p>
   */
  BucketName: string;

  /**
   * <p>An Amazon S3 prefix for the bucket.</p>
   */
  Prefix?: string;

  /**
   * <p>A supported sync format. The following format is currently supported: JsonSerDe</p>
   */
  SyncFormat: "JsonSerDe" | string;

  /**
   * <p>The AWS Region with the Amazon S3 bucket targeted by the Resource Data Sync.</p>
   */
  Region: string;

  /**
   * <p>The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as the destination Amazon S3 bucket.</p>
   */
  AWSKMSKeyARN?: string;
}

export type _UnmarshalledResourceDataSyncS3Destination = _ResourceDataSyncS3Destination;
