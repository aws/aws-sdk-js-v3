/**
 * <p>Information needed to set the timer.</p>
 */
export interface _SetTimerAction {
  /**
   * <p>The name of the timer.</p>
   */
  timerName: string;

  /**
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy.</p>
   */
  seconds: number;
}

export type _UnmarshalledSetTimerAction = _SetTimerAction;
