/**
 * <p>The bucket and key of an item stored in Amazon S3.</p>
 */
export interface _S3Location {
  /**
   * <p>The Amazon S3 bucket where the data is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key where the data is located.</p>
   */
  S3Key?: string;
}

export type _UnmarshalledS3Location = _S3Location;
