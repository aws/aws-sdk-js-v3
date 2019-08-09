import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackInstanceInput shape
 */
export interface DescribeStackInstanceInput {
  /**
   * <p>The name or the unique stack ID of the stack set that you want to get stack instance information for.</p>
   */
  StackSetName: string;

  /**
   * <p>The ID of an AWS account that's associated with this stack instance.</p>
   */
  StackInstanceAccount: string;

  /**
   * <p>The name of a region that's associated with this stack instance.</p>
   */
  StackInstanceRegion: string;

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
