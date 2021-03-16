import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You are not authorized to use this operation with the given parameters.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ThresholdType {
  ABSOLUTE_VALUE = "ABSOLUTE_VALUE",
  PERCENTAGE = "PERCENTAGE",
}

/**
 * <p>
 * 			The trigger threshold of the action.
 * 		</p>
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

export namespace ActionThreshold {
  export const filterSensitiveLog = (obj: ActionThreshold): any => ({
    ...obj,
  });
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
 * <p>
 * 			The AWS Identity and Access Management (IAM) action definition details.
 * 		</p>
 */
export interface IamActionDefinition {
  /**
   * <p>
   * 			The Amazon Resource Name (ARN) of the policy to be attached.
   * 		</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>
   * 			A list of roles to be attached. There must be at least one role.
   * 		</p>
   */
  Roles?: string[];

  /**
   * <p>
   * 			A list of groups to be attached. There must be at least one group.
   * 		</p>
   */
  Groups?: string[];

  /**
   * <p>
   * 			A list of users to be attached. There must be at least one user.
   * 		</p>
   */
  Users?: string[];
}

export namespace IamActionDefinition {
  export const filterSensitiveLog = (obj: IamActionDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			The service control policies (SCP) action definition details.
 * 		</p>
 */
export interface ScpActionDefinition {
  /**
   * <p>
   * 			The policy ID attached.
   * 		</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>
   * 			A list of target IDs.
   * 		</p>
   */
  TargetIds: string[] | undefined;
}

export namespace ScpActionDefinition {
  export const filterSensitiveLog = (obj: ScpActionDefinition): any => ({
    ...obj,
  });
}

export enum ActionSubType {
  STOP_EC2 = "STOP_EC2_INSTANCES",
  STOP_RDS = "STOP_RDS_INSTANCES",
}

/**
 * <p>
 * 			The AWS Systems Manager (SSM) action definition details.
 * 		</p>
 */
export interface SsmActionDefinition {
  /**
   * <p>
   * 			The action subType.
   * 		</p>
   */
  ActionSubType: ActionSubType | string | undefined;

  /**
   * <p>
   * 			The Region to run the SSM document.
   * 		</p>
   */
  Region: string | undefined;

  /**
   * <p>
   * 			The EC2 and RDS instance IDs.
   * 		</p>
   */
  InstanceIds: string[] | undefined;
}

export namespace SsmActionDefinition {
  export const filterSensitiveLog = (obj: SsmActionDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Specifies all of the type-specific parameters.
 * 		</p>
 */
export interface Definition {
  /**
   * <p>
   * 			The AWS Identity and Access Management (IAM) action definition details.
   * 		</p>
   */
  IamActionDefinition?: IamActionDefinition;

  /**
   * <p>
   * 			The service control policies (SCPs) action definition details.
   * 		</p>
   */
  ScpActionDefinition?: ScpActionDefinition;

  /**
   * <p>
   * 			The AWS Systems Manager (SSM) action definition details.
   * 		</p>
   */
  SsmActionDefinition?: SsmActionDefinition;
}

export namespace Definition {
  export const filterSensitiveLog = (obj: Definition): any => ({
    ...obj,
  });
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
 */
export interface Subscriber {
  /**
   * <p>The type of notification that AWS sends to a subscriber.</p>
   */
  SubscriptionType: SubscriptionType | string | undefined;

  /**
   * <p>The address that AWS sends budget notifications to, either an SNS topic or an email.</p>
   * 		       <p>When you create a subscriber, the value of <code>Address</code> can't contain line breaks.</p>
   */
  Address: string | undefined;
}

export namespace Subscriber {
  export const filterSensitiveLog = (obj: Subscriber): any => ({
    ...obj,
    ...(obj.Address && { Address: SENSITIVE_STRING }),
  });
}

/**
 * <p>
 * 			A budget action resource.
 * 		</p>
 */
export interface Action {
  /**
   * <p>
   * 			A system-generated universally unique identifier (UUID) for the action.
   * 		</p>
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
   * <p>
   * 			The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   * 		</p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>
   * 			The trigger threshold of the action.
   * 		</p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>
   * 			Where you specify all of the type-specific parameters.
   * 		</p>
   */
  Definition: Definition | undefined;

  /**
   * <p>
   * 			The role passed for action execution and reversion. Roles and actions must be in the same account.
   * 		</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>
   * 			This specifies if the action needs manual or automatic approval.
   * 		</p>
   */
  ApprovalModel: ApprovalModel | string | undefined;

  /**
   * <p>
   * 			The status of action.
   * 		</p>
   */
  Status: ActionStatus | string | undefined;

  /**
   * <p> A list of subscribers.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>
 * 			The description of details of the event.
 * 		</p>
 */
export interface ActionHistoryDetails {
  /**
   * <p> A generic string.</p>
   */
  Message: string | undefined;

  /**
   * <p>
   * 			The budget action resource.
   * 		</p>
   */
  Action: Action | undefined;
}

export namespace ActionHistoryDetails {
  export const filterSensitiveLog = (obj: ActionHistoryDetails): any => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
}

export enum EventType {
  CreateAction = "CREATE_ACTION",
  DeleteAction = "DELETE_ACTION",
  ExecuteAction = "EXECUTE_ACTION",
  System = "SYSTEM",
  UpdateAction = "UPDATE_ACTION",
}

/**
 * <p>
 * 			The historical records for a budget action.
 * 		</p>
 */
export interface ActionHistory {
  /**
   * <p> A generic time stamp. In Java, it is transformed to a <code>Date</code> object.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>
   * 			The status of action at the time of the event.
   * 		</p>
   */
  Status: ActionStatus | string | undefined;

  /**
   * <p>
   * 			This distinguishes between whether the events are triggered by the user or generated by the system.
   * 		</p>
   */
  EventType: EventType | string | undefined;

  /**
   * <p>
   * 			The description of details of the event.
   * 		</p>
   */
  ActionHistoryDetails: ActionHistoryDetails | undefined;
}

export namespace ActionHistory {
  export const filterSensitiveLog = (obj: ActionHistory): any => ({
    ...obj,
    ...(obj.ActionHistoryDetails && {
      ActionHistoryDetails: ActionHistoryDetails.filterSensitiveLog(obj.ActionHistoryDetails),
    }),
  });
}

/**
 * <p>The amount of cost or usage that is measured for a budget.</p>
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
 */
export interface Spend {
  /**
   * <p>The cost or usage amount that is associated with a budget forecast, actual spend, or budget threshold.</p>
   */
  Amount: string | undefined;

  /**
   * <p>The unit of measurement that is used for the budget forecast, actual spend, or budget threshold, such as dollars or GB.</p>
   */
  Unit: string | undefined;
}

export namespace Spend {
  export const filterSensitiveLog = (obj: Spend): any => ({
    ...obj,
  });
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
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much you are predicted to spend based on your historical usage profile.</p>
 * 		       <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
 */
export interface CalculatedSpend {
  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you have used.</p>
   */
  ActualSpend: Spend | undefined;

  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you are forecasted to use.</p>
   */
  ForecastedSpend?: Spend;
}

export namespace CalculatedSpend {
  export const filterSensitiveLog = (obj: CalculatedSpend): any => ({
    ...obj,
  });
}

/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p>
 * 		       <p>
 *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
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

export namespace CostTypes {
  export const filterSensitiveLog = (obj: CostTypes): any => ({
    ...obj,
  });
}

/**
 * <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. </p>
 */
export interface TimePeriod {
  /**
   * <p>The start date for a budget. If you created your budget and didn't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p>
   * 		       <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>
   */
  Start?: Date;

  /**
   * <p>The end date for a budget. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API.</p>
   * 		       <p>After the end date, AWS deletes the budget and all associated notifications and subscribers. You can change your end date with the <code>UpdateBudget</code> operation.</p>
   */
  End?: Date;
}

export namespace TimePeriod {
  export const filterSensitiveLog = (obj: TimePeriod): any => ({
    ...obj,
  });
}

export enum TimeUnit {
  ANNUALLY = "ANNUALLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
}

/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p>
 * 		       <p>This is the ARN pattern for a budget: </p>
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
   * <p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.</p>
   * 		       <p>
   *             <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to <code>100</code>, which is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code> with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and <code>UpdateBudget</code> actions. </p>
   */
  BudgetLimit?: Spend;

  /**
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p>
   * 		       <p>
   *             <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports monthly and quarterly <code>TimeUnit</code>. </p>
   * 		       <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>For quarterly budgets, provide 4 quarters of <code>PlannedBudgetLimits</code> value entries in standard calendar quarter increments. This must start from the current quarter and include the next 3 quarters. The <code>key</code> is the start of the quarter, <code>UTC</code> in epoch seconds. </p>
   * 		       <p>If the planned budget expires before 12 months for monthly or 4 quarters for quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining periods.</p>
   * 		       <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p>
   * 		       <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p>
   * 		       <p>
   *             <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with <code>PlannedBudgetLimits</code> will also contain <code>BudgetLimit</code> representing the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This only applies to budgets created with <code>PlannedBudgetLimits</code>. Budgets created without <code>PlannedBudgetLimits</code> will only contain <code>BudgetLimit</code>, and no <code>PlannedBudgetLimits</code>.</p>
   */
  PlannedBudgetLimits?: { [key: string]: Spend };

  /**
   * <p>The cost filters, such as service or tag, that are applied to a budget.</p>
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
   */
  CostFilters?: { [key: string]: string[] };

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
   * <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. The end date must come before <code>06/15/87 00:00 UTC</code>. </p>
   * 		       <p>If you create your budget and don't specify a start date, AWS defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, AWS set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, AWS set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, AWS set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the AWS Billing and Cost Management console and the API. </p>
   * 		       <p>You can change either date with the <code>UpdateBudget</code> operation.</p>
   * 		       <p>After the end date, AWS deletes the budget and all associated notifications and subscribers.</p>
   */
  TimePeriod?: TimePeriod;

  /**
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   */
  CalculatedSpend?: CalculatedSpend;

  /**
   * <p>Whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.</p>
   */
  BudgetType: BudgetType | string | undefined;

  /**
   * <p>The last time that you updated this budget.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Budget {
  export const filterSensitiveLog = (obj: Budget): any => ({
    ...obj,
  });
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
 * <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p>
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
   * <p>Whether the notification is for how much you have spent (<code>ACTUAL</code>) or for how much you're forecasted to spend (<code>FORECASTED</code>).</p>
   */
  NotificationType: NotificationType | string | undefined;

  /**
   * <p>The comparison that is used for this notification.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The threshold that is associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, AWS notifies you when you go over 160 dollars.</p>
   */
  ThresholdType?: ThresholdType | string;

  /**
   * <p>Whether this notification is in alarm. If a budget notification is in the <code>ALARM</code> state, you have passed the set threshold for the budget.</p>
   */
  NotificationState?: NotificationState | string;
}

export namespace Notification {
  export const filterSensitiveLog = (obj: Notification): any => ({
    ...obj,
  });
}

/**
 * <p>A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 */
export interface NotificationWithSubscribers {
  /**
   * <p>The notification that is associated with a budget.</p>
   */
  Notification: Notification | undefined;

  /**
   * <p>A list of subscribers who are subscribed to this notification.</p>
   */
  Subscribers: Subscriber[] | undefined;
}

export namespace NotificationWithSubscribers {
  export const filterSensitiveLog = (obj: NotificationWithSubscribers): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
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
   * <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, AWS creates the notifications and subscribers for you.</p>
   */
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
}

export namespace CreateBudgetRequest {
  export const filterSensitiveLog = (obj: CreateBudgetRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Response of CreateBudget </p>
 */
export interface CreateBudgetResponse {}

export namespace CreateBudgetResponse {
  export const filterSensitiveLog = (obj: CreateBudgetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've exceeded the notification or subscriber limit.</p>
 */
export interface CreationLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CreationLimitExceededException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace CreationLimitExceededException {
  export const filterSensitiveLog = (obj: CreationLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The budget name already exists. Budget names must be unique within an account.</p>
 */
export interface DuplicateRecordException extends __SmithyException, $MetadataBearer {
  name: "DuplicateRecordException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace DuplicateRecordException {
  export const filterSensitiveLog = (obj: DuplicateRecordException): any => ({
    ...obj,
  });
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

export interface CreateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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
   * <p>
   * 			The trigger threshold of the action.
   * 		</p>
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>
   * 			Specifies all of the type-specific parameters.
   * 		</p>
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

export namespace CreateBudgetActionRequest {
  export const filterSensitiveLog = (obj: CreateBudgetActionRequest): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
}

export interface CreateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace CreateBudgetActionResponse {
  export const filterSensitiveLog = (obj: CreateBudgetActionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>We can’t locate the resource that you specified.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
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
   * <p>The name of the budget that you want AWS to notify you about. Budget names must be unique within an account.</p>
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

export namespace CreateNotificationRequest {
  export const filterSensitiveLog = (obj: CreateNotificationRequest): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
}

/**
 * <p> Response of CreateNotification </p>
 */
export interface CreateNotificationResponse {}

export namespace CreateNotificationResponse {
  export const filterSensitiveLog = (obj: CreateNotificationResponse): any => ({
    ...obj,
  });
}

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

export namespace CreateSubscriberRequest {
  export const filterSensitiveLog = (obj: CreateSubscriberRequest): any => ({
    ...obj,
    ...(obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) }),
  });
}

/**
 * <p> Response of CreateSubscriber </p>
 */
export interface CreateSubscriberResponse {}

export namespace CreateSubscriberResponse {
  export const filterSensitiveLog = (obj: CreateSubscriberResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteBudgetRequest {
  export const filterSensitiveLog = (obj: DeleteBudgetRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Response of DeleteBudget </p>
 */
export interface DeleteBudgetResponse {}

export namespace DeleteBudgetResponse {
  export const filterSensitiveLog = (obj: DeleteBudgetResponse): any => ({
    ...obj,
  });
}

export interface DeleteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DeleteBudgetActionRequest {
  export const filterSensitiveLog = (obj: DeleteBudgetActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p>
   * 			A budget action resource.
   * 		</p>
   */
  Action: Action | undefined;
}

export namespace DeleteBudgetActionResponse {
  export const filterSensitiveLog = (obj: DeleteBudgetActionResponse): any => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
}

/**
 * <p> The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource. </p>
 */
export interface ResourceLockedException extends __SmithyException, $MetadataBearer {
  name: "ResourceLockedException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace ResourceLockedException {
  export const filterSensitiveLog = (obj: ResourceLockedException): any => ({
    ...obj,
  });
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

export namespace DeleteNotificationRequest {
  export const filterSensitiveLog = (obj: DeleteNotificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Response of DeleteNotification </p>
 */
export interface DeleteNotificationResponse {}

export namespace DeleteNotificationResponse {
  export const filterSensitiveLog = (obj: DeleteNotificationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteSubscriberRequest {
  export const filterSensitiveLog = (obj: DeleteSubscriberRequest): any => ({
    ...obj,
    ...(obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) }),
  });
}

/**
 * <p> Response of DeleteSubscriber </p>
 */
export interface DeleteSubscriberResponse {}

export namespace DeleteSubscriberResponse {
  export const filterSensitiveLog = (obj: DeleteSubscriberResponse): any => ({
    ...obj,
  });
}

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

export namespace DescribeBudgetRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetRequest): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetResponse): any => ({
    ...obj,
  });
}

export interface DescribeBudgetActionRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DescribeBudgetActionRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetActionRequest): any => ({
    ...obj,
  });
}

export interface DescribeBudgetActionResponse {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DescribeBudgetActionResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetActionResponse): any => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
}

export interface DescribeBudgetActionHistoriesRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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
   * <p>The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. </p>
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

export namespace DescribeBudgetActionHistoriesRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetActionHistoriesRequest): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetActionHistoriesResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetActionHistoriesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination token is invalid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface DescribeBudgetActionsForAccountRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DescribeBudgetActionsForAccountRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetActionsForAccountRequest): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetActionsForAccountResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetActionsForAccountResponse): any => ({
    ...obj,
  });
}

export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DescribeBudgetActionsForBudgetRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetActionsForBudgetRequest): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetActionsForBudgetResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetActionsForBudgetResponse): any => ({
    ...obj,
  });
}

export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace DescribeBudgetPerformanceHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetPerformanceHistoryRequest): any => ({
    ...obj,
  });
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
   * <p>The time period covered by this budget comparison.</p>
   */
  TimePeriod?: TimePeriod;
}

export namespace BudgetedAndActualAmounts {
  export const filterSensitiveLog = (obj: BudgetedAndActualAmounts): any => ({
    ...obj,
  });
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
  CostFilters?: { [key: string]: string[] };

  /**
   * <p>The history of the cost types for a budget during the specified time period.</p>
   */
  CostTypes?: CostTypes;

  /**
   * <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>A list of amounts of cost or usage that you created budgets for, compared to your actual costs or usage.</p>
   */
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[];
}

export namespace BudgetPerformanceHistory {
  export const filterSensitiveLog = (obj: BudgetPerformanceHistory): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetPerformanceHistoryResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetPerformanceHistoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination token expired.</p>
 */
export interface ExpiredNextTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredNextTokenException";
  $fault: "client";
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}

export namespace ExpiredNextTokenException {
  export const filterSensitiveLog = (obj: ExpiredNextTokenException): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetsRequest {
  export const filterSensitiveLog = (obj: DescribeBudgetsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeBudgetsResponse {
  export const filterSensitiveLog = (obj: DescribeBudgetsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeNotificationsForBudgetRequest {
  export const filterSensitiveLog = (obj: DescribeNotificationsForBudgetRequest): any => ({
    ...obj,
  });
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

export namespace DescribeNotificationsForBudgetResponse {
  export const filterSensitiveLog = (obj: DescribeNotificationsForBudgetResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSubscribersForNotificationRequest {
  export const filterSensitiveLog = (obj: DescribeSubscribersForNotificationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeSubscribersForNotificationResponse {
  export const filterSensitiveLog = (obj: DescribeSubscribersForNotificationResponse): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
}

export enum ExecutionType {
  ApproveBudgetAction = "APPROVE_BUDGET_ACTION",
  ResetBudgetAction = "RESET_BUDGET_ACTION",
  RetryBudgetAction = "RETRY_BUDGET_ACTION",
  ReverseBudgetAction = "REVERSE_BUDGET_ACTION",
}

export interface ExecuteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace ExecuteBudgetActionRequest {
  export const filterSensitiveLog = (obj: ExecuteBudgetActionRequest): any => ({
    ...obj,
  });
}

export interface ExecuteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace ExecuteBudgetActionResponse {
  export const filterSensitiveLog = (obj: ExecuteBudgetActionResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBudgetRequest {
  export const filterSensitiveLog = (obj: UpdateBudgetRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Response of UpdateBudget </p>
 */
export interface UpdateBudgetResponse {}

export namespace UpdateBudgetResponse {
  export const filterSensitiveLog = (obj: UpdateBudgetResponse): any => ({
    ...obj,
  });
}

export interface UpdateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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
   * <p>
   * 			The trigger threshold of the action.
   * 		</p>
   */
  ActionThreshold?: ActionThreshold;

  /**
   * <p>
   * 			Specifies all of the type-specific parameters.
   * 		</p>
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

export namespace UpdateBudgetActionRequest {
  export const filterSensitiveLog = (obj: UpdateBudgetActionRequest): any => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
}

export interface UpdateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
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

export namespace UpdateBudgetActionResponse {
  export const filterSensitiveLog = (obj: UpdateBudgetActionResponse): any => ({
    ...obj,
    ...(obj.OldAction && { OldAction: Action.filterSensitiveLog(obj.OldAction) }),
    ...(obj.NewAction && { NewAction: Action.filterSensitiveLog(obj.NewAction) }),
  });
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

export namespace UpdateNotificationRequest {
  export const filterSensitiveLog = (obj: UpdateNotificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Response of UpdateNotification </p>
 */
export interface UpdateNotificationResponse {}

export namespace UpdateNotificationResponse {
  export const filterSensitiveLog = (obj: UpdateNotificationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateSubscriberRequest {
  export const filterSensitiveLog = (obj: UpdateSubscriberRequest): any => ({
    ...obj,
    ...(obj.OldSubscriber && { OldSubscriber: Subscriber.filterSensitiveLog(obj.OldSubscriber) }),
    ...(obj.NewSubscriber && { NewSubscriber: Subscriber.filterSensitiveLog(obj.NewSubscriber) }),
  });
}

/**
 * <p> Response of UpdateSubscriber </p>
 */
export interface UpdateSubscriberResponse {}

export namespace UpdateSubscriberResponse {
  export const filterSensitiveLog = (obj: UpdateSubscriberResponse): any => ({
    ...obj,
  });
}
