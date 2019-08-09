/**
 * <p>Describes the location of updated firmware in S3.</p>
 */
export interface _S3Destination {
  /**
   * <p>The S3 bucket that contains the updated firmware.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 prefix.</p>
   */
  prefix?: string;
}

export type _UnmarshalledS3Destination = _S3Destination;
