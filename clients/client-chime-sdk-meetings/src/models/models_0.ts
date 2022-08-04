// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKMeetingsServiceException as __BaseException } from "./ChimeSDKMeetingsServiceException";

export enum MediaCapabilities {
  NONE = "None",
  RECEIVE = "Receive",
  SEND = "Send",
  SEND_RECEIVE = "SendReceive",
}

/**
 * <p>The media capabilities of an attendee: audio, video, or content. </p>
 *         <note>
 *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
 *             .</p>
 *          </note>
 *
 *         <p>When using capabilities, be aware of these corner cases:</p>
 *         <ul>
 *             <li>
 *                 <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
 *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
 *                     to receive and you set your <code>content</code> capability to not receive.</p>
 *             </li>
 *             <li>
 *                 <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
 *             </li>
 *             <li>
 *                 <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
 *             </li>
 *          </ul>
 */
export interface AttendeeCapabilities {
  /**
   * <p>The audio capability assigned to an attendee.</p>
   */
  Audio: MediaCapabilities | string | undefined;

  /**
   * <p>The video capability assigned to an attendee.</p>
   */
  Video: MediaCapabilities | string | undefined;

  /**
   * <p>The content capability assigned to an attendee.</p>
   */
  Content: MediaCapabilities | string | undefined;
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
 *
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *            to the client so that no other client has access to the token except for the one
 *            authorized to represent the attendee.</p>
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;

  /**
   * <p>The capabilities assigned to an attendee: audio, video, or content.</p>
   *         <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *
   *         <p>When using capabilities, be aware of these corner cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *             </li>
   *             <li>
   *                 <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *             </li>
   *             <li>
   *                 <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: AttendeeCapabilities;
}

/**
 * <p>A structure that contains one or more attendee IDs.</p>
 */
export interface AttendeeIdItem {
  /**
   * <p>A list of one or more attendee IDs.</p>
   */
  AttendeeId: string | undefined;
}

export enum MeetingFeatureStatus {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>An optional category of meeting features that contains audio-specific configurations, such as operating parameters for Amazon Voice Focus. </p>
 */
export interface AudioFeatures {
  /**
   * <p>Makes echo reduction available to clients who connect to the meeting.</p>
   */
  EchoReduction?: MeetingFeatureStatus | string;
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>A list of one or more capabilities.</p>
   */
  Capabilities?: AttendeeCapabilities;
}

export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK ID of the meeting to which you're adding attendees.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * <p>The ID of the failed request.</p>
   */
  RequestId?: string;
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
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  RetryAfterSeconds?: string;
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
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The ID of the request that exceeded the throttling limit.</p>
   */
  RequestId?: string;
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
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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

export interface BatchUpdateAttendeeCapabilitiesExceptRequest {
  /**
   * <p>The ID of the meeting associated with the update request.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The <code>AttendeeIDs</code> that you want to exclude from one or more capabilities.</p>
   */
  ExcludedAttendeeIds: AttendeeIdItem[] | undefined;

  /**
   * <p>The capabilities (<code>audio</code>, <code>video</code>, or <code>content</code>) that you want to update.</p>
   */
  Capabilities: AttendeeCapabilities | undefined;
}

/**
 * <p>Multiple instances of the same request have been made simultaneously.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The ID of the request involved in the conflict.</p>
   */
  RequestId?: string;
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

export interface CreateAttendeeRequest {
  /**
   * <p>The unique ID of the meeting.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The capabilities (<code>audio</code>, <code>video</code>, or <code>content</code>) that you want to grant an attendee. If you don't specify capabilities, all users have send and receive capabilities on
   *             all media channels by default.</p>
   *
   *         <note>
   *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
   *             .</p>
   *          </note>
   *
   *             <p>When using capabilities, be aware of these corner cases:</p>
   *             <ul>
   *             <li>
   *                     <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
   *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
   *                     to receive and you set your <code>content</code> capability to not receive.</p>
   *                 </li>
   *             <li>
   *                     <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
   *                 </li>
   *             <li>
   *                     <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
   *                    and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
   *                 </li>
   *          </ul>
   */
  Capabilities?: AttendeeCapabilities;
}

export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

/**
 * <p>The configuration settings of the features available to a meeting.></p>
 */
export interface MeetingFeaturesConfiguration {
  /**
   * <p>The configuration settings for the audio features available to a meeting. </p>
   */
  Audio?: AudioFeatures;
}

/**
 * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
 */
export interface NotificationsConfiguration {
  /**
   * <p>The ARN of the AWS Lambda function in the notifications configuration.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>The ARN of the SNS topic.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The ARN of the SQS queue.</p>
   */
  SqsQueueArn?: string;
}

/**
 * <p>A key-value pair that you define.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Region in which to create the meeting.</p>
   *
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
   *          <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: NotificationsConfiguration;

  /**
   * <p>Lists the audio and video features enabled for a meeting, such as echo reduction.</p>
   */
  MeetingFeatures?: MeetingFeaturesConfiguration;

  /**
   * <p>When specified, replicates the media from the primary meeting to the new meeting.</p>
   */
  PrimaryMeetingId?: string;

  /**
   * <p>A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.</p>
   */
  TenantIds?: string[];

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
   *                <p>You can only tag resources that are located in the specified AWS Region for the AWS account.</p>
   *             </li>
   *             <li>
   *                <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the
   *         documentation for each service.</p>
   *             </li>
   *          </ul>
   *             <important>
   *             <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be
   *             used for private or sensitive data.</p>
   *          </important>
   *             <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *
   *                <p> In addition to the <code>tag:TagResources </code>permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example,
   *                    to tag a <code>ChimeSDKMeetings</code> instance  using the <code>TagResources</code> operation, you must have both of the following permissions:</p>
   *
   *                 <p>
   *             <code>tag:TagResources</code>
   *          </p>
   *
   *                 <p>
   *             <code>ChimeSDKMeetings:CreateTags</code>
   *          </p>
   *
   *                 <note>
   *             <p>Some services might have specific requirements for tagging some resources. For example, to tag an Amazon S3 bucket, you must also have the <code>s3:GetBucketTagging</code> permission.
   *                 If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.</p>
   *          </note>
   */
  Tags?: Tag[];
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;

  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;

  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;

  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;

  /**
   * <p>The event ingestion URL.</p>
   */
  EventIngestionUrl?: string;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *             <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *             <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *             <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *             <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *             <code>us-west-1</code>, <code>us-west-2</code>.</p>
   *         <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The features available to a meeting, such as Amazon Voice Focus.</p>
   */
  MeetingFeatures?: MeetingFeaturesConfiguration;

  /**
   * <p>When specified, replicates the media from the primary meeting to this meeting.</p>
   */
  PrimaryMeetingId?: string;

  /**
   * <p>Array of strings.</p>
   */
  TenantIds?: string[];

  /**
   * <p>The ARN of the meeting.</p>
   */
  MeetingArn?: string;
}

export interface CreateMeetingResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;
}

export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Region in which to create the meeting.</p>
   *
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
   *          <p>Available values in AWS GovCloud (US) Regions: <code>us-gov-east-1</code>, <code>us-gov-west-1</code>.</p>
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>Lists the audio and video features enabled for a meeting, such as echo reduction.</p>
   */
  MeetingFeatures?: MeetingFeaturesConfiguration;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: NotificationsConfiguration;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;

  /**
   * <p>When specified, replicates the media from the primary meeting to the new meeting.</p>
   */
  PrimaryMeetingId?: string;

  /**
   * <p>A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.</p>
   */
  TenantIds?: string[];

  /**
   * <p>The tags in the request.</p>
   */
  Tags?: Tag[];
}

export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags requested for the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The resource that you want to tag couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The ID of the resource that couldn't be found.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the resource that couldn't be found.</p>
   */
  ResourceName?: string;
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

export enum TranscribeMedicalContentIdentificationType {
  PHI = "PHI",
}

export enum TranscribeMedicalLanguageCode {
  EN_US = "en-US",
}

export enum TranscribeMedicalRegion {
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_WEST_1 = "eu-west-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeMedicalSpecialty {
  CARDIOLOGY = "CARDIOLOGY",
  NEUROLOGY = "NEUROLOGY",
  ONCOLOGY = "ONCOLOGY",
  PRIMARYCARE = "PRIMARYCARE",
  RADIOLOGY = "RADIOLOGY",
  UROLOGY = "UROLOGY",
}

export enum TranscribeMedicalType {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

/**
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   */
  LanguageCode: TranscribeMedicalLanguageCode | string | undefined;

  /**
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   */
  Specialty: TranscribeMedicalSpecialty | string | undefined;

  /**
   * <p>The type of transcription.</p>
   */
  Type: TranscribeMedicalType | string | undefined;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region. </p>
   */
  Region?: TranscribeMedicalRegion | string;

  /**
   * <p>Set this field to <code>PHI</code> to identify personal health information in the transcription output.</p>
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | string;
}

export enum TranscribeContentIdentificationType {
  PII = "PII",
}

export enum TranscribeContentRedactionType {
  PII = "PII",
}

export enum TranscribeLanguageCode {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  PT_BR = "pt-BR",
  ZH_CN = "zh-CN",
}

export enum TranscribePartialResultsStability {
  HIGH = "high",
  LOW = "low",
  MEDIUM = "medium",
}

export enum TranscribeRegion {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  SA_EAST_1 = "sa-east-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_GOV_WEST_1 = "us-gov-west-1",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeVocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

/**
 * <p>Settings specific to the Amazon Transcribe engine.</p>
 */
export interface EngineTranscribeSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe engine.</p>
   */
  LanguageCode?: TranscribeLanguageCode | string;

  /**
   * <p>The filtering method passed to Amazon Transcribe.</p>
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | string;

  /**
   * <p>The name of the vocabulary filter passed to Amazon Transcribe.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeRegion | string;

  /**
   * <p>Generates partial transcription results that are less likely to change as meeting attendees speak. It does so by only allowing the last few words from the partial results to change.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>The stabity level of a partial results transcription. Determines how stable you want the transcription results to be. A higher level means the transcription results are less likely to change.</p>
   */
  PartialResultsStability?: TranscribePartialResultsStability | string;

  /**
   * <p>Set this field to <code>PII</code> to identify personally identifiable information in the transcription output.</p>
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | string;

  /**
   * <p>Set this field to <code>PII</code> to redact personally identifiable information in the transcription output. Content redaction is performed only upon complete transcription of the audio segments.</p>
   *
   *             <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code> in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   */
  ContentRedactionType?: TranscribeContentRedactionType | string;

  /**
   * <p>Lists the PII entity types you want to identify or redact. To specify entity types, you must enable <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *
   *         <p>
   *             <code>PIIEntityTypes</code> must be comma-separated. The available values are:
   *             <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING, CREDIT_DEBIT_NUMBER</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>, <code>PIN</code>, <code>EMAIL</code>,
   *             <code>ADDRESS</code>, <code>NAME</code>, <code>PHONE</code>, <code>SSN</code>, and <code>ALL</code>.</p>
   *
   *         <p>
   *             <code>PiiEntityTypes</code> is an optional parameter with a default value of <code>ALL</code>.</p>
   */
  PiiEntityTypes?: string;

  /**
   * <p>The name of the language model used during transcription.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Automatically identifies the language spoken in media files.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Language codes for the languages that you want to identify. You must provide at least 2 codes.</p>
   */
  LanguageOptions?: string;

  /**
   * <p>Language code for the preferred language.</p>
   */
  PreferredLanguage?: TranscribeLanguageCode | string;
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   */
  EngineTranscribeSettings?: EngineTranscribeSettings;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}

export interface StartMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting being transcribed.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or
   *             <code>EngineTranscribeMedicalSettings</code>.</p>
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   */
  MeetingId: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>Lists the requested tags.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>Too many tags were added to the specified resource.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The ID of the request that contains too many tags.</p>
   */
  RequestId?: string;

  /**
   * <p>The name of the resource that received too many tags.</p>
   */
  ResourceName?: string;
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

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource that you're removing tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys being removed from the resources.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAttendeeCapabilitiesRequest {
  /**
   * <p>The ID of the meeting associated with the update request.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The ID of the attendee associated with the update request.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The capabilties that you want to update.</p>
   */
  Capabilities: AttendeeCapabilities | undefined;
}

export interface UpdateAttendeeCapabilitiesResponse {
  /**
   * <p>The updated attendee data.</p>
   */
  Attendee?: Attendee;
}

/**
 * @internal
 */
export const AttendeeCapabilitiesFilterSensitiveLog = (obj: AttendeeCapabilities): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttendeeFilterSensitiveLog = (obj: Attendee): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AttendeeIdItemFilterSensitiveLog = (obj: AttendeeIdItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioFeaturesFilterSensitiveLog = (obj: AudioFeatures): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAttendeeRequestItemFilterSensitiveLog = (obj: CreateAttendeeRequestItem): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchCreateAttendeeRequestFilterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAttendeeErrorFilterSensitiveLog = (obj: CreateAttendeeError): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchCreateAttendeeResponseFilterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
  ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchUpdateAttendeeCapabilitiesExceptRequestFilterSensitiveLog = (
  obj: BatchUpdateAttendeeCapabilitiesExceptRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAttendeeRequestFilterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAttendeeResponseFilterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const MeetingFeaturesConfigurationFilterSensitiveLog = (obj: MeetingFeaturesConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationsConfigurationFilterSensitiveLog = (obj: NotificationsConfiguration): any => ({
  ...obj,
  ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
  ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
  ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMeetingRequestFilterSensitiveLog = (obj: CreateMeetingRequest): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  ...(obj.NotificationsConfiguration && {
    NotificationsConfiguration: NotificationsConfigurationFilterSensitiveLog(obj.NotificationsConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaPlacementFilterSensitiveLog = (obj: MediaPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeetingFilterSensitiveLog = (obj: Meeting): any => ({
  ...obj,
  ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMeetingResponseFilterSensitiveLog = (obj: CreateMeetingResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
});

/**
 * @internal
 */
export const CreateMeetingWithAttendeesRequestFilterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  ...(obj.NotificationsConfiguration && {
    NotificationsConfiguration: NotificationsConfigurationFilterSensitiveLog(obj.NotificationsConfiguration),
  }),
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMeetingWithAttendeesResponseFilterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
  ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DeleteAttendeeRequestFilterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMeetingRequestFilterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttendeeRequestFilterSensitiveLog = (obj: GetAttendeeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttendeeResponseFilterSensitiveLog = (obj: GetAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const GetMeetingRequestFilterSensitiveLog = (obj: GetMeetingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMeetingResponseFilterSensitiveLog = (obj: GetMeetingResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
});

/**
 * @internal
 */
export const ListAttendeesRequestFilterSensitiveLog = (obj: ListAttendeesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttendeesResponseFilterSensitiveLog = (obj: ListAttendeesResponse): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineTranscribeMedicalSettingsFilterSensitiveLog = (obj: EngineTranscribeMedicalSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineTranscribeSettingsFilterSensitiveLog = (obj: EngineTranscribeSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptionConfigurationFilterSensitiveLog = (obj: TranscriptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMeetingTranscriptionRequestFilterSensitiveLog = (obj: StartMeetingTranscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMeetingTranscriptionRequestFilterSensitiveLog = (obj: StopMeetingTranscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAttendeeCapabilitiesRequestFilterSensitiveLog = (obj: UpdateAttendeeCapabilitiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAttendeeCapabilitiesResponseFilterSensitiveLog = (obj: UpdateAttendeeCapabilitiesResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});
