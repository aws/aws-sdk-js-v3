import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSigningPlatformsInput shape
 */
export interface ListSigningPlatformsInput {
  /**
   * <p>The category type of a signing platform.</p>
   */
  category?: string;

  /**
   * <p>Any partner entities connected to a signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * <p>The maximum number of results to be returned by this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.</p>
   */
  nextToken?: string;

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
