// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EventType = {
  ANSWERED: "ANSWERED",
  BUSY: "BUSY",
  COMPLETED_CALL: "COMPLETED_CALL",
  FAILED: "FAILED",
  INITIATED_CALL: "INITIATED_CALL",
  NO_ANSWER: "NO_ANSWER",
  RINGING: "RINGING",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];
