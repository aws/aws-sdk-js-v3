// smithy-typescript generated code
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
