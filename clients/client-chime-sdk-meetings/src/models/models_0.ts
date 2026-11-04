// smithy-typescript generated code
import type {
  ContentResolution,
  MediaCapabilities,
  MediaPlacementNetworkType,
  MeetingFeatureStatus,
  TranscribeContentIdentificationType,
  TranscribeContentRedactionType,
  TranscribeLanguageCode,
  TranscribeMedicalContentIdentificationType,
  TranscribeMedicalLanguageCode,
  TranscribeMedicalRegion,
  TranscribeMedicalSpecialty,
  TranscribeMedicalType,
  TranscribePartialResultsStability,
  TranscribeRegion,
  TranscribeVocabularyFilterMethod,
  VideoResolution,
} from "./enums";

/**
 * The media capabilities of an attendee: audio, video, or content.
 *
 * > **Note:** You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information, refer to and .
 *
 * When using capabilities, be aware of these corner cases:
 *
 * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
 * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
 * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive` or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability to receive and you set your `content` capability to not receive.
 * - If meeting features is defined as `Video:MaxResolution:None` but `Content:MaxResolution` is defined as something other than `None` and attendee capabilities are not defined in the API request, then the default attendee video capability is set to `Receive` and attendee content capability is set to `SendReceive`. This is because content `SendReceive` requires video to be at least `Receive`.
 * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` , and an attendee unmutes their microphone, audio flows from the attendee to the other meeting participants.
 * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` , and the attendee turns on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
 *
 * @public
 */
export interface AttendeeCapabilities {
  /**
   * The audio capability assigned to an attendee.
   *
   * @public
   */
  Audio: MediaCapabilities | undefined;

  /**
   * The video capability assigned to an attendee.
   *
   * @public
   */
  Video: MediaCapabilities | undefined;

  /**
   * The content capability assigned to an attendee.
   *
   * @public
   */
  Content: MediaCapabilities | undefined;
}

/**
 * An Amazon Chime SDK meeting attendee. Includes a unique `AttendeeId` and `JoinToken`. The `JoinToken` allows a client to authenticate and join as the specified attendee. The `JoinToken` expires when the meeting ends, or when DeleteAttendee is called. After that, the attendee is unable to join the meeting.
 *
 * We recommend securely transferring each `JoinToken` from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.
 *
 * @public
 */
export interface Attendee {
  /**
   * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * The Amazon Chime SDK attendee ID.
   *
   * @public
   */
  AttendeeId?: string | undefined;

  /**
   * The join token used by the Amazon Chime SDK attendee.
   *
   * @public
   */
  JoinToken?: string | undefined;

  /**
   * The capabilities assigned to an attendee: audio, video, or content.
   *
   * > **Note:** You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information about those values, see .
   *
   * When using capabilities, be aware of these corner cases:
   *
   * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
   * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
   * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive` or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability to receive and you set your `content` capability to not receive.
   * - If meeting features is defined as `Video:MaxResolution:None` but `Content:MaxResolution` is defined as something other than `None` and attendee capabilities are not defined in the API request, then the default attendee video capability is set to `Receive` and attendee content capability is set to `SendReceive`. This is because content `SendReceive` requires video to be at least `Receive`.
   * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.
   * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
   *
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * Lists the maximum number of attendees allowed into the meeting.
 *
 * > **Note:** If you specify `FHD` for `MeetingFeatures:Video:MaxResolution`, or if you specify `UHD` for `MeetingFeatures:Content:MaxResolution`, the maximum number of attendees changes from the default of `250` to `25`.
 *
 * @public
 */
export interface AttendeeFeatures {
  /**
   * The maximum number of attendees allowed into the meeting.
   *
   * @public
   */
  MaxCount?: number | undefined;
}

/**
 * A structure that contains one or more attendee IDs.
 *
 * @public
 */
export interface AttendeeIdItem {
  /**
   * A list of one or more attendee IDs.
   *
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * An optional category of meeting features that contains audio-specific configurations, such as operating parameters for Amazon Voice Focus.
 *
 * @public
 */
export interface AudioFeatures {
  /**
   * Makes echo reduction available to clients who connect to the meeting.
   *
   * @public
   */
  EchoReduction?: MeetingFeatureStatus | undefined;
}

/**
 * The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.
 *
 * @public
 */
export interface CreateAttendeeRequestItem {
  /**
   * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * A list of one or more capabilities.
   *
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeRequest {
  /**
   * The Amazon Chime SDK ID of the meeting to which you're adding attendees.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The attendee information, including attendees' IDs and join tokens.
   *
   * @public
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

/**
 * The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.
 *
 * @public
 */
export interface CreateAttendeeError {
  /**
   * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeResponse {
  /**
   * The attendee information, including attendees' IDs and join tokens.
   *
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.
   *
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAttendeeCapabilitiesExceptRequest {
  /**
   * The ID of the meeting associated with the update request.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The `AttendeeIDs` that you want to exclude from one or more capabilities.
   *
   * @public
   */
  ExcludedAttendeeIds: AttendeeIdItem[] | undefined;

  /**
   * The capabilities (`audio`, `video`, or `content`) that you want to update.
   *
   * @public
   */
  Capabilities: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateAttendeeRequest {
  /**
   * The unique ID of the meeting.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix.
   *
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * The capabilities (`audio`, `video`, or `content`) that you want to grant an attendee. If you don't specify capabilities, all users have send and receive capabilities on all media channels by default.
   *
   * > **Note:** You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information about those values, see .
   *
   * When using capabilities, be aware of these corner cases:
   *
   * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
   * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
   * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive` or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability to receive and you set your `content` capability to not receive.
   * - If meeting features is defined as `Video:MaxResolution:None` but `Content:MaxResolution` is defined as something other than `None` and attendee capabilities are not defined in the API request, then the default attendee video capability is set to `Receive` and attendee content capability is set to `SendReceive`. This is because content `SendReceive` requires video to be at least `Receive`.
   * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.
   * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
   *
   * @public
   */
  Capabilities?: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateAttendeeResponse {
  /**
   * The attendee information, including attendee ID and join token.
   *
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * Lists the content (screen share) features for the meeting. Applies to all attendees.
 *
 * > **Note:** If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
 *
 * @public
 */
export interface ContentFeatures {
  /**
   * The maximum resolution for the meeting content.
   *
   * > **Note:** Defaults to `FHD`. To use `UHD`, you must also provide a `MeetingFeatures:Attendee:MaxCount` value and override the default size limit of 250 attendees.
   *
   * @public
   */
  MaxResolution?: ContentResolution | undefined;
}

/**
 * The video features set for the meeting. Applies to all attendees.
 *
 * > **Note:** If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
 *
 * @public
 */
export interface VideoFeatures {
  /**
   * The maximum video resolution for the meeting. Applies to all attendees.
   *
   * > **Note:** Defaults to `HD`. To use `FHD`, you must also provide a `MeetingFeatures:Attendee:MaxCount` value and override the default size limit of 250 attendees.
   *
   * @public
   */
  MaxResolution?: VideoResolution | undefined;
}

/**
 * The configuration settings of the features available to a meeting.
 *
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * The configuration settings for the audio features available to a meeting.
   *
   * @public
   */
  Audio?: AudioFeatures | undefined;

  /**
   * The configuration settings for the video features available to a meeting.
   *
   * @public
   */
  Video?: VideoFeatures | undefined;

  /**
   * The configuration settings for the content features available to a meeting.
   *
   * @public
   */
  Content?: ContentFeatures | undefined;

  /**
   * The configuration settings for the attendee features available to a meeting.
   *
   * @public
   */
  Attendee?: AttendeeFeatures | undefined;
}

/**
 * The configuration for resource targets to receive notifications when meeting and attendee events occur.
 *
 * @public
 */
export interface NotificationsConfiguration {
  /**
   * The ARN of the Amazon Web Services Lambda function in the notifications configuration.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * The ARN of the SNS topic.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The ARN of the SQS queue.
   *
   * @public
   */
  SqsQueueArn?: string | undefined;
}

/**
 * A key-value pair that you define.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingRequest {
  /**
   * The unique identifier for the client request. Use a different token for different meetings.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Region in which to create the meeting.
   *
   * Available values: `af-south-1`, `ap-northeast-1`, `ap-northeast-2`, `ap-south-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `eu-central-1`, `eu-north-1`, `eu-south-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `sa-east-1`, `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`.
   *
   * Available values in Amazon Web Services GovCloud (US) Regions: `us-gov-east-1`, `us-gov-west-1`.
   *
   * @public
   */
  MediaRegion: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * The external meeting ID.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalMeetingId: string | undefined;

  /**
   * The configuration for resource targets to receive notifications when meeting and attendee events occur.
   *
   * @public
   */
  NotificationsConfiguration?: NotificationsConfiguration | undefined;

  /**
   * Lists the audio and video features enabled for a meeting, such as echo reduction.
   *
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * When specified, replicates the media from the primary meeting to the new meeting.
   *
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.
   *
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * Applies one or more tags to an Amazon Chime SDK meeting. Note the following:
   *
   * - Not all resources have tags. For a list of services with resources that support tagging using this operation, see [Services that support the Resource Groups Tagging API](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html). If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.
   * - Each resource can have up to 50 tags. For other limits, see [Tag Naming and Usage Conventions](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions) in the *AWS General Reference*.
   * - You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.
   * - To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.
   *
   * > **Important:** Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.
   *
   * **Minimum permissions**
   *
   * In addition to the `tag:TagResources` permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag a `ChimeSDKMeetings` instance using the `TagResources` operation, you must have both of the following permissions:
   *
   * `tag:TagResources`
   *
   * `ChimeSDKMeetings:CreateTags`
   *
   * > **Note:** Some services might have specific requirements for tagging some resources. For example, to tag an Amazon S3 bucket, you must also have the `s3:GetBucketTagging` permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of network for the media placement. Either IPv4 only or dual-stack (IPv4 and IPv6).
   *
   * @public
   */
  MediaPlacementNetworkType?: MediaPlacementNetworkType | undefined;
}

/**
 * A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.
 *
 * @public
 */
export interface MediaPlacement {
  /**
   * The audio host URL.
   *
   * @public
   */
  AudioHostUrl?: string | undefined;

  /**
   * The audio fallback URL.
   *
   * @public
   */
  AudioFallbackUrl?: string | undefined;

  /**
   * The signaling URL.
   *
   * @public
   */
  SignalingUrl?: string | undefined;

  /**
   * The turn control URL.
   *
   * > **Important:** **This parameter is deprecated and no longer used by the Amazon Chime SDK.**
   *
   * @public
   */
  TurnControlUrl?: string | undefined;

  /**
   * The screen data URL.
   *
   * > **Important:** **This parameter is deprecated and no longer used by the Amazon Chime SDK.**
   *
   * @public
   */
  ScreenDataUrl?: string | undefined;

  /**
   * The screen viewing URL.
   *
   * > **Important:** **This parameter is deprecated and no longer used by the Amazon Chime SDK.**
   *
   * @public
   */
  ScreenViewingUrl?: string | undefined;

  /**
   * The screen sharing URL.
   *
   * > **Important:** **This parameter is deprecated and no longer used by the Amazon Chime SDK.**
   *
   * @public
   */
  ScreenSharingUrl?: string | undefined;

  /**
   * The event ingestion URL.
   *
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * A meeting created using the Amazon Chime SDK.
 *
 * @public
 */
export interface Meeting {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * The external meeting ID.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalMeetingId?: string | undefined;

  /**
   * The Region in which you create the meeting. Available values: `af-south-1`, `ap-northeast-1`, `ap-northeast-2`, `ap-south-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `eu-central-1`, `eu-north-1`, `eu-south-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `sa-east-1`, `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`.
   *
   * Available values in Amazon Web Services GovCloud (US) Regions: `us-gov-east-1`, `us-gov-west-1`.
   *
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * The media placement for the meeting.
   *
   * @public
   */
  MediaPlacement?: MediaPlacement | undefined;

  /**
   * The features available to a meeting, such as echo reduction.
   *
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * When specified, replicates the media from the primary meeting to this meeting.
   *
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * Array of strings.
   *
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * The ARN of the meeting.
   *
   * @public
   */
  MeetingArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingResponse {
  /**
   * The meeting information, including the meeting ID and `MediaPlacement`.
   *
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesRequest {
  /**
   * The unique identifier for the client request. Use a different token for different meetings.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Region in which to create the meeting.
   *
   * Available values: `af-south-1`, `ap-northeast-1`, `ap-northeast-2`, `ap-south-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `eu-central-1`, `eu-north-1`, `eu-south-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `sa-east-1`, `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`.
   *
   * Available values in Amazon Web Services GovCloud (US) Regions: `us-gov-east-1`, `us-gov-west-1`.
   *
   * @public
   */
  MediaRegion: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * The external meeting ID.
   *
   * Pattern: `[-_&@+=,()\{\}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*`
   *
   * Values that begin with `aws:` are reserved. You can't configure a value that uses this prefix. Case insensitive.
   *
   * @public
   */
  ExternalMeetingId: string | undefined;

  /**
   * Lists the audio and video features enabled for a meeting, such as echo reduction.
   *
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * The configuration for resource targets to receive notifications when meeting and attendee events occur.
   *
   * @public
   */
  NotificationsConfiguration?: NotificationsConfiguration | undefined;

  /**
   * The attendee information, including attendees' IDs and join tokens.
   *
   * @public
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;

  /**
   * When specified, replicates the media from the primary meeting to the new meeting.
   *
   * @public
   */
  PrimaryMeetingId?: string | undefined;

  /**
   * A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users.
   *
   * @public
   */
  TenantIds?: string[] | undefined;

  /**
   * The tags in the request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of network for the media placement. Either IPv4 only or dual-stack (IPv4 and IPv6).
   *
   * @public
   */
  MediaPlacementNetworkType?: MediaPlacementNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesResponse {
  /**
   * The meeting information, including the meeting ID and `MediaPlacement`.
   *
   * @public
   */
  Meeting?: Meeting | undefined;

  /**
   * The attendee information, including attendees' IDs and join tokens.
   *
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.
   *
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * @public
 */
export interface DeleteAttendeeRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The Amazon Chime SDK attendee ID.
   *
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMeetingRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The Amazon Chime SDK attendee ID.
   *
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeResponse {
  /**
   * The Amazon Chime SDK attendee information.
   *
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * @public
 */
export interface GetMeetingRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetMeetingResponse {
  /**
   * The Amazon Chime SDK meeting information.
   *
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface ListAttendeesRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttendeesResponse {
  /**
   * The Amazon Chime SDK attendee information.
   *
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags requested for the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Settings specific to the Amazon Transcribe Medical engine.
 *
 * @public
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * The language code specified for the Amazon Transcribe Medical engine.
   *
   * @public
   */
  LanguageCode: TranscribeMedicalLanguageCode | undefined;

  /**
   * The specialty specified for the Amazon Transcribe Medical engine.
   *
   * @public
   */
  Specialty: TranscribeMedicalSpecialty | undefined;

  /**
   * The type of transcription.
   *
   * @public
   */
  Type: TranscribeMedicalType | undefined;

  /**
   * The name of the vocabulary passed to Amazon Transcribe Medical.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The Amazon Web Services Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.
   *
   * @public
   */
  Region?: TranscribeMedicalRegion | undefined;

  /**
   * Set this field to `PHI` to identify personal health information in the transcription output.
   *
   * @public
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | undefined;
}

/**
 * Settings specific for Amazon Transcribe as the live transcription engine.
 *
 * If you specify an invalid combination of parameters, a `TranscriptFailed` event will be sent with the contents of the `BadRequestException` generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the [StartStreamTranscription](https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html) API in the *Amazon Transcribe Developer Guide*.
 *
 * @public
 */
export interface EngineTranscribeSettings {
  /**
   * Specify the language code that represents the language spoken.
   *
   * If you're unsure of the language spoken in your audio, consider using `IdentifyLanguage` to enable automatic language identification.
   *
   * @public
   */
  LanguageCode?: TranscribeLanguageCode | undefined;

  /**
   * Specify how you want your vocabulary filter applied to your transcript.
   *
   * To replace words with `***`, choose `mask`.
   *
   * To delete words, choose `remove`.
   *
   * To flag words without changing them, choose `tag`.
   *
   * @public
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | undefined;

  /**
   * Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.
   *
   * If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.
   *
   * If you include `IdentifyLanguage` and want to use one or more vocabulary filters with your transcription, use the `VocabularyFilterNames` parameter instead.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * If you use Amazon Transcribe multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.
   *
   * If you include `IdentifyLanguage` and want to use one or more custom vocabularies with your transcription, use the `VocabularyNames` parameter instead.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The Amazon Web Services Region in which to use Amazon Transcribe.
   *
   * If you don't specify a Region, then the [MediaRegion](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html) of the meeting is used. However, if Amazon Transcribe is not available in the `MediaRegion`, then a `TranscriptFailed` event is sent.
   *
   * Use `auto` to use Amazon Transcribe in a Region near the meeting’s `MediaRegion`. For more information, refer to [Choosing a transcription Region](https://docs.aws.amazon.com/chime-sdk/latest/dg/transcription-options.html#choose-region) in the *Amazon Chime SDK Developer Guide*.
   *
   * @public
   */
  Region?: TranscribeRegion | undefined;

  /**
   * Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Specify the level of stability to use when you enable partial results stabilization (`EnablePartialResultsStabilization`).
   *
   * Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.
   *
   * @public
   */
  PartialResultsStability?: TranscribePartialResultsStability | undefined;

  /**
   * Labels all personally identifiable information (PII) identified in your transcript. If you don't include `PiiEntityTypes`, all PII is identified.
   *
   * > **Note:** You can’t set `ContentIdentificationType` and `ContentRedactionType`.
   *
   * @public
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | undefined;

  /**
   * Content redaction is performed at the segment level. If you don't include `PiiEntityTypes`, all PII is redacted.
   *
   * > **Note:** You can’t set `ContentRedactionType` and `ContentIdentificationType`.
   *
   * @public
   */
  ContentRedactionType?: TranscribeContentRedactionType | undefined;

  /**
   * Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select `ALL`.
   *
   * Values must be comma-separated and can include: `ADDRESS`, `BANK_ACCOUNT_NUMBER`, `BANK_ROUTING`, `CREDIT_DEBIT_CVV`, `CREDIT_DEBIT_EXPIRY` `CREDIT_DEBIT_NUMBER`, `EMAIL`,`NAME`, `PHONE`, `PIN`, `SSN`, or `ALL`.
   *
   * Note that if you include `PiiEntityTypes`, you must also include `ContentIdentificationType` or `ContentRedactionType`.
   *
   * If you include `ContentRedactionType` or `ContentIdentificationType`, but do not include PiiEntityTypes, all PII is redacted or identified.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.
   *
   * The language of the specified language model must match the language code. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * If you use Amazon Transcribe in multiple Regions, the custom language model must be available in Amazon Transcribe in each Region.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Enables automatic language identification for your transcription.
   *
   * If you include `IdentifyLanguage`, you can optionally use `LanguageOptions` to include a list of language codes that you think may be present in your audio stream. Including language options can improve transcription accuracy.
   *
   * You can also use `PreferredLanguage` to include a preferred language. Doing so can help Amazon Transcribe identify the language faster.
   *
   * You must include either `LanguageCode` or `IdentifyLanguage`.
   *
   * Language identification can't be combined with custom language models or redaction.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. If you're unsure what languages are present, do not include this parameter.
   *
   * Including language options can improve the accuracy of language identification.
   *
   * If you include `LanguageOptions`, you must also include `IdentifyLanguage`.
   *
   * > **Important:** You can only include one language dialect per language. For example, you cannot include `en-US` and `en-AU`.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * Specify a preferred language from the subset of languages codes you specified in `LanguageOptions`.
   *
   * You can only use this parameter if you include `IdentifyLanguage` and `LanguageOptions`.
   *
   * @public
   */
  PreferredLanguage?: TranscribeLanguageCode | undefined;

  /**
   * Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * If you use Amazon Transcribe in multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.
   *
   * If you don't include `IdentifyLanguage` and want to use a custom vocabulary with your transcription, use the `VocabularyName` parameter instead.
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.
   *
   * If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.
   *
   * If you're *not* including `IdentifyLanguage` and want to use a custom vocabulary filter with your transcription, use the `VocabularyFilterName` parameter instead.
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}

/**
 * The configuration for the current transcription operation. Must contain `EngineTranscribeSettings` or `EngineTranscribeMedicalSettings`.
 *
 * @public
 */
export interface TranscriptionConfiguration {
  /**
   * The transcription configuration settings passed to Amazon Transcribe.
   *
   * @public
   */
  EngineTranscribeSettings?: EngineTranscribeSettings | undefined;

  /**
   * The transcription configuration settings passed to Amazon Transcribe Medical.
   *
   * @public
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings | undefined;
}

/**
 * @public
 */
export interface StartMeetingTranscriptionRequest {
  /**
   * The unique ID of the meeting being transcribed.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The configuration for the current transcription operation. Must contain `EngineTranscribeSettings` or `EngineTranscribeMedicalSettings`.
   *
   * @public
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

/**
 * @public
 */
export interface StopMeetingTranscriptionRequest {
  /**
   * The unique ID of the meeting for which you stop transcription.
   *
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Lists the requested tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource that you're removing tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag keys being removed from the resources.
   *
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
   * The ID of the meeting associated with the update request.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * The ID of the attendee associated with the update request.
   *
   * @public
   */
  AttendeeId: string | undefined;

  /**
   * The capabilities that you want to update.
   *
   * @public
   */
  Capabilities: AttendeeCapabilities | undefined;
}

/**
 * @public
 */
export interface UpdateAttendeeCapabilitiesResponse {
  /**
   * The updated attendee data.
   *
   * @public
   */
  Attendee?: Attendee | undefined;
}
