/**
 * <p>The execution state of a step.</p>
 */
export interface _StepExecutionStatusDetail {
  /**
   * <p>The state of the step.</p>
   */
  State:
    | "PENDING"
    | "RUNNING"
    | "CONTINUE"
    | "COMPLETED"
    | "CANCELLED"
    | "FAILED"
    | "INTERRUPTED"
    | string;

  /**
   * <p>The creation date and time of the step.</p>
   */
  CreationDateTime: Date | string | number;

  /**
   * <p>The start date and time of the step.</p>
   */
  StartDateTime?: Date | string | number;

  /**
   * <p>The completion date and time of the step.</p>
   */
  EndDateTime?: Date | string | number;

  /**
   * <p>A description of the step's current state.</p>
   */
  LastStateChangeReason?: string;
}

export interface _UnmarshalledStepExecutionStatusDetail
  extends _StepExecutionStatusDetail {
  /**
   * <p>The creation date and time of the step.</p>
   */
  CreationDateTime: Date;

  /**
   * <p>The start date and time of the step.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The completion date and time of the step.</p>
   */
  EndDateTime?: Date;
}
