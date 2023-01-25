// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  _InstanceType,
  AccessScopeAnalysisFinding,
  AddressAttribute,
  AddressTransfer,
  AllowedPrincipal,
  AssociationStatus,
  CapacityReservationState,
  CurrencyCodeValues,
  EndDateType,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamPoolAllocation,
  IpamResourceDiscoveryAssociation,
  SubnetAssociation,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPolicyTableAssociation,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
} from "./models_0";
import {
  DiskImageFormat,
  InstanceRequirementsRequest,
  IpamResourceTag,
  NetworkInsightsAccessScopeContent,
  Placement,
  PlatformValues,
  RequestIpamResourceTag,
  ResponseLaunchTemplateData,
  ShutdownBehavior,
  TargetCapacityUnitType,
  Vpc,
} from "./models_1";
import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  IpAddressType,
  PayerResponsibility,
  ServiceConfiguration,
  ServiceConnectivityType,
  ServiceTypeDetail,
  State,
  SubnetCidrReservation,
  TransitGatewayPrefixListReference,
  VpcEndpoint,
  VpnConnection,
  VpnGateway,
} from "./models_2";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  ConversionTask,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  Filter,
  ImportImageLicenseConfigurationResponse,
  IpamPoolCidr,
  MetricType,
  PaymentOption,
  PeriodType,
  SnapshotDetail,
  SnapshotTaskDetail,
  StatisticType,
  VirtualizationType,
} from "./models_3";
import { AnalysisStatus, ArchitectureType, VpcAttributeName } from "./models_4";

export interface DescribeVpcAttributeRequest {
  /**
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;

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

export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}

export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>is-classic-link-enabled</code> - Whether the VPC is enabled for ClassicLink
   * 					   (<code>true</code> | <code>false</code>).</p>
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

/**
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

export interface DescribeVpcClassicLinkDnsSupportRequest {
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
   * <p>One or more VPC IDs.</p>
   */
  VpcIds?: string[];
}

/**
 * <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connection-notification-arn</code> - The ARN of the SNS topic for the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>connection-notification-id</code> - The ID of the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>connection-notification-state</code> - The state of the notification
   *                         (<code>Enabled</code> | <code>Disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>connection-notification-type</code> - The type of notification
   *                         (<code>Topic</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-id</code> - The ID of the endpoint service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>The notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ip-address-type</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-owner</code> - The ID of the Amazon Web Services account ID
   * 		        that owns the endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   * 			        (<code>pendingAcceptance</code> | <code>pending</code> |
   * 			        <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   * 			        <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The ID of the VPC endpoint connection.</p>
   */
  VpcEndpointConnectionId?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about the VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ip-address-type</code> - The IP address type (<code>ipv4</code> | <code>ipv6</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the endpoint resides.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   *                         (<code>pendingAcceptance</code> | <code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-type</code> - The type of VPC endpoint (<code>Interface</code> | <code>Gateway</code> | <code>GatewayLoadBalancer</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the endpoint services.</p>
   */
  ServiceIds?: string[];

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
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The service names.</p>
   */
  ServiceNames?: string[];

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
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service.</p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * <p>The tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;

  /**
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];
}

export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>The supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>One or more filters.</p>
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more VPC peering connection IDs.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

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

export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface DescribeVpcsRequest {
  /**
   * <p>One or more filters.</p>
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
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPC IDs.</p>
   *          <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];

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

export interface DescribeVpcsResult {
  /**
   * <p>Information about one or more VPCs.</p>
   */
  Vpcs?: Vpc[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *          <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsResult {
  /**
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: VpnConnection[];
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *          <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysResult {
  /**
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: VpnGateway[];
}

export interface DetachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance to unlink from the VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;
}

export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DetachInternetGatewayRequest {
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
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Use the <code>Force</code> parameter only as a last resort to detach a network interface from a failed instance. </p>
   *                </li>
   *                <li>
   *                   <p>If you use the <code>Force</code> parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.</p>
   *                </li>
   *                <li>
   *                   <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance metadata</a>
   *                         might not get updated. This means that the attributes associated
   *                         with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Force?: boolean;
}

export interface DetachVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DetachVerifiedAccessTrustProviderResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;

  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   */
  Force?: boolean;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   */
  InstanceId?: string;

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

/**
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
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

export interface DisableAddressTransferRequest {
  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   */
  AddressTransfer?: AddressTransfer;
}

export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region or Availability Zone that the metric subscription is disabled for. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * <p>The target Region or Availability Zone that the metric subscription is disabled for. For example, <code>eu-north-1</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The metric used for the disabled subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * <p>The statistic used for the disabled subscription. </p>
   */
  Statistic?: StatisticType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the unsubscribe action was successful.</p>
   */
  Output?: boolean;
}

export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export interface DisableFastLaunchRequest {
  /**
   * <p>The ID of the image for which you’re turning off faster launching, and removing pre-provisioned snapshots.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Forces the image settings to turn off faster launching for your Windows AMI. This parameter overrides
   * 			any errors that are encountered while cleaning up resources in your account.</p>
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableFastLaunchResult {
  /**
   * <p>The ID of the image for which faster-launching has been turned off.</p>
   */
  ImageId?: string;

  /**
   * <p>The pre-provisioning resource type that must be cleaned after turning off faster launching
   * 			for the Windows AMI. Supported values include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>Parameters that were used for faster launching for the Windows AMI before
   * 			faster launching was turned off. This informs the clean-up process.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that was used to launch Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner of the Windows AMI for which faster launching was turned off.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
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

/**
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
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
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

/**
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}

export interface DisableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Organizations member account ID that you want to disable as IPAM account.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

export interface DisableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of disabling the IPAM account.</p>
   */
  Success?: boolean;
}

export interface DisableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export enum TransitGatewayPropagationState {
  disabled = "disabled",
  disabling = "disabling",
  enabled = "enabled",
  enabling = "enabling",
}

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
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
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisableVpcClassicLinkRequest {
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
}

export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisassociateAddressRequest {
  /**
   * <p>[EC2-VPC] The association ID. Required for EC2-VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The ARN of the IAM role to disassociate.</p>
   */
  RoleArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

/**
 * <p>The targets to disassociate from the specified event window.</p>
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * <p>The IDs of the instances to disassociate from the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   */
  DedicatedHostIds?: string[];
}

export interface DisassociateInstanceEventWindowRequest {
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
   * <p>One or more targets to disassociate from the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

export interface DisassociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export interface DisassociateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A resource discovery association ID.</p>
   */
  IpamResourceDiscoveryAssociationId: string | undefined;
}

export interface DisassociateIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery association.</p>
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
}

export interface DisassociateRouteTableRequest {
  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets;</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the disassociated policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to disassociate from the policy table.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   */
  Association?: TransitGatewayPolicyTableAssociation;
}

export interface DisassociateTransitGatewayRouteTableRequest {
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

export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export interface DisassociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the association</p>
   */
  AssociationId: string | undefined;

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

export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export interface DisassociateVpcCidrBlockResult {
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

export interface EnableAddressTransferRequest {
  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   */
  TransferAccountId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   */
  AddressTransfer?: AddressTransfer;
}

export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region or Availability Zone that the metric subscription is enabled for. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * <p>The target Region or Availability Zone that the metric subscription is enabled for. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The metric used for the enabled subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * <p>The statistic used for the enabled subscription.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the subscribe action was successful.</p>
   */
  Output?: boolean;
}

export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

/**
 * <p>Request to create a launch template for a fast-launch enabled Windows AMI.</p>
 *          <note>
 *             <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 * 				<code>LaunchTemplateId</code>, but not both.</p>
 *          </note>
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the launch template to use for faster launching for a Windows AMI.</p>
   */
  Version: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

export interface EnableFastLaunchRequest {
  /**
   * <p>The ID of the image for which you’re enabling faster launching.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The type of resource to use for pre-provisioning the Windows AMI for faster launching.
   * 			Supported values include: <code>snapshot</code>, which is the default value.</p>
   */
  ResourceType?: string;

  /**
   * <p>Configuration settings for creating and managing the snapshots that are used for
   * 			pre-provisioning the Windows AMI for faster launching. The associated <code>ResourceType</code>
   * 			must be <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;

  /**
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   * 			snapshots. Launch template parameters can include either the name or ID of the launch
   * 			template, but not both.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources. Value must be <code>6</code> or greater. </p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableFastLaunchResult {
  /**
   * <p>The image ID that identifies the Windows AMI for which faster launching was enabled.</p>
   */
  ImageId?: string;

  /**
   * <p>The type of resource that was defined for pre-provisioning the Windows AMI for faster launching.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>The configuration settings that were defined for creating and managing the pre-provisioned snapshots
   * 			for faster launching of the Windows AMI. This property is returned when the associated
   * 			<code>resourceType</code> is <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that is used when launching Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances to launch for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner ID for the Windows AMI for which faster launching was enabled.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   */
  SourceSnapshotIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
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

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
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
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}

export interface EnableImageDeprecationRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now, except for public AMIs, where the upper limit is 2 years from the creation date.</p>
   */
  DeprecateAt: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface EnableIpamOrganizationAdminAccountRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Organizations member account ID that you want to enable as the IPAM account.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

export interface EnableIpamOrganizationAdminAccountResult {
  /**
   * <p>The result of enabling the IPAM account.</p>
   */
  Success?: boolean;
}

export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  ReturnValue?: boolean;
}

export interface EnableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableSerialConsoleAccessResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private
   *             gateway must be attached to the same VPC that the routing tables are associated with.
   *         </p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that
   *             the virtual private gateway is attached to. </p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface EnableVolumeIORequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;
}

export interface EnableVpcClassicLinkRequest {
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
}

export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum ClientCertificateRevocationListStatusCode {
  active = "active",
  pending = "pending",
}

/**
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: ClientCertificateRevocationListStatusCode | string;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: ClientCertificateRevocationListStatus;
}

export interface ExportClientVpnClientConfigurationRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format.</p>
   */
  DiskImageFormat: DiskImageFormat | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist.</p>
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the export image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   */
  RoleName?: string;

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

export interface ExportTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the route table.</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;
}

export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about the associated IAM roles.</p>
 */
export interface AssociatedRole {
  /**
   * <p>The ARN of the associated IAM role.</p>
   */
  AssociatedRoleArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The key of the Amazon S3 object ey where the certificate, certificate chain, and encrypted private key bundle
   * 			is stored. The object key is formated as follows:  <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS customer master key (CMK) used to encrypt the private key.</p>
   */
  EncryptionKmsKeyId?: string;
}

export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   */
  AssociatedRoles?: AssociatedRole[];
}

export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;
}

export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>A query used for retrieving network health data. </p>
 */
export interface DataQuery {
  /**
   * <p>A user-defined ID associated with a data query that's returned in the <code>dataResponse</code> identifying the query. For example, if you set the Id to <code>MyQuery01</code>in the query, the <code>dataResponse</code> identifies the query as <code>MyQuery01</code>.</p>
   */
  Id?: string;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * <p>The Region or Availability Zone that's the target for the data query. For example, <code>eu-north-1</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The metric, <code>aggregation-latency</code>, indicating that network latency is aggregated for the query. This is the only supported metric.</p>
   */
  Metric?: MetricType | string;

  /**
   * <p>The metric data aggregation period, <code>p50</code>, between the specified <code>startDate</code> and <code>endDate</code>. For example, a metric of <code>five_minutes</code> is the median of all the data points gathered within those five minutes. <code>p50</code> is the only supported metric.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * <p>The aggregation period used for the data query.</p>
   */
  Period?: PeriodType | string;
}

export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * <p>A list of network performance data queries.</p>
   */
  DataQueries?: DataQuery[];

  /**
   * <p>The starting time for the performance data request. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The ending time for the performance data request. The end time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

/**
 * <p>Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the <code>startDate</code> to the <code>endDate</code>. Currently only <code>five_minutes</code> is supported.</p>
 */
export interface MetricPoint {
  /**
   * <p>The start date for the metric point. The starting date for the metric point. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   */
  StartDate?: Date;

  /**
   * <p>The end date for the metric point. The ending time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   */
  EndDate?: Date;

  Value?: number;
  /**
   * <p>The status of the metric point.</p>
   */
  Status?: string;
}

/**
 * <p>The response to a <code>DataQuery</code>.</p>
 */
export interface DataResponse {
  /**
   * <p>The ID passed in the <code>DataQuery</code>.</p>
   */
  Id?: string;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * <p>The Region or Availability Zone that's the destination for the data query. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * <p>The metric used for the network performance request. Only <code>aggregate-latency</code> is supported, which shows network latency during a specified period. </p>
   */
  Metric?: MetricType | string;

  /**
   * <p>The statistic used for the network performance request.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * <p>The period used for the network performance request.</p>
   */
  Period?: PeriodType | string;

  /**
   * <p>A list of <code>MetricPoint</code> objects.</p>
   */
  MetricPoints?: MetricPoint[];
}

export interface GetAwsNetworkPerformanceDataResult {
  /**
   * <p>The list of data responses.</p>
   */
  DataResponses?: DataResponse[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetCapacityReservationUsageRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>Valid range: Minimum value of 1. Maximum value of 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;
}

export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
   *          <ul>
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
   * <p>Information about the Capacity Reservation usage.</p>
   */
  InstanceUsages?: InstanceUsage[];
}

export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
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

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Services service.</p>
   */
  AwsService?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;
}

export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * <p>Information about the address usage.</p>
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;
}

export interface GetConsoleOutputRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *          <p>Default: disabled (<code>false</code>)</p>
   */
  Latest?: boolean;
}

export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   */
  Output?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;
}

export interface GetConsoleScreenshotRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   */
  WakeUp?: boolean;
}

export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export enum UnlimitedSupportedInstanceFamily {
  t2 = "t2",
  t3 = "t3",
  t3a = "t3a",
  t4g = "t4g",
}

export interface GetDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export interface GetEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export enum PartitionLoadFrequency {
  DAILY = "daily",
  MONTHLY = "monthly",
  NONE = "none",
  WEEKLY = "weekly",
}

/**
 * <p>Describes integration options for Amazon Athena.</p>
 */
export interface AthenaIntegration {
  /**
   * <p>The location in Amazon S3 to store the generated CloudFormation template.</p>
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * <p>The schedule for adding new partitions to the table.</p>
   */
  PartitionLoadFrequency: PartitionLoadFrequency | string | undefined;

  /**
   * <p>The start date for the partition.</p>
   */
  PartitionStartDate?: Date;

  /**
   * <p>The end date for the partition.</p>
   */
  PartitionEndDate?: Date;
}

/**
 * <p>Describes service integrations with VPC Flow logs.</p>
 */
export interface IntegrateServices {
  /**
   * <p>Information about the integration with Amazon Athena.</p>
   */
  AthenaIntegrations?: AthenaIntegration[];
}

export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the flow log.</p>
   */
  FlowLogId: string | undefined;

  /**
   * <p>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</p>
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * <p>Information about the service integration.</p>
   */
  IntegrateServices: IntegrateServices | undefined;
}

export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * <p>The generated CloudFormation template.</p>
   */
  Result?: string;
}

export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 */
export interface CapacityReservationGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   */
  CapacityReservationGroups?: CapacityReservationGroup[];
}

export interface GetHostReservationPurchasePreviewRequest {
  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The offering ID of the reservation.</p>
   */
  OfferingId: string | undefined;
}

/**
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;
}

export interface GetInstanceTypesFromInstanceRequirementsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The processor architecture type.</p>
   */
  ArchitectureTypes: (ArchitectureType | string)[] | undefined;

  /**
   * <p>The virtualization type.</p>
   */
  VirtualizationTypes: (VirtualizationType | string)[] | undefined;

  /**
   * <p>The attributes required for the instance types.</p>
   */
  InstanceRequirements: InstanceRequirementsRequest | undefined;

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
}

/**
 * <p>The list of instance types with the specified instance attributes.</p>
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * <p>The matching instance type.</p>
   */
  InstanceType?: string;
}

export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * <p>The instance types with the specified instance attributes.</p>
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface GetInstanceUefiDataRequest {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetInstanceUefiDataResult {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   */
  InstanceId?: string;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store.</p>
   */
  UefiData?: string;
}

export interface GetIpamAddressHistoryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range.
   *          If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the IPAM scope that the CIDR is in.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the VPC you want your history records filtered by.</p>
   */
  VpcId?: string;

  /**
   * <p>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of historical results you would like returned per page. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export enum IpamComplianceStatus {
  compliant = "compliant",
  ignored = "ignored",
  noncompliant = "noncompliant",
  unmanaged = "unmanaged",
}

export enum IpamOverlapStatus {
  ignored = "ignored",
  nonoverlapping = "nonoverlapping",
  overlapping = "overlapping",
}

export enum IpamAddressHistoryResourceType {
  eip = "eip",
  instance = "instance",
  network_interface = "network-interface",
  subnet = "subnet",
  vpc = "vpc",
}

/**
 * <p>The historical record of a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 */
export interface IpamAddressHistoryRecord {
  /**
   * <p>The ID of the resource owner.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: IpamAddressHistoryResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The CIDR of the resource.</p>
   */
  ResourceCidr?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceComplianceStatus?: IpamComplianceStatus | string;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceOverlapStatus?: IpamOverlapStatus | string;

  /**
   * <p>The VPC ID of the resource.</p>
   */
  VpcId?: string;

  /**
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   */
  SampledStartTime?: Date;

  /**
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   */
  SampledEndTime?: Date;
}

export interface GetIpamAddressHistoryResult {
  /**
   * <p>A historical record for a CIDR within an IPAM scope. If the CIDR is associated with an EC2 instance, you will see an object in the response for the instance and one for the network interface.</p>
   */
  HistoryRecords?: IpamAddressHistoryRecord[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetIpamDiscoveredAccountsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.</p>
   */
  DiscoveryRegion: string | undefined;

  /**
   * <p>Discovered account filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of discovered accounts to return in one page of results.</p>
   */
  MaxResults?: number;
}

export enum IpamDiscoveryFailureCode {
  assume_role_failure = "assume-role-failure",
  throttling_failure = "throttling-failure",
  unauthorized_failure = "unauthorized-failure",
}

/**
 * <p>The discovery failure reason.</p>
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
   */
  Code?: IpamDiscoveryFailureCode | string;

  /**
   * <p>The discovery failure message.</p>
   */
  Message?: string;
}

/**
 * <p>An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.</p>
 */
export interface IpamDiscoveredAccount {
  /**
   * <p>The account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Web Services Region that the account information is returned from.
   *          An account can be discovered in multiple regions and will have a separate discovered account for each Region.</p>
   */
  DiscoveryRegion?: string;

  /**
   * <p>The resource discovery failure reason.</p>
   */
  FailureReason?: IpamDiscoveryFailureReason;

  /**
   * <p>The last attempted resource discovery time.</p>
   */
  LastAttemptedDiscoveryTime?: Date;

  /**
   * <p>The last successful resource discovery time.</p>
   */
  LastSuccessfulDiscoveryTime?: Date;
}

export interface GetIpamDiscoveredAccountsResult {
  /**
   * <p>Discovered accounts.</p>
   */
  IpamDiscoveredAccounts?: IpamDiscoveredAccount[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetIpamDiscoveredResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>A resource Region.</p>
   */
  ResourceRegion: string | undefined;

  /**
   * <p>Filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of discovered resource CIDRs to return in one page of results.</p>
   */
  MaxResults?: number;
}

export enum IpamResourceType {
  eip = "eip",
  ipv6_pool = "ipv6-pool",
  public_ipv4_pool = "public-ipv4-pool",
  subnet = "subnet",
  vpc = "vpc",
}

/**
 * <p>An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.</p>
 */
export interface IpamDiscoveredResourceCidr {
  /**
   * <p>The resource discovery ID.</p>
   */
  IpamResourceDiscoveryId?: string;

  /**
   * <p>The resource Region.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource owner ID.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource CIDR.</p>
   */
  ResourceCidr?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * <p>The resource tags.</p>
   */
  ResourceTags?: IpamResourceTag[];

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
   */
  IpUsage?: number;

  /**
   * <p>The VPC ID.</p>
   */
  VpcId?: string;

  /**
   * <p>The last successful resource discovery time.</p>
   */
  SampleTime?: Date;
}

export interface GetIpamDiscoveredResourceCidrsResult {
  /**
   * <p>Discovered resource CIDRs.</p>
   */
  IpamDiscoveredResourceCidrs?: IpamDiscoveredResourceCidr[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetIpamPoolAllocationsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool you want to see the allocations for.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   */
  IpamPoolAllocationId?: string;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results you would like returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetIpamPoolAllocationsResult {
  /**
   * <p>The IPAM pool allocations you want information on.</p>
   */
  IpamPoolAllocations?: IpamPoolAllocation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetIpamPoolCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool you want the CIDR for.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetIpamPoolCidrsResult {
  /**
   * <p>Information about the CIDRs provisioned to an IPAM pool.</p>
   */
  IpamPoolCidrs?: IpamPoolCidr[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetIpamResourceCidrsRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the scope that the resource is in.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The ID of the IPAM pool that the resource is in.</p>
   */
  IpamPoolId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * <p>The resource tag.</p>
   */
  ResourceTag?: RequestIpamResourceTag;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwner?: string;
}

export enum IpamManagementState {
  ignored = "ignored",
  managed = "managed",
  unmanaged = "unmanaged",
}

/**
 * <p>The CIDR for an IPAM resource.</p>
 */
export interface IpamResourceCidr {
  /**
   * <p>The IPAM ID for an IPAM resource.</p>
   */
  IpamId?: string;

  /**
   * <p>The scope ID for an IPAM resource.</p>
   */
  IpamScopeId?: string;

  /**
   * <p>The pool ID for an IPAM resource.</p>
   */
  IpamPoolId?: string;

  /**
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   */
  ResourceRegion?: string;

  /**
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of an IPAM resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of an IPAM resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The CIDR for an IPAM resource.</p>
   */
  ResourceCidr?: string;

  /**
   * <p>The type of IPAM resource.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * <p>The tags for an IPAM resource.</p>
   */
  ResourceTags?: IpamResourceTag[];

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
   */
  IpUsage?: number;

  /**
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ComplianceStatus?: IpamComplianceStatus | string;

  /**
   * <p>The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ManagementState?: IpamManagementState | string;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OverlapStatus?: IpamOverlapStatus | string;

  /**
   * <p>The ID of a VPC.</p>
   */
  VpcId?: string;
}

export interface GetIpamResourceCidrsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The resource CIDRs.</p>
   */
  IpamResourceCidrs?: IpamResourceCidr[];
}

export interface GetLaunchTemplateDataRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export interface GetManagedPrefixListAssociationsRequest {
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

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

export interface GetManagedPrefixListAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  PrefixListAssociations?: PrefixListAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetManagedPrefixListEntriesRequest {
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

  /**
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   */
  TargetVersion?: number;

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

/**
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;
}

export interface GetManagedPrefixListEntriesResult {
  /**
   * <p>Information about the prefix list entries.</p>
   */
  Entries?: PrefixListEntry[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The status of Network Access Scope Analysis.</p>
   */
  AnalysisStatus?: AnalysisStatus | string;

  /**
   * <p>The findings associated with Network Access Scope Analysis.</p>
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

export interface GetPasswordDataRequest {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;

  /**
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

/**
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

/**
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

/**
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;
}

export interface GetSerialConsoleAccessStatusRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetSerialConsoleAccessStatusResult {
  /**
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

/**
 * <p>The architecture type, virtualization type, and other attributes for the instance types.
 *          When you specify instance attributes, Amazon EC2 will identify instance types with those
 *          attributes.</p>
 *          <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify
 *          <code>InstanceTypes</code>.</p>
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * <p>The architecture type.</p>
   */
  ArchitectureTypes?: (ArchitectureType | string)[];

  /**
   * <p>The virtualization type.</p>
   */
  VirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;
}

export interface GetSpotPlacementScoresRequest {
  /**
   * <p>The instance types. We recommend that you specify at least three instance types. If you
   *          specify one or two instance types, or specify variations of a single instance type (for
   *          example, an <code>m3.xlarge</code> with and without instance storage), the returned
   *          placement score will always be low. </p>
   *          <p>If you specify <code>InstanceTypes</code>, you can't specify
   *             <code>InstanceRequirementsWithMetadata</code>.</p>
   */
  InstanceTypes?: string[];

  /**
   * <p>The target capacity.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;

  /**
   * <p>Specify <code>true</code> so that the response returns a list of scored Availability Zones.
   *          Otherwise, the response returns a list of scored Regions.</p>
   *          <p>A list of scored Availability Zones is useful if you want to launch all of your Spot
   *          capacity into a single Availability Zone.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * <p>The Regions used to narrow down the list of Regions to be scored. Enter the Region code,
   *          for example, <code>us-east-1</code>.</p>
   */
  RegionNames?: string[];

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <p>If you specify <code>InstanceRequirementsWithMetadata</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 1 and
   *       1000. The default value is 1000. To retrieve the remaining results, make another call with
   *       the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 */
export interface SpotPlacementScore {
  /**
   * <p>The Region.</p>
   */
  Region?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   */
  Score?: number;
}

export interface GetSpotPlacementScoresResult {
  /**
   * <p>The Spot placement score for the top 10 Regions or Availability Zones, scored on a scale
   *          from 1 to 10. Each score  reflects how likely it is that each Region or Availability Zone
   *          will succeed at fulfilling the specified target capacity  <i>at the time of the Spot
   *             placement score request</i>. A score of <code>10</code> means that your Spot
   *          capacity request is highly likely to succeed in that Region or Availability Zone. </p>
   *          <p>If you request a Spot placement score for Regions, a high score assumes that your fleet
   *          request will be configured to use all Availability Zones and the
   *             <code>capacity-optimized</code> allocation strategy. If you request a Spot placement
   *          score for Availability Zones, a high score assumes that your fleet request will be
   *          configured to use a single Availability Zone and the <code>capacity-optimized</code>
   *          allocation strategy.</p>
   *          <p>Different  Regions or Availability Zones might return the same score.</p>
   *          <note>
   *             <p>The Spot placement score serves as a recommendation only. No score guarantees that your
   *             Spot request will be fully or partially fulfilled.</p>
   *          </note>
   */
  SpotPlacementScores?: SpotPlacementScore[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface GetSubnetCidrReservationsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reservationType</code> - The type of reservation (<code>prefix</code> |
   *                     <code>explicit</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
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
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

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

export interface GetSubnetCidrReservationsResult {
  /**
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[];

  /**
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
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

/**
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * <p>Information about the propagation route tables.</p>
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> | <code>associating</code> |
   *                         <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
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

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
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
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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

export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * <p>Returns details about the transit gateway policy table association.</p>
   */
  Associations?: TransitGatewayPolicyTableAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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

/**
 * <p>Describes the meta data tags associated with a transit gateway policy rule.</p>
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * <p>The key name for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataKey?: string;

  /**
   * <p>The value of the key for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataValue?: string;
}

/**
 * <p>Describes a rule associated with a transit gateway policy.</p>
 */
export interface TransitGatewayPolicyRule {
  /**
   * <p>The source CIDR block for the transit gateway policy rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  SourcePortRange?: string;

  /**
   * <p>The destination CIDR block for the transit gateway policy rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  DestinationPortRange?: string;

  /**
   * <p>The protocol used by the transit gateway policy rule.</p>
   */
  Protocol?: string;

  /**
   * <p>The meta data tags used for the transit gateway policy rule.</p>
   */
  MetaData?: TransitGatewayPolicyRuleMetaData;
}

/**
 * <p>Describes a transit gateway policy table entry</p>
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * <p>The rule number for the transit gateway policy table entry.</p>
   */
  PolicyRuleNumber?: string;

  /**
   * <p>The policy rule associated with the transit gateway policy table.</p>
   */
  PolicyRule?: TransitGatewayPolicyRule;

  /**
   * <p>The ID of the target route table.</p>
   */
  TargetRouteTableId?: string;
}

export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * <p>The entries for the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[];
}

export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The ID of the resource for the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The type of resource for the
   *                     attachment. Valid values are <code>vpc</code> | <code>vpn</code> |
   *                         <code>direct-connect-gateway</code> | <code>peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-blackhole</code> - Whether traffic matching the route is blocked (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-owner-id</code> - The ID of the owner of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the prefix list reference (<code>pending</code> | <code>available</code> | <code>modifying</code> | <code>deleting</code>).</p>
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

export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * <p>Information about the prefix list references.</p>
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
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

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
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

export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
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

/**
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetVerifiedAccessGroupPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * <p>The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample
   *             configuration.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.</p>
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * <p>The IKE version to be used in the sample configuration file for your customer gateway
   *             device. You can specify one of the following versions: <code>ikev1</code> or
   *                 <code>ikev2</code>.</p>
   */
  InternetKeyExchangeVersion?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * <p>Sample configuration file for the specified customer gateway device.</p>
   */
  VpnConnectionDeviceSampleConfiguration?: string;
}

export interface GetVpnConnectionDeviceTypesRequest {
  /**
   * <p>The maximum number of results returned by <code>GetVpnConnectionDeviceTypes</code> in
   *             paginated output. When this parameter is used, <code>GetVpnConnectionDeviceTypes</code>
   *             only returns <code>MaxResults</code> results in a single page along with a
   *                 <code>NextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another <code>GetVpnConnectionDeviceTypes</code> request
   *             with the returned <code>NextToken</code> value. This value can be between 200 and 1000.
   *             If this parameter is not used, then <code>GetVpnConnectionDeviceTypes</code> returns all
   *             results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *                 <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>NextToken</code> value. This value
   *             is null when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 */
export interface VpnConnectionDeviceType {
  /**
   * <p>Customer gateway device identifier.</p>
   */
  VpnConnectionDeviceTypeId?: string;

  /**
   * <p>Customer gateway device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>Customer gateway device platform.</p>
   */
  Platform?: string;

  /**
   * <p>Customer gateway device software version.</p>
   */
  Software?: string;
}

export interface GetVpnConnectionDeviceTypesResult {
  /**
   * <p>List of customer gateway devices that have a sample configuration file available for
   *             use.</p>
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[];

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *                 <code>GetVpnConnectionDeviceTypes</code> request. When the results of a
   *                 <code>GetVpnConnectionDeviceTypes</code> request exceed <code>MaxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is null when
   *             there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>Client VPN Administrator Guide</i>.</p>
   */
  CertificateRevocationList: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Describes the client-specific data.</p>
 */
export interface ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   */
  Comment?: string;

  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;

  /**
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucket {
  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

/**
 * <p>The request information of license configurations.</p>
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export interface ImportImageRequest {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description string for the import image task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk containers.</p>
   */
  DiskContainers?: ImageDiskContainer[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used
   *    unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>Specify <code>AWS</code> to replace the source-system license with an Amazon Web Services
   *    license or <code>BYOL</code> to retain the source-system license. Leaving this parameter
   *    undefined is the same as choosing <code>AWS</code> when importing a Windows Server operating
   *    system, and the same as choosing <code>BYOL</code> when importing a Windows client operating
   *    system (such as Windows 10) or a Linux operating system.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   */
  Platform?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * <p>The tags to apply to the import image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The usage operation value. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#prerequisites">Licensing options</a> in the <i>VM Import/Export User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The boot mode of the virtual machine.</p>
   */
  BootMode?: BootModeValues | string;
}

export interface ImportImageResult {
  /**
   * <p>The architecture of the virtual machine.</p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the AMI is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor of the import task.</p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   */
  ImageId?: string;

  /**
   * <p>The task ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the symmetric KMS key that was used to create the encrypted AMI.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   */
  Platform?: string;

  /**
   * <p>The progress of the task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>A brief status of the task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message of the import task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>Any tags assigned to the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDetail {
  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Bytes: number | undefined;

  /**
   * <p>The disk image format.</p>
   */
  Format: DiskImageFormat | string | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl: string | undefined;
}

/**
 * <p>Describes an EBS volume.</p>
 */
export interface VolumeDetail {
  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size: number | undefined;
}

/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImage {
  /**
   * <p>A description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk image.</p>
   */
  Image?: DiskImageDetail;

  /**
   * <p>Information about the volume.</p>
   */
  Volume?: VolumeDetail;
}

/**
 * <p>Describes the user data for an instance.</p>
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   */
  Data?: string;
}

/**
 * <p>Describes the launch specification for VM import.</p>
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>The architecture of the instance.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The security group IDs.</p>
   */
  GroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  GroupNames?: string[];

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Monitoring?: boolean;

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data to make available to the instance.</p>
   */
  UserData?: UserData;
}

export interface ImportInstanceRequest {
  /**
   * <p>A description for the instance being imported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image.</p>
   */
  DiskImages?: DiskImage[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification;

  /**
   * <p>The instance operating system.</p>
   */
  Platform: PlatformValues | string | undefined;
}

export interface ImportInstanceResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export interface ImportKeyPairRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique name for the key pair.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>The public key. For API calls, the text must be base64-encoded. For command line tools, base64 encoding is performed for you.</p>
   */
  PublicKeyMaterial: Uint8Array | undefined;

  /**
   * <p>The tags to apply to the imported key pair.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface ImportKeyPairResult {
  /**
   * <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * <p>The key pair name that you provided.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the resulting key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>The tags applied to the imported key pair.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The disk container object for the import snapshot request.</p>
 */
export interface SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   */
  Description?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export interface ImportSnapshotRequest {
  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>Token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The description string for the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk container.</p>
   */
  DiskContainer?: SnapshotDiskContainer;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is
   *    used unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>An identifier for the symmetric KMS key to use when creating the
   *    encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this
   *    parameter is not specified, the default KMS key for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The KMS key identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>key</code> namespace, and then the key ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the key, the Amazon Web Services account ID of the key owner, the <code>alias</code> namespace, and then the key alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified KMS key must exist in the Region that the snapshot is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>The tags to apply to the import snapshot task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface ImportSnapshotResult {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Information about the import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>Any tags assigned to the import snapshot task.</p>
   */
  Tags?: Tag[];
}

export interface ImportVolumeRequest {
  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>A description of the volume.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The disk image.</p>
   */
  Image: DiskImageDetail | undefined;

  /**
   * <p>The volume size.</p>
   */
  Volume: VolumeDetail | undefined;
}

export interface ImportVolumeResult {
  /**
   * <p>Information about the conversion task.</p>
   */
  ConversionTask?: ConversionTask;
}

export interface ListImagesInRecycleBinRequest {
  /**
   * <p>The IDs of the AMIs to list. Omit this parameter to list all of the AMIs that
   *       are in the Recycle Bin. You can specify up to 20 IDs in a single request.</p>
   */
  ImageIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If you do not specify a value for <i>MaxResults</i>, the request
   *       returns 1,000 items per page by default. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">
   *         Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about an AMI that is currently in the Recycle Bin.</p>
 */
export interface ImageRecycleBinInfo {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the AMI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AMI.</p>
   */
  Description?: string;

  /**
   * <p>The date and time when the AMI entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * <p>The date and time when the AMI is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;
}

export interface ListImagesInRecycleBinResult {
  /**
   * <p>Information about the AMIs.</p>
   */
  Images?: ImageRecycleBinInfo[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListSnapshotsInRecycleBinRequest {
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
   * <p>The IDs of the snapshots to list. Omit this parameter to list all of the
   *       snapshots that are in the Recycle Bin.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Information about a snapshot that is currently in the Recycle Bin.</p>
 */
export interface SnapshotRecycleBinInfo {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The date and time when the snaphsot entered the Recycle Bin.</p>
   */
  RecycleBinEnterTime?: Date;

  /**
   * <p>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</p>
   */
  RecycleBinExitTime?: Date;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   */
  VolumeId?: string;
}

export interface ListSnapshotsInRecycleBinResult {
  /**
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: SnapshotRecycleBinInfo[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ModifyAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>The domain name to modify for the IP address.</p>
   */
  DomainName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyAddressAttributeResult {
  /**
   * <p>Information about the Elastic IP address.</p>
   */
  Address?: AddressAttribute;
}

export enum ModifyAvailabilityZoneOptInStatus {
  not_opted_in = "not-opted-in",
  opted_in = "opted-in",
}

export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Indicates whether you are opted in to the Local Zone group or Wavelength Zone group. The
   *       only valid value is <code>opted-in</code>. You must contact <a href="https://console.aws.amazon.com/support/home#/case/create%3FissueType=customer-service%26serviceCode=general-info%26getting-started%26categoryCode=using-aws%26services">Amazon Web Services Support</a> to opt out of a Local Zone or Wavelength Zone group.</p>
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyAvailabilityZoneGroupResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export interface ModifyCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity. The number of instances can't be increased or
   * 		    	decreased by more than <code>1000</code> in a single request.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   *          <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   */
  EndDateType?: EndDateType | string;

  /**
   * <p>Reserved. Capacity Reservations you have created are accepted by default.</p>
   */
  Accept?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Reserved for future use.</p>
   */
  AdditionalInfo?: string;
}

export interface ModifyCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ModifyCapacityReservationFleetRequest {
  /**
   * <p>The ID of the Capacity Reservation Fleet to modify.</p>
   */
  CapacityReservationFleetId: string | undefined;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet. This value,
   * 			together with the instance type weights that you assign to each instance type used by the Fleet
   * 			determine the number of instances for which the Fleet reserves capacity. Both values are based on
   * 			units that make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target capacity</a>
   * 			in the Amazon EC2 User Guide.</p>
   */
  TotalTargetCapacity?: number;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity Reservation
   * 			Fleet expires, its state changes to <code>expired</code> and all of the Capacity Reservations in the
   * 			Fleet expire.</p>
   *          <p>The Capacity Reservation Fleet expires within an hour after the specified time. For example, if you
   * 			specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity Reservation Fleet is guaranteed
   * 			to expire between <code>13:30:55</code> and <code>14:30:55</code> on <code>5/31/2019</code>.</p>
   *          <p>You can't specify <b>EndDate</b> and <b>
   * 			RemoveEndDate</b> in the same request.</p>
   */
  EndDate?: Date;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to remove the end date from the Capacity Reservation Fleet. If you remove the
   * 			end date, the Capacity Reservation Fleet does not expire and it remains active until you explicitly
   * 			cancel it using the <b>CancelCapacityReservationFleet</b> action.</p>
   *          <p>You can't specify <b>RemoveEndDate</b> and <b>
   * 			EndDate</b> in the same request.</p>
   */
  RemoveEndDate?: boolean;
}

export interface ModifyCapacityReservationFleetResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Information about the DNS server to be used.</p>
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   */
  CustomDnsServers?: string[];

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   */
  Enabled?: boolean;
}

/**
 * @internal
 */
export const DescribeVpcAttributeRequestFilterSensitiveLog = (obj: DescribeVpcAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcAttributeResultFilterSensitiveLog = (obj: DescribeVpcAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkRequestFilterSensitiveLog = (obj: DescribeVpcClassicLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcClassicLinkFilterSensitiveLog = (obj: VpcClassicLink): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkResultFilterSensitiveLog = (obj: DescribeVpcClassicLinkResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkDnsSupportRequestFilterSensitiveLog = (
  obj: DescribeVpcClassicLinkDnsSupportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassicLinkDnsSupportFilterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcClassicLinkDnsSupportResultFilterSensitiveLog = (
  obj: DescribeVpcClassicLinkDnsSupportResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionNotificationsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionNotificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionNotificationsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionNotificationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointConnectionFilterSensitiveLog = (obj: VpcEndpointConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointConnectionsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsRequestFilterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsResultFilterSensitiveLog = (obj: DescribeVpcEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServiceConfigurationsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointServiceConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServiceConfigurationsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointServiceConfigurationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicePermissionsRequestFilterSensitiveLog = (
  obj: DescribeVpcEndpointServicePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicePermissionsResultFilterSensitiveLog = (
  obj: DescribeVpcEndpointServicePermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicesRequestFilterSensitiveLog = (obj: DescribeVpcEndpointServicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsDetailsFilterSensitiveLog = (obj: PrivateDnsDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceDetailFilterSensitiveLog = (obj: ServiceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointServicesResultFilterSensitiveLog = (obj: DescribeVpcEndpointServicesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcPeeringConnectionsRequestFilterSensitiveLog = (
  obj: DescribeVpcPeeringConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcPeeringConnectionsResultFilterSensitiveLog = (
  obj: DescribeVpcPeeringConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcsRequestFilterSensitiveLog = (obj: DescribeVpcsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcsResultFilterSensitiveLog = (obj: DescribeVpcsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnConnectionsRequestFilterSensitiveLog = (obj: DescribeVpnConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnConnectionsResultFilterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnGatewaysRequestFilterSensitiveLog = (obj: DescribeVpnGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpnGatewaysResultFilterSensitiveLog = (obj: DescribeVpnGatewaysResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachClassicLinkVpcRequestFilterSensitiveLog = (obj: DetachClassicLinkVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachClassicLinkVpcResultFilterSensitiveLog = (obj: DetachClassicLinkVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachInternetGatewayRequestFilterSensitiveLog = (obj: DetachInternetGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachNetworkInterfaceRequestFilterSensitiveLog = (obj: DetachNetworkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: DetachVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: DetachVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVolumeRequestFilterSensitiveLog = (obj: DetachVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachVpnGatewayRequestFilterSensitiveLog = (obj: DetachVpnGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableAddressTransferRequestFilterSensitiveLog = (obj: DisableAddressTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableAddressTransferResultFilterSensitiveLog = (obj: DisableAddressTransferResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableAwsNetworkPerformanceMetricSubscriptionRequestFilterSensitiveLog = (
  obj: DisableAwsNetworkPerformanceMetricSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableAwsNetworkPerformanceMetricSubscriptionResultFilterSensitiveLog = (
  obj: DisableAwsNetworkPerformanceMetricSubscriptionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableEbsEncryptionByDefaultRequestFilterSensitiveLog = (
  obj: DisableEbsEncryptionByDefaultRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableEbsEncryptionByDefaultResultFilterSensitiveLog = (
  obj: DisableEbsEncryptionByDefaultResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastLaunchRequestFilterSensitiveLog = (obj: DisableFastLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastLaunchResultFilterSensitiveLog = (obj: DisableFastLaunchResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoresRequestFilterSensitiveLog = (obj: DisableFastSnapshotRestoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreSuccessItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreStateErrorFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreStateError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreStateErrorItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreStateErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoreErrorItemFilterSensitiveLog = (
  obj: DisableFastSnapshotRestoreErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableFastSnapshotRestoresResultFilterSensitiveLog = (obj: DisableFastSnapshotRestoresResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImageDeprecationRequestFilterSensitiveLog = (obj: DisableImageDeprecationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImageDeprecationResultFilterSensitiveLog = (obj: DisableImageDeprecationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableIpamOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DisableIpamOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableIpamOrganizationAdminAccountResultFilterSensitiveLog = (
  obj: DisableIpamOrganizationAdminAccountResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSerialConsoleAccessRequestFilterSensitiveLog = (obj: DisableSerialConsoleAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSerialConsoleAccessResultFilterSensitiveLog = (obj: DisableSerialConsoleAccessResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableTransitGatewayRouteTablePropagationRequestFilterSensitiveLog = (
  obj: DisableTransitGatewayRouteTablePropagationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPropagationFilterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableTransitGatewayRouteTablePropagationResultFilterSensitiveLog = (
  obj: DisableTransitGatewayRouteTablePropagationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVgwRoutePropagationRequestFilterSensitiveLog = (obj: DisableVgwRoutePropagationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkRequestFilterSensitiveLog = (obj: DisableVpcClassicLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkResultFilterSensitiveLog = (obj: DisableVpcClassicLinkResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkDnsSupportRequestFilterSensitiveLog = (
  obj: DisableVpcClassicLinkDnsSupportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableVpcClassicLinkDnsSupportResultFilterSensitiveLog = (
  obj: DisableVpcClassicLinkDnsSupportResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAddressRequestFilterSensitiveLog = (obj: DisassociateAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateClientVpnTargetNetworkRequestFilterSensitiveLog = (
  obj: DisassociateClientVpnTargetNetworkRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateClientVpnTargetNetworkResultFilterSensitiveLog = (
  obj: DisassociateClientVpnTargetNetworkResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateEnclaveCertificateIamRoleRequestFilterSensitiveLog = (
  obj: DisassociateEnclaveCertificateIamRoleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateEnclaveCertificateIamRoleResultFilterSensitiveLog = (
  obj: DisassociateEnclaveCertificateIamRoleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIamInstanceProfileRequestFilterSensitiveLog = (
  obj: DisassociateIamInstanceProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIamInstanceProfileResultFilterSensitiveLog = (
  obj: DisassociateIamInstanceProfileResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceEventWindowDisassociationRequestFilterSensitiveLog = (
  obj: InstanceEventWindowDisassociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateInstanceEventWindowRequestFilterSensitiveLog = (
  obj: DisassociateInstanceEventWindowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateInstanceEventWindowResultFilterSensitiveLog = (
  obj: DisassociateInstanceEventWindowResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIpamResourceDiscoveryRequestFilterSensitiveLog = (
  obj: DisassociateIpamResourceDiscoveryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIpamResourceDiscoveryResultFilterSensitiveLog = (
  obj: DisassociateIpamResourceDiscoveryResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRouteTableRequestFilterSensitiveLog = (obj: DisassociateRouteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetCidrBlockRequestFilterSensitiveLog = (obj: DisassociateSubnetCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSubnetCidrBlockResultFilterSensitiveLog = (obj: DisassociateSubnetCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayMulticastDomainRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayMulticastDomainRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayMulticastDomainResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayMulticastDomainResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayPolicyTableRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayPolicyTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayPolicyTableResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayPolicyTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayRouteTableRequestFilterSensitiveLog = (
  obj: DisassociateTransitGatewayRouteTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTransitGatewayRouteTableResultFilterSensitiveLog = (
  obj: DisassociateTransitGatewayRouteTableResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrunkInterfaceRequestFilterSensitiveLog = (obj: DisassociateTrunkInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrunkInterfaceResultFilterSensitiveLog = (obj: DisassociateTrunkInterfaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVpcCidrBlockRequestFilterSensitiveLog = (obj: DisassociateVpcCidrBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateVpcCidrBlockResultFilterSensitiveLog = (obj: DisassociateVpcCidrBlockResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableAddressTransferRequestFilterSensitiveLog = (obj: EnableAddressTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableAddressTransferResultFilterSensitiveLog = (obj: EnableAddressTransferResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableAwsNetworkPerformanceMetricSubscriptionRequestFilterSensitiveLog = (
  obj: EnableAwsNetworkPerformanceMetricSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableAwsNetworkPerformanceMetricSubscriptionResultFilterSensitiveLog = (
  obj: EnableAwsNetworkPerformanceMetricSubscriptionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableEbsEncryptionByDefaultRequestFilterSensitiveLog = (
  obj: EnableEbsEncryptionByDefaultRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableEbsEncryptionByDefaultResultFilterSensitiveLog = (obj: EnableEbsEncryptionByDefaultResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchLaunchTemplateSpecificationRequestFilterSensitiveLog = (
  obj: FastLaunchLaunchTemplateSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchSnapshotConfigurationRequestFilterSensitiveLog = (
  obj: FastLaunchSnapshotConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastLaunchRequestFilterSensitiveLog = (obj: EnableFastLaunchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastLaunchResultFilterSensitiveLog = (obj: EnableFastLaunchResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoresRequestFilterSensitiveLog = (obj: EnableFastSnapshotRestoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoreSuccessItemFilterSensitiveLog = (
  obj: EnableFastSnapshotRestoreSuccessItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoreStateErrorFilterSensitiveLog = (
  obj: EnableFastSnapshotRestoreStateError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoreStateErrorItemFilterSensitiveLog = (
  obj: EnableFastSnapshotRestoreStateErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoreErrorItemFilterSensitiveLog = (obj: EnableFastSnapshotRestoreErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableFastSnapshotRestoresResultFilterSensitiveLog = (obj: EnableFastSnapshotRestoresResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableImageDeprecationRequestFilterSensitiveLog = (obj: EnableImageDeprecationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableImageDeprecationResultFilterSensitiveLog = (obj: EnableImageDeprecationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableIpamOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: EnableIpamOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableIpamOrganizationAdminAccountResultFilterSensitiveLog = (
  obj: EnableIpamOrganizationAdminAccountResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableReachabilityAnalyzerOrganizationSharingRequestFilterSensitiveLog = (
  obj: EnableReachabilityAnalyzerOrganizationSharingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableReachabilityAnalyzerOrganizationSharingResultFilterSensitiveLog = (
  obj: EnableReachabilityAnalyzerOrganizationSharingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSerialConsoleAccessRequestFilterSensitiveLog = (obj: EnableSerialConsoleAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSerialConsoleAccessResultFilterSensitiveLog = (obj: EnableSerialConsoleAccessResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableTransitGatewayRouteTablePropagationRequestFilterSensitiveLog = (
  obj: EnableTransitGatewayRouteTablePropagationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableTransitGatewayRouteTablePropagationResultFilterSensitiveLog = (
  obj: EnableTransitGatewayRouteTablePropagationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVgwRoutePropagationRequestFilterSensitiveLog = (obj: EnableVgwRoutePropagationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVolumeIORequestFilterSensitiveLog = (obj: EnableVolumeIORequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVpcClassicLinkRequestFilterSensitiveLog = (obj: EnableVpcClassicLinkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVpcClassicLinkResultFilterSensitiveLog = (obj: EnableVpcClassicLinkResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVpcClassicLinkDnsSupportRequestFilterSensitiveLog = (
  obj: EnableVpcClassicLinkDnsSupportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableVpcClassicLinkDnsSupportResultFilterSensitiveLog = (
  obj: EnableVpcClassicLinkDnsSupportResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog = (
  obj: ExportClientVpnClientCertificateRevocationListRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientCertificateRevocationListStatusFilterSensitiveLog = (
  obj: ClientCertificateRevocationListStatus
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportClientVpnClientCertificateRevocationListResultFilterSensitiveLog = (
  obj: ExportClientVpnClientCertificateRevocationListResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportClientVpnClientConfigurationRequestFilterSensitiveLog = (
  obj: ExportClientVpnClientConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportClientVpnClientConfigurationResultFilterSensitiveLog = (
  obj: ExportClientVpnClientConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskS3LocationRequestFilterSensitiveLog = (obj: ExportTaskS3LocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportImageRequestFilterSensitiveLog = (obj: ExportImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportImageResultFilterSensitiveLog = (obj: ExportImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTransitGatewayRoutesRequestFilterSensitiveLog = (obj: ExportTransitGatewayRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTransitGatewayRoutesResultFilterSensitiveLog = (obj: ExportTransitGatewayRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedEnclaveCertificateIamRolesRequestFilterSensitiveLog = (
  obj: GetAssociatedEnclaveCertificateIamRolesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedRoleFilterSensitiveLog = (obj: AssociatedRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedEnclaveCertificateIamRolesResultFilterSensitiveLog = (
  obj: GetAssociatedEnclaveCertificateIamRolesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedIpv6PoolCidrsRequestFilterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const Ipv6CidrAssociationFilterSensitiveLog = (obj: Ipv6CidrAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociatedIpv6PoolCidrsResultFilterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQueryFilterSensitiveLog = (obj: DataQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAwsNetworkPerformanceDataRequestFilterSensitiveLog = (
  obj: GetAwsNetworkPerformanceDataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricPointFilterSensitiveLog = (obj: MetricPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataResponseFilterSensitiveLog = (obj: DataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAwsNetworkPerformanceDataResultFilterSensitiveLog = (obj: GetAwsNetworkPerformanceDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCapacityReservationUsageRequestFilterSensitiveLog = (obj: GetCapacityReservationUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceUsageFilterSensitiveLog = (obj: InstanceUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCapacityReservationUsageResultFilterSensitiveLog = (obj: GetCapacityReservationUsageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoipPoolUsageRequestFilterSensitiveLog = (obj: GetCoipPoolUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CoipAddressUsageFilterSensitiveLog = (obj: CoipAddressUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCoipPoolUsageResultFilterSensitiveLog = (obj: GetCoipPoolUsageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConsoleOutputRequestFilterSensitiveLog = (obj: GetConsoleOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConsoleOutputResultFilterSensitiveLog = (obj: GetConsoleOutputResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConsoleScreenshotRequestFilterSensitiveLog = (obj: GetConsoleScreenshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConsoleScreenshotResultFilterSensitiveLog = (obj: GetConsoleScreenshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDefaultCreditSpecificationRequestFilterSensitiveLog = (
  obj: GetDefaultCreditSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFamilyCreditSpecificationFilterSensitiveLog = (obj: InstanceFamilyCreditSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDefaultCreditSpecificationResultFilterSensitiveLog = (
  obj: GetDefaultCreditSpecificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEbsDefaultKmsKeyIdRequestFilterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEbsDefaultKmsKeyIdResultFilterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEbsEncryptionByDefaultRequestFilterSensitiveLog = (obj: GetEbsEncryptionByDefaultRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEbsEncryptionByDefaultResultFilterSensitiveLog = (obj: GetEbsEncryptionByDefaultResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AthenaIntegrationFilterSensitiveLog = (obj: AthenaIntegration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntegrateServicesFilterSensitiveLog = (obj: IntegrateServices): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFlowLogsIntegrationTemplateRequestFilterSensitiveLog = (
  obj: GetFlowLogsIntegrationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFlowLogsIntegrationTemplateResultFilterSensitiveLog = (
  obj: GetFlowLogsIntegrationTemplateResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupsForCapacityReservationRequestFilterSensitiveLog = (
  obj: GetGroupsForCapacityReservationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationGroupFilterSensitiveLog = (obj: CapacityReservationGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupsForCapacityReservationResultFilterSensitiveLog = (
  obj: GetGroupsForCapacityReservationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHostReservationPurchasePreviewRequestFilterSensitiveLog = (
  obj: GetHostReservationPurchasePreviewRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseFilterSensitiveLog = (obj: Purchase): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHostReservationPurchasePreviewResultFilterSensitiveLog = (
  obj: GetHostReservationPurchasePreviewResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceTypesFromInstanceRequirementsRequestFilterSensitiveLog = (
  obj: GetInstanceTypesFromInstanceRequirementsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTypeInfoFromInstanceRequirementsFilterSensitiveLog = (
  obj: InstanceTypeInfoFromInstanceRequirements
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceTypesFromInstanceRequirementsResultFilterSensitiveLog = (
  obj: GetInstanceTypesFromInstanceRequirementsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceUefiDataRequestFilterSensitiveLog = (obj: GetInstanceUefiDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceUefiDataResultFilterSensitiveLog = (obj: GetInstanceUefiDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamAddressHistoryRequestFilterSensitiveLog = (obj: GetIpamAddressHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamAddressHistoryRecordFilterSensitiveLog = (obj: IpamAddressHistoryRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamAddressHistoryResultFilterSensitiveLog = (obj: GetIpamAddressHistoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamDiscoveredAccountsRequestFilterSensitiveLog = (obj: GetIpamDiscoveredAccountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamDiscoveryFailureReasonFilterSensitiveLog = (obj: IpamDiscoveryFailureReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamDiscoveredAccountFilterSensitiveLog = (obj: IpamDiscoveredAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamDiscoveredAccountsResultFilterSensitiveLog = (obj: GetIpamDiscoveredAccountsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamDiscoveredResourceCidrsRequestFilterSensitiveLog = (
  obj: GetIpamDiscoveredResourceCidrsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamDiscoveredResourceCidrFilterSensitiveLog = (obj: IpamDiscoveredResourceCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamDiscoveredResourceCidrsResultFilterSensitiveLog = (
  obj: GetIpamDiscoveredResourceCidrsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamPoolAllocationsRequestFilterSensitiveLog = (obj: GetIpamPoolAllocationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamPoolAllocationsResultFilterSensitiveLog = (obj: GetIpamPoolAllocationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamPoolCidrsRequestFilterSensitiveLog = (obj: GetIpamPoolCidrsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamPoolCidrsResultFilterSensitiveLog = (obj: GetIpamPoolCidrsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamResourceCidrsRequestFilterSensitiveLog = (obj: GetIpamResourceCidrsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamResourceCidrFilterSensitiveLog = (obj: IpamResourceCidr): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIpamResourceCidrsResultFilterSensitiveLog = (obj: GetIpamResourceCidrsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchTemplateDataRequestFilterSensitiveLog = (obj: GetLaunchTemplateDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchTemplateDataResultFilterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedPrefixListAssociationsRequestFilterSensitiveLog = (
  obj: GetManagedPrefixListAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixListAssociationFilterSensitiveLog = (obj: PrefixListAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedPrefixListAssociationsResultFilterSensitiveLog = (
  obj: GetManagedPrefixListAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedPrefixListEntriesRequestFilterSensitiveLog = (obj: GetManagedPrefixListEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrefixListEntryFilterSensitiveLog = (obj: PrefixListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetManagedPrefixListEntriesResultFilterSensitiveLog = (obj: GetManagedPrefixListEntriesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkInsightsAccessScopeAnalysisFindingsRequestFilterSensitiveLog = (
  obj: GetNetworkInsightsAccessScopeAnalysisFindingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkInsightsAccessScopeAnalysisFindingsResultFilterSensitiveLog = (
  obj: GetNetworkInsightsAccessScopeAnalysisFindingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkInsightsAccessScopeContentRequestFilterSensitiveLog = (
  obj: GetNetworkInsightsAccessScopeContentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkInsightsAccessScopeContentResultFilterSensitiveLog = (
  obj: GetNetworkInsightsAccessScopeContentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPasswordDataRequestFilterSensitiveLog = (obj: GetPasswordDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPasswordDataResultFilterSensitiveLog = (obj: GetPasswordDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedInstancesExchangeQuoteRequestFilterSensitiveLog = (
  obj: GetReservedInstancesExchangeQuoteRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservationValueFilterSensitiveLog = (obj: ReservationValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceReservationValueFilterSensitiveLog = (obj: ReservedInstanceReservationValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetConfigurationFilterSensitiveLog = (obj: TargetConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetReservationValueFilterSensitiveLog = (obj: TargetReservationValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedInstancesExchangeQuoteResultFilterSensitiveLog = (
  obj: GetReservedInstancesExchangeQuoteResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSerialConsoleAccessStatusRequestFilterSensitiveLog = (
  obj: GetSerialConsoleAccessStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSerialConsoleAccessStatusResultFilterSensitiveLog = (obj: GetSerialConsoleAccessStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRequirementsWithMetadataRequestFilterSensitiveLog = (
  obj: InstanceRequirementsWithMetadataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSpotPlacementScoresRequestFilterSensitiveLog = (obj: GetSpotPlacementScoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotPlacementScoreFilterSensitiveLog = (obj: SpotPlacementScore): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSpotPlacementScoresResultFilterSensitiveLog = (obj: GetSpotPlacementScoresResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubnetCidrReservationsRequestFilterSensitiveLog = (obj: GetSubnetCidrReservationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubnetCidrReservationsResultFilterSensitiveLog = (obj: GetSubnetCidrReservationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayAttachmentPropagationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayAttachmentPropagationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayAttachmentPropagationFilterSensitiveLog = (
  obj: TransitGatewayAttachmentPropagation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayAttachmentPropagationsResultFilterSensitiveLog = (
  obj: GetTransitGatewayAttachmentPropagationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayMulticastDomainAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastDomainAssociationFilterSensitiveLog = (
  obj: TransitGatewayMulticastDomainAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog = (
  obj: GetTransitGatewayMulticastDomainAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPolicyTableAssociationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayPolicyTableAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPolicyTableAssociationsResultFilterSensitiveLog = (
  obj: GetTransitGatewayPolicyTableAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPolicyTableEntriesRequestFilterSensitiveLog = (
  obj: GetTransitGatewayPolicyTableEntriesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPolicyRuleMetaDataFilterSensitiveLog = (obj: TransitGatewayPolicyRuleMetaData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPolicyRuleFilterSensitiveLog = (obj: TransitGatewayPolicyRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayPolicyTableEntryFilterSensitiveLog = (obj: TransitGatewayPolicyTableEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPolicyTableEntriesResultFilterSensitiveLog = (
  obj: GetTransitGatewayPolicyTableEntriesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPrefixListReferencesRequestFilterSensitiveLog = (
  obj: GetTransitGatewayPrefixListReferencesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayPrefixListReferencesResultFilterSensitiveLog = (
  obj: GetTransitGatewayPrefixListReferencesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTableAssociationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTableAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTableAssociationFilterSensitiveLog = (
  obj: TransitGatewayRouteTableAssociation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTableAssociationsResultFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTableAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTablePropagationsRequestFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTablePropagationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayRouteTablePropagationFilterSensitiveLog = (
  obj: TransitGatewayRouteTablePropagation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTransitGatewayRouteTablePropagationsResultFilterSensitiveLog = (
  obj: GetTransitGatewayRouteTablePropagationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVerifiedAccessEndpointPolicyRequestFilterSensitiveLog = (
  obj: GetVerifiedAccessEndpointPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVerifiedAccessEndpointPolicyResultFilterSensitiveLog = (
  obj: GetVerifiedAccessEndpointPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVerifiedAccessGroupPolicyRequestFilterSensitiveLog = (
  obj: GetVerifiedAccessGroupPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVerifiedAccessGroupPolicyResultFilterSensitiveLog = (obj: GetVerifiedAccessGroupPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceSampleConfigurationRequestFilterSensitiveLog = (
  obj: GetVpnConnectionDeviceSampleConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog = (
  obj: GetVpnConnectionDeviceSampleConfigurationResult
): any => ({
  ...obj,
  ...(obj.VpnConnectionDeviceSampleConfiguration && { VpnConnectionDeviceSampleConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceTypesRequestFilterSensitiveLog = (obj: GetVpnConnectionDeviceTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpnConnectionDeviceTypeFilterSensitiveLog = (obj: VpnConnectionDeviceType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVpnConnectionDeviceTypesResultFilterSensitiveLog = (obj: GetVpnConnectionDeviceTypesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog = (
  obj: ImportClientVpnClientCertificateRevocationListRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportClientVpnClientCertificateRevocationListResultFilterSensitiveLog = (
  obj: ImportClientVpnClientCertificateRevocationListResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientDataFilterSensitiveLog = (obj: ClientData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserBucketFilterSensitiveLog = (obj: UserBucket): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageDiskContainerFilterSensitiveLog = (obj: ImageDiskContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportImageLicenseConfigurationRequestFilterSensitiveLog = (
  obj: ImportImageLicenseConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportImageRequestFilterSensitiveLog = (obj: ImportImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportImageResultFilterSensitiveLog = (obj: ImportImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskImageDetailFilterSensitiveLog = (obj: DiskImageDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeDetailFilterSensitiveLog = (obj: VolumeDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskImageFilterSensitiveLog = (obj: DiskImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDataFilterSensitiveLog = (obj: UserData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportInstanceLaunchSpecificationFilterSensitiveLog = (obj: ImportInstanceLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportInstanceRequestFilterSensitiveLog = (obj: ImportInstanceRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: ImportInstanceLaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const ImportInstanceResultFilterSensitiveLog = (obj: ImportInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportKeyPairRequestFilterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportKeyPairResultFilterSensitiveLog = (obj: ImportKeyPairResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotDiskContainerFilterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSnapshotRequestFilterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSnapshotResultFilterSensitiveLog = (obj: ImportSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportVolumeRequestFilterSensitiveLog = (obj: ImportVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportVolumeResultFilterSensitiveLog = (obj: ImportVolumeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesInRecycleBinRequestFilterSensitiveLog = (obj: ListImagesInRecycleBinRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageRecycleBinInfoFilterSensitiveLog = (obj: ImageRecycleBinInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesInRecycleBinResultFilterSensitiveLog = (obj: ListImagesInRecycleBinResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsInRecycleBinRequestFilterSensitiveLog = (obj: ListSnapshotsInRecycleBinRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotRecycleBinInfoFilterSensitiveLog = (obj: SnapshotRecycleBinInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsInRecycleBinResultFilterSensitiveLog = (obj: ListSnapshotsInRecycleBinResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAddressAttributeRequestFilterSensitiveLog = (obj: ModifyAddressAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAddressAttributeResultFilterSensitiveLog = (obj: ModifyAddressAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAvailabilityZoneGroupRequestFilterSensitiveLog = (obj: ModifyAvailabilityZoneGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAvailabilityZoneGroupResultFilterSensitiveLog = (obj: ModifyAvailabilityZoneGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCapacityReservationRequestFilterSensitiveLog = (obj: ModifyCapacityReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCapacityReservationResultFilterSensitiveLog = (obj: ModifyCapacityReservationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCapacityReservationFleetRequestFilterSensitiveLog = (
  obj: ModifyCapacityReservationFleetRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCapacityReservationFleetResultFilterSensitiveLog = (
  obj: ModifyCapacityReservationFleetResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsServersOptionsModifyStructureFilterSensitiveLog = (obj: DnsServersOptionsModifyStructure): any => ({
  ...obj,
});
