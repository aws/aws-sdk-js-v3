/**
 * <p>Information needed to reset the timer.</p>
 */
export interface _ResetTimerAction {
  /**
   * <p>The name of the timer to reset.</p>
   */
  timerName: string;
}

export type _UnmarshalledResetTimerAction = _ResetTimerAction;
