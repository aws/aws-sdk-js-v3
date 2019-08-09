/**
 * <p>Describes a recurring charge.</p>
 */
export interface _RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: "Hourly" | string;
}

export type _UnmarshalledRecurringCharge = _RecurringCharge;
