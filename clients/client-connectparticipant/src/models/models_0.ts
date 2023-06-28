// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectParticipantServiceException as __BaseException } from "./ConnectParticipantServiceException";

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
 */
export interface CompleteAttachmentUploadRequest {
  /**
   * <p>A list of unique identifiers for the attachments.</p>
   */
  AttachmentIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface CompleteAttachmentUploadResponse {}

/**
 * @public
 * <p>An attachment with that identifier is already being uploaded.</p>
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
 * @public
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
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
 * @public
 * <p>The number of attachments per contact exceeds the quota.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
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
   * <p>Type of connection information required. This can be omitted if
   *                 <code>ConnectParticipant</code> is <code>true</code>.</p>
   */
  Type?: (ConnectionType | string)[];

  /**
   * <p>This is a header parameter.</p>
   *          <p>The ParticipantToken as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a>
   *             API response.</p>
   */
  ParticipantToken: string | undefined;

  /**
   * <p>Amazon Connect Participant is used to mark the participant as connected for customer
   *             participant in message streaming, as well as for agent or manager participant in
   *             non-streaming chats.</p>
   */
  ConnectParticipant?: boolean;
}

/**
 * @public
 * <p>Connection credentials. </p>
 */
export interface ConnectionCredentials {
  /**
   * <p>The connection token.</p>
   */
  ConnectionToken?: string;

  /**
   * <p>The expiration of the token.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  Expiry?: string;
}

/**
 * @public
 * <p>The websocket for the participant's connection.</p>
 */
export interface Websocket {
  /**
   * <p>The URL of the websocket.</p>
   */
  Url?: string;

  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  ConnectionExpiry?: string;
}

/**
 * @public
 */
export interface CreateParticipantConnectionResponse {
  /**
   * <p>Creates the participant's websocket connection.</p>
   */
  Websocket?: Websocket;

  /**
   * <p>Creates the participant's connection credentials. The authentication token associated
   *             with the participant's connection.</p>
   */
  ConnectionCredentials?: ConnectionCredentials;
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
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
   */
  AttachmentId: string | undefined;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
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
 * @public
 * <p>A filtering option for where to start. For example, if you sent 100 messages, start
 *             with message 50. </p>
 */
export interface StartPosition {
  /**
   * <p>The ID of the message or event where to start. </p>
   */
  Id?: string;

  /**
   * <p>The time in ISO format where to start.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   */
  MostRecent?: number;
}

/**
 * @public
 */
export interface GetTranscriptRequest {
  /**
   * <p>The contactId from the current contact chain for which transcript is needed.</p>
   */
  ContactId?: string;

  /**
   * <p>The maximum number of results to return in the page. Default: 10. </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The direction from StartPosition from which to retrieve message. Default: BACKWARD
   *             when no StartPosition is provided, FORWARD with StartPosition. </p>
   */
  ScanDirection?: ScanDirection | string;

  /**
   * <p>The sort order for the records. Default: DESCENDING.</p>
   */
  SortOrder?: SortKey | string;

  /**
   * <p>A filtering option for where to start.</p>
   */
  StartPosition?: StartPosition;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
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
 * @public
 * <p>The case-insensitive input to indicate standard MIME type that describes the format of the file
 *             that will be uploaded.</p>
 */
export interface AttachmentItem {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  ContentType?: string;

  /**
   * <p>A unique identifier for the attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>A case-sensitive name of the attachment being uploaded.</p>
   */
  AttachmentName?: string;

  /**
   * <p>Status of the attachment.</p>
   */
  Status?: ArtifactStatus | string;
}

/**
 * @public
 * <p>The receipt for the message delivered to the recipient.</p>
 */
export interface Receipt {
  /**
   * <p>The time when the message was delivered to the recipient.</p>
   */
  DeliveredTimestamp?: string;

  /**
   * <p>The time when the message was read by the recipient.</p>
   */
  ReadTimestamp?: string;

  /**
   * <p>The identifier of the recipient of the message. </p>
   */
  RecipientParticipantId?: string;
}

/**
 * @public
 * <p>Contains metadata related to a message.</p>
 */
export interface MessageMetadata {
  /**
   * <p>The identifier of the message that contains the metadata information. </p>
   */
  MessageId?: string;

  /**
   * <p>The list of receipt information for a message for different recipients.</p>
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
 * @public
 * <p>An item - message or event - that has been sent. </p>
 */
export interface Item {
  /**
   * <p>The time when the message or event was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The content of the message or event.</p>
   */
  Content?: string;

  /**
   * <p>The type of content of the item.</p>
   */
  ContentType?: string;

  /**
   * <p>The ID of the item.</p>
   */
  Id?: string;

  /**
   * <p>Type of the item: message or event. </p>
   */
  Type?: ChatItemType | string;

  /**
   * <p>The ID of the sender in the session.</p>
   */
  ParticipantId?: string;

  /**
   * <p>The chat display name of the sender.</p>
   */
  DisplayName?: string;

  /**
   * <p>The role of the sender. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Provides information about the attachments.</p>
   */
  Attachments?: AttachmentItem[];

  /**
   * <p>The metadata related to the message. Currently this supports only information related
   *             to message receipts.</p>
   */
  MessageMetadata?: MessageMetadata;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is only
   *             populated for persistent chats when the transcript item is from the past chat session.
   *             For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent
   *             chat</a>.</p>
   */
  RelatedContactId?: string;

  /**
   * <p>The contactId on which the transcript item was originally sent. This field is
   *             populated only when the transcript item is from the current chat session.</p>
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface GetTranscriptResponse {
  /**
   * <p>The initial contact ID for the contact. </p>
   */
  InitialContactId?: string;

  /**
   * <p>The list of messages in the session.</p>
   */
  Transcript?: Item[];

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
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
   *                <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.message.delivered</p>
   *             </li>
   *             <li>
   *                <p>application/vnd.amazonaws.connect.event.message.read</p>
   *             </li>
   *          </ul>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the event to be sent (for example, message text). For content related
   *             to message receipts, this is supported in the form of a JSON string.</p>
   *          <p>Sample Content: "\{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"\}"</p>
   */
  Content?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface SendEventResponse {
  /**
   * <p>The ID of the response.</p>
   */
  Id?: string;

  /**
   * <p>The time when the event was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

/**
 * @public
 */
export interface SendMessageRequest {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *             <code>text/markdown</code>, <code>application/json</code>, and
   *             <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
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
   *                <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length
   *                     Constraints are Minimum of 1, Maximum of 12288.</p>
   *             </li>
   *          </ul>
   */
  Content: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the connection.</p>
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 */
export interface SendMessageResponse {
  /**
   * <p>The ID of the message.</p>
   */
  Id?: string;

  /**
   * <p>The time when the message was sent.</p>
   *          <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

/**
 * @public
 */
export interface StartAttachmentUploadRequest {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The size of the attachment in bytes.</p>
   */
  AttachmentSizeInBytes: number | undefined;

  /**
   * <p>A case-sensitive name of the attachment being uploaded.</p>
   */
  AttachmentName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

/**
 * @public
 * <p>Fields to be used while uploading the attachment.</p>
 */
export interface UploadMetadata {
  /**
   * <p>This is the pre-signed URL that can be used for uploading the file to Amazon S3 when used in response
   * to <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_StartAttachmentUpload.html">StartAttachmentUpload</a>.</p>
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   */
  UrlExpiry?: string;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   */
  HeadersToInclude?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAttachmentUploadResponse {
  /**
   * <p>A unique identifier for the attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Fields to be used while uploading the attachment.</p>
   */
  UploadMetadata?: UploadMetadata;
}
