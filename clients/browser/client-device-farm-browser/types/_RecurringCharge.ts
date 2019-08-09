import {
  _MonetaryAmount,
  _UnmarshalledMonetaryAmount
} from "./_MonetaryAmount";

/**
 * <p>Specifies whether charges for devices will be recurring.</p>
 */
export interface _RecurringCharge {
  /**
   * <p>The cost of the recurring charge.</p>
   */
  cost?: _MonetaryAmount;

  /**
   * <p>The frequency in which charges will recur.</p>
   */
  frequency?: "MONTHLY" | string;
}

export interface _UnmarshalledRecurringCharge extends _RecurringCharge {
  /**
   * <p>The cost of the recurring charge.</p>
   */
  cost?: _UnmarshalledMonetaryAmount;
}
