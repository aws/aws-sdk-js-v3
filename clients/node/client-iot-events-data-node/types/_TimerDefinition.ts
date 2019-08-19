/**
 * <p>The new setting of a timer.</p>
 */
export interface _TimerDefinition {
  /**
   * <p>The name of the timer.</p>
   */
  name: string;

  /**
   * <p>The new setting of the timer (the number of seconds before the timer elapses).</p>
   */
  seconds: number;
}

export type _UnmarshalledTimerDefinition = _TimerDefinition;
