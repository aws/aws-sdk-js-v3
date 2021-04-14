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

export interface CompleteAttachmentUploadRequest {
  /**
   * <p>A list of unique identifiers for the attachments.</p>
   */
  AttachmentIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace CompleteAttachmentUploadRequest {
  export const filterSensitiveLog = (obj: CompleteAttachmentUploadRequest): any => ({
    ...obj,
  });
}

export interface CompleteAttachmentUploadResponse {}

export namespace CompleteAttachmentUploadResponse {
  export const filterSensitiveLog = (obj: CompleteAttachmentUploadResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An attachment with that identifier is already being uploaded.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of attachments per contact exceeds the quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
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

/**
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS",
  WEBSOCKET = "WEBSOCKET",
}

export interface CreateParticipantConnectionRequest {
  /**
   * <p>Type of connection information required.</p>
   */
  Type: (ConnectionType | string)[] | undefined;

  /**
   * <p>This is a header parameter.</p>
   *         <p>The Participant Token as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html">StartChatContact</a>
   *             API response.</p>
   */
  ParticipantToken: string | undefined;
}

export namespace CreateParticipantConnectionRequest {
  export const filterSensitiveLog = (obj: CreateParticipantConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Connection credentials. </p>
 */
export interface ConnectionCredentials {
  /**
   * <p>The connection token.</p>
   */
  ConnectionToken?: string;

  /**
   * <p>The expiration of the token.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  Expiry?: string;
}

export namespace ConnectionCredentials {
  export const filterSensitiveLog = (obj: ConnectionCredentials): any => ({
    ...obj,
  });
}

/**
 * <p>The websocket for the participant's connection.</p>
 */
export interface Websocket {
  /**
   * <p>The URL of the websocket.</p>
   */
  Url?: string;

  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  ConnectionExpiry?: string;
}

export namespace Websocket {
  export const filterSensitiveLog = (obj: Websocket): any => ({
    ...obj,
  });
}

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

export namespace CreateParticipantConnectionResponse {
  export const filterSensitiveLog = (obj: CreateParticipantConnectionResponse): any => ({
    ...obj,
  });
}

export interface DisconnectParticipantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace DisconnectParticipantRequest {
  export const filterSensitiveLog = (obj: DisconnectParticipantRequest): any => ({
    ...obj,
  });
}

export interface DisconnectParticipantResponse {}

export namespace DisconnectParticipantResponse {
  export const filterSensitiveLog = (obj: DisconnectParticipantResponse): any => ({
    ...obj,
  });
}

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

export namespace GetAttachmentRequest {
  export const filterSensitiveLog = (obj: GetAttachmentRequest): any => ({
    ...obj,
  });
}

export interface GetAttachmentResponse {
  /**
   * <p>The pre-signed URL using which file would be downloaded from Amazon S3 by the API caller.</p>
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   */
  UrlExpiry?: string;
}

export namespace GetAttachmentResponse {
  export const filterSensitiveLog = (obj: GetAttachmentResponse): any => ({
    ...obj,
  });
}

export enum ScanDirection {
  BACKWARD = "BACKWARD",
  FORWARD = "FORWARD",
}

export enum SortKey {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
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
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   */
  MostRecent?: number;
}

export namespace StartPosition {
  export const filterSensitiveLog = (obj: StartPosition): any => ({
    ...obj,
  });
}

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

export namespace GetTranscriptRequest {
  export const filterSensitiveLog = (obj: GetTranscriptRequest): any => ({
    ...obj,
  });
}

export enum ArtifactStatus {
  APPROVED = "APPROVED",
  IN_PROGRESS = "IN_PROGRESS",
  REJECTED = "REJECTED",
}

/**
 * <p>The case-insensitive input to indicate standard MIME type that describes the format of the file
 *             that will be uploaded.</p>
 */
export interface AttachmentItem {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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

export namespace AttachmentItem {
  export const filterSensitiveLog = (obj: AttachmentItem): any => ({
    ...obj,
  });
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
  SYSTEM = "SYSTEM",
}

export enum ChatItemType {
  ATTACHMENT = "ATTACHMENT",
  CHAT_ENDED = "CHAT_ENDED",
  CONNECTION_ACK = "CONNECTION_ACK",
  EVENT = "EVENT",
  MESSAGE = "MESSAGE",
  PARTICIPANT_JOINED = "PARTICIPANT_JOINED",
  PARTICIPANT_LEFT = "PARTICIPANT_LEFT",
  TRANSFER_FAILED = "TRANSFER_FAILED",
  TRANSFER_SUCCEEDED = "TRANSFER_SUCCEEDED",
  TYPING = "TYPING",
}

/**
 * <p>An item - message or event - that has been sent. </p>
 */
export interface Item {
  /**
   * <p>The time when the message or event was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
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
}

export namespace Item {
  export const filterSensitiveLog = (obj: Item): any => ({
    ...obj,
  });
}

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

export namespace GetTranscriptResponse {
  export const filterSensitiveLog = (obj: GetTranscriptResponse): any => ({
    ...obj,
  });
}

export interface SendEventRequest {
  /**
   * <p>The content type of the request. Supported types are:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>application/vnd.amazonaws.connect.event.typing</p>
   *             </li>
   *             <li>
   *                 <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p>
   *             </li>
   *          </ul>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the event to be sent (for example, message text). This is not yet
   *             supported.</p>
   */
  Content?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace SendEventRequest {
  export const filterSensitiveLog = (obj: SendEventRequest): any => ({
    ...obj,
  });
}

export interface SendEventResponse {
  /**
   * <p>The ID of the response.</p>
   */
  Id?: string;

  /**
   * <p>The time when the event was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

export namespace SendEventResponse {
  export const filterSensitiveLog = (obj: SendEventResponse): any => ({
    ...obj,
  });
}

export interface SendMessageRequest {
  /**
   * <p>The type of the content. Supported types are text/plain.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace SendMessageRequest {
  export const filterSensitiveLog = (obj: SendMessageRequest): any => ({
    ...obj,
  });
}

export interface SendMessageResponse {
  /**
   * <p>The ID of the message.</p>
   */
  Id?: string;

  /**
   * <p>The time when the message was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

export namespace SendMessageResponse {
  export const filterSensitiveLog = (obj: SendMessageResponse): any => ({
    ...obj,
  });
}

export interface StartAttachmentUploadRequest {
  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
   * <p>A unique case sensitive identifier to support idempotency of request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace StartAttachmentUploadRequest {
  export const filterSensitiveLog = (obj: StartAttachmentUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Fields to be used while uploading the attachment.</p>
 */
export interface UploadMetadata {
  /**
   * <p>The pre-signed URL using which file would be downloaded from Amazon S3 by the API caller.</p>
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   */
  UrlExpiry?: string;

  /**
   * <p>The headers to be provided while uploading the file to the URL.</p>
   */
  HeadersToInclude?: { [key: string]: string };
}

export namespace UploadMetadata {
  export const filterSensitiveLog = (obj: UploadMetadata): any => ({
    ...obj,
  });
}

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

export namespace StartAttachmentUploadResponse {
  export const filterSensitiveLog = (obj: StartAttachmentUploadResponse): any => ({
    ...obj,
  });
}
