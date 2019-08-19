/**
 * <p>The timeline of the cluster step lifecycle.</p>
 */
export interface _StepTimeline {
  /**
   * <p>The date and time when the cluster step was created.</p>
   */
  CreationDateTime?: Date | string | number;

  /**
   * <p>The date and time when the cluster step execution started.</p>
   */
  StartDateTime?: Date | string | number;

  /**
   * <p>The date and time when the cluster step execution completed or failed.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledStepTimeline extends _StepTimeline {
  /**
   * <p>The date and time when the cluster step was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution completed or failed.</p>
   */
  EndDateTime?: Date;
}
