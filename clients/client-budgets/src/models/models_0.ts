// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BudgetsServiceException as __BaseException } from "./BudgetsServiceException";

/**
 * @public
 * <p>You are not authorized to use this operation with the given parameters.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ThresholdType = {
  ABSOLUTE_VALUE: "ABSOLUTE_VALUE",
  PERCENTAGE: "PERCENTAGE",
} as const;

/**
 * @public
 */
export type ThresholdType = (typeof ThresholdType)[keyof typeof ThresholdType];

/**
 * @public
 * <p>The trigger threshold of the action. </p>
 */
export interface ActionThreshold {
  /**
   * @public
   * <p> The threshold of a notification.</p>
   */
  ActionThresholdValue: number | undefined;

  /**
   * @public
   * <p> The type of threshold for a notification.</p>
   */
  ActionThresholdType: ThresholdType | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  IAM: "APPLY_IAM_POLICY",
  SCP: "APPLY_SCP_POLICY",
  SSM: "RUN_SSM_DOCUMENTS",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const ApprovalModel = {
  AUTO: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type ApprovalModel = (typeof ApprovalModel)[keyof typeof ApprovalModel];

/**
 * @public
 * <p>The Identity and Access Management (IAM) action definition details. </p>
 */
export interface IamActionDefinition {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy to be attached. </p>
   */
  PolicyArn: string | undefined;

  /**
   * @public
   * <p>A list of roles to be attached. There must be at least one role. </p>
   */
  Roles?: string[];

  /**
   * @public
   * <p>A list of groups to be attached. There must be at least one group. </p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>A list of users to be attached. There must be at least one user. </p>
   */
  Users?: string[];
}

/**
 * @public
 * <p>The service control policies (SCP) action definition details. </p>
 */
export interface ScpActionDefinition {
  /**
   * @public
   * <p>The policy ID attached. </p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>A list of target IDs. </p>
   */
  TargetIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionSubType = {
  STOP_EC2: "STOP_EC2_INSTANCES",
  STOP_RDS: "STOP_RDS_INSTANCES",
} as const;

/**
 * @public
 */
export type ActionSubType = (typeof ActionSubType)[keyof typeof ActionSubType];

/**
 * @public
 * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
 */
export interface SsmActionDefinition {
  /**
   * @public
   * <p>The action subType. </p>
   */
  ActionSubType: ActionSubType | undefined;

  /**
   * @public
   * <p>The Region to run the SSM document. </p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>The EC2 and RDS instance IDs. </p>
   */
  InstanceIds: string[] | undefined;
}

/**
 * @public
 * <p>Specifies all of the type-specific parameters. </p>
 */
export interface Definition {
  /**
   * @public
   * <p>The Identity and Access Management (IAM) action definition details. </p>
   */
  IamActionDefinition?: IamActionDefinition;

  /**
   * @public
   * <p>The service control policies (SCPs) action definition details. </p>
   */
  ScpActionDefinition?: ScpActionDefinition;

  /**
   * @public
   * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
   */
  SsmActionDefinition?: SsmActionDefinition;
}

/**
 * @public
 * @enum
 */
export const NotificationType = {
  ACTUAL: "ACTUAL",
  FORECASTED: "FORECASTED",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  Execution_Failure: "EXECUTION_FAILURE",
  Execution_In_Progress: "EXECUTION_IN_PROGRESS",
  Execution_Success: "EXECUTION_SUCCESS",
  Pending: "PENDING",
  Reset_Failure: "RESET_FAILURE",
  Reset_In_Progress: "RESET_IN_PROGRESS",
  Reverse_Failure: "REVERSE_FAILURE",
  Reverse_In_Progress: "REVERSE_IN_PROGRESS",
  Reverse_Success: "REVERSE_SUCCESS",
  Standby: "STANDBY",
} as const;

/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  EMAIL: "EMAIL",
  SNS: "SNS",
} as const;

/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p>
 *          <p>For example, an email subscriber has the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>A <code>subscriptionType</code> of <code>EMAIL</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>An <code>address</code> of <code>example@example.com</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Subscriber {
  /**
   * @public
   * <p>The type of notification that Amazon Web Services sends to a subscriber.</p>
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * @public
   * <p>The address that Amazon Web Services sends budget notifications to, either an SNS topic or an email.</p>
   *          <p>When you create a subscriber, the value of <code>Address</code> can't contain line breaks.</p>
   */
  Address: string | undefined;
}

/**
 * @public
 * <p>A budget action resource. </p>
 */
export interface Action {
  /**
   * @public
   * <p>A system-generated universally unique identifier (UUID) for the action. </p>
   */
  ActionId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType: NotificationType | undefined;

  /**
   * @public
   * <p>The type of action. This defines the type of tasks that can be carried out by this action.
   * 			This field also determines the format for definition. </p>
   */
  ActionType: ActionType | undefined;

  /**
   * @public
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * @public
   * <p>Where you specify all of the type-specific parameters. </p>
   */
  Definition: Definition | undefined;

  /**
   * @public
   * <p>The role passed for action execution and reversion. Roles and actions must be in the same
   * 			account. </p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>This specifies if the action needs manual or automatic approval. </p>
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * @public
   * <p>The status of the action. </p>
   */
  Status: ActionStatus | undefined;

  /**
   * @public
   * <p> A list of subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * @public
 * <p>The description of the details for the event. </p>
 */
export interface ActionHistoryDetails {
  /**
   * @public
   * <p> A generic string.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The budget action resource. </p>
   */
  Action: Action | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  CreateAction: "CREATE_ACTION",
  DeleteAction: "DELETE_ACTION",
  ExecuteAction: "EXECUTE_ACTION",
  System: "SYSTEM",
  UpdateAction: "UPDATE_ACTION",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>The historical records for a budget action. </p>
 */
export interface ActionHistory {
  /**
   * @public
   * <p> A generic time stamp. In Java, it's transformed to a <code>Date</code> object.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The status of action at the time of the event. </p>
   */
  Status: ActionStatus | undefined;

  /**
   * @public
   * <p>This distinguishes between whether the events are triggered by the user or are generated by
   * 			the system. </p>
   */
  EventType: EventType | undefined;

  /**
   * @public
   * <p>The description of the details for the event. </p>
   */
  ActionHistoryDetails: ActionHistoryDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoAdjustType = {
  FORECAST: "FORECAST",
  HISTORICAL: "HISTORICAL",
} as const;

/**
 * @public
 */
export type AutoAdjustType = (typeof AutoAdjustType)[keyof typeof AutoAdjustType];

/**
 * @public
 * <p>The parameters that define or describe the historical data that your auto-adjusting budget is based on.</p>
 */
export interface HistoricalOptions {
  /**
   * @public
   * <p>The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the <code>TimeUnit</code> granularity of the budget:</p>
   *          <ul>
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
   * @public
   * <p>The integer that describes how many budget periods in your <code>BudgetAdjustmentPeriod</code> are included in the calculation of your current <code>BudgetLimit</code>. If the first budget period in your <code>BudgetAdjustmentPeriod</code> has no cost data, then that budget period isn’t included in the average that determines your budget limit. </p>
   *          <p>For example, if you set <code>BudgetAdjustmentPeriod</code> as <code>4</code> quarters, but your account had no cost data in the first quarter, then only the last three quarters are included in the calculation. In this scenario, <code>LookBackAvailablePeriods</code> returns <code>3</code>. </p>
   *          <p>You can’t set your own <code>LookBackAvailablePeriods</code>. The value is automatically calculated from the <code>BudgetAdjustmentPeriod</code> and your historical cost data.</p>
   */
  LookBackAvailablePeriods?: number;
}

/**
 * @public
 * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
 */
export interface AutoAdjustData {
  /**
   * @public
   * <p>The string that defines whether your budget auto-adjusts based on historical or forecasted data.</p>
   */
  AutoAdjustType: AutoAdjustType | undefined;

  /**
   * @public
   * <p>The parameters that define or describe the historical data that your auto-adjusting budget is based on.</p>
   */
  HistoricalOptions?: HistoricalOptions;

  /**
   * @public
   * <p>The last time that your budget was auto-adjusted.</p>
   */
  LastAutoAdjustTime?: Date;
}

/**
 * @public
 * <p>The amount of cost or usage that's measured for a budget.</p>
 *          <p>
 *             <i>Cost example:</i> A <code>Spend</code> for <code>3 USD</code> of
 * 			costs has the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>Amount</code> of <code>3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>Unit</code> of <code>USD</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <i>Usage example:</i> A <code>Spend</code> for <code>3 GB</code> of S3
 * 			usage has the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>Amount</code> of <code>3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>Unit</code> of <code>GB</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Spend {
  /**
   * @public
   * <p>The cost or usage amount that's associated with a budget forecast, actual spend, or budget
   * 			threshold.</p>
   */
  Amount: string | undefined;

  /**
   * @public
   * <p>The unit of measurement that's used for the budget forecast, actual spend, or budget
   * 			threshold.</p>
   */
  Unit: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BudgetType = {
  Cost: "COST",
  RICoverage: "RI_COVERAGE",
  RIUtilization: "RI_UTILIZATION",
  SPCoverage: "SAVINGS_PLANS_COVERAGE",
  SPUtilization: "SAVINGS_PLANS_UTILIZATION",
  Usage: "USAGE",
} as const;

/**
 * @public
 */
export type BudgetType = (typeof BudgetType)[keyof typeof BudgetType];

/**
 * @public
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks
 * 			how much you've used, cost, usage, RI units, or Savings Plans units and the
 * 				<code>forecastedSpend</code> tracks how much that you're predicted to spend based on
 * 			your historical usage profile.</p>
 *          <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on
 * 			Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your
 * 				<code>forecastedSpend</code> is <code>75 USD</code>.</p>
 */
export interface CalculatedSpend {
  /**
   * @public
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you used.</p>
   */
  ActualSpend: Spend | undefined;

  /**
   * @public
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you're forecasted to
   * 			use.</p>
   */
  ForecastedSpend?: Spend;
}

/**
 * @public
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p>
 *          <p>
 *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>,
 * 				<code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code>
 * 			budgets don't have <code>CostTypes</code>.</p>
 */
export interface CostTypes {
  /**
   * @public
   * <p>Specifies whether a budget includes taxes.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeTax?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes subscriptions.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeSubscription?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget uses a blended rate.</p>
   *          <p>The default value is <code>false</code>.</p>
   */
  UseBlended?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes refunds.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeRefund?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes credits.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeCredit?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes upfront RI costs.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeUpfront?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeRecurring?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes non-RI subscription costs.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeOtherSubscription?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes support subscription fees.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeSupport?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget includes discounts.</p>
   *          <p>The default value is <code>true</code>.</p>
   */
  IncludeDiscount?: boolean;

  /**
   * @public
   * <p>Specifies whether a budget uses the amortized rate.</p>
   *          <p>The default value is <code>false</code>.</p>
   */
  UseAmortized?: boolean;
}

/**
 * @public
 * <p>The period of time that's covered by a budget. The period has a start date and an end date.
 * 			The start date must come before the end date. There are no restrictions on the end date. </p>
 */
export interface TimePeriod {
  /**
   * @public
   * <p>The start date for a budget. If you created your budget and didn't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p>
   *          <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>
   */
  Start?: Date;

  /**
   * @public
   * <p>The end date for a budget. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p>
   *          <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers. You can change your end date with the
   * 				<code>UpdateBudget</code> operation.</p>
   */
  End?: Date;
}

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  ANNUALLY: "ANNUALLY",
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
  QUARTERLY: "QUARTERLY",
} as const;

/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p>
 *          <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p>
 *          <p>
 *             <code>arn:aws:budgets::AccountId:budget/budgetName</code>
 *          </p>
 */
export interface Budget {
  /**
   * @public
   * <p>The name of a budget. The name must be unique within an account. The <code>:</code> and
   * 				<code>\</code> characters, and the "/action/" substring, aren't allowed in
   * 				<code>BudgetName</code>.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or
   * 			Savings Plans coverage that you want to track with your budget.</p>
   *          <p>
   *             <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or
   * 			Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or
   * 			coverage budgets default to <code>100</code>. This is the only valid value for RI or
   * 			Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code>
   * 			with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and
   * 				<code>UpdateBudget</code> actions. </p>
   */
  BudgetLimit?: Spend;

  /**
   * @public
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p>
   *          <p>
   *             <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports both
   * 			monthly and quarterly <code>TimeUnit</code>. </p>
   *          <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p>
   *          <p>For quarterly budgets, provide four quarters of <code>PlannedBudgetLimits</code> value
   * 			entries in standard calendar quarter increments. This must start from the current
   * 			quarter and include the next three quarters. The <code>key</code> is the start of the
   * 			quarter, <code>UTC</code> in epoch seconds. </p>
   *          <p>If the planned budget expires before 12 months for monthly or four quarters for quarterly,
   * 			provide the <code>PlannedBudgetLimits</code> values only for the remaining
   * 			periods.</p>
   *          <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p>
   *          <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p>
   *          <p>
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
   * @public
   * <p>The cost filters, such as <code>Region</code>, <code>Service</code>, <code>member account</code>, <code>Tag</code>, or <code>Cost Category</code>, that are applied to a budget.</p>
   *          <p>Amazon Web Services Budgets supports the following services as a <code>Service</code> filter for RI budgets:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon EC2</p>
   *             </li>
   *             <li>
   *                <p>Amazon Redshift</p>
   *             </li>
   *             <li>
   *                <p>Amazon Relational Database Service</p>
   *             </li>
   *             <li>
   *                <p>Amazon ElastiCache</p>
   *             </li>
   *             <li>
   *                <p>Amazon OpenSearch Service</p>
   *             </li>
   *          </ul>
   */
  CostFilters?: Record<string, string[]>;

  /**
   * @public
   * <p>The types of costs that are included in this <code>COST</code> budget.</p>
   *          <p>
   *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
   */
  CostTypes?: CostTypes;

  /**
   * @public
   * <p>The length of time until a budget resets the actual and forecasted spend.</p>
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * @public
   * <p>The period of time that's covered by a budget. You setthe start date and end date. The start
   * 			date must come before the end date. The end date must come before <code>06/15/87 00:00
   * 				UTC</code>. </p>
   *          <p>If you create your budget and don't specify a start date, Amazon Web Services defaults to the
   * 			start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example,
   * 			if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set
   * 			a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>.
   * 			If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to
   * 				<code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for
   * 			the Billing and Cost Management console and the API. </p>
   *          <p>You can change either date with the <code>UpdateBudget</code> operation.</p>
   *          <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers.</p>
   */
  TimePeriod?: TimePeriod;

  /**
   * @public
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   */
  CalculatedSpend?: CalculatedSpend;

  /**
   * @public
   * <p>Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings
   * 			Plans utilization, or Savings Plans coverage.</p>
   */
  BudgetType: BudgetType | undefined;

  /**
   * @public
   * <p>The last time that you updated this budget.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
   */
  AutoAdjustData?: AutoAdjustData;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const NotificationState = {
  ALARM: "ALARM",
  OK: "OK",
} as const;

/**
 * @public
 */
export type NotificationState = (typeof NotificationState)[keyof typeof NotificationState];

/**
 * @public
 * <p>A notification that's associated with a budget. A budget can have up to ten notifications. </p>
 *          <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 *          <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p>
 *          <ul>
 *             <li>
 *                <p>A notificationType of <code>ACTUAL</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>thresholdType</code> of <code>PERCENTAGE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A notification <code>threshold</code> of <code>80</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Notification {
  /**
   * @public
   * <p>Specifies whether the notification is for how much you have spent (<code>ACTUAL</code>) or
   * 			for how much that you're forecasted to spend (<code>FORECASTED</code>).</p>
   */
  NotificationType: NotificationType | undefined;

  /**
   * @public
   * <p>The comparison that's used for this notification.</p>
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * @public
   * <p>The threshold that's associated with a notification. Thresholds are always a percentage, and
   * 			many customers find value being alerted between 50% - 200% of the budgeted amount. The
   * 			maximum limit for your threshold is 1,000,000% above the budgeted amount.</p>
   */
  Threshold: number | undefined;

  /**
   * @public
   * <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, Amazon Web Services notifies you when you go over 160 dollars.</p>
   */
  ThresholdType?: ThresholdType;

  /**
   * @public
   * <p>Specifies whether this notification is in alarm. If a budget notification is in the
   * 				<code>ALARM</code> state, you passed the set threshold for the budget.</p>
   */
  NotificationState?: NotificationState;
}

/**
 * @public
 * <p>A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 */
export interface NotificationWithSubscribers {
  /**
   * @public
   * <p>The notification that's associated with a budget.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>A list of subscribers who are subscribed to this notification.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * @public
 * <p> Request of CreateBudget </p>
 */
export interface CreateBudgetRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The budget object that you want to create.</p>
   */
  Budget: Budget | undefined;

  /**
   * @public
   * <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, Amazon Web Services creates the notifications and subscribers for you.</p>
   */
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
}

/**
 * @public
 * <p> Response of CreateBudget </p>
 */
export interface CreateBudgetResponse {}

/**
 * @public
 * <p>You've exceeded the notification or subscriber limit.</p>
 */
export class CreationLimitExceededException extends __BaseException {
  readonly name: "CreationLimitExceededException" = "CreationLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The budget name already exists. Budget names must be unique within an account.</p>
 */
export class DuplicateRecordException extends __BaseException {
  readonly name: "DuplicateRecordException" = "DuplicateRecordException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface CreateBudgetActionRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType: NotificationType | undefined;

  /**
   * @public
   * <p>
   *          The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *       </p>
   */
  ActionType: ActionType | undefined;

  /**
   * @public
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * @public
   * <p>Specifies all of the type-specific parameters. </p>
   */
  Definition: Definition | undefined;

  /**
   * @public
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * @public
   * <p> A list of subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * @public
 */
export interface CreateBudgetActionResponse {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

/**
 * @public
 * <p>We can’t locate the resource that you specified.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p> Request of CreateNotification </p>
 */
export interface CreateNotificationRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification that you want to create.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * @public
 * <p> Response of CreateNotification </p>
 */
export interface CreateNotificationResponse {}

/**
 * @public
 * <p> Request of CreateSubscriber </p>
 */
export interface CreateSubscriberRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget that you want to subscribe to. Budget names must be unique within an account.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification that you want to create a subscriber for.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>The subscriber that you want to associate with a budget notification.</p>
   */
  Subscriber: Subscriber | undefined;
}

/**
 * @public
 * <p> Response of CreateSubscriber </p>
 */
export interface CreateSubscriberResponse {}

/**
 * @public
 * <p> Request of DeleteBudget </p>
 */
export interface DeleteBudgetRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget that you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget that you want to delete.</p>
   */
  BudgetName: string | undefined;
}

/**
 * @public
 * <p> Response of DeleteBudget </p>
 */
export interface DeleteBudgetResponse {}

/**
 * @public
 */
export interface DeleteBudgetActionRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetActionResponse {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>A budget action resource. </p>
   */
  Action: Action | undefined;
}

/**
 * @public
 * <p> The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource. </p>
 */
export class ResourceLockedException extends __BaseException {
  readonly name: "ResourceLockedException" = "ResourceLockedException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p> Request of DeleteNotification </p>
 */
export interface DeleteNotificationRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose notification you want to delete.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification that you want to delete.</p>
   */
  Notification: Notification | undefined;
}

/**
 * @public
 * <p> Response of DeleteNotification </p>
 */
export interface DeleteNotificationResponse {}

/**
 * @public
 * <p> Request of DeleteSubscriber </p>
 */
export interface DeleteSubscriberRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose subscriber you want to delete.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification whose subscriber you want to delete.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>The subscriber that you want to delete.</p>
   */
  Subscriber: Subscriber | undefined;
}

/**
 * @public
 * <p> Response of DeleteSubscriber </p>
 */
export interface DeleteSubscriberResponse {}

/**
 * @public
 * <p> Request of DescribeBudget </p>
 */
export interface DescribeBudgetRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget that you want a description of.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget that you want a description of.</p>
   */
  BudgetName: string | undefined;
}

/**
 * @public
 * <p> Response of DescribeBudget </p>
 */
export interface DescribeBudgetResponse {
  /**
   * @public
   * <p>The description of the budget.</p>
   */
  Budget?: Budget;
}

/**
 * @public
 */
export interface DescribeBudgetActionRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionResponse {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A budget action resource.
   *       </p>
   */
  Action: Action | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * @public
   * <p>The period of time that's covered by a budget. The period has a start date and an end date.
   * 			The start date must come before the end date. There are no restrictions on the end date. </p>
   */
  TimePeriod?: TimePeriod;

  /**
   * @public
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesResponse {
  /**
   * @public
   * <p>
   *          The historical record of the budget action resource.
   *       </p>
   */
  ActionHistories: ActionHistory[] | undefined;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The pagination token is invalid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountResponse {
  /**
   * @public
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   */
  Actions: Action[] | undefined;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetResponse {
  /**
   * @public
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   */
  Actions: Action[] | undefined;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> An integer that represents how many budgets a paginated response contains. The default is
   * 			50. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *          The budget name and associated notifications for an account.
 *       </p>
 */
export interface BudgetNotificationsForAccount {
  /**
   * @public
   * <p> A list of notifications.</p>
   */
  Notifications?: Notification[];

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName?: string;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountResponse {
  /**
   * @public
   * <p>
   * 			A list of budget names and associated notifications for an account.
   * 		</p>
   */
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[];

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The pagination token expired.</p>
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException" = "ExpiredNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.</p>
   */
  TimePeriod?: TimePeriod;

  /**
   * @public
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The amount of cost or usage that you created the budget for, compared to your actual costs or usage.</p>
 */
export interface BudgetedAndActualAmounts {
  /**
   * @public
   * <p>The amount of cost or usage that you created the budget for.</p>
   */
  BudgetedAmount?: Spend;

  /**
   * @public
   * <p>Your actual costs or usage for a budget period.</p>
   */
  ActualAmount?: Spend;

  /**
   * @public
   * <p>The time period that's covered by this budget comparison.</p>
   */
  TimePeriod?: TimePeriod;
}

/**
 * @public
 * <p>A history of the state of a budget at the end of the budget's specified time period.</p>
 */
export interface BudgetPerformanceHistory {
  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName?: string;

  /**
   * @public
   * <p> The type of a budget. It must be one of the following types: </p>
   *          <p>
   *             <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>
   */
  BudgetType?: BudgetType;

  /**
   * @public
   * <p>The history of the cost filters for a budget during the specified time period.</p>
   */
  CostFilters?: Record<string, string[]>;

  /**
   * @public
   * <p>The history of the cost types for a budget during the specified time period.</p>
   */
  CostTypes?: CostTypes;

  /**
   * @public
   * <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   */
  TimeUnit?: TimeUnit;

  /**
   * @public
   * <p>A list of amounts of cost or usage that you created budgets for, which are compared to your
   * 			actual costs or usage.</p>
   */
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
}

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryResponse {
  /**
   * @public
   * <p>The history of how often the budget has gone into an <code>ALARM</code> state.</p>
   *          <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>
   */
  BudgetPerformanceHistory?: BudgetPerformanceHistory;

  /**
   * @public
   * <p> A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Request of DescribeBudgets </p>
 */
export interface DescribeBudgetsRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budgets that you want to
   *          describe.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>An integer that represents how many budgets a paginated response contains. The default is
   *          100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Response of DescribeBudgets </p>
 */
export interface DescribeBudgetsResponse {
  /**
   * @public
   * <p>A list of budgets.</p>
   */
  Budgets?: Budget[];

  /**
   * @public
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Request of DescribeNotificationsForBudget </p>
 */
export interface DescribeNotificationsForBudgetRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose notifications you want
   *          descriptions of.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose notifications you want descriptions of.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>An optional integer that represents how many entries a paginated response contains.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Response of GetNotificationsForBudget </p>
 */
export interface DescribeNotificationsForBudgetResponse {
  /**
   * @public
   * <p>A list of notifications that are associated with a budget.</p>
   */
  Notifications?: Notification[];

  /**
   * @public
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Request of DescribeSubscribersForNotification </p>
 */
export interface DescribeSubscribersForNotificationRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose subscribers you want descriptions of.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification whose subscribers you want to list.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>An optional integer that represents how many entries a paginated response contains.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Response of DescribeSubscribersForNotification </p>
 */
export interface DescribeSubscribersForNotificationResponse {
  /**
   * @public
   * <p>A list of subscribers that are associated with a notification.</p>
   */
  Subscribers?: Subscriber[];

  /**
   * @public
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  ApproveBudgetAction: "APPROVE_BUDGET_ACTION",
  ResetBudgetAction: "RESET_BUDGET_ACTION",
  RetryBudgetAction: "RETRY_BUDGET_ACTION",
  ReverseBudgetAction: "REVERSE_BUDGET_ACTION",
} as const;

/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * @public
 */
export interface ExecuteBudgetActionRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * @public
   * <p>
   *          The type of execution.
   *       </p>
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 */
export interface ExecuteBudgetActionResponse {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * @public
   * <p>
   *          The type of execution.
   *       </p>
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 * <p> Request of UpdateBudget </p>
 */
export interface UpdateBudgetRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget that you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The budget that you want to update your budget to.</p>
   */
  NewBudget: Budget | undefined;
}

/**
 * @public
 * <p> Response of UpdateBudget </p>
 */
export interface UpdateBudgetResponse {}

/**
 * @public
 */
export interface UpdateBudgetActionRequest {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   */
  ActionId: string | undefined;

  /**
   * @public
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   */
  NotificationType?: NotificationType;

  /**
   * @public
   * <p>The trigger threshold of the action. </p>
   */
  ActionThreshold?: ActionThreshold;

  /**
   * @public
   * <p>Specifies all of the type-specific parameters. </p>
   */
  Definition?: Definition;

  /**
   * @public
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   */
  ApprovalModel?: ApprovalModel;

  /**
   * @public
   * <p> A list of subscribers.</p>
   */
  Subscribers?: Subscriber[];
}

/**
 * @public
 */
export interface UpdateBudgetActionResponse {
  /**
   * @public
   * <p>The account ID of the user. It's a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p> A string that represents the budget name. The ":" and "\" characters, and the "/action/"
   * 			substring, aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>
   *          The previous action resource information.
   *       </p>
   */
  OldAction: Action | undefined;

  /**
   * @public
   * <p>
   *          The updated action resource information.
   *       </p>
   */
  NewAction: Action | undefined;
}

/**
 * @public
 * <p> Request of UpdateNotification </p>
 */
export interface UpdateNotificationRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose notification you want to update.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The previous notification that is associated with a budget.</p>
   */
  OldNotification: Notification | undefined;

  /**
   * @public
   * <p>The updated notification to be associated with a budget.</p>
   */
  NewNotification: Notification | undefined;
}

/**
 * @public
 * <p> Response of UpdateNotification </p>
 */
export interface UpdateNotificationResponse {}

/**
 * @public
 * <p> Request of UpdateSubscriber </p>
 */
export interface UpdateSubscriberRequest {
  /**
   * @public
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to update.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The name of the budget whose subscriber you want to update.</p>
   */
  BudgetName: string | undefined;

  /**
   * @public
   * <p>The notification whose subscriber you want to update.</p>
   */
  Notification: Notification | undefined;

  /**
   * @public
   * <p>The previous subscriber that is associated with a budget notification.</p>
   */
  OldSubscriber: Subscriber | undefined;

  /**
   * @public
   * <p>The updated subscriber that is associated with a budget notification.</p>
   */
  NewSubscriber: Subscriber | undefined;
}

/**
 * @public
 * <p> Response of UpdateSubscriber </p>
 */
export interface UpdateSubscriberResponse {}

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
export const CreateBudgetActionRequestFilterSensitiveLog = (obj: CreateBudgetActionRequest): any => ({
  ...obj,
  ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => SubscriberFilterSensitiveLog(item)) }),
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
export const CreateSubscriberRequestFilterSensitiveLog = (obj: CreateSubscriberRequest): any => ({
  ...obj,
  ...(obj.Subscriber && { Subscriber: SubscriberFilterSensitiveLog(obj.Subscriber) }),
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
export const DeleteSubscriberRequestFilterSensitiveLog = (obj: DeleteSubscriberRequest): any => ({
  ...obj,
  ...(obj.Subscriber && { Subscriber: SubscriberFilterSensitiveLog(obj.Subscriber) }),
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
export const DescribeBudgetActionHistoriesResponseFilterSensitiveLog = (
  obj: DescribeBudgetActionHistoriesResponse
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
export const DescribeBudgetActionsForBudgetResponseFilterSensitiveLog = (
  obj: DescribeBudgetActionsForBudgetResponse
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
export const UpdateSubscriberRequestFilterSensitiveLog = (obj: UpdateSubscriberRequest): any => ({
  ...obj,
  ...(obj.OldSubscriber && { OldSubscriber: SubscriberFilterSensitiveLog(obj.OldSubscriber) }),
  ...(obj.NewSubscriber && { NewSubscriber: SubscriberFilterSensitiveLog(obj.NewSubscriber) }),
});
