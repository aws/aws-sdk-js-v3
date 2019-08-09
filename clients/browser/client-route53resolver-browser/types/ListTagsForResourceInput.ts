import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to list tags for.</p>
   */
  ResourceArn: string;

  /**
   * <p>The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.</p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListTagsForResource</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

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
