import { _AutoScalingPolicy } from "./_AutoScalingPolicy";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAutoScalingPolicyInput shape
 */
export interface PutAutoScalingPolicyInput {
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.</p>
   */
  ClusterId: string;

  /**
   * <p>Specifies the ID of the instance group to which the automatic scaling policy is applied.</p>
   */
  InstanceGroupId: string;

  /**
   * <p>Specifies the definition of the automatic scaling policy.</p>
   */
  AutoScalingPolicy: _AutoScalingPolicy;

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
