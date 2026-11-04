// smithy-typescript generated code
import type { ClientMode, ConnectionStatus, TunnelStatus } from "./enums";

/**
 * @public
 */
export interface CloseTunnelRequest {
  /**
   * The ID of the tunnel to close.
   *
   * @public
   */
  tunnelId: string | undefined;

  /**
   * When set to true, IoT Secure Tunneling deletes the tunnel data immediately.
   *
   * @public
   */
  delete?: boolean | undefined;
}

/**
 * @public
 */
export interface CloseTunnelResponse {}

/**
 * The state of a connection.
 *
 * @public
 */
export interface ConnectionState {
  /**
   * The connection status of the tunnel. Valid values are `CONNECTED` and `DISCONNECTED`.
   *
   * @public
   */
  status?: ConnectionStatus | undefined;

  /**
   * The last time the connection status was updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTunnelRequest {
  /**
   * The tunnel to describe.
   *
   * @public
   */
  tunnelId: string | undefined;
}

/**
 * The destination configuration.
 *
 * @public
 */
export interface DestinationConfig {
  /**
   * The name of the IoT thing to which you want to connect.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * A list of service names that identify the target application. The IoT client running on the destination device reads this value and uses it to look up a port or an IP address and a port. The IoT client instantiates the local proxy, which uses this information to connect to the destination application.
   *
   * @public
   */
  services: string[] | undefined;
}

/**
 * An arbitary key/value pair used to add searchable metadata to secure tunnel resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Tunnel timeout configuration.
 *
 * @public
 */
export interface TimeoutConfig {
  /**
   * The maximum amount of time (in minutes) a tunnel can remain open. If not specified, maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12 hours (720 minutes)
   *
   * @public
   */
  maxLifetimeTimeoutMinutes?: number | undefined;
}

/**
 * A connection between a source computer and a destination device.
 *
 * @public
 */
export interface Tunnel {
  /**
   * A unique alpha-numeric ID that identifies a tunnel.
   *
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a tunnel.
   *
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * The status of a tunnel. Valid values are: Open and Closed.
   *
   * @public
   */
  status?: TunnelStatus | undefined;

  /**
   * The connection state of the source application.
   *
   * @public
   */
  sourceConnectionState?: ConnectionState | undefined;

  /**
   * The connection state of the destination application.
   *
   * @public
   */
  destinationConnectionState?: ConnectionState | undefined;

  /**
   * A description of the tunnel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The destination configuration that specifies the thing name of the destination device and a service name that the local proxy uses to connect to the destination application.
   *
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;

  /**
   * Timeout configuration for the tunnel.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * A list of tag metadata associated with the secure tunnel.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The time when the tunnel was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The last time the tunnel was updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTunnelResponse {
  /**
   * The tunnel being described.
   *
   * @public
   */
  tunnel?: Tunnel | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the specified resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTunnelsRequest {
  /**
   * The name of the IoT thing associated with the destination device.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The maximum number of results to return at once.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the tunnel.
 *
 * @public
 */
export interface TunnelSummary {
  /**
   * The unique alpha-numeric identifier for the tunnel.
   *
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * The Amazon Resource Name of the tunnel.
   *
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * The status of a tunnel. Valid values are: Open and Closed.
   *
   * @public
   */
  status?: TunnelStatus | undefined;

  /**
   * A description of the tunnel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time the tunnel was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the tunnel was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTunnelsResponse {
  /**
   * A short description of the tunnels in an Amazon Web Services account.
   *
   * @public
   */
  tunnelSummaries?: TunnelSummary[] | undefined;

  /**
   * The token to use to get the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface OpenTunnelRequest {
  /**
   * A short text description of the tunnel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A collection of tag metadata.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The destination configuration for the OpenTunnel request.
   *
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;

  /**
   * Timeout configuration for a tunnel.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;
}

/**
 * @public
 */
export interface OpenTunnelResponse {
  /**
   * A unique alpha-numeric tunnel ID.
   *
   * @public
   */
  tunnelId?: string | undefined;

  /**
   * The Amazon Resource Name for the tunnel.
   *
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * The access token the source local proxy uses to connect to IoT Secure Tunneling.
   *
   * @public
   */
  sourceAccessToken?: string | undefined;

  /**
   * The access token the destination local proxy uses to connect to IoT Secure Tunneling.
   *
   * @public
   */
  destinationAccessToken?: string | undefined;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenRequest {
  /**
   * The tunnel for which you want to rotate the access tokens.
   *
   * @public
   */
  tunnelId: string | undefined;

  /**
   * The mode of the client that will use the client token, which can be either the source or destination, or both source and destination.
   *
   * @public
   */
  clientMode: ClientMode | undefined;

  /**
   * The destination configuration.
   *
   * @public
   */
  destinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenResponse {
  /**
   * The Amazon Resource Name for the tunnel.
   *
   * @public
   */
  tunnelArn?: string | undefined;

  /**
   * The client access token that the source local proxy uses to connect to IoT Secure Tunneling.
   *
   * @public
   */
  sourceAccessToken?: string | undefined;

  /**
   * The client access token that the destination local proxy uses to connect to IoT Secure Tunneling.
   *
   * @public
   */
  destinationAccessToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags for the resource.
   *
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
   * The resource ARN.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
