// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CompletionStatus = {
  /**
   * Trajectory failed; terminal state, no further processing.
   */
  FAILED: "failed",
  /**
   * Trajectory completed successfully; sealed and eligible for reward submission.
   */
  READY: "ready",
} as const;
/**
 * @public
 */
export type CompletionStatus = (typeof CompletionStatus)[keyof typeof CompletionStatus];
