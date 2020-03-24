import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>You are not authorized to use this operation with the given parameters.</p>
 *
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccessDeniedException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
}

/**
 *
 * 		       <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p>
 * 		       <p>This is the ARN pattern for a budget: </p>
 * 		       <p>
 *             <code>arn:aws:budgetservice::AccountId:budget/budgetName</code>
 *          </p>
 *
 */
export interface Budget {
  __type?: "Budget";
  /**
   *
   * 		       <p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.</p>
   * 		       <p>
   *             <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to <code>100</code>, which is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code> with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and <code>UpdateBudget</code> actions. </p>
   *
   */
  BudgetLimit?: Spend;

  /**
   *
   * 		       <p>The name of a budget. The name must be unique within an account. The <code>:</code> and <code>\</code> characters aren't allowed in <code>BudgetName</code>.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>Whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.</p>
   *
   */
  BudgetType: BudgetType | string | undefined;

  /**
   *
   * 		       <p>The actual and forecasted cost or usage that the budget tracks.</p>
   *
   */
  CalculatedSpend?: CalculatedSpend;

  /**
   *
   * 		       <p>The cost filters, such as service or tag, that are applied to a budget.</p>
   * 		       <p>AWS Budgets supports the following services as a filter for RI budgets:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Amazon Elastic Compute Cloud - Compute</p>
   * 			         </li>
   *             <li>
   * 				           <p>Amazon Redshift</p>
   * 			         </li>
   *             <li>
   * 				           <p>Amazon Relational Database Service</p>
   * 			         </li>
   *             <li>
   * 				           <p>Amazon ElastiCache</p>
   * 			         </li>
   *             <li>
   * 				           <p>Amazon Elasticsearch Service</p>
   * 			         </li>
   *          </ul>
   *
   */
  CostFilters?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>The types of costs that are included in this <code>COST</code> budget.</p>
   * 		       <p>
   *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>Savings_Plans_Utilization</code>, and <code>Savings_Plans_Coverage</code> budgets do not have <code>CostTypes</code>.</p>
   *
   */
  CostTypes?: CostTypes;

  /**
   *
   * 		       <p>The last time that you updated this budget.</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   * 		       <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p>
   * 		       <p>
   *             <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports monthly and quarterly <code>TimeUnit</code>. </p>
   * 		       <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>For quarterly budgets, provide 4 quarters of <code>PlannedBudgetLimits</code> value entries in standard calendar quarter increments. This must start from the current quarter and include the next 3 quarters. The <code>key</code> is the start of the quarter, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>If the planned budget expires before 12 months for monthly or 4 quarters for quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining periods.</p>
   * 		       <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p>
   * 		       <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p>
   * 		       <p>
   *             <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with <code>PlannedBudgetLimits</code> will also contain <code>BudgetLimit</code> representing the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This only applies to budgets created with <code>PlannedBudgetLimits</code>. Budgets created without <code>PlannedBudgetLimits</code> will only contain <code>BudgetLimit</code>, and no <code>PlannedBudgetLimits</code>.</p>
   *
   */
  PlannedBudgetLimits?: { [key: string]: Spend };

  /**
   *
   * 		       <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. The end date must come before <code>06/15/87 00:00 UTC</code>. </p>
   * 		       <p>If you create your budget and don't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API. </p>
   * 		       <p>You can change either date with the <code>UpdateBudget</code> operation.</p>
   * 		       <p>After the end date, AWS deletes the budget and all associated notifications and subscribers.</p>
   *
   */
  TimePeriod?: TimePeriod;

  /**
   *
   * 		       <p>The length of time until a budget resets the actual and forecasted spend. <code>DAILY</code> is available only for <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>Savings_Plans_Utilization</code>, and <code>Savings_Plans_Coverage</code> budgets.</p>
   *
   */
  TimeUnit: TimeUnit | string | undefined;
}

export namespace Budget {
  export function isa(o: any): o is Budget {
    return _smithy.isa(o, "Budget");
  }
}

/**
 *
 * 		       <p>A history of the state of a budget at the end of the budget's specified time period.</p>
 *
 */
export interface BudgetPerformanceHistory {
  __type?: "BudgetPerformanceHistory";
  /**
   *
   * 		       <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   *
   */
  BudgetName?: string;

  /**
   *
   * 		       <p> The type of a budget. It must be one of the following types: </p>
   * 		       <p>
   *             <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, or <code>RI_COVERAGE</code>.</p>
   *
   */
  BudgetType?: BudgetType | string;

  /**
   *
   * 		       <p>A list of amounts of cost or usage that you created budgets for, compared to your actual costs or usage.</p>
   *
   */
  BudgetedAndActualAmountsList?: Array<BudgetedAndActualAmounts>;

  /**
   *
   * 		       <p>The history of the cost filters for a budget during the specified time period.</p>
   *
   */
  CostFilters?: { [key: string]: Array<string> };

  /**
   *
   * 		       <p>The history of the cost types for a budget during the specified time period.</p>
   *
   */
  CostTypes?: CostTypes;

  /**
   *
   * 		       <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   *
   */
  TimeUnit?: TimeUnit | string;
}

export namespace BudgetPerformanceHistory {
  export function isa(o: any): o is BudgetPerformanceHistory {
    return _smithy.isa(o, "BudgetPerformanceHistory");
  }
}

export enum BudgetType {
  Cost = "COST",
  RICoverage = "RI_COVERAGE",
  RIUtilization = "RI_UTILIZATION",
  SPCoverage = "SAVINGS_PLANS_COVERAGE",
  SPUtilization = "SAVINGS_PLANS_UTILIZATION",
  Usage = "USAGE"
}

/**
 *
 * 		       <p>The amount of cost or usage that you created the budget for, compared to your actual costs or usage.</p>
 *
 */
export interface BudgetedAndActualAmounts {
  __type?: "BudgetedAndActualAmounts";
  /**
   *
   * 		       <p>Your actual costs or usage for a budget period.</p>
   *
   */
  ActualAmount?: Spend;

  /**
   *
   * 		       <p>The amount of cost or usage that you created the budget for.</p>
   *
   */
  BudgetedAmount?: Spend;

  /**
   *
   * 		       <p>The time period covered by this budget comparison.</p>
   *
   */
  TimePeriod?: TimePeriod;
}

export namespace BudgetedAndActualAmounts {
  export function isa(o: any): o is BudgetedAndActualAmounts {
    return _smithy.isa(o, "BudgetedAndActualAmounts");
  }
}

/**
 *
 * 		       <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p>
 * 		       <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
 *
 */
export interface CalculatedSpend {
  __type?: "CalculatedSpend";
  /**
   *
   * 		       <p>The amount of cost, usage, or RI units that you have used.</p>
   *
   */
  ActualSpend: Spend | undefined;

  /**
   *
   * 		       <p>The amount of cost, usage, or RI units that you are forecasted to use.</p>
   *
   */
  ForecastedSpend?: Spend;
}

export namespace CalculatedSpend {
  export function isa(o: any): o is CalculatedSpend {
    return _smithy.isa(o, "CalculatedSpend");
  }
}

export enum ComparisonOperator {
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN"
}

/**
 *
 * 		       <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p>
 * 		       <p>
 *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
 *
 */
export interface CostTypes {
  __type?: "CostTypes";
  /**
   *
   * 		       <p>Specifies whether a budget includes credits.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeCredit?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes discounts.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeDiscount?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes non-RI subscription costs.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeOtherSubscription?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeRecurring?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes refunds.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeRefund?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes subscriptions.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeSubscription?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes support subscription fees.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeSupport?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes taxes.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeTax?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget includes upfront RI costs.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   *
   */
  IncludeUpfront?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget uses the amortized rate.</p>
   * 		       <p>The default value is <code>false</code>.</p>
   *
   */
  UseAmortized?: boolean;

  /**
   *
   * 		       <p>Specifies whether a budget uses a blended rate.</p>
   * 		       <p>The default value is <code>false</code>.</p>
   *
   */
  UseBlended?: boolean;
}

export namespace CostTypes {
  export function isa(o: any): o is CostTypes {
    return _smithy.isa(o, "CostTypes");
  }
}

/**
 *
 * 		       <p> Request of CreateBudget </p>
 *
 */
export interface CreateBudgetRequest {
  __type?: "CreateBudgetRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The budget object that you want to create.</p>
   *
   */
  Budget: Budget | undefined;

  /**
   *
   * 		       <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, AWS creates the notifications and subscribers for you.</p>
   *
   */
  NotificationsWithSubscribers?: Array<NotificationWithSubscribers>;
}

export namespace CreateBudgetRequest {
  export function isa(o: any): o is CreateBudgetRequest {
    return _smithy.isa(o, "CreateBudgetRequest");
  }
}

/**
 *
 * 		       <p> Response of CreateBudget </p>
 *
 */
export interface CreateBudgetResponse extends $MetadataBearer {
  __type?: "CreateBudgetResponse";
}

export namespace CreateBudgetResponse {
  export function isa(o: any): o is CreateBudgetResponse {
    return _smithy.isa(o, "CreateBudgetResponse");
  }
}

/**
 *
 * 		       <p> Request of CreateNotification </p>
 *
 */
export interface CreateNotificationRequest {
  __type?: "CreateNotificationRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget that you want AWS to notify you about. Budget names must be unique within an account.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The notification that you want to create.</p>
   *
   */
  Notification: Notification | undefined;

  /**
   *
   * 		       <p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.</p>
   *
   */
  Subscribers: Array<Subscriber> | undefined;
}

export namespace CreateNotificationRequest {
  export function isa(o: any): o is CreateNotificationRequest {
    return _smithy.isa(o, "CreateNotificationRequest");
  }
}

/**
 *
 * 		       <p> Response of CreateNotification </p>
 *
 */
export interface CreateNotificationResponse extends $MetadataBearer {
  __type?: "CreateNotificationResponse";
}

export namespace CreateNotificationResponse {
  export function isa(o: any): o is CreateNotificationResponse {
    return _smithy.isa(o, "CreateNotificationResponse");
  }
}

/**
 *
 * 		       <p> Request of CreateSubscriber </p>
 *
 */
export interface CreateSubscriberRequest {
  __type?: "CreateSubscriberRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget that you want to subscribe to. Budget names must be unique within an account.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The notification that you want to create a subscriber for.</p>
   *
   */
  Notification: Notification | undefined;

  /**
   *
   * 		       <p>The subscriber that you want to associate with a budget notification.</p>
   *
   */
  Subscriber: Subscriber | undefined;
}

export namespace CreateSubscriberRequest {
  export function isa(o: any): o is CreateSubscriberRequest {
    return _smithy.isa(o, "CreateSubscriberRequest");
  }
}

/**
 *
 * 		       <p> Response of CreateSubscriber </p>
 *
 */
export interface CreateSubscriberResponse extends $MetadataBearer {
  __type?: "CreateSubscriberResponse";
}

export namespace CreateSubscriberResponse {
  export function isa(o: any): o is CreateSubscriberResponse {
    return _smithy.isa(o, "CreateSubscriberResponse");
  }
}

/**
 *
 *          <p>You've exceeded the notification or subscriber limit.</p>
 *
 */
export interface CreationLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CreationLimitExceededException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace CreationLimitExceededException {
  export function isa(o: any): o is CreationLimitExceededException {
    return _smithy.isa(o, "CreationLimitExceededException");
  }
}

/**
 *
 * 		       <p> Request of DeleteBudget </p>
 *
 */
export interface DeleteBudgetRequest {
  __type?: "DeleteBudgetRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget that you want to delete.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget that you want to delete.</p>
   *
   */
  BudgetName: string | undefined;
}

export namespace DeleteBudgetRequest {
  export function isa(o: any): o is DeleteBudgetRequest {
    return _smithy.isa(o, "DeleteBudgetRequest");
  }
}

/**
 *
 * 		       <p> Response of DeleteBudget </p>
 *
 */
export interface DeleteBudgetResponse extends $MetadataBearer {
  __type?: "DeleteBudgetResponse";
}

export namespace DeleteBudgetResponse {
  export function isa(o: any): o is DeleteBudgetResponse {
    return _smithy.isa(o, "DeleteBudgetResponse");
  }
}

/**
 *
 * 		       <p> Request of DeleteNotification </p>
 *
 */
export interface DeleteNotificationRequest {
  __type?: "DeleteNotificationRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose notification you want to delete.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose notification you want to delete.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The notification that you want to delete.</p>
   *
   */
  Notification: Notification | undefined;
}

export namespace DeleteNotificationRequest {
  export function isa(o: any): o is DeleteNotificationRequest {
    return _smithy.isa(o, "DeleteNotificationRequest");
  }
}

/**
 *
 * 		       <p> Response of DeleteNotification </p>
 *
 */
export interface DeleteNotificationResponse extends $MetadataBearer {
  __type?: "DeleteNotificationResponse";
}

export namespace DeleteNotificationResponse {
  export function isa(o: any): o is DeleteNotificationResponse {
    return _smithy.isa(o, "DeleteNotificationResponse");
  }
}

/**
 *
 * 		       <p> Request of DeleteSubscriber </p>
 *
 */
export interface DeleteSubscriberRequest {
  __type?: "DeleteSubscriberRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose subscriber you want to delete.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The notification whose subscriber you want to delete.</p>
   *
   */
  Notification: Notification | undefined;

  /**
   *
   * 		       <p>The subscriber that you want to delete.</p>
   *
   */
  Subscriber: Subscriber | undefined;
}

export namespace DeleteSubscriberRequest {
  export function isa(o: any): o is DeleteSubscriberRequest {
    return _smithy.isa(o, "DeleteSubscriberRequest");
  }
}

/**
 *
 * 		       <p> Response of DeleteSubscriber </p>
 *
 */
export interface DeleteSubscriberResponse extends $MetadataBearer {
  __type?: "DeleteSubscriberResponse";
}

export namespace DeleteSubscriberResponse {
  export function isa(o: any): o is DeleteSubscriberResponse {
    return _smithy.isa(o, "DeleteSubscriberResponse");
  }
}

export interface DescribeBudgetPerformanceHistoryRequest {
  __type?: "DescribeBudgetPerformanceHistoryRequest";
  /**
   *
   * 		       <p>The account ID of the user. It should be a 12-digit number.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p> A generic string.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.</p>
   *
   */
  TimePeriod?: TimePeriod;
}

export namespace DescribeBudgetPerformanceHistoryRequest {
  export function isa(o: any): o is DescribeBudgetPerformanceHistoryRequest {
    return _smithy.isa(o, "DescribeBudgetPerformanceHistoryRequest");
  }
}

export interface DescribeBudgetPerformanceHistoryResponse
  extends $MetadataBearer {
  __type?: "DescribeBudgetPerformanceHistoryResponse";
  /**
   *
   * 		       <p>The history of how often the budget has gone into an <code>ALARM</code> state.</p>
   * 		       <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>
   *
   */
  BudgetPerformanceHistory?: BudgetPerformanceHistory;

  /**
   *
   * 		       <p> A generic string.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeBudgetPerformanceHistoryResponse {
  export function isa(o: any): o is DescribeBudgetPerformanceHistoryResponse {
    return _smithy.isa(o, "DescribeBudgetPerformanceHistoryResponse");
  }
}

/**
 *
 * 		       <p> Request of DescribeBudget </p>
 *
 */
export interface DescribeBudgetRequest {
  __type?: "DescribeBudgetRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget that you want a description of.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget that you want a description of.</p>
   *
   */
  BudgetName: string | undefined;
}

export namespace DescribeBudgetRequest {
  export function isa(o: any): o is DescribeBudgetRequest {
    return _smithy.isa(o, "DescribeBudgetRequest");
  }
}

/**
 *
 * 		       <p> Response of DescribeBudget </p>
 *
 */
export interface DescribeBudgetResponse extends $MetadataBearer {
  __type?: "DescribeBudgetResponse";
  /**
   *
   * 		       <p>The description of the budget.</p>
   *
   */
  Budget?: Budget;
}

export namespace DescribeBudgetResponse {
  export function isa(o: any): o is DescribeBudgetResponse {
    return _smithy.isa(o, "DescribeBudgetResponse");
  }
}

/**
 *
 * 		       <p> Request of DescribeBudgets </p>
 *
 */
export interface DescribeBudgetsRequest {
  __type?: "DescribeBudgetsRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budgets that you want descriptions of.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeBudgetsRequest {
  export function isa(o: any): o is DescribeBudgetsRequest {
    return _smithy.isa(o, "DescribeBudgetsRequest");
  }
}

/**
 *
 * 		       <p> Response of DescribeBudgets </p>
 *
 */
export interface DescribeBudgetsResponse extends $MetadataBearer {
  __type?: "DescribeBudgetsResponse";
  /**
   *
   * 		       <p>A list of budgets.</p>
   *
   */
  Budgets?: Array<Budget>;

  /**
   *
   * 		       <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeBudgetsResponse {
  export function isa(o: any): o is DescribeBudgetsResponse {
    return _smithy.isa(o, "DescribeBudgetsResponse");
  }
}

/**
 *
 * 		       <p> Request of DescribeNotificationsForBudget </p>
 *
 */
export interface DescribeNotificationsForBudgetRequest {
  __type?: "DescribeNotificationsForBudgetRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose notifications you want descriptions of.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose notifications you want descriptions of.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeNotificationsForBudgetRequest {
  export function isa(o: any): o is DescribeNotificationsForBudgetRequest {
    return _smithy.isa(o, "DescribeNotificationsForBudgetRequest");
  }
}

/**
 *
 * 		       <p> Response of GetNotificationsForBudget </p>
 *
 */
export interface DescribeNotificationsForBudgetResponse
  extends $MetadataBearer {
  __type?: "DescribeNotificationsForBudgetResponse";
  /**
   *
   * 		       <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>A list of notifications that are associated with a budget.</p>
   *
   */
  Notifications?: Array<Notification>;
}

export namespace DescribeNotificationsForBudgetResponse {
  export function isa(o: any): o is DescribeNotificationsForBudgetResponse {
    return _smithy.isa(o, "DescribeNotificationsForBudgetResponse");
  }
}

/**
 *
 * 		       <p> Request of DescribeSubscribersForNotification </p>
 *
 */
export interface DescribeSubscribersForNotificationRequest {
  __type?: "DescribeSubscribersForNotificationRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose subscribers you want descriptions of.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The notification whose subscribers you want to list.</p>
   *
   */
  Notification: Notification | undefined;
}

export namespace DescribeSubscribersForNotificationRequest {
  export function isa(o: any): o is DescribeSubscribersForNotificationRequest {
    return _smithy.isa(o, "DescribeSubscribersForNotificationRequest");
  }
}

/**
 *
 * 		       <p> Response of DescribeSubscribersForNotification </p>
 *
 */
export interface DescribeSubscribersForNotificationResponse
  extends $MetadataBearer {
  __type?: "DescribeSubscribersForNotificationResponse";
  /**
   *
   * 		       <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>A list of subscribers that are associated with a notification.</p>
   *
   */
  Subscribers?: Array<Subscriber>;
}

export namespace DescribeSubscribersForNotificationResponse {
  export function isa(o: any): o is DescribeSubscribersForNotificationResponse {
    return _smithy.isa(o, "DescribeSubscribersForNotificationResponse");
  }
}

/**
 *
 *          <p>The budget name already exists. Budget names must be unique within an account.</p>
 *
 */
export interface DuplicateRecordException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DuplicateRecordException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace DuplicateRecordException {
  export function isa(o: any): o is DuplicateRecordException {
    return _smithy.isa(o, "DuplicateRecordException");
  }
}

/**
 *
 *          <p>The pagination token expired.</p>
 *
 */
export interface ExpiredNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ExpiredNextTokenException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace ExpiredNextTokenException {
  export function isa(o: any): o is ExpiredNextTokenException {
    return _smithy.isa(o, "ExpiredNextTokenException");
  }
}

/**
 *
 *          <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 */
export interface InternalErrorException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalErrorException";
  $fault: "server";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace InternalErrorException {
  export function isa(o: any): o is InternalErrorException {
    return _smithy.isa(o, "InternalErrorException");
  }
}

/**
 *
 *          <p>The pagination token is invalid.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 *          <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 */
export interface InvalidParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 *
 *          <p>We can’t locate the resource that you specified.</p>
 *
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotFoundException";
  $fault: "client";
  /**
   *
   *          <p>The error message the exception carries.</p>
   *
   */
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
}

/**
 *
 * 		       <p>A notification that is associated with a budget. A budget can have up to five notifications. </p>
 * 		       <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 * 		       <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>A notificationType of <code>ACTUAL</code>
 *                </p>
 * 			         </li>
 *             <li>
 * 				           <p>A <code>thresholdType</code> of <code>PERCENTAGE</code>
 *                </p>
 * 			         </li>
 *             <li>
 * 				           <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code>
 *                </p>
 * 			         </li>
 *             <li>
 * 				           <p>A notification <code>threshold</code> of <code>80</code>
 *                </p>
 * 			         </li>
 *          </ul>
 *
 */
export interface Notification {
  __type?: "Notification";
  /**
   *
   * 		       <p>The comparison that is used for this notification.</p>
   *
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   *
   * 		       <p>Whether this notification is in alarm. If a budget notification is in the <code>ALARM</code> state, you have passed the set threshold for the budget.</p>
   *
   */
  NotificationState?: NotificationState | string;

  /**
   *
   * 		       <p>Whether the notification is for how much you have spent (<code>ACTUAL</code>) or for how much you're forecasted to spend (<code>FORECASTED</code>).</p>
   *
   */
  NotificationType: NotificationType | string | undefined;

  /**
   *
   * 		       <p>The threshold that is associated with a notification. Thresholds are always a percentage.</p>
   *
   */
  Threshold: number | undefined;

  /**
   *
   * 		       <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, AWS notifies you when you go over 160 dollars.</p>
   *
   */
  ThresholdType?: ThresholdType | string;
}

export namespace Notification {
  export function isa(o: any): o is Notification {
    return _smithy.isa(o, "Notification");
  }
}

export enum NotificationState {
  ALARM = "ALARM",
  OK = "OK"
}

export enum NotificationType {
  ACTUAL = "ACTUAL",
  FORECASTED = "FORECASTED"
}

/**
 *
 * 		       <p>A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 *
 */
export interface NotificationWithSubscribers {
  __type?: "NotificationWithSubscribers";
  /**
   *
   * 		       <p>The notification that is associated with a budget.</p>
   *
   */
  Notification: Notification | undefined;

  /**
   *
   * 		       <p>A list of subscribers who are subscribed to this notification.</p>
   *
   */
  Subscribers: Array<Subscriber> | undefined;
}

export namespace NotificationWithSubscribers {
  export function isa(o: any): o is NotificationWithSubscribers {
    return _smithy.isa(o, "NotificationWithSubscribers");
  }
}

/**
 *
 * 		       <p>The amount of cost or usage that is measured for a budget.</p>
 * 		       <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>An <code>Amount</code> of <code>3</code>
 *                </p>
 * 			         </li>
 *             <li>
 * 				           <p>A <code>unit</code> of <code>GB</code>
 *                </p>
 * 			         </li>
 *          </ul>
 *
 */
export interface Spend {
  __type?: "Spend";
  /**
   *
   * 		       <p>The cost or usage amount that is associated with a budget forecast, actual spend, or budget threshold.</p>
   *
   */
  Amount: string | undefined;

  /**
   *
   * 		       <p>The unit of measurement that is used for the budget forecast, actual spend, or budget threshold, such as dollars or GB.</p>
   *
   */
  Unit: string | undefined;
}

export namespace Spend {
  export function isa(o: any): o is Spend {
    return _smithy.isa(o, "Spend");
  }
}

/**
 *
 * 		       <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p>
 * 		       <p>For example, an email subscriber would have the following parameters:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>A <code>subscriptionType</code> of <code>EMAIL</code>
 *                </p>
 * 			         </li>
 *             <li>
 * 				           <p>An <code>address</code> of <code>example@example.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 *
 */
export interface Subscriber {
  __type?: "Subscriber";
  /**
   *
   * 		       <p>The address that AWS sends budget notifications to, either an SNS topic or an email.</p>
   * 		       <p>When you create a subscriber, the value of <code>Address</code> can't contain line breaks.</p>
   *
   */
  Address: string | undefined;

  /**
   *
   * 		       <p>The type of notification that AWS sends to a subscriber.</p>
   *
   */
  SubscriptionType: SubscriptionType | string | undefined;
}

export namespace Subscriber {
  export function isa(o: any): o is Subscriber {
    return _smithy.isa(o, "Subscriber");
  }
}

export enum SubscriptionType {
  EMAIL = "EMAIL",
  SNS = "SNS"
}

export enum ThresholdType {
  ABSOLUTE_VALUE = "ABSOLUTE_VALUE",
  PERCENTAGE = "PERCENTAGE"
}

/**
 *
 * 		       <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. </p>
 *
 */
export interface TimePeriod {
  __type?: "TimePeriod";
  /**
   *
   * 		       <p>The end date for a budget. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p>
   * 		       <p>After the end date, AWS deletes the budget and all associated notifications and subscribers. You can change your end date with the <code>UpdateBudget</code> operation.</p>
   *
   */
  End?: Date;

  /**
   *
   * 		       <p>The start date for a budget. If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p>
   * 		       <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>
   *
   */
  Start?: Date;
}

export namespace TimePeriod {
  export function isa(o: any): o is TimePeriod {
    return _smithy.isa(o, "TimePeriod");
  }
}

export enum TimeUnit {
  ANNUALLY = "ANNUALLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY"
}

/**
 *
 * 		       <p> Request of UpdateBudget </p>
 *
 */
export interface UpdateBudgetRequest {
  __type?: "UpdateBudgetRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget that you want to update.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The budget that you want to update your budget to.</p>
   *
   */
  NewBudget: Budget | undefined;
}

export namespace UpdateBudgetRequest {
  export function isa(o: any): o is UpdateBudgetRequest {
    return _smithy.isa(o, "UpdateBudgetRequest");
  }
}

/**
 *
 * 		       <p> Response of UpdateBudget </p>
 *
 */
export interface UpdateBudgetResponse extends $MetadataBearer {
  __type?: "UpdateBudgetResponse";
}

export namespace UpdateBudgetResponse {
  export function isa(o: any): o is UpdateBudgetResponse {
    return _smithy.isa(o, "UpdateBudgetResponse");
  }
}

/**
 *
 * 		       <p> Request of UpdateNotification </p>
 *
 */
export interface UpdateNotificationRequest {
  __type?: "UpdateNotificationRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose notification you want to update.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The updated notification to be associated with a budget.</p>
   *
   */
  NewNotification: Notification | undefined;

  /**
   *
   * 		       <p>The previous notification that is associated with a budget.</p>
   *
   */
  OldNotification: Notification | undefined;
}

export namespace UpdateNotificationRequest {
  export function isa(o: any): o is UpdateNotificationRequest {
    return _smithy.isa(o, "UpdateNotificationRequest");
  }
}

/**
 *
 * 		       <p> Response of UpdateNotification </p>
 *
 */
export interface UpdateNotificationResponse extends $MetadataBearer {
  __type?: "UpdateNotificationResponse";
}

export namespace UpdateNotificationResponse {
  export function isa(o: any): o is UpdateNotificationResponse {
    return _smithy.isa(o, "UpdateNotificationResponse");
  }
}

/**
 *
 * 		       <p> Request of UpdateSubscriber </p>
 *
 */
export interface UpdateSubscriberRequest {
  __type?: "UpdateSubscriberRequest";
  /**
   *
   * 		       <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to update.</p>
   *
   */
  AccountId: string | undefined;

  /**
   *
   * 		       <p>The name of the budget whose subscriber you want to update.</p>
   *
   */
  BudgetName: string | undefined;

  /**
   *
   * 		       <p>The updated subscriber that is associated with a budget notification.</p>
   *
   */
  NewSubscriber: Subscriber | undefined;

  /**
   *
   * 		       <p>The notification whose subscriber you want to update.</p>
   *
   */
  Notification: Notification | undefined;

  /**
   *
   * 		       <p>The previous subscriber that is associated with a budget notification.</p>
   *
   */
  OldSubscriber: Subscriber | undefined;
}

export namespace UpdateSubscriberRequest {
  export function isa(o: any): o is UpdateSubscriberRequest {
    return _smithy.isa(o, "UpdateSubscriberRequest");
  }
}

/**
 *
 * 		       <p> Response of UpdateSubscriber </p>
 *
 */
export interface UpdateSubscriberResponse extends $MetadataBearer {
  __type?: "UpdateSubscriberResponse";
}

export namespace UpdateSubscriberResponse {
  export function isa(o: any): o is UpdateSubscriberResponse {
    return _smithy.isa(o, "UpdateSubscriberResponse");
  }
}
