// smithy-typescript generated code
import type {
  ApplianceModeSupportValue,
  AttachmentStatus,
  AutoAcceptSharedAssociationsValue,
  AutoAcceptSharedAttachmentsValue,
  BgpStatus,
  ClientVpnAuthorizationPolicyStatus,
  ConnectionNotificationState,
  ConnectionNotificationType,
  CopyTagsFromSource,
  CurrencyCodeValues,
  DatafeedSubscriptionState,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DeleteFleetErrorCode,
  DeviceTrustProviderType,
  DnsNameState,
  DnsRecordIpType,
  DnsSupportValue,
  DynamicRoutingValue,
  EncryptionStateValue,
  FleetStateCode,
  GatewayAssociationState,
  GatewayType,
  Igmpv2SupportValue,
  InstanceEventWindowState,
  InterfacePermissionType,
  InternetGatewayExclusionMode,
  IpAddressType,
  Ipv6SupportValue,
  MulticastSupportValue,
  NetworkInterfacePermissionStateCode,
  NetworkInterfaceStatus,
  NetworkInterfaceType,
  PayerResponsibility,
  PayerResponsibilityScope,
  PayerResponsibilityType,
  PlacementGroupState,
  PlacementStrategy,
  ProtocolValue,
  ReplaceRootVolumeTaskState,
  RouteOrigin,
  RouteServerBfdState,
  RouteServerBgpState,
  RouteServerEndpointState,
  RouteServerPeerLivenessMode,
  RouteServerPeerState,
  RouteServerPersistRoutesAction,
  RouteServerPersistRoutesState,
  RouteServerState,
  RouteState,
  SecondaryNetworkCidrBlockAssociationState,
  SecondaryNetworkState,
  SecondaryNetworkType,
  SecondarySubnetCidrBlockAssociationState,
  SecondarySubnetState,
  SecurityGroupReferencingSupportValue,
  ServiceConnectivityType,
  ServiceState,
  ServiceType,
  SnapshotLocationEnum,
  SnapshotState,
  SpreadLevel,
  SSEType,
  State,
  StaticSourcesSupportValue,
  StorageTier,
  SubnetCidrReservationType,
  TelemetryStatus,
  Tenancy,
  TrafficDirection,
  TrafficMirrorNetworkService,
  TrafficMirrorRuleAction,
  TrafficMirrorTargetType,
  TransferType,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayConnectPeerState,
  TransitGatewayMeteringPayerType,
  TransitGatewayMeteringPolicyEntryState,
  TransitGatewayMeteringPolicyState,
  TransitGatewayMulticastDomainState,
  TransitGatewayPolicyTableEntryState,
  TransitGatewayPolicyTableState,
  TransitGatewayPrefixListReferenceState,
  TransitGatewayRouteState,
  TransitGatewayRouteTableAnnouncementDirection,
  TransitGatewayRouteTableAnnouncementState,
  TransitGatewayRouteTableState,
  TransitGatewayRouteType,
  TransitGatewayState,
  TrustProviderType,
  TunnelInsideIpVersion,
  UserTrustProviderType,
  VerifiedAccessEndpointAttachmentType,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessEndpointStatusCode,
  VerifiedAccessEndpointType,
  VolumeType,
  VpcBlockPublicAccessExclusionState,
  VpcEncryptionControlExclusionStateInput,
  VpcEncryptionControlMode,
  VpcEndpointType,
  VpnConcentratorType,
  VpnEcmpSupportValue,
  VpnState,
  VpnStaticRouteSource,
  VpnTunnelBandwidth,
} from "./enums";
import type {
  ApplicationStatusCheckResponseObject,
  IpamRoutingPolicyRegistrationDelta,
  Ipv4PrefixSpecification,
  OperatorResponse,
  ReservedInstancesListing,
  RouteTableAssociationState,
  Tag,
  TagSpecification,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";
import type {
  AttachmentEnaSrdUdpSpecification,
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipCidr,
  CoipPool,
  Ec2InstanceConnectEndpoint,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamInternetRegistryAssociation,
  IpamPolicy,
  IpamPool,
  IpamPrefixListResolver,
  IpamPrefixListResolverTarget,
  IpamResourceDiscovery,
  IpamScope,
  NetworkInterfaceAssociation,
  OperatorRequest,
  Subnet,
  Vpc,
  VpcEncryptionControl,
} from "./models_1";

/**
 * ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 *
 * To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 *
 * @public
 */
export interface AttachmentEnaSrdSpecification {
  /**
   * Indicates whether ENA Express is enabled for the network interface.
   *
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * Configures ENA Express for UDP network traffic.
   *
   * @public
   */
  EnaSrdUdpSpecification?: AttachmentEnaSrdUdpSpecification | undefined;
}

/**
 * Describes a network interface attachment.
 *
 * @public
 */
export interface NetworkInterfaceAttachment {
  /**
   * The timestamp indicating when the attachment initiated.
   *
   * @public
   */
  AttachTime?: Date | undefined;

  /**
   * The ID of the network interface attachment.
   *
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index of the network interface attachment on the instance.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The index of the network card.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the instance.
   *
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  Status?: AttachmentStatus | undefined;

  /**
   * Configures ENA Express for the network interface that this action attaches to the instance.
   *
   * @public
   */
  EnaSrdSpecification?: AttachmentEnaSrdSpecification | undefined;

  /**
   * The number of ENA queues created with the instance.
   *
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * A security group connection tracking configuration that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ConnectionTrackingConfiguration {
  /**
   * Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 350 seconds for Nitro v6 instance types (excluding P6e-GB200); 432000 seconds for all other instance types (including P6e-GB200). Recommended: Less than 432000 seconds.
   *
   * @public
   */
  TcpEstablishedTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   *
   * @public
   */
  UdpStreamTimeout?: number | undefined;

  /**
   * Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   *
   * @public
   */
  UdpTimeout?: number | undefined;
}

/**
 * Describes a security group.
 *
 * @public
 */
export interface GroupIdentifier {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Describes an IPv6 address associated with a network interface.
 *
 * @public
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * The IPv6 address.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PublicIpv6DnsName?: string | undefined;

  /**
   * Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information, see [ModifyNetworkInterfaceAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html).
   *
   * @public
   */
  IsPrimaryIpv6?: boolean | undefined;
}

/**
 * Describes the IPv6 prefix.
 *
 * @public
 */
export interface Ipv6PrefixSpecification {
  /**
   * The IPv6 prefix.
   *
   * @public
   */
  Ipv6Prefix?: string | undefined;
}

/**
 * Describes the private IPv4 address of a network interface.
 *
 * @public
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * The association information for an Elastic IP address (IPv4) associated with the network interface.
   *
   * @public
   */
  Association?: NetworkInterfaceAssociation | undefined;

  /**
   * Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The private DNS name.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Public hostname type options. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface PublicIpDnsNameOptions {
  /**
   * The public hostname type. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  DnsHostnameType?: string | undefined;

  /**
   * An IPv4-enabled public hostname for a network interface. Requests from within the VPC resolve to the private primary IPv4 address of the network interface. Requests from the internet resolve to the public IPv4 address of the network interface.
   *
   * @public
   */
  PublicIpv4DnsName?: string | undefined;

  /**
   * An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface.
   *
   * @public
   */
  PublicIpv6DnsName?: string | undefined;

  /**
   * A dual-stack public hostname for a network interface. Requests from within the VPC resolve to both the private IPv4 address and the IPv6 Global Unicast Address of the network interface. Requests from the internet resolve to both the public IPv4 and the IPv6 GUA address of the network interface.
   *
   * @public
   */
  PublicDualStackDnsName?: string | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The association information for an Elastic IP address (IPv4) associated with the network interface.
   *
   * @public
   */
  Association?: NetworkInterfaceAssociation | undefined;

  /**
   * The network interface attachment.
   *
   * @public
   */
  Attachment?: NetworkInterfaceAttachment | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A security group connection tracking configuration that enables you to set the timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ConnectionTrackingConfiguration?: ConnectionTrackingConfiguration | undefined;

  /**
   * A description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Any security groups for the network interface.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The type of network interface.
   *
   * @public
   */
  InterfaceType?: NetworkInterfaceType | undefined;

  /**
   * The IPv6 addresses associated with the network interface.
   *
   * @public
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[] | undefined;

  /**
   * The MAC address.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the network interface.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The private hostname. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * A public hostname. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * Public hostname type options. For more information, see [EC2 instance hostnames, DNS names, and domains](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  PublicIpDnsNameOptions?: PublicIpDnsNameOptions | undefined;

  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The private IPv4 addresses associated with the network interface.
   *
   * @public
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[] | undefined;

  /**
   * The IPv4 prefixes that are assigned to the network interface.
   *
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[] | undefined;

  /**
   * The IPv6 prefixes that are assigned to the network interface.
   *
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[] | undefined;

  /**
   * The alias or Amazon Web Services account ID of the principal or service that created the network interface.
   *
   * @public
   */
  RequesterId?: string | undefined;

  /**
   * Indicates whether the network interface is being managed by Amazon Web Services.
   *
   * @public
   */
  RequesterManaged?: boolean | undefined;

  /**
   * Indicates whether source/destination checking is enabled.
   *
   * @public
   */
  SourceDestCheck?: boolean | undefined;

  /**
   * The status of the network interface.
   *
   * @public
   */
  Status?: NetworkInterfaceStatus | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Any tags assigned to the network interface.
   *
   * @public
   */
  TagSet?: Tag[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Indicates whether a network interface with an IPv6 address is unreachable from the public internet. If the value is `true`, inbound traffic from the internet is dropped and you cannot assign an elastic IP address to the network interface. The network interface is reachable from peered VPCs and resources connected through a transit gateway, including on-premises networks.
   *
   * @public
   */
  DenyAllIgwTraffic?: boolean | undefined;

  /**
   * Indicates whether this is an IPv6 only network interface.
   *
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * The IPv6 globally unique address associated with the network interface.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * The service provider that manages the network interface.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * The subnets associated with this network interface.
   *
   * @public
   */
  AssociatedSubnets?: string[] | undefined;

  /**
   * The ID of the Availability Zone.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInterfaceResult {
  /**
   * Information about the network interface.
   *
   * @public
   */
  NetworkInterface?: NetworkInterface | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains the parameters for CreateNetworkInterfacePermission.
 *
 * @public
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The Amazon Web Services service. Currently not supported.
   *
   * @public
   */
  AwsService?: string | undefined;

  /**
   * The type of permission to grant.
   *
   * @public
   */
  Permission: InterfacePermissionType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the state of a network interface permission.
 *
 * @public
 */
export interface NetworkInterfacePermissionState {
  /**
   * The state of the permission.
   *
   * @public
   */
  State?: NetworkInterfacePermissionStateCode | undefined;

  /**
   * A status message, if applicable.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Describes a permission for a network interface.
 *
 * @public
 */
export interface NetworkInterfacePermission {
  /**
   * The ID of the network interface permission.
   *
   * @public
   */
  NetworkInterfacePermissionId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * The Amazon Web Services service.
   *
   * @public
   */
  AwsService?: string | undefined;

  /**
   * The type of permission.
   *
   * @public
   */
  Permission?: InterfacePermissionType | undefined;

  /**
   * Information about the state of the permission.
   *
   * @public
   */
  PermissionState?: NetworkInterfacePermissionState | undefined;
}

/**
 * Contains the output of CreateNetworkInterfacePermission.
 *
 * @public
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * Information about the permission for the network interface.
   *
   * @public
   */
  InterfacePermission?: NetworkInterfacePermission | undefined;
}

/**
 * @public
 */
export interface CreatePlacementGroupRequest {
  /**
   * The number of partitions. Valid only when **Strategy** is set to `partition`.
   *
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * The tags to apply to the new placement group.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Determines how placement groups spread instances.
   *
   * - Host – You can use `host` only with Outpost placement groups.
   * - Rack – No usage restrictions.
   *
   * @public
   */
  SpreadLevel?: SpreadLevel | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  LinkedGroupId?: string | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * The ID of a parent placement group. Valid only when **Strategy** is set to `cluster`.
   *
   * @public
   */
  ParentGroupId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A name for the placement group. Must be unique within the scope of your account for the Region.
   *
   * Constraints: Up to 255 ASCII characters
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The placement strategy.
   *
   * @public
   */
  Strategy?: PlacementStrategy | undefined;
}

/**
 * Describes a placement group.
 *
 * @public
 */
export interface PlacementGroup {
  /**
   * The name of the placement group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The state of the placement group.
   *
   * @public
   */
  State?: PlacementGroupState | undefined;

  /**
   * The placement strategy.
   *
   * @public
   */
  Strategy?: PlacementStrategy | undefined;

  /**
   * The number of partitions. Valid only if **strategy** is set to `partition`.
   *
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * The ID of the placement group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * Any tags applied to the placement group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the placement group.
   *
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * The spread level for the placement group. *Only* Outpost placement groups can be spread across hosts.
   *
   * @public
   */
  SpreadLevel?: SpreadLevel | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  LinkedGroupId?: string | undefined;

  /**
   * The service provider that manages the Placement Group.
   *
   * @public
   */
  Operator?: OperatorResponse | undefined;

  /**
   * The ID of the parent placement group.
   *
   * @public
   */
  ParentGroupId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePlacementGroupResult {
  /**
   * Information about the placement group.
   *
   * @public
   */
  PlacementGroup?: PlacementGroup | undefined;
}

/**
 * @public
 */
export interface CreatePublicIpv4PoolRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreatePublicIpv4PoolResult {
  /**
   * The ID of the public IPv4 pool.
   *
   * @public
   */
  PoolId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * The ID of the instance for which to replace the root volume.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ID of the snapshot from which to restore the replacement root volume. The specified snapshot must be a snapshot that you previously created from the original root volume.
   *
   * If you want to restore the replacement root volume to the initial launch state, if you want to restore the replacement root volume from an AMI, or if you want to replace the root volume with a specified volume, omit this parameter.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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
   * The tags to apply to the root volume replacement task.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The ID of the AMI to use to restore the root volume. The specified AMI must have the same product code, billing information, architecture type, and virtualization type as that of the instance.
   *
   * If you want to restore the replacement volume from a specific snapshot, if you want to restore it to its launch state, or if you want to replace the root volume with a specified volume, omit this parameter.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Indicates whether to automatically delete the original root volume after the root volume replacement task completes. To delete the original root volume, specify `true`. If you choose to keep the original root volume after the replacement task completes, you must manually delete it when you no longer need it.
   *
   * @public
   */
  DeleteReplacedRootVolume?: boolean | undefined;

  /**
   * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the replacement root volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
   *
   * Omit this parameter if:
   *
   * - You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
   *
   *   > **Note:** If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
   * - You want to create a volume that is initialized at the default rate.
   *
   * For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
   *
   * Valid range: 100 - 300 MiB/s
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * The ID of the volume to use as the replacement root volume. The specified volume must be in the same Availability Zone as the instance, must be in the `available` state, and must not be attached to an instance. If the original root volume is encrypted, the specified volume must also be encrypted.
   *
   * If you want to restore the replacement root volume from a specific snapshot, an AMI, or to its launch state, omit this parameter.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * Information about a root volume replacement task.
 *
 * @public
 */
export interface ReplaceRootVolumeTask {
  /**
   * The ID of the root volume replacement task.
   *
   * @public
   */
  ReplaceRootVolumeTaskId?: string | undefined;

  /**
   * The ID of the instance for which the root volume replacement task was created.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The state of the task. The task can be in one of the following states:
   *
   * - `pending` - the replacement volume is being created.
   * - `in-progress` - the original volume is being detached and the replacement volume is being attached.
   * - `succeeded` - the replacement volume has been successfully attached to the instance and the instance is available.
   * - `failing` - the replacement task is in the process of failing.
   * - `failed` - the replacement task has failed but the original root volume is still attached.
   * - `failing-detached` - the replacement task is in the process of failing. The instance might have no root volume attached.
   * - `failed-detached` - the replacement task has failed and the instance has no root volume attached.
   *
   * @public
   */
  TaskState?: ReplaceRootVolumeTaskState | undefined;

  /**
   * The time the task was started.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The time the task completed.
   *
   * @public
   */
  CompleteTime?: string | undefined;

  /**
   * The tags assigned to the task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the AMI used to create the replacement root volume.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The ID of the snapshot used to create the replacement root volume.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * Indicates whether the original root volume is to be deleted after the root volume replacement task completes.
   *
   * @public
   */
  DeleteReplacedRootVolume?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskResult {
  /**
   * Information about the root volume replacement task.
   *
   * @public
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask | undefined;
}

/**
 * Describes the price for a Reserved Instance.
 *
 * @public
 */
export interface PriceScheduleSpecification {
  /**
   * The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.
   *
   * @public
   */
  Term?: number | undefined;

  /**
   * The fixed price for the term.
   *
   * @public
   */
  Price?: number | undefined;

  /**
   * The currency for transacting the Reserved Instance resale. At this time, the only supported currency is `USD`.
   *
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;
}

/**
 * Contains the parameters for CreateReservedInstancesListing.
 *
 * @public
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * The ID of the active Standard Reserved Instance.
   *
   * @public
   */
  ReservedInstancesId: string | undefined;

  /**
   * The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.
   *
   * @public
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure idempotency of your listings. This helps avoid duplicate listings. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken: string | undefined;
}

/**
 * Contains the output of CreateReservedInstancesListing.
 *
 * @public
 */
export interface CreateReservedInstancesListingResult {
  /**
   * Information about the Standard Reserved Instance listing.
   *
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * @public
 */
export interface CreateRestoreImageTaskRequest {
  /**
   * The name of the Amazon S3 bucket that contains the stored AMI object.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The name of the stored AMI object in the bucket.
   *
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * The name for the restored AMI. The name must be unique for AMIs in the Region for this account. If you do not provide a name, the new AMI gets the same name as the original AMI.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the snapshots, or both.
   *
   * - To tag the AMI, the value for `ResourceType` must be `image`.
   * - To tag the snapshots, the value for `ResourceType` must be `snapshot`. The same tag is applied to all of the snapshots that are created.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateRestoreImageTaskResult {
  /**
   * The AMI ID.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * The ID of a prefix list used for the destination match.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The ID of a transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the carrier gateway.
   *
   * You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ODB network.
   *
   * @public
   */
  OdbNetworkArn?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the route table for the route.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of an internet gateway or virtual private gateway attached to your VPC.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * [IPv6 traffic only] The ID of an egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of a network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * [IPv4 traffic only] The ID of a NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResult {
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
export interface CreateRouteServerRequest {
  /**
   * The private Autonomous System Number (ASN) for the Amazon side of the BGP session. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.
   *
   * @public
   */
  AmazonSideAsn: number | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether routes should be persisted after all BGP sessions are terminated.
   *
   * @public
   */
  PersistRoutes?: RouteServerPersistRoutesAction | undefined;

  /**
   * The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is `enabled`.
   *
   * If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.
   *
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * Indicates whether SNS notifications should be enabled for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.
   *
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

  /**
   * The tags to apply to the route server during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes a route server and its configuration.
 *
 * Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.
 *
 * Route server supports the follow route table types:
 *
 * - VPC route tables not associated with subnets
 * - Subnet route tables
 * - Internet gateway route tables
 *
 * Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use [Transit Gateway Connect](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html).
 *
 * @public
 */
export interface RouteServer {
  /**
   * The unique identifier of the route server.
   *
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * The current state of the route server.
   *
   * @public
   */
  State?: RouteServerState | undefined;

  /**
   * Any tags assigned to the route server.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The current state of route persistence for the route server.
   *
   * @public
   */
  PersistRoutesState?: RouteServerPersistRoutesState | undefined;

  /**
   * The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. The default value is 1. Only valid if `persistRoutesState` is 'enabled'.
   *
   * If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.
   *
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * Indicates whether SNS notifications are enabled for the route server. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.
   *
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

  /**
   * The ARN of the SNS topic where notifications are published.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerResult {
  /**
   * Information about the created route server.
   *
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerEndpointRequest {
  /**
   * The ID of the route server for which to create an endpoint.
   *
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * The ID of the subnet in which to create the route server endpoint.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * Unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the route server endpoint during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes a route server endpoint and its properties.
 *
 * A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates [BGP (Border Gateway Protocol)](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) connections between your route server and your BGP peers.
 *
 * @public
 */
export interface RouteServerEndpoint {
  /**
   * The ID of the route server associated with this endpoint.
   *
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * The unique identifier of the route server endpoint.
   *
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * The ID of the VPC containing the endpoint.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the subnet to place the route server endpoint into.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the Elastic network interface for the endpoint.
   *
   * @public
   */
  EniId?: string | undefined;

  /**
   * The IP address of the Elastic network interface for the endpoint.
   *
   * @public
   */
  EniAddress?: string | undefined;

  /**
   * The current state of the route server endpoint.
   *
   * @public
   */
  State?: RouteServerEndpointState | undefined;

  /**
   * The reason for any failure in endpoint creation or operation.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Any tags assigned to the route server endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerEndpointResult {
  /**
   * Information about the created route server endpoint.
   *
   * @public
   */
  RouteServerEndpoint?: RouteServerEndpoint | undefined;
}

/**
 * The BGP configuration options requested for a route server peer.
 *
 * @public
 */
export interface RouteServerBgpOptionsRequest {
  /**
   * The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.
   *
   * @public
   */
  PeerAsn: number | undefined;

  /**
   * The requested liveness detection protocol for the BGP peer.
   *
   * - `bgp-keepalive`: The standard BGP keep alive mechanism ([RFC4271](https://www.rfc-editor.org/rfc/rfc4271#page-21)) that is stable but may take longer to fail-over in cases of network impact or router failure.
   * - `bfd`: An additional Bidirectional Forwarding Detection (BFD) protocol ([RFC5880](https://www.rfc-editor.org/rfc/rfc5880)) that enables fast failover by using more sensitive liveness detection.
   *
   * Defaults to `bgp-keepalive`.
   *
   * @public
   */
  PeerLivenessDetection?: RouteServerPeerLivenessMode | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerPeerRequest {
  /**
   * The ID of the route server endpoint for which to create a peer.
   *
   * @public
   */
  RouteServerEndpointId: string | undefined;

  /**
   * The IPv4 address of the peer device.
   *
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * The BGP options for the peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.
   *
   * @public
   */
  BgpOptions: RouteServerBgpOptionsRequest | undefined;

  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply to the route server peer during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * The current status of Bidirectional Forwarding Detection (BFD) for a BGP session.
 *
 * @public
 */
export interface RouteServerBfdStatus {
  /**
   * The operational status of the BFD session.
   *
   * @public
   */
  Status?: RouteServerBfdState | undefined;
}

/**
 * The BGP configuration options for a route server peer.
 *
 * @public
 */
export interface RouteServerBgpOptions {
  /**
   * The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.
   *
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * The liveness detection protocol used for the BGP peer.
   *
   * The requested liveness detection protocol for the BGP peer.
   *
   * - `bgp-keepalive`: The standard BGP keep alive mechanism ([RFC4271](https://www.rfc-editor.org/rfc/rfc4271#page-21)) that is stable but may take longer to fail-over in cases of network impact or router failure.
   * - `bfd`: An additional Bidirectional Forwarding Detection (BFD) protocol ([RFC5880](https://www.rfc-editor.org/rfc/rfc5880)) that enables fast failover by using more sensitive liveness detection.
   *
   * Defaults to `bgp-keepalive`.
   *
   * @public
   */
  PeerLivenessDetection?: RouteServerPeerLivenessMode | undefined;
}

/**
 * The current status of a BGP session.
 *
 * @public
 */
export interface RouteServerBgpStatus {
  /**
   * The operational status of the BGP session. The status enables you to monitor session liveness if you lack monitoring on your router/appliance.
   *
   * @public
   */
  Status?: RouteServerBgpState | undefined;
}

/**
 * Describes a BGP peer configuration for a route server endpoint.
 *
 * A route server peer is a session between a route server endpoint and the device deployed in Amazon Web Services (such as a firewall appliance or other network security function running on an EC2 instance). The device must meet these requirements:
 *
 * - Have an elastic network interface in the VPC
 * - Support BGP (Border Gateway Protocol)
 * - Can initiate BGP sessions
 *
 * @public
 */
export interface RouteServerPeer {
  /**
   * The unique identifier of the route server peer.
   *
   * @public
   */
  RouteServerPeerId?: string | undefined;

  /**
   * The ID of the route server endpoint associated with this peer.
   *
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * The ID of the route server associated with this peer.
   *
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * The ID of the VPC containing the route server peer.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the subnet containing the route server peer.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The current state of the route server peer.
   *
   * @public
   */
  State?: RouteServerPeerState | undefined;

  /**
   * The reason for any failure in peer creation or operation.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ID of the Elastic network interface for the route server endpoint.
   *
   * @public
   */
  EndpointEniId?: string | undefined;

  /**
   * The IP address of the Elastic network interface for the route server endpoint.
   *
   * @public
   */
  EndpointEniAddress?: string | undefined;

  /**
   * The IPv4 address of the peer device.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The BGP configuration options for this peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.
   *
   * @public
   */
  BgpOptions?: RouteServerBgpOptions | undefined;

  /**
   * The current status of the BGP session with this peer.
   *
   * @public
   */
  BgpStatus?: RouteServerBgpStatus | undefined;

  /**
   * The current status of the BFD session with this peer.
   *
   * @public
   */
  BfdStatus?: RouteServerBfdStatus | undefined;

  /**
   * Any tags assigned to the route server peer.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRouteServerPeerResult {
  /**
   * Information about the created route server peer.
   *
   * @public
   */
  RouteServerPeer?: RouteServerPeer | undefined;
}

/**
 * @public
 */
export interface CreateRouteTableRequest {
  /**
   * The tags to assign to the route table.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
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
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * Describes an association between a route table and a subnet or gateway.
 *
 * @public
 */
export interface RouteTableAssociation {
  /**
   * Indicates whether this is the main route table.
   *
   * @public
   */
  Main?: boolean | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  RouteTableAssociationId?: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The ID of the subnet. A subnet ID is not returned for an implicit association.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The ID of a public IPv4 pool. A public IPv4 pool is a pool of IPv4 addresses that you've brought to Amazon Web Services with BYOIP.
   *
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * Describes a virtual private gateway propagating route.
 *
 * @public
 */
export interface PropagatingVgw {
  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;
}

/**
 * Describes a route in a route table.
 *
 * @public
 */
export interface Route {
  /**
   * The IPv4 CIDR block used for the destination match.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The IPv6 CIDR block used for the destination match.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * The prefix of the Amazon Web Services service.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * The ID of the egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The ID of a gateway attached to your VPC.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The ID of a NAT instance in your VPC.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of Amazon Web Services account that owns the instance.
   *
   * @public
   */
  InstanceOwnerId?: string | undefined;

  /**
   * The ID of a NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * The ID of a transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * The ID of the carrier gateway.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Describes how the route was created.
   *
   * - `CreateRouteTable` - The route was automatically created when the route table was created.
   * - `CreateRoute` - The route was manually added to the route table.
   * - `EnableVgwRoutePropagation` - The route was propagated by route propagation.
   * - `Advertisement` - The route was created dynamically by Amazon VPC Route Server.
   *
   * @public
   */
  Origin?: RouteOrigin | undefined;

  /**
   * The state of the route. The `blackhole` state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, or the specified NAT instance has been terminated).
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * The ID of a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ODB network.
   *
   * @public
   */
  OdbNetworkArn?: string | undefined;

  /**
   * The next hop IP address for routes propagated by VPC Route Server into VPC route tables.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * Describes a route table.
 *
 * @public
 */
export interface RouteTable {
  /**
   * The associations between the route table and your subnets or gateways.
   *
   * @public
   */
  Associations?: RouteTableAssociation[] | undefined;

  /**
   * Any virtual private gateway (VGW) propagating routes.
   *
   * @public
   */
  PropagatingVgws?: PropagatingVgw[] | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The routes in the route table.
   *
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * Any tags assigned to the route table.
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

  /**
   * The ID of the Amazon Web Services account that owns the route table.
   *
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteTableResult {
  /**
   * Information about the route table.
   *
   * @public
   */
  RouteTable?: RouteTable | undefined;

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
export interface CreateSecondaryNetworkRequest {
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
   * The IPv4 CIDR block for the secondary network. The CIDR block size must be between /12 and /28.
   *
   * @public
   */
  Ipv4CidrBlock: string | undefined;

  /**
   * The type of secondary network.
   *
   * @public
   */
  NetworkType: SecondaryNetworkType | undefined;

  /**
   * The tags to assign to the secondary network.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes an IPv4 CIDR block associated with a secondary network.
 *
 * @public
 */
export interface SecondaryNetworkIpv4CidrBlockAssociation {
  /**
   * The association ID for the IPv4 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv4 CIDR block.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The state of the CIDR block association.
   *
   * @public
   */
  State?: SecondaryNetworkCidrBlockAssociationState | undefined;

  /**
   * The reason for the current state of the CIDR block association.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * Describes a secondary network.
 *
 * @public
 */
export interface SecondaryNetwork {
  /**
   * The ID of the secondary network.
   *
   * @public
   */
  SecondaryNetworkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secondary network.
   *
   * @public
   */
  SecondaryNetworkArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the secondary network.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The type of the secondary network.
   *
   * @public
   */
  Type?: SecondaryNetworkType | undefined;

  /**
   * The state of the secondary network.
   *
   * @public
   */
  State?: SecondaryNetworkState | undefined;

  /**
   * The reason for the current state of the secondary network.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * Information about the IPv4 CIDR blocks associated with the secondary network.
   *
   * @public
   */
  Ipv4CidrBlockAssociations?: SecondaryNetworkIpv4CidrBlockAssociation[] | undefined;

  /**
   * The tags assigned to the secondary network.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSecondaryNetworkResult {
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
export interface CreateSecondarySubnetRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Availability Zone for the secondary subnet. You cannot specify both `AvailabilityZone` and `AvailabilityZoneId` in the same request.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone for the secondary subnet. This option is preferred over `AvailabilityZone` as it provides a consistent identifier across Amazon Web Services accounts. You cannot specify both `AvailabilityZone` and `AvailabilityZoneId` in the same request.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IPv4 CIDR block for the secondary subnet. The CIDR block size must be between /12 and /28.
   *
   * @public
   */
  Ipv4CidrBlock: string | undefined;

  /**
   * The ID of the secondary network in which to create the secondary subnet.
   *
   * @public
   */
  SecondaryNetworkId: string | undefined;

  /**
   * The tags to assign to the secondary subnet.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes an IPv4 CIDR block associated with a secondary subnet.
 *
 * @public
 */
export interface SecondarySubnetIpv4CidrBlockAssociation {
  /**
   * The association ID for the IPv4 CIDR block.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The IPv4 CIDR block.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The state of the CIDR block association.
   *
   * @public
   */
  State?: SecondarySubnetCidrBlockAssociationState | undefined;

  /**
   * The reason for the current state of the CIDR block association.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * Describes a secondary subnet.
 *
 * @public
 */
export interface SecondarySubnet {
  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetArn?: string | undefined;

  /**
   * The ID of the secondary network.
   *
   * @public
   */
  SecondaryNetworkId?: string | undefined;

  /**
   * The type of the secondary network.
   *
   * @public
   */
  SecondaryNetworkType?: SecondaryNetworkType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the secondary subnet.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the Availability Zone of the secondary subnet.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The Availability Zone of the secondary subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Information about the IPv4 CIDR blocks associated with the secondary subnet.
   *
   * @public
   */
  Ipv4CidrBlockAssociations?: SecondarySubnetIpv4CidrBlockAssociation[] | undefined;

  /**
   * The state of the secondary subnet.
   *
   * @public
   */
  State?: SecondarySubnetState | undefined;

  /**
   * The reason for the current state of the secondary subnet.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The tags assigned to the secondary subnet.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSecondarySubnetResult {
  /**
   * Information about the secondary subnet.
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
export interface CreateSecurityGroupRequest {
  /**
   * A description for the security group.
   *
   * Constraints: Up to 255 characters in length
   *
   * Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The name of the security group. Names are case-insensitive and must be unique within the VPC.
   *
   * Constraints: Up to 255 characters in length. Can't start with `sg-`.
   *
   * Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID of the VPC. Required for a nondefault VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The tags to assign to the security group.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateSecurityGroupResult {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The tags assigned to the security group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The security group ARN.
   *
   * @public
   */
  SecurityGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * A description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * > **Note:** Only supported for volumes on Outposts. If the source volume is not on an Outpost, omit this parameter.
   *
   * - To create the snapshot on the same Outpost as the source volume, specify the ARN of that Outpost. The snapshot must be created on the same Outpost as the volume.
   * - To create the snapshot in the parent Region of the Outpost, omit this parameter.
   *
   * For more information, see [Create local snapshots from volumes on an Outpost](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#create-snapshot) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the Amazon EBS volume.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The tags to apply to the snapshot during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * > **Note:** Only supported for volumes in Local Zones. If the source volume is not in a Local Zone, omit this parameter.
   *
   * - To create a local snapshot in the same Local Zone as the source volume, specify `local`.
   * - To create a regional snapshot in the parent Region of the Local Zone, specify `regional` or omit this parameter.
   *
   * Default value: `regional`
   *
   * @public
   */
  Location?: SnapshotLocationEnum | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a snapshot.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The Amazon Web Services owner alias, from an Amazon-maintained list (`amazon`). This is not the user-configured Amazon Web Services account alias set using the IAM console.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The ARN of the Outpost on which the snapshot is stored. For more information, see [Amazon EBS local snapshots on Outposts](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Any tags assigned to the snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The storage tier in which the snapshot is stored. `standard` indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. `archive` indicates that the snapshot is currently archived and that it must be restored before it can be used.
   *
   * @public
   */
  StorageTier?: StorageTier | undefined;

  /**
   * Only for archived snapshots that are temporarily restored. Indicates the date and time when a temporarily restored snapshot will be automatically re-archived.
   *
   * @public
   */
  RestoreExpiryTime?: Date | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * The Availability Zone or Local Zone of the snapshot. For example, `us-west-1a` (Availability Zone) or `us-west-2-lax-1a` (Local Zone).
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * > **Note:** Only for snapshot copies.
   *
   * Indicates whether the snapshot copy was created with a standard or time-based snapshot copy operation. Time-based snapshot copy operations complete within the completion duration specified in the request. Standard snapshot copy operations are completed on a best-effort basis.
   *
   * - `standard` - The snapshot copy was created with a standard snapshot copy operation.
   * - `time-based` - The snapshot copy was created with a time-based snapshot copy operation.
   *
   * @public
   */
  TransferType?: TransferType | undefined;

  /**
   * > **Note:** Only for snapshot copies created with time-based snapshot copy operations.
   *
   * The completion duration requested for the time-based snapshot copy operation.
   *
   * @public
   */
  CompletionDurationMinutes?: number | undefined;

  /**
   * The time stamp when the snapshot was completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The full size of the snapshot, in bytes.
   *
   * > **Important:** This is **not** the incremental size of the snapshot. This is the full snapshot size and represents the size of all the blocks that were written to the source volume at the time the snapshot was created.
   *
   * @public
   */
  FullSnapshotSizeInBytes?: number | undefined;

  /**
   * The ID of the snapshot. Each snapshot receives a unique identifier when it is created.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The ID of the volume that was used to create the snapshot. Snapshots created by a copy snapshot operation have an arbitrary volume ID that you should not use for any purpose.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The snapshot state.
   *
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails (for example, if the proper KMS permissions are not obtained) this field displays error state details to help you diagnose why the error occurred. This parameter is only returned by DescribeSnapshots.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The time stamp when the snapshot was initiated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The progress of the snapshot, as a percentage.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the EBS snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * Indicates whether the snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that was used to protect the volume encryption key for the parent volume.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The data encryption key identifier for the snapshot. This value is a unique identifier that corresponds to the data encryption key that was used to encrypt the original volume or snapshot copy. Because data encryption keys are inherited by volumes created from snapshots, and vice versa, if snapshots share the same data encryption key identifier, then they belong to the same volume/snapshot lineage. This parameter is only returned by DescribeSnapshots.
   *
   * @public
   */
  DataEncryptionKeyId?: string | undefined;
}

/**
 * The instance details to specify which volumes should be snapshotted.
 *
 * @public
 */
export interface InstanceSpecification {
  /**
   * The instance to specify which volumes should be snapshotted.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Excludes the root volume from being snapshotted.
   *
   * @public
   */
  ExcludeBootVolume?: boolean | undefined;

  /**
   * The IDs of the data (non-root) volumes to exclude from the multi-volume snapshot set. If you specify the ID of the root volume, the request fails. To exclude the root volume, use **ExcludeBootVolume**.
   *
   * You can specify up to 40 volume IDs per request.
   *
   * @public
   */
  ExcludeDataVolumeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotsRequest {
  /**
   * A description propagated to every snapshot specified by the instance.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The instance to specify which volumes should be included in the snapshots.
   *
   * @public
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * > **Note:** Only supported for instances on Outposts. If the source instance is not on an Outpost, omit this parameter.
   *
   * - To create the snapshots on the same Outpost as the source instance, specify the ARN of that Outpost. The snapshots must be created on the same Outpost as the instance.
   * - To create the snapshots in the parent Region of the Outpost, omit this parameter.
   *
   * For more information, see [Create local snapshots from volumes on an Outpost](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#create-snapshot) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Tags to apply to every snapshot specified by the instance.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Copies the tags from the specified volume to corresponding snapshot.
   *
   * @public
   */
  CopyTagsFromSource?: CopyTagsFromSource | undefined;

  /**
   * > **Note:** Only supported for instances in Local Zones. If the source instance is not in a Local Zone, omit this parameter.
   *
   * - To create local snapshots in the same Local Zone as the source instance, specify `local`.
   * - To create regional snapshots in the parent Region of the Local Zone, specify `regional` or omit this parameter.
   *
   * Default value: `regional`
   *
   * @public
   */
  Location?: SnapshotLocationEnum | undefined;
}

/**
 * Information about a snapshot.
 *
 * @public
 */
export interface SnapshotInfo {
  /**
   * Description specified by the CreateSnapshotRequest that has been applied to all snapshots.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags associated with this snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether the snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Source volume from which this snapshot was created.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * Current state of the snapshot.
   *
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * Size of the volume from which this snapshot was created.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * Time this snapshot was started. This is the same for all snapshots initiated by the same request.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Progress this snapshot has made towards completing.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * Account id used when creating this snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Snapshot id that can be used to describe this snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The ARN of the Outpost on which the snapshot is stored. For more information, see [Amazon EBS local snapshots on Outposts](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;

  /**
   * The Availability Zone or Local Zone of the snapshots. For example, `us-west-1a` (Availability Zone) or `us-west-2-lax-1a` (Local Zone).
   *
   * @public
   */
  AvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotsResult {
  /**
   * List of snapshots.
   *
   * @public
   */
  Snapshots?: SnapshotInfo[] | undefined;
}

/**
 * Contains the parameters for CreateSpotDatafeedSubscription.
 *
 * @public
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For more information about bucket names, see [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix for the data feed file names.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Describes a Spot Instance state change.
 *
 * @public
 */
export interface SpotInstanceStateFault {
  /**
   * The reason code for the Spot Instance state change.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The message for the Spot Instance state change.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes the data feed for a Spot Instance.
 *
 * @public
 */
export interface SpotDatafeedSubscription {
  /**
   * The name of the Amazon S3 bucket where the Spot Instance data feed is located.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The fault codes for the Spot Instance request, if any.
   *
   * @public
   */
  Fault?: SpotInstanceStateFault | undefined;

  /**
   * The Amazon Web Services account ID of the account.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The prefix for the data feed files.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The state of the Spot Instance data feed subscription.
   *
   * @public
   */
  State?: DatafeedSubscriptionState | undefined;
}

/**
 * Contains the output of CreateSpotDatafeedSubscription.
 *
 * @public
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * The Spot Instance data feed subscription.
   *
   * @public
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription | undefined;
}

/**
 * The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. For more information, see [Categorizing your storage using tags](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface S3ObjectTag {
  /**
   * The key of the tag.
   *
   * Constraints: Tag keys are case-sensitive and can be up to 128 Unicode characters in length. May not begin with `aws`:.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * Constraints: Tag values are case-sensitive and can be up to 256 Unicode characters in length.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateStoreImageTaskRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in the Region in which the request is being made. The AMI object appears in the bucket only after the upload task has completed.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The tags to apply to the AMI object that will be stored in the Amazon S3 bucket.
   *
   * @public
   */
  S3ObjectTags?: S3ObjectTag[] | undefined;

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
export interface CreateStoreImageTaskResult {
  /**
   * The name of the stored AMI object in the S3 bucket.
   *
   * @public
   */
  ObjectKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubnetRequest {
  /**
   * The tags to assign to the subnet.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The Availability Zone or Local Zone for the subnet.
   *
   * Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we do not necessarily select a different zone for each subnet.
   *
   * To create a subnet in a Local Zone, set this value to the Local Zone ID, for example `us-west-2-lax-1a`. For information about the Regions that support Local Zones, see [Available Local Zones](https://docs.aws.amazon.com/local-zones/latest/ug/available-local-zones.html).
   *
   * To create a subnet in an Outpost, set this value to the Availability Zone for the Outpost and specify the Outpost ARN.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The AZ ID or the Local Zone ID of the subnet.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The IPv4 network range for the subnet, in CIDR notation. For example, `10.0.0.0/24`. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.
   *
   * This parameter is not supported for an IPv6 only subnet.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The IPv6 network range for the subnet, in CIDR notation. This parameter is required for an IPv6 only subnet.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also specify the Availability Zone of the Outpost subnet.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * Indicates whether to create an IPv6 only subnet.
   *
   * @public
   */
  Ipv6Native?: boolean | undefined;

  /**
   * An IPv4 IPAM pool ID for the subnet.
   *
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * An IPv4 netmask length for the subnet.
   *
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * An IPv6 IPAM pool ID for the subnet.
   *
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * An IPv6 netmask length for the subnet.
   *
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

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
export interface CreateSubnetResult {
  /**
   * Information about the subnet.
   *
   * @public
   */
  Subnet?: Subnet | undefined;
}

/**
 * @public
 */
export interface CreateSubnetCidrReservationRequest {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The IPv4 or IPV6 CIDR range to reserve.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The type of reservation. The reservation type determines how the reserved IP addresses are assigned to resources.
   *
   * - `prefix` - Amazon Web Services assigns the reserved IP addresses to network interfaces.
   * - `explicit` - You assign the reserved IP addresses to network interfaces.
   *
   * @public
   */
  ReservationType: SubnetCidrReservationType | undefined;

  /**
   * The description to assign to the subnet CIDR reservation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to assign to the subnet CIDR reservation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Describes a subnet CIDR reservation.
 *
 * @public
 */
export interface SubnetCidrReservation {
  /**
   * The ID of the subnet CIDR reservation.
   *
   * @public
   */
  SubnetCidrReservationId?: string | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The CIDR that has been reserved.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The type of reservation.
   *
   * @public
   */
  ReservationType?: SubnetCidrReservationType | undefined;

  /**
   * The ID of the account that owns the subnet CIDR reservation.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The description assigned to the subnet CIDR reservation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags assigned to the subnet CIDR reservation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetCidrReservationResult {
  /**
   * Information about the created subnet CIDR reservation.
   *
   * @public
   */
  SubnetCidrReservation?: SubnetCidrReservation | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
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
   * The tags. The `value` parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRequest {
  /**
   * The description of the Traffic Mirror filter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to a Traffic Mirror filter.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes the Traffic Mirror port range.
 *
 * @public
 */
export interface TrafficMirrorPortRange {
  /**
   * The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Describes the Traffic Mirror rule.
 *
 * @public
 */
export interface TrafficMirrorFilterRule {
  /**
   * The ID of the Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRuleId?: string | undefined;

  /**
   * The ID of the Traffic Mirror filter that the rule is associated with.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * The traffic direction assigned to the Traffic Mirror rule.
   *
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * The rule number of the Traffic Mirror rule.
   *
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * The action assigned to the Traffic Mirror rule.
   *
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * The protocol assigned to the Traffic Mirror rule.
   *
   * @public
   */
  Protocol?: number | undefined;

  /**
   * The destination port range assigned to the Traffic Mirror rule.
   *
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRange | undefined;

  /**
   * The source port range assigned to the Traffic Mirror rule.
   *
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRange | undefined;

  /**
   * The destination CIDR block assigned to the Traffic Mirror rule.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The source CIDR block assigned to the Traffic Mirror rule.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The description of the Traffic Mirror rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags on Traffic Mirroring filter rules.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the Traffic Mirror filter.
 *
 * @public
 */
export interface TrafficMirrorFilter {
  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * Information about the ingress rules that are associated with the Traffic Mirror filter.
   *
   * @public
   */
  IngressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * Information about the egress rules that are associated with the Traffic Mirror filter.
   *
   * @public
   */
  EgressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * The network service traffic that is associated with the Traffic Mirror filter.
   *
   * @public
   */
  NetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * The description of the Traffic Mirror filter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags assigned to the Traffic Mirror filter.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterResult {
  /**
   * Information about the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Information about the Traffic Mirror filter rule port range.
 *
 * @public
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * The ID of the filter that this rule is associated with.
   *
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * The type of traffic.
   *
   * @public
   */
  TrafficDirection: TrafficDirection | undefined;

  /**
   * The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
   *
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * The action to take on the filtered traffic.
   *
   * @public
   */
  RuleAction: TrafficMirrorRuleAction | undefined;

  /**
   * The destination port range.
   *
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * The source port range.
   *
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * The protocol, for example UDP, to assign to the Traffic Mirror rule.
   *
   * For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.
   *
   * @public
   */
  Protocol?: number | undefined;

  /**
   * The destination CIDR block to assign to the Traffic Mirror rule.
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * The source CIDR block to assign to the Traffic Mirror rule.
   *
   * @public
   */
  SourceCidrBlock: string | undefined;

  /**
   * The description of the Traffic Mirror rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Traffic Mirroring tags specifications.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * The Traffic Mirror rule.
   *
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionRequest {
  /**
   * The ID of the source network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The ID of the Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target.
   *
   * If you do not want to mirror the entire packet, use the `PacketLength` parameter to specify the number of bytes in each packet to mirror.
   *
   * For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default `PacketLength` will be set to 8500. Valid values are 1-8500. Setting a `PacketLength` greater than 8500 will result in an error response.
   *
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
   *
   * Valid values are 1-32766.
   *
   * @public
   */
  SessionNumber: number | undefined;

  /**
   * The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see [RFC 7348](https://datatracker.ietf.org/doc/html/rfc7348). If you do not specify a `VirtualNetworkId`, an account-wide unique ID is chosen at random.
   *
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * The description of the Traffic Mirror session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to a Traffic Mirror session.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a Traffic Mirror session.
 *
 * @public
 */
export interface TrafficMirrorSession {
  /**
   * The ID for the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSessionId?: string | undefined;

  /**
   * The ID of the Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * The ID of the Traffic Mirror filter.
   *
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * The ID of the Traffic Mirror session's network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of the account that owns the Traffic Mirror session.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet
   *
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
   *
   * Valid values are 1-32766.
   *
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * The virtual network ID associated with the Traffic Mirror session.
   *
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * The description of the Traffic Mirror session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags assigned to the Traffic Mirror session.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionResult {
  /**
   * Information about the Traffic Mirror session.
   *
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetRequest {
  /**
   * The network interface ID that is associated with the target.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
   *
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * The description of the Traffic Mirror target.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to the Traffic Mirror target.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The ID of the Gateway Load Balancer endpoint.
   *
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * Describes a Traffic Mirror target.
 *
 * @public
 */
export interface TrafficMirrorTarget {
  /**
   * The ID of the Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * The network interface ID that is attached to the target.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Load Balancer.
   *
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * The type of Traffic Mirror target.
   *
   * @public
   */
  Type?: TrafficMirrorTargetType | undefined;

  /**
   * Information about the Traffic Mirror target.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the account that owns the Traffic Mirror target.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The tags assigned to the Traffic Mirror target.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the Gateway Load Balancer endpoint.
   *
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetResult {
  /**
   * Information about the Traffic Mirror target.
   *
   * @public
   */
  TrafficMirrorTarget?: TrafficMirrorTarget | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes the options for a transit gateway.
 *
 * @public
 */
export interface TransitGatewayRequestOptions {
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is `64512`.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * Enable or disable automatic acceptance of attachment requests. Disabled by default.
   *
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * Enable or disable automatic association with the default association route table. Enabled by default.
   *
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.
   *
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * Enable or disable Equal Cost Multipath Protocol support. Enabled by default.
   *
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * Enable or disable DNS support. Enabled by default.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is disabled by default.
   *
   * For more information about security group referencing, see [Security group referencing](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security) in the *Amazon Web Services Transit Gateways Guide*.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Indicates whether multicast is enabled on the transit gateway
   *
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;

  /**
   * One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.
   *
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRequest {
  /**
   * A description of the transit gateway.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The transit gateway options.
   *
   * @public
   */
  Options?: TransitGatewayRequestOptions | undefined;

  /**
   * The tags to apply to the transit gateway.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the encryption support status for a transit gateway.
 *
 * @public
 */
export interface EncryptionSupport {
  /**
   * The current encryption state of the resource.
   *
   * @public
   */
  EncryptionState?: EncryptionStateValue | undefined;

  /**
   * A message describing the encryption state.
   *
   * @public
   */
  StateMessage?: string | undefined;
}

/**
 * Describes the options for a transit gateway.
 *
 * @public
 */
export interface TransitGatewayOptions {
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * The transit gateway CIDR blocks.
   *
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * Indicates whether attachment requests are automatically accepted.
   *
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * Indicates whether resource attachments are automatically associated with the default association route table. Enabled by default. Either `defaultRouteTableAssociation` or `defaultRouteTablePropagation` must be set to `enable` for Amazon Web Services Transit Gateway to create the default transit gateway route table.
   *
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * The ID of the default association route table.
   *
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * Indicates whether resource attachments automatically propagate routes to the default propagation route table. Enabled by default. If `defaultRouteTablePropagation` is set to `enable`, Amazon Web Services Transit Gateway creates the default transit gateway route table.
   *
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * The ID of the default propagation route table.
   *
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * Indicates whether Equal Cost Multipath Protocol support is enabled.
   *
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * Indicates whether DNS support is enabled.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is disabled by default.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Indicates whether multicast is enabled on the transit gateway
   *
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;

  /**
   * Defines if the Transit Gateway supports VPC Encryption Control.
   *
   * @public
   */
  EncryptionSupport?: EncryptionSupport | undefined;
}

/**
 * Describes a transit gateway.
 *
 * @public
 */
export interface TransitGateway {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway.
   *
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * The state of the transit gateway.
   *
   * @public
   */
  State?: TransitGatewayState | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The description of the transit gateway.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The transit gateway options.
   *
   * @public
   */
  Options?: TransitGatewayOptions | undefined;

  /**
   * The tags for the transit gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayResult {
  /**
   * Information about the transit gateway.
   *
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * The options for a Connect attachment.
 *
 * @public
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * The tunnel protocol.
   *
   * @public
   */
  Protocol: ProtocolValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectRequest {
  /**
   * The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.
   *
   * @public
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * The Connect attachment options.
   *
   * @public
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * The tags to apply to the Connect attachment.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the Connect attachment options.
 *
 * @public
 */
export interface TransitGatewayConnectOptions {
  /**
   * The tunnel protocol.
   *
   * @public
   */
  Protocol?: ProtocolValue | undefined;
}

/**
 * Describes a transit gateway Connect attachment.
 *
 * @public
 */
export interface TransitGatewayConnect {
  /**
   * The ID of the Connect attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the attachment from which the Connect attachment was created.
   *
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The state of the attachment.
   *
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Connect attachment options.
   *
   * @public
   */
  Options?: TransitGatewayConnectOptions | undefined;

  /**
   * The tags for the attachment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectResult {
  /**
   * Information about the Connect attachment.
   *
   * @public
   */
  TransitGatewayConnect?: TransitGatewayConnect | undefined;
}

/**
 * The BGP options for the Connect attachment.
 *
 * @public
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * The peer Autonomous System Number (ASN).
   *
   * @public
   */
  PeerAsn?: number | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * The ID of the Connect attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns the first available IP address from the transit gateway CIDR block.
   *
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.
   *
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * The BGP options for the Connect peer.
   *
   * @public
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions | undefined;

  /**
   * The range of inside IP addresses that are used for BGP peering. You must specify a size /29 IPv4 CIDR block from the `169.254.0.0/16` range. The first address from the range must be configured on the appliance as the BGP IP address. You can also optionally specify a size /125 IPv6 CIDR block from the `fd00::/8` range.
   *
   * @public
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * The tags to apply to the Connect peer.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The BGP configuration information.
 *
 * @public
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * The transit gateway Autonomous System Number (ASN).
   *
   * @public
   */
  TransitGatewayAsn?: number | undefined;

  /**
   * The peer Autonomous System Number (ASN).
   *
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * The interior BGP peer IP address for the transit gateway.
   *
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * The interior BGP peer IP address for the appliance.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The BGP status.
   *
   * @public
   */
  BgpStatus?: BgpStatus | undefined;
}

/**
 * Describes the Connect peer details.
 *
 * @public
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * The Connect peer IP address on the transit gateway side of the tunnel.
   *
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * The Connect peer IP address on the appliance side of the tunnel.
   *
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * The range of interior BGP peer IP addresses.
   *
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * The tunnel protocol.
   *
   * @public
   */
  Protocol?: ProtocolValue | undefined;

  /**
   * The BGP configuration details.
   *
   * @public
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[] | undefined;
}

/**
 * Describes a transit gateway Connect peer.
 *
 * @public
 */
export interface TransitGatewayConnectPeer {
  /**
   * The ID of the Connect attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeerId?: string | undefined;

  /**
   * The state of the Connect peer.
   *
   * @public
   */
  State?: TransitGatewayConnectPeerState | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Connect peer details.
   *
   * @public
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration | undefined;

  /**
   * The tags for the Connect peer.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerResult {
  /**
   * Information about the Connect peer.
   *
   * @public
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMeteringPolicyRequest {
  /**
   * The ID of the transit gateway for which to create the metering policy.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The IDs of the middlebox attachments to include in the metering policy.
   *
   * @public
   */
  MiddleboxAttachmentIds?: string[] | undefined;

  /**
   * The tags to assign to the metering policy.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway metering policy.
 *
 * @public
 */
export interface TransitGatewayMeteringPolicy {
  /**
   * The ID of the transit gateway metering policy.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId?: string | undefined;

  /**
   * The ID of the transit gateway associated with the metering policy.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The IDs of the middlebox attachments associated with the metering policy.
   *
   * @public
   */
  MiddleboxAttachmentIds?: string[] | undefined;

  /**
   * The state of the transit gateway metering policy.
   *
   * @public
   */
  State?: TransitGatewayMeteringPolicyState | undefined;

  /**
   * The date and time when the metering policy update becomes effective.
   *
   * @public
   */
  UpdateEffectiveAt?: Date | undefined;

  /**
   * The tags assigned to the transit gateway metering policy.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMeteringPolicyResult {
  /**
   * Information about the created transit gateway metering policy.
   *
   * @public
   */
  TransitGatewayMeteringPolicy?: TransitGatewayMeteringPolicy | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMeteringPolicyEntryRequest {
  /**
   * The ID of the transit gateway metering policy to add the entry to.
   *
   * @public
   */
  TransitGatewayMeteringPolicyId: string | undefined;

  /**
   * The rule number for the metering policy entry. Rules are processed in order from lowest to highest number.
   *
   * @public
   */
  PolicyRuleNumber: number | undefined;

  /**
   * The ID of the source transit gateway attachment for traffic matching.
   *
   * @public
   */
  SourceTransitGatewayAttachmentId?: string | undefined;

  /**
   * The type of the source transit gateway attachment for traffic matching. Note that the `tgw-peering` resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
   *
   * @public
   */
  SourceTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The source CIDR block for traffic matching.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The source port range for traffic matching.
   *
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * The ID of the destination transit gateway attachment for traffic matching.
   *
   * @public
   */
  DestinationTransitGatewayAttachmentId?: string | undefined;

  /**
   * The type of the destination transit gateway attachment for traffic matching. Note that the `tgw-peering` resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
   *
   * @public
   */
  DestinationTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The destination CIDR block for traffic matching.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The destination port range for traffic matching.
   *
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * The protocol for traffic matching (1, 6, 17, etc.).
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The Amazon Web Services account ID to which the metered traffic should be attributed.
   *
   * @public
   */
  MeteredAccount: TransitGatewayMeteringPayerType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the traffic matching criteria for a transit gateway metering policy rule.
 *
 * @public
 */
export interface TransitGatewayMeteringPolicyRule {
  /**
   * The ID of the source transit gateway attachment.
   *
   * @public
   */
  SourceTransitGatewayAttachmentId?: string | undefined;

  /**
   * The type of the source transit gateway attachment. Note that the `tgw-peering` resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
   *
   * @public
   */
  SourceTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The source CIDR block for the rule.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The source port range for the rule.
   *
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * The ID of the destination transit gateway attachment.
   *
   * @public
   */
  DestinationTransitGatewayAttachmentId?: string | undefined;

  /**
   * The type of the destination transit gateway attachment. Note that the `tgw-peering` resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
   *
   * @public
   */
  DestinationTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The destination CIDR block for the rule.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The destination port range for the rule.
   *
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * The protocol for the rule (1, 6, 17, etc.).
   *
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * Describes an entry in a transit gateway metering policy.
 *
 * @public
 */
export interface TransitGatewayMeteringPolicyEntry {
  /**
   * The rule number of the metering policy entry.
   *
   * @public
   */
  PolicyRuleNumber?: string | undefined;

  /**
   * The Amazon Web Services account ID to which the metered traffic is attributed.
   *
   * @public
   */
  MeteredAccount?: TransitGatewayMeteringPayerType | undefined;

  /**
   * The state of the metering policy entry.
   *
   * @public
   */
  State?: TransitGatewayMeteringPolicyEntryState | undefined;

  /**
   * The date and time when the metering policy entry was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time when the metering policy entry update becomes effective.
   *
   * @public
   */
  UpdateEffectiveAt?: Date | undefined;

  /**
   * The metering policy rule that defines traffic matching criteria.
   *
   * @public
   */
  MeteringPolicyRule?: TransitGatewayMeteringPolicyRule | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMeteringPolicyEntryResult {
  /**
   * Information about the created transit gateway metering policy entry.
   *
   * @public
   */
  TransitGatewayMeteringPolicyEntry?: TransitGatewayMeteringPolicyEntry | undefined;
}

/**
 * The options for the transit gateway multicast domain.
 *
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.
   *
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * Specify whether to enable support for statically configuring multicast group sources for a domain.
   *
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.
   *
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The options for the transit gateway multicast domain.
   *
   * @public
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions | undefined;

  /**
   * The tags for the transit gateway multicast domain.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the options for a transit gateway multicast domain.
 *
 * @public
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.
   *
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * Indicates whether support for statically configuring transit gateway multicast group sources is turned on.
   *
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.
   *
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * Describes the transit gateway multicast domain.
 *
 * @public
 */
export interface TransitGatewayMulticastDomain {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway multicast domain.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The options for the transit gateway multicast domain.
   *
   * @public
   */
  Options?: TransitGatewayMulticastDomainOptions | undefined;

  /**
   * The state of the transit gateway multicast domain.
   *
   * @public
   */
  State?: TransitGatewayMulticastDomainState | undefined;

  /**
   * The time the transit gateway multicast domain was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The tags for the transit gateway multicast domain.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * Information about the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain | undefined;
}

/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering request.
 *
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  /**
   * Indicates whether dynamic routing is enabled or disabled.
   *
   * @public
   */
  DynamicRouting?: DynamicRoutingValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The ID of the peer transit gateway with which to create the peering attachment.
   *
   * @public
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the peer transit gateway.
   *
   * @public
   */
  PeerAccountId: string | undefined;

  /**
   * The Region where the peer transit gateway is located.
   *
   * @public
   */
  PeerRegion: string | undefined;

  /**
   * Requests a transit gateway peering attachment.
   *
   * @public
   */
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions | undefined;

  /**
   * The tags to apply to the transit gateway peering attachment.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateTransitGatewayPeeringAttachmentResult {
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
export interface CreateTransitGatewayPolicyTableRequest {
  /**
   * The ID of the transit gateway used for the policy table.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The tags specification for the transit gateway policy table created during the request.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway policy table.
 *
 * @public
 */
export interface TransitGatewayPolicyTable {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The state of the transit gateway policy table
   *
   * @public
   */
  State?: TransitGatewayPolicyTableState | undefined;

  /**
   * The timestamp when the transit gateway policy table was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * he key-value pairs associated with the transit gateway policy table.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableResult {
  /**
   * Describes the created transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * A metadata key-value pair for a transit gateway policy rule.
 *
 * @public
 */
export interface TransitGatewayRequestPolicyRuleMetaData {
  /**
   * The key of the metadata pair for the policy rule.
   *
   * @public
   */
  MetaDataKey?: string | undefined;

  /**
   * The value of the metadata pair for the policy rule.
   *
   * @public
   */
  MetaDataValue?: string | undefined;
}

/**
 * The matching criteria for a transit gateway policy table entry.
 *
 * @public
 */
export interface TransitGatewayRequestPolicyRule {
  /**
   * The source CIDR block for the policy rule.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The source port or port range for the policy rule. You can specify a port range only when `Protocol` is `6` (TCP) or `17` (UDP); for all other protocols, this value must be `*`.
   *
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * The destination CIDR block for the policy rule.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The destination port or port range for the policy rule. You can specify a port range only when `Protocol` is `6` (TCP) or `17` (UDP); for all other protocols, this value must be `*`.
   *
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * The protocol for the policy rule. Valid values are `1` (ICMP), `6` (TCP), `17` (UDP), `47` (GRE), or `*` for all protocols.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The metadata key-value pair for the policy rule.
   *
   * @public
   */
  MetaData?: TransitGatewayRequestPolicyRuleMetaData | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableEntryRequest {
  /**
   * The ID of the transit gateway policy table.
   *
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * The rule number for the policy table entry. Lower rule numbers are evaluated first and take precedence.
   *
   * @public
   */
  PolicyRuleNumber: string | undefined;

  /**
   * The matching criteria for the policy table entry.
   *
   * @public
   */
  PolicyRule?: TransitGatewayRequestPolicyRule | undefined;

  /**
   * The ID of the transit gateway route table to use for traffic matching this rule.
   *
   * @public
   */
  TargetRouteTableId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the meta data tags associated with a transit gateway policy rule.
 *
 * @public
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * The key name for the transit gateway policy rule meta data tag.
   *
   * @public
   */
  MetaDataKey?: string | undefined;

  /**
   * The value of the key for the transit gateway policy rule meta data tag.
   *
   * @public
   */
  MetaDataValue?: string | undefined;
}

/**
 * Describes a rule associated with a transit gateway policy.
 *
 * @public
 */
export interface TransitGatewayPolicyRule {
  /**
   * The source CIDR block for the transit gateway policy rule.
   *
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * The source port or port range for the transit gateway policy rule.
   *
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * The destination CIDR block for the transit gateway policy rule.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The destination port or port range for the transit gateway policy rule.
   *
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * The protocol used by the transit gateway policy rule.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The meta data tags used for the transit gateway policy rule.
   *
   * @public
   */
  MetaData?: TransitGatewayPolicyRuleMetaData | undefined;
}

/**
 * Describes a transit gateway policy table entry
 *
 * @public
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * The rule number for the transit gateway policy table entry.
   *
   * @public
   */
  PolicyRuleNumber?: string | undefined;

  /**
   * The policy rule associated with the transit gateway policy table.
   *
   * @public
   */
  PolicyRule?: TransitGatewayPolicyRule | undefined;

  /**
   * The ID of the target route table.
   *
   * @public
   */
  TargetRouteTableId?: string | undefined;

  /**
   * The state of the transit gateway policy table entry.
   *
   * @public
   */
  State?: TransitGatewayPolicyTableEntryState | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableEntryResult {
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
export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the prefix list that is used for destination matches.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The ID of the attachment to which traffic is routed.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Indicates whether to drop traffic that matches this route.
   *
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway prefix list attachment.
 *
 * @public
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * Describes a prefix list reference.
 *
 * @public
 */
export interface TransitGatewayPrefixListReference {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The ID of the prefix list owner.
   *
   * @public
   */
  PrefixListOwnerId?: string | undefined;

  /**
   * The state of the prefix list reference.
   *
   * @public
   */
  State?: TransitGatewayPrefixListReferenceState | undefined;

  /**
   * Indicates whether traffic that matches this route is dropped.
   *
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * Information about the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * Information about the prefix list reference.
   *
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteRequest {
  /**
   * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Indicates whether to drop traffic that matches this route.
   *
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a route attachment.
 *
 * @public
 */
export interface TransitGatewayRouteAttachment {
  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The resource type. Note that the `tgw-peering` resource type has been deprecated.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
}

/**
 * Describes a route for a transit gateway route table.
 *
 * @public
 */
export interface TransitGatewayRoute {
  /**
   * The CIDR block used for destination matches.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of the prefix list used for destination matches.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The ID of the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * The attachments.
   *
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[] | undefined;

  /**
   * The route type.
   *
   * @public
   */
  Type?: TransitGatewayRouteType | undefined;

  /**
   * The state of the route.
   *
   * @public
   */
  State?: TransitGatewayRouteState | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteResult {
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
export interface CreateTransitGatewayRouteTableRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The tags to apply to the transit gateway route table.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway route table.
 *
 * @public
 */
export interface TransitGatewayRouteTable {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The state of the transit gateway route table.
   *
   * @public
   */
  State?: TransitGatewayRouteTableState | undefined;

  /**
   * Indicates whether this is the default association route table for the transit gateway.
   *
   * @public
   */
  DefaultAssociationRouteTable?: boolean | undefined;

  /**
   * Indicates whether this is the default propagation route table for the transit gateway.
   *
   * @public
   */
  DefaultPropagationRouteTable?: boolean | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Any tags assigned to the route table.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableResult {
  /**
   * Information about the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the peering attachment.
   *
   * @public
   */
  PeeringAttachmentId: string | undefined;

  /**
   * The tags specifications applied to the transit gateway route table announcement.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a transit gateway route table announcement.
 *
 * @public
 */
export interface TransitGatewayRouteTableAnnouncement {
  /**
   * The ID of the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the core network for the transit gateway route table announcement.
   *
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * The ID of the peer transit gateway.
   *
   * @public
   */
  PeerTransitGatewayId?: string | undefined;

  /**
   * The ID of the core network ID for the peer.
   *
   * @public
   */
  PeerCoreNetworkId?: string | undefined;

  /**
   * The ID of the peering attachment.
   *
   * @public
   */
  PeeringAttachmentId?: string | undefined;

  /**
   * The direction for the route table announcement.
   *
   * @public
   */
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection | undefined;

  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * The state of the transit gateway announcement.
   *
   * @public
   */
  State?: TransitGatewayRouteTableAnnouncementState | undefined;

  /**
   * The timestamp when the transit gateway route table announcement was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The key-value pairs associated with the route table announcement.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementResult {
  /**
   * Provides details about the transit gateway route table announcement.
   *
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * Describes the options for a VPC attachment.
 *
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * Enable or disable DNS support. The default is `enable`.
   *
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * This option is set to `enable` by default. However, at the transit gateway level the default is set to `disable`.
   *
   * For more information about security group referencing, see [Security group referencing](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security) in the *Amazon Web Services Transit Gateways Guide*.
   *
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * Specifies whether IPv6 support is enabled for the attachment. When enabled, the transit gateway network interface receives an IPv6 address. When you enable route propagation, IPv6 VPC CIDRs propagate to the transit gateway route tables. When disabled, the network interface does not receive an IPv6 address, and IPv6 routes do not propagate. The setting does not filter IPv6 traffic. The default is `disable`.
   *
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is `disable`.
   *
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * The ID of the transit gateway.
   *
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The IDs of one or more subnets. You can specify only one subnet per Availability Zone. You must specify at least one subnet, but we recommend that you specify two subnets for better availability. The transit gateway uses one IP address from each specified subnet.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The VPC attachment options.
   *
   * @public
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions | undefined;

  /**
   * The tags to apply to the VPC attachment.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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
export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * Information about the VPC attachment.
   *
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * Describes the port range for a Verified Access endpoint.
 *
 * @public
 */
export interface CreateVerifiedAccessEndpointPortRange {
  /**
   * The start of the port range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the port range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Describes the CIDR options for a Verified Access endpoint.
 *
 * @public
 */
export interface CreateVerifiedAccessEndpointCidrOptions {
  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The CIDR.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes the load balancer options when creating an Amazon Web Services Verified Access endpoint using the `load-balancer` type.
 *
 * @public
 */
export interface CreateVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ARN of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The IDs of the subnets. You can specify only one subnet per Availability Zone.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes the network interface options when creating an Amazon Web Services Verified Access endpoint using the `network-interface` type.
 *
 * @public
 */
export interface CreateVerifiedAccessEndpointEniOptions {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes the RDS options for a Verified Access endpoint.
 *
 * @public
 */
export interface CreateVerifiedAccessEndpointRdsOptions {
  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ARN of the RDS instance.
   *
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * The ARN of the DB cluster.
   *
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * The ARN of the RDS proxy.
   *
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * The RDS endpoint.
   *
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * The IDs of the subnets. You can specify only one subnet per Availability Zone.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Verified Access provides server side encryption by default to data at rest using Amazon Web Services-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 *
 * @public
 */
export interface VerifiedAccessSseSpecificationRequest {
  /**
   * Enable or disable the use of customer managed KMS keys for server side encryption.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  CustomerManagedKeyEnabled?: boolean | undefined;

  /**
   * The ARN of the KMS key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointRequest {
  /**
   * The ID of the Verified Access group to associate the endpoint with.
   *
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * The type of Verified Access endpoint to create.
   *
   * @public
   */
  EndpointType: VerifiedAccessEndpointType | undefined;

  /**
   * The type of attachment.
   *
   * @public
   */
  AttachmentType: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.
   *
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * The DNS name for users to reach your application.
   *
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * A custom identifier that is prepended to the DNS name that is generated for the endpoint.
   *
   * @public
   */
  EndpointDomainPrefix?: string | undefined;

  /**
   * The IDs of the security groups to associate with the Verified Access endpoint. Required if `AttachmentType` is set to `vpc`.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The load balancer details. This parameter is required if the endpoint type is `load-balancer`.
   *
   * @public
   */
  LoadBalancerOptions?: CreateVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * The network interface details. This parameter is required if the endpoint type is `network-interface`.
   *
   * @public
   */
  NetworkInterfaceOptions?: CreateVerifiedAccessEndpointEniOptions | undefined;

  /**
   * A description for the Verified Access endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Verified Access policy document.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The tags to assign to the Verified Access endpoint.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * The RDS details. This parameter is required if the endpoint type is `rds`.
   *
   * @public
   */
  RdsOptions?: CreateVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * The CIDR options. This parameter is required if the endpoint type is `cidr`.
   *
   * @public
   */
  CidrOptions?: CreateVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * Describes a port range.
 *
 * @public
 */
export interface VerifiedAccessEndpointPortRange {
  /**
   * The start of the port range.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the port range.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Describes the CIDR options for a Verified Access endpoint.
 *
 * @public
 */
export interface VerifiedAccessEndpointCidrOptions {
  /**
   * The CIDR.
   *
   * @public
   */
  Cidr?: string | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the `load-balancer` type.
 *
 * @public
 */
export interface VerifiedAccessEndpointLoadBalancerOptions {
  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ARN of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Options for a network-interface type endpoint.
 *
 * @public
 */
export interface VerifiedAccessEndpointEniOptions {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The IP protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The IP port number.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port ranges.
   *
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * Describes the RDS options for a Verified Access endpoint.
 *
 * @public
 */
export interface VerifiedAccessEndpointRdsOptions {
  /**
   * The protocol.
   *
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * The port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ARN of the RDS instance.
   *
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * The ARN of the DB cluster.
   *
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * The ARN of the RDS proxy.
   *
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * The RDS endpoint.
   *
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * Describes the status of a Verified Access endpoint.
 *
 * @public
 */
export interface VerifiedAccessEndpointStatus {
  /**
   * The status code of the Verified Access endpoint.
   *
   * @public
   */
  Code?: VerifiedAccessEndpointStatusCode | undefined;

  /**
   * The status message of the Verified Access endpoint.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * An Amazon Web Services Verified Access endpoint specifies the application that Amazon Web Services Verified Access provides access to. It must be attached to an Amazon Web Services Verified Access group. An Amazon Web Services Verified Access endpoint must also have an attached access policy before you attached it to a group.
 *
 * @public
 */
export interface VerifiedAccessEndpoint {
  /**
   * The ID of the Amazon Web Services Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * The ID of the Amazon Web Services Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * The ID of the Amazon Web Services Verified Access endpoint.
   *
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * The DNS name for users to reach your application.
   *
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
   *
   * @public
   */
  EndpointType?: VerifiedAccessEndpointType | undefined;

  /**
   * The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.
   *
   * @public
   */
  AttachmentType?: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * The ARN of a public TLS/SSL certificate imported into or created with ACM.
   *
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * A DNS name that is generated for the endpoint.
   *
   * @public
   */
  EndpointDomain?: string | undefined;

  /**
   * Returned if endpoint has a device trust provider attached.
   *
   * @public
   */
  DeviceValidationDomain?: string | undefined;

  /**
   * The IDs of the security groups for the endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The load balancer details if creating the Amazon Web Services Verified Access endpoint as `load-balancer`type.
   *
   * @public
   */
  LoadBalancerOptions?: VerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * The options for network-interface type endpoint.
   *
   * @public
   */
  NetworkInterfaceOptions?: VerifiedAccessEndpointEniOptions | undefined;

  /**
   * The endpoint status.
   *
   * @public
   */
  Status?: VerifiedAccessEndpointStatus | undefined;

  /**
   * A description for the Amazon Web Services Verified Access endpoint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The last updated time.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The deletion time.
   *
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The options in use for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;

  /**
   * The options for an RDS endpoint.
   *
   * @public
   */
  RdsOptions?: VerifiedAccessEndpointRdsOptions | undefined;

  /**
   * The options for a CIDR endpoint.
   *
   * @public
   */
  CidrOptions?: VerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointResult {
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
export interface CreateVerifiedAccessGroupRequest {
  /**
   * The ID of the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * A description for the Verified Access group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Verified Access policy document.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The tags to assign to the Verified Access group.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * Describes a Verified Access group.
 *
 * @public
 */
export interface VerifiedAccessGroup {
  /**
   * The ID of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * The ID of the Amazon Web Services Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * A description for the Amazon Web Services Verified Access group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Web Services account number that owns the group.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The ARN of the Verified Access group.
   *
   * @public
   */
  VerifiedAccessGroupArn?: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The last updated time.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The deletion time.
   *
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The options in use for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupResult {
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
export interface CreateVerifiedAccessInstanceRequest {
  /**
   * A description for the Verified Access instance.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to the Verified Access instance.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.
   *
   * @public
   */
  FIPSEnabled?: boolean | undefined;

  /**
   * The custom subdomain.
   *
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceResult {
  /**
   * Details about the Verified Access instance.
   *
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * Describes the options when creating an Amazon Web Services Verified Access trust provider using the `device` type.
 *
 * @public
 */
export interface CreateVerifiedAccessTrustProviderDeviceOptions {
  /**
   * The ID of the tenant application with the device-identity provider.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * Describes the OpenID Connect (OIDC) options.
 *
 * @public
 */
export interface CreateVerifiedAccessNativeApplicationOidcOptions {
  /**
   * The public signing key endpoint.
   *
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * The OIDC issuer identifier of the IdP.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The authorization endpoint of the IdP.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The token endpoint of the IdP.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The user info endpoint of the IdP.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The OAuth 2.0 client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The OAuth 2.0 client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The set of user claims to be requested from the IdP.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * Describes the options when creating an Amazon Web Services Verified Access trust provider using the `user` type.
 *
 * @public
 */
export interface CreateVerifiedAccessTrustProviderOidcOptions {
  /**
   * The OIDC issuer.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The OIDC authorization endpoint.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The OIDC token endpoint.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The OIDC user info endpoint.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The client identifier.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderRequest {
  /**
   * The type of trust provider.
   *
   * @public
   */
  TrustProviderType: TrustProviderType | undefined;

  /**
   * The type of user-based trust provider. This parameter is required when the provider type is `user`.
   *
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * The type of device-based trust provider. This parameter is required when the provider type is `device`.
   *
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;

  /**
   * The options for a OpenID Connect-compatible user-identity trust provider. This parameter is required when the provider type is `user`.
   *
   * @public
   */
  OidcOptions?: CreateVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * The options for a device-based trust provider. This parameter is required when the provider type is `device`.
   *
   * @public
   */
  DeviceOptions?: CreateVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * The identifier to be used when working with policy rules.
   *
   * @public
   */
  PolicyReferenceName: string | undefined;

  /**
   * A description for the Verified Access trust provider.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to assign to the Verified Access trust provider.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

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

  /**
   * The options for server side encryption.
   *
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * The OpenID Connect (OIDC) options.
   *
   * @public
   */
  NativeApplicationOidcOptions?: CreateVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderResult {
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
export interface CreateVolumeRequest {
  /**
   * The ID of the Availability Zone in which to create the volume. For example, `us-east-1a`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which to create the volume. For example, `use1-az1`.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * Indicates whether the volume should be encrypted. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the *Amazon EBS User Guide*.
   *
   * Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances).
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS) to provision for the volume. Required for `io1` and `io2` volumes. Optional for `gp3` volumes. Omit for all other volume types.
   *
   * Valid ranges:
   *
   * - gp3: `3,000`(*default*)`- 80,000` IOPS
   * - io1: `100 - 64,000` IOPS
   * - io2: `100 - 256,000` IOPS
   *
   * > **Note:** [Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If `KmsKeyId` is specified, the encrypted state must be `true`.
   *
   * You can specify the KMS key using any of the following:
   *
   * - Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Key alias. For example, alias/ExampleAlias.
   * - Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
   * - Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   *
   * Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost on which to create the volume.
   *
   * If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size, and you can specify a volume size that is equal to or larger than the snapshot size.
   *
   * Valid sizes:
   *
   * - gp2: `1 - 16,384` GiB
   * - gp3: `1 - 65,536` GiB
   * - io1: `4 - 16,384` GiB
   * - io2: `4 - 65,536` GiB
   * - st1 and sc1: `125 - 16,384` GiB
   * - standard: `1 - 1024` GiB
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The volume type. This parameter can be one of the following values:
   *
   * - General Purpose SSD: `gp2` | `gp3`
   * - Provisioned IOPS SSD: `io1` | `io2`
   * - Throughput Optimized HDD: `st1`
   * - Cold HDD: `sc1`
   * - Magnetic: `standard`
   *
   * > **Important:** Throughput Optimized HDD (`st1`) and Cold HDD (`sc1`) volumes can't be used as boot volumes.
   *
   * For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * Default: `gp2`
   *
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * The tags to apply to the volume during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the volume to up to 16 [Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) in the same Availability Zone. This parameter is supported with `io1` and `io2` volumes only. For more information, see [Amazon EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * The throughput to provision for the volume, in MiB/s. Supported for `gp3` volumes only. Omit for all other volume types.
   *
   * Valid Range: `125 - 2000` MiB/s
   *
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensure Idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
   *
   * This parameter is supported only for volumes created from snapshots. Omit this parameter if:
   *
   * - You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
   *
   *   > **Note:** If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
   * - You want to create a volume that is initialized at the default rate.
   *
   * For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
   *
   * Valid range: 100 - 300 MiB/s
   *
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the configuration settings for VPC Encryption Control.
 *
 * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcEncryptionControlConfiguration {
  /**
   * The encryption mode for the VPC Encryption Control configuration.
   *
   * @public
   */
  Mode: VpcEncryptionControlMode | undefined;

  /**
   * Specifies whether to exclude internet gateway traffic from encryption enforcement.
   *
   * @public
   */
  InternetGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude egress-only internet gateway traffic from encryption enforcement.
   *
   * @public
   */
  EgressOnlyInternetGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude NAT gateway traffic from encryption enforcement.
   *
   * @public
   */
  NatGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude virtual private gateway traffic from encryption enforcement.
   *
   * @public
   */
  VirtualPrivateGatewayExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC peering connection traffic from encryption enforcement.
   *
   * @public
   */
  VpcPeeringExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Lambda function traffic from encryption enforcement.
   *
   * @public
   */
  LambdaExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude VPC Lattice traffic from encryption enforcement.
   *
   * @public
   */
  VpcLatticeExclusion?: VpcEncryptionControlExclusionStateInput | undefined;

  /**
   * Specifies whether to exclude Elastic File System traffic from encryption enforcement.
   *
   * @public
   */
  ElasticFileSystemExclusion?: VpcEncryptionControlExclusionStateInput | undefined;
}

/**
 * @public
 */
export interface CreateVpcRequest {
  /**
   * The IPv4 network range for the VPC, in CIDR notation. For example, `10.0.0.0/16`. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
   *
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * The IPv6 CIDR block from the IPv6 address pool. You must also specify `Ipv6Pool` in the request.
   *
   * To let Amazon choose the IPv6 CIDR block for you, omit this parameter.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
   *
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.
   *
   * You must set `AmazonProvidedIpv6CidrBlock` to `true` to use this parameter.
   *
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;

  /**
   * Specifies the encryption control configuration to apply to the VPC during creation. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements.
   *
   * For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  VpcEncryptionControl?: VpcEncryptionControlConfiguration | undefined;

  /**
   * The tags to assign to the VPC.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tenancy options for instances launched into the VPC. For `default`, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For `dedicated`, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of `dedicated` or `host` into a dedicated tenancy VPC.
   *
   * **Important:** The `host` value cannot be used with this parameter. Use the `default` or `dedicated` values only.
   *
   * Default: `default`
   *
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block.
   *
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcResult {
  /**
   * Information about the VPC.
   *
   * @public
   */
  Vpc?: Vpc | undefined;
}

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A subnet ID.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * A VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The exclusion mode for internet gateway traffic.
   *
   * - `allow-bidirectional`: Allow all internet traffic to and from the excluded VPCs and subnets.
   * - `allow-egress`: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.
   *
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;

  /**
   * `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see [Block public access to VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html) in the *Amazon VPC User Guide*.
 *
 * @public
 */
export interface VpcBlockPublicAccessExclusion {
  /**
   * The ID of the exclusion.
   *
   * @public
   */
  ExclusionId?: string | undefined;

  /**
   * The exclusion mode for internet gateway traffic.
   *
   * - `allow-bidirectional`: Allow all internet traffic to and from the excluded VPCs and subnets.
   * - `allow-egress`: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.
   *
   * @public
   */
  InternetGatewayExclusionMode?: InternetGatewayExclusionMode | undefined;

  /**
   * The ARN of the exclusion.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The state of the exclusion.
   *
   * @public
   */
  State?: VpcBlockPublicAccessExclusionState | undefined;

  /**
   * The reason for the current exclusion state.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * When the exclusion was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * When the exclusion was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * When the exclusion was deleted.
   *
   * @public
   */
  DeletionTimestamp?: Date | undefined;

  /**
   * `tag` - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key `Owner` and the value `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionResult {
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
export interface CreateVpcEncryptionControlRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC for which to create the encryption control configuration.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The tags to apply to the VPC Encryption Control resource.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateVpcEncryptionControlResult {
  /**
   * Information about the VPC Encryption Control configuration.
   *
   * @public
   */
  VpcEncryptionControl?: VpcEncryptionControl | undefined;
}

/**
 * Describes the DNS options for an endpoint.
 *
 * @public
 */
export interface DnsOptionsSpecification {
  /**
   * The DNS records created for the endpoint.
   *
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * Indicates whether to enable private DNS only for inbound endpoints. This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.
   *
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;

  /**
   * The preference for which private domains have a private hosted zone created for and associated with the specified VPC. Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.
   *
   * - `ALL_DOMAINS` - VPC Lattice provisions private hosted zones for all custom domain names.
   * - `VERIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone only if custom domain name has been verified by the provider.
   * - `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` - VPC Lattice provisions private hosted zones for all verified custom domain names and other domain names that the resource consumer specifies. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.
   * - `SPECIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone for domain names specified by the resource consumer. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.
   *
   * @public
   */
  PrivateDnsPreference?: string | undefined;

  /**
   * Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. Only supported when private DNS is enabled and the private DNS preference is verified-domains-and-specified-domains or specified-domains-only.
   *
   * @public
   */
  PrivateDnsSpecifiedDomains?: string[] | undefined;
}

/**
 * Describes the configuration of a subnet for a VPC endpoint.
 *
 * @public
 */
export interface SubnetConfiguration {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The IPv4 address to assign to the endpoint network interface in the subnet. You must provide an IPv4 address if the VPC endpoint supports IPv4.
   *
   * If you specify an IPv4 address when modifying a VPC endpoint, we replace the existing endpoint network interface with a new endpoint network interface with this IP address. This process temporarily disconnects the subnet and the VPC endpoint.
   *
   * @public
   */
  Ipv4?: string | undefined;

  /**
   * The IPv6 address to assign to the endpoint network interface in the subnet. You must provide an IPv6 address if the VPC endpoint supports IPv6.
   *
   * If you specify an IPv6 address when modifying a VPC endpoint, we replace the existing endpoint network interface with a new endpoint network interface with this IP address. This process temporarily disconnects the subnet and the VPC endpoint.
   *
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The type of endpoint.
   *
   * For more information about the types of VPC endpoints, see [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html#concepts-vpc-endpoints) in the *Amazon Web Services PrivateLink User Guide*.
   *
   * Default: Gateway
   *
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The name of the endpoint service.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * (Gateway endpoint) The route table IDs.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * (Interface, Gateway Load Balancer endpoints, Resource, ServiceNetwork, and Tunnel endpoints only) The IDs of the subnets in which to create endpoint network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet. For a `Tunnel` endpoint, the subnets must be in the Availability Zones of the resource gateway associated with the shared resource configuration. An endpoint network interface is created only in an Availability Zone that the resource gateway is also in.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * (Interface, Resource, ServiceNetwork, and Tunnel endpoints only) The IDs of the security groups to associate with the endpoint network interfaces. If this parameter is not specified, we use the default security group for the VPC.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The IP address type for the endpoint.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The DNS options for the endpoint.
   *
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * (Interface endpoint) Indicates whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
   *
   * To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`. Use ModifyVpcAttribute to set the VPC attributes.
   *
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * The tags to associate with the endpoint.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The subnet configurations for the endpoint.
   *
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a service network that will be associated with the VPC endpoint of type service-network.
   *
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * (Resource and Tunnel endpoints only) The Amazon Resource Name (ARN) of a resource configuration associated with the VPC endpoint. The type of resource configuration depends on the endpoint type:
   *
   * - For a Resource endpoint, you can specify a resource configuration that is of type `SINGLE`, `GROUP`, or `ARN`. To reach a resource that belongs to a group, specify the parent `GROUP` resource configuration.
   * - For a Tunnel endpoint, you can specify a resource configuration that is of type `CIDR`.
   *
   * For more information about the types of resource configurations, see [Types of resource configurations](https://docs.aws.amazon.com/vpc/latest/privatelink/resource-configuration.html) in the *Amazon Web Services PrivateLink User Guide*.
   *
   * This request fails if a VPC endpoint owned by a different Amazon Web Services account already exists on a resource gateway that is enabled for `ResourceGatewayCharges` payer responsibility.
   *
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * The Region where the service is hosted. The default is the current Region.
   *
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * Describes a DNS entry.
 *
 * @public
 */
export interface DnsEntry {
  /**
   * The DNS name.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The ID of the private hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * Describes the DNS options for an endpoint.
 *
 * @public
 */
export interface DnsOptions {
  /**
   * The DNS records created for the endpoint.
   *
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * Indicates whether to enable private DNS only for inbound endpoints.
   *
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;

  /**
   * The preference for which private domains have a private hosted zone created for and associated with the specified VPC. Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.
   *
   * - `ALL_DOMAINS` - VPC Lattice provisions private hosted zones for all custom domain names.
   * - `VERIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone only if custom domain name has been verified by the provider.
   * - `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` - VPC Lattice provisions private hosted zones for all verified custom domain names and other domain names that the resource consumer specifies. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.
   * - `SPECIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone for domain names specified by the resource consumer. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.
   *
   * @public
   */
  PrivateDnsPreference?: string | undefined;

  /**
   * Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.
   *
   * @public
   */
  PrivateDnsSpecifiedDomains?: string[] | undefined;
}

/**
 * Describes a security group.
 *
 * @public
 */
export interface SecurityGroupIdentifier {
  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Prefixes of the subnet IP.
 *
 * @public
 */
export interface SubnetIpPrefixes {
  /**
   * ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * Array of SubnetIpPrefixes objects.
   *
   * @public
   */
  IpPrefixes?: string[] | undefined;
}

/**
 * The last error that occurred for a VPC endpoint.
 *
 * @public
 */
export interface LastError {
  /**
   * The error message for the VPC endpoint error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error code for the VPC endpoint error.
   *
   * @public
   */
  Code?: string | undefined;
}

/**
 * Describes a payer responsibility setting for a VPC endpoint.
 *
 * @public
 */
export interface PayerResponsibilityEntry {
  /**
   * The scope of usage/charges.
   *
   * @public
   */
  Scope?: PayerResponsibilityScope | undefined;

  /**
   * The Amazon Web Services account to which the usage is charged.
   *
   * @public
   */
  PayerResponsibilityType?: PayerResponsibilityType | undefined;
}

/**
 * Describes a VPC endpoint.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The ID of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The type of endpoint.
   *
   * For more information about the types of VPC endpoints, see [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html#concepts-vpc-endpoints) in the *Amazon Web Services PrivateLink User Guide*.
   *
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * The ID of the VPC to which the endpoint is associated.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The name of the service to which the endpoint is associated.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The state of the endpoint.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * The policy document associated with the endpoint, if applicable.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * (Gateway endpoint) The IDs of the route tables associated with the endpoint.
   *
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * (Interface, Gateway Load Balancer endpoints, Resource, ServiceNetwork, and Tunnel endpoints only) The subnets for the endpoint.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * (Interface, Resource, ServiceNetwork, and Tunnel endpoints only) Information about the security groups that are associated with the network interface.
   *
   * @public
   */
  Groups?: SecurityGroupIdentifier[] | undefined;

  /**
   * The IP address type for the endpoint.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The DNS options for the endpoint.
   *
   * @public
   */
  DnsOptions?: DnsOptions | undefined;

  /**
   * (Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.
   *
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * Indicates whether the endpoint is being managed by its service.
   *
   * @public
   */
  RequesterManaged?: boolean | undefined;

  /**
   * (Interface, Gateway Load Balancer endpoints, Resource, ServiceNetwork, and Tunnel endpoints only) The network interfaces for the endpoint.
   *
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * (Interface endpoint) The DNS entries for the endpoint.
   *
   * @public
   */
  DnsEntries?: DnsEntry[] | undefined;

  /**
   * The date and time that the endpoint was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The tags assigned to the endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the endpoint.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The last error that occurred for endpoint.
   *
   * @public
   */
  LastError?: LastError | undefined;

  /**
   * Array of IPv4 prefixes.
   *
   * @public
   */
  Ipv4Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * Array of IPv6 prefixes.
   *
   * @public
   */
  Ipv6Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * Reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * The Region where the service is hosted.
   *
   * @public
   */
  ServiceRegion?: string | undefined;

  /**
   * The payer responsibility settings for the endpoint.
   *
   * @public
   */
  PayerResponsibilities?: PayerResponsibilityEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResult {
  /**
   * Information about the endpoint.
   *
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the endpoint service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The ARN of the SNS topic for the notifications.
   *
   * @public
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * The endpoint events for which to receive notifications. Valid values are `Accept`, `Connect`, `Delete`, and `Reject`.
   *
   * @public
   */
  ConnectionEvents: string[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Describes a connection notification for a VPC endpoint or VPC endpoint service.
 *
 * @public
 */
export interface ConnectionNotification {
  /**
   * The ID of the notification.
   *
   * @public
   */
  ConnectionNotificationId?: string | undefined;

  /**
   * The ID of the endpoint service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The type of notification.
   *
   * @public
   */
  ConnectionNotificationType?: ConnectionNotificationType | undefined;

  /**
   * The ARN of the SNS topic for the notification.
   *
   * @public
   */
  ConnectionNotificationArn?: string | undefined;

  /**
   * The events for the notification. Valid values are `Accept`, `Connect`, `Delete`, and `Reject`.
   *
   * @public
   */
  ConnectionEvents?: string[] | undefined;

  /**
   * The state of the notification.
   *
   * @public
   */
  ConnectionNotificationState?: ConnectionNotificationState | undefined;

  /**
   * The Region for the endpoint service.
   *
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * Information about the notification.
   *
   * @public
   */
  ConnectionNotification?: ConnectionNotification | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether requests from service consumers to create an endpoint to your service must be accepted manually.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * (Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Network Load Balancers.
   *
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Gateway Load Balancers.
   *
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The supported IP address types. The possible values are `ipv4` and `ipv6`.
   *
   * @public
   */
  SupportedIpAddressTypes?: string[] | undefined;

  /**
   * The Regions from which service consumers can access the service.
   *
   * @public
   */
  SupportedRegions?: string[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to associate with the service.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * Information about the private DNS name for the service endpoint.
 *
 * @public
 */
export interface PrivateDnsNameConfiguration {
  /**
   * The verification state of the VPC endpoint service.
   *
   * Consumers of the endpoint service can use the private name only when the state is `verified`.
   *
   * @public
   */
  State?: DnsNameState | undefined;

  /**
   * The endpoint service verification type, for example TXT.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The value the service provider adds to the private DNS name domain record before verification.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The name of the record subdomain the service provider needs to create. The service provider adds the `value` text to the `name`.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the type of service for a VPC endpoint.
 *
 * @public
 */
export interface ServiceTypeDetail {
  /**
   * The type of service.
   *
   * @public
   */
  ServiceType?: ServiceType | undefined;
}

/**
 * Describes a supported Region.
 *
 * @public
 */
export interface SupportedRegionDetail {
  /**
   * The Region code.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The service state. The possible values are `Pending`, `Available`, `Deleting`, `Deleted`, `Failed`, and `Closed`.
   *
   * @public
   */
  ServiceState?: string | undefined;
}

/**
 * Describes a service configuration for a VPC endpoint service.
 *
 * @public
 */
export interface ServiceConfiguration {
  /**
   * The type of service.
   *
   * @public
   */
  ServiceType?: ServiceTypeDetail[] | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The service state.
   *
   * @public
   */
  ServiceState?: ServiceState | undefined;

  /**
   * The IDs of the Availability Zones in which the service is available.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The Availability Zones in which the service is available.
   *
   * Either `AvailabilityZone` or `AvailabilityZoneId` can be specified, but not both
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.
   *
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * Indicates whether the service manages its VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.
   *
   * @public
   */
  ManagesVpcEndpoints?: boolean | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.
   *
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.
   *
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * The supported IP address types.
   *
   * @public
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[] | undefined;

  /**
   * The DNS names for the service.
   *
   * @public
   */
  BaseEndpointDnsNames?: string[] | undefined;

  /**
   * The private DNS name for the service.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * Information about the endpoint service private DNS name configuration.
   *
   * @public
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration | undefined;

  /**
   * The payer responsibility.
   *
   * @public
   */
  PayerResponsibility?: PayerResponsibility | undefined;

  /**
   * The tags assigned to the service.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The supported Regions.
   *
   * @public
   */
  SupportedRegions?: SupportedRegionDetail[] | undefined;

  /**
   * Indicates whether consumers can access the service from a Region other than the Region where the service is hosted.
   *
   * @public
   */
  RemoteAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * Information about the service configuration.
   *
   * @public
   */
  ServiceConfiguration?: ServiceConfiguration | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionRequest {
  /**
   * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
   *
   * Default: The Region in which you make the request.
   *
   * @public
   */
  PeerRegion?: string | undefined;

  /**
   * The tags to assign to the peering connection.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the requester VPC. You must specify this parameter in the request.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
   *
   * @public
   */
  PeerVpcId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the accepter VPC.
   *
   * Default: Your Amazon Web Services account ID
   *
   * @public
   */
  PeerOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionResult {
  /**
   * Information about the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnection?: VpcPeeringConnection | undefined;
}

/**
 * @public
 */
export interface CreateVpnConcentratorRequest {
  /**
   * The type of VPN concentrator to create.
   *
   * @public
   */
  Type: VpnConcentratorType | undefined;

  /**
   * The ID of the transit gateway to attach the VPN concentrator to.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The tags to apply to the VPN concentrator during creation.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a VPN concentrator.
 *
 * @public
 */
export interface VpnConcentrator {
  /**
   * The ID of the VPN concentrator.
   *
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * The current state of the VPN concentrator.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The ID of the transit gateway associated with the VPN concentrator.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the transit gateway attachment for the VPN concentrator.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The type of VPN concentrator.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Any tags assigned to the VPN concentrator.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVpnConcentratorResult {
  /**
   * Information about the VPN concentrator.
   *
   * @public
   */
  VpnConcentrator?: VpnConcentrator | undefined;
}

/**
 * The IKE version that is permitted for the VPN tunnel.
 *
 * @public
 */
export interface IKEVersionsRequestListValue {
  /**
   * The IKE version.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Options for sending VPN tunnel logs to CloudWatch.
 *
 * @public
 */
export interface CloudWatchLogOptionsSpecification {
  /**
   * Enable or disable VPN tunnel logging feature. Default value is `False`.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  LogEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
   *
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * Set log format. Default format is `json`.
   *
   * Valid values: `json` | `text`
   *
   * @public
   */
  LogOutputFormat?: string | undefined;

  /**
   * Specifies whether to enable BGP logging for the VPN connection. Default value is `False`.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  BgpLogEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.
   *
   * @public
   */
  BgpLogGroupArn?: string | undefined;

  /**
   * The desired output format for BGP logs to be sent to CloudWatch. Default format is `json`.
   *
   * Valid values: `json` | `text`
   *
   * @public
   */
  BgpLogOutputFormat?: string | undefined;
}

/**
 * Options for logging VPN tunnel activity.
 *
 * @public
 */
export interface VpnTunnelLogOptionsSpecification {
  /**
   * Options for sending VPN tunnel logs to CloudWatch.
   *
   * @public
   */
  CloudWatchLogOptions?: CloudWatchLogOptionsSpecification | undefined;
}

/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * The Diffie-Hellmann group number.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * The value for the encryption algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * The value for the integrity algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * The Diffie-Hellmann group number.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * The encryption algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * The integrity algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The tunnel options for a single VPN tunnel.
 *
 * @public
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
   *
   * Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:
   *
   * - `169.254.0.0/30`
   * - `169.254.1.0/30`
   * - `169.254.2.0/30`
   * - `169.254.3.0/30`
   * - `169.254.4.0/30`
   * - `169.254.5.0/30`
   * - `169.254.169.252/30`
   *
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
   *
   * Constraints: A size /126 CIDR block from the local `fd00::/8` range.
   *
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
   *
   * Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
   *
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * The lifetime for phase 1 of the IKE negotiation, in seconds.
   *
   * Constraints: A value between 900 and 28,800.
   *
   * Default: `28800`
   *
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * The lifetime for phase 2 of the IKE negotiation, in seconds.
   *
   * Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
   *
   * Default: `3600`
   *
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
   *
   * Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
   *
   * Default: `270`
   *
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * The percentage of the rekey window (determined by `RekeyMarginTimeSeconds`) during which the rekey time is randomly selected.
   *
   * Constraints: A value between 0 and 100.
   *
   * Default: `100`
   *
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * The number of packets in an IKE replay window.
   *
   * Constraints: A value between 64 and 2048.
   *
   * Default: `1024`
   *
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * The number of seconds after which a DPD timeout occurs.
   *
   * Constraints: A value greater than or equal to 30.
   *
   * Default: `30`
   *
   * @public
   */
  DPDTimeoutSeconds?: number | undefined;

  /**
   * The action to take after DPD timeout occurs. Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
   *
   * Valid Values: `clear` | `none` | `restart`
   *
   * Default: `clear`
   *
   * @public
   */
  DPDTimeoutAction?: string | undefined;

  /**
   * One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
   *
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
   *
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
   *
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
   *
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.
   *
   * Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
   *
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[] | undefined;

  /**
   * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.
   *
   * Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
   *
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[] | undefined;

  /**
   * The IKE versions that are permitted for the VPN tunnel.
   *
   * Valid values: `ikev1` | `ikev2`
   *
   * @public
   */
  IKEVersions?: IKEVersionsRequestListValue[] | undefined;

  /**
   * The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for Amazon Web Services to initiate the IKE negotiation.
   *
   * Valid Values: `add` | `start`
   *
   * Default: `add`
   *
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * Options for logging VPN tunnel activity.
   *
   * @public
   */
  LogOptions?: VpnTunnelLogOptionsSpecification | undefined;

  /**
   * Turn on or off tunnel endpoint lifecycle control feature.
   *
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * Describes VPN connection options.
 *
 * @public
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * Indicate whether to enable acceleration for the VPN connection.
   *
   * Default: `false`
   *
   * @public
   */
  EnableAcceleration?: boolean | undefined;

  /**
   * Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.
   *
   * Default: `ipv4`
   *
   * @public
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | undefined;

  /**
   * The tunnel options for the VPN connection.
   *
   * @public
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[] | undefined;

  /**
   * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * Default: `0.0.0.0/0`
   *
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv4 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * Default: `0.0.0.0/0`
   *
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * Default: `::/0`
   *
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * Default: `::/0`
   *
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * The type of IP address assigned to the outside interface of the customer gateway device.
   *
   * Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
   *
   * Default: `PublicIpv4`
   *
   * @public
   */
  OutsideIpAddressType?: string | undefined;

  /**
   * The transit gateway attachment ID to use for the VPN tunnel.
   *
   * Required if `OutsideIpAddressType` is set to `PrivateIpv4`.
   *
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. `standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. The default value is `standard`. Existing VPN connections without a bandwidth setting will automatically default to `standard`.
   *
   * @public
   */
  TunnelBandwidth?: VpnTunnelBandwidth | undefined;

  /**
   * Indicate whether the VPN connection uses static routes only. If you are creating a VPN connection for a device that does not support BGP, you must specify `true`. Use CreateVpnConnectionRoute to create a static route.
   *
   * Default: `false`
   *
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;
}

/**
 * Contains the parameters for CreateVpnConnection.
 *
 * @public
 */
export interface CreateVpnConnectionRequest {
  /**
   * The ID of the customer gateway.
   *
   * @public
   */
  CustomerGatewayId: string | undefined;

  /**
   * The type of VPN connection (`ipsec.1`).
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The ID of the virtual private gateway. If you specify a virtual private gateway, you cannot specify a transit gateway.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the VPN concentrator to associate with the VPN connection.
   *
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * The tags to apply to the VPN connection.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies the storage mode for the pre-shared key (PSK). Valid values are `Standard`" (stored in the Site-to-Site VPN service) or `SecretsManager` (stored in Amazon Web Services Secrets Manager).
   *
   * @public
   */
  PreSharedKeyStorage?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The options for the VPN connection.
   *
   * @public
   */
  Options?: VpnConnectionOptionsSpecification | undefined;
}

/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 *
 * @public
 */
export interface IKEVersionsListValue {
  /**
   * The IKE version.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Options for sending VPN tunnel logs to CloudWatch.
 *
 * @public
 */
export interface CloudWatchLogOptions {
  /**
   * Status of VPN tunnel logging feature. Default value is `False`.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  LogEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
   *
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * Configured log format. Default format is `json`.
   *
   * Valid values: `json` | `text`
   *
   * @public
   */
  LogOutputFormat?: string | undefined;

  /**
   * Indicates whether Border Gateway Protocol (BGP) logging is enabled for the VPN connection. Default value is `False`.
   *
   * Valid values: `True` | `False`
   *
   * @public
   */
  BgpLogEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group for BGP logs.
   *
   * @public
   */
  BgpLogGroupArn?: string | undefined;

  /**
   * The output format for BGP logs sent to CloudWatch. Default format is `json`.
   *
   * Valid values: `json` | `text`
   *
   * @public
   */
  BgpLogOutputFormat?: string | undefined;
}

/**
 * Options for logging VPN tunnel activity.
 *
 * @public
 */
export interface VpnTunnelLogOptions {
  /**
   * Options for sending VPN tunnel logs to CloudWatch.
   *
   * @public
   */
  CloudWatchLogOptions?: CloudWatchLogOptions | undefined;
}

/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * The Diffie-Hellmann group number.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The encryption algorithm for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * The value for the encryption algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The integrity algorithm for phase 1 IKE negotiations.
 *
 * @public
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * The value for the integrity algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * The Diffie-Hellmann group number.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The encryption algorithm for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * The encryption algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The integrity algorithm for phase 2 IKE negotiations.
 *
 * @public
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * The integrity algorithm.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The VPN tunnel options.
 *
 * @public
 */
export interface TunnelOption {
  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * The range of inside IPv4 addresses for the tunnel.
   *
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * The range of inside IPv6 addresses for the tunnel.
   *
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and the customer gateway.
   *
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * The lifetime for phase 1 of the IKE negotiation, in seconds.
   *
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * The lifetime for phase 2 of the IKE negotiation, in seconds.
   *
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * The margin time, in seconds, before the phase 2 lifetime expires, during which the Amazon Web Services side of the VPN connection performs an IKE rekey.
   *
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * The percentage of the rekey window determined by `RekeyMarginTimeSeconds` during which the rekey time is randomly selected.
   *
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * The number of packets in an IKE replay window.
   *
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * The number of seconds after which a DPD timeout occurs.
   *
   * @public
   */
  DpdTimeoutSeconds?: number | undefined;

  /**
   * The action to take after a DPD timeout occurs.
   *
   * @public
   */
  DpdTimeoutAction?: string | undefined;

  /**
   * The permitted encryption algorithms for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[] | undefined;

  /**
   * The permitted encryption algorithms for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[] | undefined;

  /**
   * The permitted integrity algorithms for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[] | undefined;

  /**
   * The permitted integrity algorithms for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[] | undefined;

  /**
   * The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE negotiations.
   *
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[] | undefined;

  /**
   * The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE negotiations.
   *
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[] | undefined;

  /**
   * The IKE versions that are permitted for the VPN tunnel.
   *
   * @public
   */
  IkeVersions?: IKEVersionsListValue[] | undefined;

  /**
   * The action to take when the establishing the VPN tunnels for a VPN connection.
   *
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * Options for logging VPN tunnel activity.
   *
   * @public
   */
  LogOptions?: VpnTunnelLogOptions | undefined;

  /**
   * Status of tunnel endpoint lifecycle control feature.
   *
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * Describes VPN connection options.
 *
 * @public
 */
export interface VpnConnectionOptions {
  /**
   * Indicates whether acceleration is enabled for the VPN connection.
   *
   * @public
   */
  EnableAcceleration?: boolean | undefined;

  /**
   * Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
   *
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;

  /**
   * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv4 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
   *
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * The IPv6 CIDR on the Amazon Web Services side of the VPN connection.
   *
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * The type of IPv4 address assigned to the outside interface of the customer gateway.
   *
   * Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
   *
   * Default: `PublicIpv4`
   *
   * @public
   */
  OutsideIpAddressType?: string | undefined;

  /**
   * The transit gateway attachment ID in use for the VPN tunnel.
   *
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
   *
   * @public
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | undefined;

  /**
   * Indicates the VPN tunnel options.
   *
   * @public
   */
  TunnelOptions?: TunnelOption[] | undefined;

  /**
   * The configured bandwidth for the VPN tunnel. Represents the current throughput capacity setting for the tunnel connection. `standard` tunnel bandwidth supports up to 1.25 Gbps per tunnel while `large` supports up to 5 Gbps per tunnel. If no tunnel bandwidth was specified for the connection, `standard` is used as the default value.
   *
   * @public
   */
  TunnelBandwidth?: VpnTunnelBandwidth | undefined;
}

/**
 * Describes a static route for a VPN connection.
 *
 * @public
 */
export interface VpnStaticRoute {
  /**
   * The CIDR block associated with the local subnet of the customer data center.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * Indicates how the routes were provided.
   *
   * @public
   */
  Source?: VpnStaticRouteSource | undefined;

  /**
   * The current state of the static route.
   *
   * @public
   */
  State?: VpnState | undefined;
}

/**
 * Describes telemetry for a VPN tunnel.
 *
 * @public
 */
export interface VgwTelemetry {
  /**
   * The number of accepted routes.
   *
   * @public
   */
  AcceptedRouteCount?: number | undefined;

  /**
   * The date and time of the last change in status. This field is updated when changes in IKE (Phase 1), IPSec (Phase 2), or BGP status are detected.
   *
   * @public
   */
  LastStatusChange?: Date | undefined;

  /**
   * The Internet-routable IP address of the virtual private gateway's outside interface.
   *
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * The status of the VPN tunnel.
   *
   * @public
   */
  Status?: TelemetryStatus | undefined;

  /**
   * If an error occurs, a description of the error.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * Describes a VPN connection.
 *
 * @public
 */
export interface VpnConnection {
  /**
   * The category of the VPN connection. A value of `VPN` indicates an Amazon Web Services VPN connection. A value of `VPN-Classic` indicates an Amazon Web Services Classic VPN connection.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The ID of the transit gateway associated with the VPN connection.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the VPN concentrator associated with the VPN connection.
   *
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * The ARN of the core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The ARN of the core network attachment.
   *
   * @public
   */
  CoreNetworkAttachmentArn?: string | undefined;

  /**
   * The current state of the gateway association.
   *
   * @public
   */
  GatewayAssociationState?: GatewayAssociationState | undefined;

  /**
   * The VPN connection options.
   *
   * @public
   */
  Options?: VpnConnectionOptions | undefined;

  /**
   * The static routes associated with the VPN connection.
   *
   * @public
   */
  Routes?: VpnStaticRoute[] | undefined;

  /**
   * Any tags assigned to the VPN connection.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information about the VPN tunnel.
   *
   * @public
   */
  VgwTelemetry?: VgwTelemetry[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret storing the pre-shared key(s) for the VPN connection.
   *
   * @public
   */
  PreSharedKeyArn?: string | undefined;

  /**
   * The ID of the VPN connection.
   *
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * The current state of the VPN connection.
   *
   * @public
   */
  State?: VpnState | undefined;

  /**
   * The configuration information for the VPN connection's customer gateway (in the native XML format). This element is always present in the CreateVpnConnection response; however, it's present in the DescribeVpnConnections response only if the VPN connection is in the `pending` or `available` state.
   *
   * @public
   */
  CustomerGatewayConfiguration?: string | undefined;

  /**
   * The type of VPN connection.
   *
   * @public
   */
  Type?: GatewayType | undefined;

  /**
   * The ID of the customer gateway at your end of the VPN connection.
   *
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * The ID of the virtual private gateway at the Amazon Web Services side of the VPN connection.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;
}

/**
 * Contains the output of CreateVpnConnection.
 *
 * @public
 */
export interface CreateVpnConnectionResult {
  /**
   * Information about the VPN connection.
   *
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * Contains the parameters for CreateVpnConnectionRoute.
 *
 * @public
 */
export interface CreateVpnConnectionRouteRequest {
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
 * Contains the parameters for CreateVpnGateway.
 *
 * @public
 */
export interface CreateVpnGatewayRequest {
  /**
   * The Availability Zone for the virtual private gateway.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The type of VPN connection this virtual private gateway supports.
   *
   * @public
   */
  Type: GatewayType | undefined;

  /**
   * The tags to apply to the virtual private gateway.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a 32-bit ASN, it must be in the 4200000000 to 4294967294 range.
   *
   * Default: 64512
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a virtual private gateway.
 *
 * @public
 */
export interface VpnGateway {
  /**
   * The private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * Any tags assigned to the virtual private gateway.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the virtual private gateway.
   *
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * The current state of the virtual private gateway.
   *
   * @public
   */
  State?: VpnState | undefined;

  /**
   * The type of VPN connection the virtual private gateway supports.
   *
   * @public
   */
  Type?: GatewayType | undefined;

  /**
   * The Availability Zone where the virtual private gateway was created, if applicable. This field may be empty or not returned.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Any VPCs attached to the virtual private gateway.
   *
   * @public
   */
  VpcAttachments?: VpcAttachment[] | undefined;
}

/**
 * Contains the output of CreateVpnGateway.
 *
 * @public
 */
export interface CreateVpnGatewayResult {
  /**
   * Information about the virtual private gateway.
   *
   * @public
   */
  VpnGateway?: VpnGateway | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationStatusCheckRequest {
  /**
   * The ID of the application status check to delete.
   *
   * @public
   */
  ApplicationStatusCheckId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token, the service ignores the request but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

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
export interface DeleteApplicationStatusCheckResult {
  /**
   * Information about the deleted application status check.
   *
   * @public
   */
  ApplicationStatusCheck?: ApplicationStatusCheckResponseObject | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityManagerDataExportRequest {
  /**
   * The unique identifier of the data export configuration to delete.
   *
   * @public
   */
  CapacityManagerDataExportId: string | undefined;

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
export interface DeleteCapacityManagerDataExportResult {
  /**
   * The unique identifier of the deleted data export configuration.
   *
   * @public
   */
  CapacityManagerDataExportId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCarrierGatewayRequest {
  /**
   * The ID of the carrier gateway.
   *
   * @public
   */
  CarrierGatewayId: string | undefined;

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
export interface DeleteCarrierGatewayResult {
  /**
   * Information about the carrier gateway.
   *
   * @public
   */
  CarrierGateway?: CarrierGateway | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointRequest {
  /**
   * The ID of the Client VPN to be deleted.
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
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointResult {
  /**
   * The current state of the Client VPN endpoint.
   *
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointAuthorizationPolicyRequest {
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
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointAuthorizationPolicyResult {
  /**
   * The current state of the authorization policy.
   *
   * @public
   */
  Status?: ClientVpnAuthorizationPolicyStatus | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnRouteRequest {
  /**
   * The ID of the Client VPN endpoint from which the route is to be deleted.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ID of the target subnet used by the route.
   *
   * @public
   */
  TargetVpcSubnetId?: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the route to be deleted.
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
export interface DeleteClientVpnRouteResult {
  /**
   * The current state of the route.
   *
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCoipCidrRequest {
  /**
   * A customer-owned IP address range that you want to delete.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The ID of the customer-owned address pool.
   *
   * @public
   */
  CoipPoolId: string | undefined;

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
export interface DeleteCoipCidrResult {
  /**
   * Information about a range of customer-owned IP addresses.
   *
   * @public
   */
  CoipCidr?: CoipCidr | undefined;
}

/**
 * @public
 */
export interface DeleteCoipPoolRequest {
  /**
   * The ID of the CoIP pool that you want to delete.
   *
   * @public
   */
  CoipPoolId: string | undefined;

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
export interface DeleteCoipPoolResult {
  /**
   * Information about the CoIP address pool.
   *
   * @public
   */
  CoipPool?: CoipPool | undefined;
}

/**
 * Contains the parameters for DeleteCustomerGateway.
 *
 * @public
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * The ID of the customer gateway.
   *
   * @public
   */
  CustomerGatewayId: string | undefined;

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
export interface DeleteDhcpOptionsRequest {
  /**
   * The ID of the DHCP options set.
   *
   * @public
   */
  DhcpOptionsId: string | undefined;

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
export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnCode?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFleetsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IDs of the EC2 Fleets.
   *
   * Constraints: In a single request, you can specify up to 25 `instant` fleet IDs and up to 100 `maintain` or `request` fleet IDs.
   *
   * @public
   */
  FleetIds: string[] | undefined;

  /**
   * Indicates whether to terminate the associated instances when the EC2 Fleet is deleted. The default is to terminate the instances.
   *
   * To let the instances continue to run after the EC2 Fleet is deleted, specify `no-terminate-instances`. Supported only for fleets of type `maintain` and `request`.
   *
   * For `instant` fleets, you cannot specify `NoTerminateInstances`. A deleted `instant` fleet with running instances is not supported.
   *
   * @public
   */
  TerminateInstances: boolean | undefined;
}

/**
 * Describes an EC2 Fleet that was successfully deleted.
 *
 * @public
 */
export interface DeleteFleetSuccessItem {
  /**
   * The current state of the EC2 Fleet.
   *
   * @public
   */
  CurrentFleetState?: FleetStateCode | undefined;

  /**
   * The previous state of the EC2 Fleet.
   *
   * @public
   */
  PreviousFleetState?: FleetStateCode | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * Describes an EC2 Fleet error.
 *
 * @public
 */
export interface DeleteFleetError {
  /**
   * The error code.
   *
   * @public
   */
  Code?: DeleteFleetErrorCode | undefined;

  /**
   * The description for the error code.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Describes an EC2 Fleet that was not successfully deleted.
 *
 * @public
 */
export interface DeleteFleetErrorItem {
  /**
   * The error.
   *
   * @public
   */
  Error?: DeleteFleetError | undefined;

  /**
   * The ID of the EC2 Fleet.
   *
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetsResult {
  /**
   * Information about the EC2 Fleets that are successfully deleted.
   *
   * @public
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[] | undefined;

  /**
   * Information about the EC2 Fleets that are not successfully deleted.
   *
   * @public
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteFlowLogsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * One or more flow log IDs.
   *
   * Constraint: Maximum of 1000 flow log IDs.
   *
   * @public
   */
  FlowLogIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFlowLogsResult {
  /**
   * Information about the flow logs that could not be deleted successfully.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteFpgaImageRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the AFI.
   *
   * @public
   */
  FpgaImageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFpgaImageResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteImageUsageReportRequest {
  /**
   * The ID of the report to delete.
   *
   * @public
   */
  ReportId: string | undefined;

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
export interface DeleteImageUsageReportResult {
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
export interface DeleteInstanceConnectEndpointRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the EC2 Instance Connect Endpoint to delete.
   *
   * @public
   */
  InstanceConnectEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceConnectEndpointResult {
  /**
   * Information about the EC2 Instance Connect Endpoint.
   *
   * @public
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specify `true` to force delete the event window. Use the force delete parameter if the event window is currently associated with targets.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;

  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId: string | undefined;
}

/**
 * The state of the event window.
 *
 * @public
 */
export interface InstanceEventWindowStateChange {
  /**
   * The ID of the event window.
   *
   * @public
   */
  InstanceEventWindowId?: string | undefined;

  /**
   * The current state of the event window.
   *
   * @public
   */
  State?: InstanceEventWindowState | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowResult {
  /**
   * The state of the event window.
   *
   * @public
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange | undefined;
}

/**
 * @public
 */
export interface DeleteInternetGatewayRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the internet gateway.
   *
   * @public
   */
  InternetGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM to delete.
   *
   * @public
   */
  IpamId: string | undefined;

  /**
   * Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following:
   *
   * - Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes.
   *
   *   > **Note:** No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged.
   * - Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes.
   * - Deletes all IPAM pools in private scopes.
   * - Deletes all non-default private scopes in the IPAM.
   * - Deletes the default public and private scopes and the IPAM.
   *
   * @public
   */
  Cascade?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResult {
  /**
   * Information about the results of the deletion.
   *
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface DeleteIpamExternalResourceVerificationTokenRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token ID.
   *
   * @public
   */
  IpamExternalResourceVerificationTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamExternalResourceVerificationTokenResult {
  /**
   * The verification token.
   *
   * @public
   */
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken | undefined;
}

/**
 * @public
 */
export interface DeleteIpamInternetRegistryAssociationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association to delete.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamInternetRegistryAssociationResult {
  /**
   * Information about the deleted internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociation?: IpamInternetRegistryAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPolicyRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM policy to delete.
   *
   * @public
   */
  IpamPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPolicyResult {
  /**
   * Information about the deleted IPAM policy.
   *
   * An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.
   *
   * @public
   */
  IpamPolicy?: IpamPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPoolRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the pool to delete.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * Enables you to quickly delete an IPAM pool and all resources within that pool, including provisioned CIDRs, allocations, and other pools.
   *
   * > **Important:** You can only use this option to delete pools in the private scope or pools in the public scope with a source resource. A source resource is a resource used to provision CIDRs to a resource planning pool.
   *
   * @public
   */
  Cascade?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPoolResult {
  /**
   * Information about the results of the deletion.
   *
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver to delete.
   *
   * @public
   */
  IpamPrefixListResolverId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverResult {
  /**
   * Information about the IPAM prefix list resolver that was deleted.
   *
   * @public
   */
  IpamPrefixListResolver?: IpamPrefixListResolver | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverTargetRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM prefix list resolver target to delete.
   *
   * @public
   */
  IpamPrefixListResolverTargetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverTargetResult {
  /**
   * Information about the IPAM prefix list resolver target that was deleted.
   *
   * @public
   */
  IpamPrefixListResolverTarget?: IpamPrefixListResolverTarget | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The IPAM resource discovery ID.
   *
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryResult {
  /**
   * The IPAM resource discovery.
   *
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface DeleteIpamRoutingPolicyRegistrationRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM internet registry association.
   *
   * @public
   */
  IpamInternetRegistryAssociationId: string | undefined;

  /**
   * The IP address prefix in CIDR notation identifying the routing policy registration to delete.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * Forces the deletion even if it conflicts with an announced route. Default: `false`.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamRoutingPolicyRegistrationResult {
  /**
   * Information about the routing policy registration delta created by this deletion.
   *
   * @public
   */
  IpamRoutingPolicyRegistrationDelta?: IpamRoutingPolicyRegistrationDelta | undefined;
}

/**
 * @public
 */
export interface DeleteIpamScopeRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the scope to delete.
   *
   * @public
   */
  IpamScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamScopeResult {
  /**
   * Information about the results of the deletion.
   *
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface DeleteKeyPairRequest {
  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The ID of the key pair.
   *
   * @public
   */
  KeyPairId?: string | undefined;

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
export interface DeleteKeyPairResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The ID of the key pair.
   *
   * @public
   */
  KeyPairId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateRequest {
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
}
