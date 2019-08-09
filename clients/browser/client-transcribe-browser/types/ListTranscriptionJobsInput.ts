import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTranscriptionJobsInput shape
 */
export interface ListTranscriptionJobsInput {
  /**
   * <p>When specified, returns only transcription jobs with the specified status. Jobs are ordered by creation date, with the newest jobs returned first. If you don’t specify a status, Amazon Transcribe returns all transcription jobs ordered by creation date. </p>
   */
  Status?: "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If the result of the previous request to <code>ListTranscriptionJobs</code> was truncated, include the <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. If there are fewer results in the list, this response contains only the actual results.</p>
   */
  MaxResults?: number;

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
