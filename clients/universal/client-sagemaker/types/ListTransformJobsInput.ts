import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTransformJobsInput shape
 */
export interface ListTransformJobsInput {
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | "Status" | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of transform jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
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
