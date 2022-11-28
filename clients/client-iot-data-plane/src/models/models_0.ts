// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { IoTDataPlaneServiceException as __BaseException } from "./IoTDataPlaneServiceException";

/**
 * <p>The specified version does not match the version of the document.</p>
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
 */
export interface DeleteThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;
}

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
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
 */
export interface GetRetainedMessageRequest {
  /**
   * <p>The topic name of the retained message to retrieve.</p>
   */
  topic: string | undefined;
}

/**
 * <p>The output from the GetRetainedMessage operation.</p>
 */
export interface GetRetainedMessageResponse {
  /**
   * <p>The topic name to which the retained message was published.</p>
   */
  topic?: string;

  /**
   * <p>The Base64-encoded message payload of the retained message body.</p>
   */
  payload?: Uint8Array;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   */
  qos?: number;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   */
  lastModifiedTime?: number;
}

/**
 * <p>The input for the GetThingShadow operation.</p>
 */
export interface GetThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;
}

/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export interface ListNamedShadowsForThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export interface ListNamedShadowsForThingResponse {
  /**
   * <p>The list of shadows for the specified thing.</p>
   */
  results?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Epoch date and time the response was generated by IoT.</p>
   */
  timestamp?: number;
}

export interface ListRetainedMessagesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *       value from a previous response; otherwise <b>null</b> to receive
   *       the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a single retained message.</p>
 */
export interface RetainedMessageSummary {
  /**
   * <p>The topic name to which the retained message was published.</p>
   */
  topic?: string;

  /**
   * <p>The size of the retained message's payload in bytes.</p>
   */
  payloadSize?: number;

  /**
   * <p>The quality of service (QoS) level used to publish the retained message.</p>
   */
  qos?: number;

  /**
   * <p>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</p>
   */
  lastModifiedTime?: number;
}

export interface ListRetainedMessagesResponse {
  /**
   * <p>A summary list the account's retained messages. The information returned doesn't include
   *       the message payloads of the retained messages.</p>
   */
  retainedTopics?: RetainedMessageSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum PayloadFormatIndicator {
  UNSPECIFIED_BYTES = "UNSPECIFIED_BYTES",
  UTF8_DATA = "UTF8_DATA",
}

/**
 * <p>The input for the Publish operation.</p>
 */
export interface PublishRequest {
  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level. The default QoS level is 0.</p>
   */
  qos?: number;

  /**
   * <p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p>
   *          <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   */
  retain?: boolean;

  /**
   * <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p>
   *          <p>Publishing an empty (null) payload with <b>retain</b> =
   *         <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p>
   */
  payload?: Uint8Array;

  /**
   * <p>A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI,
   *       you must encode the JSON string to base64 format before adding it to the HTTP header.
   *         <code>userProperties</code> is an HTTP header value in the API.</p>
   *          <p>The following example <code>userProperties</code> parameter is a JSON string which
   *       represents two User Properties. Note that it needs to be base64-encoded:</p>
   *         <p>
   *             <code>[{"deviceName": "alpha"}, {"deviceCnt": "45"}]</code>
   *          </p>
   */
  userProperties?: __LazyJsonString | string;

  /**
   * <p>An <code>Enum</code> string value that indicates whether the payload is formatted as
   *       UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.</p>
   */
  payloadFormatIndicator?: PayloadFormatIndicator | string;

  /**
   * <p>A UTF-8 encoded string that describes the content of the publishing message.</p>
   */
  contentType?: string;

  /**
   * <p>A UTF-8 encoded string that's used as the topic name for a response message. The response
   *       topic is used to describe the topic which the receiver should publish to as part of the
   *       request-response flow. The topic must not contain wildcard characters.</p>
   */
  responseTopic?: string;

  /**
   * <p>The base64-encoded binary data used by the sender of the request message to identify which
   *       request the response message is for when it's received. <code>correlationData</code> is an
   *       HTTP header value in the API.</p>
   */
  correlationData?: string;

  /**
   * <p>A user-defined integer value that represents the message expiry interval in seconds. If
   *       absent, the message doesn't expire. For more information about the limits of
   *         <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and
   *         protocol limits and quotas </a> from the Amazon Web Services Reference Guide.</p>
   */
  messageExpiry?: number;
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
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
 */
export interface UpdateThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;

  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

/**
 * @internal
 */
export const DeleteThingShadowRequestFilterSensitiveLog = (obj: DeleteThingShadowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteThingShadowResponseFilterSensitiveLog = (obj: DeleteThingShadowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRetainedMessageRequestFilterSensitiveLog = (obj: GetRetainedMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRetainedMessageResponseFilterSensitiveLog = (obj: GetRetainedMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThingShadowRequestFilterSensitiveLog = (obj: GetThingShadowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThingShadowResponseFilterSensitiveLog = (obj: GetThingShadowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNamedShadowsForThingRequestFilterSensitiveLog = (obj: ListNamedShadowsForThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNamedShadowsForThingResponseFilterSensitiveLog = (obj: ListNamedShadowsForThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRetainedMessagesRequestFilterSensitiveLog = (obj: ListRetainedMessagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetainedMessageSummaryFilterSensitiveLog = (obj: RetainedMessageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRetainedMessagesResponseFilterSensitiveLog = (obj: ListRetainedMessagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishRequestFilterSensitiveLog = (obj: PublishRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingShadowRequestFilterSensitiveLog = (obj: UpdateThingShadowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingShadowResponseFilterSensitiveLog = (obj: UpdateThingShadowResponse): any => ({
  ...obj,
});
