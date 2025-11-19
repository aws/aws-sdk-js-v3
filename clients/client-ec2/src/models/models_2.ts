// smithy-typescript generated code
import {
  ApplianceModeSupportValue,
  AutoAcceptSharedAssociationsValue,
  AutoAcceptSharedAttachmentsValue,
  BgpStatus,
  ConnectionNotificationState,
  ConnectionNotificationType,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DeleteFleetErrorCode,
  DeleteQueuedReservedInstancesErrorCode,
  DeviceTrustProviderType,
  DnsNameState,
  DnsRecordIpType,
  DnsSupportValue,
  DynamicRoutingValue,
  FleetStateCode,
  GatewayAssociationState,
  GatewayType,
  Igmpv2SupportValue,
  InstanceEventWindowState,
  InternetGatewayExclusionMode,
  IpAddressType,
  Ipv6SupportValue,
  LaunchTemplateErrorCode,
  MulticastSupportValue,
  PayerResponsibility,
  ProtocolValue,
  SecurityGroupReferencingSupportValue,
  ServiceConnectivityType,
  ServiceState,
  ServiceType,
  State,
  StaticSourcesSupportValue,
  TelemetryStatus,
  Tenancy,
  TrafficDirection,
  TrafficMirrorNetworkService,
  TrafficMirrorRuleAction,
  TrafficMirrorTargetType,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayConnectPeerState,
  TransitGatewayMulticastDomainState,
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
  VpcEndpointType,
  VpnConcentratorType,
  VpnEcmpSupportValue,
  VpnState,
  VpnStaticRouteSource,
  VpnTunnelBandwidth,
} from "./enums";

import {
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipCidr,
  CoipPool,
  Tag,
  TagSpecification,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  Vpc,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";

import {
  Ec2InstanceConnectEndpoint,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamPool,
  IpamPrefixListResolver,
  IpamPrefixListResolverTarget,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
  LocalGatewayRoute,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  ManagedPrefixList,
  OperatorRequest,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  SubnetCidrReservation,
} from "./models_1";

/**
 * @public
 */
export interface CreateSubnetCidrReservationResult {
  /**
   * <p>Information about the created subnet CIDR reservation.</p>
   * @public
   */
  SubnetCidrReservation?: SubnetCidrReservation | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *          <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   * @public
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRequest {
  /**
   * <p>The description of the Traffic Mirror filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to a Traffic Mirror filter.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes the Traffic Mirror port range.</p>
 * @public
 */
export interface TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes the Traffic Mirror rule.</p>
 * @public
 */
export interface TrafficMirrorFilterRule {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * <p>The rule number of the Traffic Mirror rule.</p>
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * <p>The action assigned to the Traffic Mirror rule.</p>
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRange | undefined;

  /**
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRange | undefined;

  /**
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags on Traffic Mirroring filter rules.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes the Traffic Mirror filter.</p>
 * @public
 */
export interface TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   * @public
   */
  IngressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   * @public
   */
  EgressFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   * @public
   */
  NetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterResult {
  /**
   * <p>Information about the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 * @public
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic.</p>
   * @public
   */
  TrafficDirection: TrafficDirection | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take on the filtered traffic.</p>
   * @public
   */
  RuleAction: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The destination port range.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The source port range.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Traffic Mirroring tags specifications.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   *          <p>For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://datatracker.ietf.org/doc/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique ID is chosen at
   *          random.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 * @public
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * <p>Describes a Traffic Mirror target.</p>
 * @public
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   * @public
   */
  NetworkLoadBalancerArn?: string | undefined;

  /**
   * <p>The type of Traffic Mirror target.</p>
   * @public
   */
  Type?: TrafficMirrorTargetType | undefined;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   * @public
   */
  GatewayLoadBalancerEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTarget?: TrafficMirrorTarget | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes the options for a transit gateway.</p>
 * @public
 */
export interface TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Enable or disable DNS support. Enabled by default.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;

  /**
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The transit gateway options.</p>
   * @public
   */
  Options?: TransitGatewayRequestOptions | undefined;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the options for a transit gateway.</p>
 * @public
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   * @public
   */
  TransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default
   *          association route table. Enabled by default. Either <code>defaultRouteTableAssociation</code> or <code>defaultRouteTablePropagation</code> must be set to <code>enable</code> for Amazon Web Services Transit Gateway to create the default transit gateway route table.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>The ID of the default association route table.</p>
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default
   *          propagation route table. Enabled by default. If <code>defaultRouteTablePropagation</code>
   *          is set to <code>enable</code>,
   *          Amazon Web Services Transit Gateway creates the default transit gateway route
   *          table.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>The ID of the default propagation route table.</p>
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   * @public
   */
  MulticastSupport?: MulticastSupportValue | undefined;
}

/**
 * <p>Describes a transit gateway.</p>
 * @public
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   * @public
   */
  TransitGatewayArn?: string | undefined;

  /**
   * <p>The state of the transit gateway.</p>
   * @public
   */
  State?: TransitGatewayState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The description of the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The transit gateway options.</p>
   * @public
   */
  Options?: TransitGatewayOptions | undefined;

  /**
   * <p>The tags for the transit gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * <p>The options for a Connect attachment.</p>
 * @public
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol: ProtocolValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   * @public
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the Connect attachment options.</p>
 * @public
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol?: ProtocolValue | undefined;
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 * @public
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the attachment.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The Connect attachment options.</p>
   * @public
   */
  Options?: TransitGatewayConnectOptions | undefined;

  /**
   * <p>The tags for the attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   * @public
   */
  TransitGatewayConnect?: TransitGatewayConnect | undefined;
}

/**
 * <p>The BGP options for the Connect attachment.</p>
 * @public
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   * @public
   */
  PeerAsn?: number | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   * @public
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   * @public
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions | undefined;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   * @public
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The BGP configuration information.</p>
 * @public
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   * @public
   */
  TransitGatewayAsn?: number | undefined;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   * @public
   */
  PeerAsn?: number | undefined;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The BGP status.</p>
   * @public
   */
  BgpStatus?: BgpStatus | undefined;
}

/**
 * <p>Describes the Connect peer details.</p>
 * @public
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   * @public
   */
  TransitGatewayAddress?: string | undefined;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   * @public
   */
  InsideCidrBlocks?: string[] | undefined;

  /**
   * <p>The tunnel protocol.</p>
   * @public
   */
  Protocol?: ProtocolValue | undefined;

  /**
   * <p>The BGP configuration details.</p>
   * @public
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[] | undefined;
}

/**
 * <p>Describes a transit gateway Connect peer.</p>
 * @public
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerId?: string | undefined;

  /**
   * <p>The state of the Connect peer.</p>
   * @public
   */
  State?: TransitGatewayConnectPeerState | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The Connect peer details.</p>
   * @public
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration | undefined;

  /**
   * <p>The tags for the Connect peer.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer | undefined;
}

/**
 * <p>The options for the transit gateway multicast domain.</p>
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   * @public
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions | undefined;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   * @public
   */
  Igmpv2Support?: Igmpv2SupportValue | undefined;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   * @public
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | undefined;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   * @public
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | undefined;
}

/**
 * <p>Describes the transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainArn?: string | undefined;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   * @public
   */
  Options?: TransitGatewayMulticastDomainOptions | undefined;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   * @public
   */
  State?: TransitGatewayMulticastDomainState | undefined;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain | undefined;
}

/**
 * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering request.</p>
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  /**
   * <p>Indicates whether dynamic routing is enabled or disabled.</p>
   * @public
   */
  DynamicRouting?: DynamicRoutingValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   * @public
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   * @public
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   * @public
   */
  PeerRegion: string | undefined;

  /**
   * <p>Requests a transit gateway peering attachment.</p>
   * @public
   */
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions | undefined;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the transit gateway used for the policy table.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags specification for the transit gateway policy table created during the request.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a transit gateway policy table.</p>
 * @public
 */
export interface TransitGatewayPolicyTable {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the transit gateway policy table</p>
   * @public
   */
  State?: TransitGatewayPolicyTableState | undefined;

  /**
   * <p>The timestamp when the transit gateway policy table was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>he key-value pairs associated with the transit gateway policy table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the created transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 * @public
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * <p>Describes a prefix list reference.</p>
 * @public
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the prefix list owner.</p>
   * @public
   */
  PrefixListOwnerId?: string | undefined;

  /**
   * <p>The state of the prefix list reference.</p>
   * @public
   */
  State?: TransitGatewayPrefixListReferenceState | undefined;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * <p>Information about the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a route attachment.</p>
 * @public
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
}

/**
 * <p>Describes a route for a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement. </p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * <p>The attachments.</p>
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[] | undefined;

  /**
   * <p>The route type.</p>
   * @public
   */
  Type?: TransitGatewayRouteType | undefined;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: TransitGatewayRouteState | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The state of the transit gateway route table.</p>
   * @public
   */
  State?: TransitGatewayRouteTableState | undefined;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   * @public
   */
  DefaultAssociationRouteTable?: boolean | undefined;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   * @public
   */
  DefaultPropagationRouteTable?: boolean | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Any tags assigned to the route table.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the peering attachment.</p>
   * @public
   */
  PeeringAttachmentId: string | undefined;

  /**
   * <p>The tags specifications applied to the transit gateway route table announcement.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a transit gateway route table announcement.</p>
 * @public
 */
export interface TransitGatewayRouteTableAnnouncement {
  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the core network for the transit gateway route table announcement.</p>
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * <p>The ID of the peer transit gateway.</p>
   * @public
   */
  PeerTransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the core network ID for the peer.</p>
   * @public
   */
  PeerCoreNetworkId?: string | undefined;

  /**
   * <p>The ID of the peering attachment.</p>
   * @public
   */
  PeeringAttachmentId?: string | undefined;

  /**
   * <p>The direction for the route table announcement.</p>
   * @public
   */
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the transit gateway announcement.</p>
   * @public
   */
  State?: TransitGatewayRouteTableAnnouncementState | undefined;

  /**
   * <p>The timestamp when the transit gateway route table announcement was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The key-value pairs associated with the route table announcement.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.</p>
   *          <p>This option is set to <code>enable</code> by default. However, at the transit gateway level the default is set to <code>disable</code>.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing </a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   * @public
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions | undefined;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * <p>Describes the port range for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes the CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointCidrOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the load balancer options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * <p>The IDs of the subnets. You can specify only one subnet per Availability Zone.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the network interface options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>network-interface</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointEniOptions {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: CreateVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface CreateVerifiedAccessEndpointRdsOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the RDS instance.</p>
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * <p>The ARN of the RDS proxy.</p>
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * <p>The IDs of the subnets. You can specify only one subnet per Availability Zone.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>
 *          Verified Access provides server side encryption by default to data at rest using Amazon Web Services-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 *       </p>
 * @public
 */
export interface VerifiedAccessSseSpecificationRequest {
  /**
   * <p>
   *          Enable or disable the use of customer managed KMS keys for server side encryption.
   *       </p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  CustomerManagedKeyEnabled?: boolean | undefined;

  /**
   * <p>
   *          The ARN of the KMS key.
   *       </p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access group to associate the endpoint with.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The type of Verified Access endpoint to create.</p>
   * @public
   */
  EndpointType: VerifiedAccessEndpointType | undefined;

  /**
   * <p>The type of attachment.</p>
   * @public
   */
  AttachmentType: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * <p>The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint.
   *          The CN in the certificate must match the DNS name your end users will use to reach your
   *          application.</p>
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * <p>The DNS name for users to reach your application.</p>
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * <p>A custom identifier that is prepended to the DNS name that is generated for the
   *          endpoint.</p>
   * @public
   */
  EndpointDomainPrefix?: string | undefined;

  /**
   * <p>The IDs of the security groups to associate with the Verified Access endpoint. Required if <code>AttachmentType</code> is set to <code>vpc</code>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The load balancer details. This parameter is required if the endpoint type is
   *             <code>load-balancer</code>.</p>
   * @public
   */
  LoadBalancerOptions?: CreateVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The network interface details. This parameter is required if the endpoint type is
   *             <code>network-interface</code>.</p>
   * @public
   */
  NetworkInterfaceOptions?: CreateVerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>A description for the Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access endpoint.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The RDS details. This parameter is required if the endpoint type is <code>rds</code>.</p>
   * @public
   */
  RdsOptions?: CreateVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The CIDR options. This parameter is required if the endpoint type is <code>cidr</code>.</p>
   * @public
   */
  CidrOptions?: CreateVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * <p>Describes a port range.</p>
 * @public
 */
export interface VerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Describes the CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointCidrOptions {
  /**
   * <p>The CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface VerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Options for a network-interface type endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointEniOptions {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: VerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointRdsOptions {
  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The ARN of the RDS instance.</p>
   * @public
   */
  RdsDbInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  RdsDbClusterArn?: string | undefined;

  /**
   * <p>The ARN of the RDS proxy.</p>
   * @public
   */
  RdsDbProxyArn?: string | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * <p>Describes the status of a Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointStatus {
  /**
   * <p>The status code of the Verified Access endpoint.</p>
   * @public
   */
  Code?: VerifiedAccessEndpointStatusCode | undefined;

  /**
   * <p>The status message of the Verified Access endpoint.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>An Amazon Web Services Verified Access endpoint specifies the application that Amazon Web Services Verified Access provides access to. It must be
 *          attached to an Amazon Web Services Verified Access group. An Amazon Web Services Verified Access endpoint must also have an attached access policy
 *          before you attached it to a group.</p>
 * @public
 */
export interface VerifiedAccessEndpoint {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * <p>The DNS name for users to reach your application.</p>
   * @public
   */
  ApplicationDomain?: string | undefined;

  /**
   * <p>The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP
   *          address, load balancer or a network interface depending on the endpoint type
   *          specified.</p>
   * @public
   */
  EndpointType?: VerifiedAccessEndpointType | undefined;

  /**
   * <p>The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the
   *          application.</p>
   * @public
   */
  AttachmentType?: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * <p>The ARN of a public TLS/SSL certificate imported into or created with ACM.</p>
   * @public
   */
  DomainCertificateArn?: string | undefined;

  /**
   * <p>A DNS name that is generated for the endpoint.</p>
   * @public
   */
  EndpointDomain?: string | undefined;

  /**
   * <p>Returned if endpoint has a device trust provider attached.</p>
   * @public
   */
  DeviceValidationDomain?: string | undefined;

  /**
   * <p>The IDs of the security groups for the endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The load balancer details if creating the Amazon Web Services Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   * @public
   */
  LoadBalancerOptions?: VerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The options for network-interface type endpoint.</p>
   * @public
   */
  NetworkInterfaceOptions?: VerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>The endpoint status.</p>
   * @public
   */
  Status?: VerifiedAccessEndpointStatus | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The deletion time.</p>
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;

  /**
   * <p>The options for an RDS endpoint.</p>
   * @public
   */
  RdsOptions?: VerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The options for a CIDR endpoint.</p>
   * @public
   */
  CidrOptions?: VerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>A description for the Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access group.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * <p>Describes a Verified Access group.</p>
 * @public
 */
export interface VerifiedAccessGroup {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Web Services account number that owns the group.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ARN of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupArn?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The deletion time.</p>
   * @public
   */
  DeletionTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceRequest {
  /**
   * <p>A description for the Verified Access instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access instance.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.</p>
   * @public
   */
  FIPSEnabled?: boolean | undefined;

  /**
   * <p>The custom subdomain.</p>
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the
 *             <code>device</code> type.</p>
 * @public
 */
export interface CreateVerifiedAccessTrustProviderDeviceOptions {
  /**
   * <p>The ID of the tenant application with the device-identity provider.</p>
   * @public
   */
  TenantId?: string | undefined;

  /**
   * <p>
   *          The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *       </p>
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * <p>Describes the OpenID Connect (OIDC) options.</p>
 * @public
 */
export interface CreateVerifiedAccessNativeApplicationOidcOptions {
  /**
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

  /**
   * <p>The OIDC issuer identifier of the IdP.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The authorization endpoint of the IdP.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The token endpoint of the IdP.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The user info endpoint of the IdP.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The OAuth 2.0 client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the <code>user</code>
 *          type.</p>
 * @public
 */
export interface CreateVerifiedAccessTrustProviderOidcOptions {
  /**
   * <p>The OIDC issuer.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC authorization endpoint.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC token endpoint.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC user info endpoint.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderRequest {
  /**
   * <p>The type of trust provider.</p>
   * @public
   */
  TrustProviderType: TrustProviderType | undefined;

  /**
   * <p>The type of user-based trust provider. This parameter is required when the provider type
   *          is <code>user</code>.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * <p>The type of device-based trust provider. This parameter is required when the provider
   *          type is <code>device</code>.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;

  /**
   * <p>The options for a OpenID Connect-compatible user-identity trust provider. This parameter
   *          is required when the provider type is <code>user</code>.</p>
   * @public
   */
  OidcOptions?: CreateVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   * @public
   */
  DeviceOptions?: CreateVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * <p>The identifier to be used when working with policy rules.</p>
   * @public
   */
  PolicyReferenceName: string | undefined;

  /**
   * <p>A description for the Verified Access trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to assign to the Verified Access trust provider.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The OpenID Connect (OIDC) options.</p>
   * @public
   */
  NativeApplicationOidcOptions?: CreateVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * <p>The ID of the Availability Zone in which to create the volume. For example, <code>us-east-1a</code>.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> must be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which to create the volume. For example, <code>use1-az1</code>.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> must be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported
   *         instance types</a>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for the volume.
   *       Required for <code>io1</code> and <code>io2</code> volumes. Optional for <code>gp3</code>
   *       volumes. Omit for all other volume types. </p>
   *          <p>Valid ranges:</p>
   *          <ul>
   *             <li>
   *                <p>gp3: <code>3,000 </code>(<i>default</i>)<code> - 80,000</code> IOPS</p>
   *             </li>
   *             <li>
   *                <p>io1: <code>100 - 64,000</code> IOPS</p>
   *             </li>
   *             <li>
   *                <p>io2: <code>100 - 256,000</code> IOPS</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">
   * Instances built on the Nitro System</a> can support up to 256,000 IOPS. Other instances can support up to 32,000
   * IOPS.</p>
   *          </note>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The identifier of the KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the volume.</p>
   *          <p>If you intend to use a volume with an instance running on an outpost, then you must
   *          create the volume on the same outpost as the instance. You can't use a volume created
   *          in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size, and you can specify a volume size
   *       that is equal to or larger than the snapshot size.</p>
   *          <p>Valid sizes:</p>
   *          <ul>
   *             <li>
   *                <p>gp2: <code>1 - 16,384</code> GiB</p>
   *             </li>
   *             <li>
   *                <p>gp3: <code>1 - 65,536</code> GiB</p>
   *             </li>
   *             <li>
   *                <p>io1: <code>4 - 16,384</code> GiB</p>
   *             </li>
   *             <li>
   *                <p>io2: <code>4 - 65,536</code> GiB</p>
   *             </li>
   *             <li>
   *                <p>st1 and sc1: <code>125 - 16,384</code> GiB</p>
   *             </li>
   *             <li>
   *                <p>standard: <code>1 - 1024</code> GiB</p>
   *             </li>
   *          </ul>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Throughput Optimized HDD (<code>st1</code>) and Cold HDD (<code>sc1</code>) volumes can't be used as boot volumes.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *       volume to up to 16 <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;

  /**
   * <p>The throughput to provision for the volume, in MiB/s. Supported for <code>gp3</code>
   *       volumes only. Omit for all other volume types.</p>
   *          <p>Valid Range: <code>125 - 2000</code> MiB/s</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensure
   *         Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download
   *       the snapshot blocks from Amazon S3 to the volume. This is also known as <i>volume
   *         initialization</i>. Specifying a volume initialization rate ensures that the volume is
   *       initialized at a predictable and consistent rate after creation.</p>
   *          <p>This parameter is supported only for volumes created from snapshots. Omit this parameter
   *       if:</p>
   *          <ul>
   *             <li>
   *                <p>You want to create the volume using fast snapshot restore. You must specify a snapshot
   *           that is enabled for fast snapshot restore. In this case, the volume is fully initialized at
   *           creation.</p>
   *                <note>
   *                   <p>If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate,
   *             the volume will be initialized at the specified rate instead of fast snapshot restore.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>You want to create a volume that is initialized at the default rate.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">
   *       Initialize Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Valid range: 100 - 300 MiB/s</p>
   * @public
   */
  VolumeInitializationRate?: number | undefined;

  /**
   * <p>Reserved for internal use.</p>
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *          <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *
   *       </p>
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * <p>The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;

  /**
   * <p>The tags to assign to the VPC.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   * @public
   */
  Vpc?: Vpc | undefined;
}

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>A VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;

  /**
   * <p>
   *             <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface VpcBlockPublicAccessExclusion {
  /**
   * <p>The ID of the exclusion.</p>
   * @public
   */
  ExclusionId?: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode?: InternetGatewayExclusionMode | undefined;

  /**
   * <p>The ARN of the exclusion.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The state of the exclusion.</p>
   * @public
   */
  State?: VpcBlockPublicAccessExclusionState | undefined;

  /**
   * <p>The reason for the current exclusion state.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>When the exclusion was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>When the exclusion was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>When the exclusion was deleted.</p>
   * @public
   */
  DeletionTimestamp?: Date | undefined;

  /**
   * <p>
   *             <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details about an exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 * @public
 */
export interface DnsOptionsSpecification {
  /**
   * <p>The DNS records created for the endpoint.</p>
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * <p>Indicates whether to enable private DNS only for inbound endpoints. This option is
   *           available only for services that support both gateway and interface endpoints. It routes
   *           traffic that originates from the VPC to the gateway endpoint and traffic that originates
   *           from on-premises to the interface endpoint.</p>
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;

  /**
   * <p>
   *     The preference for which private domains have a private hosted zone created for and associated with the specified VPC. Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.
   *   </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_DOMAINS</code> - VPC Lattice provisions private hosted zones for all custom domain names.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED_DOMAINS_ONLY</code> - VPC Lattice provisions a private hosted zone only if custom domain name has been verified by the provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS</code> - VPC Lattice provisions private hosted zones for all verified custom domain names and other domain names that the resource consumer specifies. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_DOMAINS_ONLY</code> - VPC Lattice provisions a private hosted zone for domain names specified by the resource consumer. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PrivateDnsPreference?: string | undefined;

  /**
   * <p>
   * Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. Only supported when private DNS is enabled and the private DNS preference is verified-domains-and-specified-domains or specified-domains-only.
   * </p>
   * @public
   */
  PrivateDnsSpecifiedDomains?: string[] | undefined;
}

/**
 * <p>Describes the configuration of a subnet for a VPC endpoint.</p>
 * @public
 */
export interface SubnetConfiguration {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IPv4 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv4 address if the VPC endpoint supports IPv4.</p>
   *          <p>If you specify an IPv4 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   * @public
   */
  Ipv4?: string | undefined;

  /**
   * <p>The IPv6 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv6 address if the VPC endpoint supports IPv6.</p>
   *          <p>If you specify an IPv6 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of endpoint.</p>
   *          <p>Default: Gateway</p>
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the endpoint service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The route table IDs.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint
   *             network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to associate with the
   *             endpoint network interfaces. If this parameter is not specified, we use the default
   *             security group for the VPC.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *          <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>The tags to associate with the endpoint.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The subnet configurations for the endpoint.</p>
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a service network that will be associated with the VPC
   *          endpoint of type service-network.</p>
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource configuration that will be associated with
   *          the VPC endpoint of type resource.</p>
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * <p>The Region where the service is hosted. The default is the current Region.</p>
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * <p>Describes a DNS entry.</p>
 * @public
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The ID of the private hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * <p>Describes the DNS options for an endpoint.</p>
 * @public
 */
export interface DnsOptions {
  /**
   * <p>The DNS records created for the endpoint.</p>
   * @public
   */
  DnsRecordIpType?: DnsRecordIpType | undefined;

  /**
   * <p>Indicates whether to enable private DNS only for inbound endpoints.</p>
   * @public
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean | undefined;

  /**
   * <p>
   * The preference for which private domains have a private hosted zone created for and associated with the specified VPC. Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.
   * </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_DOMAINS</code> - VPC Lattice provisions private hosted zones for all custom domain names.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED_DOMAINS_ONLY</code> - VPC Lattice provisions a private hosted zone only if custom domain name has been verified by the provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS</code> - VPC Lattice provisions private hosted zones for all verified custom domain names and other domain names that the resource consumer specifies. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_DOMAINS_ONLY</code> - VPC Lattice provisions a private hosted zone for domain names specified by the resource consumer. The resource consumer specifies the domain names in the PrivateDnsSpecifiedDomains parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PrivateDnsPreference?: string | undefined;

  /**
   * <p>
   * Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. Only supported when private DNS is enabled and the private DNS preference is <code>VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS</code> or <code>SPECIFIED_DOMAINS_ONLY</code>.
   * </p>
   * @public
   */
  PrivateDnsSpecifiedDomains?: string[] | undefined;
}

/**
 * <p>Describes a security group.</p>
 * @public
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Prefixes of the subnet IP.</p>
 * @public
 */
export interface SubnetIpPrefixes {
  /**
   * <p>ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Array of SubnetIpPrefixes objects.</p>
   * @public
   */
  IpPrefixes?: string[] | undefined;
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 * @public
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   * @public
   */
  Code?: string | undefined;
}

/**
 * <p>Describes a VPC endpoint.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The type of endpoint.</p>
   * @public
   */
  VpcEndpointType?: VpcEndpointType | undefined;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The state of the endpoint.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables associated with the endpoint.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The subnets for the endpoint.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   * @public
   */
  Groups?: SecurityGroupIdentifier[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptions | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the endpoint is being managed by its service.</p>
   * @public
   */
  RequesterManaged?: boolean | undefined;

  /**
   * <p>(Interface endpoint) The network interfaces for the endpoint.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   * @public
   */
  DnsEntries?: DnsEntry[] | undefined;

  /**
   * <p>The date and time that the endpoint was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The tags assigned to the endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the endpoint.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The last error that occurred for endpoint.</p>
   * @public
   */
  LastError?: LastError | undefined;

  /**
   * <p>Array of IPv4 prefixes.</p>
   * @public
   */
  Ipv4Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * <p>Array of IPv6 prefixes.</p>
   * @public
   */
  Ipv6Prefixes?: SubnetIpPrefixes[] | undefined;

  /**
   * <p>Reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration.</p>
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * <p>The Region where the service is hosted.</p>
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResult {
  /**
   * <p>Information about the endpoint.</p>
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The ARN of the SNS topic for the notifications.</p>
   * @public
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * <p>The endpoint events for which to receive notifications. Valid values are
   *                 <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and
   *                 <code>Reject</code>.</p>
   * @public
   */
  ConnectionEvents: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 * @public
 */
export interface ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   * @public
   */
  ConnectionNotificationId?: string | undefined;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The type of notification.</p>
   * @public
   */
  ConnectionNotificationType?: ConnectionNotificationType | undefined;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   * @public
   */
  ConnectionNotificationArn?: string | undefined;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *             <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   * @public
   */
  ConnectionEvents?: string[] | undefined;

  /**
   * <p>The state of the notification.</p>
   * @public
   */
  ConnectionNotificationState?: ConnectionNotificationState | undefined;

  /**
   * <p>The Region for the endpoint service.</p>
   * @public
   */
  ServiceRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * <p>Information about the notification.</p>
   * @public
   */
  ConnectionNotification?: ConnectionNotification | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted manually.</p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers.</p>
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers.</p>
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The supported IP address types. The possible values are <code>ipv4</code> and <code>ipv6</code>.</p>
   * @public
   */
  SupportedIpAddressTypes?: string[] | undefined;

  /**
   * <p>The Regions from which service consumers can access the service.</p>
   * @public
   */
  SupportedRegions?: string[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags to associate with the service.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Information about the private DNS name for the service endpoint.</p>
 * @public
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   * @public
   */
  State?: DnsNameState | undefined;

  /**
   * <p>The endpoint service verification type, for example TXT.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 * @public
 */
export interface ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   * @public
   */
  ServiceType?: ServiceType | undefined;
}

/**
 * <p>Describes a supported Region.</p>
 * @public
 */
export interface SupportedRegionDetail {
  /**
   * <p>The Region code.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The service state. The possible values are <code>Pending</code>, <code>Available</code>,
   *             <code>Deleting</code>, <code>Deleted</code>, <code>Failed</code>, and <code>Closed</code>.</p>
   * @public
   */
  ServiceState?: string | undefined;
}

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 * @public
 */
export interface ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   * @public
   */
  ServiceType?: ServiceTypeDetail[] | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The service state.</p>
   * @public
   */
  ServiceState?: ServiceState | undefined;

  /**
   * <p>The IDs of the Availability Zones in which the service is available.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified, but not both</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   * @public
   */
  ManagesVpcEndpoints?: boolean | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The supported IP address types.</p>
   * @public
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[] | undefined;

  /**
   * <p>The DNS names for the service.</p>
   * @public
   */
  BaseEndpointDnsNames?: string[] | undefined;

  /**
   * <p>The private DNS name for the service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>Information about the endpoint service private DNS name configuration.</p>
   * @public
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration | undefined;

  /**
   * <p>The payer responsibility.</p>
   * @public
   */
  PayerResponsibility?: PayerResponsibility | undefined;

  /**
   * <p>The tags assigned to the service.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The supported Regions.</p>
   * @public
   */
  SupportedRegions?: SupportedRegionDetail[] | undefined;

  /**
   * <p>Indicates whether consumers can access the service from a Region other than the
   *             Region where the service is hosted.</p>
   * @public
   */
  RemoteAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * <p>Information about the service configuration.</p>
   * @public
   */
  ServiceConfiguration?: ServiceConfiguration | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionRequest {
  /**
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   *          <p>Default: The Region in which you make the request.</p>
   * @public
   */
  PeerRegion?: string | undefined;

  /**
   * <p>The tags to assign to the peering connection.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   * @public
   */
  PeerVpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your Amazon Web Services account ID</p>
   * @public
   */
  PeerOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnection?: VpcPeeringConnection | undefined;
}

/**
 * @public
 */
export interface CreateVpnConcentratorRequest {
  /**
   * <p>The type of VPN concentrator to create.</p>
   * @public
   */
  Type: VpnConcentratorType | undefined;

  /**
   * <p>The ID of the transit gateway to attach the VPN concentrator to.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The tags to apply to the VPN concentrator during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a VPN concentrator.</p>
 * @public
 */
export interface VpnConcentrator {
  /**
   * <p>The ID of the VPN concentrator.</p>
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * <p>The current state of the VPN concentrator.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ID of the transit gateway associated with the VPN concentrator.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment for the VPN concentrator.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The type of VPN concentrator.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Any tags assigned to the VPN concentrator.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVpnConcentratorResult {
  /**
   * <p>Information about the VPN concentrator.</p>
   * @public
   */
  VpnConcentrator?: VpnConcentrator | undefined;
}

/**
 * <p>The IKE version that is permitted for the VPN tunnel.</p>
 * @public
 */
export interface IKEVersionsRequestListValue {
  /**
   * <p>The IKE version.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 * @public
 */
export interface CloudWatchLogOptionsSpecification {
  /**
   * <p>Enable or disable VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  LogEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * <p>Set log format. Default format is <code>json</code>.</p>
   *          <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   * @public
   */
  LogOutputFormat?: string | undefined;
}

/**
 * <p>Options for logging VPN tunnel activity.</p>
 * @public
 */
export interface VpnTunnelLogOptionsSpecification {
  /**
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   * @public
   */
  CloudWatchLogOptions?: CloudWatchLogOptionsSpecification | undefined;
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The encryption algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 * @public
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The integrity algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The tunnel options for a single VPN tunnel.</p>
 * @public
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *          <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *          <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *          <p>Default: <code>270</code>
   *          </p>
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>30</code>
   *          </p>
   * @public
   */
  DPDTimeoutSeconds?: number | undefined;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   * @public
   */
  DPDTimeoutAction?: string | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   * @public
   */
  IKEVersions?: IKEVersionsRequestListValue[] | undefined;

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *          <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *          <p>Default: <code>add</code>
   *          </p>
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   * @public
   */
  LogOptions?: VpnTunnelLogOptionsSpecification | undefined;

  /**
   * <p>Turn on or off tunnel endpoint lifecycle control feature.</p>
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * <p>Describes VPN connection options.</p>
 * @public
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * <p>Indicate whether to enable acceleration for the VPN connection.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EnableAcceleration?: boolean | undefined;

  /**
   * <p>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   *          <p>Default: <code>ipv4</code>
   *          </p>
   * @public
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | undefined;

  /**
   * <p>The tunnel options for the VPN connection.</p>
   * @public
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[] | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The type of IP address assigned to the outside interface of the customer gateway device.</p>
   *          <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code>  | <code>Ipv6</code>
   *          </p>
   *          <p>Default: <code>PublicIpv4</code>
   *          </p>
   * @public
   */
  OutsideIpAddressType?: string | undefined;

  /**
   * <p>The transit gateway attachment ID to use for the VPN tunnel.</p>
   *          <p>Required if <code>OutsideIpAddressType</code> is set to <code>PrivateIpv4</code>.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>
   * 			The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput
   * 			capacity. <code>standard</code> supports up to 1.25 Gbps per tunnel, while <code>large</code> supports up to 5 Gbps per tunnel. The default value is <code>standard</code>. Existing
   * 			VPN connections without a bandwidth setting will automatically default to <code>standard</code>.
   * 		</p>
   * @public
   */
  TunnelBandwidth?: VpnTunnelBandwidth | undefined;

  /**
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a VPN
   *             connection for a device that does not support BGP, you must specify <code>true</code>.
   *             Use <a>CreateVpnConnectionRoute</a> to create a static route.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;
}

/**
 * <p>Contains the parameters for CreateVpnConnection.</p>
 * @public
 */
export interface CreateVpnConnectionRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   * @public
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you
   *             cannot specify a transit gateway.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private
   *             gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the VPN concentrator to associate with the VPN connection.</p>
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * <p>The tags to apply to the VPN connection.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Specifies the storage mode for the pre-shared key (PSK). Valid values are <code>Standard</code>" (stored in the Site-to-Site VPN service) or <code>SecretsManager</code> (stored in Amazon Web Services Secrets Manager).</p>
   * @public
   */
  PreSharedKeyStorage?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The options for the VPN connection.</p>
   * @public
   */
  Options?: VpnConnectionOptionsSpecification | undefined;
}

/**
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 * @public
 */
export interface IKEVersionsListValue {
  /**
   * <p>The IKE version.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 * @public
 */
export interface CloudWatchLogOptions {
  /**
   * <p>Status of VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  LogEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * <p>Configured log format. Default format is <code>json</code>.</p>
   *          <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   * @public
   */
  LogOutputFormat?: string | undefined;
}

/**
 * <p>Options for logging VPN tunnel activity.</p>
 * @public
 */
export interface VpnTunnelLogOptions {
  /**
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   * @public
   */
  CloudWatchLogOptions?: CloudWatchLogOptions | undefined;
}

/**
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 * @public
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 * @public
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 * @public
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 * @public
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 * @public
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * <p>The encryption algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 * @public
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * <p>The integrity algorithm.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The VPN tunnel options.</p>
 * @public
 */
export interface TunnelOption {
  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey.</p>
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code>
   *             during which the rekey time is randomly selected.</p>
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   * @public
   */
  DpdTimeoutSeconds?: number | undefined;

  /**
   * <p>The action to take after a DPD timeout occurs.</p>
   * @public
   */
  DpdTimeoutAction?: string | undefined;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[] | undefined;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[] | undefined;

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[] | undefined;

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[] | undefined;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[] | undefined;

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[] | undefined;

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   * @public
   */
  IkeVersions?: IKEVersionsListValue[] | undefined;

  /**
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   * @public
   */
  LogOptions?: VpnTunnelLogOptions | undefined;

  /**
   * <p>Status of tunnel endpoint lifecycle control feature.</p>
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * <p>Describes VPN connection options.</p>
 * @public
 */
export interface VpnConnectionOptions {
  /**
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   * @public
   */
  EnableAcceleration?: boolean | undefined;

  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be
   *             used for devices that don't support BGP.</p>
   * @public
   */
  StaticRoutesOnly?: boolean | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The type of IPv4 address assigned to the outside interface of the customer gateway.</p>
   *          <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code> | <code>Ipv6</code>
   *          </p>
   *          <p>Default: <code>PublicIpv4</code>
   *          </p>
   * @public
   */
  OutsideIpAddressType?: string | undefined;

  /**
   * <p>The transit gateway attachment ID in use for the VPN tunnel.</p>
   * @public
   */
  TransportTransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   * @public
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | undefined;

  /**
   * <p>Indicates the VPN tunnel options.</p>
   * @public
   */
  TunnelOptions?: TunnelOption[] | undefined;

  /**
   * <p>
   * 			The configured bandwidth for the VPN tunnel. Represents the current throughput capacity setting for the tunnel connection. <code>standard</code> tunnel bandwidth supports up to 1.25 Gbps per tunnel while <code>large</code>
   * 			supports up to 5 Gbps per tunnel. If no tunnel bandwidth was specified for the connection, <code>standard</code> is used as the default value.
   * 		</p>
   * @public
   */
  TunnelBandwidth?: VpnTunnelBandwidth | undefined;
}

/**
 * <p>Describes a static route for a VPN connection.</p>
 * @public
 */
export interface VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>Indicates how the routes were provided.</p>
   * @public
   */
  Source?: VpnStaticRouteSource | undefined;

  /**
   * <p>The current state of the static route.</p>
   * @public
   */
  State?: VpnState | undefined;
}

/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 * @public
 */
export interface VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   * @public
   */
  AcceptedRouteCount?: number | undefined;

  /**
   * <p>The date and time of the last change in status. This field is updated when changes in IKE (Phase 1), IPSec (Phase 2), or BGP status are detected.</p>
   * @public
   */
  LastStatusChange?: Date | undefined;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *             interface.</p>
   * @public
   */
  OutsideIpAddress?: string | undefined;

  /**
   * <p>The status of the VPN tunnel.</p>
   * @public
   */
  Status?: TelemetryStatus | undefined;

  /**
   * <p>If an error occurs, a description of the error.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Describes a VPN connection.</p>
 * @public
 */
export interface VpnConnection {
  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an Amazon Web Services VPN connection. A value of <code>VPN-Classic</code> indicates an Amazon Web Services Classic VPN connection.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the VPN concentrator associated with the VPN connection.</p>
   * @public
   */
  VpnConcentratorId?: string | undefined;

  /**
   * <p>The ARN of the core network.</p>
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * <p>The ARN of the core network attachment.</p>
   * @public
   */
  CoreNetworkAttachmentArn?: string | undefined;

  /**
   * <p>The current state of the gateway association.</p>
   * @public
   */
  GatewayAssociationState?: GatewayAssociationState | undefined;

  /**
   * <p>The VPN connection options.</p>
   * @public
   */
  Options?: VpnConnectionOptions | undefined;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   * @public
   */
  Routes?: VpnStaticRoute[] | undefined;

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the VPN tunnel.</p>
   * @public
   */
  VgwTelemetry?: VgwTelemetry[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret storing the pre-shared key(s) for the VPN connection.</p>
   * @public
   */
  PreSharedKeyArn?: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * <p>The current state of the VPN connection.</p>
   * @public
   */
  State?: VpnState | undefined;

  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native
   *             XML format). This element is always present in the <a>CreateVpnConnection</a>
   *             response; however, it's present in the <a>DescribeVpnConnections</a> response
   *             only if the VPN connection is in the <code>pending</code> or <code>available</code>
   *             state.</p>
   * @public
   */
  CustomerGatewayConfiguration?: string | undefined;

  /**
   * <p>The type of VPN connection.</p>
   * @public
   */
  Type?: GatewayType | undefined;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;
}

/**
 * <p>Contains the output of CreateVpnConnection.</p>
 * @public
 */
export interface CreateVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 * @public
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;
}

/**
 * <p>Contains the parameters for CreateVpnGateway.</p>
 * @public
 */
export interface CreateVpnGatewayRequest {
  /**
   * <p>The Availability Zone for the virtual private gateway.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   * @public
   */
  Type: GatewayType | undefined;

  /**
   * <p>The tags to apply to the virtual private gateway.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If
   *             you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a
   *             32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   *          <p>Default: 64512</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a virtual private gateway.</p>
 * @public
 */
export interface VpnGateway {
  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP
   *             session.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * <p>The current state of the virtual private gateway.</p>
   * @public
   */
  State?: VpnState | undefined;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   * @public
   */
  Type?: GatewayType | undefined;

  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable.
   *             This field may be empty or not returned.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   * @public
   */
  VpcAttachments?: VpcAttachment[] | undefined;
}

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 * @public
 */
export interface CreateVpnGatewayResult {
  /**
   * <p>Information about the virtual private gateway.</p>
   * @public
   */
  VpnGateway?: VpnGateway | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityManagerDataExportRequest {
  /**
   * <p>
   * The unique identifier of the data export configuration to delete.
   * </p>
   * @public
   */
  CapacityManagerDataExportId: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityManagerDataExportResult {
  /**
   * <p>
   * The unique identifier of the deleted data export configuration.
   * </p>
   * @public
   */
  CapacityManagerDataExportId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCarrierGatewayRequest {
  /**
   * <p>The ID of the carrier gateway.</p>
   * @public
   */
  CarrierGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   * @public
   */
  CarrierGateway?: CarrierGateway | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN to be deleted.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointResult {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   * @public
   */
  Status?: ClientVpnEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target subnet used by the route.</p>
   * @public
   */
  TargetVpcSubnetId?: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   * @public
   */
  Status?: ClientVpnRouteStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCoipCidrRequest {
  /**
   * <p> A customer-owned IP address range that you want to delete. </p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>
   *         The ID of the customer-owned address pool.
   *       </p>
   * @public
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCoipCidrResult {
  /**
   * <p>
   *        Information about a range of customer-owned IP addresses.
   *       </p>
   * @public
   */
  CoipCidr?: CoipCidr | undefined;
}

/**
 * @public
 */
export interface DeleteCoipPoolRequest {
  /**
   * <p>The ID of the CoIP pool that you want to delete. </p>
   * @public
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCoipPoolResult {
  /**
   * <p>Information about the CoIP address pool.</p>
   * @public
   */
  CoipPool?: CoipPool | undefined;
}

/**
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 * @public
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   * @public
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set.</p>
   * @public
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnCode?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   *          <p>Constraints: In a single request, you can specify up to 25 <code>instant</code> fleet
   *          IDs and up to 100 <code>maintain</code> or <code>request</code> fleet IDs. </p>
   * @public
   */
  FleetIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the associated instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>no-terminate-instances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
   * @public
   */
  TerminateInstances: boolean | undefined;
}

/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 * @public
 */
export interface DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   * @public
   */
  CurrentFleetState?: FleetStateCode | undefined;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   * @public
   */
  PreviousFleetState?: FleetStateCode | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * <p>Describes an EC2 Fleet error.</p>
 * @public
 */
export interface DeleteFleetError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: DeleteFleetErrorCode | undefined;

  /**
   * <p>The description for the error code.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 * @public
 */
export interface DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   * @public
   */
  Error?: DeleteFleetError | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetsResult {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   * @public
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[] | undefined;

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   * @public
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   * @public
   */
  FlowLogIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFlowLogsResult {
  /**
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFpgaImageResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteImageUsageReportRequest {
  /**
   * <p>The ID of the report to delete.</p>
   * @public
   */
  ReportId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteImageUsageReportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceConnectEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the EC2 Instance Connect Endpoint to delete.</p>
   * @public
   */
  InstanceConnectEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceConnectEndpointResult {
  /**
   * <p>Information about the EC2 Instance Connect Endpoint.</p>
   * @public
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specify <code>true</code> to force delete the event window. Use the force delete
   *          parameter if the event window is currently associated with targets.</p>
   * @public
   */
  ForceDelete?: boolean | undefined;

  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId: string | undefined;
}

/**
 * <p>The state of the event window.</p>
 * @public
 */
export interface InstanceEventWindowStateChange {
  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId?: string | undefined;

  /**
   * <p>The current state of the event window.</p>
   * @public
   */
  State?: InstanceEventWindowState | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowResult {
  /**
   * <p>The state of the event window.</p>
   * @public
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange | undefined;
}

/**
 * @public
 */
export interface DeleteInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the internet gateway.</p>
   * @public
   */
  InternetGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM to delete.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and
   *          any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes.</p>
   *                <note>
   *                   <p>No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all IPAM pools in private scopes.</p>
   *             </li>
   *             <li>
   *                <p>Deletes all non-default private scopes in the IPAM.</p>
   *             </li>
   *             <li>
   *                <p>Deletes the default public and private scopes and the IPAM.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Cascade?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResult {
  /**
   * <p>Information about the results of the deletion.</p>
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface DeleteIpamExternalResourceVerificationTokenRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token ID.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamExternalResourceVerificationTokenResult {
  /**
   * <p>The verification token.</p>
   * @public
   */
  IpamExternalResourceVerificationToken?: IpamExternalResourceVerificationToken | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the pool to delete.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>Enables you to quickly delete an IPAM pool and all resources within that pool, including
   *          provisioned CIDRs, allocations, and other pools.</p>
   *          <important>
   *             <p>You can only use this option to delete pools in the private scope or pools in the public scope with a source resource. A source resource is a resource used to provision CIDRs to a resource planning pool.</p>
   *          </important>
   * @public
   */
  Cascade?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPoolResult {
  /**
   * <p>Information about the results of the deletion.</p>
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver to delete.</p>
   * @public
   */
  IpamPrefixListResolverId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverResult {
  /**
   * <p>Information about the IPAM prefix list resolver that was deleted.</p>
   * @public
   */
  IpamPrefixListResolver?: IpamPrefixListResolver | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverTargetRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM prefix list resolver target to delete.</p>
   * @public
   */
  IpamPrefixListResolverTargetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPrefixListResolverTargetResult {
  /**
   * <p>Information about the IPAM prefix list resolver target that was deleted.</p>
   * @public
   */
  IpamPrefixListResolverTarget?: IpamPrefixListResolverTarget | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IPAM resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryResult {
  /**
   * <p>The IPAM resource discovery.</p>
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface DeleteIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the scope to delete.</p>
   * @public
   */
  IpamScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamScopeResult {
  /**
   * <p>Information about the results of the deletion.</p>
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteKeyPairResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version numbers of one or more launch template versions to delete. You can specify
   *             up to 200 launch template version numbers.</p>
   * @public
   */
  Versions: string[] | undefined;
}

/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 * @public
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 * @public
 */
export interface ResponseError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: LaunchTemplateErrorCode | undefined;

  /**
   * <p>The error message, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 * @public
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>The ID of the launch template.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>Information about the error.</p>
   * @public
   */
  ResponseError?: ResponseError | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions that were successfully deleted.</p>
   * @public
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[] | undefined;

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   * @public
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   *          Use a prefix list in place of <code>DestinationCidrBlock</code>. You cannot use
   *          <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableResult {
  /**
   * <p>Information about the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * <p>
   *          The ID of the local gateway route table virtual interface group association.
   *       </p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?:
    | LocalGatewayRouteTableVirtualInterfaceGroupAssociation
    | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceRequest {
  /**
   * <p>The ID of the local virtual interface to delete.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceResult {
  /**
   * <p>Information about the deleted local gateway virtual interface.</p>
   * @public
   */
  LocalGatewayVirtualInterface?: LocalGatewayVirtualInterface | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupRequest {
  /**
   * <p>The ID of the local gateway virtual interface group to delete.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupResult {
  /**
   * <p>Information about the deleted local gateway virtual interface group.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroup?: LocalGatewayVirtualInterfaceGroup | undefined;
}

/**
 * @public
 */
export interface DeleteManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface DeleteNatGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNatGatewayResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to delete.</p>
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * <p>Indicates whether the rule is an egress rule.</p>
   * @public
   */
  Egress: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeResult {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * <p>The ID of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathResult {
  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 * @public
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 * @public
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface permission.</p>
   * @public
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * <p>Specify <code>true</code> to remove the permission even if the network interface is
   *             attached to an instance.</p>
   * @public
   */
  Force?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 * @public
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * <p>Is <code>true</code> if the request succeeds and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DeletePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the public IPv4 pool you want to delete.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicIpv4PoolResult {
  /**
   * <p>Information about the result of deleting the public IPv4 pool.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedReservedInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Reserved Instances.</p>
   * @public
   */
  ReservedInstancesIds: string[] | undefined;
}

/**
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be
 *       deleted.</p>
 * @public
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 * @public
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * <p>The error.</p>
   * @public
   */
  Error?: DeleteQueuedReservedInstancesError | undefined;

  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 * @public
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedReservedInstancesResult {
  /**
   * <p>Information about the queued purchases that were successfully deleted.</p>
   * @public
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[] | undefined;

  /**
   * <p>Information about the queued purchases that could not be deleted.</p>
   * @public
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[] | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * <p>The ID of the prefix list for the route.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerRequest {
  /**
   * <p>The ID of the route server to delete.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerResult {
  /**
   * <p>Information about the deleted route server.</p>
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerEndpointRequest {
  /**
   * <p>The ID of the route server endpoint to delete.</p>
   * @public
   */
  RouteServerEndpointId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerEndpointResult {
  /**
   * <p>Information about the deleted route server endpoint.</p>
   * @public
   */
  RouteServerEndpoint?: RouteServerEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerPeerRequest {
  /**
   * <p>The ID of the route server peer to delete.</p>
   * @public
   */
  RouteServerPeerId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRouteServerPeerResult {
  /**
   * <p>Information about the deleted route server peer.</p>
   * @public
   */
  RouteServerPeer?: RouteServerPeer | undefined;
}

/**
 * @public
 */
export interface DeleteRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupRequest {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You can specify either the
   *             security group name or the security group ID. For security groups in a nondefault VPC,
   *             you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The ID of the deleted security group.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The ID of the EBS snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 * @public
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetRequest {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   * @public
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetCidrReservationResult {
  /**
   * <p>Information about the deleted subnet CIDR reservation.</p>
   * @public
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation | undefined;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *          <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   * @public
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags to delete. Specify a tag key and an optional tag value to delete
   *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
   *             key regardless of its value. If you specify a tag key with an empty string as the tag
   *             value, we delete the tag only if its value is an empty string.</p>
   *          <p>If you omit this parameter, we delete all user-defined tags for the specified
   *             resources. We do not delete Amazon Web Services-generated tags (tags that have the <code>aws:</code>
   *             prefix).</p>
   *          <p>Constraints: Up to 1000 tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterResult {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorSessionResult {
  /**
   * <p>The ID of the deleted Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetRequest {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficMirrorTargetResult {
  /**
   * <p>The ID of the deleted Traffic Mirror target.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayResult {
  /**
   * <p>Information about the deleted transit gateway.</p>
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectResult {
  /**
   * <p>Information about the deleted Connect attachment.</p>
   * @public
   */
  TransitGatewayConnect?: TransitGatewayConnect | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the deleted Connect peer.</p>
   * @public
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the deleted transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableRequest {
  /**
   * <p>The transit gateway policy table to delete.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPolicyTableResult {
  /**
   * <p>Provides details about the deleted transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the deleted prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementRequest {
  /**
   * <p>The transit gateway route table ID that's being deleted. </p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayRouteTableAnnouncementResult {
  /**
   * <p>Provides details about a deleted transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpcRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the exclusion.</p>
   * @public
   */
  ExclusionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details about an exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the notifications.</p>
   * @public
   */
  ConnectionNotificationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}
