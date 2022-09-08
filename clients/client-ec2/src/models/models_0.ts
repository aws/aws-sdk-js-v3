// smithy-typescript generated code
/**
 * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips)
 *          on an instance.</p>
 */
export interface AcceleratorCount {
  /**
   * <p>The minimum number of accelerators. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of accelerators. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips)
 *          on an instance. To exclude accelerator-enabled instance types, set <code>Max</code> to
 *             <code>0</code>.</p>
 */
export interface AcceleratorCountRequest {
  /**
   * <p>The minimum number of accelerators. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of accelerators. To specify no maximum limit, omit this
   *          parameter. To exclude accelerator-enabled instance types, set <code>Max</code> to
   *          <code>0</code>.</p>
   */
  Max?: number;
}

export enum AcceleratorManufacturer {
  AMAZON_WEB_SERVICES = "amazon-web-services",
  AMD = "amd",
  NVIDIA = "nvidia",
  XILINX = "xilinx",
}

export enum AcceleratorName {
  A100 = "a100",
  K80 = "k80",
  M60 = "m60",
  RADEON_PRO_V520 = "radeon-pro-v520",
  T4 = "t4",
  V100 = "v100",
  VU9P = "vu9p",
}

/**
 * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
 */
export interface AcceleratorTotalMemoryMiB {
  /**
   * <p>The minimum amount of accelerator memory, in MiB. If this parameter is not specified,
   *          there is no minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. If this parameter is not specified,
   *          there is no maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * <p>The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

export enum AcceleratorType {
  FPGA = "fpga",
  GPU = "gpu",
  INFERENCE = "inference",
}

/**
 * <p>Details about the target configuration.</p>
 */
export interface TargetConfigurationRequest {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is reserved and cannot
   *       be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The Convertible Reserved Instance offering ID.</p>
   */
  OfferingId: string | undefined;
}

/**
 * <p>Contains the parameters for accepting the quote.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange for another Convertible
   *             Reserved Instance of the same or higher value.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * <p>The ID of the successful exchange.</p>
   */
  ExchangeId?: string;
}

export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type TransitGatewayAttachmentResourceType =
  | "connect"
  | "direct-connect-gateway"
  | "peering"
  | "tgw-peering"
  | "vpc"
  | "vpn";

export type TransitGatewayMulitcastDomainAssociationState =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "pendingAcceptance"
  | "rejected";

/**
 * <p>Describes the subnet association with the transit gateway multicast domain.</p>
 */
export interface SubnetAssociation {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The state of the subnet association.</p>
   */
  State?: TransitGatewayMulitcastDomainAssociationState | string;
}

/**
 * <p>Describes the multicast domain associations.</p>
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnets associated with the multicast domain.</p>
   */
  Subnets?: SubnetAssociation[];
}

export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Describes the multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about the transit gateway in the peering attachment.</p>
 */
export interface PeeringTgwInfo {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the core network where the transit gateway peer is located.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Region of the transit gateway.</p>
   */
  Region?: string;
}

export enum DynamicRoutingValue {
  disable = "disable",
  enable = "enable",
}

/**
 * <p>Describes dynamic routing for the transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeeringAttachmentOptions {
  /**
   * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.</p>
   */
  DynamicRouting?: DynamicRoutingValue | string;
}

export type TransitGatewayAttachmentState =
  | "available"
  | "deleted"
  | "deleting"
  | "failed"
  | "failing"
  | "initiating"
  | "initiatingRequest"
  | "modifying"
  | "pending"
  | "pendingAcceptance"
  | "rejected"
  | "rejecting"
  | "rollingBack";

/**
 * <p>The status of the transit gateway peering attachment.</p>
 */
export interface PeeringAttachmentStatus {
  /**
   * <p>The status code.</p>
   */
  Code?: string;

  /**
   * <p>The status message, if applicable.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters.
   *          May not begin with <code>aws:</code>.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.</p>
   */
  Value?: string;
}

/**
 * <p>Describes the transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the accepter transit gateway attachment.</p>
   */
  AccepterTransitGatewayAttachmentId?: string;

  /**
   * <p>Information about the requester transit gateway.</p>
   */
  RequesterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Information about the accepter transit gateway.</p>
   */
  AccepterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Details about the transit gateway peering attachment.</p>
   */
  Options?: TransitGatewayPeeringAttachmentOptions;

  /**
   * <p>The status of the transit gateway peering attachment.</p>
   */
  Status?: PeeringAttachmentStatus;

  /**
   * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The time the transit gateway peering attachment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway peering attachment.</p>
   */
  Tags?: Tag[];
}

export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export interface AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type ApplianceModeSupportValue = "disable" | "enable";

export type DnsSupportValue = "disable" | "enable";

export type Ipv6SupportValue = "disable" | "enable";

/**
 * <p>Describes the VPC attachment options.</p>
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether IPv6 support is disabled.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Indicates whether appliance mode support is enabled.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface TransitGatewayVpcAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  VpcOwnerId?: string;

  /**
   * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: TransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   */
  Tags?: Tag[];
}

export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * <p>The VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC endpoint service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of one or more interface VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * <p>Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
 */
export interface UnsuccessfulItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   */
  Message?: string;
}

/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 */
export interface UnsuccessfulItem {
  /**
   * <p>Information about the error.</p>
   */
  Error?: UnsuccessfulItemError;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export interface AcceptVpcEndpointConnectionsResult {
  /**
   * <p>Information about the interface endpoints that were not accepted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface AcceptVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection. You must specify this parameter in the
   * 			request.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * <p>Describes an IPv4 CIDR block.</p>
 */
export interface CidrBlock {
  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;
}

/**
 * <p>Describes an IPv6 CIDR block.</p>
 */
export interface Ipv6CidrBlock {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;
}

/**
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Describes the VPC peering connection options.</p>
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

/**
 * <p>Describes a VPC in a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * <p>The IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[];

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   */
  CidrBlockSet?: CidrBlock[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region in which the VPC is located.</p>
   */
  Region?: string;
}

export type VpcPeeringConnectionStateReasonCode =
  | "active"
  | "deleted"
  | "deleting"
  | "expired"
  | "failed"
  | "initiating-request"
  | "pending-acceptance"
  | "provisioning"
  | "rejected";

/**
 * <p>Describes the status of a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Code?: VpcPeeringConnectionStateReasonCode | string;

  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a VPC peering connection.</p>
 */
export interface VpcPeeringConnection {
  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The status of the VPC peering connection.</p>
   */
  Status?: VpcPeeringConnectionStateReason;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export interface AcceptVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

/**
 * <p>Describes a range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the range.</p>
   */
  From?: number;

  /**
   * <p>The last port in the range.</p>
   */
  To?: number;
}

/**
 * <p>Describes a network access control (ACL) rule.</p>
 */
export interface AnalysisAclRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>Indicates whether the rule is an outbound rule.</p>
   */
  Egress?: boolean;

  /**
   * <p>The range of ports.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny traffic that matches the rule.</p>
   */
  RuleAction?: string;

  /**
   * <p>The rule number.</p>
   */
  RuleNumber?: number;
}

/**
 * <p>Describes a path component.</p>
 */
export interface AnalysisComponent {
  /**
   * <p>The ID of the component.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the analysis component.</p>
   */
  Name?: string;
}

/**
 * <p>Describes an additional detail for a path analysis.</p>
 */
export interface AdditionalDetail {
  /**
   * <p>The information type.</p>
   */
  AdditionalDetailType?: string;

  /**
   * <p>The path component.</p>
   */
  Component?: AnalysisComponent;
}

/**
 * <p>Describes a header. Reflects any changes made by a component as traffic passes through.
 *          The fields of an inbound header are null except for the first component of a path.</p>
 */
export interface AnalysisPacketHeader {
  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The destination port ranges.</p>
   */
  DestinationPortRanges?: PortRange[];

  /**
   * <p>The protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The source port ranges.</p>
   */
  SourcePortRanges?: PortRange[];
}

/**
 * <p>Describes a route table route.</p>
 */
export interface AnalysisRouteTableRoute {
  /**
   * <p>The destination IPv4 address, in CIDR notation.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of the gateway, such as an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of the instance, such as a NAT instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>CreateRouteTable - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>CreateRoute - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>EnableVgwRoutePropagation - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * <p>Describes a security group rule.</p>
 */
export interface AnalysisSecurityGroupRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The security group ID.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The port range.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The prefix list ID.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The protocol name.</p>
   */
  Protocol?: string;
}

/**
 * <p>Describes a route in a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTableRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The state of the route.</p>
   */
  State?: string;

  /**
   * <p>The route origin. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>static</p>
   *             </li>
   *             <li>
   *                <p>propagated</p>
   *             </li>
   *          </ul>
   */
  RouteOrigin?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the route attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the resource for the route attachment.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type for the route attachment.</p>
   */
  ResourceType?: string;
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number.</p>
   */
  SequenceNumber?: number;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The resource to which the path component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The outbound header.</p>
   */
  OutboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The inbound header.</p>
   */
  InboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The additional details.</p>
   */
  AdditionalDetails?: AdditionalDetail[];

  /**
   * <p>The transit gateway.</p>
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The route in a transit gateway route table.</p>
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
}

/**
 * <p>Describes a finding for a Network Access Scope.</p>
 */
export interface AccessScopeAnalysisFinding {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The ID of the finding.</p>
   */
  FindingId?: string;

  /**
   * <p>The finding components.</p>
   */
  FindingComponents?: PathComponent[];
}

export type Protocol = "tcp" | "udp";

/**
 * <p>Describes a packet header statement.</p>
 */
export interface PacketHeaderStatement {
  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The source ports.</p>
   */
  SourcePorts?: string[];

  /**
   * <p>The destination ports.</p>
   */
  DestinationPorts?: string[];

  /**
   * <p>The source prefix lists.</p>
   */
  SourcePrefixLists?: string[];

  /**
   * <p>The destination prefix lists.</p>
   */
  DestinationPrefixLists?: string[];

  /**
   * <p>The protocols.</p>
   */
  Protocols?: (Protocol | string)[];
}

/**
 * <p>Describes a resource statement.</p>
 */
export interface ResourceStatement {
  /**
   * <p>The resources.</p>
   */
  Resources?: string[];

  /**
   * <p>The resource types.</p>
   */
  ResourceTypes?: string[];
}

/**
 * <p>Describes a path statement.</p>
 */
export interface PathStatement {
  /**
   * <p>The packet header statement.</p>
   */
  PacketHeaderStatement?: PacketHeaderStatement;

  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatement;
}

/**
 * <p>Describes a through resource statement.</p>
 */
export interface ThroughResourcesStatement {
  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatement;
}

/**
 * <p>Describes a path.</p>
 */
export interface AccessScopePath {
  /**
   * <p>The source.</p>
   */
  Source?: PathStatement;

  /**
   * <p>The destination.</p>
   */
  Destination?: PathStatement;

  /**
   * <p>The through resources.</p>
   */
  ThroughResources?: ThroughResourcesStatement[];
}

/**
 * <p>Describes a packet header statement.</p>
 */
export interface PacketHeaderStatementRequest {
  /**
   * <p>The source addresses.</p>
   */
  SourceAddresses?: string[];

  /**
   * <p>The destination addresses.</p>
   */
  DestinationAddresses?: string[];

  /**
   * <p>The source ports.</p>
   */
  SourcePorts?: string[];

  /**
   * <p>The destination ports.</p>
   */
  DestinationPorts?: string[];

  /**
   * <p>The source prefix lists.</p>
   */
  SourcePrefixLists?: string[];

  /**
   * <p>The destination prefix lists.</p>
   */
  DestinationPrefixLists?: string[];

  /**
   * <p>The protocols.</p>
   */
  Protocols?: (Protocol | string)[];
}

/**
 * <p>Describes a resource statement.</p>
 */
export interface ResourceStatementRequest {
  /**
   * <p>The resources.</p>
   */
  Resources?: string[];

  /**
   * <p>The resource types.</p>
   */
  ResourceTypes?: string[];
}

/**
 * <p>Describes a path statement.</p>
 */
export interface PathStatementRequest {
  /**
   * <p>The packet header statement.</p>
   */
  PacketHeaderStatement?: PacketHeaderStatementRequest;

  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatementRequest;
}

/**
 * <p>Describes a through resource statement.</p>
 */
export interface ThroughResourcesStatementRequest {
  /**
   * <p>The resource statement.</p>
   */
  ResourceStatement?: ResourceStatementRequest;
}

/**
 * <p>Describes a path.</p>
 */
export interface AccessScopePathRequest {
  /**
   * <p>The source.</p>
   */
  Source?: PathStatementRequest;

  /**
   * <p>The destination.</p>
   */
  Destination?: PathStatementRequest;

  /**
   * <p>The through resources.</p>
   */
  ThroughResources?: ThroughResourcesStatementRequest[];
}

/**
 * <p>Describes a value of an account attribute.</p>
 */
export interface AccountAttributeValue {
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

/**
 * <p>Describes an account attribute.</p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the account attribute.</p>
   */
  AttributeValues?: AccountAttributeValue[];
}

export type AccountAttributeName = "default-vpc" | "supported-platforms";

export enum InstanceHealthStatus {
  HEALTHY_STATUS = "healthy",
  UNHEALTHY_STATUS = "unhealthy",
}

/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 */
export interface ActiveInstance {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The health status of the instance. If the status of either the instance status check
   *             or the system status check is <code>impaired</code>, the health status of the instance
   *             is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   */
  InstanceHealth?: InstanceHealthStatus | string;
}

export enum ActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

/**
 * <p>Add an operating Region to an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only
 *          discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 */
export interface AddIpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   */
  RegionName?: string;
}

/**
 * <p>An entry for a prefix list.</p>
 */
export interface AddPrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A description for the entry.</p>
   *         <p>Constraints: Up to 255 characters in length.</p>
   */
  Description?: string;
}

export type DomainType = "standard" | "vpc";

/**
 * <p>Describes an Elastic IP address, or a carrier IP address.</p>
 */
export interface Address {
  /**
   * <p>The ID of the instance that the address is associated with (if any).</p>
   */
  InstanceId?: string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The ID representing the allocation of the address for use with EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID representing the association of the address with an instance in a VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>Indicates whether this Elastic IP address is for use with instances
   * 				in EC2-Classic (<code>standard</code>) or instances in a VPC (<code>vpc</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network interface.</p>
   */
  NetworkInterfaceOwnerId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Any tags assigned to the Elastic IP address.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address associated. This option is only available for network interfaces
   *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;
}

/**
 * <p>The status of an updated pointer (PTR) record for an Elastic IP address.</p>
 */
export interface PtrUpdateStatus {
  /**
   * <p>The value for the PTR record update.</p>
   */
  Value?: string;

  /**
   * <p>The status of the PTR record update.</p>
   */
  Status?: string;

  /**
   * <p>The reason for the PTR record update.</p>
   */
  Reason?: string;
}

/**
 * <p>The attributes associated with an Elastic IP address.</p>
 */
export interface AddressAttribute {
  /**
   * <p>The public IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The pointer (PTR) record for the IP address.</p>
   */
  PtrRecord?: string;

  /**
   * <p>The updated PTR record for the IP address.</p>
   */
  PtrRecordUpdate?: PtrUpdateStatus;
}

export type AddressAttributeName = "domain-name";

export enum AddressFamily {
  ipv4 = "ipv4",
  ipv6 = "ipv6",
}

export interface AdvertiseByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   *          You can't advertise only a portion of the provisioned range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type ByoipCidrState =
  | "advertised"
  | "deprovisioned"
  | "failed-deprovision"
  | "failed-provision"
  | "pending-deprovision"
  | "pending-provision"
  | "provisioned"
  | "provisioned-not-publicly-advertisable";

/**
 * <p>Information about an address range that is provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP).</p>
 */
export interface ByoipCidr {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr?: string;

  /**
   * <p>The description of the address range.</p>
   */
  Description?: string;

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The state of the address pool.</p>
   */
  State?: ByoipCidrState | string;
}

export interface AdvertiseByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export type Affinity = "default" | "host";

export type ResourceType =
  | "capacity-reservation"
  | "capacity-reservation-fleet"
  | "carrier-gateway"
  | "client-vpn-endpoint"
  | "customer-gateway"
  | "dedicated-host"
  | "dhcp-options"
  | "egress-only-internet-gateway"
  | "elastic-gpu"
  | "elastic-ip"
  | "export-image-task"
  | "export-instance-task"
  | "fleet"
  | "fpga-image"
  | "host-reservation"
  | "image"
  | "import-image-task"
  | "import-snapshot-task"
  | "instance"
  | "instance-event-window"
  | "internet-gateway"
  | "ipam"
  | "ipam-pool"
  | "ipam-scope"
  | "ipv4pool-ec2"
  | "ipv6pool-ec2"
  | "key-pair"
  | "launch-template"
  | "local-gateway"
  | "local-gateway-route-table"
  | "local-gateway-route-table-virtual-interface-group-association"
  | "local-gateway-route-table-vpc-association"
  | "local-gateway-virtual-interface"
  | "local-gateway-virtual-interface-group"
  | "natgateway"
  | "network-acl"
  | "network-insights-access-scope"
  | "network-insights-access-scope-analysis"
  | "network-insights-analysis"
  | "network-insights-path"
  | "network-interface"
  | "placement-group"
  | "prefix-list"
  | "replace-root-volume-task"
  | "reserved-instances"
  | "route-table"
  | "security-group"
  | "security-group-rule"
  | "snapshot"
  | "spot-fleet-request"
  | "spot-instances-request"
  | "subnet"
  | "subnet-cidr-reservation"
  | "traffic-mirror-filter"
  | "traffic-mirror-filter-rule"
  | "traffic-mirror-session"
  | "traffic-mirror-target"
  | "transit-gateway"
  | "transit-gateway-attachment"
  | "transit-gateway-connect-peer"
  | "transit-gateway-multicast-domain"
  | "transit-gateway-policy-table"
  | "transit-gateway-route-table"
  | "transit-gateway-route-table-announcement"
  | "volume"
  | "vpc"
  | "vpc-endpoint"
  | "vpc-endpoint-connection-device-type"
  | "vpc-endpoint-service"
  | "vpc-flow-log"
  | "vpc-peering-connection"
  | "vpn-connection"
  | "vpn-connection-device-type"
  | "vpn-gateway";

/**
 * <p>The tags to apply to a resource when the resource is being created.</p>
 *          <note>
 *             <p>The <code>Valid Values</code> lists all the resource types that can be tagged.
 *             However, the action you're using might not support tagging all of these resource types.
 *             If you try to tag a resource type that is unsupported for the action you're using,
 *             you'll get an error.</p>
 *          </note>
 */
export interface TagSpecification {
  /**
   * <p>The type of resource to tag on creation.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

export interface AllocateAddressRequest {
  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC or instances in EC2-Classic.</p>
   *          <p>Default: If the Region supports EC2-Classic, the default is <code>standard</code>. Otherwise, the default
   *          is <code>vpc</code>.</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>[EC2-VPC] The Elastic IP address to recover or an IPv4 address from an address pool.</p>
   */
  Address?: string;

  /**
   * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services
   *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
   *       addresses cannot move between network border groups.</p>
   *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">DescribeAvailabilityZones</a> to view the network border groups.</p>
   *
   *          <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 Classic,
   *       you receive an <code>InvalidParameterCombination</code> error.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
   *         select an address from the address pool. Alternatively, specify a specific
   *         address from the address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to assign to the Elastic IP address.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface AllocateAddressResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] The ID that Amazon Web Services assigns to represent the allocation of the Elastic IP address for use with instances in a VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of an address pool.</p>
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Indicates whether the Elastic IP address is for use with instances in a VPC (<code>vpc</code>) or
   * 				instances in EC2-Classic (<code>standard</code>).</p>
   */
  Domain?: DomainType | string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address. This option is only available for network interfaces which  reside
   *       in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  CarrierIp?: string;
}

export type AutoPlacement = "off" | "on";

export type HostRecovery = "off" | "on";

export interface AllocateHostsRequest {
  /**
   * <p>Indicates whether the host accepts any untargeted instance launches that
   *     		match its instance type configuration, or if it only accepts Host tenancy
   *     		instance launches that specify its unique host ID. For more information,
   *     		see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding">
   *         	Understanding auto-placement and affinity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *
   *         <p>Default: <code>on</code>
   *          </p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you
   * 		specify an instance type, the Dedicated Hosts support instances of the
   * 		specified instance type only.</p>
   *
   *     	    <p>If you want the Dedicated Hosts to support multiple instance types in a specific
   *     		instance family, omit this parameter and specify <b>InstanceFamily</b>
   *     		instead. You cannot specify <b>InstanceType</b> and
   *     		<b>InstanceFamily</b> in the same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
   * 			an instance family, the Dedicated Hosts support multiple instance types within that
   * 			instance family.</p>
   *
   * 		       <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
   * 			parameter and specify <b>InstanceType</b>
   * 			instead. You cannot specify <b>InstanceFamily</b> and
   * 			<b>InstanceType</b> in the same request.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host.
   * 			Host recovery is disabled by default. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
   * 			Host recovery</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * 		       <p>Default: <code>off</code>
   *          </p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.</p>
   */
  OutpostArn?: string;
}

/**
 * <p>Contains the output of AllocateHosts.</p>
 */
export interface AllocateHostsResult {
  /**
   * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a
   * 			specific host.</p>
   */
  HostIds?: string[];
}

export interface AllocateIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool from which you would like to allocate a CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible values: Any available IPv4 or IPv6 CIDR.</p>
   */
  Cidr?: string;

  /**
   * <p>The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</p>
   */
  NetmaskLength?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description for the allocation.</p>
   */
  Description?: string;

  /**
   * <p>A preview of the next available CIDR in a pool.</p>
   */
  PreviewNextCidr?: boolean;

  /**
   * <p>Exclude a particular CIDR range from being returned by the pool.</p>
   */
  DisallowedCidrs?: string[];
}

export enum IpamPoolAllocationResourceType {
  custom = "custom",
  ec2_public_ipv4_pool = "ec2-public-ipv4-pool",
  ipam_pool = "ipam-pool",
  vpc = "vpc",
}

/**
 * <p>In IPAM, an allocation is a CIDR assignment from an IPAM pool to another resource or IPAM pool.</p>
 */
export interface IpamPoolAllocation {
  /**
   * <p>The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and
   *          refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   */
  Cidr?: string;

  /**
   * <p>The ID of an allocation.</p>
   */
  IpamPoolAllocationId?: string;

  /**
   * <p>A description of the pool allocation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: IpamPoolAllocationResourceType | string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export interface AllocateIpamPoolCidrResult {
  /**
   * <p>Information about the allocation created.</p>
   */
  IpamPoolAllocation?: IpamPoolAllocation;
}

export type AllocationState =
  | "available"
  | "pending"
  | "permanent-failure"
  | "released"
  | "released-permanent-failure"
  | "under-assessment";

export enum AllocationStrategy {
  CAPACITY_OPTIMIZED = "capacityOptimized",
  CAPACITY_OPTIMIZED_PRIORITIZED = "capacityOptimizedPrioritized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowestPrice",
}

export enum PrincipalType {
  Account = "Account",
  All = "All",
  OrganizationUnit = "OrganizationUnit",
  Role = "Role",
  Service = "Service",
  User = "User",
}

/**
 * <p>Describes a principal.</p>
 */
export interface AllowedPrincipal {
  /**
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  Principal?: string;
}

export type AllowsMultipleInstanceTypes = "off" | "on";

/**
 * <p>Describes an potential intermediate component of a feasible path.</p>
 */
export interface AlternatePathHint {
  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  ComponentArn?: string;
}

export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the VPC in which the associated target network is located.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can
   * 			be applied to an associated target network.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * <p>The IDs of the applied security groups.</p>
   */
  SecurityGroupIds?: string[];
}

export interface AssignIpv6AddressesRequest {
  /**
   * <p>The number of additional IPv6 addresses to assign to the network interface.
   *     		The specified number of IPv6 addresses are assigned in addition to the
   *     		existing IPv6 addresses that are already assigned to the network interface.
   *     		Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You
   *     		can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the
   *             network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code>
   *             option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export interface AssignIpv6AddressesResult {
  /**
   * <p>The new IPv6 addresses assigned to the network interface. Existing IPv6 addresses
   *         	that were assigned to the network interface before the request are not included.</p>
   */
  AssignedIpv6Addresses?: string[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  AssignedIpv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
   */
  AllowReassignment?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>One or more IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p>
   *         <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: string[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   */
  Ipv4PrefixCount?: number;
}

/**
 * <p>Describes an IPv4 prefix.</p>
 */
export interface Ipv4PrefixSpecification {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to Amazon EC2 network interfaces</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * <p>Describes the private IP addresses assigned to a network interface.</p>
 */
export interface AssignedPrivateIpAddress {
  /**
   * <p>The private IP address assigned to the network interface.</p>
   */
  PrivateIpAddress?: string;
}

export interface AssignPrivateIpAddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[];
}

export interface AssociateAddressRequest {
  /**
   * <p>[EC2-VPC] The allocation ID. This is required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the instance. The instance must have exactly one attached network interface.
   *       For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both.
   *       For EC2-Classic, you must specify an instance ID and the instance must be in the running
   *       state.</p>
   */
  InstanceId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address to associate with the instance. This is required for
   *       EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] For a VPC in an EC2-Classic account, specify true to allow an Elastic IP address that is already associated with an instance or network interface to be reassociated with the specified instance or network interface. Otherwise, the operation fails. In a VPC in an EC2-VPC-only account, reassociation is automatic, therefore you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
   */
  AllowReassociation?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[EC2-VPC] The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
   *    	     <p>For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>[EC2-VPC] The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
   */
  PrivateIpAddress?: string;
}

export interface AssociateAddressResult {
  /**
   * <p>[EC2-VPC] The ID that represents the association of the Elastic IP address with an instance.</p>
   */
  AssociationId?: string;
}

export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the subnet to associate with the Client VPN endpoint.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type AssociationStatusCode =
  | "associated"
  | "associating"
  | "association-failed"
  | "disassociated"
  | "disassociating";

/**
 * <p>Describes the state of a target network association.</p>
 */
export interface AssociationStatus {
  /**
   * <p>The state of the target network association.</p>
   */
  Code?: AssociationStatusCode | string;

  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   */
  Message?: string;
}

export interface AssociateClientVpnTargetNetworkResult {
  /**
   * <p>The unique ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export interface AssociateDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set, or <code>default</code> to associate
   *         no DHCP options with the VPC.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface AssociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate with which to associate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM
   * 			certificate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * <p>The name of the Amazon S3 bucket to which the certificate was uploaded.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The
   * 			object key is formatted as follows:  <code>role_arn</code>/<code>certificate_arn</code>.</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the private key of the certificate.</p>
   */
  EncryptionKmsKeyId?: string;
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export interface AssociateIamInstanceProfileRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the instance profile.</p>
   */
  Id?: string;
}

export enum IamInstanceProfileAssociationState {
  ASSOCIATED = "associated",
  ASSOCIATING = "associating",
  DISASSOCIATED = "disassociated",
  DISASSOCIATING = "disassociating",
}

/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 */
export interface IamInstanceProfileAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The state of the association.</p>
   */
  State?: IamInstanceProfileAssociationState | string;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   */
  Timestamp?: Date;
}

export interface AssociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

/**
 * <p>One or more targets associated with the specified event window. Only one
 *             <i>type</i> of target (instance ID, instance tag, or Dedicated Host ID)
 *          can be associated with an event window.</p>
 */
export interface InstanceEventWindowAssociationRequest {
  /**
   * <p>The IDs of the instances to associate with the event window. If the instance is on a
   *          Dedicated Host, you can't specify the Instance ID parameter; you must use the Dedicated
   *          Host ID parameter.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags to associate with the event window. Any instances associated with the
   *          tags will be associated with the event window.</p>
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to associate with the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export interface AssociateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>One or more targets associated with the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowAssociationRequest | undefined;
}

/**
 * <p>One or more targets associated with the event window.</p>
 */
export interface InstanceEventWindowAssociationTarget {
  /**
   * <p>The IDs of the instances associated with the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags associated with the event window. Any instances associated with the tags
   *          will be associated with the event window.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts associated with the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export enum InstanceEventWindowState {
  active = "active",
  creating = "creating",
  deleted = "deleted",
  deleting = "deleting",
}

export enum WeekDay {
  friday = "friday",
  monday = "monday",
  saturday = "saturday",
  sunday = "sunday",
  thursday = "thursday",
  tuesday = "tuesday",
  wednesday = "wednesday",
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 */
export interface InstanceEventWindowTimeRange {
  /**
   * <p>The day on which the time range begins.</p>
   */
  StartWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range begins.</p>
   */
  StartHour?: number;

  /**
   * <p>The day on which the time range ends.</p>
   */
  EndWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range ends.</p>
   */
  EndHour?: number;
}

/**
 * <p>The event window.</p>
 */
export interface InstanceEventWindow {
  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * <p>One or more time ranges defined for the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRange[];

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The cron expression defined for the event window.</p>
   */
  CronExpression?: string;

  /**
   * <p>One or more targets associated with the event window.</p>
   */
  AssociationTarget?: InstanceEventWindowAssociationTarget;

  /**
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState | string;

  /**
   * <p>The instance tags associated with the event window.</p>
   */
  Tags?: Tag[];
}

export interface AssociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export interface AssociateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;
}

export type RouteTableAssociationStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed";

/**
 * <p>Describes the state of an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociationState {
  /**
   * <p>The state of the association.</p>
   */
  State?: RouteTableAssociationStateCode | string;

  /**
   * <p>The status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export interface AssociateRouteTableResult {
  /**
   * <p>The route table association ID. This ID is required for disassociating the route
   * 			table.</p>
   */
  AssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export interface AssociateSubnetCidrBlockRequest {
  /**
   * <p>The IPv6 CIDR block for your subnet. The subnet must have a /64 prefix
   *             length.</p>
   */
  Ipv6CidrBlock: string | undefined;

  /**
   * <p>The ID of your subnet.</p>
   */
  SubnetId: string | undefined;
}

export type SubnetCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface SubnetCidrBlockState {
  /**
   * <p>The state of a CIDR block.</p>
   */
  State?: SubnetCidrBlockStateCode | string;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;
}

/**
 * <p>Describes an association between a subnet and an IPv6 CIDR block.</p>
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState;
}

export interface AssociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment to associate with the transit gateway multicast domain.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export interface AssociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the transit gateway policy table to associate with the transit gateway attachment.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to associate with the policy table.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type TransitGatewayAssociationState = "associated" | "associating" | "disassociated" | "disassociating";

/**
 * <p>Describes a transit gateway policy table association.</p>
 */
export interface TransitGatewayPolicyTableAssociation {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource ID of the transit gateway attachment.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type for the transit gateway policy table association.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the transit gateway policy table association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export interface AssociateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the association of a transit gateway and a transit gateway policy table.</p>
   */
  Association?: TransitGatewayPolicyTableAssociation;
}

export interface AssociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 */
export interface TransitGatewayAssociation {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

export interface AssociateTransitGatewayRouteTableResult {
  /**
   * <p>The ID of the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export interface AssociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the branch network interface.</p>
   */
  BranchInterfaceId: string | undefined;

  /**
   * <p>The ID of the trunk network interface.</p>
   */
  TrunkInterfaceId: string | undefined;

  /**
   * <p>The ID of the VLAN. This applies to the VLAN protocol.</p>
   */
  VlanId?: number;

  /**
   * <p>The application key. This applies to the GRE protocol.</p>
   */
  GreKey?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum InterfaceProtocolType {
  GRE = "GRE",
  VLAN = "VLAN",
}

/**
 * <note>
 *             <p>Currently available in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *         </note>
 *         <p>Information about an association between a branch network interface with a trunk network interface.</p>
 */
export interface TrunkInterfaceAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the branch network interface.</p>
   */
  BranchInterfaceId?: string;

  /**
   * <p>The ID of the trunk network interface.</p>
   */
  TrunkInterfaceId?: string;

  /**
   * <p>The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   */
  InterfaceProtocol?: InterfaceProtocolType | string;

  /**
   * <p>The ID of the VLAN when you use the VLAN protocol.</p>
   */
  VlanId?: number;

  /**
   * <p>The application key when you use the GRE protocol.</p>
   */
  GreKey?: number;

  /**
   * <p>The tags for the trunk interface association.</p>
   */
  Tags?: Tag[];
}

export interface AssociateTrunkInterfaceResult {
  /**
   * <p>Information about the association between the trunk network interface and branch network interface.</p>
   */
  InterfaceAssociation?: TrunkInterfaceAssociation;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface AssociateVpcCidrBlockRequest {
  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>An IPv4 CIDR block to associate with the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
   *       to limit the CIDR block to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   *          <p> You can have one IPv6 CIDR block association per network border group.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv4IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  Ipv4NetmaskLength?: number;

  /**
   * <p>Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
   */
  Ipv6NetmaskLength?: number;
}

export type VpcCidrBlockStateCode =
  | "associated"
  | "associating"
  | "disassociated"
  | "disassociating"
  | "failed"
  | "failing";

/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface VpcCidrBlockState {
  /**
   * <p>The state of the CIDR block.</p>
   */
  State?: VpcCidrBlockStateCode | string;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   */
  StatusMessage?: string;
}

/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 */
export interface VpcCidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: VpcCidrBlockState;
}

/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: VpcCidrBlockState;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   */
  Ipv6Pool?: string;
}

export interface AssociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface AttachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of one or more of the VPC's security groups. You cannot specify security groups from a different VPC.</p>
   */
  Groups: string[] | undefined;

  /**
   * <p>The ID of an EC2-Classic instance to link to the ClassicLink-enabled VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of a ClassicLink-enabled VPC.</p>
   */
  VpcId: string | undefined;
}

export interface AttachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface AttachInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   */
  NetworkCardIndex?: number;
}

/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceResult {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

export interface AttachVolumeRequest {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  Device: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the EBS volume. The volume and instance must be within the same Availability
   *       Zone.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type VolumeAttachmentState = "attached" | "attaching" | "busy" | "detached" | "detaching";

/**
 * <p>Describes volume attachment details.</p>
 */
export interface VolumeAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   */
  State?: VolumeAttachmentState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;
}

/**
 * <p>Contains the parameters for AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type AttachmentStatus = "attached" | "attaching" | "detached" | "detaching";

/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 */
export interface VpcAttachment {
  /**
   * <p>The current state of the attachment.</p>
   */
  State?: AttachmentStatus | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * <p>Contains the output of AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayResult {
  /**
   * <p>Information about the attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export interface AuthorizeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being authorized.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.</p>
   */
  AccessGroupId?: string;

  /**
   * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
   *             clients who successfully establish a VPN connection access to the network. Must be set
   *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
   */
  AuthorizeAllGroups?: boolean;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type ClientVpnAuthorizationRuleStatusCode = "active" | "authorizing" | "failed" | "revoking";

/**
 * <p>Describes the state of an authorization rule.</p>
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * <p>The state of the authorization rule.</p>
   */
  Code?: ClientVpnAuthorizationRuleStatusCode | string;

  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   */
  Message?: string;
}

export interface AuthorizeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

/**
 * <p>Describes an IPv4 range.</p>
 */
export interface IpRange {
  /**
   * <p>The IPv4 CIDR range. You can either specify a CIDR range or a source security group,
   *             not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;

  /**
   * <p>A description for the security group rule that references this IPv4 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description?: string;
}

/**
 * <p>[EC2-VPC only] Describes an IPv6 range.</p>
 */
export interface Ipv6Range {
  /**
   * <p>The IPv6 CIDR range. You can either specify a CIDR range or a source security group,
   *         not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>A description for the security group rule that references this IPv6 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description?: string;
}

/**
 * <p>Describes a prefix list ID.</p>
 */
export interface PrefixListId {
  /**
   * <p>A description for the security group rule that references this prefix list ID.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p>
 *          <note>
 *            <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 */
export interface UserIdGroupPair {
  /**
   * <p>A description for the security group rule that references this user ID group
   * 			pair.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group. In a request, use this parameter for a security group
   *             in EC2-Classic or a default VPC only. For a security group in a nondefault VPC, use the
   *             security group ID. </p>
   *         <p>For a referenced security group in another VPC, this value is not returned if the
   *             referenced security group is deleted.</p>
   */
  GroupName?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of an Amazon Web Services account.</p>
   *         <p>For a referenced security group in another VPC, the account ID of the referenced
   *             security group is returned in the response. If the referenced security group is deleted,
   *             this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group
   *             in another Amazon Web Services account.</p>
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface IpPermission {
  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.
   *         A value of <code>-1</code> indicates all ICMP/ICMPv6 types. If you specify all
   * 		ICMP/ICMPv6 types, you must specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>)
   *         or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols. When authorizing
   *         security group rules, specifying <code>-1</code> or a protocol number other than
   *         <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
   *         traffic on all ports, regardless of any port range you specify. For <code>tcp</code>,
   *         <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>,
   *         the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: IpRange[];

  /**
   * <p>[VPC only] The IPv6 ranges.</p>
   */
  Ipv6Ranges?: Ipv6Range[];

  /**
   * <p>[VPC only] The prefix list IDs.</p>
   */
  PrefixListIds?: PrefixListId[];

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value
   * 		of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types,
   *         you must specify all codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The security group and Amazon Web Services account ID pairs.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP
   *             address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The tags applied to the security group rule.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *             destination security group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

/**
 * <p> Describes the security group that is referenced in the security group rule.</p>
 */
export interface ReferencedSecurityGroup {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

/**
 * <p>Describes a security group rule.</p>
 */
export interface SecurityGroupRule {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the security group. </p>
   */
  GroupOwnerId?: string;

  /**
   * <p>Indicates whether the security group rule is an outbound rule.</p>
   */
  IsEgress?: boolean;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *         <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type. A value
   *             of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must
   *             specify all codes.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes. </p>
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range.</p>
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>Describes the security group that is referenced in the rule.</p>
   */
  ReferencedGroupInfo?: ReferencedSecurityGroup;

  /**
   * <p>The security group rule description.</p>
   */
  Description?: string;

  /**
   * <p>The tags applied to the security group rule.</p>
   */
  Tags?: Tag[];
}

export interface AuthorizeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Information about the outbound (egress) security group rules that were added.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];
}

export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * <p>The IPv4 address range, in CIDR format. You can't specify this parameter when specifying a source
   *       security group. To specify an IPv6 address range, use a set of IP permissions.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number.
   * 			For the ICMP type number, use <code>-1</code> to specify all types. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify <code>icmpv6</code>, use a set of IP permissions.</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols. If you specify <code>-1</code> or a
   *          protocol other than <code>tcp</code>, <code>udp</code>, or <code>icmp</code>, traffic on all ports
   *          is allowed, regardless of any ports you specify.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter
   *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
   *          the IP protocol, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access.
   *          To create a rule with a specific IP protocol and port range, use a set of IP permissions instead. For
   *          EC2-VPC, the source security group must be in the same VPC.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[nondefault VPC] The Amazon Web Services account ID for the source security group, if the source security group is
   *          in a different account. You can't specify this parameter in combination with the following parameters:
   *          the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range.
   *          Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol
   *          and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number.
   * 			For the ICMP code number, use <code>-1</code> to specify all codes. If you
   * 			specify all ICMP types, you must specify all codes.</p>
   *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[VPC Only] The tags applied to the security group rule.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface AuthorizeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Information about the inbound (ingress) security group rules that were added.</p>
   */
  SecurityGroupRules?: SecurityGroupRule[];
}

/**
 * <p>Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.</p>
 */
export interface S3Storage {
  /**
   * <p>The access key ID of the owner of the bucket. Before you specify a value for your access key ID, review and follow the guidance
   *        in <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best Practices for Managing Amazon Web Services Access Keys</a>.</p>
   */
  AWSAccessKeyId?: string;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Bucket?: string;

  /**
   * <p>The beginning of the file name of the AMI.</p>
   */
  Prefix?: string;

  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
   */
  UploadPolicy?: Uint8Array;

  /**
   * <p>The signature of the JSON document.</p>
   */
  UploadPolicySignature?: string;
}

/**
 * <p>Describes the storage location for an instance store-backed AMI.</p>
 */
export interface Storage {
  /**
   * <p>An Amazon S3 storage location.</p>
   */
  S3?: S3Storage;
}

/**
 * <p>Contains the parameters for BundleInstance.</p>
 */
export interface BundleInstanceRequest {
  /**
   * <p>The ID of the instance to bundle.</p>
   *          <p>Type: String</p>
   *          <p>Default: None</p>
   *          <p>Required: Yes</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   */
  Storage: Storage | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes an error for <a>BundleInstance</a>.</p>
 */
export interface BundleTaskError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export type BundleTaskState =
  | "bundling"
  | "cancelling"
  | "complete"
  | "failed"
  | "pending"
  | "storing"
  | "waiting-for-shutdown";

/**
 * <p>Describes a bundle task.</p>
 */
export interface BundleTask {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId?: string;

  /**
   * <p>If the task fails, a description of the error.</p>
   */
  BundleTaskError?: BundleTaskError;

  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   */
  InstanceId?: string;

  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   */
  Progress?: string;

  /**
   * <p>The time this task started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the task.</p>
   */
  State?: BundleTaskState | string;

  /**
   * <p>The Amazon S3 storage locations.</p>
   */
  Storage?: Storage;

  /**
   * <p>The time of the most recent update for the task.</p>
   */
  UpdateTime?: Date;
}

/**
 * <p>Contains the output of BundleInstance.</p>
 */
export interface BundleInstanceResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

/**
 * <p>Contains the parameters for CancelBundleTask.</p>
 */
export interface CancelBundleTaskRequest {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of CancelBundleTask.</p>
 */
export interface CancelBundleTaskResult {
  /**
   * <p>Information about the bundle task.</p>
   */
  BundleTask?: BundleTask;
}

export interface CancelCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation to be cancelled.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface CancelCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface CancelCapacityReservationFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Capacity Reservation Fleets to cancel.</p>
   */
  CapacityReservationFleetIds: string[] | undefined;
}

/**
 * <p>Describes a Capacity Reservation Fleet cancellation error.</p>
 */
export interface CancelCapacityReservationFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a Capacity Reservation Fleet that could not be cancelled.</p>
 */
export interface FailedCapacityReservationFleetCancellationResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet that could not be cancelled.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>Information about the Capacity Reservation Fleet cancellation error.</p>
   */
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError;
}

export enum CapacityReservationFleetState {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  CANCELLING = "cancelling",
  EXPIRED = "expired",
  EXPIRING = "expiring",
  FAILED = "failed",
  MODIFYING = "modifying",
  PARTIALLY_FULFILLED = "partially_fulfilled",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes a Capacity Reservation Fleet that was successfully cancelled.</p>
 */
export interface CapacityReservationFleetCancellationState {
  /**
   * <p>The current state of the Capacity Reservation Fleet.</p>
   */
  CurrentFleetState?: CapacityReservationFleetState | string;

  /**
   * <p>The previous state of the Capacity Reservation Fleet.</p>
   */
  PreviousFleetState?: CapacityReservationFleetState | string;

  /**
   * <p>The ID of the Capacity Reservation Fleet that was successfully cancelled.</p>
   */
  CapacityReservationFleetId?: string;
}

export interface CancelCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets that were successfully cancelled.</p>
   */
  SuccessfulFleetCancellations?: CapacityReservationFleetCancellationState[];

  /**
   * <p>Information about the Capacity Reservation Fleets that could not be cancelled.</p>
   */
  FailedFleetCancellations?: FailedCapacityReservationFleetCancellationResult[];
}

export interface CancelConversionRequest {
  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The reason for canceling the conversion task.</p>
   */
  ReasonMessage?: string;
}

export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task. This is the ID returned by <code>CreateInstanceExportTask</code>.</p>
   */
  ExportTaskId: string | undefined;
}

export interface CancelImportTaskRequest {
  /**
   * <p>The reason for canceling the task.</p>
   */
  CancelReason?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the import image or import snapshot task to be canceled.</p>
   */
  ImportTaskId?: string;
}

export interface CancelImportTaskResult {
  /**
   * <p>The ID of the task being canceled.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   */
  PreviousState?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   */
  State?: string;
}

/**
 * <p>Contains the parameters for CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId: string | undefined;
}

export type ListingState = "available" | "cancelled" | "pending" | "sold";

/**
 * <p>Describes a Reserved Instance listing state.</p>
 */
export interface InstanceCount {
  /**
   * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   */
  State?: ListingState | string;
}

export type CurrencyCodeValues = "USD";

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceSchedule {
  /**
   * <p>The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.</p>
   *          <p>A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.</p>
   */
  Active?: boolean;

  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export type ListingStatus = "active" | "cancelled" | "closed" | "pending";

/**
 * <p>Describes a Reserved Instance listing.</p>
 */
export interface ReservedInstancesListing {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   * 			idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time the listing was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The number of instances in this state.</p>
   */
  InstanceCounts?: InstanceCount[];

  /**
   * <p>The price of the Reserved Instance listing.</p>
   */
  PriceSchedules?: PriceSchedule[];

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   */
  Status?: ListingStatus | string;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The last modified timestamp of the listing.</p>
   */
  UpdateDate?: Date;
}

/**
 * <p>Contains the output of CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingResult {
  /**
   * <p>The Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

/**
 * <p>Contains the parameters for CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate instances for a Spot Fleet request if it is canceled
   *             successfully.</p>
   */
  TerminateInstances: boolean | undefined;
}

export enum BatchState {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  CANCELLED_RUNNING = "cancelled_running",
  CANCELLED_TERMINATING_INSTANCES = "cancelled_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * <p>The current state of the Spot Fleet request.</p>
   */
  CurrentSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   */
  PreviousSpotFleetRequestState?: BatchState | string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

export enum CancelBatchErrorCode {
  FLEET_REQUEST_ID_DOES_NOT_EXIST = "fleetRequestIdDoesNotExist",
  FLEET_REQUEST_ID_MALFORMED = "fleetRequestIdMalformed",
  FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE = "fleetRequestNotInCancellableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes a Spot Fleet error.</p>
 */
export interface CancelSpotFleetRequestsError {
  /**
   * <p>The error code.</p>
   */
  Code?: CancelBatchErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: CancelSpotFleetRequestsError;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
   */
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}

/**
 * <p>Contains the parameters for CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds: string[] | undefined;
}

export type CancelSpotInstanceRequestState = "active" | "cancelled" | "closed" | "completed" | "open";

/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 */
export interface CancelledSpotInstanceRequest {
  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The state of the Spot Instance request.</p>
   */
  State?: CancelSpotInstanceRequestState | string;
}

/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
}

export interface ConfirmProductInstanceRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The product code. This must be a product code that you own.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ConfirmProductInstanceResult {
  /**
   * <p>The Amazon Web Services account ID of the instance owner. This is only present if the
   *             product code is attached to the instance.</p>
   */
  OwnerId?: string;

  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product
   *             code is owned by the requester and associated with the specified instance.</p>
   */
  Return?: boolean;
}

export interface CopyFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the source AFI.</p>
   */
  SourceFpgaImageId: string | undefined;

  /**
   * <p>The description for the new AFI.</p>
   */
  Description?: string;

  /**
   * <p>The name for the new AFI. The default is the name of the source AFI.</p>
   */
  Name?: string;

  /**
   * <p>The Region that contains the source AFI.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface CopyFpgaImageResult {
  /**
   * <p>The ID of the new AFI.</p>
   */
  FpgaImageId?: string;
}

/**
 * <p>Contains the parameters for CopyImage.</p>
 */
export interface CopyImageRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description for the new AMI in the destination Region.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the destination snapshots of the copied image should be encrypted.
   *        You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted
   *        copy of an encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default
   *        Key Management Service (KMS) KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating
   *    		encrypted volumes. If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used.
   *    		If you specify a KMS key, you must also set the encrypted state to <code>true</code>.</p>
   *    	     <p>You can specify a KMS key using any of the following:</p>
   *    	     <ul>
   *             <li>
   *    			         <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *    		       </li>
   *             <li>
   *    	           <p>Key alias. For example, alias/ExampleAlias.</p>
   *    	        </li>
   *             <li>
   *    	           <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *    		       </li>
   *             <li>
   *    		          <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *    	     <p>The specified KMS key must exist in the destination Region.</p>
   *    	     <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the new AMI in the destination Region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the AMI to copy.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The name of the Region that contains the AMI to copy.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only
   *   		specify this parameter when copying an AMI from an Amazon Web Services Region to an Outpost.
   *   		The AMI must be in the Region of the destination Outpost. You cannot copy an
   *   		AMI from an Outpost to a Region, from one Outpost to another, or within the same
   *   		Outpost.</p>
   *
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-amis">
   *   		Copying AMIs from an Amazon Web Services Region to an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DestinationOutpostArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of CopyImage.</p>
 */
export interface CopyImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export interface CopySnapshotRequest {
  /**
   * <p>A description for the EBS snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the snapshot. Only
   * 		specify this parameter when copying a snapshot from an Amazon Web Services Region to an Outpost.
   * 		The snapshot must be in the Region for the destination Outpost. You cannot copy a
   * 		snapshot from an Outpost to a Region, from one Outpost to another, or within the same
   * 		Outpost.</p>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-snapshots">
   *   		Copy snapshots from an Amazon Web Services Region to an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DestinationOutpostArn?: string;

  /**
   * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot
   *       copy operation. This parameter is only valid for specifying the destination Region in a
   *         <code>PresignedUrl</code> parameter, where it is required.</p>
   *
   *          <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP
   *     	request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the CLI, this is
   *       specified using the <code>--region</code> parameter or the default Region in your Amazon Web Services
   *       configuration file.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
   *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
   *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
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
   */
  KmsKeyId?: string;

  /**
   * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a
   *       pre-signed URL. This parameter is optional for unencrypted snapshots. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query
   *         requests</a>.</p>
   *          <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the
   *         <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>,
   *         <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The
   *         <code>PresignedUrl</code> must be signed using Amazon Web Services Signature Version 4. Because EBS
   *       snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic
   *       that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query
   *         Parameters (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Simple Storage Service API Reference</i>. An
   *       invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail
   *       asynchronously, and the snapshot will move to an <code>error</code> state.</p>
   */
  PresignedUrl?: string;

  /**
   * <p>The ID of the Region that contains the snapshot to be copied.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The ID of the EBS snapshot to copy.</p>
   */
  SourceSnapshotId: string | undefined;

  /**
   * <p>The tags to apply to the new snapshot.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface CopySnapshotResult {
  /**
   * <p>The ID of the new snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Any tags applied to the new snapshot.</p>
   */
  Tags?: Tag[];
}

export type EndDateType = "limited" | "unlimited";

export type InstanceMatchCriteria = "open" | "targeted";

export enum CapacityReservationInstancePlatform {
  LINUX_UNIX = "Linux/UNIX",
  LINUX_WITH_SQL_SERVER_ENTERPRISE = "Linux with SQL Server Enterprise",
  LINUX_WITH_SQL_SERVER_STANDARD = "Linux with SQL Server Standard",
  LINUX_WITH_SQL_SERVER_WEB = "Linux with SQL Server Web",
  RED_HAT_ENTERPRISE_LINUX = "Red Hat Enterprise Linux",
  RHEL_WITH_HA = "RHEL with HA",
  RHEL_WITH_HA_AND_SQL_SERVER_ENTERPRISE = "RHEL with HA and SQL Server Enterprise",
  RHEL_WITH_HA_AND_SQL_SERVER_STANDARD = "RHEL with HA and SQL Server Standard",
  RHEL_WITH_SQL_SERVER_ENTERPRISE = "RHEL with SQL Server Enterprise",
  RHEL_WITH_SQL_SERVER_STANDARD = "RHEL with SQL Server Standard",
  RHEL_WITH_SQL_SERVER_WEB = "RHEL with SQL Server Web",
  SUSE_LINUX = "SUSE Linux",
  WINDOWS = "Windows",
  WINDOWS_WITH_SQL_SERVER = "Windows with SQL Server",
  WINDOWS_WITH_SQL_SERVER_ENTERPRISE = "Windows with SQL Server Enterprise",
  WINDOWS_WITH_SQL_SERVER_STANDARD = "Windows with SQL Server Standard",
  WINDOWS_WITH_SQL_SERVER_WEB = "Windows with SQL Server Web",
}

export type CapacityReservationTenancy = "dedicated" | "default";

export interface CreateCapacityReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The instance type for which to reserve capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   */
  InstancePlatform: CapacityReservationInstancePlatform | string | undefined;

  /**
   * <p>The Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: CapacityReservationTenancy | string;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   * 	  	     <p>Valid range: 1 - 1000</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   *
   * 		       <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> if the <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if the <code>EndDateType</code> value is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   * 		       <p>Default: <code>open</code>
   *          </p>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>The tags to apply to the Capacity Reservation during launch.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			to create the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   */
  PlacementGroupArn?: string;
}

export type CapacityReservationState = "active" | "cancelled" | "expired" | "failed" | "pending";

/**
 * <p>Describes a Capacity Reservation.</p>
 */
export interface CapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
   */
  CapacityReservationArn?: string;

  /**
   * <p>The Availability Zone ID of the Capacity Reservation.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  Tenancy?: CapacityReservationTenancy | string;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
   * 					in your request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no
   * 					longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 					provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
   * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
   * 					Failed requests are retained for 60 minutes.</p>
   *             </li>
   *          </ul>
   */
  State?: CapacityReservationState | string;

  /**
   * <p>The date and time at which the Capacity Reservation was started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | string;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which the Capacity
   * 	  		Reservation was created.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs.
   * 			Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			the Capacity Reservation was created. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   */
  PlacementGroupArn?: string;
}

export interface CreateCapacityReservationResult {
  /**
   * <p>Information about the Capacity Reservation.</p>
   */
  CapacityReservation?: CapacityReservation;
}

export enum FleetInstanceMatchCriteria {
  open = "open",
}

export type _InstanceType =
  | "a1.2xlarge"
  | "a1.4xlarge"
  | "a1.large"
  | "a1.medium"
  | "a1.metal"
  | "a1.xlarge"
  | "c1.medium"
  | "c1.xlarge"
  | "c3.2xlarge"
  | "c3.4xlarge"
  | "c3.8xlarge"
  | "c3.large"
  | "c3.xlarge"
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c4.large"
  | "c4.xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.large"
  | "c5.metal"
  | "c5.xlarge"
  | "c5a.12xlarge"
  | "c5a.16xlarge"
  | "c5a.24xlarge"
  | "c5a.2xlarge"
  | "c5a.4xlarge"
  | "c5a.8xlarge"
  | "c5a.large"
  | "c5a.xlarge"
  | "c5ad.12xlarge"
  | "c5ad.16xlarge"
  | "c5ad.24xlarge"
  | "c5ad.2xlarge"
  | "c5ad.4xlarge"
  | "c5ad.8xlarge"
  | "c5ad.large"
  | "c5ad.xlarge"
  | "c5d.12xlarge"
  | "c5d.18xlarge"
  | "c5d.24xlarge"
  | "c5d.2xlarge"
  | "c5d.4xlarge"
  | "c5d.9xlarge"
  | "c5d.large"
  | "c5d.metal"
  | "c5d.xlarge"
  | "c5n.18xlarge"
  | "c5n.2xlarge"
  | "c5n.4xlarge"
  | "c5n.9xlarge"
  | "c5n.large"
  | "c5n.metal"
  | "c5n.xlarge"
  | "c6a.12xlarge"
  | "c6a.16xlarge"
  | "c6a.24xlarge"
  | "c6a.2xlarge"
  | "c6a.32xlarge"
  | "c6a.48xlarge"
  | "c6a.4xlarge"
  | "c6a.8xlarge"
  | "c6a.large"
  | "c6a.metal"
  | "c6a.xlarge"
  | "c6g.12xlarge"
  | "c6g.16xlarge"
  | "c6g.2xlarge"
  | "c6g.4xlarge"
  | "c6g.8xlarge"
  | "c6g.large"
  | "c6g.medium"
  | "c6g.metal"
  | "c6g.xlarge"
  | "c6gd.12xlarge"
  | "c6gd.16xlarge"
  | "c6gd.2xlarge"
  | "c6gd.4xlarge"
  | "c6gd.8xlarge"
  | "c6gd.large"
  | "c6gd.medium"
  | "c6gd.metal"
  | "c6gd.xlarge"
  | "c6gn.12xlarge"
  | "c6gn.16xlarge"
  | "c6gn.2xlarge"
  | "c6gn.4xlarge"
  | "c6gn.8xlarge"
  | "c6gn.large"
  | "c6gn.medium"
  | "c6gn.xlarge"
  | "c6i.12xlarge"
  | "c6i.16xlarge"
  | "c6i.24xlarge"
  | "c6i.2xlarge"
  | "c6i.32xlarge"
  | "c6i.4xlarge"
  | "c6i.8xlarge"
  | "c6i.large"
  | "c6i.metal"
  | "c6i.xlarge"
  | "c6id.12xlarge"
  | "c6id.16xlarge"
  | "c6id.24xlarge"
  | "c6id.2xlarge"
  | "c6id.32xlarge"
  | "c6id.4xlarge"
  | "c6id.8xlarge"
  | "c6id.large"
  | "c6id.metal"
  | "c6id.xlarge"
  | "c7g.12xlarge"
  | "c7g.16xlarge"
  | "c7g.2xlarge"
  | "c7g.4xlarge"
  | "c7g.8xlarge"
  | "c7g.large"
  | "c7g.medium"
  | "c7g.xlarge"
  | "cc1.4xlarge"
  | "cc2.8xlarge"
  | "cg1.4xlarge"
  | "cr1.8xlarge"
  | "d2.2xlarge"
  | "d2.4xlarge"
  | "d2.8xlarge"
  | "d2.xlarge"
  | "d3.2xlarge"
  | "d3.4xlarge"
  | "d3.8xlarge"
  | "d3.xlarge"
  | "d3en.12xlarge"
  | "d3en.2xlarge"
  | "d3en.4xlarge"
  | "d3en.6xlarge"
  | "d3en.8xlarge"
  | "d3en.xlarge"
  | "dl1.24xlarge"
  | "f1.16xlarge"
  | "f1.2xlarge"
  | "f1.4xlarge"
  | "g2.2xlarge"
  | "g2.8xlarge"
  | "g3.16xlarge"
  | "g3.4xlarge"
  | "g3.8xlarge"
  | "g3s.xlarge"
  | "g4ad.16xlarge"
  | "g4ad.2xlarge"
  | "g4ad.4xlarge"
  | "g4ad.8xlarge"
  | "g4ad.xlarge"
  | "g4dn.12xlarge"
  | "g4dn.16xlarge"
  | "g4dn.2xlarge"
  | "g4dn.4xlarge"
  | "g4dn.8xlarge"
  | "g4dn.metal"
  | "g4dn.xlarge"
  | "g5.12xlarge"
  | "g5.16xlarge"
  | "g5.24xlarge"
  | "g5.2xlarge"
  | "g5.48xlarge"
  | "g5.4xlarge"
  | "g5.8xlarge"
  | "g5.xlarge"
  | "g5g.16xlarge"
  | "g5g.2xlarge"
  | "g5g.4xlarge"
  | "g5g.8xlarge"
  | "g5g.metal"
  | "g5g.xlarge"
  | "h1.16xlarge"
  | "h1.2xlarge"
  | "h1.4xlarge"
  | "h1.8xlarge"
  | "hi1.4xlarge"
  | "hpc6a.48xlarge"
  | "hs1.8xlarge"
  | "i2.2xlarge"
  | "i2.4xlarge"
  | "i2.8xlarge"
  | "i2.xlarge"
  | "i3.16xlarge"
  | "i3.2xlarge"
  | "i3.4xlarge"
  | "i3.8xlarge"
  | "i3.large"
  | "i3.metal"
  | "i3.xlarge"
  | "i3en.12xlarge"
  | "i3en.24xlarge"
  | "i3en.2xlarge"
  | "i3en.3xlarge"
  | "i3en.6xlarge"
  | "i3en.large"
  | "i3en.metal"
  | "i3en.xlarge"
  | "i4i.16xlarge"
  | "i4i.2xlarge"
  | "i4i.32xlarge"
  | "i4i.4xlarge"
  | "i4i.8xlarge"
  | "i4i.large"
  | "i4i.metal"
  | "i4i.xlarge"
  | "im4gn.16xlarge"
  | "im4gn.2xlarge"
  | "im4gn.4xlarge"
  | "im4gn.8xlarge"
  | "im4gn.large"
  | "im4gn.xlarge"
  | "inf1.24xlarge"
  | "inf1.2xlarge"
  | "inf1.6xlarge"
  | "inf1.xlarge"
  | "is4gen.2xlarge"
  | "is4gen.4xlarge"
  | "is4gen.8xlarge"
  | "is4gen.large"
  | "is4gen.medium"
  | "is4gen.xlarge"
  | "m1.large"
  | "m1.medium"
  | "m1.small"
  | "m1.xlarge"
  | "m2.2xlarge"
  | "m2.4xlarge"
  | "m2.xlarge"
  | "m3.2xlarge"
  | "m3.large"
  | "m3.medium"
  | "m3.xlarge"
  | "m4.10xlarge"
  | "m4.16xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.large"
  | "m5.metal"
  | "m5.xlarge"
  | "m5a.12xlarge"
  | "m5a.16xlarge"
  | "m5a.24xlarge"
  | "m5a.2xlarge"
  | "m5a.4xlarge"
  | "m5a.8xlarge"
  | "m5a.large"
  | "m5a.xlarge"
  | "m5ad.12xlarge"
  | "m5ad.16xlarge"
  | "m5ad.24xlarge"
  | "m5ad.2xlarge"
  | "m5ad.4xlarge"
  | "m5ad.8xlarge"
  | "m5ad.large"
  | "m5ad.xlarge"
  | "m5d.12xlarge"
  | "m5d.16xlarge"
  | "m5d.24xlarge"
  | "m5d.2xlarge"
  | "m5d.4xlarge"
  | "m5d.8xlarge"
  | "m5d.large"
  | "m5d.metal"
  | "m5d.xlarge"
  | "m5dn.12xlarge"
  | "m5dn.16xlarge"
  | "m5dn.24xlarge"
  | "m5dn.2xlarge"
  | "m5dn.4xlarge"
  | "m5dn.8xlarge"
  | "m5dn.large"
  | "m5dn.metal"
  | "m5dn.xlarge"
  | "m5n.12xlarge"
  | "m5n.16xlarge"
  | "m5n.24xlarge"
  | "m5n.2xlarge"
  | "m5n.4xlarge"
  | "m5n.8xlarge"
  | "m5n.large"
  | "m5n.metal"
  | "m5n.xlarge"
  | "m5zn.12xlarge"
  | "m5zn.2xlarge"
  | "m5zn.3xlarge"
  | "m5zn.6xlarge"
  | "m5zn.large"
  | "m5zn.metal"
  | "m5zn.xlarge"
  | "m6a.12xlarge"
  | "m6a.16xlarge"
  | "m6a.24xlarge"
  | "m6a.2xlarge"
  | "m6a.32xlarge"
  | "m6a.48xlarge"
  | "m6a.4xlarge"
  | "m6a.8xlarge"
  | "m6a.large"
  | "m6a.metal"
  | "m6a.xlarge"
  | "m6g.12xlarge"
  | "m6g.16xlarge"
  | "m6g.2xlarge"
  | "m6g.4xlarge"
  | "m6g.8xlarge"
  | "m6g.large"
  | "m6g.medium"
  | "m6g.metal"
  | "m6g.xlarge"
  | "m6gd.12xlarge"
  | "m6gd.16xlarge"
  | "m6gd.2xlarge"
  | "m6gd.4xlarge"
  | "m6gd.8xlarge"
  | "m6gd.large"
  | "m6gd.medium"
  | "m6gd.metal"
  | "m6gd.xlarge"
  | "m6i.12xlarge"
  | "m6i.16xlarge"
  | "m6i.24xlarge"
  | "m6i.2xlarge"
  | "m6i.32xlarge"
  | "m6i.4xlarge"
  | "m6i.8xlarge"
  | "m6i.large"
  | "m6i.metal"
  | "m6i.xlarge"
  | "m6id.12xlarge"
  | "m6id.16xlarge"
  | "m6id.24xlarge"
  | "m6id.2xlarge"
  | "m6id.32xlarge"
  | "m6id.4xlarge"
  | "m6id.8xlarge"
  | "m6id.large"
  | "m6id.metal"
  | "m6id.xlarge"
  | "mac1.metal"
  | "mac2.metal"
  | "p2.16xlarge"
  | "p2.8xlarge"
  | "p2.xlarge"
  | "p3.16xlarge"
  | "p3.2xlarge"
  | "p3.8xlarge"
  | "p3dn.24xlarge"
  | "p4d.24xlarge"
  | "p4de.24xlarge"
  | "r3.2xlarge"
  | "r3.4xlarge"
  | "r3.8xlarge"
  | "r3.large"
  | "r3.xlarge"
  | "r4.16xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.large"
  | "r5.metal"
  | "r5.xlarge"
  | "r5a.12xlarge"
  | "r5a.16xlarge"
  | "r5a.24xlarge"
  | "r5a.2xlarge"
  | "r5a.4xlarge"
  | "r5a.8xlarge"
  | "r5a.large"
  | "r5a.xlarge"
  | "r5ad.12xlarge"
  | "r5ad.16xlarge"
  | "r5ad.24xlarge"
  | "r5ad.2xlarge"
  | "r5ad.4xlarge"
  | "r5ad.8xlarge"
  | "r5ad.large"
  | "r5ad.xlarge"
  | "r5b.12xlarge"
  | "r5b.16xlarge"
  | "r5b.24xlarge"
  | "r5b.2xlarge"
  | "r5b.4xlarge"
  | "r5b.8xlarge"
  | "r5b.large"
  | "r5b.metal"
  | "r5b.xlarge"
  | "r5d.12xlarge"
  | "r5d.16xlarge"
  | "r5d.24xlarge"
  | "r5d.2xlarge"
  | "r5d.4xlarge"
  | "r5d.8xlarge"
  | "r5d.large"
  | "r5d.metal"
  | "r5d.xlarge"
  | "r5dn.12xlarge"
  | "r5dn.16xlarge"
  | "r5dn.24xlarge"
  | "r5dn.2xlarge"
  | "r5dn.4xlarge"
  | "r5dn.8xlarge"
  | "r5dn.large"
  | "r5dn.metal"
  | "r5dn.xlarge"
  | "r5n.12xlarge"
  | "r5n.16xlarge"
  | "r5n.24xlarge"
  | "r5n.2xlarge"
  | "r5n.4xlarge"
  | "r5n.8xlarge"
  | "r5n.large"
  | "r5n.metal"
  | "r5n.xlarge"
  | "r6a.12xlarge"
  | "r6a.16xlarge"
  | "r6a.24xlarge"
  | "r6a.2xlarge"
  | "r6a.32xlarge"
  | "r6a.48xlarge"
  | "r6a.4xlarge"
  | "r6a.8xlarge"
  | "r6a.large"
  | "r6a.metal"
  | "r6a.xlarge"
  | "r6g.12xlarge"
  | "r6g.16xlarge"
  | "r6g.2xlarge"
  | "r6g.4xlarge"
  | "r6g.8xlarge"
  | "r6g.large"
  | "r6g.medium"
  | "r6g.metal"
  | "r6g.xlarge"
  | "r6gd.12xlarge"
  | "r6gd.16xlarge"
  | "r6gd.2xlarge"
  | "r6gd.4xlarge"
  | "r6gd.8xlarge"
  | "r6gd.large"
  | "r6gd.medium"
  | "r6gd.metal"
  | "r6gd.xlarge"
  | "r6i.12xlarge"
  | "r6i.16xlarge"
  | "r6i.24xlarge"
  | "r6i.2xlarge"
  | "r6i.32xlarge"
  | "r6i.4xlarge"
  | "r6i.8xlarge"
  | "r6i.large"
  | "r6i.metal"
  | "r6i.xlarge"
  | "r6id.12xlarge"
  | "r6id.16xlarge"
  | "r6id.24xlarge"
  | "r6id.2xlarge"
  | "r6id.32xlarge"
  | "r6id.4xlarge"
  | "r6id.8xlarge"
  | "r6id.large"
  | "r6id.metal"
  | "r6id.xlarge"
  | "t1.micro"
  | "t2.2xlarge"
  | "t2.large"
  | "t2.medium"
  | "t2.micro"
  | "t2.nano"
  | "t2.small"
  | "t2.xlarge"
  | "t3.2xlarge"
  | "t3.large"
  | "t3.medium"
  | "t3.micro"
  | "t3.nano"
  | "t3.small"
  | "t3.xlarge"
  | "t3a.2xlarge"
  | "t3a.large"
  | "t3a.medium"
  | "t3a.micro"
  | "t3a.nano"
  | "t3a.small"
  | "t3a.xlarge"
  | "t4g.2xlarge"
  | "t4g.large"
  | "t4g.medium"
  | "t4g.micro"
  | "t4g.nano"
  | "t4g.small"
  | "t4g.xlarge"
  | "u-12tb1.112xlarge"
  | "u-12tb1.metal"
  | "u-18tb1.metal"
  | "u-24tb1.metal"
  | "u-6tb1.112xlarge"
  | "u-6tb1.56xlarge"
  | "u-6tb1.metal"
  | "u-9tb1.112xlarge"
  | "u-9tb1.metal"
  | "vt1.24xlarge"
  | "vt1.3xlarge"
  | "vt1.6xlarge"
  | "x1.16xlarge"
  | "x1.32xlarge"
  | "x1e.16xlarge"
  | "x1e.2xlarge"
  | "x1e.32xlarge"
  | "x1e.4xlarge"
  | "x1e.8xlarge"
  | "x1e.xlarge"
  | "x2gd.12xlarge"
  | "x2gd.16xlarge"
  | "x2gd.2xlarge"
  | "x2gd.4xlarge"
  | "x2gd.8xlarge"
  | "x2gd.large"
  | "x2gd.medium"
  | "x2gd.metal"
  | "x2gd.xlarge"
  | "x2idn.16xlarge"
  | "x2idn.24xlarge"
  | "x2idn.32xlarge"
  | "x2idn.metal"
  | "x2iedn.16xlarge"
  | "x2iedn.24xlarge"
  | "x2iedn.2xlarge"
  | "x2iedn.32xlarge"
  | "x2iedn.4xlarge"
  | "x2iedn.8xlarge"
  | "x2iedn.metal"
  | "x2iedn.xlarge"
  | "x2iezn.12xlarge"
  | "x2iezn.2xlarge"
  | "x2iezn.4xlarge"
  | "x2iezn.6xlarge"
  | "x2iezn.8xlarge"
  | "x2iezn.metal"
  | "z1d.12xlarge"
  | "z1d.2xlarge"
  | "z1d.3xlarge"
  | "z1d.6xlarge"
  | "z1d.large"
  | "z1d.metal"
  | "z1d.xlarge";

/**
 * <p>Information about an instance type to use in a Capacity Reservation Fleet.</p>
 */
export interface ReservationFleetInstanceSpecification {
  /**
   * <p>The instance type for which the Capacity Reservation Fleet reserves capacity.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The type of operating system for which the Capacity Reservation Fleet reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The number of capacity units provided by the specified instance type. This value, together with the
   * 			total target capacity that you specify for the Fleet determine the number of instances for which the
   * 			Fleet reserves capacity. Both values are based on units that make sense for your workload. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  Weight?: number;

  /**
   * <p>The Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A Capacity
   * 			Reservation Fleet can't span Availability Zones. All instance type specifications that you specify
   * 			for the Fleet must use the same Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A
   * 			Capacity Reservation Fleet can't span Availability Zones. All instance type specifications that you
   * 			specify for the Fleet must use the same Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates whether the Capacity Reservation Fleet supports EBS-optimized instances types. This
   * 			optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack
   * 			to provide optimal I/O performance. This optimization isn't available with all instance types. Additional
   * 			usage charges apply when using EBS-optimized instance types.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The priority to assign to the instance type. This value is used to determine which of the instance types
   * 			specified for the Fleet should be prioritized for use. A lower value indicates a high priority. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">Instance type priority</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  Priority?: number;
}

export enum FleetCapacityReservationTenancy {
  default = "default",
}

export interface CreateCapacityReservationFleetRequest {
  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the
   * 			specified instance types to use. Currently, only the <code>prioritized</code>
   * 			allocation strategy is supported. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">
   * 				Allocation strategy</a> in the Amazon EC2 User Guide.</p>
   * 		       <p>Valid values: <code>prioritized</code>
   *          </p>
   */
  AllocationStrategy?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   */
  InstanceTypeSpecifications: ReservationFleetInstanceSpecification[] | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation Fleet. All Capacity Reservations
   * 			in the Fleet inherit this tenancy. The Capacity Reservation Fleet can have one of
   * 			the following tenancy settings:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>default</code> - The Capacity Reservation Fleet is created on hardware
   * 					that is shared with other Amazon Web Services accounts.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>dedicated</code> - The Capacity Reservations are created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This
   * 			value, together with the instance type weights that you assign to each instance type used by
   * 			the Fleet determine the number of instances for which the Fleet reserves capacity. Both values
   * 			are based on units that make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">
   * 				Total target capacity</a> in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity
   * 			Reservation Fleet expires, its state changes to <code>expired</code> and all of the Capacity
   * 			Reservations in the Fleet expire.</p>
   * 		       <p>The Capacity Reservation Fleet expires within an hour after the specified time. For example,
   * 			if you specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity Reservation Fleet
   * 			is guaranteed to expire between <code>13:30:55</code> and <code>14:30:55</code> on
   * 			<code>5/31/2019</code>.
   * 		</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts. All
   * 			Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   * 		       <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching criteria
   * 			only. This means that instances that have matching attributes (instance type, platform, and
   * 			Availability Zone) run in the Capacity Reservations automatically. Instances do not need to
   * 			explicitly target a Capacity Reservation Fleet to use its reserved capacity.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * <p>The tags to assign to the Capacity Reservation Fleet. The tags are automatically assigned
   * 			to the Capacity Reservations in the Fleet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about a Capacity Reservation in a Capacity Reservation Fleet.</p>
 */
export interface FleetCapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation reserves capacity.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The instance type for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?: CapacityReservationInstancePlatform | string;

  /**
   * <p>The Availability Zone in which the Capacity Reservation reserves capacity.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The number of capacity units fulfilled by the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">
   * 				Total target capacity</a> in the Amazon EC2 User Guide.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>Indicates whether the Capacity Reservation reserves capacity for EBS-optimized instance types.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The weight of the instance type in the Capacity Reservation Fleet. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-weight">
   * 				Instance type weight</a> in the Amazon EC2 User Guide.</p>
   */
  Weight?: number;

  /**
   * <p>The priority of the instance type in the Capacity Reservation Fleet. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">
   * 				Instance type priority</a> in the Amazon EC2 User Guide.</p>
   */
  Priority?: number;
}

export interface CreateCapacityReservationFleetResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The status of the Capacity Reservation Fleet.</p>
   */
  State?: CapacityReservationFleetState | string;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The requested capacity units that have been successfully reserved.</p>
   */
  TotalFulfilledCapacity?: number;

  /**
   * <p>The instance matching criteria for the Capacity Reservation Fleet.</p>
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | string;

  /**
   * <p>The allocation strategy used by the Capacity Reservation Fleet.</p>
   */
  AllocationStrategy?: string;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the tenancy of Capacity Reservation Fleet.</p>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>Information about the individual Capacity Reservations in the Capacity Reservation Fleet.</p>
   */
  FleetCapacityReservations?: FleetCapacityReservation[];

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   */
  Tags?: Tag[];
}

export interface CreateCarrierGatewayRequest {
  /**
   * <p>The ID of the VPC to associate with the carrier gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to associate with the carrier gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;
}

export type CarrierGatewayState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a carrier gateway.</p>
 */
export interface CarrierGateway {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the VPC associated with the carrier gateway.</p>
   */
  VpcId?: string;

  /**
   * <p>The state of the carrier gateway.</p>
   */
  State?: CarrierGatewayState | string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the carrier gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the carrier gateway.</p>
   */
  Tags?: Tag[];
}

export interface CreateCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

/**
 * <p>Describes the Active Directory to be used for client authentication.</p>
 */
export interface DirectoryServiceAuthenticationRequest {
  /**
   * <p>The ID of the Active Directory to be used for authentication.</p>
   */
  DirectoryId?: string;
}

/**
 * <p>The IAM SAML identity provider used for federated authentication.</p>
 */
export interface FederatedAuthenticationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SAMLProviderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   */
  SelfServiceSAMLProviderArn?: string;
}

/**
 * <p>Information about the client certificate to be used for authentication.</p>
 */
export interface CertificateAuthenticationRequest {
  /**
   * <p>The ARN of the client certificate. The certificate must be signed by a certificate
   * 			authority (CA) and it must be provisioned in Certificate Manager (ACM).</p>
   */
  ClientRootCertificateChainArn?: string;
}

export type ClientVpnAuthenticationType =
  | "certificate-authentication"
  | "directory-service-authentication"
  | "federated-authentication";

/**
 * <p>Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * <p>The type of client authentication to be used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;

  /**
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthenticationRequest;

  /**
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   */
  MutualAuthentication?: CertificateAuthenticationRequest;

  /**
   * <p>Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if <b>Type</b> is <code>federated-authentication</code>.</p>
   */
  FederatedAuthentication?: FederatedAuthenticationRequest;
}

/**
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectOptions {
  /**
   * <p>Indicates whether client connect options are enabled. The default is <code>false</code> (not enabled).</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   */
  LambdaFunctionArn?: string;
}

/**
 * <p>Options for enabling a customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 */
export interface ClientLoginBannerOptions {
  /**
   * <p>Enable or disable a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   * 		       <p>Valid values: <code>true | false</code>
   *          </p>
   * 		       <p>Default value: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;

  /**
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded characters only. Maximum of
   * 			1400 characters.</p>
   */
  BannerText?: string;
}

/**
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 */
export interface ConnectionLogOptions {
  /**
   * <p>Indicates whether connection logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the CloudWatch Logs log group. Required if connection logging is enabled.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
   */
  CloudwatchLogStream?: string;
}

export type SelfServicePortal = "disabled" | "enabled";

export type TransportProtocol = "tcp" | "udp";

export interface CreateClientVpnEndpointRequest {
  /**
   * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.</p>
   */
  ClientCidrBlock: string | undefined;

  /**
   * <p>The ARN of the server certificate. For more information, see
   * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
   */
  ServerCertificateArn: string | undefined;

  /**
   * <p>Information about the authentication method to be used to authenticate clients.</p>
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * <p>Information about the client connection logging options.</p>
   * 		       <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   * 		       <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   */
  ConnectionLogOptions: ConnectionLogOptions | undefined;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
   * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
   */
  DnsServers?: string[];

  /**
   * <p>The transport protocol to be used by the VPN session.</p>
   * 		       <p>Default value: <code>udp</code>
   *          </p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   * 	        <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether split-tunnel is enabled on the Client VPN endpoint.</p>
   * 		       <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   * 			<i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the Client VPN endpoint during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
   */
  VpcId?: string;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   *         <p>Default Value: <code>enabled</code>
   *          </p>
   */
  SelfServicePortal?: SelfServicePortal | string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   * 		       <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   * 		       <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
}

export type ClientVpnEndpointStatusCode = "available" | "deleted" | "deleting" | "pending-associate";

/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpointStatus {
  /**
   * <p>The state of the Client VPN endpoint. Possible states include:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
   * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
   * 					associated. The Client VPN endpoint can accept connections.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   * 			         </li>
   *          </ul>
   */
  Code?: ClientVpnEndpointStatusCode | string;

  /**
   * <p>A message about the status of the Client VPN endpoint.</p>
   */
  Message?: string;
}

export interface CreateClientVpnEndpointResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   */
  DnsName?: string;
}

export interface CreateClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
   * 		       <ul>
   *             <li>
   *                <p>To add a route for Internet access, enter <code>0.0.0.0/0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for an on-premises network, enter the Amazon Web Services Site-to-Site VPN connection's IPv4 CIDR range</p>
   *             </li>
   *             <li>
   *                <p>To add a route for the local network, enter the client CIDR range</p>
   *             </li>
   *          </ul>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
   * 			an existing target network of the Client VPN endpoint.</p>
   * 	        <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
   */
  TargetVpcSubnetId: string | undefined;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type ClientVpnRouteStatusCode = "active" | "creating" | "deleting" | "failed";

/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface ClientVpnRouteStatus {
  /**
   * <p>The state of the Client VPN endpoint route.</p>
   */
  Code?: ClientVpnRouteStatusCode | string;

  /**
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   */
  Message?: string;
}

export interface CreateClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export type GatewayType = "ipsec.1";

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
  /**
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
   *         <p>Default: 65000</p>
   */
  BgpAsn: number | undefined;

  /**
   * <p>
   *             <i>This member has been deprecated.</i> The Internet-routable IP address for the customer gateway's outside interface. The
   *             address must be static.</p>
   */
  PublicIp?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The type of VPN connection that this customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the customer gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A name for the customer gateway device.</p>
   *         <p>Length Constraints: Up to 255 characters.</p>
   */
  DeviceName?: string;

  /**
   * <p>
   *             IPv4 address for the customer gateway device's outside interface. The address must be static.
   *         </p>
   */
  IpAddress?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a customer gateway.</p>
 */
export interface CustomerGateway {
  /**
   * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number
   *             (ASN).</p>
   */
  BgpAsn?: string;

  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The IP address of the customer gateway device's outside interface.</p>
   */
  IpAddress?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The current state of the customer gateway (<code>pending | available | deleting |
   *                 deleted</code>).</p>
   */
  State?: string;

  /**
   * <p>The type of VPN connection the customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type?: string;

  /**
   * <p>The name of customer gateway device.</p>
   */
  DeviceName?: string;

  /**
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayResult {
  /**
   * <p>Information about the customer gateway.</p>
   */
  CustomerGateway?: CustomerGateway;
}

export interface CreateDefaultSubnetRequest {
  /**
   * <p>The Availability Zone in which to create the default subnet.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to create an IPv6 only subnet. If you already have a default subnet
   *             for this Availability Zone, you must delete it before you can create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

export enum HostnameType {
  ip_name = "ip-name",
  resource_name = "resource-name",
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsOnLaunch {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostname with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export type SubnetState = "available" | "pending";

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
   * 			stopped instances are considered unavailable.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1).
   *         </p>
   */
  EnableLniAtDeviceIndex?: number;

  /**
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: boolean;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   */
  MapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The current state of the subnet.</p>
   */
  State?: SubnetState | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC the subnet is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  /**
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   */
  SubnetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: boolean;

  /**
   * <p>Indicates whether this is an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;

  /**
   * <p>The type of hostnames to assign to instances in the subnet at launch. An instance hostname
   *             is based on the IPv4 address or ID of the instance.</p>
   */
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch;
}

export interface CreateDefaultSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export interface CreateDefaultVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export type Tenancy = "dedicated" | "default" | "host";

export type VpcState = "available" | "pending";

/**
 * <p>Describes a VPC.</p>
 */
export interface Vpc {
  /**
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The current state of the VPC.</p>
   */
  State?: VpcState | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  /**
   * <p>Indicates whether the VPC is the default VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];
}

export interface CreateDefaultVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface NewDhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: string[];
}

export interface CreateDhcpOptionsRequest {
  /**
   * <p>A DHCP configuration option.</p>
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;

  /**
   * <p>The tags to assign to the DHCP option.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a value for a resource attribute that is a String.</p>
 */
export interface AttributeValue {
  /**
   * <p>The attribute value. The value is case-sensitive.</p>
   */
  Value?: string;
}

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: AttributeValue[];
}

/**
 * <p>Describes a set of DHCP options.</p>
 */
export interface DhcpOptions {
  /**
   * <p>One or more DHCP options in the set.</p>
   */
  DhcpConfigurations?: DhcpConfiguration[];

  /**
   * <p>The ID of the set of DHCP options.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Tag[];
}

export interface CreateDhcpOptionsResult {
  /**
   * <p>A set of DHCP options.</p>
   */
  DhcpOptions?: DhcpOptions;
}

export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the egress-only internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet
 * 			gateway.</p>
 */
export interface InternetGatewayAttachment {
  /**
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   */
  State?: AttachmentStatus | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The tags assigned to the egress-only internet gateway.</p>
   */
  Tags?: Tag[];
}

export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway;
}

export enum FleetExcessCapacityTerminationPolicy {
  NO_TERMINATION = "no-termination",
  TERMINATION = "termination",
}

/**
 * @internal
 */
export const AcceleratorCountFilterSensitiveLog = (obj: AcceleratorCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorCountRequestFilterSensitiveLog = (obj: AcceleratorCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorTotalMemoryMiBFilterSensitiveLog = (obj: AcceleratorTotalMemoryMiB): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorTotalMemoryMiBRequestFilterSensitiveLog = (obj: AcceleratorTotalMemoryMiBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetConfigurationRequestFilterSensitiveLog = (obj: TargetConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptReservedInstancesExchangeQuoteRequestFilterSensitiveLog = (
  obj: AcceptReservedInstancesExchangeQuoteRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptReservedInstancesExchangeQuoteResultFilterSensitiveLog = (
  obj: AcceptReservedInstancesExchangeQuoteResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog = (
  obj: AcceptTransitGatewayMulticastDomainAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetAssociationFilterSensitiveLog = (obj: SubnetAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDomainAssociationsFilterSensitiveLog = (
  obj: TransitGatewayMulticastDomainAssociations
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog = (
  obj: AcceptTransitGatewayMulticastDomainAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayPeeringAttachmentRequestFilterSensitiveLog = (
  obj: AcceptTransitGatewayPeeringAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PeeringTgwInfoFilterSensitiveLog = (obj: PeeringTgwInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPeeringAttachmentOptionsFilterSensitiveLog = (
  obj: TransitGatewayPeeringAttachmentOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PeeringAttachmentStatusFilterSensitiveLog = (obj: PeeringAttachmentStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPeeringAttachmentFilterSensitiveLog = (obj: TransitGatewayPeeringAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayPeeringAttachmentResultFilterSensitiveLog = (
  obj: AcceptTransitGatewayPeeringAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: AcceptTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayVpcAttachmentOptionsFilterSensitiveLog = (obj: TransitGatewayVpcAttachmentOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayVpcAttachmentFilterSensitiveLog = (obj: TransitGatewayVpcAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: AcceptTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptVpcEndpointConnectionsRequestFilterSensitiveLog = (
  obj: AcceptVpcEndpointConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsuccessfulItemErrorFilterSensitiveLog = (obj: UnsuccessfulItemError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsuccessfulItemFilterSensitiveLog = (obj: UnsuccessfulItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptVpcEndpointConnectionsResultFilterSensitiveLog = (obj: AcceptVpcEndpointConnectionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptVpcPeeringConnectionRequestFilterSensitiveLog = (obj: AcceptVpcPeeringConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CidrBlockFilterSensitiveLog = (obj: CidrBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6CidrBlockFilterSensitiveLog = (obj: Ipv6CidrBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcPeeringConnectionOptionsDescriptionFilterSensitiveLog = (
  obj: VpcPeeringConnectionOptionsDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcPeeringConnectionVpcInfoFilterSensitiveLog = (obj: VpcPeeringConnectionVpcInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcPeeringConnectionStateReasonFilterSensitiveLog = (obj: VpcPeeringConnectionStateReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcPeeringConnectionFilterSensitiveLog = (obj: VpcPeeringConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptVpcPeeringConnectionResultFilterSensitiveLog = (obj: AcceptVpcPeeringConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortRangeFilterSensitiveLog = (obj: PortRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisAclRuleFilterSensitiveLog = (obj: AnalysisAclRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisComponentFilterSensitiveLog = (obj: AnalysisComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalDetailFilterSensitiveLog = (obj: AdditionalDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisPacketHeaderFilterSensitiveLog = (obj: AnalysisPacketHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisRouteTableRouteFilterSensitiveLog = (obj: AnalysisRouteTableRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSecurityGroupRuleFilterSensitiveLog = (obj: AnalysisSecurityGroupRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTableRouteFilterSensitiveLog = (obj: TransitGatewayRouteTableRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathComponentFilterSensitiveLog = (obj: PathComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessScopeAnalysisFindingFilterSensitiveLog = (obj: AccessScopeAnalysisFinding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PacketHeaderStatementFilterSensitiveLog = (obj: PacketHeaderStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceStatementFilterSensitiveLog = (obj: ResourceStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathStatementFilterSensitiveLog = (obj: PathStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThroughResourcesStatementFilterSensitiveLog = (obj: ThroughResourcesStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessScopePathFilterSensitiveLog = (obj: AccessScopePath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PacketHeaderStatementRequestFilterSensitiveLog = (obj: PacketHeaderStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceStatementRequestFilterSensitiveLog = (obj: ResourceStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathStatementRequestFilterSensitiveLog = (obj: PathStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThroughResourcesStatementRequestFilterSensitiveLog = (obj: ThroughResourcesStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessScopePathRequestFilterSensitiveLog = (obj: AccessScopePathRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountAttributeValueFilterSensitiveLog = (obj: AccountAttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountAttributeFilterSensitiveLog = (obj: AccountAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveInstanceFilterSensitiveLog = (obj: ActiveInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddIpamOperatingRegionFilterSensitiveLog = (obj: AddIpamOperatingRegion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddPrefixListEntryFilterSensitiveLog = (obj: AddPrefixListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PtrUpdateStatusFilterSensitiveLog = (obj: PtrUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddressAttributeFilterSensitiveLog = (obj: AddressAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvertiseByoipCidrRequestFilterSensitiveLog = (obj: AdvertiseByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ByoipCidrFilterSensitiveLog = (obj: ByoipCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvertiseByoipCidrResultFilterSensitiveLog = (obj: AdvertiseByoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagSpecificationFilterSensitiveLog = (obj: TagSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateAddressRequestFilterSensitiveLog = (obj: AllocateAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateAddressResultFilterSensitiveLog = (obj: AllocateAddressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateHostsRequestFilterSensitiveLog = (obj: AllocateHostsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateHostsResultFilterSensitiveLog = (obj: AllocateHostsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateIpamPoolCidrRequestFilterSensitiveLog = (obj: AllocateIpamPoolCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolAllocationFilterSensitiveLog = (obj: IpamPoolAllocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllocateIpamPoolCidrResultFilterSensitiveLog = (obj: AllocateIpamPoolCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowedPrincipalFilterSensitiveLog = (obj: AllowedPrincipal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlternatePathHintFilterSensitiveLog = (obj: AlternatePathHint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySecurityGroupsToClientVpnTargetNetworkRequestFilterSensitiveLog = (
  obj: ApplySecurityGroupsToClientVpnTargetNetworkRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySecurityGroupsToClientVpnTargetNetworkResultFilterSensitiveLog = (
  obj: ApplySecurityGroupsToClientVpnTargetNetworkResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignIpv6AddressesRequestFilterSensitiveLog = (obj: AssignIpv6AddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignIpv6AddressesResultFilterSensitiveLog = (obj: AssignIpv6AddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignPrivateIpAddressesRequestFilterSensitiveLog = (obj: AssignPrivateIpAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv4PrefixSpecificationFilterSensitiveLog = (obj: Ipv4PrefixSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignedPrivateIpAddressFilterSensitiveLog = (obj: AssignedPrivateIpAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignPrivateIpAddressesResultFilterSensitiveLog = (obj: AssignPrivateIpAddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAddressRequestFilterSensitiveLog = (obj: AssociateAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAddressResultFilterSensitiveLog = (obj: AssociateAddressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateClientVpnTargetNetworkRequestFilterSensitiveLog = (
  obj: AssociateClientVpnTargetNetworkRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociationStatusFilterSensitiveLog = (obj: AssociationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateClientVpnTargetNetworkResultFilterSensitiveLog = (
  obj: AssociateClientVpnTargetNetworkResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDhcpOptionsRequestFilterSensitiveLog = (obj: AssociateDhcpOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateEnclaveCertificateIamRoleRequestFilterSensitiveLog = (
  obj: AssociateEnclaveCertificateIamRoleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateEnclaveCertificateIamRoleResultFilterSensitiveLog = (
  obj: AssociateEnclaveCertificateIamRoleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamInstanceProfileSpecificationFilterSensitiveLog = (obj: IamInstanceProfileSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIamInstanceProfileRequestFilterSensitiveLog = (obj: AssociateIamInstanceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamInstanceProfileFilterSensitiveLog = (obj: IamInstanceProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamInstanceProfileAssociationFilterSensitiveLog = (obj: IamInstanceProfileAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIamInstanceProfileResultFilterSensitiveLog = (obj: AssociateIamInstanceProfileResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowAssociationRequestFilterSensitiveLog = (
  obj: InstanceEventWindowAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateInstanceEventWindowRequestFilterSensitiveLog = (
  obj: AssociateInstanceEventWindowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowAssociationTargetFilterSensitiveLog = (
  obj: InstanceEventWindowAssociationTarget
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowTimeRangeFilterSensitiveLog = (obj: InstanceEventWindowTimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowFilterSensitiveLog = (obj: InstanceEventWindow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateInstanceEventWindowResultFilterSensitiveLog = (obj: AssociateInstanceEventWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateRouteTableRequestFilterSensitiveLog = (obj: AssociateRouteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteTableAssociationStateFilterSensitiveLog = (obj: RouteTableAssociationState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateRouteTableResultFilterSensitiveLog = (obj: AssociateRouteTableResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSubnetCidrBlockRequestFilterSensitiveLog = (obj: AssociateSubnetCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetCidrBlockStateFilterSensitiveLog = (obj: SubnetCidrBlockState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetIpv6CidrBlockAssociationFilterSensitiveLog = (obj: SubnetIpv6CidrBlockAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSubnetCidrBlockResultFilterSensitiveLog = (obj: AssociateSubnetCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: AssociateTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: AssociateTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: AssociateTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPolicyTableAssociationFilterSensitiveLog = (
  obj: TransitGatewayPolicyTableAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: AssociateTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: AssociateTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayAssociationFilterSensitiveLog = (obj: TransitGatewayAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: AssociateTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrunkInterfaceRequestFilterSensitiveLog = (obj: AssociateTrunkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrunkInterfaceAssociationFilterSensitiveLog = (obj: TrunkInterfaceAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrunkInterfaceResultFilterSensitiveLog = (obj: AssociateTrunkInterfaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateVpcCidrBlockRequestFilterSensitiveLog = (obj: AssociateVpcCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcCidrBlockStateFilterSensitiveLog = (obj: VpcCidrBlockState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcCidrBlockAssociationFilterSensitiveLog = (obj: VpcCidrBlockAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcIpv6CidrBlockAssociationFilterSensitiveLog = (obj: VpcIpv6CidrBlockAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateVpcCidrBlockResultFilterSensitiveLog = (obj: AssociateVpcCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachClassicLinkVpcRequestFilterSensitiveLog = (obj: AttachClassicLinkVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachClassicLinkVpcResultFilterSensitiveLog = (obj: AttachClassicLinkVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachInternetGatewayRequestFilterSensitiveLog = (obj: AttachInternetGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachNetworkInterfaceRequestFilterSensitiveLog = (obj: AttachNetworkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachNetworkInterfaceResultFilterSensitiveLog = (obj: AttachNetworkInterfaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachVolumeRequestFilterSensitiveLog = (obj: AttachVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeAttachmentFilterSensitiveLog = (obj: VolumeAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachVpnGatewayRequestFilterSensitiveLog = (obj: AttachVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcAttachmentFilterSensitiveLog = (obj: VpcAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachVpnGatewayResultFilterSensitiveLog = (obj: AttachVpnGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeClientVpnIngressRequestFilterSensitiveLog = (obj: AuthorizeClientVpnIngressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnAuthorizationRuleStatusFilterSensitiveLog = (obj: ClientVpnAuthorizationRuleStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeClientVpnIngressResultFilterSensitiveLog = (obj: AuthorizeClientVpnIngressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpRangeFilterSensitiveLog = (obj: IpRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6RangeFilterSensitiveLog = (obj: Ipv6Range): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixListIdFilterSensitiveLog = (obj: PrefixListId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdGroupPairFilterSensitiveLog = (obj: UserIdGroupPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpPermissionFilterSensitiveLog = (obj: IpPermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeSecurityGroupEgressRequestFilterSensitiveLog = (
  obj: AuthorizeSecurityGroupEgressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferencedSecurityGroupFilterSensitiveLog = (obj: ReferencedSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleFilterSensitiveLog = (obj: SecurityGroupRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeSecurityGroupEgressResultFilterSensitiveLog = (obj: AuthorizeSecurityGroupEgressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeSecurityGroupIngressRequestFilterSensitiveLog = (
  obj: AuthorizeSecurityGroupIngressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeSecurityGroupIngressResultFilterSensitiveLog = (
  obj: AuthorizeSecurityGroupIngressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3StorageFilterSensitiveLog = (obj: S3Storage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageFilterSensitiveLog = (obj: Storage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BundleInstanceRequestFilterSensitiveLog = (obj: BundleInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BundleTaskErrorFilterSensitiveLog = (obj: BundleTaskError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BundleTaskFilterSensitiveLog = (obj: BundleTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BundleInstanceResultFilterSensitiveLog = (obj: BundleInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelBundleTaskRequestFilterSensitiveLog = (obj: CancelBundleTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelBundleTaskResultFilterSensitiveLog = (obj: CancelBundleTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCapacityReservationRequestFilterSensitiveLog = (obj: CancelCapacityReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCapacityReservationResultFilterSensitiveLog = (obj: CancelCapacityReservationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCapacityReservationFleetsRequestFilterSensitiveLog = (
  obj: CancelCapacityReservationFleetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCapacityReservationFleetErrorFilterSensitiveLog = (
  obj: CancelCapacityReservationFleetError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCapacityReservationFleetCancellationResultFilterSensitiveLog = (
  obj: FailedCapacityReservationFleetCancellationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationFleetCancellationStateFilterSensitiveLog = (
  obj: CapacityReservationFleetCancellationState
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCapacityReservationFleetsResultFilterSensitiveLog = (
  obj: CancelCapacityReservationFleetsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelConversionRequestFilterSensitiveLog = (obj: CancelConversionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelExportTaskRequestFilterSensitiveLog = (obj: CancelExportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelImportTaskRequestFilterSensitiveLog = (obj: CancelImportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelImportTaskResultFilterSensitiveLog = (obj: CancelImportTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelReservedInstancesListingRequestFilterSensitiveLog = (
  obj: CancelReservedInstancesListingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCountFilterSensitiveLog = (obj: InstanceCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PriceScheduleFilterSensitiveLog = (obj: PriceSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstancesListingFilterSensitiveLog = (obj: ReservedInstancesListing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelReservedInstancesListingResultFilterSensitiveLog = (
  obj: CancelReservedInstancesListingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotFleetRequestsRequestFilterSensitiveLog = (obj: CancelSpotFleetRequestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotFleetRequestsSuccessItemFilterSensitiveLog = (obj: CancelSpotFleetRequestsSuccessItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotFleetRequestsErrorFilterSensitiveLog = (obj: CancelSpotFleetRequestsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotFleetRequestsErrorItemFilterSensitiveLog = (obj: CancelSpotFleetRequestsErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotFleetRequestsResponseFilterSensitiveLog = (obj: CancelSpotFleetRequestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotInstanceRequestsRequestFilterSensitiveLog = (obj: CancelSpotInstanceRequestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelledSpotInstanceRequestFilterSensitiveLog = (obj: CancelledSpotInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSpotInstanceRequestsResultFilterSensitiveLog = (obj: CancelSpotInstanceRequestsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmProductInstanceRequestFilterSensitiveLog = (obj: ConfirmProductInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmProductInstanceResultFilterSensitiveLog = (obj: ConfirmProductInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyFpgaImageRequestFilterSensitiveLog = (obj: CopyFpgaImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyFpgaImageResultFilterSensitiveLog = (obj: CopyFpgaImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyImageRequestFilterSensitiveLog = (obj: CopyImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyImageResultFilterSensitiveLog = (obj: CopyImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopySnapshotRequestFilterSensitiveLog = (obj: CopySnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopySnapshotResultFilterSensitiveLog = (obj: CopySnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCapacityReservationRequestFilterSensitiveLog = (obj: CreateCapacityReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationFilterSensitiveLog = (obj: CapacityReservation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCapacityReservationResultFilterSensitiveLog = (obj: CreateCapacityReservationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservationFleetInstanceSpecificationFilterSensitiveLog = (
  obj: ReservationFleetInstanceSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCapacityReservationFleetRequestFilterSensitiveLog = (
  obj: CreateCapacityReservationFleetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetCapacityReservationFilterSensitiveLog = (obj: FleetCapacityReservation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCapacityReservationFleetResultFilterSensitiveLog = (
  obj: CreateCapacityReservationFleetResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCarrierGatewayRequestFilterSensitiveLog = (obj: CreateCarrierGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CarrierGatewayFilterSensitiveLog = (obj: CarrierGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCarrierGatewayResultFilterSensitiveLog = (obj: CreateCarrierGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryServiceAuthenticationRequestFilterSensitiveLog = (
  obj: DirectoryServiceAuthenticationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FederatedAuthenticationRequestFilterSensitiveLog = (obj: FederatedAuthenticationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateAuthenticationRequestFilterSensitiveLog = (obj: CertificateAuthenticationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnAuthenticationRequestFilterSensitiveLog = (obj: ClientVpnAuthenticationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientConnectOptionsFilterSensitiveLog = (obj: ClientConnectOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientLoginBannerOptionsFilterSensitiveLog = (obj: ClientLoginBannerOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionLogOptionsFilterSensitiveLog = (obj: ConnectionLogOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClientVpnEndpointRequestFilterSensitiveLog = (obj: CreateClientVpnEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnEndpointStatusFilterSensitiveLog = (obj: ClientVpnEndpointStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClientVpnEndpointResultFilterSensitiveLog = (obj: CreateClientVpnEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClientVpnRouteRequestFilterSensitiveLog = (obj: CreateClientVpnRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientVpnRouteStatusFilterSensitiveLog = (obj: ClientVpnRouteStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClientVpnRouteResultFilterSensitiveLog = (obj: CreateClientVpnRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomerGatewayRequestFilterSensitiveLog = (obj: CreateCustomerGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerGatewayFilterSensitiveLog = (obj: CustomerGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomerGatewayResultFilterSensitiveLog = (obj: CreateCustomerGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDefaultSubnetRequestFilterSensitiveLog = (obj: CreateDefaultSubnetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsNameOptionsOnLaunchFilterSensitiveLog = (obj: PrivateDnsNameOptionsOnLaunch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetFilterSensitiveLog = (obj: Subnet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDefaultSubnetResultFilterSensitiveLog = (obj: CreateDefaultSubnetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDefaultVpcRequestFilterSensitiveLog = (obj: CreateDefaultVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcFilterSensitiveLog = (obj: Vpc): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDefaultVpcResultFilterSensitiveLog = (obj: CreateDefaultVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NewDhcpConfigurationFilterSensitiveLog = (obj: NewDhcpConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDhcpOptionsRequestFilterSensitiveLog = (obj: CreateDhcpOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeValueFilterSensitiveLog = (obj: AttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DhcpConfigurationFilterSensitiveLog = (obj: DhcpConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DhcpOptionsFilterSensitiveLog = (obj: DhcpOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDhcpOptionsResultFilterSensitiveLog = (obj: CreateDhcpOptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEgressOnlyInternetGatewayRequestFilterSensitiveLog = (
  obj: CreateEgressOnlyInternetGatewayRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InternetGatewayAttachmentFilterSensitiveLog = (obj: InternetGatewayAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EgressOnlyInternetGatewayFilterSensitiveLog = (obj: EgressOnlyInternetGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEgressOnlyInternetGatewayResultFilterSensitiveLog = (
  obj: CreateEgressOnlyInternetGatewayResult
): any => ({
  ...obj,
});
