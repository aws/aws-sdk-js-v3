/**
 * <p>The location of the Amazon S3 bucket that contains a revision.</p>
 */
export interface _S3ArtifactLocation {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucketName: string;

  /**
   * <p>The key of the object in the Amazon S3 bucket, which uniquely identifies the object in the bucket.</p>
   */
  objectKey: string;
}

export type _UnmarshalledS3ArtifactLocation = _S3ArtifactLocation;
