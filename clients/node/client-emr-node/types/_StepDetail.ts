import { _StepConfig, _UnmarshalledStepConfig } from "./_StepConfig";
import {
  _StepExecutionStatusDetail,
  _UnmarshalledStepExecutionStatusDetail
} from "./_StepExecutionStatusDetail";

/**
 * <p>Combines the execution state and configuration of a step.</p>
 */
export interface _StepDetail {
  /**
   * <p>The step configuration.</p>
   */
  StepConfig: _StepConfig;

  /**
   * <p>The description of the step status.</p>
   */
  ExecutionStatusDetail: _StepExecutionStatusDetail;
}

export interface _UnmarshalledStepDetail extends _StepDetail {
  /**
   * <p>The step configuration.</p>
   */
  StepConfig: _UnmarshalledStepConfig;

  /**
   * <p>The description of the step status.</p>
   */
  ExecutionStatusDetail: _UnmarshalledStepExecutionStatusDetail;
}
