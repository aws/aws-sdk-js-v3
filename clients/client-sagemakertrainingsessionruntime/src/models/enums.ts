// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncodedTextChunkType = {
  ENCODED_TEXT: "encoded_text",
} as const;
/**
 * @public
 */
export type EncodedTextChunkType = (typeof EncodedTextChunkType)[keyof typeof EncodedTextChunkType];

/**
 * @public
 * @enum
 */
export const LossFnName = {
  CISPO: "cispo",
  CROSS_ENTROPY: "cross_entropy",
  IMPORTANCE_SAMPLING: "importance_sampling",
  PPO: "ppo",
} as const;
/**
 * @public
 */
export type LossFnName = (typeof LossFnName)[keyof typeof LossFnName];

/**
 * @public
 * @enum
 */
export const StopReason = {
  LENGTH: "length",
  STOP: "stop",
} as const;
/**
 * @public
 */
export type StopReason = (typeof StopReason)[keyof typeof StopReason];

/**
 * @public
 * @enum
 */
export const RequestStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SKIPPED: "Skipped",
} as const;
/**
 * @public
 */
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
