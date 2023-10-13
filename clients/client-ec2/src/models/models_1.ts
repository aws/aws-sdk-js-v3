// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

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
  DirectoryServiceAuthenticationRequest,
  FederatedAuthenticationRequest,
  InstanceEventWindow,
  Ipv4PrefixSpecification,
  NatGatewayAddress,
  PortRange,
  Protocol,
  ResourceType,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  UnsuccessfulItem,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  WeekDay,
} from "./models_0";

/**
 * @public
 * <p>Information about the client certificate to be used for authentication.</p>
 */
export interface CertificateAuthenticationRequest {
  /**
   * @public
   * <p>The ARN of the client certificate. The certificate must be signed by a certificate
   * 			authority (CA) and it must be provisioned in Certificate Manager (ACM).</p>
   */
  ClientRootCertificateChainArn?: string;
}

/**
 * @public
 * @enum
 */
export const ClientVpnAuthenticationType = {
  certificate_authentication: "certificate-authentication",
  directory_service_authentication: "directory-service-authentication",
  federated_authentication: "federated-authentication",
} as const;

/**
 * @public
 */
export type ClientVpnAuthenticationType =
  (typeof ClientVpnAuthenticationType)[keyof typeof ClientVpnAuthenticationType];

/**
 * @public
 * <p>Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * @public
   * <p>The type of client authentication to be used.</p>
   */
  Type?: ClientVpnAuthenticationType;

  /**
   * @public
   * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthenticationRequest;

  /**
   * @public
   * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
   */
  MutualAuthentication?: CertificateAuthenticationRequest;

  /**
   * @public
   * <p>Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if <b>Type</b> is <code>federated-authentication</code>.</p>
   */
  FederatedAuthentication?: FederatedAuthenticationRequest;
}

/**
 * @public
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectOptions {
  /**
   * @public
   * <p>Indicates whether client connect options are enabled. The default is <code>false</code> (not enabled).</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   */
  LambdaFunctionArn?: string;
}

/**
 * @public
 * <p>Options for enabling a customizable text banner that will be displayed on
 * 			Amazon Web Services provided clients when a VPN session is established.</p>
 */
export interface ClientLoginBannerOptions {
  /**
   * @public
   * <p>Enable or disable a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   *          <p>Valid values: <code>true | false</code>
   *          </p>
   *          <p>Default value: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Customizable text that will be displayed in a banner on Amazon Web Services provided
   * 			clients when a VPN session is established. UTF-8 encoded characters only. Maximum of
   * 			1400 characters.</p>
   */
  BannerText?: string;
}

/**
 * @public
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 */
export interface ConnectionLogOptions {
  /**
   * @public
   * <p>Indicates whether connection logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The name of the CloudWatch Logs log group. Required if connection logging is enabled.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * @public
   * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
   */
  CloudwatchLogStream?: string;
}

/**
 * @public
 * @enum
 */
export const SelfServicePortal = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type SelfServicePortal = (typeof SelfServicePortal)[keyof typeof SelfServicePortal];

/**
 * @public
 * @enum
 */
export const TransportProtocol = {
  tcp: "tcp",
  udp: "udp",
} as const;

/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

/**
 * @public
 */
export interface CreateClientVpnEndpointRequest {
  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.</p>
   */
  ClientCidrBlock: string | undefined;

  /**
   * @public
   * <p>The ARN of the server certificate. For more information, see
   * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
   */
  ServerCertificateArn: string | undefined;

  /**
   * @public
   * <p>Information about the authentication method to be used to authenticate clients.</p>
   */
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;

  /**
   * @public
   * <p>Information about the client connection logging options.</p>
   *          <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   *          <ul>
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
   * @public
   * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
   * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
   */
  DnsServers?: string[];

  /**
   * @public
   * <p>The transport protocol to be used by the VPN session.</p>
   *          <p>Default value: <code>udp</code>
   *          </p>
   */
  TransportProtocol?: TransportProtocol;

  /**
   * @public
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * @public
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether split-tunnel is enabled on the Client VPN endpoint.</p>
   *          <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   * 			<i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to apply to the Client VPN endpoint during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   *          <p>Default Value: <code>enabled</code>
   *          </p>
   */
  SelfServicePortal?: SelfServicePortal;

  /**
   * @public
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;

  /**
   * @public
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * @public
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
}

/**
 * @public
 * @enum
 */
export const ClientVpnEndpointStatusCode = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending_associate: "pending-associate",
} as const;

/**
 * @public
 */
export type ClientVpnEndpointStatusCode =
  (typeof ClientVpnEndpointStatusCode)[keyof typeof ClientVpnEndpointStatusCode];

/**
 * @public
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpointStatus {
  /**
   * @public
   * <p>The state of the Client VPN endpoint. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
   * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
   * 					associated. The Client VPN endpoint can accept connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
   * 					connections.</p>
   *             </li>
   *          </ul>
   */
  Code?: ClientVpnEndpointStatusCode;

  /**
   * @public
   * <p>A message about the status of the Client VPN endpoint.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface CreateClientVpnEndpointResult {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * @public
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * @public
   * <p>The DNS name to be used by clients when establishing their VPN session.</p>
   */
  DnsName?: string;
}

/**
 * @public
 */
export interface CreateClientVpnRouteRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
   *          <ul>
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
   * @public
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
   * 			an existing target network of the Client VPN endpoint.</p>
   *          <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
   */
  TargetVpcSubnetId: string | undefined;

  /**
   * @public
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const ClientVpnRouteStatusCode = {
  active: "active",
  creating: "creating",
  deleting: "deleting",
  failed: "failed",
} as const;

/**
 * @public
 */
export type ClientVpnRouteStatusCode = (typeof ClientVpnRouteStatusCode)[keyof typeof ClientVpnRouteStatusCode];

/**
 * @public
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface ClientVpnRouteStatus {
  /**
   * @public
   * <p>The state of the Client VPN endpoint route.</p>
   */
  Code?: ClientVpnRouteStatusCode;

  /**
   * @public
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface CreateClientVpnRouteResult {
  /**
   * @public
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

/**
 * @public
 */
export interface CreateCoipCidrRequest {
  /**
   * @public
   * <p>
   *       A customer-owned IP address range to create.
   *       </p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>
   *          The ID of the address pool.
   *       </p>
   */
  CoipPoolId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>
 *       Information about a customer-owned IP address range.
 *       </p>
 */
export interface CoipCidr {
  /**
   * @public
   * <p>
   *       An address range in a customer-owned IP address space.
   *       </p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>
   *          The ID of the address pool.
   *       </p>
   */
  CoipPoolId?: string;

  /**
   * @public
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId?: string;
}

/**
 * @public
 */
export interface CreateCoipCidrResult {
  /**
   * @public
   * <p>
   *          Information about a range of customer-owned IP addresses.
   *       </p>
   */
  CoipCidr?: CoipCidr;
}

/**
 * @public
 */
export interface CreateCoipPoolRequest {
  /**
   * @public
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>
   *       The tags to assign to the CoIP address pool.
   *       </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a customer-owned address pool.</p>
 */
export interface CoipPool {
  /**
   * @public
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The address ranges of the address pool.</p>
   */
  PoolCidrs?: string[];

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ARN of the address pool.</p>
   */
  PoolArn?: string;
}

/**
 * @public
 */
export interface CreateCoipPoolResult {
  /**
   * @public
   * <p>Information about the CoIP address pool.</p>
   */
  CoipPool?: CoipPool;
}

/**
 * @public
 * @enum
 */
export const GatewayType = {
  ipsec_1: "ipsec.1",
} as const;

/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
  /**
   * @public
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
   *          <p>Default: 65000</p>
   */
  BgpAsn?: number;

  /**
   * @public
   * <p>
   *             <i>This member has been deprecated.</i> The Internet-routable IP address for the customer gateway's outside interface. The
   *             address must be static.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The type of VPN connection that this customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type: GatewayType | undefined;

  /**
   * @public
   * <p>The tags to apply to the customer gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A name for the customer gateway device.</p>
   *          <p>Length Constraints: Up to 255 characters.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>
   *             IPv4 address for the customer gateway device's outside interface. The address must be static.
   *         </p>
   */
  IpAddress?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a customer gateway.</p>
 */
export interface CustomerGateway {
  /**
   * @public
   * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number
   *             (ASN).</p>
   */
  BgpAsn?: string;

  /**
   * @public
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * @public
   * <p>The IP address of the customer gateway device's outside interface.</p>
   */
  IpAddress?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The current state of the customer gateway (<code>pending | available | deleting |
   *                 deleted</code>).</p>
   */
  State?: string;

  /**
   * @public
   * <p>The type of VPN connection the customer gateway supports
   *             (<code>ipsec.1</code>).</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The name of customer gateway device.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayResult {
  /**
   * @public
   * <p>Information about the customer gateway.</p>
   */
  CustomerGateway?: CustomerGateway;
}

/**
 * @public
 */
export interface CreateDefaultSubnetRequest {
  /**
   * @public
   * <p>The Availability Zone in which to create the default subnet.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether to create an IPv6 only subnet. If you already have a default subnet
   *             for this Availability Zone, you must delete it before you can create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

/**
 * @public
 * @enum
 */
export const HostnameType = {
  ip_name: "ip-name",
  resource_name: "resource-name",
} as const;

/**
 * @public
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

/**
 * @public
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsOnLaunch {
  /**
   * @public
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostname with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * @public
 * @enum
 */
export const SubnetState = {
  available: "available",
  pending: "pending",
} as const;

/**
 * @public
 */
export type SubnetState = (typeof SubnetState)[keyof typeof SubnetState];

/**
 * @public
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * @public
   * <p>The Availability Zone of the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
   * 			stopped instances are considered unavailable.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * @public
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * @public
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1).
   *         </p>
   */
  EnableLniAtDeviceIndex?: number;

  /**
   * @public
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: boolean;

  /**
   * @public
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   */
  MapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * @public
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * @public
   * <p>The current state of the subnet.</p>
   */
  State?: SubnetState;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the VPC the subnet is in.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Indicates whether a network interface created in this subnet (including a network
   *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * @public
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  /**
   * @public
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   */
  SubnetArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: boolean;

  /**
   * @public
   * <p>Indicates whether this is an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;

  /**
   * @public
   * <p>The type of hostnames to assign to instances in the subnet at launch. An instance hostname
   *             is based on the IPv4 address or ID of the instance.</p>
   */
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch;
}

/**
 * @public
 */
export interface CreateDefaultSubnetResult {
  /**
   * @public
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

/**
 * @public
 */
export interface CreateDefaultVpcRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const Tenancy = {
  dedicated: "dedicated",
  default: "default",
  host: "host",
} as const;

/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * @public
 * @enum
 */
export const VpcState = {
  available: "available",
  pending: "pending",
} as const;

/**
 * @public
 */
export type VpcState = (typeof VpcState)[keyof typeof VpcState];

/**
 * @public
 * <p>Describes a VPC.</p>
 */
export interface Vpc {
  /**
   * @public
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
   */
  DhcpOptionsId?: string;

  /**
   * @public
   * <p>The current state of the VPC.</p>
   */
  State?: VpcState;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   */
  InstanceTenancy?: Tenancy;

  /**
   * @public
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  /**
   * @public
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  /**
   * @public
   * <p>Indicates whether the VPC is the default VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDefaultVpcResult {
  /**
   * @public
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

/**
 * @public
 * <p>Describes a DHCP configuration option.</p>
 */
export interface NewDhcpConfiguration {
  /**
   * @public
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The values for the DHCP option.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface CreateDhcpOptionsRequest {
  /**
   * @public
   * <p>A DHCP configuration option.</p>
   */
  DhcpConfigurations: NewDhcpConfiguration[] | undefined;

  /**
   * @public
   * <p>The tags to assign to the DHCP option.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a value for a resource attribute that is a String.</p>
 */
export interface AttributeValue {
  /**
   * @public
   * <p>The attribute value. The value is case-sensitive.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Describes a DHCP configuration option.</p>
 */
export interface DhcpConfiguration {
  /**
   * @public
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The values for the DHCP option.</p>
   */
  Values?: AttributeValue[];
}

/**
 * @public
 * <p>The set of DHCP options.</p>
 */
export interface DhcpOptions {
  /**
   * @public
   * <p>The DHCP options in the set.</p>
   */
  DhcpConfigurations?: DhcpConfiguration[];

  /**
   * @public
   * <p>The ID of the set of DHCP options.</p>
   */
  DhcpOptionsId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDhcpOptionsResult {
  /**
   * @public
   * <p>A set of DHCP options.</p>
   */
  DhcpOptions?: DhcpOptions;
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the egress-only internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.</p>
 */
export interface InternetGatewayAttachment {
  /**
   * @public
   * <p>The current state of the attachment. For an internet gateway, the state is
   * 				<code>available</code> when attached to a VPC; otherwise, this value is not
   * 			returned.</p>
   */
  State?: AttachmentStatus;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface EgressOnlyInternetGateway {
  /**
   * @public
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * @public
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * @public
   * <p>The tags assigned to the egress-only internet gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Information about the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGateway?: EgressOnlyInternetGateway;
}

/**
 * @public
 * @enum
 */
export const FleetExcessCapacityTerminationPolicy = {
  NO_TERMINATION: "no-termination",
  TERMINATION: "termination",
} as const;

/**
 * @public
 */
export type FleetExcessCapacityTerminationPolicy =
  (typeof FleetExcessCapacityTerminationPolicy)[keyof typeof FleetExcessCapacityTerminationPolicy];

/**
 * @public
 * <p>The Amazon EC2 launch template that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch
 *             an instance from a launch template</a> in the
 *          <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * @public
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const BareMetal = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];

/**
 * @public
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * @public
   * <p>The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit
   *          this parameter.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit
   *          this parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * @enum
 */
export const BurstablePerformance = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type BurstablePerformance = (typeof BurstablePerformance)[keyof typeof BurstablePerformance];

/**
 * @public
 * @enum
 */
export const CpuManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  INTEL: "intel",
} as const;

/**
 * @public
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];

/**
 * @public
 * @enum
 */
export const InstanceGeneration = {
  CURRENT: "current",
  PREVIOUS: "previous",
} as const;

/**
 * @public
 */
export type InstanceGeneration = (typeof InstanceGeneration)[keyof typeof InstanceGeneration];

/**
 * @public
 * @enum
 */
export const LocalStorage = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];

/**
 * @public
 * @enum
 */
export const LocalStorageType = {
  HDD: "hdd",
  SSD: "ssd",
} as const;

/**
 * @public
 */
export type LocalStorageType = (typeof LocalStorageType)[keyof typeof LocalStorageType];

/**
 * @public
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * @public
   * <p>The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 */
export interface MemoryMiBRequest {
  /**
   * @public
   * <p>The minimum amount of memory, in MiB. To specify no minimum limit, specify
   *          <code>0</code>.</p>
   */
  Min: number | undefined;

  /**
   * @public
   * <p>The maximum amount of memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * @public
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
   * @public
   * <p>The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum number of network interfaces.</p>
 */
export interface NetworkInterfaceCountRequest {
  /**
   * @public
   * <p>The minimum number of network interfaces. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum number of network interfaces. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 */
export interface TotalLocalStorageGBRequest {
  /**
   * @public
   * <p>The minimum amount of total local storage, in GB. To specify no minimum limit, omit this
   *          parameter.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of total local storage, in GB. To specify no maximum limit, omit this
   *          parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum number of vCPUs.</p>
 */
export interface VCpuCountRangeRequest {
  /**
   * @public
   * <p>The minimum number of vCPUs. To specify no minimum limit, specify <code>0</code>.</p>
   */
  Min: number | undefined;

  /**
   * @public
   * <p>The maximum number of vCPUs. To specify no maximum limit, omit this parameter.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
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
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
 *                <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify
 *                <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *                placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface InstanceRequirementsRequest {
  /**
   * @public
   * <p>The minimum and maximum number of vCPUs.</p>
   */
  VCpuCount: VCpuCountRangeRequest | undefined;

  /**
   * @public
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * @public
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
  CpuManufacturers?: CpuManufacturer[];

  /**
   * @public
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;

  /**
   * @public
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
   * @public
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   */
  InstanceGenerations?: InstanceGeneration[];

  /**
   * @public
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
   * @public
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
   * @public
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
  BareMetal?: BareMetal;

  /**
   * @public
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
  BurstablePerformance?: BurstablePerformance;

  /**
   * @public
   * <p>Indicates whether instance types must support hibernation for On-Demand Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * @public
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;

  /**
   * @public
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
  LocalStorage?: LocalStorage;

  /**
   * @public
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
  LocalStorageTypes?: LocalStorageType[];

  /**
   * @public
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;

  /**
   * @public
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;

  /**
   * @public
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
  AcceleratorTypes?: AcceleratorType[];

  /**
   * @public
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCountRequest;

  /**
   * @public
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
  AcceleratorManufacturers?: AcceleratorManufacturer[];

  /**
   * @public
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
  AcceleratorNames?: AcceleratorName[];

  /**
   * @public
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;

  /**
   * @public
   * <p>The minimum and maximum amount of baseline network bandwidth, in gigabits per second
   *           (Gbps). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html">Amazon EC2 instance network bandwidth</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;

  /**
   * @public
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
 * @public
 * <p>Describes the placement of an instance.</p>
 */
export interface Placement {
  /**
   * @public
   * <p>The Availability Zone of the instance.</p>
   *          <p>If not specified, an Availability Zone will be automatically chosen for you based on
   *             the load balancing criteria for the Region.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   */
  Affinity?: string;

  /**
   * @public
   * <p>The name of the placement group that the instance is in. If you specify
   *                 <code>GroupName</code>, you can't specify <code>GroupId</code>.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The number of the partition that the instance is in. Valid only if the placement group
   *             strategy is set to <code>partition</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  PartitionNumber?: number;

  /**
   * @public
   * <p>The ID of the Dedicated Host on which the instance resides.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a>.</p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>. The
   *                 <code>host</code> tenancy is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> or
   *             for T3 instances that are configured for the <code>unlimited</code> CPU credit
   *             option.</p>
   */
  Tenancy?: Tenancy;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * @public
   * <p>The ARN of the host resource group in which to launch the instances.</p>
   *          <p>If you specify this parameter, either omit the <b>Tenancy</b> parameter or set it to <code>host</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * @public
   * <p>The ID of the placement group that the instance is in. If you specify
   *                 <code>GroupId</code>, you can't specify <code>GroupName</code>.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * @public
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * @public
   * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * @public
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
   * @public
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirementsRequest;

  /**
   * @public
   * <p>The ID of the AMI. An AMI is required to launch an instance. This parameter is only
   *          available for fleets of type <code>instant</code>. For fleets of type <code>maintain</code>
   *          and <code>request</code>, you must specify the AMI ID in the launch template.</p>
   */
  ImageId?: string;
}

/**
 * @public
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * @public
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *          template name in the request. </p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;

  /**
   * @public
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   *          <p>For fleets of type <code>request</code> and <code>maintain</code>, a maximum of 300
   *          items is allowed across all launch templates.</p>
   */
  Overrides?: FleetLaunchTemplateOverridesRequest[];
}

/**
 * @public
 * @enum
 */
export const FleetOnDemandAllocationStrategy = {
  LOWEST_PRICE: "lowest-price",
  PRIORITIZED: "prioritized",
} as const;

/**
 * @public
 */
export type FleetOnDemandAllocationStrategy =
  (typeof FleetOnDemandAllocationStrategy)[keyof typeof FleetOnDemandAllocationStrategy];

/**
 * @public
 * @enum
 */
export const FleetCapacityReservationUsageStrategy = {
  USE_CAPACITY_RESERVATIONS_FIRST: "use-capacity-reservations-first",
} as const;

/**
 * @public
 */
export type FleetCapacityReservationUsageStrategy =
  (typeof FleetCapacityReservationUsageStrategy)[keyof typeof FleetCapacityReservationUsageStrategy];

/**
 * @public
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
   * @public
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
  UsageStrategy?: FleetCapacityReservationUsageStrategy;
}

/**
 * @public
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptionsRequest {
  /**
   * @public
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
  AllocationStrategy?: FleetOnDemandAllocationStrategy;

  /**
   * @public
   * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  CapacityReservationOptions?: CapacityReservationOptionsRequest;

  /**
   * @public
   * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * @public
   * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>MaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the <i>EC2 User
   *                   Guide</i>.</p>
   *          </note>
   */
  MaxTotalPrice?: string;
}

/**
 * @public
 * @enum
 */
export const SpotAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED: "capacity-optimized-prioritized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;

/**
 * @public
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

/**
 * @public
 * @enum
 */
export const SpotInstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type SpotInstanceInterruptionBehavior =
  (typeof SpotInstanceInterruptionBehavior)[keyof typeof SpotInstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const FleetReplacementStrategy = {
  LAUNCH: "launch",
  LAUNCH_BEFORE_TERMINATE: "launch-before-terminate",
} as const;

/**
 * @public
 */
export type FleetReplacementStrategy = (typeof FleetReplacementStrategy)[keyof typeof FleetReplacementStrategy];

/**
 * @public
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance
 *          notification signal that your Spot Instance is at an elevated risk of being interrupted.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * @public
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
  ReplacementStrategy?: FleetReplacementStrategy;

  /**
   * @public
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

/**
 * @public
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * @public
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: FleetSpotCapacityRebalanceRequest;
}

/**
 * @public
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 */
export interface SpotOptionsRequest {
  /**
   * @public
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
  AllocationStrategy?: SpotAllocationStrategy;

  /**
   * @public
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *          interrupted.</p>
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior;

  /**
   * @public
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
   * @public
   * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the
   *          fleet.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleInstanceType?: boolean;

  /**
   * @public
   * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
   *          not reached, the fleet launches no instances.</p>
   *          <p>Supported only for fleets of type <code>instant</code>.</p>
   *          <p>At least one of the following must be specified: <code>SingleAvailabilityZone</code> |
   *          <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * @public
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend
   *          using this parameter because it can lead to increased interruptions. If you do not specify
   *          this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>MaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>MaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the <i>EC2 User
   *                   Guide</i>.</p>
   *          </note>
   */
  MaxTotalPrice?: string;
}

/**
 * @public
 * @enum
 */
export const DefaultTargetCapacityType = {
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;

/**
 * @public
 */
export type DefaultTargetCapacityType = (typeof DefaultTargetCapacityType)[keyof typeof DefaultTargetCapacityType];

/**
 * @public
 * @enum
 */
export const TargetCapacityUnitType = {
  MEMORY_MIB: "memory-mib",
  UNITS: "units",
  VCPU: "vcpu",
} as const;

/**
 * @public
 */
export type TargetCapacityUnitType = (typeof TargetCapacityUnitType)[keyof typeof TargetCapacityUnitType];

/**
 * @public
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
   * @public
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity: number | undefined;

  /**
   * @public
   * <p>The number of On-Demand units to request.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * @public
   * <p>The number of Spot units to request.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * @public
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *          <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType;

  /**
   * @public
   * <p>The unit for the target capacity. <code>TargetCapacityUnitType</code> can only be specified when <code>InstanceRequirements</code> is specified.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType;
}

/**
 * @public
 * @enum
 */
export const FleetType = {
  INSTANT: "instant",
  MAINTAIN: "maintain",
  REQUEST: "request",
} as const;

/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptionsRequest;

  /**
   * @public
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptionsRequest;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy;

  /**
   * @public
   * <p>The configuration for the EC2 Fleet.</p>
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * @public
   * <p>The number of units to request.</p>
   */
  TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;

  /**
   * @public
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * @public
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
  Type?: FleetType;

  /**
   * @public
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * @public
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * @public
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tag your resources</a>.</p>
   *          <p>If the fleet type is <code>instant</code>, specify a resource type of <code>fleet</code>
   *          to tag the fleet or <code>instance</code> to tag the instances at launch.</p>
   *          <p>If the fleet type is <code>maintain</code> or <code>request</code>, specify a resource
   *          type of <code>fleet</code> to tag the fleet. You cannot specify a resource type of
   *             <code>instance</code>. To tag instances at launch, specify the tags in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * @public
 * <p>The Amazon EC2 launch template that can be used by
 *             a Spot Fleet to configure Amazon EC2 instances. You must specify either the ID or name of the launch template in the request, but not both.</p>
 *          <p>For information about launch templates,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * @public
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
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
 * @public
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * @public
   * <p>The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 *          <p></p>
 */
export interface MemoryGiBPerVCpu {
  /**
   * @public
   * <p>The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 */
export interface MemoryMiB {
  /**
   * @public
   * <p>The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of memory, in MiB. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
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
   * @public
   * <p>The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum number of network interfaces.</p>
 */
export interface NetworkInterfaceCount {
  /**
   * @public
   * <p>The minimum number of network interfaces. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum number of network interfaces. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 */
export interface TotalLocalStorageGB {
  /**
   * @public
   * <p>The minimum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The minimum and maximum number of vCPUs.</p>
 */
export interface VCpuCountRange {
  /**
   * @public
   * <p>The minimum number of vCPUs. If the value is <code>0</code>, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * @public
   * <p>The maximum number of vCPUs. If this parameter is not specified, there is no maximum
   *          limit.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
 *          are optional. Any unspecified optional attribute is set to its default.</p>
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
 *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
 *             <code>InstanceType</code>.</p>
 *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
 *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
 *                wizard</a> or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances API</a>, you
 *             can't specify <code>InstanceRequirements</code>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *                placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface InstanceRequirements {
  /**
   * @public
   * <p>The minimum and maximum number of vCPUs.</p>
   */
  VCpuCount?: VCpuCountRange;

  /**
   * @public
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   */
  MemoryMiB?: MemoryMiB;

  /**
   * @public
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
  CpuManufacturers?: CpuManufacturer[];

  /**
   * @public
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu;

  /**
   * @public
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
   * @public
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   */
  InstanceGenerations?: InstanceGeneration[];

  /**
   * @public
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
   * @public
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
   * @public
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
  BareMetal?: BareMetal;

  /**
   * @public
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
  BurstablePerformance?: BurstablePerformance;

  /**
   * @public
   * <p>Indicates whether instance types must support hibernation for On-Demand
   *          Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * @public
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCount;

  /**
   * @public
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
  LocalStorage?: LocalStorage;

  /**
   * @public
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
  LocalStorageTypes?: LocalStorageType[];

  /**
   * @public
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGB;

  /**
   * @public
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps;

  /**
   * @public
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
  AcceleratorTypes?: AcceleratorType[];

  /**
   * @public
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCount;

  /**
   * @public
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
  AcceleratorManufacturers?: AcceleratorManufacturer[];

  /**
   * @public
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
  AcceleratorNames?: AcceleratorName[];

  /**
   * @public
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB;

  /**
   * @public
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbps;

  /**
   * @public
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
 * @public
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
  /**
   * @public
   * <p>The name of the placement group that the instance is in.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * @public
   * <p>The instance type.</p>
   *          <p>
   *             <code>mac1.metal</code> is not supported as a launch template override.</p>
   *          <note>
   *             <p>If you specify <code>InstanceType</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *       </p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  MaxPrice?: string;

  /**
   * @public
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * @public
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
   * @public
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: PlacementResponse;

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * @public
   * <p>The ID of the AMI. An AMI is required to launch an instance. This parameter is only
   *          available for fleets of type <code>instant</code>. For fleets of type <code>maintain</code>
   *          and <code>request</code>, you must specify the AMI ID in the launch template.</p>
   */
  ImageId?: string;
}

/**
 * @public
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * @public
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @public
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides;
}

/**
 * @public
 * @enum
 */
export const InstanceLifecycle = {
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;

/**
 * @public
 */
export type InstanceLifecycle = (typeof InstanceLifecycle)[keyof typeof InstanceLifecycle];

/**
 * @public
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
  /**
   * @public
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @public
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle;

  /**
   * @public
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error codes</a>.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const PlatformValues = {
  Windows: "Windows",
} as const;

/**
 * @public
 */
export type PlatformValues = (typeof PlatformValues)[keyof typeof PlatformValues];

/**
 * @public
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
  /**
   * @public
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @public
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle;

  /**
   * @public
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues;
}

/**
 * @public
 */
export interface CreateFleetResult {
  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * @public
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Errors?: CreateFleetError[];

  /**
   * @public
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Instances?: CreateFleetInstance[];
}

/**
 * @public
 * @enum
 */
export const DestinationFileFormat = {
  parquet: "parquet",
  plain_text: "plain-text",
} as const;

/**
 * @public
 */
export type DestinationFileFormat = (typeof DestinationFileFormat)[keyof typeof DestinationFileFormat];

/**
 * @public
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsRequest {
  /**
   * @public
   * <p>The format for the flow log. The default is <code>plain-text</code>.</p>
   */
  FileFormat?: DestinationFileFormat;

  /**
   * @public
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *             The default is <code>false</code>.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * @public
   * <p>Indicates whether to partition the flow log per hour. This reduces the cost and response
   *             time for queries. The default is <code>false</code>.</p>
   */
  PerHourPartition?: boolean;
}

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  cloud_watch_logs: "cloud-watch-logs",
  kinesis_data_firehose: "kinesis-data-firehose",
  s3: "s3",
} as const;

/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * @public
 * @enum
 */
export const FlowLogsResourceType = {
  NetworkInterface: "NetworkInterface",
  Subnet: "Subnet",
  TransitGateway: "TransitGateway",
  TransitGatewayAttachment: "TransitGatewayAttachment",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type FlowLogsResourceType = (typeof FlowLogsResourceType)[keyof typeof FlowLogsResourceType];

/**
 * @public
 * @enum
 */
export const TrafficType = {
  ACCEPT: "ACCEPT",
  ALL: "ALL",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 */
export interface CreateFlowLogsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs to a CloudWatch Logs log group in
   *             your account.</p>
   *          <p>This parameter is required if the destination type is <code>cloud-watch-logs</code>
   *             and unsupported otherwise.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.</p>
   */
  DeliverCrossAccountRole?: string;

  /**
   * @public
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *          <p>This parameter is valid only if the destination type is <code>cloud-watch-logs</code>.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>The IDs of the resources to monitor. For example, if the resource type is
   *                 <code>VPC</code>, specify the IDs of the VPCs.</p>
   *          <p>Constraints: Maximum of 25 for transit gateway resource types. Maximum of 1000 for the
   *             other resource types.</p>
   */
  ResourceIds: string[] | undefined;

  /**
   * @public
   * <p>The type of resource to monitor.</p>
   */
  ResourceType: FlowLogsResourceType | undefined;

  /**
   * @public
   * <p>The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic).
   *             This parameter is not supported for transit gateway resource types. It is required for
   *             the other resource types.</p>
   */
  TrafficType?: TrafficType;

  /**
   * @public
   * <p>The type of destination for the flow log data.</p>
   *          <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   */
  LogDestinationType?: LogDestinationType;

  /**
   * @public
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
   * @public
   * <p>The fields to include in the flow log record. List the fields in the order in which
   *             they should appear. If you omit this parameter, the flow log is created using the
   *             default format. If you specify this parameter, you must include at least one
   *             field. For more information about the available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log
   *                 records</a> in the <i>Amazon VPC User Guide</i> or <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records">Transit Gateway Flow Log
   *                     records</a> in the <i>Amazon Web Services Transit Gateway Guide</i>.</p>
   *          <p>Specify the fields using the <code>$\{field-id\}</code> format, separated by spaces.</p>
   */
  LogFormat?: string;

  /**
   * @public
   * <p>The tags to apply to the flow logs.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
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
   * @public
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsRequest;
}

/**
 * @public
 */
export interface CreateFlowLogsResult {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The IDs of the flow logs.</p>
   */
  FlowLogIds?: string[];

  /**
   * @public
   * <p>Information about the flow logs that could not be created successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface StorageLocation {
  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface CreateFpgaImageRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 for the output logs.</p>
   */
  LogsStorageLocation?: StorageLocation;

  /**
   * @public
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A name for the AFI.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to apply to the FPGA image during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreateFpgaImageResult {
  /**
   * @public
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * @public
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  io2: "io2",
  sc1: "sc1",
  st1: "st1",
  standard: "standard",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface EbsBlockDevice {
  /**
   * @public
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
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
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
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
   * @public
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or
   *                 <code>io2</code>, you must specify the IOPS that the volume supports.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under
   *             which the EBS volume is encrypted.</p>
   *          <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * @public
   * <p>The ARN of the Outpost on which the snapshot is stored.</p>
   *          <p>This parameter is not supported when using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html">CreateImage</a>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot. The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS encryption</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>In no case can you remove encryption from an encrypted volume.</p>
   *          <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
   *          <p>This parameter is not returned by <a>DescribeImageAttribute</a>.</p>
   *          <p>For <a>CreateImage</a> and <a>RegisterImage</a>, whether you can
   *             include this parameter, and the allowed values differ depending on the type of block
   *             device mapping you are creating.</p>
   *          <ul>
   *             <li>
   *                <p>If you are creating a block device mapping for a <b>new (empty)
   *                     volume</b>, you can include this parameter, and specify either <code>true</code>
   *                     for an encrypted volume, or <code>false</code> for an unencrypted volume. If you omit
   *                     this parameter, it defaults to <code>false</code> (unencrypted).</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted or unencrypted snapshot</b>, you must omit this parameter. If you
   *                     include this parameter, the request will fail, regardless of the value that you
   *                     specify.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     unencrypted volume</b>, you can include this parameter, but you must specify
   *                     <code>false</code>. If you specify <code>true</code>, the request will fail. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *             <li>
   *                <p>If you are creating a block device mapping from an <b>existing
   *                     encrypted volume</b>, you can include this parameter, and specify either
   *                     <code>true</code> or <code>false</code>. However, if you specify <code>false</code>,
   *                     the parameter is ignored and the block device mapping is always encrypted. In this
   *                     case, we recommend that you omit the parameter.</p>
   *             </li>
   *          </ul>
   */
  Encrypted?: boolean;
}

/**
 * @public
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *             volumes to attach to an instance at launch.</p>
 */
export interface BlockDeviceMapping {
  /**
   * @public
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * @public
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
   * @public
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsBlockDevice;

  /**
   * @public
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *             property is specified, the device is removed from the block device mapping regardless of
   *             the assigned value.</p>
   */
  NoDevice?: string;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * @public
   * <p>The block device mappings. This parameter cannot be used to modify the encryption
   *    		status of existing volumes or snapshots. To create an AMI with encrypted snapshots,
   *    		use the <a>CopyImage</a> action.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @public
   * <p>A description for the new image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Indicates whether or not the instance should be automatically rebooted before creating
   *        the image. Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - The instance is not rebooted before creating the image. This
   *            creates crash-consistent snapshots that include only the data that has been written
   *            to the volumes at the time the snapshots are created. Buffered data and data in
   *            memory that has not yet been written to the volumes is not included in the snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - The instance is rebooted before creating the image. This
   *            ensures that all buffered data and data in memory is written to the volumes before the
   *            snapshots are created.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  NoReboot?: boolean;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateImageResult {
  /**
   * @public
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the subnet in which to create the EC2 Instance Connect Endpoint.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>One or more security groups to associate with the endpoint. If you don't specify a security group,
   *             the default security group for your VPC will be associated with the endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Indicates whether your client's IP address is preserved as the source. The value is <code>true</code> or <code>false</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>true</code>, your client's IP address is used when you connect to a resource.</p>
   *             </li>
   *             <li>
   *                <p>If <code>false</code>, the elastic network interface IP address is used when you connect to a resource.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PreserveClientIp?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to apply to the EC2 Instance Connect Endpoint during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * @enum
 */
export const Ec2InstanceConnectEndpointState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
} as const;

/**
 * @public
 */
export type Ec2InstanceConnectEndpointState =
  (typeof Ec2InstanceConnectEndpointState)[keyof typeof Ec2InstanceConnectEndpointState];

/**
 * @public
 * <p>The EC2 Instance Connect Endpoint.</p>
 */
export interface Ec2InstanceConnectEndpoint {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that created the EC2 Instance Connect Endpoint.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the EC2 Instance Connect Endpoint.</p>
   */
  InstanceConnectEndpointId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.</p>
   */
  InstanceConnectEndpointArn?: string;

  /**
   * @public
   * <p>The current state of the EC2 Instance Connect Endpoint.</p>
   */
  State?: Ec2InstanceConnectEndpointState;

  /**
   * @public
   * <p>The message for the current state of the EC2 Instance Connect Endpoint.
   *         Can include a failure message.</p>
   */
  StateMessage?: string;

  /**
   * @public
   * <p>The DNS name of the EC2 Instance Connect Endpoint.</p>
   */
  DnsName?: string;

  /**
   * @public
   * <p></p>
   */
  FipsDnsName?: string;

  /**
   * @public
   * <p>The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2
   *             Instance Connect Endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC in which the EC2 Instance Connect Endpoint was created.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The Availability Zone of the EC2 Instance Connect Endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The date and time that the EC2 Instance Connect Endpoint was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The ID of the subnet in which the EC2 Instance Connect Endpoint was created.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>Indicates whether your client's IP address is preserved as the source. The value is <code>true</code> or <code>false</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>true</code>, your client's IP address is used when you connect to a resource.</p>
   *             </li>
   *             <li>
   *                <p>If <code>false</code>, the elastic network interface IP address is used when you connect to a resource.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PreserveClientIp?: boolean;

  /**
   * @public
   * <p>The security groups associated with the endpoint. If you didn't specify a security group,
   *             the default security group for your VPC is associated with the endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags assigned to the EC2 Instance Connect Endpoint.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInstanceConnectEndpointResult {
  /**
   * @public
   * <p>Information about the EC2 Instance Connect Endpoint.</p>
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint;

  /**
   * @public
   * <p>Unique, case-sensitive idempotency token provided by the client in the the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 */
export interface InstanceEventWindowTimeRangeRequest {
  /**
   * @public
   * <p>The day on which the time range begins.</p>
   */
  StartWeekDay?: WeekDay;

  /**
   * @public
   * <p>The hour when the time range begins.</p>
   */
  StartHour?: number;

  /**
   * @public
   * <p>The day on which the time range ends.</p>
   */
  EndWeekDay?: WeekDay;

  /**
   * @public
   * <p>The hour when the time range ends.</p>
   */
  EndHour?: number;
}

/**
 * @public
 */
export interface CreateInstanceEventWindowRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time range for the event window. If you specify a time range, you can't specify a cron
   *          expression.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * @public
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
   * @public
   * <p>The tags to apply to the event window.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreateInstanceEventWindowResult {
  /**
   * @public
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

/**
 * @public
 * @enum
 */
export const ContainerFormat = {
  ova: "ova",
} as const;

/**
 * @public
 */
export type ContainerFormat = (typeof ContainerFormat)[keyof typeof ContainerFormat];

/**
 * @public
 * @enum
 */
export const DiskImageFormat = {
  RAW: "RAW",
  VHD: "VHD",
  VMDK: "VMDK",
} as const;

/**
 * @public
 */
export type DiskImageFormat = (typeof DiskImageFormat)[keyof typeof DiskImageFormat];

/**
 * @public
 * <p>Describes an export instance task.</p>
 */
export interface ExportToS3TaskSpecification {
  /**
   * @public
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat;

  /**
   * @public
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat;

  /**
   * @public
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 * @enum
 */
export const ExportEnvironment = {
  citrix: "citrix",
  microsoft: "microsoft",
  vmware: "vmware",
} as const;

/**
 * @public
 */
export type ExportEnvironment = (typeof ExportEnvironment)[keyof typeof ExportEnvironment];

/**
 * @public
 */
export interface CreateInstanceExportTaskRequest {
  /**
   * @public
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The format and location for an export instance task.</p>
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment: ExportEnvironment | undefined;

  /**
   * @public
   * <p>The tags to apply to the export instance task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes the format and location for the export task.</p>
 */
export interface ExportToS3Task {
  /**
   * @public
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat;

  /**
   * @public
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat;

  /**
   * @public
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and have
   *    an access control list (ACL) attached that specifies the Region-specific canonical account ID for
   *    the <code>Grantee</code>. For more information about the ACL to your S3 bucket, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html#vmexport-prerequisites">Prerequisites</a> in the VM Import/Export User Guide.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The encryption key for your S3 bucket.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
  /**
   * @public
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment;
}

/**
 * @public
 * @enum
 */
export const ExportTaskState = {
  active: "active",
  cancelled: "cancelled",
  cancelling: "cancelling",
  completed: "completed",
} as const;

/**
 * @public
 */
export type ExportTaskState = (typeof ExportTaskState)[keyof typeof ExportTaskState];

/**
 * @public
 * <p>Describes an export instance task.</p>
 */
export interface ExportTask {
  /**
   * @public
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * @public
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: ExportToS3Task;

  /**
   * @public
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: InstanceExportDetails;

  /**
   * @public
   * <p>The state of the export task.</p>
   */
  State?: ExportTaskState;

  /**
   * @public
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The tags for the export task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInstanceExportTaskResult {
  /**
   * @public
   * <p>Information about the export instance task.</p>
   */
  ExportTask?: ExportTask;
}

/**
 * @public
 */
export interface CreateInternetGatewayRequest {
  /**
   * @public
   * <p>The tags to assign to the internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
  /**
   * @public
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * @public
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateInternetGatewayResult {
  /**
   * @public
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: InternetGateway;
}

/**
 * @public
 */
export interface CreateIpamRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A description for the IPAM.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. </p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  OperatingRegions?: AddIpamOperatingRegion[];

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamOperatingRegion {
  /**
   * @public
   * <p>The name of the operating Region.</p>
   */
  RegionName?: string;
}

/**
 * @public
 * @enum
 */
export const IpamState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamState = (typeof IpamState)[keyof typeof IpamState];

/**
 * @public
 * <p>IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface Ipam {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the IPAM.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the IPAM.</p>
   */
  IpamId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the IPAM.</p>
   */
  IpamRegion?: string;

  /**
   * @public
   * <p>The ID of the IPAM's default public scope.</p>
   */
  PublicDefaultScopeId?: string;

  /**
   * @public
   * <p>The ID of the IPAM's default private scope.</p>
   */
  PrivateDefaultScopeId?: string;

  /**
   * @public
   * <p>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  ScopeCount?: number;

  /**
   * @public
   * <p>The description for the IPAM.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OperatingRegions?: IpamOperatingRegion[];

  /**
   * @public
   * <p>The state of the IPAM.</p>
   */
  State?: IpamState;

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The IPAM's default resource discovery ID.</p>
   */
  DefaultResourceDiscoveryId?: string;

  /**
   * @public
   * <p>The IPAM's default resource discovery association ID.</p>
   */
  DefaultResourceDiscoveryAssociationId?: string;

  /**
   * @public
   * <p>The IPAM's resource discovery association count.</p>
   */
  ResourceDiscoveryAssociationCount?: number;
}

/**
 * @public
 */
export interface CreateIpamResult {
  /**
   * @public
   * <p>Information about the IPAM created.</p>
   */
  Ipam?: Ipam;
}

/**
 * @public
 * <p>A tag on an IPAM resource.</p>
 */
export interface RequestIpamResourceTag {
  /**
   * @public
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value for the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const IpamPoolAwsService = {
  ec2: "ec2",
} as const;

/**
 * @public
 */
export type IpamPoolAwsService = (typeof IpamPoolAwsService)[keyof typeof IpamPoolAwsService];

/**
 * @public
 * @enum
 */
export const IpamPoolPublicIpSource = {
  amazon: "amazon",
  byoip: "byoip",
} as const;

/**
 * @public
 */
export type IpamPoolPublicIpSource = (typeof IpamPoolPublicIpSource)[keyof typeof IpamPoolPublicIpSource];

/**
 * @public
 */
export interface CreateIpamPoolRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the scope in which you would like to create the IPAM pool.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * @public
   * <p>In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you do not choose a locale, resources in Regions others than the IPAM's home region cannot use CIDRs from this pool.</p>
   *          <p>Possible values: Any Amazon Web Services Region, such as us-east-1.</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * @public
   * <p>A description for the IPAM pool.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</p>
   */
  AddressFamily: AddressFamily | undefined;

  /**
   * @public
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
   * @public
   * <p>Determines if the pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * @public
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be
   *          less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * @public
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be
   *          greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * @public
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here,
   *          new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * @public
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: RequestIpamResourceTag[];

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService;

  /**
   * @public
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>byoip</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is <code>amazon</code>. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  PublicIpSource?: IpamPoolPublicIpSource;
}

/**
 * @public
 * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
 *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
 */
export interface IpamResourceTag {
  /**
   * @public
   * <p>The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const IpamScopeType = {
  private: "private",
  public: "public",
} as const;

/**
 * @public
 */
export type IpamScopeType = (typeof IpamScopeType)[keyof typeof IpamScopeType];

/**
 * @public
 * @enum
 */
export const IpamPoolState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamPoolState = (typeof IpamPoolState)[keyof typeof IpamPoolState];

/**
 * @public
 * <p>In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 */
export interface IpamPool {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the IPAM pool.</p>
   */
  IpamPoolId?: string;

  /**
   * @public
   * <p>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</p>
   */
  SourceIpamPoolId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IPAM pool.</p>
   */
  IpamPoolArn?: string;

  /**
   * @public
   * <p>The ARN of the scope of the IPAM pool.</p>
   */
  IpamScopeArn?: string;

  /**
   * @public
   * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
   */
  IpamScopeType?: IpamScopeType;

  /**
   * @public
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the IPAM pool.</p>
   */
  IpamRegion?: string;

  /**
   * @public
   * <p>The locale of the IPAM pool. In IPAM, the locale is the Amazon Web Services Region where you want to make an IPAM pool available for allocations. Only resources in the same Region as the locale of the pool can get IP address allocations from the pool. You can only allocate a CIDR for a VPC, for example, from an IPAM pool that shares a locale with the VPC’s Region. Note that once you choose a Locale for a pool, you cannot modify it. If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas in IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   */
  PoolDepth?: number;

  /**
   * @public
   * <p>The state of the IPAM pool.</p>
   */
  State?: IpamPoolState;

  /**
   * @public
   * <p>A message related to the failed creation of an IPAM pool.</p>
   */
  StateMessage?: string;

  /**
   * @public
   * <p>The description of the IPAM pool.</p>
   */
  Description?: string;

  /**
   * @public
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
   * @public
   * <p>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to <code>ipv4</code>.</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * @public
   * <p>The address family of the pool.</p>
   */
  AddressFamily?: AddressFamily;

  /**
   * @public
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * @public
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * @public
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and
   *          you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * @public
   * <p>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</p>
   */
  AllocationResourceTags?: IpamResourceTag[];

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</p>
   */
  AwsService?: IpamPoolAwsService;

  /**
   * @public
   * <p>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>BYOIP</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *          By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  PublicIpSource?: IpamPoolPublicIpSource;
}

/**
 * @public
 */
export interface CreateIpamPoolResult {
  /**
   * @public
   * <p>Information about the IPAM pool created.</p>
   */
  IpamPool?: IpamPool;
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A description for the IPAM resource discovery.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Operating Regions for the IPAM resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  OperatingRegions?: AddIpamOperatingRegion[];

  /**
   * @public
   * <p>Tag specifications for the IPAM resource discovery.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A client token for the IPAM resource discovery.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const IpamResourceDiscoveryState = {
  CREATE_COMPLETE: "create-complete",
  CREATE_FAILED: "create-failed",
  CREATE_IN_PROGRESS: "create-in-progress",
  DELETE_COMPLETE: "delete-complete",
  DELETE_FAILED: "delete-failed",
  DELETE_IN_PROGRESS: "delete-in-progress",
  ISOLATE_COMPLETE: "isolate-complete",
  ISOLATE_IN_PROGRESS: "isolate-in-progress",
  MODIFY_COMPLETE: "modify-complete",
  MODIFY_FAILED: "modify-failed",
  MODIFY_IN_PROGRESS: "modify-in-progress",
  RESTORE_IN_PROGRESS: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamResourceDiscoveryState = (typeof IpamResourceDiscoveryState)[keyof typeof IpamResourceDiscoveryState];

/**
 * @public
 * <p>A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 */
export interface IpamResourceDiscovery {
  /**
   * @public
   * <p>The ID of the owner.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The resource discovery ID.</p>
   */
  IpamResourceDiscoveryId?: string;

  /**
   * @public
   * <p>The resource discovery Amazon Resource Name (ARN).</p>
   */
  IpamResourceDiscoveryArn?: string;

  /**
   * @public
   * <p>The resource discovery Region.</p>
   */
  IpamResourceDiscoveryRegion?: string;

  /**
   * @public
   * <p>The resource discovery description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The operating Regions for the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  OperatingRegions?: IpamOperatingRegion[];

  /**
   * @public
   * <p>Defines if the resource discovery is the default. The default resource discovery is the resource discovery automatically created when you create an IPAM.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
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
  State?: IpamResourceDiscoveryState;

  /**
   * @public
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateIpamResourceDiscoveryResult {
  /**
   * @public
   * <p>An IPAM resource discovery.</p>
   */
  IpamResourceDiscovery?: IpamResourceDiscovery;
}

/**
 * @public
 */
export interface CreateIpamScopeRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM for which you're creating this scope.</p>
   */
  IpamId: string | undefined;

  /**
   * @public
   * <p>A description for the scope you're creating.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const IpamScopeState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamScopeState = (typeof IpamScopeState)[keyof typeof IpamScopeState];

/**
 * @public
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export interface IpamScope {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the scope.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the scope.</p>
   */
  IpamScopeId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   */
  IpamScopeArn?: string;

  /**
   * @public
   * <p>The ARN of the IPAM.</p>
   */
  IpamArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the IPAM scope.</p>
   */
  IpamRegion?: string;

  /**
   * @public
   * <p>The type of the scope.</p>
   */
  IpamScopeType?: IpamScopeType;

  /**
   * @public
   * <p>Defines if the scope is the default scope or not.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>The description of the scope.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The number of pools in the scope.</p>
   */
  PoolCount?: number;

  /**
   * @public
   * <p>The state of the IPAM scope.</p>
   */
  State?: IpamScopeState;

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateIpamScopeResult {
  /**
   * @public
   * <p>Information about the created scope.</p>
   */
  IpamScope?: IpamScope;
}

/**
 * @public
 * @enum
 */
export const KeyFormat = {
  pem: "pem",
  ppk: "ppk",
} as const;

/**
 * @public
 */
export type KeyFormat = (typeof KeyFormat)[keyof typeof KeyFormat];

/**
 * @public
 * @enum
 */
export const KeyType = {
  ed25519: "ed25519",
  rsa: "rsa",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 */
export interface CreateKeyPairRequest {
  /**
   * @public
   * <p>A unique name for the key pair.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   */
  KeyName: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances.</p>
   *          <p>Default: <code>rsa</code>
   *          </p>
   */
  KeyType?: KeyType;

  /**
   * @public
   * <p>The tags to apply to the new key pair.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The format of the key pair.</p>
   *          <p>Default: <code>pem</code>
   *          </p>
   */
  KeyFormat?: KeyFormat;
}

/**
 * @public
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * @public
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
   * @public
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   */
  KeyMaterial?: string;

  /**
   * @public
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * @public
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The parameters for a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * @public
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached
   *             to instances that support Amazon EBS encryption. If you are creating a volume from a
   *             snapshot, you can't specify an encryption value.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
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
   * @public
   * <p>The ARN of the symmetric Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
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
   * @public
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 1,000
   *             MiB/s.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;
}

/**
 * @public
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * @public
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting
   *             from 0. An instance type with 2 available instance store volumes can specify mappings
   *             for ephemeral0 and ephemeral1. The number of available instance store volumes depends on
   *             the instance type. After you connect to the instance, you must mount the volume.</p>
   */
  VirtualName?: string;

  /**
   * @public
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest;

  /**
   * @public
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationPreference = {
  none: "none",
  open: "open",
} as const;

/**
 * @public
 */
export type CapacityReservationPreference =
  (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

/**
 * @public
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTarget {
  /**
   * @public
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   */
  CapacityReservationId?: string;

  /**
   * @public
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * @public
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only
 *             one option at a time. Use the <code>CapacityReservationPreference</code> parameter to
 *             configure the instance to run in On-Demand capacity or to run in any <code>open</code>
 *             Capacity Reservation that has matching attributes (instance type, platform, Availability
 *             Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a
 *             specific Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * @public
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
  CapacityReservationPreference?: CapacityReservationPreference;

  /**
   * @public
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

/**
 * @public
 * @enum
 */
export const AmdSevSnpSpecification = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type AmdSevSnpSpecification = (typeof AmdSevSnpSpecification)[keyof typeof AmdSevSnpSpecification];

/**
 * @public
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * @public
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * @public
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;

  /**
   * @public
   * <p>Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported
   *             with M6a, R6a, and C6a instance types only. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   */
  AmdSevSnp?: AmdSevSnpSpecification;
}

/**
 * @public
 * <p>The credit option for CPU usage of a T instance.</p>
 */
export interface CreditSpecificationRequest {
  /**
   * @public
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

/**
 * @public
 * <p>A specification for an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuSpecification {
  /**
   * @public
   * <p>The type of Elastic Graphics accelerator. For more information about the values to specify for
   *             <code>Type</code>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics">Elastic Graphics Basics</a>, specifically the Elastic Graphics accelerator column, in the
   *             <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.</p>
   */
  Type: string | undefined;
}

/**
 * @public
 * <p> Describes an elastic inference accelerator. </p>
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * @public
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
 *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">What is Amazon Web Services Nitro Enclaves?</a>
 *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * @public
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>.</p>
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * @public
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for
   *             hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

/**
 * @public
 * <p>An IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const ShutdownBehavior = {
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type ShutdownBehavior = (typeof ShutdownBehavior)[keyof typeof ShutdownBehavior];

/**
 * @public
 * @enum
 */
export const MarketType = {
  spot: "spot",
} as const;

/**
 * @public
 */
export type MarketType = (typeof MarketType)[keyof typeof MarketType];

/**
 * @public
 * @enum
 */
export const InstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;

/**
 * @public
 */
export type InstanceInterruptionBehavior =
  (typeof InstanceInterruptionBehavior)[keyof typeof InstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const SpotInstanceType = {
  one_time: "one-time",
  persistent: "persistent",
} as const;

/**
 * @public
 */
export type SpotInstanceType = (typeof SpotInstanceType)[keyof typeof SpotInstanceType];

/**
 * @public
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * @public
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
   * @public
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
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
   * @public
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}

/**
 * @public
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * @public
   * <p>The market type.</p>
   */
  MarketType?: MarketType;

  /**
   * @public
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}

/**
 * @public
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateAutoRecoveryState = {
  default: "default",
  disabled: "disabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateAutoRecoveryState =
  (typeof LaunchTemplateAutoRecoveryState)[keyof typeof LaunchTemplateAutoRecoveryState];

/**
 * @public
 * <p>The maintenance options of your instance.</p>
 */
export interface LaunchTemplateInstanceMaintenanceOptionsRequest {
  /**
   * @public
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataEndpointState =
  (typeof LaunchTemplateInstanceMetadataEndpointState)[keyof typeof LaunchTemplateInstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataProtocolIpv6 = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataProtocolIpv6 =
  (typeof LaunchTemplateInstanceMetadataProtocolIpv6)[keyof typeof LaunchTemplateInstanceMetadataProtocolIpv6];

/**
 * @public
 * @enum
 */
export const LaunchTemplateHttpTokensState = {
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type LaunchTemplateHttpTokensState =
  (typeof LaunchTemplateHttpTokensState)[keyof typeof LaunchTemplateHttpTokensState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataTagsState =
  (typeof LaunchTemplateInstanceMetadataTagsState)[keyof typeof LaunchTemplateInstanceMetadataTagsState];

/**
 * @public
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * @public
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
  HttpTokens?: LaunchTemplateHttpTokensState;

  /**
   * @public
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * @public
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState;

  /**
   * @public
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6;

  /**
   * @public
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState;
}

/**
 * @public
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * @public
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring
   *             is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * @public
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to Amazon EC2 network interfaces</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * @public
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6AddressRequest {
  /**
   * @public
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

/**
 * @public
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * @public
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * @public
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface PrivateIpAddressSpecification {
  /**
   * @public
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;

  /**
   * @public
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>The parameters for a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * @public
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * @public
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * @public
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
   * @public
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You
   *             can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @public
   * <p>The number of secondary private IPv4 addresses to assign to a network
   *             interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * @public
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   */
  NetworkCardIndex?: number;

  /**
   * @public
   * <p>One or more IPv4 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv4 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * @public
   * <p>One or more IPv6 prefixes to be assigned to the network interface. You cannot use this
   *             option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv6 prefixes to be automatically assigned to the network interface. You
   *             cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * @public
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  PrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * @public
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * @public
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: Tenancy;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * @public
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a
   *             host resource group ARN, omit the <b>Tenancy</b> parameter or
   *             set it to <code>host</code>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * @public
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * @public
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * @public
   * <p>The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS
   *             name must be based on the instance ID. For dual-stack subnets, you can specify whether
   *             DNS names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * @public
 * <p>The tags specification for the resources that are created during instance
 *             launch.</p>
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * @public
   * <p>The type of resource to tag.</p>
   *          <p>Valid Values lists all resource types for Amazon EC2 that can be tagged. When
   *             you create a launch template, you can specify tags for the following resource types
   *             only: <code>instance</code> | <code>volume</code> | <code>elastic-gpu</code> |
   *                 <code>network-interface</code> | <code>spot-instances-request</code>.
   *             If the instance does include the resource type that you specify, the instance
   *             launch fails. For example, not all instance types include an Elastic GPU.</p>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The information to include in the launch template.</p>
 *          <note>
 *             <p>You must specify at least one parameter for the launch template data.</p>
 *          </note>
 */
export interface RequestLaunchTemplateData {
  /**
   * @public
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          </important>
   */
  KernelId?: string;

  /**
   * @public
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * @public
   * <p>The block device mapping.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * @public
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *             any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * @public
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
   *             <li>
   *                <p>
   *                   <code>resolve:ssm:public-parameter</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Currently, EC2 Fleet and Spot Fleet do not support specifying a Systems Manager parameter.
   *                 If the launch template will be used by an EC2 Fleet or Spot Fleet, you must specify the AMI ID.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If you specify <code>InstanceType</code>, you can't specify
   *                 <code>InstanceRequirements</code>.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * @public
   * <p>The placement for the instance.</p>
   */
  Placement?: LaunchTemplatePlacementRequest;

  /**
   * @public
   * <p>The ID of the RAM disk.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User provided
   *                     kernels</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          </important>
   */
  RamDiskId?: string;

  /**
   * @public
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * @public
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *          <p>Default: <code>stop</code>
   *          </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;

  /**
   * @public
   * <p>The user data to make available to the instance. You must provide base64-encoded text.
   *             User data is limited to 16 KB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands on your Linux instance at
   *                 launch</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instancedata-add-user-data.html">Work with instance
   *                 user data</a> (Windows) in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If you are creating the launch template for use with Batch, the user
   *             data must be provided in the <a href="https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive"> MIME multi-part archive format</a>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Amazon EC2 user data in launch templates</a> in the <i>Batch User Guide</i>.</p>
   */
  UserData?: string;

  /**
   * @public
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
   * @public
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * @public
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *          <note>
   *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   *                 Elastic Inference (EI), and will help current customers migrate their workloads to
   *                 options that offer better price and performance. After April 15, 2023, new customers
   *                 will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker,
   *                 Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during
   *                 the past 30-day period are considered current customers and will be able to continue
   *                 using the service.</p>
   *          </note>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * @public
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>One or more security group names. For a nondefault VPC, you must use security group
   *             IDs instead. You cannot specify both a security group ID and security name in the same
   *             request.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * @public
   * <p>The credit option for CPU usage of the instance. Valid only for T instances.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * @public
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * @public
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * @public
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * @public
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * @public
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more
   *             information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro Enclaves?</a>
   *             in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest;

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes
   *          are optional. Any unspecified optional attribute is set to its default.</p>
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
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *             <p>Attribute-based instance type selection is only supported when using Auto Scaling
   *             groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in
   *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html">launch instance
   *                wizard</a>, or with the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> API or
   *               <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html">AWS::EC2::Instance</a> Amazon Web Services CloudFormation resource, you can't specify <code>InstanceRequirements</code>.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
   *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;

  /**
   * @public
   * <p>The options for the instance hostname. The default values are inherited from the
   *             subnet.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest;

  /**
   * @public
   * <p>The maintenance options for the instance.</p>
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest;

  /**
   * @public
   * <p>Indicates whether to enable the instance for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DisableApiStop?: boolean;
}

/**
 * @public
 */
export interface CreateLaunchTemplateRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;

  /**
   * @public
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * @public
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
 * @public
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * @public
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * @public
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * @public
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The error code and error message that is returned for a parameter or parameter
 *             combination that is not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationError {
  /**
   * @public
   * <p>The error code that indicates why the parameter or parameter combination is not valid.
   *             For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The error message that describes why the parameter or parameter combination is not
   *             valid. For more information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The error codes and error messages that are returned for the parameters or parameter
 *             combinations that are not valid when a new launch template or new version of a launch
 *             template is created.</p>
 */
export interface ValidationWarning {
  /**
   * @public
   * <p>The error codes and error messages.</p>
   */
  Errors?: ValidationError[];
}

/**
 * @public
 */
export interface CreateLaunchTemplateResult {
  /**
   * @public
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * @public
   * <p>If the launch template contains parameters or parameter combinations that are not
   *             valid, an error code and an error message are returned for each issue that's
   *             found.</p>
   */
  Warning?: ValidationWarning;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version number of the launch template version on which to base the new version.
   *             The new version inherits the same launch parameters as the source version, except for
   *             parameters that you specify in <code>LaunchTemplateData</code>. Snapshots applied to the
   *             block device mapping are ignored when creating a new version unless they are explicitly
   *             included.</p>
   */
  SourceVersion?: string;

  /**
   * @public
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * @public
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for <code>ImageId</code>,
   *             the AMI ID is displayed in the response for <code>imageID</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems
   *                 Manager parameter instead of an AMI ID</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ResolveAlias?: boolean;
}

/**
 * @public
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * @public
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The ARN of the Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

/**
 * @public
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * @public
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * @public
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * @public
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

/**
 * @public
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTargetResponse {
  /**
   * @public
   * <p>The ID of the targeted Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * @public
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * @public
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * @public
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
  CapacityReservationPreference?: CapacityReservationPreference;

  /**
   * @public
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   *             group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

/**
 * @public
 * <p>The CPU options for the instance.</p>
 */
export interface LaunchTemplateCpuOptions {
  /**
   * @public
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * @public
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for AMD SEV-SNP. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html">AMD SEV-SNP</a>.</p>
   */
  AmdSevSnp?: AmdSevSnpSpecification;
}

/**
 * @public
 * <p>Describes the credit option for CPU usage of a T instance.</p>
 */
export interface CreditSpecification {
  /**
   * @public
   * <p>The credit option for CPU usage of a T instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits?: string;
}

/**
 * @public
 * <p>Describes an elastic GPU.</p>
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * @public
   * <p>The elastic GPU type.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p> Describes an elastic inference accelerator. </p>
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * @public
   * <p> The type of elastic inference accelerator. The possible values are eia1.medium,
   *             eia1.large, and eia1.xlarge. </p>
   */
  Type?: string;

  /**
   * @public
   * <p> The number of elastic inference accelerators to attach to the instance. </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * @public
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro
   *             Enclaves; otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Indicates whether an instance is configured for hibernation.</p>
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * @public
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

/**
 * @public
 * <p>Describes an IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * @public
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
   * @public
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType;

  /**
   * @public
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes.
   *             This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
   * <p>The end date of the request. For a one-time request, the request remains active until
   *             all instances launch, the request is canceled, or this date is reached. If the request
   *             is persistent, it remains active until it is canceled or this date and time is
   *             reached.</p>
   */
  ValidUntil?: Date;

  /**
   * @public
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior;
}

/**
 * @public
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * @public
   * <p>The market type.</p>
   */
  MarketType?: MarketType;

  /**
   * @public
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}

/**
 * @public
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * <p>The maintenance options of your instance.</p>
 */
export interface LaunchTemplateInstanceMaintenanceOptions {
  /**
   * @public
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   */
  AutoRecovery?: LaunchTemplateAutoRecoveryState;
}

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataOptionsState = {
  applied: "applied",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LaunchTemplateInstanceMetadataOptionsState =
  (typeof LaunchTemplateInstanceMetadataOptionsState)[keyof typeof LaunchTemplateInstanceMetadataOptionsState];

/**
 * @public
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * @public
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: LaunchTemplateInstanceMetadataOptionsState;

  /**
   * @public
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
  HttpTokens?: LaunchTemplateHttpTokensState;

  /**
   * @public
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * @public
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is
   *             not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState;

  /**
   * @public
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6;

  /**
   * @public
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: LaunchTemplateInstanceMetadataTagsState;
}

/**
 * @public
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoring {
  /**
   * @public
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Information about the IPv4 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * @public
   * <p>The IPv4 delegated prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

/**
 * @public
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6Address {
  /**
   * @public
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;

  /**
   * @public
   * <p>Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  IsPrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Information about the IPv6 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * @public
   * <p>The IPv6 delegated prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * @public
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network
   *             interface.</p>
   *          <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *             Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * @public
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network
   *             interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * @public
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @public
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * @public
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * @public
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];

  /**
   * @public
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * @public
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];

  /**
   * @public
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * @public
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   */
  PrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacement {
  /**
   * @public
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * @public
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * @public
   * <p>The tenancy of the instance. An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   */
  Tenancy?: Tenancy;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * @public
   * <p>The ARN of the host resource group in which to launch the instances. </p>
   */
  HostResourceGroupArn?: string;

  /**
   * @public
   * <p>The number of the partition the instance should launch in. Valid only if the placement
   *             group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * @public
   * <p>The Group ID of the placement group. You must specify the Placement Group <b>Group ID</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptions {
  /**
   * @public
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * @public
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

/**
 * @public
 * <p>The tags specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecification {
  /**
   * @public
   * <p>The type of resource to tag.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The information for a launch template. </p>
 */
export interface ResponseLaunchTemplateData {
  /**
   * @public
   * <p>The ID of the kernel, if applicable.</p>
   */
  KernelId?: string;

  /**
   * @public
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * @public
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * @public
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * @public
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
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * @public
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoring;

  /**
   * @public
   * <p>The placement of the instance.</p>
   */
  Placement?: LaunchTemplatePlacement;

  /**
   * @public
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * @public
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior;

  /**
   * @public
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * @public
   * <p>The tags that are applied to the resources that are created during instance
   *             launch.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * @public
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * @public
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   *          <note>
   *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon
   *                 Elastic Inference (EI), and will help current customers migrate their workloads to
   *                 options that offer better price and performance. After April 15, 2023, new customers
   *                 will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker,
   *                 Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during
   *                 the past 30-day period are considered current customers and will be able to continue
   *                 using the service.</p>
   *          </note>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * @public
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The security group names.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * @public
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: CreditSpecification;

  /**
   * @public
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptions;

  /**
   * @public
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * @public
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * @public
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * @public
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions;

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * @public
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;

  /**
   * @public
   * <p>The maintenance options for your instance.</p>
   */
  MaintenanceOptions?: LaunchTemplateInstanceMaintenanceOptions;

  /**
   * @public
   * <p>Indicates whether the instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  DisableApiStop?: boolean;
}

/**
 * @public
 * <p>Describes a launch template version.</p>
 */
export interface LaunchTemplateVersion {
  /**
   * @public
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * @public
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * @public
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

/**
 * @public
 */
export interface CreateLaunchTemplateVersionResult {
  /**
   * @public
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: LaunchTemplateVersion;

  /**
   * @public
   * <p>If the new version of the launch template contains parameters or parameter
   *             combinations that are not valid, an error code and an error message are returned for
   *             each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteRequest {
  /**
   * @public
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   */
  DestinationPrefixListId?: string;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteState = (typeof LocalGatewayRouteState)[keyof typeof LocalGatewayRouteState];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteType = (typeof LocalGatewayRouteType)[keyof typeof LocalGatewayRouteType];

/**
 * @public
 * <p>Describes a route for a local gateway route table.</p>
 */
export interface LocalGatewayRoute {
  /**
   * @public
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * @public
   * <p>The route type.</p>
   */
  Type?: LocalGatewayRouteType;

  /**
   * @public
   * <p>The state of the route.</p>
   */
  State?: LocalGatewayRouteState;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>
   *          The ID of the prefix list.
   *       </p>
   */
  DestinationPrefixListId?: string;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteResult {
  /**
   * @public
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteTableMode = {
  coip: "coip",
  direct_vpc_routing: "direct-vpc-routing",
} as const;

/**
 * @public
 */
export type LocalGatewayRouteTableMode = (typeof LocalGatewayRouteTableMode)[keyof typeof LocalGatewayRouteTableMode];

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableRequest {
  /**
   * @public
   * <p>
   *       The ID of the local gateway.
   *       </p>
   */
  LocalGatewayId: string | undefined;

  /**
   * @public
   * <p>
   *       The mode of the local gateway route table.
   *       </p>
   */
  Mode?: LocalGatewayRouteTableMode;

  /**
   * @public
   * <p>
   *       The tags assigned to the local gateway route table.
   *       </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a state change.</p>
 */
export interface StateReason {
  /**
   * @public
   * <p>The reason code for the state change.</p>
   */
  Code?: string;

  /**
   * @public
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
 * @public
 * <p>Describes a local gateway route table.</p>
 */
export interface LocalGatewayRouteTable {
  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The state of the local gateway route table.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The tags assigned to the local gateway route table.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The mode of the local gateway route table.</p>
   */
  Mode?: LocalGatewayRouteTableMode;

  /**
   * @public
   * <p>Information about the state change.</p>
   */
  StateReason?: StateReason;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableResult {
  /**
   * @public
   * <p>Information about the local gateway route table.</p>
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * @public
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID of the local gateway route table virtual interface group association.
   *       </p>
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * @public
   * <p>
   *       The tags assigned to the local gateway route table virtual interface group association.
   *       </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes an association between a local gateway route table and a virtual interface group.</p>
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * @public
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the virtual interface group.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group association.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * @public
   * <p>Information about the local gateway route table virtual interface group association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId?: string;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

/**
 * @public
 */
export interface CreateManagedPrefixListRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A name for the prefix list.</p>
   *          <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   */
  PrefixListName: string | undefined;

  /**
   * @public
   * <p>One or more entries for the prefix list.</p>
   */
  Entries?: AddPrefixListEntry[];

  /**
   * @public
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries: number | undefined;

  /**
   * @public
   * <p>The tags to apply to the prefix list during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The IP address type.</p>
   *          <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   */
  AddressFamily: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const PrefixListState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_complete: "restore-complete",
  restore_failed: "restore-failed",
  restore_in_progress: "restore-in-progress",
} as const;

/**
 * @public
 */
export type PrefixListState = (typeof PrefixListState)[keyof typeof PrefixListState];

/**
 * @public
 * <p>Describes a managed prefix list.</p>
 */
export interface ManagedPrefixList {
  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The IP address version.</p>
   */
  AddressFamily?: string;

  /**
   * @public
   * <p>The current state of the prefix list.</p>
   */
  State?: PrefixListState;

  /**
   * @public
   * <p>The state message.</p>
   */
  StateMessage?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   */
  PrefixListArn?: string;

  /**
   * @public
   * <p>The name of the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * @public
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries?: number;

  /**
   * @public
   * <p>The version of the prefix list.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The tags for the prefix list.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the owner of the prefix list.</p>
   */
  OwnerId?: string;
}

/**
 * @public
 */
export interface CreateManagedPrefixListResult {
  /**
   * @public
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

/**
 * @public
 * @enum
 */
export const ConnectivityType = {
  PRIVATE: "private",
  PUBLIC: "public",
} as const;

/**
 * @public
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

/**
 * @public
 */
export interface CreateNatGatewayRequest {
  /**
   * @public
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   */
  AllocationId?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the subnet in which to create the NAT gateway.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the NAT gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   */
  ConnectivityType?: ConnectivityType;

  /**
   * @public
   * <p>The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>Secondary EIP allocation IDs. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   */
  SecondaryAllocationIds?: string[];

  /**
   * @public
   * <p>Secondary private IPv4 addresses. For more information about secondary addresses, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating">Create a NAT gateway</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  SecondaryPrivateIpAddresses?: string[];

  /**
   * @public
   * <p>[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.
   *             For more information about secondary addresses, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating">Create a NAT gateway</a>
   *             in the <i>Amazon VPC User Guide</i>.</p>
   */
  SecondaryPrivateIpAddressCount?: number;
}

/**
 * @public
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
 */
export interface ProvisionedBandwidth {
  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionTime?: Date;

  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Provisioned?: string;

  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  RequestTime?: Date;

  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Requested?: string;

  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const NatGatewayState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type NatGatewayState = (typeof NatGatewayState)[keyof typeof NatGatewayState];

/**
 * @public
 * <p>Describes a NAT gateway.</p>
 */
export interface NatGateway {
  /**
   * @public
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * @public
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * @public
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
   * @public
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];

  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through
   *           the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: ProvisionedBandwidth;

  /**
   * @public
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
  State?: NatGatewayState;

  /**
   * @public
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   */
  ConnectivityType?: ConnectivityType;
}

/**
 * @public
 */
export interface CreateNatGatewayResult {
  /**
   * @public
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: NatGateway;
}

/**
 * @public
 */
export interface CreateNetworkAclRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the network ACL.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface NetworkAclAssociation {
  /**
   * @public
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * @public
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>Describes the ICMP type and code.</p>
 */
export interface IcmpTypeCode {
  /**
   * @public
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   */
  Code?: number;

  /**
   * @public
   * <p>The ICMP type. A value of -1 means all types.</p>
   */
  Type?: number;
}

/**
 * @public
 * @enum
 */
export const RuleAction = {
  allow: "allow",
  deny: "deny",
} as const;

/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * @public
 * <p>Describes an entry in a network ACL.</p>
 */
export interface NetworkAclEntry {
  /**
   * @public
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * @public
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * @public
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * @public
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: PortRange;

  /**
   * @public
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: RuleAction;

  /**
   * @public
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

/**
 * @public
 * <p>Describes a network ACL.</p>
 */
export interface NetworkAcl {
  /**
   * @public
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: NetworkAclAssociation[];

  /**
   * @public
   * <p>The entries (rules) in the network ACL.</p>
   */
  Entries?: NetworkAclEntry[];

  /**
   * @public
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * @public
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

/**
 * @public
 */
export interface CreateNetworkAclResult {
  /**
   * @public
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: NetworkAcl;
}

/**
 * @public
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * @public
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   */
  Egress: boolean | undefined;

  /**
   * @public
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * @public
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * @public
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * @public
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * @public
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | undefined;

  /**
   * @public
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   */
  RuleNumber: number | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeRequest {
  /**
   * @public
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePathRequest[];

  /**
   * @public
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePathRequest[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a Network Access Scope.</p>
 */
export interface NetworkInsightsAccessScope {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeArn?: string;

  /**
   * @public
   * <p>The creation date.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The last updated date.</p>
   */
  UpdatedDate?: Date;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Describes the Network Access Scope content.</p>
 */
export interface NetworkInsightsAccessScopeContent {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * @public
   * <p>The paths to match.</p>
   */
  MatchPaths?: AccessScopePath[];

  /**
   * @public
   * <p>The paths to exclude.</p>
   */
  ExcludePaths?: AccessScopePath[];
}

/**
 * @public
 */
export interface CreateNetworkInsightsAccessScopeResult {
  /**
   * @public
   * <p>The Network Access Scope.</p>
   */
  NetworkInsightsAccessScope?: NetworkInsightsAccessScope;

  /**
   * @public
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

/**
 * @public
 * <p>Describes a port range.</p>
 */
export interface RequestFilterPortRange {
  /**
   * @public
   * <p>The first port in the range.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The last port in the range.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * <p>Describes a set of filters for a path analysis. Use path filters to scope the analysis when
 *          there can be multiple resulting paths.</p>
 */
export interface PathRequestFilter {
  /**
   * @public
   * <p>The source IPv4 address.</p>
   */
  SourceAddress?: string;

  /**
   * @public
   * <p>The source port range.</p>
   */
  SourcePortRange?: RequestFilterPortRange;

  /**
   * @public
   * <p>The destination IPv4 address.</p>
   */
  DestinationAddress?: string;

  /**
   * @public
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: RequestFilterPortRange;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathRequest {
  /**
   * @public
   * <p>The IP address of the source.</p>
   */
  SourceIp?: string;

  /**
   * @public
   * <p>The IP address of the destination.</p>
   */
  DestinationIp?: string;

  /**
   * @public
   * <p>The ID or ARN of the source. If the resource is in another account, you must specify an ARN.</p>
   */
  Source: string | undefined;

  /**
   * @public
   * <p>The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The protocol.</p>
   */
  Protocol: Protocol | undefined;

  /**
   * @public
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * @public
   * <p>The tags to add to the path.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Scopes the analysis to network paths that match specific filters at the source. If you specify
   *           this parameter, you can't specify the parameters for the source IP address or the destination port.</p>
   */
  FilterAtSource?: PathRequestFilter;

  /**
   * @public
   * <p>Scopes the analysis to network paths that match specific filters at the destination. If you specify
   *           this parameter, you can't specify the parameter for the destination IP address.</p>
   */
  FilterAtDestination?: PathRequestFilter;
}

/**
 * @public
 * <p>Describes a port range.</p>
 */
export interface FilterPortRange {
  /**
   * @public
   * <p>The first port in the range.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The last port in the range.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * <p>Describes a set of filters for a path analysis. Use path filters to scope the analysis when
 *           there can be multiple resulting paths.</p>
 */
export interface PathFilter {
  /**
   * @public
   * <p>The source IPv4 address.</p>
   */
  SourceAddress?: string;

  /**
   * @public
   * <p>The source port range.</p>
   */
  SourcePortRange?: FilterPortRange;

  /**
   * @public
   * <p>The destination IPv4 address.</p>
   */
  DestinationAddress?: string;

  /**
   * @public
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: FilterPortRange;
}

/**
 * @public
 * <p>Describes a path.</p>
 */
export interface NetworkInsightsPath {
  /**
   * @public
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   */
  NetworkInsightsPathArn?: string;

  /**
   * @public
   * <p>The time stamp when the path was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The ID of the source.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The ID of the destination.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>The IP address of the source.</p>
   */
  SourceIp?: string;

  /**
   * @public
   * <p>The IP address of the destination.</p>
   */
  DestinationIp?: string;

  /**
   * @public
   * <p>The protocol.</p>
   */
  Protocol?: Protocol;

  /**
   * @public
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * @public
   * <p>The tags associated with the path.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Scopes the analysis to network paths that match specific filters at the source.</p>
   */
  FilterAtSource?: PathFilter;

  /**
   * @public
   * <p>Scopes the analysis to network paths that match specific filters at the destination.</p>
   */
  FilterAtDestination?: PathFilter;
}

/**
 * @public
 */
export interface CreateNetworkInsightsPathResult {
  /**
   * @public
   * <p>Information about the path.</p>
   */
  NetworkInsightsPath?: NetworkInsightsPath;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceCreationType = {
  branch: "branch",
  efa: "efa",
  trunk: "trunk",
} as const;

/**
 * @public
 */
export type NetworkInterfaceCreationType =
  (typeof NetworkInterfaceCreationType)[keyof typeof NetworkInterfaceCreationType];

/**
 * @public
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * @public
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range.</p>
   *          <p>You can't specify a count of IPv6 addresses using this parameter if you've specified
   *             one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.</p>
   *          <p>If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set, you can
   *             override that setting by specifying 0 as the IPv6 address count.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * @public
   * <p>The IPv6 addresses from the IPv6 CIDR block range of your subnet.</p>
   *          <p>You can't specify IPv6 addresses using this parameter if you've specified one of the
   *             following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @public
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *             <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The private IPv4 addresses.</p>
   *          <p>You can't specify private IPv4 addresses if you've specified one of the following:
   *             a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @public
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *          <p>You can't specify a count of private IPv4 addresses if you've specified one of the following:
   *             specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * @public
   * <p>The IPv4 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv4 prefixes if you've specified one of the following:
   *             a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface.</p>
   *          <p>You can't specify a count of IPv4 prefixes if you've specified one of the following:
   *             specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4
   *             addresses.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * @public
   * <p>The IPv6 prefixes assigned to the network interface.</p>
   *          <p>You can't specify IPv6 prefixes if you've specified one of the following:
   *             a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * @public
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface.</p>
   *          <p>You can't specify a count of IPv6 prefixes if you've specified one of the following:
   *             specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * @public
   * <p>The type of network interface. The default is <code>interface</code>.</p>
   *          <p>The only supported values are <code>interface</code>, <code>efa</code>, and <code>trunk</code>.</p>
   */
  InterfaceType?: NetworkInterfaceCreationType;

  /**
   * @public
   * <p>The ID of the subnet to associate with the network interface.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the new network interface.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>If you’re creating a network interface in a dual-stack or IPv6-only subnet, you have
   *             the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA
   *             address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that
   *             this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services
   *             will automatically assign an IPv6 address associated with the ENI attached to your
   *             instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a
   *             primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary
   *             IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is
   *             terminated or the network interface is detached. If you have multiple IPv6 addresses
   *             associated with an ENI attached to your instance and you enable a primary IPv6 address,
   *             the first IPv6 GUA address associated with the ENI becomes the primary IPv6
   *             address.</p>
   */
  EnablePrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 */
export interface NetworkInterfaceAssociation {
  /**
   * @public
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * @public
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * @public
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * @public
   * <p>The address of the Elastic IP address bound to the network
   *             interface.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * @public
   * <p>The carrier IP address associated with the network interface.</p>
   *          <p>This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierIp?: string;
}

/**
 * @public
 * <p>Describes the ENA Express configuration for UDP traffic on the network interface that's attached to
 * 			the instance.</p>
 */
export interface AttachmentEnaSrdUdpSpecification {
  /**
   * @public
   * <p>Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting,
   * 			you must first enable ENA Express.</p>
   */
  EnaSrdUdpEnabled?: boolean;
}

/**
 * @public
 * <p>Describes the ENA Express configuration for the network interface that's attached to the instance.</p>
 */
export interface AttachmentEnaSrdSpecification {
  /**
   * @public
   * <p>Indicates whether ENA Express is enabled for the network interface that's attached to the
   * 			instance.</p>
   */
  EnaSrdEnabled?: boolean;

  /**
   * @public
   * <p>ENA Express configuration for UDP network traffic.</p>
   */
  EnaSrdUdpSpecification?: AttachmentEnaSrdUdpSpecification;
}

/**
 * @public
 * <p>Describes a network interface attachment.</p>
 */
export interface NetworkInterfaceAttachment {
  /**
   * @public
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * @public
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * @public
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * @public
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * @public
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus;

  /**
   * @public
   * <p>Configures ENA Express for the network interface that this action attaches to the instance.</p>
   */
  EnaSrdSpecification?: AttachmentEnaSrdSpecification;
}

/**
 * @public
 * <p>Describes a security group.</p>
 */
export interface GroupIdentifier {
  /**
   * @public
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  api_gateway_managed: "api_gateway_managed",
  aws_codestar_connections_managed: "aws_codestar_connections_managed",
  branch: "branch",
  efa: "efa",
  gateway_load_balancer: "gateway_load_balancer",
  gateway_load_balancer_endpoint: "gateway_load_balancer_endpoint",
  global_accelerator_managed: "global_accelerator_managed",
  interface: "interface",
  iot_rules_managed: "iot_rules_managed",
  lambda: "lambda",
  load_balancer: "load_balancer",
  natGateway: "natGateway",
  network_load_balancer: "network_load_balancer",
  quicksight: "quicksight",
  transit_gateway: "transit_gateway",
  trunk: "trunk",
  vpc_endpoint: "vpc_endpoint",
} as const;

/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * @public
 * <p>Describes an IPv6 address associated with a network interface.</p>
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * @public
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;

  /**
   * @public
   * <p>Determines if an IPv6 address associated with a network interface is the primary IPv6 address. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html">ModifyNetworkInterfaceAttribute</a>.</p>
   */
  IsPrimaryIpv6?: boolean;
}

/**
 * @public
 * <p>Describes the IPv6 prefix.</p>
 */
export interface Ipv6PrefixSpecification {
  /**
   * @public
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

/**
 * @public
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * @public
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * @public
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * @public
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfaceStatus = {
  associated: "associated",
  attaching: "attaching",
  available: "available",
  detaching: "detaching",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type NetworkInterfaceStatus = (typeof NetworkInterfaceStatus)[keyof typeof NetworkInterfaceStatus];

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * @public
   * <p>The network interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * @public
   * <p>The type of network interface.</p>
   */
  InterfaceType?: NetworkInterfaceType;

  /**
   * @public
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * @public
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * @public
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];

  /**
   * @public
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];

  /**
   * @public
   * <p>The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   */
  RequesterId?: string;

  /**
   * @public
   * <p>Indicates whether the network interface is being managed by Amazon Web Services.</p>
   */
  RequesterManaged?: boolean;

  /**
   * @public
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * @public
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Indicates whether a network interface with an IPv6 address is unreachable from the
   *             public internet. If the value is <code>true</code>, inbound traffic from the internet
   *             is dropped and you cannot assign an elastic IP address to the network interface. The
   *             network interface is reachable from peered VPCs and resources connected through a
   *             transit gateway, including on-premises networks.</p>
   */
  DenyAllIgwTraffic?: boolean;

  /**
   * @public
   * <p>Indicates whether this is an IPv6 only network interface.</p>
   */
  Ipv6Native?: boolean;

  /**
   * @public
   * <p>The IPv6 globally unique address associated with the network interface.</p>
   */
  Ipv6Address?: string;
}

/**
 * @public
 */
export interface CreateNetworkInterfaceResult {
  /**
   * @public
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: NetworkInterface;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const InterfacePermissionType = {
  EIP_ASSOCIATE: "EIP-ASSOCIATE",
  INSTANCE_ATTACH: "INSTANCE-ATTACH",
} as const;

/**
 * @public
 */
export type InterfacePermissionType = (typeof InterfacePermissionType)[keyof typeof InterfacePermissionType];

/**
 * @public
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Service. Currently not supported.</p>
   */
  AwsService?: string;

  /**
   * @public
   * <p>The type of permission to grant.</p>
   */
  Permission: InterfacePermissionType | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const NetworkInterfacePermissionStateCode = {
  granted: "granted",
  pending: "pending",
  revoked: "revoked",
  revoking: "revoking",
} as const;

/**
 * @public
 */
export type NetworkInterfacePermissionStateCode =
  (typeof NetworkInterfacePermissionStateCode)[keyof typeof NetworkInterfacePermissionStateCode];

/**
 * @public
 * <p>Describes the state of a network interface permission.</p>
 */
export interface NetworkInterfacePermissionState {
  /**
   * @public
   * <p>The state of the permission.</p>
   */
  State?: NetworkInterfacePermissionStateCode;

  /**
   * @public
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 * <p>Describes a permission for a network interface.</p>
 */
export interface NetworkInterfacePermission {
  /**
   * @public
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Service.</p>
   */
  AwsService?: string;

  /**
   * @public
   * <p>The type of permission.</p>
   */
  Permission?: InterfacePermissionType;

  /**
   * @public
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: NetworkInterfacePermissionState;
}

/**
 * @public
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * @public
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: NetworkInterfacePermission;
}

/**
 * @public
 * @enum
 */
export const SpreadLevel = {
  host: "host",
  rack: "rack",
} as const;

/**
 * @public
 */
export type SpreadLevel = (typeof SpreadLevel)[keyof typeof SpreadLevel];

/**
 * @public
 * @enum
 */
export const PlacementStrategy = {
  cluster: "cluster",
  partition: "partition",
  spread: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategy = (typeof PlacementStrategy)[keyof typeof PlacementStrategy];

/**
 * @public
 */
export interface CreatePlacementGroupRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *          <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy;

  /**
   * @public
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * @public
   * <p>The tags to apply to the new placement group.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
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
  SpreadLevel?: SpreadLevel;
}

/**
 * @public
 * @enum
 */
export const PlacementGroupState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type PlacementGroupState = (typeof PlacementGroupState)[keyof typeof PlacementGroupState];

/**
 * @public
 * <p>Describes a placement group.</p>
 */
export interface PlacementGroup {
  /**
   * @public
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The state of the placement group.</p>
   */
  State?: PlacementGroupState;

  /**
   * @public
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy;

  /**
   * @public
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * @public
   * <p>The ID of the placement group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>Any tags applied to the placement group.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the placement group.</p>
   */
  GroupArn?: string;

  /**
   * @public
   * <p>The spread level for the placement group. <i>Only</i> Outpost placement
   *             groups can be spread across hosts.</p>
   */
  SpreadLevel?: SpreadLevel;
}

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
export const RequestLaunchTemplateDataFilterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateRequestFilterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: RequestLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionRequestFilterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: RequestLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const ResponseLaunchTemplateDataFilterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchTemplateVersionFilterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const CreateLaunchTemplateVersionResultFilterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateVersion && {
    LaunchTemplateVersion: LaunchTemplateVersionFilterSensitiveLog(obj.LaunchTemplateVersion),
  }),
});
