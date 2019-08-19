import { _ParameterValue } from "./_ParameterValue";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for ActivatePipeline.</p>
 */
export interface ActivatePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string;

  /**
   * <p>A list of parameter values to pass to the pipeline at activation.</p>
   */
  parameterValues?: Array<_ParameterValue> | Iterable<_ParameterValue>;

  /**
   * <p>The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.</p>
   */
  startTimestamp?: Date | string | number;

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
