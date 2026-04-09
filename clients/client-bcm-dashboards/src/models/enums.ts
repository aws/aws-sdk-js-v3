// smithy-typescript generated code
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
 * @public
 * @enum
 */
export const ScheduleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
 * @enum
 */
export const HealthStatusCode = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type HealthStatusCode = (typeof HealthStatusCode)[keyof typeof HealthStatusCode];

/**
 * @public
 * @enum
 */
export const StatusReason = {
  DASHBOARD_ACCESS_DENIED: "DASHBOARD_ACCESS_DENIED",
  DASHBOARD_NOT_FOUND: "DASHBOARD_NOT_FOUND",
  DATA_SOURCE_ACCESS_DENIED: "DATA_SOURCE_ACCESS_DENIED",
  EXECUTION_ROLE_ASSUME_FAILED: "EXECUTION_ROLE_ASSUME_FAILED",
  EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS: "EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  WIDGET_ID_NOT_FOUND: "WIDGET_ID_NOT_FOUND",
} as const;
/**
 * @public
 */
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason];

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
