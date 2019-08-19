import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to list the <a>XssMatchSet</a> objects created by the current AWS account.</p>
 */
export interface ListXssMatchSetsInput {
  /**
   * <p>If you specify a value for <code>Limit</code> and you have more <a>XssMatchSet</a> objects than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>XssMatchSets</code>. For the second and subsequent <code>ListXssMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>XssMatchSets</code>.</p>
   */
  NextMarker?: string;

  /**
   * <p>Specifies the number of <a>XssMatchSet</a> objects that you want AWS WAF to return for this request. If you have more <code>XssMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.</p>
   */
  Limit?: number;

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
