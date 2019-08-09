import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstancesInput shape
 */
export interface DescribeInstancesInput {
  /**
   * <p>A stack ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of the instances associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>A layer ID. If you use this parameter, <code>DescribeInstances</code> returns descriptions of the instances associated with the specified layer.</p>
   */
  LayerId?: string;

  /**
   * <p>An array of instance IDs to be described. If you use this parameter, <code>DescribeInstances</code> returns a description of the specified instances. Otherwise, it returns a description of every instance.</p>
   */
  InstanceIds?: Array<string> | Iterable<string>;

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
