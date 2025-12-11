// smithy-typescript generated code
import {
  ArtifactStatus,
  ChatItemType,
  ConnectionType,
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
   * <p>The <code>sessionId</code> provided in the <code>authenticationInitiated</code>
   *             event.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
   * <p>A list of unique identifiers for the attachments.</p>
   * @public
   */
  AttachmentIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
   * <p>Type of connection information required. If you need
   *                 <code>CONNECTION_CREDENTIALS</code> along with marking participant as connected,
   *             pass <code>CONNECTION_CREDENTIALS</code> in <code>Type</code>.</p>
   * @public
   */
  Type?: ConnectionType[] | undefined;

  /**
   * <p>This is a header parameter.</p>
   *          <p>The ParticipantToken as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a>
   *             API response.</p>
   * @public
   */
  ParticipantToken: string | undefined;

  /**
   * <p>Amazon Connect Participant is used to mark the participant as connected for customer
   *             participant in message streaming, as well as for agent or manager participant in
   *             non-streaming chats.</p>
   * @public
   */
  ConnectParticipant?: boolean | undefined;
}

/**
 * <p>Connection credentials. </p>
 * @public
 */
export interface ConnectionCredentials {
  /**
   * <p>The connection token.</p>
   * @public
   */
  ConnectionToken?: string | undefined;

  /**
   * <p>The expiration of the token.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * <p>The attendee information, including attendee ID and join token.</p>
 * @public
 */
export interface Attendee {
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
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an
 *             Amazon Chime SDK meeting.</p>
 * @public
 */
export interface WebRTCMediaPlacement {
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
   * <p>The event ingestion URL to which you send client meeting events.</p>
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * <p>Has audio-specific configurations as the operating parameter for Echo Reduction.</p>
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
 * <p>The configuration settings of the features available to a meeting.</p>
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * <p>The configuration settings for the audio features available to a meeting.</p>
   * @public
   */
  Audio?: AudioFeatures | undefined;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 * @public
 */
export interface WebRTCMeeting {
  /**
   * <p>The media placement for the meeting.</p>
   * @public
   */
  MediaPlacement?: WebRTCMediaPlacement | undefined;

  /**
   * <p>The configuration settings of the features available to a meeting.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId?: string | undefined;
}

/**
 * <p>Creates the participant’s WebRTC connection data required for the client application
 *             (mobile or web) to connect to the call.</p>
 * @public
 */
export interface WebRTCConnection {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   * @public
   */
  Attendee?: Attendee | undefined;

  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   * @public
   */
  Meeting?: WebRTCMeeting | undefined;
}

/**
 * <p>The websocket for the participant's connection.</p>
 * @public
 */
export interface Websocket {
  /**
   * <p>The URL of the websocket.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  ConnectionExpiry?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantConnectionResponse {
  /**
   * <p>Creates the participant's websocket connection.</p>
   * @public
   */
  Websocket?: Websocket | undefined;

  /**
   * <p>Creates the participant's connection credentials. The authentication token associated
   *             with the participant's connection.</p>
   * @public
   */
  ConnectionCredentials?: ConnectionCredentials | undefined;

  /**
   * <p>Creates the participant's WebRTC connection data required for the client application
   *             (mobile application or website) to connect to the call. </p>
   * @public
   */
  WebRTCConnection?: WebRTCConnection | undefined;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * <p>An encrypted token originating from the interactive message of a ShowView block
   *             operation. Represents the desired view.</p>
   * @public
   */
  ViewToken: string | undefined;

  /**
   * <p>The connection token.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * <p>View content containing all content necessary to render a view except for runtime
 *             input data.</p>
 * @public
 */
export interface ViewContent {
  /**
   * <p>The schema representing the input data that the view template must be supplied to
   *             render.</p>
   * @public
   */
  InputSchema?: string | undefined;

  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string | undefined;

  /**
   * <p>A list of actions possible from the view</p>
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * <p>A view resource object. Contains metadata and content necessary to render the
 *             view.</p>
 * @public
 */
export interface View {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current version of the view.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime
   *             input data.</p>
   * @public
   */
  Content?: ViewContent | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * <p>A view resource object. Contains metadata and content necessary to render the
   *             view.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DisconnectParticipantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format:
   *             yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetAttachmentResponse {
  /**
   * <p>This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response
   * to <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html">StartAttachmentUpload</a>.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * <p>The size of the attachment in bytes.</p>
   * @public
   */
  AttachmentSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface GetAuthenticationUrlRequest {
  /**
   * <p>The sessionId provided in the authenticationInitiated event.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The URL where the customer will be redirected after Amazon Cognito authorizes the
   *             user.</p>
   * @public
   */
  RedirectUri: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface GetAuthenticationUrlResponse {
  /**
   * <p>The URL where the customer will sign in to the identity provider. This URL contains
   *             the authorize endpoint for the Cognito UserPool used in the authentication.</p>
   * @public
   */
  AuthenticationUrl?: string | undefined;
}

/**
 * <p>A filtering option for where to start. For example, if you sent 100 messages, start
 *             with message 50. </p>
 * @public
 */
export interface StartPosition {
  /**
   * <p>The ID of the message or event where to start. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The time in ISO format where to start.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   * @public
   */
  MostRecent?: number | undefined;
}

/**
 * @public
 */
export interface GetTranscriptRequest {
  /**
   * <p>The contactId from the current contact chain for which transcript is needed.</p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The maximum number of results to return in the page. Default: 10. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The direction from StartPosition from which to retrieve message. Default: BACKWARD
   *             when no StartPosition is provided, FORWARD with StartPosition. </p>
   * @public
   */
  ScanDirection?: ScanDirection | undefined;

  /**
   * <p>The sort order for the records. Default: DESCENDING.</p>
   * @public
   */
  SortOrder?: SortKey | undefined;

  /**
   * <p>A filtering option for where to start.</p>
   * @public
   */
  StartPosition?: StartPosition | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * <p>The case-insensitive input to indicate standard MIME type that describes the format of the file
 *             that will be uploaded.</p>
 * @public
 */
export interface AttachmentItem {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>A case-sensitive name of the attachment being uploaded.</p>
   * @public
   */
  AttachmentName?: string | undefined;

  /**
   * <p>Status of the attachment.</p>
   * @public
   */
  Status?: ArtifactStatus | undefined;
}

/**
 * <p>The receipt for the message delivered to the recipient.</p>
 * @public
 */
export interface Receipt {
  /**
   * <p>The time when the message was delivered to the recipient.</p>
   * @public
   */
  DeliveredTimestamp?: string | undefined;

  /**
   * <p>The time when the message was read by the recipient.</p>
   * @public
   */
  ReadTimestamp?: string | undefined;

  /**
   * <p>The identifier of the recipient of the message. </p>
   * @public
   */
  RecipientParticipantId?: string | undefined;
}

/**
 * <p>Contains metadata related to a message.</p>
 * @public
 */
export interface MessageMetadata {
  /**
   * <p>The identifier of the message that contains the metadata information. </p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The list of receipt information for a message for different recipients.</p>
   * @public
   */
  Receipts?: Receipt[] | undefined;

  /**
   * <p>The status of Message Processing for the message.</p>
   * @public
   */
  MessageProcessingStatus?: MessageProcessingStatus | undefined;
}

/**
 * <p>An item - message or event - that has been sent. </p>
 * @public
 */
export interface Item {
  /**
   * <p>The time when the message or event was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * <p>The content of the message or event.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The type of content of the item.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The ID of the item.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Type of the item: message or event. </p>
   * @public
   */
  Type?: ChatItemType | undefined;

  /**
   * <p>The ID of the sender in the session.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The chat display name of the sender.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The role of the sender. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>Provides information about the attachments.</p>
   * @public
   */
  Attachments?: AttachmentItem[] | undefined;

  /**
   * <p>The metadata related to the message. Currently this supports only information related
   *             to message receipts.</p>
   * @public
   */
  MessageMetadata?: MessageMetadata | undefined;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is only
   *             populated for persistent chats when the transcript item is from the past chat session.
   *             For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent
   *             chat</a>.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is
   *             populated only when the transcript item is from the current chat session.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface GetTranscriptResponse {
  /**
   * <p>The initial contact ID for the contact. </p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>The list of messages in the session.</p>
   * @public
   */
  Transcript?: Item[] | undefined;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendEventRequest {
  /**
   * <p>The content type of the request. Supported types are:</p>
   *          <ul>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.typing</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.connection.acknowledged (is no longer
   *                     maintained since December 31, 2024) </p>
   *             </li>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.message.delivered</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.message.read</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the event to be sent (for example, message text). For content related
   *             to message receipts, this is supported in the form of a JSON string.</p>
   *          <p>Sample Content: "\{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"\}"</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface SendEventResponse {
  /**
   * <p>The ID of the response.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The time when the event was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string | undefined;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * <p>The type of the content. Possible types are <code>text/plain</code>,
   *                 <code>text/markdown</code>, <code>application/json</code>, and
   *                 <code>application/vnd.amazonaws.connect.message.interactive.response</code>.
   *             </p>
   *          <p>Supported types on the contact are configured through
   *                 <code>SupportedMessagingContentTypes</code> on <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a>
   *             and <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundChatContact.html">StartOutboundChatContact</a>.</p>
   *          <p> For Apple Messages for Business, SMS, and WhatsApp Business Messaging contacts, only
   *                 <code>text/plain</code> is supported.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the message. </p>
   *          <ul>
   *             <li>
   *                <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length
   *                     Constraints are Minimum of 1, Maximum of 1024. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/json</code>, the Length Constraints are Minimum of 1,
   *                     Maximum of 12000. </p>
   *             </li>
   *             <li>
   *                <p>For
   *                         <code>application/vnd.amazonaws.connect.message.interactive.response</code>,
   *                     the Length Constraints are Minimum of 1, Maximum of 12288.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The authentication token associated with the connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * <p>Contains metadata for chat messages.</p>
 * @public
 */
export interface MessageProcessingMetadata {
  /**
   * <p>The status of Message Processing for the message.</p>
   * @public
   */
  MessageProcessingStatus?: MessageProcessingStatus | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * <p>The ID of the message.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The time when the message was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string | undefined;

  /**
   * <p>Contains metadata for the message.</p>
   * @public
   */
  MessageMetadata?: MessageProcessingMetadata | undefined;
}

/**
 * @public
 */
export interface StartAttachmentUploadRequest {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The size of the attachment in bytes.</p>
   * @public
   */
  AttachmentSizeInBytes: number | undefined;

  /**
   * <p>A case-sensitive name of the attachment being uploaded.</p>
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * <p>Fields to be used while uploading the attachment.</p>
 * @public
 */
export interface UploadMetadata {
  /**
   * <p>This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response
   * to <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html">StartAttachmentUpload</a>.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   * @public
   */
  HeadersToInclude?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAttachmentUploadResponse {
  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   * @public
   */
  UploadMetadata?: UploadMetadata | undefined;
}
