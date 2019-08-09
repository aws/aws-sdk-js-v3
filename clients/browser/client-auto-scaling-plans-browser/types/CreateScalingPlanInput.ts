import { _ApplicationSource } from "./_ApplicationSource";
import { _ScalingInstruction } from "./_ScalingInstruction";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScalingPlanInput shape
 */
export interface CreateScalingPlanInput {
  /**
   * <p>The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.</p>
   */
  ScalingPlanName: string;

  /**
   * <p>A CloudFormation stack or set of tags. You can create one scaling plan per application source.</p>
   */
  ApplicationSource: _ApplicationSource;

  /**
   * <p>The scaling instructions.</p>
   */
  ScalingInstructions:
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
