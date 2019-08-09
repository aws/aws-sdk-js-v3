import {
  _ActionExecutionInput,
  _UnmarshalledActionExecutionInput
} from "./_ActionExecutionInput";
import {
  _ActionExecutionOutput,
  _UnmarshalledActionExecutionOutput
} from "./_ActionExecutionOutput";

/**
 * <p>Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. </p>
 */
export interface _ActionExecutionDetail {
  /**
   * <p>The pipeline execution ID for the action execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The action execution ID.</p>
   */
  actionExecutionId?: string;

  /**
   * <p>The version of the pipeline where the action was run.</p>
   */
  pipelineVersion?: number;

  /**
   * <p>The name of the stage that contains the action.</p>
   */
  stageName?: string;

  /**
   * <p>The name of the action.</p>
   */
  actionName?: string;

  /**
   * <p>The start time of the action execution.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The last update time of the action execution.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p> The status of the action execution. Status categories are <code>InProgress</code>, <code>Succeeded</code>, and <code>Failed</code>.</p>
   */
  status?: "InProgress" | "Succeeded" | "Failed" | string;

  /**
   * <p>Input details for the action execution, such as role ARN, Region, and input artifacts.</p>
   */
  input?: _ActionExecutionInput;

  /**
   * <p>Output details for the action execution, such as the action execution result.</p>
   */
  output?: _ActionExecutionOutput;
}

export interface _UnmarshalledActionExecutionDetail
  extends _ActionExecutionDetail {
  /**
   * <p>The start time of the action execution.</p>
   */
  startTime?: Date;

  /**
   * <p>The last update time of the action execution.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Input details for the action execution, such as role ARN, Region, and input artifacts.</p>
   */
  input?: _UnmarshalledActionExecutionInput;

  /**
   * <p>Output details for the action execution, such as the action execution result.</p>
   */
  output?: _UnmarshalledActionExecutionOutput;
}
