// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessScopeAnalysisFinding,
  AddressTransfer,
  AllowedPrincipal,
  AssociationStatus,
  CapacityReservationState,
  CurrencyCodeValues,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  IpamPoolAllocation,
  IpamResourceDiscoveryAssociation,
  NatGatewayAddress,
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
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VpcCidrBlockAssociation,
  VpcIpv6CidrBlockAssociation,
  VpcPeeringConnection,
} from "./models_0";
import {
  DiskImageFormat,
  InstanceRequirementsRequest,
  IpamResourceTag,
  NetworkInsightsAccessScopeContent,
  RequestIpamResourceTag,
  ResponseLaunchTemplateData,
  ResponseLaunchTemplateDataFilterSensitiveLog,
  TargetCapacityUnitType,
  VolumeType,
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
  SSEType,
  State,
  SubnetCidrReservation,
  TransitGatewayPrefixListReference,
  Volume,
  VpcEndpoint,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnGateway,
} from "./models_2";
import {
  AttributeBooleanValue,
  ExportTaskS3Location,
  FastLaunchLaunchTemplateSpecificationResponse,
  FastLaunchResourceType,
  FastLaunchSnapshotConfigurationResponse,
  FastLaunchStateCode,
  FastSnapshotRestoreStateCode,
  Filter,
  IpamPoolCidr,
  MetricType,
  PaymentOption,
  PeriodType,
  ProductCode,
  StatisticType,
  VirtualizationType,
} from "./models_3";
import { AnalysisStatus, ArchitectureType } from "./models_4";

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {
  /**
   * @public
   * <p>The IDs of the Verified Access instances.</p>
   */
  VerifiedAccessInstanceIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   */
  Filters?: Filter[];

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
 * @public
 * <p>Describes a log delivery status.</p>
 */
export interface VerifiedAccessLogDeliveryStatus {
  /**
   * @public
   * <p>The status code.</p>
   */
  Code?: VerifiedAccessLogDeliveryStatusCode | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 */
export interface VerifiedAccessLogCloudWatchLogsDestination {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The delivery status for access logs.</p>
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * @public
   * <p>The ID of the CloudWatch Logs log group.</p>
   */
  LogGroup?: string;
}

/**
 * @public
 * <p>Options for Kinesis as a logging destination.</p>
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestination {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The delivery status.</p>
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * @public
   * <p>The ID of the delivery stream.</p>
   */
  DeliveryStream?: string;
}

/**
 * @public
 * <p>Options for Amazon S3 as a logging destination.</p>
 */
export interface VerifiedAccessLogS3Destination {
  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The delivery status.</p>
   */
  DeliveryStatus?: VerifiedAccessLogDeliveryStatus;

  /**
   * @public
   * <p>The bucket name.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The bucket prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The Amazon Web Services account number that owns the bucket.</p>
   */
  BucketOwner?: string;
}

/**
 * @public
 * <p>Describes the options for Verified Access logs.</p>
 */
export interface VerifiedAccessLogs {
  /**
   * @public
   * <p>Amazon S3 logging options.</p>
   */
  S3?: VerifiedAccessLogS3Destination;

  /**
   * @public
   * <p>CloudWatch Logs logging destination.</p>
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestination;

  /**
   * @public
   * <p>Kinesis logging destination.</p>
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestination;

  /**
   * @public
   * <p>
   *          Describes current setting for the logging version.
   *       </p>
   */
  LogVersion?: string;

  /**
   * @public
   * <p>
   * 		   Describes current setting for including trust data into the logs.
   * 	   </p>
   */
  IncludeTrustContext?: boolean;
}

/**
 * @public
 * <p>Describes logging options for an Amazon Web Services Verified Access instance.</p>
 */
export interface VerifiedAccessInstanceLoggingConfiguration {
  /**
   * @public
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * @public
   * <p>Details about the logging options.</p>
   */
  AccessLogs?: VerifiedAccessLogs;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsResult {
  /**
   * @public
   * <p>The current logging configuration for the Verified Access instances.</p>
   */
  LoggingConfigurations?: VerifiedAccessInstanceLoggingConfiguration[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessInstancesRequest {
  /**
   * @public
   * <p>The IDs of the Verified Access instances.</p>
   */
  VerifiedAccessInstanceIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   */
  Filters?: Filter[];

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
 */
export interface DescribeVerifiedAccessInstancesResult {
  /**
   * @public
   * <p>The IDs of the Verified Access instances.</p>
   */
  VerifiedAccessInstances?: VerifiedAccessInstance[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessTrustProvidersRequest {
  /**
   * @public
   * <p>The IDs of the Verified Access trust providers.</p>
   */
  VerifiedAccessTrustProviderIds?: string[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   */
  Filters?: Filter[];

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
 */
export interface DescribeVerifiedAccessTrustProvidersResult {
  /**
   * @public
   * <p>The IDs of the Verified Access trust providers.</p>
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * @public
   * <p>The attribute of the volume. This parameter is required.</p>
   */
  Attribute: VolumeAttributeName | string | undefined;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

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
 */
export interface DescribeVolumeAttributeResult {
  /**
   * @public
   * <p>The state of <code>autoEnableIO</code> attribute.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

  /**
   * @public
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The volume IDs.</p>
   */
  VolumeIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of volumes to return for this request.
   *       This value can be between 5 and 500; if you specify a value larger than 500, only 500 items are returned.
   *       If this parameter is not used, then all items are returned. You cannot specify this parameter and the
   *       volume IDs parameter in the same request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *       Pagination continues from the end of the items returned from the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumesResult {
  /**
   * @public
   * <p>Information about the volumes.</p>
   */
  Volumes?: Volume[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the volumes.</p>
   */
  VolumeIds?: string[];

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The token returned by a previous paginated request.
   *       Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results (up to a limit of 500) to be returned in a paginated
   *       request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
 * @public
 * <p>Describes the modification status of an EBS volume.</p>
 *          <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface VolumeModification {
  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The current modification state. The modification state is null for unmodified
   *       volumes.</p>
   */
  ModificationState?: VolumeModificationState | string;

  /**
   * @public
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * @public
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * @public
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: VolumeType | string;

  /**
   * @public
   * <p>The target throughput of the volume, in MiB/s.</p>
   */
  TargetThroughput?: number;

  /**
   * @public
   * <p>The target setting for Amazon EBS Multi-Attach.</p>
   */
  TargetMultiAttachEnabled?: boolean;

  /**
   * @public
   * <p>The original size of the volume, in GiB.</p>
   */
  OriginalSize?: number;

  /**
   * @public
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * @public
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: VolumeType | string;

  /**
   * @public
   * <p>The original throughput of the volume, in MiB/s.</p>
   */
  OriginalThroughput?: number;

  /**
   * @public
   * <p>The original setting for Amazon EBS Multi-Attach.</p>
   */
  OriginalMultiAttachEnabled?: boolean;

  /**
   * @public
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * @public
   * <p>The modification start time.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface DescribeVolumesModificationsResult {
  /**
   * @public
   * <p>Information about the volume modifications.</p>
   */
  VolumesModifications?: VolumeModification[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> if there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumeStatusRequest {
  /**
   * @public
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
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *       make another request with the token returned in the output. This value can be between 5 and 1,000;
   *       if the value is larger than 1,000, only 1,000 results are returned. If this parameter is not used,
   *       then all items are returned. You cannot specify this parameter and the volume IDs parameter in the
   *       same request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request.
   *       Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the volumes.</p>
   *          <p>Default: Describes all your volumes.</p>
   */
  VolumeIds?: string[];

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
 * <p>Describes a volume status operation code.</p>
 */
export interface VolumeStatusAction {
  /**
   * @public
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;

  /**
   * @public
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;
}

/**
 * @public
 * <p>Information about the instances to which the volume is attached.</p>
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * @public
   * <p>The maximum IOPS supported by the attached instance.</p>
   */
  IoPerformance?: string;

  /**
   * @public
   * <p>The ID of the attached instance.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Describes a volume status event.</p>
 */
export interface VolumeStatusEvent {
  /**
   * @public
   * <p>A description of the event.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of this event.</p>
   */
  EventId?: string;

  /**
   * @public
   * <p>The type of this event.</p>
   */
  EventType?: string;

  /**
   * @public
   * <p>The latest end time of the event.</p>
   */
  NotAfter?: Date;

  /**
   * @public
   * <p>The earliest start time of the event.</p>
   */
  NotBefore?: Date;

  /**
   * @public
   * <p>The ID of the instance associated with the event.</p>
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
 * @public
 * <p>Describes a volume status.</p>
 */
export interface VolumeStatusDetails {
  /**
   * @public
   * <p>The name of the volume status.</p>
   */
  Name?: VolumeStatusName | string;

  /**
   * @public
   * <p>The intended status of the volume status.</p>
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
 * @public
 * <p>Describes the status of a volume.</p>
 */
export interface VolumeStatusInfo {
  /**
   * @public
   * <p>The details of the volume status.</p>
   */
  Details?: VolumeStatusDetails[];

  /**
   * @public
   * <p>The status of the volume.</p>
   */
  Status?: VolumeStatusInfoStatus | string;
}

/**
 * @public
 * <p>Describes the volume status.</p>
 */
export interface VolumeStatusItem {
  /**
   * @public
   * <p>The details of the operation.</p>
   */
  Actions?: VolumeStatusAction[];

  /**
   * @public
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>A list of events associated with the volume.</p>
   */
  Events?: VolumeStatusEvent[];

  /**
   * @public
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The volume status.</p>
   */
  VolumeStatus?: VolumeStatusInfo;

  /**
   * @public
   * <p>Information about the instances to which the volume is attached.</p>
   */
  AttachmentStatuses?: VolumeStatusAttachmentStatus[];
}

/**
 * @public
 */
export interface DescribeVolumeStatusResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items.
   *       This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the status of the volumes.</p>
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
   * @public
   * <p>The VPC attribute.</p>
   */
  Attribute: VpcAttributeName | string | undefined;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

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
 */
export interface DescribeVpcAttributeResult {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames.
   * 				If this attribute is <code>true</code>, instances in the VPC get DNS hostnames;
   * 				otherwise, they do not.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether DNS resolution is enabled for
   * 				the VPC. If this attribute is <code>true</code>, the Amazon DNS server
   * 				resolves DNS hostnames for your instances to their corresponding
   * 				IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * @public
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The VPCs for which you want to describe the ClassicLink status.</p>
   */
  VpcIds?: string[];
}

/**
 * @public
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export interface VpcClassicLink {
  /**
   * @public
   * <p>Indicates whether the VPC is enabled for ClassicLink.</p>
   */
  ClassicLinkEnabled?: boolean;

  /**
   * @public
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkResult {
  /**
   * @public
   * <p>The ClassicLink status of the VPCs.</p>
   */
  Vpcs?: VpcClassicLink[];
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The IDs of the VPCs.</p>
   */
  VpcIds?: string[];
}

/**
 * @public
 * <note>
 *             <p>Deprecated.</p>
 *          </note>
 *          <p>Describes the ClassicLink DNS support status of a VPC.</p>
 */
export interface ClassicLinkDnsSupport {
  /**
   * @public
   * <p>Indicates whether ClassicLink DNS support is enabled for the VPC.</p>
   */
  ClassicLinkDnsSupported?: boolean;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the ClassicLink DNS support status of the VPCs.</p>
   */
  Vpcs?: ClassicLinkDnsSupport[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another request with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * @public
   * <p>The notifications.</p>
   */
  ConnectionNotificationSet?: ConnectionNotification[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface VpcEndpointConnection {
  /**
   * @public
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * @public
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?: State | string;

  /**
   * @public
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * @public
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * @public
   * <p>The ID of the VPC endpoint connection.</p>
   */
  VpcEndpointConnectionId?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointConnectionsResult {
  /**
   * @public
   * <p>Information about the VPC endpoint connections.</p>
   */
  VpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds?: string[];

  /**
   * @public
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
   * @public
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResult {
  /**
   * @public
   * <p>Information about the endpoints.</p>
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * @public
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the endpoint services.</p>
   */
  ServiceIds?: string[];

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * @public
   * <p>Information about the services.</p>
   */
  ServiceConfigurations?: ServiceConfiguration[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *             results of the initial request can be seen by sending another request with the returned
   *                 <code>NextToken</code> value. This value can be between 5 and 1,000; if
   *                 <code>MaxResults</code> is given a value larger than 1,000, only 1,000 results are
   *             returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * @public
   * <p>Information about the allowed principals.</p>
   */
  AllowedPrincipals?: AllowedPrincipal[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The service names.</p>
   */
  ServiceNames?: string[];

  /**
   * @public
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
   * @public
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   *          <p>Constraint: If the value is greater than 1,000, we return only 1,000 items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a prior call.)</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about the Private DNS name for interface endpoints.</p>
 */
export interface PrivateDnsDetails {
  /**
   * @public
   * <p>The private DNS name assigned to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;
}

/**
 * @public
 * <p>Describes a VPC endpoint service.</p>
 */
export interface ServiceDetail {
  /**
   * @public
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * @public
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: string[];

  /**
   * @public
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private DNS names assigned to the VPC endpoint service.</p>
   */
  PrivateDnsNames?: PrivateDnsDetails[];

  /**
   * @public
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * @public
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * @public
   * <p>Indicates whether the service manages its VPC endpoints. Management of the service VPC
   *             endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * @public
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility | string;

  /**
   * @public
   * <p>The tags assigned to the service.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
   */
  PrivateDnsNameVerificationState?: DnsNameState | string;

  /**
   * @public
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: (ServiceConnectivityType | string)[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * @public
   * <p>The supported services.</p>
   */
  ServiceNames?: string[];

  /**
   * @public
   * <p>Information about the service.</p>
   */
  ServiceDetails?: ServiceDetail[];

  /**
   * @public
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the VPC peering connections.</p>
   *          <p>Default: Describes all your VPC peering connections.</p>
   */
  VpcPeeringConnectionIds?: string[];

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsResult {
  /**
   * @public
   * <p>Information about the VPC peering connections.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVpcsRequest {
  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The IDs of the VPCs.</p>
   *          <p>Default: Describes all your VPCs.</p>
   */
  VpcIds?: string[];

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeVpcsResult {
  /**
   * @public
   * <p>Information about one or more VPCs.</p>
   */
  Vpcs?: Vpc[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the parameters for DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * @public
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
   * @public
   * <p>One or more VPN connection IDs.</p>
   *          <p>Default: Describes your VPN connections.</p>
   */
  VpnConnectionIds?: string[];

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
 * <p>Contains the output of DescribeVpnConnections.</p>
 */
export interface DescribeVpnConnectionsResult {
  /**
   * @public
   * <p>Information about one or more VPN connections.</p>
   */
  VpnConnections?: VpnConnection[];
}

/**
 * @public
 * <p>Contains the parameters for DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * @public
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
   * @public
   * <p>One or more virtual private gateway IDs.</p>
   *          <p>Default: Describes all your virtual private gateways.</p>
   */
  VpnGatewayIds?: string[];

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
 * <p>Contains the output of DescribeVpnGateways.</p>
 */
export interface DescribeVpnGatewaysResult {
  /**
   * @public
   * <p>Information about one or more virtual private gateways.</p>
   */
  VpnGateways?: VpnGateway[];
}

/**
 * @public
 */
export interface DetachClassicLinkVpcRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance to unlink from the VPC.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC to which the instance is linked.</p>
   */
  VpcId: string | undefined;
}

/**
 * @public
 */
export interface DetachClassicLinkVpcResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DetachInternetGatewayRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for DetachNetworkInterface.</p>
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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

/**
 * @public
 */
export interface DetachVerifiedAccessTrustProviderRequest {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

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
 */
export interface DetachVerifiedAccessTrustProviderResult {
  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;

  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * @public
 */
export interface DetachVolumeRequest {
  /**
   * @public
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * @public
   * <p>Forces detachment if the previous detachment attempt did not occur cleanly (for example,
   *       logging into an instance, unmounting the volume, and detaching normally). This option can lead
   *       to data loss or a corrupted file system. Use this option only as a last resort to detach a
   *       volume from a failed instance. The instance won't have an opportunity to flush file system
   *       caches or file system metadata. If you use this option, you must perform file system check and
   *       repair procedures.</p>
   */
  Force?: boolean;

  /**
   * @public
   * <p>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;

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
 * <p>Contains the parameters for DetachVpnGateway.</p>
 */
export interface DetachVpnGatewayRequest {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId: string | undefined;

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
 */
export interface DisableAddressTransferRequest {
  /**
   * @public
   * <p>The allocation ID of an Elastic IP address.</p>
   */
  AllocationId: string | undefined;

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
 */
export interface DisableAddressTransferResult {
  /**
   * @public
   * <p>An Elastic IP address transfer.</p>
   */
  AddressTransfer?: AddressTransfer;
}

/**
 * @public
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * @public
   * <p>The source Region or Availability Zone that the metric subscription is disabled for. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The target Region or Availability Zone that the metric subscription is disabled for. For example, <code>eu-north-1</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The metric used for the disabled subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * @public
   * <p>The statistic used for the disabled subscription. </p>
   */
  Statistic?: StatisticType | string;

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
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * @public
   * <p>Indicates whether the unsubscribe action was successful.</p>
   */
  Output?: boolean;
}

/**
 * @public
 */
export interface DisableEbsEncryptionByDefaultRequest {
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
 */
export interface DisableEbsEncryptionByDefaultResult {
  /**
   * @public
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

/**
 * @public
 */
export interface DisableFastLaunchRequest {
  /**
   * @public
   * <p>The ID of the image for which you’re turning off faster launching, and removing pre-provisioned snapshots.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Forces the image settings to turn off faster launching for your Windows AMI. This parameter overrides
   * 			any errors that are encountered while cleaning up resources in your account.</p>
   */
  Force?: boolean;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableFastLaunchResult {
  /**
   * @public
   * <p>The ID of the image for which faster-launching has been turned off.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The pre-provisioning resource type that must be cleaned after turning off faster launching
   * 			for the Windows AMI. Supported values include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * @public
   * <p>Parameters that were used for faster launching for the Windows AMI before
   * 			faster launching was turned off. This informs the clean-up process.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * @public
   * <p>The launch template that was used to launch Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * @public
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to
   * 			create pre-provisioned snapshots for Windows faster launching.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * @public
   * <p>The owner of the Windows AMI for which faster launching was turned off.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * @public
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * @public
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresRequest {
  /**
   * @public
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * @public
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.</p>
   */
  SourceSnapshotIds: string[] | undefined;

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
 * <p>Describes fast snapshot restores that were successfully disabled.</p>
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The state of fast snapshot restores for the snapshot.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * @public
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
   * @public
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

/**
 * @public
 * <p>Describes an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Contains information about an error that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The error.</p>
   */
  Error?: DisableFastSnapshotRestoreStateError;
}

/**
 * @public
 * <p>Contains information about the errors that occurred when disabling fast snapshot restores.</p>
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];
}

/**
 * @public
 */
export interface DisableFastSnapshotRestoresResult {
  /**
   * @public
   * <p>Information about the snapshots for which fast snapshot restores were successfully disabled.</p>
   */
  Successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * @public
   * <p>Information about the snapshots for which fast snapshot restores could not be disabled.</p>
   */
  Unsuccessful?: DisableFastSnapshotRestoreErrorItem[];
}

/**
 * @public
 */
export interface DisableImageDeprecationRequest {
  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableImageDeprecationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Organizations member account ID that you want to disable as IPAM account.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableIpamOrganizationAdminAccountResult {
  /**
   * @public
   * <p>The result of disabling the IPAM account.</p>
   */
  Success?: boolean;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisableSerialConsoleAccessResult {
  /**
   * @public
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * @public
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the route table announcement.</p>
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
 * @public
 * <p>Describes route propagation.</p>
 */
export interface TransitGatewayPropagation {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The state.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * @public
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * @public
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

/**
 * @public
 * <p>Contains the parameters for DisableVgwRoutePropagation.</p>
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

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
 */
export interface DisableVpcClassicLinkRequest {
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
}

/**
 * @public
 */
export interface DisableVpcClassicLinkResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DisassociateAddressRequest {
  /**
   * @public
   * <p>The association ID. This parameter is required.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  PublicIp?: string;

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
 */
export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint from which to disassociate the target network.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The ID of the target network association.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * @public
   * <p>The ID of the target network association.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The current state of the target network association.</p>
   */
  Status?: AssociationStatus;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * @public
   * <p>The ARN of the ACM certificate from which to disassociate the IAM role.</p>
   */
  CertificateArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role to disassociate.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileRequest {
  /**
   * @public
   * <p>The ID of the IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIamInstanceProfileResult {
  /**
   * @public
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

/**
 * @public
 * <p>The targets to disassociate from the specified event window.</p>
 */
export interface InstanceEventWindowDisassociationRequest {
  /**
   * @public
   * <p>The IDs of the instances to disassociate from the event window.</p>
   */
  InstanceIds?: string[];

  /**
   * @public
   * <p>The instance tags to disassociate from the event window. Any instances associated with
   *          the tags will be disassociated from the event window.</p>
   */
  InstanceTags?: Tag[];

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts to disassociate from the event window.</p>
   */
  DedicatedHostIds?: string[];
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * @public
   * <p>One or more targets to disassociate from the specified event window.</p>
   */
  AssociationTarget: InstanceEventWindowDisassociationRequest | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceEventWindowResult {
  /**
   * @public
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A resource discovery association ID.</p>
   */
  IpamResourceDiscoveryAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpamResourceDiscoveryResult {
  /**
   * @public
   * <p>A resource discovery association.</p>
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
}

/**
 * @public
 */
export interface DisassociateNatGatewayAddressRequest {
  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;

  /**
   * @public
   * <p>The association IDs of EIPs that have been associated with the NAT gateway.</p>
   */
  AssociationIds: string[] | undefined;

  /**
   * @public
   * <p>The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.</p>
   */
  MaxDrainDurationSeconds?: number;

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
 */
export interface DisassociateNatGatewayAddressResult {
  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>Information about the NAT gateway IP addresses.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface DisassociateRouteTableRequest {
  /**
   * @public
   * <p>The association ID representing the current association between the route table and subnet or gateway.</p>
   */
  AssociationId: string | undefined;

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
 */
export interface DisassociateSubnetCidrBlockRequest {
  /**
   * @public
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSubnetCidrBlockResult {
  /**
   * @public
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>The IDs of the subnets;</p>
   */
  SubnetIds: string[] | undefined;

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
 */
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayPolicyTableRequest {
  /**
   * @public
   * <p>The ID of the disassociated policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the transit gateway attachment to disassociate from the policy table.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

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
 */
export interface DisassociateTransitGatewayPolicyTableResult {
  /**
   * @public
   * <p>Returns details about the transit gateway policy table disassociation.</p>
   */
  Association?: TransitGatewayPolicyTableAssociation;
}

/**
 * @public
 */
export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

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
 */
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  Association?: TransitGatewayAssociation;
}

/**
 * @public
 */
export interface DisassociateTrunkInterfaceRequest {
  /**
   * @public
   * <p>The ID of the association</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

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
 */
export interface DisassociateTrunkInterfaceResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockRequest {
  /**
   * @public
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateVpcCidrBlockResult {
  /**
   * @public
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * @public
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface EnableAddressTransferRequest {
  /**
   * @public
   * <p>The allocation ID of an Elastic IP address.</p>
   */
  AllocationId: string | undefined;

  /**
   * @public
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   */
  TransferAccountId: string | undefined;

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
 */
export interface EnableAddressTransferResult {
  /**
   * @public
   * <p>An Elastic IP address transfer.</p>
   */
  AddressTransfer?: AddressTransfer;
}

/**
 * @public
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionRequest {
  /**
   * @public
   * <p>The source Region or Availability Zone that the metric subscription is enabled for. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The target Region or Availability Zone that the metric subscription is enabled for. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The metric used for the enabled subscription.</p>
   */
  Metric?: MetricType | string;

  /**
   * @public
   * <p>The statistic used for the enabled subscription.</p>
   */
  Statistic?: StatisticType | string;

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
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionResult {
  /**
   * @public
   * <p>Indicates whether the subscribe action was successful.</p>
   */
  Output?: boolean;
}

/**
 * @public
 */
export interface EnableEbsEncryptionByDefaultRequest {
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
 */
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * @public
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;
}

/**
 * @public
 * <p>Request to create a launch template for a fast-launch enabled Windows AMI.</p>
 *          <note>
 *             <p>Note - You can specify either the <code>LaunchTemplateName</code> or the
 * 				<code>LaunchTemplateId</code>, but not both.</p>
 *          </note>
 */
export interface FastLaunchLaunchTemplateSpecificationRequest {
  /**
   * @public
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version of the launch template to use for faster launching for a Windows AMI.</p>
   */
  Version: string | undefined;
}

/**
 * @public
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationRequest {
  /**
   * @public
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

/**
 * @public
 */
export interface EnableFastLaunchRequest {
  /**
   * @public
   * <p>The ID of the image for which you’re enabling faster launching.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The type of resource to use for pre-provisioning the Windows AMI for faster launching.
   * 			Supported values include: <code>snapshot</code>, which is the default value.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Configuration settings for creating and managing the snapshots that are used for
   * 			pre-provisioning the Windows AMI for faster launching. The associated <code>ResourceType</code>
   * 			must be <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;

  /**
   * @public
   * <p>The launch template to use when launching Windows instances from pre-provisioned
   * 			snapshots. Launch template parameters can include either the name or ID of the launch
   * 			template, but not both.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;

  /**
   * @public
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to create
   * 			pre-provisioned snapshots for Windows faster launching. Value must be
   * 			<code>6</code> or greater.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableFastLaunchResult {
  /**
   * @public
   * <p>The image ID that identifies the Windows AMI for which faster launching was enabled.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The type of resource that was defined for pre-provisioning the Windows AMI for faster launching.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * @public
   * <p>Settings to create and manage the pre-provisioned snapshots that Amazon EC2 uses for faster
   * 			launches from the Windows AMI. This property is returned when the associated
   * 			<code>resourceType</code> is <code>snapshot</code>.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * @public
   * <p>The launch template that is used when launching Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * @public
   * <p>The maximum number of instances that Amazon EC2 can launch at the same time to
   * 			create pre-provisioned snapshots for Windows faster launching.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * @public
   * <p>The owner ID for the Windows AMI for which faster launching was enabled.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * @public
   * <p>The reason that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionReason?: string;

  /**
   * @public
   * <p>The time that the state changed for faster launching for the Windows AMI.</p>
   */
  StateTransitionTime?: Date;
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresRequest {
  /**
   * @public
   * <p>One or more Availability Zones. For example, <code>us-east-2a</code>.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * @public
   * <p>The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>. You can specify
   *       a snapshot that was shared with you from another Amazon Web Services account.</p>
   */
  SourceSnapshotIds: string[] | undefined;

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
 * <p>Describes fast snapshot restores that were successfully enabled.</p>
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The state of fast snapshot restores.</p>
   */
  State?: FastSnapshotRestoreStateCode | string;

  /**
   * @public
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
   * @public
   * <p>The ID of the Amazon Web Services account that enabled fast snapshot restores on the snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The Amazon Web Services owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
   */
  OwnerAlias?: string;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
   */
  EnablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
   */
  OptimizingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
   */
  EnabledTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
   */
  DisablingTime?: Date;

  /**
   * @public
   * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
   */
  DisabledTime?: Date;
}

/**
 * @public
 * <p>Describes an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Contains information about an error that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The error.</p>
   */
  Error?: EnableFastSnapshotRestoreStateError;
}

/**
 * @public
 * <p>Contains information about the errors that occurred when enabling fast snapshot restores.</p>
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The errors.</p>
   */
  FastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];
}

/**
 * @public
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * @public
   * <p>Information about the snapshots for which fast snapshot restores were successfully enabled.</p>
   */
  Successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * @public
   * <p>Information about the snapshots for which fast snapshot restores could not be enabled.</p>
   */
  Unsuccessful?: EnableFastSnapshotRestoreErrorItem[];
}

/**
 * @public
 */
export interface EnableImageDeprecationRequest {
  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specify a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   *          <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10
   *       years from now, except for public AMIs, where the upper limit is 2 years from the creation date.</p>
   */
  DeprecateAt: Date | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableImageDeprecationResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Organizations member account ID that you want to enable as the IPAM account.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableIpamOrganizationAdminAccountResult {
  /**
   * @public
   * <p>The result of enabling the IPAM account.</p>
   */
  Success?: boolean;
}

/**
 * @public
 */
export interface EnableReachabilityAnalyzerOrganizationSharingRequest {
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
 */
export interface EnableReachabilityAnalyzerOrganizationSharingResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface EnableSerialConsoleAccessResult {
  /**
   * @public
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * @public
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * @public
   * <p>Information about route propagation.</p>
   */
  Propagation?: TransitGatewayPropagation;
}

/**
 * @public
 * <p>Contains the parameters for EnableVgwRoutePropagation.</p>
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * @public
   * <p>The ID of the virtual private gateway that is attached to a VPC. The virtual private
   *             gateway must be attached to the same VPC that the routing tables are associated with.
   *         </p>
   */
  GatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the route table. The routing table must be associated with the same VPC that
   *             the virtual private gateway is attached to. </p>
   */
  RouteTableId: string | undefined;

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
 */
export interface EnableVolumeIORequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkRequest {
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
}

/**
 * @public
 */
export interface EnableVpcClassicLinkResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

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
 * @public
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * @public
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: ClientCertificateRevocationListStatusCode | string;

  /**
   * @public
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * @public
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;

  /**
   * @public
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: ClientCertificateRevocationListStatus;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ExportClientVpnClientConfigurationResult {
  /**
   * @public
   * <p>The contents of the Client VPN endpoint configuration file.</p>
   */
  ClientConfiguration?: string;
}

/**
 * @public
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3LocationRequest {
  /**
   * @public
   * <p>The destination Amazon S3 bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix (logical hierarchy) in the bucket.</p>
   */
  S3Prefix?: string;
}

/**
 * @public
 */
export interface ExportImageRequest {
  /**
   * @public
   * <p>Token to enable idempotency for export image requests.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A description of the image being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The disk image format.</p>
   */
  DiskImageFormat: DiskImageFormat | string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist.</p>
   */
  S3ExportLocation: ExportTaskS3LocationRequest | undefined;

  /**
   * @public
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket. If this parameter is not specified, the default role is named 'vmimport'.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The tags to apply to the export image task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface ExportImageResult {
  /**
   * @public
   * <p>A description of the image being exported.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The disk image format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * @public
   * <p>The ID of the export image task.</p>
   */
  ExportImageTaskId?: string;

  /**
   * @public
   * <p>The ID of the image.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The name of the role that grants VM Import/Export permission to export images to your Amazon
   *    S3 bucket.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The percent complete of the export image task.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>Information about the destination Amazon S3 bucket.</p>
   */
  S3ExportLocation?: ExportTaskS3Location;

  /**
   * @public
   * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
   *     <code>deleting</code>, and <code>deleted</code>.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The status message for the export image task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Any tags assigned to the export image task.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ExportTransitGatewayRoutesRequest {
  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  S3Bucket: string | undefined;

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
 */
export interface ExportTransitGatewayRoutesResult {
  /**
   * @public
   * <p>The URL of the exported file in Amazon S3. For example,
   *          s3://<i>bucket_name</i>/VPCTransitGateway/TransitGatewayRouteTables/<i>file_name</i>.</p>
   */
  S3Location?: string;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * @public
   * <p>The ARN of the ACM certificate for which to view the associated IAM roles, encryption keys, and Amazon
   * 			S3 object information.</p>
   */
  CertificateArn: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about the associated IAM roles.</p>
 */
export interface AssociatedRole {
  /**
   * @public
   * <p>The ARN of the associated IAM role.</p>
   */
  AssociatedRoleArn?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket in which the Amazon S3 object is stored.</p>
   */
  CertificateS3BucketName?: string;

  /**
   * @public
   * <p>The key of the Amazon S3 object ey where the certificate, certificate chain, and encrypted private key bundle
   * 			is stored. The object key is formated as follows:  <code>role_arn</code>/<code>certificate_arn</code>.
   * 		</p>
   */
  CertificateS3ObjectKey?: string;

  /**
   * @public
   * <p>The ID of the KMS customer master key (CMK) used to encrypt the private key.</p>
   */
  EncryptionKmsKeyId?: string;
}

/**
 * @public
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * @public
   * <p>Information about the associated IAM roles.</p>
   */
  AssociatedRoles?: AssociatedRole[];
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * @public
   * <p>The ID of the IPv6 address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

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
 * <p>Describes an IPv6 CIDR block association.</p>
 */
export interface Ipv6CidrAssociation {
  /**
   * @public
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6Cidr?: string;

  /**
   * @public
   * <p>The resource that's associated with the IPv6 CIDR block.</p>
   */
  AssociatedResource?: string;
}

/**
 * @public
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * @public
   * <p>Information about the IPv6 CIDR block associations.</p>
   */
  Ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A query used for retrieving network health data. </p>
 */
export interface DataQuery {
  /**
   * @public
   * <p>A user-defined ID associated with a data query that's returned in the <code>dataResponse</code> identifying the query. For example, if you set the Id to <code>MyQuery01</code>in the query, the <code>dataResponse</code> identifies the query as <code>MyQuery01</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The Region or Availability Zone that's the target for the data query. For example, <code>eu-north-1</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The metric, <code>aggregation-latency</code>, indicating that network latency is aggregated for the query. This is the only supported metric.</p>
   */
  Metric?: MetricType | string;

  /**
   * @public
   * <p>The metric data aggregation period, <code>p50</code>, between the specified <code>startDate</code> and <code>endDate</code>. For example, a metric of <code>five_minutes</code> is the median of all the data points gathered within those five minutes. <code>p50</code> is the only supported metric.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * @public
   * <p>The aggregation period used for the data query.</p>
   */
  Period?: PeriodType | string;
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataRequest {
  /**
   * @public
   * <p>A list of network performance data queries.</p>
   */
  DataQueries?: DataQuery[];

  /**
   * @public
   * <p>The starting time for the performance data request. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The ending time for the performance data request. The end time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Indicates whether the network was healthy or degraded at a particular point. The value is aggregated from the <code>startDate</code> to the <code>endDate</code>. Currently only <code>five_minutes</code> is supported.</p>
 */
export interface MetricPoint {
  /**
   * @public
   * <p>The start date for the metric point. The starting date for the metric point. The starting time must be formatted
   *          as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-10T12:00:00.000Z</code>.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The end date for the metric point. The ending time must be formatted as <code>yyyy-mm-ddThh:mm:ss</code>.  For example, <code>2022-06-12T12:00:00.000Z</code>.</p>
   */
  EndDate?: Date;

  Value?: number;
  /**
   * @public
   * <p>The status of the metric point.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The response to a <code>DataQuery</code>.</p>
 */
export interface DataResponse {
  /**
   * @public
   * <p>The ID passed in the <code>DataQuery</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Region or Availability Zone that's the source for the data query. For example, <code>us-east-1</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The Region or Availability Zone that's the destination for the data query. For example, <code>eu-west-1</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The metric used for the network performance request. Only <code>aggregate-latency</code> is supported, which shows network latency during a specified period. </p>
   */
  Metric?: MetricType | string;

  /**
   * @public
   * <p>The statistic used for the network performance request.</p>
   */
  Statistic?: StatisticType | string;

  /**
   * @public
   * <p>The period used for the network performance request.</p>
   */
  Period?: PeriodType | string;

  /**
   * @public
   * <p>A list of <code>MetricPoint</code> objects.</p>
   */
  MetricPoints?: MetricPoint[];
}

/**
 * @public
 */
export interface GetAwsNetworkPerformanceDataResult {
  /**
   * @public
   * <p>The list of data responses.</p>
   */
  DataResponses?: DataResponse[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageRequest {
  /**
   * @public
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>Valid range: Minimum value of 1. Maximum value of 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Information about the Capacity Reservation usage.</p>
 */
export interface InstanceUsage {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that is making use of the Capacity Reservation.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The number of instances the Amazon Web Services account currently has in the Capacity Reservation.</p>
   */
  UsedInstanceCount?: number;
}

/**
 * @public
 */
export interface GetCapacityReservationUsageResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * @public
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * @public
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * @public
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
   * @public
   * <p>Information about the Capacity Reservation usage.</p>
   */
  InstanceUsages?: InstanceUsage[];
}

/**
 * @public
 */
export interface GetCoipPoolUsageRequest {
  /**
   * @public
   * <p>The ID of the address pool.</p>
   */
  PoolId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes address usage for a customer-owned address pool.</p>
 */
export interface CoipAddressUsage {
  /**
   * @public
   * <p>The allocation ID of the address.</p>
   */
  AllocationId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services service.</p>
   */
  AwsService?: string;

  /**
   * @public
   * <p>The customer-owned IP address.</p>
   */
  CoIp?: string;
}

/**
 * @public
 */
export interface GetCoipPoolUsageResult {
  /**
   * @public
   * <p>The ID of the customer-owned address pool.</p>
   */
  CoipPoolId?: string;

  /**
   * @public
   * <p>Information about the address usage.</p>
   */
  CoipAddressUsages?: CoipAddressUsage[];

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;
}

/**
 * @public
 */
export interface GetConsoleOutputRequest {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>When enabled, retrieves the latest console output for the instance.</p>
   *          <p>Default: disabled (<code>false</code>)</p>
   */
  Latest?: boolean;
}

/**
 * @public
 */
export interface GetConsoleOutputResult {
  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The console output, base64-encoded. If you are using a command line tool, the tool
   *             decodes the output for you.</p>
   */
  Output?: string;

  /**
   * @public
   * <p>The time at which the output was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface GetConsoleScreenshotRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>When set to <code>true</code>, acts as keystroke input and wakes up an instance that's
   *             in standby or "sleep" mode.</p>
   */
  WakeUp?: boolean;
}

/**
 * @public
 */
export interface GetConsoleScreenshotResult {
  /**
   * @public
   * <p>The data that comprises the image.</p>
   */
  ImageData?: string;

  /**
   * @public
   * <p>The ID of the instance.</p>
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
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;
}

/**
 * @public
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * @public
   * <p>The instance family.</p>
   */
  InstanceFamily?: UnlimitedSupportedInstanceFamily | string;

  /**
   * @public
   * <p>The default credit option for CPU usage of the instance family. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

/**
 * @public
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * @public
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

/**
 * @public
 */
export interface GetEbsDefaultKmsKeyIdRequest {
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
 */
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface GetEbsEncryptionByDefaultRequest {
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
 */
export interface GetEbsEncryptionByDefaultResult {
  /**
   * @public
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SseType?: SSEType | string;
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
 * @public
 * <p>Describes integration options for Amazon Athena.</p>
 */
export interface AthenaIntegration {
  /**
   * @public
   * <p>The location in Amazon S3 to store the generated CloudFormation template.</p>
   */
  IntegrationResultS3DestinationArn: string | undefined;

  /**
   * @public
   * <p>The schedule for adding new partitions to the table.</p>
   */
  PartitionLoadFrequency: PartitionLoadFrequency | string | undefined;

  /**
   * @public
   * <p>The start date for the partition.</p>
   */
  PartitionStartDate?: Date;

  /**
   * @public
   * <p>The end date for the partition.</p>
   */
  PartitionEndDate?: Date;
}

/**
 * @public
 * <p>Describes service integrations with VPC Flow logs.</p>
 */
export interface IntegrateServices {
  /**
   * @public
   * <p>Information about the integration with Amazon Athena.</p>
   */
  AthenaIntegrations?: AthenaIntegration[];
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the flow log.</p>
   */
  FlowLogId: string | undefined;

  /**
   * @public
   * <p>To store the CloudFormation template in Amazon S3, specify the location in Amazon S3.</p>
   */
  ConfigDeliveryS3DestinationArn: string | undefined;

  /**
   * @public
   * <p>Information about the service integration.</p>
   */
  IntegrateServices: IntegrateServices | undefined;
}

/**
 * @public
 */
export interface GetFlowLogsIntegrationTemplateResult {
  /**
   * @public
   * <p>The generated CloudFormation template.</p>
   */
  Result?: string;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * @public
   * <p>The ID of the Capacity Reservation. If you specify a Capacity Reservation that is shared
   * 			with you, the operation returns only Capacity Reservation groups that you own.</p>
   */
  CapacityReservationId: string | undefined;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Describes a resource group to which a Capacity Reservation has been added.</p>
 */
export interface CapacityReservationGroup {
  /**
   * @public
   * <p>The ARN of the resource group.</p>
   */
  GroupArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the resource group.</p>
   */
  OwnerId?: string;
}

/**
 * @public
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the resource groups to which the Capacity Reservation has been added.</p>
   */
  CapacityReservationGroups?: CapacityReservationGroup[];
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewRequest {
  /**
   * @public
   * <p>The IDs of the Dedicated Hosts with which the reservation is associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * @public
   * <p>The offering ID of the reservation.</p>
   */
  OfferingId: string | undefined;
}

/**
 * @public
 * <p>Describes the result of the purchase.</p>
 */
export interface Purchase {
  /**
   * @public
   * <p>The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The duration of the reservation's term in seconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * @public
   * <p>The ID of the reservation.</p>
   */
  HostReservationId?: string;

  /**
   * @public
   * <p>The hourly price of the reservation per hour.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The instance family on the Dedicated Host that the reservation can be associated
   *             with.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The payment option for the reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * @public
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;
}

/**
 * @public
 */
export interface GetHostReservationPurchasePreviewResult {
  /**
   * @public
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * @public
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts
   *             associated with it.</p>
   */
  Purchase?: Purchase[];

  /**
   * @public
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * @public
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The processor architecture type.</p>
   */
  ArchitectureTypes: (ArchitectureType | string)[] | undefined;

  /**
   * @public
   * <p>The virtualization type.</p>
   */
  VirtualizationTypes: (VirtualizationType | string)[] | undefined;

  /**
   * @public
   * <p>The attributes required for the instance types.</p>
   */
  InstanceRequirements: InstanceRequirementsRequest | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The list of instance types with the specified instance attributes.</p>
 */
export interface InstanceTypeInfoFromInstanceRequirements {
  /**
   * @public
   * <p>The matching instance type.</p>
   */
  InstanceType?: string;
}

/**
 * @public
 */
export interface GetInstanceTypesFromInstanceRequirementsResult {
  /**
   * @public
   * <p>The instance types with the specified instance attributes.</p>
   */
  InstanceTypes?: InstanceTypeInfoFromInstanceRequirements[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInstanceUefiDataRequest {
  /**
   * @public
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   */
  InstanceId: string | undefined;

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
 */
export interface GetInstanceUefiDataResult {
  /**
   * @public
   * <p>The ID of the instance from which to retrieve the UEFI data.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>Base64 representation of the non-volatile UEFI variable store.</p>
   */
  UefiData?: string;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range.
   *          If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>The ID of the IPAM scope that the CIDR is in.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC you want your history records filtered by.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The maximum number of historical results you would like returned per page. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
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
 * @public
 * <p>The historical record of a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 */
export interface IpamAddressHistoryRecord {
  /**
   * @public
   * <p>The ID of the resource owner.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  ResourceRegion?: string;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType?: IpamAddressHistoryResourceType | string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The CIDR of the resource.</p>
   */
  ResourceCidr?: string;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * @public
   * <p>The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceComplianceStatus?: IpamComplianceStatus | string;

  /**
   * @public
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ResourceOverlapStatus?: IpamOverlapStatus | string;

  /**
   * @public
   * <p>The VPC ID of the resource.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Sampled start time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the start time may have occurred before this specific time.</p>
   */
  SampledStartTime?: Date;

  /**
   * @public
   * <p>Sampled end time of the resource-to-CIDR association within the IPAM scope. Changes are picked up in periodic snapshots, so the end time may have occurred before this specific time.</p>
   */
  SampledEndTime?: Date;
}

/**
 * @public
 */
export interface GetIpamAddressHistoryResult {
  /**
   * @public
   * <p>A historical record for a CIDR within an IPAM scope. If the CIDR is associated with an EC2 instance, you will see an object in the response for the instance and one for the network interface.</p>
   */
  HistoryRecords?: IpamAddressHistoryRecord[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region that the account information is returned from.</p>
   */
  DiscoveryRegion: string | undefined;

  /**
   * @public
   * <p>Discovered account filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of discovered accounts to return in one page of results.</p>
   */
  MaxResults?: number;
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
 * @public
 * <p>The discovery failure reason.</p>
 */
export interface IpamDiscoveryFailureReason {
  /**
   * @public
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
   * @public
   * <p>The discovery failure message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.</p>
 */
export interface IpamDiscoveredAccount {
  /**
   * @public
   * <p>The account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region that the account information is returned from.
   *          An account can be discovered in multiple regions and will have a separate discovered account for each Region.</p>
   */
  DiscoveryRegion?: string;

  /**
   * @public
   * <p>The resource discovery failure reason.</p>
   */
  FailureReason?: IpamDiscoveryFailureReason;

  /**
   * @public
   * <p>The last attempted resource discovery time.</p>
   */
  LastAttemptedDiscoveryTime?: Date;

  /**
   * @public
   * <p>The last successful resource discovery time.</p>
   */
  LastSuccessfulDiscoveryTime?: Date;
}

/**
 * @public
 */
export interface GetIpamDiscoveredAccountsResult {
  /**
   * @public
   * <p>Discovered accounts.</p>
   */
  IpamDiscoveredAccounts?: IpamDiscoveredAccount[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * @public
   * <p>A resource Region.</p>
   */
  ResourceRegion: string | undefined;

  /**
   * @public
   * <p>Filters.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of discovered resource CIDRs to return in one page of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const IpamResourceType = {
  eip: "eip",
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
 * @public
 * <p>An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.</p>
 */
export interface IpamDiscoveredResourceCidr {
  /**
   * @public
   * <p>The resource discovery ID.</p>
   */
  IpamResourceDiscoveryId?: string;

  /**
   * @public
   * <p>The resource Region.</p>
   */
  ResourceRegion?: string;

  /**
   * @public
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource owner ID.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The resource CIDR.</p>
   */
  ResourceCidr?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * @public
   * <p>The resource tags.</p>
   */
  ResourceTags?: IpamResourceTag[];

  /**
   * @public
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
   * @public
   * <p>The VPC ID.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The last successful resource discovery time.</p>
   */
  SampleTime?: Date;
}

/**
 * @public
 */
export interface GetIpamDiscoveredResourceCidrsResult {
  /**
   * @public
   * <p>Discovered resource CIDRs.</p>
   */
  IpamDiscoveredResourceCidrs?: IpamDiscoveredResourceCidr[];

  /**
   * @public
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool you want to see the allocations for.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>The ID of the allocation.</p>
   */
  IpamPoolAllocationId?: string;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results you would like returned per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamPoolAllocationsResult {
  /**
   * @public
   * <p>The IPAM pool allocations you want information on.</p>
   */
  IpamPoolAllocations?: IpamPoolAllocation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM pool you want the CIDR for.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamPoolCidrsResult {
  /**
   * @public
   * <p>Information about the CIDRs provisioned to an IPAM pool.</p>
   */
  IpamPoolCidrs?: IpamPoolCidr[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more filters for the request. For more information about filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Filtering CLI output</a>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the scope that the resource is in.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * @public
   * <p>The ID of the IPAM pool that the resource is in.</p>
   */
  IpamPoolId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * @public
   * <p>The resource tag.</p>
   */
  ResourceTag?: RequestIpamResourceTag;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwner?: string;
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
 * @public
 * <p>The CIDR for an IPAM resource.</p>
 */
export interface IpamResourceCidr {
  /**
   * @public
   * <p>The IPAM ID for an IPAM resource.</p>
   */
  IpamId?: string;

  /**
   * @public
   * <p>The scope ID for an IPAM resource.</p>
   */
  IpamScopeId?: string;

  /**
   * @public
   * <p>The pool ID for an IPAM resource.</p>
   */
  IpamPoolId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region for an IPAM resource.</p>
   */
  ResourceRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account number of the owner of an IPAM resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The ID of an IPAM resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The name of an IPAM resource.</p>
   */
  ResourceName?: string;

  /**
   * @public
   * <p>The CIDR for an IPAM resource.</p>
   */
  ResourceCidr?: string;

  /**
   * @public
   * <p>The type of IPAM resource.</p>
   */
  ResourceType?: IpamResourceType | string;

  /**
   * @public
   * <p>The tags for an IPAM resource.</p>
   */
  ResourceTags?: IpamResourceTag[];

  /**
   * @public
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
   * @public
   * <p>The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ComplianceStatus?: IpamComplianceStatus | string;

  /**
   * @public
   * <p>The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  ManagementState?: IpamManagementState | string;

  /**
   * @public
   * <p>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  OverlapStatus?: IpamOverlapStatus | string;

  /**
   * @public
   * <p>The ID of a VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 */
export interface GetIpamResourceCidrsResult {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The resource CIDRs.</p>
   */
  IpamResourceCidrs?: IpamResourceCidr[];
}

/**
 * @public
 */
export interface GetLaunchTemplateDataRequest {
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
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchTemplateDataResult {
  /**
   * @public
   * <p>The instance data.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the resource with which a prefix list is associated.</p>
 */
export interface PrefixListAssociation {
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The owner of the resource.</p>
   */
  ResourceOwner?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  PrefixListAssociations?: PrefixListAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The version of the prefix list for which to return the entries. The default is the current version.</p>
   */
  TargetVersion?: number;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a prefix list entry.</p>
 */
export interface PrefixListEntry {
  /**
   * @public
   * <p>The CIDR block.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * @public
   * <p>Information about the prefix list entries.</p>
   */
  Entries?: PrefixListEntry[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsResult {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * @public
   * <p>The status of Network Access Scope Analysis.</p>
   */
  AnalysisStatus?: AnalysisStatus | string;

  /**
   * @public
   * <p>The findings associated with Network Access Scope Analysis.</p>
   */
  AnalysisFindings?: AccessScopeAnalysisFinding[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetNetworkInsightsAccessScopeContentRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;

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
 */
export interface GetNetworkInsightsAccessScopeContentResult {
  /**
   * @public
   * <p>The Network Access Scope content.</p>
   */
  NetworkInsightsAccessScopeContent?: NetworkInsightsAccessScopeContent;
}

/**
 * @public
 */
export interface GetPasswordDataRequest {
  /**
   * @public
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId: string | undefined;

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
 */
export interface GetPasswordDataResult {
  /**
   * @public
   * <p>The ID of the Windows instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The password of the instance. Returns an empty string if the password is not
   *             available.</p>
   */
  PasswordData?: string;

  /**
   * @public
   * <p>The time the data was last updated.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Contains the parameters for GetReservedInstanceExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the Convertible Reserved Instances to exchange.</p>
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * @public
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   */
  TargetConfigurations?: TargetConfigurationRequest[];
}

/**
 * @public
 * <p>The cost associated with the Reserved Instance.</p>
 */
export interface ReservationValue {
  /**
   * @public
   * <p>The hourly rate of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * @public
   * <p>The balance of the total value (the sum of remainingUpfrontValue + hourlyPrice * number of hours remaining).</p>
   */
  RemainingTotalValue?: string;

  /**
   * @public
   * <p>The remaining upfront cost of the reservation.</p>
   */
  RemainingUpfrontValue?: string;
}

/**
 * @public
 * <p>The total value of the Convertible Reserved Instance.</p>
 */
export interface ReservedInstanceReservationValue {
  /**
   * @public
   * <p>The total value of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * @public
   * <p>The ID of the Convertible Reserved Instance that you are exchanging.</p>
   */
  ReservedInstanceId?: string;
}

/**
 * @public
 * <p>Information about the Convertible Reserved Instance offering.</p>
 */
export interface TargetConfiguration {
  /**
   * @public
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is
   *       reserved and cannot be specified in a request</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The ID of the Convertible Reserved Instance offering.</p>
   */
  OfferingId?: string;
}

/**
 * @public
 * <p>The total value of the new Convertible Reserved Instances.</p>
 */
export interface TargetReservationValue {
  /**
   * @public
   * <p>The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of
   *       the list value, remaining upfront price, and additional upfront cost of the exchange.</p>
   */
  ReservationValue?: ReservationValue;

  /**
   * @public
   * <p>The configuration of the Convertible Reserved Instances that make up the exchange.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

/**
 * @public
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * @public
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * @public
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * @public
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * @public
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: ReservationValue;

  /**
   * @public
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * @public
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: ReservationValue;

  /**
   * @public
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: TargetReservationValue[];

  /**
   * @public
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface GetSerialConsoleAccessStatusResult {
  /**
   * @public
   * <p>If <code>true</code>, access to the EC2 serial console of all instances is enabled for
   * 			your account. If <code>false</code>, access to the EC2 serial console of all instances
   * 			is disabled for your account.</p>
   */
  SerialConsoleAccessEnabled?: boolean;
}

/**
 * @public
 * <p>The architecture type, virtualization type, and other attributes for the instance types.
 *          When you specify instance attributes, Amazon EC2 will identify instance types with those
 *          attributes.</p>
 *          <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify
 *          <code>InstanceTypes</code>.</p>
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * @public
   * <p>The architecture type.</p>
   */
  ArchitectureTypes?: (ArchitectureType | string)[];

  /**
   * @public
   * <p>The virtualization type.</p>
   */
  VirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresRequest {
  /**
   * @public
   * <p>The instance types. We recommend that you specify at least three instance types. If you
   *          specify one or two instance types, or specify variations of a single instance type (for
   *          example, an <code>m3.xlarge</code> with and without instance storage), the returned
   *          placement score will always be low. </p>
   *          <p>If you specify <code>InstanceTypes</code>, you can't specify
   *             <code>InstanceRequirementsWithMetadata</code>.</p>
   */
  InstanceTypes?: string[];

  /**
   * @public
   * <p>The target capacity.</p>
   */
  TargetCapacity: number | undefined;

  /**
   * @public
   * <p>The unit for the target capacity.</p>
   *          <p>Default: <code>units</code> (translates to number of instances)</p>
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | string;

  /**
   * @public
   * <p>Specify <code>true</code> so that the response returns a list of scored Availability Zones.
   *          Otherwise, the response returns a list of scored Regions.</p>
   *          <p>A list of scored Availability Zones is useful if you want to launch all of your Spot
   *          capacity into a single Availability Zone.</p>
   */
  SingleAvailabilityZone?: boolean;

  /**
   * @public
   * <p>The Regions used to narrow down the list of Regions to be scored. Enter the Region code,
   *          for example, <code>us-east-1</code>.</p>
   */
  RegionNames?: string[];

  /**
   * @public
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <p>If you specify <code>InstanceRequirementsWithMetadata</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 */
export interface SpotPlacementScore {
  /**
   * @public
   * <p>The Region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   */
  Score?: number;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresResult {
  /**
   * @public
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
   * @public
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsRequest {
  /**
   * @public
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
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsResult {
  /**
   * @public
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[];

  /**
   * @public
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes a propagation route table.</p>
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * @public
   * <p>The ID of the propagation route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The state of the propagation route table.</p>
   */
  State?: TransitGatewayPropagationState | string;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * @public
   * <p>Information about the propagation route tables.</p>
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * @public
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * @public
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   */
  Subnet?: SubnetAssociation;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @public
   * <p>Information about the multicast domain associations.</p>
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 */
export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * @public
   * <p>Returns details about the transit gateway policy table association.</p>
   */
  Associations?: TransitGatewayPolicyTableAssociation[];

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * @public
   * <p>The filters associated with the transit gateway policy table.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes the meta data tags associated with a transit gateway policy rule.</p>
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * @public
   * <p>The key name for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataKey?: string;

  /**
   * @public
   * <p>The value of the key for the transit gateway policy rule meta data tag.</p>
   */
  MetaDataValue?: string;
}

/**
 * @public
 * <p>Describes a rule associated with a transit gateway policy.</p>
 */
export interface TransitGatewayPolicyRule {
  /**
   * @public
   * <p>The source CIDR block for the transit gateway policy rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * @public
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  SourcePortRange?: string;

  /**
   * @public
   * <p>The destination CIDR block for the transit gateway policy rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   */
  DestinationPortRange?: string;

  /**
   * @public
   * <p>The protocol used by the transit gateway policy rule.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The meta data tags used for the transit gateway policy rule.</p>
   */
  MetaData?: TransitGatewayPolicyRuleMetaData;
}

/**
 * @public
 * <p>Describes a transit gateway policy table entry</p>
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * @public
   * <p>The rule number for the transit gateway policy table entry.</p>
   */
  PolicyRuleNumber?: string;

  /**
   * @public
   * <p>The policy rule associated with the transit gateway policy table.</p>
   */
  PolicyRule?: TransitGatewayPolicyRule;

  /**
   * @public
   * <p>The ID of the target route table.</p>
   */
  TargetRouteTableId?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * @public
   * <p>The entries for the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[];
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 */
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * @public
   * <p>Information about the prefix list references.</p>
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes an association between a route table and a resource attachment.</p>
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayAssociationState | string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * @public
   * <p>Information about the associations.</p>
   */
  Associations?: TransitGatewayRouteTableAssociation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

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
 * <p>Describes a route table propagation.</p>
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * @public
   * <p>The state of the resource.</p>
   */
  State?: TransitGatewayPropagationState | string;

  /**
   * @public
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * @public
   * <p>Information about the route table propagations.</p>
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

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
 */
export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

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
 */
export interface GetVerifiedAccessGroupPolicyResult {
  /**
   * @public
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * @public
   * <p>The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample
   *             configuration.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.</p>
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * @public
   * <p>The IKE version to be used in the sample configuration file for your customer gateway
   *             device. You can specify one of the following versions: <code>ikev1</code> or
   *                 <code>ikev2</code>.</p>
   */
  InternetKeyExchangeVersion?: string;

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
 */
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * @public
   * <p>Sample configuration file for the specified customer gateway device.</p>
   */
  VpnConnectionDeviceSampleConfiguration?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesRequest {
  /**
   * @public
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
   * @public
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *                 <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>NextToken</code> value. This value
   *             is null when there are no more results to return. </p>
   */
  NextToken?: string;

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
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 */
export interface VpnConnectionDeviceType {
  /**
   * @public
   * <p>Customer gateway device identifier.</p>
   */
  VpnConnectionDeviceTypeId?: string;

  /**
   * @public
   * <p>Customer gateway device vendor.</p>
   */
  Vendor?: string;

  /**
   * @public
   * <p>Customer gateway device platform.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>Customer gateway device software version.</p>
   */
  Software?: string;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesResult {
  /**
   * @public
   * <p>List of customer gateway devices that have a sample configuration file available for
   *             use.</p>
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[];

  /**
   * @public
   * <p>The <code>NextToken</code> value to include in a future
   *                 <code>GetVpnConnectionDeviceTypes</code> request. When the results of a
   *                 <code>GetVpnConnectionDeviceTypes</code> request exceed <code>MaxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is null when
   *             there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusRequest {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 * <p>Details for Site-to-Site VPN tunnel endpoint maintenance events.</p>
 */
export interface MaintenanceDetails {
  /**
   * @public
   * <p>Verify existence of a pending maintenance.</p>
   */
  PendingMaintenance?: string;

  /**
   * @public
   * <p>The timestamp after which Amazon Web Services will automatically apply maintenance.</p>
   */
  MaintenanceAutoAppliedAfter?: Date;

  /**
   * @public
   * <p>Timestamp of last applied maintenance.</p>
   */
  LastMaintenanceApplied?: Date;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusResult {
  /**
   * @public
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress?: string;

  /**
   * @public
   * <p>Get details of pending tunnel endpoint maintenance.</p>
   */
  MaintenanceDetails?: MaintenanceDetails;
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

/**
 * @internal
 */
export const GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog = (
  obj: GetVpnConnectionDeviceSampleConfigurationResult
): any => ({
  ...obj,
  ...(obj.VpnConnectionDeviceSampleConfiguration && { VpnConnectionDeviceSampleConfiguration: SENSITIVE_STRING }),
});
