import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
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
  Type: Array<ConnectionType | string> | undefined;
}

export namespace CreateParticipantConnectionRequest {
  export function isa(o: any): o is CreateParticipantConnectionRequest {
    return _smithy.isa(o, "CreateParticipantConnectionRequest");
  }
}

export interface CreateParticipantConnectionResponse extends $MetadataBearer {
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
  export function isa(o: any): o is CreateParticipantConnectionResponse {
    return _smithy.isa(o, "CreateParticipantConnectionResponse");
  }
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
  export function isa(o: any): o is DisconnectParticipantRequest {
    return _smithy.isa(o, "DisconnectParticipantRequest");
  }
}

export interface DisconnectParticipantResponse extends $MetadataBearer {
  __type?: "DisconnectParticipantResponse";
}

export namespace DisconnectParticipantResponse {
  export function isa(o: any): o is DisconnectParticipantResponse {
    return _smithy.isa(o, "DisconnectParticipantResponse");
  }
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
  export function isa(o: any): o is GetTranscriptRequest {
    return _smithy.isa(o, "GetTranscriptRequest");
  }
}

export interface GetTranscriptResponse extends $MetadataBearer {
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
  Transcript?: Array<Item>;
}

export namespace GetTranscriptResponse {
  export function isa(o: any): o is GetTranscriptResponse {
    return _smithy.isa(o, "GetTranscriptResponse");
  }
}

/**
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 */
export interface InternalServerException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return _smithy.isa(o, "InternalServerException");
  }
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
  export function isa(o: any): o is SendEventRequest {
    return _smithy.isa(o, "SendEventRequest");
  }
}

export interface SendEventResponse extends $MetadataBearer {
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
  export function isa(o: any): o is SendEventResponse {
    return _smithy.isa(o, "SendEventResponse");
  }
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
  export function isa(o: any): o is SendMessageRequest {
    return _smithy.isa(o, "SendMessageRequest");
  }
}

export interface SendMessageResponse extends $MetadataBearer {
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
  export function isa(o: any): o is SendMessageResponse {
    return _smithy.isa(o, "SendMessageResponse");
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 */
export interface ValidationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return _smithy.isa(o, "ValidationException");
  }
}

export enum ChatItemType {
  CONNECTION_ACK = "CONNECTION_ACK",
  EVENT = "EVENT",
  MESSAGE = "MESSAGE"
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
  export function isa(o: any): o is Item {
    return _smithy.isa(o, "Item");
  }
}

export enum ScanDirection {
  BACKWARD = "BACKWARD",
  FORWARD = "FORWARD"
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
  export function isa(o: any): o is StartPosition {
    return _smithy.isa(o, "StartPosition");
  }
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
  export function isa(o: any): o is ConnectionCredentials {
    return _smithy.isa(o, "ConnectionCredentials");
  }
}

export enum ConnectionType {
  CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS",
  WEBSOCKET = "WEBSOCKET"
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
  SYSTEM = "SYSTEM"
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
  export function isa(o: any): o is Websocket {
    return _smithy.isa(o, "Websocket");
  }
}
