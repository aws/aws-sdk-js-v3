import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPersonalizedRankingInput shape
 */
export interface GetPersonalizedRankingInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.</p>
   */
  campaignArn: string;

  /**
   * <p>A list of items (itemId's) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list.</p>
   */
  inputList: Array<string> | Iterable<string>;

  /**
   * <p>The user for which you want the campaign to provide a personalized ranking.</p>
   */
  userId: string;

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
