import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRecommendationsInput shape
 */
export interface GetRecommendationsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.</p>
   */
  campaignArn: string;

  /**
   * <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
   */
  itemId?: string;

  /**
   * <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>
   */
  userId?: string;

  /**
   * <p>The number of results to return. The default is 25. The maximum is 100.</p>
   */
  numResults?: number;

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
