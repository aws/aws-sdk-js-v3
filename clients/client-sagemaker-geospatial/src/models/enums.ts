// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AlgorithmNameCloudRemoval = {
  /**
   * INTERPOLATION
   */
  INTERPOLATION: "INTERPOLATION",
} as const;
/**
 * @public
 */
export type AlgorithmNameCloudRemoval = (typeof AlgorithmNameCloudRemoval)[keyof typeof AlgorithmNameCloudRemoval];

/**
 * @public
 * @enum
 */
export const AlgorithmNameGeoMosaic = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR: "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC: "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE: "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS: "LANCZOS",
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MED
   */
  MED: "MED",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * MODE
   */
  MODE: "MODE",
  /**
   * NEAR
   */
  NEAR: "NEAR",
  /**
   * Q1
   */
  Q1: "Q1",
  /**
   * Q3
   */
  Q3: "Q3",
  /**
   * RMS
   */
  RMS: "RMS",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type AlgorithmNameGeoMosaic = (typeof AlgorithmNameGeoMosaic)[keyof typeof AlgorithmNameGeoMosaic];

/**
 * @public
 * @enum
 */
export const AlgorithmNameResampling = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR: "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC: "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE: "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS: "LANCZOS",
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MED
   */
  MED: "MED",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * MODE
   */
  MODE: "MODE",
  /**
   * NEAR
   */
  NEAR: "NEAR",
  /**
   * Q1
   */
  Q1: "Q1",
  /**
   * Q3
   */
  Q3: "Q3",
  /**
   * RMS
   */
  RMS: "RMS",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type AlgorithmNameResampling = (typeof AlgorithmNameResampling)[keyof typeof AlgorithmNameResampling];

/**
 * @public
 * @enum
 */
export const OutputType = {
  /**
   * FLOAT32
   */
  FLOAT32: "FLOAT32",
  /**
   * FLOAT64
   */
  FLOAT64: "FLOAT64",
  /**
   * INT16
   */
  INT16: "INT16",
  /**
   * INT32
   */
  INT32: "INT32",
  /**
   * UINT16
   */
  UINT16: "UINT16",
} as const;
/**
 * @public
 */
export type OutputType = (typeof OutputType)[keyof typeof OutputType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  /**
   * EQUALS
   */
  EQUALS: "EQUALS",
  /**
   * NOT_EQUALS
   */
  NOT_EQUALS: "NOT_EQUALS",
  /**
   * STARTS_WITH
   */
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const DataCollectionType = {
  /**
   * PREMIUM
   */
  PREMIUM: "PREMIUM",
  /**
   * PUBLIC
   */
  PUBLIC: "PUBLIC",
  /**
   * USER
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type DataCollectionType = (typeof DataCollectionType)[keyof typeof DataCollectionType];

/**
 * @public
 * @enum
 */
export const EarthObservationJobExportStatus = {
  /**
   * FAILED
   */
  FAILED: "FAILED",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * SUCCEEDED
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type EarthObservationJobExportStatus =
  (typeof EarthObservationJobExportStatus)[keyof typeof EarthObservationJobExportStatus];

/**
 * @public
 * @enum
 */
export const EarthObservationJobErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;
/**
 * @public
 */
export type EarthObservationJobErrorType =
  (typeof EarthObservationJobErrorType)[keyof typeof EarthObservationJobErrorType];

/**
 * @public
 * @enum
 */
export const ExportErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;
/**
 * @public
 */
export type ExportErrorType = (typeof ExportErrorType)[keyof typeof ExportErrorType];

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  /**
   * AND
   */
  AND: "AND",
} as const;
/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 * @enum
 */
export const Unit = {
  /**
   * METERS
   */
  METERS: "METERS",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const PredefinedResolution = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * HIGHEST
   */
  HIGHEST: "HIGHEST",
  /**
   * LOWEST
   */
  LOWEST: "LOWEST",
} as const;
/**
 * @public
 */
export type PredefinedResolution = (typeof PredefinedResolution)[keyof typeof PredefinedResolution];

/**
 * @public
 * @enum
 */
export const GroupBy = {
  /**
   * ALL
   */
  ALL: "ALL",
  /**
   * YEARLY
   */
  YEARLY: "YEARLY",
} as const;
/**
 * @public
 */
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy];

/**
 * @public
 * @enum
 */
export const TemporalStatistics = {
  /**
   * MEAN
   */
  MEAN: "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN: "MEDIAN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
} as const;
/**
 * @public
 */
export type TemporalStatistics = (typeof TemporalStatistics)[keyof typeof TemporalStatistics];

/**
 * @public
 * @enum
 */
export const ZonalStatistics = {
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MEAN
   */
  MEAN: "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN: "MEDIAN",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type ZonalStatistics = (typeof ZonalStatistics)[keyof typeof ZonalStatistics];

/**
 * @public
 * @enum
 */
export const EarthObservationJobStatus = {
  /**
   * COMPLETED
   */
  COMPLETED: "COMPLETED",
  /**
   * DELETED
   */
  DELETED: "DELETED",
  /**
   * DELETING
   */
  DELETING: "DELETING",
  /**
   * FAILED
   */
  FAILED: "FAILED",
  /**
   * INITIALIZING
   */
  INITIALIZING: "INITIALIZING",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * STOPPED
   */
  STOPPED: "STOPPED",
  /**
   * STOPPING
   */
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type EarthObservationJobStatus = (typeof EarthObservationJobStatus)[keyof typeof EarthObservationJobStatus];

/**
 * @public
 * @enum
 */
export const TargetOptions = {
  /**
   * INPUT
   */
  INPUT: "INPUT",
  /**
   * OUTPUT
   */
  OUTPUT: "OUTPUT",
} as const;
/**
 * @public
 */
export type TargetOptions = (typeof TargetOptions)[keyof typeof TargetOptions];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  /**
   * ASCENDING
   */
  ASCENDING: "ASCENDING",
  /**
   * DESCENDING
   */
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
export const VectorEnrichmentJobExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobExportStatus =
  (typeof VectorEnrichmentJobExportStatus)[keyof typeof VectorEnrichmentJobExportStatus];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobErrorType =
  (typeof VectorEnrichmentJobErrorType)[keyof typeof VectorEnrichmentJobErrorType];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobExportErrorType = {
  CLIENT_ERROR: "CLIENT_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobExportErrorType =
  (typeof VectorEnrichmentJobExportErrorType)[keyof typeof VectorEnrichmentJobExportErrorType];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobDocumentType = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobDocumentType =
  (typeof VectorEnrichmentJobDocumentType)[keyof typeof VectorEnrichmentJobDocumentType];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobStatus = (typeof VectorEnrichmentJobStatus)[keyof typeof VectorEnrichmentJobStatus];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobType = {
  MAP_MATCHING: "MAP_MATCHING",
  REVERSE_GEOCODING: "REVERSE_GEOCODING",
} as const;
/**
 * @public
 */
export type VectorEnrichmentJobType = (typeof VectorEnrichmentJobType)[keyof typeof VectorEnrichmentJobType];
