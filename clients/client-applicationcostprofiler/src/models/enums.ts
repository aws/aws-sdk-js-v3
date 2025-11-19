// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const ReportFrequency = {
  ALL: "ALL",
  DAILY: "DAILY",
  MONTHLY: "MONTHLY",
} as const;
/**
 * @public
 */
export type ReportFrequency = (typeof ReportFrequency)[keyof typeof ReportFrequency];

/**
 * @public
 * @enum
 */
export const S3BucketRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  EU_SOUTH_1: "eu-south-1",
  ME_SOUTH_1: "me-south-1",
} as const;
/**
 * @public
 */
export type S3BucketRegion = (typeof S3BucketRegion)[keyof typeof S3BucketRegion];
