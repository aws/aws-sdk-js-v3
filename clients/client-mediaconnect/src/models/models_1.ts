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
 * <p>A filter to apply when listing destination endpoints. This is a union type, so exactly one of its members is set.</p>
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
   * <p>Filters the results to destination endpoints in the specified Amazon Web Services Regions.</p>
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    DestinationTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters the results to destination endpoints of the specified types.</p>
   * @public
   */
  export interface DestinationTypesMember {
    RegionNames?: never;
    DestinationTypes: DestinationEndpointType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters the results to destination endpoints whose names contain the specified strings.</p>
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
   * <p>The Amazon Resource Name (ARN) of the destination endpoint to disconnect.</p>
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint to disconnect.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DisconnectEndpointsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the disconnected destination endpoint.</p>
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * <p>The name of the disconnected destination endpoint.</p>
   * @public
   */
  DestinationEndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the disconnected source endpoint.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>The name of the disconnected source endpoint.</p>
   * @public
   */
  SourceEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationEndpointResponse {
  /**
   * <p>The details of the destination endpoint.</p>
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface ListDestinationEndpointsRequest {
  /**
   * <p>The maximum number of results to return in a single request. The valid range is 1 to 100. If you don't specify a value, the service returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies the next page of results to return. Use the token that a previous request returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters to apply to the list of destination endpoints.</p>
   * @public
   */
  Filters?: DestinationEndpointFilter[] | undefined;
}

/**
 * <p>A summary of a destination endpoint that the <code>ListDestinationEndpoints</code> operation returns.</p>
 * @public
 */
export interface ListedDestinationEndpoint {
  /**
   * <p>The name of the destination endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the destination endpoint.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>STANDARD</code> – A destination endpoint that represents an external destination over a standard protocol, such as RTP, RIST, or SRT.</p> </li> <li> <p> <code>ROUTER_INPUT</code> – A destination endpoint that represents a router input.</p> </li> </ul>
   * @public
   */
  DestinationType: DestinationEndpointType | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which the destination endpoint is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone in which the destination endpoint is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the destination endpoint is located.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The date and time when the destination endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the destination endpoint was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The entity that manages the lifecycle of the destination endpoint.</p>
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The number of status messages for the destination endpoint.</p>
   * @public
   */
  MessageCount: number | undefined;

  /**
   * <p>Indicates whether this account owns the destination endpoint or consumes it from another account through RAM.</p>
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * <p>The sharing state of the destination endpoint.</p>
   * @public
   */
  ResourceShareState: ResourceShareState | undefined;

  /**
   * <p>The registration state of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>REGISTERED</code> – The destination endpoint is registered and ready to use.</p> </li> <li> <p> <code>REGISTERING</code> – MediaConnect is registering the destination endpoint.</p> </li> <li> <p> <code>DEREGISTERING</code> – MediaConnect is deregistering the destination endpoint.</p> </li> <li> <p> <code>REGISTRATION_FAILED</code> – MediaConnect couldn't register the destination endpoint.</p> </li> </ul>
   * @public
   */
  RegistrationState: DestinationEndpointRegistrationState | undefined;

  /**
   * <p>The connection state of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>CONNECTED</code> – The destination endpoint is connected to a source endpoint.</p> </li> <li> <p> <code>DISCONNECTED</code> – The destination endpoint isn't connected to a source endpoint.</p> </li> <li> <p> <code>CONNECTING</code> – The destination endpoint is connecting to a source endpoint.</p> </li> <li> <p> <code>DISCONNECTING</code> – The destination endpoint is disconnecting from a source endpoint.</p> </li> </ul>
   * @public
   */
  ConnectionState: DestinationEndpointConnectionState | undefined;

  /**
   * <p>The type of decryption used for the destination endpoint connection.</p>
   * @public
   */
  DecryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint that is connected to the destination endpoint.</p>
   * @public
   */
  ConnectedSource?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that is associated with the destination endpoint.</p>
   * @public
   */
  AssociatedResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDestinationEndpointsResponse {
  /**
   * <p>The destination endpoints that match the request.</p>
   * @public
   */
  DestinationEndpoints: ListedDestinationEndpoint[] | undefined;

  /**
   * <p>The token to use in the next request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDestinationEndpointRequest {
  /**
   * <p>A description to help you identify the destination endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration settings for the destination endpoint.</p>
   * @public
   */
  Configuration: DestinationEndpointConfiguration | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which to register the destination endpoint. Defaults to the current region if not specified.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The tags to apply to the destination endpoint. Each tag is a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDestinationEndpointResponse {
  /**
   * <p>The details of the destination endpoint that was registered.</p>
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A description to help you identify the destination endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated configuration settings for the destination endpoint.</p>
   * @public
   */
  Configuration?: DestinationEndpointConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationEndpointResponse {
  /**
   * <p>The details of the updated destination endpoint.</p>
   * @public
   */
  DestinationEndpoint: DestinationEndpoint | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * <p> The list of entitlements that you want to grant.</p>
   * @public
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to grant entitlements on.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * <p> The entitlements that were just granted.</p>
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * <p> The ARN of the flow that these entitlements were granted to.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListFlows</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * <p> A list of flow summaries.</p>
   * @public
   */
  Flows?: ListedFlow[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListFlows</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the media stream that you want to remove.</p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamResponse {
  /**
   * <p> The ARN of the flow that was updated.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The name of the media stream that was removed.</p>
   * @public
   */
  MediaStreamName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove an output from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The ARN of the output that you want to remove. </p>
   * @public
   */
  OutputArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputResponse {
  /**
   * <p> The ARN of the flow that the output was removed from. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The ARN of the output that was removed. </p>
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove a source from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The ARN of the source that you want to remove.</p>
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceResponse {
  /**
   * <p> The ARN of the flow that the source was removed from. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The ARN of the source that was removed. </p>
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove a VPC interface from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the VPC interface that you want to remove.</p>
   * @public
   */
  VpcInterfaceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * <p> The ARN of the flow that is associated with the VPC interface you removed.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> IDs of network interfaces associated with the removed VPC interface that MediaConnect was unable to remove.</p>
   * @public
   */
  NonDeletedNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p> The name of the VPC interface that was removed.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the entitlement that you want to revoke.</p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> The flow that you want to revoke an entitlement from.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * <p> The ARN of the entitlement that was revoked.</p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The ARN of the flow that the entitlement was revoked from.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to start.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * <p> The ARN of the flow that you started.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The status of the flow when the <code>StartFlow</code> process begins.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to stop.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * <p> The ARN of the flow that you stopped.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The status of the flow when the <code>StopFlow</code> process begins.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * <p> Update maintenance setting for a flow.</p>
 * @public
 */
export interface UpdateMaintenance {
  /**
   * <p> A day of a week when the maintenance will happen.</p>
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * <p> A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.</p>
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * <p> UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.</p>
   * @public
   */
  MaintenanceStartHour?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The settings for source failover. </p>
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;

  /**
   * <p> The maintenance setting of the flow. </p>
   * @public
   */
  Maintenance?: UpdateMaintenance | undefined;

  /**
   * <p> The settings for source monitoring. </p>
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * <p> Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output. </p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * <p> Determines the processing capacity and feature set of the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * <p> The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases. </p>
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * <p> The updated flow. </p>
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * <p> Information about the encryption of the flow.</p>
 * @public
 */
export interface UpdateEncryption {
  /**
   * <p> The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).</p>
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * <p> A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.</p>
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * <p> The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p> The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).</p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p> The Amazon Web Services Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p> An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p> The ARN of the secret that you created in Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p> The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * <p> A description of the entitlement. This description appears only on the MediaConnect console and will not be seen by the subscriber or end user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.</p>
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the entitlement that you want to update.</p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the <code>entitlementStatus</code> field in your request, MediaConnect leaves the value unchanged.</p>
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * <p> The ARN of the flow that is associated with the entitlement that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.</p>
   * @public
   */
  Subscribers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * <p> The new configuration of the entitlement that you updated.</p>
   * @public
   */
  Entitlement?: Entitlement | undefined;

  /**
   * <p> The ARN of the flow that this entitlement was granted on.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * <p> The attributes that you want to assign to the media stream.</p>
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * <p>The sample rate for the stream. This value in measured in kHz. </p>
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * <p>A description that can help you quickly identify what your media stream is used for. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that is associated with the media stream that you updated.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The media stream that you updated.</p>
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * <p>The type of media stream. </p>
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * <p>The resolution of the video. </p>
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamResponse {
  /**
   * <p>The ARN of the flow that is associated with the media stream that you updated. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The media stream that you updated. </p>
   * @public
   */
  MediaStream?: MediaStream | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputRequest {
  /**
   * <p> The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * <p> A description of the output. This description appears only on the MediaConnect console and will not be seen by the end user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The IP address where you want to send the output.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p> The type of key used for the encryption. If no <code>keyType</code> is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.</p>
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that is associated with the output that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.</p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p> The media streams that are associated with the output, and the parameters for those associations.</p>
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * <p> The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.</p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p> The ARN of the output that you want to update.</p>
   * @public
   */
  OutputArn: string | undefined;

  /**
   * <p> The port to use when content is distributed to this output.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p> The protocol to use for the output.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p> The remote ID for the Zixi-pull stream.</p>
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The IP address that the flow communicates with to initiate connection with the sender.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p> The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.</p>
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * <p> The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this output.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * <p> An indication of whether the output should transmit data or not. If you don't specify the <code>outputStatus</code> field in your request, MediaConnect leaves the value unchanged.</p>
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * <p> A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * <p>A quality setting for the NDI Speed HQ encoder. </p>
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * <p>Indicates whether to enable or disable router integration for this flow output.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.</p>
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * <p>Controls how MediaConnect generates timecodes for NDI output frames. If you don't specify this field, MediaConnect leaves the value unchanged.</p> <ul> <li> <p> <code>EMBEDDED_TIMECODE</code> - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.</p> </li> <li> <p> <code>UTC_SYSTEM_TIME</code> - Generates timecodes based on the system clock time when each frame is sent.</p> </li> </ul>
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * <p>The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are <code>-20</code> (NDI and SMPTE) and <code>-18</code> (EBU). If you don't specify this field, MediaConnect leaves the value unchanged.</p>
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputResponse {
  /**
   * <p> The ARN of the flow that is associated with the updated output.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The new settings of the output that you updated.</p>
   * @public
   */
  Output?: Output | undefined;
}

/**
 * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
 * @public
 */
export interface UpdateGatewayBridgeSourceRequest {
  /**
   * <p> The ARN of the bridge feeding this flow.</p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this bridge source.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceRequest {
  /**
   * <p>The type of encryption that is used on the content ingested from the source. </p>
   * @public
   */
  Decryption?: UpdateEncryption | undefined;

  /**
   * <p>A description of the source. This description is not visible outside of the current Amazon Web Services account. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entitlement that allows you to subscribe to the flow. The entitlement is set by the content originator, and the ARN is generated as part of the originator's flow. </p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The ARN of the flow that you want to update. </p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p>The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088. </p>
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * <p>The maximum bitrate for RIST, RTP, and RTP-FEC streams. </p>
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * <p>The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. </p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p>The size of the buffer (in milliseconds) to use to sync incoming source data. </p>
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * <p>The media stream that is associated with the source, and the parameters for that association. </p>
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * <p>The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. </p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p>The protocol that the source uses to deliver the content to MediaConnect. </p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>The port that the flow uses to send outbound requests to initiate connection with the sender. </p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p>The IP address that the flow communicates with to initiate connection with the sender. </p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p>The ARN of the source that you want to update. </p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source IP or domain name for SRT-caller protocol. </p>
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * <p>Source port for SRT-caller protocol. </p>
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * <p>The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. </p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>The name of the VPC interface that you want to send your output to.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * <p>The range of IP addresses that are allowed to contribute content to your source. Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. </p>
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * <p>The source configuration for cloud flows receiving a stream from a bridge. </p>
   * @public
   */
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest | undefined;

  /**
   * <p> The settings for the NDI source. This includes the exact name of the upstream NDI sender that you want to connect to your source. </p>
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * <p>Indicates whether to enable or disable router integration for this flow source.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The encryption configuration for the flow source when router integration is enabled.</p>
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceResponse {
  /**
   * <p>The ARN of the flow that you updated.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The details of the sources that are assigned to the flow. </p>
   * @public
   */
  Source?: Source | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesRequest {
  /**
   * <p> Filter the list results to display only the instances associated with the selected Gateway ARN.</p>
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a ListInstances request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListInstances</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListInstances</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesResponse {
  /**
   * <p> A list of instance summaries.</p>
   * @public
   */
  Instances?: ListedGatewayInstance[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListInstances</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListInstances</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceRequest {
  /**
   * <p>The state of the instance. <code>ACTIVE</code> or <code>INACTIVE</code>. </p>
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway instance that you want to update. </p>
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceResponse {
  /**
   * <p>The state of the instance. <code>ACTIVE</code> or <code>INACTIVE</code>. </p>
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * <p>The ARN of the instance that was updated. </p>
   * @public
   */
  GatewayInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListGateways</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * <p> A list of gateway summaries.</p>
   * @public
   */
  Gateways?: ListedGateway[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListGateways</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input to retrieve information about.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterInputResponse {
  /**
   * <p>The details of the requested router input, including its configuration, state, and other attributes.</p>
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface GetRouterInputSourceMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input to retrieve metadata for.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Metadata information associated with the router input, including stream details and connection state.</p>
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
   * <p> The metadata of the transport stream in the current flow's source.</p>
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
 * <p>Detailed metadata information about a router input source.</p>
 * @public
 */
export interface RouterInputSourceMetadataDetails {
  /**
   * <p>Collection of metadata messages associated with the router input source.</p>
   * @public
   */
  SourceMetadataMessages: RouterInputMessage[] | undefined;

  /**
   * <p>The timestamp when the metadata was last updated.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>Metadata information specific to the router input configuration and state.</p>
   * @public
   */
  RouterInputMetadata?: RouterInputMetadata | undefined;
}

/**
 * @public
 */
export interface GetRouterInputSourceMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Detailed metadata information about the router input source, including connection state, timestamps, and stream configuration.</p>
   * @public
   */
  SourceMetadataDetails: RouterInputSourceMetadataDetails | undefined;
}

/**
 * @public
 */
export interface GetRouterInputThumbnailRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to see a thumbnail of.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The details of a thumbnail associated with a router input, including the thumbnail messages, the thumbnail image, the timecode, and the timestamp.</p>
 * @public
 */
export interface RouterInputThumbnailDetails {
  /**
   * <p>The messages associated with the router input thumbnail.</p>
   * @public
   */
  ThumbnailMessages: RouterInputMessage[] | undefined;

  /**
   * <p>The thumbnail image, encoded as a Base64-encoded binary data object.</p>
   * @public
   */
  Thumbnail?: Uint8Array | undefined;

  /**
   * <p>The timecode associated with the thumbnail.</p>
   * @public
   */
  Timecode?: string | undefined;

  /**
   * <p>The timestamp associated with the thumbnail.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRouterInputThumbnailResponse {
  /**
   * <p>The ARN of the router input.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The details of the thumbnail associated with the router input, including the thumbnail image, timecode, timestamp, and any associated error messages.</p>
   * @public
   */
  ThumbnailDetails: RouterInputThumbnailDetails | undefined;
}

/**
 * @public
 */
export interface GetRouterNetworkInterfaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface that you want to retrieve information about.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterNetworkInterfaceResponse {
  /**
   * <p>The details of the requested router network interface, including its configuration and other attributes.</p>
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface GetRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to retrieve information about.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRouterOutputResponse {
  /**
   * <p>The details of the requested router output, including its configuration, state, and other attributes.</p>
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface GetSourceEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetSourceEndpointResponse {
  /**
   * <p>The details of the source endpoint.</p>
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * <p>A summary of a router input, including its name, type, ARN, ID, state, and other key details. This structure is used in the response of the ListRouterInputs operation.</p>
 * @public
 */
export interface ListedRouterInput {
  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router input.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router input.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the router input.</p>
   * @public
   */
  InputType: RouterInputType | undefined;

  /**
   * <p>The overall state of the router input.</p>
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * <p>The number of router outputs that are associated with this router input.</p>
   * @public
   */
  RoutedOutputs: number | undefined;

  /**
   * <p>The Amazon Web Services Region where the router input is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone of the router input.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The maximum bitrate of the router input.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>Indicates whether the router input is configured for Regional or global routing.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The timestamp when the router input was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router input was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The number of messages associated with the router input.</p>
   * @public
   */
  MessageCount: number | undefined;

  /**
   * <p>The ARN of the network interface associated with the router input.</p>
   * @public
   */
  NetworkInterfaceArn?: string | undefined;

  /**
   * <p>The type of maintenance schedule currently associated with the listed router input.</p>
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * <p>The details of the maintenance schedule for the listed router input.</p>
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * <p>A summary of a router network interface, including its name, type, ARN, ID, associated input/output counts, state, and other key details. This structure is used in the response of the ListRouterNetworkInterfaces operation.</p>
 * @public
 */
export interface ListedRouterNetworkInterface {
  /**
   * <p>The name of the router network interface.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router network interface.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the router network interface.</p>
   * @public
   */
  NetworkInterfaceType: RouterNetworkInterfaceType | undefined;

  /**
   * <p>The number of router outputs associated with the network interface.</p>
   * @public
   */
  AssociatedOutputCount: number | undefined;

  /**
   * <p>The number of router inputs associated with the network interface.</p>
   * @public
   */
  AssociatedInputCount: number | undefined;

  /**
   * <p>The current state of the router network interface.</p>
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;

  /**
   * <p>The Amazon Web Services Region where the router network interface is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The timestamp when the network interface was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router network interface was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>A summary of a router output, including its name, type, ARN, ID, state, routed state, and other key details. This structure is used in the response of the ListRouterOutputs operation.</p>
 * @public
 */
export interface ListedRouterOutput {
  /**
   * <p>The name of the router output.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router output.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router output.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the router output.</p>
   * @public
   */
  OutputType: RouterOutputType | undefined;

  /**
   * <p>The overall state of the router output.</p>
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * <p>The current state of the association between the router output and its input.</p>
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * <p>The AAmazon Web Services Region where the router output is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone of the router output.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The maximum bitrate of the router output.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>Indicates whether the router output is configured for Regional or global routing.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The timestamp when the router output was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router output was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The number of messages associated with the router output.</p>
   * @public
   */
  MessageCount: number | undefined;

  /**
   * <p>The ARN of the router input associated with the output.</p>
   * @public
   */
  RoutedInputArn?: string | undefined;

  /**
   * <p>The ARN of the network interface associated with the router output.</p>
   * @public
   */
  NetworkInterfaceArn?: string | undefined;

  /**
   * <p>The type of maintenance schedule currently associated with the listed router output.</p>
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * <p>The details of the maintenance schedule for the listed router output.</p>
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * <p>A summary of a source endpoint that the <code>ListSourceEndpoints</code> operation returns.</p>
 * @public
 */
export interface ListedSourceEndpoint {
  /**
   * <p>The name of the source endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the source endpoint.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>STANDARD</code> – A source endpoint that represents an external source over a standard protocol, such as RTP, RIST, or SRT.</p> </li> <li> <p> <code>ROUTER_OUTPUT</code> – A source endpoint that represents a router output.</p> </li> </ul>
   * @public
   */
  SourceType: SourceEndpointType | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which the source endpoint is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone in which the source endpoint is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the source endpoint is located.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The date and time when the source endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the source endpoint was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The entity that manages the lifecycle of the source endpoint.</p>
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The number of status messages for the source endpoint.</p>
   * @public
   */
  MessageCount: number | undefined;

  /**
   * <p>Indicates whether this account owns the source endpoint or consumes it from another account through RAM.</p>
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * <p>The sharing state of the source endpoint.</p>
   * @public
   */
  ResourceShareState: ResourceShareState | undefined;

  /**
   * <p>The registration state of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>REGISTERED</code> – The source endpoint is registered and ready to use.</p> </li> <li> <p> <code>REGISTERING</code> – MediaConnect is registering the source endpoint.</p> </li> <li> <p> <code>DEREGISTERING</code> – MediaConnect is deregistering the source endpoint.</p> </li> <li> <p> <code>REGISTRATION_FAILED</code> – MediaConnect couldn't register the source endpoint.</p> </li> </ul>
   * @public
   */
  RegistrationState: SourceEndpointRegistrationState | undefined;

  /**
   * <p>The connection state of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>CONNECTED</code> – The source endpoint is connected to a destination endpoint.</p> </li> <li> <p> <code>DISCONNECTED</code> – The source endpoint isn't connected to a destination endpoint.</p> </li> <li> <p> <code>CONNECTING</code> – The source endpoint is connecting to a destination endpoint.</p> </li> <li> <p> <code>DISCONNECTING</code> – The source endpoint is disconnecting from a destination endpoint.</p> </li> </ul>
   * @public
   */
  ConnectionState: SourceEndpointConnectionState | undefined;

  /**
   * <p>The type of encryption used for the source endpoint connection.</p>
   * @public
   */
  EncryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The number of destination endpoints that are connected to the source endpoint.</p>
   * @public
   */
  ConnectedDestinationCount: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that is associated with the source endpoint.</p>
   * @public
   */
  AssociatedResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListEntitlements</code> request with set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 20 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListEntitlements</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListEntitlements</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * <p>A list of entitlements that have been granted to you from other Amazon Web Services accounts. </p>
   * @public
   */
  Entitlements?: ListedEntitlement[] | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a ListEntitlements request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the <code>ListEntitlements</code> request a second time and specify the <code>NextToken</code> value. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A list of offerings that are available to this account in the current Amazon Web Services Region.</p>
   * @public
   */
  Offerings?: Offering[] | undefined;
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListReservations</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A list of all reservations that have been purchased by this account in the current Amazon Web Services Region. </p>
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * <p>A filter that can be used to retrieve a list of router inputs.</p>
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
   * <p>The names of the router inputs to include in the filter.</p>
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
   * <p>The AWS Regions of the router inputs to include in the filter.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the network interfaces associated with the router inputs to include in the filter.</p>
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
   * <p>Filter criteria to list router inputs based on their routing scope (REGIONAL or GLOBAL).</p>
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
   * <p>The types of router inputs to include in the filter.</p>
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
   * <p>The maximum number of router inputs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters to apply when retrieving the list of router inputs.</p>
   * @public
   */
  Filters?: RouterInputFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterInputsResponse {
  /**
   * <p>The summary information for the retrieved router inputs.</p>
   * @public
   */
  RouterInputs: ListedRouterInput[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter that can be used to retrieve a list of router network interfaces.</p>
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
   * <p>The AWS Regions of the router network interfaces to include in the filter.</p>
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    NetworkInterfaceTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>The types of router network interfaces to include in the filter.</p>
   * @public
   */
  export interface NetworkInterfaceTypesMember {
    RegionNames?: never;
    NetworkInterfaceTypes: RouterNetworkInterfaceType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>The names of the router network interfaces to include in the filter.</p>
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
   * <p>The maximum number of router network interfaces to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters to apply when retrieving the list of router network interfaces.</p>
   * @public
   */
  Filters?: RouterNetworkInterfaceFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterNetworkInterfacesResponse {
  /**
   * <p>The summary information for the retrieved router network interfaces.</p>
   * @public
   */
  RouterNetworkInterfaces: ListedRouterNetworkInterface[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter that can be used to retrieve a list of router outputs.</p>
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
   * <p>The AWS Regions of the router outputs to include in the filter.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the network interfaces associated with the router outputs to include in the filter.</p>
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
   * <p>Filter criteria to list router outputs based on their routing scope.</p>
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
   * <p>The types of router outputs to include in the filter.</p>
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
   * <p>The ARNs of the router inputs associated with the router outputs to include in the filter.</p>
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
   * <p>The names of the router outputs to include in the filter.</p>
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
   * <p>The maximum number of router outputs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters to apply when retrieving the list of router outputs.</p>
   * @public
   */
  Filters?: RouterOutputFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRouterOutputsResponse {
  /**
   * <p>The summary information for the retrieved router outputs.</p>
   * @public
   */
  RouterOutputs: ListedRouterOutput[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter to apply when listing source endpoints. This is a union type, so exactly one of its members is set.</p>
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
   * <p>Filters the results to source endpoints in the specified Amazon Web Services Regions.</p>
   * @public
   */
  export interface RegionNamesMember {
    RegionNames: string[];
    SourceTypes?: never;
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters the results to source endpoints of the specified types.</p>
   * @public
   */
  export interface SourceTypesMember {
    RegionNames?: never;
    SourceTypes: SourceEndpointType[];
    NameContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters the results to source endpoints whose names contain the specified strings.</p>
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
   * <p>The maximum number of results to return in a single request. The valid range is 1 to 100. If you don't specify a value, the service returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that identifies the next page of results to return. Use the token that a previous request returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters to apply to the list of source endpoints.</p>
   * @public
   */
  Filters?: SourceEndpointFilter[] | undefined;
}

/**
 * @public
 */
export interface ListSourceEndpointsResponse {
  /**
   * <p>The source endpoints that match the request.</p>
   * @public
   */
  SourceEndpoints: ListedSourceEndpoint[] | undefined;

  /**
   * <p>The token to use in the next request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForGlobalResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the global resource whose tags you want to list.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForGlobalResourceResponse {
  /**
   * <p>A map of tag keys and values associated with the global resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource for which to list the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the offering.</p>
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * <p> The name that you want to use for the reservation.</p>
   * @public
   */
  ReservationName: string | undefined;

  /**
   * <p> The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). </p> <p>You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: <code>YYYY-MM-DDTHH:mm:SSZ</code>, where <code>T</code> and <code>Z</code> are literal characters. For example, to specify 11:30pm on March 5, 2020, enter <code>2020-03-05T23:30:00Z</code>.</p>
   * @public
   */
  Start: string | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * <p>The details of the reservation that you just created when you purchased the offering. </p>
   * @public
   */
  Reservation?: Reservation | undefined;
}

/**
 * @public
 */
export interface RestartRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to restart.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RestartRouterInputResponse {
  /**
   * <p>The ARN of the router input that was restarted.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router input that was restarted.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router input after the restart operation.</p>
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface StartRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to start.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartRouterInputResponse {
  /**
   * <p>The ARN of the router input that was started.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router input that was started.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router input after being started.</p>
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * <p>The type of maintenance schedule associated with the router input.</p>
   * @public
   */
  MaintenanceScheduleType: MaintenanceScheduleType | undefined;

  /**
   * <p>The details of the maintenance schedule for the router input.</p>
   * @public
   */
  MaintenanceSchedule: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface StopRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to stop.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopRouterInputResponse {
  /**
   * <p>The ARN of the router input that was stopped.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router input that was stopped.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router input after being stopped.</p>
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface UpdateRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated name for the router input.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated configuration settings for the router input. Changing the type of the configuration is not supported.</p>
   * @public
   */
  Configuration?: RouterInputConfiguration | undefined;

  /**
   * <p>The updated maximum bitrate for the router input.</p>
   * @public
   */
  MaximumBitrate?: number | undefined;

  /**
   * <p>Specifies whether the router input can be assigned to outputs in different Regions. REGIONAL (default) - can be assigned only to outputs in the same Region. GLOBAL - can be assigned to outputs in any Region.</p>
   * @public
   */
  RoutingScope?: RoutingScope | undefined;

  /**
   * <p>The updated tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:</p> <ul> <li> <p> <code>INPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>INPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>INPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>INPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>INPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier?: RouterInputTier | undefined;

  /**
   * <p>The updated transit encryption settings for the router input.</p>
   * @public
   */
  TransitEncryption?: RouterInputTransitEncryption | undefined;

  /**
   * <p>The updated maintenance configuration settings for the router input, including any changes to preferred maintenance windows and schedules.</p>
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * <p>The content quality analysis configuration for the router input.</p>
   * @public
   */
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterInputResponse {
  /**
   * <p>The updated router input.</p>
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated name for the router network interface.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated configuration settings for the router network interface. Changing the type of the configuration is not supported.</p>
   * @public
   */
  Configuration?: RouterNetworkInterfaceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceResponse {
  /**
   * <p>The updated router network interface.</p>
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to restart.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputResponse {
  /**
   * <p>The ARN of the router output that was restarted.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was restarted.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after the restart operation.</p>
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to start.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that was started.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was started.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after being started.</p>
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * <p>The type of maintenance schedule associated with the router output.</p>
   * @public
   */
  MaintenanceScheduleType: MaintenanceScheduleType | undefined;

  /**
   * <p>The details of the maintenance schedule for the router output.</p>
   * @public
   */
  MaintenanceSchedule: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to stop.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputResponse {
  /**
   * <p>The ARN of the router output that was stopped.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was stopped.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after being stopped.</p>
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to associate with a router input.</p>
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to associate with a router output.</p>
   * @public
   */
  RouterInputArn?: string | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputResponse {
  /**
   * <p>The state of the association between the router input and output.</p>
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * <p>The ARN of the associated router output.</p>
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * <p>The name of the associated router output.</p>
   * @public
   */
  RouterOutputName: string | undefined;

  /**
   * <p>The ARN of the associated router input.</p>
   * @public
   */
  RouterInputArn?: string | undefined;

  /**
   * <p>The name of the associated router input.</p>
   * @public
   */
  RouterInputName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated name for the router output.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated configuration settings for the router output. Changing the type of the configuration is not supported.</p>
   * @public
   */
  Configuration?: RouterOutputConfiguration | undefined;

  /**
   * <p>The updated maximum bitrate for the router output.</p>
   * @public
   */
  MaximumBitrate?: number | undefined;

  /**
   * <p>Specifies whether the router output can take inputs that are in different Regions. REGIONAL (default) - can only take inputs from same Region. GLOBAL - can take inputs from any Region.</p>
   * @public
   */
  RoutingScope?: RoutingScope | undefined;

  /**
   * <p>The updated tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:</p> <ul> <li> <p> <code>OUTPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>OUTPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>OUTPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>OUTPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>OUTPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier?: RouterOutputTier | undefined;

  /**
   * <p>The updated maintenance configuration settings for the router output, including any changes to preferred maintenance windows and schedules.</p>
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * <p>The updated fabric configuration settings for the router output. You cannot update the fabric configuration while the output has an active route. You must unroute the output before updating the fabric configuration.</p>
   * @public
   */
  FabricConfiguration?: FabricConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputResponse {
  /**
   * <p>The updated router output.</p>
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface RegisterSourceEndpointRequest {
  /**
   * <p>The name of the Amazon Web Services Region in which to register the source endpoint. Defaults to the current region if not specified.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>A description to help you identify the source endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration settings for the source endpoint.</p>
   * @public
   */
  Configuration: SourceEndpointConfiguration | undefined;

  /**
   * <p>The tags to apply to the source endpoint. Each tag is a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterSourceEndpointResponse {
  /**
   * <p>The details of the source endpoint that was registered.</p>
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateSourceEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A description to help you identify the source endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated configuration settings for the source endpoint.</p>
   * @public
   */
  Configuration?: SourceEndpointConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSourceEndpointResponse {
  /**
   * <p>The details of the updated source endpoint.</p>
   * @public
   */
  SourceEndpoint: SourceEndpoint | undefined;
}

/**
 * @public
 */
export interface TagGlobalResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the global resource to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A map of tag keys and values to add to the global resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource to which to add tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagGlobalResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the global resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the global resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you want to untag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}
