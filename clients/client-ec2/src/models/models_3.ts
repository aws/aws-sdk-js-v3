import {
  _InstanceType,
  ActiveInstance,
  AllocationState,
  AllowsMultipleInstanceTypes,
  AlternatePathHint,
  AnalysisAclRule,
  AnalysisComponent,
  AnalysisRouteTableRoute,
  AnalysisSecurityGroupRule,
  AttachmentStatus,
  AttributeValue,
  AutoPlacement,
  CurrencyCodeValues,
  CustomerGateway,
  DhcpOptions,
  EgressOnlyInternetGateway,
  FleetExcessCapacityTerminationPolicy,
  HostnameType,
  HostRecovery,
  IamInstanceProfile,
  IamInstanceProfileAssociation,
  InstanceEventWindow,
  PathComponent,
  PortRange,
  Tag,
} from "./models_0";
import {
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTargetResponse,
  DefaultTargetCapacityType,
  DestinationFileFormat,
  ExportTask,
  FleetCapacityReservationUsageStrategy,
  FleetLaunchTemplateOverrides,
  FleetLaunchTemplateSpecification,
  FleetOnDemandAllocationStrategy,
  FleetReplacementStrategy,
  FleetType,
  GroupIdentifier,
  InstanceIpv6Address,
  InstanceLifecycle,
  InternetGateway,
  Ipam,
  IpamPool,
  IpamScope,
  KeyType,
  LaunchTemplate,
  LaunchTemplateAndOverridesResponse,
  LaunchTemplateVersion,
  LocalGatewayRouteTableVpcAssociation,
  LogDestinationType,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  NetworkInterfaceStatus,
  Placement,
  PlacementGroup,
  PlatformValues,
  ReplaceRootVolumeTask,
  SpotAllocationStrategy,
  SpotInstanceInterruptionBehavior,
  TargetCapacityUnitType,
  TrafficType,
} from "./models_1";
import {
  DiskImageDescription,
  DiskImageVolumeDescription,
  Filter,
  FleetStateCode,
  IdFormat,
  InstanceTagNotificationAttribute,
} from "./models_2";

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

export interface DescribeFastLaunchImagesRequest {
  /**
   * <p>Details for one or more Windows AMI image IDs.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Use the following filters to streamline results.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>resource-type</code> - The resource type for pre-provisioning.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>launch-template</code> - The launch template that is associated with the pre-provisioned Windows AMI.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>owner-id</code> - The owner ID for the pre-provisioning resource.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>state</code> - The current state of fast launching for the Windows AMI.</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results,
   * 			make another request with the returned NextToken value. If this parameter is not specified,
   * 			then all results are returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeFastLaunchImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastLaunchImagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the launch template to use for faster launching of the Windows AMI.</p>
 */
export interface FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * <p>The ID of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template for faster launching of the associated Windows AMI.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the launch template for faster launching of the associated Windows AMI.</p>
   */
  Version?: string;
}

export namespace FastLaunchLaunchTemplateSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FastLaunchLaunchTemplateSpecificationResponse): any => ({
    ...obj,
  });
}

export enum FastLaunchResourceType {
  SNAPSHOT = "snapshot",
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfigurationResponse {
  /**
   * <p>The number of pre-provisioned snapshots requested to keep on hand for a fast-launch enabled Windows AMI.</p>
   */
  TargetResourceCount?: number;
}

export namespace FastLaunchSnapshotConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FastLaunchSnapshotConfigurationResponse): any => ({
    ...obj,
  });
}

export enum FastLaunchStateCode {
  disabling = "disabling",
  disabling_failed = "disabling-failed",
  enabled = "enabled",
  enabled_failed = "enabled-failed",
  enabling = "enabling",
  enabling_failed = "enabling-failed",
}

/**
 * <p>Describe details about a fast-launch enabled Windows image that meets the requested
 * 			criteria. Criteria are defined by the <code>DescribeFastLaunchImages</code> action filters.</p>
 */
export interface DescribeFastLaunchImagesSuccessItem {
  /**
   * <p>The image ID that identifies the fast-launch enabled Windows image.</p>
   */
  ImageId?: string;

  /**
   * <p>The resource type that is used for pre-provisioning the Windows AMI. Supported values
   * 			include: <code>snapshot</code>.</p>
   */
  ResourceType?: FastLaunchResourceType | string;

  /**
   * <p>A group of parameters that are used for pre-provisioning the associated
   * 			Windows AMI using snapshots.</p>
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfigurationResponse;

  /**
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it launches
   * 			Windows instances from pre-provisioned snapshots.</p>
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecificationResponse;

  /**
   * <p>The maximum number of parallel instances that are launched for creating resources.</p>
   */
  MaxParallelLaunches?: number;

  /**
   * <p>The owner ID for the fast-launch enabled Windows AMI.</p>
   */
  OwnerId?: string;

  /**
   * <p>The current state of faster launching for the specified Windows AMI.</p>
   */
  State?: FastLaunchStateCode | string;

  /**
   * <p>The reason that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>The time that faster launching for the Windows AMI changed to the current state.</p>
   */
  StateTransitionTime?: Date;
}

export namespace DescribeFastLaunchImagesSuccessItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastLaunchImagesSuccessItem): any => ({
    ...obj,
  });
}

export interface DescribeFastLaunchImagesResult {
  /**
   * <p>A collection of details about the fast-launch enabled Windows images that meet
   * 			the requested criteria.</p>
   */
  FastLaunchImages?: DescribeFastLaunchImagesSuccessItem[];

  /**
   * <p>The token to use for the next set of results. This value is null when there are
   * 			no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeFastLaunchImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFastLaunchImagesResult): any => ({
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
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
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

export enum ReservationState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  RETIRED = "retired",
}

/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated
 *             Hosts.</p>
 */
export interface HostReservation {
  /**
   * <p>The number of Dedicated Hosts the reservation is associated with.</p>
   */
  Count?: number;

  /**
   * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
   *             amounts are specified. At this time, the only supported currency is
   *             <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000
   *                 (1 year)</code> | <code>94608000 (3 years)</code>.</p>
   */
  Duration?: number;

  /**
   * <p>The date and time that the reservation ends.</p>
   */
  End?: Date;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
   */
  HostIdSet?: string[];

  /**
   * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The hourly price of the reservation.</p>
   */
  HourlyPrice?: string;

  /**
   * <p>The instance family of the Dedicated Host Reservation. The instance family on the
   *             Dedicated Host must be the same in order for it to benefit from the
   *             reservation.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The ID of the reservation. This remains the same regardless of which Dedicated
   *             Hosts are associated with it.</p>
   */
  OfferingId?: string;

  /**
   * <p>The payment option selected for this reservation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The date and time that the reservation started.</p>
   */
  Start?: Date;

  /**
   * <p>The state of the reservation.</p>
   */
  State?: ReservationState | string;

  /**
   * <p>The upfront price of the reservation.</p>
   */
  UpfrontPrice?: string;

  /**
   * <p>Any tags assigned to the Dedicated Host Reservation.</p>
   */
  Tags?: Tag[];
}

export namespace HostReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostReservation): any => ({
    ...obj,
  });
}

export interface DescribeHostReservationsResult {
  /**
   * <p>Details about the reservation's configuration.</p>
   */
  HostReservationSet?: HostReservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostReservationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostReservationsResult): any => ({
    ...obj,
  });
}

export interface DescribeHostsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
   *                         (<code>on</code> | <code>off</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone of the
   *                     host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>client-token</code> - The idempotency token that you provided when you
   *                     allocated the host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>host-reservation-id</code> - The ID of the reservation assigned to
   *                     this host.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The instance type size that the Dedicated Host
   *                     is configured to support.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>state</code> - The allocation state of the Dedicated Host
   *                         (<code>available</code> | <code>under-assessment</code> |
   *                         <code>permanent-failure</code> | <code>released</code> |
   *                         <code>released-permanent-failure</code>).</p>
   *             </li>
   *             <li>
   *         		     <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *         	   </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
   *             launches.</p>
   */
  HostIds?: string[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   *          <p>You cannot specify this parameter and the host IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *     		Host.</p>
 */
export interface InstanceCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host based on the
   *     		host's available capacity.</p>
   */
  AvailableCapacity?: number;

  /**
   * <p>The instance type supported by the Dedicated Host.</p>
   */
  InstanceType?: string;

  /**
   * <p>The total number of instances that can be launched onto the Dedicated Host if there
   *     		are no instances running on it.</p>
   */
  TotalCapacity?: number;
}

export namespace InstanceCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host. </p>
 */
export interface AvailableCapacity {
  /**
   * <p>The number of instances that can be launched onto the Dedicated Host depending on
   *     		the host's available capacity. For Dedicated Hosts that support multiple instance types,
   *     		this parameter represents the number of instances for each instance size that is
   *     		supported on the host.</p>
   */
  AvailableInstanceCapacity?: InstanceCapacity[];

  /**
   * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
   */
  AvailableVCpus?: number;
}

export namespace AvailableCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailableCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of a Dedicated Host.</p>
 */
export interface HostProperties {
  /**
   * <p>The number of cores on the Dedicated Host.</p>
   */
  Cores?: number;

  /**
   * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
   *         	If the host supports multiple instance types, no <b>instanceType</b>
   *         	is returned.</p>
   */
  InstanceType?: string;

  /**
   * <p>The instance family supported by the Dedicated Host. For example, <code>m5</code>.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The number of sockets on the Dedicated Host.</p>
   */
  Sockets?: number;

  /**
   * <p>The total number of vCPUs on the Dedicated Host.</p>
   */
  TotalVCpus?: number;
}

export namespace HostProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface HostInstance {
  /**
   * <p>The ID of instance that is running on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type (for example, <code>m3.medium</code>) of the running instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the instance.</p>
   */
  OwnerId?: string;
}

export namespace HostInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface Host {
  /**
   * <p>Whether auto-placement is on or off.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The Availability Zone of the Dedicated Host.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instances running on the Dedicated Host.</p>
   */
  AvailableCapacity?: AvailableCapacity;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the Dedicated Host.</p>
   */
  HostId?: string;

  /**
   * <p>The hardware specifications of the Dedicated Host.</p>
   */
  HostProperties?: HostProperties;

  /**
   * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response
   *             if the Dedicated Host doesn't have an associated reservation.</p>
   */
  HostReservationId?: string;

  /**
   * <p>The IDs and instance type that are currently running on the Dedicated
   *             Host.</p>
   */
  Instances?: HostInstance[];

  /**
   * <p>The Dedicated Host's state.</p>
   */
  State?: AllocationState | string;

  /**
   * <p>The time that the Dedicated Host was allocated.</p>
   */
  AllocationTime?: Date;

  /**
   * <p>The time that the Dedicated Host was released.</p>
   */
  ReleaseTime?: Date;

  /**
   * <p>Any tags assigned to the Dedicated Host.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Indicates whether the Dedicated Host supports multiple instance types of the same instance family.
   * 			If the value is <code>on</code>, the Dedicated Host supports multiple instance types in the instance family.
   * 		    If the value is <code>off</code>, the Dedicated Host supports a single instance type only.</p>
   */
  AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Dedicated Host.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates whether the Dedicated Host is in a host resource group. If
   * 			<b>memberOfServiceLinkedResourceGroup</b> is
   * 			<code>true</code>, the host is in a host resource group; otherwise, it is not.</p>
   */
  MemberOfServiceLinkedResourceGroup?: boolean;
}

export namespace Host {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
}

export interface DescribeHostsResult {
  /**
   * <p>Information about the Dedicated Hosts.</p>
   */
  Hosts?: Host[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeHostsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHostsResult): any => ({
    ...obj,
  });
}

export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * <p>The IAM instance profile associations.</p>
   */
  AssociationIds?: string[];

  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association (<code>associating</code> |
   *                 <code>associated</code> | <code>disassociating</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeIamInstanceProfileAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIamInstanceProfileAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * <p>Information about the IAM instance profile associations.</p>
   */
  IamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeIamInstanceProfileAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIamInstanceProfileAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The type of resource: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export namespace DescribeIdentityIdFormatRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIdentityIdFormatRequest): any => ({
    ...obj,
  });
}

export interface DescribeIdentityIdFormatResult {
  /**
   * <p>Information about the ID format for the resources.</p>
   */
  Statuses?: IdFormat[];
}

export namespace DescribeIdentityIdFormatResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIdentityIdFormatResult): any => ({
    ...obj,
  });
}

export interface DescribeIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
   *          </p>
   */
  Resource?: string;
}

export namespace DescribeIdFormatRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIdFormatRequest): any => ({
    ...obj,
  });
}

export interface DescribeIdFormatResult {
  /**
   * <p>Information about the ID format for the resource.</p>
   */
  Statuses?: IdFormat[];
}

export namespace DescribeIdFormatResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIdFormatResult): any => ({
    ...obj,
  });
}

export type ImageAttributeName =
  | "blockDeviceMapping"
  | "bootMode"
  | "description"
  | "kernel"
  | "launchPermission"
  | "productCodes"
  | "ramdisk"
  | "sriovNetSupport";

/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 */
export interface DescribeImageAttributeRequest {
  /**
   * <p>The AMI attribute.</p>
   *    	     <p>
   *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated.
   *    	    Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about
   *    	    the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
   */
  Attribute: ImageAttributeName | string | undefined;

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

export namespace DescribeImageAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch permission.</p>
 */
export interface LaunchPermission {
  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
   */
  UserId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   */
  OrganizationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU).</p>
   */
  OrganizationalUnitArn?: string;
}

export namespace LaunchPermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchPermission): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an image attribute.</p>
 */
export interface ImageAttribute {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The launch permissions.</p>
   */
  LaunchPermissions?: LaunchPermission[];

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>A description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>Describes a value for a resource attribute that is a String.</p>
   */
  BootMode?: AttributeValue;
}

export namespace ImageAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageAttribute): any => ({
    ...obj,
  });
}

export interface DescribeImagesRequest {
  /**
   * <p>Scopes the images by users with explicit launch permissions.
   *        Specify an Amazon Web Services account ID, <code>self</code> (the sender of the request),
   * 				or <code>all</code> (public AMIs).</p>
   *          <ul>
   *             <li>
   *                <p>If you specify an Amazon Web Services account ID that is not your own, only AMIs
   *           shared with that specific Amazon Web Services account ID are returned. However, AMIs that
   *           are shared with the account’s organization or organizational unit (OU) are not
   *           returned.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>self</code> or your own Amazon Web Services account ID, AMIs
   *           shared with your account are returned. In addition, AMIs that are shared with the
   *           organization or OU of which you are member are also returned. </p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>all</code>, all public AMIs are returned.</p>
   *             </li>
   *          </ul>
   */
  ExecutableUsers?: string[];

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>architecture</code> - The image architecture (<code>i386</code> |
   *             <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
   *         	whether the Amazon EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for
   *           example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *         	         <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the Amazon EBS
   *           volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *         	         <code>block-device-mapping.volume-size</code> - The volume size of the Amazon EBS volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>block-device-mapping.volume-type</code> - The volume type of the Amazon EBS volume
   *             (<code>io1</code> | <code>io2</code> | <code>gp2</code> | <code>gp3</code> | <code>sc1
   *           </code>| <code>st1</code> | <code>standard</code>).</p>
   *             </li>
   *             <li>
   *     		         <p>
   *     			           <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the Amazon EBS volume is encrypted.</p>
   *     	       </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the image (provided during image
   *           creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking
   *           with ENA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
   *           <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
   *             <code>ramdisk</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manifest-location</code> - The location of the image manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> | <code>aws-marketplace</code>).
   *           The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be
   *         	set using the IAM console. We recommend that you use the <b>Owner</b>
   *         	request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that you use the
   *       		<b>Owner</b> request parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform. To only list Windows-based AMIs, use
   *             <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code</code> - The product code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-code.type</code> - The type of the product code (<code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
   *             <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
   *           | <code>failed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state-reason-message</code> - The message for the state change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates
   *                     that enhanced networking with the Intel 82599 VF interface is enabled.</p>
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
   *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
   *             <code>hvm</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The image IDs.</p>
   *          <p>Default: Describes all images available to you.</p>
   */
  ImageIds?: string[];

  /**
   * <p>Scopes the results to images with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.
   *       If you omit this parameter, the results include all images for which you have launch permissions,
   *       regardless of ownership.</p>
   */
  Owners?: string[];

  /**
   * <p>If <code>true</code>, all deprecated AMIs are included in the response. If
   *         <code>false</code>, no deprecated AMIs are included in the response. If no value is
   *       specified, the default value is <code>false</code>.</p>
   *          <note>
   *             <p>If you are the AMI owner, all deprecated AMIs appear in the response regardless of the value (<code>true</code> or <code>false</code>) that you set for this parameter.</p>
   *          </note>
   */
  IncludeDeprecated?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj,
  });
}

export type ArchitectureValues = "arm64" | "i386" | "x86_64" | "x86_64_mac";

export type BootModeValues = "legacy-bios" | "uefi";

export type HypervisorType = "ovm" | "xen";

export type ImageTypeValues = "kernel" | "machine" | "ramdisk";

export type DeviceType = "ebs" | "instance-store";

export type ImageState = "available" | "deregistered" | "error" | "failed" | "invalid" | "pending" | "transient";

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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
   *                     capacity available to satisfy the launch request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.InternalError</code>: An internal error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
   *                     retirement.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
   *                     number of Spot requests with a maximum price equal to or higher than the Spot
   *                     price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
   *                     because the number of Spot requests with a maximum price equal to or higher than
   *                     the Spot price exceeded available capacity or because of an increase in the Spot
   *                     price.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
   *                     using the <code>shutdown -h</code> command from the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
   *                     rebooted during AMI creation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InternalError</code>: A client error caused the instance to
   *                     terminate during launch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
   *                     found.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
   *                     the Amazon EC2 API.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
   *                     volumes or total storage was exceeded. Decrease usage or request an increase in
   *                     your account limits.</p>
   *             </li>
   *          </ul>
   */
  Message?: string;
}

export namespace StateReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StateReason): any => ({
    ...obj,
  });
}

export type VirtualizationType = "hvm" | "paravirtual";

/**
 * <p>Describes an image.</p>
 */
export interface Image {
  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The date and time the image was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The location of the AMI.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The type of image.</p>
   */
  ImageType?: ImageTypeValues | string;

  /**
   * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if
   * 				this image has public launch permissions or <code>false</code>
   * 				if it has only implicit and explicit launch permissions.</p>
   */
  Public?: boolean;

  /**
   * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
   */
  KernelId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the image.</p>
   */
  OwnerId?: string;

  /**
   * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>The platform details associated with the billing code of the AMI. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understanding
   *         AMI billing</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
   *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your Amazon Web Services Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Amazon Web Services Price
   *         	List API</a>. You can view these fields on the <b>Instances</b> or
   *     	<b>AMIs</b> pages in the Amazon EC2 console, or in the responses that are
   *     	returned by the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html">DescribeImages</a>
   *     	command in the Amazon EC2 API, or the <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html">describe-images</a>
   *     	command in the CLI.</p>
   */
  UsageOperation?: string;

  /**
   * <p>Any product codes associated with the AMI.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
   */
  State?: ImageState | string;

  /**
   * <p>Any block device mapping entries.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The description of the AMI that was provided during image creation.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the image.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The Amazon Web Services account alias (for example, <code>amazon</code>, <code>self</code>) or
   *        the Amazon Web Services account ID of the AMI owner.</p>
   */
  ImageOwnerAlias?: string;

  /**
   * <p>The name of the AMI that was provided during image creation.</p>
   */
  Name?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the state change.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>Any tags assigned to the image.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of virtualization of the AMI.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>The date and time to deprecate the AMI, in UTC, in the following format:
   *      <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z.
   *       If you specified a value for seconds, Amazon EC2 rounds the seconds to the
   *       nearest minute.</p>
   */
  DeprecationTime?: string;
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export interface DescribeImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: Image[];
}

export namespace DescribeImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeImportImageTasksRequest {
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
   * <p>The IDs of the import image tasks.</p>
   */
  ImportTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportImageTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportImageTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p> The response information for license configurations.</p>
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * <p>The ARN of a license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace ImportImageLicenseConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportImageLicenseConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucketDetails {
  /**
   * <p>The Amazon S3 bucket from which the disk image was created.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The file name of the disk image.</p>
   */
  S3Key?: string;
}

export namespace UserBucketDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserBucketDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface SnapshotDetail {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the snapshot.</p>
   */
  DeviceName?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The percentage of progress for the task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status of the snapshot creation.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL used to access the disk image.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

export namespace SnapshotDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import image task.</p>
 */
export interface ImportImageTask {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
   *          </p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the image is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor for the import task.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted image.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The description string for the import image task.</p>
   */
  Platform?: string;

  /**
   * <p>The percentage of progress of the import image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: SnapshotDetail[];

  /**
   * <p>A brief status for the import image task.</p>
   */
  Status?: string;

  /**
   * <p>A descriptive status message for the import image task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags for the import image task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ARNs of the license configurations that are associated with the import image task.</p>
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * <p>The usage operation value.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The boot mode of the virtual machine.</p>
   */
  BootMode?: BootModeValues | string;
}

export namespace ImportImageTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportImageTask): any => ({
    ...obj,
  });
}

export interface DescribeImportImageTasksResult {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportImageTasks?: ImportImageTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportImageTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportImageTasksResult): any => ({
    ...obj,
  });
}

export interface DescribeImportSnapshotTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of import snapshot task IDs.</p>
   */
  ImportTaskIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
   *    with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that indicates the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportSnapshotTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportSnapshotTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the import snapshot task.</p>
 */
export interface SnapshotTaskDetail {
  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The identifier for the KMS key that was used to create the encrypted snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status for the import snapshot task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   */
  Url?: string;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   */
  UserBucket?: UserBucketDetails;
}

export namespace SnapshotTaskDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotTaskDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an import snapshot task.</p>
 */
export interface ImportSnapshotTask {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Describes an import snapshot task.</p>
   */
  SnapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * <p>The tags for the import snapshot task.</p>
   */
  Tags?: Tag[];
}

export namespace ImportSnapshotTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSnapshotTask): any => ({
    ...obj,
  });
}

export interface DescribeImportSnapshotTasksResult {
  /**
   * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
   *    previous 7 days.</p>
   */
  ImportSnapshotTasks?: ImportSnapshotTask[];

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
   *    to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeImportSnapshotTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportSnapshotTasksResult): any => ({
    ...obj,
  });
}

export type InstanceAttributeName =
  | "blockDeviceMapping"
  | "disableApiTermination"
  | "ebsOptimized"
  | "enaSupport"
  | "enclaveOptions"
  | "groupSet"
  | "instanceInitiatedShutdownBehavior"
  | "instanceType"
  | "kernel"
  | "productCodes"
  | "ramdisk"
  | "rootDeviceName"
  | "sourceDestCheck"
  | "sriovNetSupport"
  | "userData";

export interface DescribeInstanceAttributeRequest {
  /**
   * <p>The instance attribute.</p>
   *         <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
   */
  Attribute: InstanceAttributeName | string | undefined;

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
}

export namespace DescribeInstanceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

export namespace EbsInstanceBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDevice;
}

export namespace InstanceBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 */
export interface AttributeBooleanValue {
  /**
   * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
   */
  Value?: boolean;
}

export namespace AttributeBooleanValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeBooleanValue): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 */
export interface EnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves;
   *             otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

export namespace EnclaveOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnclaveOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance attribute.</p>
 */
export interface InstanceAttribute {
  /**
   * <p>The security groups associated with the instance.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The block device mapping of the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
   *             EC2 console, CLI, or API; otherwise, you can.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise,
   * 		set it to <code>false</code>.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: AttributeValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: AttributeValue;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: AttributeValue;

  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance
   *             is either the source or the destination of any traffic that it receives.
   *             If the value is <code>true</code>, source/destination checks are enabled;
   *             otherwise, they are disabled. The default value is <code>true</code>.
   *             You must disable source/destination checks if the instance runs services
   *             such as network address translation, routing, or firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>The user data.</p>
   */
  UserData?: AttributeValue;
}

export namespace InstanceAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceAttribute): any => ({
    ...obj,
  });
}

export interface DescribeInstanceCreditSpecificationsRequest {
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
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   *         <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceCreditSpecificationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceCreditSpecificationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 */
export interface InstanceCreditSpecification {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace InstanceCreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCreditSpecification): any => ({
    ...obj,
  });
}

export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * <p>Information about the credit option for CPU usage of an instance.</p>
   */
  InstanceCreditSpecifications?: InstanceCreditSpecification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceCreditSpecificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceCreditSpecificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeInstanceEventNotificationAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceEventNotificationAttributesRequest): any => ({
    ...obj,
  });
}

export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * <p>Information about the registered tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export namespace DescribeInstanceEventNotificationAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceEventNotificationAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <para>Describe instance event windows by InstanceEventWindow.</para>
 */
export interface DescribeInstanceEventWindowsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the event windows.</p>
   */
  InstanceEventWindowIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>dedicated-host-id</code> - The event windows associated with the specified
   *             Dedicated Host ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>event-window-name</code> - The event windows associated with the specified
   *             names. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The event windows associated with the specified instance
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag</code> - The event windows associated with the specified tag and
   *                value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-key</code> - The event windows associated with the specified tag
   *                key, regardless of the value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-tag-value</code> - The event windows associated with the specified tag
   *                value, regardless of the key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the
   *                event window. Use the tag key in the filter name and the tag value as the filter
   *                value. For example, to find all resources that have a tag with the key
   *                   <code>Owner</code> and the value <code>CMX</code>, specify <code>tag:Owner</code>
   *                for the filter name and <code>CMX</code> for the filter value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the event window. Use this filter
   *                to find all event windows that have a tag with a specific key, regardless of the tag
   *                value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - The value of a tag assigned to the event window. Use this
   *                filter to find all event windows that have a tag with a specific value, regardless of
   *                the tag key. </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value. This value can
   *          be between 20 and 500. You cannot specify this parameter and the event window IDs parameter
   *          in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceEventWindowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceEventWindowsRequest): any => ({
    ...obj,
  });
}

export interface DescribeInstanceEventWindowsResult {
  /**
   * <p>Information about the event windows.</p>
   */
  InstanceEventWindows?: InstanceEventWindow[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceEventWindowsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceEventWindowsResult): any => ({
    ...obj,
  });
}

export interface DescribeInstancesRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>affinity</code> - The affinity setting for an instance running on a
   *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>architecture</code> - The instance architecture (<code>i386</code> |
   *                         <code>x86_64</code> | <code>arm64</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.attach-time</code> - The attach time for an EBS
   *                     volume mapped to the instance, for example,
   *                         <code>2010-09-15T17:15:20.000Z</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.delete-on-termination</code> - A Boolean that
   *                     indicates whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.device-name</code> - The device name specified in the
   *                     block device mapping (for example, <code>/dev/sdh</code> or
   *                     <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.status</code> - The status for the EBS volume
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
   *                     volume.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>client-token</code> - The idempotency token you provided when you launched
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dns-name</code> - The public DNS name of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>group-id</code> - The ID of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>group-name</code> - The name of the security group for the instance.
   *                     EC2-Classic only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
   *                     the instance is enabled for hibernation. A value of <code>true</code> means that
   *                     the instance is enabled for hibernation. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
   *                     running, if applicable.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>hypervisor</code> - The hypervisor type of the instance
   *                     (<code>ovm</code> | <code>xen</code>). The value <code>xen</code>
   *                     is used for both Xen and Nitro hypervisors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
   *                     the instance. Specified as an ARN.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>image-id</code> - The ID of the image used to launch the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-id</code> - The ID of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance or
   *                     a Scheduled Instance (<code>spot</code> | <code>scheduled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
   *                     unsigned integer. The high byte is used for internal purposes and should be
   *                     ignored. The low byte is set based on the state represented. The valid values
   *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The type of instance (for example,
   *                         <code>t2.micro</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance.group-id</code> - The ID of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance.group-name</code> - The name of the security group for the
   *                     instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>key-name</code> - The name of the key pair used when the instance was
   *                     launched.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-index</code> - When launching multiple instances, this is the
   *                     index for the instance in the launch group (for example, 0, 1, 2, and so on). </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-time</code> - The time when the instance was launched, in the ISO
   *                     8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example,
   *                         <code>2021-09-29T11:04:43.305Z</code>. You can use a wildcard
   *                         (<code>*</code>), for example, <code>2021-09-29T*</code>, which matches an
   *                     entire day.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
   *                     state (<code>optional</code> | <code>required</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-put-response-hop-limit</code> - The http metadata
   *                     request put response hop limit (integer, possible values <code>1</code> to
   *                         <code>64</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>metadata-options.http-endpoint</code> - Enable or disable metadata
   *                     access on http endpoint (<code>enabled</code> | <code>disabled</code>)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
   *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
   *                     address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
   *                     address of the network interface is the primary private IPv4 address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
   *                     association of an Elastic IP address (IPv4) with a network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
   *                     ID of the private IPv4 address associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.public-ip</code> - The address of the
   *                     Elastic IP address (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
   *                     Elastic IP address (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.allocation-id</code> - The allocation ID
   *                     returned when you allocated the Elastic IP address (IPv4) for your network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.association.association-id</code> - The association ID
   *                     returned when the network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
   *                     interface attachment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
   *                     to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
   *                     the instance to which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.device-index</code> - The device index to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.status</code> - The status of the
   *                     attachment (<code>attaching</code> | <code>attached</code> |
   *                         <code>detaching</code> | <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.attach-time</code> - The time that the
   *                     network interface was attached to an instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
   *                     whether the attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.availability-zone</code> - The Availability Zone for
   *                     the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.description</code> - The description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.group-id</code> - The ID of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.group-name</code> - The name of a security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.mac-address</code> - The MAC address of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.requester-id</code> - The requester ID for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.requester-managed</code> - Indicates whether the
   *                     network interface is being managed by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.status</code> - The status of the network interface
   *                         (<code>available</code>) | <code>in-use</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.source-dest-check</code> - Whether the network
   *                     interface performs source/destination checking. A value of <code>true</code>
   *                     means that checking is enabled, and <code>false</code> means that checking is
   *                     disabled. The value must be <code>false</code> for the network interface to
   *                     perform network address translation (NAT) in your VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>owner-id</code> - The Amazon Web Services account ID of the instance owner.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>placement-group-name</code> - The name of the placement group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>placement-partition-number</code> - The partition in which the instance is
   *                     located.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>platform</code> - The platform. To list only Windows instances, use
   *                         <code>windows</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>private-dns-name</code> - The private IPv4 DNS name of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>private-ip-address</code> - The private IPv4 address of the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>product-code</code> - The product code associated with the AMI used to
   *                     launch the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>product-code.type</code> - The type of product code (<code>devpay</code> |
   *                         <code>marketplace</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>reason</code> - The reason for the current state of the instance (for
   *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
   *                     Similar to the state-reason-code filter.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>requester-id</code> - The ID of the entity that launched the instance on
   *                     your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so
   *                     on).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>reservation-id</code> - The ID of the instance's reservation. A
   *                     reservation ID is created any time you launch an instance. A reservation ID has
   *                     a one-to-one relationship with an instance launch request, but can be associated
   *                     with more than one instance if you launch multiple instances using the same
   *                     launch request. For example, if you launch one instance, you get one reservation
   *                     ID. If you launch ten instances using the same launch request, you also get one
   *                     reservation ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>root-device-name</code> - The device name of the root device volume (for
   *                     example, <code>/dev/sda1</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>root-device-type</code> - The type of the root device volume
   *                         (<code>ebs</code> | <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>source-dest-check</code> - Indicates whether the instance performs
   *                     source/destination checking. A value of <code>true</code> means that checking is
   *                     enabled, and <code>false</code> means that checking is disabled. The value must
   *                     be <code>false</code> for the instance to perform network address translation
   *                     (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>spot-instance-request-id</code> - The ID of the Spot Instance
   *                     request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state-reason-code</code> - The reason code for the state change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state-reason-message</code> - A message that describes the state
   *                     change.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>subnet-id</code> - The ID of the subnet for the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
   *                         <code>default</code> | <code>host</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>virtualization-type</code> - The virtualization type of the instance
   *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
   *                     has matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
   *                     available. The instance runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

export namespace CapacityReservationSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface CpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export namespace CpuOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CpuOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuAssociation {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The ID of the association.</p>
   */
  ElasticGpuAssociationId?: string;

  /**
   * <p>The state of the association between the instance and the
   *             Elastic Graphics accelerator.</p>
   */
  ElasticGpuAssociationState?: string;

  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   */
  ElasticGpuAssociationTime?: string;
}

export namespace ElasticGpuAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorArn?: string;

  /**
   * <p>
   *             The ID of the association.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationId?: string;

  /**
   * <p>
   *             The state of the elastic inference accelerator.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationState?: string;

  /**
   * <p>
   *             The time at which the elastic inference accelerator is associated with an instance.
   *         </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date;
}

export namespace ElasticInferenceAcceleratorAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticInferenceAcceleratorAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, your instance is enabled for
   *             hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export namespace HibernationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HibernationOptions): any => ({
    ...obj,
  });
}

export type InstanceLifecycleType = "scheduled" | "spot";

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LicenseConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LicenseConfiguration): any => ({
    ...obj,
  });
}

export type InstanceMetadataEndpointState = "disabled" | "enabled";

export enum InstanceMetadataProtocolState {
  disabled = "disabled",
  enabled = "enabled",
}

export enum HttpTokensState {
  optional = "optional",
  required = "required",
}

export enum InstanceMetadataTagsState {
  disabled = "disabled",
  enabled = "enabled",
}

export type InstanceMetadataOptionsState = "applied" | "pending";

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * <p>The state of the metadata option changes.</p>
   *         <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not
   *             ready to process metadata traffic with the new selection.</p>
   *         <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the
   *             instance.</p>
   */
  State?: InstanceMetadataOptionsState | string;

  /**
   * <p>The state of token usage for your instance metadata requests.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credential
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   *         <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or
   *             disabled.</p>
   *             <p>If the value is <code>disabled</code>, you cannot access your
   *                 instance metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Indicates whether the IPv6 endpoint for the instance metadata service is enabled or disabled.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;

  /**
   * <p>Indicates whether access to instance tags from the instance metadata is enabled or
   *             disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
}

export namespace InstanceMetadataOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsResponse): any => ({
    ...obj,
  });
}

export type MonitoringState = "disabled" | "disabling" | "enabled" | "pending";

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface Monitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  State?: MonitoringState | string;
}

export namespace Monitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Monitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * <p>The carrier IP address associated with the network interface.</p>
   */
  CarrierIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

export namespace InstanceNetworkInterfaceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * <p>The time stamp when the attachment initiated.</p>
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
   * <p>The index of the device on the instance for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;
}

export namespace InstanceNetworkInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an IPv4 prefix.</p>
 */
export interface InstanceIpv4Prefix {
  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

export namespace InstanceIpv4Prefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv4Prefix): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an IPv6 prefix.</p>
 */
export interface InstanceIpv6Prefix {
  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

export namespace InstanceIpv6Prefix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv6Prefix): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a private IPv4 address.</p>
 */
export interface InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;
}

export namespace InstancePrivateIpAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstancePrivateIpAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterface {
  /**
   * <p>The association information for an Elastic IPv4 associated with the network
   *             interface.</p>
   */
  Association?: InstanceNetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: InstanceNetworkInterfaceAttachment;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>One or more security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>One or more IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that created the network interface.</p>
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
   * <p>One or more private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: InstancePrivateIpAddress[];

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
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Describes the type of network interface.</p>
   * 	        <p>Valid values: <code>interface</code> | <code>efa</code> | <code>trunk</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The IPv4 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: InstanceIpv4Prefix[];

  /**
   * <p>The IPv6 delegated prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: InstanceIpv6Prefix[];
}

export namespace InstanceNetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceNetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsResponse {
  /**
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace PrivateDnsNameOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameOptionsResponse): any => ({
    ...obj,
  });
}

export type InstanceStateName = "pending" | "running" | "shutting-down" | "stopped" | "stopping" | "terminated";

/**
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * <p>The state of the instance as a 16-bit unsigned integer. </p>
   *         <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
   *             between 256 and 65,535. These numerical values are used for internal purposes and should
   *             be ignored.</p>
   *         <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
   *             between 0 and 255. </p>
   *         <p>The valid values for instance-state-code will all be in the range of the low byte and
   *             they are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>0</code> : <code>pending</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>16</code> : <code>running</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>32</code> : <code>shutting-down</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>48</code> : <code>terminated</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>64</code> : <code>stopping</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>80</code> : <code>stopped</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
   *             decimal.</p>
   */
  Code?: number;

  /**
   * <p>The current state of the instance.</p>
   */
  Name?: InstanceStateName | string;
}

export namespace InstanceState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance.</p>
 */
export interface Instance {
  /**
   * <p>The AMI launch index, which can be used to find this instance in the launch
   *             group.</p>
   */
  AmiLaunchIndex?: number;

  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The kernel associated with this instance, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair, if this instance was launched with an associated key
   *             pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The time the instance was launched.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: Placement;

  /**
   * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
   */
  Platform?: PlatformValues | string;

  /**
   * <p>(IPv4 only) The private DNS hostname name assigned to the instance. This DNS hostname
   *             can only be used inside the Amazon EC2 network. This name is not available until the
   *             instance enters the <code>running</code> state. </p>
   *         <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS
   *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
   *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
   *             resolve the hostname as appropriate.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The product codes attached to this instance, if applicable.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>(IPv4 only) The public DNS name assigned to the instance. This name is not available
   *             until the instance enters the <code>running</code> state. For EC2-VPC, this name is only
   *             available if you've enabled DNS hostnames for your VPC.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
   *             applicable.</p>
   *         <p>A Carrier IP address only applies to an instance launched in a subnet associated with
   *             a Wavelength Zone.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The RAM disk associated with this instance, if applicable.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState;

  /**
   * <p>The reason for the most recent state transition. This might be an empty string.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which the instance is running.</p>
   */
  SubnetId?: string;

  /**
   * <p>[EC2-VPC] The ID of the VPC in which the instance is running.</p>
   */
  VpcId?: string;

  /**
   * <p>The architecture of the image.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The idempotency token you provided when you launched the instance, if
   *             applicable.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Specifies whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen and
   *             Nitro hypervisors.</p>
   */
  Hypervisor?: HypervisorType | string;

  /**
   * <p>The IAM instance profile associated with the instance, if applicable.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
   */
  InstanceLifecycle?: InstanceLifecycleType | string;

  /**
   * <p>The Elastic GPU associated with the instance.</p>
   */
  ElasticGpuAssociations?: ElasticGpuAssociation[];

  /**
   * <p> The elastic inference accelerator associated with the instance.</p>
   */
  ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  /**
   * <p>[EC2-VPC] The network interfaces for the instance.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterface[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The device name of the root device volume (for example,
   *             <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
   *             store volume.</p>
   */
  RootDeviceType?: DeviceType | string;

  /**
   * <p>The security groups for the instance.</p>
   */
  SecurityGroups?: GroupIdentifier[];

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>If the request is a Spot Instance request, the ID of the request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
   *             is enabled.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The reason for the most recent state transition.</p>
   */
  StateReason?: StateReason;

  /**
   * <p>Any tags assigned to the instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The virtualization type of the instance.</p>
   */
  VirtualizationType?: VirtualizationType | string;

  /**
   * <p>The CPU options for the instance.</p>
   */
  CpuOptions?: CpuOptions;

  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecificationResponse;

  /**
   * <p>Indicates whether the instance is enabled for hibernation.</p>
   */
  HibernationOptions?: HibernationOptions;

  /**
   * <p>The license configurations for the instance.</p>
   */
  Licenses?: LicenseConfiguration[];

  /**
   * <p>The metadata options for the instance.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsResponse;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  EnclaveOptions?: EnclaveOptions;

  /**
   * <p>The boot mode of the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>The platform details value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI
   *                 billing information fields</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  PlatformDetails?: string;

  /**
   * <p>The usage operation value for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html">AMI billing information fields</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   */
  UsageOperation?: string;

  /**
   * <p>The time that the usage operation was last updated.</p>
   */
  UsageOperationUpdateTime?: Date;

  /**
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsResponse;

  /**
   * <p>The IPv6 address assigned to the instance.</p>
   */
  Ipv6Address?: string;
}

export namespace Instance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch request for one or more instances, and includes
 *             owner, requester, and security group information that applies to all
 *             instances in the launch request.</p>
 */
export interface Reservation {
  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The instances.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the requester that launched the instances on your behalf (for example,
   *             Amazon Web Services Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>The ID of the reservation.</p>
   */
  ReservationId?: string;
}

export namespace Reservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
}

export interface DescribeInstancesResult {
  /**
   * <p>Information about the reservations.</p>
   */
  Reservations?: Reservation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstancesResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceStatusRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.code</code> - The code for the scheduled event
   *                         (<code>instance-reboot</code> | <code>system-reboot</code> |
   *                         <code>system-maintenance</code> | <code>instance-retirement</code> |
   *                         <code>instance-stop</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.description</code> - A description of the event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.instance-event-id</code> - The ID of the event whose date and time
   *                     you are modifying.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-after</code> - The latest end time for the scheduled event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-before</code> - The earliest start time for the scheduled
   *                     event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>event.not-before-deadline</code> - The deadline for starting the event
   *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-code</code> - The code for the instance state, as a
   *                     16-bit unsigned integer. The high byte is used for internal purposes and should
   *                     be ignored. The low byte is set based on the state represented. The valid values
   *                     are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
   *                     (stopping), and 80 (stopped).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-state-name</code> - The state of the instance
   *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
   *                         <code>terminated</code> | <code>stopping</code> |
   *                     <code>stopped</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-status.reachability</code> - Filters on instance status where
   *                     the name is <code>reachability</code> (<code>passed</code> | <code>failed</code>
   *                     | <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-status.status</code> - The status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>system-status.reachability</code> - Filters on system status where the
   *                     name is <code>reachability</code> (<code>passed</code> | <code>failed</code> |
   *                         <code>initializing</code> | <code>insufficient-data</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>system-status.status</code> - The system status of the instance
   *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
   *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The instance IDs.</p>
   *         <p>Default: Describes all your instances.</p>
   *         <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
   *             parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>When <code>true</code>, includes the health status for all instances. When
   *                 <code>false</code>, includes the health status for running instances only.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  IncludeAllInstances?: boolean;
}

export namespace DescribeInstanceStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceStatusRequest): any => ({
    ...obj,
  });
}

export type EventCode =
  | "instance-reboot"
  | "instance-retirement"
  | "instance-stop"
  | "system-maintenance"
  | "system-reboot";

/**
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface InstanceStatusEvent {
  /**
   * <p>The ID of the event.</p>
   */
  InstanceEventId?: string;

  /**
   * <p>The event code.</p>
   */
  Code?: EventCode | string;

  /**
   * <p>A description of the event.</p>
   *         <p>After a scheduled event is completed, it can still be described for up to a week. If
   *             the event has been completed, this description starts with the following text:
   *             [Completed].</p>
   */
  Description?: string;

  /**
   * <p>The latest scheduled end time for the event.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The earliest scheduled start time for the event.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The deadline for starting the event.</p>
   */
  NotBeforeDeadline?: Date;
}

export namespace InstanceStatusEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusEvent): any => ({
    ...obj,
  });
}

export type StatusName = "reachability";

export type StatusType = "failed" | "initializing" | "insufficient-data" | "passed";

/**
 * <p>Describes the instance status.</p>
 */
export interface InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired,
   *             this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date;

  /**
   * <p>The type of instance status.</p>
   */
  Name?: StatusName | string;

  /**
   * <p>The status.</p>
   */
  Status?: StatusType | string;
}

export namespace InstanceStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusDetails): any => ({
    ...obj,
  });
}

export type SummaryStatus = "impaired" | "initializing" | "insufficient-data" | "not-applicable" | "ok";

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   */
  Details?: InstanceStatusDetails[];

  /**
   * <p>The status.</p>
   */
  Status?: SummaryStatus | string;
}

export namespace InstanceStatusSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatus {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: InstanceStatusEvent[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
   *             that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: InstanceState;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such
   *             as impaired reachability.</p>
   */
  InstanceStatus?: InstanceStatusSummary;

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that
   *             support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: InstanceStatusSummary;
}

export namespace InstanceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatus): any => ({
    ...obj,
  });
}

export interface DescribeInstanceStatusResult {
  /**
   * <p>Information about the status of the instances.</p>
   */
  InstanceStatuses?: InstanceStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceStatusResult): any => ({
    ...obj,
  });
}

export type LocationType = "availability-zone" | "availability-zone-id" | "region";

export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>location</code> - This depends on the location type. For example, if the location type is
   *       <code>region</code> (default), the location is the Region code (for example, <code>us-east-2</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type. For example,
   *      <code>c5.2xlarge</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results
   *          can be seen by sending another request with the next token value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypeOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceTypeOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The instance types offered.</p>
 */
export interface InstanceTypeOffering {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The location type.</p>
   */
  LocationType?: LocationType | string;

  /**
   * <p>The identifier for the location. This depends on the location type. For example, if the location type is
   *     <code>region</code>, the location is the Region code (for example, <code>us-east-2</code>.)</p>
   */
  Location?: string;
}

export namespace InstanceTypeOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeOffering): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypeOfferingsResult {
  /**
   * <p>The instance types offered.</p>
   */
  InstanceTypeOfferings?: InstanceTypeOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypeOfferingsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceTypeOfferingsResult): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *          and provides an error response. If you have the required permissions, the error response is
   *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceTypes?: (_InstanceType | string)[];

  /**
   * <p>One or more filters. Filter names and values are case-sensitive.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-recovery-supported</code> - Indicates whether auto recovery is supported  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bare-metal</code> - Indicates whether it is a bare metal instance type  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>burstable-performance-supported</code> - Indicates whether it is a burstable
   *      performance instance type  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>current-generation</code> - Indicates whether this instance type is the latest
   *      generation instance type of an instance family  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps</code> - The baseline
   *                     bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-iops</code> - The baseline input/output storage
   *      operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.baseline-throughput-in-mbps</code> - The baseline
   *      throughput performance for an EBS-optimized instance type, in MB/s.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-bandwidth-in-mbps</code> - The maximum bandwidth
   *                     performance for an EBS-optimized instance type, in Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-iops</code> - The maximum input/output storage
   *                     operations per second for an EBS-optimized instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-info.maximum-throughput-in-mbps</code> - The maximum
   *      throughput performance for an EBS-optimized instance type, in MB/s.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.ebs-optimized-support</code> - Indicates whether the instance type is
   *      EBS-optimized (<code>supported</code> | <code>unsupported</code> |
   *      <code>default</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.encryption-support</code> - Indicates whether EBS encryption is supported
   *       (<code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-info.nvme-support</code> - Indicates whether non-volatile memory express (NVMe)
   *      is supported for EBS volumes (<code>required</code> | <code>supported</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>free-tier-eligible</code> - Indicates whether the instance type is eligible to use
   *      in the free tier  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hibernation-supported</code> - Indicates whether On-Demand hibernation is supported  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hypervisor</code> - The hypervisor (<code>nitro</code> | <code>xen</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.count</code> - The number of local disks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.size-in-gb</code> - The storage size of each instance storage disk, in
   *      GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.disk.type</code> - The storage technology for the local
   *      instance storage disks (<code>hdd</code> | <code>ssd</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.encryption-supported</code> - Indicates whether data is encrypted at rest
   *      (<code>required</code> | <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.nvme-support</code> - Indicates whether non-volatile memory
   *      express (NVMe) is supported for instance store (<code>required</code> | <code>supported</code> |
   *      <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-info.total-size-in-gb</code> - The total amount of storage available from all local
   *      instance storage, in GB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-storage-supported</code> - Indicates whether the instance type has local
   *      instance storage  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example <code>c5.2xlarge</code> or
   *      c5*).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>memory-info.size-in-mib</code> - The memory size.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.efa-info.maximum-efa-interfaces</code> - The maximum number of Elastic
   *      Fabric Adapters (EFAs) per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.efa-supported</code> - Indicates whether the instance type supports
   *      Elastic Fabric Adapter (EFA)  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ena-support</code> - Indicates whether Elastic Network Adapter (ENA) is
   *      supported or required (<code>required</code> | <code>supported</code> |
   *       <code>unsupported</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.encryption-in-transit-supported</code> - Indicates whether the instance type
   *      automatically encrypts in-transit traffic between instances  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv4-addresses-per-interface</code> - The maximum number of private IPv4 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-addresses-per-interface</code> - The maximum number of private IPv6 addresses per
   *      network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.ipv6-supported</code> - Indicates whether the instance type supports IPv6  (<code>true</code> | <code>false</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.maximum-network-interfaces</code> - The maximum number of network interfaces per instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-info.network-performance</code> - The network performance (for example, "25
   *      Gigabit").</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.supported-architecture</code> - The CPU architecture
   *       (<code>arm64</code> | <code>i386</code> | <code>x86_64</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>processor-info.sustained-clock-speed-in-ghz</code> - The CPU clock speed, in GHz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-boot-mode</code> - The boot mode (<code>legacy-bios</code> |
   *       <code>uefi</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-root-device-type</code> - The root device type (<code>ebs</code> |
   *       <code>instance-store</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-usage-class</code> - The usage class (<code>on-demand</code> |
   *       <code>spot</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supported-virtualization-type</code> - The virtualization type (<code>hvm</code> |
   *       <code>paravirtual</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-cores</code> - The default number of cores for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-threads-per-core</code> - The default number of threads per core for the instance
   *      type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.default-vcpus</code> - The default number of vCPUs for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-cores</code> - The number of cores that can be configured for the instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vcpu-info.valid-threads-per-core</code> - The number of threads per core that can be configured for the instance type.
   *         For example, "1" or "1,2".</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results
   *          can be seen by sending another request with the next token value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the optimized EBS performance for supported instance types.</p>
 */
export interface EbsOptimizedInfo {
  /**
   * <p>The baseline bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  BaselineBandwidthInMbps?: number;

  /**
   * <p>The baseline throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  BaselineThroughputInMBps?: number;

  /**
   * <p>The baseline input/output storage operations per seconds for an EBS-optimized instance type.</p>
   */
  BaselineIops?: number;

  /**
   * <p>The maximum bandwidth performance for an EBS-optimized instance type, in Mbps.</p>
   */
  MaximumBandwidthInMbps?: number;

  /**
   * <p>The maximum throughput performance for an EBS-optimized instance type, in MB/s.</p>
   */
  MaximumThroughputInMBps?: number;

  /**
   * <p>The maximum input/output storage operations per second for an EBS-optimized instance type.</p>
   */
  MaximumIops?: number;
}

export namespace EbsOptimizedInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsOptimizedInfo): any => ({
    ...obj,
  });
}

export type EbsOptimizedSupport = "default" | "supported" | "unsupported";

export type EbsEncryptionSupport = "supported" | "unsupported";

export enum EbsNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

/**
 * <p>Describes the Amazon EBS features supported by the instance type.</p>
 */
export interface EbsInfo {
  /**
   * <p>Indicates whether the instance type is Amazon EBS-optimized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized
   *     instances</a> in <i>Amazon EC2 User Guide</i>.</p>
   */
  EbsOptimizedSupport?: EbsOptimizedSupport | string;

  /**
   * <p>Indicates whether Amazon EBS encryption is supported.</p>
   */
  EncryptionSupport?: EbsEncryptionSupport | string;

  /**
   * <p>Describes the optimized EBS performance for the instance type.</p>
   */
  EbsOptimizedInfo?: EbsOptimizedInfo;

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EbsNvmeSupport | string;
}

export namespace EbsInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the FPGA accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace FpgaDeviceMemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGA accelerator for the instance type.</p>
 */
export interface FpgaDeviceInfo {
  /**
   * <p>The name of the FPGA accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the FPGA accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The count of FPGA accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory for the FPGA accelerator for the instance type.</p>
   */
  MemoryInfo?: FpgaDeviceMemoryInfo;
}

export namespace FpgaDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the FPGAs for the instance type.</p>
 */
export interface FpgaInfo {
  /**
   * <p>Describes the FPGAs for the instance type.</p>
   */
  Fpgas?: FpgaDeviceInfo[];

  /**
   * <p>The total memory of all FPGA accelerators for the instance type.</p>
   */
  TotalFpgaMemoryInMiB?: number;
}

export namespace FpgaInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FpgaInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory available to the GPU accelerator.</p>
 */
export interface GpuDeviceMemoryInfo {
  /**
   * <p>The size of the memory available to the GPU accelerator, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace GpuDeviceMemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuDeviceMemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuDeviceInfo {
  /**
   * <p>The name of the GPU accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the GPU accelerator.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The number of GPUs for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>Describes the memory available to the GPU accelerator.</p>
   */
  MemoryInfo?: GpuDeviceMemoryInfo;
}

export namespace GpuDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the GPU accelerators for the instance type.</p>
 */
export interface GpuInfo {
  /**
   * <p>Describes the GPU accelerators for the instance type.</p>
   */
  Gpus?: GpuDeviceInfo[];

  /**
   * <p>The total size of the memory for the GPU accelerators for the instance type, in MiB.</p>
   */
  TotalGpuMemoryInMiB?: number;
}

export namespace GpuInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GpuInfo): any => ({
    ...obj,
  });
}

export enum InstanceTypeHypervisor {
  NITRO = "nitro",
  XEN = "xen",
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceDeviceInfo {
  /**
   * <p>The number of Inference accelerators for the instance type.</p>
   */
  Count?: number;

  /**
   * <p>The name of the Inference accelerator.</p>
   */
  Name?: string;

  /**
   * <p>The manufacturer of the Inference accelerator.</p>
   */
  Manufacturer?: string;
}

export namespace InferenceDeviceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceDeviceInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Inference accelerators for the instance type.</p>
 */
export interface InferenceAcceleratorInfo {
  /**
   * <p>Describes the Inference accelerators for the instance type.</p>
   */
  Accelerators?: InferenceDeviceInfo[];
}

export namespace InferenceAcceleratorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceAcceleratorInfo): any => ({
    ...obj,
  });
}

export type DiskType = "hdd" | "ssd";

/**
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
  /**
   * <p>The size of the disk in GB.</p>
   */
  SizeInGB?: number;

  /**
   * <p>The number of disks with this configuration.</p>
   */
  Count?: number;

  /**
   * <p>The type of disk.</p>
   */
  Type?: DiskType | string;
}

export namespace DiskInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskInfo): any => ({
    ...obj,
  });
}

export enum InstanceStorageEncryptionSupport {
  required = "required",
  unsupported = "unsupported",
}

export enum EphemeralNvmeSupport {
  REQUIRED = "required",
  SUPPORTED = "supported",
  UNSUPPORTED = "unsupported",
}

/**
 * <p>Describes the instance store features that are supported by the instance type.</p>
 */
export interface InstanceStorageInfo {
  /**
   * <p>The total size of the disks, in GB.</p>
   */
  TotalSizeInGB?: number;

  /**
   * <p>Describes the disks that are available for the instance type.</p>
   */
  Disks?: DiskInfo[];

  /**
   * <p>Indicates whether non-volatile memory express (NVMe) is supported.</p>
   */
  NvmeSupport?: EphemeralNvmeSupport | string;

  /**
   * <p>Indicates whether data is encrypted at rest.</p>
   */
  EncryptionSupport?: InstanceStorageEncryptionSupport | string;
}

export namespace InstanceStorageInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStorageInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the memory for the instance type.</p>
 */
export interface MemoryInfo {
  /**
   * <p>The size of the memory, in MiB.</p>
   */
  SizeInMiB?: number;
}

export namespace MemoryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemoryInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
 */
export interface EfaInfo {
  /**
   * <p>The maximum number of Elastic Fabric Adapters for the instance type.</p>
   */
  MaximumEfaInterfaces?: number;
}

export namespace EfaInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EfaInfo): any => ({
    ...obj,
  });
}

export type EnaSupport = "required" | "supported" | "unsupported";

/**
 * <p>Describes the network card support of the instance type.</p>
 */
export interface NetworkCardInfo {
  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The network performance of the network card.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the network card.</p>
   */
  MaximumNetworkInterfaces?: number;
}

export namespace NetworkCardInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkCardInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the networking features of the instance type.</p>
 */
export interface NetworkInfo {
  /**
   * <p>The network performance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p>The maximum number of network interfaces for the instance type.</p>
   */
  MaximumNetworkInterfaces?: number;

  /**
   * <p>The maximum number of physical network cards that can be allocated to the instance.</p>
   */
  MaximumNetworkCards?: number;

  /**
   * <p>The index of the default network card, starting at 0.</p>
   */
  DefaultNetworkCardIndex?: number;

  /**
   * <p>Describes the network cards for the instance type.</p>
   */
  NetworkCards?: NetworkCardInfo[];

  /**
   * <p>The maximum number of IPv4 addresses per network interface.</p>
   */
  Ipv4AddressesPerInterface?: number;

  /**
   * <p>The maximum number of IPv6 addresses per network interface.</p>
   */
  Ipv6AddressesPerInterface?: number;

  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Supported?: boolean;

  /**
   * <p>Indicates whether Elastic Network Adapter (ENA) is supported.</p>
   */
  EnaSupport?: EnaSupport | string;

  /**
   * <p>Indicates whether Elastic Fabric Adapter (EFA) is supported.</p>
   */
  EfaSupported?: boolean;

  /**
   * <p>Describes the Elastic Fabric Adapters for the instance type.</p>
   */
  EfaInfo?: EfaInfo;

  /**
   * <p>Indicates whether the instance type automatically encrypts in-transit traffic between instances.</p>
   */
  EncryptionInTransitSupported?: boolean;
}

export namespace NetworkInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInfo): any => ({
    ...obj,
  });
}

export type PlacementGroupStrategy = "cluster" | "partition" | "spread";

/**
 * <p>Describes the placement group support of the instance type.</p>
 */
export interface PlacementGroupInfo {
  /**
   * <p>The supported placement group types.</p>
   */
  SupportedStrategies?: (PlacementGroupStrategy | string)[];
}

export namespace PlacementGroupInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementGroupInfo): any => ({
    ...obj,
  });
}

export type ArchitectureType = "arm64" | "i386" | "x86_64" | "x86_64_mac";

/**
 * <p>Describes the processor used by the instance type.</p>
 */
export interface ProcessorInfo {
  /**
   * <p>The architectures supported by the instance type.</p>
   */
  SupportedArchitectures?: (ArchitectureType | string)[];

  /**
   * <p>The speed of the processor, in GHz.</p>
   */
  SustainedClockSpeedInGhz?: number;
}

export namespace ProcessorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessorInfo): any => ({
    ...obj,
  });
}

export type BootModeType = "legacy-bios" | "uefi";

export type RootDeviceType = "ebs" | "instance-store";

export type UsageClassType = "on-demand" | "spot";

/**
 * <p>Describes the vCPU configurations for the instance type.</p>
 */
export interface VCpuInfo {
  /**
   * <p>The default number of vCPUs for the instance type.</p>
   */
  DefaultVCpus?: number;

  /**
   * <p>The default number of cores for the instance type.</p>
   */
  DefaultCores?: number;

  /**
   * <p>The default number of threads per core for the instance type.</p>
   */
  DefaultThreadsPerCore?: number;

  /**
   * <p>The valid number of cores that can be configured for the instance type.</p>
   */
  ValidCores?: number[];

  /**
   * <p>The valid number of threads per core that can be configured for the instance type. </p>
   */
  ValidThreadsPerCore?: number[];
}

export namespace VCpuInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VCpuInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the instance type.</p>
 */
export interface InstanceTypeInfo {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>Indicates whether the instance type is current generation.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Indicates whether the instance type is eligible for the free tier.</p>
   */
  FreeTierEligible?: boolean;

  /**
   * <p>Indicates whether the instance type is offered for spot or On-Demand.</p>
   */
  SupportedUsageClasses?: (UsageClassType | string)[];

  /**
   * <p>The supported root device types.</p>
   */
  SupportedRootDeviceTypes?: (RootDeviceType | string)[];

  /**
   * <p>The supported virtualization types.</p>
   */
  SupportedVirtualizationTypes?: (VirtualizationType | string)[];

  /**
   * <p>Indicates whether the instance is a bare metal instance type.</p>
   */
  BareMetal?: boolean;

  /**
   * <p>The hypervisor for the instance type.</p>
   */
  Hypervisor?: InstanceTypeHypervisor | string;

  /**
   * <p>Describes the processor.</p>
   */
  ProcessorInfo?: ProcessorInfo;

  /**
   * <p>Describes the vCPU configurations for the instance type.</p>
   */
  VCpuInfo?: VCpuInfo;

  /**
   * <p>Describes the memory for the instance type.</p>
   */
  MemoryInfo?: MemoryInfo;

  /**
   * <p>Indicates whether instance storage is supported.</p>
   */
  InstanceStorageSupported?: boolean;

  /**
   * <p>Describes the instance storage for the instance type.</p>
   */
  InstanceStorageInfo?: InstanceStorageInfo;

  /**
   * <p>Describes the Amazon EBS settings for the instance type.</p>
   */
  EbsInfo?: EbsInfo;

  /**
   * <p>Describes the network settings for the instance type.</p>
   */
  NetworkInfo?: NetworkInfo;

  /**
   * <p>Describes the GPU accelerator settings for the instance type.</p>
   */
  GpuInfo?: GpuInfo;

  /**
   * <p>Describes the FPGA accelerator settings for the instance type.</p>
   */
  FpgaInfo?: FpgaInfo;

  /**
   * <p>Describes the placement group settings for the instance type.</p>
   */
  PlacementGroupInfo?: PlacementGroupInfo;

  /**
   * <p>Describes the Inference accelerator settings for the instance type.</p>
   */
  InferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * <p>Indicates whether On-Demand hibernation is supported.</p>
   */
  HibernationSupported?: boolean;

  /**
   * <p>Indicates whether the instance type is a burstable performance instance type.</p>
   */
  BurstablePerformanceSupported?: boolean;

  /**
   * <p>Indicates whether Dedicated Hosts are supported on the instance type.</p>
   */
  DedicatedHostsSupported?: boolean;

  /**
   * <p>Indicates whether auto recovery is supported.</p>
   */
  AutoRecoverySupported?: boolean;

  /**
   * <p>The supported boot modes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *    <i>Amazon EC2 User Guide</i>.</p>
   */
  SupportedBootModes?: (BootModeType | string)[];
}

export namespace InstanceTypeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeInfo): any => ({
    ...obj,
  });
}

export interface DescribeInstanceTypesResult {
  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InstanceTypes?: InstanceTypeInfo[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstanceTypesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceTypesResult): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>attachment.state</code> - The current state of the attachment between the gateway
   *                     and the VPC (<code>available</code>). Present only if a VPC is attached.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>attachment.vpc-id</code> - The ID of an attached VPC.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>internet-gateway-id</code> - The ID of the Internet gateway.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the internet gateway.</p>
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
   * <p>One or more internet gateway IDs.</p>
   *         <p>Default: Describes all your internet gateways.</p>
   */
  InternetGatewayIds?: string[];

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

export namespace DescribeInternetGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeInternetGatewaysResult {
  /**
   * <p>Information about one or more internet gateways.</p>
   */
  InternetGateways?: InternetGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeInternetGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInternetGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeIpamPoolsRequest {
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
   * <p>The IDs of the IPAM pools you would like information on.</p>
   */
  IpamPoolIds?: string[];
}

export namespace DescribeIpamPoolsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamPoolsRequest): any => ({
    ...obj,
  });
}

export interface DescribeIpamPoolsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the IPAM pools.</p>
   */
  IpamPools?: IpamPool[];
}

export namespace DescribeIpamPoolsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamPoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeIpamsRequest {
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
   * <p>The IDs of the IPAMs you want information on.</p>
   */
  IpamIds?: string[];
}

export namespace DescribeIpamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamsRequest): any => ({
    ...obj,
  });
}

export interface DescribeIpamsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the IPAMs.</p>
   */
  Ipams?: Ipam[];
}

export namespace DescribeIpamsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamsResult): any => ({
    ...obj,
  });
}

export interface DescribeIpamScopesRequest {
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
   * <p>The IDs of the scopes you want information on.</p>
   */
  IpamScopeIds?: string[];
}

export namespace DescribeIpamScopesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamScopesRequest): any => ({
    ...obj,
  });
}

export interface DescribeIpamScopesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The scopes you want information on.</p>
   */
  IpamScopes?: IpamScope[];
}

export namespace DescribeIpamScopesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpamScopesResult): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsRequest {
  /**
   * <p>The IDs of the IPv6 address pools.</p>
   */
  PoolIds?: string[];

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
}

export namespace DescribeIpv6PoolsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr?: string;
}

export namespace PoolCidrBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PoolCidrBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address pool.</p>
 */
export interface Ipv6Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>The description for the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   */
  PoolCidrBlocks?: PoolCidrBlock[];

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace Ipv6Pool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6Pool): any => ({
    ...obj,
  });
}

export interface DescribeIpv6PoolsResult {
  /**
   * <p>Information about the IPv6 address pools.</p>
   */
  Ipv6Pools?: Ipv6Pool[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeIpv6PoolsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIpv6PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *      		        <p>
   *      			          <code>key-pair-id</code> - The ID of the key pair.</p>
   *      	      </li>
   *             <li>
   *                <p>
   *                   <code>fingerprint</code> - The fingerprint of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair.</p>
   *             </li>
   *             <li>
   *      		        <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *      	      </li>
   *             <li>
   *      		        <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *      	      </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The key pair names.</p>
   *          <p>Default: Describes all of your key pairs.</p>
   */
  KeyNames?: string[];

  /**
   * <p>The IDs of the key pairs.</p>
   */
  KeyPairIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace DescribeKeyPairsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyPairsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.
   *                </p>
   *            </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which
   *                    is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *            </li>
   *          </ul>
   *          <p>If you used <a>ImportKeyPair</a> to provide Amazon Web Services the public key:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   *            </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256
   *                     digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *            </li>
   *          </ul>
   */
  KeyFingerprint?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The type of key pair.</p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

export namespace KeyPairInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPairInfo): any => ({
    ...obj,
  });
}

export interface DescribeKeyPairsResult {
  /**
   * <p>Information about the key pairs.</p>
   */
  KeyPairs?: KeyPairInfo[];
}

export namespace DescribeKeyPairsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyPairsResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more launch template IDs.</p>
   */
  LaunchTemplateIds?: string[];

  /**
   * <p>One or more launch template names.</p>
   */
  LaunchTemplateNames?: string[];

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>create-time</code> - The time the launch template was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>launch-template-name</code> - The name of the launch template.</p>
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
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;
}

export namespace DescribeLaunchTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplatesResult {
  /**
   * <p>Information about the launch templates.</p>
   */
  LaunchTemplates?: LaunchTemplate[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLaunchTemplatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLaunchTemplatesResult): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. To describe one or more versions of a specified launch
   *             template, you must specify either the launch template ID or the launch template name in
   *             the request. To describe all the latest or default launch template versions in your
   *             account, you must omit this parameter.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. To describe one or more versions of a specified
   *             launch template, you must specify either the launch template ID or the launch template
   *             name in the request. To describe all the latest or default launch template versions in
   *             your account, you must omit this parameter.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>One or more versions of the launch template. Valid values depend on whether you are describing a specified launch template (by ID or name) or all launch templates in your account.</p>
   *             <p>To describe one or more versions of a specified launch template, valid values are <code>$Latest</code>, <code>$Default</code>, and numbers.</p>
   *             <p>To describe all launch templates in your account that are defined as the latest
   *             version, the valid value is <code>$Latest</code>. To describe all launch templates in
   *             your account that are defined as the default version, the valid value is
   *                 <code>$Default</code>. You can specify <code>$Latest</code> and
   *                 <code>$Default</code> in the same call. You cannot specify numbers.</p>
   */
  Versions?: string[];

  /**
   * <p>The version number after which to describe launch template versions.</p>
   */
  MinVersion?: string;

  /**
   * <p>The version number up to which to describe launch template versions.</p>
   */
  MaxVersion?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template version was created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ebs-optimized</code> - A boolean that indicates whether the instance
   *                     is optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>http-endpoint</code> - Indicates whether the HTTP metadata endpoint on
   *                     your instances is enabled (<code>enabled</code> | <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>http-protocol-ipv4</code> - Indicates whether the IPv4 endpoint for the
   *                     instance metadata service is enabled (<code>enabled</code> |
   *                         <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>host-resource-group-arn</code> - The ARN of the host resource group in
   *                     which to launch the instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>http-tokens</code> - The state of token usage for your instance metadata
   *                     requests (<code>optional</code> | <code>required</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>iam-instance-profile</code> - The ARN of the IAM instance
   *                     profile.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-default-version</code> - A boolean that indicates whether the
   *                     launch template version is the default version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>license-configuration-arn</code> - The ARN of the license
   *                     configuration.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>network-card-index</code> - The index of the network card.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ram-disk-id</code> - The RAM disk ID.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace DescribeLaunchTemplateVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions.</p>
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLaunchTemplateVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLaunchTemplateVersionsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the local gateway route tables.</p>
   */
  LocalGatewayRouteTableIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of a local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the local gateway route table.</p>
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

export namespace DescribeLocalGatewayRouteTablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesRequest): any => ({
    ...obj,
  });
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
}

export namespace LocalGatewayRouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTable): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * <p>Information about the local gateway route tables.</p>
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTablesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTablesResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
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

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
  ): any => ({
    ...obj,
  });
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

export namespace LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVirtualInterfaceGroupAssociation): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
  ): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-vpc-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC.</p>
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

export namespace DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayRouteTableVpcAssociationsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-id</code> - The ID of the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-association-id</code> - The ID of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
   *             </li>
   *          </ul>
   */
  LocalGatewayIds?: string[];

  /**
   * <p>One or more filters.</p>
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

export namespace DescribeLocalGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway.</p>
 */
export interface LocalGateway {
  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the local gateway.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the local gateway.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGateway): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewaysResult {
  /**
   * <p>Information about the local gateways.</p>
   */
  LocalGateways?: LocalGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * <p>The IDs of the virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
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

export namespace DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfaceGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface group.</p>
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface group.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterfaceGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterfaceGroup): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * <p>The virtual interface groups.</p>
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfaceGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * <p>The IDs of the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaceIds?: string[];

  /**
   * <p>One or more filters.</p>
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

export namespace DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a local gateway virtual interface.</p>
 */
export interface LocalGatewayVirtualInterface {
  /**
   * <p>The ID of the virtual interface.</p>
   */
  LocalGatewayVirtualInterfaceId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VLAN.</p>
   */
  Vlan?: number;

  /**
   * <p>The local address.</p>
   */
  LocalAddress?: string;

  /**
   * <p>The peer address.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) of the local gateway.</p>
   */
  LocalBgpAsn?: number;

  /**
   * <p>The peer BGP ASN.</p>
   */
  PeerBgpAsn?: number;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the virtual interface.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayVirtualInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayVirtualInterface): any => ({
    ...obj,
  });
}

export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * <p>Information about the virtual interfaces.</p>
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLocalGatewayVirtualInterfacesResult): any => ({
    ...obj,
  });
}

export interface DescribeManagedPrefixListsRequest {
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
   *                <p>
   *                   <code>owner-id</code> - The ID of the prefix list owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code> - The name of the prefix list.</p>
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
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export namespace DescribeManagedPrefixListsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeManagedPrefixListsRequest): any => ({
    ...obj,
  });
}

export interface DescribeManagedPrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the prefix lists.</p>
   */
  PrefixLists?: ManagedPrefixList[];
}

export namespace DescribeManagedPrefixListsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeManagedPrefixListsResult): any => ({
    ...obj,
  });
}

export interface DescribeMovingAddressesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
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
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more Elastic IP addresses.</p>
   */
  PublicIps?: string[];
}

export namespace DescribeMovingAddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMovingAddressesRequest): any => ({
    ...obj,
  });
}

export type MoveStatus = "movingToVpc" | "restoringToClassic";

/**
 * <p>Describes the status of a moving Elastic IP address.</p>
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.</p>
   */
  MoveStatus?: MoveStatus | string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export namespace MovingAddressStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MovingAddressStatus): any => ({
    ...obj,
  });
}

export interface DescribeMovingAddressesResult {
  /**
   * <p>The status for each Elastic IP address.</p>
   */
  MovingAddressStatuses?: MovingAddressStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeMovingAddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMovingAddressesResult): any => ({
    ...obj,
  });
}

export interface DescribeNatGatewaysRequest {
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
   *                   <code>nat-gateway-id</code> - The ID of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the NAT gateway (<code>pending</code> |
   *               <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet in which the NAT gateway resides.</p>
   *             </li>
   *             <li>
   * 		             <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   * 		          </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code> - The ID of the VPC in which the NAT gateway resides.</p>
   *             </li>
   *          </ul>
   */
  Filter?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more NAT gateway IDs.</p>
   */
  NatGatewayIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNatGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNatGatewaysRequest): any => ({
    ...obj,
  });
}

export interface DescribeNatGatewaysResult {
  /**
   * <p>Information about the NAT gateways.</p>
   */
  NatGateways?: NatGateway[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNatGatewaysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNatGatewaysResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkAclsRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The ID of an association ID for the ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>entry.rule-number</code> - The number of an entry (in other words, rule) in
   *                     the set of ACL entries.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-acl-id</code> - The ID of the network ACL.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the network ACL.</p>
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
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network ACL.</p>
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
   * <p>One or more network ACL IDs.</p>
   * 		       <p>Default: Describes all your network ACLs.</p>
   */
  NetworkAclIds?: string[];

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

export namespace DescribeNetworkAclsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkAclsRequest): any => ({
    ...obj,
  });
}

export interface DescribeNetworkAclsResult {
  /**
   * <p>Information about one or more network ACLs.</p>
   */
  NetworkAcls?: NetworkAcl[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkAclsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkAclsResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * <p>The IDs of the Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[];

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or after this time.</p>
   */
  AnalysisStartTimeBegin?: Date;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or before this time.</p>
   */
  AnalysisStartTimeEnd?: Date;

  /**
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

export namespace DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAccessScopeAnalysesRequest): any => ({
    ...obj,
  });
}

export enum FindingsFound {
  false = "false",
  true = "true",
  unknown = "unknown",
}

export type AnalysisStatus = "failed" | "running" | "succeeded";

/**
 * <p>Describes a Network Access Scope analysis.</p>
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisArn?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>The analysis start date.</p>
   */
  StartDate?: Date;

  /**
   * <p>The analysis end date.</p>
   */
  EndDate?: Date;

  /**
   * <p>Indicates whether there are findings.</p>
   */
  FindingsFound?: FindingsFound | string;

  /**
   * <p>The number of network interfaces analyzed.</p>
   */
  AnalyzedEniCount?: number;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAccessScopeAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAccessScopeAnalysis): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * <p>The Network Access Scope analyses.</p>
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAccessScopeAnalysesResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * <p>The IDs of the Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopeIds?: string[];

  /**
   * <p>There are no supported filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

export namespace DescribeNetworkInsightsAccessScopesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAccessScopesRequest): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * <p>The Network Access Scopes.</p>
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsAccessScopesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAccessScopesResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   */
  NetworkInsightsAnalysisIds?: string[];

  /**
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The time when the network insights analyses started.</p>
   */
  AnalysisStartTime?: Date;

  /**
   * <p>The time when the network insights analyses ended.</p>
   */
  AnalysisEndTime?: Date;

  /**
   * <p>The filters. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>PathFound - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>Status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

export namespace DescribeNetworkInsightsAnalysesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAnalysesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer listener.</p>
 */
export interface AnalysisLoadBalancerListener {
  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  LoadBalancerPort?: number;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   */
  InstancePort?: number;
}

export namespace AnalysisLoadBalancerListener {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerListener): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a load balancer target.</p>
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * <p>The IP address.</p>
   */
  Address?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instance.</p>
   */
  Instance?: AnalysisComponent;

  /**
   * <p>The port on which the target is listening.</p>
   */
  Port?: number;
}

export namespace AnalysisLoadBalancerTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisLoadBalancerTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
 */
export interface Explanation {
  /**
   * <p>The network ACL.</p>
   */
  Acl?: AnalysisComponent;

  /**
   * <p>The network ACL rule.</p>
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   */
  Address?: string;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   */
  Addresses?: string[];

  /**
   * <p>The resource to which the component is attached.</p>
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The CIDR ranges.</p>
   */
  Cidrs?: string[];

  /**
   * <p>The component.</p>
   */
  Component?: AnalysisComponent;

  /**
   * <p>The customer gateway.</p>
   */
  CustomerGateway?: AnalysisComponent;

  /**
   * <p>The destination.</p>
   */
  Destination?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The direction. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   */
  Direction?: string;

  /**
   * <p>The explanation code.</p>
   */
  ExplanationCode?: string;

  /**
   * <p>The route table.</p>
   */
  IngressRouteTable?: AnalysisComponent;

  /**
   * <p>The internet gateway.</p>
   */
  InternetGateway?: AnalysisComponent;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;

  /**
   * <p>The listener port of the load balancer.</p>
   */
  LoadBalancerListenerPort?: number;

  /**
   * <p>The target.</p>
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;

  /**
   * <p>The target group.</p>
   */
  LoadBalancerTargetGroup?: AnalysisComponent;

  /**
   * <p>The target groups.</p>
   */
  LoadBalancerTargetGroups?: AnalysisComponent[];

  /**
   * <p>The target port.</p>
   */
  LoadBalancerTargetPort?: number;

  /**
   * <p>The load balancer listener.</p>
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The missing component.</p>
   */
  MissingComponent?: string;

  /**
   * <p>The NAT gateway.</p>
   */
  NatGateway?: AnalysisComponent;

  /**
   * <p>The network interface.</p>
   */
  NetworkInterface?: AnalysisComponent;

  /**
   * <p>The packet field.</p>
   */
  PacketField?: string;

  /**
   * <p>The VPC peering connection.</p>
   */
  VpcPeeringConnection?: AnalysisComponent;

  /**
   * <p>The port.</p>
   */
  Port?: number;

  /**
   * <p>The port ranges.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The prefix list.</p>
   */
  PrefixList?: AnalysisComponent;

  /**
   * <p>The protocols.</p>
   */
  Protocols?: string[];

  /**
   * <p>The route table route.</p>
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The route table.</p>
   */
  RouteTable?: AnalysisComponent;

  /**
   * <p>The security group.</p>
   */
  SecurityGroup?: AnalysisComponent;

  /**
   * <p>The security group rule.</p>
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: AnalysisComponent[];

  /**
   * <p>The source VPC.</p>
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The state.</p>
   */
  State?: string;

  /**
   * <p>The subnet.</p>
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The route table for the subnet.</p>
   */
  SubnetRouteTable?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The VPC endpoint.</p>
   */
  VpcEndpoint?: AnalysisComponent;

  /**
   * <p>The VPN connection.</p>
   */
  VpnConnection?: AnalysisComponent;

  /**
   * <p>The VPN gateway.</p>
   */
  VpnGateway?: AnalysisComponent;
}

export namespace Explanation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Explanation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network insights analysis.</p>
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisArn?: string;

  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the Amazon Web Services resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>The time the analysis started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The status of the network insights analysis.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The warning message.</p>
   */
  WarningMessage?: string;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   */
  NetworkPathFound?: boolean;

  /**
   * <p>The components in the path from source to destination.</p>
   */
  ForwardPathComponents?: PathComponent[];

  /**
   * <p>The components in the path from destination to source.</p>
   */
  ReturnPathComponents?: PathComponent[];

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   */
  Explanations?: Explanation[];

  /**
   * <p>Potential intermediate components.</p>
   */
  AlternatePathHints?: AlternatePathHint[];

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsAnalysis): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * <p>Information about the network insights analyses.</p>
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsAnalysesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsAnalysesResult): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsPathsRequest {
  /**
   * <p>The IDs of the paths.</p>
   */
  NetworkInsightsPathIds?: string[];

  /**
   * <p>The filters. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>Destination - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>DestinationPort - The destination port.</p>
   *             </li>
   *             <li>
   *                <p>Name - The path name.</p>
   *             </li>
   *             <li>
   *                <p>Protocol - The protocol.</p>
   *             </li>
   *             <li>
   *                <p>Source - The ID of the resource.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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

export namespace DescribeNetworkInsightsPathsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsPathsRequest): any => ({
    ...obj,
  });
}

export interface DescribeNetworkInsightsPathsResult {
  /**
   * <p>Information about the paths.</p>
   */
  NetworkInsightsPaths?: NetworkInsightsPath[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInsightsPathsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInsightsPathsResult): any => ({
    ...obj,
  });
}

export type NetworkInterfaceAttribute = "attachment" | "description" | "groupSet" | "sourceDestCheck";

/**
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * <p>The attribute of the network interface. This parameter is required.</p>
   */
  Attribute?: NetworkInterfaceAttribute | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace DescribeNetworkInterfaceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The description of the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The security groups associated with the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;
}

export namespace DescribeNetworkInterfaceAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfaceAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * <p>One or more network interface permission IDs.</p>
   */
  NetworkInterfacePermissionIds?: string[];

  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> - The ID of the
   * 				permission.</p>
   *             </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of
   * 					the network interface.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The Amazon Web Services account ID.</p>
   * 			         </li>
   *             <li>
   * 			            <p>
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Service.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>network-interface-permission.permission</code> - The type of
   * 					permission (<code>INSTANCE-ATTACH</code> |
   * 					<code>EIP-ASSOCIATE</code>).</p>
   * 			         </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results,
   * 			make another call with the returned <code>NextToken</code> value. If this parameter is not specified, up to 50 results are returned by default.</p>
   */
  MaxResults?: number;
}

export namespace DescribeNetworkInterfacePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * <p>The network interface permissions.</p>
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInterfacePermissionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacePermissionsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * <p>One or more filters.</p>
   * 		       <ul>
   *             <li>
   * 		             <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the primary
   *                     IP address associated with the network interface. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned when
   *                     the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.ip-owner-id</code> - The owner of the Elastic IP address
   *                     (IPv4) associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>association.public-ip</code> - The address of the Elastic IP address
   *                     (IPv4) bound to the network interface.</p>
   * 		          </li>
   *             <li>
   * 		 		          <p>
   *                   <code>association.public-dns-name</code> - The public DNS name for the network
   *                     interface (IPv4).</p>
   * 		 	        </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface attachment.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the attachment is deleted when an instance is terminated.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.device-index</code> - The device index to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to which the network interface is attached.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>attachment.status</code> - The status of the attachment (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>description</code> - The description of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>group-name</code> - The name of a security group associated with the network interface.</p>
   * 		          </li>
   *             <li>
   *                   <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with
   *                     the network interface.</p>
   *                </li>
   *             <li>
   * 		             <p>
   *                   <code>mac-address</code> - The MAC address of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>network-interface-id</code> - The ID of the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the network interface owner.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is being managed by an Amazon Web Service
   * 		               (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface performs source/destination checking.
   * 		            A value of <code>true</code> means checking is enabled, and <code>false</code> means checking is disabled.
   * 		            The value must be <code>false</code> for the network interface to perform network address translation (NAT) in your VPC. </p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>status</code> - The status of the network interface. If the network interface is not attached to an instance, the status is <code>available</code>;
   * 		            if a network interface is attached to an instance the status is <code>in-use</code>.</p>
   * 		          </li>
   *             <li>
   * 		             <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network interface.</p>
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
   *             <li>
   * 		             <p>
   *                   <code>vpc-id</code> - The ID of the VPC for the network interface.</p>
   * 		          </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network interface IDs.</p>
   * 		       <p>Default: Describes all your network interfaces.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you
   *             can specify in a subsequent call to get the next set of results. You cannot specify this
   *             parameter and the network interface IDs parameter in the same request.</p>
   */
  MaxResults?: number;
}

export namespace DescribeNetworkInterfacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * <p>Information about one or more network interfaces.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeNetworkInterfacesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNetworkInterfacesResult): any => ({
    ...obj,
  });
}

export interface DescribePlacementGroupsRequest {
  /**
   * <p>The filters.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>group-name</code> - The name of the placement group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>group-arn</code> - The Amazon Resource Name (ARN) of the placement group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>state</code> - The state of the placement group (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>strategy</code> - The strategy of the placement group
   *                         (<code>cluster</code> | <code>spread</code> |
   *                     <code>partition</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
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
   * <p>The names of the placement groups.</p>
   *         <p>Default: Describes all your placement groups, or only those otherwise
   *             specified.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The IDs of the placement groups.</p>
   */
  GroupIds?: string[];
}

export namespace DescribePlacementGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePlacementGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribePlacementGroupsResult {
  /**
   * <p>Information about the placement groups.</p>
   */
  PlacementGroups?: PlacementGroup[];
}

export namespace DescribePlacementGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePlacementGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribePrefixListsRequest {
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
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more prefix list IDs.</p>
   */
  PrefixListIds?: string[];
}

export namespace DescribePrefixListsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePrefixListsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes prefixes for Amazon Web Services services.</p>
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the Amazon Web Service.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrefixList): any => ({
    ...obj,
  });
}

export interface DescribePrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: PrefixList[];
}

export namespace DescribePrefixListsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePrefixListsResult): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribePrincipalIdFormatRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrincipalIdFormat): any => ({
    ...obj,
  });
}

export interface DescribePrincipalIdFormatResult {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: PrincipalIdFormat[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribePrincipalIdFormatResult {
  /**
   * @internal
   */
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
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

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
}

export namespace DescribePublicIpv4PoolsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

export namespace PublicIpv4PoolRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicIpv4PoolRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv4 address pool.</p>
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;

  /**
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Any tags for the address pool.</p>
   */
  Tags?: Tag[];
}

export namespace PublicIpv4Pool {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePublicIpv4PoolsResult): any => ({
    ...obj,
  });
}

export interface DescribeRegionsRequest {
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

  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;
}

export namespace DescribeRegionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Region.</p>
 */
export interface Region {
  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

export namespace Region {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionsResult): any => ({
    ...obj,
  });
}

export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * <p>The ID of the root volume replacement task to view.</p>
   */
  ReplaceRootVolumeTaskIds?: string[];

  /**
   * <p>Filter to use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the root volume replacement task was created.</p>
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

export namespace DescribeReplaceRootVolumeTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReplaceRootVolumeTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace DescribeReplaceRootVolumeTasksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReplaceRootVolumeTasksResult): any => ({
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
   *                   <code>product-description</code> - The Reserved Instance product platform
   *           description. Instances that include <code>(Amazon VPC)</code> in the product platform
   *           description will only be displayed to EC2-Classic account holders and are for use with
   *           Amazon VPC (<code>Linux/UNIX</code> | <code>Linux/UNIX (Amazon VPC)</code> | <code>SUSE
   *             Linux</code> | <code>SUSE Linux (Amazon VPC)</code> | <code>Red Hat Enterprise
   *             Linux</code> | <code>Red Hat Enterprise Linux (Amazon VPC)</code> | <code>Red Hat
   *             Enterprise Linux with HA (Amazon VPC)</code> | <code>Windows</code> | <code>Windows
   *             (Amazon VPC)</code> | <code>Windows with SQL Server Standard</code> | <code>Windows with
   *             SQL Server Standard (Amazon VPC)</code> | <code>Windows with SQL Server Web</code> |
   *             <code>Windows with SQL Server Web (Amazon VPC)</code> | <code>Windows with SQL Server
   *             Enterprise</code> | <code>Windows with SQL Server Enterprise (Amazon
   *           VPC)</code>).</p>
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
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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

  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   */
  ReservedInstancesIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API
   * 			version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   * 			offering type.</p>
   */
  OfferingType?: OfferingTypeValues | string;
}

export namespace DescribeReservedInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
    ...obj,
  });
}

export type RIProductDescription = "Linux/UNIX" | "Linux/UNIX (Amazon VPC)" | "Windows" | "Windows (Amazon VPC)";

export type RecurringChargeFrequency = "Hourly";
