// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  _InstanceType,
  AcceleratorCount,
  AcceleratorCountRequest,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiB,
  AcceleratorTotalMemoryMiBRequest,
  AcceleratorType,
  AccessScopePath,
  AccessScopePathRequest,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  AddressFamily,
  AttachmentStatus,
  CurrencyCodeValues,
  InstanceEventWindow,
  Ipv4PrefixSpecification,
  PortRange,
  Protocol,
  ReservedInstancesListing,
  ResourceType,
  RouteTableAssociationState,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  UnsuccessfulItem,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  WeekDay,
} from "./models_0";

export enum ClientVpnRouteStatusCode {
  active = "active",
  creating = "creating",
  deleting = "deleting",
  failed = "failed",
}

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

export interface CreateCoipCidrRequest {
  /**
   * <p>
   *       A customer-owned IP address range to create.
   *       </p>
   */
  Cidr: string | undefined;

  /**
   * <p>
   *          The ID of the address pool.
   *       </p>
   */
  CoipPoolId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>
 *       Information about a customer-owned IP address range.
 *       </p>
 */
export interface CoipCidr {
  /**
   * <p>
   *       An address range in a customer-owned IP address space.
   *       </p>
   */
  Cidr?: string;

  /**
   * <p>
   *          The ID of the address pool.
   *       </p>
   */
  CoipPoolId?: string;

  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId?: string;
}

export interface CreateCoipCidrResult {
  /**
   * <p>
   *          Information about a range of customer-owned IP addresses.
   *       </p>
   */
  CoipCidr?: CoipCidr;
}

export interface CreateCoipPoolRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *       The tags to assign to the CoIP address pool.
   *       </p>
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
 * <p>Describes a customer-owned address pool.</p>
 */
export interface CoipPool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The address ranges of the address pool.</p>
   */
  PoolCidrs?: string[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ARN of the address pool.</p>
   */
  PoolArn?: string;
}

export interface CreateCoipPoolResult {
  /**
   * <p>Information about the CoIP address pool.</p>
   */
  CoipPool?: CoipPool;
}

export enum GatewayType {
  ipsec_1 = "ipsec.1",
}

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
  /**
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
   *          <p>Default: 65000</p>
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
   *          <p>Length Constraints: Up to 255 characters.</p>
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

export enum SubnetState {
  available = "available",
  pending = "pending",
}

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

export enum Tenancy {
  dedicated = "dedicated",
  default = "default",
  host = "host",
}

export enum VpcState {
  available = "available",
  pending = "pending",
}

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
 * <p>The Amazon EC2 launch template that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch
 *             an instance from a launch template</a> in the
 *          <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   */
  Version?: string;
}

export enum BareMetal {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit
   *          this parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit
   *          this parameter.</p>
   */
  Max?: number;
}

export enum BurstablePerformance {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum CpuManufacturer {
  AMAZON_WEB_SERVICES = "amazon-web-services",
  AMD = "amd",
  INTEL = "intel",
}

export enum InstanceGeneration {
  CURRENT = "current",
  PREVIOUS = "previous",
}

export enum LocalStorage {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum LocalStorageType {
  HDD = "hdd",
  SSD = "ssd",
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 */
export interface MemoryMiBRequest {
  /**
   * <p>The minimum amount of memory, in MiB. To specify no minimum limit, specify
   *          <code>0</code>.</p>
   */
  Min: number | undefined;

  /**
   * <p>The maximum amount of memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 */
export interface NetworkInterfaceCountRequest {
  /**
   * <p>The minimum number of network interfaces. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of network interfaces. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 */
export interface TotalLocalStorageGBRequest {
  /**
   * <p>The minimum amount of total local storage, in GB. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of total local storage, in GB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 */
export interface VCpuCountRangeRequest {
  /**
   * <p>The minimum number of vCPUs. To specify no minimum limit, specify <code>0</code>.</p>
   */
  Min: number | undefined;

  /**
   * <p>The maximum number of vCPUs. To specify no maximum limit, omit this parameter.</p>
   */
  Max?: number;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *             are optional. Any unspecified optional attribute is set to its default.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *                placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface InstanceRequirementsRequest {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   */
  VCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   */
  CpuManufacturers?: (CpuManufacturer | string)[];

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to exclude an instance family, type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *             <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   */
  ExcludedInstanceTypes?: string[];

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   */
  InstanceGenerations?: (InstanceGeneration | string)[];

  /**
   * <p>The price protection threshold for Spot Instance. This is the maximum you’ll pay for an Spot Instance,
   *          expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  SpotMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance,
   *          expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BareMetal?: BareMetal | string;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BurstablePerformance?: BurstablePerformance | string;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *          EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                   <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                   <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   */
  LocalStorage?: LocalStorage | string;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   */
  LocalStorageTypes?: (LocalStorageType | string)[];

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with GPU hardware, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>To include instance types with FPGA hardware, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>To include instance types with inference hardware, specify <code>inference</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   */
  AcceleratorTypes?: (AcceleratorType | string)[];

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCountRequest;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   */
  AcceleratorManufacturers?: (AcceleratorManufacturer | string)[];

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code> vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   */
  AcceleratorNames?: (AcceleratorName | string)[];

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;

  /**
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   */
  AllowedInstanceTypes?: string[];
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface Placement {
  /**
   * <p>The Availability Zone of the instance.</p>
   *          <p>If not specified, an Availability Zone will be automatically chosen for you based on
   *             the load balancing criteria for the Region.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group that the instance is in. If you specify
   *                 <code>GroupName</code>, you can't specify <code>GroupId</code>.</p>
   */
  GroupName?: string;

  /**
   * <p>The number of the partition that the instance is in. Valid only if the placement group
   *             strategy is set to <code>partition</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ID of the Dedicated Host on which the instance resides.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>. The
   *                 <code>host</code> tenancy is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> or
   *             for T3 instances that are configured for the <code>unlimited</code> CPU credit
   *             option.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances.</p>
   *          <p>If you specify this parameter, either omit the <b>Tenancy</b> parameter or set it to <code>host</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The ID of the placement group that the instance is in. If you specify
   *                 <code>GroupId</code>, you can't specify <code>GroupName</code>.</p>
   */
  GroupId?: string;
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * <p>The instance type.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the launch template override has the lowest
   *          priority. You can set the same priority for different launch template overrides.</p>
   */
  Priority?: number;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *                <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirementsRequest;

  /**
   * <p>The ID of the AMI. An AMI is required to launch an instance. The AMI ID must be specified here or in the launch template.</p>
   */
  ImageId?: string;
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *          template name in the request. </p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   *          <p>For fleets of type <code>request</code> and <code>maintain</code>, a maximum of 300
   *          items is allowed across all launch templates.</p>
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[];
}

export enum FleetOnDemandAllocationStrategy {
  LOWEST_PRICE = "lowest-price",
  PRIORITIZED = "prioritized",
}

export enum FleetCapacityReservationUsageStrategy {
  USE_CAPACITY_RESERVATIONS_FIRST = "use-capacity-reservations-first",
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptionsRequest {
  /**
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
   *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
   *          On-Demand target capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
   *          chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptionsRequest {
  /**
   * <p>The strategy that determines the order of the launch template overrides to use in
   *          fulfilling On-Demand capacity.</p>
   *          <p>
   *             <code>lowest-price</code> - EC2 Fleet uses price to determine the order, launching the lowest
   *          price first.</p>
   *          <p>
   *             <code>prioritized</code> - EC2 Fleet uses the priority that you assigned to each launch
   *          template override, launching the highest priority first.</p>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: FleetOnDemandAllocationStrategy | string;

  /**
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptionsRequest;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export enum SpotAllocationStrategy {
  CAPACITY_OPTIMIZED = "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED = "capacity-optimized-prioritized",
  DIVERSIFIED = "diversified",
  LOWEST_PRICE = "lowest-price",
  PRICE_CAPACITY_OPTIMIZED = "price-capacity-optimized",
}

export enum SpotInstanceInterruptionBehavior {
  hibernate = "hibernate",
  stop = "stop",
  terminate = "terminate",
}

export enum FleetReplacementStrategy {
  LAUNCH = "launch",
  LAUNCH_BEFORE_TERMINATE = "launch-before-terminate",
}

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance
 *          notification signal that your Spot Instance is at an elevated risk of being interrupted.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a replacement Spot Instance when a rebalance
   *          notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not
   *          terminate the instances that receive a rebalance notification. You can terminate the old
   *          instances, or you can leave them running. You are charged for all instances while they are
   *          running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a replacement Spot Instance
   *          when a rebalance notification is emitted for an existing Spot Instance in the fleet, and
   *          then, after a delay that you specify (in <code>TerminationDelay</code>), terminates the
   *          instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: FleetReplacementStrategy | string;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest;
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 */
export interface SpotOptionsRequest {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *          pools specified by the EC2 Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html">Allocation strategies for Spot Instances</a> in the
   *          <i>Amazon EC2 User Guide</i>.</p>
   *          <dl>
   *             <dt>price-capacity-optimized (recommended)</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. EC2 Fleet then requests Spot Instances from the lowest priced of these pools.</p>
   *             </dd>
   *             <dt>capacity-optimized</dt>
   *             <dd>
   *                <p>EC2 Fleet identifies the pools with
   *                   the highest capacity availability for the number of instances that are launching. This means
   *                   that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                   in the near term. To give certain
   *                   instance types a higher chance of launching first, use
   *                   <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
   *                   using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *                   assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *                   the priorities on a best-effort basis, but optimizes for capacity first.
   *                   <code>capacity-optimized-prioritized</code> is supported only if your EC2 Fleet uses a
   *                   launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
   *                   <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *                   capacity.</p>
   *             </dd>
   *             <dt>diversified</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from all of the Spot Instance pools that you
   *                   specify.</p>
   *             </dd>
   *             <dt>lowest-price</dt>
   *             <dd>
   *                <p>EC2 Fleet requests instances from the lowest priced Spot Instance pool that
   *                   has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs out of
   *                   capacity before fulfilling your desired capacity, EC2 Fleet will continue to fulfill your
   *                   request by drawing from the next lowest priced pool. To ensure that your desired capacity is
   *                   met, you might receive Spot Instances from several pools. Because this strategy only considers instance
   *                   price and not capacity availability, it might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *          interrupted.</p>
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when Spot <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet
   *          selects the cheapest Spot pools and evenly allocates your target Spot capacity across the
   *          number of Spot pools that you specify.</p>
   *          <p>Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *          best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *          capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest
   *          pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *          the number of pools that you specified. Similarly, if most of the pools have no Spot
   *          capacity, you might receive your full target capacity from fewer than the number of pools
   *          that you specified.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxTotalPrice?: string;
}

export enum DefaultTargetCapacityType {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

export enum TargetCapacityUnitType {
  MEMORY_MIB = "memory-mib",
  UNITS = "units",
  VCPU = "vcpu",
}

/**
 * <p>The number of units to request. You can choose to set the target capacity as the number of
 *          instances. Or you can set the target capacity to a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost
 *          does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances
 *          in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're
 *          willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops
 *          launching instances even if it hasn’t met the target capacity. The
 *          <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The number of Spot units to request.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *          <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;

  /**
   * <p>The unit for the target capacity. <code>TargetCapacityUnitType</code> can only be specified when <code>InstanceRequirements</code> is specified.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;
}

export enum FleetType {
  INSTANT = "instant",
  MAINTAIN = "maintain",
  REQUEST = "request",
}

export interface CreateFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptionsRequest;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptionsRequest;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The number of units to request.</p>
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The fleet type. The default value is <code>maintain</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>maintain</code> - The EC2 Fleet places an asynchronous request for your desired
   *                capacity, and continues to maintain your desired Spot capacity by replenishing
   *                interrupted Spot Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>request</code> - The EC2 Fleet places an asynchronous one-time request for your
   *                desired capacity, but does submit Spot requests in alternative capacity pools if Spot
   *                capacity is unavailable, and does not maintain Spot capacity if Spot Instances are
   *                interrupted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instant</code> - The EC2 Fleet places a synchronous one-time request for your
   *                desired capacity, and returns errors for any instances that could not be
   *                launched.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-request-type.html">EC2 Fleet
   *             request types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging your resources</a>.</p>
   *          <p>If the fleet type is <code>instant</code>, specify a resource type of <code>fleet</code>
   *          to tag the fleet or <code>instance</code> to tag the instances at launch.</p>
   *          <p>If the fleet type is <code>maintain</code> or <code>request</code>, specify a resource
   *          type of <code>fleet</code> to tag the fleet. You cannot specify a resource type of
   *             <code>instance</code>. To tag instances at launch, specify the tags in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * <p>The Amazon EC2 launch template that can be used by
 *             a Spot Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>.
   *             You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch
   *             template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch
   *             template.</p>
   */
  Version?: string;
}

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 *          <p></p>
 */
export interface MemoryGiBPerVCpu {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 */
export interface MemoryMiB {
  /**
   * <p>The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of memory, in MiB. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the
 *             minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum
 *             bandwidth, but the actual bandwidth of your instance might go below the specified minimum
 *             at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 */
export interface NetworkBandwidthGbps {
  /**
   * <p>The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 */
export interface NetworkInterfaceCount {
  /**
   * <p>The minimum number of network interfaces. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of network interfaces. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 */
export interface TotalLocalStorageGB {
  /**
   * <p>The minimum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 */
export interface VCpuCountRange {
  /**
   * <p>The minimum number of vCPUs. If the value is <code>0</code>, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of vCPUs. If this parameter is not specified, there is no maximum
   *          limit.</p>
   */
  Max?: number;
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *          specified attributes. If you specify multiple values for an attribute, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types,
 *          you can use one of the following parameters, but not both in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list. All
 *                other instance types are ignored, even if they match your specified attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list,
 *                even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *             are optional. Any unspecified optional attribute is set to its default.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *                placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface InstanceRequirements {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   */
  VCpuCount?: VCpuCountRange;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   */
  MemoryMiB?: MemoryMiB;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   */
  CpuManufacturers?: (CpuManufacturer | string)[];

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu;

  /**
   * <p>The instance types to exclude.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *       an asterisk (<code>*</code>), to exclude an instance type, size, or generation. The
   *       following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *       <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   */
  ExcludedInstanceTypes?: string[];

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   */
  InstanceGenerations?: (InstanceGeneration | string)[];

  /**
   * <p>The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance,
   *          expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *                <code>memory-mib</code>, the price protection threshold is applied based on the
   *             per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  SpotMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance,
   *          expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <note>
   *             <p>If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or
   *          <code>memory-mib</code>, the price protection threshold is applied based on the
   *          per-vCPU or per-memory price instead of the per-instance price.</p>
   *          </note>
   *          <p>Default: <code>20</code>
   *          </p>
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BareMetal?: BareMetal | string;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BurstablePerformance?: BurstablePerformance | string;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand
   *          Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCount;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *             EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   */
  LocalStorage?: LocalStorage | string;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>ssd</code>
   *          </p>
   */
  LocalStorageTypes?: (LocalStorageType | string)[];

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGB;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with inference accelerators, specify <code>inference</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   */
  AcceleratorTypes?: (AcceleratorType | string)[];

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCount;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   */
  AcceleratorManufacturers?: (AcceleratorManufacturer | string)[];

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services Inferentia chips, specify <code>inferentia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   */
  AcceleratorNames?: (AcceleratorName | string)[];

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB;

  /**
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbps;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance types
   *          are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by
   *          an asterisk (<code>*</code>), to allow an instance type, size, or generation. The
   *          following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *          <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will allow the entire C5 instance
   *          family, which includes all C5a and C5n instance types. If you specify
   *          <code>m5a.*</code>, Amazon EC2 will allow all the M5a instance types, but not the M5n
   *          instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   */
  AllowedInstanceTypes?: string[];
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   */
  GroupName?: string;
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the override has the lowest priority. You can set
   *          the same priority for different launch template overrides.</p>
   */
  Priority?: number;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: PlacementResponse;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * <p>The ID of the AMI. An AMI is required to launch an instance. The AMI ID must be specified here or in the launch template.</p>
   */
  ImageId?: string;
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides;
}

export enum InstanceLifecycle {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorMessage?: string;
}

export enum PlatformValues {
  Windows = "Windows",
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;
}

export interface CreateFleetResult {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Errors?: CreateFleetError[];

  /**
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Instances?: CreateFleetInstance[];
}

export enum DestinationFileFormat {
  parquet = "parquet",
  plain_text = "plain-text",
}

/**
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsRequest {
  /**
   * <p>The format for the flow log. The default is <code>plain-text</code>.</p>
   */
  FileFormat?: DestinationFileFormat | string;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *             The default is <code>false</code>.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * <p>Indicates whether to partition the flow log per hour. This reduces the cost and response
   *             time for queries. The default is <code>false</code>.</p>
   */
  PerHourPartition?: boolean;
}

export enum LogDestinationType {
  cloud_watch_logs = "cloud-watch-logs",
  kinesis_data_firehose = "kinesis-data-firehose",
  s3 = "s3",
}

export enum FlowLogsResourceType {
  NetworkInterface = "NetworkInterface",
  Subnet = "Subnet",
  TransitGateway = "TransitGateway",
  TransitGatewayAttachment = "TransitGatewayAttachment",
  VPC = "VPC",
}

export enum TrafficType {
  ACCEPT = "ACCEPT",
  ALL = "ALL",
  REJECT = "REJECT",
}

export interface CreateFlowLogsRequest {
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

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs to a CloudWatch Logs log group in
   *             your account.</p>
   *          <p>This parameter is required if the destination type is <code>cloud-watch-logs</code>
   *             and unsupported otherwise.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.</p>
   */
  DeliverCrossAccountRole?: string;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *          <p>This parameter is valid only if the destination type is <code>cloud-watch-logs</code>.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The IDs of the resources to monitor. For example, if the resource type is
   *                 <code>VPC</code>, specify the IDs of the VPCs.</p>
   *          <p>Constraints: Maximum of 25 for transit gateway resource types. Maximum of 1000 for the
   *             other resource types.</p>
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource to monitor.</p>
   */
  ResourceType: FlowLogsResourceType | string | undefined;

  /**
   * <p>The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic).
   *             This parameter is not supported for transit gateway resource types. It is required for
   *             the other resource types.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>The type of destination for the flow log data.</p>
   *          <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The destination for the flow log data. The meaning of this parameter depends on the destination type.</p>
   *          <ul>
   *             <li>
   *                <p>If the destination type is <code>cloud-watch-logs</code>, specify the ARN of a CloudWatch Logs log group. For example:</p>
   *                <p>arn:aws:logs:<i>region</i>:<i>account_id</i>:log-group:<i>my_group</i>
   *                </p>
   *                <p>Alternatively, use the <code>LogGroupName</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>s3</code>, specify the ARN of an S3 bucket. For example:</p>
   *                <p>arn:aws:s3:::<i>my_bucket</i>/<i>my_subfolder</i>/</p>
   *                <p>The subfolder is optional. Note that you can't use <code>AWSLogs</code> as a subfolder name.</p>
   *             </li>
   *             <li>
   *                <p>If the destination type is <code>kinesis-data-firehose</code>, specify the ARN of a Kinesis Data Firehose delivery stream. For example:</p>
   *                <p>arn:aws:firehose:<i>region</i>:<i>account_id</i>:deliverystream:<i>my_stream</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  LogDestination?: string;

  /**
   * <p>The fields to include in the flow log record. List the fields in the order in which
   *             they should appear. If you omit this parameter, the flow log is created using the
   *             default format. If you specify this parameter, you must include at least one
   *             field. For more information about the available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log
   *                 records</a> in the <i>Amazon VPC User Guide</i> or <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records">Transit Gateway Flow Log
   *                     records</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   *          <p>Specify the fields using the <code>${field-id}</code> format, separated by spaces. For
   *             the CLI, surround this parameter value with single quotes on Linux or
   *             double quotes on Windows.</p>
   */
  LogFormat?: string;

  /**
   * <p>The tags to apply to the flow logs.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.
   *             The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes).
   *             This parameter must be 60 seconds for transit gateway resource types.</p>
   *          <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *          <p>Default: 600</p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsRequest;
}

export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IDs of the flow logs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface StorageLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>The key.</p>
   */
  Key?: string;
}

export interface CreateFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   */
  LogsStorageLocation?: StorageLocation;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreateFpgaImageResult {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;
}

export enum VolumeType {
  gp2 = "gp2",
  gp3 = "gp3",
  io1 = "io1",
  io2 = "io2",
  sc1 = "sc1",
  st1 = "st1",
  standard = "standard",
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface EbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes,
   *             this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code>
   *             volumes, this represents the baseline performance of the volume and the rate at which
   *             the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS only for
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the
   *                 Nitro System</a>. Other instance families guarantee performance up to
   *             32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes
   *             is 3,000 IOPS. This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code>
   *             volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. If you specify a snapshot, the default is the snapshot size. You can specify a
   *             volume size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>:1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or
   *                 <code>io2</code>, you must specify the IOPS that the volume supports.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under
   *             which the EBS volume is encrypted.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">
   *                 CreateImage</a>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot. The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS encryption</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>In no case can you remove encryption from an encrypted volume.</p>
   *          <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
   *          <p>This parameter is not returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html">DescribeImageAttribute</a>.</p>
   */
  Encrypted?: boolean;
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *             volumes to attach to an instance at launch.</p>
 */
export interface BlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *             starting from 0. An instance type with 2 available instance store volumes can specify
   *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
   *             available instance store volumes depends on the instance type. After you connect to the
   *             instance, you must mount the volume.</p>
   *          <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *             Including them in your block device mapping has no effect.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *             store volumes specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsBlockDevice;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *             property is specified, the device is removed from the block device mapping regardless of
   *             the assigned value.</p>
   */
  NoDevice?: string;
}

export interface CreateImageRequest {
  /**
   * <p>The block device mappings. This parameter cannot be used to modify the encryption
   *    		status of existing volumes or snapshots. To create an AMI with encrypted snapshots,
   *    		use the <a>CopyImage</a> action.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for the new image.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>By default, when Amazon EC2 creates the new AMI, it reboots the instance so that it can
   * 					take snapshots of the attached volumes while data is at rest, in order to ensure a consistent
   * 					state. You can set the <code>NoReboot</code> parameter to <code>true</code> in the API request,
   * 					or use the <code>--no-reboot</code> option in the CLI to prevent Amazon EC2 from shutting down and
   * 					rebooting the instance.</p>
   *          <important>
   *             <p>If you choose to bypass the shutdown and reboot process by setting the <code>NoReboot</code>
   * 					parameter to <code>true</code> in the API request, or by using the <code>--no-reboot</code> option
   * 					in the CLI, we can't guarantee the file system integrity of the created image.</p>
   *          </important>
   *          <p>Default: <code>false</code> (follow standard reboot process)</p>
   */
  NoReboot?: boolean;

  /**
   * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that
   *           are attached to the instance, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 */
export interface InstanceEventWindowTimeRangeRequest {
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

export interface CreateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The time range for the event window. If you specify a time range, you can't specify a cron
   *          expression.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * <p>The cron expression for the event window, for example, <code>* 0-4,20-23 * * 1,5</code>. If
   *          you specify a cron expression, you can't specify a time range.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *             <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *             <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>The tags to apply to the event window.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export enum ContainerFormat {
  ova = "ova",
}

export enum DiskImageFormat {
  RAW = "RAW",
  VHD = "VHD",
  VMDK = "VMDK",
}

/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportToS3TaskSpecification {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   */
  S3Prefix?: string;
}

export enum ExportEnvironment {
  citrix = "citrix",
  microsoft = "microsoft",
  vmware = "vmware",
}

export interface CreateInstanceExportTaskRequest {
  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The format and location for an export instance task.</p>
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment: ExportEnvironment | string | undefined;

  /**
   * <p>The tags to apply to the export instance task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes the format and location for the export task.</p>
 */
export interface ExportToS3Task {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   */
  S3Key?: string;
}

/**
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment | string;
}

export enum ExportTaskState {
  active = "active",
  cancelled = "cancelled",
  cancelling = "cancelling",
  completed = "completed",
}

/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: ExportToS3Task;

  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: InstanceExportDetails;

  /**
   * <p>The state of the export task.</p>
   */
  State?: ExportTaskState | string;

  /**
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags for the export task.</p>
   */
  Tags?: Tag[];
}

export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the export instance task.</p>
   */
  ExportTask?: ExportTask;
}

export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
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
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Tag[];
}

export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: InternetGateway;
}

export interface CreateIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A description for the IPAM.</p>
   */
  Description?: string;

  /**
   * <p>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. </p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  OperatingRegions?: AddIpamOperatingRegion[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   */
  RegionName?: string;
}

export enum IpamState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

/**
 * <p>IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface Ipam {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the IPAM.</p>
   */
  IpamId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The ID of the IPAM's default public scope.</p>
   */
  PublicDefaultScopeId?: string;

  /**
   * <p>The ID of the IPAM's default private scope.</p>
   */
  PrivateDefaultScopeId?: string;

  /**
   * <p>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  ScopeCount?: number;

  /**
   * <p>The description for the IPAM.</p>
   */
  Description?: string;

  /**
   * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OperatingRegions?: IpamOperatingRegion[];

  /**
   * <p>The state of the IPAM.</p>
   */
  State?: IpamState | string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IPAM's default resource discovery ID.</p>
   */
  DefaultResourceDiscoveryId?: string;

  /**
   * <p>The IPAM's default resource discovery association ID.</p>
   */
  DefaultResourceDiscoveryAssociationId?: string;

  /**
   * <p>The IPAM's resource discovery association count.</p>
   */
  ResourceDiscoveryAssociationCount?: number;
}

export interface CreateIpamResult {
  /**
   * <p>Information about the IPAM created.</p>
   */
  Ipam?: Ipam;
}

/**
 * <p>A tag on an IPAM resource.</p>
 */
export interface RequestIpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   */
  Key?: string;

  /**
   * <p>The value for the tag.</p>
   */
  Value?: string;
}

export enum IpamPoolAwsService {
  ec2 = "ec2",
}

export enum IpamPoolPublicIpSource {
  amazon = "amazon",
  byoip = "byoip",
}

export interface CreateIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the scope in which you would like to create the IPAM pool.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * <p>In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you do not choose a locale, resources in Regions others than the IPAM's home region cannot use CIDRs from this pool.</p>
   *          <p>Possible values: Any Amazon Web Services Region, such as us-east-1.</p>
   */
  Locale?: string;

  /**
   * <p>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * <p>A description for the IPAM pool.</p>
   */
  Description?: string;

  /**
   * <p>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</p>
   */
  AddressFamily: AddressFamily | string | undefined;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   */
  AutoImport?: boolean;

  /**
   * <p>Determines if the pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be
   *          less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be
   *          greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   *          new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: RequestIpamResourceTag[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService | string;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>byoip</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is <code>amazon</code>. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  PublicIpSource?: IpamPoolPublicIpSource | string;
}

/**
 * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
 *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
 */
export interface IpamResourceTag {
  /**
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export enum IpamScopeType {
  private = "private",
  public = "public",
}

export enum IpamPoolState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

/**
 * <p>In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 */
export interface IpamPool {
  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the IPAM pool.</p>
   */
  IpamPoolId?: string;

  /**
   * <p>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IPAM pool.</p>
   */
  IpamPoolArn?: string;

  /**
   * <p>The ARN of the scope of the IPAM pool.</p>
   */
  IpamScopeArn?: string;

  /**
   * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
   */
  IpamScopeType?: IpamScopeType | string;

  /**
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM pool.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The locale of the IPAM pool. In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</p>
   */
  Locale?: string;

  /**
   * <p>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  PoolDepth?: number;

  /**
   * <p>The state of the IPAM pool.</p>
   */
  State?: IpamPoolState | string;

  /**
   * <p>A message related to the failed creation of an IPAM pool.</p>
   */
  StateMessage?: string;

  /**
   * <p>The description of the IPAM pool.</p>
   */
  Description?: string;

  /**
   * <p>If selected, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   */
  AutoImport?: boolean;

  /**
   * <p>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>The address family of the pool.</p>
   */
  AddressFamily?: AddressFamily | string;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and
   *          you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: IpamResourceTag[];

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService | string;

  /**
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>BYOIP</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  PublicIpSource?: IpamPoolPublicIpSource | string;
}

export interface CreateIpamPoolResult {
  /**
   * <p>Information about the IPAM pool created.</p>
   */
  IpamPool?: IpamPool;
}

export interface CreateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A description for the IPAM resource discovery.</p>
   */
  Description?: string;

  /**
   * <p>Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  OperatingRegions?: AddIpamOperatingRegion[];

  /**
   * <p>Tag specifications for the IPAM resource discovery.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A client token for the IPAM resource discovery.</p>
   */
  ClientToken?: string;
}

export enum IpamResourceDiscoveryState {
  CREATE_COMPLETE = "create-complete",
  CREATE_FAILED = "create-failed",
  CREATE_IN_PROGRESS = "create-in-progress",
  DELETE_COMPLETE = "delete-complete",
  DELETE_FAILED = "delete-failed",
  DELETE_IN_PROGRESS = "delete-in-progress",
  ISOLATE_COMPLETE = "isolate-complete",
  ISOLATE_IN_PROGRESS = "isolate-in-progress",
  MODIFY_COMPLETE = "modify-complete",
  MODIFY_FAILED = "modify-failed",
  MODIFY_IN_PROGRESS = "modify-in-progress",
  RESTORE_IN_PROGRESS = "restore-in-progress",
}

/**
 * <p>A resource discovery is an IPAM component that enables IPAM Service to manage and monitor resources that belong to the owning account.</p>
 */
export interface IpamResourceDiscovery {
  /**
   * <p>The ID of the owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The resource discovery ID.</p>
   */
  IpamResourceDiscoveryId?: string;

  /**
   * <p>The resource discovery Amazon Resource Name (ARN).</p>
   */
  IpamResourceDiscoveryArn?: string;

  /**
   * <p>The resource discovery Region.</p>
   */
  IpamResourceDiscoveryRegion?: string;

  /**
   * <p>The resource discovery description.</p>
   */
  Description?: string;

  /**
   * <p>The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  OperatingRegions?: IpamOperatingRegion[];

  /**
   * <p>Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The lifecycle state of the resource discovery.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-in-progress</code> - Resource discovery is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-complete</code> - Resource discovery creation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-failed</code> - Resource discovery creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-in-progress</code> - Resource discovery is being modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-complete</code> - Resource discovery modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modify-failed</code> - Resource discovery modification has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-in-progress</code> - Resource discovery is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-complete</code> - Resource discovery deletion is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delete-failed</code> - Resource discovery deletion has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-complete</code> - Resource discovery isolation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restore-in-progress</code> - Amazon Web Services account that created the resource discovery and was isolated has been restored.</p>
   *             </li>
   *          </ul>
   */
  State?: IpamResourceDiscoveryState | string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  Tags?: Tag[];
}

export interface CreateIpamResourceDiscoveryResult {
  /**
   * <p>An IPAM resource discovery.</p>
   */
  IpamResourceDiscovery?: IpamResourceDiscovery;
}

export interface CreateIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM for which you're creating this scope.</p>
   */
  IpamId: string | undefined;

  /**
   * <p>A description for the scope you're creating.</p>
   */
  Description?: string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export enum IpamScopeState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  isolate_complete = "isolate-complete",
  isolate_in_progress = "isolate-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_in_progress = "restore-in-progress",
}

/**
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamScope {
  /**
   * <p>The Amazon Web Services account ID of the owner of the scope.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the scope.</p>
   */
  IpamScopeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   */
  IpamScopeArn?: string;

  /**
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * <p>The Amazon Web Services Region of the IPAM scope.</p>
   */
  IpamRegion?: string;

  /**
   * <p>The type of the scope.</p>
   */
  IpamScopeType?: IpamScopeType | string;

  /**
   * <p>Defines if the scope is the default scope or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The description of the scope.</p>
   */
  Description?: string;

  /**
   * <p>The number of pools in the scope.</p>
   */
  PoolCount?: number;

  /**
   * <p>The state of the IPAM scope.</p>
   */
  State?: IpamScopeState | string;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];
}

export interface CreateIpamScopeResult {
  /**
   * <p>Information about the created scope.</p>
   */
  IpamScope?: IpamScope;
}

export enum KeyFormat {
  pem = "pem",
  ppk = "ppk",
}

export enum KeyType {
  ed25519 = "ed25519",
  rsa = "rsa",
}

export interface CreateKeyPairRequest {
  /**
   * <p>A unique name for the key pair.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   */
  KeyName: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances.</p>
   *          <p>Default: <code>rsa</code>
   *          </p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>The tags to apply to the new key pair.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The format of the key pair.</p>
   *          <p>Default: <code>pem</code>
   *          </p>
   */
  KeyFormat?: KeyFormat | string;
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.</p>
   *             </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   */
  KeyMaterial?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The parameters for a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached
   *             to instances that support Amazon EBS encryption. If you are creating a volume from a
   *             snapshot, you can't specify an encryption value.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>,
   *             <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that
   *             are provisioned for the volume. For <code>gp2</code> volumes, this represents the
   *             baseline performance of the volume and the rate at which the volume accumulates I/O
   *             credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee
   *             64,000 IOPS only for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the
   *                 Nitro System</a>. Other instance families guarantee performance up to
   *             32,000 IOPS.</p>
   *          <p>This parameter is supported for <code>io1</code>, <code>io2</code>, and <code>gp3</code> volumes only. This parameter
   *             is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the symmetric Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume
   *             size. The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 1,000
   *             MiB/s.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *             from 0. An instance type with 2 available instance store volumes can specify mappings
   *             for ephemeral0 and ephemeral1. The number of available instance store volumes depends on
   *             the instance type. After you connect to the instance, you must mount the volume.</p>
   */
  VirtualName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

export enum CapacityReservationPreference {
  none = "none",
  open = "open",
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTarget {
  /**
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only
 *             one option at a time. Use the <code>CapacityReservationPreference</code> parameter to
 *             configure the instance to run in On-Demand capacity or to run in any <code>open</code>
 *             Capacity Reservation that has matching attributes (instance type, platform, Availability
 *             Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a
 *             specific Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;
}

/**
 * <p>The credit option for CPU usage of a T instance.</p>
 */
export interface CreditSpecificationRequest {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

/**
 * <p>A specification for an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuSpecification {
  /**
   * <p>The type of Elastic Graphics accelerator. For more information about the values to specify for
   *             <code>Type</code>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics">Elastic Graphics Basics</a>, specifically the Elastic Graphics accelerator column, in the
   *             <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.</p>
   */
  Type: string | undefined;
}

/**
 * <p> Describes an elastic inference accelerator. </p>
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   */
  Type: string | undefined;

  /**
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
 *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro Enclaves?</a>
 *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>.</p>
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for
   *             hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

/**
 * <p>An IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export enum ShutdownBehavior {
  stop = "stop",
  terminate = "terminate",
}

export enum MarketType {
  spot = "spot",
}

export enum InstanceInterruptionBehavior {
  hibernate = "hibernate",
  stop = "stop",
  terminate = "terminate",
}

export enum SpotInstanceType {
  one_time = "one-time",
  persistent = "persistent",
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY-MM-DD</i>T<i>HH:MM:SS</i>Z). Supported only for
   *             persistent requests.</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   *          <p>Default: 7 days from the current date</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export enum LaunchTemplateAutoRecoveryState {
  default = "default",
  disabled = "disabled",
}

/**
 * <p>The maintenance options of your instance.</p>
 */
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | string;
}

export enum LaunchTemplateInstanceMetadataEndpointState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum LaunchTemplateInstanceMetadataProtocolIpv6 {
  disabled = "disabled",
  enabled = "enabled",
}

export enum LaunchTemplateHttpTokensState {
  optional = "optional",
  required = "required",
}

export enum LaunchTemplateInstanceMetadataTagsState {
  disabled = "disabled",
  enabled = "enabled",
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code>
   *             (in other words, set the use of IMDSv2 to <code>optional</code>) or
   *                 <code>required</code> (in other words, set the use of IMDSv2 to
   *                 <code>required</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | string;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | string;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring
   *             is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to Amazon EC2 network interfaces</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * <p>The parameters for a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   *                 <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If you are not creating an EFA, specify <code>interface</code> or omit this
   *             parameter.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You
   *             can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network
   *             interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   */
  Ipv6PrefixCount?: number;
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a
   *             host resource group ARN, omit the <b>Tenancy</b> parameter or
   *             set it to <code>host</code>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS
   *             name must be based on the instance ID. For dual-stack subnets, you can specify whether
   *             DNS names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * <p>The tags specification for the resources that are created during instance
 *             launch.</p>
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag.</p>
   *          <p>The <code>Valid Values</code> are all the resource types that can be tagged. However,
   *             when creating a launch template, you can specify tags for the following resource types
   *             only: <code>instance</code> | <code>volume</code> | <code>elastic-gpu</code> |
   *                 <code>network-interface</code> | <code>spot-instances-request</code>
   *          </p>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The information to include in the launch template.</p>
 *          <note>
 *             <p>You must specify at least one parameter for the launch template data.</p>
 *          </note>
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          </important>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The block device mapping.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *             any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * <p>The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which
   *             will resolve to an AMI ID on launch.</p>
   *          <p>Valid formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ami-17characters00000</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:parameter-name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:parameter-name:version-number</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:parameter-name:label</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *             Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If you specify <code>InstanceType</code>, you can't specify
   *                 <code>InstanceRequirements</code>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: LaunchTemplatePlacementRequest;

  /**
   * <p>The ID of the RAM disk.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          </important>
   */
  RamDiskId?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data to make available to the instance. You must provide base64-encoded text.
   *             User data is limited to 16 KB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands on your Linux instance at
   *                 launch</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instancedata-add-user-data.html">Work with instance
   *                 user data</a> (Windows) in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If you are creating the launch template for use with Batch, the user
   *             data must be provided in the <a href="https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive"> MIME multi-part archive format</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Amazon EC2 user data in launch templates</a> in the <i>Batch User Guide</i>.</p>
   */
  UserData?: string;

  /**
   * <p>The tags to apply to the resources that are created during instance launch.</p>
   *          <p>You can specify tags for the following resources only:</p>
   *          <ul>
   *             <li>
   *                <p>Instances</p>
   *             </li>
   *             <li>
   *                <p>Volumes</p>
   *             </li>
   *             <li>
   *                <p>Elastic graphics</p>
   *             </li>
   *             <li>
   *                <p>Spot Instance requests</p>
   *             </li>
   *             <li>
   *                <p>Network interfaces</p>
   *             </li>
   *          </ul>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   *          <note>
   *             <p>To tag the launch template itself, you must use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html">TagSpecification</a> parameter.</p>
   *          </note>
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[];

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>One or more security group names. For a nondefault VPC, you must use security group
   *             IDs instead. You cannot specify both a security group ID and security name in the same
   *             request.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid only for T instances.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
   *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro Enclaves?</a>
   *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the
   *             subnet.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest;

  /**
   * <p>The maintenance options for the instance.</p>
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest;

  /**
   * <p>Indicates whether to enable the instance for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DisableApiStop?: boolean;
}

export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>The tags to apply to the launch template on creation. To tag the launch template, the
   *             resource type must be <code>launch-template</code>.</p>
   *          <note>
   *             <p>To specify the tags for the resources that are created when an instance is
   *                 launched, you must use the <code>TagSpecifications</code> parameter in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestLaunchTemplateData.html">launch
   *                     template data</a> structure.</p>
   *          </note>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter
 *             combination that is not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid.
   *             For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   */
  Code?: string;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not
   *             valid. For more information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   */
  Message?: string;
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter
 *             combinations that are not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   */
  Errors?: ValidationError[];
}

export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not
   *             valid, an error code and an error message are returned for each issue that's
   *             found.</p>
   */
  Warning?: ValidationWarning;
}

export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template version on which to base the new version.
   *             The new version inherits the same launch parameters as the source version, except for
   *             parameters that you specify in <code>LaunchTemplateData</code>. Snapshots applied to the
   *             block device mapping are ignored when creating a new version unless they are explicitly
   *             included.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the AMI ID is displayed in the response for <code>imageID</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *                 Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ResolveAlias?: boolean;
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   *                     Reservation that has matching attributes (instance type, platform, Availability
   *                     Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even
   *                     if one is available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

/**
 * <p>Describes the credit option for CPU usage of a T instance.</p>
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits?: string;
}

/**
 * <p>Describes an elastic GPU.</p>
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>The elastic GPU type.</p>
   */
  Type?: string;
}

/**
 * <p> Describes an elastic inference accelerator. </p>
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   */
  Type?: string;

  /**
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro
   *             Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until
   *             all instances launch, the request is canceled, or this date is reached. If the request
   *             is persistent, it remains active until it is canceled or this date and time is
   *             reached.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * <p>The maintenance options of your instance.</p>
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState | string;
}

export enum LaunchTemplateInstanceMetadataOptionsState {
  applied = "applied",
  pending = "pending",
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | string;

  /**
   * <p>Indicates whether IMDSv2 is <code>optional</code> or <code>required</code>.</p>
   *          <p>
   *             <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *          <p>
   *             <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | string;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState | string;
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Information about the IPv4 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * <p>The IPv4 delegated prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

/**
 * <p>Information about the IPv6 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * <p>The IPv6 delegated prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * <p>Describes a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network
   *             interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network
   *             interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv6PrefixCount?: number;
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. </p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The Group ID of the placement group. You must specify the Placement Group <b>Group ID</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptions {
  /**
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * <p>The tags specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource to tag.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The information for a launch template. </p>
 */
export interface ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * <p>The ID of the AMI or a Systems Manager parameter. The Systems Manager parameter will
   *             resolve to the ID of the AMI at instance launch.</p>
   *          <p>The value depends on what you specified in the request. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>If an AMI ID was specified in the request, then this is the AMI ID.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and
   *                     <code>ResolveAlias</code> was configured as <code>true</code>, then this is
   *                     the AMI ID that the parameter is mapped to in the Parameter Store.</p>
   *             </li>
   *             <li>
   *                <p>If a Systems Manager parameter was specified in the request, and <code>ResolveAlias</code> was configured
   *                     as <code>false</code>, then this is the parameter value.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *             Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: LaunchTemplatePlacement;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * <p>The tags that are applied to the resources that are created during instance
   *             launch.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * <p> The elastic inference accelerator for the instance. </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: CreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;

  /**
   * <p>The maintenance options for your instance.</p>
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions;

  /**
   * <p>Indicates whether the instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DisableApiStop?: boolean;
}

/**
 * <p>Describes a launch template version.</p>
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: LaunchTemplateVersion;

  /**
   * <p>If the new version of the launch template contains parameters or parameter
   *             combinations that are not valid, an error code and an error message are returned for
   *             each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

export enum LocalGatewayRouteState {
  active = "active",
  blackhole = "blackhole",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

export enum LocalGatewayRouteType {
  propagated = "propagated",
  static = "static",
}

/**
 * <p>Describes a route for a local gateway route table.</p>
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: LocalGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: LocalGatewayRouteState | string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export enum LocalGatewayRouteTableMode {
  coip = "coip",
  direct_vpc_routing = "direct-vpc-routing",
}

export interface CreateLocalGatewayRouteTableRequest {
  /**
   * <p>
   *       The ID of the local gateway.
   *       </p>
   */
  LocalGatewayId: string | undefined;

  /**
   * <p>
   *       The mode of the local gateway route table.
   *       </p>
   */
  Mode?: LocalGatewayRouteTableMode | string;

  /**
   * <p>
   *       The tags assigned to the local gateway route table.
   *       </p>
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
 * <p>Describes a state change.</p>
 */
export interface StateReason {
  /**
   * <p>The reason code for the state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the state change.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     using the <code>shutdown -h</code> command from the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   */
  Message?: string;
}

/**
 * <p>Describes a local gateway route table.</p>
 */
export interface LocalGatewayRouteTable {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway route table.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway route table.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The mode of the local gateway route table.</p>
   */
  Mode?: LocalGatewayRouteTableMode | string;

  /**
   * <p>Information about the state change.</p>
   */
  StateReason?: StateReason;
}

export interface CreateLocalGatewayRouteTableResult {
  /**
   * <p>Information about the local gateway route table.</p>
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}

export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *       The ID of the local gateway route table virtual interface group association.
   *       </p>
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>
   *       The tags assigned to the local gateway route table virtual interface group association.
   *       </p>
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
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * <p>Information about the local gateway route table virtual interface group association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}

export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
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
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the prefix list.</p>
   *          <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   */
  Entries?: AddPrefixListEntry[];

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IP address type.</p>
   *          <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   */
  ClientToken?: string;
}

export enum PrefixListState {
  create_complete = "create-complete",
  create_failed = "create-failed",
  create_in_progress = "create-in-progress",
  delete_complete = "delete-complete",
  delete_failed = "delete-failed",
  delete_in_progress = "delete-in-progress",
  modify_complete = "modify-complete",
  modify_failed = "modify-failed",
  modify_in_progress = "modify-in-progress",
  restore_complete = "restore-complete",
  restore_failed = "restore-failed",
  restore_in_progress = "restore-in-progress",
}

/**
 * <p>Describes a managed prefix list.</p>
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The IP address version.</p>
   */
  AddressFamily?: string;

  /**
   * <p>The current state of the prefix list.</p>
   */
  State?: PrefixListState | string;

  /**
   * <p>The state message.</p>
   */
  StateMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   */
  PrefixListArn?: string;

  /**
   * <p>The name of the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries?: number;

  /**
   * <p>The version of the prefix list.</p>
   */
  Version?: number;

  /**
   * <p>The tags for the prefix list.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the owner of the prefix list.</p>
   */
  OwnerId?: string;
}

export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export enum ConnectivityType {
  PRIVATE = "private",
  PUBLIC = "public",
}

export interface CreateNatGatewayRequest {
  /**
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   */
  AllocationId?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The subnet in which to create the NAT gateway.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;

  /**
   * <p>The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 */
export interface NatGatewayAddress {
  /**
   * <p>[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the NAT gateway.</p>
   */
  PrivateIp?: string;

  /**
   * <p>[Public NAT gateway only] The Elastic IP address associated with the NAT gateway.</p>
   */
  PublicIp?: string;
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Provisioned?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Requested?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Status?: string;
}

export enum NatGatewayState {
  AVAILABLE = "available",
  DELETED = "deleted",
  DELETING = "deleting",
  FAILED = "failed",
  PENDING = "pending",
}

/**
 * <p>Describes a NAT gateway.</p>
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p>
   *          <ul>
   *             <li>
   *                <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p>
   *             </li>
   *             <li>
   *                <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p>
   *             </li>
   *             <li>
   *                <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p>
   *             </li>
   *             <li>
   *                <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p>
   *             </li>
   *          </ul>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through
   *           the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: ProvisionedBandwidth;

  /**
   * <p>The state of the NAT gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The NAT gateway is being created and is not ready to process
   *           traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: The NAT gateway could not be created. Check the
   *             <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The NAT gateway is able to process traffic. This status remains
   *           until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The NAT gateway is in the process of being terminated and may
   *           still be processing traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The NAT gateway has been terminated and is no longer processing
   *           traffic.</p>
   *             </li>
   *          </ul>
   */
  State?: NatGatewayState | string;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;
}

export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: NatGateway;
}

export interface CreateNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the network ACL.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

/**
 * <p>Describes the ICMP type and code.</p>
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   */
  Type?: number;
}

export enum RuleAction {
  allow = "allow",
  deny = "deny",
}

/**
 * <p>Describes an entry in a network ACL.</p>
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: RuleAction | string;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

/**
 * <p>Describes a network ACL.</p>
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: NetworkAclAssociation[];

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: NetworkAclEntry[];

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: NetworkAcl;
}

export interface CreateNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   */
  RuleNumber: number | undefined;
}

export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePathRequest[];

  /**
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePathRequest[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply.</p>
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
 * <p>Describes a Network Access Scope.</p>
 */
export interface NetworkInsightsAccessScope {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeArn?: string;

  /**
   * <p>The creation date.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The last updated date.</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes the Network Access Scope content.</p>
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePath[];

  /**
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePath[];
}

export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * <p>The Network Access Scope.</p>
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope;

  /**
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

export interface CreateNetworkInsightsPathRequest {
  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source: string | undefined;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination: string | undefined;

  /**
   * <p>The protocol.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags to add to the path.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Describes a path.</p>
 */
export interface NetworkInsightsPath {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   */
  NetworkInsightsPathArn?: string;

  /**
   * <p>The time stamp when the path was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source?: string;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags associated with the path.</p>
   */
  Tags?: Tag[];
}

export interface CreateNetworkInsightsPathResult {
  /**
   * <p>Information about the path.</p>
   */
  NetworkInsightsPath?: NetworkInsightsPath;
}

export enum NetworkInterfaceCreationType {
  branch = "branch",
  efa = "efa",
  trunk = "trunk",
}

export interface CreateNetworkInterfaceRequest {
  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range.</p>
   *          <p>You can't specify a count of IPv6 addresses using this parameter if you've specified
   *             one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.</p>
   *          <p>If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set, you can
   *             override that setting by specifying 0 as the IPv6 address count.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses from the IPv6 CIDR block range of your subnet.</p>
   *          <p>You can't specify IPv6 addresses using this parameter if you've specified one of the
   *             following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *             <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses.</p>
   *          <p>You can't specify private IPv4 addresses if you've specified one of the following:
   *             a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *          <p>You can't specify a count of private IPv4 addresses if you've specified one of the following:
   *             specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The IPv4 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv4 prefixes if you've specified one of the following:
   *             a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface.</p>
   *          <p>You can't specify a count of IPv4 prefixes if you've specified one of the following:
   *             specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4
   *             addresses.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>The IPv6 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv6 prefixes if you've specified one of the following:
   *             a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface.</p>
   *          <p>You can't specify a count of IPv6 prefixes if you've specified one of the following:
   *             specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>The type of network interface. The default is <code>interface</code>.</p>
   *          <p>The only supported values are <code>efa</code> and <code>trunk</code>.</p>
   */
  InterfaceType?: NetworkInterfaceCreationType | string;

  /**
   * <p>The ID of the subnet to associate with the network interface.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to apply to the new network interface.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 */
export interface NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network
   *             interface.</p>
   */
  PublicIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The carrier IP address associated with the network interface.</p>
   *          <p>This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierIp?: string;
}

/**
 * <p>Describes the ENA Express configuration for UDP traffic on the network interface that's attached to
 * 			the instance.</p>
 */
export interface AttachmentEnaSrdUdpSpecification {
  /**
   * <p>Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting,
   * 			you must first enable ENA Express.</p>
   */
  EnaSrdUdpEnabled?: boolean;
}

/**
 * <p>Describes the ENA Express configuration for the network interface that's attached to the instance.</p>
 */
export interface AttachmentEnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface that's attached to the
   * 			instance.</p>
   */
  EnaSrdEnabled?: boolean;

  /**
   * <p>ENA Express configuration for UDP network traffic.</p>
   */
  EnaSrdUdpSpecification?: AttachmentEnaSrdUdpSpecification;
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>Configures ENA Express for the network interface that this action attaches to the instance.</p>
   */
  EnaSrdSpecification?: AttachmentEnaSrdSpecification;
}

/**
 * <p>Describes a security group.</p>
 */
export interface GroupIdentifier {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

export enum NetworkInterfaceType {
  api_gateway_managed = "api_gateway_managed",
  aws_codestar_connections_managed = "aws_codestar_connections_managed",
  branch = "branch",
  efa = "efa",
  gateway_load_balancer = "gateway_load_balancer",
  gateway_load_balancer_endpoint = "gateway_load_balancer_endpoint",
  global_accelerator_managed = "global_accelerator_managed",
  interface = "interface",
  iot_rules_managed = "iot_rules_managed",
  lambda = "lambda",
  load_balancer = "load_balancer",
  natGateway = "natGateway",
  network_load_balancer = "network_load_balancer",
  quicksight = "quicksight",
  transit_gateway = "transit_gateway",
  trunk = "trunk",
  vpc_endpoint = "vpc_endpoint",
}

/**
 * <p>Describes an IPv6 address associated with a network interface.</p>
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

/**
 * <p>Describes the IPv6 prefix.</p>
 */
export interface Ipv6PrefixSpecification {
  /**
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export enum NetworkInterfaceStatus {
  associated = "associated",
  attaching = "attaching",
  available = "available",
  detaching = "detaching",
  in_use = "in-use",
}

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: NetworkInterfaceType | string;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];

  /**
   * <p>The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   */
  RequesterId?: string;

  /**
   * <p>Indicates whether the network interface is being managed by Amazon Web Services.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether a network interface with an IPv6 address is unreachable from the
   *             public internet. If the value is <code>true</code>, inbound traffic from the internet
   *             is dropped and you cannot assign an elastic IP address to the network interface. The
   *             network interface is reachable from peered VPCs and resources connected through a
   *             transit gateway, including on-premises networks.</p>
   */
  DenyAllIgwTraffic?: boolean;

  /**
   * <p>Indicates whether this is an IPv6 only network interface.</p>
   */
  Ipv6Native?: boolean;

  /**
   * <p>The IPv6 globally unique address associated with the network interface.</p>
   */
  Ipv6Address?: string;
}

export interface CreateNetworkInterfaceResult {
  /**
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: NetworkInterface;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  ClientToken?: string;
}

export enum InterfacePermissionType {
  EIP_ASSOCIATE = "EIP-ASSOCIATE",
  INSTANCE_ATTACH = "INSTANCE-ATTACH",
}

/**
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service. Currently not supported.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission to grant.</p>
   */
  Permission: InterfacePermissionType | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum NetworkInterfacePermissionStateCode {
  granted = "granted",
  pending = "pending",
  revoked = "revoked",
  revoking = "revoking",
}

/**
 * <p>Describes the state of a network interface permission.</p>
 */
export interface NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   */
  State?: NetworkInterfacePermissionStateCode | string;

  /**
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

/**
 * <p>Describes a permission for a network interface.</p>
 */
export interface NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission.</p>
   */
  Permission?: InterfacePermissionType | string;

  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: NetworkInterfacePermissionState;
}

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: NetworkInterfacePermission;
}

export enum SpreadLevel {
  host = "host",
  rack = "rack",
}

export enum PlacementStrategy {
  cluster = "cluster",
  partition = "partition",
  spread = "spread",
}

export interface CreatePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The tags to apply to the new placement group.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Determines how placement groups spread instances. </p>
   *          <ul>
   *             <li>
   *                <p>Host – You can use <code>host</code> only with Outpost placement
   *                     groups.</p>
   *             </li>
   *             <li>
   *                <p>Rack – No usage restrictions.</p>
   *             </li>
   *          </ul>
   */
  SpreadLevel?: SpreadLevel | string;
}

export enum PlacementGroupState {
  available = "available",
  deleted = "deleted",
  deleting = "deleting",
  pending = "pending",
}

/**
 * <p>Describes a placement group.</p>
 */
export interface PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The state of the placement group.</p>
   */
  State?: PlacementGroupState | string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The ID of the placement group.</p>
   */
  GroupId?: string;

  /**
   * <p>Any tags applied to the placement group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the placement group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The spread level for the placement group. <i>Only</i> Outpost placement
   *             groups can be spread across hosts.</p>
   */
  SpreadLevel?: SpreadLevel | string;
}

export interface CreatePlacementGroupResult {
  /**
   * <p>Information about the placement group.</p>
   */
  PlacementGroup?: PlacementGroup;
}

export interface CreatePublicIpv4PoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface CreatePublicIpv4PoolResult {
  /**
   * <p>The ID of the public IPv4 pool.</p>
   */
  PoolId?: string;
}

export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * <p>The ID of the instance for which to replace the root volume.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the snapshot from which to restore the replacement root volume. The
   *       specified snapshot must be a snapshot that you previously created from the original
   *       root volume.</p>
   *          <p>If you want to restore the replacement root volume to the initial launch state,
   *       or if you want to restore the replacement root volume from an AMI, omit this
   *       parameter.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *       If you do not specify a client token, a randomly generated token is used for the request
   *       to ensure idempotency. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the root volume replacement task.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the AMI to use to restore the root volume. The specified AMI must have the
   *       same product code, billing information, architecture type, and virtualization type as
   *       that of the instance.</p>
   *          <p>If you want to restore the replacement volume from a specific snapshot, or if you want
   *       to restore it to its launch state, omit this parameter.</p>
   */
  ImageId?: string;

  /**
   * <p>Indicates whether to automatically delete the original root volume after the root volume
   *       replacement task completes. To delete the original root volume, specify <code>true</code>.
   *       If you choose to keep the original root volume after the replacement task completes, you must
   *       manually delete it when you no longer need it.</p>
   */
  DeleteReplacedRootVolume?: boolean;
}

export enum ReplaceRootVolumeTaskState {
  failed = "failed",
  failed_detached = "failed-detached",
  failing = "failing",
  in_progress = "in-progress",
  pending = "pending",
  succeeded = "succeeded",
}

/**
 * <p>Information about a root volume replacement task.</p>
 */
export interface ReplaceRootVolumeTask {
  /**
   * <p>The ID of the root volume replacement task.</p>
   */
  ReplaceRootVolumeTaskId?: string;

  /**
   * <p>The ID of the instance for which the root volume replacement task was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the task. The task can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - the replacement volume is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-progress</code> - the original volume is being detached and the
   *           replacement volume is being attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>succeeded</code> - the replacement volume has been successfully attached
   *           to the instance and the instance is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing</code> - the replacement task is in the process of failing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - the replacement task has failed but the original root
   *           volume is still attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing-detached</code> - the replacement task is in the process of failing.
   *           The instance might have no root volume attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-detached</code> - the replacement task has failed and the instance
   *           has no root volume attached.</p>
   *             </li>
   *          </ul>
   */
  TaskState?: ReplaceRootVolumeTaskState | string;

  /**
   * <p>The time the task was started.</p>
   */
  StartTime?: string;

  /**
   * <p>The time the task completed.</p>
   */
  CompleteTime?: string;

  /**
   * <p>The tags assigned to the task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the AMI used to create the replacement root volume.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the snapshot used to create the replacement root volume.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Indicates whether the original root volume is to be deleted after the root volume
   *       replacement task completes.</p>
   */
  DeleteReplacedRootVolume?: boolean;
}

export interface CreateReplaceRootVolumeTaskResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask;
}

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceScheduleSpecification {
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

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your
   * 				listings. This helps avoid duplicate listings. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string | undefined;
}

/**
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingResult {
  /**
   * <p>Information about the Standard Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export interface CreateRestoreImageTaskRequest {
  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>The name for the restored AMI. The name must be unique for AMIs in the Region for this
   *       account. If you do not provide a name, the new AMI gets the same name as the original
   *       AMI.</p>
   */
  Name?: string;

  /**
   * <p>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To
   *           tag the snapshots, the value for <code>ResourceType</code> must be <code>snapshot</code>. The
   *           same tag is applied to all of the snapshots that are created.</p>
   *             </li>
   *          </ul>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface CreateRestoreImageTaskResult {
  /**
   * <p>The AMI ID.</p>
   */
  ImageId?: string;
}

export interface CreateRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   *          <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table for the route.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export interface CreateRouteResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface CreateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the route table.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * <p>The ID of the association.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

/**
 * <p>Describes a virtual private gateway propagating route.</p>
 */
export interface PropagatingVgw {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId?: string;
}

export enum RouteOrigin {
  CreateRoute = "CreateRoute",
  CreateRouteTable = "CreateRouteTable",
  EnableVgwRoutePropagation = "EnableVgwRoutePropagation",
}

export enum RouteState {
  active = "active",
  blackhole = "blackhole",
}

/**
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of Amazon Web Services account that owns the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateRoute</code> - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: RouteOrigin | string;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: RouteState | string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets or a gateway.</p>
   */
  Associations?: RouteTableAssociation[];

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: PropagatingVgw[];

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Route[];

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the route table.</p>
   */
  OwnerId?: string;
}

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
export const CreateCoipCidrRequestFilterSensitiveLog = (obj: CreateCoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoipCidrFilterSensitiveLog = (obj: CoipCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoipCidrResultFilterSensitiveLog = (obj: CreateCoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoipPoolRequestFilterSensitiveLog = (obj: CreateCoipPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoipPoolFilterSensitiveLog = (obj: CoipPool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCoipPoolResultFilterSensitiveLog = (obj: CreateCoipPoolResult): any => ({
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

/**
 * @internal
 */
export const FleetLaunchTemplateSpecificationRequestFilterSensitiveLog = (
  obj: FleetLaunchTemplateSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BaselineEbsBandwidthMbpsRequestFilterSensitiveLog = (obj: BaselineEbsBandwidthMbpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryGiBPerVCpuRequestFilterSensitiveLog = (obj: MemoryGiBPerVCpuRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryMiBRequestFilterSensitiveLog = (obj: MemoryMiBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkBandwidthGbpsRequestFilterSensitiveLog = (obj: NetworkBandwidthGbpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceCountRequestFilterSensitiveLog = (obj: NetworkInterfaceCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TotalLocalStorageGBRequestFilterSensitiveLog = (obj: TotalLocalStorageGBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VCpuCountRangeRequestFilterSensitiveLog = (obj: VCpuCountRangeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRequirementsRequestFilterSensitiveLog = (obj: InstanceRequirementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementFilterSensitiveLog = (obj: Placement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetLaunchTemplateOverridesRequestFilterSensitiveLog = (
  obj: FleetLaunchTemplateOverridesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetLaunchTemplateConfigRequestFilterSensitiveLog = (obj: FleetLaunchTemplateConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationOptionsRequestFilterSensitiveLog = (obj: CapacityReservationOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OnDemandOptionsRequestFilterSensitiveLog = (obj: OnDemandOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSpotCapacityRebalanceRequestFilterSensitiveLog = (obj: FleetSpotCapacityRebalanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetSpotMaintenanceStrategiesRequestFilterSensitiveLog = (
  obj: FleetSpotMaintenanceStrategiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotOptionsRequestFilterSensitiveLog = (obj: SpotOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetCapacitySpecificationRequestFilterSensitiveLog = (obj: TargetCapacitySpecificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetRequestFilterSensitiveLog = (obj: CreateFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetLaunchTemplateSpecificationFilterSensitiveLog = (obj: FleetLaunchTemplateSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BaselineEbsBandwidthMbpsFilterSensitiveLog = (obj: BaselineEbsBandwidthMbps): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryGiBPerVCpuFilterSensitiveLog = (obj: MemoryGiBPerVCpu): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryMiBFilterSensitiveLog = (obj: MemoryMiB): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkBandwidthGbpsFilterSensitiveLog = (obj: NetworkBandwidthGbps): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceCountFilterSensitiveLog = (obj: NetworkInterfaceCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TotalLocalStorageGBFilterSensitiveLog = (obj: TotalLocalStorageGB): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VCpuCountRangeFilterSensitiveLog = (obj: VCpuCountRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRequirementsFilterSensitiveLog = (obj: InstanceRequirements): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementResponseFilterSensitiveLog = (obj: PlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetLaunchTemplateOverridesFilterSensitiveLog = (obj: FleetLaunchTemplateOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateAndOverridesResponseFilterSensitiveLog = (obj: LaunchTemplateAndOverridesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetErrorFilterSensitiveLog = (obj: CreateFleetError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetInstanceFilterSensitiveLog = (obj: CreateFleetInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetResultFilterSensitiveLog = (obj: CreateFleetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationOptionsRequestFilterSensitiveLog = (obj: DestinationOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowLogsRequestFilterSensitiveLog = (obj: CreateFlowLogsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowLogsResultFilterSensitiveLog = (obj: CreateFlowLogsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageLocationFilterSensitiveLog = (obj: StorageLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFpgaImageRequestFilterSensitiveLog = (obj: CreateFpgaImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFpgaImageResultFilterSensitiveLog = (obj: CreateFpgaImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsBlockDeviceFilterSensitiveLog = (obj: EbsBlockDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlockDeviceMappingFilterSensitiveLog = (obj: BlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageRequestFilterSensitiveLog = (obj: CreateImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageResultFilterSensitiveLog = (obj: CreateImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowTimeRangeRequestFilterSensitiveLog = (
  obj: InstanceEventWindowTimeRangeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceEventWindowRequestFilterSensitiveLog = (obj: CreateInstanceEventWindowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceEventWindowResultFilterSensitiveLog = (obj: CreateInstanceEventWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportToS3TaskSpecificationFilterSensitiveLog = (obj: ExportToS3TaskSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceExportTaskRequestFilterSensitiveLog = (obj: CreateInstanceExportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportToS3TaskFilterSensitiveLog = (obj: ExportToS3Task): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceExportDetailsFilterSensitiveLog = (obj: InstanceExportDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskFilterSensitiveLog = (obj: ExportTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceExportTaskResultFilterSensitiveLog = (obj: CreateInstanceExportTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInternetGatewayRequestFilterSensitiveLog = (obj: CreateInternetGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InternetGatewayFilterSensitiveLog = (obj: InternetGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInternetGatewayResultFilterSensitiveLog = (obj: CreateInternetGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamRequestFilterSensitiveLog = (obj: CreateIpamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamOperatingRegionFilterSensitiveLog = (obj: IpamOperatingRegion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamFilterSensitiveLog = (obj: Ipam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamResultFilterSensitiveLog = (obj: CreateIpamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestIpamResourceTagFilterSensitiveLog = (obj: RequestIpamResourceTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamPoolRequestFilterSensitiveLog = (obj: CreateIpamPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamResourceTagFilterSensitiveLog = (obj: IpamResourceTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamPoolFilterSensitiveLog = (obj: IpamPool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamPoolResultFilterSensitiveLog = (obj: CreateIpamPoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamResourceDiscoveryRequestFilterSensitiveLog = (obj: CreateIpamResourceDiscoveryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamResourceDiscoveryFilterSensitiveLog = (obj: IpamResourceDiscovery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamResourceDiscoveryResultFilterSensitiveLog = (obj: CreateIpamResourceDiscoveryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamScopeRequestFilterSensitiveLog = (obj: CreateIpamScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamScopeFilterSensitiveLog = (obj: IpamScope): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpamScopeResultFilterSensitiveLog = (obj: CreateIpamScopeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeyPairRequestFilterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyPairFilterSensitiveLog = (obj: KeyPair): any => ({
  ...obj,
  ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateEbsBlockDeviceRequestFilterSensitiveLog = (
  obj: LaunchTemplateEbsBlockDeviceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateBlockDeviceMappingRequestFilterSensitiveLog = (
  obj: LaunchTemplateBlockDeviceMappingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationTargetFilterSensitiveLog = (obj: CapacityReservationTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateCapacityReservationSpecificationRequestFilterSensitiveLog = (
  obj: LaunchTemplateCapacityReservationSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateCpuOptionsRequestFilterSensitiveLog = (obj: LaunchTemplateCpuOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreditSpecificationRequestFilterSensitiveLog = (obj: CreditSpecificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticGpuSpecificationFilterSensitiveLog = (obj: ElasticGpuSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateElasticInferenceAcceleratorFilterSensitiveLog = (
  obj: LaunchTemplateElasticInferenceAccelerator
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateEnclaveOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateEnclaveOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateHibernationOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateHibernationOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateIamInstanceProfileSpecificationRequestFilterSensitiveLog = (
  obj: LaunchTemplateIamInstanceProfileSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpotMarketOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateSpotMarketOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMarketOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMarketOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateLicenseConfigurationRequestFilterSensitiveLog = (
  obj: LaunchTemplateLicenseConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMaintenanceOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMaintenanceOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMetadataOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMetadataOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatesMonitoringRequestFilterSensitiveLog = (obj: LaunchTemplatesMonitoringRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv4PrefixSpecificationRequestFilterSensitiveLog = (obj: Ipv4PrefixSpecificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIpv6AddressRequestFilterSensitiveLog = (obj: InstanceIpv6AddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6PrefixSpecificationRequestFilterSensitiveLog = (obj: Ipv6PrefixSpecificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateIpAddressSpecificationFilterSensitiveLog = (obj: PrivateIpAddressSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceNetworkInterfaceSpecificationRequestFilterSensitiveLog = (
  obj: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatePlacementRequestFilterSensitiveLog = (obj: LaunchTemplatePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatePrivateDnsNameOptionsRequestFilterSensitiveLog = (
  obj: LaunchTemplatePrivateDnsNameOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateTagSpecificationRequestFilterSensitiveLog = (
  obj: LaunchTemplateTagSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestLaunchTemplateDataFilterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchTemplateRequestFilterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && { LaunchTemplateData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateFilterSensitiveLog = (obj: LaunchTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationErrorFilterSensitiveLog = (obj: ValidationError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationWarningFilterSensitiveLog = (obj: ValidationWarning): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchTemplateResultFilterSensitiveLog = (obj: CreateLaunchTemplateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionRequestFilterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && { LaunchTemplateData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateEbsBlockDeviceFilterSensitiveLog = (obj: LaunchTemplateEbsBlockDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateBlockDeviceMappingFilterSensitiveLog = (obj: LaunchTemplateBlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationTargetResponseFilterSensitiveLog = (obj: CapacityReservationTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateCapacityReservationSpecificationResponseFilterSensitiveLog = (
  obj: LaunchTemplateCapacityReservationSpecificationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateCpuOptionsFilterSensitiveLog = (obj: LaunchTemplateCpuOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreditSpecificationFilterSensitiveLog = (obj: CreditSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticGpuSpecificationResponseFilterSensitiveLog = (obj: ElasticGpuSpecificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateElasticInferenceAcceleratorResponseFilterSensitiveLog = (
  obj: LaunchTemplateElasticInferenceAcceleratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateEnclaveOptionsFilterSensitiveLog = (obj: LaunchTemplateEnclaveOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateHibernationOptionsFilterSensitiveLog = (obj: LaunchTemplateHibernationOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateIamInstanceProfileSpecificationFilterSensitiveLog = (
  obj: LaunchTemplateIamInstanceProfileSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpotMarketOptionsFilterSensitiveLog = (obj: LaunchTemplateSpotMarketOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMarketOptionsFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMarketOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateLicenseConfigurationFilterSensitiveLog = (obj: LaunchTemplateLicenseConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMaintenanceOptionsFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMaintenanceOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceMetadataOptionsFilterSensitiveLog = (
  obj: LaunchTemplateInstanceMetadataOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatesMonitoringFilterSensitiveLog = (obj: LaunchTemplatesMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv4PrefixSpecificationResponseFilterSensitiveLog = (obj: Ipv4PrefixSpecificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIpv6AddressFilterSensitiveLog = (obj: InstanceIpv6Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6PrefixSpecificationResponseFilterSensitiveLog = (obj: Ipv6PrefixSpecificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateInstanceNetworkInterfaceSpecificationFilterSensitiveLog = (
  obj: LaunchTemplateInstanceNetworkInterfaceSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatePlacementFilterSensitiveLog = (obj: LaunchTemplatePlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplatePrivateDnsNameOptionsFilterSensitiveLog = (
  obj: LaunchTemplatePrivateDnsNameOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateTagSpecificationFilterSensitiveLog = (obj: LaunchTemplateTagSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseLaunchTemplateDataFilterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateVersionFilterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionResultFilterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteRequestFilterSensitiveLog = (obj: CreateLocalGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalGatewayRouteFilterSensitiveLog = (obj: LocalGatewayRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteResultFilterSensitiveLog = (obj: CreateLocalGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableRequestFilterSensitiveLog = (
  obj: CreateLocalGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StateReasonFilterSensitiveLog = (obj: StateReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalGatewayRouteTableFilterSensitiveLog = (obj: LocalGatewayRouteTable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableResultFilterSensitiveLog = (obj: CreateLocalGatewayRouteTableResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequestFilterSensitiveLog = (
  obj: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalGatewayRouteTableVirtualInterfaceGroupAssociationFilterSensitiveLog = (
  obj: LocalGatewayRouteTableVirtualInterfaceGroupAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultFilterSensitiveLog = (
  obj: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableVpcAssociationRequestFilterSensitiveLog = (
  obj: CreateLocalGatewayRouteTableVpcAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocalGatewayRouteTableVpcAssociationFilterSensitiveLog = (
  obj: LocalGatewayRouteTableVpcAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLocalGatewayRouteTableVpcAssociationResultFilterSensitiveLog = (
  obj: CreateLocalGatewayRouteTableVpcAssociationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateManagedPrefixListRequestFilterSensitiveLog = (obj: CreateManagedPrefixListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedPrefixListFilterSensitiveLog = (obj: ManagedPrefixList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateManagedPrefixListResultFilterSensitiveLog = (obj: CreateManagedPrefixListResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNatGatewayRequestFilterSensitiveLog = (obj: CreateNatGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NatGatewayAddressFilterSensitiveLog = (obj: NatGatewayAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedBandwidthFilterSensitiveLog = (obj: ProvisionedBandwidth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NatGatewayFilterSensitiveLog = (obj: NatGateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNatGatewayResultFilterSensitiveLog = (obj: CreateNatGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkAclRequestFilterSensitiveLog = (obj: CreateNetworkAclRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkAclAssociationFilterSensitiveLog = (obj: NetworkAclAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IcmpTypeCodeFilterSensitiveLog = (obj: IcmpTypeCode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkAclEntryFilterSensitiveLog = (obj: NetworkAclEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkAclFilterSensitiveLog = (obj: NetworkAcl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkAclResultFilterSensitiveLog = (obj: CreateNetworkAclResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkAclEntryRequestFilterSensitiveLog = (obj: CreateNetworkAclEntryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInsightsAccessScopeRequestFilterSensitiveLog = (
  obj: CreateNetworkInsightsAccessScopeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInsightsAccessScopeFilterSensitiveLog = (obj: NetworkInsightsAccessScope): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInsightsAccessScopeContentFilterSensitiveLog = (obj: NetworkInsightsAccessScopeContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInsightsAccessScopeResultFilterSensitiveLog = (
  obj: CreateNetworkInsightsAccessScopeResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInsightsPathRequestFilterSensitiveLog = (obj: CreateNetworkInsightsPathRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInsightsPathFilterSensitiveLog = (obj: NetworkInsightsPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInsightsPathResultFilterSensitiveLog = (obj: CreateNetworkInsightsPathResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInterfaceRequestFilterSensitiveLog = (obj: CreateNetworkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceAssociationFilterSensitiveLog = (obj: NetworkInterfaceAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentEnaSrdUdpSpecificationFilterSensitiveLog = (obj: AttachmentEnaSrdUdpSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentEnaSrdSpecificationFilterSensitiveLog = (obj: AttachmentEnaSrdSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceAttachmentFilterSensitiveLog = (obj: NetworkInterfaceAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupIdentifierFilterSensitiveLog = (obj: GroupIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceIpv6AddressFilterSensitiveLog = (obj: NetworkInterfaceIpv6Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6PrefixSpecificationFilterSensitiveLog = (obj: Ipv6PrefixSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfacePrivateIpAddressFilterSensitiveLog = (obj: NetworkInterfacePrivateIpAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInterfaceResultFilterSensitiveLog = (obj: CreateNetworkInterfaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInterfacePermissionRequestFilterSensitiveLog = (
  obj: CreateNetworkInterfacePermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfacePermissionStateFilterSensitiveLog = (obj: NetworkInterfacePermissionState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfacePermissionFilterSensitiveLog = (obj: NetworkInterfacePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInterfacePermissionResultFilterSensitiveLog = (
  obj: CreateNetworkInterfacePermissionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlacementGroupRequestFilterSensitiveLog = (obj: CreatePlacementGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementGroupFilterSensitiveLog = (obj: PlacementGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlacementGroupResultFilterSensitiveLog = (obj: CreatePlacementGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublicIpv4PoolRequestFilterSensitiveLog = (obj: CreatePublicIpv4PoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePublicIpv4PoolResultFilterSensitiveLog = (obj: CreatePublicIpv4PoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplaceRootVolumeTaskRequestFilterSensitiveLog = (obj: CreateReplaceRootVolumeTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceRootVolumeTaskFilterSensitiveLog = (obj: ReplaceRootVolumeTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplaceRootVolumeTaskResultFilterSensitiveLog = (obj: CreateReplaceRootVolumeTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PriceScheduleSpecificationFilterSensitiveLog = (obj: PriceScheduleSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReservedInstancesListingRequestFilterSensitiveLog = (
  obj: CreateReservedInstancesListingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReservedInstancesListingResultFilterSensitiveLog = (
  obj: CreateReservedInstancesListingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRestoreImageTaskRequestFilterSensitiveLog = (obj: CreateRestoreImageTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRestoreImageTaskResultFilterSensitiveLog = (obj: CreateRestoreImageTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRouteRequestFilterSensitiveLog = (obj: CreateRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRouteResultFilterSensitiveLog = (obj: CreateRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRouteTableRequestFilterSensitiveLog = (obj: CreateRouteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteTableAssociationFilterSensitiveLog = (obj: RouteTableAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropagatingVgwFilterSensitiveLog = (obj: PropagatingVgw): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteFilterSensitiveLog = (obj: Route): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteTableFilterSensitiveLog = (obj: RouteTable): any => ({
  ...obj,
});
