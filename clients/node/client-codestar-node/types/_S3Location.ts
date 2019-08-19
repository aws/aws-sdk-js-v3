/**
 * <p>The Amazon S3 location where the source code files provided with the project request are stored.</p>
 */
export interface _S3Location {
  /**
   * <p>The Amazon S3 bucket name where the source code files provided with the project request are stored.</p>
   */
  bucketName?: string;

  /**
   * <p>The Amazon S3 object key where the source code files provided with the project request are stored.</p>
   */
  bucketKey?: string;
}

export type _UnmarshalledS3Location = _S3Location;
