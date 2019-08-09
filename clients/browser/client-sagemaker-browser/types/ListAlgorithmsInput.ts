import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAlgorithmsInput shape
 */
export interface ListAlgorithmsInput {
  /**
   * <p>A filter that returns only algorithms created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only algorithms created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
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
