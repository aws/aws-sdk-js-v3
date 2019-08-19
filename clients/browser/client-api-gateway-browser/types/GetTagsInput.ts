import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Gets the <a>Tags</a> collection for a given resource.</p>
 */
export interface GetTagsInput {
  /**
   * <p>[Required] The ARN of a resource that can be tagged. The resource ARN must be URL-encoded.</p>
   */
  resourceArn: string;

  /**
   * <p>(Not currently supported) The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
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
