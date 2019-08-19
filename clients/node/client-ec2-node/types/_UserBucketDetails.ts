/**
 * <p>Describes the S3 bucket for the disk image.</p>
 */
export interface _UserBucketDetails {
  /**
   * <p>The S3 bucket from which the disk image was created.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

export type _UnmarshalledUserBucketDetails = _UserBucketDetails;
