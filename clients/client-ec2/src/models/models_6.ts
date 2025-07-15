// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessScopeAnalysisFinding,
  ActiveVpnTunnelStatus,
  AddressTransfer,
  AllowedImagesSettingsDisabledState,
  AllowedImagesSettingsEnabledState,
  AllowedPrincipal,
  AsnAssociation,
  AssociationStatus,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamPoolAllocation,
  IpamResourceDiscoveryAssociation,
  NatGatewayAddress,
  RouteServerAssociation,
  SecurityGroupVpcAssociationState,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPolicyTableAssociation,
  UserTrustProviderType,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
} from "./models_0";

import {
  CapacityReservationState,
  DiskImageFormat,
  InstanceRequirementsRequest,
  IpamResourceTag,
  RequestIpamResourceTag,
  Vpc,
} from "./models_1";

import {
  NetworkInsightsAccessScopeContent,
  ResponseLaunchTemplateData,
  ResponseLaunchTemplateDataFilterSensitiveLog,
  SSEType,
  VpcEndpoint,
} from "./models_2";

import {
  DnsNameState,
  Filter,
  IpamPoolCidr,
  MetricType,
  PayerResponsibility,
  PeriodType,
  ServiceConfiguration,
  ServiceConnectivityType,
  ServiceTypeDetail,
  StatisticType,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnGateway,
} from "./models_3";

import {
  ArchitectureType,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  HttpTokensState,
  InstanceMetadataEndpointState,
  InstanceMetadataTagsState,
  PaymentOption,
  VirtualizationType,
} from "./models_4";

import { AnalysisStatus, ManagedBy } from "./models_5";

/**
 * @public
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the VPC endpoints.</p>
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the endpoint services.</p>
   * @public
   */
  ServiceIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-state</code> - The state of the service (<code>Pending</code> |
   *                         <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> |
   *                         <code>Failed</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-ip-address-types</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
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
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the services.</p>
   * @public
   */
  ServiceConfigurations?: ServiceConfiguration[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>principal</code> - The ARN of the principal.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>principal-type</code> - The principal type (<code>All</code> |
   * 						<code>Service</code> | <code>OrganizationUnit</code> | <code>Account</code>
   * 					| <code>User</code> | <code>Role</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the allowed principals.</p>
   * @public
   */
  AllowedPrincipals?: AllowedPrincipal[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The service names.</p>
   * @public
   */
  ServiceNames?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>owner</code> - The ID or alias of the Amazon Web Services account that owns
   *                     the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-region</code> - The Region of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-type</code> - The type of service (<code>Interface</code> |
   *                         <code>Gateway</code> | <code>GatewayLoadBalancer</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-ip-address-types</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
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
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The service Regions.</p>
   * @public
   */
  ServiceRegions?: string[] | undefined;
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 * @public
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;
}

/**
 * <p>Describes a VPC endpoint service.</p>
 * @public
 */
export interface ServiceDetail {
  /**
   * <p>The name of the service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The type of service.</p>
   * @public
   */
  ServiceType?: ServiceTypeDetail[] | undefined;

  /**
   * <p>The Region where the service is hosted.</p>
   * @public
   */
  ServiceRegion?: string | undefined;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   * @public
   */
  Owner?: string | undefined;

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
   * <p>The private DNS names assigned to the VPC endpoint service.</p>
   * @public
   */
  PrivateDnsNames?: PrivateDnsDetails[] | undefined;

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   * @public
   */
  VpcEndpointPolicySupported?: boolean | undefined;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
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
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   * @public
   */
  PrivateDnsNameVerificationState?: DnsNameState | undefined;

  /**
   * <p>The supported IP address types.</p>
   * @public
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>The supported services.</p>
   * @public
   */
  ServiceNames?: string[] | undefined;

  /**
   * <p>Information about the service.</p>
   * @public
   */
  ServiceDetails?: ServiceDetail[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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

  /**
   * <p>The IDs of the VPC peering connections.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   * @public
   */
  VpcPeeringConnectionIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>accepter-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                     accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiration-time</code> - The expiration date and time for the VPC peering
   *           connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the
   *                     requester's VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                   requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-code</code> - The status of the VPC peering connection
   *                         (<code>pending-acceptance</code> | <code>failed</code> |
   *                         <code>expired</code> | <code>provisioning</code> | <code>active</code> |
   *                         <code>deleting</code> | <code>deleted</code> |
   *                     <code>rejected</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - A message that provides more information about the status
   *           of the VPC peering connection, if applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-peering-connection-id</code> - The ID of the VPC peering connection.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>cidr</code> - The primary IPv4 CIDR block of the VPC. The CIDR block you
   *                     specify must exactly match the VPC's CIDR block for information to be returned
   *                     for the VPC. Must contain the slash followed by one or two digits (for example,
   *                     <code>/28</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cidr-block-association.cidr-block</code> - An IPv4 CIDR block associated with the
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cidr-block-association.association-id</code> - The association ID for
   *                     an IPv4 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cidr-block-association.state</code> - The state of an IPv4 CIDR block
   *                     associated with the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dhcp-options-id</code> - The ID of a set of DHCP options.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.ipv6-pool</code> - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - The association
   *                     ID for an IPv6 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-default</code> - Indicates whether the VPC is the default VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the VPC (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the VPCs.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
export interface DescribeVpcsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the VPCs.</p>
   * @public
   */
  Vpcs?: Vpc[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 * @public
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway-configuration</code> - The configuration information
   *                     for the customer gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-gateway-id</code> - The ID of a customer gateway associated
   *                     with the VPN connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the VPN connection (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>option.static-routes-only</code> - Indicates whether the connection has
   *                     static routes only. Used for devices that do not support Border Gateway Protocol
   *                     (BGP).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-cidr-block</code> - The destination CIDR block. This
   *                     corresponds to the subnet used in a customer data center.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bgp-asn</code> - The BGP Autonomous System Number (ASN) associated with
   *                     a BGP device.</p>
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
   *                   <code>type</code> - The type of VPN connection. Currently the only supported
   *                     type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection-id</code> - The ID of the VPN connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-gateway-id</code> - The ID of a virtual private gateway associated
   *                     with the VPN connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of a transit gateway associated with
   *                     the VPN connection.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>One or more VPN connection IDs.</p>
   *          <p>Default: Describes your VPN connections.</p>
   * @public
   */
  VpnConnectionIds?: string[] | undefined;

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
 * <p>Contains the output of DescribeVpnConnections.</p>
 * @public
 */
export interface DescribeVpnConnectionsResult {
  /**
   * <p>Information about one or more VPN connections.</p>
   * @public
   */
  VpnConnections?: VpnConnection[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 * @public
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>amazon-side-asn</code> - The Autonomous System Number (ASN) for the
   *                     Amazon side of the gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.state</code> - The current state of the attachment between
   *                     the gateway and the VPC (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for the virtual private
   *                     gateway (if applicable).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the virtual private gateway
   *                         (<code>pending</code> | <code>available</code> | <code>deleting</code> |
   *                         <code>deleted</code>).</p>
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
   *                   <code>type</code> - The type of virtual private gateway. Currently the only
   *                     supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-gateway-id</code> - The ID of the virtual private gateway.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *          <p>Default: Describes all your virtual private gateways.</p>
   * @public
   */
  VpnGatewayIds?: string[] | undefined;

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
 * <p>Contains the output of DescribeVpnGateways.</p>
 * @public
 */
export interface DescribeVpnGatewaysResult {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   * @public
   */
  VpnGateways?: VpnGateway[] | undefined;
}

/**
 * @public
 */
export interface DetachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance to unlink from the VPC.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachInternetGatewayRequest {
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

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 * @public
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Use the <code>Force</code> parameter only as a last resort to detach a
   *                         network interface from a failed instance. </p>
   *                </li>
   *                <li>
   *                   <p>If you use the <code>Force</code> parameter to detach a network interface,
   *                         you might not be able to attach a different network interface to the same
   *                         index on the instance without first stopping and starting the
   *                         instance.</p>
   *                </li>
   *                <li>
   *                   <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance
   *                             metadata</a> might not get updated. This means that the attributes
   *                         associated with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>The ID of the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

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
export interface DetachVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;

  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * @public
 */
export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   * @public
   */
  Device?: string | undefined;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   * @public
   */
  Force?: boolean | undefined;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   * @public
   */
  InstanceId?: string | undefined;

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
 * <p>Contains the parameters for DetachVpnGateway.</p>
 * @public
 */
export interface DetachVpnGatewayRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

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
export interface DisableAddressTransferRequest {
  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   * @public
   */
  AllocationId: string | undefined;

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
export interface DisableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface DisableAllowedImagesSettingsRequest {
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
export interface DisableAllowedImagesSettingsResult {
  /**
   * <p>Returns <code>disabled</code> if the request succeeds; otherwise, it returns an
   *       error.</p>
   * @public
   */
  AllowedImagesSettingsState?: AllowedImagesSettingsDisabledState | undefined;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region or Availability Zone that the metric subscription is disabled for. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The target Region or Availability Zone that the metric subscription is disabled for. For example, <code>eu-north-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the disabled subscription.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the disabled subscription. </p>
   * @public
   */
  Statistic?: StatisticType | undefined;

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
export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the unsubscribe action was successful.</p>
   * @public
   */
  Output?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableEbsEncryptionByDefaultRequest {
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
export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableFastLaunchRequest {
  /**
   * <p>Specify the ID of the image for which to disable Windows fast launch.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>Forces the image settings to turn off Windows fast launch for your Windows AMI. This
   *       parameter overrides any errors that are encountered while cleaning up resources in your
   *       account.</p>
   * @public
   */
  Force?: boolean | undefined;

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
export interface DisableFastLaunchResult {
  /**
   * <p>The ID of the image for which Windows fast launch was disabled.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The pre-provisioning resource type that must be cleaned after turning off Windows fast
   *       launch for the Windows AMI. Supported values include: <code>snapshot</code>.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * <p>Parameters that were used for Windows fast launch for the Windows AMI before Windows fast
   *       launch was disabled. This informs the clean-up process.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * <p>The launch template that was used to launch Windows instances from pre-provisioned
   *       snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * <p>The owner of the Windows AMI for which Windows fast launch was disabled.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of Windows fast launch for the specified Windows AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * <p>The reason that the state changed for Windows fast launch for the Windows AMI.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The time that the state changed for Windows fast launch for the Windows AMI.</p>
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   * @public
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 * @public
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

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
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 * @public
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 * @public
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The error.</p>
   * @public
   */
  Error?: DisableFastSnapshotRestoreStateError | undefined;
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 * @public
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The errors.</p>
   * @public
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   * @public
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   * @public
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DisableImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

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
export interface DisableImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageBlockPublicAccessRequest {
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
export const ImageBlockPublicAccessDisabledState = {
  unblocked: "unblocked",
} as const;

/**
 * @public
 */
export type ImageBlockPublicAccessDisabledState =
  (typeof ImageBlockPublicAccessDisabledState)[keyof typeof ImageBlockPublicAccessDisabledState];

/**
 * @public
 */
export interface DisableImageBlockPublicAccessResult {
  /**
   * <p>Returns <code>unblocked</code> if the request succeeds; otherwise, it returns an
   *       error.</p>
   * @public
   */
  ImageBlockPublicAccessState?: ImageBlockPublicAccessDisabledState | undefined;
}

/**
 * @public
 */
export interface DisableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

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
export interface DisableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableImageDeregistrationProtectionRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

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
export interface DisableImageDeregistrationProtectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: string | undefined;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Organizations member account ID that you want to disable as IPAM account.</p>
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of disabling the IPAM account.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableRouteServerPropagationRequest {
  /**
   * <p>The ID of the route server for which to disable propagation.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the route table for which to disable route server propagation.</p>
   * @public
   */
  RouteTableId: string | undefined;

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
 * @enum
 */
export const RouteServerPropagationState = {
  AVAILABLE: "available",
  DELETING: "deleting",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type RouteServerPropagationState =
  (typeof RouteServerPropagationState)[keyof typeof RouteServerPropagationState];

/**
 * <p>Describes the route propagation configuration between a route server and a route table.</p>
 *          <p>When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation.</p>
 * @public
 */
export interface RouteServerPropagation {
  /**
   * <p>The ID of the route server configured for route propagation.</p>
   * @public
   */
  RouteServerId?: string | undefined;

  /**
   * <p>The ID of the route table configured for route server propagation.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The current state of route propagation.</p>
   * @public
   */
  State?: RouteServerPropagationState | undefined;
}

/**
 * @public
 */
export interface DisableRouteServerPropagationResult {
  /**
   * <p>Information about the disabled route server propagation.</p>
   * @public
   */
  RouteServerPropagation?: RouteServerPropagation | undefined;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotBlockPublicAccessRequest {
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
export const SnapshotBlockPublicAccessState = {
  block_all_sharing: "block-all-sharing",
  block_new_sharing: "block-new-sharing",
  unblocked: "unblocked",
} as const;

/**
 * @public
 */
export type SnapshotBlockPublicAccessState =
  (typeof SnapshotBlockPublicAccessState)[keyof typeof SnapshotBlockPublicAccessState];

/**
 * @public
 */
export interface DisableSnapshotBlockPublicAccessResult {
  /**
   * <p>Returns <code>unblocked</code> if the request succeeds.</p>
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayPropagationState = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  enabling: "enabling",
} as const;

/**
 * @public
 */
export type TransitGatewayPropagationState =
  (typeof TransitGatewayPropagationState)[keyof typeof TransitGatewayPropagationState];

/**
 * <p>Describes route propagation.</p>
 * @public
 */
export interface TransitGatewayPropagation {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state.</p>
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   * @public
   */
  Propagation?: TransitGatewayPropagation | undefined;
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 * @public
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;

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
export interface DisableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateAddressRequest {
  /**
   * <p>The association ID. This parameter is required.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  PublicIp?: string | undefined;

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
export interface DisassociateCapacityReservationBillingOwnerRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The ID of the consumer account to which the request was sent.</p>
   * @public
   */
  UnusedReservationBillingOwnerId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCapacityReservationBillingOwnerResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target network association.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The current state of the target network association.</p>
   * @public
   */
  Status?: AssociationStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The ARN of the IAM role to disassociate.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * <p>The targets to disassociate from the specified event window.</p>
 * @public
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * <p>The IDs of the instances to disassociate from the event window.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   * @public
   */
  InstanceTags?: Tag[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>One or more targets to disassociate from the specified event window.</p>
   * @public
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamByoasnRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A public 2-byte or 4-byte ASN.</p>
   * @public
   */
  Asn: string | undefined;

  /**
   * <p>A BYOIP CIDR.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamByoasnResult {
  /**
   * <p>An ASN and BYOIP CIDR association.</p>
   * @public
   */
  AsnAssociation?: AsnAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A resource discovery association ID.</p>
   * @public
   */
  IpamResourceDiscoveryAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery association.</p>
   * @public
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateNatGatewayAddressRequest {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The association IDs of EIPs that have been associated with the NAT gateway.</p>
   * @public
   */
  AssociationIds: string[] | undefined;

  /**
   * <p>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</p>
   * @public
   */
  MaxDrainDurationSeconds?: number | undefined;

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
export interface DisassociateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>Information about the NAT gateway IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRouteServerRequest {
  /**
   * <p>The ID of the route server to disassociate.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the VPC to disassociate from the route server.</p>
   * @public
   */
  VpcId: string | undefined;

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
export interface DisassociateRouteServerResult {
  /**
   * <p>Information about the disassociated route server.</p>
   * @public
   */
  RouteServerAssociation?: RouteServerAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityGroupVpcRequest {
  /**
   * <p>A security group ID.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>A VPC ID.</p>
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
export interface DisassociateSecurityGroupVpcResult {
  /**
   * <p>The state of the disassociation.</p>
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of the subnets;</p>
   * @public
   */
  SubnetIds: string[] | undefined;

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
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the disassociated policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to disassociate from the policy table.</p>
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
export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

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
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Association?: TransitGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the association</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
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
export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation | undefined;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableAddressTransferRequest {
  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   * @public
   */
  TransferAccountId: string | undefined;

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
export interface EnableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface EnableAllowedImagesSettingsRequest {
  /**
   * <p>Specify <code>enabled</code> to apply the image criteria specified by the Allowed AMIs
   *       settings. Specify <code>audit-mode</code> so that you can check which AMIs will be allowed or
   *       not allowed by the image criteria.</p>
   * @public
   */
  AllowedImagesSettingsState: AllowedImagesSettingsEnabledState | undefined;

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
export interface EnableAllowedImagesSettingsResult {
  /**
   * <p>Returns <code>enabled</code> or <code>audit-mode</code> if the request succeeds;
   *       otherwise, it returns an error.</p>
   * @public
   */
  AllowedImagesSettingsState?: AllowedImagesSettingsEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region (like <code>us-east-1</code>) or Availability Zone ID (like <code>use1-az1</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The target Region (like <code>us-east-2</code>) or Availability Zone ID (like <code>use2-az2</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the enabled subscription.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the enabled subscription.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

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
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the subscribe action was successful.</p>
   * @public
   */
  Output?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultRequest {
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
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;
}

/**
 * <p>Request to create a launch template for a Windows fast launch enabled AMI.</p>
 *          <note>
 *             <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 *         <code>LaunchTemplateId</code>, but not both.</p>
 *          </note>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * <p>Specify the ID of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>Specify the name of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>Specify the version of the launch template that the AMI should use for Windows fast
   *       launch.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a Windows
 *       fast launch enabled AMI.</p>
 * @public
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a Windows fast launch enabled
   *       AMI.</p>
   * @public
   */
  TargetResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface EnableFastLaunchRequest {
  /**
   * <p>Specify the ID of the image for which to enable Windows fast launch.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The type of resource to use for pre-provisioning the AMI for Windows fast launch.
   *       Supported values include: <code>snapshot</code>, which is the default value.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Configuration settings for creating and managing the snapshots that are used for
   *       pre-provisioning the AMI for Windows fast launch. The associated <code>ResourceType</code>
   *       must be <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest | undefined;

  /**
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   *       snapshots. Launch template parameters can include either the name or ID of the launch
   *       template, but not both.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch. Value must be <code>6</code> or
   *       greater.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

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
export interface EnableFastLaunchResult {
  /**
   * <p>The image ID that identifies the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The type of resource that was defined for pre-provisioning the AMI for Windows fast
   *       launch.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType | undefined;

  /**
   * <p>Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster
   *       launches from the Windows AMI. This property is returned when the associated
   *         <code>resourceType</code> is <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse | undefined;

  /**
   * <p>The launch template that is used when launching Windows instances from pre-provisioned
   *       snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse | undefined;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   *       pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number | undefined;

  /**
   * <p>The owner ID for the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of Windows fast launch for the specified AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode | undefined;

  /**
   * <p>The reason that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The time that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionTime?: Date | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   * @public
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The state of fast snapshot restores.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode | undefined;

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
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date | undefined;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date | undefined;
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The error.</p>
   * @public
   */
  Error?: EnableFastSnapshotRestoreStateError | undefined;
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 * @public
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The errors.</p>
   * @public
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   * @public
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[] | undefined;

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   * @public
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[] | undefined;
}

/**
 * @public
 */
export interface EnableImageRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

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
export interface EnableImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageBlockPublicAccessEnabledState = {
  block_new_sharing: "block-new-sharing",
} as const;

/**
 * @public
 */
export type ImageBlockPublicAccessEnabledState =
  (typeof ImageBlockPublicAccessEnabledState)[keyof typeof ImageBlockPublicAccessEnabledState];

/**
 * @public
 */
export interface EnableImageBlockPublicAccessRequest {
  /**
   * <p>Specify <code>block-new-sharing</code> to enable block public access for AMIs at the
   *       account level in the specified Region. This will block any attempt to publicly share your AMIs
   *       in the specified Region.</p>
   * @public
   */
  ImageBlockPublicAccessState: ImageBlockPublicAccessEnabledState | undefined;

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
export interface EnableImageBlockPublicAccessResult {
  /**
   * <p>Returns <code>block-new-sharing</code> if the request succeeds; otherwise, it returns an
   *       error.</p>
   * @public
   */
  ImageBlockPublicAccessState?: ImageBlockPublicAccessEnabledState | undefined;
}

/**
 * @public
 */
export interface EnableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *       <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now, except for public AMIs, where the upper limit is 2 years from the creation
   *       date.</p>
   * @public
   */
  DeprecateAt: Date | undefined;

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
export interface EnableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionRequest {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>If <code>true</code>, enforces deregistration protection for 24 hours after deregistration
   *       protection is disabled.</p>
   * @public
   */
  WithCooldown?: boolean | undefined;

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
export interface EnableImageDeregistrationProtectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Organizations member account ID that you want to enable as the IPAM account.</p>
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of enabling the IPAM account.</p>
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
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
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableRouteServerPropagationRequest {
  /**
   * <p>The ID of the route server for which to enable propagation.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the route table to which route server will propagate routes.</p>
   * @public
   */
  RouteTableId: string | undefined;

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
export interface EnableRouteServerPropagationResult {
  /**
   * <p>Information about the enabled route server propagation.</p>
   * @public
   */
  RouteServerPropagation?: RouteServerPropagation | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotBlockPublicAccessRequest {
  /**
   * <p>The mode in which to enable block public access for snapshots for the Region.
   *       Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-all-sharing</code> - Prevents all public sharing of snapshots in
   *           the Region. Users in the account will no longer be able to request new public
   *           sharing. Additionally, snapshots that are already publicly shared are treated as
   *           private and they are no longer publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code>  - Prevents only new public sharing of snapshots
   *           in the Region. Users in the account will no longer be able to request new public
   *           sharing. However, snapshots that are already publicly shared, remain publicly
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>unblocked</code> is not a valid value for <b>EnableSnapshotBlockPublicAccess</b>.</p>
   * @public
   */
  State: SnapshotBlockPublicAccessState | undefined;

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
export interface EnableSnapshotBlockPublicAccessResult {
  /**
   * <p>The state of block public access for snapshots for the account and Region. Returns
   *       either <code>block-all-sharing</code> or <code>block-new-sharing</code> if the request
   *       succeeds.</p>
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string | undefined;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   * @public
   */
  Propagation?: TransitGatewayPropagation | undefined;
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 * @public
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private
   *             gateway must be attached to the same VPC that the routing tables are associated with.
   *         </p>
   * @public
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that
   *             the virtual private gateway is attached to. </p>
   * @public
   */
  RouteTableId: string | undefined;

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
export interface EnableVolumeIORequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
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
 * @enum
 */
export const ClientCertificateRevocationListStatusCode = {
  active: "active",
  pending: "pending",
} as const;

/**
 * @public
 */
export type ClientCertificateRevocationListStatusCode =
  (typeof ClientCertificateRevocationListStatusCode)[keyof typeof ClientCertificateRevocationListStatusCode];

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 * @public
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   * @public
   */
  Code?: ClientCertificateRevocationListStatusCode | undefined;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   * @public
   */
  CertificateRevocationList?: string | undefined;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   * @public
   */
  Status?: ClientCertificateRevocationListStatus | undefined;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
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
export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   * @public
   */
  ClientConfiguration?: string | undefined;
}

/**
 * <p>Describes the destination for an export image task.</p>
 * @public
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;
}

/**
 * @public
 */
export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The disk image format.</p>
   * @public
   */
  DiskImageFormat: DiskImageFormat | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist.</p>
   * @public
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The tags to apply to the export image task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The disk image format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat | undefined;

  /**
   * <p>The ID of the export image task.</p>
   * @public
   */
  ExportImageTaskId?: string | undefined;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The percent complete of the export image task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location | undefined;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The status message for the export image task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Any tags assigned to the export image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.exact-match</code> - The exact match of the specified filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.longest-prefix-match</code> - The longest prefix that matches the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.subnet-of-match</code> - The routes with a subnet that match the specified CIDR filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route (<code>active</code> | <code>blackhole</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-destination-cidr-block</code> - The CIDR range.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                <code>static</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  S3Bucket: string | undefined;

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
export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   * @public
   */
  S3Location?: string | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationRequest {
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
}

/**
 * <p>Describes a route.</p>
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfigurationRoute {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes a set of routes.</p>
 * @public
 */
export interface VerifiedAccessInstanceOpenVpnClientConfiguration {
  /**
   * <p>The base64-encoded Open VPN client configuration.</p>
   * @public
   */
  Config?: string | undefined;

  /**
   * <p>The routes.</p>
   * @public
   */
  Routes?: VerifiedAccessInstanceOpenVpnClientConfigurationRoute[] | undefined;
}

/**
 * <p>Describes the trust provider.</p>
 * @public
 */
export interface VerifiedAccessInstanceUserTrustProviderClientConfiguration {
  /**
   * <p>The trust provider type.</p>
   * @public
   */
  Type?: UserTrustProviderType | undefined;

  /**
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scopes?: string | undefined;

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
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

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
   * <p>Indicates whether Proof of Key Code Exchange (PKCE) is enabled.</p>
   * @public
   */
  PkceEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportVerifiedAccessInstanceClientConfigurationResult {
  /**
   * <p>The version.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The device trust providers.</p>
   * @public
   */
  DeviceTrustProviders?: DeviceTrustProviderType[] | undefined;

  /**
   * <p>The user identity trust provider.</p>
   * @public
   */
  UserTrustProvider?: VerifiedAccessInstanceUserTrustProviderClientConfiguration | undefined;

  /**
   * <p>The Open VPN configuration.</p>
   * @public
   */
  OpenVpnConfigurations?: VerifiedAccessInstanceOpenVpnClientConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetActiveVpnTunnelStatusRequest {
  /**
   * <p>The ID of the VPN connection for which to retrieve the active tunnel status.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel for which to retrieve the active status.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetActiveVpnTunnelStatusResult {
  /**
   * <p>Information about the current security configuration of the VPN tunnel.</p>
   * @public
   */
  ActiveVpnTunnelStatus?: ActiveVpnTunnelStatus | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The list of criteria that are evaluated to determine whch AMIs are discoverable and usable
 *       in the account in the specified Amazon Web Services Region. Currently, the only criteria that can be
 *       specified are AMI providers. </p>
 *          <p>Up to 10 <code>imageCriteria</code> objects can be specified, and up to a total of 200
 *       values for all <code>imageProviders</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#allowed-amis-json-configuration">JSON
 *         configuration for the Allowed AMIs criteria</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ImageCriterion {
  /**
   * <p>A list of AMI providers whose AMIs are discoverable and useable in the account. Up to a
   *       total of 200 values can be specified.</p>
   *          <p>Possible values:</p>
   *          <p>
   *             <code>amazon</code>: Allow AMIs created by Amazon Web Services.</p>
   *          <p>
   *             <code>aws-marketplace</code>: Allow AMIs created by verified providers in the Amazon Web Services
   *       Marketplace.</p>
   *          <p>
   *             <code>aws-backup-vault</code>: Allow AMIs created by Amazon Web Services Backup. </p>
   *          <p>12-digit account ID: Allow AMIs created by this account. One or more account IDs can be
   *       specified.</p>
   *          <p>
   *             <code>none</code>: Allow AMIs created by your own account only.</p>
   * @public
   */
  ImageProviders?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAllowedImagesSettingsResult {
  /**
   * <p>The current state of the Allowed AMIs setting at the account level in the specified Amazon Web Services
   *       Region.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>disabled</code>: All AMIs are allowed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audit-mode</code>: All AMIs are allowed, but the <code>ImageAllowed</code> field
   *           is set to <code>true</code> if the AMI would be allowed with the current list of criteria
   *           if allowed AMIs was enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enabled</code>: Only AMIs matching the image criteria are discoverable and
   *           available for use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The list of criteria for images that are discoverable and usable in the account in the
   *       specified Amazon Web Services Region.</p>
   * @public
   */
  ImageCriteria?: ImageCriterion[] | undefined;

  /**
   * <p>The entity that manages the Allowed AMIs settings. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The Allowed AMIs settings is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The Allowed AMIs settings is managed by a
   *                     declarative policy and can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the associated IAM roles.</p>
 * @public
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   * @public
   */
  AssociatedRoleArn?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   * @public
   */
  CertificateS3BucketName?: string | undefined;

  /**
   * <p>The key of the Amazon S3 object where the certificate, certificate chain, and encrypted private key bundle
   * 			are stored. The object key is formatted as follows: <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   * @public
   */
  CertificateS3ObjectKey?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the private key.</p>
   * @public
   */
  EncryptionKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   * @public
   */
  AssociatedRoles?: AssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * <p>Describes an IPv6 CIDR block association.</p>
 * @public
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Cidr?: string | undefined;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   * @public
   */
  AssociatedResource?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   * @public
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A query used for retrieving network health data. </p>
 * @public
 */
export interface DataQuery {
  /**
   * <p>A user-defined ID associated with a data query that's returned in the <code>dataResponse</code> identifying the query. For example, if you set the Id to <code>MyQuery01</code>in the query, the <code>dataResponse</code> identifies the query as <code>MyQuery01</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the target for the data query. For example, <code>eu-north-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the network performance request.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The metric data aggregation period, <code>p50</code>, between the specified <code>startDate</code>
   *          and <code>endDate</code>. For example, a metric of <code>five_minutes</code> is the median of all
   *          the data points gathered within those five minutes. <code>p50</code> is the only supported metric.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The aggregation period used for the data query.</p>
   * @public
   */
  Period?: PeriodType | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * <p>A list of network performance data queries.</p>
   * @public
   */
  DataQueries?: DataQuery[] | undefined;

  /**
   * <p>The starting time for the performance data request. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The ending time for the performance data request. The end time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndTime?: Date | undefined;

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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the <code>startDate</code> to the <code>endDate</code>. Currently only <code>five_minutes</code> is supported.</p>
 * @public
 */
export interface MetricPoint {
  /**
   * <p>The start date for the metric point. The starting date for the metric point. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The end date for the metric point. The ending time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndDate?: Date | undefined;

  Value?: number | undefined;
  /**
   * <p>The status of the metric point.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The response to a <code>DataQuery</code>.</p>
 * @public
 */
export interface DataResponse {
  /**
   * <p>The ID passed in the <code>DataQuery</code>.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The Region or Availability Zone that's the destination for the data query. For example, <code>eu-west-1</code>.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The metric used for the network performance request.</p>
   * @public
   */
  Metric?: MetricType | undefined;

  /**
   * <p>The statistic used for the network performance request.</p>
   * @public
   */
  Statistic?: StatisticType | undefined;

  /**
   * <p>The period used for the network performance request.</p>
   * @public
   */
  Period?: PeriodType | undefined;

  /**
   * <p>A list of <code>MetricPoint</code> objects.</p>
   * @public
   */
  MetricPoints?: MetricPoint[] | undefined;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataResult {
  /**
   * <p>The list of data responses.</p>
   * @public
   */
  DataResponses?: DataResponse[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
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

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 * @public
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity
   * 			Reservation.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity
   * 			Reservation.</p>
   * @public
   */
  UsedInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string | undefined;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the
   * 			Capacity Reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of
   * 			the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - The capacity is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time
   * 		specified in your reservation request. The reserved capacity is no longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelled</code> - The Capacity Reservation was canceled. The reserved capacity is no
   * 		longer available for your use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
   * 		provisioning is still pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - The Capacity Reservation request has failed. A request can fail due to
   * 		request parameters that are not valid, capacity constraints, or instance limit constraints. You
   * 		can view a failed request for 60 minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduled</code> - (<i>Future-dated Capacity Reservations</i>) The
   * 		future-dated Capacity Reservation request was approved and the Capacity Reservation is scheduled
   * 		for delivery on the requested start date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-pending</code> - (<i>Capacity Blocks</i>) The upfront
   * 	    payment has not been processed yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>payment-failed</code> - (<i>Capacity Blocks</i>) The upfront
   * 	    payment was not processed in the 12-hour time frame. Your Capacity Block was released.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>assessing</code> - (<i>Future-dated Capacity Reservations</i>)
   * 		Amazon EC2 is assessing your request for a future-dated Capacity Reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>delayed</code> - (<i>Future-dated Capacity Reservations</i>) Amazon EC2
   * 		encountered a delay in provisioning the requested future-dated Capacity Reservation. Amazon EC2 is
   * 		unable to deliver the requested capacity by the requested start date and time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unsupported</code> - (<i>Future-dated Capacity Reservations</i>) Amazon EC2
   * 		can't support the future-dated Capacity Reservation request due to capacity constraints. You can view
   * 		unsupported requests for 30 days. The Capacity Reservation will not be delivered.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: CapacityReservationState | undefined;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   * @public
   */
  InstanceUsages?: InstanceUsage[] | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.allocation-id</code> - The allocation ID of the address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-account-id</code> - The ID of the Amazon Web Services account that is using the customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-service</code> - The Amazon Web Services service that is using the customer-owned IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.co-ip</code> - The customer-owned IP address.</p>
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
 * <p>Describes address usage for a customer-owned address pool.</p>
 * @public
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services service.</p>
   * @public
   */
  AwsService?: string | undefined;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CoIp?: string | undefined;
}

/**
 * @public
 */
export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CoipPoolId?: string | undefined;

  /**
   * <p>Information about the address usage.</p>
   * @public
   */
  CoipAddressUsages?: CoipAddressUsage[] | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *          <p>Default: disabled (<code>false</code>)</p>
   * @public
   */
  Latest?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The time at which the output was last updated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   * @public
   */
  Output?: string | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   * @public
   */
  WakeUp?: boolean | undefined;
}

/**
 * @public
 */
export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   * @public
   */
  ImageData?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId: string | undefined;
}

/**
 * <p>A summary report for the attribute for a Region.</p>
 * @public
 */
export interface RegionalSummary {
  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The number of accounts in the Region with the same configuration value for the
   *             attribute that is most frequently observed.</p>
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * <p>The number of accounts in the Region with a configuration value different from the
   *             most frequently observed value for the attribute.</p>
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;
}

/**
 * <p>A summary report for the attribute across all Regions.</p>
 * @public
 */
export interface AttributeSummary {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The configuration value that is most frequently observed for the attribute.</p>
   * @public
   */
  MostFrequentValue?: string | undefined;

  /**
   * <p>The number of accounts with the same configuration value for the attribute that is
   *             most frequently observed.</p>
   * @public
   */
  NumberOfMatchedAccounts?: number | undefined;

  /**
   * <p>The number of accounts with a configuration value different from the most frequently
   *             observed value for the attribute.</p>
   * @public
   */
  NumberOfUnmatchedAccounts?: number | undefined;

  /**
   * <p>The summary report for each Region for the attribute.</p>
   * @public
   */
  RegionalSummaries?: RegionalSummary[] | undefined;
}

/**
 * @public
 */
export interface GetDeclarativePoliciesReportSummaryResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where the report is located.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The prefix for your S3 object.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The root ID, organizational unit ID, or account ID.</p>
   *          <p>Format:</p>
   *          <ul>
   *             <li>
   *                <p>For root: <code>r-ab12</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For OU: <code>ou-ab12-cdef1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For account: <code>123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The time when the report generation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the report generation ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The total number of accounts associated with the specified
   *             <code>targetId</code>.</p>
   * @public
   */
  NumberOfAccounts?: number | undefined;

  /**
   * <p>The number of accounts where attributes could not be retrieved in any Region.</p>
   * @public
   */
  NumberOfFailedAccounts?: number | undefined;

  /**
   * <p>The attributes described in the report.</p>
   * @public
   */
  AttributeSummaries?: AttributeSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UnlimitedSupportedInstanceFamily = {
  t2: "t2",
  t3: "t3",
  t3a: "t3a",
  t4g: "t4g",
} as const;

/**
 * @public
 */
export type UnlimitedSupportedInstanceFamily =
  (typeof UnlimitedSupportedInstanceFamily)[keyof typeof UnlimitedSupportedInstanceFamily];

/**
 * @public
 */
export interface GetDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The instance family.</p>
   * @public
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | undefined;
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 * @public
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   * @public
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | undefined;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification | undefined;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdRequest {
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
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultRequest {
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
export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 * @enum
 */
export const PartitionLoadFrequency = {
  DAILY: "daily",
  MONTHLY: "monthly",
  NONE: "none",
  WEEKLY: "weekly",
} as const;

/**
 * @public
 */
export type PartitionLoadFrequency = (typeof PartitionLoadFrequency)[keyof typeof PartitionLoadFrequency];

/**
 * <p>Describes integration options for Amazon Athena.</p>
 * @public
 */
export interface AthenaIntegration {
  /**
   * <p>The location in Amazon S3 to store the generated CloudFormation template.</p>
   * @public
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * <p>The schedule for adding new partitions to the table.</p>
   * @public
   */
  PartitionLoadFrequency: PartitionLoadFrequency | undefined;

  /**
   * <p>The start date for the partition.</p>
   * @public
   */
  PartitionStartDate?: Date | undefined;

  /**
   * <p>The end date for the partition.</p>
   * @public
   */
  PartitionEndDate?: Date | undefined;
}

/**
 * <p>Describes service integrations with VPC Flow logs.</p>
 * @public
 */
export interface IntegrateServices {
  /**
   * <p>Information about the integration with Amazon Athena.</p>
   * @public
   */
  AthenaIntegrations?: AthenaIntegration[] | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the flow log.</p>
   * @public
   */
  FlowLogId: string | undefined;

  /**
   * <p>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</p>
   * @public
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * <p>Information about the service integration.</p>
   * @public
   */
  IntegrateServices: IntegrateServices | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * <p>The generated CloudFormation template.</p>
   * @public
   */
  Result?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation. If you specify a Capacity Reservation that is
   * 			shared with you, the operation returns only Capacity Reservation groups that you
   * 			own.</p>
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

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 * @public
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   * @public
   */
  GroupArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been
   * 			added.</p>
   * @public
   */
  CapacityReservationGroups?: CapacityReservationGroup[] | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewRequest {
  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The offering ID of the reservation.</p>
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * <p>Describes the result of the purchase.</p>
 * @public
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   * @public
   */
  HostIdSet?: string[] | undefined;

  /**
   * <p>The ID of the reservation.</p>
   * @public
   */
  HostReservationId?: string | undefined;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The payment option for the reservation.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The upfront price of the reservation.</p>
   * @public
   */
  UpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * @public
 */
export interface GetImageBlockPublicAccessStateRequest {
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
export interface GetImageBlockPublicAccessStateResult {
  /**
   * <p>The current state of block public access for AMIs at the account level in the specified
   *       Amazon Web Services Region.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code> - Any attempt to publicly share your AMIs in the
   *           specified Region is blocked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unblocked</code> - Your AMIs in the specified Region can be publicly
   *           shared.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ImageBlockPublicAccessState?: string | undefined;

  /**
   * <p>The entity that manages the state for block public access for AMIs. Possible values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> -  The state is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The state is managed by a declarative policy and
   *             can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>The default instance metadata service (IMDS) settings that were set at the account
 *             level in the specified Amazon Web Services  Region.</p>
 * @public
 */
export interface InstanceMetadataDefaultsResponse {
  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> – IMDSv2 is optional, which means that you can
   *                     use either IMDSv2 or IMDSv1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> – IMDSv2 is required, which means that IMDSv1 is
   *                     disabled, and you must use IMDSv2.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Indicates whether the IMDS endpoint for an instance is enabled or disabled. When disabled, the instance
   *             metadata can't be accessed.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;

  /**
   * <p>The entity that manages the IMDS default settings. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The IMDS default settings are managed by the
   *             account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The IMDS default settings are managed
   *             by a declarative policy and can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * <p>The customized exception message that is specified in the declarative policy.</p>
   * @public
   */
  ManagedExceptionMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsResult {
  /**
   * <p>The account-level default IMDS settings.</p>
   * @public
   */
  AccountLevel?: InstanceMetadataDefaultsResponse | undefined;
}

/**
 * @public
 * @enum
 */
export const EkPubKeyFormat = {
  der: "der",
  tpmt: "tpmt",
} as const;

/**
 * @public
 */
export type EkPubKeyFormat = (typeof EkPubKeyFormat)[keyof typeof EkPubKeyFormat];

/**
 * @public
 * @enum
 */
export const EkPubKeyType = {
  ECC_SEC_P384: "ecc-sec-p384",
  RSA_2048: "rsa-2048",
} as const;

/**
 * @public
 */
export type EkPubKeyType = (typeof EkPubKeyType)[keyof typeof EkPubKeyType];

/**
 * @public
 */
export interface GetInstanceTpmEkPubRequest {
  /**
   * <p>The ID of the instance for which to get the public endorsement key.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The required public endorsement key type.</p>
   * @public
   */
  KeyType: EkPubKeyType | undefined;

  /**
   * <p>The required public endorsement key format. Specify <code>der</code> for a DER-encoded public
   *             key that is compatible with OpenSSL. Specify <code>tpmt</code> for a TPM 2.0 format that is
   *             compatible with tpm2-tools. The returned key is base64 encoded.</p>
   * @public
   */
  KeyFormat: EkPubKeyFormat | undefined;

  /**
   * <p>Specify this parameter to verify whether the request will succeed, without actually making the
   *             request. If the request will succeed, the response is <code>DryRunOperation</code>. Otherwise,
   *             the response is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceTpmEkPubResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The public endorsement key type.</p>
   * @public
   */
  KeyType?: EkPubKeyType | undefined;

  /**
   * <p>The public endorsement key format.</p>
   * @public
   */
  KeyFormat?: EkPubKeyFormat | undefined;

  /**
   * <p>The public endorsement key material.</p>
   * @public
   */
  KeyValue?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The processor architecture type.</p>
   * @public
   */
  ArchitectureTypes: ArchitectureType[] | undefined;

  /**
   * <p>The virtualization type.</p>
   * @public
   */
  VirtualizationTypes: VirtualizationType[] | undefined;

  /**
   * <p>The attributes required for the instance types.</p>
   * @public
   */
  InstanceRequirements: InstanceRequirementsRequest | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * <p>The list of instance types with the specified instance attributes.</p>
 * @public
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * <p>The matching instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * <p>The instance types with the specified instance attributes.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataRequest {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetInstanceUefiDataResult {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store.</p>
   * @public
   */
  UefiData?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range.
   *          If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the IPAM scope that the CIDR is in.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the VPC you want your history records filtered by.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The maximum number of historical results you would like returned per page. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamComplianceStatus = {
  compliant: "compliant",
  ignored: "ignored",
  noncompliant: "noncompliant",
  unmanaged: "unmanaged",
} as const;

/**
 * @public
 */
export type IpamComplianceStatus = (typeof IpamComplianceStatus)[keyof typeof IpamComplianceStatus];

/**
 * @public
 * @enum
 */
export const IpamOverlapStatus = {
  ignored: "ignored",
  nonoverlapping: "nonoverlapping",
  overlapping: "overlapping",
} as const;

/**
 * @public
 */
export type IpamOverlapStatus = (typeof IpamOverlapStatus)[keyof typeof IpamOverlapStatus];

/**
 * @public
 * @enum
 */
export const IpamAddressHistoryResourceType = {
  eip: "eip",
  instance: "instance",
  network_interface: "network-interface",
  subnet: "subnet",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamAddressHistoryResourceType =
  (typeof IpamAddressHistoryResourceType)[keyof typeof IpamAddressHistoryResourceType];

/**
 * <p>The historical record of a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @public
 */
export interface IpamAddressHistoryRecord {
  /**
   * <p>The ID of the resource owner.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: IpamAddressHistoryResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The CIDR of the resource.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceOverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * <p>The VPC ID of the resource.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   * @public
   */
  SampledStartTime?: Date | undefined;

  /**
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   * @public
   */
  SampledEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryResult {
  /**
   * <p>A historical record for a CIDR within an IPAM scope. If the CIDR is associated with an EC2 instance, you will see an object in the response for the instance and one for the network interface.</p>
   * @public
   */
  HistoryRecords?: IpamAddressHistoryRecord[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.</p>
   * @public
   */
  DiscoveryRegion: string | undefined;

  /**
   * <p>Discovered account filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of discovered accounts to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamDiscoveryFailureCode = {
  assume_role_failure: "assume-role-failure",
  throttling_failure: "throttling-failure",
  unauthorized_failure: "unauthorized-failure",
} as const;

/**
 * @public
 */
export type IpamDiscoveryFailureCode = (typeof IpamDiscoveryFailureCode)[keyof typeof IpamDiscoveryFailureCode];

/**
 * <p>The discovery failure reason.</p>
 * @public
 */
export interface IpamDiscoveryFailureReason {
  /**
   * <p>The discovery failure code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>assume-role-failure</code> - IPAM could not assume the Amazon Web Services IAM service-linked role. This could be because of any of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>SLR has not been created yet and IPAM is still creating it.</p>
   *                   </li>
   *                   <li>
   *                      <p>You have opted-out of the IPAM home Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Account you are using as your IPAM account has been suspended.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throttling-failure</code> - IPAM account is already using the allotted transactions per second and IPAM is receiving a throttling error when assuming the Amazon Web Services IAM SLR.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unauthorized-failure</code> - Amazon Web Services account making the request is not authorized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">AuthFailure</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Code?: IpamDiscoveryFailureCode | undefined;

  /**
   * <p>The discovery failure message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.</p>
 * @public
 */
export interface IpamDiscoveredAccount {
  /**
   * <p>The account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.
   *          An account can be discovered in multiple regions and will have a separate discovered account for each Region.</p>
   * @public
   */
  DiscoveryRegion?: string | undefined;

  /**
   * <p>The resource discovery failure reason.</p>
   * @public
   */
  FailureReason?: IpamDiscoveryFailureReason | undefined;

  /**
   * <p>The last attempted resource discovery time.</p>
   * @public
   */
  LastAttemptedDiscoveryTime?: Date | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  LastSuccessfulDiscoveryTime?: Date | undefined;

  /**
   * <p>The ID of an Organizational Unit in Amazon Web Services Organizations.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsResult {
  /**
   * <p>Discovered accounts.</p>
   * @public
   */
  IpamDiscoveredAccounts?: IpamDiscoveredAccount[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>An IPAM resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the IP address.</p>
   * @public
   */
  AddressRegion: string | undefined;

  /**
   * <p>Filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of IPAM discovered public addresses to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPublicAddressType = {
  AMAZON_OWNED_CONTIG: "amazon-owned-contig",
  AMAZON_OWNED_EIP: "amazon-owned-eip",
  BYOIP: "byoip",
  EC2_PUBLIC_IP: "ec2-public-ip",
  SERVICE_MANAGED_BYOIP: "service-managed-byoip",
  SERVICE_MANAGED_IP: "service-managed-ip",
} as const;

/**
 * @public
 */
export type IpamPublicAddressType = (typeof IpamPublicAddressType)[keyof typeof IpamPublicAddressType];

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAssociationStatus = {
  ASSOCIATED: "associated",
  DISASSOCIATED: "disassociated",
} as const;

/**
 * @public
 */
export type IpamPublicAddressAssociationStatus =
  (typeof IpamPublicAddressAssociationStatus)[keyof typeof IpamPublicAddressAssociationStatus];

/**
 * <p>The security group that the resource with the public IP address is in.</p>
 * @public
 */
export interface IpamPublicAddressSecurityGroup {
  /**
   * <p>The security group's name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The security group's ID.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAwsService = {
  AGA: "global-accelerator",
  DMS: "database-migration-service",
  EC2_LB: "load-balancer",
  ECS: "elastic-container-service",
  NAT_GATEWAY: "nat-gateway",
  OTHER: "other",
  RDS: "relational-database-service",
  REDSHIFT: "redshift",
  S2S_VPN: "site-to-site-vpn",
} as const;

/**
 * @public
 */
export type IpamPublicAddressAwsService =
  (typeof IpamPublicAddressAwsService)[keyof typeof IpamPublicAddressAwsService];

/**
 * <p>A tag for a public IP address discovered by IPAM.</p>
 * @public
 */
export interface IpamPublicAddressTag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Tags for a public IP address discovered by IPAM.</p>
 * @public
 */
export interface IpamPublicAddressTags {
  /**
   * <p>Tags for an Elastic IP address.</p>
   * @public
   */
  EipTags?: IpamPublicAddressTag[] | undefined;
}

/**
 * <p>A public IP Address discovered by IPAM.</p>
 * @public
 */
export interface IpamDiscoveredPublicAddress {
  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The Region of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressRegion?: string | undefined;

  /**
   * <p>The IP address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The ID of the owner of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressOwnerId?: string | undefined;

  /**
   * <p>The allocation ID of the resource the IP address is assigned to.</p>
   * @public
   */
  AddressAllocationId?: string | undefined;

  /**
   * <p>The association status.</p>
   * @public
   */
  AssociationStatus?: IpamPublicAddressAssociationStatus | undefined;

  /**
   * <p>The IP address type.</p>
   * @public
   */
  AddressType?: IpamPublicAddressType | undefined;

  /**
   * <p>The Amazon Web Services service associated with the IP address.</p>
   * @public
   */
  Service?: IpamPublicAddressAwsService | undefined;

  /**
   * <p>The resource ARN or ID.</p>
   * @public
   */
  ServiceResource?: string | undefined;

  /**
   * <p>The ID of the VPC that the resource with the assigned IP address is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet that the resource with the assigned IP address is in.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the public IPv4 pool that the resource with the assigned IP address is from.</p>
   * @public
   */
  PublicIpv4PoolId?: string | undefined;

  /**
   * <p>The network interface ID of the resource with the assigned IP address.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The description of the network interface that IP address is assigned to.</p>
   * @public
   */
  NetworkInterfaceDescription?: string | undefined;

  /**
   * <p>The instance ID of the instance the assigned IP address is assigned to.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Tags associated with the IP address.</p>
   * @public
   */
  Tags?: IpamPublicAddressTags | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>Security groups associated with the resource that the IP address is assigned to.</p>
   * @public
   */
  SecurityGroups?: IpamPublicAddressSecurityGroup[] | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  SampleTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredPublicAddressesResult {
  /**
   * <p>IPAM discovered public addresses.</p>
   * @public
   */
  IpamDiscoveredPublicAddresses?: IpamDiscoveredPublicAddress[] | undefined;

  /**
   * <p>The oldest successful resource discovery time.</p>
   * @public
   */
  OldestSampleTime?: Date | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>A resource Region.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>Filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of discovered resource CIDRs to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamResourceCidrIpSource = {
  amazon: "amazon",
  byoip: "byoip",
  none: "none",
} as const;

/**
 * @public
 */
export type IpamResourceCidrIpSource = (typeof IpamResourceCidrIpSource)[keyof typeof IpamResourceCidrIpSource];

/**
 * @public
 * @enum
 */
export const IpamNetworkInterfaceAttachmentStatus = {
  available: "available",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type IpamNetworkInterfaceAttachmentStatus =
  (typeof IpamNetworkInterfaceAttachmentStatus)[keyof typeof IpamNetworkInterfaceAttachmentStatus];

/**
 * @public
 * @enum
 */
export const IpamResourceType = {
  eip: "eip",
  eni: "eni",
  ipv6_pool: "ipv6-pool",
  public_ipv4_pool: "public-ipv4-pool",
  subnet: "subnet",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamResourceType = (typeof IpamResourceType)[keyof typeof IpamResourceType];

/**
 * <p>An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.</p>
 * @public
 */
export interface IpamDiscoveredResourceCidr {
  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The resource Region.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource owner ID.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The resource CIDR.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpamResourceCidrIpSource | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The resource tags.</p>
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *          </p>
   *             </li>
   *          </ul>
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * <p>The VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>For elastic network interfaces, this is the status of whether or not the elastic network interface is attached.</p>
   * @public
   */
  NetworkInterfaceAttachmentStatus?: IpamNetworkInterfaceAttachmentStatus | undefined;

  /**
   * <p>The last successful resource discovery time.</p>
   * @public
   */
  SampleTime?: Date | undefined;

  /**
   * <p>The Availability Zone ID.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsResult {
  /**
   * <p>Discovered resource CIDRs.</p>
   * @public
   */
  IpamDiscoveredResourceCidrs?: IpamDiscoveredResourceCidr[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want to see the allocations for.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   * @public
   */
  IpamPoolAllocationId?: string | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results you would like returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsResult {
  /**
   * <p>The IPAM pool allocations you want information on.</p>
   * @public
   */
  IpamPoolAllocations?: IpamPoolAllocation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want the CIDR for.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsResult {
  /**
   * <p>Information about the CIDRs provisioned to an IPAM pool.</p>
   * @public
   */
  IpamPoolCidrs?: IpamPoolCidr[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the scope that the resource is in.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the IPAM pool that the resource is in.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The resource tag.</p>
   * @public
   */
  ResourceTag?: RequestIpamResourceTag | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamManagementState = {
  ignored: "ignored",
  managed: "managed",
  unmanaged: "unmanaged",
} as const;

/**
 * @public
 */
export type IpamManagementState = (typeof IpamManagementState)[keyof typeof IpamManagementState];

/**
 * <p>The CIDR for an IPAM resource.</p>
 * @public
 */
export interface IpamResourceCidr {
  /**
   * <p>The IPAM ID for an IPAM resource.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The scope ID for an IPAM resource.</p>
   * @public
   */
  IpamScopeId?: string | undefined;

  /**
   * <p>The pool ID for an IPAM resource.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The ID of an IPAM resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of an IPAM resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The CIDR for an IPAM resource.</p>
   * @public
   */
  ResourceCidr?: string | undefined;

  /**
   * <p>The type of IPAM resource.</p>
   * @public
   */
  ResourceType?: IpamResourceType | undefined;

  /**
   * <p>The tags for an IPAM resource.</p>
   * @public
   */
  ResourceTags?: IpamResourceTag[] | undefined;

  /**
   * <p>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated.
   *          </p>
   *             </li>
   *             <li>
   *                <p>For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).
   *          </p>
   *             </li>
   *          </ul>
   * @public
   */
  IpUsage?: number | undefined;

  /**
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ComplianceStatus?: IpamComplianceStatus | undefined;

  /**
   * <p>The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ManagementState?: IpamManagementState | undefined;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  OverlapStatus?: IpamOverlapStatus | undefined;

  /**
   * <p>The ID of a VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Availability Zone ID.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The resource CIDRs.</p>
   * @public
   */
  IpamResourceCidrs?: IpamResourceCidr[] | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   * @public
   */
  LaunchTemplateData?: ResponseLaunchTemplateData | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsRequest {
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
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 * @public
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The owner of the resource.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  PrefixListAssociations?: PrefixListAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesRequest {
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

  /**
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   * @public
   */
  TargetVersion?: number | undefined;

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
}

/**
 * <p>Describes a prefix list entry.</p>
 * @public
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * <p>Information about the prefix list entries.</p>
   * @public
   */
  Entries?: PrefixListEntry[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

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
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * <p>The status of Network Access Scope Analysis.</p>
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * <p>The findings associated with Network Access Scope Analysis.</p>
   * @public
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;

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
export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * <p>The Network Access Scope content.</p>
   * @public
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataRequest {
  /**
   * <p>The ID of the Windows instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The time the data was last updated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   * @public
   */
  PasswordData?: string | undefined;
}

/**
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 * @public
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your current
   *       Convertible Reserved Instances.</p>
   * @public
   */
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 * @public
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of
   *       hours remaining).</p>
   * @public
   */
  RemainingTotalValue?: string | undefined;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   * @public
   */
  RemainingUpfrontValue?: string | undefined;
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 * @public
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   * @public
   */
  ReservedInstanceId?: string | undefined;
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 * @public
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This
   *       parameter is reserved and cannot be specified in a request</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 * @public
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is
   *       the sum of the list value, remaining upfront price, and additional upfront cost of the
   *       exchange.</p>
   * @public
   */
  ReservationValue?: ReservationValue | undefined;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration | undefined;
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 * @public
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>The currency of the transaction.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be
   *       completed.</p>
   * @public
   */
  IsValidExchange?: boolean | undefined;

  /**
   * <p>The new end date of the reservation term.</p>
   * @public
   */
  OutputReservedInstancesWillExpireAt?: Date | undefined;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   * @public
   */
  PaymentDue?: string | undefined;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   * @public
   */
  ReservedInstanceValueRollup?: ReservationValue | undefined;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   * @public
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[] | undefined;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   * @public
   */
  TargetConfigurationValueRollup?: ReservationValue | undefined;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   * @public
   */
  TargetConfigurationValueSet?: TargetReservationValue[] | undefined;

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   * @public
   */
  ValidationFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteServerAssociationsRequest {
  /**
   * <p>The ID of the route server for which to get association information.</p>
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
export interface GetRouteServerAssociationsResult {
  /**
   * <p>Information about the associations for the specified route server.</p>
   * @public
   */
  RouteServerAssociations?: RouteServerAssociation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerPropagationsRequest {
  /**
   * <p>The ID of the route server for which to get propagation information.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The ID of the route table for which to get propagation information.</p>
   * @public
   */
  RouteTableId?: string | undefined;

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
export interface GetRouteServerPropagationsResult {
  /**
   * <p>Information about the route propagations for the specified route server.</p>
   * @public
   */
  RouteServerPropagations?: RouteServerPropagation[] | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseRequest {
  /**
   * <p>The ID of the route server for which to get the routing database.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of routing database entries to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filters to apply to the routing database query.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerRouteInstallationStatus = {
  INSTALLED: "installed",
  REJECTED: "rejected",
} as const;

/**
 * @public
 */
export type RouteServerRouteInstallationStatus =
  (typeof RouteServerRouteInstallationStatus)[keyof typeof RouteServerRouteInstallationStatus];

/**
 * <p>Describes the installation status of a route in a route table.</p>
 * @public
 */
export interface RouteServerRouteInstallationDetail {
  /**
   * <p>The ID of the route table where the route is being installed.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The current installation status of the route in the route table.</p>
   * @public
   */
  RouteInstallationStatus?: RouteServerRouteInstallationStatus | undefined;

  /**
   * <p>The reason for the current installation status of the route.</p>
   * @public
   */
  RouteInstallationStatusReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteServerRouteStatus = {
  IN_FIB: "in-fib",
  IN_RIB: "in-rib",
} as const;

/**
 * @public
 */
export type RouteServerRouteStatus = (typeof RouteServerRouteStatus)[keyof typeof RouteServerRouteStatus];

/**
 * <p>Describes a route in the route server's routing database.</p>
 * @public
 */
export interface RouteServerRoute {
  /**
   * <p>The ID of the route server endpoint that received this route.</p>
   * @public
   */
  RouteServerEndpointId?: string | undefined;

  /**
   * <p>The ID of the route server peer that advertised this route.</p>
   * @public
   */
  RouteServerPeerId?: string | undefined;

  /**
   * <p>Details about the installation status of this route in route tables.</p>
   * @public
   */
  RouteInstallationDetails?: RouteServerRouteInstallationDetail[] | undefined;

  /**
   * <p>The current status of the route in the routing database. Values are <code>in-rib</code> or <code>in-fib</code> depending on if the routes are in the RIB or the FIB database.</p>
   *          <p>The <a href="https://en.wikipedia.org/wiki/Routing_table">Routing Information Base (RIB)</a> serves as a database that stores all the routing information and network topology data collected by a router or routing system, such as routes learned from BGP peers. The RIB is constantly updated as new routing information is received or existing routes change. This ensures that the route server always has the most current view of the network topology and can make optimal routing decisions.</p>
   *          <p>The <a href="https://en.wikipedia.org/wiki/Forwarding_information_base">Forwarding Information Base (FIB)</a> serves as a forwarding table for what route server has determined are the best-path routes in the RIB after evaluating all available routing information and policies. The FIB routes are installed on the route tables. The FIB is recomputed whenever there are changes to the RIB.</p>
   * @public
   */
  RouteStatus?: RouteServerRouteStatus | undefined;

  /**
   * <p>The destination CIDR block of the route.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The AS path attributes of the BGP route.</p>
   * @public
   */
  AsPaths?: string[] | undefined;

  /**
   * <p>The Multi-Exit Discriminator (MED) value of the BGP route.</p>
   * @public
   */
  Med?: number | undefined;

  /**
   * <p>The IP address for the next hop.</p>
   * @public
   */
  NextHopIp?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteServerRoutingDatabaseResult {
  /**
   * <p>Indicates whether routes are being persisted in the routing database.</p>
   * @public
   */
  AreRoutesPersisted?: boolean | undefined;

  /**
   * <p>The collection of routes in the route server's routing database.</p>
   * @public
   */
  Routes?: RouteServerRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcRequest {
  /**
   * <p>The VPC ID where the security group can be used.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filters. If using multiple filters, the results include security groups which match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code>: The security group ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code>: The security group's description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code>: The security group name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The security group owner ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>primary-vpc-id</code>: The VPC ID in which the security group was created.</p>
   *             </li>
   *          </ul>
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
 * <p>A security group that can be used by interfaces in the VPC.</p>
 * @public
 */
export interface SecurityGroupForVpc {
  /**
   * <p>The security group's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The security group name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The security group owner ID.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The security group tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The VPC ID in which the security group was created.</p>
   * @public
   */
  PrimaryVpcId?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupsForVpcResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The security group that can be used by interfaces in the VPC.</p>
   * @public
   */
  SecurityGroupForVpcs?: SecurityGroupForVpc[] | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   * @public
   */
  SerialConsoleAccessEnabled?: boolean | undefined;

  /**
   * <p>The entity that manages access to the serial console. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - Access is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - Access is managed by a declarative policy and can't
   *             be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockPublicAccessStateRequest {
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
export interface GetSnapshotBlockPublicAccessStateResult {
  /**
   * <p>The current state of block public access for snapshots. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>block-all-sharing</code> - All public sharing of snapshots is blocked. Users in
   *           the account can't request new public sharing. Additionally, snapshots that were already
   *           publicly shared are treated as private and are not publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-new-sharing</code>  - Only new public sharing of snapshots is blocked.
   *           Users in the account can't request new public sharing. However, snapshots that were
   *           already publicly shared, remain publicly available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unblocked</code>  - Public sharing is not blocked. Users can publicly share
   *           snapshots.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: SnapshotBlockPublicAccessState | undefined;

  /**
   * <p>The entity that manages the state for block public access for snapshots. Possible
   *             values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The state is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The state is managed by a declarative policy and
   *             can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @internal
 */
export const DescribeVpnConnectionsResultFilterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
  ...obj,
  ...(obj.VpnConnections && {
    VpnConnections: obj.VpnConnections.map((item) => VpnConnectionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DetachVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: DetachVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const VerifiedAccessInstanceUserTrustProviderClientConfigurationFilterSensitiveLog = (
  obj: VerifiedAccessInstanceUserTrustProviderClientConfiguration
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportVerifiedAccessInstanceClientConfigurationResultFilterSensitiveLog = (
  obj: ExportVerifiedAccessInstanceClientConfigurationResult
): any => ({
  ...obj,
  ...(obj.UserTrustProvider && {
    UserTrustProvider: VerifiedAccessInstanceUserTrustProviderClientConfigurationFilterSensitiveLog(
      obj.UserTrustProvider
    ),
  }),
});

/**
 * @internal
 */
export const GetInstanceTpmEkPubResultFilterSensitiveLog = (obj: GetInstanceTpmEkPubResult): any => ({
  ...obj,
  ...(obj.KeyValue && { KeyValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLaunchTemplateDataResultFilterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
  ...obj,
  ...(obj.LaunchTemplateData && {
    LaunchTemplateData: ResponseLaunchTemplateDataFilterSensitiveLog(obj.LaunchTemplateData),
  }),
});

/**
 * @internal
 */
export const GetPasswordDataResultFilterSensitiveLog = (obj: GetPasswordDataResult): any => ({
  ...obj,
  ...(obj.PasswordData && { PasswordData: SENSITIVE_STRING }),
});
