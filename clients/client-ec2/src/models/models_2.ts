import {
  _InstanceType,
  AccountAttribute,
  AccountAttributeName,
  ActiveInstance,
  Address,
  AddressAttribute,
  AddressAttributeName,
  AssociationStatus,
  BundleTask,
  ByoipCidr,
  CapacityReservation,
  CapacityReservationFleetState,
  CarrierGateway,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatus,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CurrencyCodeValues,
  CustomerGateway,
  DefaultTargetCapacityType,
  DhcpOptions,
  EgressOnlyInternetGateway,
  FleetCapacityReservation,
  FleetCapacityReservationTenancy,
  FleetCapacityReservationUsageStrategy,
  FleetExcessCapacityTerminationPolicy,
  FleetInstanceMatchCriteria,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  GatewayType,
  InstanceEventWindowState,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  Tag,
  TagSpecification,
  TargetCapacityUnitType,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TransportProtocol,
  UnsuccessfulItem,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";
import {
  DestinationFileFormat,
  DiskImageFormat,
  ExportTask,
  FleetLaunchTemplateOverrides,
  GroupIdentifier,
  InstanceLifecycle,
  LaunchTemplate,
  LaunchTemplateAndOverridesResponse,
  LocalGatewayRoute,
  LocalGatewayRouteTableVpcAssociation,
  LogDestinationType,
  ManagedPrefixList,
  PlatformValues,
  SubnetCidrReservation,
  TrafficType,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
} from "./models_1";

export enum ConnectionNotificationState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum ConnectionNotificationType {
  Topic = "Topic",
}

/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 */
export interface ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: ConnectionNotificationType | string;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];

  /**
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: ConnectionNotificationState | string;
}

export namespace ConnectionNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionNotification): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: ConnectionNotification;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointConnectionNotificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointConnectionNotificationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted. To accept a request, use <a>AcceptVpcEndpointConnections</a>.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Network Load Balancers for your
   *             service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more Gateway Load Balancers.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to associate with the service.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointServiceConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationRequest): any => ({
    ...obj,
  });
}

export enum DnsNameState {
  Failed = "failed",
  PendingVerification = "pendingVerification",
  Verified = "verified",
}

/**
 * <p>Information about the private DNS name for the service endpoint. For more information
 *             about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   */
  State?: DnsNameState | string;

  /**
   * <p>The endpoint service verification type, for example TXT.</p>
   */
  Type?: string;

  /**
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   */
  Value?: string;

  /**
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   */
  Name?: string;
}

export namespace PrivateDnsNameConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameConfiguration): any => ({
    ...obj,
  });
}

export enum ServiceState {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  Pending = "Pending",
}

export enum ServiceType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface ServiceTypeDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceType | string;
}

export namespace ServiceTypeDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTypeDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The service state.</p>
   */
  ServiceState?: ServiceState | string;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Information about the endpoint service private DNS name configuration.</p>
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];
}

export namespace ServiceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceConfiguration): any => ({
    ...obj,
  });
}

export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: ServiceConfiguration;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointServiceConfigurationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointServiceConfigurationResult): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Web Services account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your Amazon Web Services account ID</p>
   */
  PeerOwnerId?: string;

  /**
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   * 		       <p>Default: The Region in which you make the request.</p>
   */
  PeerRegion?: string;

  /**
   * <p>The tags to assign to the peering connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcPeeringConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
}

export namespace CreateVpcPeeringConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

export type TunnelInsideIpVersion = "ipv4" | "ipv6";

/**
 * <p>The IKE version that is permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsRequestListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

export namespace IKEVersionsRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IKEVersionsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase1DHGroupNumbersRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1DHGroupNumbersRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1EncryptionAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1IntegrityAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase2DHGroupNumbersRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2DHGroupNumbersRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2EncryptionAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2IntegrityAlgorithmsRequestListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The tunnel options for a single VPN tunnel.</p>
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IPv4 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same virtual private gateway. </p>
   *         <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The
   *             following CIDR blocks are reserved and cannot be used:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>169.254.0.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.1.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.2.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.3.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.4.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.5.0/30</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>169.254.169.252/30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *         <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and customer gateway.</p>
   *         <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 28,800.</p>
   *         <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *         <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *         <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *         <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *         <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *         <p>Constraints: A value between 0 and 100.</p>
   *         <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *         <p>Constraints: A value between 64 and 2048.</p>
   *         <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *         <p>Constraints: A value between 0 and 30.</p>
   *         <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *         <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *         <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *         <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *         <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *         <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *         <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *         <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *         <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;
}

export namespace VpnTunnelOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnTunnelOptionsSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * <p>Indicate whether to enable acceleration for the VPN connection.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a VPN
   *             connection for a device that does not support BGP, you must specify <code>true</code>.
   *             Use <a>CreateVpnConnectionRoute</a> to create a static route.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   *         <p>Default: <code>ipv4</code>
   *          </p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[];

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *         <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *         <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;
}

export namespace VpnConnectionOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnectionOptionsSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   */
  Type: string | undefined;

  /**
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you
   *             cannot specify a transit gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private
   *             gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The options for the VPN connection.</p>
   */
  Options?: VpnConnectionOptionsSpecification;

  /**
   * <p>The tags to apply to the VPN connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpnConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionRequest): any => ({
    ...obj,
  });
}

export enum GatewayAssociationState {
  associated = "associated",
  associating = "associating",
  disassociating = "disassociating",
  not_associated = "not-associated",
}

/**
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsListValue {
  /**
   * <p>The IKE version.</p>
   */
  Value?: string;
}

export namespace IKEVersionsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IKEVersionsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase1DHGroupNumbersListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1EncryptionAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase1IntegrityAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase1IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

export namespace Phase2DHGroupNumbersListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2DHGroupNumbersListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2EncryptionAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2EncryptionAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

export namespace Phase2IntegrityAlgorithmsListValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Phase2IntegrityAlgorithmsListValue): any => ({
    ...obj,
  });
}

/**
 * <p>The VPN tunnel options.</p>
 */
export interface TunnelOption {
  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code>
   *             during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * <p>The action to take after a DPD timeout occurs.</p>
   */
  DpdTimeoutAction?: string;

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[];

  /**
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[];

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: IKEVersionsListValue[];

  /**
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   */
  StartupAction?: string;
}

export namespace TunnelOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TunnelOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptions {
  /**
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   */
  EnableAcceleration?: boolean;

  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be
   *             used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion | string;

  /**
   * <p>Indicates the VPN tunnel options.</p>
   */
  TunnelOptions?: TunnelOption[];
}

export namespace VpnConnectionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnectionOptions): any => ({
    ...obj,
  });
}

export type VpnStaticRouteSource = "Static";

export type VpnState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface VpnStaticRoute {
  /**
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: VpnStaticRouteSource | string;

  /**
   * <p>The current state of the static route.</p>
   */
  State?: VpnState | string;
}

export namespace VpnStaticRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnStaticRoute): any => ({
    ...obj,
  });
}

export type TelemetryStatus = "DOWN" | "UP";

/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *             interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: TelemetryStatus | string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;
}

export namespace VgwTelemetry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VgwTelemetry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPN connection.</p>
 */
export interface VpnConnection {
  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native
   *             XML format). This element is always present in the <a>CreateVpnConnection</a>
   *             response; however, it's present in the <a>DescribeVpnConnections</a> response
   *             only if the VPN connection is in the <code>pending</code> or <code>available</code>
   *             state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an Amazon Web Services VPN connection. A value of <code>VPN-Classic</code> indicates an Amazon Web Services Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>The current state of the VPN connection.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ARN of the core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ARN of the core network attachment.</p>
   */
  CoreNetworkAttachmentArn?: string;

  /**
   * <p>The current state of the gateway association.</p>
   */
  GatewayAssociationState?: GatewayAssociationState | string;

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: VpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: VpnStaticRoute[];

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: VgwTelemetry[];
}

export namespace VpnConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export namespace CreateVpnConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace CreateVpnConnectionRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnConnectionRouteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayRequest {
  /**
   * <p>The Availability Zone for the virtual private gateway.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   */
  Type: GatewayType | string | undefined;

  /**
   * <p>The tags to apply to the virtual private gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If
   *             you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a
   *             32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   *         <p>Default: 64512</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateVpnGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway.</p>
 */
export interface VpnGateway {
  /**
   * <p>The Availability Zone where the virtual private gateway was created, if applicable.
   *             This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: VpnState | string;

  /**
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: GatewayType | string;

  /**
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: VpcAttachment[];

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP
   *             session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Tag[];
}

export namespace VpnGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpnGateway): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayResult {
  /**
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: VpnGateway;
}

export namespace CreateVpnGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpnGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayRequest {
  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCarrierGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteCarrierGatewayResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

export namespace DeleteCarrierGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCarrierGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnEndpointResult {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

export namespace DeleteClientVpnEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnEndpointResult): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target subnet used by the route.</p>
   */
  TargetVpcSubnetId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteClientVpnRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteClientVpnRouteResult {
  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

export namespace DeleteClientVpnRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClientVpnRouteResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set.</p>
   */
  DhcpOptionsId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteDhcpOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

export namespace DeleteEgressOnlyInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnCode?: boolean;
}

export namespace DeleteEgressOnlyInternetGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEgressOnlyInternetGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the EC2 Fleets.</p>
   */
  FleetIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>NoTerminateInstances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
   */
  TerminateInstances: boolean | undefined;
}

export namespace DeleteFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetsRequest): any => ({
    ...obj,
  });
}

export enum FleetStateCode {
  ACTIVE = "active",
  DELETED = "deleted",
  DELETED_RUNNING = "deleted_running",
  DELETED_TERMINATING_INSTANCES = "deleted_terminating",
  FAILED = "failed",
  MODIFYING = "modifying",
  SUBMITTED = "submitted",
}

/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?: FleetStateCode | string;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?: FleetStateCode | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetSuccessItem): any => ({
    ...obj,
  });
}

export enum DeleteFleetErrorCode {
  FLEET_ID_DOES_NOT_EXIST = "fleetIdDoesNotExist",
  FLEET_ID_MALFORMED = "fleetIdMalformed",
  FLEET_NOT_IN_DELETABLE_STATE = "fleetNotInDeletableState",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface DeleteFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteFleetErrorCode | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export namespace DeleteFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteFleetError;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DeleteFleetErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetErrorItem): any => ({
    ...obj,
  });
}

export interface DeleteFleetsResult {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}

export namespace DeleteFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetsResult): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds: string[] | undefined;
}

export namespace DeleteFlowLogsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowLogsResult {
  /**
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteFlowLogsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowLogsResult): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

export namespace DeleteFpgaImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteFpgaImageResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace DeleteFpgaImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFpgaImageResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specify <code>true</code> to force delete the event window. Use the force delete parameter
   *          if the event window is currently associated with targets.</p>
   */
  ForceDelete?: boolean;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;
}

export namespace DeleteInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the event window.</p>
 */
export interface InstanceEventWindowStateChange {
  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState | string;
}

export namespace InstanceEventWindowStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowStateChange): any => ({
    ...obj,
  });
}

export interface DeleteInstanceEventWindowResult {
  /**
   * <p>The state of the event window.</p>
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange;
}

export namespace DeleteInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export interface DeleteInternetGatewayRequest {
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
}

export namespace DeleteInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInternetGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;
}

export namespace DeleteLaunchTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace DeleteLaunchTemplateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version numbers of one or more launch template versions to delete.</p>
   */
  Versions: string[] | undefined;
}

export namespace DeleteLaunchTemplateVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
}

export namespace DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseSuccessItem): any => ({
    ...obj,
  });
}

export enum LaunchTemplateErrorCode {
  LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST = "launchTemplateIdDoesNotExist",
  LAUNCH_TEMPLATE_ID_MALFORMED = "launchTemplateIdMalformed",
  LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST = "launchTemplateNameDoesNotExist",
  LAUNCH_TEMPLATE_NAME_MALFORMED = "launchTemplateNameMalformed",
  LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST = "launchTemplateVersionDoesNotExist",
  UNEXPECTED_ERROR = "unexpectedError",
}

/**
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 */
export interface ResponseError {
  /**
   * <p>The error code.</p>
   */
  Code?: LaunchTemplateErrorCode | string;

  /**
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

export namespace ResponseError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;

  /**
   * <p>Information about the error.</p>
   */
  ResponseError?: ResponseError;
}

export namespace DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResponseErrorItem): any => ({
    ...obj,
  });
}

export interface DeleteLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions that were successfully
   *             deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}

export namespace DeleteLaunchTemplateVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace DeleteLocalGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;
}

export namespace DeleteManagedPrefixListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export interface DeleteManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace DeleteManagedPrefixListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteManagedPrefixListResult): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;
}

export namespace DeleteNatGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNatGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteNatGatewayResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;
}

export namespace DeleteNatGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNatGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;
}

export namespace DeleteNetworkAclRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAclRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkAclEntryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the rule is an egress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>The rule number of the entry to delete.</p>
   */
  RuleNumber: number | undefined;
}

export namespace DeleteNetworkAclEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId: string | undefined;
}

export namespace DeleteNetworkInsightsAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;
}

export namespace DeleteNetworkInsightsAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsAnalysisResult): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsPathRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;
}

export namespace DeleteNetworkInsightsPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsPathRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkInsightsPathResult {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;
}

export namespace DeleteNetworkInsightsPathResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInsightsPathResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace DeleteNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * <p>Specify <code>true</code> to remove the permission even if the network interface is
   * 			attached to an instance.</p>
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteNetworkInterfacePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfacePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
   */
  Return?: boolean;
}

export namespace DeleteNetworkInterfacePermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkInterfacePermissionResult): any => ({
    ...obj,
  });
}

export interface DeletePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName: string | undefined;
}

export namespace DeletePlacementGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlacementGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteQueuedReservedInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Reserved Instances.</p>
   */
  ReservedInstancesIds: string[] | undefined;
}

export namespace DeleteQueuedReservedInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesRequest): any => ({
    ...obj,
  });
}

export enum DeleteQueuedReservedInstancesErrorCode {
  RESERVED_INSTANCES_ID_INVALID = "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE = "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR = "unexpected-error",
}

/**
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be deleted.</p>
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * <p>The error code.</p>
   */
  Code?: DeleteQueuedReservedInstancesErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace DeleteQueuedReservedInstancesError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * <p>The error.</p>
   */
  Error?: DeleteQueuedReservedInstancesError;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace FailedQueuedPurchaseDeletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedQueuedPurchaseDeletion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace SuccessfulQueuedPurchaseDeletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuccessfulQueuedPurchaseDeletion): any => ({
    ...obj,
  });
}

export interface DeleteQueuedReservedInstancesResult {
  /**
   * <p>Information about the queued purchases that were successfully deleted.</p>
   */
  SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];

  /**
   * <p>Information about the queued purchases that could not be deleted.</p>
   */
  FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
}

export namespace DeleteQueuedReservedInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQueuedReservedInstancesResult): any => ({
    ...obj,
  });
}

export interface DeleteRouteRequest {
  /**
   * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

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
}

export namespace DeleteRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteRouteTableRequest {
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
}

export namespace DeleteRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityGroupRequest {
  /**
   * <p>The ID of the security group. Required for a nondefault VPC.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You can specify either the security group name or the security group ID.</p>
   */
  GroupName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotRequest {
  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSpotDatafeedSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetRequest {
  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSubnetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetCidrReservationRequest {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteSubnetCidrReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetCidrReservationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetCidrReservationResult {
  /**
   * <p>Information about the deleted subnet CIDR reservation.</p>
   */
  DeletedSubnetCidrReservation?: SubnetCidrReservation;
}

export namespace DeleteSubnetCidrReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetCidrReservationResult): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags to delete. Specify a tag key and an optional tag value to delete
   *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
   *             key regardless of its value. If you specify a tag key with an empty string as the tag
   *             value, we delete the tag only if its value is an empty string.</p>
   *         <p>If you omit this parameter, we delete all user-defined tags for the specified
   *             resources. We do not delete Amazon Web Services-generated tags (tags that have the <code>aws:</code>
   *             prefix).</p>
   *          <p>Constraints: Up to 1000 tags.</p>
   */
  Tags?: Tag[];
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterResult {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;
}

export namespace DeleteTrafficMirrorFilterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorFilterRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * <p>The ID of the deleted Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;
}

export namespace DeleteTrafficMirrorFilterRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorSessionResult {
  /**
   * <p>The ID of the deleted Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;
}

export namespace DeleteTrafficMirrorSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorTargetRequest {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTrafficMirrorTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrafficMirrorTargetResult {
  /**
   * <p>The ID of the deleted Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;
}

export namespace DeleteTrafficMirrorTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrafficMirrorTargetResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayResult {
  /**
   * <p>Information about the deleted transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace DeleteTransitGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayConnectRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayConnectRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayConnectResult {
  /**
   * <p>Information about the deleted Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export namespace DeleteTransitGatewayConnectResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayConnectResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the deleted Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export namespace DeleteTransitGatewayConnectPeerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayConnectPeerResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayMulticastDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the deleted transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export namespace DeleteTransitGatewayMulticastDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the deleted prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace DeleteTransitGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteTransitGatewayRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayRouteTableResult {
  /**
   * <p>Information about the deleted transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export namespace DeleteTransitGatewayRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayVpcAttachmentRequest {
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

export namespace DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the deleted VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace DeleteTransitGatewayVpcAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface DeleteVolumeRequest {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcRequest {
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

export namespace DeleteVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more notification IDs.</p>
   */
  ConnectionNotificationIds: string[] | undefined;
}

export namespace DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointConnectionNotificationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * <p>Information about the notifications that could not be deleted
   *             successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointConnectionNotificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC endpoint IDs.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export namespace DeleteVpcEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointsResult): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds: string[] | undefined;
}

export namespace DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointServiceConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcEndpointServiceConfigurationsResult): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace DeleteVpcPeeringConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DeleteVpcPeeringConnectionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeleteVpnConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpnConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

export namespace DeleteVpnConnectionRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpnConnectionRouteRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
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

export namespace DeleteVpnGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpnGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeprovisionByoipCidrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace DeprovisionByoipCidrResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeprovisionByoipCidrResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeregisterImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
   *    		to deregister all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagKeys?: string[];
}

export namespace DeregisterInstanceTagAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterInstanceTagAttributeRequest): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to deregister.</p>
   */
  InstanceTagAttribute?: DeregisterInstanceTagAttributeRequest;
}

export namespace DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   */
  InstanceTagKeys?: string[];

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
   *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
   */
  IncludeAllTagsOfInstance?: boolean;
}

export namespace InstanceTagNotificationAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTagNotificationAttribute): any => ({
    ...obj,
  });
}

export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace DeregisterInstanceEventNotificationAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the deregistered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupMembers): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}

export namespace DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupMembersResult): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupSourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   */
  DeregisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export namespace TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDeregisteredGroupSources): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}

export namespace DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayMulticastGroupSourcesResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountAttributesRequest {
  /**
   * <p>The account attribute names.</p>
   */
  AttributeNames?: (AccountAttributeName | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAccountAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

export namespace DescribeAccountAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  Values?: string[];
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface DescribeAddressesRequest {
  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - [EC2-VPC] The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - [EC2-VPC] The association ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Indicates whether the address is for use in EC2-Classic (<code>standard</code>)
   *               or in a VPC (<code>vpc</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
   *            or Wavelength Zones from where Amazon Web Services advertises IP addresses. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - [EC2-VPC] The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - [EC2-VPC] The private IP address associated with the Elastic IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   */
  PublicIps?: string[];

  /**
   * <p>[EC2-VPC] Information about the allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAddressesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   */
  Addresses?: Address[];
}

export namespace DescribeAddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAddressesResult): any => ({
    ...obj,
  });
}

export interface DescribeAddressesAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation IDs.</p>
   */
  AllocationIds?: string[];

  /**
   * <p>The attribute of the IP address.</p>
   */
  Attribute?: AddressAttributeName | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAddressesAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAddressesAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeAddressesAttributeResult {
  /**
   * <p>Information about the IP addresses.</p>
   */
  Addresses?: AddressAttribute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeAddressesAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAddressesAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeAggregateIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAggregateIdFormatRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ID format for a resource.</p>
 */
export interface IdFormat {
  /**
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   */
  Deadline?: Date;

  /**
   * <p>The type of resource.</p>
   */
  Resource?: string;

  /**
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   */
  UseLongIds?: boolean;
}

export namespace IdFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdFormat): any => ({
    ...obj,
  });
}

export interface DescribeAggregateIdFormatResult {
  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   */
  UseLongIdsAggregated?: boolean;

  /**
   * <p>Information about each resource's ID format.</p>
   */
  Statuses?: IdFormat[];
}

export namespace DescribeAggregateIdFormatResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAggregateIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityZonesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - For Availability Zones, use the Region name. For Local
   *           Zones, use the name of the group associated with the Local Zone (for example,
   *             <code>us-west-2-lax-1</code>) For Wavelength Zones, use the name of the group associated
   *           with the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code>, and
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneID</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zoneName</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region for the Zone (for example,
   *             <code>us-east-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Availability Zone, the Local Zone, or the
   *           Wavelength Zone (<code>available</code> | <code>information</code> | <code>impaired</code>
   *           | <code>unavailable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneNames?: string[];

  /**
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  ZoneIds?: string[];

  /**
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   */
  AllAvailabilityZones?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeAvailabilityZonesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAvailabilityZonesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 */
export interface AvailabilityZoneMessage {
  /**
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Message?: string;
}

export namespace AvailabilityZoneMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZoneMessage): any => ({
    ...obj,
  });
}

export type AvailabilityZoneOptInStatus = "not-opted-in" | "opt-in-not-required" | "opted-in";

export type AvailabilityZoneState = "available" | "impaired" | "information" | "unavailable";

/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  State?: AvailabilityZoneState | string;

  /**
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
   */
  OptInStatus?: AvailabilityZoneOptInStatus | string;

  /**
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  Messages?: AvailabilityZoneMessage[];

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   */
  ZoneId?: string;

  /**
   * <p> For Availability Zones, this parameter has the same value as the Region name.</p>
   *          <p>For Local Zones, the name of the associated group, for example
   *         <code>us-west-2-lax-1</code>.</p>
   *          <p>For Wavelength Zones, the name of the associated group, for example
   *         <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   */
  GroupName?: string;

  /**
   * <p>The name of the network border group.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The type of zone. The valid values are <code>availability-zone</code>,
   *         <code>local-zone</code>, and <code>wavelength-zone</code>.</p>
   */
  ZoneType?: string;

  /**
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneName?: string;

  /**
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   */
  ParentZoneId?: string;
}

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

export interface DescribeAvailabilityZonesResult {
  /**
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export namespace DescribeAvailabilityZonesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAvailabilityZonesResult): any => ({
    ...obj,
  });
}

export interface DescribeBundleTasksRequest {
  /**
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>bundle-id</code> - The ID of the bundle task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-code</code> - If the task failed, the error code returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error-message</code> - If the task failed, the error message returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-prefix</code> - The beginning of the AMI name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> |
   *            <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeBundleTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBundleTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeBundleTasksResult {
  /**
   * <p>Information about the bundle tasks.</p>
   */
  BundleTasks?: BundleTask[];
}

export namespace DescribeBundleTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBundleTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeByoipCidrsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeByoipCidrsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeByoipCidrsRequest): any => ({
    ...obj,
  });
}

export interface DescribeByoipCidrsResult {
  /**
   * <p>Information about your address ranges.</p>
   */
  ByoipCidrs?: ByoipCidr[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeByoipCidrsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeByoipCidrsResult): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationFleetsRequest {
  /**
   * <p>The IDs of the Capacity Reservation Fleets to describe.</p>
   */
  CapacityReservationFleetIds?: string[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>state</code> - The state of the Fleet (<code>submitted</code> | <code>modifying</code> | <code>active</code> |
   * 					<code>partially_fulfilled</code> | <code>expiring</code> | <code>expired</code> | <code>cancelling</code> |
   * 					<code>cancelled</code> | <code>failed</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>instance-match-criteria</code> - The instance matching criteria for the Fleet. Only <code>open</code> is supported.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tenancy</code> - The tenancy of the Fleet (<code>default</code> | <code>dedicated</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>allocation-strategy</code> - The allocation strategy used by the Fleet. Only <code>prioritized</code> is supported.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeCapacityReservationFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityReservationFleetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Capacity Reservation Fleet.</p>
 */
export interface CapacityReservationFleet {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The ARN of the Capacity Reservation Fleet.</p>
   */
  CapacityReservationFleetArn?: string;

  /**
   * <p>The state of the Capacity Reservation Fleet. Possible states include:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been submitted
   * 					and Amazon Elastic Compute Cloud is preparing to create the Capacity Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The Fleet
   * 					remains in this state until the modification is complete.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total target
   * 					capacity and it is attempting to maintain this capacity. The Fleet remains in this
   * 					state until it is modified or deleted.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has partially
   * 					fulfilled its total target capacity. There is insufficient Amazon EC2 to
   * 					fulfill the total target capacity. The Fleet is attempting to asynchronously fulfill
   * 					its total target capacity.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date and it
   * 					is in the process of expiring. One or more of its Capacity reservations might still
   * 					be active.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date. The Fleet
   * 					and its Capacity Reservations are expired. The Fleet can't create new Capacity
   * 					Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of being
   * 					cancelled. One or more of its Capacity reservations might still be active.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually cancelled.
   * 					The Fleet and its Capacity Reservations are cancelled and the Fleet can't create new
   * 					Capacity Reservations.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve capacity for
   * 					the specified instance types.</p>
   * 			         </li>
   *          </ul>
   */
  State?: CapacityReservationFleetState | string;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves capacity.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The capacity units that have been fulfilled.</p>
   */
  TotalFulfilledCapacity?: number;

  /**
   * <p>The tenancy of the Capacity Reservation Fleet. Tenancies include:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   * 			         </li>
   *          </ul>
   */
  Tenancy?: FleetCapacityReservationTenancy | string;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   */
  EndDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   */
  CreateTime?: Date;

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
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the specified
   * 			instance types to use. For more information, see For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">
   * 				Allocation strategy</a> in the Amazon EC2 User Guide.</p>
   */
  AllocationStrategy?: string;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[];

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   */
  Tags?: Tag[];
}

export namespace CapacityReservationFleet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationFleet): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets.</p>
   */
  CapacityReservationFleets?: CapacityReservationFleet[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeCapacityReservationFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityReservationFleetsResult): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationIds?: string[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   * 	  	     <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The Availability Zone ID of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone ID of the Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the
   * 	  			following tenancy settings:</p>
   * 	  			         <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *                   </li>
   *                </ul>
   * 	  			      </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   * 	  		          <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request.
   * 	  				The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters,
   * 	  				capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p>
   * 	  		             </li>
   *                </ul>
   * 	  		       </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Reservation was started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is
   * 	  			released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p>
   * 	  		          <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *                   </li>
   *                </ul>
   * 	  		       </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p>
   * 	  			         <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances that have matching
   * 							attributes (instance type, platform, and Availability Zone). Instances
   * 							that have matching attributes launch into the Capacity Reservation
   * 							automatically without specifying any additional parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts instances that have matching
   * 							attributes (instance type, platform, and Availability Zone), and
   * 							explicitly target the Capacity Reservation. This ensures that only
   * 							permitted instances can use the reserved capacity.</p>
   *                   </li>
   *                </ul>
   * 	  		       </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeCapacityReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityReservationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeCapacityReservationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Capacity Reservations.</p>
   */
  CapacityReservations?: CapacityReservation[];
}

export namespace DescribeCapacityReservationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCapacityReservationsResult): any => ({
    ...obj,
  });
}

export interface DescribeCarrierGatewaysRequest {
  /**
   * <p>One or more carrier gateway IDs.</p>
   */
  CarrierGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
   *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeCarrierGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCarrierGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeCarrierGatewaysResult {
  /**
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateways?: CarrierGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeCarrierGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCarrierGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeClassicLinkInstancesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                       <p>
   *                   <code>group-id</code> - The ID of a VPC security group that's associated with the instance.</p>
   *                   </li>
   *             <li>
   * 				           <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *             <li>
   *
   * 				           <p>
   * 					             <code>vpc-id</code> - The ID of the VPC to which the instance is
   * 					linked.</p>
   *
   * 				           <p>
   *                   <code>vpc-id</code> - The ID of the VPC that the instance is linked to.</p>
   *
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * 		       <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeClassicLinkInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClassicLinkInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a linked EC2-Classic instance.</p>
 */
export interface ClassicLinkInstance {
  /**
   * <p>A list of security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ClassicLinkInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassicLinkInstance): any => ({
    ...obj,
  });
}

export interface DescribeClassicLinkInstancesResult {
  /**
   * <p>Information about one or more linked EC2-Classic instances.</p>
   */
  Instances?: ClassicLinkInstance[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClassicLinkInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClassicLinkInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the authorization rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the network to which the authorization rule
   *                     applies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the Active Directory group to which the authorization rule grants access.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeClientVpnAuthorizationRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnAuthorizationRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an authorization rule.</p>
 */
export interface AuthorizationRule {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the authorization rule.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
   */
  GroupId?: string;

  /**
   * <p>Indicates whether the authorization rule grants access to all clients.</p>
   */
  AccessAll?: boolean;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace AuthorizationRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationRule): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * <p>Information about the authorization rules.</p>
   */
  AuthorizationRules?: AuthorizationRule[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnAuthorizationRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnAuthorizationRulesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>connection-id</code> - The ID of the connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>username</code> - For Active Directory client authentication, the user name of the
   *                     client who established the client connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClientVpnConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnConnectionsRequest): any => ({
    ...obj,
  });
}

export type ClientVpnConnectionStatusCode = "active" | "failed-to-terminate" | "terminated" | "terminating";

/**
 * <p>Describes the status of a client connection.</p>
 */
export interface ClientVpnConnectionStatus {
  /**
   * <p>The state of the client connection.</p>
   */
  Code?: ClientVpnConnectionStatusCode | string;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  Message?: string;
}

export namespace ClientVpnConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnConnectionStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a client connection.</p>
 */
export interface ClientVpnConnection {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current date and time.</p>
   */
  Timestamp?: string;

  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The username of the client who established the client connection. This information is only provided
   * 			if Active Directory client authentication is used.</p>
   */
  Username?: string;

  /**
   * <p>The date and time the client connection was established.</p>
   */
  ConnectionEstablishedTime?: string;

  /**
   * <p>The number of bytes sent by the client.</p>
   */
  IngressBytes?: string;

  /**
   * <p>The number of bytes received by the client.</p>
   */
  EgressBytes?: string;

  /**
   * <p>The number of packets sent by the client.</p>
   */
  IngressPackets?: string;

  /**
   * <p>The number of packets received by the client.</p>
   */
  EgressPackets?: string;

  /**
   * <p>The IP address of the client.</p>
   */
  ClientIp?: string;

  /**
   * <p>The common name associated with the client. This is either the name of the client certificate,
   * 			or the Active Directory user name.</p>
   */
  CommonName?: string;

  /**
   * <p>The current state of the client connection.</p>
   */
  Status?: ClientVpnConnectionStatus;

  /**
   * <p>The date and time the client connection was terminated.</p>
   */
  ConnectionEndTime?: string;

  /**
   * <p>The statuses returned by the client connect handler for posture compliance, if applicable.</p>
   */
  PostureComplianceStatuses?: string[];
}

export namespace ClientVpnConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnConnection): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnConnectionsResult {
  /**
   * <p>Information about the active and terminated client connections.</p>
   */
  Connections?: ClientVpnConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnConnectionsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnEndpointsRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint-id</code> - The ID of the Client VPN endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-protocol</code> - The transport protocol (<code>tcp</code> |
   *                     <code>udp</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClientVpnEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnEndpointsRequest): any => ({
    ...obj,
  });
}

export type AssociatedNetworkType = "vpc";

/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface AssociatedTargetNetwork {
  /**
   * <p>The ID of the subnet.</p>
   */
  NetworkId?: string;

  /**
   * <p>The target network type.</p>
   */
  NetworkType?: AssociatedNetworkType | string;
}

export namespace AssociatedTargetNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedTargetNetwork): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Active Directory.</p>
 */
export interface DirectoryServiceAuthentication {
  /**
   * <p>The ID of the Active Directory used for authentication.</p>
   */
  DirectoryId?: string;
}

export namespace DirectoryServiceAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryServiceAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 */
export interface FederatedAuthentication {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
   */
  SamlProviderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
   */
  SelfServiceSamlProviderArn?: string;
}

export namespace FederatedAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FederatedAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface CertificateAuthentication {
  /**
   * <p>The ARN of the client certificate. </p>
   */
  ClientRootCertificateChain?: string;
}

export namespace CertificateAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthentication {
  /**
   * <p>The authentication type used.</p>
   */
  Type?: ClientVpnAuthenticationType | string;

  /**
   * <p>Information about the Active Directory, if applicable.</p>
   */
  ActiveDirectory?: DirectoryServiceAuthentication;

  /**
   * <p>Information about the authentication certificates, if applicable.</p>
   */
  MutualAuthentication?: CertificateAuthentication;

  /**
   * <p>Information about the IAM SAML identity provider, if applicable.</p>
   */
  FederatedAuthentication?: FederatedAuthentication;
}

export namespace ClientVpnAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnAuthentication): any => ({
    ...obj,
  });
}

export type ClientVpnEndpointAttributeStatusCode = "applied" | "applying";

/**
 * <p>Describes the status of the Client VPN endpoint attribute.</p>
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * <p>The status code.</p>
   */
  Code?: ClientVpnEndpointAttributeStatusCode | string;

  /**
   * <p>The status message.</p>
   */
  Message?: string;
}

export namespace ClientVpnEndpointAttributeStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnEndpointAttributeStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectResponseOptions {
  /**
   * <p>Indicates whether client connect options are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used for connection authorization.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>The status of any updates to the client connect options.</p>
   */
  Status?: ClientVpnEndpointAttributeStatus;
}

export namespace ClientConnectResponseOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientConnectResponseOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface ConnectionLogResponseOptions {
  /**
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   */
  CloudwatchLogStream?: string;
}

export namespace ConnectionLogResponseOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionLogResponseOptions): any => ({
    ...obj,
  });
}

export type VpnProtocol = "openvpn";

/**
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpoint {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;

  /**
   * <p>The date and time the Client VPN endpoint was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   */
  DeletionTime?: string;

  /**
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   */
  DnsName?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   */
  ClientCidrBlock?: string;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: string[];

  /**
   * <p>Indicates whether split-tunnel is enabled in the Client VPN endpoint.</p>
   * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel Client VPN endpoint</a>
   * 			in the <i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>The protocol used by the VPN session.</p>
   */
  VpnProtocol?: VpnProtocol | string;

  /**
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   */
  TransportProtocol?: TransportProtocol | string;

  /**
   * <p>The port number for the  Client VPN endpoint.</p>
   */
  VpnPort?: number;

  /**
   * @deprecated
   *
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?: AssociatedTargetNetwork[];

  /**
   * <p>The ARN of the server certificate.</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?: ClientVpnAuthentication[];

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: ConnectionLogResponseOptions;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IDs of the security groups for the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The URL of the self-service portal.</p>
   */
  SelfServicePortalUrl?: string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectResponseOptions;
}

export namespace ClientVpnEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnEndpoint): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnEndpointsResult {
  /**
   * <p>Information about the Client VPN endpoints.</p>
   */
  ClientVpnEndpoints?: ClientVpnEndpoint[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnEndpointsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnEndpointsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnRoutesRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>destination-cidr</code> - The CIDR of the route destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin</code> - How the route was associated with the Client VPN endpoint (<code>associate</code> | <code>add-route</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-subnet</code> - The ID of the subnet through which traffic is routed.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClientVpnRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnRoutesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface ClientVpnRoute {
  /**
   * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
   */
  DestinationCidr?: string;

  /**
   * <p>The ID of the subnet through which traffic is routed.</p>
   */
  TargetSubnet?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: string;

  /**
   * <p>Indicates how the route was associated with the Client VPN endpoint.
   * 			<code>associate</code> indicates that the route was automatically added when the target network
   * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
   * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
   */
  Origin?: string;

  /**
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;
}

export namespace ClientVpnRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientVpnRoute): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnRoutesResult {
  /**
   * <p>Information about the Client VPN endpoint routes.</p>
   */
  Routes?: ClientVpnRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnRoutesResult): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IDs of the target network associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-network-id</code> - The ID of the subnet specified as the target network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the target network is located.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeClientVpnTargetNetworksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnTargetNetworksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface TargetNetwork {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the VPC in which the target network (subnet) is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the subnet specified as the target network.</p>
   */
  TargetNetworkId?: string;

  /**
   * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;

  /**
   * <p>The IDs of the security groups applied to the target network association.</p>
   */
  SecurityGroups?: string[];
}

export namespace TargetNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetNetwork): any => ({
    ...obj,
  });
}

export interface DescribeClientVpnTargetNetworksResult {
  /**
   * <p>Information about the associated target networks.</p>
   */
  ClientVpnTargetNetworks?: TargetNetwork[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientVpnTargetNetworksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientVpnTargetNetworksResult): any => ({
    ...obj,
  });
}

export interface DescribeCoipPoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.pool-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-pool.local-gateway-route-table-id</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeCoipPoolsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCoipPoolsRequest): any => ({
    ...obj,
  });
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

export namespace CoipPool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoipPool): any => ({
    ...obj,
  });
}

export interface DescribeCoipPoolsResult {
  /**
   * <p>Information about the address pools.</p>
   */
  CoipPools?: CoipPool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeCoipPoolsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCoipPoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeConversionTasksRequest {
  /**
   * <p>The conversion task IDs.</p>
   */
  ConversionTaskIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeConversionTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConversionTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDescription {
  /**
   * <p>The checksum computed for the disk image.</p>
   */
  Checksum?: string;

  /**
   * <p>The disk image format.</p>
   */
  Format?: DiskImageFormat | string;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
   *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
   *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl?: string;

  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Size?: number;
}

export namespace DiskImageDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskImageDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a disk image volume.</p>
 */
export interface DiskImageVolumeDescription {
  /**
   * <p>The volume identifier.</p>
   */
  Id?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size?: number;
}

export namespace DiskImageVolumeDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskImageVolumeDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * <p>The Availability Zone where the resulting instance will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The status of the import of this particular disk image.</p>
   */
  Status?: string;

  /**
   * <p>The status information or errors related to the disk image.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

export namespace ImportInstanceVolumeDetailItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportInstanceVolumeDetailItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import instance task.</p>
 */
export interface ImportInstanceTaskDetails {
  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance operating system.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>The volumes.</p>
   */
  Volumes?: ImportInstanceVolumeDetailItem[];
}

export namespace ImportInstanceTaskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportInstanceTaskDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportVolumeTaskDetails {
  /**
   * <p>The Availability Zone where the resulting volume will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>The description you provided when starting the import volume task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: DiskImageDescription;

  /**
   * <p>The volume.</p>
   */
  Volume?: DiskImageVolumeDescription;
}

export namespace ImportVolumeTaskDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportVolumeTaskDetails): any => ({
    ...obj,
  });
}

export type ConversionTaskState = "active" | "cancelled" | "cancelling" | "completed";

/**
 * <p>Describes a conversion task.</p>
 */
export interface ConversionTask {
  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId?: string;

  /**
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
   *    the task.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: ImportInstanceTaskDetails;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: ImportVolumeTaskDetails;

  /**
   * <p>The state of the conversion task.</p>
   */
  State?: ConversionTaskState | string;

  /**
   * <p>The status message related to the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Tag[];
}

export namespace ConversionTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConversionTask): any => ({
    ...obj,
  });
}

export interface DescribeConversionTasksResult {
  /**
   * <p>Information about the conversion tasks.</p>
   */
  ConversionTasks?: ConversionTask[];
}

export namespace DescribeConversionTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConversionTasksResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * <p>One or more customer gateway IDs.</p>
   *         <p>Default: Describes all your customer gateways.</p>
   */
  CustomerGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP)
   *                     Autonomous System Number (ASN).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-address</code> - The IP address of the customer gateway's
   *                     Internet-routable external interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the customer gateway (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>type</code> - The type of customer gateway. Currently, the only
   *                     supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeCustomerGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomerGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * <p>Information about one or more customer gateways.</p>
   */
  CustomerGateways?: CustomerGateway[];
}

export namespace DescribeCustomerGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomerGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeDhcpOptionsRequest {
  /**
   * <p>The IDs of one or more DHCP options sets.</p>
   * 		       <p>Default: Describes all your DHCP options sets.</p>
   */
  DhcpOptionsIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>dhcp-options-id</code> - The ID of a DHCP options set.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>key</code> - The key for one of the options (for example, <code>domain-name</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>value</code> - The value for one of the options.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the DHCP options set.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeDhcpOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDhcpOptionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDhcpOptionsResult {
  /**
   * <p>Information about one or more DHCP options sets.</p>
   */
  DhcpOptions?: DhcpOptions[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeDhcpOptionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDhcpOptionsResult): any => ({
    ...obj,
  });
}

export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more egress-only internet gateway IDs.</p>
   */
  EgressOnlyInternetGatewayIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *     	    <ul>
   *             <li>
   *     			        <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *     		      </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *     		      </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEgressOnlyInternetGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * <p>Information about the egress-only internet gateways.</p>
   */
  EgressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeEgressOnlyInternetGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEgressOnlyInternetGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeElasticGpusRequest {
  /**
   * <p>The Elastic Graphics accelerator IDs.</p>
   */
  ElasticGpuIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the
   *                     Elastic Graphics accelerator resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator
   *                         (<code>OK</code> | <code>IMPAIRED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator
   *                         (<code>ATTACHED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example,
   *                         <code>eg1.medium</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance to which the
   *                     Elastic Graphics accelerator is associated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeElasticGpusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticGpusRequest): any => ({
    ...obj,
  });
}

export enum ElasticGpuStatus {
  Impaired = "IMPAIRED",
  Ok = "OK",
}

/**
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuHealth {
  /**
   * <p>The health status.</p>
   */
  Status?: ElasticGpuStatus | string;
}

export namespace ElasticGpuHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuHealth): any => ({
    ...obj,
  });
}

export enum ElasticGpuState {
  Attached = "ATTACHED",
}

/**
 * <p>Describes an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpus {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The type of Elastic Graphics accelerator.</p>
   */
  ElasticGpuType?: string;

  /**
   * <p>The status of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuHealth?: ElasticGpuHealth;

  /**
   * <p>The state of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuState?: ElasticGpuState | string;

  /**
   * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>The tags assigned to the Elastic Graphics accelerator.</p>
   */
  Tags?: Tag[];
}

export namespace ElasticGpus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpus): any => ({
    ...obj,
  });
}

export interface DescribeElasticGpusResult {
  /**
   * <p>Information about the Elastic Graphics accelerators.</p>
   */
  ElasticGpuSet?: ElasticGpus[];

  /**
   * <p>The total number of items to return. If the total number of items available is more
   *             than the value specified in max-items then a Next-Token will be provided in the output
   *             that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeElasticGpusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticGpusResult): any => ({
    ...obj,
  });
}

export interface DescribeExportImageTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
   *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the export image tasks.</p>
   */
  ExportImageTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeExportImageTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportImageTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3Location {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

export namespace ExportTaskS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTaskS3Location): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an export image task.</p>
 */
export interface ExportImageTask {
  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the export image task.</p>
   */
  Tags?: Tag[];
}

export namespace ExportImageTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportImageTask): any => ({
    ...obj,
  });
}

export interface DescribeExportImageTasksResult {
  /**
   * <p>Information about the export image tasks.</p>
   */
  ExportImageTasks?: ExportImageTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeExportImageTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportImageTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksRequest {
  /**
   * <p>The export task IDs.</p>
   */
  ExportTaskIds?: string[];

  /**
   * <p>the filters for the export tasks.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeExportTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksResult {
  /**
   * <p>Information about the export tasks.</p>
   */
  ExportTasks?: ExportTask[];
}

export namespace DescribeExportTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeFastSnapshotRestoresRequest {
  /**
   * <p>The filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code>: The Availability Zone of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the Amazon Web Services account that enabled fast snapshot restore on the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code>: The ID of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of fast snapshot restores for the snapshot
   *          (<code>enabling</code> |
   *           <code>optimizing</code> |
   *           <code>enabled</code> |
   *           <code>disabling</code> |
   *           <code>disabled</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeFastSnapshotRestoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

export type FastSnapshotRestoreStateCode = "disabled" | "disabling" | "enabled" | "enabling" | "optimizing";

/**
 * <p>Describes fast snapshot restores for a snapshot.</p>
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The reason for the state transition. The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
   *           <code>disabling</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
   *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
   *             </li>
   *          </ul>
   */
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

export namespace DescribeFastSnapshotRestoreSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

export interface DescribeFastSnapshotRestoresResult {
  /**
   * <p>Information about the state of fast snapshot restores.</p>
   */
  FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeFastSnapshotRestoresResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export enum FleetEventType {
  FLEET_CHANGE = "fleet-change",
  INSTANCE_CHANGE = "instance-change",
  SERVICE_ERROR = "service-error",
}

export interface DescribeFleetHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;
}

export namespace DescribeFleetHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface EventInformation {
  /**
   * <p>The description of the event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The event.</p>
   *
   *         <p>
   *             <code>error</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet does not have the required
   *                     permissions either to launch or terminate an instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>allLaunchSpecsTemporarilyBlacklisted</code> - None of the configurations
   *                     are valid, and several attempts to launch instances have failed. For more
   *                     information, see the description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the
   *                     number of Spot Instances that you can launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not
   *                     valid. For more information, see the description of the event.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>fleetRequestChange</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
   *                     attempting to maintain the target number of running instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled</code> - The EC2 Fleet or Spot Fleet request is canceled and has no running
   *                     instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances are
   *                     terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled_running</code> - The EC2 Fleet or Spot Fleet request is canceled and does
   *                     not launch additional instances. Its existing instances continue to run until
   *                     they are interrupted or terminated. The request remains in this state until all
   *                     instances are interrupted or terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelled_terminating</code> - The EC2 Fleet or Spot Fleet request is canceled and
   *                     its instances are terminating. The request remains in this state until all
   *                     instances are terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. If the request was
   *                     created with <code>TerminateInstancesWithExpiration</code> set, a subsequent
   *                         <code>terminated</code> event indicates that the instances are
   *                     terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modify_in_progress</code> - The EC2 Fleet or Spot Fleet request is being modified.
   *                     The request remains in this state until the modification is fully
   *                     processed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modify_succeeded</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
   *                     is preparing to launch the target number of instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>progress</code> - The EC2 Fleet or Spot Fleet request is in the process of being fulfilled.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>instanceChange</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>launched</code> - A new instance was launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>terminated</code> - An instance was terminated by the user.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>termination_notified</code> - An instance termination notification was
   *                     sent when a Spot Instance was terminated by Amazon EC2 during scale-down, when the target
   *                     capacity of the fleet was modified down, for example, from a target capacity of
   *                     4 to a target capacity of 3.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <code>Information</code> events:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>fleetProgressHalted</code> - The price in every launch specification is
   *                     not valid because it is below the Spot price (all the launch specifications have
   *                     produced <code>launchSpecUnusable</code> events). A launch specification might
   *                     become valid if the Spot price changes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
   *                     and several attempts to launch instances have failed. For more information, see
   *                     the description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launchSpecUnusable</code> - The price in a launch specification is not
   *                     valid because it is below the Spot price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>registerWithLoadBalancersFailed</code> - An attempt to register
   *                     instances with load balancers failed. For more information, see the description
   *                     of the event.</p>
   *             </li>
   *          </ul>
   */
  EventSubType?: string;

  /**
   * <p>The ID of the instance. This information is available only for
   *                 <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

export namespace EventInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface HistoryRecordEntry {
  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   */
  EventType?: FleetEventType | string;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;
}

export namespace HistoryRecordEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoryRecordEntry): any => ({
    ...obj,
  });
}

export interface DescribeFleetHistoryResult {
  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   */
  HistoryRecords?: HistoryRecordEntry[];

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more results, this value is not
   *          present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The start date and time for the events, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;
}

export namespace DescribeFleetHistoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetHistoryResult): any => ({
    ...obj,
  });
}

export interface DescribeFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeFleetInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetInstancesRequest): any => ({
    ...obj,
  });
}

export interface DescribeFleetInstancesResult {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *          date.</p>
   */
  ActiveInstances?: ActiveInstance[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export namespace DescribeFleetInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *          1000. The default value is 1000. To retrieve the remaining results, make another call with
   *          the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleets.</p>
   */
  FleetIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
   *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
   *                   <code>fulfilled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
   *                running instances if the target capacity is decreased below the current EC2 Fleet size
   *                   (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
   *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
   *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
   *                   <code>modifying</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
   *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of request (<code>instant</code> |
   *                   <code>request</code> | <code>maintain</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsRequest): any => ({
    ...obj,
  });
}

export enum FleetActivityStatus {
  ERROR = "error",
  FULFILLED = "fulfilled",
  PENDING_FULFILLMENT = "pending_fulfillment",
  PENDING_TERMINATION = "pending_termination",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface DescribeFleetError {
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
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorMessage?: string;
}

export namespace DescribeFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface DescribeFleetsInstances {
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

export namespace DescribeFleetsInstances {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsInstances): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides[];
}

export namespace FleetLaunchTemplateConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetLaunchTemplateConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type
 *             <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptions {
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

export namespace CapacityReservationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptions {
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
  CapacityReservationOptions?: CapacityReservationOptions;

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

export namespace OnDemandOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnDemandOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 */
export interface FleetSpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *          <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - EC2 Fleet launches a new replacement Spot Instance when a
   *          rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet
   *          does not terminate the instances that receive a rebalance notification. You can terminate
   *          the old instances, or you can leave them running. You are charged for all instances while
   *          they are running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - EC2 Fleet launches a new replacement Spot
   *          Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *          fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *          terminates the instances that received a rebalance notification.</p>
   */
  ReplacementStrategy?: FleetReplacementStrategy | string;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *          Instance after launching a new replacement Spot Instance.</p>
   *          <p>Valid only when <code>replacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   */
  TerminationDelay?: number;
}

export namespace FleetSpotCapacityRebalance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetSpotCapacityRebalance): any => ({
    ...obj,
  });
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
   *          elevated risk of being interrupted.</p>
   */
  CapacityRebalance?: FleetSpotCapacityRebalance;
}

export namespace FleetSpotMaintenanceStrategies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetSpotMaintenanceStrategies): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *          pools specified by the EC2 Fleet.</p>
   *          <p>
   *             <code>lowest-price</code> - EC2 Fleet launches instances from the Spot Instance pools with the lowest
   *          price.</p>
   *          <p>
   *             <code>diversified</code> - EC2 Fleet launches instances from all of the Spot Instance pools that you
   *          specify.</p>
   *          <p>
   *             <code>capacity-optimized</code> (recommended) - EC2 Fleet launches instances from Spot Instance pools
   *          with optimal capacity for the number of instances that are launching. To give certain
   *          instance types a higher chance of launching first, use
   *             <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
   *          using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *          assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *          the priorities on a best-effort basis, but optimizes for capacity first.
   *             <code>capacity-optimized-prioritized</code> is supported only if your fleet uses a
   *          launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
   *             <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *          capacity.</p>
   *          <p>Default: <code>lowest-price</code>
   *          </p>
   */
  AllocationStrategy?: SpotAllocationStrategy | string;

  /**
   * <p>The strategies for managing your workloads on your Spot Instances that will be
   *          interrupted. Currently only the capacity rebalance strategy is available.</p>
   */
  MaintenanceStrategies?: FleetSpotMaintenanceStrategies;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   *          <p>Default: <code>terminate</code>
   *          </p>
   */
  InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Supported
   *          only when <code>AllocationStrategy</code> is set to <code>lowest-price</code>. EC2 Fleet selects
   *          the cheapest Spot pools and evenly allocates your target Spot capacity across the number of
   *          Spot pools that you specify.</p>
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
   *             <code>SingleInstanceType</code>
   *          </p>
   */
  MinTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
   */
  MaxTotalPrice?: string;
}

export namespace SpotOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of
 *          instances or a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your
 *          budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet
 *          will launch instances until it reaches the maximum amount that you're willing to pay. When
 *          the maximum amount you're willing to pay is reached, the fleet stops launching instances
 *          even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are
 *          located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>.</p>
 */
export interface TargetCapacitySpecification {
  /**
   * <p>The number of units to request, filled using
   *          <code>DefaultTargetCapacityType</code>.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
   */
  SpotTargetCapacity?: number;

  /**
   * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
   *             <code>On-Demand</code>.</p>
   */
  DefaultTargetCapacityType?: DefaultTargetCapacityType | string;

  /**
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;
}

export namespace TargetCapacitySpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetCapacitySpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an EC2 Fleet.</p>
 */
export interface FleetData {
  /**
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
   *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
   *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
   *          instances are terminating.</p>
   */
  ActivityStatus?: FleetActivityStatus | string;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The state of the EC2 Fleet.</p>
   */
  FleetState?: FleetStateCode | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the
   *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target
   *          capacity.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand
   *          capacity.</p>
   */
  FulfilledOnDemandCapacity?: number;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfig[];

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of
   *          instances or a performance characteristic that is important to your application workload,
   *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
   *          specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecification;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
   *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
   *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
   *          instances if capacity is diminished, and it does not submit requests in alternative
   *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
   *          places the required requests to meet this target capacity. It also automatically
   *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *          At this point, no new instance requests are placed or able to fulfill the request. The
   *          default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
   *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
   *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: SpotOptions;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: OnDemandOptions;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: DescribeFleetError[];

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when
   *             <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: DescribeFleetsInstances[];

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export namespace FleetData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetData): any => ({
    ...obj,
  });
}

export interface DescribeFleetsResult {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the EC2 Fleets.</p>
   */
  Fleets?: FleetData[];
}

export namespace DescribeFleetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetsResult): any => ({
    ...obj,
  });
}

export interface DescribeFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
   *                     <code>FAILED</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>log-destination-type</code> - The type of destination to which the flow
   *                     log publishes data. Possible destination types include
   *                     <code>cloud-watch-logs</code> and <code>s3</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>flow-log-id</code> - The ID of the flow log.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>log-group-name</code> - The name of the log group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
   *                     <code>REJECT</code> | <code>ALL</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>One or more flow log IDs.</p>
   *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeFlowLogsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowLogsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsResponse {
  /**
   * <p>The format for the flow log.</p>
   */
  FileFormat?: DestinationFileFormat | string;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * <p>Indicates whether to partition the flow log per hour.</p>
   */
  PerHourPartition?: boolean;
}

export namespace DestinationOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationOptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a flow log.</p>
 */
export interface FlowLog {
  /**
   * <p>The date and time the flow log was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
   *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
   *             reached the limit on the number of log groups that you can create. <code>Access
   *                 error</code> indicates that the IAM role associated with the flow log does not have
   *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
   *             internal error.</p>
   */
  DeliverLogsErrorMessage?: string;

  /**
   * <p>The ARN of the IAM role that posts logs to CloudWatch Logs.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
   */
  DeliverLogsStatus?: string;

  /**
   * <p>The flow log ID.</p>
   */
  FlowLogId?: string;

  /**
   * <p>The status of the flow log (<code>ACTIVE</code>).</p>
   */
  FlowLogStatus?: string;

  /**
   * <p>The name of the flow log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The ID of the resource on which the flow log was created.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of traffic captured for the flow log.</p>
   */
  TrafficType?: TrafficType | string;

  /**
   * <p>The type of destination to which the flow log data is published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The destination to which the flow log data is published. Flow log data can be
   *             published to an CloudWatch Logs log group or an Amazon S3 bucket. If the flow log publishes to CloudWatch Logs,
   *             this element indicates the Amazon Resource Name (ARN) of the CloudWatch Logs log group to which
   *             the data is published. If the flow log publishes to Amazon S3, this element indicates the ARN
   *             of the Amazon S3 bucket to which the data is published.</p>
   */
  LogDestination?: string;

  /**
   * <p>The format of the flow log record.</p>
   */
  LogFormat?: string;

  /**
   * <p>The tags for the flow log.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
   *             regardless of the specified value.</p>
   *         <p>Valid Values: <code>60</code> | <code>600</code>
   *          </p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsResponse;
}

export namespace FlowLog {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowLog): any => ({
    ...obj,
  });
}

export interface DescribeFlowLogsResult {
  /**
   * <p>Information about the flow logs.</p>
   */
  FlowLogs?: FlowLog[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeFlowLogsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowLogsResult): any => ({
    ...obj,
  });
}

export type FpgaImageAttributeName = "description" | "loadPermission" | "name" | "productCodes";

export interface DescribeFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The AFI attribute.</p>
   */
  Attribute: FpgaImageAttributeName | string | undefined;
}

export namespace DescribeFpgaImageAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export type PermissionGroup = "all";

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermission {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;

  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;
}

export namespace LoadPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoadPermission): any => ({
    ...obj,
  });
}

export type ProductCodeValues = "devpay" | "marketplace";

/**
 * <p>Describes a product code.</p>
 */
export interface ProductCode {
  /**
   * <p>The product code.</p>
   */
  ProductCodeId?: string;

  /**
   * <p>The type of product code.</p>
   */
  ProductCodeType?: ProductCodeValues | string;
}

export namespace ProductCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProductCode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The load permissions.</p>
   */
  LoadPermissions?: LoadPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];
}

export namespace FpgaImageAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImageAttribute): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export namespace DescribeFpgaImageAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImagesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The AFI IDs.</p>
   */
  FpgaImageIds?: string[];

  /**
   * <p>Filters the AFI by owner. Specify an Amazon Web Services account ID, <code>self</code>
   * 			(owner is the sender of the request), or an Amazon Web Services owner alias (valid values are
   * 			<code>amazon</code> | <code>aws-marketplace</code>).</p>
   */
  Owners?: string[];

  /**
   * <p>The filters.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The creation time of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AFI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the AFI owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shell-version</code> - The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export namespace DescribeFpgaImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFpgaImagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface PciId {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the vendor.</p>
   */
  VendorId?: string;

  /**
   * <p>The ID of the subsystem.</p>
   */
  SubsystemId?: string;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   */
  SubsystemVendorId?: string;
}

export namespace PciId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PciId): any => ({
    ...obj,
  });
}

export type FpgaImageStateCode = "available" | "failed" | "pending" | "unavailable";

/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - AFI bitstream generation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code> - The AFI is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - AFI bitstream generation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unavailable</code> - The AFI is no longer available for use.</p>
   *             </li>
   *          </ul>
   */
  Code?: FpgaImageStateCode | string;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   */
  Message?: string;
}

export namespace FpgaImageState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImageState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImage {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The version of the Amazon Web Services Shell that was used to create the bitstream.</p>
   */
  ShellVersion?: string;

  /**
   * <p>Information about the PCI bus.</p>
   */
  PciId?: PciId;

  /**
   * <p>Information about the state of the AFI.</p>
   */
  State?: FpgaImageState;

  /**
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The ID of the Amazon Web Services account that owns the AFI.</p>
   */
  OwnerId?: string;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the AFI is public.</p>
   */
  Public?: boolean;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   */
  DataRetentionSupport?: boolean;
}

export namespace FpgaImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaImage): any => ({
    ...obj,
  });
}

export interface DescribeFpgaImagesResult {
  /**
   * <p>Information about the FPGA images.</p>
   */
  FpgaImages?: FpgaImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeFpgaImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFpgaImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationOfferingsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-family</code> - The instance family of the offering (for example,
   *                         <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
   *             Reservations are available in one-year and three-year terms. The number of seconds
   *             specified must be the number of seconds in a year (365x24x60x60) times one of the
   *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
   */
  MaxDuration?: number;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>This is the minimum duration of the reservation you'd like to purchase, specified
   *             in seconds. Reservations are available in one-year and three-year terms. The number of
   *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
   *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
   */
  MinDuration?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the reservation offering.</p>
   */
  OfferingId?: string;
}

export namespace DescribeHostReservationOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostReservationOfferingsRequest): any => ({
    ...obj,
  });
}

export enum PaymentOption {
  ALL_UPFRONT = "AllUpfront",
  NO_UPFRONT = "NoUpfront",
  PARTIAL_UPFRONT = "PartialUpfront",
}

/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface HostOffering {
  /**
   * <p>The currency of the offering.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the offering (in seconds).</p>
   */
  Duration?: number;

  /**
   * <p>The hourly price of the offering.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the offering.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId?: string;

  /**
   * <p>The available payment option.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the offering. Does not apply to No Upfront
   *             offerings.</p>
   */
  UpfrontPrice?: string;
}

export namespace HostOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostOffering): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the offerings.</p>
   */
  OfferingSet?: HostOffering[];
}

export namespace DescribeHostReservationOfferingsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostReservationOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>instance-family</code> - The instance family (for example,
   *                     <code>m4</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
   *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state</code> - The state of the reservation (<code>payment-pending</code>
   *                     | <code>payment-failed</code> | <code>active</code> |
   *                     <code>retired</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The host reservation IDs.</p>
   */
  HostReservationIdSet?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostReservationsRequest): any => ({
    ...obj,
  });
}
