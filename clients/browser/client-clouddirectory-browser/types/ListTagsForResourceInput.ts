import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.</p>
   */
  ResourceArn: string;

  /**
   * <p>The pagination token. This is for future use. Currently pagination is not supported for tagging.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.</p>
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
