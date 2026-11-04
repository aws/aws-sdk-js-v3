// smithy-typescript generated code
import type {
  AccountAttributeName,
  AddressAttributeName,
  AggregationStatusEnum,
  ApplicationStatusCheckEnum,
  ApplicationStatusEnum,
  AsnState,
  AssociatedNetworkType,
  AssociationTypeEnum,
  AvailabilityZoneOptInStatus,
  AvailabilityZoneState,
  CallerRole,
  CapacityBlockExtensionStatus,
  CapacityBlockInterconnectStatus,
  CapacityBlockResourceState,
  CapacityManagerDataExportStatus,
  CapacityReservationBillingRequestStatus,
  CapacityReservationFleetState,
  CapacityReservationTenancy,
  ClientVpnAuthenticationType,
  ClientVpnConnectionStatusCode,
  ClientVpnDeviceTrustProviderType,
  ClientVpnEndpointAttributeStatusCode,
  ConversionTaskState,
  DeleteQueuedReservedInstancesErrorCode,
  DiskImageFormat,
  ElasticGpuState,
  ElasticGpuStatus,
  EndpointIpAddressType,
  FastLaunchResourceType,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  FleetCapacityReservationTenancy,
  FleetEventType,
  FleetInstanceMatchCriteria,
  IpamPoolCidrFailureCode,
  IpamPoolCidrState,
  LaunchTemplateErrorCode,
  MetricType,
  OutputFormat,
  PeriodType,
  PlatformValues,
  ReportState,
  Schedule,
  SnapshotReturnCodes,
  StatisticType,
  TrafficIpAddressType,
  TransportProtocol,
  VpnProtocol,
} from "./enums";
import type {
  AccountAttribute,
  AccountVpcEncryptionControl,
  Address,
  AddressAttribute,
  AddressTransfer,
  ApplicationStatusCheckResponseObject,
  AssociationStatus,
  BundleTask,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationCancellationQuote,
  CapacityReservationModificationQuote,
  ClientVpnAuthorizationRuleStatus,
  Tag,
  TransitGatewayClientVpnAttachment,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
} from "./models_0";
import type {
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipPool,
  CustomerGateway,
  DhcpOptions,
  EgressOnlyInternetGateway,
  ExportTask,
  FleetCapacityReservation,
  InstanceRequirementsRequest,
  LaunchTemplate,
  LocalGatewayRoute,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  ManagedPrefixList,
  VpcEncryptionControl,
} from "./models_1";
import type {
  GroupIdentifier,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  SecondaryNetwork,
  SecondarySubnet,
  SubnetCidrReservation,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMeteringPolicy,
  TransitGatewayMeteringPolicyEntry,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayPolicyTableEntry,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  VpcBlockPublicAccessExclusion,
} from "./models_2";

/**
 * @public
 */
export interface DeleteLaunchTemplateResult {
  /**
   * Information about the launch template.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version numbers of one or more launch template versions to delete. You can specify up to 200 launch template version numbers.
   *
   * @public
   */
  Versions: string[] | undefined;
}

/**
 * Describes a launch template version that was successfully deleted.
 *
 * @public
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version number of the launch template.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * Describes the error that's returned when you cannot delete a launch template version.
 *
 * @public
 */
export interface ResponseError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: LaunchTemplateErrorCode | undefined;

  /**
   * The error message, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a launch template version that could not be deleted.
 *
 * @public
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version number of the launch template.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * Information about the error.
   *
   * @public
   */
  ResponseError?: ResponseError | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsResult {
  /**
   * Information about the launch template versions that were successfully deleted.
   *
   * @public
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[] | undefined;

  /**
   * Information about the launch template versions that could not be deleted.
   *
   * @public
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteRequest {
  /**
   * The CIDR range for the route. This must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Use a prefix list in place of `DestinationCidrBlock`. You cannot use `DestinationPrefixListId` and `DestinationCidrBlock` in the same request.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteResult {
  /**
   * Information about the route.
   *
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableRequest {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableResult {
  /**
   * Information about the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * The ID of the local gateway route table virtual interface group association.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * Information about the association.
   *
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * The ID of the association.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * Information about the association.
   *
   * @public
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceRequest {
  /**
   * The ID of the local virtual interface to delete.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceResult {
  /**
   * Information about the deleted local gateway virtual interface.
   *
   * @public
   */
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupRequest {
  /**
   * The ID of the local gateway virtual interface group to delete.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupResult {
  /**
   * Information about the deleted local gateway virtual interface group.
   *
   * @public
   */
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup | undefined;
}

/**
 * @public
 */
export interface DeleteManagedPrefixListRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedPrefixListResult {
  /**
   * Information about the prefix list.
   *
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface DeleteNatGatewayRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNatGatewayResult {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAclRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network ACL.
   *
   * @public
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAclEntryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network ACL.
   *
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * The rule number of the entry to delete.
   *
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * Indicates whether the rule is an egress rule.
   *
   * @public
   */
  Egress: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeResult {
  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * The ID of the Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network insights analysis.
   *
   * @public
   */
  NetworkInsightsAnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * The ID of the network insights analysis.
   *
   * @public
   */
  NetworkInsightsAnalysisId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the path.
   *
   * @public
   */
  NetworkInsightsPathId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathResult {
  /**
   * The ID of the path.
   *
   * @public
   */
  NetworkInsightsPathId?: string | undefined;
}

/**
 * Contains the parameters for DeleteNetworkInterface.
 *
 * @public
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * Contains the parameters for DeleteNetworkInterfacePermission.
 *
 * @public
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * The ID of the network interface permission.
   *
   * @public
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * Specify `true` to remove the permission even if the network interface is attached to an instance.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output for DeleteNetworkInterfacePermission.
 *
 * @public
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * Is `true` if the request succeeds and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeletePlacementGroupRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The name of the placement group.
   *
   * @public
   */
  GroupName: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicIpv4PoolRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the public IPv4 pool you want to delete.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see [Local Zone availability](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicIpv4PoolResult {
  /**
   * Information about the result of deleting the public IPv4 pool.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedReservedInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the Reserved Instances.
   *
   * @public
   */
  ReservedInstancesIds: string[] | undefined;
}

/**
 * Describes the error for a Reserved Instance whose queued purchase could not be deleted.
 *
 * @public
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a Reserved Instance whose queued purchase was not deleted.
 *
 * @public
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * The error.
   *
   * @public
   */
  Error?: DeleteQueuedReservedInstancesError | undefined;

  /**
   * The ID of the Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * Describes a Reserved Instance whose queued purchase was successfully deleted.
 *
 * @public
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * The ID of the Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedReservedInstancesResult {
  /**
   * Information about the queued purchases that were successfully deleted.
   *
   * @public
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[] | undefined;

  /**
   * Information about the queued purchases that could not be deleted.
   *
   * @public
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[] | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * The ID of the prefix list for the route.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerRequest {
  /**
   * The ID of the route server to delete.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerResult {
  /**
   * Information about the deleted route server.
   *
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerEndpointRequest {
  /**
   * The ID of the route server endpoint to delete.
   *
   * @public
   */
  RouteServerEndpointId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerEndpointResult {
  /**
   * Information about the deleted route server endpoint.
   *
   * @public
   */
  RouteServerEndpoint?: RouteServerEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerPeerRequest {
  /**
   * The ID of the route server peer to delete.
   *
   * @public
   */
  RouteServerPeerId: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerPeerResult {
  /**
   * Information about the deleted route server peer.
   *
   * @public
   */
  RouteServerPeer?: RouteServerPeer | undefined;
}

/**
 * @public
 */
export interface DeleteRouteTableRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecondaryNetworkRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the secondary network.
   *
   * @public
   */
  SecondaryNetworkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecondaryNetworkResult {
  /**
   * Information about the secondary network.
   *
   * @public
   */
  SecondaryNetwork?: SecondaryNetwork | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecondarySubnetRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the secondary subnet to delete.
   *
   * @public
   */
  SecondarySubnetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecondarySubnetResult {
  /**
   * Information about the secondary subnet being deleted.
   *
   * @public
   */
  SecondarySubnet?: SecondarySubnet | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupRequest {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. You can specify either the security group name or the security group ID. For security groups in a nondefault VPC, you must specify the security group ID.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The ID of the deleted security group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * The ID of the EBS snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the parameters for DeleteSpotDatafeedSubscription.
 *
 * @public
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetRequest {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationRequest {
  /**
   * The ID of the subnet CIDR reservation.
   *
   * @public
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationResult {
  /**
   * Information about the deleted subnet CIDR reservation.
   *
   * @public
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation | undefined;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the resources, separated by spaces.
   *
   * Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.
   *
   * @public
   */
  Resources: string[] | undefined;

  /**
   * The tags to delete. Specify a tag key and an optional tag value to delete specific tags. If you specify a tag key without a tag value, we delete any tag with this key regardless of its value. If you specify a tag key with an empty string as the tag value, we delete the tag only if its value is an empty string.
   *
   * If you omit this parameter, we delete all user-defined tags for the specified resources. We do not delete Amazon Web Services-generated tags (tags that have the `aws:` prefix).
   *
   * Constraints: Up to 1000 tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRequest {
  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterResult {
  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * The ID of the Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * The ID of the deleted Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRuleId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionRequest {
  /**
   * The ID of the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionResult {
  /**
   * The ID of the deleted Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSessionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetRequest {
  /**
   * The ID of the Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetResult {
  /**
   * The ID of the deleted Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayResult {
  /**
   * Information about the deleted transit gateway.
   *
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayClientVpnAttachmentRequest {
  /**
   * The ID of the Transit Gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayClientVpnAttachmentResult {
  /**
   * Information about the Transit Gateway Client VPN attachment.
   *
   * @public
   */
  TransitGatewayClientVpnAttachment?: TransitGatewayClientVpnAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectRequest {
  /**
   * The ID of the Connect attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectResult {
  /**
   * Information about the deleted Connect attachment.
   *
   * @public
   */
  TransitGatewayConnect?: TransitGatewayConnect | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * Information about the deleted Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMeteringPolicyRequest {
  /**
   * The ID of the transit gateway metering policy to delete.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMeteringPolicyResult {
  /**
   * Information about the deleted transit gateway metering policy.
   *
   * @public
   */
  TransitGatewayMeteringPolicy?: TransitGatewayMeteringPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMeteringPolicyEntryRequest {
  /**
   * The ID of the transit gateway metering policy containing the entry to delete.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * The rule number of the metering policy entry to delete.
   *
   * @public
   */
  PolicyRuleNumber: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMeteringPolicyEntryResult {
  /**
   * Information about the deleted transit gateway metering policy entry.
   *
   * @public
   */
  TransitGatewayMeteringPolicyEntry?: TransitGatewayMeteringPolicyEntry | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * Information about the deleted transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * The ID of the transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * The transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableRequest {
  /**
   * The transit gateway policy table to delete.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * Provides details about the deleted transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableEntryRequest {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The rule number of the policy table entry to delete.
   *
   * @public
   */
  PolicyRuleNumber: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableEntryResult {
  /**
   * Describes a transit gateway policy table entry
   *
   * @public
   */
  TransitGatewayPolicyTableEntry?: TransitGatewayPolicyTableEntry | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * The ID of the route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * Information about the deleted prefix list reference.
   *
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The CIDR range for the route. This must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteResult {
  /**
   * Information about the route.
   *
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableResult {
  /**
   * Information about the deleted transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * The transit gateway route table ID that's being deleted.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * Provides details about a deleted transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * Information about the deleted VPC attachment.
   *
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointRequest {
  /**
   * The ID of the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointResult {
  /**
   * Details about the Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupRequest {
  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupResult {
  /**
   * Details about the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceResult {
  /**
   * Details about the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderRequest {
  /**
   * The ID of the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderResult {
  /**
   * Details about the Verified Access trust provider.
   *
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * The ID of the volume.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpcRequest {
  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpcBlockPublicAccessExclusionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the exclusion.
   *
   * @public
   */
  ExclusionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcBlockPublicAccessExclusionResult {
  /**
   * Details about an exclusion.
   *
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEncryptionControlRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC Encryption Control resource to delete.
   *
   * @public
   */
  VpcEncryptionControlId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEncryptionControlResult {
  /**
   * Information about the deleted VPC Encryption Control configuration.
   *
   * @public
   */
  VpcEncryptionControl?: VpcEncryptionControl | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the notifications.
   *
   * @public
   */
  ConnectionNotificationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * Information about the notifications that could not be deleted successfully.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the VPC endpoints.
   *
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsResult {
  /**
   * Information about the VPC endpoints that were not successfully deleted.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the services.
   *
   * @public
   */
  ServiceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * Information about the service configurations that were not deleted, if applicable.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpnConcentratorRequest {
  /**
   * The ID of the VPN concentrator to delete.
   *
   * @public
   */
  VpnConcentratorId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpnConcentratorResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Contains the parameters for DeleteVpnConnection.
 *
 * @public
 */
export interface DeleteVpnConnectionRequest {
  /**
   * The ID of the VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the parameters for DeleteVpnConnectionRoute.
 *
 * @public
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * The CIDR block associated with the local subnet of the customer network.
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * The ID of the VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;
}

/**
 * Contains the parameters for DeleteVpnGateway.
 *
 * @public
 */
export interface DeleteVpnGatewayRequest {
  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  VpnGatewayId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * The address range, in CIDR notation. The prefix must be the same prefix that you specified when you provisioned the address range.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeprovisionByoipCidrResult {
  /**
   * Information about the address range.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IPAM ID.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * An ASN.
   *
   * @public
   */
  Asn: string | undefined;
}

/**
 * The Autonomous System Number (ASN) and BYOIP CIDR association.
 *
 * @public
 */
export interface Byoasn {
  /**
   * A public 2-byte or 4-byte ASN.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * An IPAM ID.
   *
   * @public
   */
  IpamId?: string | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The provisioning state of the BYOASN.
   *
   * @public
   */
  State?: AsnState | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnResult {
  /**
   * An ASN and BYOIP CIDR association.
   *
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the pool that has the CIDR you want to deprovision.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The CIDR which you want to deprovision from the pool.
   *
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * Details related to why an IPAM pool CIDR failed to be provisioned.
 *
 * @public
 */
export interface IpamPoolCidrFailureReason {
  /**
   * An error code related to why an IPAM pool CIDR failed to be provisioned.
   *
   * @public
   */
  Code?: IpamPoolCidrFailureCode | undefined;

  /**
   * A message related to why an IPAM pool CIDR failed to be provisioned.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A CIDR provisioned to an IPAM pool.
 *
 * @public
 */
export interface IpamPoolCidr {
  /**
   * The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is `10.24.34.0/23`. An IPv6 CIDR example is `2001:DB8::/32`.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The state of the CIDR.
   *
   * @public
   */
  State?: IpamPoolCidrState | undefined;

  /**
   * Details related to why an IPAM pool CIDR failed to be provisioned.
   *
   * @public
   */
  FailureReason?: IpamPoolCidrFailureReason | undefined;

  /**
   * The IPAM pool CIDR ID.
   *
   * @public
   */
  IpamPoolCidrId?: string | undefined;

  /**
   * The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.
   *
   * @public
   */
  NetmaskLength?: number | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrResult {
  /**
   * The deprovisioned pool CIDR.
   *
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the pool that you want to deprovision the CIDR from.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The CIDR you want to deprovision from the pool.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * The ID of the pool that you deprovisioned the CIDR from.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The deprovisioned CIDRs.
   *
   * @public
   */
  DeprovisionedAddresses?: string[] | undefined;
}

/**
 * Contains the parameters for DeregisterImage.
 *
 * @public
 */
export interface DeregisterImageRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Specifies whether to delete the snapshots associated with the AMI during deregistration.
   *
   * > **Note:** If a snapshot is associated with multiple AMIs, it is not deleted, regardless of this setting.
   *
   * Default: The snapshots are not deleted.
   *
   * @public
   */
  DeleteAssociatedSnapshots?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The snapshot ID and its deletion result code.
 *
 * @public
 */
export interface DeleteSnapshotReturnCode {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The result code from the snapshot deletion attempt. Possible values:
   *
   * - `success` - The snapshot was successfully deleted.
   * - `skipped` - The snapshot was not deleted because it's associated with other AMIs.
   * - `missing-permissions` - The snapshot was not deleted because the role lacks `DeleteSnapshot` permissions. For more information, see [How Amazon EBS works with IAM](https://docs.aws.amazon.com/ebs/latest/userguide/security_iam_service-with-iam.html).
   * - `internal-error` - The snapshot was not deleted due to a server error.
   * - `client-error` - The snapshot was not deleted due to a client configuration error.
   *
   * For details about an error, check the `DeleteSnapshot` event in the CloudTrail event history. For more information, see [View event history](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/tutorial-event-history.html) in the *Amazon Web Services CloudTrail User Guide*.
   *
   * @public
   */
  ReturnCode?: SnapshotReturnCodes | undefined;
}

/**
 * @public
 */
export interface DeregisterImageResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The deletion result for each snapshot associated with the AMI, including the snapshot ID and its success or error code.
   *
   * @public
   */
  DeleteSnapshotResults?: DeleteSnapshotReturnCode[] | undefined;
}

/**
 * Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either `IncludeAllTagsOfInstance` or `InstanceTagKeys` in the request
 *
 * @public
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * Indicates whether to deregister all tag keys in the current Region. Specify `false` to deregister all tag keys.
   *
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * Information about the tag keys to deregister.
   *
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Information about the tag keys to deregister.
   *
   * @public
   */
  InstanceTagAttribute: DeregisterInstanceTagAttributeRequest | undefined;
}

/**
 * Describes the registered tag keys for the current Region.
 *
 * @public
 */
export interface InstanceTagNotificationAttribute {
  /**
   * The registered tag keys.
   *
   * @public
   */
  InstanceTagKeys?: string[] | undefined;

  /**
   * Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications. `true` indicates that all tag keys in the current Region are registered.
   *
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * The resulting set of tag keys.
   *
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * The IDs of the group members' network interfaces.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the deregistered transit gateway multicast group members.
 *
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The network interface IDs of the deregistered members.
   *
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * Information about the deregistered members.
   *
   * @public
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * The IDs of the group sources' network interfaces.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the deregistered transit gateway multicast group sources.
 *
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The network interface IDs of the non-registered members.
   *
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * Information about the deregistered group sources.
   *
   * @public
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The account attribute names.
   *
   * @public
   */
  AttributeNames?: AccountAttributeName[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * Information about the account attributes.
   *
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountVpcEncryptionControlRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAccountVpcEncryptionControlResult {
  /**
   * Information about the account-level VPC Encryption Control configuration.
   *
   * @public
   */
  AccountVpcEncryptionControl?: AccountVpcEncryptionControl | undefined;
}

/**
 * A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
 *
 * If you specify multiple filters, the filters are joined with an `AND`, and the request returns only results that match all of the specified filters.
 *
 * For more information, see [List and filter using the CLI and API](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Filtering.html#Filtering_Resources_CLI) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an `OR`, and the request returns all results that match any of the specified values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * One or more Elastic IP addresses.
   *
   * Default: Describes all your Elastic IP addresses.
   *
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `allocation-id` - The allocation ID for the address.
   * - `association-id` - The association ID for the address.
   * - `instance-id` - The ID of the instance the address is associated with, if any.
   * - `network-border-group` - A unique set of Availability Zones, Local Zones, or Wavelength Zones from where Amazon Web Services advertises IP addresses.
   * - `network-interface-id` - The ID of the network interface that the address is associated with, if any.
   * - `network-interface-owner-id` - The Amazon Web Services account ID of the owner.
   * - `private-ip-address` - The private IP address associated with the Elastic IP address.
   * - `public-ip` - The Elastic IP address, or the carrier IP address.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Information about the allocation IDs.
   *
   * @public
   */
  AllocationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * Information about the Elastic IP addresses.
   *
   * @public
   */
  Addresses?: Address[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesAttributeRequest {
  /**
   * [EC2-VPC] The allocation IDs.
   *
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * The attribute of the IP address.
   *
   * @public
   */
  Attribute?: AddressAttributeName | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesAttributeResult {
  /**
   * Information about the IP addresses.
   *
   * @public
   */
  Addresses?: AddressAttribute[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressTransfersRequest {
  /**
   * The allocation IDs of Elastic IP addresses.
   *
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of address transfers to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAddressTransfersResult {
  /**
   * The Elastic IP address transfer.
   *
   * @public
   */
  AddressTransfers?: AddressTransfer[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the ID format for a resource.
 *
 * @public
 */
export interface IdFormat {
  /**
   * The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.
   *
   * @public
   */
  Deadline?: Date | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * Indicates whether longer IDs (17-character IDs) are enabled for the resource.
   *
   * @public
   */
  UseLongIds?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatResult {
  /**
   * Indicates whether all resource types in the Region are configured to use longer IDs. This value is only `true` if all users are configured to use longer IDs for all resources types in the Region.
   *
   * @public
   */
  UseLongIdsAggregated?: boolean | undefined;

  /**
   * Information about each resource's ID format.
   *
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusRequest {
  /**
   * The IDs of the instances for which to describe application status.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `availability-zone-id` – The ID of the Availability Zone.
   * - `status` – The instance-level application status. For valid values and their meanings, see `ApplicationStatus`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the reason for an application status check result.
 *
 * @public
 */
export interface ApplicationStatusReason {
  /**
   * The reason code for the application status check result. Possible values:
   *
   * - `ResponseCodeMatched` – The HTTP status code returned by the health check matched the configured `StatusCodeMatcher`.
   * - `ResponseCodeMismatch` – The HTTP status code returned by the health check did not match the configured `StatusCodeMatcher`.
   * - `ConnectionTimeout` – The connection to the target timed out.
   * - `ResponseTimeout` – The health check timed out while waiting for a response from the target.
   * - `ConnectionRefused` – The target refused the health check connection.
   * - `ConnectionReset` – The target reset the health check connection before returning a response.
   *
   * Current health check results use the values in the preceding list. Legacy results that do not contain structured reason metadata can instead contain a producer error type, such as `Http Status Code` or `HttpConnectTimeoutException`.
   *
   * For `ResponseCodeMatched` and `ResponseCodeMismatch`, the `statusCode` field contains the returned HTTP status code. The `protocol` field contains the protocol used for the health check.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The HTTP status code returned by the health check.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * The protocol used for the health check. Possible values: `HTTP` and `HTTPS`.
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * Describes the details of an application status check for an instance.
 *
 * @public
 */
export interface ApplicationStatusDetail {
  /**
   * The ID of the application status check.
   *
   * @public
   */
  ApplicationStatusCheckId?: string | undefined;

  /**
   * The date and time when the check was last updated.
   *
   * @public
   */
  CheckUpdateTime?: Date | undefined;

  /**
   * The aggregation setting for the application status check. When set to `included`, the result of this check contributes to the instance-level application status. When set to `excluded`, the check runs independently and does not affect the instance-level status.
   *
   * @public
   */
  Aggregation?: AggregationStatusEnum | undefined;

  /**
   * The status of the individual application status check. Possible values:
   *
   * - `passed` – The check reached its success threshold.
   * - `failed` – The check reached its failure threshold.
   * - `initializing` – The check is initializing or has not reached a success or failure threshold.
   * - `insufficient-data` – The check does not have enough data to determine a result.
   * - `not-applicable` – The check does not apply to the instance.
   *
   * This value reflects the check result and is not affected by aggregation or suppression.
   *
   * @public
   */
  Status?: ApplicationStatusCheckEnum | undefined;

  /**
   * The date and time of the last status update for this check.
   *
   * @public
   */
  StatusTimeStamp?: Date | undefined;

  /**
   * The date and time when the current status started for this check.
   *
   * @public
   */
  StatusSince?: Date | undefined;

  /**
   * The reason for the current status.
   *
   * @public
   */
  Reason?: ApplicationStatusReason | undefined;
}

/**
 * Describes the application-level health status for an instance.
 *
 * @public
 */
export interface ApplicationStatus {
  /**
   * The current instance-level application status. This status is derived from application status checks with `Aggregation` set to `included`. Possible values:
   *
   * - `ok` – All included checks passed.
   * - `impaired` – At least one included check failed.
   * - `initializing` – At least one included check is initializing, and no included check is impaired.
   * - `insufficient-data` – At least one included check has insufficient data, and no included check is impaired or initializing.
   * - `not-applicable` – No checks with `Aggregation` set to `included` apply to the instance.
   * - `suppressed` – Application status reporting is suppressed for the instance.
   *
   * Checks with `Aggregation` set to `excluded` do not affect this value.
   *
   * @public
   */
  Status?: ApplicationStatusEnum | undefined;

  /**
   * The date and time of the last status update.
   *
   * @public
   */
  StatusTimeStamp?: Date | undefined;

  /**
   * The date and time when the current status started.
   *
   * @public
   */
  StatusSince?: Date | undefined;

  /**
   * The date and time when application status reporting resumes after suppression.
   *
   * @public
   */
  ResumeAt?: Date | undefined;

  /**
   * Details about the application status checks for the instance.
   *
   * @public
   */
  Details?: ApplicationStatusDetail[] | undefined;
}

/**
 * Describes the application status for an instance.
 *
 * @public
 */
export interface InstanceApplicationStatus {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The Availability Zone of the instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone of the instance.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The application status for the instance.
   *
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * The tags assigned to the instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the application statuses for instances.
 *
 * @public
 */
export interface ApplicationStatusesResponseType {
  /**
   * The application status information for the instances.
   *
   * @public
   */
  Instances?: InstanceApplicationStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusResult {
  /**
   * The application statuses for the specified instances.
   *
   * @public
   */
  ApplicationStatuses?: ApplicationStatusesResponseType | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusCheckAssociationsRequest {
  /**
   * The IDs of the application status checks for which to describe associations.
   *
   * @public
   */
  ApplicationStatusCheckIds?: string[] | undefined;

  /**
   * The filters to use to limit the results.
   *
   * - `association-type` – The type of association. Valid values: `tag` and `instance-id`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about an application status check association. Each item in the `associationSet` of a `DescribeApplicationStatusCheckAssociations` response is of this type.
 *
 * @public
 */
export interface ApplicationStatusCheckAssociationObject {
  /**
   * The ID of the application status check.
   *
   * @public
   */
  ApplicationStatusCheckId?: string | undefined;

  /**
   * The type of target that the application status check is associated with. Possible values:
   *
   * - `tag` – The check applies to current and future instances with a matching tag key-value pair.
   * - `instance-id` – The check applies to a specific instance.
   *
   * @public
   */
  AssociationType?: AssociationTypeEnum | undefined;

  /**
   * The key for the association. This value is present only for tag-based associations, where it contains the tag key. For instance-based associations, this value is absent.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the association target. For tag-based associations, this is the tag value. For instance-based associations, this is the instance ID (for example, `i-0123456789abcdef0`).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusCheckAssociationsResult {
  /**
   * The associations for the specified application status checks.
   *
   * @public
   */
  Associations?: ApplicationStatusCheckAssociationObject[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The tags associated with the application status checks.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusChecksRequest {
  /**
   * The IDs of the application status checks to describe.
   *
   * @public
   */
  ApplicationStatusCheckIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `aggregation` – The aggregation setting. Valid values: `included` and `excluded`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies whether to include recently deleted application status checks that remain available during the deletion grace period. If you omit this parameter or set it to `false`, the response includes only active checks.
   *
   * @public
   */
  IncludeAll?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStatusChecksResult {
  /**
   * Information about the application status checks.
   *
   * @public
   */
  ApplicationStatusChecks?: ApplicationStatusCheckResponseObject[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesRequest {
  /**
   * The names of the Availability Zones, Local Zones, and Wavelength Zones.
   *
   * @public
   */
  ZoneNames?: string[] | undefined;

  /**
   * The IDs of the Availability Zones, Local Zones, and Wavelength Zones.
   *
   * @public
   */
  ZoneIds?: string[] | undefined;

  /**
   * Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your opt-in status.
   *
   * If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.
   *
   * @public
   */
  AllAvailabilityZones?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `group-long-name` - The long name of the zone group for the Availability Zone (for example, `US West (Oregon) 1`), the Local Zone (for example, for Zone group `us-west-2-lax-1`, it is `US West (Los Angeles)`, or the Wavelength Zone (for example, for Zone group `us-east-1-wl1`, it is `US East (Verizon)`.
   * - `group-name` - The name of the zone group for the Availability Zone (for example, `us-east-1-zg-1`), the Local Zone (for example, `us-west-2-lax-1`), or the Wavelength Zone (for example, `us-east-1-wl1`).
   * - `message` - The Zone message.
   * - `opt-in-status` - The opt-in status (`opted-in` | `not-opted-in` | `opt-in-not-required`).
   * - `parent-zone-id` - The ID of the zone that handles some of the Local Zone and Wavelength Zone control plane operations, such as API calls.
   * - `parent-zone-name` - The ID of the zone that handles some of the Local Zone and Wavelength Zone control plane operations, such as API calls.
   * - `region-name` - The name of the Region for the Zone (for example, `us-east-1`).
   * - `state` - The state of the Availability Zone, the Local Zone, or the Wavelength Zone (`available` | `unavailable` | `constrained`).
   * - `zone-id` - The ID of the Availability Zone (for example, `use1-az1`), the Local Zone (for example, `usw2-lax1-az1`), or the Wavelength Zone (for example, `us-east-1-wl1-bos-wlz-1`).
   * - `zone-name` - The name of the Availability Zone (for example, `us-east-1a`), the Local Zone (for example, `us-west-2-lax-1a`), or the Wavelength Zone (for example, `us-east-1-wl1-bos-wlz-1`).
   * - `zone-type` - The type of zone (`availability-zone` | `local-zone` | `wavelength-zone`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes the geography information for an Availability Zone or Local Zone.
 *
 * @public
 */
export interface AvailabilityZoneGeography {
  /**
   * The name of the geography, for example, `United States of America`.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.
 *
 * @public
 */
export interface AvailabilityZoneMessage {
  /**
   * The message about the Availability Zone, Local Zone, or Wavelength Zone.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes the sub-geography information for an Availability Zone or Local Zone.
 *
 * @public
 */
export interface AvailabilityZoneSubGeography {
  /**
   * The name of the sub-geography, for example, `Oregon.`
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes Availability Zones, Local Zones, and Wavelength Zones.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * For Availability Zones, this parameter always has the value of `opt-in-not-required`.
   *
   * For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible values are `opted-in` and `not-opted-in`.
   *
   * @public
   */
  OptInStatus?: AvailabilityZoneOptInStatus | undefined;

  /**
   * Any messages about the Availability Zone, Local Zone, or Wavelength Zone.
   *
   * @public
   */
  Messages?: AvailabilityZoneMessage[] | undefined;

  /**
   * The name of the Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The name of the Availability Zone, Local Zone, or Wavelength Zone.
   *
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * The ID of the Availability Zone, Local Zone, or Wavelength Zone.
   *
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * The name of the zone group. For example:
   *
   * - Availability Zones - `us-east-1-zg-1`
   * - Local Zones - `us-west-2-lax-1`
   * - Wavelength Zones - `us-east-1-wl1-bos-wlz-1`
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name of the network border group.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * The type of zone.
   *
   * Valid values: `availability-zone` | `local-zone` | `wavelength-zone`
   *
   * @public
   */
  ZoneType?: string | undefined;

  /**
   * The name of the zone that handles some of the Local Zone or Wavelength Zone control plane operations, such as API calls.
   *
   * @public
   */
  ParentZoneName?: string | undefined;

  /**
   * The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane operations, such as API calls.
   *
   * @public
   */
  ParentZoneId?: string | undefined;

  /**
   * The long name of the Availability Zone group, Local Zone group, or Wavelength Zone group.
   *
   * @public
   */
  GroupLongName?: string | undefined;

  /**
   * The geography information for the Availability Zone or Local Zone. The geography is returned as a list.
   *
   * @public
   */
  Geography?: AvailabilityZoneGeography[] | undefined;

  /**
   * The sub-geography information for the Availability Zone or Local Zone. The sub-geography is returned as a list.
   *
   * @public
   */
  SubGeography?: AvailabilityZoneSubGeography[] | undefined;

  /**
   * The state of the Availability Zone, Local Zone, or Wavelength Zone. The possible values are `available`, `unavailable`, and `constrained`.
   *
   * @public
   */
  State?: AvailabilityZoneState | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesResult {
  /**
   * Information about the Availability Zones, Local Zones, and Wavelength Zones.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an Infrastructure Performance subscription.
 *
 * @public
 */
export interface Subscription {
  /**
   * The Region or Availability Zone that's the source for the subscription. For example, `us-east-1`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The Region or Availability Zone that's the target for the subscription. For example, `eu-west-1`.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The metric used for the subscription.
   *
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * The statistic used for the subscription.
   *
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * The data aggregation time for the subscription.
   *
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Describes the current Infrastructure Performance subscriptions.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksRequest {
  /**
   * The bundle task IDs.
   *
   * Default: Describes all your bundle tasks.
   *
   * @public
   */
  BundleIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `bundle-id` - The ID of the bundle task.
   * - `error-code` - If the task failed, the error code returned.
   * - `error-message` - If the task failed, the error message returned.
   * - `instance-id` - The ID of the instance.
   * - `progress` - The level of task completion, as a percentage (for example, 20%).
   * - `s3-bucket` - The Amazon S3 bucket to store the AMI.
   * - `s3-prefix` - The beginning of the AMI name.
   * - `start-time` - The time the task started (for example, 2013-09-15T17:15:20.000Z).
   * - `state` - The state of the task (`pending` | `waiting-for-shutdown` | `bundling` | `storing` | `cancelling` | `complete` | `failed`).
   * - `update-time` - The time of the most recent update for the task.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksResult {
  /**
   * Information about the bundle tasks.
   *
   * @public
   */
  BundleTasks?: BundleTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsResult {
  /**
   * Information about your address ranges.
   *
   * @public
   */
  ByoipCidrs?: ByoipCidr[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryRequest {
  /**
   * The IDs of Capacity Block reservations that you want to display the history for.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters
   *
   * - `availability-zone` - The Availability Zone of the extension.
   * - `availability-zone-id` - The Availability Zone ID of the extension.
   * - `capacity-block-extension-offering-id` - The ID of the extension offering.
   * - `capacity-block-extension-status` - The status of the extension (`payment-pending` | `payment-failed` | `payment-succeeded`).
   * - `capacity-reservation-id` - The reservation ID of the extension.
   * - `instance-type` - The instance type of the extension.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a Capacity Block extension. With an extension, you can extend the duration of time for an existing Capacity Block.
 *
 * @public
 */
export interface CapacityBlockExtension {
  /**
   * The reservation ID of the Capacity Block extension.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The instance type of the Capacity Block extension.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of instances in the Capacity Block extension.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Availability Zone of the Capacity Block extension.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the Capacity Block extension.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The ID of the Capacity Block extension offering.
   *
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * The duration of the Capacity Block extension in hours.
   *
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * The status of the Capacity Block extension. A Capacity Block extension can have one of the following statuses:
   *
   * - `payment-pending` - The Capacity Block extension payment is processing. If your payment can't be processed within 12 hours, the Capacity Block extension is failed.
   * - `payment-failed` - Payment for the Capacity Block extension request was not successful.
   * - `payment-succeeded` - Payment for the Capacity Block extension request was successful. You receive an invoice that reflects the one-time upfront payment. In the invoice, you can associate the paid amount with the Capacity Block reservation ID.
   *
   * @public
   */
  CapacityBlockExtensionStatus?: CapacityBlockExtensionStatus | undefined;

  /**
   * The date when the Capacity Block extension was purchased.
   *
   * @public
   */
  CapacityBlockExtensionPurchaseDate?: Date | undefined;

  /**
   * The start date of the Capacity Block extension.
   *
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * The end date of the Capacity Block extension.
   *
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * The total price to be paid up front.
   *
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * The currency of the payment for the Capacity Block extension.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The type of zone where the Capacity Block extension is located.
   *
   * @public
   */
  ZoneType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryResult {
  /**
   * Describes one or more of your Capacity Block extensions. The results describe only the Capacity Block extensions in the Amazon Web Services Region that you're currently using.
   *
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The duration of the Capacity Block extension offering in hours.
   *
   * @public
   */
  CapacityBlockExtensionDurationHours: number | undefined;

  /**
   * The ID of the Capacity reservation to be extended.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The recommended Capacity Block extension that fits your search requirements.
 *
 * @public
 */
export interface CapacityBlockExtensionOffering {
  /**
   * The ID of the Capacity Block extension offering.
   *
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * The instance type of the Capacity Block that will be extended.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of instances in the Capacity Block extension offering.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Availability Zone of the Capacity Block that will be extended.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the Capacity Block that will be extended.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The start date of the Capacity Block that will be extended.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time at which the Capacity Block extension will start. This date is also the same as the end date of the Capacity Block that will be extended.
   *
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * The date and time at which the Capacity Block extension expires. When a Capacity Block expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Block's state changes to `expired` when it reaches its end date
   *
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * The amount of time of the Capacity Block extension offering in hours.
   *
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * The total price of the Capacity Block extension offering, to be paid up front.
   *
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * The currency of the payment for the Capacity Block extension offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Indicates the tenancy of the Capacity Block extension offering. A Capacity Block can have one of the following tenancy settings:
   *
   * - `default` - The Capacity Block is created on hardware that is shared with other Amazon Web Services accounts.
   * - `dedicated` - The Capacity Block is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   *
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * The type of zone where the Capacity Block extension offering is available.
   *
   * @public
   */
  ZoneType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsResult {
  /**
   * The recommended Capacity Block extension offerings for the dates specified.
   *
   * @public
   */
  CapacityBlockExtensionOfferings?: CapacityBlockExtensionOffering[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The type of instance for which the Capacity Block offering reserves capacity.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of instances for which to reserve capacity. Each Capacity Block can have up to 64 instances, and you can have up to 256 instances across Capacity Blocks.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The earliest start date for the Capacity Block offering.
   *
   * @public
   */
  StartDateRange?: Date | undefined;

  /**
   * The latest end date for the Capacity Block offering.
   *
   * @public
   */
  EndDateRange?: Date | undefined;

  /**
   * The reservation duration for the Capacity Block, in hours. You must specify the duration in 1-day increments up 14 days, and in 7-day increments up to 182 days.
   *
   * @public
   */
  CapacityDurationHours: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The EC2 UltraServer type of the Capacity Block offerings.
   *
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * The number of EC2 UltraServers in the offerings.
   *
   * @public
   */
  UltraserverCount?: number | undefined;

  /**
   * Include all Availability Zones and Local Zones, regardless of your opt-in status. If you do not use this parameter, the results include available offerings from all Availability Zones in the Amazon Web Services Region and Local Zones you are opted into.
   *
   * @public
   */
  AllAvailabilityZones?: boolean | undefined;
}

/**
 * The recommended Capacity Block that fits your search requirements.
 *
 * @public
 */
export interface CapacityBlockOffering {
  /**
   * The ID of the Capacity Block offering.
   *
   * @public
   */
  CapacityBlockOfferingId?: string | undefined;

  /**
   * The instance type of the Capacity Block offering.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Availability Zone of the Capacity Block offering.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of instances in the Capacity Block offering.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The start date of the Capacity Block offering.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The end date of the Capacity Block offering.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The number of hours (in addition to `capacityBlockDurationMinutes`) for the duration of the Capacity Block reservation. For example, if a Capacity Block starts at **04:55** and ends at **11:30**, the hours field would be **6**.
   *
   * @public
   */
  CapacityBlockDurationHours?: number | undefined;

  /**
   * The total price to be paid up front.
   *
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * The currency of the payment for the Capacity Block.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The tenancy of the Capacity Block.
   *
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * The EC2 UltraServer type of the Capacity Block offering.
   *
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * The number of EC2 UltraServers in the offering.
   *
   * @public
   */
  UltraserverCount?: number | undefined;

  /**
   * The number of minutes (in addition to `capacityBlockDurationHours`) for the duration of the Capacity Block reservation. For example, if a Capacity Block starts at **08:55** and ends at **11:30**, the minutes field would be **35**.
   *
   * @public
   */
  CapacityBlockDurationMinutes?: number | undefined;

  /**
   * The type of zone where the Capacity Block offering is available.
   *
   * @public
   */
  ZoneType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsResult {
  /**
   * The recommended Capacity Block offering for the dates specified.
   *
   * @public
   */
  CapacityBlockOfferings?: CapacityBlockOffering[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksRequest {
  /**
   * The IDs of the Capacity Blocks.
   *
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `capacity-block-id` - The ID of the Capacity Block.
   * - `ultraserver-type` - The Capacity Block type. The type can be `instances` or `ultraservers`.
   * - `availability-zone` - The Availability Zone of the Capacity Block.
   * - `start-date` - The date and time at which the Capacity Block was started.
   * - `end-date` - The date and time at which the Capacity Block expires. When a Capacity Block expires, all instances in the Capacity Block are terminated.
   * - `create-date` - The date and time at which the Capacity Block was created.
   * - `state` - The state of the Capacity Block (`active` | `expired` | `unavailable` | `cancelled` | `failed` | `scheduled` | `payment-pending` | `payment-failed`).
   * - `tags` - The tags assigned to the Capacity Block.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Reserve powerful GPU instances on a future date to support your short duration machine learning (ML) workloads. Instances that run inside a Capacity Block are automatically placed close together inside [Amazon EC2 UltraClusters](http://aws.amazon.com/ec2/ultraclusters/), for low-latency, petabit-scale, non-blocking networking.
 *
 * You can also reserve Amazon EC2 UltraServers. UltraServers connect multiple EC2 instances using a low-latency, high-bandwidth accelerator interconnect (NeuronLink). They are built to tackle very large-scale AI/ML workloads that require significant processing power. For more information, see Amazon EC2 UltraServers.
 *
 * @public
 */
export interface CapacityBlock {
  /**
   * The ID of the Capacity Block.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * The EC2 UltraServer type of the Capacity Block.
   *
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * The Availability Zone of the Capacity Block.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the Capacity Block.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The date and time at which the Capacity Block was started.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time at which the Capacity Block expires. When a Capacity Block expires, all instances in the Capacity Block are terminated.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The date and time at which the Capacity Block was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The state of the Capacity Block.
   *
   * @public
   */
  State?: CapacityBlockResourceState | undefined;

  /**
   * The tags assigned to the Capacity Block.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksResult {
  /**
   * The Capacity Blocks.
   *
   * @public
   */
  CapacityBlocks?: CapacityBlock[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusRequest {
  /**
   * The ID of the Capacity Block.
   *
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `interconnect-status` - The status of the interconnect for the Capacity Block (`ok` | `impaired` | `insufficient-data`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the availability of capacity for a Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationStatus {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The combined amount of `Available` and `Unavailable` capacity in the Capacity Reservation.
   *
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * The remaining capacity. Indicates the amount of resources that can be launched into the Capacity Reservation.
   *
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * The used capacity. Indicates that the capacity is in use by resources that are running in the Capacity Reservation.
   *
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;
}

/**
 * Describes the availability of capacity for a Capacity Block.
 *
 * @public
 */
export interface CapacityBlockStatus {
  /**
   * The ID of the Capacity Block.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * The status of the high-bandwidth accelerator interconnect. Possible states include:
   *
   * - `ok` the accelerator interconnect is healthy.
   * - `impaired` - accelerator interconnect communication is impaired.
   * - `insufficient-data` - insufficient data to determine accelerator interconnect status.
   *
   * @public
   */
  InterconnectStatus?: CapacityBlockInterconnectStatus | undefined;

  /**
   * The combined amount of `Available` and `Unavailable` capacity in the Capacity Block.
   *
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * The remaining capacity. Indicates the number of resources that can be launched into the Capacity Block.
   *
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * The unavailable capacity. Indicates the instance capacity that is unavailable for use due to a system status check failure.
   *
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;

  /**
   * The availability of capacity for the Capacity Block reservations.
   *
   * @public
   */
  CapacityReservationStatuses?: CapacityReservationStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusResult {
  /**
   * The availability of capacity for a Capacity Block.
   *
   * @public
   */
  CapacityBlockStatuses?: CapacityBlockStatus[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityManagerDataExportsRequest {
  /**
   * The IDs of the data export configurations to describe. If not specified, all export configurations are returned.
   *
   * @public
   */
  CapacityManagerDataExportIds?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call. If not specified, up to 1000 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters to narrow the results. Supported filters include export status, creation date, and S3 bucket name.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains information about a Capacity Manager data export configuration, including export settings, delivery status, and recent export activity.
 *
 * @public
 */
export interface CapacityManagerDataExportResponse {
  /**
   * The unique identifier for the data export configuration.
   *
   * @public
   */
  CapacityManagerDataExportId?: string | undefined;

  /**
   * The name of the S3 bucket where export files are delivered.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The S3 key prefix used for organizing export files within the bucket.
   *
   * @public
   */
  S3BucketPrefix?: string | undefined;

  /**
   * The frequency at which data exports are generated.
   *
   * @public
   */
  Schedule?: Schedule | undefined;

  /**
   * The file format of the exported data.
   *
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * The timestamp when the data export configuration was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The status of the most recent export delivery.
   *
   * @public
   */
  LatestDeliveryStatus?: CapacityManagerDataExportStatus | undefined;

  /**
   * A message describing the status of the most recent export delivery, including any error details if the delivery failed.
   *
   * @public
   */
  LatestDeliveryStatusMessage?: string | undefined;

  /**
   * The S3 URI of the most recently delivered export file.
   *
   * @public
   */
  LatestDeliveryS3LocationUri?: string | undefined;

  /**
   * The timestamp when the most recent export was delivered to S3.
   *
   * @public
   */
  LatestDeliveryTime?: Date | undefined;

  /**
   * The tags associated with the data export configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityManagerDataExportsResult {
  /**
   * Information about the data export configurations, including export settings, delivery status, and recent activity.
   *
   * @public
   */
  CapacityManagerDataExports?: CapacityManagerDataExportResponse[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * Specify one of the following:
   *
   * - `odcr-owner` - If you are the Capacity Reservation owner, specify this value to view requests that you have initiated. Not supported with the `requested-by` filter.
   * - `unused-reservation-billing-owner` - If you are the consumer account, specify this value to view requests that have been sent to you. Not supported with the `unused-reservation-billing-owner` filter.
   *
   * @public
   */
  Role: CallerRole | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `status` - The state of the request (`pending` | `accepted` | `rejected` | `cancelled` | `revoked` | `expired`).
   * - `requested-by` - The account ID of the Capacity Reservation owner that initiated the request. Not supported if you specify `requested-by` for **Role**.
   * - `unused-reservation-billing-owner` - The ID of the consumer account to which the request was sent. Not supported if you specify `unused-reservation-billing-owner` for **Role**.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationInfo {
  /**
   * The instance type for the Capacity Reservation.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Availability Zone for the Capacity Reservation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The tenancy of the Capacity Reservation.
   *
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * Information about a request to assign billing of the unused capacity of a Capacity Reservation.
 *
 * @public
 */
export interface CapacityReservationBillingRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that initiated the request.
   *
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * The ID of the Amazon Web Services account to which the request was sent.
   *
   * @public
   */
  UnusedReservationBillingOwnerId?: string | undefined;

  /**
   * The date and time, in UTC time format, at which the request was initiated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * The status of the request. For more information, see [View billing assignment requests for a shared Amazon EC2 Capacity Reservation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-billing-transfers.html).
   *
   * @public
   */
  Status?: CapacityReservationBillingRequestStatus | undefined;

  /**
   * Information about the status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Information about the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationInfo?: CapacityReservationInfo | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the request.
   *
   * @public
   */
  CapacityReservationBillingRequests?: CapacityReservationBillingRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationCancellationQuotesRequest {
  /**
   * The IDs of the cancellation quotes to describe.
   *
   * @public
   */
  CapacityReservationCancellationQuoteIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationCancellationQuotesResult {
  /**
   * Information about the Capacity Reservation cancellation quotes.
   *
   * @public
   */
  CapacityReservationCancellationQuotes?: CapacityReservationCancellationQuote[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationDateChangeQuotesRequest {
  /**
   * The IDs of the date change quotes to describe.
   *
   * @public
   */
  CapacityReservationModificationQuoteIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationDateChangeQuotesResult {
  /**
   * Information about the Capacity Reservation date change quotes.
   *
   * @public
   */
  CapacityReservationModificationQuotes?: CapacityReservationModificationQuote[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsRequest {
  /**
   * The IDs of the Capacity Reservation Fleets to describe.
   *
   * @public
   */
  CapacityReservationFleetIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `state` - The state of the Fleet (`submitted` | `modifying` | `active` | `partially_fulfilled` | `expiring` | `expired` | `cancelling` | `cancelled` | `failed`).
   * - `instance-match-criteria` - The instance matching criteria for the Fleet. Only `open` is supported.
   * - `tenancy` - The tenancy of the Fleet (`default` | `dedicated`).
   * - `allocation-strategy` - The allocation strategy used by the Fleet. Only `prioritized` is supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a Capacity Reservation Fleet.
 *
 * @public
 */
export interface CapacityReservationFleet {
  /**
   * The ID of the Capacity Reservation Fleet.
   *
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * The ARN of the Capacity Reservation Fleet.
   *
   * @public
   */
  CapacityReservationFleetArn?: string | undefined;

  /**
   * The state of the Capacity Reservation Fleet. Possible states include:
   *
   * - `submitted` - The Capacity Reservation Fleet request has been submitted and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations.
   * - `modifying` - The Capacity Reservation Fleet is being modified. The Fleet remains in this state until the modification is complete.
   * - `active` - The Capacity Reservation Fleet has fulfilled its total target capacity and it is attempting to maintain this capacity. The Fleet remains in this state until it is modified or deleted.
   * - `partially_fulfilled` - The Capacity Reservation Fleet has partially fulfilled its total target capacity. There is insufficient Amazon EC2 to fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill its total target capacity.
   * - `expiring` - The Capacity Reservation Fleet has reach its end date and it is in the process of expiring. One or more of its Capacity reservations might still be active.
   * - `expired` - The Capacity Reservation Fleet has reach its end date. The Fleet and its Capacity Reservations are expired. The Fleet can't create new Capacity Reservations.
   * - `cancelling` - The Capacity Reservation Fleet is in the process of being cancelled. One or more of its Capacity reservations might still be active.
   * - `cancelled` - The Capacity Reservation Fleet has been manually cancelled. The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new Capacity Reservations.
   * - `failed` - The Capacity Reservation Fleet failed to reserve capacity for the specified instance types.
   *
   * @public
   */
  State?: CapacityReservationFleetState | undefined;

  /**
   * The total number of capacity units for which the Capacity Reservation Fleet reserves capacity. For more information, see [Total target capacity](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * The capacity units that have been fulfilled.
   *
   * @public
   */
  TotalFulfilledCapacity?: number | undefined;

  /**
   * The tenancy of the Capacity Reservation Fleet. Tenancies include:
   *
   * - `default` - The Capacity Reservation Fleet is created on hardware that is shared with other Amazon Web Services accounts.
   * - `dedicated` - The Capacity Reservation Fleet is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   *
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet expires.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The date and time at which the Capacity Reservation Fleet was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All Capacity Reservations in the Fleet inherit this instance matching criteria.
   *
   * Currently, Capacity Reservation Fleets support `open` instance matching criteria only. This means that instances that have matching attributes (instance type, platform, and Availability Zone) run in the Capacity Reservations automatically. Instances do not need to explicitly target a Capacity Reservation Fleet to use its reserved capacity.
   *
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * The strategy used by the Capacity Reservation Fleet to determine which of the specified instance types to use. For more information, see For more information, see [Allocation strategy](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * Information about the instance types for which to reserve the capacity.
   *
   * @public
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[] | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The tags assigned to the Capacity Reservation Fleet.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsResult {
  /**
   * Information about the Capacity Reservation Fleets.
   *
   * @public
   */
  CapacityReservationFleets?: CapacityReservationFleet[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsRequest {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more filters.
   *
   * - `instance-type` - The type of instance for which the Capacity Reservation reserves capacity.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the Capacity Reservation.
   * - `instance-platform` - The type of operating system for which the Capacity Reservation reserves capacity.
   * - `availability-zone` - The Availability Zone of the Capacity Reservation.
   * - `tenancy` - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:
   *
   *   - `default` - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.
   *   - `dedicated` - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.
   * - `outpost-arn` - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.
   * - `state` - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:
   *
   *   - `active`- The Capacity Reservation is active and the capacity is available for your use.
   *   - `expired` - The Capacity Reservation expired automatically at the date and time specified in your request. The reserved capacity is no longer available for your use.
   *   - `cancelled` - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.
   *   - `pending` - The Capacity Reservation request was successful but the capacity provisioning is still pending.
   *   - `failed` - The Capacity Reservation request has failed. A request might fail due to invalid request parameters, capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.
   * - `start-date` - The date and time at which the Capacity Reservation was started.
   * - `end-date` - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.
   * - `end-date-type` - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:
   *
   *   - `unlimited` - The Capacity Reservation remains active until you explicitly cancel it.
   *   - `limited` - The Capacity Reservation expires automatically at a specified date and time.
   * - `instance-match-criteria` - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:
   *
   *   - `open` - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters.
   *   - `targeted` - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity.
   * - `placement-group-arn` - The ARN of the cluster placement group in which the Capacity Reservation was created.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsResult {
  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the Capacity Reservations.
   *
   * @public
   */
  CapacityReservations?: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationTopologyRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * You can't specify this parameter and the Capacity Reservation IDs parameter in the same request.
   *
   * Default: `10`
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Capacity Reservation IDs.
   *
   * Default: Describes all your Capacity Reservations.
   *
   * Constraints: Maximum 10 explicitly specified Capacity Reservation IDs.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The name of the Availability Zone (for example, `us-west-2a`) or Local Zone (for example, `us-west-2-lax-1b`) that the Capacity Reservation is in.
   * - `instance-type` - The instance type (for example, `p4d.24xlarge`) or instance family (for example, `p4d*`). You can use the `*` wildcard to match zero or more characters, or the `?` wildcard to match zero or one character.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Information about the Capacity Reservation topology.
 *
 * @public
 */
export interface CapacityReservationTopology {
  /**
   * The ID of the Capacity Reservation.
   *
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * The ID of the Capacity Block. This parameter is only supported for UltraServer instances and identifies instances within the UltraServer domain.
   *
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * The current state of the Capacity Reservation. For the list of possible states, see [DescribeCapacityReservations](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCapacityReservations.html).
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The name of the placement group that the Capacity Reservation is in.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The network nodes. The nodes are hashed based on your account. Capacity Reservations from different accounts running under the same server will return a different hashed list of strings.
   *
   * The value is `null` or empty if:
   *
   * - The instance type is not supported.
   * - The Capacity Reservation is in a state other than `active` or `pending`.
   *
   * @public
   */
  NetworkNodes?: string[] | undefined;

  /**
   * The ID of the Availability Zone or Local Zone that the Capacity Reservation is in.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The name of the Availability Zone or Local Zone that the Capacity Reservation is in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationTopologyResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the topology of each Capacity Reservation.
   *
   * @public
   */
  CapacityReservations?: CapacityReservationTopology[] | undefined;
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysRequest {
  /**
   * One or more carrier gateway IDs.
   *
   * @public
   */
  CarrierGatewayIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `carrier-gateway-id` - The ID of the carrier gateway.
   * - `state` - The state of the carrier gateway (`pending` | `failed` | `available` | `deleting` | `deleted`).
   * - `owner-id` - The Amazon Web Services account ID of the owner of the carrier gateway.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC associated with the carrier gateway.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysResult {
  /**
   * Information about the carrier gateway.
   *
   * @public
   */
  CarrierGateways?: CarrierGateway[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The instance IDs. Must be instances linked to a VPC through ClassicLink.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The filters.
   *
   * - `group-id` - The ID of a VPC security group that's associated with the instance.
   * - `instance-id` - The ID of the instance.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   * - `vpc-id` - The ID of the VPC to which the instance is linked.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * Constraint: If the value is greater than 1000, we return only 1000 items.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * > **Note:** Deprecated.
 *
 * Describes a linked EC2-Classic instance.
 *
 * @public
 */
export interface ClassicLinkInstance {
  /**
   * The security groups.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Any tags assigned to the instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClassicLinkInstancesResult {
  /**
   * Information about one or more linked EC2-Classic instances.
   *
   * @public
   */
  Instances?: ClassicLinkInstance[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `description` - The description of the authorization rule.
   * - `destination-cidr` - The CIDR of the network to which the authorization rule applies.
   * - `group-id` - The ID of the Active Directory group to which the authorization rule grants access.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about an authorization rule.
 *
 * @public
 */
export interface AuthorizationRule {
  /**
   * The ID of the Client VPN endpoint with which the authorization rule is associated.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * A brief description of the authorization rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the Active Directory group to which the authorization rule grants access.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * Indicates whether the authorization rule grants access to all clients.
   *
   * @public
   */
  AccessAll?: boolean | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.
   *
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * The current state of the authorization rule.
   *
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * Information about the authorization rules.
   *
   * @public
   */
  AuthorizationRules?: AuthorizationRule[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `connection-id` - The ID of the connection.
   * - `username` - For Active Directory client authentication, the user name of the client who established the client connection.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the status of a client connection.
 *
 * @public
 */
export interface ClientVpnConnectionStatus {
  /**
   * The state of the client connection.
   *
   * @public
   */
  Code?: ClientVpnConnectionStatusCode | undefined;

  /**
   * A message about the status of the client connection, if applicable.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes a client connection.
 *
 * @public
 */
export interface ClientVpnConnection {
  /**
   * The ID of the Client VPN endpoint to which the client is connected.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The current date and time.
   *
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * The ID of the client connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The username of the client who established the client connection. This information is only provided if Active Directory client authentication is used.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The date and time the client connection was established.
   *
   * @public
   */
  ConnectionEstablishedTime?: string | undefined;

  /**
   * The number of bytes sent by the client.
   *
   * @public
   */
  IngressBytes?: string | undefined;

  /**
   * The number of bytes received by the client.
   *
   * @public
   */
  EgressBytes?: string | undefined;

  /**
   * The number of packets sent by the client.
   *
   * @public
   */
  IngressPackets?: string | undefined;

  /**
   * The number of packets received by the client.
   *
   * @public
   */
  EgressPackets?: string | undefined;

  /**
   * The IP address of the client.
   *
   * @public
   */
  ClientIp?: string | undefined;

  /**
   * The IPv6 address assigned to the client connection when using a dual-stack Client VPN endpoint. This field is only populated when the endpoint is configured for dual-stack addressing, and the client is using IPv6 for connectivity.
   *
   * @public
   */
  ClientIpv6Address?: string | undefined;

  /**
   * The common name associated with the client. This is either the name of the client certificate, or the Active Directory user name.
   *
   * @public
   */
  CommonName?: string | undefined;

  /**
   * The current state of the client connection.
   *
   * @public
   */
  Status?: ClientVpnConnectionStatus | undefined;

  /**
   * The date and time the client connection was terminated.
   *
   * @public
   */
  ConnectionEndTime?: string | undefined;

  /**
   * The statuses returned by the client connect handler for posture compliance, if applicable.
   *
   * @public
   */
  PostureComplianceStatuses?: string[] | undefined;

  /**
   * The date and time the authorization policy was last evaluated for the client connection, if applicable.
   *
   * @public
   */
  AuthorizationPolicyLastEvaluatedTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnConnectionsResult {
  /**
   * Information about the active and terminated client connections.
   *
   * @public
   */
  Connections?: ClientVpnConnection[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointIds?: string[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `endpoint-id` - The ID of the Client VPN endpoint.
   * - `transport-protocol` - The transport protocol (`tcp` | `udp`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
 *
 * @public
 */
export interface AssociatedTargetNetwork {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * The target network type.
   *
   * @public
   */
  NetworkType?: AssociatedNetworkType | undefined;
}

/**
 * Describes an Active Directory.
 *
 * @public
 */
export interface DirectoryServiceAuthentication {
  /**
   * The ID of the Active Directory used for authentication.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * Describes the IAM SAML identity providers used for federated authentication.
 *
 * @public
 */
export interface FederatedAuthentication {
  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider.
   *
   * @public
   */
  SamlProviderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.
   *
   * @public
   */
  SelfServiceSamlProviderArn?: string | undefined;
}

/**
 * Information about the client certificate used for authentication.
 *
 * @public
 */
export interface CertificateAuthentication {
  /**
   * The ARN of the client certificate.
   *
   * @public
   */
  ClientRootCertificateChain?: string | undefined;
}

/**
 * Describes the authentication methods used by a Client VPN endpoint. For more information, see [Authentication](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html) in the *Client VPN Administrator Guide*.
 *
 * @public
 */
export interface ClientVpnAuthentication {
  /**
   * The authentication type used.
   *
   * @public
   */
  Type?: ClientVpnAuthenticationType | undefined;

  /**
   * Information about the Active Directory, if applicable.
   *
   * @public
   */
  ActiveDirectory?: DirectoryServiceAuthentication | undefined;

  /**
   * Information about the authentication certificates, if applicable.
   *
   * @public
   */
  MutualAuthentication?: CertificateAuthentication | undefined;

  /**
   * Information about the IAM SAML identity provider, if applicable.
   *
   * @public
   */
  FederatedAuthentication?: FederatedAuthentication | undefined;
}

/**
 * Describes the status of the Client VPN endpoint attribute.
 *
 * @public
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * The status code.
   *
   * @public
   */
  Code?: ClientVpnEndpointAttributeStatusCode | undefined;

  /**
   * The status message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The options for managing connection authorization for new client connections.
 *
 * @public
 */
export interface ClientConnectResponseOptions {
  /**
   * Indicates whether client connect options are enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;

  /**
   * The status of any updates to the client connect options.
   *
   * @public
   */
  Status?: ClientVpnEndpointAttributeStatus | undefined;
}

/**
 * Current state of options for customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
 *
 * @public
 */
export interface ClientLoginBannerResponseOptions {
  /**
   * Current state of text banner feature.
   *
   * Valid values: `true | false`
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Customizable text that will be displayed in a banner on Amazon Web Services provided clients when a VPN session is established. UTF-8 encoded characters only. Maximum of 1400 characters.
   *
   * @public
   */
  BannerText?: string | undefined;
}

/**
 * The current status of Client Route Enforcement.
 *
 * @public
 */
export interface ClientRouteEnforcementResponseOptions {
  /**
   * Status of the client route enforcement feature, indicating whether Client Route Enforcement is `true` (enabled) or `false` (disabled).
   *
   * Valid values: `true | false`
   *
   * Default value: `false`
   *
   * @public
   */
  Enforced?: boolean | undefined;
}

/**
 * Information about the client connection logging options for a Client VPN endpoint.
 *
 * @public
 */
export interface ConnectionLogResponseOptions {
  /**
   * Indicates whether client connection logging is enabled for the Client VPN endpoint.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log group to which connection logging data is published.
   *
   * @public
   */
  CloudwatchLogGroup?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.
   *
   * @public
   */
  CloudwatchLogStream?: string | undefined;

  /**
   * Specifies whether the authorization policy evaluation context is included in the connection logs for the Client VPN endpoint.
   *
   * @public
   */
  IncludeAuthorizationPolicyContext?: boolean | undefined;
}

/**
 * Information about a device trust provider configured for a Client VPN endpoint.
 *
 * @public
 */
export interface ClientVpnTrustProvider {
  /**
   * The type of the device trust provider. Possible values include:
   *
   * - `crowdstrike` - CrowdStrike device trust provider.
   * - `jamf` - Jamf device trust provider.
   * - `jumpcloud` - JumpCloud device trust provider.
   *
   * @public
   */
  TrustProviderType?: ClientVpnDeviceTrustProviderType | undefined;

  /**
   * The tenant ID associated with your device trust provider account.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The URL of the public signing key that is used to verify the identity token issued by the device trust provider.
   *
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * Information about the device posture options for a Client VPN endpoint.
 *
 * @public
 */
export interface DevicePostureResponseOptions {
  /**
   * The device trust providers configured for the Client VPN endpoint.
   *
   * @public
   */
  TrustProviders?: ClientVpnTrustProvider[] | undefined;
}

/**
 * Describes the Transit Gateway configuration for a Client VPN endpoint.
 *
 * @public
 */
export interface TransitGatewayConfigurationDescribeEndpointStructure {
  /**
   * The ID of the Transit Gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the Transit Gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The Availability Zone names for the Transit Gateway association.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The Availability Zone IDs for the Transit Gateway association.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;
}

/**
 * Describes a Client VPN endpoint.
 *
 * @public
 */
export interface ClientVpnEndpoint {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * A brief description of the endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current state of the Client VPN endpoint.
   *
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;

  /**
   * The date and time the Client VPN endpoint was created.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time the Client VPN endpoint was deleted, if applicable.
   *
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * The DNS name to be used by clients when connecting to the Client VPN endpoint.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.
   *
   * @public
   */
  ClientCidrBlock?: string | undefined;

  /**
   * Information about the DNS servers to be used for DNS resolution.
   *
   * @public
   */
  DnsServers?: string[] | undefined;

  /**
   * Indicates whether split-tunnel is enabled in the Client VPN endpoint.
   *
   * For information about split-tunnel VPN endpoints, see [Split-Tunnel Client VPN endpoint](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html) in the *Client VPN Administrator Guide*.
   *
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * The protocol used by the VPN session.
   *
   * @public
   */
  VpnProtocol?: VpnProtocol | undefined;

  /**
   * The transport protocol used by the Client VPN endpoint.
   *
   * @public
   */
  TransportProtocol?: TransportProtocol | undefined;

  /**
   * The port number for the Client VPN endpoint.
   *
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * Information about the associated target networks. A target network is a subnet in a VPC.
   *
   * @deprecated This property is deprecated. To view the target networks associated with a Client VPN endpoint, call DescribeClientVpnTargetNetworks and inspect the clientVpnTargetNetworks response element.
   * @public
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[] | undefined;

  /**
   * The ARN of the server certificate.
   *
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * Information about the authentication method used by the Client VPN endpoint.
   *
   * @public
   */
  AuthenticationOptions?: ClientVpnAuthentication[] | undefined;

  /**
   * Information about the client connection logging options for the Client VPN endpoint.
   *
   * @public
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions | undefined;

  /**
   * Any tags assigned to the Client VPN endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IDs of the security groups for the target network.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The URL of the self-service portal.
   *
   * @public
   */
  SelfServicePortalUrl?: string | undefined;

  /**
   * The options for managing connection authorization for new client connections.
   *
   * @public
   */
  ClientConnectOptions?: ClientConnectResponseOptions | undefined;

  /**
   * The maximum VPN session duration time in hours.
   *
   * Valid values: `8 | 10 | 12 | 24`
   *
   * Default value: `24`
   *
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * Options for enabling a customizable text banner that will be displayed on Amazon Web Services provided clients when a VPN session is established.
   *
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerResponseOptions | undefined;

  /**
   * Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
   *
   * Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
   *
   * @public
   */
  ClientRouteEnforcementOptions?: ClientRouteEnforcementResponseOptions | undefined;

  /**
   * Indicates whether the client VPN session is disconnected after the maximum `sessionTimeoutHours` is reached. If `true`, users are prompted to reconnect client VPN. If `false`, client VPN attempts to reconnect automatically. The default value is `true`.
   *
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;

  /**
   * The IP address type of the Client VPN endpoint. Possible values are `ipv4` for IPv4 addressing only, `ipv6` for IPv6 addressing only, or `dual-stack`for both IPv4 and IPv6 addressing.
   *
   * @public
   */
  EndpointIpAddressType?: EndpointIpAddressType | undefined;

  /**
   * The IP address type of the Client VPN endpoint. Possible values are either `ipv4` for IPv4 addressing only, `ipv6` for IPv6 addressing only, or `dual-stack` for both IPv4 and IPv6 addressing.
   *
   * @public
   */
  TrafficIpAddressType?: TrafficIpAddressType | undefined;

  /**
   * The Transit Gateway configuration for the Client VPN endpoint.
   *
   * @public
   */
  TransitGatewayConfiguration?: TransitGatewayConfigurationDescribeEndpointStructure | undefined;

  /**
   * The device trust providers configured for the Client VPN endpoint, if applicable.
   *
   * @public
   */
  DevicePostureOptions?: DevicePostureResponseOptions | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnEndpointsResult {
  /**
   * Information about the Client VPN endpoints.
   *
   * @public
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `destination-cidr` - The CIDR of the route destination.
   * - `origin` - How the route was associated with the Client VPN endpoint (`associate` | `add-route`).
   * - `target-subnet` - The ID of the subnet through which traffic is routed.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a Client VPN endpoint route.
 *
 * @public
 */
export interface ClientVpnRoute {
  /**
   * The ID of the Client VPN endpoint with which the route is associated.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the route destination.
   *
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * The ID of the subnet through which traffic is routed.
   *
   * @public
   */
  TargetSubnet?: string | undefined;

  /**
   * The route type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Indicates how the route was associated with the Client VPN endpoint. `associate` indicates that the route was automatically added when the target network was associated with the Client VPN endpoint. `add-route` indicates that the route was manually added using the **CreateClientVpnRoute** action.
   *
   * @public
   */
  Origin?: string | undefined;

  /**
   * The current state of the route.
   *
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;

  /**
   * A brief description of the route.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the Transit Gateway attachment, if the route targets a Transit Gateway.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnRoutesResult {
  /**
   * Information about the Client VPN endpoint routes.
   *
   * @public
   */
  Routes?: ClientVpnRoute[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The IDs of the target network associations.
   *
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters. Filter names and values are case-sensitive.
   *
   * - `association-id` - The ID of the association.
   * - `target-network-id` - The ID of the subnet specified as the target network.
   * - `vpc-id` - The ID of the VPC in which the target network is located.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a target network associated with a Client VPN endpoint.
 *
 * @public
 */
export interface TargetNetwork {
  /**
   * The ID of the association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The ID of the VPC in which the target network (subnet) is located.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the subnet specified as the target network.
   *
   * @public
   */
  TargetNetworkId?: string | undefined;

  /**
   * The ID of the Client VPN endpoint with which the target network is associated.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The current state of the target network association.
   *
   * @public
   */
  Status?: AssociationStatus | undefined;

  /**
   * The IDs of the security groups applied to the target network association.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The Availability Zone names for the target network association, if the Client VPN endpoint uses a Transit Gateway.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The Availability Zone IDs for the target network association, if the Client VPN endpoint uses a Transit Gateway.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientVpnTargetNetworksResult {
  /**
   * Information about the associated target networks.
   *
   * @public
   */
  ClientVpnTargetNetworks?: TargetNetwork[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCoipPoolsRequest {
  /**
   * The IDs of the address pools.
   *
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `coip-pool.local-gateway-route-table-id` - The ID of the local gateway route table.
   * - `coip-pool.pool-id` - The ID of the address pool.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeCoipPoolsResult {
  /**
   * Information about the address pools.
   *
   * @public
   */
  CoipPools?: CoipPool[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConversionTasksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The conversion task IDs.
   *
   * @public
   */
  ConversionTaskIds?: string[] | undefined;
}

/**
 * Describes a disk image.
 *
 * @public
 */
export interface DiskImageDescription {
  /**
   * The checksum computed for the disk image.
   *
   * @public
   */
  Checksum?: string | undefined;

  /**
   * The disk image format.
   *
   * @public
   */
  Format?: DiskImageFormat | undefined;

  /**
   * A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the [Authenticating REST Requests](https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html) topic in the *Amazon Simple Storage Service Developer Guide*.
   *
   * For information about the import manifest referenced by this API action, see [VM Import Manifest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html).
   *
   * @public
   */
  ImportManifestUrl?: string | undefined;

  /**
   * The size of the disk image, in GiB.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * Describes a disk image volume.
 *
 * @public
 */
export interface DiskImageVolumeDescription {
  /**
   * The volume identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * Describes an import volume task.
 *
 * @public
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * The Availability Zone where the resulting instance will reside.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the resulting instance will reside.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The number of bytes converted so far.
   *
   * @public
   */
  BytesConverted?: number | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The image.
   *
   * @public
   */
  Image?: DiskImageDescription | undefined;

  /**
   * The status of the import of this particular disk image.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The status information or errors related to the disk image.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The volume.
   *
   * @public
   */
  Volume?: DiskImageVolumeDescription | undefined;
}

/**
 * Describes an import instance task.
 *
 * @public
 */
export interface ImportInstanceTaskDetails {
  /**
   * A description of the task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance operating system.
   *
   * @public
   */
  Platform?: PlatformValues | undefined;

  /**
   * The volumes.
   *
   * @public
   */
  Volumes?: ImportInstanceVolumeDetailItem[] | undefined;
}

/**
 * Describes an import volume task.
 *
 * @public
 */
export interface ImportVolumeTaskDetails {
  /**
   * The Availability Zone where the resulting volume will reside.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone where the resulting volume will reside.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The number of bytes converted so far.
   *
   * @public
   */
  BytesConverted?: number | undefined;

  /**
   * The description you provided when starting the import volume task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The image.
   *
   * @public
   */
  Image?: DiskImageDescription | undefined;

  /**
   * The volume.
   *
   * @public
   */
  Volume?: DiskImageVolumeDescription | undefined;
}

/**
 * Describes a conversion task.
 *
 * @public
 */
export interface ConversionTask {
  /**
   * The ID of the conversion task.
   *
   * @public
   */
  ConversionTaskId?: string | undefined;

  /**
   * The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel the task.
   *
   * @public
   */
  ExpirationTime?: string | undefined;

  /**
   * If the task is for importing an instance, this contains information about the import instance task.
   *
   * @public
   */
  ImportInstance?: ImportInstanceTaskDetails | undefined;

  /**
   * If the task is for importing a volume, this contains information about the import volume task.
   *
   * @public
   */
  ImportVolume?: ImportVolumeTaskDetails | undefined;

  /**
   * The state of the conversion task.
   *
   * @public
   */
  State?: ConversionTaskState | undefined;

  /**
   * The status message related to the conversion task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Any tags assigned to the task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeConversionTasksResult {
  /**
   * Information about the conversion tasks.
   *
   * @public
   */
  ConversionTasks?: ConversionTask[] | undefined;
}

/**
 * Contains the parameters for DescribeCustomerGateways.
 *
 * @public
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * One or more customer gateway IDs.
   *
   * Default: Describes all your customer gateways.
   *
   * @public
   */
  CustomerGatewayIds?: string[] | undefined;

  /**
   * One or more filters.
   *
   * - `bgp-asn` - The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
   * - `customer-gateway-id` - The ID of the customer gateway.
   * - `ip-address` - The IP address of the customer gateway device's external interface.
   * - `state` - The state of the customer gateway (`pending` | `available` | `deleting` | `deleted`).
   * - `type` - The type of customer gateway. Currently, the only supported type is `ipsec.1`.
   * - `tag`:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Contains the output of DescribeCustomerGateways.
 *
 * @public
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * Information about one or more customer gateways.
   *
   * @public
   */
  CustomerGateways?: CustomerGateway[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeclarativePoliciesReportsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * One or more report IDs.
   *
   * @public
   */
  ReportIds?: string[] | undefined;
}

/**
 * Describes the metadata of the account status report.
 *
 * @public
 */
export interface DeclarativePoliciesReport {
  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The name of the Amazon S3 bucket where the report is located.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The prefix for your S3 object.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The root ID, organizational unit ID, or account ID.
   *
   * Format:
   *
   * - For root: `r-ab12`
   * - For OU: `ou-ab12-cdef1234`
   * - For account: `123456789012`
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The time when the report generation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the report generation ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The current status of the report.
   *
   * @public
   */
  Status?: ReportState | undefined;

  /**
   * Any tags assigned to the report.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeclarativePoliciesReportsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The report metadata.
   *
   * @public
   */
  Reports?: DeclarativePoliciesReport[] | undefined;
}

/**
 * @public
 */
export interface DescribeDhcpOptionsRequest {
  /**
   * The IDs of DHCP option sets.
   *
   * @public
   */
  DhcpOptionsIds?: string[] | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `dhcp-options-id` - The ID of a DHCP options set.
   * - `key` - The key for one of the options (for example, `domain-name`).
   * - `value` - The value for one of the options.
   * - `owner-id` - The ID of the Amazon Web Services account that owns the DHCP options set.
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeDhcpOptionsResult {
  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the DHCP options sets.
   *
   * @public
   */
  DhcpOptions?: DhcpOptions[] | undefined;
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the egress-only internet gateways.
   *
   * @public
   */
  EgressOnlyInternetGatewayIds?: string[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters.
   *
   * - `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   * - `tag-key` - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * Information about the egress-only internet gateways.
   *
   * @public
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeElasticGpusRequest {
  /**
   * The Elastic Graphics accelerator IDs.
   *
   * @public
   */
  ElasticGpuIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The filters.
   *
   * - `availability-zone` - The Availability Zone in which the Elastic Graphics accelerator resides.
   * - `elastic-gpu-health` - The status of the Elastic Graphics accelerator (`OK` | `IMPAIRED`).
   * - `elastic-gpu-state` - The state of the Elastic Graphics accelerator (`ATTACHED`).
   * - `elastic-gpu-type` - The type of Elastic Graphics accelerator; for example, `eg1.medium`.
   * - `instance-id` - The ID of the instance to which the Elastic Graphics accelerator is associated.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value. This value can be between 5 and 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
 *
 * Describes the status of an Elastic Graphics accelerator.
 *
 * @public
 */
export interface ElasticGpuHealth {
  /**
   * The health status.
   *
   * @public
   */
  Status?: ElasticGpuStatus | undefined;
}

/**
 * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
 *
 * Describes an Elastic Graphics accelerator.
 *
 * @public
 */
export interface ElasticGpus {
  /**
   * The ID of the Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuId?: string | undefined;

  /**
   * The Availability Zone in the which the Elastic Graphics accelerator resides.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The type of Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuType?: string | undefined;

  /**
   * The status of the Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuHealth?: ElasticGpuHealth | undefined;

  /**
   * The state of the Elastic Graphics accelerator.
   *
   * @public
   */
  ElasticGpuState?: ElasticGpuState | undefined;

  /**
   * The ID of the instance to which the Elastic Graphics accelerator is attached.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The tags assigned to the Elastic Graphics accelerator.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeElasticGpusResult {
  /**
   * Information about the Elastic Graphics accelerators.
   *
   * @public
   */
  ElasticGpuSet?: ElasticGpus[] | undefined;

  /**
   * The total number of items to return. If the total number of items available is more than the value specified in max-items then a Next-Token will be provided in the output that you can use to resume pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportImageTasksRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Filter tasks using the `task-state` filter and one of the following values: `active`, `completed`, `deleting`, or `deleted`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The IDs of the export image tasks.
   *
   * @public
   */
  ExportImageTaskIds?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that indicates the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the destination for an export image task.
 *
 * @public
 */
export interface ExportTaskS3Location {
  /**
   * The destination Amazon S3 bucket.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The prefix (logical hierarchy) in the bucket.
   *
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * Describes an export image task.
 *
 * @public
 */
export interface ExportImageTask {
  /**
   * A description of the image being exported.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the export image task.
   *
   * @public
   */
  ExportImageTaskId?: string | undefined;

  /**
   * The ID of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The percent complete of the export image task.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * Information about the destination Amazon S3 bucket.
   *
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location | undefined;

  /**
   * The status of the export image task. The possible values are `active`, `completed`, `deleting`, and `deleted`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The status message for the export image task.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Any tags assigned to the export image task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeExportImageTasksResult {
  /**
   * Information about the export image tasks.
   *
   * @public
   */
  ExportImageTasks?: ExportImageTask[] | undefined;

  /**
   * The token to use to get the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * the filters for the export tasks.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The export task IDs.
   *
   * @public
   */
  ExportTaskIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResult {
  /**
   * Information about the export tasks.
   *
   * @public
   */
  ExportTasks?: ExportTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesRequest {
  /**
   * Specify one or more Windows AMI image IDs for the request.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * Use the following filters to streamline results.
   *
   * - `resource-type` - The resource type for pre-provisioning.
   * - `owner-id` - The owner ID for the pre-provisioning resource.
   * - `state` - The current state of fast launching for the Windows AMI.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Identifies the launch template that the AMI uses for Windows fast launch.
 *
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * The ID of the launch template that the AMI uses for Windows fast launch.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template that the AMI uses for Windows fast launch.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version of the launch template that the AMI uses for Windows fast launch.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Configuration settings for creating and managing pre-provisioned snapshots for a Windows fast launch enabled Windows AMI.
 *
 * @public
 */
export interface FastLaunchSnapshotConfigurationResponse {
  /**
   * The number of pre-provisioned snapshots requested to keep on hand for a Windows fast launch enabled AMI.
   *
   * @public
   */
  TargetResourceCount?: number | undefined;
}

/**
 * Describe details about a Windows image with Windows fast launch enabled that meets the requested criteria. Criteria are defined by the `DescribeFastLaunchImages` action filters.
 *
 * @public
 */
export interface DescribeFastLaunchImagesSuccessItem {
  /**
   * The image ID that identifies the Windows fast launch enabled image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The resource type that Amazon EC2 uses for pre-provisioning the Windows AMI. Supported values include: `snapshot`.
   *
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * A group of parameters that are used for pre-provisioning the associated Windows AMI using snapshots.
   *
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * The launch template that the Windows fast launch enabled AMI uses when it launches Windows instances from pre-provisioned snapshots.
   *
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch.
   *
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * The owner ID for the Windows fast launch enabled AMI.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The current state of Windows fast launch for the specified Windows AMI.
   *
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * The reason that Windows fast launch for the AMI changed to the current state.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The time that Windows fast launch for the AMI changed to the current state.
   *
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFastLaunchImagesResult {
  /**
   * A collection of details about the fast-launch enabled Windows images that meet the requested criteria.
   *
   * @public
   */
  FastLaunchImages?: DescribeFastLaunchImagesSuccessItem[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresRequest {
  /**
   * The filters. The possible values are:
   *
   * - `availability-zone`: The Availability Zone of the snapshot. For example, `us-east-2a`.
   * - `availability-zone-id`: The ID of the Availability Zone of the snapshot. For example, `use2-az1`.
   * - `owner-id`: The ID of the Amazon Web Services account that enabled fast snapshot restore on the snapshot.
   * - `snapshot-id`: The ID of the snapshot.
   * - `state`: The state of fast snapshot restores for the snapshot (`enabling` | `optimizing` | `enabled` | `disabling` | `disabled`).
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes fast snapshot restores for a snapshot.
 *
 * @public
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The state of fast snapshot restores.
   *
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

  /**
   * The reason for the state transition. The possible values are as follows:
   *
   * - `Client.UserInitiated` - The state successfully transitioned to `enabling` or `disabling`.
   * - `Client.UserInitiated - Lifecycle state transition` - The state successfully transitioned to `optimizing`, `enabled`, or `disabled`.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabling` state.
   *
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `optimizing` state.
   *
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `enabled` state.
   *
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabling` state.
   *
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * The time at which fast snapshot restores entered the `disabled` state.
   *
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFastSnapshotRestoresResult {
  /**
   * Information about the state of fast snapshot restores.
   *
   * @public
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetHistoryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The type of events to describe. By default, all events are described.
   *
   * @public
   */
  EventType?: FleetEventType | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see [Pagination](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId: string | undefined;

  /**
   * The start date and time for the events, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  StartTime: Date | undefined;
}

/**
 * Describes an EC2 Fleet or Spot Fleet event.
 *
 * @public
 */
export interface EventInformation {
  /**
   * The description of the event.
   *
   * @public
   */
  EventDescription?: string | undefined;

  /**
   * The event.
   *
   * `error` events:
   *
   * - `iamFleetRoleInvalid` - The EC2 Fleet or Spot Fleet does not have the required permissions either to launch or terminate an instance.
   * - `allLaunchSpecsTemporarilyBlacklisted` - None of the configurations are valid, and several attempts to launch instances have failed. For more information, see the description of the event.
   * - `spotInstanceCountLimitExceeded` - You've reached the limit on the number of Spot Instances that you can launch.
   * - `spotFleetRequestConfigurationInvalid` - The configuration is not valid. For more information, see the description of the event.
   *
   * `fleetRequestChange` events:
   *
   * - `active` - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is attempting to maintain the target number of running instances.
   * - `deleted` (EC2 Fleet) / `cancelled` (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and has no running instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances are terminated.
   * - `deleted_running` (EC2 Fleet) / `cancelled_running` (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and does not launch additional instances. Its existing instances continue to run until they are interrupted or terminated. The request remains in this state until all instances are interrupted or terminated.
   * - `deleted_terminating` (EC2 Fleet) / `cancelled_terminating` (Spot Fleet) - The EC2 Fleet is deleted or the Spot Fleet request is canceled and its instances are terminating. The request remains in this state until all instances are terminated.
   * - `expired` - The EC2 Fleet or Spot Fleet request has expired. If the request was created with `TerminateInstancesWithExpiration` set, a subsequent `terminated` event indicates that the instances are terminated.
   * - `modify_in_progress` - The EC2 Fleet or Spot Fleet request is being modified. The request remains in this state until the modification is fully processed.
   * - `modify_succeeded` - The EC2 Fleet or Spot Fleet request was modified.
   * - `submitted` - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2 is preparing to launch the target number of instances.
   * - `progress` - The EC2 Fleet or Spot Fleet request is in the process of being fulfilled.
   *
   * `instanceChange` events:
   *
   * - `launched` - A new instance was launched.
   * - `terminated` - An instance was terminated by the user.
   * - `termination_notified` - An instance termination notification was sent when a Spot Instance was terminated by Amazon EC2 during scale-down, when the target capacity of the fleet was modified down, for example, from a target capacity of 4 to a target capacity of 3.
   *
   * `Information` events:
   *
   * - `fleetProgressHalted` - The price in every launch specification is not valid because it is below the Spot price (all the launch specifications have produced `launchSpecUnusable` events). A launch specification might become valid if the Spot price changes.
   * - `launchSpecTemporarilyBlacklisted` - The configuration is not valid and several attempts to launch instances have failed. For more information, see the description of the event.
   * - `launchSpecUnusable` - The price specified in a launch specification is not valid because it is below the Spot price for the requested Spot pools.
   *
   *   Note: Even if a fleet with the `maintain` request type is in the process of being canceled, it may still publish a `launchSpecUnusable` event. This does not mean that the canceled fleet is attempting to launch a new instance.
   * - `registerWithLoadBalancersFailed` - An attempt to register instances with load balancers failed. For more information, see the description of the event.
   *
   * @public
   */
  EventSubType?: string | undefined;

  /**
   * The ID of the instance. This information is available only for `instanceChange` events.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Describes an event in the history of an EC2 Fleet.
 *
 * @public
 */
export interface HistoryRecordEntry {
  /**
   * Information about the event.
   *
   * @public
   */
  EventInformation?: EventInformation | undefined;

  /**
   * The event type.
   *
   * @public
   */
  EventType?: FleetEventType | undefined;

  /**
   * The date and time of the event, in UTC format (for example, *YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * @public
   */
  Timestamp?: Date | undefined;
}
