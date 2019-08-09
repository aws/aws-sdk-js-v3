import {
  _BusinessReportContentRange,
  _UnmarshalledBusinessReportContentRange
} from "./_BusinessReportContentRange";
import {
  _BusinessReportRecurrence,
  _UnmarshalledBusinessReportRecurrence
} from "./_BusinessReportRecurrence";
import {
  _BusinessReport,
  _UnmarshalledBusinessReport
} from "./_BusinessReport";

/**
 * <p>The schedule of the usage report.</p>
 */
export interface _BusinessReportSchedule {
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;

  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of individual files).</p>
   */
  Format?: "CSV" | "CSV_ZIP" | string;

  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange?: _BusinessReportContentRange;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: _BusinessReportRecurrence;

  /**
   * <p>The details of the last business report delivery for a specified time interval.</p>
   */
  LastBusinessReport?: _BusinessReport;
}

export interface _UnmarshalledBusinessReportSchedule
  extends _BusinessReportSchedule {
  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange?: _UnmarshalledBusinessReportContentRange;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: _UnmarshalledBusinessReportRecurrence;

  /**
   * <p>The details of the last business report delivery for a specified time interval.</p>
   */
  LastBusinessReport?: _UnmarshalledBusinessReport;
}
