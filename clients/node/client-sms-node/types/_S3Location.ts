/**
 * <p>Location of the Amazon S3 object in the customer's account.</p>
 */
export interface _S3Location {
  /**
   * <p>Amazon S3 bucket name.</p>
   */
  bucket?: string;

  /**
   * <p>Amazon S3 bucket key.</p>
   */
  key?: string;
}

export type _UnmarshalledS3Location = _S3Location;
