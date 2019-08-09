import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListHyperParameterTuningJobsInput shape
 */
export interface ListHyperParameterTuningJobsInput {
  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tuning jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: "Name" | "Status" | "CreationTime" | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created after the specified time.</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only tuning jobs that were created before the specified time.</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   */
  StatusEquals?:
    | "Completed"
    | "InProgress"
    | "Failed"
    | "Stopped"
    | "Stopping"
    | string;

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
