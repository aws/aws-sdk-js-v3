// smithy-typescript generated code
import {
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
 * <p> Contains information about an Amazon Web Services account's enrollment and association status with Compute Optimizer Automation. </p>
 * @public
 */
export interface AccountInfo {
  /**
   * <p> The ID of the Amazon Web Services account. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p> The enrollment status of the account: Active, Inactive, Pending, or Failed. </p>
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * <p>Specifies whether the management account can create Automation rules that implement optimization actions for this account. </p>
   * @public
   */
  organizationRuleMode: OrganizationRuleMode | undefined;

  /**
   * <p>The reason for the current Automation enrollment status. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the account's Automation enrollment status was last updated. </p>
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsRequest {
  /**
   * <p> The IDs of the member accounts to associate. You can specify up to 50 account IDs. </p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p> A unique identifier to ensure idempotency of the request. Valid for 24 hours after creation. </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsResponse {
  /**
   * <p> The IDs of the member accounts that were successfully associated. </p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p> Any errors that occurred during the association process. </p>
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * <p> Contains information about estimated monthly cost savings. </p>
 * @public
 */
export interface EstimatedMonthlySavings {
  /**
   * <p> The currency of the estimated savings. </p>
   * @public
   */
  currency: string | undefined;

  /**
   * <p> The estimated monthly savings before applying any discounts. </p>
   * @public
   */
  beforeDiscountSavings: number | undefined;

  /**
   * <p> The estimated monthly savings after applying any discounts. </p>
   * @public
   */
  afterDiscountSavings: number | undefined;

  /**
   * <p>The mode used to calculate savings, either BeforeDiscount or AfterDiscount.</p>
   * @public
   */
  savingsEstimationMode: SavingsEstimationMode | undefined;
}

/**
 * <p> Contains information about an automation event. </p>
 * @public
 */
export interface AutomationEvent {
  /**
   * <p> The unique identifier for the automation event. </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p> A description of the automation event. </p>
   * @public
   */
  eventDescription?: string | undefined;

  /**
   * <p> The type of automation event. </p>
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * <p> The current status of the automation event. </p>
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * <p> The reason for the current event status. </p>
   * @public
   */
  eventStatusReason?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the resource affected by the automation event. </p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p> The ID of the resource affected by the automation event. </p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p> The ID of the recommended action associated with this automation event. </p>
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID associated with the automation event. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p> The Amazon Web Services Region where the automation event occurred. </p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p> The ID of the automation rule that triggered this event. </p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p> The type of resource affected by the automation event. </p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The timestamp when the automation event was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p> The timestamp when the automation event completed. </p>
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * <p> The estimated monthly cost savings associated with this automation event. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * <p> A filter to apply when listing automation events. </p>
 * @public
 */
export interface AutomationEventFilter {
  /**
   * <p> The name of the filter to apply. </p>
   * @public
   */
  name: AutomationEventFilterName | undefined;

  /**
   * <p> The values to use for the specified filter. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> Contains information about a step in an automation event. </p>
 * @public
 */
export interface AutomationEventStep {
  /**
   * <p> The ID of the automation event this step belongs to. </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p> The unique identifier for this step. </p>
   * @public
   */
  stepId?: string | undefined;

  /**
   * <p> The type of step. </p>
   * @public
   */
  stepType?: StepType | undefined;

  /**
   * <p> The current status of the step. </p>
   * @public
   */
  stepStatus?: StepStatus | undefined;

  /**
   * <p>The unique identifier of the resource being acted upon in this step.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The timestamp when this automation event step started execution.</p>
   * @public
   */
  startTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when this automation event step completed execution.</p>
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * <p>A key-value pair used to categorize and group summary data for analysis and reporting.</p>
 * @public
 */
export interface SummaryDimension {
  /**
   * <p>The dimension key used for categorizing summary data.</p>
   * @public
   */
  key: SummaryDimensionKey | undefined;

  /**
   * <p>The specific value for this dimension key used in the summary grouping.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Defines a time range with inclusive start time and exclusive end time for filtering and analysis.</p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>The start time of the period, inclusive. Events at or after this time are included.</p>
   * @public
   */
  startTimeInclusive?: Date | undefined;

  /**
   * <p>The end time of the period, exclusive. Events before this time are included.</p>
   * @public
   */
  endTimeExclusive?: Date | undefined;
}

/**
 * <p>Aggregate totals for automation events, including counts and estimated savings.</p>
 * @public
 */
export interface SummaryTotals {
  /**
   * <p>The total number of automation events in this summary group.</p>
   * @public
   */
  automationEventCount?: number | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * <p> A summary of automation events grouped by specified dimensions. </p>
 * @public
 */
export interface AutomationEventSummary {
  /**
   * <p>The key identifier for this summary grouping.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The dimensions used to group this summary, such as event status.</p>
   * @public
   */
  dimensions?: SummaryDimension[] | undefined;

  /**
   * <p>The time period covered by this summary, with inclusive start time and exclusive end time.</p>
   * @public
   */
  timePeriod?: TimePeriod | undefined;

  /**
   * <p>The aggregated totals for this summary, including event count and estimated savings.</p>
   * @public
   */
  total?: SummaryTotals | undefined;
}

/**
 * <p>Configuration settings for organization-wide automation rules.</p>
 * @public
 */
export interface OrganizationConfiguration {
  /**
   * <p>Specifies when organization rules should be applied relative to account rules.</p>
   * @public
   */
  ruleApplyOrder?: RuleApplyOrder | undefined;

  /**
   * <p>List of specific Amazon Web Services account IDs where the organization rule should be applied.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * <p>Configuration for scheduling when automation rules should execute, including timing and execution windows.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The expression that defines when the schedule runs. <code>cron</code> expression is supported. A <code>cron</code> expression consists of six fields separated by white spaces: (<code>minutes</code> <code>hours</code> <code>day_of_month</code> <code>month</code> <code>day_of_week</code> <code>year</code>)</p> <note> <p>You can schedule rules to run at most once per day. Your cron expression must use specific values (not wildcards) for the minutes and hours fields. For example: (<code>30 12 * * *</code>) runs daily at 12:30 PM UTC.</p> </note>
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * <p>The timezone to use when interpreting the schedule expression.</p>
   * @public
   */
  scheduleExpressionTimezone?: string | undefined;

  /**
   * <p>The time window in minutes during which the automation rule can start implementing recommended actions.</p>
   * @public
   */
  executionWindowInMinutes?: number | undefined;
}

/**
 * <p>Represents a complete automation rule configuration including criteria, schedule, and execution settings.</p>
 * @public
 */
export interface AutomationRule {
  /**
   * <p>The Amazon Resource Name (ARN) of the automation rule.</p>
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * <p>The unique identifier of the automation rule.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The name of the automation rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of automation rule (OrganizationRule or AccountRule).</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The revision number of the automation rule.</p>
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID that owns this automation rule.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Configuration settings for organization-wide rules.</p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>List of recommended action types that this rule can execute.</p>
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * <p>The schedule configuration for when the automation rule should execute.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The current status of the automation rule (Active or Inactive).</p>
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * <p>The timestamp when the automation rule was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the automation rule was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>Defines a condition for filtering based on integer values with comparison operators.</p>
 * @public
 */
export interface IntegerCriteriaCondition {
  /**
   * <p>The comparison operator to use, such as equals, greater than, less than, etc.</p>
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * <p>The list of integer values to compare against using the specified comparison operator.</p>
   * @public
   */
  values?: number[] | undefined;
}

/**
 * <p>Criteria condition for filtering based on string values, including comparison operators and target values.</p>
 * @public
 */
export interface StringCriteriaCondition {
  /**
   * <p>The comparison operator used to evaluate the string criteria, such as equals, not equals, or contains.</p>
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * <p>List of string values to compare against when applying the criteria condition.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Defines a condition for filtering based on double/floating-point numeric values with comparison operators.</p>
 * @public
 */
export interface DoubleCriteriaCondition {
  /**
   * <p>The comparison operator to use, such as equals, greater than, less than, etc.</p>
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * <p>The list of double values to compare against using the specified comparison operator.</p>
   * @public
   */
  values?: number[] | undefined;
}

/**
 * <p>Criteria condition for filtering resources based on their tags, including comparison operators and values.</p>
 * @public
 */
export interface ResourceTagsCriteriaCondition {
  /**
   * <p>The comparison operator used to evaluate the tag criteria, such as equals, not equals, or contains.</p>
   * @public
   */
  comparison?: ComparisonOperator | undefined;

  /**
   * <p>The tag key to use for comparison when filtering resources.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>List of tag values to compare against when filtering resources.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
 * @public
 */
export interface Criteria {
  /**
   * <p>Filter criteria for Amazon Web Services regions where resources must be located.</p>
   * @public
   */
  region?: StringCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for specific resource ARNs to include or exclude.</p>
   * @public
   */
  resourceArn?: StringCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for EBS volume types, such as gp2, gp3, io1, io2, st1, or sc1.</p>
   * @public
   */
  ebsVolumeType?: StringCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for EBS volume sizes in gibibytes (GiB).</p>
   * @public
   */
  ebsVolumeSizeInGib?: IntegerCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for estimated monthly cost savings from the recommended action.</p>
   * @public
   */
  estimatedMonthlySavings?: DoubleCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for resource tags, allowing filtering by tag key and value combinations.</p>
   * @public
   */
  resourceTag?: ResourceTagsCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria for the lookback period in days used to analyze resource utilization.</p>
   * @public
   */
  lookBackPeriodInDays?: IntegerCriteriaCondition[] | undefined;

  /**
   * <p>Filter criteria indicating whether the recommended action requires a resource restart.</p>
   * @public
   */
  restartNeeded?: StringCriteriaCondition[] | undefined;
}

/**
 * <p>A key-value pair used to categorize and organize Amazon Web Services resources and automation rules.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key, which can be up to 128 characters long.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value, which can be up to 256 characters long.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleRequest {
  /**
   * <p> The name of the automation rule. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A description of the automation rule. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The type of rule. </p> <note> <p>Only the management account or a delegated administrator can set the ruleType to be OrganizationRule.</p> </note>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p> Configuration for organization-level rules. Required for OrganizationRule type. </p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules. </p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p> The types of recommended actions this rule will automate. </p>
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * <p>A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p> The schedule for when the rule should run. </p>
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * <p>The status of the rule </p>
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * <p> The tags to associate with the rule. </p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p> A unique identifier to ensure idempotency of the request. </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the created rule. </p>
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * <p> The unique identifier of the created rule. </p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The name of the automation rule. Must be 1-128 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the automation rule. Can be up to 1024 characters long and contain alphanumeric characters, underscores, hyphens, spaces, and certain special characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of automation rule. Can be either OrganizationRule for organization-wide rules or AccountRule for account-specific rules.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The revision number of the automation rule. This is incremented each time the rule is updated.</p>
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * <p>Configuration settings for organization-wide rules, including rule application order and target account IDs.</p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>The priority level of the automation rule, used to determine execution order when multiple rules apply to the same resource.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>List of recommended action types that this rule can execute, such as SnapshotAndDeleteUnattachedEbsVolume or UpgradeEbsVolumeType.</p>
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>The schedule configuration for when the automation rule should execute, including cron expression, timezone, and execution window.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The current status of the automation rule. Can be Active or Inactive.</p>
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * <p>A list of key-value pairs used to categorize and organize the automation rule. Maximum of 200 tags allowed.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The timestamp when the automation rule was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomationRuleRequest {
  /**
   * <p> The ARN of the rule to delete. </p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p> The revision number of the rule to delete. </p>
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * <p> A unique identifier to ensure idempotency of the request. </p>
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
   * <p> The IDs of the member accounts to disassociate. </p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p> A unique identifier to ensure idempotency of the request. </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsResponse {
  /**
   * <p> The IDs of the member accounts that were successfully disassociated. </p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p> Any errors that occurred during the disassociation process. </p>
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAutomationEventRequest {
  /**
   * <p> The ID of the automation event to retrieve. </p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationEventResponse {
  /**
   * <p>The ID of the automation event to retrieve.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>A description of the automation event.</p>
   * @public
   */
  eventDescription?: string | undefined;

  /**
   * <p>The type of automation event.</p>
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * <p>The current status of the automation event.</p>
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * <p>The reason for the current event status.</p>
   * @public
   */
  eventStatusReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource affected by the automation event.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The ID of the resource affected by the automation event.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ID of the recommended action associated with this automation event.</p>
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the automation event.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the automation event occurred.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The ID of the automation rule that triggered this event.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The type of resource affected by the automation event.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The timestamp when the automation event was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the automation event completed.</p>
   * @public
   */
  completedTimestamp?: Date | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleRequest {
  /**
   * <p> The ARN of the rule to retrieve. </p>
   * @public
   */
  ruleArn: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the automation rule.</p>
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * <p>The unique identifier of the automation rule.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The name of the automation rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of automation rule.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The revision number of the automation rule.</p>
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID that owns this automation rule.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Configuration settings for organization-wide automation rules.</p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>List of recommended action types that this rule can execute.</p>
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>Configuration for scheduling when automation rules should execute, including timing and execution windows.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The current status of the automation rule (Active or Inactive).</p>
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * <p>The tags associated with the automation rule.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The timestamp when the automation rule was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the automation rule was last updated.</p>
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
   * <p> The current enrollment status. </p>
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * <p> The reason for the current enrollment status. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Specifies whether the management account can create Automation rules that implement optimization actions for this account. </p>
   * @public
   */
  organizationRuleMode?: OrganizationRuleMode | undefined;

  /**
   * <p> The timestamp of the last update to the enrollment configuration. </p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * <p> The maximum number of results to return in a single call. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The token for the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * <p> The list of accounts in your organization enrolled in Compute Optimizer </p>
   * @public
   */
  accounts: AccountInfo[] | undefined;

  /**
   * <p> The token to use to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventsRequest {
  /**
   * <p> The filters to apply to the list of automation events. </p>
   * @public
   */
  filters?: AutomationEventFilter[] | undefined;

  /**
   * <p> The start of the time range to query for events. </p>
   * @public
   */
  startTimeInclusive?: Date | undefined;

  /**
   * <p> The end of the time range to query for events. </p>
   * @public
   */
  endTimeExclusive?: Date | undefined;

  /**
   * <p> The maximum number of results to return in a single call. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The token for the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventsResponse {
  /**
   * <p> The list of automation events that match the specified criteria. </p>
   * @public
   */
  automationEvents?: AutomationEvent[] | undefined;

  /**
   * <p> The token to use to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventStepsRequest {
  /**
   * <p> The ID of the automation event. </p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The maximum number of automation event steps to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventStepsResponse {
  /**
   * <p> The list of steps for the specified automation event. </p>
   * @public
   */
  automationEventSteps?: AutomationEventStep[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventSummariesRequest {
  /**
   * <p> The filters to apply to the list of automation event summaries. </p>
   * @public
   */
  filters?: AutomationEventFilter[] | undefined;

  /**
   * <p>The start date for filtering automation event summaries, inclusive. Events created on or after this date will be included.</p>
   * @public
   */
  startDateInclusive?: string | undefined;

  /**
   * <p>The end date for filtering automation event summaries, exclusive. Events created before this date will be included.</p>
   * @public
   */
  endDateExclusive?: string | undefined;

  /**
   * <p>The maximum number of automation event summaries to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationEventSummariesResponse {
  /**
   * <p> The list of automation event summaries that match the specified criteria. </p>
   * @public
   */
  automationEventSummaries?: AutomationEventSummary[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Defines the scope for organization-level rules when previewing matching actions.</p>
 * @public
 */
export interface OrganizationScope {
  /**
   * <p>List of Amazon Web Services account IDs to include in the organization scope.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewRequest {
  /**
   * <p> The type of rule. </p> <note> <p>Only the management account or a delegated administrator can set the ruleType to be OrganizationRule.</p> </note>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p> The organizational scope for the rule preview. </p>
   * @public
   */
  organizationScope?: OrganizationScope | undefined;

  /**
   * <p> The types of recommended actions to include in the preview. </p>
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * <p>A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>The maximum number of automation rule preview results to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Configuration details for an Amazon EBS volume.</p>
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * <p>The EBS volume type, such as gp2, gp3, io1, io2, st1, or sc1.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The size of the EBS volume in gibibytes (GiB).</p>
   * @public
   */
  sizeInGib?: number | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) provisioned for the volume.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput in MiB/s provisioned for the volume (applicable to gp3, io1, and io2bx volumes).</p>
   * @public
   */
  throughput?: number | undefined;
}

/**
 * <p>Represents an Amazon EBS volume with its configuration and snapshot usage information.</p>
 * @public
 */
export interface EbsVolume {
  /**
   * <p>The configuration details of the EBS volume, including type, size, IOPS, and throughput.</p>
   * @public
   */
  configuration?: EbsVolumeConfiguration | undefined;
}

/**
 * <p>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</p>
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
   * <p>Detailed configuration information specific to EBS volumes, including volume type, size, IOPS, and throughput settings.</p>
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
 * <p>Contains the results of previewing an automation rule against available recommendations.</p>
 * @public
 */
export interface PreviewResult {
  /**
   * <p>The ID of the recommended action being previewed.</p>
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource affected by the recommended action.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The ID of the resource affected by the recommended action.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the resource is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The type of resource being evaluated.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The number of days of historical data used to analyze the resource.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>The type of recommended action being previewed.</p>
   * @public
   */
  recommendedActionType?: RecommendedActionType | undefined;

  /**
   * <p>A summary of the resource's current configuration.</p>
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * <p>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</p>
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>A summary of the resource's recommended configuration.</p>
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * <p>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</p>
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>Indicates whether implementing the recommended action requires a resource restart.</p>
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  resourceTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewResponse {
  /**
   * <p> The list of actions that would be taken based on the specified criteria. </p>
   * @public
   */
  previewResults?: PreviewResult[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewSummariesRequest {
  /**
   * <p>The type of rule.</p>
   * @public
   */
  ruleType: RuleType | undefined;

  /**
   * <p>The organizational scope for the rule preview.</p>
   * @public
   */
  organizationScope?: OrganizationScope | undefined;

  /**
   * <p>The types of recommended actions to include in the preview.</p>
   * @public
   */
  recommendedActionTypes: RecommendedActionType[] | undefined;

  /**
   * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>The maximum number of automation rule preview summaries to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Aggregate totals for automation rule preview results, including count and estimated savings.</p>
 * @public
 */
export interface RulePreviewTotal {
  /**
   * <p>The total number of recommended actions matching the rule preview configuration.</p>
   * @public
   */
  recommendedActionCount: number | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings: EstimatedMonthlySavings | undefined;
}

/**
 * <p>Contains a summary of preview results for an automation rule.</p>
 * @public
 */
export interface PreviewResultSummary {
  /**
   * <p>The key identifier for this preview result summary.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Aggregate totals for automation rule preview results, including count and estimated savings.</p>
   * @public
   */
  total: RulePreviewTotal | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulePreviewSummariesResponse {
  /**
   * <p>The list of automation rule preview summaries that match the specified criteria.</p>
   * @public
   */
  previewResultSummaries?: PreviewResultSummary[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to narrow down results based on specific criteria.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter field to apply.</p>
   * @public
   */
  name: AutomationRuleFilterName | undefined;

  /**
   * <p>The list of values to filter by for the specified filter field.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * <p> The filters to apply to the list of automation rules. </p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of automation rules to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * <p> The list of automation rules that match the specified criteria. </p>
   * @public
   */
  automationRules?: AutomationRule[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to narrow down recommended action results based on specific criteria.</p>
 * @public
 */
export interface RecommendedActionFilter {
  /**
   * <p>The name of the filter field to apply.</p>
   * @public
   */
  name: RecommendedActionFilterName | undefined;

  /**
   * <p>List of filter values to match against the specified filter name. Used to narrow down recommended actions based on specific criteria.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsRequest {
  /**
   * <p> The filters to apply to the list of recommended actions. </p>
   * @public
   */
  filters?: RecommendedActionFilter[] | undefined;

  /**
   * <p>The maximum number of recommended actions to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about a recommended action that can be applied to optimize an Amazon Web Services resource.</p>
 * @public
 */
export interface RecommendedAction {
  /**
   * <p>The unique identifier of the recommended action.</p>
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the recommendation applies to.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The ID of the resource that the recommendation applies to.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the resource is located.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The type of resource being evaluated.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The number of days of historical data used to generate the recommendation.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>The type of action being recommended.</p>
   * @public
   */
  recommendedActionType?: RecommendedActionType | undefined;

  /**
   * <p>A summary of the resource's current configuration.</p>
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * <p>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</p>
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>A summary of the resource's recommended configuration.</p>
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * <p>Detailed configuration information for a specific Amazon Web Services resource, with type-specific details.</p>
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>Indicates whether implementing the recommended action requires a resource restart.</p>
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  resourceTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsResponse {
  /**
   * <p> The list of recommended actions that match the specified criteria. </p>
   * @public
   */
  recommendedActions?: RecommendedAction[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionSummariesRequest {
  /**
   * <p>A list of filters to apply when retrieving recommended action summaries. Filters can be based on resource type, action type, account ID, and other criteria.</p>
   * @public
   */
  filters?: RecommendedActionFilter[] | undefined;

  /**
   * <p>The maximum number of recommended action summaries to return in a single response. Valid range is 1-1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token used for pagination to retrieve the next set of results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Aggregate totals for a group of recommended actions, including count and estimated monthly savings.</p>
 * @public
 */
export interface RecommendedActionTotal {
  /**
   * <p>The total number of recommended actions in this group.</p>
   * @public
   */
  recommendedActionCount: number | undefined;

  /**
   * <p> Contains information about estimated monthly cost savings. </p>
   * @public
   */
  estimatedMonthlySavings: EstimatedMonthlySavings | undefined;
}

/**
 * <p>Summary information about recommended actions, grouped by specific criteria with totals and counts.</p>
 * @public
 */
export interface RecommendedActionSummary {
  /**
   * <p>The grouping key used to categorize the recommended actions in this summary.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Aggregate totals for the recommended actions in this group, including count and estimated savings.</p>
   * @public
   */
  total: RecommendedActionTotal | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionSummariesResponse {
  /**
   * <p> The summary of recommended actions that match the specified criteria. </p>
   * @public
   */
  recommendedActionSummaries?: RecommendedActionSummary[] | undefined;

  /**
   * <p>A token used for pagination. If present, indicates there are more results available and can be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The ARN of the resource to list tags for. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> The list of tags associated with the specified resource. </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RollbackAutomationEventRequest {
  /**
   * <p> The ID of the automation event to roll back. </p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RollbackAutomationEventResponse {
  /**
   * <p> The ID of the automation event being rolled back. </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p> The current status of the rollback operation. </p>
   * @public
   */
  eventStatus?: EventStatus | undefined;
}

/**
 * @public
 */
export interface StartAutomationEventRequest {
  /**
   * <p> The ID of the recommended action to automate. </p>
   * @public
   */
  recommendedActionId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomationEventResponse {
  /**
   * <p>The ID of the recommended action being automated.</p>
   * @public
   */
  recommendedActionId?: string | undefined;

  /**
   * <p>The ID of the automation event.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>The current status of the automation event.</p>
   * @public
   */
  eventStatus?: EventStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The ARN of the resource to tag. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The revision number of the automation rule to tag. This ensures you're tagging the correct version of the rule.</p>
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * <p> The tags to add to the resource. </p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
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
   * <p> The ARN of the resource to untag. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The revision number of the automation rule to untag. This ensures you're untagging the correct version of the rule.</p>
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * <p> The keys of the tags to remove from the resource. </p>
   * @public
   */
  tagKeys: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
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
   * <p> The ARN of the rule to update. </p>
   * @public
   */
  ruleArn: string | undefined;

  /**
   * <p> The revision number of the rule to update. </p>
   * @public
   */
  ruleRevision: number | undefined;

  /**
   * <p>The updated name of the automation rule. Must be 1-128 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the automation rule. Can be up to 1024 characters long and contain alphanumeric characters, underscores, hyphens, spaces, and certain special characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated type of automation rule. Can be either OrganizationRule for organization-wide rules or AccountRule for account-specific rules.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>Updated configuration settings for organization-wide rules, including rule application order and target account IDs.</p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>The updated priority level of the automation rule, used to determine execution order when multiple rules apply to the same resource.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>Updated list of recommended action types that this rule can execute, such as SnapshotAndDeleteUnattachedEbsVolume or UpgradeEbsVolumeType.</p>
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>The updated schedule configuration for when the automation rule should execute, including cron expression, timezone, and execution window.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The updated status of the automation rule. Can be Active or Inactive.</p>
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleResponse {
  /**
   * <p> The ARN of the updated rule. </p>
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * <p> The new revision number of the updated rule. </p>
   * @public
   */
  ruleRevision?: number | undefined;

  /**
   * <p>The updated name of the automation rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the automation rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated type of automation rule.</p>
   * @public
   */
  ruleType?: RuleType | undefined;

  /**
   * <p>The updated organization configuration settings.</p>
   * @public
   */
  organizationConfiguration?: OrganizationConfiguration | undefined;

  /**
   * <p>The updated priority level of the automation rule.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>The updated list of recommended action types.</p>
   * @public
   */
  recommendedActionTypes?: RecommendedActionType[] | undefined;

  /**
   * <p> A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition. </p>
   * @public
   */
  criteria?: Criteria | undefined;

  /**
   * <p>The updated schedule configuration.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The updated status of the automation rule.</p>
   * @public
   */
  status?: RuleStatus | undefined;

  /**
   * <p>The timestamp when the automation rule was originally created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the automation rule was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentConfigurationRequest {
  /**
   * <p>The desired enrollment status. </p> <ul> <li> <p>Active - Enables the Automation feature for your account.</p> </li> <li> <p>Inactive - Disables the Automation feature for your account and stops all of your automation rules. If you opt in again later, all rules will be inactive, and you must enable the rules you want to run. You must wait at least 24 hours after opting out to opt in again.</p> </li> </ul> <note> <p>The <code>Pending</code> and <code>Failed</code> options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account.</p> <p>If you are a member account, your account must be disassociated from your organization’s management account before you can disable Automation. Contact your administrator to make this change.</p> </note>
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Must be 1-64 characters long and contain only alphanumeric characters, underscores, and hyphens.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentConfigurationResponse {
  /**
   * <p> The updated enrollment status. </p>
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * <p> The reason for the updated enrollment status. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p> The timestamp when the enrollment configuration was last updated. </p>
   * @public
   */
  lastUpdatedTimestamp: Date | undefined;
}
