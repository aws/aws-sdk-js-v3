// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessType = {
  LAKEFORMATION: "LAKEFORMATION",
  S3: "S3",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const AwsLogSourceName = {
  CLOUD_TRAIL_MGMT: "CLOUD_TRAIL_MGMT",
  EKS_AUDIT: "EKS_AUDIT",
  LAMBDA_EXECUTION: "LAMBDA_EXECUTION",
  ROUTE53: "ROUTE53",
  S3_DATA: "S3_DATA",
  SH_FINDINGS: "SH_FINDINGS",
  VPC_FLOW: "VPC_FLOW",
  WAF: "WAF",
} as const;
/**
 * @public
 */
export type AwsLogSourceName = (typeof AwsLogSourceName)[keyof typeof AwsLogSourceName];

/**
 * @public
 * @enum
 */
export const DataLakeStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type DataLakeStatus = (typeof DataLakeStatus)[keyof typeof DataLakeStatus];

/**
 * @public
 * @enum
 */
export const SubscriberStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVATED: "DEACTIVATED",
  PENDING: "PENDING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type SubscriberStatus = (typeof SubscriberStatus)[keyof typeof SubscriberStatus];

/**
 * @public
 * @enum
 */
export const HttpMethod = {
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * @enum
 */
export const SourceCollectionStatus = {
  COLLECTING: "COLLECTING",
  MISCONFIGURED: "MISCONFIGURED",
  NOT_COLLECTING: "NOT_COLLECTING",
} as const;
/**
 * @public
 */
export type SourceCollectionStatus = (typeof SourceCollectionStatus)[keyof typeof SourceCollectionStatus];
