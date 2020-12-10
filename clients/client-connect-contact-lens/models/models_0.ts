import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

export interface ListRealtimeContactAnalysisSegmentsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListRealtimeContactAnalysisSegmentsRequest {
  export const filterSensitiveLog = (obj: ListRealtimeContactAnalysisSegmentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The section of the contact audio where that category rule was detected.</p>
 */
export interface PointOfInterest {
  /**
   * <p>The beginning offset in milliseconds where the category rule was detected.</p>
   */
  BeginOffsetMillis: number | undefined;

  /**
   * <p>The ending offset in milliseconds where the category rule was detected.</p>
   */
  EndOffsetMillis: number | undefined;
}

export namespace PointOfInterest {
  export const filterSensitiveLog = (obj: PointOfInterest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the category rule that was matched.</p>
 */
export interface CategoryDetails {
  /**
   * <p>The section of audio where the category rule was detected.</p>
   */
  PointsOfInterest: PointOfInterest[] | undefined;
}

export namespace CategoryDetails {
  export const filterSensitiveLog = (obj: CategoryDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the category rules that are used to automatically categorize contacts based on
 *       uttered keywords and phrases.</p>
 */
export interface Categories {
  /**
   * <p>The category rules that have been matched in the analyzed segment.</p>
   */
  MatchedCategories: string[] | undefined;

  /**
   * <p>The category rule that was matched and when it occurred in the transcript.</p>
   */
  MatchedDetails: { [key: string]: CategoryDetails } | undefined;
}

export namespace Categories {
  export const filterSensitiveLog = (obj: Categories): any => ({
    ...obj,
  });
}

/**
 * <p>For characters that were detected as issues, where they occur in the transcript.</p>
 */
export interface CharacterOffsets {
  /**
   * <p>The beginning of the issue.</p>
   */
  BeginOffsetChar: number | undefined;

  /**
   * <p>The end of the issue.</p>
   */
  EndOffsetChar: number | undefined;
}

export namespace CharacterOffsets {
  export const filterSensitiveLog = (obj: CharacterOffsets): any => ({
    ...obj,
  });
}

/**
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each
 *       turn in the conversation.</p>
 */
export interface IssueDetected {
  /**
   * <p>The offset for when the issue was detected in the segment.</p>
   */
  CharacterOffsets: CharacterOffsets | undefined;
}

export namespace IssueDetected {
  export const filterSensitiveLog = (obj: IssueDetected): any => ({
    ...obj,
  });
}

export enum SentimentValue {
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * <p>A list of messages in the session.</p>
 */
export interface Transcript {
  /**
   * <p>The identifier of the transcript.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of participant. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole: string | undefined;

  /**
   * <p>The content of the transcript.</p>
   */
  Content: string | undefined;

  /**
   * <p>The beginning offset in the contact for this transcript.</p>
   */
  BeginOffsetMillis: number | undefined;

  /**
   * <p>The end offset in the contact for this transcript.</p>
   */
  EndOffsetMillis: number | undefined;

  /**
   * <p>The sentiment of the detected for this piece of transcript.</p>
   */
  Sentiment: SentimentValue | string | undefined;

  /**
   * <p>List of positions where issues were detected on the transcript.</p>
   */
  IssuesDetected?: IssueDetected[];
}

export namespace Transcript {
  export const filterSensitiveLog = (obj: Transcript): any => ({
    ...obj,
  });
}

/**
 * <p>An analyzed segment for a real-time analysis session.</p>
 */
export interface RealtimeContactAnalysisSegment {
  /**
   * <p>The analyzed transcript.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>The matched category rules.</p>
   */
  Categories?: Categories;
}

export namespace RealtimeContactAnalysisSegment {
  export const filterSensitiveLog = (obj: RealtimeContactAnalysisSegment): any => ({
    ...obj,
  });
}

export interface ListRealtimeContactAnalysisSegmentsResponse {
  /**
   * <p>An analyzed transcript or category.</p>
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results. If response includes <code>nextToken</code> there are two possible scenarios:</p>
   *          <ul>
   *             <li>
   *                <p>There are more segments so another call is required to get them.</p>
   *             </li>
   *             <li>
   *                <p>There are no more segments at this time, but more may be available later (real-time
   *           analysis is in progress) so the client should call the operation again to get new
   *           segments.</p>
   *             </li>
   *          </ul>
   *          <p>If response does not include <code>nextToken</code>, the analysis is completed (successfully or failed) and there are no more segments to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListRealtimeContactAnalysisSegmentsResponse {
  export const filterSensitiveLog = (obj: ListRealtimeContactAnalysisSegmentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}
