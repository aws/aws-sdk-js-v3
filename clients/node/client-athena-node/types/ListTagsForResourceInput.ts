import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Lists the tags for the workgroup resource with the specified ARN.</p>
   */
  ResourceARN: string;

  /**
   * <p>The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the workgroup resource with the specified ARN.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request that lists the tags for the workgroup resource.</p>
   */
  MaxResults?: number;

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
