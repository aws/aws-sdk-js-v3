// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ChimeSDKMeetingsServiceException as __BaseException } from "./ChimeSDKMeetingsServiceException";

/**
 * @public
 * @enum
 */
export const MediaCapabilities = {
  NONE: "None",
  RECEIVE: "Receive",
  SEND: "Send",
  SEND_RECEIVE: "SendReceive",
} as const;

/**
 * @public
 */
export type MediaCapabilities = (typeof MediaCapabilities)[keyof typeof MediaCapabilities];

/**
 * <p>The media capabilities of an attendee: audio, video, or content.</p>
 *          <note>
 *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information, refer to
 *              and .</p>
 *          </note>
 *          <p>When using capabilities, be aware of these corner cases:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify <code>MeetingFeatures:Video:MaxResolution:None</code> when you create a meeting, all API requests
 *                     that include <code>SendReceive</code>, <code>Send</code>, or <code>Receive</code> for <code>AttendeeCapabilities:Video</code> will be rejected with <code>ValidationError 400</code>.</p>
 *             </li>
 *             <li>
 *                <p>If you specify <code>MeetingFeatures:Content:MaxResolution:None</code> when you create a meeting, all API requests that include <code>SendReceive</code>, <code>Send</code>, or
 *                     <code>Receive</code> for <code>AttendeeCapabilities:Content</code> will be rejected with <code>ValidationError 400</code>.</p>
 *             </li>
 *             <li>
 *                <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
 *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your
 *                     <code>video</code> capability to receive and you set your <code>content</code> capability to not receive.</p>
 *             </li>
 *             <li>
 *                <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and an attendee unmutes their microphone, audio flows from the attendee to the other meeting participants.</p>
 *             </li>
 *             <li>
 *                <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and the attendee turns on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AttendeeCapabilities {
  /**
   * <p>The audio capability assigned to an attendee.</p>
   * @public
   */
  Audio: MediaCapabilities | undefined;

  /**
   * <p>The video capability assigned to an attendee.</p>
   * @public
   */
  Video: MediaCapabilities | undefined;

  /**
   * <p>The content capability assigned to an attendee.</p>
   * @public
   */
  Content: MediaCapabilities | undefined;
}

/**
 * <p>An Amazon Chime SDK meeting attendee. Includes a unique
 *            <code>AttendeeId</code> and <code>JoinToken</code>. The
 *            <code>JoinToken</code>
 *            allows a client to authenticate and join as the specified attendee. The
 *            <code>JoinToken</code>
 *            expires when the meeting ends, or when
 *            <a>DeleteAttendee</a>
 *            is called. After that, the attendee is unable to join the meeting.
 *        </p>
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *            to the client so that no other client has access to the token except for the one
 *            authorized to represent the attendee.</p>
 * @public
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *             Case insensitive.</p>
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId?: string | undefined;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   * @public
   */
  JoinToken?: string | undefined;

  /**
   * <p>The capabilities assigned to an attendee: audio, video, or content.</p>
   *          <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *          <p>When using capabilities, be aware of these corner cases:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>MeetingFeatures:Video:MaxResolution:None</code> when you create a meeting, all API requests
   *                     that include <code>SendReceive</code>, <code>Send</code>, or <code>Receive</code> for <code>AttendeeCapabilities:Video</code> will be rejected with <code>ValidationError 400</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>MeetingFeatures:Content:MaxResolution:None</code> when you create a meeting, all API requests that include <code>SendReceive</code>, <code>Send</code>, or
   *                     <code>Receive</code> for <code>AttendeeCapabilities:Content</code> will be rejected with <code>ValidationError 400</code>.</p>
   *             </li>
   *             <li>
   *                <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *             </li>
   *             <li>
   *                <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *             </li>
   *             <li>
   *                <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * <p>Lists the maximum number of attendees allowed into the meeting.</p>
 *          <note>
 *             <p>If you specify <code>FHD</code> for <code>MeetingFeatures:Video:MaxResolution</code>, or if you specify
 *            <code>UHD</code> for <code>MeetingFeatures:Content:MaxResolution</code>, the maximum number of attendees changes from the default of <code>250</code> to <code>25</code>.</p>
 *          </note>
 * @public
 */
export interface AttendeeFeatures {
  /**
   * <p>The maximum number of attendees allowed into the meeting.</p>
   * @public
   */
  MaxCount?: number | undefined;
}

/**
 * <p>A structure that contains one or more attendee IDs.</p>
 * @public
 */
export interface AttendeeIdItem {
  /**
   * <p>A list of one or more attendee IDs.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * <p>An optional category of meeting features that contains audio-specific configurations, such as operating parameters for Amazon Voice Focus. </p>
 * @public
 */
export interface AudioFeatures {
  /**
   * <p>Makes echo reduction available to clients who connect to the meeting.</p>
   * @public
   */
  EchoReduction?: MeetingFeatureStatus | undefined;
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 * @public
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *             Case insensitive.</p>
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * <p>A list of one or more capabilities.</p>
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK ID of the meeting to which you're adding attendees.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   * @public
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 * @public
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *             Case insensitive.</p>
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The request exceeds the resource limit.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The ID of the failed request.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   * @public
   */
  RetryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The number of customer requests exceeds the request rate limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The ID of the request that exceeded the throttling limit.</p>
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The user isn't authorized to request a resource.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface BatchUpdateAttendeeCapabilitiesExceptRequest {
  /**
   * <p>The ID of the meeting associated with the update request.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The <code>AttendeeIDs</code> that you want to exclude from one or more capabilities.</p>
   * @public
   */
  ExcludedAttendeeIds: AttendeeIdItem[] | undefined;

  /**
   * <p>The capabilities (<code>audio</code>, <code>video</code>, or <code>content</code>) that you want to update.</p>
   * @public
   */
  Capabilities: AttendeeCapabilities | undefined;
}

/**
 * <p>Multiple instances of the same request have been made simultaneously.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The ID of the request involved in the conflict.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface CreateAttendeeRequest {
  /**
   * <p>The unique ID of the meeting.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that
   *             uses this prefix.</p>
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The capabilities (<code>audio</code>, <code>video</code>, or <code>content</code>) that you want to grant an attendee. If you don't specify capabilities, all users have send and receive capabilities on
   *             all media channels by default.</p>
   *          <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *          <p>When using capabilities, be aware of these corner cases:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>MeetingFeatures:Video:MaxResolution:None</code> when you create a meeting, all API requests
   *                         that include <code>SendReceive</code>, <code>Send</code>, or <code>Receive</code> for <code>AttendeeCapabilities:Video</code> will be rejected with <code>ValidationError 400</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>MeetingFeatures:Content:MaxResolution:None</code> when you create a meeting, all API requests that include <code>SendReceive</code>, <code>Send</code>, or
   *                         <code>Receive</code> for <code>AttendeeCapabilities:Content</code> will be rejected with <code>ValidationError 400</code>.</p>
   *             </li>
   *             <li>
   *                <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *             </li>
   *             <li>
   *                <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *             </li>
   *             <li>
   *                <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                    and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * @public
 * @enum
 */
export const ContentResolution = {
  FHD: "FHD",
  NONE: "None",
  UHD: "UHD",
} as const;

/**
 * @public
 */
export type ContentResolution = (typeof ContentResolution)[keyof typeof ContentResolution];

/**
 * <p>Lists the content (screen share) features for the meeting. Applies to all attendees.</p>
 *          <note>
 *             <p>If you specify <code>MeetingFeatures:Content:MaxResolution:None</code> when you create a meeting, all API requests that include <code>SendReceive</code>, <code>Send</code>, or
 *                 <code>Receive</code> for <code>AttendeeCapabilities:Content</code> will be rejected with <code>ValidationError 400</code>.</p>
 *          </note>
 * @public
 */
export interface ContentFeatures {
  /**
   * <p>The maximum resolution for the meeting content.</p>
   *          <note>
   *             <p>Defaults to <code>FHD</code>. To use <code>UHD</code>, you must also provide a <code>MeetingFeatures:Attendee:MaxCount</code>
   *          value and override the default size limit of 250 attendees.</p>
   *          </note>
   * @public
   */
  MaxResolution?: ContentResolution | undefined;
}

/**
 * @public
 * @enum
 */
export const VideoResolution = {
  FHD: "FHD",
  HD: "HD",
  NONE: "None",
} as const;

/**
 * @public
 */
export type VideoResolution = (typeof VideoResolution)[keyof typeof VideoResolution];

/**
 * <p>The video features set for the meeting. Applies to all attendees.</p>
 *          <note>
 *             <p>If you specify <code>MeetingFeatures:Video:MaxResolution:None</code> when you create a meeting, all API requests
 *                 that include <code>SendReceive</code>, <code>Send</code>, or <code>Receive</code> for <code>AttendeeCapabilities:Video</code> will be rejected with <code>ValidationError 400</code>.</p>
 *          </note>
 * @public
 */
export interface VideoFeatures {
  /**
   * <p>The maximum video resolution for the meeting. Applies to all attendees.</p>
   *          <note>
   *             <p>Defaults to <code>HD</code>. To use <code>FHD</code>, you must also provide a <code>MeetingFeatures:Attendee:MaxCount</code> value and override the default size
   *             limit of 250 attendees.</p>
   *          </note>
   * @public
   */
  MaxResolution?: VideoResolution | undefined;
}

/**
 * <p>The configuration settings of the features available to a meeting.</p>
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * <p>The configuration settings for the audio features available to a meeting.</p>
   * @public
   */
  Audio?: AudioFeatures | undefined;

  /**
   * <p>The configuration settings for the video features available to a meeting.</p>
   * @public
   */
  Video?: VideoFeatures | undefined;

  /**
   * <p>The configuration settings for the content features available to a meeting.</p>
   * @public
   */
  Content?: ContentFeatures | undefined;

  /**
   * <p>The configuration settings for the attendee features available to a meeting.</p>
   * @public
   */
  Attendee?: AttendeeFeatures | undefined;
}

/**
 * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
 * @public
 */
export interface NotificationsConfiguration {
  /**
   * <p>The ARN of the Amazon Web Services Lambda function in the notifications configuration.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * <p>The ARN of the SNS topic.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The ARN of the SQS queue.</p>
   * @public
   */
  SqsQueueArn?: string | undefined;
}

/**
 * <p>A key-value pair that you define.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Region in which to create the meeting.</p>
   *          <p>
   *            Available values:
   *            <code>af-south-1</code>,
   *            <code>ap-northeast-1</code>,
   *            <code>ap-northeast-2</code>,
   *            <code>ap-south-1</code>,
   *            <code>ap-southeast-1</code>,
   *            <code>ap-southeast-2</code>,
   *            <code>ca-central-1</code>,
   *            <code>eu-central-1</code>,
   *            <code>eu-north-1</code>,
   *            <code>eu-south-1</code>,
   *            <code>eu-west-1</code>,
   *            <code>eu-west-2</code>,
   *            <code>eu-west-3</code>,
   *            <code>sa-east-1</code>,
   *            <code>us-east-1</code>,
   *            <code>us-east-2</code>,
   *            <code>us-west-1</code>,
   *            <code>us-west-2</code>.
   *        </p>
   *          <p>Available values in Amazon Web Services GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   * @public
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *            Case insensitive.</p>
   * @public
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   * @public
   */
  NotificationsConfiguration?: NotificationsConfiguration | undefined;

  /**
   * <p>Lists the audio and video features enabled for a meeting, such as echo reduction.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * <p>When specified, replicates the media from the primary meeting to the new meeting.</p>
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * <p>A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.</p>
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * <p>Applies one or more tags to an Amazon Chime SDK meeting. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Not all resources have tags. For a list of services with resources that support tagging using this operation, see
   *         <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource
   *         doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p>
   *             </li>
   *             <li>
   *                <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the
   *        <i>AWS General Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the
   *         documentation for each service.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be
   *             used for private or sensitive data.</p>
   *          </important>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example,
   *                    to tag a <code>ChimeSDKMeetings</code> instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p>
   *          <p>
   *             <code>tag:TagResources</code>
   *          </p>
   *          <p>
   *             <code>ChimeSDKMeetings:CreateTags</code>
   *          </p>
   *          <note>
   *             <p>Some services might have specific requirements for tagging some resources. For example, to tag an Amazon S3 bucket, you must also have the <code>s3:GetBucketTagging</code> permission.
   *                 If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 * @public
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   * @public
   */
  AudioHostUrl?: string | undefined;

  /**
   * <p>The audio fallback URL.</p>
   * @public
   */
  AudioFallbackUrl?: string | undefined;

  /**
   * <p>The signaling URL.</p>
   * @public
   */
  SignalingUrl?: string | undefined;

  /**
   * <p>The turn control URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is deprecated and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  TurnControlUrl?: string | undefined;

  /**
   * <p>The screen data URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is deprecated and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  ScreenDataUrl?: string | undefined;

  /**
   * <p>The screen viewing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is deprecated and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  ScreenViewingUrl?: string | undefined;

  /**
   * <p>The screen sharing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is deprecated and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  ScreenSharingUrl?: string | undefined;

  /**
   * <p>The event ingestion URL.</p>
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 * @public
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *             Case insensitive.</p>
   * @public
   */
  ExternalMeetingId?: string | undefined;

  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *             <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *             <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *             <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *             <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *             <code>us-west-1</code>, <code>us-west-2</code>.</p>
   *          <p>Available values in Amazon Web Services GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * <p>The media placement for the meeting.</p>
   * @public
   */
  MediaPlacement?: MediaPlacement | undefined;

  /**
   * <p>The features available to a meeting, such as echo reduction.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * <p>When specified, replicates the media from the primary meeting to this meeting.</p>
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * <p>Array of strings.</p>
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * <p>The ARN of the meeting.</p>
   * @public
   */
  MeetingArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The Region in which to create the meeting.</p>
   *          <p>
   *            Available values:
   *            <code>af-south-1</code>,
   *            <code>ap-northeast-1</code>,
   *            <code>ap-northeast-2</code>,
   *            <code>ap-south-1</code>,
   *            <code>ap-southeast-1</code>,
   *            <code>ap-southeast-2</code>,
   *            <code>ca-central-1</code>,
   *            <code>eu-central-1</code>,
   *            <code>eu-north-1</code>,
   *            <code>eu-south-1</code>,
   *            <code>eu-west-1</code>,
   *            <code>eu-west-2</code>,
   *            <code>eu-west-3</code>,
   *            <code>sa-east-1</code>,
   *            <code>us-east-1</code>,
   *            <code>us-east-2</code>,
   *            <code>us-west-1</code>,
   *            <code>us-west-2</code>.
   *        </p>
   *          <p>Available values in Amazon Web Services GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   * @public
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   *          <p>Pattern: <code>[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*</code>
   *          </p>
   *          <p>Values that begin with <code>aws:</code> are reserved. You can't configure a value that uses this prefix.
   *            Case insensitive.</p>
   * @public
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>Lists the audio and video features enabled for a meeting, such as echo reduction.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   * @public
   */
  NotificationsConfiguration?: NotificationsConfiguration | undefined;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   * @public
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;

  /**
   * <p>When specified, replicates the media from the primary meeting to the new meeting.</p>
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * <p>A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.</p>
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * <p>The tags in the request.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   * @public
   */
  Meeting?: Meeting | undefined;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * @public
 */
export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * @public
 */
export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags requested for the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The resource that you want to tag couldn't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The ID of the resource that couldn't be found.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The name of the resource that couldn't be found.</p>
   * @public
   */
  ResourceName?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 * @enum
 */
export const TranscribeMedicalContentIdentificationType = {
  PHI: "PHI",
} as const;

/**
 * @public
 */
export type TranscribeMedicalContentIdentificationType =
  (typeof TranscribeMedicalContentIdentificationType)[keyof typeof TranscribeMedicalContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalLanguageCode = {
  EN_US: "en-US",
} as const;

/**
 * @public
 */
export type TranscribeMedicalLanguageCode =
  (typeof TranscribeMedicalLanguageCode)[keyof typeof TranscribeMedicalLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalRegion = {
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_WEST_1: "eu-west-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type TranscribeMedicalRegion = (typeof TranscribeMedicalRegion)[keyof typeof TranscribeMedicalRegion];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalSpecialty = {
  CARDIOLOGY: "CARDIOLOGY",
  NEUROLOGY: "NEUROLOGY",
  ONCOLOGY: "ONCOLOGY",
  PRIMARYCARE: "PRIMARYCARE",
  RADIOLOGY: "RADIOLOGY",
  UROLOGY: "UROLOGY",
} as const;

/**
 * @public
 */
export type TranscribeMedicalSpecialty = (typeof TranscribeMedicalSpecialty)[keyof typeof TranscribeMedicalSpecialty];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalType = {
  CONVERSATION: "CONVERSATION",
  DICTATION: "DICTATION",
} as const;

/**
 * @public
 */
export type TranscribeMedicalType = (typeof TranscribeMedicalType)[keyof typeof TranscribeMedicalType];

/**
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 * @public
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   * @public
   */
  LanguageCode: TranscribeMedicalLanguageCode | undefined;

  /**
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   * @public
   */
  Specialty: TranscribeMedicalSpecialty | undefined;

  /**
   * <p>The type of transcription.</p>
   * @public
   */
  Type: TranscribeMedicalType | undefined;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The Amazon Web Services Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region. </p>
   * @public
   */
  Region?: TranscribeMedicalRegion | undefined;

  /**
   * <p>Set this field to <code>PHI</code> to identify personal health information in the transcription output.</p>
   * @public
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | undefined;
}

/**
 * @public
 * @enum
 */
export const TranscribeContentIdentificationType = {
  PII: "PII",
} as const;

/**
 * @public
 */
export type TranscribeContentIdentificationType =
  (typeof TranscribeContentIdentificationType)[keyof typeof TranscribeContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeContentRedactionType = {
  PII: "PII",
} as const;

/**
 * @public
 */
export type TranscribeContentRedactionType =
  (typeof TranscribeContentRedactionType)[keyof typeof TranscribeContentRedactionType];

/**
 * @public
 * @enum
 */
export const TranscribeLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_BR: "pt-BR",
  TH_TH: "th-TH",
  ZH_CN: "zh-CN",
} as const;

/**
 * @public
 */
export type TranscribeLanguageCode = (typeof TranscribeLanguageCode)[keyof typeof TranscribeLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribePartialResultsStability = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;

/**
 * @public
 */
export type TranscribePartialResultsStability =
  (typeof TranscribePartialResultsStability)[keyof typeof TranscribePartialResultsStability];

/**
 * @public
 * @enum
 */
export const TranscribeRegion = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_GOV_WEST_1: "us-gov-west-1",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type TranscribeRegion = (typeof TranscribeRegion)[keyof typeof TranscribeRegion];

/**
 * @public
 * @enum
 */
export const TranscribeVocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;

/**
 * @public
 */
export type TranscribeVocabularyFilterMethod =
  (typeof TranscribeVocabularyFilterMethod)[keyof typeof TranscribeVocabularyFilterMethod];

/**
 * <p>Settings specific for Amazon Transcribe as the live transcription engine. </p>
 *          <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the
 *             <code>BadRequestException</code> generated by Amazon Transcribe.  For more information on each parameter and which combinations are valid, refer to the
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the
 *             <i>Amazon Transcribe Developer Guide</i>.</p>
 * @public
 */
export interface EngineTranscribeSettings {
  /**
   * <p>Specify the language code that represents the language spoken.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   * @public
   */
  LanguageCode?: TranscribeLanguageCode | undefined;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. </p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more vocabulary filters with your transcription, use the <code>VocabularyFilterNames</code> parameter instead.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more custom vocabularies with your transcription, use the <code>VocabularyNames</code>
   *                 parameter instead.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which to use Amazon Transcribe.</p>
   *          <p>If you don't specify a Region, then the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html">MediaRegion</a> of the meeting is used.
   *             However, if Amazon Transcribe is not available in the <code>MediaRegion</code>, then a <code>TranscriptFailed</code> event is sent.</p>
   *          <p>Use <code>auto</code> to use Amazon Transcribe in a Region near the meeting’s <code>MediaRegion</code>.  For more information, refer to
   *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/transcription-options.html#choose-region">Choosing a transcription Region</a> in the
   *             <i>Amazon Chime SDK Developer Guide</i>.</p>
   * @public
   */
  Region?: TranscribeRegion | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   * @public
   */
  PartialResultsStability?: TranscribePartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript. If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p>
   *          <note>
   *             <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   *          </note>
   * @public
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | undefined;

  /**
   * <p>Content redaction is performed at the segment level. If you don't include <code>PiiEntityTypes</code>, all PII is redacted.</p>
   *          <note>
   *             <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code>.</p>
   *          </note>
   * @public
   */
  ContentRedactionType?: TranscribeContentRedactionType | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>
   *             <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,<code>NAME</code>, <code>PHONE</code>,  <code>PIN</code>,
   *                 <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Note that if you include <code>PiiEntityTypes</code>, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>If you include <code>ContentRedactionType</code> or <code>ContentIdentificationType</code>, but do not include PiiEntityTypes, all PII is redacted or identified.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with
   *             a language mismatch.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the custom language model must be available in Amazon Transcribe in each Region.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Enables automatic language identification for your transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you can optionally use <code>LanguageOptions</code> to include a list of language codes that you think may be present in your audio stream.
   *             Including language options can improve transcription accuracy.</p>
   *          <p>You can also use <code>PreferredLanguage</code> to include a preferred language. Doing so can help Amazon Transcribe identify the language faster.</p>
   *          <p>You must include either <code>LanguageCode</code> or <code>IdentifyLanguage</code>.</p>
   *          <p>Language identification can't be combined with custom language models or redaction.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. If you're unsure what languages
   *             are present, do not include this parameter.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code>, you must also include <code>IdentifyLanguage</code>.</p>
   *          <important>
   *             <p>You can only include one language dialect per language. For example, you cannot include <code>en-US</code> and <code>en-AU</code>.</p>
   *          </important>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Specify a preferred language from the subset of languages codes you specified in <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you include <code>IdentifyLanguage</code> and <code>LanguageOptions</code>.</p>
   * @public
   */
  PreferredLanguage?: TranscribeLanguageCode | undefined;

  /**
   * <p>Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you don't include <code>IdentifyLanguage</code> and want to use a custom vocabulary with your transcription, use the <code>VocabularyName</code> parameter instead.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p> If you're <i>not</i> including <code>IdentifyLanguage</code> and want to use a custom vocabulary filter with your transcription, use the <code>VocabularyFilterName</code>
   *             parameter instead.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 * @public
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   * @public
   */
  EngineTranscribeSettings?: EngineTranscribeSettings | undefined;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   * @public
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings | undefined;
}

/**
 * @public
 */
export interface StartMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting being transcribed.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or
   *             <code>EngineTranscribeMedicalSettings</code>.</p>
   * @public
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

/**
 * @public
 */
export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Lists the requested tags.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Too many tags were added to the specified resource.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p>The ID of the request that contains too many tags.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The name of the resource that received too many tags.</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource that you're removing tags from.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys being removed from the resources.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAttendeeCapabilitiesRequest {
  /**
   * <p>The ID of the meeting associated with the update request.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The ID of the attendee associated with the update request.</p>
   * @public
   */
  AttendeeId: string | undefined;

  /**
   * <p>The capabilities that you want to update.</p>
   * @public
   */
  Capabilities: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface UpdateAttendeeCapabilitiesResponse {
  /**
   * <p>The updated attendee data.</p>
   * @public
   */
  Attendee?: Attendee | undefined;
}
