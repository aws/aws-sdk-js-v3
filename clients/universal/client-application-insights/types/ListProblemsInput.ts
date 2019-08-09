import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProblemsInput shape
 */
export interface ListProblemsInput {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

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
