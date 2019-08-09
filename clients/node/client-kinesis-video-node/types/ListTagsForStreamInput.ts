import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForStreamInput shape
 */
export interface ListTagsForStreamInput {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to list tags for.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream that you want to list tags for.</p>
   */
  StreamName?: string;

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
