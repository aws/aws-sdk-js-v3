// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectContactLensServiceException as __BaseException } from "./ConnectContactLensServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request is not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The section of the contact audio where that category rule was detected.</p>
 */
export interface PointOfInterest {
  /**
   * @public
   * <p>The beginning offset in milliseconds where the category rule was detected.</p>
   */
  BeginOffsetMillis: number | undefined;

  /**
   * @public
   * <p>The ending offset in milliseconds where the category rule was detected.</p>
   */
  EndOffsetMillis: number | undefined;
}

/**
 * @public
 * <p>Provides information about the category rule that was matched.</p>
 */
export interface CategoryDetails {
  /**
   * @public
   * <p>The section of audio where the category rule was detected.</p>
   */
  PointsOfInterest: PointOfInterest[] | undefined;
}

/**
 * @public
 * <p>Provides the category rules that are used to automatically categorize contacts based on
 *       uttered keywords and phrases.</p>
 */
export interface Categories {
  /**
   * @public
   * <p>The category rules that have been matched in the analyzed segment.</p>
   */
  MatchedCategories: string[] | undefined;

  /**
   * @public
   * <p>The category rule that was matched and when it occurred in the transcript.</p>
   */
  MatchedDetails: Record<string, CategoryDetails> | undefined;
}

/**
 * @public
 * <p>For characters that were detected as issues, where they occur in the transcript.</p>
 */
export interface CharacterOffsets {
  /**
   * @public
   * <p>The beginning of the issue.</p>
   */
  BeginOffsetChar: number | undefined;

  /**
   * @public
   * <p>The end of the issue.</p>
   */
  EndOffsetChar: number | undefined;
}

/**
 * @public
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each
 *       turn in the conversation.</p>
 */
export interface IssueDetected {
  /**
   * @public
   * <p>The offset for when the issue was detected in the segment.</p>
   */
  CharacterOffsets: CharacterOffsets | undefined;
}

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

/**
 * @public
 * <p>A list of messages in the session.</p>
 */
export interface Transcript {
  /**
   * @public
   * <p>The identifier of the transcript.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the participant.</p>
   */
  ParticipantId: string | undefined;

  /**
   * @public
   * <p>The role of participant. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole: string | undefined;

  /**
   * @public
   * <p>The content of the transcript.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The beginning offset in the contact for this transcript.</p>
   */
  BeginOffsetMillis: number | undefined;

  /**
   * @public
   * <p>The end offset in the contact for this transcript.</p>
   */
  EndOffsetMillis: number | undefined;

  /**
   * @public
   * <p>The sentiment of the detected for this piece of transcript.</p>
   */
  Sentiment: SentimentValue | undefined;

  /**
   * @public
   * <p>List of positions where issues were detected on the transcript.</p>
   */
  IssuesDetected?: IssueDetected[];
}

/**
 * @public
 * <p>An analyzed segment for a real-time analysis session.</p>
 */
export interface RealtimeContactAnalysisSegment {
  /**
   * @public
   * <p>The analyzed transcript.</p>
   */
  Transcript?: Transcript;

  /**
   * @public
   * <p>The matched category rules.</p>
   */
  Categories?: Categories;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsResponse {
  /**
   * @public
   * <p>An analyzed transcript or category.</p>
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * @public
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

/**
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The throttling limit has been exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}
