// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Action = {
  INITIALIZE_RESET: "initiateDatabaseReset",
  PERFORM_RESET: "performDatabaseReset",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const RebuildStatus = {
  /**
   * <p>The rebuild operation was cancelled by the user.</p>
   */
  CANCELLED: "CANCELLED",
  /**
   * <p>The rebuild operation was cancelled by the user and is in cancelling phase.</p>
   */
  CANCELLING: "CANCELLING",
  /**
   * <p>The rebuild operation has completed successfully.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>The rebuild operation has failed (completely or partially).</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The rebuild operation is being prepared.</p>
   */
  PREPARING: "PREPARING",
  /**
   * <p>The rebuild operation is actively rebuilding indexes.</p>
   */
  REBUILDING: "REBUILDING",
} as const;
/**
 * @public
 */
export type RebuildStatus = (typeof RebuildStatus)[keyof typeof RebuildStatus];

/**
 * @public
 * @enum
 */
export const WriteBufferSize = {
  /**
   * <p>Use when rebuilding indexes during heavy write workloads or continuous bulk data ingestion.</p>
   */
  HIGH: "HIGH",
  /**
   * <p>Suitable for databases with light to moderate write activity. This is the default.</p>
   */
  LOW: "LOW",
  /**
   * <p>Recommended for databases with sustained write traffic or bulk loading.</p>
   */
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type WriteBufferSize = (typeof WriteBufferSize)[keyof typeof WriteBufferSize];

/**
 * @public
 * @enum
 */
export const OpenCypherExplainMode = {
  DETAILS: "details",
  DYNAMIC: "dynamic",
  STATIC: "static",
} as const;
/**
 * @public
 */
export type OpenCypherExplainMode = (typeof OpenCypherExplainMode)[keyof typeof OpenCypherExplainMode];

/**
 * @public
 * @enum
 */
export const Scope = {
  /**
   * <p>Rebuild all (quads and dictionaries). This is the default option.</p>
   */
  ALL: "ALL",
  /**
   * <p>Rebuild only the dictionaries.</p>
   */
  DICTIONARIES: "DICTIONARIES",
  /**
   * <p>Rebuild only the quad indexes.</p>
   */
  QUADS: "QUADS",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const Encoding = {
  GZIP: "gzip",
} as const;
/**
 * @public
 */
export type Encoding = (typeof Encoding)[keyof typeof Encoding];

/**
 * @public
 * @enum
 */
export const IteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type IteratorType = (typeof IteratorType)[keyof typeof IteratorType];

/**
 * @public
 * @enum
 */
export const GraphSummaryType = {
  BASIC: "basic",
  DETAILED: "detailed",
} as const;
/**
 * @public
 */
export type GraphSummaryType = (typeof GraphSummaryType)[keyof typeof GraphSummaryType];

/**
 * @public
 * @enum
 */
export const StatisticsAutoGenerationMode = {
  DISABLE_AUTOCOMPUTE: "disableAutoCompute",
  ENABLE_AUTOCOMPUTE: "enableAutoCompute",
  REFRESH: "refresh",
} as const;
/**
 * @public
 */
export type StatisticsAutoGenerationMode =
  (typeof StatisticsAutoGenerationMode)[keyof typeof StatisticsAutoGenerationMode];

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "csv",
  NQUADS: "nquads",
  NTRIPLES: "ntriples",
  OPENCYPHER: "opencypher",
  RDFXML: "rdfxml",
  TURTLE: "turtle",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const Mode = {
  AUTO: "AUTO",
  NEW: "NEW",
  RESUME: "RESUME",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const Parallelism = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OVERSUBSCRIBE: "OVERSUBSCRIBE",
} as const;
/**
 * @public
 */
export type Parallelism = (typeof Parallelism)[keyof typeof Parallelism];

/**
 * @public
 * @enum
 */
export const S3BucketRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_EAST_2: "ap-east-2",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_NORTHEAST_3: "ap-northeast-3",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTHEAST_3: "ap-southeast-3",
  AP_SOUTHEAST_4: "ap-southeast-4",
  AP_SOUTHEAST_5: "ap-southeast-5",
  AP_SOUTHEAST_7: "ap-southeast-7",
  AP_SOUTH_1: "ap-south-1",
  AP_SOUTH_2: "ap-south-2",
  CA_CENTRAL_1: "ca-central-1",
  CA_WEST_1: "ca-west-1",
  CN_NORTHWEST_1: "cn-northwest-1",
  CN_NORTH_1: "cn-north-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_CENTRAL_2: "eu-central-2",
  EU_NORTH_1: "eu-north-1",
  EU_SOUTH_2: "eu-south-2",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  IL_CENTRAL_1: "il-central-1",
  ME_CENTRAL_1: "me-central-1",
  ME_SOUTH_1: "me-south-1",
  MX_CENTRAL_1: "mx-central-1",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_GOV_EAST_1: "us-gov-east-1",
  US_GOV_WEST_1: "us-gov-west-1",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type S3BucketRegion = (typeof S3BucketRegion)[keyof typeof S3BucketRegion];
