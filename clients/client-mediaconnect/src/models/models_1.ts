// smithy-typescript generated code
import type {
  Algorithm,
  BridgePlacement,
  DestinationEndpointConnectionState,
  DestinationEndpointRegistrationState,
  DestinationEndpointType,
  EndpointEncryptionType,
  EndpointLifecycle,
  EntitlementStatus,
  FlowSize,
  KeyType,
  MaintenanceDay,
  MaintenanceScheduleType,
  MediaStreamType,
  NdiOutputTimecodeSource,
  OutputStatus,
  Protocol,
  ResourceShareOwnership,
  ResourceShareState,
  RouterInputState,
  RouterInputTier,
  RouterInputType,
  RouterNetworkInterfaceState,
  RouterNetworkInterfaceType,
  RouterOutputRoutedState,
  RouterOutputState,
  RouterOutputTier,
  RouterOutputType,
  RoutingScope,
  SourceEndpointConnectionState,
  SourceEndpointRegistrationState,
  SourceEndpointType,
  State,
  Status,
} from "./enums";
import type {
  DestinationEndpoint,
  DestinationEndpointConfiguration,
  EncodingConfig,
  Entitlement,
  FabricConfiguration,
  Flow,
  FlowTransitEncryption,
  GrantEntitlementRequest,
  ListedEntitlement,
  ListedFlow,
  ListedGateway,
  ListedGatewayInstance,
  MaintenanceConfiguration,
  MaintenanceSchedule,
  MediaStream,
  MediaStreamAttributesRequest,
  MediaStreamOutputConfigurationRequest,
  MediaStreamSourceConfigurationRequest,
  MonitoringConfig,
  NdiConfig,
  NdiSourceSettings,
  Offering,
  Output,
  Reservation,
  RouterContentQualityAnalysisConfiguration,
  RouterInput,
  RouterInputConfiguration,
  RouterInputMessage,
  RouterInputTransitEncryption,
  RouterNetworkInterface,
  RouterNetworkInterfaceConfiguration,
  RouterOutput,
  RouterOutputConfiguration,
  Source,
  SourceEndpoint,
  SourceEndpointConfiguration,
  TransportMediaInfo,
  UpdateFailoverConfig,
  VpcInterfaceAttachment,
} from "./models_0";

/**
 * A filter to apply when listing destination endpoints. This is a union type, so exactly one of its members is set.
 *
 * @public
 */
export type DestinationEndpointFilter =
  | DestinationEndpointFilter.DestinationTypesMember
  | DestinationEndpointFilter.NameContainsMember
  | DestinationEndpointFilter.RegionNamesMember
  | DestinationEndpointFilter.$UnknownMember;

/**
 * @public
 */
export namespace DestinationEndpointFilter {
  /**
   * Filters the results to destination endpoints in the specified Amazon Web Services Regions.
   *
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    DestinationTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * Filters the results to destination endpoints of the specified types.
   *
   * @public
   */
  export interface DestinationTypesMember {
    RegionNames?: never;
    DestinationTypes: DestinationEndpointType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * Filters the results to destination endpoints whose names contain the specified strings.
   *
   * @public
   */
  export interface NameContainsMember {
    RegionNames?: never;
    DestinationTypes?: never;
    NameContains: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RegionNames?: never;
    DestinationTypes?: never;
    NameContains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RegionNames: (value: string[]) => T;
    DestinationTypes: (value: DestinationEndpointType[]) => T;
    NameContains: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DisconnectEndpointsRequest {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint to disconnect.
   *
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint to disconnect.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DisconnectEndpointsResponse {
  /**
   * The Amazon Resource Name (ARN) of the disconnected destination endpoint.
   *
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * The name of the disconnected destination endpoint.
   *
   * @public
   */
  DestinationEndpointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the disconnected source endpoint.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * The name of the disconnected source endpoint.
   *
   * @public
   */
  SourceEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint to retrieve.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationEndpointResponse {
  /**
   * The details of the destination endpoint.
   *
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface ListDestinationEndpointsRequest {
  /**
   * The maximum number of results to return in a single request. The valid range is 1 to 100. If you don't specify a value, the service returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the next page of results to return. Use the token that a previous request returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply to the list of destination endpoints.
   *
   * @public
   */
  Filters?: DestinationEndpointFilter[] | undefined;
}

/**
 * A summary of a destination endpoint that the `ListDestinationEndpoints` operation returns.
 *
 * @public
 */
export interface ListedDestinationEndpoint {
  /**
   * The name of the destination endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination endpoint.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the destination endpoint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the destination endpoint. Valid values include the following:
   *
   * - `STANDARD` – A destination endpoint that represents an external destination over a standard protocol, such as RTP, RIST, or SRT.
   * - `ROUTER_INPUT` – A destination endpoint that represents a router input.
   *
   * @public
   */
  DestinationType: DestinationEndpointType | undefined;

  /**
   * The name of the Amazon Web Services Region in which the destination endpoint is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone in which the destination endpoint is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the destination endpoint is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The date and time when the destination endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the destination endpoint was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The entity that manages the lifecycle of the destination endpoint.
   *
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The number of status messages for the destination endpoint.
   *
   * @public
   */
  MessageCount: number | undefined;

  /**
   * Indicates whether this account owns the destination endpoint or consumes it from another account through RAM.
   *
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * The sharing state of the destination endpoint.
   *
   * @public
   */
  ResourceShareState: ResourceShareState | undefined;

  /**
   * The registration state of the destination endpoint. Valid values include the following:
   *
   * - `REGISTERED` – The destination endpoint is registered and ready to use.
   * - `REGISTERING` – MediaConnect is registering the destination endpoint.
   * - `DEREGISTERING` – MediaConnect is deregistering the destination endpoint.
   * - `REGISTRATION_FAILED` – MediaConnect couldn't register the destination endpoint.
   *
   * @public
   */
  RegistrationState: DestinationEndpointRegistrationState | undefined;

  /**
   * The connection state of the destination endpoint. Valid values include the following:
   *
   * - `CONNECTED` – The destination endpoint is connected to a source endpoint.
   * - `DISCONNECTED` – The destination endpoint isn't connected to a source endpoint.
   * - `CONNECTING` – The destination endpoint is connecting to a source endpoint.
   * - `DISCONNECTING` – The destination endpoint is disconnecting from a source endpoint.
   *
   * @public
   */
  ConnectionState: DestinationEndpointConnectionState | undefined;

  /**
   * The type of decryption used for the destination endpoint connection.
   *
   * @public
   */
  DecryptionType?: EndpointEncryptionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint that is connected to the destination endpoint.
   *
   * @public
   */
  ConnectedSource?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that is associated with the destination endpoint.
   *
   * @public
   */
  AssociatedResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDestinationEndpointsResponse {
  /**
   * The destination endpoints that match the request.
   *
   * @public
   */
  DestinationEndpoints: ListedDestinationEndpoint[] | undefined;

  /**
   * The token to use in the next request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDestinationEndpointRequest {
  /**
   * A description to help you identify the destination endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration settings for the destination endpoint.
   *
   * @public
   */
  Configuration: DestinationEndpointConfiguration | undefined;

  /**
   * The name of the Amazon Web Services Region in which to register the destination endpoint. Defaults to the current region if not specified.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The tags to apply to the destination endpoint. Each tag is a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDestinationEndpointResponse {
  /**
   * The details of the destination endpoint that was registered.
   *
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A description to help you identify the destination endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated configuration settings for the destination endpoint.
   *
   * @public
   */
  Configuration?: DestinationEndpointConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationEndpointResponse {
  /**
   * The details of the updated destination endpoint.
   *
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * The list of entitlements that you want to grant.
   *
   * @public
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow that you want to grant entitlements on.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * The entitlements that were just granted.
   *
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * The ARN of the flow that these entitlements were granted to.
   *
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListFlows` request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListFlows` request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListFlows` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * A list of flow summaries.
   *
   * @public
   */
  Flows?: ListedFlow[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListFlows` request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListFlows` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the media stream that you want to remove.
   *
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamResponse {
  /**
   * The ARN of the flow that was updated.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The name of the media stream that was removed.
   *
   * @public
   */
  MediaStreamName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to remove an output from.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the output that you want to remove.
   *
   * @public
   */
  OutputArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputResponse {
  /**
   * The ARN of the flow that the output was removed from.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the output that was removed.
   *
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to remove a source from.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the source that you want to remove.
   *
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceResponse {
  /**
   * The ARN of the flow that the source was removed from.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the source that was removed.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to remove a VPC interface from.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface that you want to remove.
   *
   * @public
   */
  VpcInterfaceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * The ARN of the flow that is associated with the VPC interface you removed.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * IDs of network interfaces associated with the removed VPC interface that MediaConnect was unable to remove.
   *
   * @public
   */
  NonDeletedNetworkInterfaceIds?: string[] | undefined;

  /**
   * The name of the VPC interface that was removed.
   *
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * The Amazon Resource Name (ARN) of the entitlement that you want to revoke.
   *
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * The flow that you want to revoke an entitlement from.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * The ARN of the entitlement that was revoked.
   *
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The ARN of the flow that the entitlement was revoked from.
   *
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to start.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * The ARN of the flow that you started.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the `StartFlow` process begins.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to stop.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * The ARN of the flow that you stopped.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the `StopFlow` process begins.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * Update maintenance setting for a flow.
 *
 * @public
 */
export interface UpdateMaintenance {
  /**
   * A day of a week when the maintenance will happen.
   *
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   *
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   *
   * @public
   */
  MaintenanceStartHour?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The settings for source failover.
   *
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;

  /**
   * The maintenance setting of the flow.
   *
   * @public
   */
  Maintenance?: UpdateMaintenance | undefined;

  /**
   * The settings for source monitoring.
   *
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output.
   *
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * Determines the processing capacity and feature set of the flow.
   *
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
   *
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * The updated flow.
   *
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * Information about the encryption of the flow.
 *
 * @public
 */
export interface UpdateEncryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   *
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   *
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   *
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * The Amazon Web Services Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of the secret that you created in Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * A description of the entitlement. This description appears only on the MediaConnect console and will not be seen by the subscriber or end user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.
   *
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entitlement that you want to update.
   *
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the `entitlementStatus` field in your request, MediaConnect leaves the value unchanged.
   *
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The ARN of the flow that is associated with the entitlement that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   *
   * @public
   */
  Subscribers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * The new configuration of the entitlement that you updated.
   *
   * @public
   */
  Entitlement?: Entitlement | undefined;

  /**
   * The ARN of the flow that this entitlement was granted on.
   *
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * The attributes that you want to assign to the media stream.
   *
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * The sample rate for the stream. This value in measured in kHz.
   *
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow that is associated with the media stream that you updated.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The media stream that you updated.
   *
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   *
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   *
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamResponse {
  /**
   * The ARN of the flow that is associated with the media stream that you updated.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The media stream that you updated.
   *
   * @public
   */
  MediaStream?: MediaStream | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * A description of the output. This description appears only on the MediaConnect console and will not be seen by the end user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address where you want to send the output.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no `keyType` is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   *
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow that is associated with the output that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   *
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   *
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The ARN of the output that you want to update.
   *
   * @public
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol to use for the output.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   *
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * An indication of whether the output should transmit data or not. If you don't specify the `outputStatus` field in your request, MediaConnect leaves the value unchanged.
   *
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name.
   *
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * A quality setting for the NDI Speed HQ encoder.
   *
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * Indicates whether to enable or disable router integration for this flow output.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
   *
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * Controls how MediaConnect generates timecodes for NDI output frames. If you don't specify this field, MediaConnect leaves the value unchanged.
   *
   * - `EMBEDDED_TIMECODE` - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.
   * - `UTC_SYSTEM_TIME` - Generates timecodes based on the system clock time when each frame is sent.
   *
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are `-20` (NDI and SMPTE) and `-18` (EBU). If you don't specify this field, MediaConnect leaves the value unchanged.
   *
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the updated output.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The new settings of the output that you updated.
   *
   * @public
   */
  Output?: Output | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 *
 * @public
 */
export interface UpdateGatewayBridgeSourceRequest {
  /**
   * The ARN of the bridge feeding this flow.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from the source.
   *
   * @public
   */
  Decryption?: UpdateEncryption | undefined;

  /**
   * A description of the source. This description is not visible outside of the current Amazon Web Services account.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entitlement that allows you to subscribe to the flow. The entitlement is set by the content originator, and the ARN is generated as part of the originator's flow.
   *
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The ARN of the flow that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088.
   *
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The maximum bitrate for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   *
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   *
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The media stream that is associated with the source, and the parameters for that association.
   *
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The protocol that the source uses to deliver the content to MediaConnect.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The ARN of the source that you want to update.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The source IP or domain name for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface that you want to send your output to.
   *
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that are allowed to contribute content to your source. Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   *
   * @public
   */
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest | undefined;

  /**
   * The settings for the NDI source. This includes the exact name of the upstream NDI sender that you want to connect to your source.
   *
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * Indicates whether to enable or disable router integration for this flow source.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The encryption configuration for the flow source when router integration is enabled.
   *
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceResponse {
  /**
   * The ARN of the flow that you updated.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the sources that are assigned to the flow.
   *
   * @public
   */
  Source?: Source | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesRequest {
  /**
   * Filter the list results to display only the instances associated with the selected Gateway ARN.
   *
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a ListInstances request with `MaxResults` set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListInstances` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListInstances` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesResponse {
  /**
   * A list of instance summaries.
   *
   * @public
   */
  Instances?: ListedGatewayInstance[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListInstances` request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListInstances` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceRequest {
  /**
   * The state of the instance. `ACTIVE` or `INACTIVE`.
   *
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway instance that you want to update.
   *
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceResponse {
  /**
   * The state of the instance. `ACTIVE` or `INACTIVE`.
   *
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * The ARN of the instance that was updated.
   *
   * @public
   */
  GatewayInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListGateways` request with `MaxResults` set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListGateways` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListGateways` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * A list of gateway summaries.
   *
   * @public
   */
  Gateways?: ListedGateway[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListGateways` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListGateways` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input to retrieve information about.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterInputResponse {
  /**
   * The details of the requested router input, including its configuration, state, and other attributes.
   *
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface GetRouterInputSourceMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input to retrieve metadata for.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * Metadata information associated with the router input, including stream details and connection state.
 *
 * @public
 */
export type RouterInputMetadata =
  | RouterInputMetadata.TransportStreamMediaInfoMember
  | RouterInputMetadata.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputMetadata {
  /**
   * The metadata of the transport stream in the current flow's source.
   *
   * @public
   */
  export interface TransportStreamMediaInfoMember {
    TransportStreamMediaInfo: TransportMediaInfo;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TransportStreamMediaInfo?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TransportStreamMediaInfo: (value: TransportMediaInfo) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Detailed metadata information about a router input source.
 *
 * @public
 */
export interface RouterInputSourceMetadataDetails {
  /**
   * Collection of metadata messages associated with the router input source.
   *
   * @public
   */
  SourceMetadataMessages: RouterInputMessage[] | undefined;

  /**
   * The timestamp when the metadata was last updated.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * Metadata information specific to the router input configuration and state.
   *
   * @public
   */
  RouterInputMetadata?: RouterInputMetadata | undefined;
}

/**
 * @public
 */
export interface GetRouterInputSourceMetadataResponse {
  /**
   * The Amazon Resource Name (ARN) of the router input.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Detailed metadata information about the router input source, including connection state, timestamps, and stream configuration.
   *
   * @public
   */
  SourceMetadataDetails: RouterInputSourceMetadataDetails | undefined;
}

/**
 * @public
 */
export interface GetRouterInputThumbnailRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to see a thumbnail of.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The details of a thumbnail associated with a router input, including the thumbnail messages, the thumbnail image, the timecode, and the timestamp.
 *
 * @public
 */
export interface RouterInputThumbnailDetails {
  /**
   * The messages associated with the router input thumbnail.
   *
   * @public
   */
  ThumbnailMessages: RouterInputMessage[] | undefined;

  /**
   * The thumbnail image, encoded as a Base64-encoded binary data object.
   *
   * @public
   */
  Thumbnail?: Uint8Array | undefined;

  /**
   * The timecode associated with the thumbnail.
   *
   * @public
   */
  Timecode?: string | undefined;

  /**
   * The timestamp associated with the thumbnail.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRouterInputThumbnailResponse {
  /**
   * The ARN of the router input.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The details of the thumbnail associated with the router input, including the thumbnail image, timecode, timestamp, and any associated error messages.
   *
   * @public
   */
  ThumbnailDetails: RouterInputThumbnailDetails | undefined;
}

/**
 * @public
 */
export interface GetRouterNetworkInterfaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the router network interface that you want to retrieve information about.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterNetworkInterfaceResponse {
  /**
   * The details of the requested router network interface, including its configuration and other attributes.
   *
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface GetRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to retrieve information about.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterOutputResponse {
  /**
   * The details of the requested router output, including its configuration, state, and other attributes.
   *
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface GetSourceEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the source endpoint to retrieve.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetSourceEndpointResponse {
  /**
   * The details of the source endpoint.
   *
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * A summary of a router input, including its name, type, ARN, ID, state, and other key details. This structure is used in the response of the ListRouterInputs operation.
 *
 * @public
 */
export interface ListedRouterInput {
  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router input.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router input.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the router input.
   *
   * @public
   */
  InputType: RouterInputType | undefined;

  /**
   * The overall state of the router input.
   *
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * The number of router outputs that are associated with this router input.
   *
   * @public
   */
  RoutedOutputs: number | undefined;

  /**
   * The Amazon Web Services Region where the router input is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone of the router input.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The maximum bitrate of the router input.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * Indicates whether the router input is configured for Regional or global routing.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The timestamp when the router input was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router input was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The number of messages associated with the router input.
   *
   * @public
   */
  MessageCount: number | undefined;

  /**
   * The ARN of the network interface associated with the router input.
   *
   * @public
   */
  NetworkInterfaceArn?: string | undefined;

  /**
   * The type of maintenance schedule currently associated with the listed router input.
   *
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * The details of the maintenance schedule for the listed router input.
   *
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * A summary of a router network interface, including its name, type, ARN, ID, associated input/output counts, state, and other key details. This structure is used in the response of the ListRouterNetworkInterfaces operation.
 *
 * @public
 */
export interface ListedRouterNetworkInterface {
  /**
   * The name of the router network interface.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router network interface.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router network interface.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the router network interface.
   *
   * @public
   */
  NetworkInterfaceType: RouterNetworkInterfaceType | undefined;

  /**
   * The number of router outputs associated with the network interface.
   *
   * @public
   */
  AssociatedOutputCount: number | undefined;

  /**
   * The number of router inputs associated with the network interface.
   *
   * @public
   */
  AssociatedInputCount: number | undefined;

  /**
   * The current state of the router network interface.
   *
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;

  /**
   * The Amazon Web Services Region where the router network interface is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The timestamp when the network interface was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router network interface was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * A summary of a router output, including its name, type, ARN, ID, state, routed state, and other key details. This structure is used in the response of the ListRouterOutputs operation.
 *
 * @public
 */
export interface ListedRouterOutput {
  /**
   * The name of the router output.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router output.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router output.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the router output.
   *
   * @public
   */
  OutputType: RouterOutputType | undefined;

  /**
   * The overall state of the router output.
   *
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * The current state of the association between the router output and its input.
   *
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * The AAmazon Web Services Region where the router output is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone of the router output.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The maximum bitrate of the router output.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * Indicates whether the router output is configured for Regional or global routing.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The timestamp when the router output was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router output was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The number of messages associated with the router output.
   *
   * @public
   */
  MessageCount: number | undefined;

  /**
   * The ARN of the router input associated with the output.
   *
   * @public
   */
  RoutedInputArn?: string | undefined;

  /**
   * The ARN of the network interface associated with the router output.
   *
   * @public
   */
  NetworkInterfaceArn?: string | undefined;

  /**
   * The type of maintenance schedule currently associated with the listed router output.
   *
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * The details of the maintenance schedule for the listed router output.
   *
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * A summary of a source endpoint that the `ListSourceEndpoints` operation returns.
 *
 * @public
 */
export interface ListedSourceEndpoint {
  /**
   * The name of the source endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the source endpoint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the source endpoint. Valid values include the following:
   *
   * - `STANDARD` – A source endpoint that represents an external source over a standard protocol, such as RTP, RIST, or SRT.
   * - `ROUTER_OUTPUT` – A source endpoint that represents a router output.
   *
   * @public
   */
  SourceType: SourceEndpointType | undefined;

  /**
   * The name of the Amazon Web Services Region in which the source endpoint is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone in which the source endpoint is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the source endpoint is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The date and time when the source endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the source endpoint was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The entity that manages the lifecycle of the source endpoint.
   *
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The number of status messages for the source endpoint.
   *
   * @public
   */
  MessageCount: number | undefined;

  /**
   * Indicates whether this account owns the source endpoint or consumes it from another account through RAM.
   *
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * The sharing state of the source endpoint.
   *
   * @public
   */
  ResourceShareState: ResourceShareState | undefined;

  /**
   * The registration state of the source endpoint. Valid values include the following:
   *
   * - `REGISTERED` – The source endpoint is registered and ready to use.
   * - `REGISTERING` – MediaConnect is registering the source endpoint.
   * - `DEREGISTERING` – MediaConnect is deregistering the source endpoint.
   * - `REGISTRATION_FAILED` – MediaConnect couldn't register the source endpoint.
   *
   * @public
   */
  RegistrationState: SourceEndpointRegistrationState | undefined;

  /**
   * The connection state of the source endpoint. Valid values include the following:
   *
   * - `CONNECTED` – The source endpoint is connected to a destination endpoint.
   * - `DISCONNECTED` – The source endpoint isn't connected to a destination endpoint.
   * - `CONNECTING` – The source endpoint is connecting to a destination endpoint.
   * - `DISCONNECTING` – The source endpoint is disconnecting from a destination endpoint.
   *
   * @public
   */
  ConnectionState: SourceEndpointConnectionState | undefined;

  /**
   * The type of encryption used for the source endpoint connection.
   *
   * @public
   */
  EncryptionType?: EndpointEncryptionType | undefined;

  /**
   * The number of destination endpoints that are connected to the source endpoint.
   *
   * @public
   */
  ConnectedDestinationCount: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that is associated with the source endpoint.
   *
   * @public
   */
  AssociatedResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListEntitlements` request with set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListEntitlements` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListEntitlements` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * A list of entitlements that have been granted to you from other Amazon Web Services accounts.
   *
   * @public
   */
  Entitlements?: ListedEntitlement[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a ListEntitlements request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the `ListEntitlements` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListOfferings` request with `MaxResults` set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListOfferings` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListOfferings` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListOfferings` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListOfferings` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of offerings that are available to this account in the current Amazon Web Services Region.
   *
   * @public
   */
  Offerings?: Offering[] | undefined;
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListReservations` request with `MaxResults` set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListReservations` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListOfferings` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListReservations` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListReservations` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of all reservations that have been purchased by this account in the current Amazon Web Services Region.
   *
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * A filter that can be used to retrieve a list of router inputs.
 *
 * @public
 */
export type RouterInputFilter =
  | RouterInputFilter.InputTypesMember
  | RouterInputFilter.NameContainsMember
  | RouterInputFilter.NetworkInterfaceArnsMember
  | RouterInputFilter.RegionNamesMember
  | RouterInputFilter.RoutingScopesMember
  | RouterInputFilter.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputFilter {
  /**
   * The names of the router inputs to include in the filter.
   *
   * @public
   */
  export interface NameContainsMember {
    NameContains: string[];
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    InputTypes?: never;
    $unknown?: never;
  }

  /**
   * The AWS Regions of the router inputs to include in the filter.
   *
   * @public
   */
  export interface RegionNamesMember {
    NameContains?: never;
    RegionNames: string[];
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    InputTypes?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Names (ARNs) of the network interfaces associated with the router inputs to include in the filter.
   *
   * @public
   */
  export interface NetworkInterfaceArnsMember {
    NameContains?: never;
    RegionNames?: never;
    NetworkInterfaceArns: string[];
    RoutingScopes?: never;
    InputTypes?: never;
    $unknown?: never;
  }

  /**
   * Filter criteria to list router inputs based on their routing scope (REGIONAL or GLOBAL).
   *
   * @public
   */
  export interface RoutingScopesMember {
    NameContains?: never;
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes: RoutingScope[];
    InputTypes?: never;
    $unknown?: never;
  }

  /**
   * The types of router inputs to include in the filter.
   *
   * @public
   */
  export interface InputTypesMember {
    NameContains?: never;
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    InputTypes: RouterInputType[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    NameContains?: never;
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    InputTypes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    NameContains: (value: string[]) => T;
    RegionNames: (value: string[]) => T;
    NetworkInterfaceArns: (value: string[]) => T;
    RoutingScopes: (value: RoutingScope[]) => T;
    InputTypes: (value: RouterInputType[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRouterInputsRequest {
  /**
   * The maximum number of router inputs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply when retrieving the list of router inputs.
   *
   * @public
   */
  Filters?: RouterInputFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterInputsResponse {
  /**
   * The summary information for the retrieved router inputs.
   *
   * @public
   */
  RouterInputs: ListedRouterInput[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter that can be used to retrieve a list of router network interfaces.
 *
 * @public
 */
export type RouterNetworkInterfaceFilter =
  | RouterNetworkInterfaceFilter.NameContainsMember
  | RouterNetworkInterfaceFilter.NetworkInterfaceTypesMember
  | RouterNetworkInterfaceFilter.RegionNamesMember
  | RouterNetworkInterfaceFilter.$UnknownMember;

/**
 * @public
 */
export namespace RouterNetworkInterfaceFilter {
  /**
   * The AWS Regions of the router network interfaces to include in the filter.
   *
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    NetworkInterfaceTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The types of router network interfaces to include in the filter.
   *
   * @public
   */
  export interface NetworkInterfaceTypesMember {
    RegionNames?: never;
    NetworkInterfaceTypes: RouterNetworkInterfaceType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The names of the router network interfaces to include in the filter.
   *
   * @public
   */
  export interface NameContainsMember {
    RegionNames?: never;
    NetworkInterfaceTypes?: never;
    NameContains: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RegionNames?: never;
    NetworkInterfaceTypes?: never;
    NameContains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RegionNames: (value: string[]) => T;
    NetworkInterfaceTypes: (value: RouterNetworkInterfaceType[]) => T;
    NameContains: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRouterNetworkInterfacesRequest {
  /**
   * The maximum number of router network interfaces to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply when retrieving the list of router network interfaces.
   *
   * @public
   */
  Filters?: RouterNetworkInterfaceFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterNetworkInterfacesResponse {
  /**
   * The summary information for the retrieved router network interfaces.
   *
   * @public
   */
  RouterNetworkInterfaces: ListedRouterNetworkInterface[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter that can be used to retrieve a list of router outputs.
 *
 * @public
 */
export type RouterOutputFilter =
  | RouterOutputFilter.NameContainsMember
  | RouterOutputFilter.NetworkInterfaceArnsMember
  | RouterOutputFilter.OutputTypesMember
  | RouterOutputFilter.RegionNamesMember
  | RouterOutputFilter.RoutedInputArnsMember
  | RouterOutputFilter.RoutingScopesMember
  | RouterOutputFilter.$UnknownMember;

/**
 * @public
 */
export namespace RouterOutputFilter {
  /**
   * The AWS Regions of the router outputs to include in the filter.
   *
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    OutputTypes?: never;
    RoutedInputArns?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Names (ARNs) of the network interfaces associated with the router outputs to include in the filter.
   *
   * @public
   */
  export interface NetworkInterfaceArnsMember {
    RegionNames?: never;
    NetworkInterfaceArns: string[];
    RoutingScopes?: never;
    OutputTypes?: never;
    RoutedInputArns?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * Filter criteria to list router outputs based on their routing scope.
   *
   * @public
   */
  export interface RoutingScopesMember {
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes: RoutingScope[];
    OutputTypes?: never;
    RoutedInputArns?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The types of router outputs to include in the filter.
   *
   * @public
   */
  export interface OutputTypesMember {
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    OutputTypes: RouterOutputType[];
    RoutedInputArns?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The ARNs of the router inputs associated with the router outputs to include in the filter.
   *
   * @public
   */
  export interface RoutedInputArnsMember {
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    OutputTypes?: never;
    RoutedInputArns: string[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * The names of the router outputs to include in the filter.
   *
   * @public
   */
  export interface NameContainsMember {
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    OutputTypes?: never;
    RoutedInputArns?: never;
    NameContains: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RegionNames?: never;
    NetworkInterfaceArns?: never;
    RoutingScopes?: never;
    OutputTypes?: never;
    RoutedInputArns?: never;
    NameContains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RegionNames: (value: string[]) => T;
    NetworkInterfaceArns: (value: string[]) => T;
    RoutingScopes: (value: RoutingScope[]) => T;
    OutputTypes: (value: RouterOutputType[]) => T;
    RoutedInputArns: (value: string[]) => T;
    NameContains: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRouterOutputsRequest {
  /**
   * The maximum number of router outputs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply when retrieving the list of router outputs.
   *
   * @public
   */
  Filters?: RouterOutputFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterOutputsResponse {
  /**
   * The summary information for the retrieved router outputs.
   *
   * @public
   */
  RouterOutputs: ListedRouterOutput[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter to apply when listing source endpoints. This is a union type, so exactly one of its members is set.
 *
 * @public
 */
export type SourceEndpointFilter =
  | SourceEndpointFilter.NameContainsMember
  | SourceEndpointFilter.RegionNamesMember
  | SourceEndpointFilter.SourceTypesMember
  | SourceEndpointFilter.$UnknownMember;

/**
 * @public
 */
export namespace SourceEndpointFilter {
  /**
   * Filters the results to source endpoints in the specified Amazon Web Services Regions.
   *
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    SourceTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * Filters the results to source endpoints of the specified types.
   *
   * @public
   */
  export interface SourceTypesMember {
    RegionNames?: never;
    SourceTypes: SourceEndpointType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * Filters the results to source endpoints whose names contain the specified strings.
   *
   * @public
   */
  export interface NameContainsMember {
    RegionNames?: never;
    SourceTypes?: never;
    NameContains: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RegionNames?: never;
    SourceTypes?: never;
    NameContains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RegionNames: (value: string[]) => T;
    SourceTypes: (value: SourceEndpointType[]) => T;
    NameContains: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListSourceEndpointsRequest {
  /**
   * The maximum number of results to return in a single request. The valid range is 1 to 100. If you don't specify a value, the service returns up to 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the next page of results to return. Use the token that a previous request returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters to apply to the list of source endpoints.
   *
   * @public
   */
  Filters?: SourceEndpointFilter[] | undefined;
}

/**
 * @public
 */
export interface ListSourceEndpointsResponse {
  /**
   * The source endpoints that match the request.
   *
   * @public
   */
  SourceEndpoints: ListedSourceEndpoint[] | undefined;

  /**
   * The token to use in the next request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForGlobalResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the global resource whose tags you want to list.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForGlobalResourceResponse {
  /**
   * A map of tag keys and values associated with the global resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the MediaConnect resource for which to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   *
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * The name that you want to use for the reservation.
   *
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC).
   *
   * You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: `YYYY-MM-DDTHH:mm:SSZ`, where `T` and `Z` are literal characters. For example, to specify 11:30pm on March 5, 2020, enter `2020-03-05T23:30:00Z`.
   *
   * @public
   */
  Start: string | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * The details of the reservation that you just created when you purchased the offering.
   *
   * @public
   */
  Reservation?: Reservation | undefined;
}

/**
 * @public
 */
export interface RestartRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to restart.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RestartRouterInputResponse {
  /**
   * The ARN of the router input that was restarted.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router input that was restarted.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router input after the restart operation.
   *
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface StartRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to start.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartRouterInputResponse {
  /**
   * The ARN of the router input that was started.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router input that was started.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router input after being started.
   *
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * The type of maintenance schedule associated with the router input.
   *
   * @public
   */
  MaintenanceScheduleType: MaintenanceScheduleType | undefined;

  /**
   * The details of the maintenance schedule for the router input.
   *
   * @public
   */
  MaintenanceSchedule: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface StopRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to stop.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopRouterInputResponse {
  /**
   * The ARN of the router input that was stopped.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router input that was stopped.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router input after being stopped.
   *
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface UpdateRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The updated name for the router input.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated configuration settings for the router input. Changing the type of the configuration is not supported.
   *
   * @public
   */
  Configuration?: RouterInputConfiguration | undefined;

  /**
   * The updated maximum bitrate for the router input.
   *
   * @public
   */
  MaximumBitrate?: number | undefined;

  /**
   * Specifies whether the router input can be assigned to outputs in different Regions. REGIONAL (default) - can be assigned only to outputs in the same Region. GLOBAL - can be assigned to outputs in any Region.
   *
   * @public
   */
  RoutingScope?: RoutingScope | undefined;

  /**
   * The updated tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:
   *
   * - `INPUT_20` – 20 Mbps
   * - `INPUT_50` – 50 Mbps
   * - `INPUT_100` – 100 Mbps
   * - `INPUT_250` – 250 Mbps
   * - `INPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier?: RouterInputTier | undefined;

  /**
   * The updated transit encryption settings for the router input.
   *
   * @public
   */
  TransitEncryption?: RouterInputTransitEncryption | undefined;

  /**
   * The updated maintenance configuration settings for the router input, including any changes to preferred maintenance windows and schedules.
   *
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * The content quality analysis configuration for the router input.
   *
   * @public
   */
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterInputResponse {
  /**
   * The updated router input.
   *
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the router network interface that you want to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The updated name for the router network interface.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated configuration settings for the router network interface. Changing the type of the configuration is not supported.
   *
   * @public
   */
  Configuration?: RouterNetworkInterfaceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceResponse {
  /**
   * The updated router network interface.
   *
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to restart.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputResponse {
  /**
   * The ARN of the router output that was restarted.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router output that was restarted.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router output after the restart operation.
   *
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to start.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputResponse {
  /**
   * The Amazon Resource Name (ARN) of the router output that was started.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router output that was started.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router output after being started.
   *
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * The type of maintenance schedule associated with the router output.
   *
   * @public
   */
  MaintenanceScheduleType: MaintenanceScheduleType | undefined;

  /**
   * The details of the maintenance schedule for the router output.
   *
   * @public
   */
  MaintenanceSchedule: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to stop.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputResponse {
  /**
   * The ARN of the router output that was stopped.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the router output that was stopped.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the router output after being stopped.
   *
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to associate with a router input.
   *
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router input that you want to associate with a router output.
   *
   * @public
   */
  RouterInputArn?: string | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputResponse {
  /**
   * The state of the association between the router input and output.
   *
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * The ARN of the associated router output.
   *
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * The name of the associated router output.
   *
   * @public
   */
  RouterOutputName: string | undefined;

  /**
   * The ARN of the associated router input.
   *
   * @public
   */
  RouterInputArn?: string | undefined;

  /**
   * The name of the associated router input.
   *
   * @public
   */
  RouterInputName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The updated name for the router output.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated configuration settings for the router output. Changing the type of the configuration is not supported.
   *
   * @public
   */
  Configuration?: RouterOutputConfiguration | undefined;

  /**
   * The updated maximum bitrate for the router output.
   *
   * @public
   */
  MaximumBitrate?: number | undefined;

  /**
   * Specifies whether the router output can take inputs that are in different Regions. REGIONAL (default) - can only take inputs from same Region. GLOBAL - can take inputs from any Region.
   *
   * @public
   */
  RoutingScope?: RoutingScope | undefined;

  /**
   * The updated tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:
   *
   * - `OUTPUT_20` – 20 Mbps
   * - `OUTPUT_50` – 50 Mbps
   * - `OUTPUT_100` – 100 Mbps
   * - `OUTPUT_250` – 250 Mbps
   * - `OUTPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier?: RouterOutputTier | undefined;

  /**
   * The updated maintenance configuration settings for the router output, including any changes to preferred maintenance windows and schedules.
   *
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * The updated fabric configuration settings for the router output. You cannot update the fabric configuration while the output has an active route. You must unroute the output before updating the fabric configuration.
   *
   * @public
   */
  FabricConfiguration?: FabricConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputResponse {
  /**
   * The updated router output.
   *
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface RegisterSourceEndpointRequest {
  /**
   * The name of the Amazon Web Services Region in which to register the source endpoint. Defaults to the current region if not specified.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * A description to help you identify the source endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration settings for the source endpoint.
   *
   * @public
   */
  Configuration: SourceEndpointConfiguration | undefined;

  /**
   * The tags to apply to the source endpoint. Each tag is a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterSourceEndpointResponse {
  /**
   * The details of the source endpoint that was registered.
   *
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateSourceEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the source endpoint to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A description to help you identify the source endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated configuration settings for the source endpoint.
   *
   * @public
   */
  Configuration?: SourceEndpointConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceEndpointResponse {
  /**
   * The details of the updated source endpoint.
   *
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * @public
 */
export interface TagGlobalResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the global resource to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A map of tag keys and values to add to the global resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the MediaConnect resource to which to add tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagGlobalResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the global resource to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the global resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
