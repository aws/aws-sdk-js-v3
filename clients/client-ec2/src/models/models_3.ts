// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountAttribute,
  AccountAttributeName,
  Address,
  AddressAttribute,
  AddressAttributeName,
  AddressTransfer,
  BundleTask,
  BundleTaskFilterSensitiveLog,
  ByoipCidr,
  CapacityReservationFleetState,
  InstanceEventWindowState,
  Tag,
  TagSpecification,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";

import {
  CapacityReservation,
  CapacityReservationTenancy,
  CarrierGateway,
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipCidr,
  CoipPool,
  Ec2InstanceConnectEndpoint,
  FleetCapacityReservation,
  FleetCapacityReservationTenancy,
  FleetInstanceMatchCriteria,
  GatewayType,
  Ipam,
  IpamExternalResourceVerificationToken,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
} from "./models_1";

import {
  LocalGatewayRoute,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  ManagedPrefixList,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  SubnetCidrReservation,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  VpcBlockPublicAccessExclusion,
  VpcEndpoint,
} from "./models_2";

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
 * @public
 * @enum
 */
export const ConnectionNotificationState = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ConnectionNotificationState =
  (typeof ConnectionNotificationState)[keyof typeof ConnectionNotificationState];

/**
 * @public
 * @enum
 */
export const ConnectionNotificationType = {
  Topic: "Topic",
} as const;

/**
 * @public
 */
export type ConnectionNotificationType = (typeof ConnectionNotificationType)[keyof typeof ConnectionNotificationType];

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
 * @public
 * @enum
 */
export const PayerResponsibility = {
  ServiceOwner: "ServiceOwner",
} as const;

/**
 * @public
 */
export type PayerResponsibility = (typeof PayerResponsibility)[keyof typeof PayerResponsibility];

/**
 * @public
 * @enum
 */
export const DnsNameState = {
  Failed: "failed",
  PendingVerification: "pendingVerification",
  Verified: "verified",
} as const;

/**
 * @public
 */
export type DnsNameState = (typeof DnsNameState)[keyof typeof DnsNameState];

/**
 * <p>Information about the private DNS name for the service endpoint.</p>
 * @public
 */
export interface PrivateDnsNameConfiguration {
  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>>Consumers
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
 * @public
 * @enum
 */
export const ServiceState = {
  Available: "Available",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Failed: "Failed",
  Pending: "Pending",
} as const;

/**
 * @public
 */
export type ServiceState = (typeof ServiceState)[keyof typeof ServiceState];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  Gateway: "Gateway",
  GatewayLoadBalancer: "GatewayLoadBalancer",
  Interface: "Interface",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

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
 * @public
 * @enum
 */
export const ServiceConnectivityType = {
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;

/**
 * @public
 */
export type ServiceConnectivityType = (typeof ServiceConnectivityType)[keyof typeof ServiceConnectivityType];

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
   * <p>The Availability Zones in which the service is available.</p>
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
 * @enum
 */
export const TunnelInsideIpVersion = {
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;

/**
 * @public
 */
export type TunnelInsideIpVersion = (typeof TunnelInsideIpVersion)[keyof typeof TunnelInsideIpVersion];

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
 * @public
 * @enum
 */
export const GatewayAssociationState = {
  associated: "associated",
  associating: "associating",
  disassociating: "disassociating",
  not_associated: "not-associated",
} as const;

/**
 * @public
 */
export type GatewayAssociationState = (typeof GatewayAssociationState)[keyof typeof GatewayAssociationState];

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
}

/**
 * @public
 * @enum
 */
export const VpnStaticRouteSource = {
  Static: "Static",
} as const;

/**
 * @public
 */
export type VpnStaticRouteSource = (typeof VpnStaticRouteSource)[keyof typeof VpnStaticRouteSource];

/**
 * @public
 * @enum
 */
export const VpnState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type VpnState = (typeof VpnState)[keyof typeof VpnState];

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
 * @public
 * @enum
 */
export const TelemetryStatus = {
  DOWN: "DOWN",
  UP: "UP",
} as const;

/**
 * @public
 */
export type TelemetryStatus = (typeof TelemetryStatus)[keyof typeof TelemetryStatus];

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
 * @public
 * @enum
 */
export const FleetStateCode = {
  ACTIVE: "active",
  DELETED: "deleted",
  DELETED_RUNNING: "deleted_running",
  DELETED_TERMINATING_INSTANCES: "deleted_terminating",
  FAILED: "failed",
  MODIFYING: "modifying",
  SUBMITTED: "submitted",
} as const;

/**
 * @public
 */
export type FleetStateCode = (typeof FleetStateCode)[keyof typeof FleetStateCode];

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
 * @public
 * @enum
 */
export const DeleteFleetErrorCode = {
  FLEET_ID_DOES_NOT_EXIST: "fleetIdDoesNotExist",
  FLEET_ID_MALFORMED: "fleetIdMalformed",
  FLEET_NOT_IN_DELETABLE_STATE: "fleetNotInDeletableState",
  UNEXPECTED_ERROR: "unexpectedError",
} as const;

/**
 * @public
 */
export type DeleteFleetErrorCode = (typeof DeleteFleetErrorCode)[keyof typeof DeleteFleetErrorCode];

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
 * @public
 * @enum
 */
export const LaunchTemplateErrorCode = {
  LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST: "launchTemplateIdDoesNotExist",
  LAUNCH_TEMPLATE_ID_MALFORMED: "launchTemplateIdMalformed",
  LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST: "launchTemplateNameDoesNotExist",
  LAUNCH_TEMPLATE_NAME_MALFORMED: "launchTemplateNameMalformed",
  LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST: "launchTemplateVersionDoesNotExist",
  UNEXPECTED_ERROR: "unexpectedError",
} as const;

/**
 * @public
 */
export type LaunchTemplateErrorCode = (typeof LaunchTemplateErrorCode)[keyof typeof LaunchTemplateErrorCode];

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
   * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
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
 * @public
 * @enum
 */
export const DeleteQueuedReservedInstancesErrorCode = {
  RESERVED_INSTANCES_ID_INVALID: "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE: "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR: "unexpected-error",
} as const;

/**
 * @public
 */
export type DeleteQueuedReservedInstancesErrorCode =
  (typeof DeleteQueuedReservedInstancesErrorCode)[keyof typeof DeleteQueuedReservedInstancesErrorCode];

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

/**
 * @public
 */
export interface DeleteVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the services.</p>
   * @public
   */
  ServiceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the service configurations that were not deleted, if
   *             applicable.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 * @public
 */
export interface DeleteVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

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
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 * @public
 */
export interface DeleteVpnConnectionRouteRequest {
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
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 * @public
 */
export interface DeleteVpnGatewayRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  VpnGatewayId: string | undefined;

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
export interface DeprovisionByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. The prefix must be the same prefix
   *          that you specified when you provisioned the address range.</p>
   * @public
   */
  Cidr: string | undefined;

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
export interface DeprovisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IPAM ID.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>An ASN.</p>
   * @public
   */
  Asn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AsnState = {
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
} as const;

/**
 * @public
 */
export type AsnState = (typeof AsnState)[keyof typeof AsnState];

/**
 * <p>The Autonomous System Number (ASN) and BYOIP CIDR association.</p>
 * @public
 */
export interface Byoasn {
  /**
   * <p>A public 2-byte or 4-byte ASN.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>An IPAM ID.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The provisioning state of the BYOASN.</p>
   * @public
   */
  State?: AsnState | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamByoasnResult {
  /**
   * <p>An ASN and BYOIP CIDR association.</p>
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the pool that has the CIDR you want to deprovision.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR which you want to deprovision from the pool.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPoolCidrFailureCode = {
  cidr_not_available: "cidr-not-available",
  limit_exceeded: "limit-exceeded",
} as const;

/**
 * @public
 */
export type IpamPoolCidrFailureCode = (typeof IpamPoolCidrFailureCode)[keyof typeof IpamPoolCidrFailureCode];

/**
 * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
 * @public
 */
export interface IpamPoolCidrFailureReason {
  /**
   * <p>An error code related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  Code?: IpamPoolCidrFailureCode | undefined;

  /**
   * <p>A message related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPoolCidrState = {
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_import: "failed-import",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_import: "pending-import",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
} as const;

/**
 * @public
 */
export type IpamPoolCidrState = (typeof IpamPoolCidrState)[keyof typeof IpamPoolCidrState];

/**
 * <p>A CIDR provisioned to an IPAM pool.</p>
 * @public
 */
export interface IpamPoolCidr {
  /**
   * <p>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask)
   *          and refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The state of the CIDR.</p>
   * @public
   */
  State?: IpamPoolCidrState | undefined;

  /**
   * <p>Details related to why an IPAM pool CIDR failed to be provisioned.</p>
   * @public
   */
  FailureReason?: IpamPoolCidrFailureReason | undefined;

  /**
   * <p>The IPAM pool CIDR ID.</p>
   * @public
   */
  IpamPoolCidrId?: string | undefined;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.</p>
   * @public
   */
  NetmaskLength?: number | undefined;
}

/**
 * @public
 */
export interface DeprovisionIpamPoolCidrResult {
  /**
   * <p>The deprovisioned pool CIDR.</p>
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the pool that you want to deprovision the CIDR from.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The CIDR you want to deprovision from the pool.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DeprovisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you deprovisioned the CIDR from.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The deprovisioned CIDRs.</p>
   * @public
   */
  DeprovisionedAddresses?: string[] | undefined;
}

/**
 * <p>Contains the parameters for DeregisterImage.</p>
 * @public
 */
export interface DeregisterImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Specifies whether to delete the snapshots associated with the AMI during
   *       deregistration.</p>
   *          <note>
   *             <p>If a snapshot is associated with multiple AMIs, it is not deleted, regardless of this setting.</p>
   *          </note>
   *          <p>Default: The snapshots are not deleted.</p>
   * @public
   */
  DeleteAssociatedSnapshots?: boolean | undefined;

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
 * @enum
 */
export const SnapshotReturnCodes = {
  ERROR_CODE_CLIENT_ERROR: "client-error",
  ERROR_CODE_INTERNAL_ERROR: "internal-error",
  ERROR_MISSING_PERMISSIONS: "missing-permissions",
  SUCCESS: "success",
  WARN_SKIPPED: "skipped",
} as const;

/**
 * @public
 */
export type SnapshotReturnCodes = (typeof SnapshotReturnCodes)[keyof typeof SnapshotReturnCodes];

/**
 * <p>The snapshot ID and its deletion result code.</p>
 * @public
 */
export interface DeleteSnapshotReturnCode {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The result code from the snapshot deletion attempt. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>success</code> - The snapshot was successfully deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>skipped</code> - The snapshot was not deleted because it's associated with other
   *           AMIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>missing-permissions</code> - The snapshot was not deleted because the role lacks
   *             <code>DeleteSnapshot</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/security_iam_service-with-iam.html">How
   *             Amazon EBS works with IAM</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>internal-error</code> - The snapshot was not deleted due to a server
   *           error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client-error</code> - The snapshot was not deleted due to a client configuration
   *           error.</p>
   *             </li>
   *          </ul>
   *          <p>For details about an error, check the <code>DeleteSnapshot</code> event in the CloudTrail
   *       event history. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/tutorial-event-history.html">View event history</a>
   *       in the <i>Amazon Web Services CloudTrail User Guide</i>.</p>
   * @public
   */
  ReturnCode?: SnapshotReturnCodes | undefined;
}

/**
 * @public
 */
export interface DeregisterImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The deletion result for each snapshot associated with the AMI, including the snapshot ID
   *       and its success or error code.</p>
   * @public
   */
  DeleteSnapshotResults?: DeleteSnapshotReturnCode[] | undefined;
}

/**
 * <p>Information about the tag keys to deregister for the current Region. You can either
 *          specify individual tag keys or deregister all tag keys in the current Region. You must
 *          specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the
 *          request</p>
 * @public
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to deregister all tag keys in the current Region. Specify
   *             <code>false</code> to deregister all tag keys.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * <p>Information about the tag keys to deregister.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Information about the tag keys to deregister.</p>
   * @public
   */
  InstanceTagAttribute: DeregisterInstanceTagAttributeRequest | undefined;
}

/**
 * <p>Describes the registered tag keys for the current Region.</p>
 * @public
 */
export interface InstanceTagNotificationAttribute {
  /**
   * <p>The registered tag keys.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;

  /**
   * <p>Indicates wheter all tag keys in the current Region are registered to appear in
   *          scheduled event notifications. <code>true</code> indicates that all tag keys in the current
   *          Region are registered.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;
}

/**
 * @public
 */
export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The IDs of the group members' network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The network interface IDs of the deregistered members.</p>
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the deregistered members.</p>
   * @public
   */
  DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The IDs of the group sources' network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 * @public
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The network interface IDs of the non-registered members.</p>
   * @public
   */
  DeregisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the deregistered group sources.</p>
   * @public
   */
  DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The account attribute names.</p>
   * @public
   */
  AttributeNames?: AccountAttributeName[] | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * <p>Information about the account attributes.</p>
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
 *            results that match all of the specified filters.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Filtering.html#Filtering_Resources_CLI">List and filter using the CLI and API</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a
   *          filter, the values are joined with an <code>OR</code>, and the request returns all results
   *          that match any of the specified values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * <p>One or more Elastic IP addresses.</p>
   *          <p>Default: Describes all your Elastic IP addresses.</p>
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allocation-id</code> - The allocation ID for the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The association ID for the address.</p>
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
   *                   <code>network-interface-id</code> - The ID of the network interface that the address is associated with, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-owner-id</code> - The Amazon Web Services account ID of the owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IP address associated with the Elastic IP address.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Information about the allocation IDs.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * <p>Information about the Elastic IP addresses.</p>
   * @public
   */
  Addresses?: Address[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation IDs.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   * @public
   */
  Attribute?: AddressAttributeName | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
export interface DescribeAddressesAttributeResult {
  /**
   * <p>Information about the IP addresses.</p>
   * @public
   */
  Addresses?: AddressAttribute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressTransfersRequest {
  /**
   * <p>The allocation IDs of Elastic IP addresses.</p>
   * @public
   */
  AllocationIds?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of address transfers to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
export interface DescribeAddressTransfersResult {
  /**
   * <p>The Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfers?: AddressTransfer[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the ID format for a resource.</p>
 * @public
 */
export interface IdFormat {
  /**
   * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
   * @public
   */
  Deadline?: Date | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
   * @public
   */
  UseLongIds?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAggregateIdFormatResult {
  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
   *             This value is only <code>true</code> if all users are configured to use longer IDs for
   *             all resources types in the Region.</p>
   * @public
   */
  UseLongIdsAggregated?: boolean | undefined;

  /**
   * <p>Information about each resource's ID format.</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesRequest {
  /**
   * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  ZoneNames?: string[] | undefined;

  /**
   * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  ZoneIds?: string[] | undefined;

  /**
   * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
   *       opt-in status.</p>
   *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
   * @public
   */
  AllAvailabilityZones?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-long-name</code> - The long name of the zone group for the Availability Zone (for
   *           example, <code>US West (Oregon) 1</code>), the Local Zone (for example, for Zone group <code>us-west-2-lax-1</code>, it is <code>US West (Los Angeles)</code>,
   *           or the Wavelength Zone (for example, for Zone group <code>us-east-1-wl1</code>, it is <code>US East (Verizon)</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the zone group for the Availability Zone (for
   *           example, <code>us-east-1-zg-1</code>), the Local Zone (for example, <code>us-west-2-lax-1</code>),
   *           or the Wavelength Zone (for example, <code>us-east-1-wl1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>message</code> - The Zone message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code> |
   *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zone-id</code> - The ID of the zone that handles some of the Local Zone
   *           and Wavelength Zone control plane operations, such as API calls.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parent-zone-name</code> - The ID of the zone that handles some of the Local Zone
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
   *           Wavelength Zone (<code>available</code> | <code>unavailable</code> |
   *             <code>constrained</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
   *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
   *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-name</code> - The name of the Availability Zone (for example,
   *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
   *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zone-type</code> - The type of zone (<code>availability-zone</code> |
   *           <code>local-zone</code> | <code>wavelength-zone</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 * @public
 */
export interface AvailabilityZoneMessage {
  /**
   * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opt_in_not_required: "opt-in-not-required",
  opted_in: "opted-in",
} as const;

/**
 * @public
 */
export type AvailabilityZoneOptInStatus =
  (typeof AvailabilityZoneOptInStatus)[keyof typeof AvailabilityZoneOptInStatus];

/**
 * @public
 * @enum
 */
export const AvailabilityZoneState = {
  available: "available",
  constrained: "constrained",
  impaired: "impaired",
  information: "information",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type AvailabilityZoneState = (typeof AvailabilityZoneState)[keyof typeof AvailabilityZoneState];

/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>For Availability Zones, this parameter always has the value of
   *         <code>opt-in-not-required</code>.</p>
   *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
   *       values are <code>opted-in</code> and <code>not-opted-in</code>.</p>
   * @public
   */
  OptInStatus?: AvailabilityZoneOptInStatus | undefined;

  /**
   * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  Messages?: AvailabilityZoneMessage[] | undefined;

  /**
   * <p>The name of the Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
   * @public
   */
  ZoneId?: string | undefined;

  /**
   * <p>The name of the zone group. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Availability Zones - <code>us-east-1-zg-1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Local Zones - <code>us-west-2-lax-1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Wavelength Zones - <code>us-east-1-wl1-bos-wlz-1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name of the network border group.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The type of zone.</p>
   *          <p>Valid values: <code>availability-zone</code> | <code>local-zone</code> |
   *         <code>wavelength-zone</code>
   *          </p>
   * @public
   */
  ZoneType?: string | undefined;

  /**
   * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   * @public
   */
  ParentZoneName?: string | undefined;

  /**
   * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
   *       operations, such as API calls.</p>
   * @public
   */
  ParentZoneId?: string | undefined;

  /**
   * <p>The long name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   * @public
   */
  GroupLongName?: string | undefined;

  /**
   * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone. The possible values are
   *         <code>available</code>, <code>unavailable</code>, and <code>constrained</code>.</p>
   * @public
   */
  State?: AvailabilityZoneState | undefined;
}

/**
 * @public
 */
export interface DescribeAvailabilityZonesResult {
  /**
   * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

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
 * @enum
 */
export const MetricType = {
  aggregate_latency: "aggregate-latency",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const PeriodType = {
  fifteen_minutes: "fifteen-minutes",
  five_minutes: "five-minutes",
  one_day: "one-day",
  one_hour: "one-hour",
  one_week: "one-week",
  three_hours: "three-hours",
} as const;

/**
 * @public
 */
export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];

/**
 * @public
 * @enum
 */
export const StatisticType = {
  p50: "p50",
} as const;

/**
 * @public
 */
export type StatisticType = (typeof StatisticType)[keyof typeof StatisticType];

/**
 * <p>Describes an Infrastructure Performance subscription.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The Region or Availability Zone that's the source for the subscription. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the target for the subscription. For example, <code>eu-west-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the subscription.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the subscription.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The data aggregation time for the subscription.</p>
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Describes the current Infrastructure Performance subscriptions.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksRequest {
  /**
   * <p>The bundle task IDs.</p>
   *          <p>Default: Describes all your bundle tasks.</p>
   * @public
   */
  BundleIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   *                   <code>progress</code> - The level of task completion, as a percentage (for example,
   *           20%).</p>
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
   *                   <code>start-time</code> - The time the task started (for example,
   *           2013-09-15T17:15:20.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the task (<code>pending</code> |
   *             <code>waiting-for-shutdown</code> | <code>bundling</code> | <code>storing</code> |
   *             <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-time</code> - The time of the most recent update for the task.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleTasksResult {
  /**
   * <p>Information about the bundle tasks.</p>
   * @public
   */
  BundleTasks?: BundleTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeByoipCidrsResult {
  /**
   * <p>Information about your address ranges.</p>
   * @public
   */
  ByoipCidrs?: ByoipCidr[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryRequest {
  /**
   * <p>The IDs of Capacity Block reservations that you want to display the history
   * 			for.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The Availability Zone ID of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-block-extension-offering-id</code> - The ID of the extension
   * 					offering.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-block-extension-status</code> - The status of the extension
   * 						(<code>payment-pending</code> | <code>payment-failed</code> |
   * 						<code>payment-succeeded</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>capacity-reservation-id</code> - The reservation ID of the
   * 					extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type of the extension.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityBlockExtensionStatus = {
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  PAYMENT_SUCCEEDED: "payment-succeeded",
} as const;

/**
 * @public
 */
export type CapacityBlockExtensionStatus =
  (typeof CapacityBlockExtensionStatus)[keyof typeof CapacityBlockExtensionStatus];

/**
 * <p>Describes a Capacity Block extension. With an extension, you can extend the duration
 * 			of time for an existing Capacity Block.</p>
 * @public
 */
export interface CapacityBlockExtension {
  /**
   * <p>The reservation ID of the Capacity Block extension.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block extension.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block extension.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block extension.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block extension.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Capacity Block extension offering.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * <p>The duration of the Capacity Block extension in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * <p>The status of the Capacity Block extension. A Capacity Block extension can have one of
   * 			the following statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>payment-pending</code> - The Capacity Block extension payment is
   * 					processing. If your payment can't be processed within 12 hours, the Capacity
   * 					Block extension is failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-failed</code> - Payment for the Capacity Block extension request
   * 					was not successful.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-succeeded</code> - Payment for the Capacity Block extension
   * 					request was successful. You receive an invoice that reflects the one-time
   * 					upfront payment. In the invoice, you can associate the paid amount with the
   * 					Capacity Block reservation ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityBlockExtensionStatus?: CapacityBlockExtensionStatus | undefined;

  /**
   * <p>The date when the Capacity Block extension was purchased.</p>
   * @public
   */
  CapacityBlockExtensionPurchaseDate?: Date | undefined;

  /**
   * <p>The start date of the Capacity Block extension.</p>
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * <p>The end date of the Capacity Block extension.</p>
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * <p>The total price to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block extension.</p>
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionHistoryResult {
  /**
   * <p>Describes one or more of your Capacity Block extensions. The results describe only the
   * 			Capacity Block extensions in the Amazon Web Services Region that you're currently using.</p>
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The duration of the Capacity Block extension offering in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours: number | undefined;

  /**
   * <p>The ID of the Capacity reservation to be extended.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The recommended Capacity Block extension that fits your search requirements.</p>
 * @public
 */
export interface CapacityBlockExtensionOffering {
  /**
   * <p>The ID of the Capacity Block extension offering.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block that will be extended.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block extension offering.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block that will be extended.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block that will be extended.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The start date of the Capacity Block that will be extended.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block extension will start. This date is also
   * 			the same as the end date of the Capacity Block that will be extended.</p>
   * @public
   */
  CapacityBlockExtensionStartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block extension expires. When a Capacity Block
   * 			expires, the reserved capacity is released and you can no longer launch instances into
   * 			it. The Capacity Block's state changes to <code>expired</code> when it reaches its end
   * 			date</p>
   * @public
   */
  CapacityBlockExtensionEndDate?: Date | undefined;

  /**
   * <p>The amount of time of the Capacity Block extension offering in hours.</p>
   * @public
   */
  CapacityBlockExtensionDurationHours?: number | undefined;

  /**
   * <p>The total price of the Capacity Block extension offering, to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block extension offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Block extension offering. A Capacity Block can
   * 			have one of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Block is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Block is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockExtensionOfferingsResult {
  /**
   * <p>The recommended Capacity Block extension offerings for the dates specified.</p>
   * @public
   */
  CapacityBlockExtensionOfferings?: CapacityBlockExtensionOffering[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The type of instance for which the Capacity Block offering reserves capacity.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity. Each Capacity Block can have up
   * 			to 64 instances, and you can have up to 256 instances across Capacity Blocks.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The earliest start date for the Capacity Block offering.</p>
   * @public
   */
  StartDateRange?: Date | undefined;

  /**
   * <p>The latest end date for the Capacity Block offering.</p>
   * @public
   */
  EndDateRange?: Date | undefined;

  /**
   * <p>The reservation duration for the Capacity Block, in hours. You must specify the
   * 			duration in 1-day increments up 14 days, and in 7-day increments up to 182 days.</p>
   * @public
   */
  CapacityDurationHours: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block offerings.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The number of EC2 UltraServers in the offerings.</p>
   * @public
   */
  UltraserverCount?: number | undefined;
}

/**
 * <p>The recommended Capacity Block that fits your search requirements.</p>
 * @public
 */
export interface CapacityBlockOffering {
  /**
   * <p>The ID of the Capacity Block offering.</p>
   * @public
   */
  CapacityBlockOfferingId?: string | undefined;

  /**
   * <p>The instance type of the Capacity Block offering.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block offering.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of instances in the Capacity Block offering.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The start date of the Capacity Block offering.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The end date of the Capacity Block offering.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The number of hours (in addition to <code>capacityBlockDurationMinutes</code>) for the
   * 			duration of the Capacity Block reservation. For example, if a Capacity Block starts at
   * 				<b>04:55</b> and ends at <b>11:30</b>, the hours field would be <b>6</b>.</p>
   * @public
   */
  CapacityBlockDurationHours?: number | undefined;

  /**
   * <p>The total price to be paid up front.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency of the payment for the Capacity Block.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The tenancy of the Capacity Block.</p>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block offering.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The number of EC2 UltraServers in the offering.</p>
   * @public
   */
  UltraserverCount?: number | undefined;

  /**
   * <p>The number of minutes (in addition to <code>capacityBlockDurationHours</code>) for the
   * 			duration of the Capacity Block reservation. For example, if a Capacity Block starts at
   * 				<b>08:55</b> and ends at <b>11:30</b>, the minutes field would be <b>35</b>.</p>
   * @public
   */
  CapacityBlockDurationMinutes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockOfferingsResult {
  /**
   * <p>The recommended Capacity Block offering for the dates specified.</p>
   * @public
   */
  CapacityBlockOfferings?: CapacityBlockOffering[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksRequest {
  /**
   * <p>The IDs of the Capacity Blocks.</p>
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> One or more filters. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>capacity-block-id</code> - The ID of the Capacity Block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ultraserver-type</code> - The Capacity Block type. The type can be
   * 					<code>instances</code> or <code>ultraservers</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity
   * 					Block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Block was
   * 					started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Block expires.
   * 					When a Capacity Block expires, all instances in the Capacity Block are
   * 					terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The date and time at which the Capacity Block was
   * 					created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Capacity Block (<code>active</code> |
   * 					<code>expired</code> | <code>unavailable</code> | <code>cancelled</code> |
   * 					<code>failed</code> | <code>scheduled</code> | <code>payment-pending</code> |
   * 					<code>payment-failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tags</code> - The tags assigned to the Capacity Block.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityBlockResourceState = {
  active: "active",
  cancelled: "cancelled",
  expired: "expired",
  failed: "failed",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  scheduled: "scheduled",
  unavailable: "unavailable",
} as const;

/**
 * @public
 */
export type CapacityBlockResourceState = (typeof CapacityBlockResourceState)[keyof typeof CapacityBlockResourceState];

/**
 * <p>Reserve powerful GPU instances on a future date to support your short duration machine learning (ML) workloads. Instances that run inside a Capacity Block are automatically placed close together inside <a href="http://aws.amazon.com/ec2/ultraclusters/">Amazon EC2 UltraClusters</a>, for low-latency, petabit-scale, non-blocking networking.</p>
 *          <p>You can also reserve Amazon EC2 UltraServers. UltraServers connect multiple EC2 instances using a low-latency, high-bandwidth accelerator interconnect (NeuronLink). They are built to tackle very large-scale AI/ML workloads that require significant processing power. For more information, see Amazon EC2 UltraServers.</p>
 * @public
 */
export interface CapacityBlock {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The EC2 UltraServer type of the Capacity Block.</p>
   * @public
   */
  UltraserverType?: string | undefined;

  /**
   * <p>The Availability Zone of the Capacity Block.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the Capacity Block.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The date and time at which the Capacity Block was started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block expires. When a Capacity Block expires,
   * 			all instances in the Capacity Block are terminated.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Block was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The state of the Capacity Block.</p>
   * @public
   */
  State?: CapacityBlockResourceState | undefined;

  /**
   * <p>The tags assigned to the Capacity Block.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlocksResult {
  /**
   * <p>The Capacity Blocks.</p>
   * @public
   */
  CapacityBlocks?: CapacityBlock[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusRequest {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>interconnect-status</code> - The status of the interconnect for the Capacity Block (<code>ok</code> | <code>impaired</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the availability of capacity for a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservationStatus {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The combined amount of <code>Available</code> and <code>Unavailable</code> capacity in the Capacity Reservation.</p>
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the amount of resources that can be launched into the Capacity Reservation.</p>
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * <p>The used capacity. Indicates that the capacity is in use by resources that are running in the Capacity Reservation.</p>
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityBlockInterconnectStatus = {
  impaired: "impaired",
  insufficient_data: "insufficient-data",
  ok: "ok",
} as const;

/**
 * @public
 */
export type CapacityBlockInterconnectStatus =
  (typeof CapacityBlockInterconnectStatus)[keyof typeof CapacityBlockInterconnectStatus];

/**
 * <p>Describes the availability of capacity for a Capacity Block.</p>
 * @public
 */
export interface CapacityBlockStatus {
  /**
   * <p>The ID of the Capacity Block.</p>
   * @public
   */
  CapacityBlockId?: string | undefined;

  /**
   * <p>The status of the high-bandwidth accelerator interconnect. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ok</code> the accelerator interconnect is healthy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>impaired</code> - accelerator interconnect communication is impaired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>insufficient-data</code> - insufficient data to determine accelerator interconnect status.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InterconnectStatus?: CapacityBlockInterconnectStatus | undefined;

  /**
   * <p>The combined amount of <code>Available</code> and <code>Unavailable</code> capacity in the Capacity Block.</p>
   * @public
   */
  TotalCapacity?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the number of resources that can be launched into the Capacity Block.</p>
   * @public
   */
  TotalAvailableCapacity?: number | undefined;

  /**
   * <p>The unavailable capacity. Indicates the instance capacity that is unavailable for use
   * 			due to a system status check failure.</p>
   * @public
   */
  TotalUnavailableCapacity?: number | undefined;

  /**
   * <p>The availability of capacity for the Capacity Block reservations.</p>
   * @public
   */
  CapacityReservationStatuses?: CapacityReservationStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityBlockStatusResult {
  /**
   * <p>The availability of capacity for a Capacity Block.</p>
   * @public
   */
  CapacityBlockStatuses?: CapacityBlockStatus[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CallerRole = {
  odcr_owner: "odcr-owner",
  unused_reservation_billing_owner: "unused-reservation-billing-owner",
} as const;

/**
 * @public
 */
export type CallerRole = (typeof CallerRole)[keyof typeof CallerRole];

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>odcr-owner</code> - If you are the Capacity Reservation owner, specify
   * 					this value to view requests that you have initiated. Not supported with the
   * 						<code>requested-by</code> filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unused-reservation-billing-owner</code> - If you are the consumer
   * 					account, specify this value to view requests that have been sent to you. Not
   * 					supported with the <code>unused-reservation-billing-owner</code> filter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Role: CallerRole | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status</code> - The state of the request (<code>pending</code> |
   * 						<code>accepted</code> | <code>rejected</code> | <code>cancelled</code> |
   * 						<code>revoked</code> | <code>expired</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requested-by</code> - The account ID of the Capacity Reservation owner
   * 					that initiated the request. Not supported if you specify
   * 						<code>requested-by</code> for <b>Role</b>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unused-reservation-billing-owner</code> - The ID of the consumer account
   * 					to which the request was sent. Not supported if you specify
   * 						<code>unused-reservation-billing-owner</code> for <b>Role</b>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservationInfo {
  /**
   * <p>The instance type for the Capacity Reservation.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Availability Zone for the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The tenancy of the Capacity Reservation.</p>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationBillingRequestStatus = {
  accepted: "accepted",
  cancelled: "cancelled",
  expired: "expired",
  pending: "pending",
  rejected: "rejected",
  revoked: "revoked",
} as const;

/**
 * @public
 */
export type CapacityReservationBillingRequestStatus =
  (typeof CapacityReservationBillingRequestStatus)[keyof typeof CapacityReservationBillingRequestStatus];

/**
 * <p>Information about a request to assign billing of the unused capacity of a Capacity
 * 			Reservation.</p>
 * @public
 */
export interface CapacityReservationBillingRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that initiated the request.</p>
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account to which the request was sent.</p>
   * @public
   */
  UnusedReservationBillingOwnerId?: string | undefined;

  /**
   * <p>The date and time, in UTC time format, at which the request was initiated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The status of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-billing-transfers.html"> View billing assignment
   * 				requests for a shared Amazon EC2 Capacity Reservation</a>.</p>
   * @public
   */
  Status?: CapacityReservationBillingRequestStatus | undefined;

  /**
   * <p>Information about the status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Information about the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationInfo?: CapacityReservationInfo | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationBillingRequestsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the request.</p>
   * @public
   */
  CapacityReservationBillingRequests?: CapacityReservationBillingRequest[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsRequest {
  /**
   * <p>The IDs of the Capacity Reservation Fleets to describe.</p>
   * @public
   */
  CapacityReservationFleetIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Fleet (<code>submitted</code> |
   * 						<code>modifying</code> | <code>active</code> |
   * 						<code>partially_fulfilled</code> | <code>expiring</code> |
   * 						<code>expired</code> | <code>cancelling</code> | <code>cancelled</code> |
   * 						<code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - The instance matching criteria for the
   * 					Fleet. Only <code>open</code> is supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - The tenancy of the Fleet (<code>default</code> |
   * 						<code>dedicated</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allocation-strategy</code> - The allocation strategy used by the Fleet.
   * 					Only <code>prioritized</code> is supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a Capacity Reservation Fleet.</p>
 * @public
 */
export interface CapacityReservationFleet {
  /**
   * <p>The ID of the Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * <p>The ARN of the Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetArn?: string | undefined;

  /**
   * <p>The state of the Capacity Reservation Fleet. Possible states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>submitted</code> - The Capacity Reservation Fleet request has been
   * 					submitted and Amazon Elastic Compute Cloud is preparing to create the Capacity
   * 					Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modifying</code> - The Capacity Reservation Fleet is being modified. The
   * 					Fleet remains in this state until the modification is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The Capacity Reservation Fleet has fulfilled its total
   * 					target capacity and it is attempting to maintain this capacity. The Fleet
   * 					remains in this state until it is modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>partially_fulfilled</code> - The Capacity Reservation Fleet has
   * 					partially fulfilled its total target capacity. There is insufficient Amazon EC2 to fulfill the total target capacity. The Fleet is attempting to
   * 					asynchronously fulfill its total target capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiring</code> - The Capacity Reservation Fleet has reach its end date
   * 					and it is in the process of expiring. One or more of its Capacity reservations
   * 					might still be active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation Fleet has reach its end date.
   * 					The Fleet and its Capacity Reservations are expired. The Fleet can't create new
   * 					Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelling</code> - The Capacity Reservation Fleet is in the process of
   * 					being cancelled. One or more of its Capacity reservations might still be
   * 					active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation Fleet has been manually
   * 					cancelled. The Fleet and its Capacity Reservations are cancelled and the Fleet
   * 					can't create new Capacity Reservations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation Fleet failed to reserve
   * 					capacity for the specified instance types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: CapacityReservationFleetState | undefined;

  /**
   * <p>The total number of capacity units for which the Capacity Reservation Fleet reserves
   * 			capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The capacity units that have been fulfilled.</p>
   * @public
   */
  TotalFulfilledCapacity?: number | undefined;

  /**
   * <p>The tenancy of the Capacity Reservation Fleet. Tenancies include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation Fleet is created on hardware
   * 					that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation Fleet is created on
   * 					single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: FleetCapacityReservationTenancy | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation Fleet accepts.
   * 			All Capacity Reservations in the Fleet inherit this instance matching criteria.</p>
   *          <p>Currently, Capacity Reservation Fleets support <code>open</code> instance matching
   * 			criteria only. This means that instances that have matching attributes (instance type,
   * 			platform, and Availability Zone) run in the Capacity Reservations automatically.
   * 			Instances do not need to explicitly target a Capacity Reservation Fleet to use its
   * 			reserved capacity.</p>
   * @public
   */
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;

  /**
   * <p>The strategy used by the Capacity Reservation Fleet to determine which of the
   * 			specified instance types to use. For more information, see For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#allocation-strategy">Allocation
   * 				strategy</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  AllocationStrategy?: string | undefined;

  /**
   * <p>Information about the instance types for which to reserve the capacity.</p>
   * @public
   */
  InstanceTypeSpecifications?: FleetCapacityReservation[] | undefined;

  /**
   * <p>The tags assigned to the Capacity Reservation Fleet.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets.</p>
   * @public
   */
  CapacityReservationFleets?: CapacityReservationFleet[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance for which the Capacity
   * 					Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the
   * 					Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-platform</code> - The type of operating system for which the
   * 					Capacity Reservation reserves capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the Capacity
   * 					Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A
   * 					Capacity Reservation can have one of the following tenancy settings:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>default</code> - The Capacity Reservation is created on hardware
   * 							that is shared with other Amazon Web Services accounts.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>dedicated</code> - The Capacity Reservation is created on
   * 							single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on
   * 					which the Capacity Reservation was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity
   * 					Reservation can be in one of the following states:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code>- The Capacity Reservation is active and the
   * 							capacity is available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>expired</code> - The Capacity Reservation expired automatically
   * 							at the date and time specified in your request. The reserved capacity is
   * 							no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The
   * 							reserved capacity is no longer available for your use.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code> - The Capacity Reservation request was successful
   * 							but the capacity provisioning is still pending.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code> - The Capacity Reservation request has failed. A
   * 							request might fail due to invalid request parameters, capacity
   * 							constraints, or instance limit constraints. Failed requests are retained
   * 							for 60 minutes.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-date</code> - The date and time at which the Capacity Reservation
   * 					was started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date</code> - The date and time at which the Capacity Reservation
   * 					expires. When a Capacity Reservation expires, the reserved capacity is released
   * 					and you can no longer launch instances into it. The Capacity Reservation's state
   * 					changes to expired when it reaches its end date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end-date-type</code> - Indicates the way in which the Capacity
   * 					Reservation ends. A Capacity Reservation can have one of the following end
   * 					types:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>unlimited</code> - The Capacity Reservation remains active until
   * 							you explicitly cancel it.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>limited</code> - The Capacity Reservation expires automatically
   * 							at a specified date and time.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-match-criteria</code> - Indicates the type of instance launches
   * 					that the Capacity Reservation accepts. The options include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>open</code> - The Capacity Reservation accepts all instances
   * 							that have matching attributes (instance type, platform, and Availability
   * 							Zone). Instances that have matching attributes launch into the Capacity
   * 							Reservation automatically without specifying any additional
   * 							parameters.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>targeted</code> - The Capacity Reservation only accepts
   * 							instances that have matching attributes (instance type, platform, and
   * 							Availability Zone), and explicitly target the Capacity Reservation. This
   * 							ensures that only permitted instances can use the reserved
   * 							capacity.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>placement-group-arn</code> - The ARN of the cluster placement group in
   * 					which the Capacity Reservation was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the Capacity Reservations.</p>
   * @public
   */
  CapacityReservations?: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface DescribeCarrierGatewaysRequest {
  /**
   * <p>One or more carrier gateway IDs.</p>
   * @public
   */
  CarrierGatewayIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
   *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the carrier gateway.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @internal
 */
export const VpnTunnelOptionsSpecificationFilterSensitiveLog = (obj: VpnTunnelOptionsSpecification): any => ({
  ...obj,
  ...(obj.PreSharedKey && { PreSharedKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VpnConnectionOptionsSpecificationFilterSensitiveLog = (obj: VpnConnectionOptionsSpecification): any => ({
  ...obj,
  ...(obj.TunnelOptions && {
    TunnelOptions: obj.TunnelOptions.map((item) => VpnTunnelOptionsSpecificationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateVpnConnectionRequestFilterSensitiveLog = (obj: CreateVpnConnectionRequest): any => ({
  ...obj,
  ...(obj.Options && { Options: VpnConnectionOptionsSpecificationFilterSensitiveLog(obj.Options) }),
});

/**
 * @internal
 */
export const TunnelOptionFilterSensitiveLog = (obj: TunnelOption): any => ({
  ...obj,
  ...(obj.PreSharedKey && { PreSharedKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VpnConnectionOptionsFilterSensitiveLog = (obj: VpnConnectionOptions): any => ({
  ...obj,
  ...(obj.TunnelOptions && { TunnelOptions: obj.TunnelOptions.map((item) => TunnelOptionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const VpnConnectionFilterSensitiveLog = (obj: VpnConnection): any => ({
  ...obj,
  ...(obj.Options && { Options: VpnConnectionOptionsFilterSensitiveLog(obj.Options) }),
  ...(obj.CustomerGatewayConfiguration && { CustomerGatewayConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVpnConnectionResultFilterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const DeleteVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: DeleteVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const DescribeBundleTasksResultFilterSensitiveLog = (obj: DescribeBundleTasksResult): any => ({
  ...obj,
  ...(obj.BundleTasks && { BundleTasks: obj.BundleTasks.map((item) => BundleTaskFilterSensitiveLog(item)) }),
});
