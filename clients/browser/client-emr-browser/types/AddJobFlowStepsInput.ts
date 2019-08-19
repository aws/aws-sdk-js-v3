import { _StepConfig } from "./_StepConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The input argument to the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsInput {
  /**
   * <p>A string that uniquely identifies the job flow. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>ListClusters</a>. </p>
   */
  JobFlowId: string;

  /**
   * <p> A list of <a>StepConfig</a> to be executed by the job flow. </p>
   */
  Steps: Array<_StepConfig> | Iterable<_StepConfig>;

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
