// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type { PayloadFormatIndicator } from "./enums";

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The unique identifier of the MQTT client to disconnect. The client ID can't start with a dollar sign ($).
   *
   * MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * Specifies whether to remove the client's persistent session state when disconnecting. Set to `TRUE` to delete all session information, including subscriptions and queued messages. Set to `FALSE` to preserve the session state for [persistent sessions](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html#mqtt-persistent-sessions). For clean sessions this parameter will be ignored. By default, this is set to `FALSE` (preserves the session state).
   *
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to `TRUE` to prevent publishing the LWT message. Set to `FALSE` to ensure that LWT is published. By default, this is set to `FALSE` (LWT message is published).
   *
   * @public
   */
  preventWillMessage?: boolean | undefined;
}

/**
 * The input for the DeleteThingShadow operation.
 *
 * @public
 */
export interface DeleteThingShadowRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the shadow.
   *
   * @public
   */
  shadowName?: string | undefined;
}

/**
 * The output from the DeleteThingShadow operation.
 *
 * @public
 */
export interface DeleteThingShadowResponse {
  /**
   * The state information, in JSON format.
   *
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * The unique identifier of the MQTT client to retrieve connection information. The client ID can't start with a dollar sign ($).
   *
   * MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp) should be included in the GetConnection response. Set to `TRUE` to include socket information. Set to `FALSE` to omit socket information. By default, this is set to `FALSE`. See the [developer guide](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html#mqtt-client-disconnect) for how to authorize this parameter.
   *
   * @public
   */
  includeSocketInformation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The connection state of the client. Returns `true` if the client is currently connected, or `false` if the client is not connected.
   *
   * @public
   */
  connected?: boolean | undefined;

  /**
   * The name of the thing associated with the principal of the MQTT client, if applicable.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * Indicates whether the client is using a clean session. Returns `true` for clean sessions or `false` for persistent sessions.
   *
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * The IP address of the client that initiated the connection.
   *
   * @public
   */
  sourceIp?: string | undefined;

  /**
   * The client's source port.
   *
   * @public
   */
  sourcePort?: number | undefined;

  /**
   * The IP address of the Amazon Web Services IoT Core endpoint that the client connected to. For clients connected to VPC endpoints, this is the private IP address of the network interface the client is connected to.
   *
   * @public
   */
  targetIp?: string | undefined;

  /**
   * The port number of the Amazon Web Services IoT Core endpoint that the client connected to.
   *
   * @public
   */
  targetPort?: number | undefined;

  /**
   * The keep-alive interval in seconds that the client specified when establishing the connection.
   *
   * @public
   */
  keepAliveDuration?: number | undefined;

  /**
   * Unix timestamp (in milliseconds) indicating when the client connected. Present only when connected is true.
   *
   * @public
   */
  connectedSince?: number | undefined;

  /**
   * Unix timestamp (in milliseconds) indicating when the client disconnected. Present only when connected is false. This information is available for 30 minutes after the client disconnects.
   *
   * @public
   */
  disconnectedSince?: number | undefined;

  /**
   * The reason for the last disconnection, if the client is currently disconnected. See the [developer guide](https://docs.aws.amazon.com/iot/latest/developerguide/life-cycle-events.html#connect-disconnect) for valid disconnect reasons.
   *
   * @public
   */
  disconnectReason?: string | undefined;

  /**
   * The session expiry interval in seconds for the MQTT client connection. This is configured by the user. This value indicates how long the session will remain active after the client disconnects.
   *
   * @public
   */
  sessionExpiry?: number | undefined;

  /**
   * The unique identifier of the MQTT client. This is the same client ID that was used when the client established the connection.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The ID of the VPC endpoint. Present for clients connected to IoT Core via a [VPC endpoint](https://docs.aws.amazon.com/iot/latest/developerguide/IoTCore-VPC.html).
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * The input for the GetRetainedMessage operation.
 *
 * @public
 */
export interface GetRetainedMessageRequest {
  /**
   * The topic name of the retained message to retrieve.
   *
   * @public
   */
  topic: string | undefined;
}

/**
 * The output from the GetRetainedMessage operation.
 *
 * @public
 */
export interface GetRetainedMessageResponse {
  /**
   * The topic name to which the retained message was published.
   *
   * @public
   */
  topic?: string | undefined;

  /**
   * The Base64-encoded message payload of the retained message body.
   *
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * The quality of service (QoS) level used to publish the retained message.
   *
   * @public
   */
  qos?: number | undefined;

  /**
   * The Epoch date and time, in milliseconds, when the retained message was stored by IoT.
   *
   * @public
   */
  lastModifiedTime?: number | undefined;

  /**
   * A base64-encoded JSON string that includes an array of JSON objects, or null if the retained message doesn't include any user properties.
   *
   * The following example `userProperties` parameter is a JSON string that represents two user properties. Note that it will be base64-encoded:
   *
   * `[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]`
   *
   * @public
   */
  userProperties?: Uint8Array | undefined;
}

/**
 * The input for the GetThingShadow operation.
 *
 * @public
 */
export interface GetThingShadowRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the shadow.
   *
   * @public
   */
  shadowName?: string | undefined;
}

/**
 * The output from the GetThingShadow operation.
 *
 * @public
 */
export interface GetThingShadowResponse {
  /**
   * The state information, in JSON format.
   *
   * @public
   */
  payload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListNamedShadowsForThingRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListNamedShadowsForThingResponse {
  /**
   * The list of shadows for the specified thing.
   *
   * @public
   */
  results?: string[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Epoch date and time the response was generated by IoT.
   *
   * @public
   */
  timestamp?: number | undefined;
}

/**
 * @public
 */
export interface ListRetainedMessagesRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a single retained message.
 *
 * @public
 */
export interface RetainedMessageSummary {
  /**
   * The topic name to which the retained message was published.
   *
   * @public
   */
  topic?: string | undefined;

  /**
   * The size of the retained message's payload in bytes.
   *
   * @public
   */
  payloadSize?: number | undefined;

  /**
   * The quality of service (QoS) level used to publish the retained message.
   *
   * @public
   */
  qos?: number | undefined;

  /**
   * The Epoch date and time, in milliseconds, when the retained message was stored by IoT.
   *
   * @public
   */
  lastModifiedTime?: number | undefined;
}

/**
 * @public
 */
export interface ListRetainedMessagesResponse {
  /**
   * A summary list the account's retained messages. The information returned doesn't include the message payloads of the retained messages.
   *
   * @public
   */
  retainedTopics?: RetainedMessageSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsRequest {
  /**
   * The unique identifier of the MQTT client to list subscriptions for. The client ID can't start with a dollar sign ($).
   *
   * MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of subscriptions to return in a single request. By default, this is set to 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about a subscription for an MQTT client, including the topic filter and Quality of Service (QoS) level.
 *
 * @public
 */
export interface SubscriptionSummary {
  /**
   * The topic filter pattern that the client is subscribed to. May include MQTT wildcards such as + (single-level) and # (multi-level).
   *
   * @public
   */
  topicFilter: string | undefined;

  /**
   * The Quality of Service (QoS) level for the subscription. Valid values are 0 (at most once) and 1 (at least once).
   *
   * @public
   */
  qos: number | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsResponse {
  /**
   * A list of topic filters and their associated Quality of Service (QoS) levels that the client is subscribed to.
   *
   * @public
   */
  subscriptions?: SubscriptionSummary[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the Publish operation.
 *
 * @public
 */
export interface PublishRequest {
  /**
   * The name of the MQTT topic.
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The Quality of Service (QoS) level. The default QoS level is 0.
   *
   * @public
   */
  qos?: number | undefined;

  /**
   * A Boolean value that determines whether to set the RETAIN flag when the message is published.
   *
   * Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.
   *
   * Valid values: `true` | `false`
   *
   * Default value: `false`
   *
   * @public
   */
  retain?: boolean | undefined;

  /**
   * The message body. MQTT accepts text, binary, and empty (null) message payloads.
   *
   * Publishing an empty (null) payload with **retain** = `true` deletes the retained message identified by **topic** from Amazon Web Services IoT Core.
   *
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. `userProperties` is an HTTP header value in the API.
   *
   * The following example `userProperties` parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:
   *
   * `[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]`
   *
   * @public
   */
  userProperties?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * An `Enum` string value that indicates whether the payload is formatted as UTF-8. `payloadFormatIndicator` is an HTTP header value in the API.
   *
   * @public
   */
  payloadFormatIndicator?: PayloadFormatIndicator | undefined;

  /**
   * A UTF-8 encoded string that describes the content of the publishing message.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.
   *
   * @public
   */
  responseTopic?: string | undefined;

  /**
   * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. `correlationData` is an HTTP header value in the API.
   *
   * @public
   */
  correlationData?: string | undefined;

  /**
   * A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of `messageExpiry`, see [Amazon Web Services IoT Core message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits) from the Amazon Web Services Reference Guide.
   *
   * @public
   */
  messageExpiry?: number | undefined;
}

/**
 * @public
 */
export interface SendDirectMessageRequest {
  /**
   * The unique identifier of the MQTT client to send the message to.
   *
   * Client IDs must not exceed 128 characters and can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters. For more information, see [Amazon Web Services IoT Core message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits).
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The topic of the outbound MQTT Publish message to the receiving client. For more information, see [Amazon Web Services IoT Core message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits).
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The MQTT5 content type property forwarded to the receiving client (for example, `application/json`).
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A UTF-8 encoded string that's used as the topic name for a response message. The response topic describes the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters. For more information, see [Amazon Web Services IoT Core message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits).
   *
   * @public
   */
  responseTopic?: string | undefined;

  /**
   * A Boolean value that specifies whether to wait for delivery confirmation from the receiving client.
   *
   * When set to `true`, the API delivers the message at QoS 1 and waits for the client to send a delivery confirmation (PUBACK) before returning a successful response. If delivery confirmation is not received within the specified `timeout` period, the API returns HTTP 504.
   *
   * When set to `false`, the API delivers the message at QoS 0 and returns after Amazon Web Services IoT Core attempts to deliver the message.
   *
   * Valid values: `true` | `false`
   *
   * Default value: `false`
   *
   * @public
   */
  confirmation?: boolean | undefined;

  /**
   * An integer that represents the maximum time, in seconds, to wait for a delivery confirmation (PUBACK) from the receiving client after the message has been delivered. This parameter is only used when `confirmation` is set to `true`. If `confirmation` is `false`, this parameter is ignored.
   *
   * The total API response time may be higher than this value due to internal processing. Set your HTTP client timeout to a value greater than this parameter.
   *
   * Valid range: 1 to 15 seconds.
   *
   * Default value: `5` seconds.
   *
   * @public
   */
  timeout?: number | undefined;

  /**
   * The message body. MQTT accepts text, binary, and empty (null) message payloads.
   *
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * A JSON string that contains an array of JSON objects. If you don't use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. `userProperties` is an HTTP header value in the API.
   *
   * For MQTT 3.1.1 clients, user properties are silently dropped.
   *
   * The following example `userProperties` parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:
   *
   * `[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]`
   *
   * @public
   */
  userProperties?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * An `Enum` string value that indicates whether the payload is formatted as UTF-8. `payloadFormatIndicator` is an HTTP header value in the API.
   *
   * @public
   */
  payloadFormatIndicator?: PayloadFormatIndicator | undefined;

  /**
   * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. `correlationData` is an HTTP header value in the API.
   *
   * @public
   */
  correlationData?: string | undefined;
}

/**
 * The output from the SendDirectMessage operation.
 *
 * @public
 */
export interface SendDirectMessageResponse {
  /**
   * The status message indicating the result of the operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A unique identifier for the request. Include this value when contacting Amazon Web Services Support for troubleshooting.
   *
   * @public
   */
  traceId?: string | undefined;
}

/**
 * The input for the UpdateThingShadow operation.
 *
 * @public
 */
export interface UpdateThingShadowRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the shadow.
   *
   * @public
   */
  shadowName?: string | undefined;

  /**
   * The state information, in JSON format.
   *
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * The output from the UpdateThingShadow operation.
 *
 * @public
 */
export interface UpdateThingShadowResponse {
  /**
   * The state information, in JSON format.
   *
   * @public
   */
  payload?: Uint8Array | undefined;
}
