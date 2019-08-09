/**
 * <p>The S3 location.</p>
 */
export interface _S3Location {
  /**
   * <p>The S3 bucket.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 key.</p>
   */
  key?: string;

  /**
   * <p>The S3 bucket version.</p>
   */
  version?: string;
}

export type _UnmarshalledS3Location = _S3Location;
