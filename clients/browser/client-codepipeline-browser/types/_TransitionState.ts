/**
 * <p>Represents information about the state of transitions between one stage and another stage.</p>
 */
export interface _TransitionState {
  /**
   * <p>Whether the transition between stages is enabled (true) or disabled (false).</p>
   */
  enabled?: boolean;

  /**
   * <p>The ID of the user who last changed the transition state.</p>
   */
  lastChangedBy?: string;

  /**
   * <p>The timestamp when the transition state was last changed.</p>
   */
  lastChangedAt?: Date | string | number;

  /**
   * <p>The user-specified reason why the transition between two stages of a pipeline was disabled.</p>
   */
  disabledReason?: string;
}

export interface _UnmarshalledTransitionState extends _TransitionState {
  /**
   * <p>The timestamp when the transition state was last changed.</p>
   */
  lastChangedAt?: Date;
}
