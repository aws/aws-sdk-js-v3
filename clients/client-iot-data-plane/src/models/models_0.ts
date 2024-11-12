// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { IoTDataPlaneServiceException as __BaseException } from "./IoTDataPlaneServiceException";

/**
 * <p>The specified version does not match the version of the document.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The input for the DeleteThingShadow operation.</p>
 * @public
 */
export interface DeleteThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   * @public
   */
  shadowName?: string | undefined;
}

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 * @public
 */
export interface DeleteThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 * @public
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The document encoding is not supported.</p>
 * @public
 */
export class UnsupportedDocumentEncodingException extends __BaseException {
  readonly name: "UnsupportedDocumentEncodingException" = "UnsupportedDocumentEncodingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDocumentEncodingException, __BaseException>) {
    super({
      name: "UnsupportedDocumentEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDocumentEncodingException.prototype);
  }
}

/**
 * <p>The input for the GetRetainedMessage operation.</p>
 * @public
 */
export interface GetRetainedMessageRequest {
  /**
   * <p>The topic name of the retained message to retrieve.</p>
   * @public
   */
  topic: string | undefined;
}

/**
 * <p>The output from the GetRetainedMessage operation.</p>
 * @public
 */
export interface GetRetainedMessageResponse {
  /**
   * <p>The topic name to which the retained message was published.</p>
   * @public
   */
  topic?: string | undefined;

  /**
   * <p>The Base64-encoded message payload of the retained message body.</p>
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   * @public
   */
  qos?: number | undefined;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   * @public
   */
  lastModifiedTime?: number | undefined;

  /**
   * <p>A base64-encoded JSON string that includes an array of JSON objects, or null if the
   *       retained message doesn't include any user properties.</p>
   *          <p>The following example <code>userProperties</code> parameter is a JSON string that
   *       represents two user properties. Note that it will be base64-encoded:</p>
   *          <p>
   *             <code>[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]</code>
   *          </p>
   * @public
   */
  userProperties?: Uint8Array | undefined;
}

/**
 * <p>The input for the GetThingShadow operation.</p>
 * @public
 */
export interface GetThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   * @public
   */
  shadowName?: string | undefined;
}

/**
 * <p>The output from the GetThingShadow operation.</p>
 * @public
 */
export interface GetThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   * @public
   */
  payload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListNamedShadowsForThingRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListNamedShadowsForThingResponse {
  /**
   * <p>The list of shadows for the specified thing.</p>
   * @public
   */
  results?: string[] | undefined;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Epoch date and time the response was generated by IoT.</p>
   * @public
   */
  timestamp?: number | undefined;
}

/**
 * @public
 */
export interface ListRetainedMessagesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *       value from a previous response; otherwise <b>null</b> to receive
   *       the first set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a single retained message.</p>
 * @public
 */
export interface RetainedMessageSummary {
  /**
   * <p>The topic name to which the retained message was published.</p>
   * @public
   */
  topic?: string | undefined;

  /**
   * <p>The size of the retained message's payload in bytes.</p>
   * @public
   */
  payloadSize?: number | undefined;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   * @public
   */
  qos?: number | undefined;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   * @public
   */
  lastModifiedTime?: number | undefined;
}

/**
 * @public
 */
export interface ListRetainedMessagesResponse {
  /**
   * <p>A summary list the account's retained messages. The information returned doesn't include
   *       the message payloads of the retained messages.</p>
   * @public
   */
  retainedTopics?: RetainedMessageSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PayloadFormatIndicator = {
  UNSPECIFIED_BYTES: "UNSPECIFIED_BYTES",
  UTF8_DATA: "UTF8_DATA",
} as const;

/**
 * @public
 */
export type PayloadFormatIndicator = (typeof PayloadFormatIndicator)[keyof typeof PayloadFormatIndicator];

/**
 * <p>The input for the Publish operation.</p>
 * @public
 */
export interface PublishRequest {
  /**
   * <p>The name of the MQTT topic.</p>
   * @public
   */
  topic: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level. The default QoS level is 0.</p>
   * @public
   */
  qos?: number | undefined;

  /**
   * <p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p>
   *          <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   * @public
   */
  retain?: boolean | undefined;

  /**
   * <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p>
   *          <p>Publishing an empty (null) payload with <b>retain</b> =
   *         <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p>
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * <p>A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI,
   *       you must encode the JSON string to base64 format before adding it to the HTTP header.
   *         <code>userProperties</code> is an HTTP header value in the API.</p>
   *          <p>The following example <code>userProperties</code> parameter is a JSON string which
   *       represents two User Properties. Note that it needs to be base64-encoded:</p>
   *          <p>
   *             <code>[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]</code>
   *          </p>
   * @public
   */
  userProperties?: __LazyJsonString | string | undefined;

  /**
   * <p>An <code>Enum</code> string value that indicates whether the payload is formatted as
   *       UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.</p>
   * @public
   */
  payloadFormatIndicator?: PayloadFormatIndicator | undefined;

  /**
   * <p>A UTF-8 encoded string that describes the content of the publishing message.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A UTF-8 encoded string that's used as the topic name for a response message. The response
   *       topic is used to describe the topic which the receiver should publish to as part of the
   *       request-response flow. The topic must not contain wildcard characters.</p>
   * @public
   */
  responseTopic?: string | undefined;

  /**
   * <p>The base64-encoded binary data used by the sender of the request message to identify which
   *       request the response message is for when it's received. <code>correlationData</code> is an
   *       HTTP header value in the API.</p>
   * @public
   */
  correlationData?: string | undefined;

  /**
   * <p>A user-defined integer value that represents the message expiry interval in seconds. If
   *       absent, the message doesn't expire. For more information about the limits of
   *         <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and
   *         protocol limits and quotas </a> from the Amazon Web Services Reference Guide.</p>
   * @public
   */
  messageExpiry?: number | undefined;
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 * @public
 */
export class RequestEntityTooLargeException extends __BaseException {
  readonly name: "RequestEntityTooLargeException" = "RequestEntityTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestEntityTooLargeException, __BaseException>) {
    super({
      name: "RequestEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestEntityTooLargeException.prototype);
  }
}

/**
 * <p>The input for the UpdateThingShadow operation.</p>
 * @public
 */
export interface UpdateThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   * @public
   */
  shadowName?: string | undefined;

  /**
   * <p>The state information, in JSON format.</p>
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * <p>The output from the UpdateThingShadow operation.</p>
 * @public
 */
export interface UpdateThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   * @public
   */
  payload?: Uint8Array | undefined;
}
