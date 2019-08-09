/**
 * <p>Describes the S3 bucket for the disk image.</p>
 */
export interface _UserBucket {
  /**
   * <p>The name of the S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

export type _UnmarshalledUserBucket = _UserBucket;
