import {
  _BusinessReportS3Location,
  _UnmarshalledBusinessReportS3Location
} from "./_BusinessReportS3Location";

/**
 * <p>Usage report with specified parameters.</p>
 */
export interface _BusinessReport {
  /**
   * <p>The status of the report generation execution (RUNNING, SUCCEEDED, or FAILED).</p>
   */
  Status?: "RUNNING" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The failure code.</p>
   */
  FailureCode?:
    | "ACCESS_DENIED"
    | "NO_SUCH_BUCKET"
    | "INTERNAL_FAILURE"
    | string;

  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3Location?: _BusinessReportS3Location;

  /**
   * <p>The time of report delivery.</p>
   */
  DeliveryTime?: Date | string | number;

  /**
   * <p>The download link where a user can download the report.</p>
   */
  DownloadUrl?: string;
}

export interface _UnmarshalledBusinessReport extends _BusinessReport {
  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3Location?: _UnmarshalledBusinessReportS3Location;

  /**
   * <p>The time of report delivery.</p>
   */
  DeliveryTime?: Date;
}
