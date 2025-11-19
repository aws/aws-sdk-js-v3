// smithy-typescript generated code
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
  INVOICING_ENTITY: "INVOICING_ENTITY",
  LEGAL_ENTITY_NAME: "LEGAL_ENTITY_NAME",
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
  LINKED_ACCOUNT_NAME: "LINKED_ACCOUNT_NAME",
  OPERATING_SYSTEM: "OPERATING_SYSTEM",
  OPERATION: "OPERATION",
  PAYMENT_OPTION: "PAYMENT_OPTION",
  PLATFORM: "PLATFORM",
  PURCHASE_TYPE: "PURCHASE_TYPE",
  RECORD_TYPE: "RECORD_TYPE",
  REGION: "REGION",
  RESERVATION_ID: "RESERVATION_ID",
  RESERVATION_MODIFIED: "RESERVATION_MODIFIED",
  RESOURCE_ID: "RESOURCE_ID",
  RIGHTSIZING_TYPE: "RIGHTSIZING_TYPE",
  SAVINGS_PLANS_TYPE: "SAVINGS_PLANS_TYPE",
  SAVINGS_PLAN_ARN: "SAVINGS_PLAN_ARN",
  SCOPE: "SCOPE",
  SERVICE: "SERVICE",
  SERVICE_CODE: "SERVICE_CODE",
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
export const HealthStatusValue = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type HealthStatusValue = (typeof HealthStatusValue)[keyof typeof HealthStatusValue];

/**
 * @public
 * @enum
 */
export const HealthStatusReason = {
  BILLING_VIEW_NO_ACCESS: "BILLING_VIEW_NO_ACCESS",
  BILLING_VIEW_UNHEALTHY: "BILLING_VIEW_UNHEALTHY",
  FILTER_INVALID: "FILTER_INVALID",
  MULTI_YEAR_HISTORICAL_DATA_DISABLED: "MULTI_YEAR_HISTORICAL_DATA_DISABLED",
} as const;
/**
 * @public
 */
export type HealthStatusReason = (typeof HealthStatusReason)[keyof typeof HealthStatusReason];

/**
 * @public
 * @enum
 */
export const Metric = {
  AMORTIZED_COST: "AmortizedCost",
  BLENDED_COST: "BlendedCost",
  HOURS: "Hours",
  NET_AMORTIZED_COST: "NetAmortizedCost",
  NET_UNBLENDED_COST: "NetUnblendedCost",
  NORMALIZED_USAGE_AMOUNT: "NormalizedUsageAmount",
  UNBLENDED_COST: "UnblendedCost",
  USAGE_QUANTITY: "UsageQuantity",
} as const;
/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  ANNUALLY: "ANNUALLY",
  CUSTOM: "CUSTOM",
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
