import {
  _ArtifactDetail,
  _UnmarshalledArtifactDetail
} from "./_ArtifactDetail";
import {
  _ActionExecutionResult,
  _UnmarshalledActionExecutionResult
} from "./_ActionExecutionResult";

/**
 * <p>Output details listed for an action execution, such as the action execution result.</p>
 */
export interface _ActionExecutionOutput {
  /**
   * <p>Details of output artifacts of the action that correspond to the action execution.</p>
   */
  outputArtifacts?: Array<_ArtifactDetail> | Iterable<_ArtifactDetail>;

  /**
   * <p>Execution result information listed in the output details for an action execution.</p>
   */
  executionResult?: _ActionExecutionResult;
}

export interface _UnmarshalledActionExecutionOutput
  extends _ActionExecutionOutput {
  /**
   * <p>Details of output artifacts of the action that correspond to the action execution.</p>
   */
  outputArtifacts?: Array<_UnmarshalledArtifactDetail>;

  /**
   * <p>Execution result information listed in the output details for an action execution.</p>
   */
  executionResult?: _UnmarshalledActionExecutionResult;
}
