import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCompilationJobsInput shape
 */
export interface ListCompilationJobsInput {
  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified time. </p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified time.</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <a>DescribeCompilationJobResponse$CompilationJobStatus</a> status.</p>
   */
  StatusEquals?:
    | "INPROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STARTING"
    | "STOPPING"
    | "STOPPED"
    | string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | "Status" | string;

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
