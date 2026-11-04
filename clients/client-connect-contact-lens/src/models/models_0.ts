// smithy-typescript generated code
import type {
  ExtractedInformationFailureCode,
  PostContactSummaryFailureCode,
  PostContactSummaryStatus,
  SentimentValue,
} from "./enums";

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The section of the contact audio where a match was detected.
 *
 * @public
 */
export interface PointOfInterest {
  /**
   * The beginning offset (in milliseconds) where the match was detected.
   *
   * @public
   */
  BeginOffsetMillis: number | undefined;

  /**
   * The ending offset (in milliseconds) where the match was detected.
   *
   * @public
   */
  EndOffsetMillis: number | undefined;
}

/**
 * Provides information about the category rule that was matched.
 *
 * @public
 */
export interface CategoryDetails {
  /**
   * The section of audio where the category rule was detected.
   *
   * @public
   */
  PointsOfInterest: PointOfInterest[] | undefined;
}

/**
 * Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
 *
 * @public
 */
export interface Categories {
  /**
   * The category rules that have been matched in the analyzed segment.
   *
   * @public
   */
  MatchedCategories: string[] | undefined;

  /**
   * The category rule that was matched and when it occurred in the transcript.
   *
   * @public
   */
  MatchedDetails: Record<string, CategoryDetails> | undefined;
}

/**
 * An individual value extracted from the conversation, including its content and the locations where it was found.
 *
 * @public
 */
export interface ExtractedInformationValue {
  /**
   * The text content of the extracted value.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The sections in the conversation that indicate where the extracted value was found.
   *
   * @public
   */
  PointsOfInterest: PointOfInterest[] | undefined;
}

/**
 * Segment containing information extracted from the conversation. Each segment represents the results for a single extraction definition.
 *
 * @public
 */
export interface ExtractedInformation {
  /**
   * The identifier of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;

  /**
   * The name of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionName: string | undefined;

  /**
   * The display label of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionDisplayLabel?: string | undefined;

  /**
   * The list of values extracted from the conversation for this extraction definition. This field is empty when a `FailureCode` is present.
   *
   * @public
   */
  ExtractedValues?: ExtractedInformationValue[] | undefined;

  /**
   * If the information failed to be extracted, one of the following failure codes occurs:
   *
   * - `QUOTA_EXCEEDED`: The number of concurrent analytics jobs reached your service quota.
   * - `INSUFFICIENT_CONVERSATION_CONTENT`: Information extraction requires a conversation with at least one turn from each participant.
   * - `FAILED_SAFETY_GUIDELINES`: The extracted information cannot be provided because it failed to meet system safety guidelines.
   * - `INTERNAL_ERROR`: Internal system error.
   * - `MAX_PACKAGE_FEATURE_ONLY`: Information extraction is only available in Amazon Connect Customer instances.
   *
   * @public
   */
  FailureCode?: ExtractedInformationFailureCode | undefined;
}

/**
 * Information about the post-contact summary.
 *
 * @public
 */
export interface PostContactSummary {
  /**
   * The content of the summary.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Whether the summary was successfully COMPLETED or FAILED to be generated.
   *
   * @public
   */
  Status: PostContactSummaryStatus | undefined;

  /**
   * If the summary failed to be generated, one of the following failure codes occurs:
   *
   * - `QUOTA_EXCEEDED`: The number of concurrent analytics jobs reached your service quota.
   * - `INSUFFICIENT_CONVERSATION_CONTENT`: The conversation needs to have at least one turn from both the participants in order to generate the summary.
   * - `FAILED_SAFETY_GUIDELINES`: The generated summary cannot be provided because it failed to meet system safety guidelines.
   * - `INVALID_ANALYSIS_CONFIGURATION`: This code occurs when, for example, you're using a [language](https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens) that isn't supported by generative AI-powered post-contact summaries.
   * - `INTERNAL_ERROR`: Internal system error.
   *
   * @public
   */
  FailureCode?: PostContactSummaryFailureCode | undefined;
}

/**
 * For characters that were detected as issues, where they occur in the transcript.
 *
 * @public
 */
export interface CharacterOffsets {
  /**
   * The beginning of the issue.
   *
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * The end of the issue.
   *
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
 *
 * @public
 */
export interface IssueDetected {
  /**
   * The offset for when the issue was detected in the segment.
   *
   * @public
   */
  CharacterOffsets: CharacterOffsets | undefined;
}

/**
 * A list of messages in the session.
 *
 * @public
 */
export interface Transcript {
  /**
   * The identifier of the transcript.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the participant. Valid values are CUSTOMER or AGENT.
   *
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * The role of participant. For example, is it a customer, agent, or system.
   *
   * @public
   */
  ParticipantRole: string | undefined;

  /**
   * The content of the transcript.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The beginning offset in the contact for this transcript.
   *
   * @public
   */
  BeginOffsetMillis: number | undefined;

  /**
   * The end offset in the contact for this transcript.
   *
   * @public
   */
  EndOffsetMillis: number | undefined;

  /**
   * The sentiment detected for this piece of transcript.
   *
   * @public
   */
  Sentiment?: SentimentValue | undefined;

  /**
   * List of positions where issues were detected on the transcript.
   *
   * @public
   */
  IssuesDetected?: IssueDetected[] | undefined;
}

/**
 * An analyzed segment for a real-time analysis session.
 *
 * @public
 */
export interface RealtimeContactAnalysisSegment {
  /**
   * The analyzed transcript.
   *
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * The matched category rules.
   *
   * @public
   */
  Categories?: Categories | undefined;

  /**
   * Information about the post-contact summary.
   *
   * @public
   */
  PostContactSummary?: PostContactSummary | undefined;

  /**
   * The extracted information from the conversation.
   *
   * @public
   */
  ExtractedInformation?: ExtractedInformation | undefined;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsResponse {
  /**
   * An analyzed transcript or category.
   *
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results. If response includes `nextToken` there are two possible scenarios:
   *
   * - There are more segments so another call is required to get them.
   * - There are no more segments at this time, but more may be available later (real-time analysis is in progress) so the client should call the operation again to get new segments.
   *
   * If response does not include `nextToken`, the analysis is completed (successfully or failed) and there are no more segments to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}
