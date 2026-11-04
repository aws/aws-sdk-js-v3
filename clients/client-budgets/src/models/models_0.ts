// smithy-typescript generated code
import type {
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
 * The trigger threshold of the action.
 *
 * @public
 */
export interface ActionThreshold {
  /**
   * The threshold of a notification.
   *
   * @public
   */
  ActionThresholdValue: number | undefined;

  /**
   * The type of threshold for a notification.
   *
   * @public
   */
  ActionThresholdType: ThresholdType | undefined;
}

/**
 * The Identity and Access Management (IAM) action definition details.
 *
 * @public
 */
export interface IamActionDefinition {
  /**
   * The Amazon Resource Name (ARN) of the policy to be attached.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * A list of roles to be attached. There must be at least one role.
   *
   * @public
   */
  Roles?: string[] | undefined;

  /**
   * A list of groups to be attached. There must be at least one group.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * A list of users to be attached. There must be at least one user.
   *
   * @public
   */
  Users?: string[] | undefined;
}

/**
 * The service control policies (SCP) action definition details.
 *
 * @public
 */
export interface ScpActionDefinition {
  /**
   * The policy ID attached.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * A list of target IDs.
   *
   * @public
   */
  TargetIds: string[] | undefined;
}

/**
 * The Amazon Web Services Systems Manager (SSM) action definition details.
 *
 * @public
 */
export interface SsmActionDefinition {
  /**
   * The action subType.
   *
   * @public
   */
  ActionSubType: ActionSubType | undefined;

  /**
   * The Region to run the SSM document.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The EC2 and RDS instance IDs.
   *
   * @public
   */
  InstanceIds: string[] | undefined;
}

/**
 * Specifies all of the type-specific parameters.
 *
 * @public
 */
export interface Definition {
  /**
   * The Identity and Access Management (IAM) action definition details.
   *
   * @public
   */
  IamActionDefinition?: IamActionDefinition | undefined;

  /**
   * The service control policies (SCPs) action definition details.
   *
   * @public
   */
  ScpActionDefinition?: ScpActionDefinition | undefined;

  /**
   * The Amazon Web Services Systems Manager (SSM) action definition details.
   *
   * @public
   */
  SsmActionDefinition?: SsmActionDefinition | undefined;
}

/**
 * The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.
 *
 * For example, an email subscriber has the following parameters:
 *
 * - A `subscriptionType` of `EMAIL`
 * - An `address` of `example@example.com`
 *
 * @public
 */
export interface Subscriber {
  /**
   * The type of notification that Amazon Web Services sends to a subscriber.
   *
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * The address that Amazon Web Services sends budget notifications to, either an SNS topic or an email.
   *
   * When you create a subscriber, the value of `Address` can't contain line breaks.
   *
   * @public
   */
  Address: string | undefined;
}

/**
 * A budget action resource.
 *
 * @public
 */
export interface Action {
  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The type of a notification. It must be ACTUAL or FORECASTED.
   *
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * The trigger threshold of the action.
   *
   * @public
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * Where you specify all of the type-specific parameters.
   *
   * @public
   */
  Definition: Definition | undefined;

  /**
   * The role passed for action execution and reversion. Roles and actions must be in the same account.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * This specifies if the action needs manual or automatic approval.
   *
   * @public
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status: ActionStatus | undefined;

  /**
   * A list of subscribers.
   *
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * The description of the details for the event.
 *
 * @public
 */
export interface ActionHistoryDetails {
  /**
   * A generic string.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The budget action resource.
   *
   * @public
   */
  Action: Action | undefined;
}

/**
 * The historical records for a budget action.
 *
 * @public
 */
export interface ActionHistory {
  /**
   * A generic time stamp. In Java, it's transformed to a `Date` object.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The status of action at the time of the event.
   *
   * @public
   */
  Status: ActionStatus | undefined;

  /**
   * This distinguishes between whether the events are triggered by the user or are generated by the system.
   *
   * @public
   */
  EventType: EventType | undefined;

  /**
   * The description of the details for the event.
   *
   * @public
   */
  ActionHistoryDetails: ActionHistoryDetails | undefined;
}

/**
 * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
 *
 * @public
 */
export interface HistoricalOptions {
  /**
   * The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the `TimeUnit` granularity of the budget:
   *
   * - For the `DAILY` granularity, the maximum value is `60`.
   * - For the `MONTHLY` granularity, the maximum value is `12`.
   * - For the `QUARTERLY` granularity, the maximum value is `4`.
   * - For the `ANNUALLY` granularity, the maximum value is `1`.
   *
   * @public
   */
  BudgetAdjustmentPeriod: number | undefined;

  /**
   * The integer that describes how many budget periods in your `BudgetAdjustmentPeriod` are included in the calculation of your current `BudgetLimit`. If the first budget period in your `BudgetAdjustmentPeriod` has no cost data, then that budget period isn’t included in the average that determines your budget limit.
   *
   * For example, if you set `BudgetAdjustmentPeriod` as `4` quarters, but your account had no cost data in the first quarter, then only the last three quarters are included in the calculation. In this scenario, `LookBackAvailablePeriods` returns `3`.
   *
   * You can’t set your own `LookBackAvailablePeriods`. The value is automatically calculated from the `BudgetAdjustmentPeriod` and your historical cost data.
   *
   * @public
   */
  LookBackAvailablePeriods?: number | undefined;
}

/**
 * The parameters that determine the budget amount for an auto-adjusting budget.
 *
 * @public
 */
export interface AutoAdjustData {
  /**
   * The string that defines whether your budget auto-adjusts based on historical or forecasted data.
   *
   * @public
   */
  AutoAdjustType: AutoAdjustType | undefined;

  /**
   * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
   *
   * @public
   */
  HistoricalOptions?: HistoricalOptions | undefined;

  /**
   * The last time that your budget was auto-adjusted.
   *
   * @public
   */
  LastAutoAdjustTime?: Date | undefined;
}

/**
 * The amount of cost or usage that's measured for a budget.
 *
 * *Cost example:* A `Spend` for `3 USD` of costs has the following parameters:
 *
 * - An `Amount` of `3`
 * - A `Unit` of `USD`
 *
 * *Usage example:* A `Spend` for `3 GB` of S3 usage has the following parameters:
 *
 * - An `Amount` of `3`
 * - A `Unit` of `GB`
 *
 * @public
 */
export interface Spend {
  /**
   * The cost or usage amount that's associated with a budget forecast, actual spend, or budget threshold.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The unit of measurement that's used for the budget forecast, actual spend, or budget threshold.
   *
   * @public
   */
  Unit: string | undefined;
}

/**
 * The spend objects that are associated with this budget. The `actualSpend` tracks how much you've used, cost, usage, RI units, or Savings Plans units and the `forecastedSpend` tracks how much that you're predicted to spend based on your historical usage profile.
 *
 * For example, if it's the 20th of the month and you have spent `50` dollars on Amazon EC2, your `actualSpend` is `50 USD`, and your `forecastedSpend` is `75 USD`.
 *
 * @public
 */
export interface CalculatedSpend {
  /**
   * The amount of cost, usage, RI units, or Savings Plans units that you used.
   *
   * @public
   */
  ActualSpend: Spend | undefined;

  /**
   * The amount of cost, usage, RI units, or Savings Plans units that you're forecasted to use.
   *
   * @public
   */
  ForecastedSpend?: Spend | undefined;
}

/**
 * The types of cost that are included in a `COST` budget, such as tax and subscriptions.
 *
 * `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets don't have `CostTypes`.
 *
 * @public
 */
export interface CostTypes {
  /**
   * Specifies whether a budget includes taxes.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeTax?: boolean | undefined;

  /**
   * Specifies whether a budget includes subscriptions.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeSubscription?: boolean | undefined;

  /**
   * Specifies whether a budget uses a blended rate.
   *
   * The default value is `false`.
   *
   * @public
   */
  UseBlended?: boolean | undefined;

  /**
   * Specifies whether a budget includes refunds.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeRefund?: boolean | undefined;

  /**
   * Specifies whether a budget includes credits.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeCredit?: boolean | undefined;

  /**
   * Specifies whether a budget includes upfront RI costs.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeUpfront?: boolean | undefined;

  /**
   * Specifies whether a budget includes recurring fees such as monthly RI fees.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeRecurring?: boolean | undefined;

  /**
   * Specifies whether a budget includes non-RI subscription costs.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeOtherSubscription?: boolean | undefined;

  /**
   * Specifies whether a budget includes support subscription fees.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeSupport?: boolean | undefined;

  /**
   * Specifies whether a budget includes discounts.
   *
   * The default value is `true`.
   *
   * @public
   */
  IncludeDiscount?: boolean | undefined;

  /**
   * Specifies whether a budget uses the amortized rate.
   *
   * The default value is `false`.
   *
   * @public
   */
  UseAmortized?: boolean | undefined;
}

/**
 * The cost category values used for filtering the costs.
 *
 * @public
 */
export interface CostCategoryValues {
  /**
   * The unique name of the cost category.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The specific value of the cost category.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * Contains the specifications for the filters to use for your request.
 *
 * @public
 */
export interface ExpressionDimensionValues {
  /**
   * The name of the dimension that you want to filter on.
   *
   * @public
   */
  Key: Dimension | undefined;

  /**
   * The metadata values you can specify to filter upon, so that the results all match at least one of the specified values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The match options that you can use to filter your results. You can specify only one of these values in the array.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The product attribute values used for filtering the costs by key and value pairs. Product attributes are supported for Amazon Bedrock only.
 *
 * @public
 */
export interface ProductAttributeValues {
  /**
   * The name of the product attribute to filter on. Valid values are the following:
   *
   * - `feature` – The feature that was used, such as `On-demand Inference`.
   * - `inferenceType` – The type of inference usage, such as `Input tokens` or `Output tokens`.
   * - `model` – The model, such as `Claude Sonnet 5` or `Claude Haiku 4.5`.
   * - `provider` – The model provider, such as `Anthropic`, `Cohere`, or `Amazon`.
   *
   * Keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The specific values of the product attribute, such as `Claude Sonnet 5` for the `model` key. Values are matched exactly.
   *
   * `Values` is required unless `MatchOptions` is `ABSENT`. To match costs that have no value for the key, set `MatchOptions` to `ABSENT` and omit `Values`.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options for the `ProductAttributes` filter. Valid values:
   *
   * - `ABSENT` – Matches costs that have no value for the attribute.
   * - `CASE_SENSITIVE` – Requires an exact case match.
   * - `EQUALS` – Matches costs where the attribute equals the specified value.
   *
   * Specify either `EQUALS` or `ABSENT`. You can add `CASE_SENSITIVE` to `EQUALS`, but you can't use it by itself or with `ABSENT`.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The values that are available for a tag.
 *
 * @public
 */
export interface TagValues {
  /**
   * The key for the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The specific value of the tag.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * Provides information about the current operational state of a billing view resource, including its ability to access and update based on its associated billing view.
 *
 * @public
 */
export interface HealthStatus {
  /**
   * The current status of the billing view resource.
   *
   * @public
   */
  Status?: HealthStatusValue | undefined;

  /**
   * The reason for the current status.
   *
   * - `BILLING_VIEW_NO_ACCESS`: The billing view resource does not grant `billing:GetBillingViewData` permission to this account.
   * - `BILLING_VIEW_UNHEALTHY`: The billing view associated with the budget is unhealthy.
   * - `FILTER_INVALID`: The filter contains reference to an account you do not have access to.
   * - `MULTI_YEAR_HISTORICAL_DATA_DISABLED`: The budget is not being updated. Enable multi-year historical data in your Cost Management preferences.
   *
   * @public
   */
  StatusReason?: HealthStatusReason | undefined;

  /**
   * A generic time stamp. In Java, it's transformed to a `Date` object.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The start date for a budget. If you created your budget and didn't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For example, if you created your budget on January 24, 2018, chose `DAILY`, and didn't set a start date, Amazon Web Services set your start date to `01/24/18 00:00 UTC`. If you chose `MONTHLY`, Amazon Web Services set your start date to `01/01/18 00:00 UTC`. The defaults are the same for the Billing and Cost Management console and the API.
   *
   * You can change your start date with the `UpdateBudget` operation.
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * The end date for a budget. If you didn't specify an end date, Amazon Web Services set your end date to `06/15/87 00:00 UTC`. The defaults are the same for the Billing and Cost Management console and the API.
   *
   * After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers. You can change your end date with the `UpdateBudget` operation.
   *
   * @public
   */
  End?: Date | undefined;
}

/**
 * A notification that's associated with a budget. A budget can have up to ten notifications.
 *
 * Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 *
 * For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:
 *
 * - A notificationType of `ACTUAL`
 * - A `thresholdType` of `PERCENTAGE`
 * - A `comparisonOperator` of `GREATER_THAN`
 * - A notification `threshold` of `80`
 *
 * @public
 */
export interface Notification {
  /**
   * Specifies whether the notification is for how much you have spent (`ACTUAL`) or for how much that you're forecasted to spend (`FORECASTED`).
   *
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * The comparison that's used for this notification.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * The threshold that's associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.
   *
   * @public
   */
  Threshold: number | undefined;

  /**
   * The type of threshold for a notification. For `ABSOLUTE_VALUE` thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over your total cost threshold. For `PERCENTAGE` thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a `PERCENTAGE` threshold of 80%, Amazon Web Services notifies you when you go over 160 dollars.
   *
   * @public
   */
  ThresholdType?: ThresholdType | undefined;

  /**
   * Specifies whether this notification is in alarm. If a budget notification is in the `ALARM` state, you passed the set threshold for the budget.
   *
   * @public
   */
  NotificationState?: NotificationState | undefined;
}

/**
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 *
 * @public
 */
export interface NotificationWithSubscribers {
  /**
   * The notification that's associated with a budget.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * A list of subscribers who are subscribed to this notification.
   *
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value that's associated with the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Response of CreateBudget
 *
 * @public
 */
export interface CreateBudgetResponse {}

/**
 * @public
 */
export interface CreateBudgetActionRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The type of a notification. It must be ACTUAL or FORECASTED.
   *
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * The trigger threshold of the action.
   *
   * @public
   */
  ActionThreshold: ActionThreshold | undefined;

  /**
   * Specifies all of the type-specific parameters.
   *
   * @public
   */
  Definition: Definition | undefined;

  /**
   * The role passed for action execution and reversion. Roles and actions must be in the same account.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * This specifies if the action needs manual or automatic approval.
   *
   * @public
   */
  ApprovalModel: ApprovalModel | undefined;

  /**
   * A list of subscribers.
   *
   * @public
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * An optional list of tags to associate with the specified budget action. Each tag consists of a key and a value, and each key must be unique for the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBudgetActionResponse {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;
}

/**
 * Request of CreateNotification
 *
 * @public
 */
export interface CreateNotificationRequest {
  /**
   * The `accountId` that is associated with the budget that you want to create a notification for.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification that you want to create.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.
   *
   * @public
   */
  Subscribers: Subscriber[] | undefined;
}

/**
 * Response of CreateNotification
 *
 * @public
 */
export interface CreateNotificationResponse {}

/**
 * Request of CreateSubscriber
 *
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * The `accountId` that is associated with the budget that you want to create a subscriber for.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget that you want to subscribe to. Budget names must be unique within an account.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification that you want to create a subscriber for.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * The subscriber that you want to associate with a budget notification.
   *
   * @public
   */
  Subscriber: Subscriber | undefined;
}

/**
 * Response of CreateSubscriber
 *
 * @public
 */
export interface CreateSubscriberResponse {}

/**
 * Request of DeleteBudget
 *
 * @public
 */
export interface DeleteBudgetRequest {
  /**
   * The `accountId` that is associated with the budget that you want to delete.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget that you want to delete.
   *
   * @public
   */
  BudgetName: string | undefined;
}

/**
 * Response of DeleteBudget
 *
 * @public
 */
export interface DeleteBudgetResponse {}

/**
 * @public
 */
export interface DeleteBudgetActionRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBudgetActionResponse {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A budget action resource.
   *
   * @public
   */
  Action: Action | undefined;
}

/**
 * Request of DeleteNotification
 *
 * @public
 */
export interface DeleteNotificationRequest {
  /**
   * The `accountId` that is associated with the budget whose notification you want to delete.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose notification you want to delete.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification that you want to delete.
   *
   * @public
   */
  Notification: Notification | undefined;
}

/**
 * Response of DeleteNotification
 *
 * @public
 */
export interface DeleteNotificationResponse {}

/**
 * Request of DeleteSubscriber
 *
 * @public
 */
export interface DeleteSubscriberRequest {
  /**
   * The `accountId` that is associated with the budget whose subscriber you want to delete.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose subscriber you want to delete.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification whose subscriber you want to delete.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * The subscriber that you want to delete.
   *
   * @public
   */
  Subscriber: Subscriber | undefined;
}

/**
 * Response of DeleteSubscriber
 *
 * @public
 */
export interface DeleteSubscriberResponse {}

/**
 * Request of DescribeBudget
 *
 * @public
 */
export interface DescribeBudgetRequest {
  /**
   * The `accountId` that is associated with the budget that you want a description of.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget that you want a description of.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * Specifies whether the response includes the filter expression associated with the budget. By showing the filter expression, you can see detailed filtering logic applied to the budget, such as Amazon Web Services services or tags that are being tracked.
   *
   * @public
   */
  ShowFilterExpression?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionResponse {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A budget action resource.
   *
   * @public
   */
  Action: Action | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
   *
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * An integer that represents how many entries a paginated response contains. The maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionHistoriesResponse {
  /**
   * The historical record of the budget action resource.
   *
   * @public
   */
  ActionHistories: ActionHistory[] | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * An integer that represents how many entries a paginated response contains. The maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForAccountResponse {
  /**
   * A list of the budget action resources information.
   *
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * An integer that represents how many entries a paginated response contains. The maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetActionsForBudgetResponse {
  /**
   * A list of the budget action resources information.
   *
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * An integer that represents how many budgets a paginated response contains. The default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The budget name and associated notifications for an account.
 *
 * @public
 */
export interface BudgetNotificationsForAccount {
  /**
   * A list of notifications.
   *
   * @public
   */
  Notifications?: Notification[] | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetNotificationsForAccountResponse {
  /**
   * A list of budget names and associated notifications for an account.
   *
   * @public
   */
  BudgetNotificationsForAccount?: BudgetNotificationsForAccount[] | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * Retrieves how often the budget went into an `ALARM` state for the specified time period.
   *
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * An integer that represents how many entries a paginated response contains. The maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The amount of cost or usage that you created the budget for, compared to your actual costs or usage.
 *
 * @public
 */
export interface BudgetedAndActualAmounts {
  /**
   * The amount of cost or usage that you created the budget for.
   *
   * @public
   */
  BudgetedAmount?: Spend | undefined;

  /**
   * Your actual costs or usage for a budget period.
   *
   * @public
   */
  ActualAmount?: Spend | undefined;

  /**
   * The time period that's covered by this budget comparison.
   *
   * @public
   */
  TimePeriod?: TimePeriod | undefined;
}

/**
 * Request of DescribeBudgets
 *
 * @public
 */
export interface DescribeBudgetsRequest {
  /**
   * The `accountId` that is associated with the budgets that you want to describe.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * An integer that represents how many budgets a paginated response contains. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that you include in your request to indicate the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies whether the response includes the filter expression associated with the budgets. By showing the filter expression, you can see detailed filtering logic applied to the budgets, such as Amazon Web Services services or tags that are being tracked.
   *
   * @public
   */
  ShowFilterExpression?: boolean | undefined;
}

/**
 * Request of DescribeNotificationsForBudget
 *
 * @public
 */
export interface DescribeNotificationsForBudgetRequest {
  /**
   * The `accountId` that is associated with the budget whose notifications you want descriptions of.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose notifications you want descriptions of.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * An optional integer that represents how many entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that you include in your request to indicate the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Response of GetNotificationsForBudget
 *
 * @public
 */
export interface DescribeNotificationsForBudgetResponse {
  /**
   * A list of notifications that are associated with a budget.
   *
   * @public
   */
  Notifications?: Notification[] | undefined;

  /**
   * The pagination token in the service response that indicates the next set of results that you can retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request of DescribeSubscribersForNotification
 *
 * @public
 */
export interface DescribeSubscribersForNotificationRequest {
  /**
   * The `accountId` that is associated with the budget whose subscribers you want descriptions of.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose subscribers you want descriptions of.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification whose subscribers you want to list.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * An optional integer that represents how many entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that you include in your request to indicate the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Response of DescribeSubscribersForNotification
 *
 * @public
 */
export interface DescribeSubscribersForNotificationResponse {
  /**
   * A list of subscribers that are associated with a notification.
   *
   * @public
   */
  Subscribers?: Subscriber[] | undefined;

  /**
   * The pagination token in the service response that indicates the next set of results that you can retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteBudgetActionRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * The type of execution.
   *
   * @public
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 */
export interface ExecuteBudgetActionResponse {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * The type of execution.
   *
   * @public
   */
  ExecutionType: ExecutionType | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags associated with the resource.
   *
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
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Response of UpdateBudget
 *
 * @public
 */
export interface UpdateBudgetResponse {}

/**
 * @public
 */
export interface UpdateBudgetActionRequest {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * A system-generated universally unique identifier (UUID) for the action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * The type of a notification. It must be ACTUAL or FORECASTED.
   *
   * @public
   */
  NotificationType?: NotificationType | undefined;

  /**
   * The trigger threshold of the action.
   *
   * @public
   */
  ActionThreshold?: ActionThreshold | undefined;

  /**
   * Specifies all of the type-specific parameters.
   *
   * @public
   */
  Definition?: Definition | undefined;

  /**
   * The role passed for action execution and reversion. Roles and actions must be in the same account.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * This specifies if the action needs manual or automatic approval.
   *
   * @public
   */
  ApprovalModel?: ApprovalModel | undefined;

  /**
   * A list of subscribers.
   *
   * @public
   */
  Subscribers?: Subscriber[] | undefined;
}

/**
 * @public
 */
export interface UpdateBudgetActionResponse {
  /**
   * The account ID of the user. It's a 12-digit number.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The previous action resource information.
   *
   * @public
   */
  OldAction: Action | undefined;

  /**
   * The updated action resource information.
   *
   * @public
   */
  NewAction: Action | undefined;
}

/**
 * Request of UpdateNotification
 *
 * @public
 */
export interface UpdateNotificationRequest {
  /**
   * The `accountId` that is associated with the budget whose notification you want to update.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose notification you want to update.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The previous notification that is associated with a budget.
   *
   * @public
   */
  OldNotification: Notification | undefined;

  /**
   * The updated notification to be associated with a budget.
   *
   * @public
   */
  NewNotification: Notification | undefined;
}

/**
 * Response of UpdateNotification
 *
 * @public
 */
export interface UpdateNotificationResponse {}

/**
 * Request of UpdateSubscriber
 *
 * @public
 */
export interface UpdateSubscriberRequest {
  /**
   * The `accountId` that is associated with the budget whose subscriber you want to update.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The name of the budget whose subscriber you want to update.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The notification whose subscriber you want to update.
   *
   * @public
   */
  Notification: Notification | undefined;

  /**
   * The previous subscriber that is associated with a budget notification.
   *
   * @public
   */
  OldSubscriber: Subscriber | undefined;

  /**
   * The updated subscriber that is associated with a budget notification.
   *
   * @public
   */
  NewSubscriber: Subscriber | undefined;
}

/**
 * Response of UpdateSubscriber
 *
 * @public
 */
export interface UpdateSubscriberResponse {}

/**
 * Use Expression to filter in various Budgets APIs.
 *
 * @public
 */
export interface Expression {
  /**
   * Return results that match either Dimension object.
   *
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * Return results that match both Dimension objects.
   *
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * Return results that don't match a Dimension object.
   *
   * @public
   */
  Not?: Expression | undefined;

  /**
   * The specific Dimension to use for Expression.
   *
   * @public
   */
  Dimensions?: ExpressionDimensionValues | undefined;

  /**
   * The specific Tag to use for Expression.
   *
   * @public
   */
  Tags?: TagValues | undefined;

  /**
   * The filter that's based on CostCategoryValues.
   *
   * @public
   */
  CostCategories?: CostCategoryValues | undefined;

  /**
   * The filter that limits results based on the values of specific product attributes.
   *
   * @public
   */
  ProductAttributes?: ProductAttributeValues | undefined;
}

/**
 * Represents the output of the `CreateBudget` operation. The content consists of the detailed metadata and data file information, and the current status of the `budget` object.
 *
 * This is the Amazon Resource Name (ARN) pattern for a budget:
 *
 * `arn:aws:budgets::AccountId:budget/budgetName`
 *
 * @public
 */
export interface Budget {
  /**
   * The name of a budget. The name must be unique within an account. The `:` and `\` characters, and the "/action/" substring, aren't allowed in `BudgetName`.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.
   *
   * `BudgetLimit` is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to `100`. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use `BudgetLimit` with `PlannedBudgetLimits` for `CreateBudget` and `UpdateBudget` actions.
   *
   * @public
   */
  BudgetLimit?: Spend | undefined;

  /**
   * A map containing multiple `BudgetLimit`, including current or future limits.
   *
   * `PlannedBudgetLimits` is available for cost or usage budget and supports both monthly and quarterly `TimeUnit`.
   *
   * For monthly budgets, provide 12 months of `PlannedBudgetLimits` values. This must start from the current month and include the next 11 months. The `key` is the start of the month, `UTC` in epoch seconds.
   *
   * For quarterly budgets, provide four quarters of `PlannedBudgetLimits` value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The `key` is the start of the quarter, `UTC` in epoch seconds.
   *
   * If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the `PlannedBudgetLimits` values only for the remaining periods.
   *
   * If the budget begins at a date in the future, provide `PlannedBudgetLimits` values from the start date of the budget.
   *
   * After all of the `BudgetLimit` values in `PlannedBudgetLimits` are used, the budget continues to use the last limit as the `BudgetLimit`. At that point, the planned budget provides the same experience as a fixed budget.
   *
   * `DescribeBudget` and `DescribeBudgets` response along with `PlannedBudgetLimits` also contain `BudgetLimit` representing the current month or quarter limit present in `PlannedBudgetLimits`. This only applies to budgets that are created with `PlannedBudgetLimits`. Budgets that are created without `PlannedBudgetLimits` only contain `BudgetLimit`. They don't contain `PlannedBudgetLimits`.
   *
   * @public
   */
  PlannedBudgetLimits?: Record<string, Spend> | undefined;

  /**
   * The cost filters, such as `Region`, `Service`, `LinkedAccount`, `Tag`, or `CostCategory`, that are applied to a budget.
   *
   * Amazon Web Services Budgets supports the following services as a `Service` filter for RI budgets:
   *
   * - Amazon EC2
   * - Amazon Redshift
   * - Amazon Relational Database Service
   * - Amazon ElastiCache
   * - Amazon OpenSearch Service
   *
   * @deprecated (since 2025-04-18) CostFilters lack support for newer dimensions and filtering options. Please consider using the new 'FilterExpression' field.
   * @public
   */
  CostFilters?: Record<string, string[]> | undefined;

  /**
   * The types of costs that are included in this `COST` budget.
   *
   * `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets do not have `CostTypes`.
   *
   * @deprecated (since 2025-04-18) CostTypes lack support for newer record type dimensions and filtering options. Please consider using the new 'Metrics' field.
   * @public
   */
  CostTypes?: CostTypes | undefined;

  /**
   * The length of time until a budget resets the actual and forecasted spend.
   *
   * @public
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * The period of time that's covered by a budget. You set the start date and end date. The start date must come before the end date. The end date must come before `06/15/87 00:00 UTC`.
   *
   * If you create your budget and don't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For example, if you created your budget on January 24, 2018, chose `DAILY`, and didn't set a start date, Amazon Web Services set your start date to `01/24/18 00:00 UTC`. If you chose `MONTHLY`, Amazon Web Services set your start date to `01/01/18 00:00 UTC`. If you didn't specify an end date, Amazon Web Services set your end date to `06/15/87 00:00 UTC`. The defaults are the same for the Billing and Cost Management console and the API.
   *
   * You can change either date with the `UpdateBudget` operation.
   *
   * After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers.
   *
   * @public
   */
  TimePeriod?: TimePeriod | undefined;

  /**
   * The actual and forecasted cost or usage that the budget tracks.
   *
   * @public
   */
  CalculatedSpend?: CalculatedSpend | undefined;

  /**
   * Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.
   *
   * @public
   */
  BudgetType: BudgetType | undefined;

  /**
   * The last time that you updated this budget.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The parameters that determine the budget amount for an auto-adjusting budget.
   *
   * @public
   */
  AutoAdjustData?: AutoAdjustData | undefined;

  /**
   * The filtering dimensions for the budget and their corresponding values.
   *
   * @public
   */
  FilterExpression?: Expression | undefined;

  /**
   * The definition for how the budget data is aggregated.
   *
   * @public
   */
  Metrics?: Metric[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The current operational state of a Billing View derived resource.
   *
   * @public
   */
  HealthStatus?: HealthStatus | undefined;
}

/**
 * A history of the state of a budget at the end of the budget's specified time period.
 *
 * @public
 */
export interface BudgetPerformanceHistory {
  /**
   * A string that represents the budget name. The ":" and "\" characters, and the "/action/" substring, aren't allowed.
   *
   * Budget names are validated for content. Names that contain phone numbers, URLs, or email addresses combined with certain terms may be rejected.
   *
   * @public
   */
  BudgetName?: string | undefined;

  /**
   * The type of a budget. It must be one of the following types:
   *
   * `COST`, `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, or `SAVINGS_PLANS_COVERAGE`.
   *
   * @public
   */
  BudgetType?: BudgetType | undefined;

  /**
   * The history of the cost filters for a budget during the specified time period.
   *
   * @public
   */
  CostFilters?: Record<string, string[]> | undefined;

  /**
   * The history of the cost types for a budget during the specified time period.
   *
   * @public
   */
  CostTypes?: CostTypes | undefined;

  /**
   * The time unit of the budget, such as MONTHLY or QUARTERLY.
   *
   * @public
   */
  TimeUnit?: TimeUnit | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * A list of amounts of cost or usage that you created budgets for, which are compared to your actual costs or usage.
   *
   * @public
   */
  BudgetedAndActualAmountsList?: BudgetedAndActualAmounts[] | undefined;

  /**
   * The filtering dimensions for the budget and their corresponding values.
   *
   * @public
   */
  FilterExpression?: Expression | undefined;

  /**
   * The definition for how the budget data is aggregated.
   *
   * @public
   */
  Metrics?: Metric[] | undefined;
}

/**
 * Request of CreateBudget
 *
 * @public
 */
export interface CreateBudgetRequest {
  /**
   * The `accountId` that is associated with the budget.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The budget object that you want to create.
   *
   * @public
   */
  Budget: Budget | undefined;

  /**
   * A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your `CreateBudget` call, Amazon Web Services creates the notifications and subscribers for you.
   *
   * @public
   */
  NotificationsWithSubscribers?: NotificationWithSubscribers[] | undefined;

  /**
   * An optional list of tags to associate with the specified budget. Each tag consists of a key and a value, and each key must be unique for the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface DescribeBudgetPerformanceHistoryResponse {
  /**
   * The history of how often the budget has gone into an `ALARM` state.
   *
   * For `DAILY` budgets, the history saves the state of the budget for the last 60 days. For `MONTHLY` budgets, the history saves the state of the budget for the current month plus the last 12 months. For `QUARTERLY` budgets, the history saves the state of the budget for the last four quarters.
   *
   * @public
   */
  BudgetPerformanceHistory?: BudgetPerformanceHistory | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Response of DescribeBudget
 *
 * @public
 */
export interface DescribeBudgetResponse {
  /**
   * The description of the budget.
   *
   * @public
   */
  Budget?: Budget | undefined;
}

/**
 * Request of UpdateBudget
 *
 * @public
 */
export interface UpdateBudgetRequest {
  /**
   * The `accountId` that is associated with the budget that you want to update.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The budget that you want to update your budget to.
   *
   * @public
   */
  NewBudget: Budget | undefined;
}

/**
 * Response of DescribeBudgets
 *
 * @public
 */
export interface DescribeBudgetsResponse {
  /**
   * A list of budgets.
   *
   * @public
   */
  Budgets?: Budget[] | undefined;

  /**
   * The pagination token in the service response that indicates the next set of results that you can retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}
