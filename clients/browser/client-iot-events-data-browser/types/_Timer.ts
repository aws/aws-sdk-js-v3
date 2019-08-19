/**
 * <p>The current state of a timer.</p>
 */
export interface _Timer {
  /**
   * <p>The name of the timer.</p>
   */
  name: string;

  /**
   * <p>The number of seconds which have elapsed on the timer.</p>
   */
  timestamp: Date | string | number;
}

export interface _UnmarshalledTimer extends _Timer {
  /**
   * <p>The number of seconds which have elapsed on the timer.</p>
   */
  timestamp: Date;
}
