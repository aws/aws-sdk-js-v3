import { _ApplicationSource } from "./_ApplicationSource";
import { _ScalingInstruction } from "./_ScalingInstruction";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateScalingPlanInput shape
 */
export interface UpdateScalingPlanInput {
  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number;

  /**
   * <p>A CloudFormation stack or set of tags.</p>
   */
  ApplicationSource?: _ApplicationSource;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions?:
    | Array<_ScalingInstruction>
    | Iterable<_ScalingInstruction>;

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
