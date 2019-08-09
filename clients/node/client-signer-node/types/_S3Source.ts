/**
 * <p>Information about the S3 bucket where you saved your unsigned code.</p>
 */
export interface _S3Source {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucketName: string;

  /**
   * <p>Key name of the bucket object that contains your unsigned code.</p>
   */
  key: string;

  /**
   * <p>Version of your source image in your version enabled S3 bucket.</p>
   */
  version: string;
}

export type _UnmarshalledS3Source = _S3Source;
