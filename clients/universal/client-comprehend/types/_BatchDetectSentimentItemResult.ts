import {
  _SentimentScore,
  _UnmarshalledSentimentScore
} from "./_SentimentScore";

/**
 * <p>The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.</p>
 */
export interface _BatchDetectSentimentItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The sentiment detected in the document.</p>
   */
  Sentiment?: "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED" | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.</p>
   */
  SentimentScore?: _SentimentScore;
}

export interface _UnmarshalledBatchDetectSentimentItemResult
  extends _BatchDetectSentimentItemResult {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.</p>
   */
  SentimentScore?: _UnmarshalledSentimentScore;
}
