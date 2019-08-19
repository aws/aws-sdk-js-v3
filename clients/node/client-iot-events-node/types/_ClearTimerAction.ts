/**
 * <p>Information needed to clear the timer.</p>
 */
export interface _ClearTimerAction {
  /**
   * <p>The name of the timer to clear.</p>
   */
  timerName: string;
}

export type _UnmarshalledClearTimerAction = _ClearTimerAction;
