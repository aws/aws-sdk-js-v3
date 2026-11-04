// smithy-typescript generated code
import type {
  ArtifactStatus,
  ChatItemType,
  ConnectionType,
  ContentDisposition,
  MeetingFeatureStatus,
  MessageProcessingStatus,
  ParticipantRole,
  ScanDirection,
  SortKey,
} from "./enums";

/**
 * @public
 */
export interface CancelParticipantAuthenticationRequest {
  /**
   * The `sessionId` provided in the `authenticationInitiated` event.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface CancelParticipantAuthenticationResponse {}

/**
 * @public
 */
export interface CompleteAttachmentUploadRequest {
  /**
   * A list of unique identifiers for the attachments.
   *
   * @public
   */
  AttachmentIds: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadResponse {}

/**
 * @public
 */
export interface CreateParticipantConnectionRequest {
  /**
   * Type of connection information required. If you need `CONNECTION_CREDENTIALS` along with marking participant as connected, pass `CONNECTION_CREDENTIALS` in `Type`.
   *
   * @public
   */
  Type?: ConnectionType[] | undefined;

  /**
   * This is a header parameter.
   *
   * The ParticipantToken as obtained from [StartChatContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html) API response.
   *
   * @public
   */
  ParticipantToken: string | undefined;

  /**
   * Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats.
   *
   * @public
   */
  ConnectParticipant?: boolean | undefined;
}

/**
 * Connection credentials.
 *
 * @public
 */
export interface ConnectionCredentials {
  /**
   * The connection token.
   *
   * @public
   */
  ConnectionToken?: string | undefined;

  /**
   * The expiration of the token.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * The attendee information, including attendee ID and join token.
 *
 * @public
 */
export interface Attendee {
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
}

/**
 * A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.
 *
 * @public
 */
export interface WebRTCMediaPlacement {
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
   * The event ingestion URL to which you send client meeting events.
   *
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * Has audio-specific configurations as the operating parameter for Echo Reduction.
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
}

/**
 * A meeting created using the Amazon Chime SDK.
 *
 * @public
 */
export interface WebRTCMeeting {
  /**
   * The media placement for the meeting.
   *
   * @public
   */
  MediaPlacement?: WebRTCMediaPlacement | undefined;

  /**
   * The configuration settings of the features available to a meeting.
   *
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId?: string | undefined;
}

/**
 * Creates the participant’s WebRTC connection data required for the client application (mobile or web) to connect to the call.
 *
 * @public
 */
export interface WebRTCConnection {
  /**
   * The attendee information, including attendee ID and join token.
   *
   * @public
   */
  Attendee?: Attendee | undefined;

  /**
   * A meeting created using the Amazon Chime SDK.
   *
   * @public
   */
  Meeting?: WebRTCMeeting | undefined;
}

/**
 * The websocket for the participant's connection.
 *
 * @public
 */
export interface Websocket {
  /**
   * The URL of the websocket.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The URL expiration timestamp in ISO date format.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  ConnectionExpiry?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantConnectionResponse {
  /**
   * Creates the participant's websocket connection.
   *
   * @public
   */
  Websocket?: Websocket | undefined;

  /**
   * Creates the participant's connection credentials. The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionCredentials?: ConnectionCredentials | undefined;

  /**
   * Creates the participant's WebRTC connection data required for the client application (mobile application or website) to connect to the call.
   *
   * @public
   */
  WebRTCConnection?: WebRTCConnection | undefined;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * An encrypted token originating from the interactive message of a ShowView block operation. Represents the desired view.
   *
   * @public
   */
  ViewToken: string | undefined;

  /**
   * The connection token.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * View content containing all content necessary to render a view except for runtime input data.
 *
 * @public
 */
export interface ViewContent {
  /**
   * The schema representing the input data that the view template must be supplied to render.
   *
   * @public
   */
  InputSchema?: string | undefined;

  /**
   * The view template representing the structure of the view.
   *
   * @public
   */
  Template?: string | undefined;

  /**
   * A list of actions possible from the view
   *
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * A view resource object. Contains metadata and content necessary to render the view.
 *
 * @public
 */
export interface View {
  /**
   * The identifier of the view.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the view.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the view.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current version of the view.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * View content containing all content necessary to render a view except for runtime input data.
   *
   * @public
   */
  Content?: ViewContent | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * A view resource object. Contains metadata and content necessary to render the view.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DisconnectParticipantRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface DisconnectParticipantResponse {}

/**
 * @public
 */
export interface GetAttachmentRequest {
  /**
   * A unique identifier for the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;

  /**
   * The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;

  /**
   * Specifies how a browser handles the file at the pre-signed URL. The following values are valid:
   *
   * - **INLINE**
   *
   *   Displays the file in the browser.
   *
   * - **ATTACHMENT**
   *
   *   Downloads the file. This is the default behavior.
   *
   * @public
   */
  UrlContentDisposition?: ContentDisposition | undefined;
}

/**
 * @public
 */
export interface GetAttachmentResponse {
  /**
   * This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response to [StartAttachmentUpload](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html).
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * The size of the attachment in bytes.
   *
   * @public
   */
  AttachmentSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface GetAuthenticationUrlRequest {
  /**
   * The sessionId provided in the authenticationInitiated event.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The URL where the customer will be redirected after Amazon Cognito authorizes the user.
   *
   * @public
   */
  RedirectUri: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface GetAuthenticationUrlResponse {
  /**
   * The URL where the customer will sign in to the identity provider. This URL contains the authorize endpoint for the Cognito UserPool used in the authentication.
   *
   * @public
   */
  AuthenticationUrl?: string | undefined;
}

/**
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
 *
 * @public
 */
export interface StartPosition {
  /**
   * The ID of the message or event where to start.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The time in ISO format where to start.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * The start position of the most recent message where you want to start.
   *
   * @public
   */
  MostRecent?: number | undefined;
}

/**
 * @public
 */
export interface GetTranscriptRequest {
  /**
   * The contactId from the current contact chain for which transcript is needed.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The maximum number of results to return in the page. Default: 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition.
   *
   * @public
   */
  ScanDirection?: ScanDirection | undefined;

  /**
   * The sort order for the records. Default: DESCENDING.
   *
   * @public
   */
  SortOrder?: SortKey | undefined;

  /**
   * A filtering option for where to start.
   *
   * @public
   */
  StartPosition?: StartPosition | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
 *
 * @public
 */
export interface AttachmentItem {
  /**
   * Describes the MIME file type of the attachment. For a list of supported file types, see [Feature specifications](https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html) in the *Amazon Connect Administrator Guide*.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * A unique identifier for the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * A case-sensitive name of the attachment being uploaded.
   *
   * @public
   */
  AttachmentName?: string | undefined;

  /**
   * Status of the attachment.
   *
   * @public
   */
  Status?: ArtifactStatus | undefined;
}

/**
 * The receipt for the message delivered to the recipient.
 *
 * @public
 */
export interface Receipt {
  /**
   * The time when the message was delivered to the recipient.
   *
   * @public
   */
  DeliveredTimestamp?: string | undefined;

  /**
   * The time when the message was read by the recipient.
   *
   * @public
   */
  ReadTimestamp?: string | undefined;

  /**
   * The identifier of the recipient of the message.
   *
   * @public
   */
  RecipientParticipantId?: string | undefined;
}

/**
 * Contains metadata related to a message.
 *
 * @public
 */
export interface MessageMetadata {
  /**
   * The identifier of the message that contains the metadata information.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The list of receipt information for a message for different recipients.
   *
   * @public
   */
  Receipts?: Receipt[] | undefined;

  /**
   * The status of Message Processing for the message.
   *
   * @public
   */
  MessageProcessingStatus?: MessageProcessingStatus | undefined;
}

/**
 * An item - message or event - that has been sent.
 *
 * @public
 */
export interface Item {
  /**
   * The time when the message or event was sent.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * The content of the message or event.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The type of content of the item.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The ID of the item.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Type of the item: message or event.
   *
   * @public
   */
  Type?: ChatItemType | undefined;

  /**
   * The ID of the sender in the session.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * The chat display name of the sender.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The role of the sender. For example, is it a customer, agent, or system.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * Provides information about the attachments.
   *
   * @public
   */
  Attachments?: AttachmentItem[] | undefined;

  /**
   * The metadata related to the message. Currently this supports only information related to message receipts.
   *
   * @public
   */
  MessageMetadata?: MessageMetadata | undefined;

  /**
   * The contactId on which the transcript item was originally sent. This field is only populated for persistent chats when the transcript item is from the past chat session. For more information, see [Enable persistent chat](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html).
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * The contactId on which the transcript item was originally sent. This field is populated only when the transcript item is from the current chat session.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface GetTranscriptResponse {
  /**
   * The initial contact ID for the contact.
   *
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * The list of messages in the session.
   *
   * @public
   */
  Transcript?: Item[] | undefined;

  /**
   * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendEventRequest {
  /**
   * The content type of the request. Supported types are:
   *
   * - application/vnd.amazonaws.connect.event.typing
   * - application/vnd.amazonaws.connect.event.connection.acknowledged (is no longer maintained since December 31, 2024)
   * - application/vnd.amazonaws.connect.event.message.delivered
   * - application/vnd.amazonaws.connect.event.message.read
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.
   *
   * Sample Content: "\{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"\}"
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface SendEventResponse {
  /**
   * The ID of the response.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The time when the event was sent.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  AbsoluteTime?: string | undefined;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * The type of the content. Possible types are `text/plain`, `text/markdown`, `application/json`, and `application/vnd.amazonaws.connect.message.interactive.response`.
   *
   * Supported types on the contact are configured through `SupportedMessagingContentTypes` on [StartChatContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html) and [StartOutboundChatContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundChatContact.html).
   *
   * For Apple Messages for Business, SMS, and WhatsApp Business Messaging contacts, only `text/plain` is supported.
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * The content of the message. Maximum of 16,384 bytes for all content types (`text/plain`, `text/markdown`, `application/json`, and `application/vnd.amazonaws.connect.message.interactive.response`).
   *
   * Some messaging channels enforce lower limits. For channel-specific message size limits, see [Chat message size limits by channel](https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html#chat-message-size-limits) in the *Amazon Connect Customer Administrator Guide*.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The authentication token associated with the connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * Contains metadata for chat messages.
 *
 * @public
 */
export interface MessageProcessingMetadata {
  /**
   * The status of Message Processing for the message.
   *
   * @public
   */
  MessageProcessingStatus?: MessageProcessingStatus | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * The ID of the message.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The time when the message was sent.
   *
   * It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * Contains metadata for the message.
   *
   * @public
   */
  MessageMetadata?: MessageProcessingMetadata | undefined;
}

/**
 * @public
 */
export interface StartAttachmentUploadRequest {
  /**
   * Describes the MIME file type of the attachment. For a list of supported file types, see [Feature specifications](https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html) in the *Amazon Connect Administrator Guide*.
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * The size of the attachment in bytes.
   *
   * @public
   */
  AttachmentSizeInBytes: number | undefined;

  /**
   * A case-sensitive name of the attachment being uploaded.
   *
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The authentication token associated with the participant's connection.
   *
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * Fields to be used while uploading the attachment.
 *
 * @public
 */
export interface UploadMetadata {
  /**
   * This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response to [StartAttachmentUpload](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html).
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * The headers to be provided while uploading the file to the URL.
   *
   * @public
   */
  HeadersToInclude?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAttachmentUploadResponse {
  /**
   * A unique identifier for the attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * The headers to be provided while uploading the file to the URL.
   *
   * @public
   */
  UploadMetadata?: UploadMetadata | undefined;
}
