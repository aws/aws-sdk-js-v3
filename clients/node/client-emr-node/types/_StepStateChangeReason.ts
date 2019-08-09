/**
 * <p>The details of the step state change reason.</p>
 */
export interface _StepStateChangeReason {
  /**
   * <p>The programmable code for the state change reason. Note: Currently, the service provides no code for the state change.</p>
   */
  Code?: "NONE" | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export type _UnmarshalledStepStateChangeReason = _StepStateChangeReason;
