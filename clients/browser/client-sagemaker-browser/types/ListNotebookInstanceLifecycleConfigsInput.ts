import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNotebookInstanceLifecycleConfigsInput shape
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | "LastModifiedTime" | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

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
