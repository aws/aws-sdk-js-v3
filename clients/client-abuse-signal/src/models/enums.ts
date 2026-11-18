// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ReasonCode = {
  ACTIONED: "ACTIONED",
  CONTENT_DOWN_OR_INACCESSIBLE: "CONTENT_DOWN_OR_INACCESSIBLE",
  NEED_MORE_INFORMATION: "NEED_MORE_INFORMATION",
  NOT_RESOLVABLE_TO_AWS: "NOT_RESOLVABLE_TO_AWS",
  REVIEWED_NO_AWS_ACTION: "REVIEWED_NO_AWS_ACTION",
} as const;
/**
 * @public
 */
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];

/**
 * @public
 * @enum
 */
export const ReportSubmissionStatus = {
  COMPLETED: "COMPLETED",
  PROCESSING: "PROCESSING",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type ReportSubmissionStatus = (typeof ReportSubmissionStatus)[keyof typeof ReportSubmissionStatus];
