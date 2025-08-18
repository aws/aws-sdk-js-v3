// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMDashboardsServiceException as __BaseException } from "./BCMDashboardsServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A key-value pair that can be attached to a dashboard for organization and management purposes.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key of the tag to be attached to the dashboard resource.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag to be attached to the dashboard resource.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VisualType = {
  BAR: "BAR",
  LINE: "LINE",
  STACK: "STACK",
} as const;

/**
 * @public
 */
export type VisualType = (typeof VisualType)[keyof typeof VisualType];

/**
 * <p>Defines the visual representation settings for widget data, including the visualization type, styling options, and display preferences for different metric types.</p>
 * @public
 */
export interface GraphDisplayConfig {
  /**
   * <p>The type of visualization to use for the data.</p>
   * @public
   */
  visualType: VisualType | undefined;
}

/**
 * <p>Configuration structure for customizing the tabular display of widget data.</p>
 * @public
 */
export interface TableDisplayConfigStruct {}

/**
 * <p>Defines how the widget's data should be visualized, including chart type, color schemes, axis configurations, and other display preferences.</p>
 * @public
 */
export type DisplayConfig = DisplayConfig.GraphMember | DisplayConfig.TableMember | DisplayConfig.$UnknownMember;

/**
 * @public
 */
export namespace DisplayConfig {
  /**
   * <p>The configuration for graphical display of the widget data, including chart type and visual options.</p>
   * @public
   */
  export interface GraphMember {
    graph: Record<string, GraphDisplayConfig>;
    table?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for tabular display of the widget data.</p>
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

  export interface Visitor<T> {
    graph: (value: Record<string, GraphDisplayConfig>) => T;
    table: (value: TableDisplayConfigStruct) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DisplayConfig, visitor: Visitor<T>): T => {
    if (value.graph !== undefined) return visitor.graph(value.graph);
    if (value.table !== undefined) return visitor.table(value.table);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const MatchOption = {
  ABSENT: "ABSENT",
  CASE_INSENSITIVE: "CASE_INSENSITIVE",
  CASE_SENSITIVE: "CASE_SENSITIVE",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * <p>Specifies the values and match options for cost category-based filtering in cost and usage queries.</p>
 * @public
 */
export interface CostCategoryValues {
  /**
   * <p>The key of the cost category to filter on.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The values to match for the specified cost category key.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>The match options for cost category values, such as <code>EQUALS</code>, <code>CONTAINS</code>, <code>STARTS_WITH</code>, or <code>ENDS_WITH</code>.</p>
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Dimension = {
  AZ: "AZ",
  BILLING_ENTITY: "BILLING_ENTITY",
  CACHE_ENGINE: "CACHE_ENGINE",
  COST_CATEGORY_NAME: "COST_CATEGORY_NAME",
  DATABASE_ENGINE: "DATABASE_ENGINE",
  DEPLOYMENT_OPTION: "DEPLOYMENT_OPTION",
  INSTANCE_TYPE: "INSTANCE_TYPE",
  INSTANCE_TYPE_FAMILY: "INSTANCE_TYPE_FAMILY",
  LEGAL_ENTITY_NAME: "LEGAL_ENTITY_NAME",
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
  OPERATING_SYSTEM: "OPERATING_SYSTEM",
  OPERATION: "OPERATION",
  PLATFORM: "PLATFORM",
  PURCHASE_TYPE: "PURCHASE_TYPE",
  RECORD_TYPE: "RECORD_TYPE",
  REGION: "REGION",
  RESERVATION_ID: "RESERVATION_ID",
  RESOURCE_ID: "RESOURCE_ID",
  SAVINGS_PLANS_TYPE: "SAVINGS_PLANS_TYPE",
  SCOPE: "SCOPE",
  SERVICE: "SERVICE",
  SUBSCRIPTION_ID: "SUBSCRIPTION_ID",
  TAG_KEY: "TAG_KEY",
  TENANCY: "TENANCY",
  USAGE_TYPE: "USAGE_TYPE",
  USAGE_TYPE_GROUP: "USAGE_TYPE_GROUP",
} as const;

/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * <p>Specifies the values and match options for dimension-based filtering in cost and usage queries.</p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p>The key of the dimension to filter on (for example, <code>SERVICE</code>, <code>USAGE_TYPE</code>, or <code>OPERATION</code>).</p>
   * @public
   */
  key: Dimension | undefined;

  /**
   * <p>The values to match for the specified dimension key.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The match options for dimension values, such as <code>EQUALS</code>, <code>CONTAINS</code>, <code>STARTS_WITH</code>, or <code>ENDS_WITH</code>.</p>
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * <p>Specifies tag-based filtering options for cost and usage queries.</p>
 * @public
 */
export interface TagValues {
  /**
   * <p>The key of the tag to filter on.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The values to match for the specified tag key.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>The match options for tag values, such as <code>EQUALS</code>, <code>CONTAINS</code>, <code>STARTS_WITH</code>, or <code>ENDS_WITH</code>.</p>
   * @public
   */
  matchOptions?: MatchOption[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Granularity = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
} as const;

/**
 * @public
 */
export type Granularity = (typeof Granularity)[keyof typeof Granularity];

/**
 * @public
 * @enum
 */
export const GroupDefinitionType = {
  COST_CATEGORY: "COST_CATEGORY",
  DIMENSION: "DIMENSION",
  TAG: "TAG",
} as const;

/**
 * @public
 */
export type GroupDefinitionType = (typeof GroupDefinitionType)[keyof typeof GroupDefinitionType];

/**
 * <p>Specifies how to group cost and usage data.</p>
 * @public
 */
export interface GroupDefinition {
  /**
   * <p>The key to use for grouping cost and usage data.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The type of grouping to apply.</p>
   * @public
   */
  type?: GroupDefinitionType | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricName = {
  AmortizedCost: "AmortizedCost",
  BlendedCost: "BlendedCost",
  Cost: "Cost",
  Hour: "Hour",
  NetAmortizedCost: "NetAmortizedCost",
  NetUnblendedCost: "NetUnblendedCost",
  NormalizedUsageAmount: "NormalizedUsageAmount",
  SpendCoveredBySavingsPlans: "SpendCoveredBySavingsPlans",
  UnblendedCost: "UnblendedCost",
  Unit: "Unit",
  UsageQuantity: "UsageQuantity",
} as const;

/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const DateTimeType = {
  ABSOLUTE: "ABSOLUTE",
  RELATIVE: "RELATIVE",
} as const;

/**
 * @public
 */
export type DateTimeType = (typeof DateTimeType)[keyof typeof DateTimeType];

/**
 * <p>Represents a point in time that can be specified as either an absolute date (for example, "2025-07-01") or a relative time period using ISO 8601 duration format (for example, "-P3M" for three months ago).</p>
 * @public
 */
export interface DateTimeValue {
  /**
   * <p>The type of date/time value: <code>ABSOLUTE</code> for specific dates or <code>RELATIVE</code> for dynamic time periods.</p>
   * @public
   */
  type: DateTimeType | undefined;

  /**
   * <p>The actual date/time value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Defines a time period with explicit start and end times for data queries.</p>
 * @public
 */
export interface DateTimeRange {
  /**
   * <p>The start time of the date range for querying data.</p>
   * @public
   */
  startTime: DateTimeValue | undefined;

  /**
   * <p>The end time of the date range for querying data.</p>
   * @public
   */
  endTime: DateTimeValue | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>The ARN of the newly created dashboard.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request would exceed service quotas. For example, attempting to create more than 20 widgets in a dashboard or exceeding the maximum number of dashboards per account.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The input parameters do not satisfy the requirements. Check the error message for specific validation details.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * <p>The ARN of the dashboard to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {
  /**
   * <p>The ARN of the dashboard that was deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardRequest {
  /**
   * <p>The ARN of the dashboard to retrieve. This is required to uniquely identify the dashboard.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardType = {
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type DashboardType = (typeof DashboardType)[keyof typeof DashboardType];

/**
 * <p>The specified resource (dashboard, policy, or widget) was not found. Verify the ARN and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the dashboard whose resource-based policy you want to retrieve.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The ARN of the dashboard for which the resource-based policy was retrieved.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The JSON policy document that represents the dashboard's resource-based policy.</p>
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. Use the value returned in the previous response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains basic information about a dashboard, including its ARN, name, type, and timestamps.</p>
 * @public
 */
export interface DashboardReference {
  /**
   * <p>The ARN of the referenced dashboard.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the referenced dashboard.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the referenced dashboard.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The dashboard type.</p>
   * @public
   */
  type: DashboardType | undefined;

  /**
   * <p>The timestamp when the dashboard was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the dashboard was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>An array of dashboard references, containing basic information about each dashboard.</p>
   * @public
   */
  dashboards: DashboardReference[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. Not returned if there are no more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the specified dashboard resource.</p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the dashboard resource.</p>
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
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the dashboard resource.</p>
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
   * <p>The ARN of the updated dashboard.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Defines complex filtering conditions using logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) and various filter types.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>A list of expressions to combine with OR logic.</p>
   * @public
   */
  or?: Expression[] | undefined;

  /**
   * <p>A list of expressions to combine with AND logic.</p>
   * @public
   */
  and?: Expression[] | undefined;

  /**
   * <p>An expression to negate with NOT logic.</p>
   * @public
   */
  not?: Expression | undefined;

  /**
   * <p>The dimension values to include in the filter expression.</p>
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * <p>The tag values to include in the filter expression.</p>
   * @public
   */
  tags?: TagValues | undefined;

  /**
   * <p>The cost category values to include in the filter expression.</p>
   * @public
   */
  costCategories?: CostCategoryValues | undefined;
}

/**
 * <p>Defines the parameters for retrieving Amazon Web Services cost and usage data. Includes specifications for metrics, time periods, granularity, grouping dimensions, and filtering conditions.</p>
 * @public
 */
export interface CostAndUsageQuery {
  /**
   * <p>The specific cost and usage metrics to retrieve.</p> <note> <p>Valid values for CostAndUsageQuery metrics are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>.</p> </note>
   * @public
   */
  metrics: MetricName[] | undefined;

  /**
   * <p>The time period for which to retrieve data. Can be specified as absolute dates or relative time periods.</p>
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * <p>The granularity of the retrieved data: <code>HOURLY</code>, <code>DAILY</code>, or <code>MONTHLY</code>.</p>
   * @public
   */
  granularity: Granularity | undefined;

  /**
   * <p>Specifies how to group the retrieved data, such as by <code>SERVICE</code>, <code>ACCOUNT</code>, or <code>TAG</code>.</p>
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The filter expression to be applied to the cost and usage data.</p>
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * <p>Defines the parameters for querying Reserved Instance coverage data, including grouping options, metrics, and sorting preferences.</p>
 * @public
 */
export interface ReservationCoverageQuery {
  /**
   * <p>Defines a time period with explicit start and end times for data queries.</p>
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * <p>Specifies how to group the Reserved Instance coverage data, such as by service, Region, or instance type.</p>
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The time granularity of the retrieved data: <code>HOURLY</code>, <code>DAILY</code>, or <code>MONTHLY</code>.</p>
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * <p>Defines complex filtering conditions using logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) and various filter types.</p>
   * @public
   */
  filter?: Expression | undefined;

  /**
   * <p>The coverage metrics to include in the results.</p> <note> <p>Valid values for ReservationCoverageQuery metrics are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>.</p> </note>
   * @public
   */
  metrics?: MetricName[] | undefined;
}

/**
 * <p>Defines the parameters for querying Reserved Instance utilization data, including grouping options and time granularity.</p>
 * @public
 */
export interface ReservationUtilizationQuery {
  /**
   * <p>Defines a time period with explicit start and end times for data queries.</p>
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * <p>Specifies how to group the Reserved Instance utilization data, such as by service, Region, or instance type.</p>
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The time granularity of the retrieved data: <code>HOURLY</code>, <code>DAILY</code>, or <code>MONTHLY</code>.</p>
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * <p>Defines complex filtering conditions using logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) and various filter types.</p>
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * <p>Defines the parameters for querying Savings Plans coverage data, including metrics, grouping options, and time granularity.</p>
 * @public
 */
export interface SavingsPlansCoverageQuery {
  /**
   * <p>Defines a time period with explicit start and end times for data queries.</p>
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * <p>The coverage metrics to include in the results.</p> <note> <p>Valid value for SavingsPlansCoverageQuery metrics is <code>SpendCoveredBySavingsPlans</code>.</p> </note>
   * @public
   */
  metrics?: MetricName[] | undefined;

  /**
   * <p>The time granularity of the retrieved data: <code>HOURLY</code>, <code>DAILY</code>, or <code>MONTHLY</code>.</p>
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * <p>Specifies how to group the Savings Plans coverage data, such as by service or instance family.</p>
   * @public
   */
  groupBy?: GroupDefinition[] | undefined;

  /**
   * <p>Defines complex filtering conditions using logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) and various filter types.</p>
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * <p>Defines the parameters for querying Savings Plans utilization data, including time granularity and sorting preferences.</p>
 * @public
 */
export interface SavingsPlansUtilizationQuery {
  /**
   * <p>Defines a time period with explicit start and end times for data queries.</p>
   * @public
   */
  timeRange: DateTimeRange | undefined;

  /**
   * <p>The time granularity of the retrieved data: HOURLY, DAILY, or MONTHLY.</p>
   * @public
   */
  granularity?: Granularity | undefined;

  /**
   * <p>Defines complex filtering conditions using logical operators (<code>AND</code>, <code>OR</code>, <code>NOT</code>) and various filter types.</p>
   * @public
   */
  filter?: Expression | undefined;
}

/**
 * <p>Defines the data retrieval parameters for a widget.</p>
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
   * <p>The parameters for querying cost and usage data, including metrics, time range, granularity, grouping dimensions, and filters.</p>
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
   * <p>The parameters for querying Savings Plans coverage data, showing how much of your eligible compute usage is covered by Savings Plans.</p>
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
   * <p>The parameters for querying Savings Plans utilization data, showing how effectively your Savings Plans are being used.</p>
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
   * <p>The parameters for querying Reserved Instance coverage data, showing how much of your eligible instance usage is covered by Reserved Instances.</p>
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
   * <p>The parameters for querying Reserved Instance utilization data, showing how effectively your Reserved Instances are being used.</p>
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

  export interface Visitor<T> {
    costAndUsage: (value: CostAndUsageQuery) => T;
    savingsPlansCoverage: (value: SavingsPlansCoverageQuery) => T;
    savingsPlansUtilization: (value: SavingsPlansUtilizationQuery) => T;
    reservationCoverage: (value: ReservationCoverageQuery) => T;
    reservationUtilization: (value: ReservationUtilizationQuery) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QueryParameters, visitor: Visitor<T>): T => {
    if (value.costAndUsage !== undefined) return visitor.costAndUsage(value.costAndUsage);
    if (value.savingsPlansCoverage !== undefined) return visitor.savingsPlansCoverage(value.savingsPlansCoverage);
    if (value.savingsPlansUtilization !== undefined)
      return visitor.savingsPlansUtilization(value.savingsPlansUtilization);
    if (value.reservationCoverage !== undefined) return visitor.reservationCoverage(value.reservationCoverage);
    if (value.reservationUtilization !== undefined) return visitor.reservationUtilization(value.reservationUtilization);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines the complete configuration for a widget, including data retrieval settings and visualization preferences.</p>
 * @public
 */
export interface WidgetConfig {
  /**
   * <p>The parameters that define what data the widget should retrieve and how it should be filtered or grouped.</p>
   * @public
   */
  queryParameters: QueryParameters | undefined;

  /**
   * <p>The configuration that determines how the retrieved data should be visualized in the widget.</p>
   * @public
   */
  displayConfig: DisplayConfig | undefined;
}

/**
 * <p>A configurable visualization component within a dashboard that displays specific cost and usage metrics. Each widget can show data as charts or tables and includes settings for data querying, filtering, and visual presentation.</p>
 * @public
 */
export interface Widget {
  /**
   * <p>The title of the widget.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the widget's purpose or the data it displays.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The width of the widget in column spans. The dashboard layout consists of a grid system.</p>
   * @public
   */
  width?: number | undefined;

  /**
   * <p>The height of the widget in row spans. The dashboard layout consists of a grid system.</p>
   * @public
   */
  height?: number | undefined;

  /**
   * <p>Specifies the starting column position of the widget in the dashboard's grid layout. Used to control widget placement.</p>
   * @public
   */
  horizontalOffset?: number | undefined;

  /**
   * <p>An array of configurations that define the data queries and display settings for the widget.</p>
   * @public
   */
  configs: WidgetConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>The name of the dashboard. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the dashboard's purpose or contents.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of widget configurations that define the visualizations to be displayed in the dashboard. Each dashboard can contain up to 20 widgets.</p>
   * @public
   */
  widgets: Widget[] | undefined;

  /**
   * <p>The tags to apply to the dashboard resource for organization and management.</p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface GetDashboardResponse {
  /**
   * <p>The ARN of the retrieved dashboard.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the retrieved dashboard.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the retrieved dashboard.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates the dashboard type.</p>
   * @public
   */
  type: DashboardType | undefined;

  /**
   * <p>An array of widget configurations that make up the dashboard.</p>
   * @public
   */
  widgets: Widget[] | undefined;

  /**
   * <p>The timestamp when the dashboard was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the dashboard was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>The ARN of the dashboard to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The new name for the dashboard. If not specified, the existing name is retained.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The new description for the dashboard. If not specified, the existing description is retained.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated array of widget configurations for the dashboard. Replaces all existing widgets.</p>
   * @public
   */
  widgets?: Widget[] | undefined;
}
