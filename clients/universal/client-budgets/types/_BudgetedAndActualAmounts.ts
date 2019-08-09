import { _Spend, _UnmarshalledSpend } from "./_Spend";
import { _TimePeriod, _UnmarshalledTimePeriod } from "./_TimePeriod";

/**
 * <p>The amount of cost or usage that you created the budget for, compared to your actual costs or usage.</p>
 */
export interface _BudgetedAndActualAmounts {
  /**
   * <p>The amount of cost or usage that you created the budget for.</p>
   */
  BudgetedAmount?: _Spend;

  /**
   * <p>Your actual costs or usage for a budget period.</p>
   */
  ActualAmount?: _Spend;

  /**
   * <p>The time period covered by this budget comparison.</p>
   */
  TimePeriod?: _TimePeriod;
}

export interface _UnmarshalledBudgetedAndActualAmounts
  extends _BudgetedAndActualAmounts {
  /**
   * <p>The amount of cost or usage that you created the budget for.</p>
   */
  BudgetedAmount?: _UnmarshalledSpend;

  /**
   * <p>Your actual costs or usage for a budget period.</p>
   */
  ActualAmount?: _UnmarshalledSpend;

  /**
   * <p>The time period covered by this budget comparison.</p>
   */
  TimePeriod?: _UnmarshalledTimePeriod;
}
