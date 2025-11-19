// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ComputeType = {
  ACU_1: "ACU_1",
  ACU_2: "ACU_2",
} as const;
/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const DatastoreStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DatastoreStatus = (typeof DatastoreStatus)[keyof typeof DatastoreStatus];

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
} as const;
/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * @enum
 */
export const ReprocessingStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ReprocessingStatus = (typeof ReprocessingStatus)[keyof typeof ReprocessingStatus];

/**
 * @public
 * @enum
 */
export const DatasetContentState = {
  CREATING: "CREATING",
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DatasetContentState = (typeof DatasetContentState)[keyof typeof DatasetContentState];

/**
 * @public
 * @enum
 */
export const DatasetActionType = {
  CONTAINER: "CONTAINER",
  QUERY: "QUERY",
} as const;
/**
 * @public
 */
export type DatasetActionType = (typeof DatasetActionType)[keyof typeof DatasetActionType];

/**
 * @public
 * @enum
 */
export const FileFormatType = {
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type FileFormatType = (typeof FileFormatType)[keyof typeof FileFormatType];
