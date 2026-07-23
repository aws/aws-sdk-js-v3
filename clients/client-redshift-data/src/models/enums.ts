// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  AUTO_COMMIT: "AUTO_COMMIT",
  TRANSACTION: "TRANSACTION",
} as const;
/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const ResultFormatString = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type ResultFormatString = (typeof ResultFormatString)[keyof typeof ResultFormatString];

/**
 * @public
 * @enum
 */
export const StatementStatusString = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  PICKED: "PICKED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type StatementStatusString = (typeof StatementStatusString)[keyof typeof StatementStatusString];

/**
 * @public
 * @enum
 */
export const StatusString = {
  ABORTED: "ABORTED",
  ALL: "ALL",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  PICKED: "PICKED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type StatusString = (typeof StatusString)[keyof typeof StatusString];

/**
 * @public
 * @enum
 */
export const SessionStatusString = {
  AVAILABLE: "AVAILABLE",
  BUSY: "BUSY",
  CLOSED: "CLOSED",
} as const;
/**
 * @public
 */
export type SessionStatusString = (typeof SessionStatusString)[keyof typeof SessionStatusString];
