import { _Spend, _UnmarshalledSpend } from "./_Spend";
import { _CostTypes, _UnmarshalledCostTypes } from "./_CostTypes";
import { _TimePeriod, _UnmarshalledTimePeriod } from "./_TimePeriod";
import {
  _CalculatedSpend,
  _UnmarshalledCalculatedSpend
} from "./_CalculatedSpend";

/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p>
 */
export interface _Budget {
  /**
   * <p>The name of a budget. The name must be unique within an account. The <code>:</code> and <code>\</code> characters aren't allowed in <code>BudgetName</code>.</p>
   */
  BudgetName: string;

  /**
   * <p>The total amount of cost, usage, RI utilization, or RI coverage that you want to track with your budget.</p> <p> <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI utilization or coverage budgets. RI utilization or coverage budgets default to <code>100</code>, which is the only valid value for RI utilization or coverage budgets. You can't use <code>BudgetLimit</code> with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and <code>UpdateBudget</code> actions. </p>
   */
  BudgetLimit?: _Spend;

  /**
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p> <p> <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports monthly and quarterly <code>TimeUnit</code>. </p> <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p> <p>For quarterly budgets, provide 4 quarters of <code>PlannedBudgetLimits</code> value entries in standard calendar quarter increments. This must start from the current quarter and include the next 3 quarters. The <code>key</code> is the start of the quarter, <code>UTC</code> in epoch seconds. </p> <p>If the planned budget expires before 12 months for monthly or 4 quarters for quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining periods.</p> <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p> <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p> <p> <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with <code>PlannedBudgetLimits</code> will also contain <code>BudgetLimit</code> representing the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This only applies to budgets created with <code>PlannedBudgetLimits</code>. Budgets created without <code>PlannedBudgetLimits</code> will only contain <code>BudgetLimit</code>, and no <code>PlannedBudgetLimits</code>.</p>
   */
  PlannedBudgetLimits?: { [key: string]: _Spend } | Iterable<[string, _Spend]>;

  /**
   * <p>The cost filters, such as service or tag, that are applied to a budget.</p> <p>AWS Budgets supports the following services as a filter for RI budgets:</p> <ul> <li> <p>Amazon Elastic Compute Cloud - Compute</p> </li> <li> <p>Amazon Redshift</p> </li> <li> <p>Amazon Relational Database Service</p> </li> <li> <p>Amazon ElastiCache</p> </li> <li> <p>Amazon Elasticsearch Service</p> </li> </ul>
   */
  CostFilters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The types of costs that are included in this <code>COST</code> budget.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
   */
  CostTypes?: _CostTypes;

  /**
   * <p>The length of time until a budget resets the actual and forecasted spend. <code>DAILY</code> is available only for <code>RI_UTILIZATION</code> and <code>RI_COVERAGE</code> budgets.</p>
   */
  TimeUnit: "DAILY" | "MONTHLY" | "QUARTERLY" | "ANNUALLY" | string;

  /**
   * <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. The end date must come before <code>06/15/87 00:00 UTC</code>. </p> <p>If you create your budget and don't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API. </p> <p>You can change either date with the <code>UpdateBudget</code> operation.</p> <p>After the end date, AWS deletes the budget and all associated notifications and subscribers.</p>
   */
  TimePeriod?: _TimePeriod;

  /**
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   */
  CalculatedSpend?: _CalculatedSpend;

  /**
   * <p>Whether this budget tracks costs, usage, RI utilization, or RI coverage.</p>
   */
  BudgetType: "USAGE" | "COST" | "RI_UTILIZATION" | "RI_COVERAGE" | string;

  /**
   * <p>The last time that you updated this budget.</p>
   */
  LastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledBudget extends _Budget {
  /**
   * <p>The total amount of cost, usage, RI utilization, or RI coverage that you want to track with your budget.</p> <p> <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI utilization or coverage budgets. RI utilization or coverage budgets default to <code>100</code>, which is the only valid value for RI utilization or coverage budgets. You can't use <code>BudgetLimit</code> with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and <code>UpdateBudget</code> actions. </p>
   */
  BudgetLimit?: _UnmarshalledSpend;

  /**
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p> <p> <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports monthly and quarterly <code>TimeUnit</code>. </p> <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p> <p>For quarterly budgets, provide 4 quarters of <code>PlannedBudgetLimits</code> value entries in standard calendar quarter increments. This must start from the current quarter and include the next 3 quarters. The <code>key</code> is the start of the quarter, <code>UTC</code> in epoch seconds. </p> <p>If the planned budget expires before 12 months for monthly or 4 quarters for quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining periods.</p> <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p> <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p> <p> <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with <code>PlannedBudgetLimits</code> will also contain <code>BudgetLimit</code> representing the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This only applies to budgets created with <code>PlannedBudgetLimits</code>. Budgets created without <code>PlannedBudgetLimits</code> will only contain <code>BudgetLimit</code>, and no <code>PlannedBudgetLimits</code>.</p>
   */
  PlannedBudgetLimits?: { [key: string]: _UnmarshalledSpend };

  /**
   * <p>The cost filters, such as service or tag, that are applied to a budget.</p> <p>AWS Budgets supports the following services as a filter for RI budgets:</p> <ul> <li> <p>Amazon Elastic Compute Cloud - Compute</p> </li> <li> <p>Amazon Redshift</p> </li> <li> <p>Amazon Relational Database Service</p> </li> <li> <p>Amazon ElastiCache</p> </li> <li> <p>Amazon Elasticsearch Service</p> </li> </ul>
   */
  CostFilters?: { [key: string]: Array<string> };

  /**
   * <p>The types of costs that are included in this <code>COST</code> budget.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
   */
  CostTypes?: _UnmarshalledCostTypes;

  /**
   * <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. The end date must come before <code>06/15/87 00:00 UTC</code>. </p> <p>If you create your budget and don't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API. </p> <p>You can change either date with the <code>UpdateBudget</code> operation.</p> <p>After the end date, AWS deletes the budget and all associated notifications and subscribers.</p>
   */
  TimePeriod?: _UnmarshalledTimePeriod;

  /**
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   */
  CalculatedSpend?: _UnmarshalledCalculatedSpend;

  /**
   * <p>The last time that you updated this budget.</p>
   */
  LastUpdatedTime?: Date;
}
