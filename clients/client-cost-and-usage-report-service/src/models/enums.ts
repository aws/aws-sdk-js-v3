// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdditionalArtifact = {
  ATHENA: "ATHENA",
  QUICKSIGHT: "QUICKSIGHT",
  REDSHIFT: "REDSHIFT",
} as const;
/**
 * @public
 */
export type AdditionalArtifact = (typeof AdditionalArtifact)[keyof typeof AdditionalArtifact];

/**
 * @public
 * @enum
 */
export const SchemaElement = {
  MANUAL_DISCOUNT_COMPATIBILITY: "MANUAL_DISCOUNT_COMPATIBILITY",
  RESOURCES: "RESOURCES",
  SPLIT_COST_ALLOCATION_DATA: "SPLIT_COST_ALLOCATION_DATA",
} as const;
/**
 * @public
 */
export type SchemaElement = (typeof SchemaElement)[keyof typeof SchemaElement];

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  GZIP: "GZIP",
  Parquet: "Parquet",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  CSV: "textORcsv",
  Parquet: "Parquet",
} as const;
/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 * @enum
 */
export const LastStatus = {
  ERROR_NO_BUCKET: "ERROR_NO_BUCKET",
  ERROR_PERMISSIONS: "ERROR_PERMISSIONS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type LastStatus = (typeof LastStatus)[keyof typeof LastStatus];

/**
 * @public
 * @enum
 */
export const ReportVersioning = {
  CREATE_NEW_REPORT: "CREATE_NEW_REPORT",
  OVERWRITE_REPORT: "OVERWRITE_REPORT",
} as const;
/**
 * @public
 */
export type ReportVersioning = (typeof ReportVersioning)[keyof typeof ReportVersioning];

/**
 * @public
 * @enum
 */
export const AWSRegion = {
  BAHRAIN: "me-south-1",
  BEIJING: "cn-north-1",
  CANADA_CENTRAL: "ca-central-1",
  CAPE_TOWN: "af-south-1",
  FRANKFURT: "eu-central-1",
  HONG_KONG: "ap-east-1",
  HYDERABAD: "ap-south-2",
  IRELAND: "eu-west-1",
  JAKARTA: "ap-southeast-3",
  LONDON: "eu-west-2",
  MILANO: "eu-south-1",
  MUMBAI: "ap-south-1",
  NINGXIA: "cn-northwest-1",
  NORTHERN_CALIFORNIA: "us-west-1",
  OHIO: "us-east-2",
  OREGON: "us-west-2",
  OSAKA: "ap-northeast-3",
  PARIS: "eu-west-3",
  SAO_PAULO: "sa-east-1",
  SEOUL: "ap-northeast-2",
  SINGAPORE: "ap-southeast-1",
  SPAIN: "eu-south-2",
  STOCKHOLM: "eu-north-1",
  SYDNEY: "ap-southeast-2",
  TOKYO: "ap-northeast-1",
  UAE: "me-central-1",
  US_STANDARD: "us-east-1",
  ZURICH: "eu-central-2",
} as const;
/**
 * @public
 */
export type AWSRegion = (typeof AWSRegion)[keyof typeof AWSRegion];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
} as const;
/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];
