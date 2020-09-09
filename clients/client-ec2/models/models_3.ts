import {
  ActiveInstance,
  ActivityStatus,
  AllocationStrategy,
  AllowedPrincipal,
  AssociationStatus,
  BatchState,
  BlockDeviceMapping,
  CapacityReservationState,
  CurrencyCodeValues,
  DiskImageFormat,
  FleetLaunchTemplateSpecification,
  FleetType,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceInterruptionBehavior,
  IpPermission,
  PrivateIpAddressSpecification,
  ReservedInstancesListing,
  ResourceType,
  SpotInstanceType,
  Subnet,
  SubnetAssociation,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
  TargetConfigurationRequest,
  Tenancy,
  TransitGatewayAssociation,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UserIdGroupPair,
  VolumeType,
  Vpc,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
  _InstanceType,
} from "./models_0";
import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  GroupIdentifier,
  InstanceIpv6Address,
  ResponseLaunchTemplateData,
  RouteTable,
  ServiceConfiguration,
  ServiceTypeDetail,
  Snapshot,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  State,
  TrafficMirrorFilter,
  TrafficMirrorSession,
  TrafficMirrorTarget,
  TransitGateway,
  TransitGatewayMulticastDomain,
  TransitGatewayRouteTable,
  Volume,
  VpcEndpoint,
  VpnConnection,
  VpnGateway,
} from "./models_1";
import {
  AttributeBooleanValue,
  EventInformation,
  ExportTaskS3Location,
  FastSnapshotRestoreStateCode,
  Filter,
  IdFormat,
  PaymentOption,
  PermissionGroup,
  ProductCode,
} from "./models_2";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface DescribePrefixListsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-id</code>: The ID of a prefix list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>prefix-list-name</code>: The name of a prefix list.</p>
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
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export namespace DescribePrefixListsRequest {
  export const filterSensitiveLog = (obj: DescribePrefixListsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes prefixes for AWS services.</p>
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the AWS service.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The name of the prefix.</p>
   */
  PrefixListName?: string;
}

export namespace PrefixList {
  export const filterSensitiveLog = (obj: PrefixList): any => ({
    ...obj,
  });
}

export interface DescribePrefixListsResult {
  /**
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: PrefixList[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribePrefixListsResult {
  export const filterSensitiveLog = (obj: DescribePrefixListsResult): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *             <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *             <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *             <code>network-acl</code> | <code>network-acl-association</code> |
   *             <code>network-interface</code> | <code>network-interface-attachment</code> |
   *             <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *             <code>route-table-association</code> | <code>security-group</code> |
   *             <code>snapshot</code> | <code>subnet</code> |
   *             <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *             | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *             <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resources?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribePrincipalIdFormatRequest {
  export const filterSensitiveLog = (obj: DescribePrincipalIdFormatRequest): any => ({
    ...obj,
  });
}

/**
 * <p>PrincipalIdFormat description</p>
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: IdFormat[];
}

export namespace PrincipalIdFormat {
  export const filterSensitiveLog = (obj: PrincipalIdFormat): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: PrincipalIdFormat[];
}

export namespace DescribePrincipalIdFormatResult {
  export const filterSensitiveLog = (obj: DescribePrincipalIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribePublicIpv4PoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   */
  PoolIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
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
}

export namespace DescribePublicIpv4PoolsRequest {
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;

  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;
}

export namespace PublicIpv4PoolRange {
  export const filterSensitiveLog = (obj: PublicIpv4PoolRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * <p>The name of the location from which the address pool is advertised. A network border group is a unique set of Availability Zones or Local Zones from where AWS advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace PublicIpv4Pool {
  export const filterSensitiveLog = (obj: PublicIpv4Pool): any => ({
    ...obj,
  });
}

export interface DescribePublicIpv4PoolsResult {
  /**
   * <p>Information about the address pools.</p>
   */
  PublicIpv4Pools?: PublicIpv4Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribePublicIpv4PoolsResult {
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeRegionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: string[];

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>endpoint</code> - The endpoint of the Region (for example, <code>ec2.us-east-1.amazonaws.com</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>opt-in-status</code> - The opt-in status of the Region (<code>opt-in-not-required</code> | <code>opted-in</code> |
   *                  <code>not-opted-in</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region-name</code> - The name of the Region (for example, <code>us-east-1</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeRegionsRequest {
  export const filterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;
}

export namespace Region {
  export const filterSensitiveLog = (obj: Region): any => ({
    ...obj,
  });
}

export interface DescribeRegionsResult {
  /**
   * <p>Information about the Regions.</p>
   */
  Regions?: Region[];
}

export namespace DescribeRegionsResult {
  export const filterSensitiveLog = (obj: DescribeRegionsResult): any => ({
    ...obj,
  });
}

export enum OfferingClassType {
  CONVERTIBLE = "convertible",
  STANDARD = "standard",
}

export type OfferingTypeValues =
  | "All Upfront"
  | "Heavy Utilization"
  | "Light Utilization"
  | "Medium Utilization"
  | "No Upfront"
  | "Partial Upfront";

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: string[];

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example, 2015-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example, 9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description.
   *               Instances that include <code>(Amazon VPC)</code> in the product platform description will
   *               only be displayed to EC2-Classic account holders and are for use with Amazon VPC
   *               (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *               Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *               Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Windows</code>
   *               | <code>Windows (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> |
   *               <code>Windows with SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL
   *               Server Web</code> | <code>Windows with SQL Server Web (Amazon VPC)</code> |
   *               <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL Server
   *               Enterprise (Amazon VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code> | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
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
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   */
  OfferingClass?: OfferingClassType | string;
}

export namespace DescribeReservedInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
    ...obj,
  });
}

export type RIProductDescription = "Linux/UNIX" | "Linux/UNIX (Amazon VPC)" | "Windows" | "Windows (Amazon VPC)";

export type RecurringChargeFrequency = "Hourly";

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The frequency of the recurring charge.</p>
   */
  Frequency?: RecurringChargeFrequency | string;

  /**
   * <p>The amount of the recurring charge.</p>
   */
  Amount?: number;
}

export namespace RecurringCharge {
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

export enum Scope {
  AVAILABILITY_ZONE = "Availability Zone",
  REGIONAL = "Region",
}

export type ReservedInstanceState =
  | "active"
  | "payment-failed"
  | "payment-pending"
  | "queued"
  | "queued-deleted"
  | "retired";

/**
 * <p>Describes a Reserved Instance.</p>
 */
export interface ReservedInstances {
  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   */
  State?: ReservedInstanceState | string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The scope of the Reserved Instance.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   */
  End?: Date;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   */
  Start?: Date;

  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency codes.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The number of reservations purchased.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;
}

export namespace ReservedInstances {
  export const filterSensitiveLog = (obj: ReservedInstances): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesResult {
  /**
   * <p>A list of Reserved Instances.</p>
   */
  ReservedInstances?: ReservedInstances[];
}

export namespace DescribeReservedInstancesResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * <p>One or more Reserved Instance listing IDs.</p>
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> | <code>active</code> |
   *            <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more Reserved Instance IDs.</p>
   */
  ReservedInstancesId?: string;
}

export namespace DescribeReservedInstancesListingsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesListingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace DescribeReservedInstancesListingsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesListingsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>client-token</code> - The idempotency token for the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-date</code> - The time when the modification request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>effective-date</code> - The time when the modification becomes effective.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.platform</code> - The network platform of the new Reserved Instances (<code>EC2-Classic</code> | <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *            (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>update-date</code> - The time when the modification request was last updated.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>IDs for the submitted modification request.</p>
   */
  ReservedInstancesModificationIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedInstancesModificationsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesModificationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 */
export interface ReservedInstancesConfiguration {
  /**
   * <p>The network platform of the modified Reserved Instances, which is either EC2-Classic or EC2-VPC.</p>
   */
  Platform?: string;

  /**
   * <p>The instance type for the modified Reserved Instances.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a specific Availability Zone.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   */
  InstanceCount?: number;

  /**
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   */
  AvailabilityZone?: string;
}

export namespace ReservedInstancesConfiguration {
  export const filterSensitiveLog = (obj: ReservedInstancesConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the modification request/s.</p>
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification request.</p>
   */
  TargetConfiguration?: ReservedInstancesConfiguration;

  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request. This field is only available when the modification is fulfilled.</p>
   */
  ReservedInstancesId?: string;
}

export namespace ReservedInstancesModificationResult {
  export const filterSensitiveLog = (obj: ReservedInstancesModificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;
}

export namespace ReservedInstancesId {
  export const filterSensitiveLog = (obj: ReservedInstancesId): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 */
export interface ReservedInstancesModification {
  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   */
  ReservedInstancesIds?: ReservedInstancesId[];

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   */
  Status?: string;

  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   * 				Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance IDs.</p>
   */
  ModificationResults?: ReservedInstancesModificationResult[];

  /**
   * <p>The time for the modification to become effective.</p>
   */
  EffectiveDate?: Date;

  /**
   * <p>The reason for the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time when the modification request was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * <p>The time when the modification request was last updated.</p>
   */
  UpdateDate?: Date;
}

export namespace ReservedInstancesModification {
  export const filterSensitiveLog = (obj: ReservedInstancesModification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * <p>The Reserved Instance modification information.</p>
   */
  ReservedInstancesModifications?: ReservedInstancesModification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedInstancesModificationsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesModificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or <code>convertible</code>.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy
   *       of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant hardware
   *       (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type. </p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 2592000 (1 month)</p>
   */
  MinDuration?: number;

  /**
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   */
  IncludeMarketplace?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can be
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (for example, one year or
   *           three years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fixed-price</code> - The purchase price of the Reserved Instance (for example,
   *           9800.0).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type that is covered by the
   *           reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>marketplace</code> - Set to <code>true</code> to show only Reserved Instance
   *           Marketplace offerings. When this filter is not used, which is the default behavior, all
   *           offerings from both AWS and the Reserved Instance Marketplace are listed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description.
   *           Instances that include <code>(Amazon VPC)</code> in the product platform description will
   *           only be displayed to EC2-Classic account holders and are for use with Amazon VPC.
   *             (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *             Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *             Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Windows</code>
   *           | <code>Windows (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL
   *             Server Web</code> | <code> Windows with SQL Server Web (Amazon VPC)</code> |
   *             <code>Windows with SQL Server Enterprise</code> | <code>Windows with SQL Server
   *             Enterprise (Amazon VPC)</code>) </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering
   *           ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Availability Zone</code> or
   *             <code>Region</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   * 		       <p>Default: 94608000 (3 years)</p>
   */
  MaxDuration?: number;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   * 			results of the initial request can be seen by sending another request with the returned
   * 				<code>NextToken</code> value. The maximum is 100.</p>
   * 		       <p>Default: 100</p>
   */
  MaxResults?: number;

  /**
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   * 		       <p>Default: 20</p>
   */
  MaxInstanceCount?: number;

  /**
   * <p>One or more Reserved Instances offering IDs.</p>
   */
  ReservedInstancesOfferingIds?: string[];
}

export namespace DescribeReservedInstancesOfferingsRequest {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * <p>The price per instance.</p>
   */
  Price?: number;
}

export namespace PricingDetail {
  export const filterSensitiveLog = (obj: PricingDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of
   *       the same or higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   */
  OfferingClass?: OfferingClassType | string;

  /**
   * <p>The Reserved Instance offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;

  /**
   * <p>The Reserved Instance product platform description.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   */
  PricingDetails?: PricingDetail[];

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace (resale) or AWS.
   *         If it's a Reserved Instance Marketplace offering, this is <code>true</code>.</p>
   */
  Marketplace?: boolean;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability Zone.</p>
   */
  Scope?: Scope | string;

  /**
   * <p>The tenancy of the instance.</p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's
   * 				specified using ISO 4217 standard currency codes. At this time,
   * 				the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a>
   *      to confirm that an exchange can be made.</p>
   */
  ReservedInstancesOfferingId?: string;
}

export namespace ReservedInstancesOffering {
  export const filterSensitiveLog = (obj: ReservedInstancesOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * <p>A list of Reserved Instances offerings.</p>
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when
   * 			there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedInstancesOfferingsResult {
  export const filterSensitiveLog = (obj: DescribeReservedInstancesOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeRouteTablesRequest {
  /**
   * <p>One or more route table IDs.</p>
   * 		       <p>Default: Describes all your route tables.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-association-id</code> - The ID of an association
   *                     ID for the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.route-table-id</code> - The ID of the route table involved in
   *                     the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the
   *                     association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.main</code> - Indicates whether the route table is the main
   *                     route table for the VPC (<code>true</code> | <code>false</code>). Route tables
   *                     that do not have an association ID are not returned in the response.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the route table.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route-table-id</code> - The ID of the route table.</p>
   * 		          </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a
   *                     route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 				           <p>
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the AWS
   *                     service specified in a route in the table.</p>
   * 			         </li>
   *             <li>
   *                   <p>
   *                   <code>route.egress-only-internet-gateway-id</code> - The ID of an
   *                     egress-only Internet gateway specified in a route in the route table.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                   <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>route.origin</code> - Describes how the route was created.
   *                         <code>CreateRouteTable</code> indicates that the route was automatically
   *                     created when the route table was created; <code>CreateRoute</code> indicates
   *                     that the route was manually added to the route table;
   *                         <code>EnableVgwRoutePropagation</code> indicates that the route was
   *                     propagated by route propagation.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>route.state</code> - The state of a route in the route table
   *                         (<code>active</code> | <code>blackhole</code>). The blackhole state
   *                     indicates that the route's target isn't available (for example, the specified
   *                     gateway isn't attached to the VPC, the specified NAT instance has been
   *                     terminated, and so on).</p>
   *                </li>
   *             <li>
   * 		            <p>
   *                   <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering
   * 		                connection specified in a route in the table.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   * 		            <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the route table.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

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

export namespace DescribeRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeRouteTablesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 */
export interface DescribeRouteTablesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about one or more route tables.</p>
   */
  RouteTables?: RouteTable[];
}

export namespace DescribeRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeRouteTablesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 */
export interface SlotDateTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   */
  LatestTime: Date | undefined;
}

export namespace SlotDateTimeRangeRequest {
  export const filterSensitiveLog = (obj: SlotDateTimeRangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   */
  OccurrenceDays?: number[];

  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   */
  OccurrenceUnit?: string;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   */
  OccurrenceRelativeToEnd?: boolean;
}

export namespace ScheduledInstanceRecurrenceRequest {
  export const filterSensitiveLog = (obj: ScheduledInstanceRecurrenceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   */
  MaxSlotDurationInHours?: number;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   */
  MinSlotDurationInHours?: number;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

export namespace DescribeScheduledInstanceAvailabilityRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledInstanceAvailabilityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   */
  Frequency?: string;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   */
  OccurrenceUnit?: string;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   */
  OccurrenceRelativeToEnd?: boolean;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   */
  OccurrenceDaySet?: number[];

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   */
  Interval?: number;
}

export namespace ScheduledInstanceRecurrence {
  export const filterSensitiveLog = (obj: ScheduledInstanceRecurrence): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   */
  MinTermDurationInDays?: number;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   */
  PurchaseToken?: string;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   */
  MaxTermDurationInDays?: number;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The number of available instances.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;

  /**
   * <p>The time period for the first schedule to start.</p>
   */
  FirstSlotStartTime?: Date;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   */
  InstanceType?: string;
}

export namespace ScheduledInstanceAvailability {
  export const filterSensitiveLog = (obj: ScheduledInstanceAvailability): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * <p>Information about the available Scheduled Instances.</p>
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];

  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeScheduledInstanceAvailabilityResult {
  export const filterSensitiveLog = (obj: DescribeScheduledInstanceAvailabilityResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 */
export interface SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date;
}

export namespace SlotStartTimeRangeRequest {
  export const filterSensitiveLog = (obj: SlotStartTimeRangeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Scheduled Instance IDs.</p>
   */
  ScheduledInstanceIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-platform</code> - The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
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
   * <p>The time period for the first schedule to start.</p>
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest;
}

export namespace DescribeScheduledInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Scheduled Instance.</p>
 */
export interface ScheduledInstance {
  /**
   * <p>The number of instances.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   */
  TotalScheduledInstanceHours?: number;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   */
  TermStartDate?: Date;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   */
  TermEndDate?: Date;

  /**
   * <p>The network platform (<code>EC2-Classic</code> or <code>EC2-VPC</code>).</p>
   */
  NetworkPlatform?: string;

  /**
   * <p>The number of hours in the schedule.</p>
   */
  SlotDurationInHours?: number;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   */
  PreviousSlotEndTime?: Date;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   */
  Platform?: string;

  /**
   * <p>The schedule recurrence.</p>
   */
  Recurrence?: ScheduledInstanceRecurrence;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId?: string;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The time for the next schedule to start.</p>
   */
  NextSlotStartTime?: Date;

  /**
   * <p>The hourly price for a single instance.</p>
   */
  HourlyPrice?: string;
}

export namespace ScheduledInstance {
  export const filterSensitiveLog = (obj: ScheduledInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeScheduledInstances.</p>
 */
export interface DescribeScheduledInstancesResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export namespace DescribeScheduledInstancesResult {
  export const filterSensitiveLog = (obj: DescribeScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupReferencesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the security groups in your account.</p>
   */
  GroupId: string[] | undefined;
}

export namespace DescribeSecurityGroupReferencesRequest {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupReferencesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   */
  ReferencingVpcId?: string;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export namespace SecurityGroupReference {
  export const filterSensitiveLog = (obj: SecurityGroupReference): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupReferencesResult {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[];
}

export namespace DescribeSecurityGroupReferencesResult {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupReferencesResult): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupsRequest {
  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all your security groups.</p>
   */
  GroupIds?: string[];

  /**
   * <p>[EC2-Classic and default VPC only] The names of the security groups. You can specify either
   * 			the security group name or the security group ID. For security groups in a nondefault VPC, use
   * 			the <code>group-name</code> filter to describe security groups by name.</p>
   *          <p>Default: Describes all your security groups.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound
   *                     security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.from-port</code> - For an outbound rule, the
   *                     start of port range for the TCP and UDP protocols, or an ICMP type
   *                     number.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-id</code> - The ID of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.group-name</code> - The name of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an
   *                     outbound security group rule.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>egress.ip-permission.prefix-list-id</code> - The ID of a prefix list to which a security group rule allows outbound access.</p>
   *      	      </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.protocol</code> - The IP protocol for an
   *                     outbound security group rule (<code>tcp</code> | <code>udp</code> |
   *                         <code>icmp</code> or a protocol number).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.to-port</code> - For an outbound rule, the end
   *                     of port range for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>egress.ip-permission.user-id</code> - The ID of an AWS account that
   *                     has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.from-port</code> - For an inbound rule, the start of port
   *                     range for the TCP and UDP protocols, or an ICMP type number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.group-id</code> - The ID of a security group that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                     <code>ip-permission.group-name</code> - The name of a security group that has
   *                     been referenced in an inbound security group rule.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-permission.prefix-list-id</code> - The ID of a prefix list from which a security group rule allows inbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.protocol</code> - The IP protocol for an inbound security
   *                     group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a
   *                     protocol number).</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.to-port</code> - For an inbound rule, the end of port range
   *                     for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ip-permission.user-id</code> - The ID of an AWS account that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner of the security group.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC specified when the security group was created.</p>
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
}

export namespace DescribeSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group</p>
 */
export interface SecurityGroup {
  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: IpPermission[];

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;

  /**
   * <p>Any tags assigned to the security group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The AWS account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;
}

export namespace SecurityGroup {
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
}

export interface DescribeSecurityGroupsResult {
  /**
   * <p>Information about the security groups.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSecurityGroupsResult {
  export const filterSensitiveLog = (obj: DescribeSecurityGroupsResult): any => ({
    ...obj,
  });
}

export type SnapshotAttributeName = "createVolumePermission" | "productCodes";

export interface DescribeSnapshotAttributeRequest {
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

  /**
   * <p>The snapshot attribute you would like to view.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;
}

export namespace DescribeSnapshotAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeSnapshotAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 */
export interface CreateVolumePermission {
  /**
   * <p>The AWS account ID to be added or removed.</p>
   */
  UserId?: string;

  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   */
  Group?: PermissionGroup | string;
}

export namespace CreateVolumePermission {
  export const filterSensitiveLog = (obj: CreateVolumePermission): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotAttributeResult {
  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   */
  CreateVolumePermissions?: CreateVolumePermission[];
}

export namespace DescribeSnapshotAttributeResult {
  export const filterSensitiveLog = (obj: DescribeSnapshotAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotsRequest {
  /**
   * <p>The IDs of the AWS accounts that can create volumes from the snapshot.</p>
   */
  RestorableByUserIds?: string[];

  /**
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       AWS account IDs, <code>self</code>, and <code>amazon</code>.</p>
   */
  OwnerIds?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - A description of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>encrypted</code> - Indicates whether the snapshot is encrypted
   *             (<code>true</code> | <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias, from an Amazon-maintained list
   *           (<code>amazon</code>).
   *           This is not the user-configured AWS account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The AWS account ID of the owner. We recommend that
   *           you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>progress</code> - The progress of the snapshot, as a percentage (for example,
   *           80%).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The time stamp when the snapshot was initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the snapshot (<code>pending</code> |
   *             <code>completed</code> | <code>error</code>).</p>
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
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-size</code> - The size of the volume, in GiB.</p>
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
   * <p>The maximum number of snapshot results returned by <code>DescribeSnapshots</code> in
   *       paginated output. When this parameter is used, <code>DescribeSnapshots</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeSnapshots</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 1000; if <code>MaxResults</code> is given a value larger than 1000,
   *       only 1000 results are returned. If this parameter is not used, then
   *         <code>DescribeSnapshots</code> returns all results. You cannot specify this parameter and
   *       the snapshot IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeSnapshots</code> request where <code>MaxResults</code> was used and the
   *       results exceeded the value of that parameter. Pagination continues from the end of the
   *       previous results that returned the <code>NextToken</code> value. This value is
   *         <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSnapshotsRequest {
  export const filterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotsResult {
  /**
   * <p>Information about the snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeSnapshots</code>
   *       request. When the results of a <code>DescribeSnapshots</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSnapshotsResult {
  export const filterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeSpotDatafeedSubscriptionRequest {
  export const filterSensitiveLog = (obj: DescribeSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

export namespace DescribeSpotDatafeedSubscriptionResult {
  export const filterSensitiveLog = (obj: DescribeSpotDatafeedSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;
}

export namespace DescribeSpotFleetInstancesRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
   */
  ActiveInstances?: ActiveInstance[];
}

export namespace DescribeSpotFleetInstancesResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetInstancesResponse): any => ({
    ...obj,
  });
}

export enum EventType {
  BATCH_CHANGE = "fleetRequestChange",
  ERROR = "error",
  INFORMATION = "information",
  INSTANCE_CHANGE = "instanceChange",
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   */
  EventType?: EventType | string;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The starting date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeSpotFleetRequestHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 */
export interface HistoryRecord {
  /**
   * <p>The date and time of the event, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;

  /**
   * <p>Information about the event.</p>
   */
  EventInformation?: EventInformation;

  /**
   * <p>The event type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instanceChange</code> - An instance was launched or terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Information</code> - An informational event.</p>
   *             </li>
   *          </ul>
   */
  EventType?: EventType | string;
}

export namespace HistoryRecord {
  export const filterSensitiveLog = (obj: HistoryRecord): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   */
  HistoryRecords?: HistoryRecord[];

  /**
   * <p>The starting date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The last date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *       All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more results, this value is not present.</p>
   */
  LastEvaluatedTime?: Date;
}

export namespace DescribeSpotFleetRequestHistoryResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestHistoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call.
   *       Specify a value between 1 and 1000. The default value is 1000.
   *       To retrieve the remaining results, make another call with the returned
   *       <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   */
  SpotFleetRequestIds?: string[];
}

export namespace DescribeSpotFleetRequestsRequest {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestsRequest): any => ({
    ...obj,
  });
}

export enum ExcessCapacityTerminationPolicy {
  DEFAULT = "default",
  NO_TERMINATION = "noTermination",
}

/**
 * <p>Describes whether monitoring is enabled.</p>
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Enabled?: boolean;
}

export namespace SpotFleetMonitoring {
  export const filterSensitiveLog = (obj: SpotFleetMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated. You can
   *             specify <code>true</code> only if creating a new network interface when launching an
   *             instance.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching
   *         	more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The position of the network interface in the attachment order.
   *           A primary network interface has a device index of 0.</p>
   *         <p>If you specify a network interface when launching an instance,
   *           you must specify the device index.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>One or more IPv6 addresses to assign to the network interface. You cannot specify
   *             this option and the option to assign a number of IPv6 addresses in the same request. You
   *             cannot specify this option if you've specified a minimum number of instances to
   *             launch.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the network interface.</p>
   *         <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   * 			<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're
   *         	launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Description?: string;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: string[];

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses
   *             the IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The
   *             public IP address can only be assigned to a network interface for eth0, and can only be
   *             assigned to a new network interface, not an existing one. You cannot specify more than one
   *             network interface in the request. If launching into a default subnet, the default value is
   *             <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;
}

export namespace InstanceNetworkInterfaceSpecification {
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes Spot Instance placement.</p>
 */
export interface SpotPlacement {
  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy
   *        of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code> tenancy is not
   *        supported for Spot Instances.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The Availability Zone.</p>
   *          <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas; for example, "us-west-2a, us-west-2b".</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

export namespace SpotPlacement {
  export const filterSensitiveLog = (obj: SpotPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *             <code>TagSpecifications</code> parameter in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">
   *                <code>SpotFleetRequestConfigData</code>
   *             </a>.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace SpotFleetTagSpecification {
  export const filterSensitiveLog = (obj: SpotFleetTagSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *             On-Demand capacity in your fleet request, you can't use
 *                 <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 */
export interface SpotFleetLaunchSpecification {
  /**
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *           subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The placement information.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: SpotFleetMonitoring;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.
   *           If this value is not specified, the default is the Spot price specified for the fleet.
   *           To determine the Spot price per unit hour, divide the Spot price by the
   *           value of <code>WeightedCapacity</code>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The tags to apply during creation.</p>
   */
  TagSpecifications?: SpotFleetTagSpecification[];

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The Base64-encoded user data that instances use when starting up.</p>
   */
  UserData?: string;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *           them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   */
  SubnetId?: string;

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;
}

export namespace SpotFleetLaunchSpecification {
  export const filterSensitiveLog = (obj: SpotFleetLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The priority for the launch template override. If <b>OnDemandAllocationStrategy</b> is set to <code>prioritized</code>, Spot Fleet uses
   *             priority to determine which launch template override to use first in fulfilling
   *             On-Demand capacity. The highest priority is launched first. Valid values are whole numbers starting at <code>0</code>. The lower
   *             the number, the higher the priority. If no number is set, the launch template override
   *             has the lowest priority.</p>
   */
  Priority?: number;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;
}

export namespace LaunchTemplateOverrides {
  export const filterSensitiveLog = (obj: LaunchTemplateOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateConfig {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch template.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

export namespace LaunchTemplateConfig {
  export const filterSensitiveLog = (obj: LaunchTemplateConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Classic Load Balancer.</p>
 */
export interface ClassicLoadBalancer {
  /**
   * <p>The name of the load balancer.</p>
   */
  Name?: string;
}

export namespace ClassicLoadBalancer {
  export const filterSensitiveLog = (obj: ClassicLoadBalancer): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances
 *             with these Classic Load Balancers.</p>
 */
export interface ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[];
}

export namespace ClassicLoadBalancersConfig {
  export const filterSensitiveLog = (obj: ClassicLoadBalancersConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  Arn?: string;
}

export namespace TargetGroup {
  export const filterSensitiveLog = (obj: TargetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances
 *             with these target groups.</p>
 */
export interface TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace TargetGroupsConfig {
  export const filterSensitiveLog = (obj: TargetGroupsConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.</p>
 */
export interface LoadBalancersConfig {
  /**
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: TargetGroupsConfig;

  /**
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;
}

export namespace LoadBalancersConfig {
  export const filterSensitiveLog = (obj: LoadBalancersConfig): any => ({
    ...obj,
  });
}

export enum OnDemandAllocationStrategy {
  LOWEST_PRICE = "lowestPrice",
  PRIORITIZED = "prioritized",
}

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfigData {
  /**
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">
   *                <code>SpotFleetTagSpecification</code>
   *             </a> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your Resources</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by
   *             the Spot Fleet request.</p>
   *         <p>If the allocation strategy is <code>lowestPrice</code>, Spot Fleet launches instances from
   *             the Spot Instance pools with the lowest price. This is the default allocation strategy.</p>
   *         <p>If the allocation strategy is <code>diversified</code>, Spot Fleet launches instances from
   *             all the Spot Instance pools that you specify.</p>
   *         <p>If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet launches instances
   *             from Spot Instance pools with optimal capacity for the number of instances that are
   *             launching.</p>
   */
  AllocationStrategy?: AllocationStrategy | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You cannot set this value.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. The default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that
   *             grants the Spot Fleet the permission to request, launch, terminate, and tag instances on
   *             your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *                 Fleet prerequisites</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>. Spot Fleet
   *             can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using
   *           <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if
   *             you set <code>TerminateInstancesWithExpiration</code>.</p>
   */
  IamFleetRole: string | undefined;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay.
   *             You can use the <code>spotdMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed
   *             your budget. If you set a maximum price per hour for the On-Demand Instances and
   *             Spot Instances in your request, Spot Fleet will launch instances until it reaches
   *             the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached,
   *             the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  SpotMaxTotalPrice?: string;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid
   *             only when Spot <b>AllocationStrategy</b> is set to
   *                 <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly
   *             allocates your target Spot capacity across the number of Spot pools that you
   *             specify.</p>
   */
  InstancePoolsToUseCount?: number;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet request.
   *           Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.</p>
   *          <p>With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types:
   *           C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.</p>
   */
  LoadBalancersConfig?: LoadBalancersConfig;

  /**
   * <p>Indicates whether running Spot Instances should be terminated if you decrease the target
   *             capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.
   *             You can use the <code>onDemandMaxTotalPrice</code> parameter, the <code>spotMaxTotalPrice</code>
   *             parameter, or both parameters to ensure that your fleet cost does not exceed
   *             your budget. If you set a maximum price per hour for the On-Demand Instances and
   *             Spot Instances in your request, Spot Fleet will launch instances until it reaches
   *             the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached,
   *             the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  OnDemandMaxTotalPrice?: string;

  /**
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill the request.
   *             If no value is specified, the Spot Fleet request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target capacity
   *             or also attempts to maintain it. When this value is <code>request</code>, the Spot Fleet
   *             only places the required requests. It does not attempt to replenish Spot Instances if
   *             capacity is diminished, nor does it submit requests in alternative Spot pools if
   *             capacity is not available. When this value is <code>maintain</code>, the Spot Fleet
   *             maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   */
  Type?: FleetType | string;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[];

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity.
   *             If you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order,
   *             launching the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the
   *             priority that you assign to each Spot Fleet launch template override, launching the highest
   *             priority first. If you do not specify a value, Spot Fleet defaults to
   *             <code>lowestPrice</code>.</p>
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | string;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target On-Demand capacity.</p>
   */
  OnDemandFulfilledCapacity?: number;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity
   *             in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
   *             your listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;
}

export namespace SpotFleetRequestConfigData {
  export const filterSensitiveLog = (obj: SpotFleetRequestConfigData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Fleet request.</p>
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * <p>The state of the Spot Fleet request.</p>
   */
  SpotFleetRequestState?: BatchState | string;

  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   */
  ActivityStatus?: ActivityStatus | string;

  /**
   * <p>The creation date and time of the request.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   */
  Tags?: Tag[];
}

export namespace SpotFleetRequestConfig {
  export const filterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the configuration of your Spot Fleet.</p>
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[];
}

export namespace DescribeSpotFleetRequestsResponse {
  export const filterSensitiveLog = (obj: DescribeSpotFleetRequestsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * <p>The token to request the next set of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 5
   *             and 1000. To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone-group</code> - The Availability Zone group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the Spot Instance request was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-code</code> - The fault code related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fault-message</code> - The fault message related to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance that fulfilled the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-group</code> - The Spot Instance launch group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.delete-on-termination</code> - Indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.device-name</code> - The device name for the volume in the block device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot for the EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-size</code> - The size of the EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume:
   *                <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for
   *                Throughput Optimized HDD, <code>sc1</code>for Cold HDD, or <code>standard</code> for Magnetic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-id</code> - The ID of the security group for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-name</code> - The name of the security group for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.instance-type</code> - The type of instance (for example, <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.key-name</code> - The name of the key pair the instance launched with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.monitoring-enabled</code> - Whether detailed monitoring is enabled for the Spot Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launched-availability-zone</code> - The Availability Zone in which the request is launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Indicates whether the IP address is
   *                the primary private IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.delete-on-termination</code> - Indicates whether the network
   *                interface is deleted when the instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - A description of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.device-index</code> - The index of the device for the network
   *                interface attachment on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of the security group associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-ip-address</code> - The primary private IP address of
   *                the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description associated with the instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The Spot Instance request ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The maximum hourly price for any Spot Instance launched to fulfill the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Spot Instance request (<code>open</code>
   *                     | <code>active</code> | <code>closed</code> | <code>cancelled</code> |
   *                         <code>failed</code>). Spot request status information can help you track
   *                     your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot
   *                         request status</a> in the
   *                     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-code</code> - The short code describing the most recent evaluation of your Spot Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The message explaining the status of the Spot Instance request.</p>
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
   *                   <code>type</code> - The type of Spot Instance request (<code>one-time</code> | <code>persistent</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-from</code> - The start date of the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>valid-until</code> - The end date of the request.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeSpotInstanceRequestsRequest {
  export const filterSensitiveLog = (obj: DescribeSpotInstanceRequestsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled: boolean | undefined;
}

export namespace RunInstancesMonitoringEnabled {
  export const filterSensitiveLog = (obj: RunInstancesMonitoringEnabled): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface LaunchSpecification {
  /**
   * <p>One or more block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The Base64-encoded user data for the instance.</p>
   */
  UserData?: string;

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>Describes the monitoring of an instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;
}

export namespace LaunchSpecification {
  export const filterSensitiveLog = (obj: LaunchSpecification): any => ({
    ...obj,
  });
}

export type SpotInstanceState = "active" | "cancelled" | "closed" | "failed" | "open";

/**
 * <p>Describes the status of a Spot Instance request.</p>
 */
export interface SpotInstanceStatus {
  /**
   * <p>The date and time of the most recent status update, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The description for the status code.</p>
   */
  Message?: string;

  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html#spot-instance-bid-status-understand">Spot status codes</a>
   *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  Code?: string;
}

export namespace SpotInstanceStatus {
  export const filterSensitiveLog = (obj: SpotInstanceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Instance request.</p>
 */
export interface SpotInstanceRequest {
  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The start date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *         The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: LaunchSpecification;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>If you specified a duration and your Spot Instance request was fulfilled, this is the fixed hourly price in effect for the Spot Instance while it runs.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>The state of the Spot Instance request. Spot status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot status</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: SpotInstanceState | string;

  /**
   * <p>The end date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *         If this is a one-time request, it remains active until all instances launch, the request is canceled, or this date is reached.
   * 		If the request is persistent, it remains active until it is canceled or this date is reached.
   *         The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Spot Instance request type.</p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: SpotInstanceStatus;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * <p>The duration for the Spot Instance, in minutes.</p>
   */
  BlockDurationMinutes?: number;
}

export namespace SpotInstanceRequest {
  export const filterSensitiveLog = (obj: SpotInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];

  /**
   * <p>The token to use to retrieve the next set of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSpotInstanceRequestsResult {
  export const filterSensitiveLog = (obj: DescribeSpotInstanceRequestsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price history data,
   *        in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  EndTime?: Date;

  /**
   * <p>Filters the results by the specified instance types.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price history data,
   *        in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.
   *        Specify a value between 1 and 1000. The default value is 1000.
   *        To retrieve the remaining results, make another call with the returned
   *        <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone for which prices should be returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The type of instance (for example, <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description for the Spot price
   *            (<code>Linux/UNIX</code> | <code>SUSE Linux</code> | <code>Windows</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Windows (Amazon VPC)</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The Spot price. The value must match exactly (or use wildcards; greater than or less than comparison is not supported).</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>timestamp</code> - The time stamp of the Spot price history, in UTC format
   *                     (for example,
   *                         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *                     You can use wildcards (* and ?). Greater than or less than comparison is not
   *                     supported.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   */
  ProductDescriptions?: string[];
}

export namespace DescribeSpotPriceHistoryRequest {
  export const filterSensitiveLog = (obj: DescribeSpotPriceHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the maximum price per hour that you are willing to pay for a Spot Instance.</p>
 */
export interface SpotPrice {
  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A general description of the AMI.</p>
   */
  ProductDescription?: RIProductDescription | string;

  /**
   * <p>The date and time the request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  Timestamp?: Date;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;
}

export namespace SpotPrice {
  export const filterSensitiveLog = (obj: SpotPrice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeSpotPriceHistory.</p>
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is null or an empty
   *             string when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The historical Spot prices.</p>
   */
  SpotPriceHistory?: SpotPrice[];
}

export namespace DescribeSpotPriceHistoryResult {
  export const filterSensitiveLog = (obj: DescribeSpotPriceHistoryResult): any => ({
    ...obj,
  });
}

export interface DescribeStaleSecurityGroupsRequest {
  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;

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

export namespace DescribeStaleSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeStaleSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale rule in a security group.</p>
 */
export interface StaleIpPermission {
  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  ToPort?: number;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   */
  UserIdGroupPairs?: UserIdGroupPair[];

  /**
   * <p>The IP protocol name (for <code>tcp</code>, <code>udp</code>, and <code>icmp</code>) or number  (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   */
  IpProtocol?: string;

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP type number. A value of
   *         <code>-1</code> indicates all ICMP types. </p>
   */
  FromPort?: number;
}

export namespace StaleIpPermission {
  export const filterSensitiveLog = (obj: StaleIpPermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stale security group (a security group that contains stale rules).</p>
 */
export interface StaleSecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   */
  StaleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * <p>The ID of the VPC for the security group.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   */
  StaleIpPermissions?: StaleIpPermission[];

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The description of the security group.</p>
   */
  Description?: string;
}

export namespace StaleSecurityGroup {
  export const filterSensitiveLog = (obj: StaleSecurityGroup): any => ({
    ...obj,
  });
}

export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>Information about the stale security groups.</p>
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeStaleSecurityGroupsResult {
  export const filterSensitiveLog = (obj: DescribeStaleSecurityGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeSubnetsRequest {
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
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the subnet. You can also use
   *                     <code>availabilityZone</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone for the subnet.
   *                     You can also use <code>availabilityZoneId</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>available-ip-address-count</code> - The number of IPv4 addresses in the
   *                     subnet that are available.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block</code> - The IPv4 CIDR block of the subnet. The CIDR block you
   *                     specify must exactly match the subnet's CIDR block for information to be
   *                     returned for the subnet. You can also use <code>cidr</code> or
   *                     <code>cidrBlock</code> as the filter names.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>default-for-az</code> - Indicates whether this is the default subnet for the
   *                     Availability Zone. You can also use <code>defaultForAz</code> as the filter name.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - An association ID
   *                     for an IPv6 CIDR block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the subnet (<code>pending</code> | <code>available</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-arn</code> - The Amazon Resource Name (ARN) of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the subnet.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more subnet IDs.</p>
   * 		       <p>Default: Describes all your subnets.</p>
   */
  SubnetIds?: string[];
}

export namespace DescribeSubnetsRequest {
  export const filterSensitiveLog = (obj: DescribeSubnetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSubnetsResult {
  /**
   * <p>Information about one or more subnets.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeSubnetsResult {
  export const filterSensitiveLog = (obj: DescribeSubnetsResult): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
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
   *                   <code>resource-type</code> - The resource type (<code>customer-gateway</code> | <code>dedicated-host</code> | <code>dhcp-options</code> | <code>elastic-ip</code> | <code>fleet</code> | <code>fpga-image</code> | <code>host-reservation</code> | <code>image</code> | <code>instance</code> | <code>internet-gateway</code> | <code>key-pair</code> | <code>launch-template</code> | <code>natgateway</code> | <code>network-acl</code> | <code>network-interface</code> | <code>placement-group</code> | <code>reserved-instances</code> | <code>route-table</code> | <code>security-group</code> | <code>snapshot</code> | <code>spot-instances-request</code> | <code>subnet</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-endpoint</code> | <code>vpc-endpoint-service</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>).</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.
   *       This value can be between 5 and 1000.
   * 			To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag.</p>
 */
export interface TagDescription {
  /**
   * <p>The tag value.</p>
   */
  Value?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The tag key.</p>
   */
  Key?: string;
}

export namespace TagDescription {
  export const filterSensitiveLog = (obj: TagDescription): any => ({
    ...obj,
  });
}

export interface DescribeTagsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *          <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: TagDescription[];
}

export namespace DescribeTagsResult {
  export const filterSensitiveLog = (obj: DescribeTagsResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorFiltersRequest {
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
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterIds?: string[];

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

export namespace DescribeTrafficMirrorFiltersRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorFiltersRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorFiltersResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorFiltersResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionIds?: string[];

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
   */
  Filters?: Filter[];

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

export namespace DescribeTrafficMirrorSessionsRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorSessionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   */
  TrafficMirrorSessions?: TrafficMirrorSession[];
}

export namespace DescribeTrafficMirrorSessionsResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorSessionsResult): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   */
  TrafficMirrorTargetIds?: string[];

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

export namespace DescribeTrafficMirrorTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrafficMirrorTargetsResult {
  export const filterSensitiveLog = (obj: DescribeTrafficMirrorTargetsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayAttachmentsRequest {
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
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
   *                   <code>resource-owner-id</code> - The ID of the AWS account that owns the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>vpc</code> | <code>vpn</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
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
   *                   <code>transit-gateway-owner-id</code> - The ID of the AWS account that owns the transit gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];
}

export namespace DescribeTransitGatewayAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayAttachmentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association.</p>
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;

  /**
   * <p>The ID of the route table for the transit gateway.</p>
   */
  TransitGatewayRouteTableId?: string;
}

export namespace TransitGatewayAttachmentAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attachment between a resource and a transit gateway.</p>
 */
export interface TransitGatewayAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The attachment state.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The ID of the AWS account that owns the transit gateway.</p>
   */
  TransitGatewayOwnerId?: string;

  /**
   * <p>The ID of the AWS account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The association.</p>
   */
  Association?: TransitGatewayAttachmentAssociation;
}

export namespace TransitGatewayAttachment {
  export const filterSensitiveLog = (obj: TransitGatewayAttachment): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayAttachmentsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the transit gateway multicast domain. Valid values are <code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-multicast-domain-id</code> - The ID of the transit gateway multicast domain.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainIds?: string[];

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

export namespace DescribeTransitGatewayMulticastDomainsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayMulticastDomainsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayMulticastDomainsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayMulticastDomainsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>local-owner-id</code> - The ID of your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>remote-owner-id</code> - The ID of the AWS account in the remote Region that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the peering attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeTransitGatewayPeeringAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayPeeringAttachmentsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The transit gateway peering attachments.</p>
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];
}

export namespace DescribeTransitGatewayPeeringAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayPeeringAttachmentsResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   */
  TransitGatewayRouteTableIds?: string[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

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
   *                   <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
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
   */
  Filters?: Filter[];

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

export namespace DescribeTransitGatewayRouteTablesRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayRouteTablesRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayRouteTablesResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayRouteTablesResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the transit gateways.</p>
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
   *                   <code>owner-id</code> - The ID of the AWS account that owns the transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-id</code> - The ID of the transit gateway.</p>
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
}

export namespace DescribeTransitGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   */
  TransitGateways?: TransitGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayVpcAttachmentsRequest {
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

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the attachments.</p>
   */
  TransitGatewayAttachmentIds?: string[];
}

export namespace DescribeTransitGatewayVpcAttachmentsRequest {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayVpcAttachmentsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeTransitGatewayVpcAttachmentsResult {
  export const filterSensitiveLog = (obj: DescribeTransitGatewayVpcAttachmentsResult): any => ({
    ...obj,
  });
}

export type VolumeAttributeName = "autoEnableIO" | "productCodes";

export interface DescribeVolumeAttributeRequest {
  /**
   * <p>The attribute of the volume. This parameter is required.</p>
   */
  Attribute: VolumeAttributeName | string | undefined;

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

export namespace DescribeVolumeAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeVolumeAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeVolumeAttributeResult {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];
}

export namespace DescribeVolumeAttributeResult {
  export const filterSensitiveLog = (obj: DescribeVolumeAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeVolumesRequest {
  /**
   * <p>The volume IDs.</p>
   */
  VolumeIds?: string[];

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
   *     		         <p>
   *                   <code>multi-attach-enabled</code> - Indicates whether the volume is enabled for Multi-Attach (<code>true</code>
   *     			| <code>false</code>)</p>
   *     	       </li>
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
   *                   <code>status</code> - The status of the volume (<code>creating</code> |
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
   *                   <code>volume-type</code> - The Amazon EBS volume type. This can be <code>gp2</code>
   *           for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD,
   *             <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic volumes.</p>
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
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *         <code>DescribeVolumes</code> request where <code>MaxResults</code> was used and the results
   *       exceeded the value of that parameter. Pagination continues from the end of the previous
   *       results that returned the <code>NextToken</code> value. This value is <code>null</code> when
   *       there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumes</code> in paginated
   *       output. When this parameter is used, <code>DescribeVolumes</code> only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *         <code>DescribeVolumes</code> request with the returned <code>NextToken</code> value. This
   *       value can be between 5 and 500; if <code>MaxResults</code> is given a value larger than 500,
   *       only 500 results are returned. If this parameter is not used, then
   *         <code>DescribeVolumes</code> returns all results. You cannot specify this parameter and the
   *       volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVolumesRequest {
  export const filterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
    ...obj,
  });
}

export interface DescribeVolumesResult {
  /**
   * <p>Information about the volumes.</p>
   */
  Volumes?: Volume[];

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumes</code>
   *       request. When the results of a <code>DescribeVolumes</code> request exceed
   *         <code>MaxResults</code>, this value can be used to retrieve the next page of results. This
   *       value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesResult {
  export const filterSensitiveLog = (obj: DescribeVolumesResult): any => ({
    ...obj,
  });
}

export interface DescribeVolumesModificationsRequest {
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
   *           io1 | gp2 | sc1 | st1).</p>
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
   *           io1 | gp2 | sc1 | st1).</p>
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
   */
  Filters?: Filter[];

  /**
   * <p>The <code>nextToken</code> value returned by a previous paginated request.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IDs of the volumes.</p>
   */
  VolumeIds?: string[];
}

export namespace DescribeVolumesModificationsRequest {
  export const filterSensitiveLog = (obj: DescribeVolumesModificationsRequest): any => ({
    ...obj,
  });
}

export type VolumeModificationState = "completed" | "failed" | "modifying" | "optimizing";

/**
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface VolumeModification {
  /**
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   */
  ModificationState?: VolumeModificationState | string;

  /**
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: VolumeType | string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * <p>The original size of the volume, in GiB.</p>
   */
  OriginalSize?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: VolumeType | string;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date;
}

export namespace VolumeModification {
  export const filterSensitiveLog = (obj: VolumeModification): any => ({
    ...obj,
  });
}

export interface DescribeVolumesModificationsResult {
  /**
   * <p>Information about the volume modifications.</p>
   */
  VolumesModifications?: VolumeModification[];

  /**
   * <p>Token for pagination, null if there are no more results </p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesModificationsResult {
  export const filterSensitiveLog = (obj: DescribeVolumesModificationsResult): any => ({
    ...obj,
  });
}

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
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumeStatus</code> in
   *       paginated output. When this parameter is used, the request only returns
   *         <code>MaxResults</code> results in a single page along with a <code>NextToken</code>
   *       response element. The remaining results of the initial request can be seen by sending another
   *       request with the returned <code>NextToken</code> value. This value can be between 5 and 1000;
   *       if <code>MaxResults</code> is given a value larger than 1000, only 1000 results are returned.
   *       If this parameter is not used, then <code>DescribeVolumeStatus</code> returns all results. You
   *       cannot specify this parameter and the volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value to include in a future <code>DescribeVolumeStatus</code>
   *       request. When the results of the request exceed <code>MaxResults</code>, this value can be
   *       used to retrieve the next page of results. This value is <code>null</code> when there are no
   *       more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumeStatusRequest {
  export const filterSensitiveLog = (obj: DescribeVolumeStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status operation code.</p>
 */
export interface VolumeStatusAction {
  /**
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;

  /**
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;
}

export namespace VolumeStatusAction {
  export const filterSensitiveLog = (obj: VolumeStatusAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the instances to which the volume is attached.</p>
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * <p>The ID of the attached instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The maximum IOPS supported by the attached instance.</p>
   */
  IoPerformance?: string;
}

export namespace VolumeStatusAttachmentStatus {
  export const filterSensitiveLog = (obj: VolumeStatusAttachmentStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a volume status event.</p>
 */
export interface VolumeStatusEvent {
  /**
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the instance associated with the event.</p>
   */
  InstanceId?: string;

  /**
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;
}

export namespace VolumeStatusEvent {
  export const filterSensitiveLog = (obj: VolumeStatusEvent): any => ({
    ...obj,
  });
}

export type VolumeStatusName = "io-enabled" | "io-performance";

/**
 * <p>Describes a volume status.</p>
 */
export interface VolumeStatusDetails {
  /**
   * <p>The intended status of the volume status.</p>
   */
  Status?: string;

  /**
   * <p>The name of the volume status.</p>
   */
  Name?: VolumeStatusName | string;
}

export namespace VolumeStatusDetails {
  export const filterSensitiveLog = (obj: VolumeStatusDetails): any => ({
    ...obj,
  });
}

export type VolumeStatusInfoStatus = "impaired" | "insufficient-data" | "ok";

/**
 * <p>Describes the status of a volume.</p>
 */
export interface VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: VolumeStatusDetails[];

  /**
   * <p>The status of the volume.</p>
   */
  Status?: VolumeStatusInfoStatus | string;
}

export namespace VolumeStatusInfo {
  export const filterSensitiveLog = (obj: VolumeStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the volume status.</p>
 */
export interface VolumeStatusItem {
  /**
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: VolumeStatusEvent[];

  /**
   * <p>The details of the operation.</p>
   */
  Actions?: VolumeStatusAction[];
}

export namespace VolumeStatusItem {
  export const filterSensitiveLog = (obj: VolumeStatusItem): any => ({
    ...obj,
  });
}

export interface DescribeVolumeStatusResult {
  /**
   * <p>Information about the status of the volumes.</p>
   */
  VolumeStatuses?: VolumeStatusItem[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumeStatusResult {
  export const filterSensitiveLog = (obj: DescribeVolumeStatusResult): any => ({
    ...obj,
  });
}

export type VpcAttributeName = "enableDnsHostnames" | "enableDnsSupport";

export interface DescribeVpcAttributeRequest {
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

  /**
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;
}

export namespace DescribeVpcAttributeRequest {
  export const filterSensitiveLog = (obj: DescribeVpcAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcAttributeResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;
}

export namespace DescribeVpcAttributeResult {
  export const filterSensitiveLog = (obj: DescribeVpcAttributeResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>is-classic-link-enabled</code> - Whether the VPC is enabled for ClassicLink
   * 					   (<code>true</code> | <code>false</code>).</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   *     			        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
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
   * <p>One or more VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];
}

export namespace VpcClassicLink {
  export const filterSensitiveLog = (obj: VpcClassicLink): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of one or more VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

export namespace DescribeVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more VPC IDs.</p>
   */
  VpcIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
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

export namespace ClassicLinkDnsSupport {
  export const filterSensitiveLog = (obj: ClassicLinkDnsSupport): any => ({
    ...obj,
  });
}

export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: DescribeVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-arn</code> - The ARN of the SNS topic for the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-id</code> - The ID of the
   *                     notification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-state</code> - The state of the notification
   *                         (<code>Enabled</code> | <code>Disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>connection-notification-type</code> - The type of notification
   *                         (<code>Topic</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the endpoint service.</p>
   *             </li>
   *             <li>
   *                 <p>
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

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeVpcEndpointConnectionNotificationsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>One or more notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionNotificationsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionNotificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                 <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-owner</code> - The AWS account number of the owner of the
   *                     endpoint.</p>
   *             </li>
   *             <li>
   * 			            <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   * 			        (<code>pendingAcceptance</code> | <code>pending</code> |
   * 			        <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   * 			        <code>rejected</code> | <code>failed</code>).</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
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

export namespace DescribeVpcEndpointConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * <p>The AWS account ID of the owner of the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;
}

export namespace VpcEndpointConnection {
  export const filterSensitiveLog = (obj: VpcEndpointConnection): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about one or more VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsRequest {
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
   *                     <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC in which the endpoint resides.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-endpoint-id</code> - The ID of the endpoint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpc-endpoint-state</code> - The state of the endpoint
   *                         (<code>pendingAcceptance</code> | <code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> | <code>deleted</code> |
   *                         <code>rejected</code> | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more endpoint IDs.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpoints.</p>
 */
export interface DescribeVpcEndpointsResult {
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];
}

export namespace DescribeVpcEndpointsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>service-name</code> - The name of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-id</code> - The ID of the service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>service-state</code> - The state of the service (<code>Pending</code> |
   *                         <code>Available</code> | <code>Deleting</code> | <code>Deleted</code> |
   *                         <code>Failed</code>). </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The IDs of one or more services.</p>
   */
  ServiceIds?: string[];

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

export namespace DescribeVpcEndpointServiceConfigurationsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about one or more services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];
}

export namespace DescribeVpcEndpointServiceConfigurationsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServiceConfigurationsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>principal</code> - The ARN of the principal.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>principal-type</code> - The principal type (<code>All</code> |
   * 						<code>Service</code> | <code>OrganizationUnit</code> | <code>Account</code>
   * 					| <code>User</code> | <code>Role</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;
}

export namespace DescribeVpcEndpointServicePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about one or more allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];
}

export namespace DescribeVpcEndpointServicePermissionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>service-name</code> - The name of the service.</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *         	   </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
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
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *         <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more service names.</p>
   */
  ServiceNames?: string[];
}

export namespace DescribeVpcEndpointServicesRequest {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * <p>The verification state of the VPC endpoint service.</p>
   *         <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The AWS account ID of the service owner.</p>
   */
  Owner?: string;
}

export namespace ServiceDetail {
  export const filterSensitiveLog = (obj: ServiceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeVpcEndpointServices.</p>
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * <p>A list of supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];
}

export namespace DescribeVpcEndpointServicesResult {
  export const filterSensitiveLog = (obj: DescribeVpcEndpointServicesResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * <p>One or more VPC peering connection IDs.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.cidr-block</code> - The IPv4 CIDR block of the accepter
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.owner-id</code> - The AWS account ID of the owner of the
   *                     accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>accepter-vpc-info.vpc-id</code> - The ID of the accepter VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expiration-time</code> - The expiration date and time for the VPC peering
   *           connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>requester-vpc-info.cidr-block</code> - The IPv4 CIDR block of the
   *                     requester's VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.owner-id</code> - The AWS account ID of the owner of the
   *           requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-vpc-info.vpc-id</code> - The ID of the requester VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>status-code</code> - The status of the VPC peering connection
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
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeVpcPeeringConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeVpcPeeringConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsResult): any => ({
    ...obj,
  });
}

export interface DescribeVpcsRequest {
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
   *                   <code>cidr</code> - The primary IPv4 CIDR block of the VPC. The CIDR block you
   *                     specify must exactly match the VPC's CIDR block for information to be returned
   *                     for the VPC. Must contain the slash followed by one or two digits (for example,
   *                     <code>/28</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.cidr-block</code> - An IPv4 CIDR block associated with the
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.association-id</code> - The association ID for
   *                     an IPv4 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cidr-block-association.state</code> - The state of an IPv4 CIDR block
   *                     associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dhcp-options-id</code> - The ID of a set of DHCP options.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-cidr-block</code> - An IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.ipv6-pool</code> - The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.association-id</code> - The association
   *                     ID for an IPv6 CIDR block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ipv6-cidr-block-association.state</code> - The state of an IPv6 CIDR
   *                     block associated with the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>isDefault</code> - Indicates whether the VPC is the default VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the AWS account that owns the VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPC (<code>pending</code> | <code>available</code>).</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

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
   * <p>One or more VPC IDs.</p>
   * 		       <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];
}

export namespace DescribeVpcsRequest {
  export const filterSensitiveLog = (obj: DescribeVpcsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeVpcsResult {
  export const filterSensitiveLog = (obj: DescribeVpcsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-configuration</code> - The configuration information for the customer gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway-id</code> - The ID of a customer gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the VPN connection (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>option.static-routes-only</code> - Indicates whether the connection has static routes only. Used for devices that do not support Border Gateway Protocol (BGP).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>route.destination-cidr-block</code> - The destination CIDR block. This corresponds to the subnet used in a customer data center.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>bgp-asn</code> - The BGP Autonomous System Number (ASN) associated with a BGP device.</p>
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
   *                   <code>type</code> - The type of VPN connection. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection-id</code> - The ID of the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of a virtual private gateway associated with the VPN connection.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-id</code> - The ID of a transit gateway associated with the VPN connection.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>One or more VPN connection IDs.</p>
   *         <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];
}

export namespace DescribeVpnConnectionsRequest {
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeVpnConnectionsResult {
  export const filterSensitiveLog = (obj: DescribeVpnConnectionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more virtual private gateway IDs.</p>
   *         <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   * 				           <p>
   *                   <code>amazon-side-asn</code> - The Autonomous System Number (ASN) for the Amazon side of the gateway.</p>
   * 			         </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway and the VPC (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone for the virtual private gateway (if applicable).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The state of the virtual private gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
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
   *                   <code>type</code> - The type of virtual private gateway. Currently the only supported type is <code>ipsec.1</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-gateway-id</code> - The ID of the virtual private gateway.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeVpnGatewaysRequest {
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysRequest): any => ({
    ...obj,
  });
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

export namespace DescribeVpnGatewaysResult {
  export const filterSensitiveLog = (obj: DescribeVpnGatewaysResult): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcRequest {
  /**
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;

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
}

export namespace DetachClassicLinkVpcRequest {
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcRequest): any => ({
    ...obj,
  });
}

export interface DetachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DetachClassicLinkVpcResult {
  export const filterSensitiveLog = (obj: DetachClassicLinkVpcResult): any => ({
    ...obj,
  });
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

export namespace DetachInternetGatewayRequest {
  export const filterSensitiveLog = (obj: DetachInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether to force a detachment.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>Use the <code>Force</code> parameter only as a last resort to detach a network interface from a failed instance. </p>
   *                 </li>
   *                <li>
   *                     <p>If you use the <code>Force</code> parameter to detach a network interface, you might not be able to attach a different network interface to the same index on the instance without first stopping and starting the instance.</p>
   *                 </li>
   *                <li>
   *                     <p>If you force the detachment of a network interface, the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">instance metadata</a>
   *                         might not get updated. This means that the attributes associated
   *                         with the detached network interface might still be visible. The
   *                         instance metadata will get updated when you stop and start the
   *                         instance.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  Force?: boolean;

  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export namespace DetachNetworkInterfaceRequest {
  export const filterSensitiveLog = (obj: DetachNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

export interface DetachVolumeRequest {
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
   * <p>The device name.</p>
   */
  Device?: string;
}

export namespace DetachVolumeRequest {
  export const filterSensitiveLog = (obj: DetachVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DetachVpnGatewayRequest {
  export const filterSensitiveLog = (obj: DetachVpnGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DisableEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface DisableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace DisableEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: DisableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;
}

export namespace DisableFastSnapshotRestoresRequest {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The state of fast snapshot restores for the snapshot.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

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
}

export namespace DisableFastSnapshotRestoreSuccessItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
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

export namespace DisableFastSnapshotRestoreStateError {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
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

export namespace DisableFastSnapshotRestoreStateErrorItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
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

export namespace DisableFastSnapshotRestoreErrorItem {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
}

export interface DisableFastSnapshotRestoresResult {
  /**
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];

  /**
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];
}

export namespace DisableFastSnapshotRestoresResult {
  export const filterSensitiveLog = (obj: DisableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;
}

export namespace DisableTransitGatewayRouteTablePropagationRequest {
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayPropagationState = "disabled" | "disabling" | "enabled" | "enabling";

/**
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace TransitGatewayPropagation {
  export const filterSensitiveLog = (obj: TransitGatewayPropagation): any => ({
    ...obj,
  });
}

export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace DisableTransitGatewayRouteTablePropagationResult {
  export const filterSensitiveLog = (obj: DisableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;
}

export namespace DisableVgwRoutePropagationRequest {
  export const filterSensitiveLog = (obj: DisableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkRequest {
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

export namespace DisableVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace DisableVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace DisableVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: DisableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
}

export interface DisassociateAddressRequest {
  /**
   * <p>[EC2-VPC] The association ID. Required for EC2-VPC.</p>
   */
  AssociationId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;
}

export namespace DisassociateAddressRequest {
  export const filterSensitiveLog = (obj: DisassociateAddressRequest): any => ({
    ...obj,
  });
}

export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;
}

export namespace DisassociateClientVpnTargetNetworkRequest {
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateClientVpnTargetNetworkResult {
  export const filterSensitiveLog = (obj: DisassociateClientVpnTargetNetworkResult): any => ({
    ...obj,
  });
}

export interface DisassociateIamInstanceProfileRequest {
  /**
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateIamInstanceProfileRequest {
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface DisassociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export namespace DisassociateIamInstanceProfileResult {
  export const filterSensitiveLog = (obj: DisassociateIamInstanceProfileResult): any => ({
    ...obj,
  });
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

export namespace DisassociateRouteTableRequest {
  export const filterSensitiveLog = (obj: DisassociateRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSubnetCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateSubnetCidrBlockRequest {
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateSubnetCidrBlockResult {
  export const filterSensitiveLog = (obj: DisassociateSubnetCidrBlockResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
}

export namespace DisassociateTransitGatewayMulticastDomainRequest {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export namespace DisassociateTransitGatewayMulticastDomainResult {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableRequest {
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

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;
}

export namespace DisassociateTransitGatewayRouteTableRequest {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

export namespace DisassociateTransitGatewayRouteTableResult {
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockRequest {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

export namespace DisassociateVpcCidrBlockRequest {
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockRequest): any => ({
    ...obj,
  });
}

export interface DisassociateVpcCidrBlockResult {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;
}

export namespace DisassociateVpcCidrBlockResult {
  export const filterSensitiveLog = (obj: DisassociateVpcCidrBlockResult): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace EnableEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface EnableEbsEncryptionByDefaultResult {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace EnableEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: EnableEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface EnableFastSnapshotRestoresRequest {
  /**
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another AWS account.</p>
   */
  SourceSnapshotIds: string[] | undefined;
}

export namespace EnableFastSnapshotRestoresRequest {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

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
   * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;
}

export namespace EnableFastSnapshotRestoreSuccessItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreSuccessItem): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The error code.</p>
   */
  Code?: string;
}

export namespace EnableFastSnapshotRestoreStateError {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateError): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;
}

export namespace EnableFastSnapshotRestoreStateErrorItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreStateErrorItem): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;
}

export namespace EnableFastSnapshotRestoreErrorItem {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoreErrorItem): any => ({
    ...obj,
  });
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

export namespace EnableFastSnapshotRestoresResult {
  export const filterSensitiveLog = (obj: EnableFastSnapshotRestoresResult): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;
}

export namespace EnableTransitGatewayRouteTablePropagationRequest {
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationRequest): any => ({
    ...obj,
  });
}

export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

export namespace EnableTransitGatewayRouteTablePropagationResult {
  export const filterSensitiveLog = (obj: EnableTransitGatewayRouteTablePropagationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with. </p>
   */
  GatewayId: string | undefined;

  /**
   * <p>The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to. </p>
   */
  RouteTableId: string | undefined;
}

export namespace EnableVgwRoutePropagationRequest {
  export const filterSensitiveLog = (obj: EnableVgwRoutePropagationRequest): any => ({
    ...obj,
  });
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

export namespace EnableVolumeIORequest {
  export const filterSensitiveLog = (obj: EnableVolumeIORequest): any => ({
    ...obj,
  });
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

export namespace EnableVpcClassicLinkRequest {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkResult {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkResult): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace EnableVpcClassicLinkDnsSupportRequest {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportRequest): any => ({
    ...obj,
  });
}

export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace EnableVpcClassicLinkDnsSupportResult {
  export const filterSensitiveLog = (obj: EnableVpcClassicLinkDnsSupportResult): any => ({
    ...obj,
  });
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

export namespace ExportClientVpnClientCertificateRevocationListRequest {
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export type ClientCertificateRevocationListStatusCode = "active" | "pending";

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

export namespace ClientCertificateRevocationListStatus {
  export const filterSensitiveLog = (obj: ClientCertificateRevocationListStatus): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: ClientCertificateRevocationListStatus;

  /**
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;
}

export namespace ExportClientVpnClientCertificateRevocationListResult {
  export const filterSensitiveLog = (obj: ExportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
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

export namespace ExportClientVpnClientConfigurationRequest {
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ExportClientVpnClientConfigurationResult {
  /**
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;
}

export namespace ExportClientVpnClientConfigurationResult {
  export const filterSensitiveLog = (obj: ExportClientVpnClientConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3LocationRequest {
  /**
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket: string | undefined;
}

export namespace ExportTaskS3LocationRequest {
  export const filterSensitiveLog = (obj: ExportTaskS3LocationRequest): any => ({
    ...obj,
  });
}

export interface ExportImageRequest {
  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the image being exported.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The disk image format.</p>
   */
  DiskImageFormat: DiskImageFormat | string | undefined;

  /**
   * <p>Information about the destination Amazon S3 bucket. The bucket must exist and grant WRITE
   *    and READ_ACP permissions to the AWS account vm-import-export@amazon.com.</p>
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * <p>Token to enable idempotency for export image requests.</p>
   */
  ClientToken?: string;
}

export namespace ExportImageRequest {
  export const filterSensitiveLog = (obj: ExportImageRequest): any => ({
    ...obj,
  });
}

export interface ExportImageResult {
  /**
   * <p>The disk image format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * <p>Any tags assigned to the image being exported.</p>
   */
  Tags?: Tag[];

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
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;
}

export namespace ExportImageResult {
  export const filterSensitiveLog = (obj: ExportImageResult): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesRequest {
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
   *                   <code>state</code> - The state of the attachment (<code>available</code> | <code>deleted</code> | <code>deleting</code> | <code>failed</code> |  <code>modifying</code> | <code>pendingAcceptance</code> | <code>pending</code> | <code>rollingBack</code> | <code>rejected</code> | <code>rejecting</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-destination-cidr-block</code> - The CIDR range.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The type of route (<code>active</code> |
   *                <code>blackhole</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;
}

export namespace ExportTransitGatewayRoutesRequest {
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface ExportTransitGatewayRoutesResult {
  /**
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;
}

export namespace ExportTransitGatewayRoutesResult {
  export const filterSensitiveLog = (obj: ExportTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * <p>The ID of the IPv6 address pool.</p>
   */
  PoolId: string | undefined;

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

export namespace GetAssociatedIpv6PoolCidrsRequest {
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;
}

export namespace Ipv6CidrAssociation {
  export const filterSensitiveLog = (obj: Ipv6CidrAssociation): any => ({
    ...obj,
  });
}

export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the IPv6 CIDR block associations.</p>
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];
}

export namespace GetAssociatedIpv6PoolCidrsResult {
  export const filterSensitiveLog = (obj: GetAssociatedIpv6PoolCidrsResult): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * 		       <p>Valid range: Minimum value of 1. Maximum value of 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetCapacityReservationUsageRequest {
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * <p>The number of instances the AWS account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;

  /**
   * <p>The ID of the AWS account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;
}

export namespace InstanceUsage {
  export const filterSensitiveLog = (obj: InstanceUsage): any => ({
    ...obj,
  });
}

export interface GetCapacityReservationUsageResult {
  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

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
   *                   <code>cancelled</code> - The Capacity Reservation was manually cancelled. The reserved capacity is no
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
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>Information about the Capacity Reservation usage.</p>
   */
  InstanceUsages?: InstanceUsage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetCapacityReservationUsageResult {
  export const filterSensitiveLog = (obj: GetCapacityReservationUsageResult): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageRequest {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.allocation-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-account-id</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.aws-service</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>coip-address-usage.co-ip</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

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

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace GetCoipPoolUsageRequest {
  export const filterSensitiveLog = (obj: GetCoipPoolUsageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * <p>The AWS service.</p>
   */
  AwsService?: string;

  /**
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;
}

export namespace CoipAddressUsage {
  export const filterSensitiveLog = (obj: CoipAddressUsage): any => ({
    ...obj,
  });
}

export interface GetCoipPoolUsageResult {
  /**
   * <p>Information about the address usage.</p>
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;
}

export namespace GetCoipPoolUsageResult {
  export const filterSensitiveLog = (obj: GetCoipPoolUsageResult): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputRequest {
  /**
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *         <p>Default: disabled (<code>false</code>)</p>
   */
  Latest?: boolean;

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
}

export namespace GetConsoleOutputRequest {
  export const filterSensitiveLog = (obj: GetConsoleOutputRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleOutputResult {
  /**
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   */
  Output?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace GetConsoleOutputResult {
  export const filterSensitiveLog = (obj: GetConsoleOutputResult): any => ({
    ...obj,
  });
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

export namespace GetConsoleScreenshotRequest {
  export const filterSensitiveLog = (obj: GetConsoleScreenshotRequest): any => ({
    ...obj,
  });
}

export interface GetConsoleScreenshotResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;
}

export namespace GetConsoleScreenshotResult {
  export const filterSensitiveLog = (obj: GetConsoleScreenshotResult): any => ({
    ...obj,
  });
}

export type UnlimitedSupportedInstanceFamily = "t2" | "t3" | "t3a";

export interface GetDefaultCreditSpecificationRequest {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetDefaultCreditSpecificationRequest {
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * <p>The default credit option for CPU usage of the instance family. Valid values are <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceFamilyCreditSpecification {
  export const filterSensitiveLog = (obj: InstanceFamilyCreditSpecification): any => ({
    ...obj,
  });
}

export interface GetDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export namespace GetDefaultCreditSpecificationResult {
  export const filterSensitiveLog = (obj: GetDefaultCreditSpecificationResult): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsDefaultKmsKeyIdRequest {
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace GetEbsDefaultKmsKeyIdResult {
  export const filterSensitiveLog = (obj: GetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetEbsEncryptionByDefaultRequest {
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultRequest): any => ({
    ...obj,
  });
}

export interface GetEbsEncryptionByDefaultResult {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

export namespace GetEbsEncryptionByDefaultResult {
  export const filterSensitiveLog = (obj: GetEbsEncryptionByDefaultResult): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;
}

export namespace GetGroupsForCapacityReservationRequest {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationRequest): any => ({
    ...obj,
  });
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
   * <p>The ID of the AWS account that owns the resource group.</p>
   */
  OwnerId?: string;
}

export namespace CapacityReservationGroup {
  export const filterSensitiveLog = (obj: CapacityReservationGroup): any => ({
    ...obj,
  });
}

export interface GetGroupsForCapacityReservationResult {
  /**
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   */
  CapacityReservationGroups?: CapacityReservationGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace GetGroupsForCapacityReservationResult {
  export const filterSensitiveLog = (obj: GetGroupsForCapacityReservationResult): any => ({
    ...obj,
  });
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

export namespace GetHostReservationPurchasePreviewRequest {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

export namespace Purchase {
  export const filterSensitiveLog = (obj: Purchase): any => ({
    ...obj,
  });
}

export interface GetHostReservationPurchasePreviewResult {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;
}

export namespace GetHostReservationPurchasePreviewResult {
  export const filterSensitiveLog = (obj: GetHostReservationPurchasePreviewResult): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace GetLaunchTemplateDataRequest {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchTemplateDataResult {
  /**
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace GetLaunchTemplateDataResult {
  export const filterSensitiveLog = (obj: GetLaunchTemplateDataResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListAssociationsRequest {
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

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;
}

export namespace GetManagedPrefixListAssociationsRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace PrefixListAssociation {
  export const filterSensitiveLog = (obj: PrefixListAssociation): any => ({
    ...obj,
  });
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

export namespace GetManagedPrefixListAssociationsResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetManagedPrefixListEntriesRequest {
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

export namespace GetManagedPrefixListEntriesRequest {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesRequest): any => ({
    ...obj,
  });
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

export namespace PrefixListEntry {
  export const filterSensitiveLog = (obj: PrefixListEntry): any => ({
    ...obj,
  });
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

export namespace GetManagedPrefixListEntriesResult {
  export const filterSensitiveLog = (obj: GetManagedPrefixListEntriesResult): any => ({
    ...obj,
  });
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

export namespace GetPasswordDataRequest {
  export const filterSensitiveLog = (obj: GetPasswordDataRequest): any => ({
    ...obj,
  });
}

export interface GetPasswordDataResult {
  /**
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;
}

export namespace GetPasswordDataResult {
  export const filterSensitiveLog = (obj: GetPasswordDataResult): any => ({
    ...obj,
  });
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
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;
}

export namespace GetReservedInstancesExchangeQuoteRequest {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteRequest): any => ({
    ...obj,
  });
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
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;

  /**
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;
}

export namespace ReservationValue {
  export const filterSensitiveLog = (obj: ReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;
}

export namespace ReservedInstanceReservationValue {
  export const filterSensitiveLog = (obj: ReservedInstanceReservationValue): any => ({
    ...obj,
  });
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

export namespace TargetConfiguration {
  export const filterSensitiveLog = (obj: TargetConfiguration): any => ({
    ...obj,
  });
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

export namespace TargetReservationValue {
  export const filterSensitiveLog = (obj: TargetReservationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;
}

export namespace GetReservedInstancesExchangeQuoteResult {
  export const filterSensitiveLog = (obj: GetReservedInstancesExchangeQuoteResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayAttachmentPropagationsRequest {
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
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table-id</code> - The ID of the transit gateway route table.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace GetTransitGatewayAttachmentPropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsRequest): any => ({
    ...obj,
  });
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

export namespace TransitGatewayAttachmentPropagation {
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentPropagation): any => ({
    ...obj,
  });
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

export namespace GetTransitGatewayAttachmentPropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayAttachmentPropagationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

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

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. The valid value is: <code>vpc</code>.</p>
   *             </li>
   *             <li>
   *
   *                 <p>
   *                   <code>state</code> - The state of the subnet association. Valid values are
   *                         <code>associated</code> |
   *                         <code>associating</code>
   *                     | <code>disassociated</code> | <code>disassociating</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>subnet-id</code> - The ID of the subnet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment-id</code> - The id of the transit gateway attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace GetTransitGatewayMulticastDomainAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;
}

export namespace TransitGatewayMulticastDomainAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainAssociation): any => ({
    ...obj,
  });
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

export namespace GetTransitGatewayMulticastDomainAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayMulticastDomainAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>vpc</code> | <code>vpn</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

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

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRouteTableAssociationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export namespace TransitGatewayRouteTableAssociation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTableAssociation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];
}

export namespace GetTransitGatewayRouteTableAssociationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTableAssociationsResult): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

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

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The resource type (<code>vpc</code> | <code>vpn</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment-id</code> - The ID of the attachment.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace GetTransitGatewayRouteTablePropagationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

export namespace TransitGatewayRouteTablePropagation {
  export const filterSensitiveLog = (obj: TransitGatewayRouteTablePropagation): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];
}

export namespace GetTransitGatewayRouteTablePropagationsResult {
  export const filterSensitiveLog = (obj: GetTransitGatewayRouteTablePropagationsResult): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>AWS Client VPN Administrator Guide</i>.</p>
   */
  CertificateRevocationList: string | undefined;
}

export namespace ImportClientVpnClientCertificateRevocationListRequest {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListRequest): any => ({
    ...obj,
  });
}

export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace ImportClientVpnClientCertificateRevocationListResult {
  export const filterSensitiveLog = (obj: ImportClientVpnClientCertificateRevocationListResult): any => ({
    ...obj,
  });
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
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;

  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;
}

export namespace ClientData {
  export const filterSensitiveLog = (obj: ClientData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucket {
  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;

  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   */
  S3Bucket?: string;
}

export namespace UserBucket {
  export const filterSensitiveLog = (obj: UserBucket): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface ImageDiskContainer {
  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> |<code>VMDK</code>
   *          </p>
   */
  Format?: string;

  /**
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucket;
}

export namespace ImageDiskContainer {
  export const filterSensitiveLog = (obj: ImageDiskContainer): any => ({
    ...obj,
  });
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

export namespace ImportImageLicenseConfigurationRequest {
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export interface ImportImageRequest {
  /**
   * <p>The ARNs of the license configurations.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * <p>An identifier for the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the
   *    encrypted AMI. This parameter is only required if you want to use a non-default CMK; if this
   *    parameter is not specified, the default CMK for EBS is used. If a <code>KmsKeyId</code> is
   *    specified, the <code>Encrypted</code> flag must also be set. </p>
   *          <p>The CMK identifier may be provided in any of the following formats: </p>
   *          <ul>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key ID. The ID ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>key</code> namespace, and then the CMK ID. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p>
   *             </li>
   *             <li>
   *                <p>ARN using key alias. The alias ARN contains the <code>arn:aws:kms</code> namespace, followed by the Region of the CMK, the AWS account ID of the CMK owner, the <code>alias</code> namespace, and then the CMK alias. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>. </p>
   *             </li>
   *          </ul>
   *          <p>AWS parses <code>KmsKeyId</code> asynchronously, meaning that the action you call may appear to complete even
   *    though you provided an invalid identifier. This action will eventually report failure. </p>
   *          <p>The specified CMK must exist in the Region that the AMI is being copied to.</p>
   *          <p>Amazon EBS does not support asymmetric CMKs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   */
  Platform?: string;

  /**
   * <p>The tags to apply to the image being imported.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A description string for the import image task.</p>
   */
  Description?: string;

  /**
   * <p>The client-specific data.</p>
   */
  ClientData?: ClientData;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * <p>Information about the disk containers.</p>
   */
  DiskContainers?: ImageDiskContainer[];

  /**
   * <p>The license type to be used for the Amazon Machine Image (AMI) after importing.</p>
   *          <p>By default, we detect the source-system operating system (OS) and apply the appropriate license. Specify
   *     <code>AWS</code> to replace the source-system license with an AWS license, if appropriate. Specify <code>BYOL</code>
   *    to retain the source-system license, if appropriate.</p>
   *          <p>To use <code>BYOL</code>, you must have existing licenses with rights to use these licenses in a third party
   *    cloud, such as AWS. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html#prerequisites-image">Prerequisites</a> in the
   *    VM Import/Export User Guide.</p>
   */
  LicenseType?: string;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default CMK for EBS is used
   *    unless you specify a non-default AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;
}

export namespace ImportImageRequest {
  export const filterSensitiveLog = (obj: ImportImageRequest): any => ({
    ...obj,
  });
}
