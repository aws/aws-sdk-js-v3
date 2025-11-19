// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EnrollmentStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

/**
 * @public
 * @enum
 */
export const ActionType = {
  DELETE: "Delete",
  MIGRATE_TO_GRAVITON: "MigrateToGraviton",
  PURCHASE_RESERVED_INSTANCES: "PurchaseReservedInstances",
  PURCHASE_SAVINGS_PLANS: "PurchaseSavingsPlans",
  RIGHTSIZE: "Rightsize",
  SCALE_IN: "ScaleIn",
  STOP: "Stop",
  UPGRADE: "Upgrade",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const AllocationStrategy = {
  LOWEST_PRICE: "LowestPrice",
  PRIORITIZED: "Prioritized",
} as const;
/**
 * @public
 */
export type AllocationStrategy = (typeof AllocationStrategy)[keyof typeof AllocationStrategy];

/**
 * @public
 * @enum
 */
export const MemberAccountDiscountVisibility = {
  ALL: "All",
  NONE: "None",
} as const;
/**
 * @public
 */
export type MemberAccountDiscountVisibility =
  (typeof MemberAccountDiscountVisibility)[keyof typeof MemberAccountDiscountVisibility];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "AllUpfront",
  NO_UPFRONT: "NoUpfront",
  PARTIAL_UPFRONT: "PartialUpfront",
} as const;
/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const Term = {
  ONE_YEAR: "OneYear",
  THREE_YEARS: "ThreeYears",
} as const;
/**
 * @public
 */
export type Term = (typeof Term)[keyof typeof Term];

/**
 * @public
 * @enum
 */
export const SavingsEstimationMode = {
  AFTER_DISCOUNTS: "AfterDiscounts",
  BEFORE_DISCOUNTS: "BeforeDiscounts",
} as const;
/**
 * @public
 */
export type SavingsEstimationMode = (typeof SavingsEstimationMode)[keyof typeof SavingsEstimationMode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  OTHER: "Other",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const Ec2AutoScalingGroupType = {
  MIXED_INSTANCE_TYPES: "MixedInstanceTypes",
  SINGLE_INSTANCE_TYPE: "SingleInstanceType",
} as const;
/**
 * @public
 */
export type Ec2AutoScalingGroupType = (typeof Ec2AutoScalingGroupType)[keyof typeof Ec2AutoScalingGroupType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AURORA_DB_CLUSTER_STORAGE: "AuroraDbClusterStorage",
  COMPUTE_SAVINGS_PLANS: "ComputeSavingsPlans",
  DYNAMO_DB_RESERVED_CAPACITY: "DynamoDbReservedCapacity",
  EBS_VOLUME: "EbsVolume",
  EC2_AUTO_SCALING_GROUP: "Ec2AutoScalingGroup",
  EC2_INSTANCE: "Ec2Instance",
  EC2_INSTANCE_SAVINGS_PLANS: "Ec2InstanceSavingsPlans",
  EC2_RESERVED_INSTANCES: "Ec2ReservedInstances",
  ECS_SERVICE: "EcsService",
  ELASTI_CACHE_RESERVED_INSTANCES: "ElastiCacheReservedInstances",
  LAMBDA_FUNCTION: "LambdaFunction",
  MEMORY_DB_RESERVED_INSTANCES: "MemoryDbReservedInstances",
  OPEN_SEARCH_RESERVED_INSTANCES: "OpenSearchReservedInstances",
  RDS_DB_INSTANCE: "RdsDbInstance",
  RDS_DB_INSTANCE_STORAGE: "RdsDbInstanceStorage",
  RDS_RESERVED_INSTANCES: "RdsReservedInstances",
  REDSHIFT_RESERVED_INSTANCES: "RedshiftReservedInstances",
  SAGE_MAKER_SAVINGS_PLANS: "SageMakerSavingsPlans",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ImplementationEffort = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  VERY_HIGH: "VeryHigh",
  VERY_LOW: "VeryLow",
} as const;
/**
 * @public
 */
export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

/**
 * @public
 * @enum
 */
export const Source = {
  COMPUTE_OPTIMIZER: "ComputeOptimizer",
  COST_EXPLORER: "CostExplorer",
} as const;
/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * @public
 * @enum
 */
export const GranularityType = {
  /**
   * <p>Metrics are aggregated daily, with each data point representing a single day's worth of efficiency data. Timestamps are formatted as YYYY-MM-DD.</p>
   */
  DAILY: "Daily",
  /**
   * <p>Metrics are aggregated monthly, with each data point representing a full month's worth of efficiency data. Timestamps are formatted as YYYY-MM.</p>
   */
  MONTHLY: "Monthly",
} as const;
/**
 * @public
 */
export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "Asc",
  DESC: "Desc",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const SummaryMetrics = {
  SAVINGS_PERCENTAGE: "SavingsPercentage",
} as const;
/**
 * @public
 */
export type SummaryMetrics = (typeof SummaryMetrics)[keyof typeof SummaryMetrics];
