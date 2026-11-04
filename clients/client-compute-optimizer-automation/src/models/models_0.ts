// smithy-typescript generated code
import type {
  AutomationEventFilterName,
  AutomationRuleFilterName,
  ComparisonOperator,
  EnrollmentStatus,
  EventStatus,
  EventType,
  OrganizationRuleMode,
  RecommendedActionFilterName,
  RecommendedActionType,
  ResourceType,
  RuleApplyOrder,
  RuleStatus,
  RuleType,
  SavingsEstimationMode,
  StepStatus,
  StepType,
  SummaryDimensionKey,
} from "./enums";

/**
 * Contains information about an Amazon Web Services account's enrollment and association status with Compute Optimizer Automation.
 *
 * @public
 */
export interface AccountInfo {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The enrollment status of the account: Active, Inactive, Pending, or Failed.
   *
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * Specifies whether the management account can create Automation rules that implement optimization actions for this account.
   *
   * @public
   */
  organizationRuleMode: OrganizationRuleMode | undefined;

  /**
   * The reason for the current Automation enrollment status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the account's Automation enrollment status was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsRequest {
  /**
   * The IDs of the member accounts to associate. You can specify up to 50 account IDs.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * A unique identifier to ensure idempotency of the request. Valid for 24 hours after creation.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsResponse {
  /**
   * The IDs of the member accounts that were successfully associated.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * Any errors that occurred during the association process.
   *
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * Contains information about estimated monthly cost savings.
 *
 * @public
 */
export interface EstimatedMonthlySavings {
  /**
   * The currency of the estimated savings.
   *
   * @public
   */
  currency: string | undefined;

  /**
   * The estimated monthly savings before applying any discounts.
   *
   * @public
   */
  beforeDiscountSavings: number | undefined;

  /**
   * The estimated monthly savings after applying any discounts.
   *
   * @public
   */
  afterDiscountSavings: number | undefined;

  /**
   * The mode used to calculate savings, either BeforeDiscount or AfterDiscount.
   *
   * @public
   */
  savingsEstimationMode: SavingsEstimationMode | undefined;
}

/**
 * Contains information about an automation event.
 *
 * @public
 */
export interface AutomationEvent {
  /**
   * The unique identifier for the automation event.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A description of the automation event.
   *
   * @public
   */
  eventDescription?: string | undefined;

  /**
   * The type of automation event.
   *
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * The current status of the automation event.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * The reason for the current event status.
   *
   * @public
   */
  eventStatusReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource affected by the automation event.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The ID of the resource affected by the automation event.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The ID of the recommended action associated with this automation event.
   *
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the automation event.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services Region where the automation event occurred.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The ID of the automation rule that triggered this event.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The type of resource affected by the automation event.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The timestamp when the automation event was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * The timestamp when the automation event completed.
   *
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * The estimated monthly cost savings associated with this automation event.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * A filter to apply when listing automation events.
 *
 * @public
 */
export interface AutomationEventFilter {
  /**
   * The name of the filter to apply.
   *
   * @public
   */
  name: AutomationEventFilterName | undefined;

  /**
   * The values to use for the specified filter.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains information about a step in an automation event.
 *
 * @public
 */
export interface AutomationEventStep {
  /**
   * The ID of the automation event this step belongs to.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The unique identifier for this step.
   *
   * @public
   */
  stepId?: string | undefined;

  /**
   * The type of step.
   *
   * @public
   */
  stepType?: StepType | undefined;

  /**
   * The current status of the step.
   *
   * @public
   */
  stepStatus?: StepStatus | undefined;

  /**
   * The unique identifier of the resource being acted upon in this step.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The timestamp when this automation event step started execution.
   *
   * @public
   */
  startTimestamp?: Date | undefined;

  /**
   * The timestamp when this automation event step completed execution.
   *
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * A key-value pair used to categorize and group summary data for analysis and reporting.
 *
 * @public
 */
export interface SummaryDimension {
  /**
   * The dimension key used for categorizing summary data.
   *
   * @public
   */
  key: SummaryDimensionKey | undefined;

  /**
   * The specific value for this dimension key used in the summary grouping.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Defines a time range with inclusive start time and exclusive end time for filtering and analysis.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The start time of the period, inclusive. Events at or after this time are included.
   *
   * @public
   */
  startTimeInclusive?: Date | undefined;

  /**
   * The end time of the period, exclusive. Events before this time are included.
   *
   * @public
   */
  endTimeExclusive?: Date | undefined;
}

/**
 * Aggregate totals for automation events, including counts and estimated savings.
 *
 * @public
 */
export interface SummaryTotals {
  /**
   * The total number of automation events in this summary group.
   *
   * @public
   */
  automationEventCount?: number | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * A summary of automation events grouped by specified dimensions.
 *
 * @public
 */
export interface AutomationEventSummary {
  /**
   * The key identifier for this summary grouping.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The dimensions used to group this summary, such as event status.
   *
   * @public
   */
  dimensions?: SummaryDimension[] | undefined;

  /**
   * The time period covered by this summary, with inclusive start time and exclusive end time.
   *
   * @public
   */
  timePeriod?: TimePeriod | undefined;

  /**
   * The aggregated totals for this summary, including event count and estimated savings.
   *
   * @public
   */
  total?: SummaryTotals | undefined;
}

/**
 * Configuration settings for organization-wide automation rules.
 *
 * @public
 */
export interface OrganizationConfiguration {
  /**
   * Specifies when organization rules should be applied relative to account rules.
   *
   * @public
   */
  ruleApplyOrder?: RuleApplyOrder | undefined;

  /**
   * List of specific Amazon Web Services account IDs where the organization rule should be applied.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * Configuration for scheduling when automation rules should execute, including timing and execution windows.
 *
 * @public
 */
export interface Schedule {
  /**
   * The expression that defines when the schedule runs. `cron` expression is supported. A `cron` expression consists of six fields separated by white spaces: (`minutes` `hours` `day_of_month` `month` `day_of_week` `year`)
   *
   * > **Note:** You can schedule rules to run at most once per day. Your cron expression must use specific values (not wildcards) for the minutes and hours fields. For example: (`30 12 * * *`) runs daily at 12:30 PM UTC.
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The timezone to use when interpreting the schedule expression.
   *
   * @public
   */
  scheduleExpressionTimezone?: string | undefined;

  /**
   * The time window in minutes during which the automation rule can start implementing recommended actions.
   *
   * @public
   */
  executionWindowInMinutes?: number | undefined;
}

/**
 * Represents a complete automation rule configuration including criteria, schedule, and execution settings.
 *
 * @public
 */
export interface AutomationRule {
  /**
   * The Amazon Resource Name (ARN) of the automation rule.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The unique identifier of the automation rule.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The name of the automation rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the automation rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of automation rule (OrganizationRule or AccountRule).
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The revision number of the automation rule.
   *
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * The 12-digit Amazon Web Services account ID that owns this automation rule.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Configuration settings for organization-wide rules.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * List of recommended action types that this rule can execute.
   *
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * The schedule configuration for when the automation rule should execute.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The current status of the automation rule (Active or Inactive).
   *
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * The timestamp when the automation rule was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * The timestamp when the automation rule was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * Defines a condition for filtering based on integer values with comparison operators.
 *
 * @public
 */
export interface IntegerCriteriaCondition {
  /**
   * The comparison operator used to evaluate the attribute against the specified values.
   *
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * The list of integer values to compare against using the specified comparison operator.
   *
   * @public
   */
  values?: number[] | undefined;
}

/**
 * Criteria condition for filtering based on string values, including comparison operators and target values.
 *
 * @public
 */
export interface StringCriteriaCondition {
  /**
   * The comparison operator used to evaluate the attribute against the specified values.
   *
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * List of string values to compare against when applying the criteria condition.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Defines a condition for filtering based on double/floating-point numeric values with comparison operators.
 *
 * @public
 */
export interface DoubleCriteriaCondition {
  /**
   * The comparison operator used to evaluate the attribute against the specified values.
   *
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * The list of double values to compare against using the specified comparison operator.
   *
   * @public
   */
  values?: number[] | undefined;
}

/**
 * Criteria condition for filtering resources based on their tags, including comparison operators and values.
 *
 * @public
 */
export interface ResourceTagsCriteriaCondition {
  /**
   * The comparison operator used to evaluate the attribute against the specified values.
   *
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * The tag key to use for comparison when filtering resources.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * List of tag values to compare against when filtering resources.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
 *
 * @public
 */
export interface Criteria {
  /**
   * Filter criteria for Amazon Web Services regions where resources must be located.
   *
   * @public
   */
  region?: StringCriteriaCondition[] | undefined;

  /**
   * Filter criteria for specific resource ARNs to include or exclude.
   *
   * @public
   */
  resourceArn?: StringCriteriaCondition[] | undefined;

  /**
   * Filter criteria for EBS volume types, such as gp2, gp3, io1, io2, st1, or sc1.
   *
   * @public
   */
  ebsVolumeType?: StringCriteriaCondition[] | undefined;

  /**
   * Filter criteria for EBS volume sizes in gibibytes (GiB).
   *
   * @public
   */
  ebsVolumeSizeInGib?: IntegerCriteriaCondition[] | undefined;

  /**
   * Filter criteria for estimated monthly cost savings from the recommended action.
   *
   * @public
   */
  estimatedMonthlySavings?: DoubleCriteriaCondition[] | undefined;

  /**
   * Filter criteria for resource tags, allowing filtering by tag key and value combinations.
   *
   * @public
   */
  resourceTag?: ResourceTagsCriteriaCondition[] | undefined;

  /**
   * Filter criteria for the lookback period in days used to analyze resource utilization.
   *
   * @public
   */
  lookBackPeriodInDays?: IntegerCriteriaCondition[] | undefined;

  /**
   * Filter criteria indicating whether the recommended action requires a resource restart.
   *
   * @public
   */
  restartNeeded?: StringCriteriaCondition[] | undefined;
}

/**
 * A key-value pair used to categorize and organize Amazon Web Services resources and automation rules.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key, which can be up to 128 characters long.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value, which can be up to 256 characters long.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleRequest {
  /**
   * The name of the automation rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the automation rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of rule.
   *
   * > **Note:** Only the management account or a delegated administrator can set the ruleType to be OrganizationRule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * Configuration for organization-level rules. Required for OrganizationRule type.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * The types of recommended actions this rule will automate.
   *
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The schedule for when the rule should run.
   *
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * The status of the rule
   *
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * The tags to associate with the rule.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the created rule.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The unique identifier of the created rule.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The name of the automation rule. Must be 1-128 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the automation rule. Can be up to 1024 characters long and contain alphanumeric characters, underscores, hyphens, spaces, and certain special characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of automation rule. Can be either OrganizationRule for organization-wide rules or AccountRule for account-specific rules.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The revision number of the automation rule. This is incremented each time the rule is updated.
   *
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * Configuration settings for organization-wide rules, including rule application order and target account IDs.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * The priority level of the automation rule, used to determine execution order when multiple rules apply to the same resource.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * List of recommended action types that this rule can execute, such as SnapshotAndDeleteUnattachedEbsVolume or UpgradeEbsVolumeType.
   *
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The schedule configuration for when the automation rule should execute, including cron expression, timezone, and execution window.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The current status of the automation rule. Can be Active or Inactive.
   *
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * A list of key-value pairs used to categorize and organize the automation rule. Maximum of 200 tags allowed.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The timestamp when the automation rule was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomationRuleRequest {
  /**
   * The ARN of the rule to delete.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The revision number of the rule to delete.
   *
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * A unique identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomationRuleResponse {}

/**
 * @public
 */
export interface DisassociateAccountsRequest {
  /**
   * The IDs of the member accounts to disassociate.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * A unique identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsResponse {
  /**
   * The IDs of the member accounts that were successfully disassociated.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * Any errors that occurred during the disassociation process.
   *
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAutomationEventRequest {
  /**
   * The ID of the automation event to retrieve.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationEventResponse {
  /**
   * The ID of the automation event to retrieve.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * A description of the automation event.
   *
   * @public
   */
  eventDescription?: string | undefined;

  /**
   * The type of automation event.
   *
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * The current status of the automation event.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * The reason for the current event status.
   *
   * @public
   */
  eventStatusReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource affected by the automation event.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The ID of the resource affected by the automation event.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The ID of the recommended action associated with this automation event.
   *
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the automation event.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services Region where the automation event occurred.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The ID of the automation rule that triggered this event.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The type of resource affected by the automation event.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The timestamp when the automation event was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * The timestamp when the automation event completed.
   *
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleRequest {
  /**
   * The ARN of the rule to retrieve.
   *
   * @public
   */
  ruleArn: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the automation rule.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The unique identifier of the automation rule.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The name of the automation rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the automation rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of automation rule.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The revision number of the automation rule.
   *
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * The 12-digit Amazon Web Services account ID that owns this automation rule.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Configuration settings for organization-wide automation rules.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * List of recommended action types that this rule can execute.
   *
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * Configuration for scheduling when automation rules should execute, including timing and execution windows.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The current status of the automation rule (Active or Inactive).
   *
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * The tags associated with the automation rule.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The timestamp when the automation rule was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * The timestamp when the automation rule was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentConfigurationRequest {}

/**
 * @public
 */
export interface GetEnrollmentConfigurationResponse {
  /**
   * The current enrollment status.
   *
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * The reason for the current enrollment status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Specifies whether the management account can create Automation rules that implement optimization actions for this account.
   *
   * @public
   */
  organizationRuleMode?: OrganizationRuleMode | undefined;

  /**
   * The timestamp of the last update to the enrollment configuration.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * The list of accounts in your organization enrolled in Compute Optimizer
   *
   * @public
   */
  accounts: AccountInfo[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventsRequest {
  /**
   * The filters to apply to the list of automation events.
   *
   * @public
   */
  filters?: AutomationEventFilter[] | undefined;

  /**
   * The start of the time range to query for events.
   *
   * @public
   */
  startTimeInclusive?: Date | undefined;

  /**
   * The end of the time range to query for events.
   *
   * @public
   */
  endTimeExclusive?: Date | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventsResponse {
  /**
   * The list of automation events that match the specified criteria.
   *
   * @public
   */
  automationEvents?: AutomationEvent[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventStepsRequest {
  /**
   * The ID of the automation event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The maximum number of automation event steps to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventStepsResponse {
  /**
   * The list of steps for the specified automation event.
   *
   * @public
   */
  automationEventSteps?: AutomationEventStep[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventSummariesRequest {
  /**
   * The filters to apply to the list of automation event summaries.
   *
   * @public
   */
  filters?: AutomationEventFilter[] | undefined;

  /**
   * The start date for filtering automation event summaries, inclusive. Events created on or after this date will be included.
   *
   * @public
   */
  startDateInclusive?: string | undefined;

  /**
   * The end date for filtering automation event summaries, exclusive. Events created before this date will be included.
   *
   * @public
   */
  endDateExclusive?: string | undefined;

  /**
   * The maximum number of automation event summaries to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventSummariesResponse {
  /**
   * The list of automation event summaries that match the specified criteria.
   *
   * @public
   */
  automationEventSummaries?: AutomationEventSummary[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Defines the scope for organization-level rules when previewing matching actions.
 *
 * @public
 */
export interface OrganizationScope {
  /**
   * List of Amazon Web Services account IDs to include in the organization scope.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewRequest {
  /**
   * The type of rule.
   *
   * > **Note:** Only the management account or a delegated administrator can set the ruleType to be OrganizationRule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The organizational scope for the rule preview.
   *
   * @public
   */
  organizationScope?: OrganizationScope | undefined;

  /**
   * The types of recommended actions to include in the preview.
   *
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The maximum number of automation rule preview results to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration details for an Amazon EBS volume.
 *
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * The EBS volume type, such as gp2, gp3, io1, io2, st1, or sc1.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The size of the EBS volume in gibibytes (GiB).
   *
   * @public
   */
  sizeInGib?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS) provisioned for the volume.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput in MiB/s provisioned for the volume (applicable to gp3, io1, and io2bx volumes).
   *
   * @public
   */
  throughput?: number | undefined;
}

/**
 * Represents an Amazon EBS volume with its configuration and snapshot usage information.
 *
 * @public
 */
export interface EbsVolume {
  /**
   * The configuration details of the EBS volume, including type, size, IOPS, and throughput.
   *
   * @public
   */
  configuration?: EbsVolumeConfiguration | undefined;
}

/**
 * Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.
 *
 * @public
 */
export type ResourceDetails =
  | ResourceDetails.EbsVolumeMember
  | ResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ResourceDetails {
  /**
   * Detailed configuration information specific to EBS volumes, including volume type, size, IOPS, and throughput settings.
   *
   * @public
   */
  export interface EbsVolumeMember {
    ebsVolume: EbsVolume;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ebsVolume?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ebsVolume: (value: EbsVolume) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the results of previewing an automation rule against available recommendations.
 *
 * @public
 */
export interface PreviewResult {
  /**
   * The ID of the recommended action being previewed.
   *
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource affected by the recommended action.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The ID of the resource affected by the recommended action.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services Region where the resource is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The type of resource being evaluated.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The number of days of historical data used to analyze the resource.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * The type of recommended action being previewed.
   *
   * @public
   */
  recommendedActionType?: RecommendedActionType | undefined;

  /**
   * A summary of the resource's current configuration.
   *
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.
   *
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * A summary of the resource's recommended configuration.
   *
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.
   *
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * Indicates whether implementing the recommended action requires a resource restart.
   *
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;

  /**
   * The tags associated with the resource.
   *
   * @public
   */
  resourceTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewResponse {
  /**
   * The list of actions that would be taken based on the specified criteria.
   *
   * @public
   */
  previewResults?: PreviewResult[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewSummariesRequest {
  /**
   * The type of rule.
   *
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * The organizational scope for the rule preview.
   *
   * @public
   */
  organizationScope?: OrganizationScope | undefined;

  /**
   * The types of recommended actions to include in the preview.
   *
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The maximum number of automation rule preview summaries to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Aggregate totals for automation rule preview results, including count and estimated savings.
 *
 * @public
 */
export interface RulePreviewTotal {
  /**
   * The total number of recommended actions matching the rule preview configuration.
   *
   * @public
   */
  recommendedActionCount: number | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings: EstimatedMonthlySavings | undefined;
}

/**
 * Contains a summary of preview results for an automation rule.
 *
 * @public
 */
export interface PreviewResultSummary {
  /**
   * The key identifier for this preview result summary.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Aggregate totals for automation rule preview results, including count and estimated savings.
   *
   * @public
   */
  total: RulePreviewTotal | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewSummariesResponse {
  /**
   * The list of automation rule preview summaries that match the specified criteria.
   *
   * @public
   */
  previewResultSummaries?: PreviewResultSummary[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter used to narrow down results based on specific criteria.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter field to apply.
   *
   * @public
   */
  name: AutomationRuleFilterName | undefined;

  /**
   * The list of values to filter by for the specified filter field.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * The filters to apply to the list of automation rules.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of automation rules to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * The list of automation rules that match the specified criteria.
   *
   * @public
   */
  automationRules?: AutomationRule[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter used to narrow down recommended action results based on specific criteria.
 *
 * @public
 */
export interface RecommendedActionFilter {
  /**
   * The name of the filter field to apply.
   *
   * @public
   */
  name: RecommendedActionFilterName | undefined;

  /**
   * List of filter values to match against the specified filter name. Used to narrow down recommended actions based on specific criteria.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsRequest {
  /**
   * The filters to apply to the list of recommended actions.
   *
   * @public
   */
  filters?: RecommendedActionFilter[] | undefined;

  /**
   * The maximum number of recommended actions to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about a recommended action that can be applied to optimize an Amazon Web Services resource.
 *
 * @public
 */
export interface RecommendedAction {
  /**
   * The unique identifier of the recommended action.
   *
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that the recommendation applies to.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The ID of the resource that the recommendation applies to.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services Region where the resource is located.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The type of resource being evaluated.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The number of days of historical data used to generate the recommendation.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * The type of action being recommended.
   *
   * @public
   */
  recommendedActionType?: RecommendedActionType | undefined;

  /**
   * A summary of the resource's current configuration.
   *
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.
   *
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * A summary of the resource's recommended configuration.
   *
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.
   *
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * Indicates whether implementing the recommended action requires a resource restart.
   *
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;

  /**
   * The tags associated with the resource.
   *
   * @public
   */
  resourceTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsResponse {
  /**
   * The list of recommended actions that match the specified criteria.
   *
   * @public
   */
  recommendedActions?: RecommendedAction[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionSummariesRequest {
  /**
   * A list of filters to apply when retrieving recommended action summaries. Filters can be based on resource type, action type, account ID, and other criteria.
   *
   * @public
   */
  filters?: RecommendedActionFilter[] | undefined;

  /**
   * The maximum number of recommended action summaries to return in a single response. Valid range is 1-1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used for pagination to retrieve the next set of results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Aggregate totals for a group of recommended actions, including count and estimated monthly savings.
 *
 * @public
 */
export interface RecommendedActionTotal {
  /**
   * The total number of recommended actions in this group.
   *
   * @public
   */
  recommendedActionCount: number | undefined;

  /**
   * Contains information about estimated monthly cost savings.
   *
   * @public
   */
  estimatedMonthlySavings: EstimatedMonthlySavings | undefined;
}

/**
 * Summary information about recommended actions, grouped by specific criteria with totals and counts.
 *
 * @public
 */
export interface RecommendedActionSummary {
  /**
   * The grouping key used to categorize the recommended actions in this summary.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Aggregate totals for the recommended actions in this group, including count and estimated savings.
   *
   * @public
   */
  total: RecommendedActionTotal | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionSummariesResponse {
  /**
   * The summary of recommended actions that match the specified criteria.
   *
   * @public
   */
  recommendedActionSummaries?: RecommendedActionSummary[] | undefined;

  /**
   * A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags associated with the specified resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RollbackAutomationEventRequest {
  /**
   * The ID of the automation event to roll back.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RollbackAutomationEventResponse {
  /**
   * The ID of the automation event being rolled back.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The current status of the rollback operation.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;
}

/**
 * @public
 */
export interface StartAutomationEventRequest {
  /**
   * The ID of the recommended action to automate.
   *
   * @public
   */
  recommendedActionId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationEventResponse {
  /**
   * The ID of the recommended action being automated.
   *
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * The ID of the automation event.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The current status of the automation event.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The revision number of the automation rule to tag. This ensures you're tagging the correct version of the rule.
   *
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * The ARN of the resource to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The revision number of the automation rule to untag. This ensures you're untagging the correct version of the rule.
   *
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAutomationRuleRequest {
  /**
   * The ARN of the rule to update.
   *
   * @public
   */
  ruleArn: string | undefined;

  /**
   * The revision number of the rule to update.
   *
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * The updated name of the automation rule. Must be 1-128 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the automation rule. Can be up to 1024 characters long and contain alphanumeric characters, underscores, hyphens, spaces, and certain special characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated type of automation rule. Can be either OrganizationRule for organization-wide rules or AccountRule for account-specific rules.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * Updated configuration settings for organization-wide rules, including rule application order and target account IDs.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * The updated priority level of the automation rule, used to determine execution order when multiple rules apply to the same resource.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * Updated list of recommended action types that this rule can execute, such as SnapshotAndDeleteUnattachedEbsVolume or UpgradeEbsVolumeType.
   *
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The updated schedule configuration for when the automation rule should execute, including cron expression, timezone, and execution window.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The updated status of the automation rule. Can be Active or Inactive.
   *
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleResponse {
  /**
   * The ARN of the updated rule.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The new revision number of the updated rule.
   *
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * The updated name of the automation rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the automation rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated type of automation rule.
   *
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * The updated organization configuration settings.
   *
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * The updated priority level of the automation rule.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * The updated list of recommended action types.
   *
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.
   *
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * The updated schedule configuration.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The updated status of the automation rule.
   *
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * The timestamp when the automation rule was originally created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * The timestamp when the automation rule was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentConfigurationRequest {
  /**
   * The desired enrollment status.
   *
   * - Active - Enables the Automation feature for your account.
   * - Inactive - Disables the Automation feature for your account and stops all of your automation rules. If you opt in again later, all rules will be inactive, and you must enable the rules you want to run. You must wait at least 24 hours after opting out to opt in again.
   *
   * > **Note:**
   * >
   * > The `Pending` and `Failed` options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account.
   * >
   * > If you are a member account, your account must be disassociated from your organization’s management account before you can disable Automation. Contact your administrator to make this change.
   *
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentConfigurationResponse {
  /**
   * The updated enrollment status.
   *
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * The reason for the updated enrollment status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the enrollment configuration was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;
}
