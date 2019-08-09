/**
 * <p>Describes a recurring charge.</p>
 */
export interface _RecurringCharge {
  /**
   * <p>The amount charged per the period of time specified by the recurring charge frequency.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency at which the recurring charge amount is applied.</p>
   */
  RecurringChargeFrequency?: string;
}

export type _UnmarshalledRecurringCharge = _RecurringCharge;
