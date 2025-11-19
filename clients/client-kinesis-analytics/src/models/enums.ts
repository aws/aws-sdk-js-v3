// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecordFormatType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type RecordFormatType = (typeof RecordFormatType)[keyof typeof RecordFormatType];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DELETING: "DELETING",
  READY: "READY",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const InputStartingPosition = {
  LAST_STOPPED_POINT: "LAST_STOPPED_POINT",
  NOW: "NOW",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type InputStartingPosition = (typeof InputStartingPosition)[keyof typeof InputStartingPosition];
