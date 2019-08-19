import { _UnmarshalledSentimentScore } from "./_SentimentScore";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectSentimentOutput shape
 */
export interface DetectSentimentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest level of confidence in.</p>
   */
  Sentiment?: "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED" | string;

  /**
   * <p>An object that lists the sentiments, and their corresponding confidence levels.</p>
   */
  SentimentScore?: _UnmarshalledSentimentScore;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
