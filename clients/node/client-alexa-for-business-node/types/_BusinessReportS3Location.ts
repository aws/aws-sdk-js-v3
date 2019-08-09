/**
 * <p>The S3 location of the output reports.</p>
 */
export interface _BusinessReportS3Location {
  /**
   * <p>The path of the business report.</p>
   */
  Path?: string;

  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  BucketName?: string;
}

export type _UnmarshalledBusinessReportS3Location = _BusinessReportS3Location;
