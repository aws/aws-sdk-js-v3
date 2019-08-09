import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ID of the resource that you want to retrieve tags for. </p>
   */
  ResourceId: string;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>
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
