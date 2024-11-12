// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTSecureTunnelingServiceException as __BaseException } from "./IoTSecureTunnelingServiceException";

/**
 * @public
 * @enum
 */
export const ClientMode = {
  ALL: "ALL",
  DESTINATION: "DESTINATION",
  SOURCE: "SOURCE",
} as const;

/**
 * @public
 */
export type ClientMode = (typeof ClientMode)[keyof typeof ClientMode];

/**
 * @public
 */
export interface CloseTunnelRequest {
  /**
   * <p>The ID of the tunnel to close.</p>
   * @public
   */
  tunnelId: string | undefined;

  /**
   * <p>When set to true, IoT Secure Tunneling deletes the tunnel data
   * 			immediately.</p>
   * @public
   */
  delete?: boolean | undefined;
}

/**
 * @public
 */
export interface CloseTunnelResponse {}

/**
 * <p>Thrown when an operation is attempted on a resource that does not exist.</p>
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
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * <p>The state of a connection.</p>
 * @public
 */
export interface ConnectionState {
  /**
   * <p>The connection status of the tunnel. Valid values are <code>CONNECTED</code> and
   * 				<code>DISCONNECTED</code>.</p>
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * <p>The last time the connection status was updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTunnelRequest {
  /**
   * <p>The tunnel to describe.</p>
   * @public
   */
  tunnelId: string | undefined;
}

/**
 * <p>The destination configuration.</p>
 * @public
 */
export interface DestinationConfig {
  /**
   * <p>The name of the IoT thing to which you want to connect.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>A list of service names that identify the target application. The IoT client
   * 			running on the destination device reads this value and uses it to look up a port or an
   * 			IP address and a port. The IoT client instantiates the local proxy, which uses this
   * 			information to connect to the destination application.</p>
   * @public
   */
  services: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TunnelStatus = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type TunnelStatus = (typeof TunnelStatus)[keyof typeof TunnelStatus];

/**
 * <p>An arbitary key/value pair used to add searchable metadata to secure tunnel
 * 			resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Tunnel timeout configuration.</p>
 * @public
 */
export interface TimeoutConfig {
  /**
   * <p>The maximum amount of time (in minutes) a tunnel can remain open. If not specified,
   * 			maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12
   * 			hours (720 minutes) </p>
   * @public
   */
  maxLifetimeTimeoutMinutes?: number | undefined;
}

/**
 * <p>A connection between a source computer and a destination device.</p>
 * @public
 */
export interface Tunnel {
  /**
   * <p>A unique alpha-numeric ID that identifies a tunnel.</p>
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a tunnel.</p>
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   * @public
   */
  status?: TunnelStatus | undefined;

  /**
   * <p>The connection state of the source application.</p>
   * @public
   */
  sourceConnectionState?: ConnectionState | undefined;

  /**
   * <p>The connection state of the destination application.</p>
   * @public
   */
  destinationConnectionState?: ConnectionState | undefined;

  /**
   * <p>A description of the tunnel.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The destination configuration that specifies the thing name of the destination
   * 			device and a service name that the local proxy uses to connect to the destination
   * 			application.</p>
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;

  /**
   * <p>Timeout configuration for the tunnel.</p>
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * <p>A list of tag metadata associated with the secure tunnel.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The time when the tunnel was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The last time the tunnel was updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTunnelResponse {
  /**
   * <p>The tunnel being described.</p>
   * @public
   */
  tunnel?: Tunnel | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTunnelsRequest {
  /**
   * <p>The name of the IoT thing associated with the destination device.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>The maximum number of results to return at once.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>To retrieve the next set of results, the nextToken value from a previous response;
   * 			otherwise null to receive the first set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the tunnel.</p>
 * @public
 */
export interface TunnelSummary {
  /**
   * <p>The unique alpha-numeric identifier for the tunnel.</p>
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * <p>The Amazon Resource Name of the tunnel. </p>
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   * @public
   */
  status?: TunnelStatus | undefined;

  /**
   * <p>A description of the tunnel.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time the tunnel was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time the tunnel was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTunnelsResponse {
  /**
   * <p>A short description of the tunnels in an Amazon Web Services account.</p>
   * @public
   */
  tunnelSummaries?: TunnelSummary[] | undefined;

  /**
   * <p>The token to use to get the next set of results, or null if there are no additional
   * 			results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Thrown when a tunnel limit is exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface OpenTunnelRequest {
  /**
   * <p>A short text description of the tunnel. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A collection of tag metadata.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The destination configuration for the OpenTunnel request.</p>
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;

  /**
   * <p>Timeout configuration for a tunnel.</p>
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;
}

/**
 * @public
 */
export interface OpenTunnelResponse {
  /**
   * <p>A unique alpha-numeric tunnel ID.</p>
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * <p>The Amazon Resource Name for the tunnel.</p>
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * <p>The access token the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   * @public
   */
  sourceAccessToken?: string | undefined;

  /**
   * <p>The access token the destination local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   * @public
   */
  destinationAccessToken?: string | undefined;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenRequest {
  /**
   * <p>The tunnel for which you want to rotate the access tokens.</p>
   * @public
   */
  tunnelId: string | undefined;

  /**
   * <p>The mode of the client that will use the client token, which can be either the source
   * 			or destination, or both source and destination.</p>
   * @public
   */
  clientMode: ClientMode | undefined;

  /**
   * <p>The destination configuration.</p>
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenResponse {
  /**
   * <p>The Amazon Resource Name for the tunnel.</p>
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * <p>The client access token that the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   * @public
   */
  sourceAccessToken?: string | undefined;

  /**
   * <p>The client access token that the destination local proxy uses to connect to IoT
   * 			Secure Tunneling.</p>
   * @public
   */
  destinationAccessToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const OpenTunnelResponseFilterSensitiveLog = (obj: OpenTunnelResponse): any => ({
  ...obj,
  ...(obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING }),
  ...(obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RotateTunnelAccessTokenResponseFilterSensitiveLog = (obj: RotateTunnelAccessTokenResponse): any => ({
  ...obj,
  ...(obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING }),
  ...(obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }),
});
