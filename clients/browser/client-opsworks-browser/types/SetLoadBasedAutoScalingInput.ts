import { _AutoScalingThresholds } from "./_AutoScalingThresholds";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetLoadBasedAutoScalingInput shape
 */
export interface SetLoadBasedAutoScalingInput {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string;

  /**
   * <p>Enables load-based auto scaling for the layer.</p>
   */
  Enable?: boolean;

  /**
   * <p>An <code>AutoScalingThresholds</code> object with the upscaling threshold configuration. If the load exceeds these thresholds for a specified amount of time, AWS OpsWorks Stacks starts a specified number of instances.</p>
   */
  UpScaling?: _AutoScalingThresholds;

  /**
   * <p>An <code>AutoScalingThresholds</code> object with the downscaling threshold configuration. If the load falls below these thresholds for a specified amount of time, AWS OpsWorks Stacks stops a specified number of instances.</p>
   */
  DownScaling?: _AutoScalingThresholds;

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
