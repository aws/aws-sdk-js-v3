import { _PipelineObject } from "./_PipelineObject";
import { _ParameterObject } from "./_ParameterObject";
import { _ParameterValue } from "./_ParameterValue";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string;

  /**
   * <p>The objects that define the pipeline. These objects overwrite the existing pipeline definition.</p>
   */
  pipelineObjects: Array<_PipelineObject> | Iterable<_PipelineObject>;

  /**
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: Array<_ParameterObject> | Iterable<_ParameterObject>;

  /**
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: Array<_ParameterValue> | Iterable<_ParameterValue>;

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
