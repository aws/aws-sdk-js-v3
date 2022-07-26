// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { BudgetsServiceException as __BaseException } from "./BudgetsServiceException";

/**
 * <p>You are not authorized to use this operation with the given parameters.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum ThresholdType {
  ABSOLUTE_VALUE = "ABSOLUTE_VALUE",
  PERCENTAGE = "PERCENTAGE",
}

/**
 * <p>The trigger threshold of the action. </p>
 */
export interface ActionThreshold {
  /**
   * <p> The threshold of a notification.</p>
   */
  ActionThresholdValue: number | undefined;

  /**
   * <p> The type of threshold for a notification.</p>
   */
  ActionThresholdType: ThresholdType | string | undefined;
}

export enum ActionType {
  IAM = "APPLY_IAM_POLICY",
  SCP = "APPLY_SCP_POLICY",
  SSM = "RUN_SSM_DOCUMENTS",
}

export enum ApprovalModel {
  AUTO = "AUTOMATIC",
  MANUAL = "MANUAL",
}

/**
 * <p>The Identity and Access Management (IAM) action definition details. </p>
 */
export interface IamActionDefinition {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy to be attached. </p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>A list of roles to be attached. There must be at least one role. </p>
   */
  Roles?: string[];

  /**
   * <p>A list of groups to be attached. There must be at least one group. </p>
   */
  Groups?: string[];

  /**
   * <p>A list of users to be attached. There must be at least one user. </p>
   */
  Users?: string[];
}

/**
 * <p>The service control policies (SCP) action definition details. </p>
 */
export interface ScpActionDefinition {
  /**
   * <p>The policy ID attached. </p>
   */
  PolicyId: string | undefined;

  /**
   * <p>A list of target IDs. </p>
   */
  TargetIds: string[] | undefined;
}

export enum ActionSubType {
  STOP_EC2 = "STOP_EC2_INSTANCES",
  STOP_RDS = "STOP_RDS_INSTANCES",
}

/**
 * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
 */
export interface SsmActionDefinition {
  /**
   * <p>The action subType. </p>
   */
  ActionSubType: ActionSubType | string | undefined;

  /**
   * <p>The Region to run the SSM document. </p>
   */
  Region: string | undefined;

  /**
   * <p>The EC2 and RDS instance IDs. </p>
   */
  InstanceIds: string[] | undefined;
}

/**
 * <p>Specifies all of the type-specific parameters. </p>
 */
export interface Definition {
  /**
   * <p>The Identity and Access Management (IAM) action definition details. </p>
   */
  IamActionDefinition?: IamActionDefinition;

  /**
   * <p>The service control policies (SCPs) action definition details. </p>
   */
  ScpActionDefinition?: ScpActionDefinition;

  /**
   * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
   */
  SsmActionDefinition?: SsmActionDefinition;
}

export enum NotificationType {
  ACTUAL = "ACTUAL",
  FORECASTED = "FORECASTED",
}

export enum ActionStatus {
  Execution_Failure = "EXECUTION_FAILURE",
  Execution_In_Progress = "EXECUTION_IN_PROGRESS",
  Execution_Success = "EXECUTION_SUCCESS",
  Pending = "PENDING",
  Reset_Failure = "RESET_FAILURE",
  Reset_In_Progress = "RESET_IN_PROGRESS",
  Reverse_Failure = "REVERSE_FAILURE",
  Reverse_In_Progress = "REVERSE_IN_PROGRESS",
  Reverse_Success = "REVERSE_SUCCESS",
  Standby = "STANDBY",
}

export enum SubscriptionType {
  EMAIL = "EMAIL",
  SNS = "SNS",
}

/**
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p>
 * 		       <p>For example, an email subscriber has the following parameters:</p>
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
 */
export interface Subscriber {
  /**
   * <p>The type of notification that Amazon Web Services sends to a subscriber.</p>
   */
  SubscriptionType: SubscriptionType | string | undefined;

  /**
   * <p>The address that Amazon Web Services sends budget notifications to, either an SNS topic or an email.</p>
   * 		       <p>When you create a subscriber, the value of <code>Address</code> can't contain line breaks.</p>
   */
  Address: string | undefined;
}

/**
 * <p>A budget action resource. </p>
 */
export interface Action {
  /**
   * <p>A system-generated universally unique identifier (UUID) for the action. </p>
   */
  ActionId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType: NotificationType | string | undefined;

  /**
   * <p>The type of action. This defines the type of tasks that can be carried out by this action.
   * 			This field also determines the format for definition. </p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>Where you specify all of the type-specific parameters. </p>
   */
  Definition: Definition | undefined;

  /**
   * <p>The role passed for action execution and reversion. Roles and actions must be in the same
   * 			account. </p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>This specifies if the action needs manual or automatic approval. </p>
   */
  ApprovalModel: ApprovalModel | string | undefined;

  /**
   * <p>The status of the action. </p>
   */
  Status: ActionStatus | string | undefined;

  /**
   * <p> A list of subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p>The description of the details for the event. </p>
 */
export interface ActionHistoryDetails {
  /**
   * <p> A generic string.</p>
   */
  Message: string | undefined;

  /**
   * <p>The budget action resource. </p>
   */
  Action: Action | undefined;
}

export enum EventType {
  CreateAction = "CREATE_ACTION",
  DeleteAction = "DELETE_ACTION",
  ExecuteAction = "EXECUTE_ACTION",
  System = "SYSTEM",
  UpdateAction = "UPDATE_ACTION",
}

/**
 * <p>The historical records for a budget action. </p>
 */
export interface ActionHistory {
  /**
   * <p> A generic time stamp. In Java, it's transformed to a <code>Date</code> object.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The status of action at the time of the event. </p>
   */
  Status: ActionStatus | string | undefined;

  /**
   * <p>This distinguishes between whether the events are triggered by the user or are generated by
   * 			the system. </p>
   */
  EventType: EventType | string | undefined;

  /**
   * <p>The description of the details for the event. </p>
   */
  ActionHistoryDetails: ActionHistoryDetails | undefined;
}

export enum AutoAdjustType {
  FORECAST = "FORECAST",
  HISTORICAL = "HISTORICAL",
}

/**
 * <p>The parameters that define or describe the historical data that your auto-adjusting budget is based on.</p>
 */
export interface HistoricalOptions {
  /**
   * <p>The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the <code>TimeUnit</code> granularity of the budget:</p>
   * 		       <ul>
   *             <li>
   *                <p>For the <code>DAILY</code> granularity, the maximum value is <code>60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>MONTHLY</code> granularity, the maximum value is <code>12</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>QUARTERLY</code> granularity, the maximum value is <code>4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>ANNUALLY</code> granularity, the maximum value is <code>1</code>.</p>
   *             </li>
   *          </ul>
   */
  BudgetAdjustmentPeriod: number | undefined;

  /**
   * <p>The integer that describes how many budget periods in your <code>BudgetAdjustmentPeriod</code> are included in the calculation of your current <code>BudgetLimit</code>. If the first budget period in your <code>BudgetAdjustmentPeriod</code> has no cost data, then that budget period isn’t included in the average that determines your budget limit. </p>
   * 		       <p>For example, if you set <code>BudgetAdjustmentPeriod</code> as <code>4</code> quarters, but your account had no cost data in the first quarter, then only the last three quarters are included in the calculation. In this scenario, <code>LookBackAvailablePeriods</code> returns <code>3</code>. </p>
   * 		       <p>You can’t set your own <code>LookBackAvailablePeriods</code>. The value is automatically calculated from the <code>BudgetAdjustmentPeriod</code> and your historical cost data.</p>
   */
  LookBackAvailablePeriods?: number;
}

/**
 * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
 */
export interface AutoAdjustData {
  /**
   * <p>The string that defines whether your budget auto-adjusts based on historical or forecasted data.</p>
   */
  AutoAdjustType: AutoAdjustType | string | undefined;

  /**
   * <p>The parameters that define or describe the historical data that your auto-adjusting budget is based on.</p>
   */
  HistoricalOptions?: HistoricalOptions;

  /**
   * <p>The last time that your budget was auto-adjusted.</p>
   */
  LastAutoAdjustTime?: Date;
}

/**
 * <p>The amount of cost or usage that's measured for a budget.</p>
 * 		       <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following
 * 			parameters:</p>
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
 */
export interface Spend {
  /**
   * <p>The cost or usage amount that's associated with a budget forecast, actual spend, or budget
   * 			threshold.</p>
   */
  Amount: string | undefined;

  /**
   * <p>The unit of measurement that's used for the budget forecast, actual spend, or budget
   * 			threshold, such as USD or GBP.</p>
   */
  Unit: string | undefined;
}

export enum BudgetType {
  Cost = "COST",
  RICoverage = "RI_COVERAGE",
  RIUtilization = "RI_UTILIZATION",
  SPCoverage = "SAVINGS_PLANS_COVERAGE",
  SPUtilization = "SAVINGS_PLANS_UTILIZATION",
  Usage = "USAGE",
}

/**
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks
 * 			how much you've used, cost, usage, RI units, or Savings Plans units and the
 * 				<code>forecastedSpend</code> tracks how much that you're predicted to spend based on
 * 			your historical usage profile.</p>
 * 		       <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on
 * 			Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your
 * 				<code>forecastedSpend</code> is <code>75 USD</code>.</p>
 */
export interface CalculatedSpend {
  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you used.</p>
   */
  ActualSpend: Spend | undefined;

  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you're forecasted to
   * 			use.</p>
   */
  ForecastedSpend?: Spend;
}

/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p>
 * 		       <p>
 *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>,
 * 				<code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code>
 * 			budgets don't have <code>CostTypes</code>.</p>
 */
export interface CostTypes {
  /**
   * <p>Specifies whether a budget includes taxes.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeTax?: boolean;

  /**
   * <p>Specifies whether a budget includes subscriptions.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeSubscription?: boolean;

  /**
   * <p>Specifies whether a budget uses a blended rate.</p>
   * 		       <p>The default value is <code>false</code>.</p>
   */
  UseBlended?: boolean;

  /**
   * <p>Specifies whether a budget includes refunds.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeRefund?: boolean;

  /**
   * <p>Specifies whether a budget includes credits.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeCredit?: boolean;

  /**
   * <p>Specifies whether a budget includes upfront RI costs.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeUpfront?: boolean;

  /**
   * <p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeRecurring?: boolean;

  /**
   * <p>Specifies whether a budget includes non-RI subscription costs.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeOtherSubscription?: boolean;

  /**
   * <p>Specifies whether a budget includes support subscription fees.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeSupport?: boolean;

  /**
   * <p>Specifies whether a budget includes discounts.</p>
   * 		       <p>The default value is <code>true</code>.</p>
   */
  IncludeDiscount?: boolean;

  /**
   * <p>Specifies whether a budget uses the amortized rate.</p>
   * 		       <p>The default value is <code>false</code>.</p>
   */
  UseAmortized?: boolean;
}

/**
 * <p>The period of time that's covered by a budget. The period has a start date and an end date.
 * 			The start date must come before the end date. There are no restrictions on the end date. </p>
 */
export interface TimePeriod {
  /**
   * <p>The start date for a budget. If you created your budget and didn't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p>
   * 		       <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>
   */
  Start?: Date;

  /**
   * <p>The end date for a budget. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p>
   * 		       <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers. You can change your end date with the
   * 				<code>UpdateBudget</code> operation.</p>
   */
  End?: Date;
}

export enum TimeUnit {
  ANNUALLY = "ANNUALLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
}

/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p>
 * 		       <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p>
 * 		       <p>
 *             <code>arn:aws:budgets::AccountId:budget/budgetName</code>
 *          </p>
 */
export interface Budget {
  /**
   * <p>The name of a budget. The name must be unique within an account. The <code>:</code> and <code>\</code> characters aren't allowed in <code>BudgetName</code>.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or
   * 			Savings Plans coverage that you want to track with your budget.</p>
   * 		       <p>
   *             <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or
   * 			Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or
   * 			coverage budgets default to <code>100</code>. This is the only valid value for RI or
   * 			Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code>
   * 			with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and
   * 				<code>UpdateBudget</code> actions. </p>
   */
  BudgetLimit?: Spend;

  /**
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p>
   * 		       <p>
   *             <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports both
   * 			monthly and quarterly <code>TimeUnit</code>. </p>
   * 		       <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>For quarterly budgets, provide four quarters of <code>PlannedBudgetLimits</code> value
   * 			entries in standard calendar quarter increments. This must start from the current
   * 			quarter and include the next three quarters. The <code>key</code> is the start of the
   * 			quarter, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>If the planned budget expires before 12 months for monthly or four quarters for quarterly,
   * 			provide the <code>PlannedBudgetLimits</code> values only for the remaining
   * 			periods.</p>
   * 		       <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p>
   * 		       <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p>
   * 		       <p>
   *             <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with
   * 				<code>PlannedBudgetLimits</code> also contain <code>BudgetLimit</code> representing
   * 			the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This
   * 			only applies to budgets that are created with <code>PlannedBudgetLimits</code>. Budgets
   * 			that are created without <code>PlannedBudgetLimits</code> only contain
   * 				<code>BudgetLimit</code>. They don't contain
   * 			<code>PlannedBudgetLimits</code>.</p>
   */
  PlannedBudgetLimits?: Record<string, Spend>;

  /**
   * <p>The cost filters, such as <code>Region</code>, <code>Service</code>, <code>member account</code>, <code>Tag</code>, or <code>Cost Category</code>, that are applied to a budget.</p>
   * 		       <p>Amazon Web Services Budgets supports the following services as a <code>Service</code> filter for RI budgets:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Amazon EC2</p>
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
   * 				           <p>Amazon OpenSearch Service</p>
   * 			         </li>
   *          </ul>
   */
  CostFilters?: Record<string, string[]>;

  /**
   * <p>The types of costs that are included in this <code>COST</code> budget.</p>
   * 		       <p>
   *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
   */
  CostTypes?: CostTypes;

  /**
   * <p>The length of time until a budget resets the actual and forecasted spend.</p>
   */
  TimeUnit: TimeUnit | string | undefined;

  /**
   * <p>The period of time that's covered by a budget. You setthe start date and end date. The start
   * 			date must come before the end date. The end date must come before <code>06/15/87 00:00
   * 				UTC</code>. </p>
   * 		       <p>If you create your budget and don't specify a start date, Amazon Web Services defaults to the
   * 			start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example,
   * 			if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set
   * 			a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>.
   * 			If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to
   * 				<code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for
   * 			the Billing and Cost Management console and the API. </p>
   * 		       <p>You can change either date with the <code>UpdateBudget</code> operation.</p>
   * 		       <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers.</p>
   */
  TimePeriod?: TimePeriod;

  /**
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   */
  CalculatedSpend?: CalculatedSpend;

  /**
   * <p>Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings
   * 			Plans utilization, or Savings Plans coverage.</p>
   */
  BudgetType: BudgetType | string | undefined;

  /**
   * <p>The last time that you updated this budget.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
   */
  AutoAdjustData?: AutoAdjustData;
}

export enum ComparisonOperator {
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
}

export enum NotificationState {
  ALARM = "ALARM",
  OK = "OK",
}

/**
 * <p>A notification that's associated with a budget. A budget can have up to ten notifications. </p>
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
 */
export interface Notification {
  /**
   * <p>Specifies whether the notification is for how much you have spent (<code>ACTUAL</code>) or
   * 			for how much that you're forecasted to spend (<code>FORECASTED</code>).</p>
   */
  NotificationType: NotificationType | string | undefined;

  /**
   * <p>The comparison that's used for this notification.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The threshold that's associated with a notification. Thresholds are always a percentage, and
   * 			many customers find value being alerted between 50% - 200% of the budgeted amount. The
   * 			maximum limit for your threshold is 1,000,000% above the budgeted amount.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, Amazon Web Services notifies you when you go over 160 dollars.</p>
   */
  ThresholdType?: ThresholdType | string;

  /**
   * <p>Specifies whether this notification is in alarm. If a budget notification is in the
   * 				<code>ALARM</code> state, you passed the set threshold for the budget.</p>
   */
  NotificationState?: NotificationState | string;
}

/**
 * <p>A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 */
export interface NotificationWithSubscribers {
  /**
   * <p>The notification that's associated with a budget.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>A list of subscribers who are subscribed to this notification.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p> Request of CreateBudget </p>
 */
export interface CreateBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The budget object that you want to create.</p>
   */
  Budget: Budget | undefined;

  /**
   * <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, Amazon Web Services creates the notifications and subscribers for you.</p>
   */
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
}

/**
 * <p> Response of CreateBudget </p>
 */
export interface CreateBudgetResponse {}

/**
 * <p>You've exceeded the notification or subscriber limit.</p>
 */
export class CreationLimitExceededException extends __BaseException {
  readonly name: "CreationLimitExceededException" = "CreationLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreationLimitExceededException, __BaseException>) {
    super({
      name: "CreationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreationLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The budget name already exists. Budget names must be unique within an account.</p>
 */
export class DuplicateRecordException extends __BaseException {
  readonly name: "DuplicateRecordException" = "DuplicateRecordException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRecordException, __BaseException>) {
    super({
      name: "DuplicateRecordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRecordException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *       The number of API requests has exceeded the maximum allowed API request throttling limit for the account.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType: NotificationType | string | undefined;

  /**
   * <p>
   *          The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *       </p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>Specifies all of the type-specific parameters. </p>
   */
  Definition: Definition | undefined;

  /**
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   */
  ApprovalModel: ApprovalModel | string | undefined;

  /**
   * <p> A list of subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

export interface CreateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

/**
 * <p>We can’t locate the resource that you specified.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Request of CreateNotification </p>
 */
export interface CreateNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to create.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p> Response of CreateNotification </p>
 */
export interface CreateNotificationResponse {}

/**
 * <p> Request of CreateSubscriber </p>
 */
export interface CreateSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want to subscribe to. Budget names must be unique within an account.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to create a subscriber for.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>The subscriber that you want to associate with a budget notification.</p>
   */
  Subscriber: Subscriber | undefined;
}

/**
 * <p> Response of CreateSubscriber </p>
 */
export interface CreateSubscriberResponse {}

/**
 * <p> Request of DeleteBudget </p>
 */
export interface DeleteBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want to delete.</p>
   */
  BudgetName: string | undefined;
}

/**
 * <p> Response of DeleteBudget </p>
 */
export interface DeleteBudgetResponse {}

export interface DeleteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

export interface DeleteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>A budget action resource. </p>
   */
  Action: Action | undefined;
}

/**
 * <p> The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource. </p>
 */
export class ResourceLockedException extends __BaseException {
  readonly name: "ResourceLockedException" = "ResourceLockedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLockedException, __BaseException>) {
    super({
      name: "ResourceLockedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLockedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Request of DeleteNotification </p>
 */
export interface DeleteNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notification you want to delete.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to delete.</p>
   */
  Notification: Notification | undefined;
}

/**
 * <p> Response of DeleteNotification </p>
 */
export interface DeleteNotificationResponse {}

/**
 * <p> Request of DeleteSubscriber </p>
 */
export interface DeleteSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscriber you want to delete.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscriber you want to delete.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>The subscriber that you want to delete.</p>
   */
  Subscriber: Subscriber | undefined;
}

/**
 * <p> Response of DeleteSubscriber </p>
 */
export interface DeleteSubscriberResponse {}

/**
 * <p> Request of DescribeBudget </p>
 */
export interface DescribeBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want a description of.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want a description of.</p>
   */
  BudgetName: string | undefined;
}

/**
 * <p> Response of DescribeBudget </p>
 */
export interface DescribeBudgetResponse {
  /**
   * <p>The description of the budget.</p>
   */
  Budget?: Budget;
}

export interface DescribeBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

export interface DescribeBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A budget action resource.
   *       </p>
   */
  Action: Action | undefined;
}

export interface DescribeBudgetActionHistoriesRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * <p>The period of time that's covered by a budget. The period has a start date and an end date.
   * 			The start date must come before the end date. There are no restrictions on the end date. </p>
   */
  TimePeriod?: TimePeriod;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

export interface DescribeBudgetActionHistoriesResponse {
  /**
   * <p>
   *          The historical record of the budget action resource.
   *       </p>
   */
  ActionHistories: ActionHistory[] | undefined;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * <p>The pagination token is invalid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeBudgetActionsForAccountRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

export interface DescribeBudgetActionsForAccountResponse {
  /**
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   */
  Actions: Action[] | undefined;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

export interface DescribeBudgetActionsForBudgetResponse {
  /**
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   */
  Actions: Action[] | undefined;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

export interface DescribeBudgetNotificationsForAccountRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>
   * 			An integer that shows how many budget name entries a paginated response contains.
   * 		</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * <p>
 *          The budget name and associated notifications for an account.
 *       </p>
 */
export interface BudgetNotificationsForAccount {
  /**
   * <p> A list of notifications.</p>
   */
  Notifications?: Notification[];

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName?: string;
}

export interface DescribeBudgetNotificationsForAccountResponse {
  /**
   * <p>
   * 			A list of budget names and associated notifications for an account.
   * 		</p>
   */
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[];

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * <p>The pagination token expired.</p>
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException" = "ExpiredNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>) {
    super({
      name: "ExpiredNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.</p>
   */
  TimePeriod?: TimePeriod;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * <p>The amount of cost or usage that you created the budget for, compared to your actual costs or usage.</p>
 */
export interface BudgetedAndActualAmounts {
  /**
   * <p>The amount of cost or usage that you created the budget for.</p>
   */
  BudgetedAmount?: Spend;

  /**
   * <p>Your actual costs or usage for a budget period.</p>
   */
  ActualAmount?: Spend;

  /**
   * <p>The time period that's covered by this budget comparison.</p>
   */
  TimePeriod?: TimePeriod;
}

/**
 * <p>A history of the state of a budget at the end of the budget's specified time period.</p>
 */
export interface BudgetPerformanceHistory {
  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName?: string;

  /**
   * <p> The type of a budget. It must be one of the following types: </p>
   * 		       <p>
   *             <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>
   */
  BudgetType?: BudgetType | string;

  /**
   * <p>The history of the cost filters for a budget during the specified time period.</p>
   */
  CostFilters?: Record<string, string[]>;

  /**
   * <p>The history of the cost types for a budget during the specified time period.</p>
   */
  CostTypes?: CostTypes;

  /**
   * <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>A list of amounts of cost or usage that you created budgets for, which are compared to your
   * 			actual costs or usage.</p>
   */
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
}

export interface DescribeBudgetPerformanceHistoryResponse {
  /**
   * <p>The history of how often the budget has gone into an <code>ALARM</code> state.</p>
   *          <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>
   */
  BudgetPerformanceHistory?: BudgetPerformanceHistory;

  /**
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * <p> Request of DescribeBudgets </p>
 */
export interface DescribeBudgetsRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budgets that you want descriptions of.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p> Response of DescribeBudgets </p>
 */
export interface DescribeBudgetsResponse {
  /**
   * <p>A list of budgets.</p>
   */
  Budgets?: Budget[];

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p> Request of DescribeNotificationsForBudget </p>
 */
export interface DescribeNotificationsForBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notifications you want descriptions of.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notifications you want descriptions of.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p> Response of GetNotificationsForBudget </p>
 */
export interface DescribeNotificationsForBudgetResponse {
  /**
   * <p>A list of notifications that are associated with a budget.</p>
   */
  Notifications?: Notification[];

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p> Request of DescribeSubscribersForNotification </p>
 */
export interface DescribeSubscribersForNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscribers you want descriptions of.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscribers you want to list.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * <p> Response of DescribeSubscribersForNotification </p>
 */
export interface DescribeSubscribersForNotificationResponse {
  /**
   * <p>A list of subscribers that are associated with a notification.</p>
   */
  Subscribers?: Subscriber[];

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

export enum ExecutionType {
  ApproveBudgetAction = "APPROVE_BUDGET_ACTION",
  ResetBudgetAction = "RESET_BUDGET_ACTION",
  RetryBudgetAction = "RETRY_BUDGET_ACTION",
  ReverseBudgetAction = "REVERSE_BUDGET_ACTION",
}

export interface ExecuteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * <p>
   *          The type of execution.
   *       </p>
   */
  ExecutionType: ExecutionType | string | undefined;
}

export interface ExecuteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * <p>
   *          The type of execution.
   *       </p>
   */
  ExecutionType: ExecutionType | string | undefined;
}

/**
 * <p> Request of UpdateBudget </p>
 */
export interface UpdateBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The budget that you want to update your budget to.</p>
   */
  NewBudget: Budget | undefined;
}

/**
 * <p> Response of UpdateBudget </p>
 */
export interface UpdateBudgetResponse {}

export interface UpdateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType?: NotificationType | string;

  /**
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold?: ActionThreshold;

  /**
   * <p>Specifies all of the type-specific parameters. </p>
   */
  Definition?: Definition;

  /**
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   */
  ApprovalModel?: ApprovalModel | string;

  /**
   * <p> A list of subscribers.</p>
   */
  Subscribers?: Subscriber[];
}

export interface UpdateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          The previous action resource information.
   *       </p>
   */
  OldAction: Action | undefined;

  /**
   * <p>
   *          The updated action resource information.
   *       </p>
   */
  NewAction: Action | undefined;
}

/**
 * <p> Request of UpdateNotification </p>
 */
export interface UpdateNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notification you want to update.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The previous notification that is associated with a budget.</p>
   */
  OldNotification: Notification | undefined;

  /**
   * <p>The updated notification to be associated with a budget.</p>
   */
  NewNotification: Notification | undefined;
}

/**
 * <p> Response of UpdateNotification </p>
 */
export interface UpdateNotificationResponse {}

/**
 * <p> Request of UpdateSubscriber </p>
 */
export interface UpdateSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscriber you want to update.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscriber you want to update.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>The previous subscriber that is associated with a budget notification.</p>
   */
  OldSubscriber: Subscriber | undefined;

  /**
   * <p>The updated subscriber that is associated with a budget notification.</p>
   */
  NewSubscriber: Subscriber | undefined;
}

/**
 * <p> Response of UpdateSubscriber </p>
 */
export interface UpdateSubscriberResponse {}

/**
 * @internal
 */
export const ActionThresholdFilterSensitiveLog = (obj: ActionThreshold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamActionDefinitionFilterSensitiveLog = (obj: IamActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScpActionDefinitionFilterSensitiveLog = (obj: ScpActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SsmActionDefinitionFilterSensitiveLog = (obj: SsmActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefinitionFilterSensitiveLog = (obj: Definition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriberFilterSensitiveLog = (obj: Subscriber): any => ({
  ...obj,
  ...(obj.Address && { Address: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ActionHistoryDetailsFilterSensitiveLog = (obj: ActionHistoryDetails): any => ({
  ...obj,
  ...(obj.Action && { Action: ActionFilterSensitiveLog(obj.Action) }),
});

/**
 * @internal
 */
export const ActionHistoryFilterSensitiveLog = (obj: ActionHistory): any => ({
  ...obj,
  ...(obj.ActionHistoryDetails && {
    ActionHistoryDetails: ActionHistoryDetailsFilterSensitiveLog(obj.ActionHistoryDetails),
  }),
});

/**
 * @internal
 */
export const HistoricalOptionsFilterSensitiveLog = (obj: HistoricalOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoAdjustDataFilterSensitiveLog = (obj: AutoAdjustData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpendFilterSensitiveLog = (obj: Spend): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculatedSpendFilterSensitiveLog = (obj: CalculatedSpend): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CostTypesFilterSensitiveLog = (obj: CostTypes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimePeriodFilterSensitiveLog = (obj: TimePeriod): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BudgetFilterSensitiveLog = (obj: Budget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationFilterSensitiveLog = (obj: Notification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationWithSubscribersFilterSensitiveLog = (obj: NotificationWithSubscribers): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateBudgetRequestFilterSensitiveLog = (obj: CreateBudgetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBudgetResponseFilterSensitiveLog = (obj: CreateBudgetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBudgetActionRequestFilterSensitiveLog = (obj: CreateBudgetActionRequest): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateBudgetActionResponseFilterSensitiveLog = (obj: CreateBudgetActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotificationRequestFilterSensitiveLog = (obj: CreateNotificationRequest): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateNotificationResponseFilterSensitiveLog = (obj: CreateNotificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriberRequestFilterSensitiveLog = (obj: CreateSubscriberRequest): any => ({
  ...obj,
  ...(obj.Subscriber && { Subscriber: SubscriberFilterSensitiveLog(obj.Subscriber) }),
});

/**
 * @internal
 */
export const CreateSubscriberResponseFilterSensitiveLog = (obj: CreateSubscriberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBudgetRequestFilterSensitiveLog = (obj: DeleteBudgetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBudgetResponseFilterSensitiveLog = (obj: DeleteBudgetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBudgetActionRequestFilterSensitiveLog = (obj: DeleteBudgetActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBudgetActionResponseFilterSensitiveLog = (obj: DeleteBudgetActionResponse): any => ({
  ...obj,
  ...(obj.Action && { Action: ActionFilterSensitiveLog(obj.Action) }),
});

/**
 * @internal
 */
export const DeleteNotificationRequestFilterSensitiveLog = (obj: DeleteNotificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotificationResponseFilterSensitiveLog = (obj: DeleteNotificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriberRequestFilterSensitiveLog = (obj: DeleteSubscriberRequest): any => ({
  ...obj,
  ...(obj.Subscriber && { Subscriber: SubscriberFilterSensitiveLog(obj.Subscriber) }),
});

/**
 * @internal
 */
export const DeleteSubscriberResponseFilterSensitiveLog = (obj: DeleteSubscriberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetRequestFilterSensitiveLog = (obj: DescribeBudgetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetResponseFilterSensitiveLog = (obj: DescribeBudgetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionRequestFilterSensitiveLog = (obj: DescribeBudgetActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionResponseFilterSensitiveLog = (obj: DescribeBudgetActionResponse): any => ({
  ...obj,
  ...(obj.Action && { Action: ActionFilterSensitiveLog(obj.Action) }),
});

/**
 * @internal
 */
export const DescribeBudgetActionHistoriesRequestFilterSensitiveLog = (
  obj: DescribeBudgetActionHistoriesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionHistoriesResponseFilterSensitiveLog = (
  obj: DescribeBudgetActionHistoriesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionsForAccountRequestFilterSensitiveLog = (
  obj: DescribeBudgetActionsForAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionsForAccountResponseFilterSensitiveLog = (
  obj: DescribeBudgetActionsForAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionsForBudgetRequestFilterSensitiveLog = (
  obj: DescribeBudgetActionsForBudgetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetActionsForBudgetResponseFilterSensitiveLog = (
  obj: DescribeBudgetActionsForBudgetResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetNotificationsForAccountRequestFilterSensitiveLog = (
  obj: DescribeBudgetNotificationsForAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BudgetNotificationsForAccountFilterSensitiveLog = (obj: BudgetNotificationsForAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetNotificationsForAccountResponseFilterSensitiveLog = (
  obj: DescribeBudgetNotificationsForAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetPerformanceHistoryRequestFilterSensitiveLog = (
  obj: DescribeBudgetPerformanceHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BudgetedAndActualAmountsFilterSensitiveLog = (obj: BudgetedAndActualAmounts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BudgetPerformanceHistoryFilterSensitiveLog = (obj: BudgetPerformanceHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetPerformanceHistoryResponseFilterSensitiveLog = (
  obj: DescribeBudgetPerformanceHistoryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetsRequestFilterSensitiveLog = (obj: DescribeBudgetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBudgetsResponseFilterSensitiveLog = (obj: DescribeBudgetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationsForBudgetRequestFilterSensitiveLog = (
  obj: DescribeNotificationsForBudgetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationsForBudgetResponseFilterSensitiveLog = (
  obj: DescribeNotificationsForBudgetResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscribersForNotificationRequestFilterSensitiveLog = (
  obj: DescribeSubscribersForNotificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscribersForNotificationResponseFilterSensitiveLog = (
  obj: DescribeSubscribersForNotificationResponse
): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ExecuteBudgetActionRequestFilterSensitiveLog = (obj: ExecuteBudgetActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecuteBudgetActionResponseFilterSensitiveLog = (obj: ExecuteBudgetActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBudgetRequestFilterSensitiveLog = (obj: UpdateBudgetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBudgetResponseFilterSensitiveLog = (obj: UpdateBudgetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBudgetActionRequestFilterSensitiveLog = (obj: UpdateBudgetActionRequest): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateBudgetActionResponseFilterSensitiveLog = (obj: UpdateBudgetActionResponse): any => ({
  ...obj,
  ...(obj.OldAction && { OldAction: ActionFilterSensitiveLog(obj.OldAction) }),
  ...(obj.NewAction && { NewAction: ActionFilterSensitiveLog(obj.NewAction) }),
});

/**
 * @internal
 */
export const UpdateNotificationRequestFilterSensitiveLog = (obj: UpdateNotificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotificationResponseFilterSensitiveLog = (obj: UpdateNotificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriberRequestFilterSensitiveLog = (obj: UpdateSubscriberRequest): any => ({
  ...obj,
  ...(obj.OldSubscriber && { OldSubscriber: SubscriberFilterSensitiveLog(obj.OldSubscriber) }),
  ...(obj.NewSubscriber && { NewSubscriber: SubscriberFilterSensitiveLog(obj.NewSubscriber) }),
});

/**
 * @internal
 */
export const UpdateSubscriberResponseFilterSensitiveLog = (obj: UpdateSubscriberResponse): any => ({
  ...obj,
});
