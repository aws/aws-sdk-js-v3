/**
 * <p>The S3 bucket name and key where AWS Signer saved your signed code image.</p>
 */
export interface _S3SignedObject {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>Key name that uniquely identifies a signed code image in your bucket.</p>
   */
  key?: string;
}

export type _UnmarshalledS3SignedObject = _S3SignedObject;
