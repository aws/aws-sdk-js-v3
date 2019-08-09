import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to describe an existing <a>Authorizers</a> resource.</p>
 */
export interface GetAuthorizersInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

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
