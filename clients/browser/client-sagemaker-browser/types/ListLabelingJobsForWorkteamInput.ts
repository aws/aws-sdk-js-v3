import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLabelingJobsForWorkteamInput shape
 */
export interface ListLabelingJobsForWorkteamInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling jobs for.</p>
   */
  WorkteamArn: string;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "CreationTime" | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

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
