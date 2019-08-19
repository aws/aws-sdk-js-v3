import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCompatibleImagesInput shape
 */
export interface ListCompatibleImagesInput {
  /**
   * <p>The maximum number of results for the list of compatible images. Currently, each supported device can store 10 AMIs.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of compatible images, you can specify a value for <code>NextToken</code> as the starting point for your list of returned images.</p>
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
