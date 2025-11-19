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
  EC2: "EC2",
  FARGATE: "Fargate",
  LAMBDA: "Lambda",
  SAGEMAKER: "SageMaker",
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
  EC2: "AmazonEC2",
  FARGATE: "AmazonECS",
  FARGATE_EKS: "AmazonEKS",
  LAMBDA: "AWSLambda",
  SAGEMAKER: "AmazonSageMaker",
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
  HOURS: "Hrs",
  LAMBDA_GB_SECOND: "Lambda-GB-Second",
  REQUEST: "Request",
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
