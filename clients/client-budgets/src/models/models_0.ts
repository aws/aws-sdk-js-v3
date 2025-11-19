// smithy-typescript generated code
import {
  ActionStatus,
  ActionSubType,
  ActionType,
  ApprovalModel,
  AutoAdjustType,
  BudgetType,
  ComparisonOperator,
  Dimension,
  EventType,
  ExecutionType,
  HealthStatusReason,
  HealthStatusValue,
  MatchOption,
  Metric,
  NotificationState,
  NotificationType,
  SubscriptionType,
  ThresholdType,
  TimeUnit,
} from "./enums";

/**
 * <p>The trigger threshold of the action. </p>
 * @public
 */
export interface ActionThreshold {
  /**
   * <p> The threshold of a notification.</p>
   * @public
   */
  ActionThresholdValue: number | undefined;

  /**
   * <p> The type of threshold for a notification.</p>
   * @public
   */
  ActionThresholdType: ThresholdType | undefined;
}

/**
 * <p>The Identity and Access Management (IAM) action definition details. </p>
 * @public
 */
export interface IamActionDefinition {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy to be attached. </p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>A list of roles to be attached. There must be at least one role. </p>
   * @public
   */
  Roles?: string[] | undefined;

  /**
   * <p>A list of groups to be attached. There must be at least one group. </p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>A list of users to be attached. There must be at least one user. </p>
   * @public
   */
  Users?: string[] | undefined;
}

/**
 * <p>The service control policies (SCP) action definition details. </p>
 * @public
 */
export interface ScpActionDefinition {
  /**
   * <p>The policy ID attached. </p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>A list of target IDs. </p>
   * @public
   */
  TargetIds: string[] | undefined;
}

/**
 * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
 * @public
 */
export interface SsmActionDefinition {
  /**
   * <p>The action subType. </p>
   * @public
   */
  ActionSubType: ActionSubType | undefined;

  /**
   * <p>The Region to run the SSM document. </p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The EC2 and RDS instance IDs. </p>
   * @public
   */
  InstanceIds: string[] | undefined;
}

/**
 * <p>Specifies all of the type-specific parameters. </p>
 * @public
 */
export interface Definition {
  /**
   * <p>The Identity and Access Management (IAM) action definition details. </p>
   * @public
   */
  IamActionDefinition?: IamActionDefinition | undefined;

  /**
   * <p>The service control policies (SCPs) action definition details. </p>
   * @public
   */
  ScpActionDefinition?: ScpActionDefinition | undefined;

  /**
   * <p>The Amazon Web Services Systems Manager (SSM) action definition details. </p>
   * @public
   */
  SsmActionDefinition?: SsmActionDefinition | undefined;
}

/**
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription
 * 			type and either an Amazon SNS topic or an email address.</p>
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
 * @public
 */
export interface Subscriber {
  /**
   * <p>The type of notification that Amazon Web Services sends to a subscriber.</p>
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * <p>The address that Amazon Web Services sends budget notifications to, either an SNS topic
   * 			or an email.</p>
   *          <p>When you create a subscriber, the value of <code>Address</code> can't contain line
   * 			breaks.</p>
   * @public
   */
  Address: string | undefined;
}

/**
 * <p>A budget action resource. </p>
 * @public
 */
export interface Action {
  /**
   * <p>A system-generated universally unique identifier (UUID) for the action. </p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * <p>The type of action. This defines the type of tasks that can be carried out by this
   * 			action. This field also determines the format for definition. </p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The trigger threshold of the action. </p>
   * @public
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>Where you specify all of the type-specific parameters. </p>
   * @public
   */
  Definition: Definition | undefined;

  /**
   * <p>The role passed for action execution and reversion. Roles and actions must be in the
   * 			same account. </p>
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>This specifies if the action needs manual or automatic approval. </p>
   * @public
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * <p>The status of the action. </p>
   * @public
   */
  Status: ActionStatus | undefined;

  /**
   * <p> A list of subscribers.</p>
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p>The description of the details for the event. </p>
 * @public
 */
export interface ActionHistoryDetails {
  /**
   * <p> A generic string.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The budget action resource. </p>
   * @public
   */
  Action: Action | undefined;
}

/**
 * <p>The historical records for a budget action. </p>
 * @public
 */
export interface ActionHistory {
  /**
   * <p> A generic time stamp. In Java, it's transformed to a <code>Date</code> object.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The status of action at the time of the event. </p>
   * @public
   */
  Status: ActionStatus | undefined;

  /**
   * <p>This distinguishes between whether the events are triggered by the user or are
   * 			generated by the system. </p>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>The description of the details for the event. </p>
   * @public
   */
  ActionHistoryDetails: ActionHistoryDetails | undefined;
}

/**
 * <p>The parameters that define or describe the historical data that your auto-adjusting
 * 			budget is based on.</p>
 * @public
 */
export interface HistoricalOptions {
  /**
   * <p>The number of budget periods included in the moving-average calculation that
   * 			determines your auto-adjusted budget amount. The maximum value depends on the
   * 				<code>TimeUnit</code> granularity of the budget:</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>DAILY</code> granularity, the maximum value is
   * 					<code>60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>MONTHLY</code> granularity, the maximum value is
   * 					<code>12</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>QUARTERLY</code> granularity, the maximum value is
   * 						<code>4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>ANNUALLY</code> granularity, the maximum value is
   * 					<code>1</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BudgetAdjustmentPeriod: number | undefined;

  /**
   * <p>The integer that describes how many budget periods in your
   * 				<code>BudgetAdjustmentPeriod</code> are included in the calculation of your current
   * 				<code>BudgetLimit</code>. If the first budget period in your
   * 				<code>BudgetAdjustmentPeriod</code> has no cost data, then that budget period isn’t
   * 			included in the average that determines your budget limit. </p>
   *          <p>For example, if you set <code>BudgetAdjustmentPeriod</code> as <code>4</code>
   * 			quarters, but your account had no cost data in the first quarter, then only the last
   * 			three quarters are included in the calculation. In this scenario,
   * 				<code>LookBackAvailablePeriods</code> returns <code>3</code>. </p>
   *          <p>You can’t set your own <code>LookBackAvailablePeriods</code>. The value is
   * 			automatically calculated from the <code>BudgetAdjustmentPeriod</code> and your
   * 			historical cost data.</p>
   * @public
   */
  LookBackAvailablePeriods?: number | undefined;
}

/**
 * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
 * @public
 */
export interface AutoAdjustData {
  /**
   * <p>The string that defines whether your budget auto-adjusts based on historical or
   * 			forecasted data.</p>
   * @public
   */
  AutoAdjustType: AutoAdjustType | undefined;

  /**
   * <p>The parameters that define or describe the historical data that your auto-adjusting
   * 			budget is based on.</p>
   * @public
   */
  HistoricalOptions?: HistoricalOptions | undefined;

  /**
   * <p>The last time that your budget was auto-adjusted.</p>
   * @public
   */
  LastAutoAdjustTime?: Date | undefined;
}

/**
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
 * @public
 */
export interface Spend {
  /**
   * <p>The cost or usage amount that's associated with a budget forecast, actual spend, or
   * 			budget threshold.</p>
   * @public
   */
  Amount: string | undefined;

  /**
   * <p>The unit of measurement that's used for the budget forecast, actual spend, or budget
   * 			threshold.</p>
   * @public
   */
  Unit: string | undefined;
}

/**
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code>
 * 			tracks how much you've used, cost, usage, RI units, or Savings Plans units and the
 * 				<code>forecastedSpend</code> tracks how much that you're predicted to spend based on
 * 			your historical usage profile.</p>
 *          <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars
 * 			on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your
 * 				<code>forecastedSpend</code> is <code>75 USD</code>.</p>
 * @public
 */
export interface CalculatedSpend {
  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you used.</p>
   * @public
   */
  ActualSpend: Spend | undefined;

  /**
   * <p>The amount of cost, usage, RI units, or Savings Plans units that you're forecasted to
   * 			use.</p>
   * @public
   */
  ForecastedSpend?: Spend | undefined;
}

/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and
 * 			subscriptions.</p>
 *          <p>
 *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>,
 * 				<code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code>
 * 			budgets don't have <code>CostTypes</code>.</p>
 * @public
 */
export interface CostTypes {
  /**
   * <p>Specifies whether a budget includes taxes.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeTax?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes subscriptions.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeSubscription?: boolean | undefined;

  /**
   * <p>Specifies whether a budget uses a blended rate.</p>
   *          <p>The default value is <code>false</code>.</p>
   * @public
   */
  UseBlended?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes refunds.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeRefund?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes credits.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeCredit?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes upfront RI costs.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeUpfront?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeRecurring?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes non-RI subscription costs.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeOtherSubscription?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes support subscription fees.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeSupport?: boolean | undefined;

  /**
   * <p>Specifies whether a budget includes discounts.</p>
   *          <p>The default value is <code>true</code>.</p>
   * @public
   */
  IncludeDiscount?: boolean | undefined;

  /**
   * <p>Specifies whether a budget uses the amortized rate.</p>
   *          <p>The default value is <code>false</code>.</p>
   * @public
   */
  UseAmortized?: boolean | undefined;
}

/**
 * <p>The cost category values used for filtering the costs.</p>
 * @public
 */
export interface CostCategoryValues {
  /**
   * <p>The unique name of the cost category.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The specific value of the cost category.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. </p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>Contains the specifications for the filters to use for your request.</p>
 * @public
 */
export interface ExpressionDimensionValues {
  /**
   * <p>The name of the dimension that you want to filter on.</p>
   * @public
   */
  Key: Dimension | undefined;

  /**
   * <p>The metadata values you can specify to filter upon, so that the results all match at least
   * 			one of the specified values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. You can specify only one of these
   * 			values in the array.</p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>The values that are available for a tag.</p>
 * @public
 */
export interface TagValues {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The specific value of the tag.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results.</p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>Provides information about the current operational state of a billing view resource,
 * 			including its ability to access and update based on its associated billing view.</p>
 * @public
 */
export interface HealthStatus {
  /**
   * <p>The current status of the billing view resource.</p>
   * @public
   */
  Status?: HealthStatusValue | undefined;

  /**
   * <p>The reason for the current status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BILLING_VIEW_NO_ACCESS</code>: The billing view resource does not grant
   * 						<code>billing:GetBillingViewData</code> permission to this account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BILLING_VIEW_UNHEALTHY</code>:  The billing view associated with the
   * 					budget is unhealthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILTER_INVALID</code>: The filter contains reference to an account you
   * 					do not have access to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_YEAR_HISTORICAL_DATA_DISABLED</code>: The budget is not being updated. Enable multi-year historical data in your Cost Management preferences.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusReason?: HealthStatusReason | undefined;

  /**
   * <p> A generic time stamp. In Java, it's transformed to a <code>Date</code> object.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>The period of time that's covered by a budget. The period has a start date and an end
 * 			date. The start date must come before the end date. There are no restrictions on the end
 * 			date. </p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>The start date for a budget. If you created your budget and didn't specify a start
   * 			date, Amazon Web Services defaults to the start of your chosen time period (DAILY,
   * 			MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For example, if you created your budget on January 24,
   * 			2018, chose <code>DAILY</code>, and didn't set a start date, Amazon Web Services set your
   * 			start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>,
   * 				Amazon Web Services set your start date to <code>01/01/18 00:00 UTC</code>. The
   * 			defaults are the same for the Billing and Cost Management console and the API.</p>
   *          <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The end date for a budget. If you didn't specify an end date, Amazon Web Services set
   * 			your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the
   * 				Billing and Cost Management console and the API.</p>
   *          <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers. You can change your end date with the
   * 				<code>UpdateBudget</code> operation.</p>
   * @public
   */
  End?: Date | undefined;
}

/**
 * <p>A notification that's associated with a budget. A budget can have up to ten
 * 			notifications. </p>
 *          <p>Each notification must have at least one subscriber. A notification can have one SNS
 * 			subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 *          <p>For example, if you have a budget for 200 dollars and you want to be notified when you
 * 			go over 160 dollars, create a notification with the following parameters:</p>
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
 * @public
 */
export interface Notification {
  /**
   * <p>Specifies whether the notification is for how much you have spent
   * 			(<code>ACTUAL</code>) or for how much that you're forecasted to spend
   * 				(<code>FORECASTED</code>).</p>
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * <p>The comparison that's used for this notification.</p>
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * <p>The threshold that's associated with a notification. Thresholds are always a
   * 			percentage, and many customers find value being alerted between 50% - 200% of the
   * 			budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted
   * 			amount.</p>
   * @public
   */
  Threshold: number | undefined;

  /**
   * <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds,
   * 				Amazon Web Services notifies you when you go over or are forecasted to go over your
   * 			total cost threshold. For
   * 				<code>PERCENTAGE</code> thresholds, Amazon Web Services notifies you when you go over
   * 			or are forecasted to go over a certain percentage of your forecasted spend. For example,
   * 			if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of
   * 			80%, Amazon Web Services notifies you when you go over 160 dollars.</p>
   * @public
   */
  ThresholdType?: ThresholdType | undefined;

  /**
   * <p>Specifies whether this notification is in alarm. If a budget notification is in the
   * 				<code>ALARM</code> state, you passed the set threshold for the budget.</p>
   * @public
   */
  NotificationState?: NotificationState | undefined;
}

/**
 * <p>A notification with subscribers. A notification can have one SNS subscriber and up to
 * 			10 email subscribers, for a total of 11 subscribers.</p>
 * @public
 */
export interface NotificationWithSubscribers {
  /**
   * <p>The notification that's associated with a budget.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>A list of subscribers who are subscribed to this notification.</p>
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p>The tag structure that contains a tag key and value.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key that's associated with the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value that's associated with the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p> Response of CreateBudget </p>
 * @public
 */
export interface CreateBudgetResponse {}

/**
 * @public
 */
export interface CreateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * <p>
   *          The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *       </p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The trigger threshold of the action. </p>
   * @public
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * <p>Specifies all of the type-specific parameters. </p>
   * @public
   */
  Definition: Definition | undefined;

  /**
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   * @public
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * <p> A list of subscribers.</p>
   * @public
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * <p>An optional list of tags to associate with the specified budget action. Each tag consists of a
   *          key and a value, and each key must be unique for the resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;
}

/**
 * <p> Request of CreateNotification </p>
 * @public
 */
export interface CreateNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to create.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.</p>
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * <p> Response of CreateNotification </p>
 * @public
 */
export interface CreateNotificationResponse {}

/**
 * <p> Request of CreateSubscriber </p>
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want to subscribe to. Budget names must be unique within an account.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to create a subscriber for.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>The subscriber that you want to associate with a budget notification.</p>
   * @public
   */
  Subscriber: Subscriber | undefined;
}

/**
 * <p> Response of CreateSubscriber </p>
 * @public
 */
export interface CreateSubscriberResponse {}

/**
 * <p> Request of DeleteBudget </p>
 * @public
 */
export interface DeleteBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to delete.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want to delete.</p>
   * @public
   */
  BudgetName: string | undefined;
}

/**
 * <p> Response of DeleteBudget </p>
 * @public
 */
export interface DeleteBudgetResponse {}

/**
 * @public
 */
export interface DeleteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>A budget action resource. </p>
   * @public
   */
  Action: Action | undefined;
}

/**
 * <p> Request of DeleteNotification </p>
 * @public
 */
export interface DeleteNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to delete.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notification you want to delete.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification that you want to delete.</p>
   * @public
   */
  Notification: Notification | undefined;
}

/**
 * <p> Response of DeleteNotification </p>
 * @public
 */
export interface DeleteNotificationResponse {}

/**
 * <p> Request of DeleteSubscriber </p>
 * @public
 */
export interface DeleteSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscriber you want to delete.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscriber you want to delete.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>The subscriber that you want to delete.</p>
   * @public
   */
  Subscriber: Subscriber | undefined;
}

/**
 * <p> Response of DeleteSubscriber </p>
 * @public
 */
export interface DeleteSubscriberResponse {}

/**
 * <p> Request of DescribeBudget </p>
 * @public
 */
export interface DescribeBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want a description of.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget that you want a description of.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>Specifies whether the response includes the filter expression associated with the
   *          budget. By showing the filter expression, you can see detailed filtering logic applied to
   *          the budget, such as Amazon Web Services services or tags that are being tracked.</p>
   * @public
   */
  ShowFilterExpression?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A budget action resource.
   *       </p>
   * @public
   */
  Action: Action | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p>The period of time that's covered by a budget. The period has a start date and an end
   * 			date. The start date must come before the end date. There are no restrictions on the end
   * 			date. </p>
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The
   * 			maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesResponse {
  /**
   * <p>
   *          The historical record of the budget action resource.
   *       </p>
   * @public
   */
  ActionHistories: ActionHistory[] | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The
   * 			maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountResponse {
  /**
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The
   * 			maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetResponse {
  /**
   * <p>
   *          A list of the budget action resources information.
   *       </p>
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> An integer that represents how many budgets a paginated response contains. The
   * 			default is 50. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *          The budget name and associated notifications for an account.
 *       </p>
 * @public
 */
export interface BudgetNotificationsForAccount {
  /**
   * <p> A list of notifications.</p>
   * @public
   */
  Notifications?: Notification[] | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountResponse {
  /**
   * <p> A list of budget names and associated notifications for an account. </p>
   * @public
   */
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[] | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.</p>
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The
   * 			maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The amount of cost or usage that you created the budget for, compared to your actual
 * 			costs or usage.</p>
 * @public
 */
export interface BudgetedAndActualAmounts {
  /**
   * <p>The amount of cost or usage that you created the budget for.</p>
   * @public
   */
  BudgetedAmount?: Spend | undefined;

  /**
   * <p>Your actual costs or usage for a budget period.</p>
   * @public
   */
  ActualAmount?: Spend | undefined;

  /**
   * <p>The time period that's covered by this budget comparison.</p>
   * @public
   */
  TimePeriod?: TimePeriod | undefined;
}

/**
 * <p>A history of the state of a budget at the end of the budget's specified time
 * 			period.</p>
 * @public
 */
export interface BudgetPerformanceHistory {
  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName?: string | undefined;

  /**
   * <p> The type of a budget. It must be one of the following types: </p>
   *          <p>
   *             <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>,
   * 				<code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or
   * 				<code>SAVINGS_PLANS_COVERAGE</code>.</p>
   * @public
   */
  BudgetType?: BudgetType | undefined;

  /**
   * <p>The history of the cost filters for a budget during the specified time period.</p>
   * @public
   */
  CostFilters?: Record<string, string[]> | undefined;

  /**
   * <p>The history of the cost types for a budget during the specified time period.</p>
   * @public
   */
  CostTypes?: CostTypes | undefined;

  /**
   * <p> The time unit of the budget, such as MONTHLY or QUARTERLY.</p>
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is
   * 			used to specify which particular billing view you want to interact with or retrieve
   * 			information from when making API calls related to Amazon Web Services Billing and Cost
   * 			Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   * 			API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>A list of amounts of cost or usage that you created budgets for, which are compared to
   * 			your actual costs or usage.</p>
   * @public
   */
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[] | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryResponse {
  /**
   * <p>The history of how often the budget has gone into an <code>ALARM</code> state.</p>
   *          <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>
   * @public
   */
  BudgetPerformanceHistory?: BudgetPerformanceHistory | undefined;

  /**
   * <p> A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Request of DescribeBudgets </p>
 * @public
 */
export interface DescribeBudgetsRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budgets that you want to
   *          describe.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>An integer that represents how many budgets a paginated response contains. The default is
   *          100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies whether the response includes the filter expression associated with the
   *          budgets. By showing the filter expression, you can see detailed filtering logic applied to
   *          the budgets, such as Amazon Web Services services or tags that are being tracked.</p>
   * @public
   */
  ShowFilterExpression?: boolean | undefined;
}

/**
 * <p> Request of DescribeNotificationsForBudget </p>
 * @public
 */
export interface DescribeNotificationsForBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notifications you want
   *          descriptions of.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notifications you want descriptions of.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Response of GetNotificationsForBudget </p>
 * @public
 */
export interface DescribeNotificationsForBudgetResponse {
  /**
   * <p>A list of notifications that are associated with a budget.</p>
   * @public
   */
  Notifications?: Notification[] | undefined;

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Request of DescribeSubscribersForNotification </p>
 * @public
 */
export interface DescribeSubscribersForNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscribers you want descriptions of.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscribers you want to list.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Response of DescribeSubscribersForNotification </p>
 * @public
 */
export interface DescribeSubscribersForNotificationResponse {
  /**
   * <p>A list of subscribers that are associated with a notification.</p>
   * @public
   */
  Subscribers?: Subscriber[] | undefined;

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p>
   *          The type of execution.
   *       </p>
   * @public
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 */
export interface ExecuteBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p>
   *          The type of execution.
   *       </p>
   * @public
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  ResourceTags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key that's associated with the tag.</p>
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p> Response of UpdateBudget </p>
 * @public
 */
export interface UpdateBudgetResponse {}

/**
 * @public
 */
export interface UpdateBudgetActionRequest {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          A system-generated universally unique identifier (UUID) for the action.
   *       </p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p> The type of a notification. It must be ACTUAL or FORECASTED.</p>
   * @public
   */
  NotificationType?: NotificationType | undefined;

  /**
   * <p>The trigger threshold of the action. </p>
   * @public
   */
  ActionThreshold?: ActionThreshold | undefined;

  /**
   * <p>Specifies all of the type-specific parameters. </p>
   * @public
   */
  Definition?: Definition | undefined;

  /**
   * <p>
   *          The role passed for action execution and reversion. Roles and actions must be in the same account.
   *       </p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>
   *          This specifies if the action needs manual or automatic approval.
   *       </p>
   * @public
   */
  ApprovalModel?: ApprovalModel | undefined;

  /**
   * <p> A list of subscribers.</p>
   * @public
   */
  Subscribers?: Subscriber[] | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetActionResponse {
  /**
   * <p>The account ID of the user. It's a 12-digit number.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters, and the
   * 			"/action/" substring, aren't allowed.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>
   *          The previous action resource information.
   *       </p>
   * @public
   */
  OldAction: Action | undefined;

  /**
   * <p>
   *          The updated action resource information.
   *       </p>
   * @public
   */
  NewAction: Action | undefined;
}

/**
 * <p> Request of UpdateNotification </p>
 * @public
 */
export interface UpdateNotificationRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose notification you want to update.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The previous notification that is associated with a budget.</p>
   * @public
   */
  OldNotification: Notification | undefined;

  /**
   * <p>The updated notification to be associated with a budget.</p>
   * @public
   */
  NewNotification: Notification | undefined;
}

/**
 * <p> Response of UpdateNotification </p>
 * @public
 */
export interface UpdateNotificationResponse {}

/**
 * <p> Request of UpdateSubscriber </p>
 * @public
 */
export interface UpdateSubscriberRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose subscriber you want to update.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The name of the budget whose subscriber you want to update.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The notification whose subscriber you want to update.</p>
   * @public
   */
  Notification: Notification | undefined;

  /**
   * <p>The previous subscriber that is associated with a budget notification.</p>
   * @public
   */
  OldSubscriber: Subscriber | undefined;

  /**
   * <p>The updated subscriber that is associated with a budget notification.</p>
   * @public
   */
  NewSubscriber: Subscriber | undefined;
}

/**
 * <p> Response of UpdateSubscriber </p>
 * @public
 */
export interface UpdateSubscriberResponse {}

/**
 * <p>Use Expression to filter in various Budgets APIs.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>Return results that match either Dimension object.</p>
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * <p>Return results that match both Dimension objects.</p>
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * <p>Return results that don't match a Dimension object.</p>
   * @public
   */
  Not?: Expression | undefined;

  /**
   * <p>The specific Dimension to use for Expression.</p>
   * @public
   */
  Dimensions?: ExpressionDimensionValues | undefined;

  /**
   * <p>The specific Tag to use for Expression.</p>
   * @public
   */
  Tags?: TagValues | undefined;

  /**
   * <p>The filter that's based on CostCategoryValues.</p>
   * @public
   */
  CostCategories?: CostCategoryValues | undefined;
}

/**
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists
 * 			of the detailed metadata and data file information, and the current status of the
 * 				<code>budget</code> object.</p>
 *          <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p>
 *          <p>
 *             <code>arn:aws:budgets::AccountId:budget/budgetName</code>
 *          </p>
 * @public
 */
export interface Budget {
  /**
   * <p>The name of a budget. The name must be unique within an account. The <code>:</code>
   * 			and <code>\</code> characters, and the "/action/" substring, aren't allowed in
   * 				<code>BudgetName</code>.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans
   * 			utilization, or Savings Plans coverage that you want to track with your budget.</p>
   *          <p>
   *             <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or
   * 			Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or
   * 			coverage budgets default to <code>100</code>. This is the only valid value for RI or
   * 			Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code>
   * 			with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and
   * 				<code>UpdateBudget</code> actions. </p>
   * @public
   */
  BudgetLimit?: Spend | undefined;

  /**
   * <p>A map containing multiple <code>BudgetLimit</code>, including current or future
   * 			limits.</p>
   *          <p>
   *             <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports
   * 			both monthly and quarterly <code>TimeUnit</code>. </p>
   *          <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values.
   * 			This must start from the current month and include the next 11 months. The
   * 				<code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p>
   *          <p>For quarterly budgets, provide four quarters of <code>PlannedBudgetLimits</code> value
   * 			entries in standard calendar quarter increments. This must start from the current
   * 			quarter and include the next three quarters. The <code>key</code> is the start of the
   * 			quarter, <code>UTC</code> in epoch seconds. </p>
   *          <p>If the planned budget expires before 12 months for monthly or four quarters for
   * 			quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining
   * 			periods.</p>
   *          <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code>
   * 			values from the start date of the budget. </p>
   *          <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code>
   * 			are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At
   * 			that point, the planned budget provides the same experience as a fixed budget. </p>
   *          <p>
   *             <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with
   * 				<code>PlannedBudgetLimits</code> also contain <code>BudgetLimit</code> representing
   * 			the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This
   * 			only applies to budgets that are created with <code>PlannedBudgetLimits</code>. Budgets
   * 			that are created without <code>PlannedBudgetLimits</code> only contain
   * 				<code>BudgetLimit</code>. They don't contain
   * 			<code>PlannedBudgetLimits</code>.</p>
   * @public
   */
  PlannedBudgetLimits?: Record<string, Spend> | undefined;

  /**
   * <p>The cost filters, such as <code>Region</code>, <code>Service</code>,
   * 				<code>LinkedAccount</code>, <code>Tag</code>, or <code>CostCategory</code>, that are
   * 			applied to a budget.</p>
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
   *
   * @deprecated CostFilters lack support for newer dimensions and filtering options. Please consider using the new 'FilterExpression' field.
   * @public
   */
  CostFilters?: Record<string, string[]> | undefined;

  /**
   * <p>The types of costs that are included in this <code>COST</code> budget.</p>
   *          <p>
   *             <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>,
   * 				<code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code>
   * 			budgets do not have <code>CostTypes</code>.</p>
   *
   * @deprecated CostTypes lack support for newer record type dimensions and filtering options. Please consider using the new 'Metrics' field.
   * @public
   */
  CostTypes?: CostTypes | undefined;

  /**
   * <p>The length of time until a budget resets the actual and forecasted spend.</p>
   * @public
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * <p>The period of time that's covered by a budget. You set the start date and end date. The
   * 			start date must come before the end date. The end date must come before <code>06/15/87
   * 				00:00 UTC</code>. </p>
   *          <p>If you create your budget and don't specify a start date, Amazon Web Services defaults
   * 			to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For
   * 			example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and
   * 			didn't set a start date, Amazon Web Services set your start date to <code>01/24/18 00:00
   * 				UTC</code>. If you chose <code>MONTHLY</code>, Amazon Web Services set your start
   * 			date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are
   * 			the same for the Billing and Cost Management console and the API. </p>
   *          <p>You can change either date with the <code>UpdateBudget</code> operation.</p>
   *          <p>After the end date, Amazon Web Services deletes the budget and all the associated
   * 			notifications and subscribers.</p>
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * <p>The actual and forecasted cost or usage that the budget tracks.</p>
   * @public
   */
  CalculatedSpend?: CalculatedSpend | undefined;

  /**
   * <p>Specifies whether this budget tracks costs, usage, RI utilization, RI coverage,
   * 			Savings Plans utilization, or Savings Plans coverage.</p>
   * @public
   */
  BudgetType: BudgetType | undefined;

  /**
   * <p>The last time that you updated this budget.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The parameters that determine the budget amount for an auto-adjusting budget.</p>
   * @public
   */
  AutoAdjustData?: AutoAdjustData | undefined;

  /**
   * <p>The filtering dimensions for the budget and their corresponding values.</p>
   * @public
   */
  FilterExpression?: Expression | undefined;

  /**
   * <p>The definition for how the budget data is aggregated.</p>
   * @public
   */
  Metrics?: Metric[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is
   * 			used to specify which particular billing view you want to interact with or retrieve
   * 			information from when making API calls related to Amazon Web Services Billing and Cost
   * 			Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   * 			API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The current operational state of a Billing View derived resource.</p>
   * @public
   */
  HealthStatus?: HealthStatus | undefined;
}

/**
 * <p> Request of CreateBudget </p>
 * @public
 */
export interface CreateBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The budget object that you want to create.</p>
   * @public
   */
  Budget: Budget | undefined;

  /**
   * <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, Amazon Web Services creates the notifications and subscribers for you.</p>
   * @public
   */
  NotificationsWithSubscribers?: NotificationWithSubscribers[] | undefined;

  /**
   * <p>An optional list of tags to associate with the specified budget. Each tag consists of a
   *          key and a value, and each key must be unique for the resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * <p> Response of DescribeBudget </p>
 * @public
 */
export interface DescribeBudgetResponse {
  /**
   * <p>The description of the budget.</p>
   * @public
   */
  Budget?: Budget | undefined;
}

/**
 * <p> Request of UpdateBudget </p>
 * @public
 */
export interface UpdateBudgetRequest {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to update.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The budget that you want to update your budget to.</p>
   * @public
   */
  NewBudget: Budget | undefined;
}

/**
 * <p> Response of DescribeBudgets </p>
 * @public
 */
export interface DescribeBudgetsResponse {
  /**
   * <p>A list of budgets.</p>
   * @public
   */
  Budgets?: Budget[] | undefined;

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}
