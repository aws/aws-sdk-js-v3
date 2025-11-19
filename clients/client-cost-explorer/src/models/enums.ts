// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountScope = {
  LINKED: "LINKED",
  PAYER: "PAYER",
} as const;
/**
 * @public
 */
export type AccountScope = (typeof AccountScope)[keyof typeof AccountScope];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * @enum
 */
export const AnalysisType = {
  CUSTOM_COMMITMENT: "CUSTOM_COMMITMENT",
  MAX_SAVINGS: "MAX_SAVINGS",
} as const;
/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  HEAVY_UTILIZATION: "HEAVY_UTILIZATION",
  LIGHT_UTILIZATION: "LIGHT_UTILIZATION",
  MEDIUM_UTILIZATION: "MEDIUM_UTILIZATION",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;
/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const SupportedSavingsPlansType = {
  COMPUTE_SP: "COMPUTE_SP",
  EC2_INSTANCE_SP: "EC2_INSTANCE_SP",
  SAGEMAKER_SP: "SAGEMAKER_SP",
} as const;
/**
 * @public
 */
export type SupportedSavingsPlansType = (typeof SupportedSavingsPlansType)[keyof typeof SupportedSavingsPlansType];

/**
 * @public
 * @enum
 */
export const TermInYears = {
  ONE_YEAR: "ONE_YEAR",
  THREE_YEARS: "THREE_YEARS",
} as const;
/**
 * @public
 */
export type TermInYears = (typeof TermInYears)[keyof typeof TermInYears];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  INVALID_ACCOUNT_ID: "INVALID_ACCOUNT_ID",
  INVALID_SAVINGS_PLANS_TO_ADD: "INVALID_SAVINGS_PLANS_TO_ADD",
  INVALID_SAVINGS_PLANS_TO_EXCLUDE: "INVALID_SAVINGS_PLANS_TO_EXCLUDE",
  NO_USAGE_FOUND: "NO_USAGE_FOUND",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const AnomalyFeedbackType = {
  NO: "NO",
  PLANNED_ACTIVITY: "PLANNED_ACTIVITY",
  YES: "YES",
} as const;
/**
 * @public
 */
export type AnomalyFeedbackType = (typeof AnomalyFeedbackType)[keyof typeof AnomalyFeedbackType];

/**
 * @public
 * @enum
 */
export const MonitorDimension = {
  COST_CATEGORY: "COST_CATEGORY",
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
  SERVICE: "SERVICE",
  TAG: "TAG",
} as const;
/**
 * @public
 */
export type MonitorDimension = (typeof MonitorDimension)[keyof typeof MonitorDimension];

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
  AGREEMENT_END_DATE_TIME_AFTER: "AGREEMENT_END_DATE_TIME_AFTER",
  AGREEMENT_END_DATE_TIME_BEFORE: "AGREEMENT_END_DATE_TIME_BEFORE",
  ANOMALY_TOTAL_IMPACT_ABSOLUTE: "ANOMALY_TOTAL_IMPACT_ABSOLUTE",
  ANOMALY_TOTAL_IMPACT_PERCENTAGE: "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
  AZ: "AZ",
  BILLING_ENTITY: "BILLING_ENTITY",
  CACHE_ENGINE: "CACHE_ENGINE",
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
  PAYER_ACCOUNT: "PAYER_ACCOUNT",
  PAYMENT_OPTION: "PAYMENT_OPTION",
  PLATFORM: "PLATFORM",
  PURCHASE_TYPE: "PURCHASE_TYPE",
  RECORD_TYPE: "RECORD_TYPE",
  REGION: "REGION",
  RESERVATION_ID: "RESERVATION_ID",
  RESOURCE_ID: "RESOURCE_ID",
  RIGHTSIZING_TYPE: "RIGHTSIZING_TYPE",
  SAVINGS_PLANS_TYPE: "SAVINGS_PLANS_TYPE",
  SAVINGS_PLAN_ARN: "SAVINGS_PLAN_ARN",
  SCOPE: "SCOPE",
  SERVICE: "SERVICE",
  SERVICE_CODE: "SERVICE_CODE",
  SUBSCRIPTION_ID: "SUBSCRIPTION_ID",
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
export const MonitorType = {
  CUSTOM: "CUSTOM",
  DIMENSIONAL: "DIMENSIONAL",
} as const;
/**
 * @public
 */
export type MonitorType = (typeof MonitorType)[keyof typeof MonitorType];

/**
 * @public
 * @enum
 */
export const AnomalySubscriptionFrequency = {
  DAILY: "DAILY",
  IMMEDIATE: "IMMEDIATE",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type AnomalySubscriptionFrequency =
  (typeof AnomalySubscriptionFrequency)[keyof typeof AnomalySubscriptionFrequency];

/**
 * @public
 * @enum
 */
export const SubscriberStatus = {
  CONFIRMED: "CONFIRMED",
  DECLINED: "DECLINED",
} as const;
/**
 * @public
 */
export type SubscriberStatus = (typeof SubscriberStatus)[keyof typeof SubscriberStatus];

/**
 * @public
 * @enum
 */
export const SubscriberType = {
  EMAIL: "EMAIL",
  SNS: "SNS",
} as const;
/**
 * @public
 */
export type SubscriberType = (typeof SubscriberType)[keyof typeof SubscriberType];

/**
 * @public
 * @enum
 */
export const ApproximationDimension = {
  RESOURCE: "RESOURCE",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type ApproximationDimension = (typeof ApproximationDimension)[keyof typeof ApproximationDimension];

/**
 * @public
 * @enum
 */
export const CostCategoryInheritedValueDimensionName = {
  LINKED_ACCOUNT_NAME: "LINKED_ACCOUNT_NAME",
  TAG: "TAG",
} as const;
/**
 * @public
 */
export type CostCategoryInheritedValueDimensionName =
  (typeof CostCategoryInheritedValueDimensionName)[keyof typeof CostCategoryInheritedValueDimensionName];

/**
 * @public
 * @enum
 */
export const CostCategoryRuleType = {
  INHERITED_VALUE: "INHERITED_VALUE",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type CostCategoryRuleType = (typeof CostCategoryRuleType)[keyof typeof CostCategoryRuleType];

/**
 * @public
 * @enum
 */
export const CostCategoryRuleVersion = {
  CostCategoryExpressionV1: "CostCategoryExpression.v1",
} as const;
/**
 * @public
 */
export type CostCategoryRuleVersion = (typeof CostCategoryRuleVersion)[keyof typeof CostCategoryRuleVersion];

/**
 * @public
 * @enum
 */
export const CostCategorySplitChargeMethod = {
  EVEN: "EVEN",
  FIXED: "FIXED",
  PROPORTIONAL: "PROPORTIONAL",
} as const;
/**
 * @public
 */
export type CostCategorySplitChargeMethod =
  (typeof CostCategorySplitChargeMethod)[keyof typeof CostCategorySplitChargeMethod];

/**
 * @public
 * @enum
 */
export const CostCategorySplitChargeRuleParameterType = {
  ALLOCATION_PERCENTAGES: "ALLOCATION_PERCENTAGES",
} as const;
/**
 * @public
 */
export type CostCategorySplitChargeRuleParameterType =
  (typeof CostCategorySplitChargeRuleParameterType)[keyof typeof CostCategorySplitChargeRuleParameterType];

/**
 * @public
 * @enum
 */
export const CostCategoryStatusComponent = {
  COST_EXPLORER: "COST_EXPLORER",
} as const;
/**
 * @public
 */
export type CostCategoryStatusComponent =
  (typeof CostCategoryStatusComponent)[keyof typeof CostCategoryStatusComponent];

/**
 * @public
 * @enum
 */
export const CostCategoryStatus = {
  APPLIED: "APPLIED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type CostCategoryStatus = (typeof CostCategoryStatus)[keyof typeof CostCategoryStatus];

/**
 * @public
 * @enum
 */
export const NumericOperator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;
/**
 * @public
 */
export type NumericOperator = (typeof NumericOperator)[keyof typeof NumericOperator];

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
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const Metric = {
  AMORTIZED_COST: "AMORTIZED_COST",
  BLENDED_COST: "BLENDED_COST",
  NET_AMORTIZED_COST: "NET_AMORTIZED_COST",
  NET_UNBLENDED_COST: "NET_UNBLENDED_COST",
  NORMALIZED_USAGE_AMOUNT: "NORMALIZED_USAGE_AMOUNT",
  UNBLENDED_COST: "UNBLENDED_COST",
  USAGE_QUANTITY: "USAGE_QUANTITY",
} as const;
/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * @enum
 */
export const Context = {
  COST_AND_USAGE: "COST_AND_USAGE",
  RESERVATIONS: "RESERVATIONS",
  SAVINGS_PLANS: "SAVINGS_PLANS",
} as const;
/**
 * @public
 */
export type Context = (typeof Context)[keyof typeof Context];

/**
 * @public
 * @enum
 */
export const LookbackPeriodInDays = {
  SEVEN_DAYS: "SEVEN_DAYS",
  SIXTY_DAYS: "SIXTY_DAYS",
  THIRTY_DAYS: "THIRTY_DAYS",
} as const;
/**
 * @public
 */
export type LookbackPeriodInDays = (typeof LookbackPeriodInDays)[keyof typeof LookbackPeriodInDays];

/**
 * @public
 * @enum
 */
export const OfferingClass = {
  CONVERTIBLE: "CONVERTIBLE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type OfferingClass = (typeof OfferingClass)[keyof typeof OfferingClass];

/**
 * @public
 * @enum
 */
export const RecommendationTarget = {
  CROSS_INSTANCE_FAMILY: "CROSS_INSTANCE_FAMILY",
  SAME_INSTANCE_FAMILY: "SAME_INSTANCE_FAMILY",
} as const;
/**
 * @public
 */
export type RecommendationTarget = (typeof RecommendationTarget)[keyof typeof RecommendationTarget];

/**
 * @public
 * @enum
 */
export const FindingReasonCode = {
  CPU_OVER_PROVISIONED: "CPU_OVER_PROVISIONED",
  CPU_UNDER_PROVISIONED: "CPU_UNDER_PROVISIONED",
  DISK_IOPS_OVER_PROVISIONED: "DISK_IOPS_OVER_PROVISIONED",
  DISK_IOPS_UNDER_PROVISIONED: "DISK_IOPS_UNDER_PROVISIONED",
  DISK_THROUGHPUT_OVER_PROVISIONED: "DISK_THROUGHPUT_OVER_PROVISIONED",
  DISK_THROUGHPUT_UNDER_PROVISIONED: "DISK_THROUGHPUT_UNDER_PROVISIONED",
  EBS_IOPS_OVER_PROVISIONED: "EBS_IOPS_OVER_PROVISIONED",
  EBS_IOPS_UNDER_PROVISIONED: "EBS_IOPS_UNDER_PROVISIONED",
  EBS_THROUGHPUT_OVER_PROVISIONED: "EBS_THROUGHPUT_OVER_PROVISIONED",
  EBS_THROUGHPUT_UNDER_PROVISIONED: "EBS_THROUGHPUT_UNDER_PROVISIONED",
  MEMORY_OVER_PROVISIONED: "MEMORY_OVER_PROVISIONED",
  MEMORY_UNDER_PROVISIONED: "MEMORY_UNDER_PROVISIONED",
  NETWORK_BANDWIDTH_OVER_PROVISIONED: "NETWORK_BANDWIDTH_OVER_PROVISIONED",
  NETWORK_BANDWIDTH_UNDER_PROVISIONED: "NETWORK_BANDWIDTH_UNDER_PROVISIONED",
  NETWORK_PPS_OVER_PROVISIONED: "NETWORK_PPS_OVER_PROVISIONED",
  NETWORK_PPS_UNDER_PROVISIONED: "NETWORK_PPS_UNDER_PROVISIONED",
} as const;
/**
 * @public
 */
export type FindingReasonCode = (typeof FindingReasonCode)[keyof typeof FindingReasonCode];

/**
 * @public
 * @enum
 */
export const PlatformDifference = {
  HYPERVISOR: "HYPERVISOR",
  INSTANCE_STORE_AVAILABILITY: "INSTANCE_STORE_AVAILABILITY",
  NETWORK_INTERFACE: "NETWORK_INTERFACE",
  STORAGE_INTERFACE: "STORAGE_INTERFACE",
  VIRTUALIZATION_TYPE: "VIRTUALIZATION_TYPE",
} as const;
/**
 * @public
 */
export type PlatformDifference = (typeof PlatformDifference)[keyof typeof PlatformDifference];

/**
 * @public
 * @enum
 */
export const RightsizingType = {
  MODIFY: "MODIFY",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type RightsizingType = (typeof RightsizingType)[keyof typeof RightsizingType];

/**
 * @public
 * @enum
 */
export const SavingsPlansDataType = {
  AMORTIZED_COMMITMENT: "AMORTIZED_COMMITMENT",
  ATTRIBUTES: "ATTRIBUTES",
  SAVINGS: "SAVINGS",
  UTILIZATION: "UTILIZATION",
} as const;
/**
 * @public
 */
export type SavingsPlansDataType = (typeof SavingsPlansDataType)[keyof typeof SavingsPlansDataType];

/**
 * @public
 * @enum
 */
export const CostAllocationTagBackfillStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CostAllocationTagBackfillStatus =
  (typeof CostAllocationTagBackfillStatus)[keyof typeof CostAllocationTagBackfillStatus];

/**
 * @public
 * @enum
 */
export const CostAllocationTagStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type CostAllocationTagStatus = (typeof CostAllocationTagStatus)[keyof typeof CostAllocationTagStatus];

/**
 * @public
 * @enum
 */
export const CostAllocationTagType = {
  AWS_GENERATED: "AWSGenerated",
  USER_DEFINED: "UserDefined",
} as const;
/**
 * @public
 */
export type CostAllocationTagType = (typeof CostAllocationTagType)[keyof typeof CostAllocationTagType];

/**
 * @public
 * @enum
 */
export const GenerationStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus];
