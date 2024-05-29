// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  _InstanceType,
  AddressTransfer,
  AllowedPrincipal,
  AsnAssociation,
  AssociationStatus,
  CapacityReservationState,
  CurrencyCodeValues,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamResourceDiscoveryAssociation,
  NatGatewayAddress,
  ResourceType,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayPolicyTableAssociation,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UserIdGroupPair,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
} from "./models_0";

import { DiskImageFormat, InstanceRequirementsRequest, Subnet, VolumeType, Vpc } from "./models_1";

import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  IpAddressType,
  PayerResponsibility,
  ServiceConfiguration,
  ServiceConnectivityType,
  ServiceTypeDetail,
  SSEType,
  State,
  TrafficMirrorFilter,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayConnect,
  TransitGatewayConnectPeer,
  TransitGatewayMulticastDomain,
  TransitGatewayPolicyTable,
  TransitGatewayRouteTable,
  TransitGatewayRouteTableAnnouncement,
  VerifiedAccessEndpoint,
  VerifiedAccessGroup,
  Volume,
  VpcEndpoint,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnGateway,
} from "./models_2";

import {
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  Filter,
  MetricType,
  PaymentOption,
  PeriodType,
  ProductCode,
  StatisticType,
  VirtualizationType,
} from "./models_3";

import {
  ArchitectureType,
  AttributeBooleanValue,
  HttpTokensState,
  InstanceMetadataEndpointState,
  InstanceMetadataTagsState,
  RIProductDescription,
} from "./models_4";

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 * @public
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for which prices should
   *                     be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                     <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description for the Spot price
   *                     (<code>Linux/UNIX</code> | <code>Red Hat Enterprise Linux</code> |
   *                     <code>SUSE Linux</code> | <code>Windows</code> | <code>Linux/UNIX (Amazon
   *                         VPC)</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> |
   *                     <code>SUSE Linux (Amazon VPC)</code> | <code>Windows (Amazon
   *                         VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The Spot price. The value must match exactly (or use
   *                     wildcards; greater than or less than comparison is not supported).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code> - The time stamp of the Spot price history, in UTC format
   *                     (for example, <i>ddd MMM dd
   *                         HH</i>:<i>mm</i>:<i>ss</i> UTC
   *                         <i>YYYY</i>). You can use wildcards (<code>*</code> and
   *                         <code>?</code>). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>Filters the results by the specified instance types.</p>
   * @public
   */
  InstanceTypes?: _InstanceType[];

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   * @public
   */
  ProductDescriptions?: string[];

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date;
}

/**
 * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
 *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
 *          <important>
 *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
 *          </important>
 * @public
 */
export interface SpotPrice {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType;

  /**
   * <p>A general description of the AMI.</p>
   * @public
   */
  ProductDescription?: RIProductDescription;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string;

  /**
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 * @public
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             an empty string (<code>""</code>) or <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The historical Spot prices.</p>
   * @public
   */
  SpotPriceHistory?: SpotPrice[];
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *           make another request with the token returned in the output. For more information,
   *           see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request.
   *           Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>Describes a stale rule in a security group.</p>
 * @public
 */
export interface StaleIpPermission {
  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number
   *           (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   * @public
   */
  IpProtocol?: string;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   * @public
   */
  IpRanges?: string[];

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   * @public
   */
  PrefixListIds?: string[];

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 * @public
 */
export interface StaleSecurityGroup {
  /**
   * <p>The description of the security group.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * <p>The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *           If there are no additional items to return, the string is empty.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the stale security groups.</p>
   * @public
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[];
}

/**
 * @public
 */
export interface DescribeStoreImageTasksRequest {
  /**
   * <p>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a request.</p>
   * @public
   */
  ImageIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>task-state</code> - Returns tasks in a certain state (<code>InProgress</code> |
   *             <code>Completed</code> | <code>Failed</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bucket</code> - Returns task information for tasks that targeted a specific
   *           bucket. For the filter value, specify the bucket name.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>When you specify the <code>ImageIds</code> parameter, any filters that you specify are
   *         ignored. To use the filters, you must remove the <code>ImageIds</code> parameter.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the <code>ImageIds</code> parameter in the same
   *       call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The information about the AMI store task, including the progress of the task.</p>
 * @public
 */
export interface StoreImageTaskResult {
  /**
   * <p>The ID of the AMI that is being stored.</p>
   * @public
   */
  AmiId?: string;

  /**
   * <p>The time the task started.</p>
   * @public
   */
  TaskStartTime?: Date;

  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   * @public
   */
  Bucket?: string;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   * @public
   */
  S3objectKey?: string;

  /**
   * <p>The progress of the task as a percentage.</p>
   * @public
   */
  ProgressPercentage?: number;

  /**
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *         <code>Failed</code>).</p>
   * @public
   */
  StoreTaskState?: string;

  /**
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *         <code>null</code> is returned.</p>
   * @public
   */
  StoreTaskFailureReason?: string;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksResult {
  /**
   * <p>The information about the AMI store tasks.</p>
   * @public
   */
  StoreImageTaskResults?: StoreImageTaskResult[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubnetsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for the subnet. You can also use
   *                     <code>availabilityZone</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet.
   *                     You can also use <code>availabilityZoneId</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available-ip-address-count</code> - The number of IPv4 addresses in the
   *                     subnet that are available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block
   *                     you specify must exactly match the subnet's CIDR block for information to be
   *                     returned for the subnet. You can also use <code>cidr</code> or
   *                         <code>cidrBlock</code> as the filter names.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>customer-owned-ipv4-pool</code> - The customer-owned IPv4 address pool
   *                     associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-for-az</code> - Indicates whether this is the default subnet for
   *                     the Availability Zone (<code>true</code> | <code>false</code>). You can also use
   *                         <code>defaultForAz</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enable-dns64</code> - Indicates whether DNS queries made to the
   *                     Amazon-provided DNS Resolver in this subnet should return synthetic IPv6
   *                     addresses for IPv4-only destinations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enable-lni-at-device-index</code> - Indicates the device position for
   *                     local network interfaces in this subnet. For example, <code>1</code> indicates
   *                     local network interfaces in this subnet are the secondary network interface
   *                     (eth1). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - An association ID
   *                     for an IPv6 CIDR block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-native</code> - Indicates whether this is an IPv6 only subnet
   *                         (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>map-customer-owned-ip-on-launch</code> - Indicates whether a network
   *                     interface created in this subnet (including a network interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>map-public-ip-on-launch</code> - Indicates whether instances launched in
   *                     this subnet receive a public IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the
   *                     subnet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.hostname-type</code> - The type of
   *                     hostname to assign to instances in the subnet at launch. For IPv4-only and
   *                     dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the
   *                     instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6
   *                     only subnets, an instance DNS name must be based on the instance ID
   *                     (resource-name).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.enable-resource-name-dns-a-record</code>
   *                     - Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *                     records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name-options-on-launch.enable-resource-name-dns-aaaa-record</code>
   *                     - Indicates whether to respond to DNS queries for instance hostnames with DNS
   *                     AAAA records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p>
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
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the subnet.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the subnets.</p>
   *          <p>Default: Describes all your subnets.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeSubnetsResult {
  /**
   * <p>Information about one or more subnets.</p>
   * @public
   */
  Subnets?: Subnet[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>key</code> - The tag key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. For a list of possible values, see
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TagSpecification.html">TagSpecification</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of the tag. For example,
   *                 specify "tag:Owner" for the filter name and "TeamA" for the filter value to find
   *                 resources with the tag "Owner=TeamA".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - The tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. This value can be between 5 and 1000.
   *          To get the next page of items, make another request with the token returned in the output.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request.
   *          Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a tag.</p>
 * @public
 */
export interface TagDescription {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: ResourceType;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *          This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: TagDescription[];
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror filter description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   * @public
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror session description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>packet-length</code>: The assigned number of packets to mirror. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>session-number</code>: The assigned session number. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the Traffic Mirror filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-session-id</code>: The ID of the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>virtual-network-id</code>: The virtual network ID of the Traffic Mirror session.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   * @public
   */
  TrafficMirrorSessions?: TrafficMirrorSession[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>: The Traffic Mirror target description.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code>: The ID of the Traffic Mirror session network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-load-balancer-arn</code>: The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code>: The ID of the account that owns the Traffic Mirror session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-target-id</code>: The ID of the Traffic Mirror target.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.state</code> - The state of the association (<code>associating</code> | <code>associated</code> |
   *                <code>disassociating</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.transit-gateway-route-table-id</code> - The ID of the route table for the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner-id</code> - The ID of the Amazon Web Services account that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type. Valid values are <code>vpc</code>
   *                     | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>peering</code>
   *                     | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * <p>Describes an association.</p>
 * @public
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState;
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 * @public
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwnerId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState;

  /**
   * <p>The association.</p>
   * @public
   */
  Association?: TransitGatewayAttachmentAssociation;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the attachment.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * <p>The IDs of the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeerIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Connect peer (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer-id</code> - The ID of the Connect peer.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * <p>Information about the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.protocol</code> - The tunnel protocol (<code>gre</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>initiating</code> |
   *                         <code>initiatingRequest</code> | <code>pendingAcceptance</code> |
   *                         <code>rollingBack</code> | <code>pending</code> | <code>available</code> |
   *                         <code>modifying</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>failed</code> | <code>rejected</code> | <code>rejecting</code> |
   *                         <code>failing</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the
   *                     Connect attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transport-transit-gateway-attachment-id</code> - The ID of the transit gateway attachment from which the Connect attachment was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsResult {
  /**
   * <p>Information about the Connect attachments.</p>
   * @public
   */
  TransitGatewayConnects?: TransitGatewayConnect[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway multicast domain. Valid values are <code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-multicast-domain-id</code> - The ID of the transit gateway multicast domain.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   * @public
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-owner-id</code> - The ID of your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>remote-owner-id</code> - The ID of the Amazon Web Services account in the remote Region that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the peering attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * <p>The IDs of the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTableIds?: string[];

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * <p>Describes the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * <p>The IDs of the transit gateway route tables that are being advertised.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementIds?: string[];

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * <p>Describes the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTableIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default-association-route-table</code> - Indicates whether this is the default
   *                 association route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-propagation-route-table</code> - Indicates whether this is the default
   *                propagation route table for the transit gateway (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route table (<code>available</code> | <code>deleting</code> | <code>deleted</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * <p>The IDs of the transit gateways.</p>
   * @public
   */
  TransitGatewayIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>options.propagation-default-route-table-id</code> - The ID of the default propagation route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.amazon-side-asn</code> - The private ASN for the Amazon side of a BGP session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.association-default-route-table-id</code> - The ID of the default association route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.auto-accept-shared-attachments</code> - Indicates whether there is automatic acceptance of attachment requests (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-association</code> - Indicates whether resource attachments are automatically
   *                associated with the default association route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.default-route-table-propagation</code> - Indicates whether resource attachments automatically propagate
   *                routes to the default propagation route table (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.dns-support</code> - Indicates whether DNS support is enabled (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>options.vpn-ecmp-support</code> - Indicates whether Equal Cost Multipath Protocol support is enabled  (<code>enable</code> | <code>disable</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the transit gateway (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>modifying</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key </code>- The key/value combination of a tag assigned to the resource. Use the
   *                tag key in the filter name and the tag value as the filter value. For example, to
   *                find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify
   *                <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   * @public
   */
  TransitGateways?: TransitGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment. Valid values are <code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>failing</code> | <code>initiatingRequest</code> | <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   * @public
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  AssociationIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gre-key</code> - The ID of a trunk interface association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-protocol</code> - The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *             To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * <p>Information about the trunk associations.</p>
   * @public
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointIds?: string[];

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string;

  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsResult {
  /**
   * <p>Details about the Verified Access endpoints.</p>
   * @public
   */
  VerifiedAccessEndpoints?: VerifiedAccessEndpoint[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsRequest {
  /**
   * <p>The ID of the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroupIds?: string[];

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsResult {
  /**
   * <p>Details about the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroups?: VerifiedAccessGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  /**
   * <p>The IDs of the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstanceIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessLogDeliveryStatusCode = {
  FAILED: "failed",
  SUCCESS: "success",
} as const;

/**
 * @public
 */
export type VerifiedAccessLogDeliveryStatusCode =
  (typeof VerifiedAccessLogDeliveryStatusCode)[keyof typeof VerifiedAccessLogDeliveryStatusCode];

/**
 * <p>Describes a log delivery status.</p>
 * @public
 */
export interface VerifiedAccessLogDeliveryStatus {
  /**
   * <p>The status code.</p>
   * @public
   */
  Code?: VerifiedAccessLogDeliveryStatusCode;

  /**
   * <p>The status message.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestination {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled?: boolean;

  /**
   * <p>The delivery status for access logs.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string;
}

/**
 * <p>Options for Kinesis as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestination {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled?: boolean;

  /**
   * <p>The delivery status.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * <p>The ID of the delivery stream.</p>
   * @public
   */
  DeliveryStream?: string;
}

/**
 * <p>Options for Amazon S3 as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogS3Destination {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled?: boolean;

  /**
   * <p>The delivery status.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  Prefix?: string;

  /**
   * <p>The Amazon Web Services account number that owns the bucket.</p>
   * @public
   */
  BucketOwner?: string;
}

/**
 * <p>Describes the options for Verified Access logs.</p>
 * @public
 */
export interface VerifiedAccessLogs {
  /**
   * <p>Amazon S3 logging options.</p>
   * @public
   */
  S3?: VerifiedAccessLogS3Destination;

  /**
   * <p>CloudWatch Logs logging destination.</p>
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestination;

  /**
   * <p>Kinesis logging destination.</p>
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestination;

  /**
   * <p>The log version.</p>
   * @public
   */
  LogVersion?: string;

  /**
   * <p>Indicates whether trust data is included in the logs.</p>
   * @public
   */
  IncludeTrustContext?: boolean;
}

/**
 * <p>Describes logging options for an Amazon Web Services Verified Access instance.</p>
 * @public
 */
export interface VerifiedAccessInstanceLoggingConfiguration {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string;

  /**
   * <p>Details about the logging options.</p>
   * @public
   */
  AccessLogs?: VerifiedAccessLogs;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsResult {
  /**
   * <p>The logging configuration for the Verified Access instances.</p>
   * @public
   */
  LoggingConfigurations?: VerifiedAccessInstanceLoggingConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesRequest {
  /**
   * <p>The IDs of the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstanceIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesResult {
  /**
   * <p>Details about the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstances?: VerifiedAccessInstance[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersRequest {
  /**
   * <p>The IDs of the Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviderIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersResult {
  /**
   * <p>Details about the Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeAttributeName = {
  autoEnableIO: "autoEnableIO",
  productCodes: "productCodes",
} as const;

/**
 * @public
 */
export type VolumeAttributeName = (typeof VolumeAttributeName)[keyof typeof VolumeAttributeName];

/**
 * @public
 */
export interface DescribeVolumeAttributeRequest {
  /**
   * <p>The attribute of the volume. This parameter is required.</p>
   * @public
   */
  Attribute: VolumeAttributeName | undefined;

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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVolumeAttributeResult {
  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>A list of product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string;
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time stamp when the attachment
   *           initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Whether the volume is deleted on
   *           instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device</code> - The device name specified in the block device mapping
   *           (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance the volume is attached
   *           to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The attachment state (<code>attaching</code> |
   *             <code>attached</code> | <code>detaching</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone in which the volume was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the volume is encrypted (<code>true</code>
   *           | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multi-attach-enabled</code> - Indicates whether the volume is enabled for Multi-Attach (<code>true</code>
   *     			| <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fast-restored</code> - Indicates whether the volume was created from a
   *           snapshot that is enabled for fast snapshot restore (<code>true</code> |
   *           <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>size</code> - The size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot from which the volume was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The state of the volume (<code>creating</code> |
   *             <code>available</code> | <code>in-use</code> | <code>deleting</code> |
   *             <code>deleted</code> | <code>error</code>).</p>
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
   *                   <code>volume-id</code> - The volume ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-type</code> - The Amazon EBS volume type (<code>gp2</code> | <code>gp3</code> | <code>io1</code> | <code>io2</code> |
   *           <code>st1</code> | <code>sc1</code>| <code>standard</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The volume IDs.</p>
   * @public
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of volumes to return for this request.
   *       This value can be between 5 and 500; if you specify a value larger than 500, only 500 items are returned.
   *       If this parameter is not used, then all items are returned. You cannot specify this parameter and the
   *       volume IDs parameter in the same request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request.
   *       Pagination continues from the end of the items returned from the previous request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumesResult {
  /**
   * <p>Information about the volumes.</p>
   * @public
   */
  Volumes?: Volume[];

  /**
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the volumes.</p>
   * @public
   */
  VolumeIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>modification-state</code> - The current modification state (modifying |
   *           optimizing | completed | failed).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-iops</code> - The original IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-size</code> - The original size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-volume-type</code> - The original volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>originalMultiAttachEnabled</code> - Indicates whether Multi-Attach support was enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The modification start time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-iops</code> - The target IOPS rate of the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-size</code> - The target size of the volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target-volume-type</code> - The target volume type of the volume (standard |
   *           io1 | io2 | gp2 | sc1 | st1).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targetMultiAttachEnabled</code> - Indicates whether Multi-Attach support is to be enabled (true | false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The token returned by a previous paginated request.
   *       Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const VolumeModificationState = {
  completed: "completed",
  failed: "failed",
  modifying: "modifying",
  optimizing: "optimizing",
} as const;

/**
 * @public
 */
export type VolumeModificationState = (typeof VolumeModificationState)[keyof typeof VolumeModificationState];

/**
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 * @public
 */
export interface VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string;

  /**
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   * @public
   */
  ModificationState?: VolumeModificationState;

  /**
   * <p>A status message about the modification progress or failure.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   * @public
   */
  TargetSize?: number;

  /**
   * <p>The target IOPS rate of the volume.</p>
   * @public
   */
  TargetIops?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   * @public
   */
  TargetVolumeType?: VolumeType;

  /**
   * <p>The target throughput of the volume, in MiB/s.</p>
   * @public
   */
  TargetThroughput?: number;

  /**
   * <p>The target setting for Amazon EBS Multi-Attach.</p>
   * @public
   */
  TargetMultiAttachEnabled?: boolean;

  /**
   * <p>The original size of the volume, in GiB.</p>
   * @public
   */
  OriginalSize?: number;

  /**
   * <p>The original IOPS rate of the volume.</p>
   * @public
   */
  OriginalIops?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   * @public
   */
  OriginalVolumeType?: VolumeType;

  /**
   * <p>The original throughput of the volume, in MiB/s.</p>
   * @public
   */
  OriginalThroughput?: number;

  /**
   * <p>The original setting for Amazon EBS Multi-Attach.</p>
   * @public
   */
  OriginalMultiAttachEnabled?: boolean;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   * @public
   */
  Progress?: number;

  /**
   * <p>The modification start time.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The modification completion or failure time.</p>
   * @public
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsResult {
  /**
   * <p>Information about the volume modifications.</p>
   * @public
   */
  VolumesModifications?: VolumeModification[];

  /**
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> if there are no more items to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumeStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>action.code</code> - The action code for the event (for example,
   *             <code>enable-volume-io</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.description</code> - A description of the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>action.event-id</code> - The event ID associated with the action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-id</code> - The event ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.event-type</code> - The event type (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>io-performance:degraded</code> | <code>io-performance:severely-degraded</code> |
   *             <code>io-performance:stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-after</code> - The latest end time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event.not-before</code> - The earliest start time for the event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-name</code> - The cause for
   *             <code>volume-status.status</code> (<code>io-enabled</code> |
   *           <code>io-performance</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.details-status</code> - The status of
   *             <code>volume-status.details-name</code> (for <code>io-enabled</code>:
   *             <code>passed</code> | <code>failed</code>; for <code>io-performance</code>:
   *             <code>normal</code> | <code>degraded</code> | <code>severely-degraded</code> |
   *             <code>stalled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-status.status</code> - The status of the volume (<code>ok</code> |
   *             <code>impaired</code> | <code>warning</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *       make another request with the token returned in the output. This value can be between 5 and 1,000;
   *       if the value is larger than 1,000, only 1,000 results are returned. If this parameter is not used,
   *       then all items are returned. You cannot specify this parameter and the volume IDs parameter in the
   *       same request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request.
   *       Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   * @public
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * <p>Describes a volume status operation code.</p>
 * @public
 */
export interface VolumeStatusAction {
  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>A description of the operation.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   * @public
   */
  EventId?: string;

  /**
   * <p>The event type associated with this operation.</p>
   * @public
   */
  EventType?: string;
}

/**
 * <p>Information about the instances to which the volume is attached.</p>
 * @public
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * <p>The maximum IOPS supported by the attached instance.</p>
   * @public
   */
  IoPerformance?: string;

  /**
   * <p>The ID of the attached instance.</p>
   * @public
   */
  InstanceId?: string;
}

/**
 * <p>Describes a volume status event.</p>
 * @public
 */
export interface VolumeStatusEvent {
  /**
   * <p>A description of the event.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of this event.</p>
   * @public
   */
  EventId?: string;

  /**
   * <p>The type of this event.</p>
   * @public
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   * @public
   */
  NotAfter?: Date;

  /**
   * <p>The earliest start time of the event.</p>
   * @public
   */
  NotBefore?: Date;

  /**
   * <p>The ID of the instance associated with the event.</p>
   * @public
   */
  InstanceId?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeStatusName = {
  io_enabled: "io-enabled",
  io_performance: "io-performance",
} as const;

/**
 * @public
 */
export type VolumeStatusName = (typeof VolumeStatusName)[keyof typeof VolumeStatusName];

/**
 * <p>Describes a volume status.</p>
 * @public
 */
export interface VolumeStatusDetails {
  /**
   * <p>The name of the volume status.</p>
   * @public
   */
  Name?: VolumeStatusName;

  /**
   * <p>The intended status of the volume status.</p>
   * @public
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeStatusInfoStatus = {
  impaired: "impaired",
  insufficient_data: "insufficient-data",
  ok: "ok",
} as const;

/**
 * @public
 */
export type VolumeStatusInfoStatus = (typeof VolumeStatusInfoStatus)[keyof typeof VolumeStatusInfoStatus];

/**
 * <p>Describes the status of a volume.</p>
 * @public
 */
export interface VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   * @public
   */
  Details?: VolumeStatusDetails[];

  /**
   * <p>The status of the volume.</p>
   * @public
   */
  Status?: VolumeStatusInfoStatus;
}

/**
 * <p>Describes the volume status.</p>
 * @public
 */
export interface VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   * @public
   */
  Actions?: VolumeStatusAction[];

  /**
   * <p>The Availability Zone of the volume.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   * @public
   */
  Events?: VolumeStatusEvent[];

  /**
   * <p>The volume ID.</p>
   * @public
   */
  VolumeId?: string;

  /**
   * <p>The volume status.</p>
   * @public
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   * @public
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];
}

/**
 * @public
 */
export interface DescribeVolumeStatusResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the status of the volumes.</p>
   * @public
   */
  VolumeStatuses?: VolumeStatusItem[];
}

/**
 * @public
 * @enum
 */
export const VpcAttributeName = {
  enableDnsHostnames: "enableDnsHostnames",
  enableDnsSupport: "enableDnsSupport",
  enableNetworkAddressUsageMetrics: "enableNetworkAddressUsageMetrics",
} as const;

/**
 * @public
 */
export type VpcAttributeName = (typeof VpcAttributeName)[keyof typeof VpcAttributeName];

/**
 * @public
 */
export interface DescribeVpcAttributeRequest {
  /**
   * <p>The VPC attribute.</p>
   * @public
   */
  Attribute: VpcAttributeName | undefined;

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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>The filters.</p>
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The VPCs for which you want to describe the ClassicLink status.</p>
   * @public
   */
  VpcIds?: string[];
}

/**
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes whether a VPC is enabled for ClassicLink.</p>
 * @public
 */
export interface VpcClassicLink {
  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   * @public
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of the VPCs.</p>
   * @public
   */
  Vpcs?: VpcClassicLink[];
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The IDs of the VPCs.</p>
   * @public
   */
  VpcIds?: string[];
}

/**
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes the ClassicLink DNS support status of a VPC.</p>
 * @public
 */
export interface ClassicLinkDnsSupport {
  /**
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   * @public
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   * @public
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>The notifications.</p>
   * @public
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 * @public
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   * @public
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointState?: State;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   * @public
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   * @public
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   * @public
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   * @public
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType;

  /**
   * <p>The ID of the VPC endpoint connection.</p>
   * @public
   */
  VpcEndpointConnectionId?: string;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about the VPC endpoint connections.</p>
   * @public
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>Information about the endpoints.</p>
   * @public
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   * @public
   */
  NextToken?: string;
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
  DryRun?: boolean;

  /**
   * <p>The IDs of the endpoint services.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>Information about the services.</p>
   * @public
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
  DryRun?: boolean;

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
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the allowed principals.</p>
   * @public
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
  DryRun?: boolean;

  /**
   * <p>The service names.</p>
   * @public
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   * @public
   */
  NextToken?: string;
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
  PrivateDnsName?: string;
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
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   * @public
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   * @public
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   * @public
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>The private DNS name for the service.</p>
   * @public
   */
  PrivateDnsName?: string;

  /**
   * <p>The private DNS names assigned to the VPC endpoint service.</p>
   * @public
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   * @public
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   * @public
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   * @public
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The payer responsibility.</p>
   * @public
   */
  PayerResponsibility?: PayerResponsibility;

  /**
   * <p>The tags assigned to the service.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   * @public
   */
  PrivateDnsNameVerificationState?: DnsNameState;

  /**
   * <p>The supported IP address types.</p>
   * @public
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>The supported services.</p>
   * @public
   */
  ServiceNames?: string[];

  /**
   * <p>Information about the service.</p>
   * @public
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsRequest {
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the VPC peering connections.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   * @public
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsResult {
  /**
   * <p>Information about the VPC peering connections.</p>
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;
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
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the VPCs.</p>
   *          <p>Default: Describes all your VPCs.</p>
   * @public
   */
  VpcIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeVpcsResult {
  /**
   * <p>Information about one or more VPCs.</p>
   * @public
   */
  Vpcs?: Vpc[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string;
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
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *          <p>Default: Describes your VPN connections.</p>
   * @public
   */
  VpnConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  VpnConnections?: VpnConnection[];
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
  Filters?: Filter[];

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *          <p>Default: Describes all your virtual private gateways.</p>
   * @public
   */
  VpnGatewayIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  VpnGateways?: VpnGateway[];
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
  DryRun?: boolean;

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
  Return?: boolean;
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
  DryRun?: boolean;

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
   * <p>The ID of the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
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
   * @public
   */
  Force?: boolean;
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
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DetachVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;

  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * @public
 */
export interface DetachVolumeRequest {
  /**
   * <p>The device name.</p>
   * @public
   */
  Device?: string;

  /**
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   * @public
   */
  Force?: boolean;

  /**
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   * @public
   */
  InstanceId?: string;

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
  DryRun?: boolean;
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
  DryRun?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region or Availability Zone that the metric subscription is disabled for. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The target Region or Availability Zone that the metric subscription is disabled for. For example, <code>eu-north-1</code>.</p>
   * @public
   */
  Destination?: string;

  /**
   * <p>The metric used for the disabled subscription.</p>
   * @public
   */
  Metric?: MetricType;

  /**
   * <p>The statistic used for the disabled subscription. </p>
   * @public
   */
  Statistic?: StatisticType;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the unsubscribe action was successful.</p>
   * @public
   */
  Output?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean;
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
   * <p>Forces the image settings to turn off Windows fast launch for your Windows AMI. This parameter overrides
   * 			any errors that are encountered while cleaning up resources in your account.</p>
   * @public
   */
  Force?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableFastLaunchResult {
  /**
   * <p>The ID of the image for which Windows fast launch was disabled.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The pre-provisioning resource type that must be cleaned after turning off Windows fast launch
   * 			for the Windows AMI. Supported values include: <code>snapshot</code>.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType;

  /**
   * <p>Parameters that were used for Windows fast launch for the Windows AMI before
   * 			Windows fast launch was disabled. This informs the clean-up process.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that was used to launch Windows instances from pre-provisioned snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to
   * 			create pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner of the Windows AMI for which Windows fast launch was disabled.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The current state of Windows fast launch for the specified Windows AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode;

  /**
   * <p>The reason that the state changed for Windows fast launch for the Windows AMI.</p>
   * @public
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for Windows fast launch for the Windows AMI.</p>
   * @public
   */
  StateTransitionTime?: Date;
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
  DryRun?: boolean;
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
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode;

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
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date;
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
  Code?: string;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;
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
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   * @public
   */
  Error?: DisableFastSnapshotRestoreStateError;
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
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   * @public
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   * @public
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   * @public
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;
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
  ImageBlockPublicAccessState?: ImageBlockPublicAccessDisabledState;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableImageDeregistrationProtectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: string;
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
  DryRun?: boolean;

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
  Success?: boolean;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  SerialConsoleAccessEnabled?: boolean;
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
  DryRun?: boolean;
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
  State?: SnapshotBlockPublicAccessState;
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
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string;
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
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The state.</p>
   * @public
   */
  State?: TransitGatewayPropagationState;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   * @public
   */
  Propagation?: TransitGatewayPropagation;
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
  DryRun?: boolean;
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
  DryRun?: boolean;

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
  Return?: boolean;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DisassociateAddressRequest {
  /**
   * <p>The association ID. This parameter is required.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * <p>The ID of the target network association.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   * @public
   */
  Status?: AssociationStatus;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
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
  InstanceIds?: string[];

  /**
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   * @public
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[];
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
  DryRun?: boolean;

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
  InstanceEventWindow?: InstanceEventWindow;
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
  DryRun?: boolean;

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
  AsnAssociation?: AsnAssociation;
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
  DryRun?: boolean;

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
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
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
  MaxDrainDurationSeconds?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string;

  /**
   * <p>Information about the NAT gateway IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface DisassociateRouteTableRequest {
  /**
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   * @public
   */
  Association?: TransitGatewayAssociation;
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
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;
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
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * <p>The source Region (like <code>us-east-1</code>) or Availability Zone ID (like <code>use1-az1</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The target Region (like <code>us-east-2</code>) or Availability Zone ID (like <code>use2-az2</code>) that the metric subscription is enabled for. If you use Availability Zone IDs, the Source and Destination Availability Zones must be in the same Region.</p>
   * @public
   */
  Destination?: string;

  /**
   * <p>The metric used for the enabled subscription.</p>
   * @public
   */
  Metric?: MetricType;

  /**
   * <p>The statistic used for the enabled subscription.</p>
   * @public
   */
  Statistic?: StatisticType;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * <p>Indicates whether the subscribe action was successful.</p>
   * @public
   */
  Output?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean;
}

/**
 * <p>Request to create a launch template for a Windows fast launch enabled AMI.</p>
 *          <note>
 *             <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 * 				<code>LaunchTemplateId</code>, but not both.</p>
 *          </note>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * <p>Specify the ID of the launch template that the AMI should use for Windows fast launch.</p>
   * @public
   */
  LaunchTemplateId?: string;

  /**
   * <p>Specify the name of the launch template that the AMI should use for Windows fast launch.</p>
   * @public
   */
  LaunchTemplateName?: string;

  /**
   * <p>Specify the version of the launch template that the AMI should use for Windows fast launch.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a Windows fast launch
 * 			enabled AMI.</p>
 * @public
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a Windows fast launch
   * 			enabled AMI.</p>
   * @public
   */
  TargetResourceCount?: number;
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
   * 			Supported values include: <code>snapshot</code>, which is the default value.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>Configuration settings for creating and managing the snapshots that are used for
   * 			pre-provisioning the AMI for Windows fast launch. The associated <code>ResourceType</code>
   * 			must be <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;

  /**
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   * 			snapshots. Launch template parameters can include either the name or ID of the launch
   * 			template, but not both.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   * 			pre-provisioned snapshots for Windows fast launch. Value must be
   * 			<code>6</code> or greater.</p>
   * @public
   */
  MaxParallelLaunches?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableFastLaunchResult {
  /**
   * <p>The image ID that identifies the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The type of resource that was defined for pre-provisioning the AMI for Windows fast launch.</p>
   * @public
   */
  ResourceType?: FastLaunchResourceType;

  /**
   * <p>Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster
   * 			launches from the Windows AMI. This property is returned when the associated
   * 			<code>resourceType</code> is <code>snapshot</code>.</p>
   * @public
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that is used when launching Windows instances from pre-provisioned snapshots.</p>
   * @public
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to
   * 			create pre-provisioned snapshots for Windows fast launch.</p>
   * @public
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner ID for the AMI for which Windows fast launch was enabled.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The current state of Windows fast launch for the specified AMI.</p>
   * @public
   */
  State?: FastLaunchStateCode;

  /**
   * <p>The reason that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that the state changed for Windows fast launch for the AMI.</p>
   * @public
   */
  StateTransitionTime?: Date;
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
  DryRun?: boolean;
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
  SnapshotId?: string;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   * @public
   */
  State?: FastSnapshotRestoreStateCode;

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
  StateTransitionReason?: string;

  /**
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   * @public
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   * @public
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   * @public
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   * @public
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   * @public
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   * @public
   */
  DisabledTime?: Date;
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
  Code?: string;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;
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
  AvailabilityZone?: string;

  /**
   * <p>The error.</p>
   * @public
   */
  Error?: EnableFastSnapshotRestoreStateError;
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
  SnapshotId?: string;

  /**
   * <p>The errors.</p>
   * @public
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   * @public
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   * @public
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableImageResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;
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
  ImageBlockPublicAccessState?: ImageBlockPublicAccessEnabledState;
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
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now, except for public AMIs, where the upper limit is 2 years from the creation date.</p>
   * @public
   */
  DeprecateAt: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableImageDeprecationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  WithCooldown?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableImageDeregistrationProtectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: string;
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
  DryRun?: boolean;

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
  Success?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  SerialConsoleAccessEnabled?: boolean;
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
   *                <note>
   *                   <p>If you enable block public access for snapshots in <code>block-all-sharing</code>
   *             mode, it does not change the permissions for snapshots that are already publicly shared.
   *             Instead, it prevents these snapshots from be publicly visible and publicly accessible.
   *             Therefore, the attributes for these snapshots still indicate that they are publicly
   *             shared, even though they are not publicly available.</p>
   *                </note>
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
  DryRun?: boolean;
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
  State?: SnapshotBlockPublicAccessState;
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
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   * @public
   */
  Propagation?: TransitGatewayPropagation;
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
  DryRun?: boolean;
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
  DryRun?: boolean;

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
  DryRun?: boolean;

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
  Return?: boolean;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;
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
  Code?: ClientCertificateRevocationListStatusCode;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Information about the client certificate revocation list.</p>
   * @public
   */
  CertificateRevocationList?: string;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   * @public
   */
  Status?: ClientCertificateRevocationListStatus;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   * @public
   */
  ClientConfiguration?: string;
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
  S3Prefix?: string;
}

/**
 * @public
 */
export interface ExportImageRequest {
  /**
   * <p>Token to enable idempotency for export image requests.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   * @public
   */
  Description?: string;

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
  DryRun?: boolean;

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
  RoleName?: string;

  /**
   * <p>The tags to apply to the export image task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface ExportImageResult {
  /**
   * <p>A description of the image being exported.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The disk image format for the exported image.</p>
   * @public
   */
  DiskImageFormat?: DiskImageFormat;

  /**
   * <p>The ID of the export image task.</p>
   * @public
   */
  ExportImageTaskId?: string;

  /**
   * <p>The ID of the image.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   * @public
   */
  RoleName?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   * @public
   */
  Progress?: string;

  /**
   * <p>Information about the destination Amazon S3 bucket.</p>
   * @public
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The status message for the export image task.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the export image task.</p>
   * @public
   */
  Tags?: Tag[];
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
  Filters?: Filter[];

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
  DryRun?: boolean;
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
  S3Location?: string;
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
  DryRun?: boolean;
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
  AssociatedRoleArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   * @public
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The key of the Amazon S3 object where the certificate, certificate chain, and encrypted private key bundle
   * 			are stored. The object key is formatted as follows: <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   * @public
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the private key.</p>
   * @public
   */
  EncryptionKmsKeyId?: string;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * <p>Information about the associated IAM roles.</p>
   * @public
   */
  AssociatedRoles?: AssociatedRole[];
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  Ipv6Cidr?: string;

  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   * @public
   */
  AssociatedResource?: string;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   * @public
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
  Id?: string;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The Region or Availability Zone that's the target for the data query. For example, <code>eu-north-1</code>.</p>
   * @public
   */
  Destination?: string;

  /**
   * <p>The metric, <code>aggregation-latency</code>, indicating that network latency is aggregated for the query. This is the only supported metric.</p>
   * @public
   */
  Metric?: MetricType;

  /**
   * <p>The metric data aggregation period, <code>p50</code>, between the specified <code>startDate</code> and <code>endDate</code>. For example, a metric of <code>five_minutes</code> is the median of all the data points gathered within those five minutes. <code>p50</code> is the only supported metric.</p>
   * @public
   */
  Statistic?: StatisticType;

  /**
   * <p>The aggregation period used for the data query.</p>
   * @public
   */
  Period?: PeriodType;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * <p>A list of network performance data queries.</p>
   * @public
   */
  DataQueries?: DataQuery[];

  /**
   * <p>The starting time for the performance data request. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The ending time for the performance data request. The end time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  StartDate?: Date;

  /**
   * <p>The end date for the metric point. The ending time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   * @public
   */
  EndDate?: Date;

  Value?: number;
  /**
   * <p>The status of the metric point.</p>
   * @public
   */
  Status?: string;
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
  Id?: string;

  /**
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The Region or Availability Zone that's the destination for the data query. For example, <code>eu-west-1</code>.</p>
   * @public
   */
  Destination?: string;

  /**
   * <p>The metric used for the network performance request. Only <code>aggregate-latency</code> is supported, which shows network latency during a specified period. </p>
   * @public
   */
  Metric?: MetricType;

  /**
   * <p>The statistic used for the network performance request.</p>
   * @public
   */
  Statistic?: StatisticType;

  /**
   * <p>The period used for the network performance request.</p>
   * @public
   */
  Period?: PeriodType;

  /**
   * <p>A list of <code>MetricPoint</code> objects.</p>
   * @public
   */
  MetricPoints?: MetricPoint[];
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataResult {
  /**
   * <p>The list of data responses.</p>
   * @public
   */
  DataResponses?: DataResponse[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 * @public
 */
export interface InstanceUsage {
  /**
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity Reservation.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity Reservation.</p>
   * @public
   */
  UsedInstanceCount?: number;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   * @public
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
   * @public
   */
  State?: CapacityReservationState;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   * @public
   */
  InstanceUsages?: InstanceUsage[];
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
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  AllocationId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Services service.</p>
   * @public
   */
  AwsService?: string;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CoIp?: string;
}

/**
 * @public
 */
export interface GetCoipPoolUsageResult {
  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CoipPoolId?: string;

  /**
   * <p>Information about the address usage.</p>
   * @public
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *          <p>Default: disabled (<code>false</code>)</p>
   * @public
   */
  Latest?: boolean;
}

/**
 * @public
 */
export interface GetConsoleOutputResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   * @public
   */
  Output?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface GetConsoleScreenshotRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

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
  WakeUp?: boolean;
}

/**
 * @public
 */
export interface GetConsoleScreenshotResult {
  /**
   * <p>The data that comprises the image.</p>
   * @public
   */
  ImageData?: string;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string;
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

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
  InstanceFamily?: UnlimitedSupportedInstanceFamily;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   * @public
   */
  CpuCredits?: string;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   * @public
   */
  KmsKeyId?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   * @public
   */
  EbsEncryptionByDefault?: boolean;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType;
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
  PartitionStartDate?: Date;

  /**
   * <p>The end date for the partition.</p>
   * @public
   */
  PartitionEndDate?: Date;
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
  AthenaIntegrations?: AthenaIntegration[];
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
  DryRun?: boolean;

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
  Result?: string;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation. If you specify a Capacity Reservation that is shared
   * 			with you, the operation returns only Capacity Reservation groups that you own.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information,
   *     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  GroupArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   * @public
   */
  OwnerId?: string;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   * @public
   */
  CapacityReservationGroups?: CapacityReservationGroup[];
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
  CurrencyCode?: CurrencyCodeValues;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   * @public
   */
  Duration?: number;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   * @public
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation.</p>
   * @public
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   * @public
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   * @public
   */
  InstanceFamily?: string;

  /**
   * <p>The payment option for the reservation.</p>
   * @public
   */
  PaymentOption?: PaymentOption;

  /**
   * <p>The upfront price of the reservation.</p>
   * @public
   */
  UpfrontPrice?: string;
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
  CurrencyCode?: CurrencyCodeValues;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   * @public
   */
  Purchase?: Purchase[];

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   * @public
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   * @public
   */
  TotalUpfrontPrice?: string;
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
  DryRun?: boolean;
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
  ImageBlockPublicAccessState?: string;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  HttpTokens?: HttpTokensState;

  /**
   * <p>The maximum number of hops that the metadata token can travel.</p>
   * @public
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Indicates whether the IMDS endpoint for an instance is enabled or disabled. When disabled, the instance
   *             metadata can't be accessed.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState;
}

/**
 * @public
 */
export interface GetInstanceMetadataDefaultsResult {
  /**
   * <p>The account-level default IMDS settings.</p>
   * @public
   */
  AccountLevel?: InstanceMetadataDefaultsResponse;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetInstanceTpmEkPubResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The public endorsement key type.</p>
   * @public
   */
  KeyType?: EkPubKeyType;

  /**
   * <p>The public endorsement key format.</p>
   * @public
   */
  KeyFormat?: EkPubKeyFormat;

  /**
   * <p>The public endorsement key material.</p>
   * @public
   */
  KeyValue?: string;
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
  DryRun?: boolean;

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
  MaxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string;
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
  InstanceType?: string;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * <p>The instance types with the specified instance attributes.</p>
   * @public
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string;
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetInstanceUefiDataResult {
  /**
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store.</p>
   * @public
   */
  UefiData?: string;
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
  DryRun?: boolean;

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
  VpcId?: string;

  /**
   * <p>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of historical results you would like returned per page. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;
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
  ResourceOwnerId?: string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  ResourceRegion?: string;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: IpamAddressHistoryResourceType;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The CIDR of the resource.</p>
   * @public
   */
  ResourceCidr?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string;

  /**
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceComplianceStatus?: IpamComplianceStatus;

  /**
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  ResourceOverlapStatus?: IpamOverlapStatus;

  /**
   * <p>The VPC ID of the resource.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   * @public
   */
  SampledStartTime?: Date;

  /**
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   * @public
   */
  SampledEndTime?: Date;
}

/**
 * @internal
 */
export const DescribeVerifiedAccessTrustProvidersResultFilterSensitiveLog = (
  obj: DescribeVerifiedAccessTrustProvidersResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProviders && {
    VerifiedAccessTrustProviders: obj.VerifiedAccessTrustProviders.map((item) =>
      VerifiedAccessTrustProviderFilterSensitiveLog(item)
    ),
  }),
});

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
export const GetInstanceTpmEkPubResultFilterSensitiveLog = (obj: GetInstanceTpmEkPubResult): any => ({
  ...obj,
  ...(obj.KeyValue && { KeyValue: SENSITIVE_STRING }),
});
