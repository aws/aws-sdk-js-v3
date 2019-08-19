import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAttachedPoliciesInput shape
 */
export interface ListAttachedPoliciesInput {
  /**
   * <p>The group for which the policies will be listed.</p>
   */
  target: string;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;

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
