import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

export enum ChatItemType {
  CONNECTION_ACK = "CONNECTION_ACK",
  EVENT = "EVENT",
  MESSAGE = "MESSAGE"
}

/**
 * <p>Connection credentials. </p>
 */
export interface ConnectionCredentials {
  __type?: "ConnectionCredentials";
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
    ...obj
  });
  export const isa = (o: any): o is ConnectionCredentials =>
    __isa(o, "ConnectionCredentials");
}

export enum ConnectionType {
  CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS",
  WEBSOCKET = "WEBSOCKET"
}

export interface CreateParticipantConnectionRequest {
  __type?: "CreateParticipantConnectionRequest";
  /**
   * <p>Participant Token as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContactResponse.html">StartChatContact</a> API response.</p>
   */
  ParticipantToken: string | undefined;

  /**
   * <p>Type of connection information required.</p>
   */
  Type: (ConnectionType | string)[] | undefined;
}

export namespace CreateParticipantConnectionRequest {
  export const filterSensitiveLog = (
    obj: CreateParticipantConnectionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateParticipantConnectionRequest =>
    __isa(o, "CreateParticipantConnectionRequest");
}

export interface CreateParticipantConnectionResponse {
  __type?: "CreateParticipantConnectionResponse";
  /**
   * <p>Creates the participant's connection credentials. The authentication token associated
   *             with the participant's connection.</p>
   */
  ConnectionCredentials?: ConnectionCredentials;

  /**
   * <p>Creates the participant's websocket connection.</p>
   */
  Websocket?: Websocket;
}

export namespace CreateParticipantConnectionResponse {
  export const filterSensitiveLog = (
    obj: CreateParticipantConnectionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateParticipantConnectionResponse =>
    __isa(o, "CreateParticipantConnectionResponse");
}

export interface DisconnectParticipantRequest {
  __type?: "DisconnectParticipantRequest";
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
  export const filterSensitiveLog = (
    obj: DisconnectParticipantRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisconnectParticipantRequest =>
    __isa(o, "DisconnectParticipantRequest");
}

export interface DisconnectParticipantResponse {
  __type?: "DisconnectParticipantResponse";
}

export namespace DisconnectParticipantResponse {
  export const filterSensitiveLog = (
    obj: DisconnectParticipantResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisconnectParticipantResponse =>
    __isa(o, "DisconnectParticipantResponse");
}

export interface GetTranscriptRequest {
  __type?: "GetTranscriptRequest";
  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The contactId from the current contact chain for which transcript is needed.</p>
   */
  ContactId?: string;

  /**
   * <p>The maximum number of results to return in the page. Default: 10.
   *            </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. </p>
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
}

export namespace GetTranscriptRequest {
  export const filterSensitiveLog = (obj: GetTranscriptRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTranscriptRequest =>
    __isa(o, "GetTranscriptRequest");
}

export interface GetTranscriptResponse {
  __type?: "GetTranscriptResponse";
  /**
   * <p>The initial contact ID for the contact. </p>
   */
  InitialContactId?: string;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of messages in the session.</p>
   */
  Transcript?: Item[];
}

export namespace GetTranscriptResponse {
  export const filterSensitiveLog = (obj: GetTranscriptResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTranscriptResponse =>
    __isa(o, "GetTranscriptResponse");
}

/**
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

/**
 * <p>An item - message or event - that has been sent. </p>
 */
export interface Item {
  __type?: "Item";
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
   * <p>The chat display name of the sender.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ID of the item.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the sender in the session.</p>
   */
  ParticipantId?: string;

  /**
   * <p>The role of the sender. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Type of the item: message or event. </p>
   */
  Type?: ChatItemType | string;
}

export namespace Item {
  export const filterSensitiveLog = (obj: Item): any => ({
    ...obj
  });
  export const isa = (o: any): o is Item => __isa(o, "Item");
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
  SYSTEM = "SYSTEM"
}

export enum ScanDirection {
  BACKWARD = "BACKWARD",
  FORWARD = "FORWARD"
}

export interface SendEventRequest {
  __type?: "SendEventRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The content of the event to be sent (for example, message text). This is not yet
   *             supported.</p>
   */
  Content?: string;

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
}

export namespace SendEventRequest {
  export const filterSensitiveLog = (obj: SendEventRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendEventRequest =>
    __isa(o, "SendEventRequest");
}

export interface SendEventResponse {
  __type?: "SendEventResponse";
  /**
   * <p>The time when the event was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The ID of the response.</p>
   */
  Id?: string;
}

export namespace SendEventResponse {
  export const filterSensitiveLog = (obj: SendEventResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendEventResponse =>
    __isa(o, "SendEventResponse");
}

export interface SendMessageRequest {
  __type?: "SendMessageRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;

  /**
   * <p>The type of the content. Supported types are text/plain.</p>
   */
  ContentType: string | undefined;
}

export namespace SendMessageRequest {
  export const filterSensitiveLog = (obj: SendMessageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendMessageRequest =>
    __isa(o, "SendMessageRequest");
}

export interface SendMessageResponse {
  __type?: "SendMessageResponse";
  /**
   * <p>The time when the message was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The ID of the message.</p>
   */
  Id?: string;
}

export namespace SendMessageResponse {
  export const filterSensitiveLog = (obj: SendMessageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendMessageResponse =>
    __isa(o, "SendMessageResponse");
}

export enum SortKey {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

/**
 * <p>A filtering option for where to start. For example, if you sent 100 messages, start
 *             with message 50. </p>
 */
export interface StartPosition {
  __type?: "StartPosition";
  /**
   * <p>The time in ISO format where to start.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The ID of the message or event where to start. </p>
   */
  Id?: string;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   */
  MostRecent?: number;
}

export namespace StartPosition {
  export const filterSensitiveLog = (obj: StartPosition): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartPosition => __isa(o, "StartPosition");
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

/**
 * <p>The websocket for the participant's connection.</p>
 */
export interface Websocket {
  __type?: "Websocket";
  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  ConnectionExpiry?: string;

  /**
   * <p>The URL of the websocket.</p>
   */
  Url?: string;
}

export namespace Websocket {
  export const filterSensitiveLog = (obj: Websocket): any => ({
    ...obj
  });
  export const isa = (o: any): o is Websocket => __isa(o, "Websocket");
}
