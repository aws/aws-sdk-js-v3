// smithy-typescript generated code
import type {
  DashboardType,
  DateTimeType,
  Dimension,
  Granularity,
  GroupDefinitionType,
  HealthStatusCode,
  MatchOption,
  MetricName,
  ScheduleState,
  StatusReason,
  VisualType,
} from "./enums";

/**
 * A key-value pair that can be attached to a dashboard for organization and management purposes.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key of the tag to be attached to the dashboard resource.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag to be attached to the dashboard resource.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Defines the visual representation settings for widget data, including the visualization type, styling options, and display preferences for different metric types.
 *
 * @public
 */
export interface GraphDisplayConfig {
  /**
   * The type of visualization to use for the data.
   *
   * @public
   */
  visualType: VisualType | undefined;
}

/**
 * Configuration structure for customizing the tabular display of widget data.
 *
 * @public
 */
export interface TableDisplayConfigStruct {}

/**
 * Defines how the widget's data should be visualized, including chart type, color schemes, axis configurations, and other display preferences.
 *
 * @public
 */
export type DisplayConfig =
  | DisplayConfig.GraphMember
  | DisplayConfig.TableMember
  | DisplayConfig.$UnknownMember;

/**
 * @public
 */
export namespace DisplayConfig {
  /**
   * The configuration for graphical display of the widget data, including chart type and visual options.
   *
   * @public
   */
  export interface GraphMember {
    graph: Record<string, GraphDisplayConfig>;
    table?: never;
    $unknown?: never;
  }

  /**
   * The configuration for tabular display of the widget data.
   *
   * @public
   */
  export interface TableMember {
    graph?: never;
    table: TableDisplayConfigStruct;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    graph?: never;
    table?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    graph: (value: Record<string, GraphDisplayConfig>) => T;
    table: (value: TableDisplayConfigStruct) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the values and match options for cost category-based filtering in cost and usage queries.
 *
 * @public
 */
export interface CostCategoryValues {
  /**
   * The key of the cost category to filter on.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The values to match for the specified cost category key.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * The match options for cost category values, such as `EQUALS`, `CONTAINS`, `STARTS_WITH`, or `ENDS_WITH`.
   *
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * Specifies the values and match options for dimension-based filtering in cost and usage queries.
 *
 * @public
 */
export interface DimensionValues {
  /**
   * The key of the dimension to filter on (for example, `SERVICE`, `USAGE_TYPE`, or `OPERATION`).
   *
   * @public
   */
  key: Dimension | undefined;

  /**
   * The values to match for the specified dimension key.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match options for dimension values, such as `EQUALS`, `CONTAINS`, `STARTS_WITH`, or `ENDS_WITH`.
   *
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * Specifies tag-based filtering options for cost and usage queries.
 *
 * @public
 */
export interface TagValues {
  /**
   * The key of the tag to filter on.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The values to match for the specified tag key.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * The match options for tag values, such as `EQUALS`, `CONTAINS`, `STARTS_WITH`, or `ENDS_WITH`.
   *
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * Specifies how to group cost and usage data.
 *
 * @public
 */
export interface GroupDefinition {
  /**
   * The key to use for grouping cost and usage data.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The type of grouping to apply.
   *
   * @public
   */
  type?: GroupDefinitionType | undefined;
}

/**
 * Represents a point in time that can be specified as either an absolute date (for example, "2025-07-01") or a relative time period using ISO 8601 duration format (for example, "-P3M" for three months ago).
 *
 * @public
 */
export interface DateTimeValue {
  /**
   * The type of date/time value: `ABSOLUTE` for specific dates or `RELATIVE` for dynamic time periods.
   *
   * @public
   */
  type: DateTimeType | undefined;

  /**
   * The actual date/time value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Defines a time period with explicit start and end times for data queries.
 *
 * @public
 */
export interface DateTimeRange {
  /**
   * The start time of the date range for querying data.
   *
   * @public
   */
  startTime: DateTimeValue | undefined;

  /**
   * The end time of the date range for querying data.
   *
   * @public
   */
  endTime: DateTimeValue | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * The ARN of the newly created dashboard.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Defines the active time period for execution of the scheduled report.
 *
 * @public
 */
export interface SchedulePeriod {
  /**
   * The start time of the schedule period. If not specified, defaults to the time of the create or update request. The start time cannot be more than 5 minutes before the time of the request.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the schedule period. If not specified, defaults to 3 years from the time of the create or update request. The maximum allowed value is 3 years from the current time. Setting an end time beyond this limit returns a `ValidationException`.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Defines the schedule for a scheduled report, including the cron expression, time zone, active period, and the schedule state.
 *
 * @public
 */
export interface ScheduleConfig {
  /**
   * The schedule expression that specifies when to trigger the scheduled report run. This value must be a cron expression consisting of six fields separated by white spaces: `cron(minutes hours day_of_month month day_of_week year)`.
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The time zone for the schedule expression, for example, `UTC`.
   *
   * @public
   */
  scheduleExpressionTimeZone?: string | undefined;

  /**
   * The time period during which the schedule is active.
   *
   * @public
   */
  schedulePeriod?: SchedulePeriod | undefined;

  /**
   * The state of the schedule. `ENABLED` means the scheduled report runs according to its schedule expression. `DISABLED` means the scheduled report is paused and will not run until re-enabled.
   *
   * @public
   */
  state?: ScheduleState | undefined;
}

/**
 * Defines the configuration for creating a new scheduled report, including the dashboard, schedule, execution role, and optional widget settings.
 *
 * @public
 */
export interface ScheduledReportInput {
  /**
   * The name of the scheduled report.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dashboard to generate the scheduled report from.
   *
   * @public
   */
  dashboardArn: string | undefined;

  /**
   * The ARN of the IAM role that the scheduled report uses to execute. Amazon Web Services Billing and Cost Management Dashboards will assume this IAM role while executing the scheduled report.
   *
   * @public
   */
  scheduledReportExecutionRoleArn: string | undefined;

  /**
   * The schedule configuration that defines when and how often the report is generated. If the schedule state is not specified, it defaults to `ENABLED`.
   *
   * @public
   */
  scheduleConfig: ScheduleConfig | undefined;

  /**
   * A description of the scheduled report's purpose or contents.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of widget identifiers to include in the scheduled report. If not specified, all widgets in the dashboard are included.
   *
   * @public
   */
  widgetIds?: string[] | undefined;

  /**
   * The date range override to apply to widgets in the scheduled report.
   *
   * @public
   */
  widgetDateRangeOverride?: DateTimeRange | undefined;
}

/**
 * @public
 */
export interface CreateScheduledReportRequest {
  /**
   * The configuration for the scheduled report, including the dashboard to report on, the schedule, and the execution role that the service will use to generate the dashboard snapshot.
   *
   * @public
   */
  scheduledReport: ScheduledReportInput | undefined;

  /**
   * The tags to apply to the scheduled report resource for organization and management.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduledReportResponse {
  /**
   * The ARN of the newly created scheduled report.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * The ARN of the dashboard to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * The ARN of the dashboard that was deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledReportRequest {
  /**
   * The ARN of the scheduled report to delete.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledReportResponse {
  /**
   * The ARN of the scheduled report that was deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ExecuteScheduledReportRequest {
  /**
   * The ARN of the scheduled report to execute.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * When set to `true`, validates the scheduled report configuration without triggering an actual execution.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * Contains the health status information for a scheduled report, including the status code and any reasons for an unhealthy state.
 *
 * @public
 */
export interface HealthStatus {
  /**
   * The health status code. `HEALTHY` indicates the scheduled report is configured properly and has all required permissions to execute. `UNHEALTHY` indicates the scheduled report is unable to deliver the notification to the default Amazon EventBridge EventBus in your account and your action is needed. The reason for the unhealthy state is captured in the health status reasons.
   *
   * @public
   */
  statusCode: HealthStatusCode | undefined;

  /**
   * The timestamp when the health status was last refreshed.
   *
   * @public
   */
  lastRefreshedAt?: Date | undefined;

  /**
   * The list of reasons for the current health status. Only present when the status is `UNHEALTHY`.
   *
   * @public
   */
  statusReasons?: StatusReason[] | undefined;
}

/**
 * @public
 */
export interface ExecuteScheduledReportResponse {
  /**
   * The health status of the scheduled report after the execution request.
   *
   * @public
   */
  healthStatus?: HealthStatus | undefined;

  /**
   * Indicates whether the execution was successfully triggered.
   *
   * @public
   */
  executionTriggered?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDashboardRequest {
  /**
   * The ARN of the dashboard to retrieve. This is required to uniquely identify the dashboard.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The ARN of the dashboard whose resource-based policy you want to retrieve.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The ARN of the dashboard for which the resource-based policy was retrieved.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The JSON policy document that represents the dashboard's resource-based policy.
   *
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface GetScheduledReportRequest {
  /**
   * The ARN of the scheduled report to retrieve.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains the full configuration and metadata of a scheduled report.
 *
 * @public
 */
export interface ScheduledReport {
  /**
   * The ARN of the scheduled report.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the scheduled report.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dashboard associated with the scheduled report.
   *
   * @public
   */
  dashboardArn: string | undefined;

  /**
   * The ARN of the IAM role that the scheduled report uses to execute. Amazon Web Services Billing and Cost Management Dashboards will assume this IAM role while executing the scheduled report.
   *
   * @public
   */
  scheduledReportExecutionRoleArn: string | undefined;

  /**
   * The schedule configuration that defines when and how often the report is generated.
   *
   * @public
   */
  scheduleConfig: ScheduleConfig | undefined;

  /**
   * A description of the scheduled report's purpose or contents.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of widget identifiers included in the scheduled report.
   *
   * @public
   */
  widgetIds?: string[] | undefined;

  /**
   * The date range override applied to widgets in the scheduled report.
   *
   * @public
   */
  widgetDateRangeOverride?: DateTimeRange | undefined;

  /**
   * The timestamp when the scheduled report was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the scheduled report was last modified.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The timestamp of the most recent execution of the scheduled report.
   *
   * @public
   */
  lastExecutionAt?: Date | undefined;

  /**
   * The health status of the scheduled report at last refresh time.
   *
   * @public
   */
  healthStatus?: HealthStatus | undefined;
}

/**
 * @public
 */
export interface GetScheduledReportResponse {
  /**
   * The scheduled report configuration and metadata.
   *
   * @public
   */
  scheduledReport: ScheduledReport | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. Use the value returned in the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains basic information about a dashboard, including its ARN, name, type, and timestamps.
 *
 * @public
 */
export interface DashboardReference {
  /**
   * The ARN of the referenced dashboard.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the referenced dashboard.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the referenced dashboard.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The dashboard type.
   *
   * @public
   */
  type: DashboardType | undefined;

  /**
   * The timestamp when the dashboard was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dashboard was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * An array of dashboard references, containing basic information about each dashboard.
   *
   * @public
   */
  dashboards: DashboardReference[] | undefined;

  /**
   * The token to use to retrieve the next page of results. Not returned if there are no more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledReportsRequest {
  /**
   * The token for the next page of results. Use the value returned in the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 100. The default value is 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information for a scheduled report.
 *
 * @public
 */
export interface ScheduledReportSummary {
  /**
   * The ARN of the scheduled report.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the scheduled report.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dashboard associated with the scheduled report.
   *
   * @public
   */
  dashboardArn: string | undefined;

  /**
   * The schedule expression that defines when the report runs.
   *
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * The state of the schedule: `ENABLED` or `DISABLED`.
   *
   * @public
   */
  state: ScheduleState | undefined;

  /**
   * The health status of the scheduled report as of its last refresh time.
   *
   * @public
   */
  healthStatus: HealthStatus | undefined;

  /**
   * The time zone for the schedule expression, for example, `UTC`.
   *
   * @public
   */
  scheduleExpressionTimeZone?: string | undefined;

  /**
   * The list of widget identifiers included in the scheduled report.
   *
   * @public
   */
  widgetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListScheduledReportsResponse {
  /**
   * An array of scheduled report summaries, containing basic information about each scheduled report.
   *
   * @public
   */
  scheduledReports: ScheduledReportSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. Not returned if there are no more results to retrieve.
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
   * The unique identifier for the resource.
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
   * The list of tags associated with the specified dashboard resource.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
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
  resourceArn: string | undefined;

  /**
   * The tags to add to the dashboard resource.
   *
   * @public
   */
  resourceTags: ResourceTag[] | undefined;
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
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the dashboard resource.
   *
   * @public
   */
  resourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * The ARN of the updated dashboard.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledReportRequest {
  /**
   * The ARN of the scheduled report to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The new name for the scheduled report.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The new description for the scheduled report.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the dashboard to associate with the scheduled report.
   *
   * @public
   */
  dashboardArn?: string | undefined;

  /**
   * The ARN of the IAM role that the scheduled report uses to execute. Amazon Web Services Billing and Cost Management Dashboards will assume this IAM role while executing the scheduled report.
   *
   * @public
   */
  scheduledReportExecutionRoleArn?: string | undefined;

  /**
   * The updated schedule configuration for the report.
   *
   * @public
   */
  scheduleConfig?: ScheduleConfig | undefined;

  /**
   * The list of widget identifiers to include in the scheduled report. If not specified, all widgets in the dashboard are included.
   *
   * @public
   */
  widgetIds?: string[] | undefined;

  /**
   * The date range override to apply to widgets in the scheduled report.
   *
   * @public
   */
  widgetDateRangeOverride?: DateTimeRange | undefined;

  /**
   * Set to true to clear existing widgetIds.
   * @public
   */
  clearWidgetIds?: boolean | undefined;

  /**
   * Set to true to clear existing widgetDateRangeOverride.
   * @public
   */
  clearWidgetDateRangeOverride?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledReportResponse {
  /**
   * The ARN of the updated scheduled report.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Defines complex filtering conditions using logical operators (`AND`, `OR`, `NOT`) and various filter types.
 *
 * @public
 */
export interface Expression {
  /**
   * A list of expressions to combine with OR logic.
   *
   * @public
   */
  or?: Expression[] | undefined;

  /**
   * A list of expressions to combine with AND logic.
   *
   * @public
   */
  and?: Expression[] | undefined;

  /**
   * An expression to negate with NOT logic.
   *
   * @public
   */
  not?: Expression | undefined;

  /**
   * The dimension values to include in the filter expression.
   *
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * The tag values to include in the filter expression.
   *
   * @public
   */
  tags?: TagValues | undefined;

  /**
   * The cost category values to include in the filter expression.
   *
   * @public
   */
  costCategories?: CostCategoryValues | undefined;
}

/**
 * Defines the parameters for retrieving Amazon Web Services cost and usage data. Includes specifications for metrics, time periods, granularity, grouping dimensions, and filtering conditions.
 *
 * @public
 */
export interface CostAndUsageQuery {
  /**
   * The specific cost and usage metrics to retrieve.
   *
   * > **Note:** Valid values for CostAndUsageQuery metrics are `AmortizedCost`, `BlendedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `NormalizedUsageAmount`, `UnblendedCost`, and `UsageQuantity`.
   *
   * @public
   */
  metrics: MetricName[] | undefined;

  /**
   * The time period for which to retrieve data. Can be specified as absolute dates or relative time periods.
   *
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * The granularity of the retrieved data: `HOURLY`, `DAILY`, or `MONTHLY`.
   *
   * @public
   */
  granularity: Granularity | undefined;

  /**
   * Specifies how to group the retrieved data, such as by `SERVICE`, `ACCOUNT`, or `TAG`.
   *
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * The filter expression to be applied to the cost and usage data.
   *
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * Defines the parameters for querying Reserved Instance coverage data, including grouping options, metrics, and sorting preferences.
 *
 * @public
 */
export interface ReservationCoverageQuery {
  /**
   * Defines a time period with explicit start and end times for data queries.
   *
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * Specifies how to group the Reserved Instance coverage data, such as by service, Region, or instance type.
   *
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * The time granularity of the retrieved data: `HOURLY`, `DAILY`, or `MONTHLY`.
   *
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * Defines complex filtering conditions using logical operators (`AND`, `OR`, `NOT`) and various filter types.
   *
   * @public
   */
  filter?: Expression | undefined;

  /**
   * The coverage metrics to include in the results.
   *
   * > **Note:** Valid values for ReservationCoverageQuery metrics are `Hour`, `Unit`, and `Cost`.
   *
   * @public
   */
  metrics?: MetricName[] | undefined;
}

/**
 * Defines the parameters for querying Reserved Instance utilization data, including grouping options and time granularity.
 *
 * @public
 */
export interface ReservationUtilizationQuery {
  /**
   * Defines a time period with explicit start and end times for data queries.
   *
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * Specifies how to group the Reserved Instance utilization data, such as by service, Region, or instance type.
   *
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * The time granularity of the retrieved data: `HOURLY`, `DAILY`, or `MONTHLY`.
   *
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * Defines complex filtering conditions using logical operators (`AND`, `OR`, `NOT`) and various filter types.
   *
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * Defines the parameters for querying Savings Plans coverage data, including metrics, grouping options, and time granularity.
 *
 * @public
 */
export interface SavingsPlansCoverageQuery {
  /**
   * Defines a time period with explicit start and end times for data queries.
   *
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * The coverage metrics to include in the results.
   *
   * > **Note:** Valid value for SavingsPlansCoverageQuery metrics is `SpendCoveredBySavingsPlans`.
   *
   * @public
   */
  metrics?: MetricName[] | undefined;

  /**
   * The time granularity of the retrieved data: `HOURLY`, `DAILY`, or `MONTHLY`.
   *
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * Specifies how to group the Savings Plans coverage data, such as by service or instance family.
   *
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * Defines complex filtering conditions using logical operators (`AND`, `OR`, `NOT`) and various filter types.
   *
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * Defines the parameters for querying Savings Plans utilization data, including time granularity and sorting preferences.
 *
 * @public
 */
export interface SavingsPlansUtilizationQuery {
  /**
   * Defines a time period with explicit start and end times for data queries.
   *
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * The time granularity of the retrieved data: `HOURLY`, `DAILY`, or `MONTHLY`.
   *
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * Defines complex filtering conditions using logical operators (`AND`, `OR`, `NOT`) and various filter types.
   *
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * Defines the data retrieval parameters for a widget.
 *
 * @public
 */
export type QueryParameters =
  | QueryParameters.CostAndUsageMember
  | QueryParameters.ReservationCoverageMember
  | QueryParameters.ReservationUtilizationMember
  | QueryParameters.SavingsPlansCoverageMember
  | QueryParameters.SavingsPlansUtilizationMember
  | QueryParameters.$UnknownMember;

/**
 * @public
 */
export namespace QueryParameters {
  /**
   * The parameters for querying cost and usage data, including metrics, time range, granularity, grouping dimensions, and filters.
   *
   * @public
   */
  export interface CostAndUsageMember {
    costAndUsage: CostAndUsageQuery;
    savingsPlansCoverage?: never;
    savingsPlansUtilization?: never;
    reservationCoverage?: never;
    reservationUtilization?: never;
    $unknown?: never;
  }

  /**
   * The parameters for querying Savings Plans coverage data, showing how much of your eligible compute usage is covered by Savings Plans.
   *
   * @public
   */
  export interface SavingsPlansCoverageMember {
    costAndUsage?: never;
    savingsPlansCoverage: SavingsPlansCoverageQuery;
    savingsPlansUtilization?: never;
    reservationCoverage?: never;
    reservationUtilization?: never;
    $unknown?: never;
  }

  /**
   * The parameters for querying Savings Plans utilization data, showing how effectively your Savings Plans are being used.
   *
   * @public
   */
  export interface SavingsPlansUtilizationMember {
    costAndUsage?: never;
    savingsPlansCoverage?: never;
    savingsPlansUtilization: SavingsPlansUtilizationQuery;
    reservationCoverage?: never;
    reservationUtilization?: never;
    $unknown?: never;
  }

  /**
   * The parameters for querying Reserved Instance coverage data, showing how much of your eligible instance usage is covered by Reserved Instances.
   *
   * @public
   */
  export interface ReservationCoverageMember {
    costAndUsage?: never;
    savingsPlansCoverage?: never;
    savingsPlansUtilization?: never;
    reservationCoverage: ReservationCoverageQuery;
    reservationUtilization?: never;
    $unknown?: never;
  }

  /**
   * The parameters for querying Reserved Instance utilization data, showing how effectively your Reserved Instances are being used.
   *
   * @public
   */
  export interface ReservationUtilizationMember {
    costAndUsage?: never;
    savingsPlansCoverage?: never;
    savingsPlansUtilization?: never;
    reservationCoverage?: never;
    reservationUtilization: ReservationUtilizationQuery;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    costAndUsage?: never;
    savingsPlansCoverage?: never;
    savingsPlansUtilization?: never;
    reservationCoverage?: never;
    reservationUtilization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    costAndUsage: (value: CostAndUsageQuery) => T;
    savingsPlansCoverage: (value: SavingsPlansCoverageQuery) => T;
    savingsPlansUtilization: (value: SavingsPlansUtilizationQuery) => T;
    reservationCoverage: (value: ReservationCoverageQuery) => T;
    reservationUtilization: (value: ReservationUtilizationQuery) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the complete configuration for a widget, including data retrieval settings and visualization preferences.
 *
 * @public
 */
export interface WidgetConfig {
  /**
   * The parameters that define what data the widget should retrieve and how it should be filtered or grouped.
   *
   * @public
   */
  queryParameters: QueryParameters | undefined;

  /**
   * The configuration that determines how the retrieved data should be visualized in the widget.
   *
   * @public
   */
  displayConfig: DisplayConfig | undefined;
}

/**
 * A configurable visualization component within a dashboard that displays specific cost and usage metrics. Each widget can show data as charts or tables and includes settings for data querying, filtering, and visual presentation.
 *
 * @public
 */
export interface Widget {
  /**
   * The unique identifier for the widget.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The title of the widget.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the widget's purpose or the data it displays.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The width of the widget in column spans. The dashboard layout consists of a grid system.
   *
   * @public
   */
  width?: number | undefined;

  /**
   * The height of the widget in row spans. The dashboard layout consists of a grid system.
   *
   * @public
   */
  height?: number | undefined;

  /**
   * Specifies the starting column position of the widget in the dashboard's grid layout. Used to control widget placement.
   *
   * @public
   */
  horizontalOffset?: number | undefined;

  /**
   * An array of configurations that define the data queries and display settings for the widget.
   *
   * @public
   */
  configs: WidgetConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * The name of the dashboard. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the dashboard's purpose or contents.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of widget configurations that define the visualizations to be displayed in the dashboard. Each dashboard can contain up to 20 widgets.
   *
   * @public
   */
  widgets: Widget[] | undefined;

  /**
   * The tags to apply to the dashboard resource for organization and management.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface GetDashboardResponse {
  /**
   * The ARN of the retrieved dashboard.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the retrieved dashboard.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the retrieved dashboard.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates the dashboard type.
   *
   * @public
   */
  type: DashboardType | undefined;

  /**
   * An array of widget configurations that make up the dashboard.
   *
   * @public
   */
  widgets: Widget[] | undefined;

  /**
   * The timestamp when the dashboard was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dashboard was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * The ARN of the dashboard to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The new name for the dashboard.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new description for the dashboard.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated array of widget configurations for the dashboard. Replaces all existing widgets.
   *
   * @public
   */
  widgets?: Widget[] | undefined;
}
