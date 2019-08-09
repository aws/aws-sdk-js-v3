/**
 * <p>The output location.</p>
 */
export interface _OutputLocation {
  /**
   * <p>The S3 bucket for output.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The S3 folder in the <code>s3Bucket</code> where output files will be placed.</p>
   */
  s3Prefix?: string;
}

export type _UnmarshalledOutputLocation = _OutputLocation;
