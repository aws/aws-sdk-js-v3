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
   * @public
   * <p>The ID of the tunnel to close.</p>
   */
  tunnelId: string | undefined;

  /**
   * @public
   * <p>When set to true, IoT Secure Tunneling deletes the tunnel data
   * 			immediately.</p>
   */
  delete?: boolean;
}

/**
 * @public
 */
export interface CloseTunnelResponse {}

/**
 * @public
 * <p>Thrown when an operation is attempted on a resource that does not exist.</p>
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
 * @public
 * <p>The state of a connection.</p>
 */
export interface ConnectionState {
  /**
   * @public
   * <p>The connection status of the tunnel. Valid values are <code>CONNECTED</code> and
   * 				<code>DISCONNECTED</code>.</p>
   */
  status?: ConnectionStatus;

  /**
   * @public
   * <p>The last time the connection status was updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeTunnelRequest {
  /**
   * @public
   * <p>The tunnel to describe.</p>
   */
  tunnelId: string | undefined;
}

/**
 * @public
 * <p>The destination configuration.</p>
 */
export interface DestinationConfig {
  /**
   * @public
   * <p>The name of the IoT thing to which you want to connect.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>A list of service names that identify the target application. The IoT client
   * 			running on the destination device reads this value and uses it to look up a port or an
   * 			IP address and a port. The IoT client instantiates the local proxy, which uses this
   * 			information to connect to the destination application.</p>
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
 * @public
 * <p>An arbitary key/value pair used to add searchable metadata to secure tunnel
 * 			resources.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Tunnel timeout configuration.</p>
 */
export interface TimeoutConfig {
  /**
   * @public
   * <p>The maximum amount of time (in minutes) a tunnel can remain open. If not specified,
   * 			maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12
   * 			hours (720 minutes) </p>
   */
  maxLifetimeTimeoutMinutes?: number;
}

/**
 * @public
 * <p>A connection between a source computer and a destination device.</p>
 */
export interface Tunnel {
  /**
   * @public
   * <p>A unique alpha-numeric ID that identifies a tunnel.</p>
   */
  tunnelId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * @public
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus;

  /**
   * @public
   * <p>The connection state of the source application.</p>
   */
  sourceConnectionState?: ConnectionState;

  /**
   * @public
   * <p>The connection state of the destination application.</p>
   */
  destinationConnectionState?: ConnectionState;

  /**
   * @public
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The destination configuration that specifies the thing name of the destination
   * 			device and a service name that the local proxy uses to connect to the destination
   * 			application.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * @public
   * <p>Timeout configuration for the tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * @public
   * <p>A list of tag metadata associated with the secure tunnel.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The time when the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The last time the tunnel was updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeTunnelResponse {
  /**
   * @public
   * <p>The tunnel being described.</p>
   */
  tunnel?: Tunnel;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the specified resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListTunnelsRequest {
  /**
   * @public
   * <p>The name of the IoT thing associated with the destination device.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>To retrieve the next set of results, the nextToken value from a previous response;
   * 			otherwise null to receive the first set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the tunnel.</p>
 */
export interface TunnelSummary {
  /**
   * @public
   * <p>The unique alpha-numeric identifier for the tunnel.</p>
   */
  tunnelId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name of the tunnel. </p>
   */
  tunnelArn?: string;

  /**
   * @public
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus;

  /**
   * @public
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time the tunnel was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListTunnelsResponse {
  /**
   * @public
   * <p>A short description of the tunnels in an Amazon Web Services account.</p>
   */
  tunnelSummaries?: TunnelSummary[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or null if there are no additional
   * 			results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Thrown when a tunnel limit is exceeded.</p>
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
   * @public
   * <p>A short text description of the tunnel. </p>
   */
  description?: string;

  /**
   * @public
   * <p>A collection of tag metadata.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The destination configuration for the OpenTunnel request.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * @public
   * <p>Timeout configuration for a tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

/**
 * @public
 */
export interface OpenTunnelResponse {
  /**
   * @public
   * <p>A unique alpha-numeric tunnel ID.</p>
   */
  tunnelId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name for the tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * @public
   * <p>The access token the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  sourceAccessToken?: string;

  /**
   * @public
   * <p>The access token the destination local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  destinationAccessToken?: string;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenRequest {
  /**
   * @public
   * <p>The tunnel for which you want to rotate the access tokens.</p>
   */
  tunnelId: string | undefined;

  /**
   * @public
   * <p>The mode of the client that will use the client token, which can be either the source
   * 			or destination, or both source and destination.</p>
   */
  clientMode: ClientMode | undefined;

  /**
   * @public
   * <p>The destination configuration.</p>
   */
  destinationConfig?: DestinationConfig;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenResponse {
  /**
   * @public
   * <p>The Amazon Resource Name for the tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * @public
   * <p>The client access token that the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  sourceAccessToken?: string;

  /**
   * @public
   * <p>The client access token that the destination local proxy uses to connect to IoT
   * 			Secure Tunneling.</p>
   */
  destinationAccessToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags for the resource.</p>
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
   * @public
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove.</p>
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
