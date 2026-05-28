// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type { PayloadFormatIndicator } from "./enums";

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * <p>The unique identifier of the MQTT client to disconnect. The client ID can't start with a dollar sign ($).</p>
   *          <p>MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>Specifies whether to remove the client's persistent session state when disconnecting. Set to <code>TRUE</code> to delete all session information, including subscriptions and queued messages. Set to <code>FALSE</code> to preserve the session state for <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html#mqtt-persistent-sessions">persistent sessions</a>. For clean sessions this parameter will be ignored. By default, this is set to <code>FALSE</code> (preserves the session state).</p>
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * <p>Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to <code>TRUE</code> to prevent publishing the LWT message. Set to <code>FALSE</code> to ensure that LWT is published. By default, this is set to <code>FALSE</code> (LWT message is published).</p>
   * @public
   */
  preventWillMessage?: boolean | undefined;
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
 * @public
 */
export interface GetConnectionRequest {
  /**
   * <p>The unique identifier of the MQTT client to retrieve connection information. The client ID can't start with a dollar sign ($).</p>
   *          <p>MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp) should be included in the GetConnection response. Set to <code>TRUE</code> to include socket information. Set to <code>FALSE</code> to omit socket information. By default, this is set to <code>FALSE</code>. See the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html#mqtt-client-disconnect">developer guide</a> for how to authorize this parameter.</p>
   * @public
   */
  includeSocketInformation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The connection state of the client. Returns <code>true</code> if the client is currently connected, or <code>false</code> if the client is not connected.</p>
   * @public
   */
  connected?: boolean | undefined;

  /**
   * <p>The name of the thing associated with the principal of the MQTT client, if applicable.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>Indicates whether the client is using a clean session. Returns <code>true</code> for clean sessions or <code>false</code> for persistent sessions.</p>
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * <p>The IP address of the client that initiated the connection.</p>
   * @public
   */
  sourceIp?: string | undefined;

  /**
   * <p>The client's source port.</p>
   * @public
   */
  sourcePort?: number | undefined;

  /**
   * <p>The IP address of the Amazon Web Services IoT Core endpoint that the client connected to. For clients connected to VPC endpoints, this is the private IP address of the network interface the client is connected to.</p>
   * @public
   */
  targetIp?: string | undefined;

  /**
   * <p>The port number of the Amazon Web Services IoT Core endpoint that the client connected to.</p>
   * @public
   */
  targetPort?: number | undefined;

  /**
   * <p>The keep-alive interval in seconds that the client specified when establishing the connection.</p>
   * @public
   */
  keepAliveDuration?: number | undefined;

  /**
   * <p>Unix timestamp (in milliseconds) indicating when the client connected. Present only when connected is true.</p>
   * @public
   */
  connectedSince?: number | undefined;

  /**
   * <p>Unix timestamp (in milliseconds) indicating when the client disconnected. Present only when connected is false. This information is available for 30 minutes after the client disconnects.</p>
   * @public
   */
  disconnectedSince?: number | undefined;

  /**
   * <p>The reason for the last disconnection, if the client is currently disconnected. See the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/life-cycle-events.html#connect-disconnect">developer guide</a> for valid disconnect reasons.</p>
   * @public
   */
  disconnectReason?: string | undefined;

  /**
   * <p>The session expiry interval in seconds for the MQTT client connection. This is configured by the user. This value indicates how long the session will remain active after the client disconnects.</p>
   * @public
   */
  sessionExpiry?: number | undefined;

  /**
   * <p>The unique identifier of the MQTT client. This is the same client ID that was used when the client established the connection.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint. Present for clients connected to IoT Core via a <a href="https://docs.aws.amazon.com/iot/latest/developerguide/IoTCore-VPC.html">VPC endpoint</a>. </p>
   * @public
   */
  vpcEndpointId?: string | undefined;
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
 */
export interface ListSubscriptionsRequest {
  /**
   * <p>The unique identifier of the MQTT client to list subscriptions for. The client ID can't start with a dollar sign ($).</p>
   *          <p>MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *       value from a previous response; otherwise <b>null</b> to receive
   *       the first set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of subscriptions to return in a single request. By default, this is set to 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about a subscription for an MQTT client, including the topic filter and Quality of Service (QoS) level.</p>
 * @public
 */
export interface SubscriptionSummary {
  /**
   * <p>The topic filter pattern that the client is subscribed to. May include MQTT wildcards such as + (single-level) and # (multi-level).</p>
   * @public
   */
  topicFilter: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level for the subscription. Valid values are 0 (at most once) and 1 (at least once).</p>
   * @public
   */
  qos: number | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsResponse {
  /**
   * <p>A list of topic filters and their associated Quality of Service (QoS) levels that the client is subscribed to.</p>
   * @public
   */
  subscriptions?: SubscriptionSummary[] | undefined;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

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
  userProperties?: __AutomaticJsonStringConversion | string | undefined;

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
 * @public
 */
export interface SendDirectMessageRequest {
  /**
   * <p>The unique identifier of the MQTT client to send the message to.</p>
   *          <p>Client IDs must not exceed 128 characters and can't start with a dollar sign ($).
   *       MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are
   *       not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.
   *       For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and
   *       protocol limits and quotas</a>.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The topic of the outbound MQTT Publish message to the receiving client.
   *       For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and
   *       protocol limits and quotas</a>.</p>
   * @public
   */
  topic: string | undefined;

  /**
   * <p>The MQTT5 content type property forwarded to the receiving client
   *       (for example, <code>application/json</code>).</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>A UTF-8 encoded string that's used as the topic name for a response message. The response
   *       topic describes the topic which the receiver should publish to as part of the
   *       request-response flow. The topic must not contain wildcard characters.
   *       For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and
   *       protocol limits and quotas</a>.</p>
   * @public
   */
  responseTopic?: string | undefined;

  /**
   * <p>A Boolean value that specifies whether to wait for delivery confirmation from the receiving client.</p>
   *          <p>When set to <code>true</code>, the API delivers the message at QoS 1 and waits for
   *       the client to send a delivery confirmation (PUBACK) before returning a successful response. If
   *       delivery confirmation is not received within the specified <code>timeout</code> period,
   *       the API returns HTTP 504.</p>
   *          <p>When set to <code>false</code>, the API delivers the message at QoS 0 and returns
   *       after Amazon Web Services IoT Core attempts to deliver the message.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   * @public
   */
  confirmation?: boolean | undefined;

  /**
   * <p>An integer that represents the maximum time, in seconds, to wait for a delivery confirmation (PUBACK) from the
   *       receiving client after the message has been delivered. This parameter is only used when
   *       <code>confirmation</code> is set to <code>true</code>. If <code>confirmation</code>
   *       is <code>false</code>, this parameter is ignored.</p>
   *          <p>The total API response time may be higher than this value due to internal processing.
   *       Set your HTTP client timeout to a value greater than this parameter.</p>
   *          <p>Valid range: 1 to 15 seconds.</p>
   *          <p>Default value: <code>5</code> seconds.</p>
   * @public
   */
  timeout?: number | undefined;

  /**
   * <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p>
   * @public
   */
  payload?: Uint8Array | undefined;

  /**
   * <p>A JSON string that contains an array of JSON objects. If you don't use Amazon Web Services SDK or CLI,
   *       you must encode the JSON string to base64 format before adding it to the HTTP header.
   *       <code>userProperties</code> is an HTTP header value in the API.</p>
   *          <p>For MQTT 3.1.1 clients, user properties are silently dropped.</p>
   *          <p>The following example <code>userProperties</code> parameter is a JSON string which
   *       represents two User Properties. Note that it needs to be base64-encoded:</p>
   *          <p>
   *             <code>[\{"deviceName": "alpha"\}, \{"deviceCnt": "45"\}]</code>
   *          </p>
   * @public
   */
  userProperties?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>An <code>Enum</code> string value that indicates whether the payload is formatted as
   *       UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.</p>
   * @public
   */
  payloadFormatIndicator?: PayloadFormatIndicator | undefined;

  /**
   * <p>The base64-encoded binary data used by the sender of the request message to identify which
   *       request the response message is for when it's received. <code>correlationData</code> is an
   *       HTTP header value in the API.</p>
   * @public
   */
  correlationData?: string | undefined;
}

/**
 * <p>The output from the SendDirectMessage operation.</p>
 * @public
 */
export interface SendDirectMessageResponse {
  /**
   * <p>The status message indicating the result of the operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A unique identifier for the request. Include this value when contacting Amazon Web Services Support for troubleshooting.</p>
   * @public
   */
  traceId?: string | undefined;
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
