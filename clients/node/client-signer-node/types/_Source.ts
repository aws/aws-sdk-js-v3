import { _S3Source, _UnmarshalledS3Source } from "./_S3Source";

/**
 * <p>An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.</p>
 */
export interface _Source {
  /**
   * <p>The <code>S3Source</code> object.</p>
   */
  s3?: _S3Source;
}

export interface _UnmarshalledSource extends _Source {
  /**
   * <p>The <code>S3Source</code> object.</p>
   */
  s3?: _UnmarshalledS3Source;
}
