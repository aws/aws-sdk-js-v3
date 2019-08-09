import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAssessmentReportInput shape
 */
export interface GetAssessmentReportInput {
  /**
   * <p>The ARN that specifies the assessment run for which you want to generate a report.</p>
   */
  assessmentRunArn: string;

  /**
   * <p>Specifies the file format (html or pdf) of the assessment report that you want to generate.</p>
   */
  reportFileFormat: "HTML" | "PDF" | string;

  /**
   * <p>Specifies the type of the assessment report that you want to generate. There are two types of assessment reports: a finding report and a full report. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. </p>
   */
  reportType: "FINDING" | "FULL" | string;

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
