import { _BusinessReportContentRange } from "./_BusinessReportContentRange";
import { _BusinessReportRecurrence } from "./_BusinessReportRecurrence";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBusinessReportScheduleInput shape
 */
export interface CreateBusinessReportScheduleInput {
  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * <p>The S3 bucket name of the output reports. If this isn't specified, the report can be retrieved from a download link by calling ListBusinessReportSchedule. </p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of individual files).</p>
   */
  Format: "CSV" | "CSV_ZIP" | string;

  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange: _BusinessReportContentRange;

  /**
   * <p>The recurrence of the reports. If this isn't specified, the report will only be delivered one time when the API is called. </p>
   */
  Recurrence?: _BusinessReportRecurrence;

  /**
   * <p>The client request token.</p>
   */
  ClientRequestToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
