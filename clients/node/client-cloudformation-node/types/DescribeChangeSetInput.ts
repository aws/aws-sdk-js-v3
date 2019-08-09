import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>
   */
  ChangeSetName: string;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.</p>
   */
  StackName?: string;

  /**
   * <p>A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.</p>
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
