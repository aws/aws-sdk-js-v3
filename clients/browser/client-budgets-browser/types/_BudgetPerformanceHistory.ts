import { _CostTypes, _UnmarshalledCostTypes } from "./_CostTypes";
import {
  _BudgetedAndActualAmounts,
  _UnmarshalledBudgetedAndActualAmounts
} from "./_BudgetedAndActualAmounts";

/**
 * <p>A history of the state of a budget at the end of the budget's specified time period.</p>
 */
export interface _BudgetPerformanceHistory {
  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName?: string;

  /**
   * <p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, or <code>RI_COVERAGE</code>.</p>
   */
  BudgetType?: "USAGE" | "COST" | "RI_UTILIZATION" | "RI_COVERAGE" | string;

  /**
   * <p>The history of the cost filters for a budget during the specified time period.</p>
   */
  CostFilters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The history of the cost types for a budget during the specified time period.</p>
   */
  CostTypes?: _CostTypes;

  /**
   * <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   */
  TimeUnit?: "DAILY" | "MONTHLY" | "QUARTERLY" | "ANNUALLY" | string;

  /**
   * <p>A list of amounts of cost or usage that you created budgets for, compared to your actual costs or usage.</p>
   */
  BudgetedAndActualAmountsList?:
    | Array<_BudgetedAndActualAmounts>
    | Iterable<_BudgetedAndActualAmounts>;
}

export interface _UnmarshalledBudgetPerformanceHistory
  extends _BudgetPerformanceHistory {
  /**
   * <p>The history of the cost filters for a budget during the specified time period.</p>
   */
  CostFilters?: { [key: string]: Array<string> };

  /**
   * <p>The history of the cost types for a budget during the specified time period.</p>
   */
  CostTypes?: _UnmarshalledCostTypes;

  /**
   * <p>A list of amounts of cost or usage that you created budgets for, compared to your actual costs or usage.</p>
   */
  BudgetedAndActualAmountsList?: Array<_UnmarshalledBudgetedAndActualAmounts>;
}
