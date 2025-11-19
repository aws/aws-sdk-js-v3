// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PostContactSummaryFailureCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ANALYSIS_CONFIGURATION: "INVALID_ANALYSIS_CONFIGURATION",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;
/**
 * @public
 */
export type PostContactSummaryFailureCode =
  (typeof PostContactSummaryFailureCode)[keyof typeof PostContactSummaryFailureCode];

/**
 * @public
 * @enum
 */
export const PostContactSummaryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type PostContactSummaryStatus = (typeof PostContactSummaryStatus)[keyof typeof PostContactSummaryStatus];

/**
 * @public
 * @enum
 */
export const SentimentValue = {
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;
/**
 * @public
 */
export type SentimentValue = (typeof SentimentValue)[keyof typeof SentimentValue];
