import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetachInstancesInput shape
 */
export interface DetachInstancesInput {
  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.</p>
   */
  ShouldDecrementDesiredCapacity: boolean;

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
