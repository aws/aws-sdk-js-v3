/**
 * <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p>
 */
export interface _S3Object {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>S3 object key name.</p>
   */
  Name?: string;

  /**
   * <p>If the bucket is versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

export type _UnmarshalledS3Object = _S3Object;
