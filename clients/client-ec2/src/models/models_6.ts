// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActiveVpnTunnelStatus,
  AddressTransfer,
  AllowedImagesSettingsDisabledState,
  AllowedImagesSettingsEnabledState,
  AllowedPrincipal,
  AsnAssociation,
  AssociationStatus,
  DeviceTrustProviderType,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamResourceDiscoveryAssociation,
  NatGatewayAddress,
  RouteServerAssociation,
  SecurityGroupVpcAssociationState,
  SubnetIpv6CidrBlockAssociation,
  Tag,
  TagSpecification,
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

import { CapacityReservationState, DiskImageFormat, IpAddressType, SSEType, Volume, VolumeType, Vpc } from "./models_1";

import { VerifiedAccessGroup } from "./models_2";

import {
  ConnectionNotification,
  DnsEntry,
  DnsNameState,
  Filter,
  MetricType,
  PayerResponsibility,
  PeriodType,
  ServiceConfiguration,
  ServiceConnectivityType,
  ServiceTypeDetail,
  State,
  StatisticType,
  VpcBlockPublicAccessExclusion,
  VpcEndpoint,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnGateway,
} from "./models_3";

import {
  AttributeBooleanValue,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  ProductCode,
  ReservationState,
} from "./models_4";

/**
 * @public
 */
export interface DescribeVerifiedAccessGroupsRequest {
  /**
   * <p>The ID of the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 */
export interface DescribeVerifiedAccessGroupsResult {
  /**
   * <p>Details about the Verified Access groups.</p>
   * @public
   */
  VerifiedAccessGroups?: VerifiedAccessGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  /**
   * <p>The IDs of the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstanceIds?: string[] | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
  Code?: VerifiedAccessLogDeliveryStatusCode | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  Message?: string | undefined;
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
  Enabled?: boolean | undefined;

  /**
   * <p>The delivery status for access logs.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string | undefined;
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
  Enabled?: boolean | undefined;

  /**
   * <p>The delivery status.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * <p>The ID of the delivery stream.</p>
   * @public
   */
  DeliveryStream?: string | undefined;
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
  Enabled?: boolean | undefined;

  /**
   * <p>The delivery status.</p>
   * @public
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus | undefined;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The Amazon Web Services account number that owns the bucket.</p>
   * @public
   */
  BucketOwner?: string | undefined;
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
  S3?: VerifiedAccessLogS3Destination | undefined;

  /**
   * <p>CloudWatch Logs logging destination.</p>
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestination | undefined;

  /**
   * <p>Kinesis logging destination.</p>
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestination | undefined;

  /**
   * <p>The log version.</p>
   * @public
   */
  LogVersion?: string | undefined;

  /**
   * <p>Indicates whether trust data is included in the logs.</p>
   * @public
   */
  IncludeTrustContext?: boolean | undefined;
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
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>Details about the logging options.</p>
   * @public
   */
  AccessLogs?: VerifiedAccessLogs | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsResult {
  /**
   * <p>The logging configuration for the Verified Access instances.</p>
   * @public
   */
  LoggingConfigurations?: VerifiedAccessInstanceLoggingConfiguration[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesRequest {
  /**
   * <p>The IDs of the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstanceIds?: string[] | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 */
export interface DescribeVerifiedAccessInstancesResult {
  /**
   * <p>Details about the Verified Access instances.</p>
   * @public
   */
  VerifiedAccessInstances?: VerifiedAccessInstance[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersRequest {
  /**
   * <p>The IDs of the Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviderIds?: string[] | undefined;

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
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
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
 */
export interface DescribeVerifiedAccessTrustProvidersResult {
  /**
   * <p>Details about the Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[] | undefined;

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
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeAttributeResult {
  /**
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue | undefined;

  /**
   * <p>A list of product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * <p>The volume IDs. If not specified, then all volumes are included in the response.</p>
   * @public
   */
  VolumeIds?: string[] | undefined;

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
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone in which the
   *           volume was created.</p>
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
   *                   <code>fast-restored</code> - Indicates whether the volume was created from a
   *           snapshot that is enabled for fast snapshot restore (<code>true</code> |
   *           <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multi-attach-enabled</code> - Indicates whether the volume is enabled for Multi-Attach (<code>true</code>
   *     			| <code>false</code>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.managed</code> - A Boolean that indicates whether this is a managed
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.principal</code> - The principal that manages the volume. Only valid
   *           for managed volumes, where <code>managed</code> is <code>true</code>.</p>
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
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
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
}

/**
 * @public
 */
export interface DescribeVolumesResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the volumes.</p>
   * @public
   */
  Volumes?: Volume[] | undefined;
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
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the volumes.</p>
   * @public
   */
  VolumeIds?: string[] | undefined;

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
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
 * @public
 */
export interface VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The current modification state.</p>
   * @public
   */
  ModificationState?: VolumeModificationState | undefined;

  /**
   * <p>A status message about the modification progress or failure.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The target size of the volume, in GiB.</p>
   * @public
   */
  TargetSize?: number | undefined;

  /**
   * <p>The target IOPS rate of the volume.</p>
   * @public
   */
  TargetIops?: number | undefined;

  /**
   * <p>The target EBS volume type of the volume.</p>
   * @public
   */
  TargetVolumeType?: VolumeType | undefined;

  /**
   * <p>The target throughput of the volume, in MiB/s.</p>
   * @public
   */
  TargetThroughput?: number | undefined;

  /**
   * <p>The target setting for Amazon EBS Multi-Attach.</p>
   * @public
   */
  TargetMultiAttachEnabled?: boolean | undefined;

  /**
   * <p>The original size of the volume, in GiB.</p>
   * @public
   */
  OriginalSize?: number | undefined;

  /**
   * <p>The original IOPS rate of the volume.</p>
   * @public
   */
  OriginalIops?: number | undefined;

  /**
   * <p>The original EBS volume type of the volume.</p>
   * @public
   */
  OriginalVolumeType?: VolumeType | undefined;

  /**
   * <p>The original throughput of the volume, in MiB/s.</p>
   * @public
   */
  OriginalThroughput?: number | undefined;

  /**
   * <p>The original setting for Amazon EBS Multi-Attach.</p>
   * @public
   */
  OriginalMultiAttachEnabled?: boolean | undefined;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The modification start time.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The modification completion or failure time.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the volume modifications.</p>
   * @public
   */
  VolumesModifications?: VolumeModification[] | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeStatusRequest {
  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *   Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   * @public
   */
  VolumeIds?: string[] | undefined;

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
  Filters?: Filter[] | undefined;
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
  Code?: string | undefined;

  /**
   * <p>A description of the operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the event associated with this operation.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The event type associated with this operation.</p>
   * @public
   */
  EventType?: string | undefined;
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
  IoPerformance?: string | undefined;

  /**
   * <p>The ID of the attached instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
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
  Description?: string | undefined;

  /**
   * <p>The ID of this event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The type of this event.</p>
   * @public
   */
  EventType?: string | undefined;

  /**
   * <p>The latest end time of the event.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The earliest start time of the event.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The ID of the instance associated with the event.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InitializationType = {
  default: "default",
  provisioned_rate: "provisioned-rate",
  volume_copy: "volume-copy",
} as const;

/**
 * @public
 */
export type InitializationType = (typeof InitializationType)[keyof typeof InitializationType];

/**
 * <p>Information about the volume initialization. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a>.</p>
 * @public
 */
export interface InitializationStatusDetails {
  /**
   * <p>The method used for volume initialization. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - Volume initialized using the default volume initialization
   *           rate or fast snapshot restore.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned-rate</code> - Volume initialized using an Amazon EBS Provisioned
   *           Rate for Volume Initialization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-copy</code> - Volume copy initialized at the rate for volume copies.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InitializationType?: InitializationType | undefined;

  /**
   * <p>The current volume initialization progress as a percentage (0-100). Returns <code>100</code>
   *       when volume initialization has completed.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The estimated remaining time, in seconds, for volume initialization to complete. Returns
   *       <code>0</code> when volume initialization has completed.</p>
   *          <p>Only available for volumes created with Amazon EBS Provisioned Rate for Volume Initialization.</p>
   * @public
   */
  EstimatedTimeToCompleteInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const VolumeStatusName = {
  initialization_state: "initialization-state",
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>io-enabled</code> - Indicates the volume I/O status. For more
   *           information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-checks.html">Amazon EBS volume
   *             status checks</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io-performance</code> - Indicates the volume performance status.
   *           For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-checks.html">Amazon EBS volume
   *             status checks</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>initialization-state</code> - Indicates the status of the volume
   *           initialization process. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">Initialize Amazon EBS volumes</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: VolumeStatusName | undefined;

  /**
   * <p>The intended status of the volume status.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VolumeStatusInfoStatus = {
  impaired: "impaired",
  insufficient_data: "insufficient-data",
  ok: "ok",
  warning: "warning",
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
  Details?: VolumeStatusDetails[] | undefined;

  /**
   * <p>The status of the volume.</p>
   * @public
   */
  Status?: VolumeStatusInfoStatus | undefined;
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
  Actions?: VolumeStatusAction[] | undefined;

  /**
   * <p>The Availability Zone of the volume.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>A list of events associated with the volume.</p>
   * @public
   */
  Events?: VolumeStatusEvent[] | undefined;

  /**
   * <p>The volume ID.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The volume status.</p>
   * @public
   */
  VolumeStatus?: VolumeStatusInfo | undefined;

  /**
   * <p>Information about the instances to which the volume is attached.</p>
   * @public
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[] | undefined;

  /**
   * <p>Information about the volume initialization. It can take up to 5 minutes
   *       for the volume initialization information to be updated.</p>
   *          <p>Only available for volumes created from snapshots. Not available for empty
   *       volumes created without a snapshot.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html">
   *         Initialize Amazon EBS volumes</a>.</p>
   * @public
   */
  InitializationStatusDetails?: InitializationStatusDetails | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVolumeStatusResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the status of the volumes.</p>
   * @public
   */
  VolumeStatuses?: VolumeStatusItem[] | undefined;
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
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeVpcAttributeResult {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessExclusionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Filters for the request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-arn</code> - The Amazon Resource Name (ARN) of a exclusion.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>internet-gateway-exclusion-mode</code> - The mode of a VPC BPA exclusion. Possible values: <code>allow-bidirectional | allow-egress</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of VPC BPA. Possible values: <code>create-in-progress | create-complete | update-in-progress | update-complete | delete-in-progress | deleted-complete | disable-in-progress | disable-complete</code>
   *                </p>
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
   *                   <code>tag-value</code>: The value of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific value, regardless of the tag key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>IDs of exclusions.</p>
   * @public
   */
  ExclusionIds?: string[] | undefined;

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
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessExclusionsResult {
  /**
   * <p>Details related to the exclusions.</p>
   * @public
   */
  VpcBlockPublicAccessExclusions?: VpcBlockPublicAccessExclusion[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessOptionsRequest {
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
export const VpcBlockPublicAccessExclusionsAllowed = {
  allowed: "allowed",
  not_allowed: "not-allowed",
} as const;

/**
 * @public
 */
export type VpcBlockPublicAccessExclusionsAllowed =
  (typeof VpcBlockPublicAccessExclusionsAllowed)[keyof typeof VpcBlockPublicAccessExclusionsAllowed];

/**
 * @public
 * @enum
 */
export const InternetGatewayBlockMode = {
  block_bidirectional: "block-bidirectional",
  block_ingress: "block-ingress",
  off: "off",
} as const;

/**
 * @public
 */
export type InternetGatewayBlockMode = (typeof InternetGatewayBlockMode)[keyof typeof InternetGatewayBlockMode];

/**
 * @public
 * @enum
 */
export const ManagedBy = {
  account: "account",
  declarative_policy: "declarative-policy",
} as const;

/**
 * @public
 */
export type ManagedBy = (typeof ManagedBy)[keyof typeof ManagedBy];

/**
 * @public
 * @enum
 */
export const VpcBlockPublicAccessState = {
  default_state: "default-state",
  update_complete: "update-complete",
  update_in_progress: "update-in-progress",
} as const;

/**
 * @public
 */
export type VpcBlockPublicAccessState = (typeof VpcBlockPublicAccessState)[keyof typeof VpcBlockPublicAccessState];

/**
 * <p>VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface VpcBlockPublicAccessOptions {
  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>An Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * <p>The current state of VPC BPA.</p>
   * @public
   */
  State?: VpcBlockPublicAccessState | undefined;

  /**
   * <p>The current mode of VPC BPA.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>off</code>: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-bidirectional</code>: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-ingress</code>: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayBlockMode?: InternetGatewayBlockMode | undefined;

  /**
   * <p>The reason for the current state.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The last time the VPC BPA mode was updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>The entity that manages the state of VPC BPA. Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account</code> - The state is managed by the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>declarative-policy</code> - The state is managed by a declarative policy
   *                     and can't be modified by the account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;

  /**
   * <p>Determines if exclusions are allowed. If you have <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html#security-vpc-bpa-exclusions-orgs">enabled VPC BPA at the Organization level</a>, exclusions may be
   *                 <code>not-allowed</code>. Otherwise, they are <code>allowed</code>.</p>
   * @public
   */
  ExclusionsAllowed?: VpcBlockPublicAccessExclusionsAllowed | undefined;
}

/**
 * @public
 */
export interface DescribeVpcBlockPublicAccessOptionsResult {
  /**
   * <p>Details related to the options.</p>
   * @public
   */
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The VPCs for which you want to describe the ClassicLink status.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

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
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
  ClassicLinkEnabled?: boolean | undefined;

  /**
   * <p>Any tags assigned to the VPC.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkResult {
  /**
   * <p>The ClassicLink status of the VPCs.</p>
   * @public
   */
  Vpcs?: VpcClassicLink[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * <p>The IDs of the VPCs.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  ClassicLinkDnsSupported?: boolean | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   * @public
   */
  Vpcs?: ClassicLinkDnsSupport[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationsRequest {
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
  VpcEndpointIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-id</code> - The ID of the VPC endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated-resource-accessibility</code> - The association state. When the
   *                state is <code>accessible</code>, it returns <code>AVAILABLE</code>. When the state
   *                is <code>inaccessible</code>, it returns <code>PENDING</code> or
   *                <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association-id</code> - The ID of the VPC endpoint association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associated-resource-id</code> - The ID of the associated resource
   *                configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-network-arn</code> - The Amazon Resource Name (ARN) of the
   *                associated service network. Only VPC endpoints of type service network will be
   *                returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-configuration-group-arn</code> - The Amazon Resource Name (ARN) of
   *                the resource configuration of type GROUP.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum page size.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the VPC resources, VPC endpoint services, Lattice services, or service
 *          networks associated with the VPC endpoint.</p>
 * @public
 */
export interface VpcEndpointAssociation {
  /**
   * <p>The ID of the VPC endpoint association.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service network.</p>
   * @public
   */
  ServiceNetworkArn?: string | undefined;

  /**
   * <p>The name of the service network.</p>
   * @public
   */
  ServiceNetworkName?: string | undefined;

  /**
   * <p>The connectivity status of the resources associated to a VPC endpoint. The resource is
   *          accessible if the associated resource configuration is <code>AVAILABLE</code>, otherwise
   *          the resource is inaccessible.</p>
   * @public
   */
  AssociatedResourceAccessibility?: string | undefined;

  /**
   * <p>A message related to why an VPC endpoint association failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>An error code related to why an VPC endpoint association failed.</p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>The DNS entry of the VPC endpoint association.</p>
   * @public
   */
  DnsEntry?: DnsEntry | undefined;

  /**
   * <p>The private DNS entry of the VPC endpoint association.</p>
   * @public
   */
  PrivateDnsEntry?: DnsEntry | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated resource.</p>
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration group.</p>
   * @public
   */
  ResourceConfigurationGroupArn?: string | undefined;

  /**
   * <p>The tags to apply to the VPC endpoint association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointAssociationsResult {
  /**
   * <p>Details of the endpoint associations.</p>
   * @public
   */
  VpcEndpointAssociations?: VpcEndpointAssociation[] | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the notification.</p>
   * @public
   */
  ConnectionNotificationId?: string | undefined;

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
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * <p>The notifications.</p>
   * @public
   */
  ConnectionNotificationSet?: ConnectionNotification[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  DryRun?: boolean | undefined;

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
   * 		            that owns the endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-endpoint-region</code> - The Region of the endpoint or <code>cross-region</code>
   * 		            to find endpoints for other Regions.</p>
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
 * <p>Describes a VPC endpoint connection to a service.</p>
 * @public
 */
export interface VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * <p>The state of the VPC endpoint.</p>
   * @public
   */
  VpcEndpointState?: State | undefined;

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   * @public
   */
  DnsEntries?: DnsEntry[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   * @public
   */
  NetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   * @public
   */
  GatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The ID of the VPC endpoint connection.</p>
   * @public
   */
  VpcEndpointConnectionId?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Region of the endpoint.</p>
   * @public
   */
  VpcEndpointRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsResult {
  /**
   * <p>Information about the VPC endpoint connections.</p>
   * @public
   */
  VpcEndpointConnections?: VpcEndpointConnection[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds?: string[] | undefined;

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
   *                   <code>service-region</code> - The Region of the service.</p>
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
   *                   <code>vpc-endpoint-type</code> - The type of VPC endpoint (<code>Interface</code> |
   *                     <code>Gateway</code> | <code>GatewayLoadBalancer</code> | <code>Resource</code> |
   *                     <code>ServiceNetwork</code>).</p>
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
}

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
export interface DisableCapacityManagerRequest {
  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityManagerStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type CapacityManagerStatus = (typeof CapacityManagerStatus)[keyof typeof CapacityManagerStatus];

/**
 * @public
 */
export interface DisableCapacityManagerResult {
  /**
   * <p>
   * The current status of Capacity Manager after the disable operation.
   * </p>
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * <p>
   *     Indicates whether Organizations access is enabled. This will be <code>false</code> after disabling Capacity Manager.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
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
   * <p>Is <code>true</code> if the request succeeds and an error otherwise.</p>
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
export interface EnableCapacityManagerRequest {
  /**
   * <p>
   * Specifies whether to enable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager can aggregate data from all accounts in your organization. Default is false.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableCapacityManagerResult {
  /**
   * <p>
   * The current status of Capacity Manager after the enable operation.
   * </p>
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * <p>
   * Indicates whether Organizations access is enabled for cross-account data aggregation.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
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
 * <p>The maximum age for allowed images.</p>
 * @public
 */
export interface CreationDateCondition {
  /**
   * <p>The maximum number of days that have elapsed since the image was created. For example, a
   *       value of <code>300</code> allows images that were created within the last 300 days.</p>
   * @public
   */
  MaximumDaysSinceCreated?: number | undefined;
}

/**
 * <p>The maximum period since deprecation for allowed images.</p>
 * @public
 */
export interface DeprecationTimeCondition {
  /**
   * <p>The maximum number of days that have elapsed since the image was deprecated. When set to
   *       <code>0</code>, no deprecated images are allowed.</p>
   * @public
   */
  MaximumDaysSinceDeprecated?: number | undefined;
}

/**
 * <p>The criteria that are evaluated to determine which AMIs are discoverable and usable in
 *       your account for the specified Amazon Web Services Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#how-allowed-amis-works">How Allowed AMIs
 *         works</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface ImageCriterion {
  /**
   * <p>The image providers whose images are allowed.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>amazon</code>: Allow AMIs created by Amazon or verified providers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-marketplace</code>: Allow AMIs created by verified providers in the Amazon Web Services
   *           Marketplace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-backup-vault</code>: Allow AMIs created by Amazon Web Services Backup. </p>
   *             </li>
   *             <li>
   *                <p>12-digit account ID: Allow AMIs created by this account. One or more account IDs can be
   *           specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>: Allow AMIs created by your own account only.</p>
   *             </li>
   *          </ul>
   *          <p>Maximum: 200 values</p>
   * @public
   */
  ImageProviders?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Marketplace product codes for allowed images.</p>
   *          <p>Length: 1-25 characters</p>
   *          <p>Valid characters: Letters (<code>A–Z, a–z</code>) and numbers (<code>0–9</code>)</p>
   *          <p>Maximum: 50 values</p>
   * @public
   */
  MarketplaceProductCodes?: string[] | undefined;

  /**
   * <p>The names of allowed images. Names can include wildcards (<code>?</code> and
   *         <code>*</code>).</p>
   *          <p>Length: 1–128 characters. With <code>?</code>, the minimum is 3 characters.</p>
   *          <p>Valid characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters: <code>A–Z, a–z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Numbers: <code>0–9</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Special characters: <code>( ) [ ] . / - ' @ _ * ?</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Spaces</p>
   *             </li>
   *          </ul>
   *          <p>Maximum: 50 values</p>
   * @public
   */
  ImageNames?: string[] | undefined;

  /**
   * <p>The maximum period since deprecation for allowed images.</p>
   * @public
   */
  DeprecationTimeCondition?: DeprecationTimeCondition | undefined;

  /**
   * <p>The maximum age for allowed images.</p>
   * @public
   */
  CreationDateCondition?: CreationDateCondition | undefined;
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
export interface GetCapacityManagerAttributesRequest {
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
 * @enum
 */
export const IngestionStatus = {
  INGESTION_COMPLETE: "ingestion-complete",
  INGESTION_FAILED: "ingestion-failed",
  INITIAL_INGESTION_IN_PROGRESS: "initial-ingestion-in-progress",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 */
export interface GetCapacityManagerAttributesResult {
  /**
   * <p>
   * The current status of Capacity Manager.
   * </p>
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * <p>
   * Indicates whether Organizations access is enabled for cross-account data aggregation.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;

  /**
   * <p>
   * The number of active data export configurations for this account. This count includes all data exports regardless of their current delivery status.
   * </p>
   * @public
   */
  DataExportCount?: number | undefined;

  /**
   * <p>
   * The current data ingestion status. Initial ingestion may take several hours after enabling Capacity Manager.
   * </p>
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;

  /**
   * <p>
   * A descriptive message providing additional details about the current ingestion status. This may include error information if ingestion has
   * failed or progress details during initial setup.
   * </p>
   * @public
   */
  IngestionStatusMessage?: string | undefined;

  /**
   * <p>
   * The timestamp of the earliest data point available in Capacity Manager, in milliseconds since epoch. This indicates how far back historical data is available for queries.
   * </p>
   * @public
   */
  EarliestDatapointTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp of the most recent data point ingested by Capacity Manager, in milliseconds since epoch. This indicates how current your capacity data is.
   * </p>
   * @public
   */
  LatestDatapointTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const Comparison = {
  EQUALS: "equals",
  IN: "in",
} as const;

/**
 * @public
 */
export type Comparison = (typeof Comparison)[keyof typeof Comparison];

/**
 * @public
 * @enum
 */
export const FilterByDimension = {
  ACCOUNT_ID: "account-id",
  AVAILABILITY_ZONE_ID: "availability-zone-id",
  INSTANCE_FAMILY: "instance-family",
  INSTANCE_PLATFORM: "instance-platform",
  INSTANCE_TYPE: "instance-type",
  RESERVATION_ARN: "reservation-arn",
  RESERVATION_CREATE_TIMESTAMP: "reservation-create-timestamp",
  RESERVATION_END_DATE_TYPE: "reservation-end-date-type",
  RESERVATION_END_TIMESTAMP: "reservation-end-timestamp",
  RESERVATION_ID: "reservation-id",
  RESERVATION_INSTANCE_MATCH_CRITERIA: "reservation-instance-match-criteria",
  RESERVATION_START_TIMESTAMP: "reservation-start-timestamp",
  RESERVATION_STATE: "reservation-state",
  RESERVATION_TYPE: "reservation-type",
  RESERVATION_UNUSED_FINANCIAL_OWNER: "reservation-unused-financial-owner",
  RESOURCE_REGION: "resource-region",
  TENANCY: "tenancy",
} as const;

/**
 * @public
 */
export type FilterByDimension = (typeof FilterByDimension)[keyof typeof FilterByDimension];

/**
 * <p>
 * Specifies a condition for filtering capacity data based on dimension values. Used to create precise filters for metric queries and dimension lookups.
 * </p>
 * @public
 */
export interface DimensionCondition {
  /**
   * <p>
   * The name of the dimension to filter by.
   * </p>
   * @public
   */
  Dimension?: FilterByDimension | undefined;

  /**
   * <p>
   * The comparison operator to use for the filter.
   * </p>
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * <p>
   * The list of values to match against the specified dimension. For 'equals' comparison, only the first value is used. For 'in' comparison, any matching value will satisfy the condition.
   * </p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>
 * Represents a filter condition for Capacity Manager queries. Contains dimension-based filtering criteria used to narrow down metric data and dimension results.
 * </p>
 * @public
 */
export interface CapacityManagerCondition {
  /**
   * <p>
   * The dimension-based condition that specifies how to filter the data based on dimension values.
   * </p>
   * @public
   */
  DimensionCondition?: DimensionCondition | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupBy = {
  ACCOUNT_ID: "account-id",
  AVAILABILITY_ZONE_ID: "availability-zone-id",
  INSTANCE_FAMILY: "instance-family",
  INSTANCE_PLATFORM: "instance-platform",
  INSTANCE_TYPE: "instance-type",
  RESERVATION_ARN: "reservation-arn",
  RESERVATION_CREATE_TIMESTAMP: "reservation-create-timestamp",
  RESERVATION_END_DATE_TYPE: "reservation-end-date-type",
  RESERVATION_END_TIMESTAMP: "reservation-end-timestamp",
  RESERVATION_ID: "reservation-id",
  RESERVATION_INSTANCE_MATCH_CRITERIA: "reservation-instance-match-criteria",
  RESERVATION_START_TIMESTAMP: "reservation-start-timestamp",
  RESERVATION_STATE: "reservation-state",
  RESERVATION_TYPE: "reservation-type",
  RESERVATION_UNUSED_FINANCIAL_OWNER: "reservation-unused-financial-owner",
  RESOURCE_REGION: "resource-region",
  TENANCY: "tenancy",
} as const;

/**
 * @public
 */
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy];

/**
 * @public
 * @enum
 */
export const Metric = {
  RESERVATION_AVG_COMMITTED_SIZE_INST: "reservation-avg-committed-size-inst",
  RESERVATION_AVG_COMMITTED_SIZE_VCPU: "reservation-avg-committed-size-vcpu",
  RESERVATION_AVG_FUTURE_SIZE_INST: "reservation-avg-future-size-inst",
  RESERVATION_AVG_FUTURE_SIZE_VCPU: "reservation-avg-future-size-vcpu",
  RESERVATION_AVG_UTILIZATION_INST: "reservation-avg-utilization-inst",
  RESERVATION_AVG_UTILIZATION_VCPU: "reservation-avg-utilization-vcpu",
  RESERVATION_MAX_COMMITTED_SIZE_INST: "reservation-max-committed-size-inst",
  RESERVATION_MAX_COMMITTED_SIZE_VCPU: "reservation-max-committed-size-vcpu",
  RESERVATION_MAX_FUTURE_SIZE_INST: "reservation-max-future-size-inst",
  RESERVATION_MAX_FUTURE_SIZE_VCPU: "reservation-max-future-size-vcpu",
  RESERVATION_MAX_SIZE_INST: "reservation-max-size-inst",
  RESERVATION_MAX_SIZE_VCPU: "reservation-max-size-vcpu",
  RESERVATION_MAX_UNUSED_SIZE_INST: "reservation-max-unused-size-inst",
  RESERVATION_MAX_UNUSED_SIZE_VCPU: "reservation-max-unused-size-vcpu",
  RESERVATION_MAX_UTILIZATION: "reservation-max-utilization",
  RESERVATION_MIN_COMMITTED_SIZE_INST: "reservation-min-committed-size-inst",
  RESERVATION_MIN_COMMITTED_SIZE_VCPU: "reservation-min-committed-size-vcpu",
  RESERVATION_MIN_FUTURE_SIZE_INST: "reservation-min-future-size-inst",
  RESERVATION_MIN_FUTURE_SIZE_VCPU: "reservation-min-future-size-vcpu",
  RESERVATION_MIN_SIZE_INST: "reservation-min-size-inst",
  RESERVATION_MIN_SIZE_VCPU: "reservation-min-size-vcpu",
  RESERVATION_MIN_UNUSED_SIZE_INST: "reservation-min-unused-size-inst",
  RESERVATION_MIN_UNUSED_SIZE_VCPU: "reservation-min-unused-size-vcpu",
  RESERVATION_MIN_UTILIZATION: "reservation-min-utilization",
  RESERVATION_TOTAL_CAPACITY_HRS_INST: "reservation-total-capacity-hrs-inst",
  RESERVATION_TOTAL_CAPACITY_HRS_VCPU: "reservation-total-capacity-hrs-vcpu",
  RESERVATION_TOTAL_COUNT: "reservation-total-count",
  RESERVATION_TOTAL_ESTIMATED_COST: "reservation-total-estimated-cost",
  RESERVATION_UNUSED_TOTAL_CAPACITY_HRS_INST: "reservation-unused-total-capacity-hrs-inst",
  RESERVATION_UNUSED_TOTAL_CAPACITY_HRS_VCPU: "reservation-unused-total-capacity-hrs-vcpu",
  RESERVATION_UNUSED_TOTAL_ESTIMATED_COST: "reservation-unused-total-estimated-cost",
  RESERVED_TOTAL_ESTIMATED_COST: "reserved-total-estimated-cost",
  RESERVED_TOTAL_USAGE_HRS_INST: "reserved-total-usage-hrs-inst",
  RESERVED_TOTAL_USAGE_HRS_VCPU: "reserved-total-usage-hrs-vcpu",
  SPOT_AVG_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-avg-run-time-before-interruption-inst",
  SPOT_MAX_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-max-run-time-before-interruption-inst",
  SPOT_MIN_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-min-run-time-before-interruption-inst",
  SPOT_TOTAL_ESTIMATED_COST: "spot-total-estimated-cost",
  SPOT_TOTAL_USAGE_HRS_INST: "spot-total-usage-hrs-inst",
  SPOT_TOTAL_USAGE_HRS_VCPU: "spot-total-usage-hrs-vcpu",
  UNRESERVED_TOTAL_ESTIMATED_COST: "unreserved-total-estimated-cost",
  UNRESERVED_TOTAL_USAGE_HRS_INST: "unreserved-total-usage-hrs-inst",
  UNRESERVED_TOTAL_USAGE_HRS_VCPU: "unreserved-total-usage-hrs-vcpu",
} as const;

/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 */
export interface GetCapacityManagerMetricDataRequest {
  /**
   * <p>
   * The names of the metrics to retrieve. Maximum of 10 metrics per request.
   * </p>
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * <p>
   * The start time for the metric data query, in ISO 8601 format. The time range (end time - start time) must be a multiple of the specified period.
   * </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * The end time for the metric data query, in ISO 8601 format. If the end time is beyond the latest ingested data, it will be automatically adjusted to the latest available data point.
   * </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>
   * The granularity, in seconds, of the returned data points.
   * </p>
   * @public
   */
  Period: number | undefined;

  /**
   * <p>
   * The dimensions by which to group the metric data. This determines how the data is aggregated and returned.
   * </p>
   * @public
   */
  GroupBy?: GroupBy[] | undefined;

  /**
   * <p>
   * Conditions to filter the metric data. Each filter specifies a dimension, comparison operator ('equals', 'in'), and values to match against.
   * </p>
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * <p>
   * The maximum number of data points to return. Valid range is 1 to 100,000. Use with NextToken for pagination of large result sets.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional data points.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have
   * the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ReservationEndDateType = {
  LIMITED: "limited",
  UNLIMITED: "unlimited",
} as const;

/**
 * @public
 */
export type ReservationEndDateType = (typeof ReservationEndDateType)[keyof typeof ReservationEndDateType];

/**
 * @public
 * @enum
 */
export const ReservationType = {
  CAPACITY_BLOCK: "capacity-block",
  ODCR: "odcr",
} as const;

/**
 * @public
 */
export type ReservationType = (typeof ReservationType)[keyof typeof ReservationType];

/**
 * @public
 * @enum
 */
export const CapacityTenancy = {
  DEDICATED: "dedicated",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type CapacityTenancy = (typeof CapacityTenancy)[keyof typeof CapacityTenancy];

/**
 * <p>
 * Represents dimension values for capacity metrics, including resource identifiers, geographic information, and reservation details used for grouping and filtering capacity data.
 * </p>
 * @public
 */
export interface CapacityManagerDimension {
  /**
   * <p>
   *     The Amazon Web Services Region where the capacity resource is located.
   * </p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>
   * The unique identifier of the Availability Zone where the capacity resource is located.
   * </p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>
   *     The Amazon Web Services account ID that owns the capacity resource.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The EC2 instance family of the capacity resource.
   * </p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>
   * The specific EC2 instance type of the capacity resource.
   * </p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>
   * The platform or operating system of the instance.
   * </p>
   * @public
   */
  InstancePlatform?: string | undefined;

  /**
   * <p>
   *     The Amazon Resource Name (ARN) of the capacity reservation. This provides a unique identifier that can be used across Amazon Web Services services to reference the specific reservation.
   * </p>
   * @public
   */
  ReservationArn?: string | undefined;

  /**
   * <p>
   * The unique identifier of the capacity reservation.
   * </p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>
   * The type of capacity reservation.
   * </p>
   * @public
   */
  ReservationType?: ReservationType | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation was originally created, in milliseconds since epoch. This differs from the start timestamp as
   * reservations can be created before they become active.
   * </p>
   * @public
   */
  ReservationCreateTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation becomes active and available for use, in milliseconds since epoch. This is when the reservation begins providing capacity.
   * </p>
   * @public
   */
  ReservationStartTimestamp?: Date | undefined;

  /**
   * <p>
   * The timestamp when the capacity reservation expires and is no longer available, in milliseconds since epoch. After this time, the reservation will not provide any capacity.
   * </p>
   * @public
   */
  ReservationEndTimestamp?: Date | undefined;

  /**
   * <p>
   * The type of end date for the capacity reservation. This indicates whether the reservation has a fixed end date, is open-ended, or follows a specific termination pattern.
   * </p>
   * @public
   */
  ReservationEndDateType?: ReservationEndDateType | undefined;

  /**
   * <p>
   * The tenancy of the EC2 instances associated with this capacity dimension. Valid values are 'default' for shared tenancy, 'dedicated' for dedicated instances, or 'host' for dedicated hosts.
   * </p>
   * @public
   */
  Tenancy?: CapacityTenancy | undefined;

  /**
   * <p>
   * The current state of the capacity reservation.
   * </p>
   * @public
   */
  ReservationState?: ReservationState | undefined;

  /**
   * <p>
   * The instance matching criteria for the capacity reservation, determining how instances are matched to the reservation.
   * </p>
   * @public
   */
  ReservationInstanceMatchCriteria?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID that is financially responsible for unused capacity reservation costs.
   *     </p>
   * @public
   */
  ReservationUnusedFinancialOwner?: string | undefined;
}

/**
 * <p>
 * Represents a single metric value with its associated statistic, such as the sum or average of unused capacity hours.
 * </p>
 * @public
 */
export interface MetricValue {
  /**
   * <p>
   * The name of the metric.
   * </p>
   * @public
   */
  Metric?: Metric | undefined;

  /**
   * <p>
   * The numerical value of the metric for the specified statistic and time period.
   * </p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>
 * Contains a single data point from a capacity metrics query, including the dimension values, timestamp, and metric values for that specific combination.
 * </p>
 * @public
 */
export interface MetricDataResult {
  /**
   * <p>
   * The dimension values that identify this specific data point, such as account ID, region, and instance family.
   * </p>
   * @public
   */
  Dimension?: CapacityManagerDimension | undefined;

  /**
   * <p>
   * The timestamp for this data point, indicating when the capacity usage occurred.
   * </p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>
   * The metric values and statistics for this data point, containing the actual capacity usage numbers.
   * </p>
   * @public
   */
  MetricValues?: MetricValue[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDataResult {
  /**
   * <p>
   * The metric data points returned by the query. Each result contains dimension values, timestamp, and metric values with their associated statistics.
   * </p>
   * @public
   */
  MetricDataResults?: MetricDataResult[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsRequest {
  /**
   * <p>
   * The dimensions to group by when retrieving available dimension values. This determines which dimension combinations are returned. Required parameter.
   * </p>
   * @public
   */
  GroupBy: GroupBy[] | undefined;

  /**
   * <p>
   * Conditions to filter which dimension values are returned. Each filter specifies a dimension, comparison operator, and values to match against.
   * </p>
   * @public
   */
  FilterBy?: CapacityManagerCondition[] | undefined;

  /**
   * <p>
   * The start time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   * </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * The end time for the dimension query, in ISO 8601 format. Only dimensions with data in this time range will be returned.
   * </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>
   * The metric names to use as an additional filter when retrieving dimensions. Only dimensions that have data for these
   * metrics will be returned. Required parameter with maximum size of 1 for v1.
   * </p>
   * @public
   */
  MetricNames: Metric[] | undefined;

  /**
   * <p>
   * The maximum number of dimension combinations to return. Valid range is 1 to 1000. Use with NextToken for pagination.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   * The token for the next page of results. Use this value in a subsequent call to retrieve additional dimension values.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides
   * an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   * </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCapacityManagerMetricDimensionsResult {
  /**
   * <p>
   * The available dimension combinations that have data within the specified time range and filters.
   * </p>
   * @public
   */
  MetricDimensionResults?: CapacityManagerDimension[] | undefined;

  /**
   * <p>
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   * </p>
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
