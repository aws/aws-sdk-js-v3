// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectParticipantServiceException as __BaseException } from "./ConnectParticipantServiceException";

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
  ClientToken?: string;

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
 * <p>The requested operation conflicts with the current state of a service
 *             resource associated with the request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of attachments per contact exceeds the quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
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

/**
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  CONNECTION_CREDENTIALS: "CONNECTION_CREDENTIALS",
  WEBSOCKET: "WEBSOCKET",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

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
  Type?: ConnectionType[];

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
  ConnectParticipant?: boolean;
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
  ConnectionToken?: string;

  /**
   * <p>The expiration of the token.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  Expiry?: string;
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
  Url?: string;

  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  ConnectionExpiry?: string;
}

/**
 * @public
 */
export interface CreateParticipantConnectionResponse {
  /**
   * <p>Creates the participant's websocket connection.</p>
   * @public
   */
  Websocket?: Websocket;

  /**
   * <p>Creates the participant's connection credentials. The authentication token associated
   *             with the participant's connection.</p>
   * @public
   */
  ConnectionCredentials?: ConnectionCredentials;
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
  InputSchema?: string;

  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string;

  /**
   * <p>A list of actions possible from the view</p>
   * @public
   */
  Actions?: string[];
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
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The current version of the view.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>View content containing all content necessary to render a view except for runtime
   *             input data.</p>
   * @public
   */
  Content?: ViewContent;
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
  View?: View;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONTACT: "CONTACT",
  CONTACT_FLOW: "CONTACT_FLOW",
  HIERARCHY_GROUP: "HIERARCHY_GROUP",
  HIERARCHY_LEVEL: "HIERARCHY_LEVEL",
  INSTANCE: "INSTANCE",
  PARTICIPANT: "PARTICIPANT",
  PHONE_NUMBER: "PHONE_NUMBER",
  USER: "USER",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of Amazon Connect resource.</p>
   * @public
   */
  ResourceType?: ResourceType;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
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
  ClientToken?: string;

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
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string;
}

/**
 * @public
 * @enum
 */
export const ScanDirection = {
  BACKWARD: "BACKWARD",
  FORWARD: "FORWARD",
} as const;

/**
 * @public
 */
export type ScanDirection = (typeof ScanDirection)[keyof typeof ScanDirection];

/**
 * @public
 * @enum
 */
export const SortKey = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

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
  Id?: string;

  /**
   * <p>The time in ISO format where to start.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   * @public
   */
  MostRecent?: number;
}

/**
 * @public
 */
export interface GetTranscriptRequest {
  /**
   * <p>The contactId from the current contact chain for which transcript is needed.</p>
   * @public
   */
  ContactId?: string;

  /**
   * <p>The maximum number of results to return in the page. Default: 10. </p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The direction from StartPosition from which to retrieve message. Default: BACKWARD
   *             when no StartPosition is provided, FORWARD with StartPosition. </p>
   * @public
   */
  ScanDirection?: ScanDirection;

  /**
   * <p>The sort order for the records. Default: DESCENDING.</p>
   * @public
   */
  SortOrder?: SortKey;

  /**
   * <p>A filtering option for where to start.</p>
   * @public
   */
  StartPosition?: StartPosition;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  APPROVED: "APPROVED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

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
  ContentType?: string;

  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId?: string;

  /**
   * <p>A case-sensitive name of the attachment being uploaded.</p>
   * @public
   */
  AttachmentName?: string;

  /**
   * <p>Status of the attachment.</p>
   * @public
   */
  Status?: ArtifactStatus;
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
  DeliveredTimestamp?: string;

  /**
   * <p>The time when the message was read by the recipient.</p>
   * @public
   */
  ReadTimestamp?: string;

  /**
   * <p>The identifier of the recipient of the message. </p>
   * @public
   */
  RecipientParticipantId?: string;
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
  MessageId?: string;

  /**
   * <p>The list of receipt information for a message for different recipients.</p>
   * @public
   */
  Receipts?: Receipt[];
}

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
  CUSTOM_BOT: "CUSTOM_BOT",
  SUPERVISOR: "SUPERVISOR",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * @enum
 */
export const ChatItemType = {
  ATTACHMENT: "ATTACHMENT",
  CHAT_ENDED: "CHAT_ENDED",
  CONNECTION_ACK: "CONNECTION_ACK",
  EVENT: "EVENT",
  MESSAGE: "MESSAGE",
  MESSAGE_DELIVERED: "MESSAGE_DELIVERED",
  MESSAGE_READ: "MESSAGE_READ",
  PARTICIPANT_JOINED: "PARTICIPANT_JOINED",
  PARTICIPANT_LEFT: "PARTICIPANT_LEFT",
  TRANSFER_FAILED: "TRANSFER_FAILED",
  TRANSFER_SUCCEEDED: "TRANSFER_SUCCEEDED",
  TYPING: "TYPING",
} as const;

/**
 * @public
 */
export type ChatItemType = (typeof ChatItemType)[keyof typeof ChatItemType];

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
  AbsoluteTime?: string;

  /**
   * <p>The content of the message or event.</p>
   * @public
   */
  Content?: string;

  /**
   * <p>The type of content of the item.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>The ID of the item.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Type of the item: message or event. </p>
   * @public
   */
  Type?: ChatItemType;

  /**
   * <p>The ID of the sender in the session.</p>
   * @public
   */
  ParticipantId?: string;

  /**
   * <p>The chat display name of the sender.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The role of the sender. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole;

  /**
   * <p>Provides information about the attachments.</p>
   * @public
   */
  Attachments?: AttachmentItem[];

  /**
   * <p>The metadata related to the message. Currently this supports only information related
   *             to message receipts.</p>
   * @public
   */
  MessageMetadata?: MessageMetadata;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is only
   *             populated for persistent chats when the transcript item is from the past chat session.
   *             For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent
   *             chat</a>.</p>
   * @public
   */
  RelatedContactId?: string;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is
   *             populated only when the transcript item is from the current chat session.</p>
   * @public
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface GetTranscriptResponse {
  /**
   * <p>The initial contact ID for the contact. </p>
   * @public
   */
  InitialContactId?: string;

  /**
   * <p>The list of messages in the session.</p>
   * @public
   */
  Transcript?: Item[];

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
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
   *                <p>application/vnd.amazonaws.connect.event.connection.acknowledged (will be
   *                     deprecated on December 31, 2024) </p>
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
  Content?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;

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
  Id?: string;

  /**
   * <p>The time when the event was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *                 <code>text/markdown</code>, <code>application/json</code>, and
   *                 <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
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
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the connection.</p>
   * @public
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * <p>The ID of the message.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The time when the message was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  AbsoluteTime?: string;
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
  ClientToken?: string;

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
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   * @public
   */
  HeadersToInclude?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAttachmentUploadResponse {
  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId?: string;

  /**
   * <p>Fields to be used while uploading the attachment.</p>
   * @public
   */
  UploadMetadata?: UploadMetadata;
}

/**
 * @internal
 */
export const ViewContentFilterSensitiveLog = (obj: ViewContent): any => ({
  ...obj,
  ...(obj.InputSchema && { InputSchema: SENSITIVE_STRING }),
  ...(obj.Template && { Template: SENSITIVE_STRING }),
  ...(obj.Actions && { Actions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ViewFilterSensitiveLog = (obj: View): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Content && { Content: ViewContentFilterSensitiveLog(obj.Content) }),
});

/**
 * @internal
 */
export const DescribeViewResponseFilterSensitiveLog = (obj: DescribeViewResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});
