// smithy-typescript generated code
import { PostContactSummaryFailureCode, PostContactSummaryStatus, SentimentValue } from "./enums";

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The section of the contact audio where that category rule was detected.</p>
 * @public
 */
export interface PointOfInterest {
  /**
   * <p>The beginning offset in milliseconds where the category rule was detected.</p>
   * @public
   */
  BeginOffsetMillis: number | undefined;

  /**
   * <p>The ending offset in milliseconds where the category rule was detected.</p>
   * @public
   */
  EndOffsetMillis: number | undefined;
}

/**
 * <p>Provides information about the category rule that was matched.</p>
 * @public
 */
export interface CategoryDetails {
  /**
   * <p>The section of audio where the category rule was detected.</p>
   * @public
   */
  PointsOfInterest: PointOfInterest[] | undefined;
}

/**
 * <p>Provides the category rules that are used to automatically categorize contacts based
 *             on uttered keywords and phrases.</p>
 * @public
 */
export interface Categories {
  /**
   * <p>The category rules that have been matched in the analyzed segment.</p>
   * @public
   */
  MatchedCategories: string[] | undefined;

  /**
   * <p>The category rule that was matched and when it occurred in the transcript.</p>
   * @public
   */
  MatchedDetails: Record<string, CategoryDetails> | undefined;
}

/**
 * <p>Information about the post-contact summary.</p>
 * @public
 */
export interface PostContactSummary {
  /**
   * <p>The content of the summary.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Whether the summary was successfully COMPLETED or FAILED to be generated.</p>
   * @public
   */
  Status: PostContactSummaryStatus | undefined;

  /**
   * <p>If the summary failed to be generated, one of the following failure codes
   *             occurs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUOTA_EXCEEDED</code>: The number of concurrent analytics jobs reached
   *                     your service quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CONVERSATION_CONTENT</code>: The conversation needs to have
   *                     at least one turn from both the participants in order to generate the
   *                     summary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_SAFETY_GUIDELINES</code>: The generated summary cannot be
   *                     provided because it failed to meet system safety guidelines.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_ANALYSIS_CONFIGURATION</code>: This code occurs when, for
   *                     example, you're using a
   *                     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens">language</a>
   *                      that isn't supported by generative AI-powered post-contact summaries.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code>: Internal system error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureCode?: PostContactSummaryFailureCode | undefined;
}

/**
 * <p>For characters that were detected as issues, where they occur in the
 *             transcript.</p>
 * @public
 */
export interface CharacterOffsets {
  /**
   * <p>The beginning of the issue.</p>
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * <p>The end of the issue.</p>
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * <p>Potential issues that are detected based on an artificial intelligence analysis of
 *             each turn in the conversation.</p>
 * @public
 */
export interface IssueDetected {
  /**
   * <p>The offset for when the issue was detected in the segment.</p>
   * @public
   */
  CharacterOffsets: CharacterOffsets | undefined;
}

/**
 * <p>A list of messages in the session.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The identifier of the transcript.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant. Valid values are CUSTOMER or AGENT.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: string | undefined;

  /**
   * <p>The content of the transcript.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The beginning offset in the contact for this transcript.</p>
   * @public
   */
  BeginOffsetMillis: number | undefined;

  /**
   * <p>The end offset in the contact for this transcript.</p>
   * @public
   */
  EndOffsetMillis: number | undefined;

  /**
   * <p>The sentiment detected for this piece of transcript.</p>
   * @public
   */
  Sentiment?: SentimentValue | undefined;

  /**
   * <p>List of positions where issues were detected on the transcript.</p>
   * @public
   */
  IssuesDetected?: IssueDetected[] | undefined;
}

/**
 * <p>An analyzed segment for a real-time analysis session.</p>
 * @public
 */
export interface RealtimeContactAnalysisSegment {
  /**
   * <p>The analyzed transcript.</p>
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * <p>The matched category rules.</p>
   * @public
   */
  Categories?: Categories | undefined;

  /**
   * <p>Information about the post-contact summary.</p>
   * @public
   */
  PostContactSummary?: PostContactSummary | undefined;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsResponse {
  /**
   * <p>An analyzed transcript or category.</p>
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results. If response includes <code>nextToken</code> there are two possible
   *             scenarios:</p>
   *          <ul>
   *             <li>
   *                <p>There are more segments so another call is required to get them.</p>
   *             </li>
   *             <li>
   *                <p>There are no more segments at this time, but more may be available later
   *                     (real-time analysis is in progress) so the client should call the operation
   *                     again to get new segments.</p>
   *             </li>
   *          </ul>
   *          <p>If response does not include <code>nextToken</code>, the analysis is completed
   *             (successfully or failed) and there are no more segments to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}
