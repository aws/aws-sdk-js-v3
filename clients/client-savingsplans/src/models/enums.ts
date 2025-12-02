// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SavingsPlanRateFilterName = {
  INSTANCE_TYPE: "instanceType",
  OPERATION: "operation",
  PRODUCT_DESCRIPTION: "productDescription",
  PRODUCT_TYPE: "productType",
  REGION: "region",
  SERVICE_CODE: "serviceCode",
  TENANCY: "tenancy",
  USAGE_TYPE: "usageType",
} as const;
/**
 * @public
 */
export type SavingsPlanRateFilterName = (typeof SavingsPlanRateFilterName)[keyof typeof SavingsPlanRateFilterName];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  CNY: "CNY",
  EUR: "EUR",
  USD: "USD",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const SavingsPlanProductType = {
  DMS: "DMS",
  DOCDB: "DocDB",
  DSQL: "DSQL",
  DYNAMODB: "DynamoDB",
  EC2: "EC2",
  ELASTICACHE: "ElastiCache",
  FARGATE: "Fargate",
  KEYSPACES: "Keyspaces",
  LAMBDA: "Lambda",
  NEPTUNE: "Neptune",
  RDS: "RDS",
  SAGEMAKER: "SageMaker",
  TIMESTREAM: "Timestream",
} as const;
/**
 * @public
 */
export type SavingsPlanProductType = (typeof SavingsPlanProductType)[keyof typeof SavingsPlanProductType];

/**
 * @public
 * @enum
 */
export const SavingsPlanRatePropertyKey = {
  INSTANCE_FAMILY: "instanceFamily",
  INSTANCE_TYPE: "instanceType",
  PRODUCT_DESCRIPTION: "productDescription",
  REGION: "region",
  TENANCY: "tenancy",
} as const;
/**
 * @public
 */
export type SavingsPlanRatePropertyKey = (typeof SavingsPlanRatePropertyKey)[keyof typeof SavingsPlanRatePropertyKey];

/**
 * @public
 * @enum
 */
export const SavingsPlanRateServiceCode = {
  AURORA: "AuroraDSQL",
  DMS: "AWSDatabaseMigrationSvc",
  DOCDB: "AmazonDocDB",
  DYNAMODB: "AmazonDynamoDB",
  EC2: "AmazonEC2",
  ELASTICACHE: "AmazonElastiCache",
  FARGATE: "AmazonECS",
  FARGATE_EKS: "AmazonEKS",
  LAMBDA: "AWSLambda",
  MCS: "AmazonMCS",
  NEPTUNE: "AmazonNeptune",
  RDS: "AmazonRDS",
  SAGEMAKER: "AmazonSageMaker",
  TIMESTREAM: "AmazonTimestream",
} as const;
/**
 * @public
 */
export type SavingsPlanRateServiceCode = (typeof SavingsPlanRateServiceCode)[keyof typeof SavingsPlanRateServiceCode];

/**
 * @public
 * @enum
 */
export const SavingsPlanRateUnit = {
  ACU_HR: "ACU-Hr",
  DCU_HR: "DCU-Hr",
  DPU: "DPU",
  ELASTI_CACHE_PROCESSING_UNIT: "ElastiCacheProcessingUnit",
  GB_HOURS: "GB-Hours",
  HOURS: "Hrs",
  LAMBDA_GB_SECOND: "Lambda-GB-Second",
  NCU_HR: "NCU-hr",
  READ_CAPACITY_UNIT_HRS: "ReadCapacityUnit-Hrs",
  READ_REQUEST_UNITS: "ReadRequestUnits",
  REPLICATED_WRITE_CAPACITY_UNIT_HRS: "ReplicatedWriteCapacityUnit-Hrs",
  REPLICATED_WRITE_REQUEST_UNITS: "ReplicatedWriteRequestUnits",
  REQUEST: "Request",
  WRITE_CAPACITY_UNIT_HRS: "WriteCapacityUnit-Hrs",
  WRITE_REQUEST_UNITS: "WriteRequestUnits",
} as const;
/**
 * @public
 */
export type SavingsPlanRateUnit = (typeof SavingsPlanRateUnit)[keyof typeof SavingsPlanRateUnit];

/**
 * @public
 * @enum
 */
export const SavingsPlansFilterName = {
  COMMITMENT: "commitment",
  EC2_INSTANCE_FAMILY: "ec2-instance-family",
  END: "end",
  INSTANCE_FAMILY: "instance-family",
  PAYMENT_OPTION: "payment-option",
  REGION: "region",
  SAVINGS_PLAN_TYPE: "savings-plan-type",
  START: "start",
  TERM: "term",
  UPFRONT: "upfront",
} as const;
/**
 * @public
 */
export type SavingsPlansFilterName = (typeof SavingsPlansFilterName)[keyof typeof SavingsPlansFilterName];

/**
 * @public
 * @enum
 */
export const SavingsPlanState = {
  ACTIVE: "active",
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  PENDING_RETURN: "pending-return",
  QUEUED: "queued",
  QUEUED_DELETED: "queued-deleted",
  RETIRED: "retired",
  RETURNED: "returned",
} as const;
/**
 * @public
 */
export type SavingsPlanState = (typeof SavingsPlanState)[keyof typeof SavingsPlanState];

/**
 * @public
 * @enum
 */
export const SavingsPlanPaymentOption = {
  ALL_UPFRONT: "All Upfront",
  NO_UPFRONT: "No Upfront",
  PARTIAL_UPFRONT: "Partial Upfront",
} as const;
/**
 * @public
 */
export type SavingsPlanPaymentOption = (typeof SavingsPlanPaymentOption)[keyof typeof SavingsPlanPaymentOption];

/**
 * @public
 * @enum
 */
export const SavingsPlanType = {
  COMPUTE: "Compute",
  DATABASE: "Database",
  EC2_INSTANCE: "EC2Instance",
  SAGEMAKER: "SageMaker",
} as const;
/**
 * @public
 */
export type SavingsPlanType = (typeof SavingsPlanType)[keyof typeof SavingsPlanType];

/**
 * @public
 * @enum
 */
export const SavingsPlanRateFilterAttribute = {
  INSTANCE_FAMILY: "instanceFamily",
  INSTANCE_TYPE: "instanceType",
  PRODUCT_DESCRIPTION: "productDescription",
  PRODUCT_ID: "productId",
  REGION: "region",
  TENANCY: "tenancy",
} as const;
/**
 * @public
 */
export type SavingsPlanRateFilterAttribute =
  (typeof SavingsPlanRateFilterAttribute)[keyof typeof SavingsPlanRateFilterAttribute];

/**
 * @public
 * @enum
 */
export const SavingsPlanOfferingFilterAttribute = {
  instanceFamily: "instanceFamily",
  region: "region",
} as const;
/**
 * @public
 */
export type SavingsPlanOfferingFilterAttribute =
  (typeof SavingsPlanOfferingFilterAttribute)[keyof typeof SavingsPlanOfferingFilterAttribute];

/**
 * @public
 * @enum
 */
export const SavingsPlanOfferingPropertyKey = {
  INSTANCE_FAMILY: "instanceFamily",
  REGION: "region",
} as const;
/**
 * @public
 */
export type SavingsPlanOfferingPropertyKey =
  (typeof SavingsPlanOfferingPropertyKey)[keyof typeof SavingsPlanOfferingPropertyKey];
