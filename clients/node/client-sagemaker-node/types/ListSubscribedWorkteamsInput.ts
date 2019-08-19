import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSubscribedWorkteamsInput shape
 */
export interface ListSubscribedWorkteamsInput {
  /**
   * <p>A string in the work team name. This filter returns only work teams whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
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
