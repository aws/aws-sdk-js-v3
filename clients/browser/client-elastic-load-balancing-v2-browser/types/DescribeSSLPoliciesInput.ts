import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSSLPoliciesInput shape
 */
export interface DescribeSSLPoliciesInput {
  /**
   * <p>The names of the policies.</p>
   */
  Names?: Array<string> | Iterable<string>;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

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
