import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBillingGroupsInput shape
 */
export interface ListBillingGroupsInput {
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;

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
