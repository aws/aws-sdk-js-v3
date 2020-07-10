import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CloseTunnelRequest {
  __type?: "CloseTunnelRequest";
  /**
   * <p>When set to true, AWS IoT Secure Tunneling deletes the tunnel data
   * 			immediately.</p>
   */
  delete?: boolean;

  /**
   * <p>The ID of the tunnel to close.</p>
   */
  tunnelId: string | undefined;
}

export namespace CloseTunnelRequest {
  export const filterSensitiveLog = (obj: CloseTunnelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloseTunnelRequest => __isa(o, "CloseTunnelRequest");
}

export interface CloseTunnelResponse {
  __type?: "CloseTunnelResponse";
}

export namespace CloseTunnelResponse {
  export const filterSensitiveLog = (obj: CloseTunnelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloseTunnelResponse => __isa(o, "CloseTunnelResponse");
}

/**
 * <p>The state of a connection.</p>
 */
export interface ConnectionState {
  __type?: "ConnectionState";
  /**
   * <p>The last time the connection status was updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The connection status of the tunnel. Valid values are <code>CONNECTED</code> and
   * 				<code>DISCONNECTED</code>.</p>
   */
  status?: ConnectionStatus | string;
}

export namespace ConnectionState {
  export const filterSensitiveLog = (obj: ConnectionState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConnectionState => __isa(o, "ConnectionState");
}

export enum ConnectionStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export interface DescribeTunnelRequest {
  __type?: "DescribeTunnelRequest";
  /**
   * <p>The tunnel to describe.</p>
   */
  tunnelId: string | undefined;
}

export namespace DescribeTunnelRequest {
  export const filterSensitiveLog = (obj: DescribeTunnelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTunnelRequest => __isa(o, "DescribeTunnelRequest");
}

export interface DescribeTunnelResponse {
  __type?: "DescribeTunnelResponse";
  /**
   * <p>The tunnel being described.</p>
   */
  tunnel?: Tunnel;
}

export namespace DescribeTunnelResponse {
  export const filterSensitiveLog = (obj: DescribeTunnelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTunnelResponse => __isa(o, "DescribeTunnelResponse");
}

/**
 * <p>The destination configuration.</p>
 */
export interface DestinationConfig {
  __type?: "DestinationConfig";
  /**
   * <p>A list of service names that identity the target application. Currently, you can
   * 			only specify a single name. The AWS IoT client running on the destination device reads
   * 			this value and uses it to look up a port or an IP address and a port. The AWS IoT client
   * 			instantiates the local proxy which uses this information to connect to the destination
   * 			application.</p>
   */
  services: string[] | undefined;

  /**
   * <p>The name of the IoT thing to which you want to connect.</p>
   */
  thingName: string | undefined;
}

export namespace DestinationConfig {
  export const filterSensitiveLog = (obj: DestinationConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DestinationConfig => __isa(o, "DestinationConfig");
}

/**
 * <p>Thrown when a tunnel limit is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags for the specified resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListTunnelsRequest {
  __type?: "ListTunnelsRequest";
  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the IoT thing associated with the destination device.</p>
   */
  thingName?: string;
}

export namespace ListTunnelsRequest {
  export const filterSensitiveLog = (obj: ListTunnelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTunnelsRequest => __isa(o, "ListTunnelsRequest");
}

export interface ListTunnelsResponse {
  __type?: "ListTunnelsResponse";
  /**
   * <p>A token to used to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A short description of the tunnels in an AWS account.</p>
   */
  tunnelSummaries?: TunnelSummary[];
}

export namespace ListTunnelsResponse {
  export const filterSensitiveLog = (obj: ListTunnelsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTunnelsResponse => __isa(o, "ListTunnelsResponse");
}

export interface OpenTunnelRequest {
  __type?: "OpenTunnelRequest";
  /**
   * <p>A short text description of the tunnel. </p>
   */
  description?: string;

  /**
   * <p>The destination configuration for the OpenTunnel request.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * <p>A collection of tag metadata.</p>
   */
  tags?: Tag[];

  /**
   * <p>Timeout configuration for a tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace OpenTunnelRequest {
  export const filterSensitiveLog = (obj: OpenTunnelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OpenTunnelRequest => __isa(o, "OpenTunnelRequest");
}

export interface OpenTunnelResponse {
  __type?: "OpenTunnelResponse";
  /**
   * <p>The access token the destination local proxy uses to connect to AWS IoT Secure
   * 			Tunneling.</p>
   */
  destinationAccessToken?: string;

  /**
   * <p>The access token the source local proxy uses to connect to AWS IoT Secure
   * 			Tunneling.</p>
   */
  sourceAccessToken?: string;

  /**
   * <p>The Amazon Resource Name for the tunnel. The tunnel ARN format is
   * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
   *          </p>
   */
  tunnelArn?: string;

  /**
   * <p>A unique alpha-numeric tunnel ID.</p>
   */
  tunnelId?: string;
}

export namespace OpenTunnelResponse {
  export const filterSensitiveLog = (obj: OpenTunnelResponse): any => ({
    ...obj,
    ...(obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }),
    ...(obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is OpenTunnelResponse => __isa(o, "OpenTunnelResponse");
}

/**
 * <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>An arbitary key/value pair used to add searchable metadata to secure tunnel
 * 			resources.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>Tunnel timeout configuration.</p>
 */
export interface TimeoutConfig {
  __type?: "TimeoutConfig";
  /**
   * <p>The maximum amount of time (in minutes) a tunnel can remain open. If not specified,
   * 			maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12
   * 			hours (720 minutes) </p>
   */
  maxLifetimeTimeoutMinutes?: number;
}

export namespace TimeoutConfig {
  export const filterSensitiveLog = (obj: TimeoutConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TimeoutConfig => __isa(o, "TimeoutConfig");
}

/**
 * <p>A connection between a source computer and a destination device.</p>
 */
export interface Tunnel {
  __type?: "Tunnel";
  /**
   * <p>The time when the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * <p>The destination configuration that specifies the thing name of the destination
   * 			device and a service name that the local proxy uses to connect to the destination
   * 			application.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * <p>The connection state of the destination application.</p>
   */
  destinationConnectionState?: ConnectionState;

  /**
   * <p>The last time the tunnel was updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The connection state of the source application.</p>
   */
  sourceConnectionState?: ConnectionState;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus | string;

  /**
   * <p>A list of tag metadata associated with the secure tunnel.</p>
   */
  tags?: Tag[];

  /**
   * <p>Timeout configuration for the tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of a tunnel. The tunnel ARN format is
   * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
   *          </p>
   */
  tunnelArn?: string;

  /**
   * <p>A unique alpha-numeric ID that identifies a tunnel.</p>
   */
  tunnelId?: string;
}

export namespace Tunnel {
  export const filterSensitiveLog = (obj: Tunnel): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tunnel => __isa(o, "Tunnel");
}

export enum TunnelStatus {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * <p>Information about the tunnel.</p>
 */
export interface TunnelSummary {
  __type?: "TunnelSummary";
  /**
   * <p>The time the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * <p>The time the tunnel was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus | string;

  /**
   * <p>The Amazon Resource Name of the tunnel. The tunnel ARN format is
   * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
   *          </p>
   */
  tunnelArn?: string;

  /**
   * <p>The unique alpha-numeric identifier for the tunnel.</p>
   */
  tunnelId?: string;
}

export namespace TunnelSummary {
  export const filterSensitiveLog = (obj: TunnelSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TunnelSummary => __isa(o, "TunnelSummary");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}
