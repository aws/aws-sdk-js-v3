/**
 * <p>How long, in days, message data is kept.</p>
 */
export interface _RetentionPeriod {
  /**
   * <p>If true, message data is kept indefinitely.</p>
   */
  unlimited?: boolean;

  /**
   * <p>The number of days that message data is kept. The "unlimited" parameter must be false.</p>
   */
  numberOfDays?: number;
}

export type _UnmarshalledRetentionPeriod = _RetentionPeriod;
