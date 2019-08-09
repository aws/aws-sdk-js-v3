/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface _AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;
}

export type _UnmarshalledAwsS3BucketDetails = _AwsS3BucketDetails;
