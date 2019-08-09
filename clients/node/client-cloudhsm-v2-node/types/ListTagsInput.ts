import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsInput shape
 */
export interface ListTagsInput {
  /**
   * <p>The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use <a>DescribeClusters</a>.</p>
   */
  ResourceId: string;

  /**
   * <p>The <code>NextToken</code> value that you received in the previous response. Use this value to get more tags.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a <code>NextToken</code> value.</p>
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
