import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListModelsInput shape
 */
export interface ListModelsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of models, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the training job name. This filter returns only models in the training job whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only models created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date | string | number;

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
