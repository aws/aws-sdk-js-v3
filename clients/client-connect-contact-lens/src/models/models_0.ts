// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectContactLensServiceException as __BaseException } from "./ConnectContactLensServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * <p>Request processing failed due to an error or failure with the service.</p>
 * @public
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
 * <p>The request is not valid.</p>
 * @public
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
   * <p>The maximimum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
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
 * <p>Provides the category rules that are used to automatically categorize contacts based on
 *       uttered keywords and phrases.</p>
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
 * <p>For characters that were detected as issues, where they occur in the transcript.</p>
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
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each
 *       turn in the conversation.</p>
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
   * <p>The identifier of the participant.</p>
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
   * <p>The sentiment of the detected for this piece of transcript.</p>
   * @public
   */
  Sentiment: SentimentValue | undefined;

  /**
   * <p>List of positions where issues were detected on the transcript.</p>
   * @public
   */
  IssuesDetected?: IssueDetected[];
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
  Transcript?: Transcript;

  /**
   * <p>The matched category rules.</p>
   * @public
   */
  Categories?: Categories;
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
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The specified resource was not found.</p>
 * @public
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
 * <p>The throttling limit has been exceeded.</p>
 * @public
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
