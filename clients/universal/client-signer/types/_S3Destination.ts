/**
 * <p>The name and prefix of the S3 bucket where AWS Signer saves your signed objects.</p>
 */
export interface _S3Destination {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>An Amazon S3 prefix that you can use to limit responses to those that begin with the specified prefix.</p>
   */
  prefix?: string;
}

export type _UnmarshalledS3Destination = _S3Destination;
