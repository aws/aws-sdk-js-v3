// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ApplianceModeSupportValue,
  CarrierGateway,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  DnsSupportValue,
  DynamicRoutingValue,
  InstanceEventWindowState,
  Ipv6SupportValue,
  ReservedInstancesListing,
  RouteTableAssociationState,
  Tag,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrustProviderType,
  UnsuccessfulItem,
  UserTrustProviderType,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
  VolumeAttachment,
  VpcAttachment,
  VpcPeeringConnection,
} from "./models_0";
import {
  ClientVpnEndpointStatus,
  ClientVpnRouteStatus,
  CoipCidr,
  CoipPool,
  Ec2InstanceConnectEndpoint,
  GatewayType,
  Ipam,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
  LocalGatewayRoute,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  ManagedPrefixList,
  PlacementGroup,
  Subnet,
  Tenancy,
  VolumeType,
  Vpc,
} from "./models_1";

/**
 * @public
 */
export interface CreatePlacementGroupResult {
  /**
   * @public
   * <p>Information about the placement group.</p>
   */
  PlacementGroup?: PlacementGroup;
}

/**
 * @public
 */
export interface CreatePublicIpv4PoolRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreatePublicIpv4PoolResult {
  /**
   * @public
   * <p>The ID of the public IPv4 pool.</p>
   */
  PoolId?: string;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * @public
   * <p>The ID of the instance for which to replace the root volume.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The ID of the snapshot from which to restore the replacement root volume. The
   *       specified snapshot must be a snapshot that you previously created from the original
   *       root volume.</p>
   *          <p>If you want to restore the replacement root volume to the initial launch state,
   *       or if you want to restore the replacement root volume from an AMI, omit this
   *       parameter.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *       If you do not specify a client token, a randomly generated token is used for the request
   *       to ensure idempotency. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The tags to apply to the root volume replacement task.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The ID of the AMI to use to restore the root volume. The specified AMI must have the
   *       same product code, billing information, architecture type, and virtualization type as
   *       that of the instance.</p>
   *          <p>If you want to restore the replacement volume from a specific snapshot, or if you want
   *       to restore it to its launch state, omit this parameter.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>Indicates whether to automatically delete the original root volume after the root volume
   *       replacement task completes. To delete the original root volume, specify <code>true</code>.
   *       If you choose to keep the original root volume after the replacement task completes, you must
   *       manually delete it when you no longer need it.</p>
   */
  DeleteReplacedRootVolume?: boolean;
}

/**
 * @public
 * @enum
 */
export const ReplaceRootVolumeTaskState = {
  failed: "failed",
  failed_detached: "failed-detached",
  failing: "failing",
  in_progress: "in-progress",
  pending: "pending",
  succeeded: "succeeded",
} as const;

/**
 * @public
 */
export type ReplaceRootVolumeTaskState = (typeof ReplaceRootVolumeTaskState)[keyof typeof ReplaceRootVolumeTaskState];

/**
 * @public
 * <p>Information about a root volume replacement task.</p>
 */
export interface ReplaceRootVolumeTask {
  /**
   * @public
   * <p>The ID of the root volume replacement task.</p>
   */
  ReplaceRootVolumeTaskId?: string;

  /**
   * @public
   * <p>The ID of the instance for which the root volume replacement task was created.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The state of the task. The task can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - the replacement volume is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-progress</code> - the original volume is being detached and the
   *           replacement volume is being attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>succeeded</code> - the replacement volume has been successfully attached
   *           to the instance and the instance is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing</code> - the replacement task is in the process of failing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - the replacement task has failed but the original root
   *           volume is still attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing-detached</code> - the replacement task is in the process of failing.
   *           The instance might have no root volume attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-detached</code> - the replacement task has failed and the instance
   *           has no root volume attached.</p>
   *             </li>
   *          </ul>
   */
  TaskState?: ReplaceRootVolumeTaskState;

  /**
   * @public
   * <p>The time the task was started.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The time the task completed.</p>
   */
  CompleteTime?: string;

  /**
   * @public
   * <p>The tags assigned to the task.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the AMI used to create the replacement root volume.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The ID of the snapshot used to create the replacement root volume.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>Indicates whether the original root volume is to be deleted after the root volume
   *       replacement task completes.</p>
   */
  DeleteReplacedRootVolume?: boolean;
}

/**
 * @public
 */
export interface CreateReplaceRootVolumeTaskResult {
  /**
   * @public
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask;
}

/**
 * @public
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceScheduleSpecification {
  /**
   * @public
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues;

  /**
   * @public
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * @public
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

/**
 * @public
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your
   * 				listings. This helps avoid duplicate listings. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * @public
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string | undefined;
}

/**
 * @public
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingResult {
  /**
   * @public
   * <p>Information about the Standard Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

/**
 * @public
 */
export interface CreateRestoreImageTaskRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  ObjectKey: string | undefined;

  /**
   * @public
   * <p>The name for the restored AMI. The name must be unique for AMIs in the Region for this
   *       account. If you do not provide a name, the new AMI gets the same name as the original
   *       AMI.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To
   *           tag the snapshots, the value for <code>ResourceType</code> must be <code>snapshot</code>. The
   *           same tag is applied to all of the snapshots that are created.</p>
   *             </li>
   *          </ul>
   */
  TagSpecifications?: TagSpecification[];

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
export interface CreateRestoreImageTaskResult {
  /**
   * @public
   * <p>The AMI ID.</p>
   */
  ImageId?: string;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * @public
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * @public
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the carrier gateway.</p>
   *          <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierGatewayId?: string;

  /**
   * @public
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The ID of the route table for the route.</p>
   */
  RouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

/**
 * @public
 */
export interface CreateRouteResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface CreateRouteTableRequest {
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
   * <p>The tags to assign to the route table.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociation {
  /**
   * @public
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * @public
   * <p>The ID of the association.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

/**
 * @public
 * <p>Describes a virtual private gateway propagating route.</p>
 */
export interface PropagatingVgw {
  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId?: string;
}

/**
 * @public
 * @enum
 */
export const RouteOrigin = {
  CreateRoute: "CreateRoute",
  CreateRouteTable: "CreateRouteTable",
  EnableVgwRoutePropagation: "EnableVgwRoutePropagation",
} as const;

/**
 * @public
 */
export type RouteOrigin = (typeof RouteOrigin)[keyof typeof RouteOrigin];

/**
 * @public
 * @enum
 */
export const RouteState = {
  active: "active",
  blackhole: "blackhole",
} as const;

/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * @public
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * @public
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * @public
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The ID of Amazon Web Services account that owns the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * @public
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * @public
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * @public
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>Describes how the route was created.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateRoute</code> - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: RouteOrigin;

  /**
   * @public
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: RouteState;

  /**
   * @public
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

/**
 * @public
 * <p>Describes a route table.</p>
 */
export interface RouteTable {
  /**
   * @public
   * <p>The associations between the route table and one or more subnets or a gateway.</p>
   */
  Associations?: RouteTableAssociation[];

  /**
   * @public
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: PropagatingVgw[];

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>The routes in the route table.</p>
   */
  Routes?: Route[];

  /**
   * @public
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the route table.</p>
   */
  OwnerId?: string;
}

/**
 * @public
 */
export interface CreateRouteTableResult {
  /**
   * @public
   * <p>Information about the route table.</p>
   */
  RouteTable?: RouteTable;
}

/**
 * @public
 */
export interface CreateSecurityGroupRequest {
  /**
   * @public
   * <p>A description for the security group.</p>
   *          <p>Constraints: Up to 255 characters in length</p>
   *          <p>Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The name of the security group.</p>
   *          <p>Constraints: Up to 255 characters in length. Cannot start with <code>sg-</code>.</p>
   *          <p>Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC. Required for a nondefault VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The tags to assign to the security group.</p>
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
 */
export interface CreateSecurityGroupResult {
  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The tags assigned to the security group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create a local
   *   	snapshot.</p>
   *          <ul>
   *             <li>
   *                <p>To create a snapshot of a volume in a Region, omit this parameter. The snapshot
   *   				is created in the same Region as the volume.</p>
   *             </li>
   *             <li>
   *                <p>To create a snapshot of a volume on an Outpost and store the snapshot in the
   *   				Region, omit this parameter. The snapshot is created in the Region for the
   *   				Outpost.</p>
   *             </li>
   *             <li>
   *                <p>To create a snapshot of a volume on an Outpost and store the snapshot on an
   *   			Outpost, specify the ARN of the destination Outpost. The snapshot must be created on
   *   			the same Outpost as the volume.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-snapshot">Create local snapshots from volumes on an Outpost</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon EBS volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the snapshot during creation.</p>
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
 * @enum
 */
export const SSEType = {
  none: "none",
  sse_ebs: "sse-ebs",
  sse_kms: "sse-kms",
} as const;

/**
 * @public
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];

/**
 * @public
 * @enum
 */
export const SnapshotState = {
  completed: "completed",
  error: "error",
  pending: "pending",
  recoverable: "recoverable",
  recovering: "recovering",
} as const;

/**
 * @public
 */
export type SnapshotState = (typeof SnapshotState)[keyof typeof SnapshotState];

/**
 * @public
 * @enum
 */
export const StorageTier = {
  archive: "archive",
  standard: "standard",
} as const;

/**
 * @public
 */
export type StorageTier = (typeof StorageTier)[keyof typeof StorageTier];

/**
 * @public
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier
   *       that corresponds to the data encryption key that was used to encrypt the original volume or
   *       snapshot copy. Because data encryption keys are inherited by volumes created from snapshots,
   *       and vice versa, if snapshots share the same data encryption key identifier, then they belong
   *       to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  DataEncryptionKeyId?: string;

  /**
   * @public
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the parent volume.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is
   *       created.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The snapshot state.</p>
   */
  State?: SnapshotState;

  /**
   * @public
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails
   *       (for example, if the proper Key Management Service (KMS) permissions are not obtained) this field displays error
   *       state details to help you diagnose why the error occurred. This parameter is only returned by
   *       <a>DescribeSnapshots</a>.</p>
   */
  StateMessage?: string;

  /**
   * @public
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any
   *       purpose.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>The Amazon Web Services owner alias, from an Amazon-maintained list (<code>amazon</code>). This is not
   *       the user-configured Amazon Web Services account alias set using the IAM console.</p>
   */
  OwnerAlias?: string;

  /**
   * @public
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   */
  StorageTier?: StorageTier;

  /**
   * @public
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SseType?: SSEType;
}

/**
 * @public
 * @enum
 */
export const CopyTagsFromSource = {
  volume: "volume",
} as const;

/**
 * @public
 */
export type CopyTagsFromSource = (typeof CopyTagsFromSource)[keyof typeof CopyTagsFromSource];

/**
 * @public
 * <p>The instance details to specify which volumes should be snapshotted.</p>
 */
export interface InstanceSpecification {
  /**
   * @public
   * <p>The instance to specify which volumes should be snapshotted.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Excludes the root volume from being snapshotted.</p>
   */
  ExcludeBootVolume?: boolean;

  /**
   * @public
   * <p>The IDs of the data (non-root) volumes to exclude from the multi-volume snapshot set.
   *       If you specify the ID of the root volume, the request fails. To exclude the root volume,
   *       use <b>ExcludeBootVolume</b>.</p>
   *          <p>You can specify up to 40 volume IDs per request.</p>
   */
  ExcludeDataVolumeIds?: string[];
}

/**
 * @public
 */
export interface CreateSnapshotsRequest {
  /**
   * @public
   * <p> A description propagated to every snapshot specified by the instance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the local
   *   		snapshots.</p>
   *          <ul>
   *             <li>
   *                <p>To create snapshots from an instance in a Region, omit this parameter. The
   *   				snapshots are created in the same Region as the instance.</p>
   *             </li>
   *             <li>
   *                <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				in the Region, omit this parameter. The snapshots are created in the Region
   *   				for the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				on an Outpost, specify the ARN of the destination Outpost. The snapshots must
   *   				be created on the same Outpost as the instance.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-multivol-snapshot">
   *   		Create multi-volume local snapshots from instances on an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Tags to apply to every snapshot specified by the instance.</p>
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
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   */
  CopyTagsFromSource?: CopyTagsFromSource;
}

/**
 * @public
 * <p>Information about a snapshot.</p>
 */
export interface SnapshotInfo {
  /**
   * @public
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all
   *     snapshots.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>Source volume from which this snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>Current state of the snapshot.</p>
   */
  State?: SnapshotState;

  /**
   * @public
   * <p>Size of the volume from which this snapshot was created.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the
   *     same request.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>Progress this snapshot has made towards completing.</p>
   */
  Progress?: string;

  /**
   * @public
   * <p>Account id used when creating this snapshot.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SseType?: SSEType;
}

/**
 * @public
 */
export interface CreateSnapshotsResult {
  /**
   * @public
   * <p>List of snapshots.</p>
   */
  Snapshots?: SnapshotInfo[];
}

/**
 * @public
 * <p>Contains the parameters for CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For
   *             more information about bucket names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Rules for bucket
   *                 naming</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The prefix for the data feed file names.</p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>Describes a Spot Instance state change.</p>
 */
export interface SpotInstanceStateFault {
  /**
   * @public
   * <p>The reason code for the Spot Instance state change.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The message for the Spot Instance state change.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const DatafeedSubscriptionState = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type DatafeedSubscriptionState = (typeof DatafeedSubscriptionState)[keyof typeof DatafeedSubscriptionState];

/**
 * @public
 * <p>Describes the data feed for a Spot Instance.</p>
 */
export interface SpotDatafeedSubscription {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The prefix for the data feed files.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The state of the Spot Instance data feed subscription.</p>
   */
  State?: DatafeedSubscriptionState;
}

/**
 * @public
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * @public
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

/**
 * @public
 * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html">Categorizing your storage using
 *         tags</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface S3ObjectTag {
  /**
   * @public
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and can be up to 128 Unicode characters in
   *       length. May not begin with <code>aws</code>:.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and can be up to 256 Unicode characters in
   *       length.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateStoreImageTaskRequest {
  /**
   * @public
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in
   *       the Region in which the request is being made. The AMI object appears in the bucket only after
   *       the upload task has completed. </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. </p>
   */
  S3ObjectTags?: S3ObjectTag[];

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
export interface CreateStoreImageTaskResult {
  /**
   * @public
   * <p>The name of the stored AMI object in the S3 bucket.</p>
   */
  ObjectKey?: string;
}

/**
 * @public
 */
export interface CreateSubnetRequest {
  /**
   * @public
   * <p>The tags to assign to the subnet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The Availability Zone or Local Zone for the subnet.</p>
   *          <p>Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we
   *           do not necessarily select a different zone for each subnet.</p>
   *          <p>To create a subnet in a Local Zone, set this value to the Local Zone ID, for example
   *           <code>us-west-2-lax-1a</code>. For information about the Regions that support Local Zones,
   *            see <a href="http://aws.amazon.com/about-aws/global-infrastructure/localzones/locations/">Local Zones locations</a>.</p>
   *          <p>To create a subnet in an Outpost, set this value to the Availability Zone for the
   *            Outpost and specify the Outpost ARN.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The AZ ID or the Local Zone ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * @public
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>.
   *            We modify the specified CIDR block to its canonical form; for example, if you specify
   *            <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   *          <p>This parameter is not supported for an IPv6 only subnet.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a
   *             /64 prefix length.</p>
   *          <p>This parameter is required for an IPv6 only subnet.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also
   *         specify the Availability Zone of the Outpost subnet.</p>
   */
  OutpostArn?: string;

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

  /**
   * @public
   * <p>Indicates whether to create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

/**
 * @public
 */
export interface CreateSubnetResult {
  /**
   * @public
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

/**
 * @public
 * @enum
 */
export const SubnetCidrReservationType = {
  explicit: "explicit",
  prefix: "prefix",
} as const;

/**
 * @public
 */
export type SubnetCidrReservationType = (typeof SubnetCidrReservationType)[keyof typeof SubnetCidrReservationType];

/**
 * @public
 */
export interface CreateSubnetCidrReservationRequest {
  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>The IPv4 or IPV6 CIDR range to reserve.</p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>The type of reservation. The reservation type determines how the reserved IP addresses are
   *             assigned to resources.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix</code> - Amazon Web Services assigns the reserved IP addresses to
   *                     network interfaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>explicit</code> - You assign the reserved IP addresses to network interfaces.</p>
   *             </li>
   *          </ul>
   */
  ReservationType: SubnetCidrReservationType | undefined;

  /**
   * @public
   * <p>The description to assign to the subnet CIDR reservation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to assign to the subnet CIDR reservation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 * <p>Describes a subnet CIDR reservation.</p>
 */
export interface SubnetCidrReservation {
  /**
   * @public
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId?: string;

  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The CIDR that has been reserved.</p>
   */
  Cidr?: string;

  /**
   * @public
   * <p>The type of reservation. </p>
   */
  ReservationType?: SubnetCidrReservationType;

  /**
   * @public
   * <p>The ID of the account that owns the subnet CIDR reservation. </p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The description assigned to the subnet CIDR reservation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags assigned to the subnet CIDR reservation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSubnetCidrReservationResult {
  /**
   * @public
   * <p>Information about the created subnet CIDR reservation.</p>
   */
  SubnetCidrReservation?: SubnetCidrReservation;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the resources, separated by spaces.</p>
   *          <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * @public
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRequest {
  /**
   * @public
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to assign to a Traffic Mirror filter.</p>
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Describes the Traffic Mirror port range.</p>
 */
export interface TrafficMirrorPortRange {
  /**
   * @public
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorRuleAction = {
  accept: "accept",
  reject: "reject",
} as const;

/**
 * @public
 */
export type TrafficMirrorRuleAction = (typeof TrafficMirrorRuleAction)[keyof typeof TrafficMirrorRuleAction];

/**
 * @public
 * @enum
 */
export const TrafficDirection = {
  egress: "egress",
  ingress: "ingress",
} as const;

/**
 * @public
 */
export type TrafficDirection = (typeof TrafficDirection)[keyof typeof TrafficDirection];

/**
 * @public
 * <p>Describes the Traffic Mirror rule.</p>
 */
export interface TrafficMirrorFilterRule {
  /**
   * @public
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;

  /**
   * @public
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * @public
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   */
  TrafficDirection?: TrafficDirection;

  /**
   * @public
   * <p>The rule number of the Traffic Mirror rule.</p>
   */
  RuleNumber?: number;

  /**
   * @public
   * <p>The action assigned to the Traffic Mirror rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction;

  /**
   * @public
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * @public
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRange;

  /**
   * @public
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRange;

  /**
   * @public
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * @public
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorNetworkService = {
  amazon_dns: "amazon-dns",
} as const;

/**
 * @public
 */
export type TrafficMirrorNetworkService =
  (typeof TrafficMirrorNetworkService)[keyof typeof TrafficMirrorNetworkService];

/**
 * @public
 * <p>Describes the Traffic Mirror filter.</p>
 */
export interface TrafficMirrorFilter {
  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * @public
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * @public
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * @public
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?: TrafficMirrorNetworkService[];

  /**
   * @public
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterResult {
  /**
   * @public
   * <p>Information about the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * @public
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * @public
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * @public
   * <p>The type of traffic.</p>
   */
  TrafficDirection: TrafficDirection | undefined;

  /**
   * @public
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number | undefined;

  /**
   * @public
   * <p>The action to take on the filtered traffic.</p>
   */
  RuleAction: TrafficMirrorRuleAction | undefined;

  /**
   * @public
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @public
   * <p>The source port range.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @public
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * @public
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string | undefined;

  /**
   * @public
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * @public
   * <p>The Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionRequest {
  /**
   * @public
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * @public
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   *          <p>For sessions with Network Load Balancer (NLB) Traffic Mirror targets the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   */
  PacketLength?: number;

  /**
   * @public
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number | undefined;

  /**
   * @public
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at
   *          random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * @public
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to assign to a Traffic Mirror session.</p>
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Describes a Traffic Mirror session.</p>
 */
export interface TrafficMirrorSession {
  /**
   * @public
   * <p>The ID for the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * @public
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * @public
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * @public
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   */
  PacketLength?: number;

  /**
   * @public
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * @public
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * @public
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags assigned to the Traffic Mirror session.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrafficMirrorSessionResult {
  /**
   * @public
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetRequest {
  /**
   * @public
   * <p>The network interface ID that is associated with the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * @public
   * <p>The description of the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to assign to the Traffic Mirror target.</p>
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorTargetType = {
  gateway_load_balancer_endpoint: "gateway-load-balancer-endpoint",
  network_interface: "network-interface",
  network_load_balancer: "network-load-balancer",
} as const;

/**
 * @public
 */
export type TrafficMirrorTargetType = (typeof TrafficMirrorTargetType)[keyof typeof TrafficMirrorTargetType];

/**
 * @public
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface TrafficMirrorTarget {
  /**
   * @public
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * @public
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * @public
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: TrafficMirrorTargetType;

  /**
   * @public
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the Gateway Load Balancer endpoint.</p>
   */
  GatewayLoadBalancerEndpointId?: string;
}

/**
 * @public
 */
export interface CreateTrafficMirrorTargetResult {
  /**
   * @public
   * <p>Information about the Traffic Mirror target.</p>
   */
  TrafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const AutoAcceptSharedAttachmentsValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type AutoAcceptSharedAttachmentsValue =
  (typeof AutoAcceptSharedAttachmentsValue)[keyof typeof AutoAcceptSharedAttachmentsValue];

/**
 * @public
 * @enum
 */
export const DefaultRouteTableAssociationValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DefaultRouteTableAssociationValue =
  (typeof DefaultRouteTableAssociationValue)[keyof typeof DefaultRouteTableAssociationValue];

/**
 * @public
 * @enum
 */
export const DefaultRouteTablePropagationValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DefaultRouteTablePropagationValue =
  (typeof DefaultRouteTablePropagationValue)[keyof typeof DefaultRouteTablePropagationValue];

/**
 * @public
 * @enum
 */
export const MulticastSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type MulticastSupportValue = (typeof MulticastSupportValue)[keyof typeof MulticastSupportValue];

/**
 * @public
 * @enum
 */
export const VpnEcmpSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type VpnEcmpSupportValue = (typeof VpnEcmpSupportValue)[keyof typeof VpnEcmpSupportValue];

/**
 * @public
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayRequestOptions {
  /**
   * @public
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   */
  AmazonSideAsn?: number;

  /**
   * @public
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;

  /**
   * @public
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;

  /**
   * @public
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;

  /**
   * @public
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue;

  /**
   * @public
   * <p>Enable or disable DNS support. Enabled by default.</p>
   */
  DnsSupport?: DnsSupportValue;

  /**
   * @public
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue;

  /**
   * @public
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  TransitGatewayCidrBlocks?: string[];
}

/**
 * @public
 */
export interface CreateTransitGatewayRequest {
  /**
   * @public
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayRequestOptions;

  /**
   * @public
   * <p>The tags to apply to the transit gateway.</p>
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
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayOptions {
  /**
   * @public
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * @public
   * <p>The transit gateway CIDR blocks.</p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * @public
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue;

  /**
   * @public
   * <p>Indicates whether resource attachments are automatically associated with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue;

  /**
   * @public
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * @public
   * <p>Indicates whether resource attachments automatically propagate routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue;

  /**
   * @public
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * @public
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue;

  /**
   * @public
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue;

  /**
   * @public
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  modifying: "modifying",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayState = (typeof TransitGatewayState)[keyof typeof TransitGatewayState];

/**
 * @public
 * <p>Describes a transit gateway.</p>
 */
export interface TransitGateway {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * @public
   * <p>The state of the transit gateway.</p>
   */
  State?: TransitGatewayState;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayOptions;

  /**
   * @public
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayResult {
  /**
   * @public
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

/**
 * @public
 * @enum
 */
export const ProtocolValue = {
  gre: "gre",
} as const;

/**
 * @public
 */
export type ProtocolValue = (typeof ProtocolValue)[keyof typeof ProtocolValue];

/**
 * @public
 * <p>The options for a Connect attachment.</p>
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * @public
   * <p>The tunnel protocol.</p>
   */
  Protocol: ProtocolValue | undefined;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectRequest {
  /**
   * @public
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>The Connect attachment options.</p>
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * @public
   * <p>The tags to apply to the Connect attachment.</p>
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
 * <p>Describes the Connect attachment options.</p>
 */
export interface TransitGatewayConnectOptions {
  /**
   * @public
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue;
}

/**
 * @public
 * <p>Describes a transit gateway Connect attachment.</p>
 */
export interface TransitGatewayConnect {
  /**
   * @public
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The state of the attachment.</p>
   */
  State?: TransitGatewayAttachmentState;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The Connect attachment options.</p>
   */
  Options?: TransitGatewayConnectOptions;

  /**
   * @public
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectResult {
  /**
   * @public
   * <p>Information about the Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

/**
 * @public
 * <p>The BGP options for the Connect attachment.</p>
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * @public
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * @public
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * @public
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * @public
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   */
  PeerAddress: string | undefined;

  /**
   * @public
   * <p>The BGP options for the Connect peer.</p>
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;

  /**
   * @public
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * @public
   * <p>The tags to apply to the Connect peer.</p>
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
 * @enum
 */
export const BgpStatus = {
  down: "down",
  up: "up",
} as const;

/**
 * @public
 */
export type BgpStatus = (typeof BgpStatus)[keyof typeof BgpStatus];

/**
 * @public
 * <p>The BGP configuration information.</p>
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * @public
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   */
  TransitGatewayAsn?: number;

  /**
   * @public
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;

  /**
   * @public
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * @public
   * <p>The interior BGP peer IP address for the appliance.</p>
   */
  PeerAddress?: string;

  /**
   * @public
   * <p>The BGP status.</p>
   */
  BgpStatus?: BgpStatus;
}

/**
 * @public
 * <p>Describes the Connect peer details.</p>
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * @public
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * @public
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   */
  PeerAddress?: string;

  /**
   * @public
   * <p>The range of interior BGP peer IP addresses.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * @public
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue;

  /**
   * @public
   * <p>The BGP configuration details.</p>
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
}

/**
 * @public
 * @enum
 */
export const TransitGatewayConnectPeerState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayConnectPeerState =
  (typeof TransitGatewayConnectPeerState)[keyof typeof TransitGatewayConnectPeerState];

/**
 * @public
 * <p>Describes a transit gateway Connect peer.</p>
 */
export interface TransitGatewayConnectPeer {
  /**
   * @public
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId?: string;

  /**
   * @public
   * <p>The state of the Connect peer.</p>
   */
  State?: TransitGatewayConnectPeerState;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The Connect peer details.</p>
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  /**
   * @public
   * <p>The tags for the Connect peer.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayConnectPeerResult {
  /**
   * @public
   * <p>Information about the Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

/**
 * @public
 * @enum
 */
export const AutoAcceptSharedAssociationsValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type AutoAcceptSharedAssociationsValue =
  (typeof AutoAcceptSharedAssociationsValue)[keyof typeof AutoAcceptSharedAssociationsValue];

/**
 * @public
 * @enum
 */
export const Igmpv2SupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type Igmpv2SupportValue = (typeof Igmpv2SupportValue)[keyof typeof Igmpv2SupportValue];

/**
 * @public
 * @enum
 */
export const StaticSourcesSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type StaticSourcesSupportValue = (typeof StaticSourcesSupportValue)[keyof typeof StaticSourcesSupportValue];

/**
 * @public
 * <p>The options for the transit gateway multicast domain.</p>
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * @public
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue;

  /**
   * @public
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue;

  /**
   * @public
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue;
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;

  /**
   * @public
   * <p>The tags for the transit gateway multicast domain.</p>
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
 * <p>Describes the options for a transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * @public
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue;

  /**
   * @public
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue;

  /**
   * @public
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayMulticastDomainState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayMulticastDomainState =
  (typeof TransitGatewayMulticastDomainState)[keyof typeof TransitGatewayMulticastDomainState];

/**
 * @public
 * <p>Describes the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomain {
  /**
   * @public
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainArn?: string;

  /**
   * @public
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: TransitGatewayMulticastDomainOptions;

  /**
   * @public
   * <p>The state of the transit gateway multicast domain.</p>
   */
  State?: TransitGatewayMulticastDomainState;

  /**
   * @public
   * <p>The time the transit gateway multicast domain was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * @public
   * <p>Information about the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

/**
 * @public
 * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering request.</p>
 */
export interface CreateTransitGatewayPeeringAttachmentRequestOptions {
  /**
   * @public
   * <p>Indicates whether dynamic routing is enabled or disabled.</p>
   */
  DynamicRouting?: DynamicRoutingValue;
}

/**
 * @public
 */
export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   */
  PeerAccountId: string | undefined;

  /**
   * @public
   * <p>The Region where the peer transit gateway is located.</p>
   */
  PeerRegion: string | undefined;

  /**
   * @public
   * <p>Requests a transit gateway peering attachment.</p>
   */
  Options?: CreateTransitGatewayPeeringAttachmentRequestOptions;

  /**
   * @public
   * <p>The tags to apply to the transit gateway peering attachment.</p>
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
 */
export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * @public
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableRequest {
  /**
   * @public
   * <p>The ID of the transit gateway used for the policy table.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The tags specification for the transit gateway policy table created during the request.</p>
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
 * @enum
 */
export const TransitGatewayPolicyTableState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayPolicyTableState =
  (typeof TransitGatewayPolicyTableState)[keyof typeof TransitGatewayPolicyTableState];

/**
 * @public
 * <p>Describes a transit gateway policy table.</p>
 */
export interface TransitGatewayPolicyTable {
  /**
   * @public
   * <p>The ID of the transit gateway policy table.</p>
   */
  TransitGatewayPolicyTableId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The state of the transit gateway policy table</p>
   */
  State?: TransitGatewayPolicyTableState;

  /**
   * @public
   * <p>The timestamp when the transit gateway policy table was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>he key-value pairs associated with the transit gateway policy table.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayPolicyTableResult {
  /**
   * @public
   * <p>Describes the created transit gateway policy table.</p>
   */
  TransitGatewayPolicyTable?: TransitGatewayPolicyTable;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the prefix list that is used for destination matches.</p>
   */
  PrefixListId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

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
export const TransitGatewayPrefixListReferenceState = {
  available: "available",
  deleting: "deleting",
  modifying: "modifying",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayPrefixListReferenceState =
  (typeof TransitGatewayPrefixListReferenceState)[keyof typeof TransitGatewayPrefixListReferenceState];

/**
 * @public
 * <p>Describes a transit gateway prefix list attachment.</p>
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

/**
 * @public
 * <p>Describes a prefix list reference.</p>
 */
export interface TransitGatewayPrefixListReference {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The ID of the prefix list owner.</p>
   */
  PrefixListOwnerId?: string;

  /**
   * @public
   * <p>The state of the prefix list reference.</p>
   */
  State?: TransitGatewayPrefixListReferenceState;

  /**
   * @public
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * @public
   * <p>Information about the transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}

/**
 * @public
 */
export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * @public
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteRequest {
  /**
   * @public
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

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
export const TransitGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteState = (typeof TransitGatewayRouteState)[keyof typeof TransitGatewayRouteState];

/**
 * @public
 * <p>Describes a route attachment.</p>
 */
export interface TransitGatewayRouteAttachment {
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteType = (typeof TransitGatewayRouteType)[keyof typeof TransitGatewayRouteType];

/**
 * @public
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface TransitGatewayRoute {
  /**
   * @public
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The ID of the prefix list used for destination matches.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway route table announcement. </p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;

  /**
   * @public
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * @public
   * <p>The route type.</p>
   */
  Type?: TransitGatewayRouteType;

  /**
   * @public
   * <p>The state of the route.</p>
   */
  State?: TransitGatewayRouteState;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteResult {
  /**
   * @public
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the transit gateway route table.</p>
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
 * @enum
 */
export const TransitGatewayRouteTableState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableState =
  (typeof TransitGatewayRouteTableState)[keyof typeof TransitGatewayRouteTableState];

/**
 * @public
 * <p>Describes a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTable {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The state of the transit gateway route table.</p>
   */
  State?: TransitGatewayRouteTableState;

  /**
   * @public
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   */
  DefaultAssociationRouteTable?: boolean;

  /**
   * @public
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   */
  DefaultPropagationRouteTable?: boolean;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableResult {
  /**
   * @public
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementRequest {
  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>The ID of the peering attachment.</p>
   */
  PeeringAttachmentId: string | undefined;

  /**
   * @public
   * <p>The tags specifications applied to the transit gateway route table announcement.</p>
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
 * @enum
 */
export const TransitGatewayRouteTableAnnouncementDirection = {
  incoming: "incoming",
  outgoing: "outgoing",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableAnnouncementDirection =
  (typeof TransitGatewayRouteTableAnnouncementDirection)[keyof typeof TransitGatewayRouteTableAnnouncementDirection];

/**
 * @public
 * @enum
 */
export const TransitGatewayRouteTableAnnouncementState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  failed: "failed",
  failing: "failing",
  pending: "pending",
} as const;

/**
 * @public
 */
export type TransitGatewayRouteTableAnnouncementState =
  (typeof TransitGatewayRouteTableAnnouncementState)[keyof typeof TransitGatewayRouteTableAnnouncementState];

/**
 * @public
 * <p>Describes a transit gateway route table announcement.</p>
 */
export interface TransitGatewayRouteTableAnnouncement {
  /**
   * @public
   * <p>The ID of the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncementId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the core network for the transit gateway route table announcement.</p>
   */
  CoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the peer transit gateway.</p>
   */
  PeerTransitGatewayId?: string;

  /**
   * @public
   * <p>The ID of the core network ID for the peer.</p>
   */
  PeerCoreNetworkId?: string;

  /**
   * @public
   * <p>The ID of the peering attachment.</p>
   */
  PeeringAttachmentId?: string;

  /**
   * @public
   * <p>The direction for the route table announcement.</p>
   */
  AnnouncementDirection?: TransitGatewayRouteTableAnnouncementDirection;

  /**
   * @public
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * @public
   * <p>The state of the transit gateway announcement.</p>
   */
  State?: TransitGatewayRouteTableAnnouncementState;

  /**
   * @public
   * <p>The timestamp when the transit gateway route table announcement was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The key-value pairs associated with the route table announcement.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTransitGatewayRouteTableAnnouncementResult {
  /**
   * @public
   * <p>Provides details about the transit gateway route table announcement.</p>
   */
  TransitGatewayRouteTableAnnouncement?: TransitGatewayRouteTableAnnouncement;
}

/**
 * @public
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @public
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue;

  /**
   * @public
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue;

  /**
   * @public
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue;
}

/**
 * @public
 */
export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * @public
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The VPC attachment options.</p>
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @public
   * <p>The tags to apply to the VPC attachment.</p>
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
 */
export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * @public
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointAttachmentType = {
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointAttachmentType =
  (typeof VerifiedAccessEndpointAttachmentType)[keyof typeof VerifiedAccessEndpointAttachmentType];

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointType = {
  load_balancer: "load-balancer",
  network_interface: "network-interface",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointType = (typeof VerifiedAccessEndpointType)[keyof typeof VerifiedAccessEndpointType];

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointProtocol = {
  http: "http",
  https: "https",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointProtocol =
  (typeof VerifiedAccessEndpointProtocol)[keyof typeof VerifiedAccessEndpointProtocol];

/**
 * @public
 * <p>Describes the load balancer options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 */
export interface CreateVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The ARN of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * @public
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];
}

/**
 * @public
 * <p>Describes the network interface options when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>network-interface</code> type.</p>
 */
export interface CreateVerifiedAccessEndpointEniOptions {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;
}

/**
 * @public
 * <p>
 *          Verified Access provides server side encryption by default to data at rest using Amazon Web Services-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 *       </p>
 */
export interface VerifiedAccessSseSpecificationRequest {
  /**
   * @public
   * <p>
   *          Enable or disable the use of customer managed KMS keys for server side encryption.
   *       </p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  CustomerManagedKeyEnabled?: boolean;

  /**
   * @public
   * <p>
   *          The ARN of the KMS key.
   *       </p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointRequest {
  /**
   * @public
   * <p>The ID of the Verified Access group to associate the endpoint with.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * @public
   * <p>The type of Verified Access endpoint to create.</p>
   */
  EndpointType: VerifiedAccessEndpointType | undefined;

  /**
   * @public
   * <p>The type of attachment.</p>
   */
  AttachmentType: VerifiedAccessEndpointAttachmentType | undefined;

  /**
   * @public
   * <p>The ARN of the public TLS/SSL certificate in Amazon Web Services Certificate Manager to associate with the endpoint.
   *          The CN in the certificate must match the DNS name your end users will use to reach your
   *          application.</p>
   */
  DomainCertificateArn: string | undefined;

  /**
   * @public
   * <p>The DNS name for users to reach your application.</p>
   */
  ApplicationDomain: string | undefined;

  /**
   * @public
   * <p>A custom identifier that is prepended to the DNS name that is generated for the
   *          endpoint.</p>
   */
  EndpointDomainPrefix: string | undefined;

  /**
   * @public
   * <p>The IDs of the security groups to associate with the Verified Access endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The load balancer details. This parameter is required if the endpoint type is
   *             <code>load-balancer</code>.</p>
   */
  LoadBalancerOptions?: CreateVerifiedAccessEndpointLoadBalancerOptions;

  /**
   * @public
   * <p>The network interface details. This parameter is required if the endpoint type is
   *             <code>network-interface</code>.</p>
   */
  NetworkInterfaceOptions?: CreateVerifiedAccessEndpointEniOptions;

  /**
   * @public
   * <p>A description for the Verified Access endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>The tags to assign to the Verified Access endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];

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

  /**
   * @public
   * <p>
   *          Options for server side encryption.
   *       </p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 */
export interface VerifiedAccessEndpointLoadBalancerOptions {
  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The ARN of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * @public
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];
}

/**
 * @public
 * <p>Options for a network-interface type endpoint.</p>
 */
export interface VerifiedAccessEndpointEniOptions {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol;

  /**
   * @public
   * <p>The IP port number.</p>
   */
  Port?: number;
}

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointStatusCode = {
  active: "active",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
  updating: "updating",
} as const;

/**
 * @public
 */
export type VerifiedAccessEndpointStatusCode =
  (typeof VerifiedAccessEndpointStatusCode)[keyof typeof VerifiedAccessEndpointStatusCode];

/**
 * @public
 * <p>Describes the status of a Verified Access endpoint.</p>
 */
export interface VerifiedAccessEndpointStatus {
  /**
   * @public
   * <p>The status code of the Verified Access endpoint.</p>
   */
  Code?: VerifiedAccessEndpointStatusCode;

  /**
   * @public
   * <p>The status message of the Verified Access endpoint.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>An Amazon Web Services Verified Access endpoint specifies the application that Amazon Web Services Verified Access provides access to. It must be
 *          attached to an Amazon Web Services Verified Access group. An Amazon Web Services Verified Access endpoint must also have an attached access policy
 *          before you attached it to a group.</p>
 */
export interface VerifiedAccessEndpoint {
  /**
   * @public
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId?: string;

  /**
   * @public
   * <p>The DNS name for users to reach your application.</p>
   */
  ApplicationDomain?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP
   *          address, load balancer or a network interface depending on the endpoint type
   *          specified.</p>
   */
  EndpointType?: VerifiedAccessEndpointType;

  /**
   * @public
   * <p>The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the
   *          application.</p>
   */
  AttachmentType?: VerifiedAccessEndpointAttachmentType;

  /**
   * @public
   * <p>The ARN of a public TLS/SSL certificate imported into or created with ACM.</p>
   */
  DomainCertificateArn?: string;

  /**
   * @public
   * <p>A DNS name that is generated for the endpoint.</p>
   */
  EndpointDomain?: string;

  /**
   * @public
   * <p>Returned if endpoint has a device trust provider attached.</p>
   */
  DeviceValidationDomain?: string;

  /**
   * @public
   * <p>The IDs of the security groups for the endpoint.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The load balancer details if creating the Amazon Web Services Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   */
  LoadBalancerOptions?: VerifiedAccessEndpointLoadBalancerOptions;

  /**
   * @public
   * <p>The options for network-interface type endpoint.</p>
   */
  NetworkInterfaceOptions?: VerifiedAccessEndpointEniOptions;

  /**
   * @public
   * <p>The endpoint status.</p>
   */
  Status?: VerifiedAccessEndpointStatus;

  /**
   * @public
   * <p>A description for the Amazon Web Services Verified Access endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The last updated time.</p>
   */
  LastUpdatedTime?: string;

  /**
   * @public
   * <p>The deletion time.</p>
   */
  DeletionTime?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>
   *          Describes the options in use for server side encryption.
   *       </p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}

/**
 * @public
 */
export interface CreateVerifiedAccessEndpointResult {
  /**
   * @public
   * <p>The ID of the Verified Access endpoint.</p>
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupRequest {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * @public
   * <p>A description for the Verified Access group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>The tags to assign to the Verified Access group.</p>
   */
  TagSpecifications?: TagSpecification[];

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

  /**
   * @public
   * <p>
   *          Options for server side encryption.
   *       </p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 * <p>Describes a Verified Access group.</p>
 */
export interface VerifiedAccessGroup {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroupId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * @public
   * <p>A description for the Amazon Web Services Verified Access group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Web Services account number that owns the group.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The ARN of the Verified Access group.</p>
   */
  VerifiedAccessGroupArn?: string;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: string;

  /**
   * @public
   * <p>The last updated time.</p>
   */
  LastUpdatedTime?: string;

  /**
   * @public
   * <p>The deletion time.</p>
   */
  DeletionTime?: string;

  /**
   * @public
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>
   *          Describes the options in use for server side encryption.
   *       </p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}

/**
 * @public
 */
export interface CreateVerifiedAccessGroupResult {
  /**
   * @public
   * <p>The ID of the Verified Access group.</p>
   */
  VerifiedAccessGroup?: VerifiedAccessGroup;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceRequest {
  /**
   * @public
   * <p>A description for the Verified Access instance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to assign to the Verified Access instance.</p>
   */
  TagSpecifications?: TagSpecification[];

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

  /**
   * @public
   * <p>Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.</p>
   */
  FIPSEnabled?: boolean;
}

/**
 * @public
 */
export interface CreateVerifiedAccessInstanceResult {
  /**
   * @public
   * <p>The ID of the Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * @public
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the
 *             <code>device</code> type.</p>
 */
export interface CreateVerifiedAccessTrustProviderDeviceOptions {
  /**
   * @public
   * <p>The ID of the tenant application with the device-identity provider.</p>
   */
  TenantId?: string;
}

/**
 * @public
 * <p>Describes the options when creating an Amazon Web Services Verified Access trust provider using the <code>user</code>
 *          type.</p>
 */
export interface CreateVerifiedAccessTrustProviderOidcOptions {
  /**
   * @public
   * <p>The OIDC issuer.</p>
   */
  Issuer?: string;

  /**
   * @public
   * <p>The OIDC authorization endpoint.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * @public
   * <p>The OIDC token endpoint.</p>
   */
  TokenEndpoint?: string;

  /**
   * @public
   * <p>The OIDC user info endpoint.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * @public
   * <p>The client identifier.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The client secret.</p>
   */
  ClientSecret?: string;

  /**
   * @public
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   */
  Scope?: string;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderRequest {
  /**
   * @public
   * <p>The type of trust provider.</p>
   */
  TrustProviderType: TrustProviderType | undefined;

  /**
   * @public
   * <p>The type of user-based trust provider. This parameter is required when the provider type
   *          is <code>user</code>.</p>
   */
  UserTrustProviderType?: UserTrustProviderType;

  /**
   * @public
   * <p>The type of device-based trust provider. This parameter is required when the provider
   *          type is <code>device</code>.</p>
   */
  DeviceTrustProviderType?: DeviceTrustProviderType;

  /**
   * @public
   * <p>The options for a OpenID Connect-compatible user-identity trust provider. This parameter
   *          is required when the provider type is <code>user</code>.</p>
   */
  OidcOptions?: CreateVerifiedAccessTrustProviderOidcOptions;

  /**
   * @public
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   */
  DeviceOptions?: CreateVerifiedAccessTrustProviderDeviceOptions;

  /**
   * @public
   * <p>The identifier to be used when working with policy rules.</p>
   */
  PolicyReferenceName: string | undefined;

  /**
   * @public
   * <p>A description for the Verified Access trust provider.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags to assign to the Verified Access trust provider.</p>
   */
  TagSpecifications?: TagSpecification[];

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

  /**
   * @public
   * <p>
   *          Options for server side encryption.
   *       </p>
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest;
}

/**
 * @public
 */
export interface CreateVerifiedAccessTrustProviderResult {
  /**
   * @public
   * <p>The ID of the Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}

/**
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * @public
   * <p>The ID of the Availability Zone in which to create the volume. For example, <code>us-east-1a</code>.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
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
   *          <p>
   *             <code>io1</code> and <code>io2</code> volumes support up to 64,000 IOPS only on
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families support performance
   *       up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *       The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
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
  Size?: number;

  /**
   * @public
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Throughput Optimized HDD (<code>st1</code>) and Cold HDD (<code>sc1</code>) volumes can't be used as boot volumes.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *     	volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * @public
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure
   *         Idempotency</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeState = {
  available: "available",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
  error: "error",
  in_use: "in-use",
} as const;

/**
 * @public
 */
export type VolumeState = (typeof VolumeState)[keyof typeof VolumeState];

/**
 * @public
 * <p>Describes a volume.</p>
 */
export interface Volume {
  /**
   * @public
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: VolumeAttachment[];

  /**
   * @public
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The volume state.</p>
   */
  State?: VolumeState;

  /**
   * @public
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p>Indicates whether the volume was created using fast snapshot restore.</p>
   */
  FastRestored?: boolean;

  /**
   * @public
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * @public
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  SseType?: SSEType;
}

/**
 * @public
 */
export interface CreateVpcRequest {
  /**
   * @public
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * @public
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * @public
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * @public
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *          <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * @public
   * <p>The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *
   *       </p>
   */
  Ipv4IpamPoolId?: string;

  /**
   * @public
   * <p>The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv4NetmaskLength?: number;

  /**
   * @public
   * <p>The ID of an IPv6 IPAM pool which will be used to allocate this VPC an IPv6 CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6IpamPoolId?: string;

  /**
   * @public
   * <p>The netmask length of the IPv6 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  Ipv6NetmaskLength?: number;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy;

  /**
   * @public
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * @public
   * <p>The tags to assign to the VPC.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreateVpcResult {
  /**
   * @public
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

/**
 * @public
 * @enum
 */
export const DnsRecordIpType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
  ipv6: "ipv6",
  service_defined: "service-defined",
} as const;

/**
 * @public
 */
export type DnsRecordIpType = (typeof DnsRecordIpType)[keyof typeof DnsRecordIpType];

/**
 * @public
 * <p>Describes the DNS options for an endpoint.</p>
 */
export interface DnsOptionsSpecification {
  /**
   * @public
   * <p>The DNS records created for the endpoint.</p>
   */
  DnsRecordIpType?: DnsRecordIpType;

  /**
   * @public
   * <p>Indicates whether to enable private DNS only for inbound endpoints. This option is
   *           available only for services that support both gateway and interface endpoints. It routes
   *           traffic that originates from the VPC to the gateway endpoint and traffic that originates
   *           from on-premises to the interface endpoint.</p>
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean;
}

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;

/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * <p>Describes the configuration of a subnet for a VPC endpoint.</p>
 */
export interface SubnetConfiguration {
  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The IPv4 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv4 address if the VPC endpoint supports IPv4.</p>
   *          <p>If you specify an IPv4 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   */
  Ipv4?: string;

  /**
   * @public
   * <p>The IPv6 address to assign to the endpoint network interface in the subnet. You must provide
   *             an IPv6 address if the VPC endpoint supports IPv6.</p>
   *          <p>If you specify an IPv6 address when modifying a VPC endpoint, we replace the existing
   *             endpoint network interface with a new endpoint network interface with this IP address.
   *             This process temporarily disconnects the subnet and the VPC endpoint.</p>
   */
  Ipv6?: string;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointType = {
  Gateway: "Gateway",
  GatewayLoadBalancer: "GatewayLoadBalancer",
  Interface: "Interface",
} as const;

/**
 * @public
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The type of endpoint.</p>
   *          <p>Default: Gateway</p>
   */
  VpcEndpointType?: VpcEndpointType;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The name of the endpoint service.</p>
   */
  ServiceName: string | undefined;

  /**
   * @public
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>(Gateway endpoint) The route table IDs.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint
   *             network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The IDs of the security groups to associate with the
   *             endpoint network interfaces. If this parameter is not specified, we use the default
   *             security group for the VPC.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType;

  /**
   * @public
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptionsSpecification;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *          <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * @public
   * <p>The tags to associate with the endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>The subnet configurations for the endpoint.</p>
   */
  SubnetConfigurations?: SubnetConfiguration[];
}

/**
 * @public
 * <p>Describes a DNS entry.</p>
 */
export interface DnsEntry {
  /**
   * @public
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * @public
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

/**
 * @public
 * <p>Describes the DNS options for an endpoint.</p>
 */
export interface DnsOptions {
  /**
   * @public
   * <p>The DNS records created for the endpoint.</p>
   */
  DnsRecordIpType?: DnsRecordIpType;

  /**
   * @public
   * <p>Indicates whether to enable private DNS only for inbound endpoints.</p>
   */
  PrivateDnsOnlyForInboundResolverEndpoint?: boolean;
}

/**
 * @public
 * <p>Describes a security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * @public
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>The last error that occurred for a VPC endpoint.</p>
 */
export interface LastError {
  /**
   * @public
   * <p>The error message for the VPC endpoint error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The error code for the VPC endpoint error.</p>
   */
  Code?: string;
}

/**
 * @public
 * @enum
 */
export const State = {
  Available: "Available",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Expired: "Expired",
  Failed: "Failed",
  Pending: "Pending",
  PendingAcceptance: "PendingAcceptance",
  Rejected: "Rejected",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * <p>Describes a VPC endpoint.</p>
 */
export interface VpcEndpoint {
  /**
   * @public
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: VpcEndpointType;

  /**
   * @public
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The state of the endpoint.</p>
   */
  State?: State;

  /**
   * @public
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>(Gateway endpoint) The IDs of the route tables associated with the endpoint.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The subnets for the endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   */
  Groups?: SecurityGroupIdentifier[];

  /**
   * @public
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType;

  /**
   * @public
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptions;

  /**
   * @public
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether the endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * @public
   * <p>(Interface endpoint) The network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * @public
   * <p>The date and time that the endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * @public
   * <p>The tags assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the endpoint.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The last error that occurred for endpoint.</p>
   */
  LastError?: LastError;
}

/**
 * @public
 */
export interface CreateVpcEndpointResult {
  /**
   * @public
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: VpcEndpoint;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The ARN of the SNS topic for the notifications.</p>
   */
  ConnectionNotificationArn: string | undefined;

  /**
   * @public
   * <p>The endpoint events for which to receive notifications. Valid values are
   *                 <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and
   *                 <code>Reject</code>.</p>
   */
  ConnectionEvents: string[] | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;
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
 * @public
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint
 *             service.</p>
 */
export interface ConnectionNotification {
  /**
   * @public
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * @public
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: ConnectionNotificationType;

  /**
   * @public
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * @public
   * <p>The events for the notification. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];

  /**
   * @public
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: ConnectionNotificationState;
}

/**
 * @public
 */
export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * @public
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: ConnectionNotification;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether requests from service consumers to create an endpoint to your service must
   *             be accepted manually.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * @public
   * <p>(Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The supported IP address types. The possible values are <code>ipv4</code> and <code>ipv6</code>.</p>
   */
  SupportedIpAddressTypes?: string[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to associate with the service.</p>
   */
  TagSpecifications?: TagSpecification[];
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
 * @public
 * <p>Information about the private DNS name for the service endpoint.</p>
 */
export interface PrivateDnsNameConfiguration {
  /**
   * @public
   * <p>The verification state of the VPC endpoint service.</p>
   *          <p>>Consumers
   *             of the endpoint service can use the private name only when the state is
   *                 <code>verified</code>.</p>
   */
  State?: DnsNameState;

  /**
   * @public
   * <p>The endpoint service verification type, for example TXT.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The value the service provider adds to the private DNS name domain record before verification.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The name of the record subdomain the service provider needs to create. The service provider adds the <code>value</code> text to the <code>name</code>.</p>
   */
  Name?: string;
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
 * @public
 * <p>Describes the type of service for a VPC endpoint.</p>
 */
export interface ServiceTypeDetail {
  /**
   * @public
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceType;
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
 * @public
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface ServiceConfiguration {
  /**
   * @public
   * <p>The type of service.</p>
   */
  ServiceType?: ServiceTypeDetail[];

  /**
   * @public
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The service state.</p>
   */
  ServiceState?: ServiceState;

  /**
   * @public
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</p>
   */
  GatewayLoadBalancerArns?: string[];

  /**
   * @public
   * <p>The supported IP address types.</p>
   */
  SupportedIpAddressTypes?: ServiceConnectivityType[];

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
   * <p>Information about the endpoint service private DNS name configuration.</p>
   */
  PrivateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * @public
   * <p>The payer responsibility.</p>
   */
  PayerResponsibility?: PayerResponsibility;

  /**
   * @public
   * <p>The tags assigned to the service.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * @public
   * <p>Information about the service configuration.</p>
   */
  ServiceConfiguration?: ServiceConfiguration;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the owner of the accepter VPC.</p>
   *          <p>Default: Your Amazon Web Services account ID</p>
   */
  PeerOwnerId?: string;

  /**
   * @public
   * <p>The ID of the VPC with which you are creating the VPC peering connection. You must
   * 			specify this parameter in the request.</p>
   */
  PeerVpcId?: string;

  /**
   * @public
   * <p>The ID of the requester VPC. You must specify this parameter in the
   * 			request.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The Region code for the accepter VPC, if the accepter VPC is located in a Region
   *             other than the Region in which you make the request.</p>
   *          <p>Default: The Region in which you make the request.</p>
   */
  PeerRegion?: string;

  /**
   * @public
   * <p>The tags to assign to the peering connection.</p>
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionResult {
  /**
   * @public
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: VpcPeeringConnection;
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
 * @public
 * <p>The IKE version that is permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsRequestListValue {
  /**
   * @public
   * <p>The IKE version.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 */
export interface CloudWatchLogOptionsSpecification {
  /**
   * @public
   * <p>Enable or disable VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  LogEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   */
  LogGroupArn?: string;

  /**
   * @public
   * <p>Set log format. Default format is <code>json</code>.</p>
   *          <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   */
  LogOutputFormat?: string;
}

/**
 * @public
 * <p>Options for logging VPN tunnel activity.</p>
 */
export interface VpnTunnelLogOptionsSpecification {
  /**
   * @public
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   */
  CloudWatchLogOptions?: CloudWatchLogOptionsSpecification;
}

/**
 * @public
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1DHGroupNumbersRequestListValue {
  /**
   * @public
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * @public
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE
 *             negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * @public
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2DHGroupNumbersRequestListValue {
  /**
   * @public
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * @public
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE
 *             negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * @public
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The tunnel options for a single VPN tunnel.</p>
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * @public
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
   */
  TunnelInsideCidr?: string;

  /**
   * @public
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * @public
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * @public
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * @public
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * @public
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *          <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *          <p>Default: <code>540</code>
   *          </p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * @public
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * @public
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * @public
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * @public
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * @public
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @public
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
   * @public
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];

  /**
   * @public
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
   * @public
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *          <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *          <p>Default: <code>add</code>
   *          </p>
   */
  StartupAction?: string;

  /**
   * @public
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptionsSpecification;

  /**
   * @public
   * <p>Turn on or off tunnel endpoint lifecycle control feature.</p>
   */
  EnableTunnelLifecycleControl?: boolean;
}

/**
 * @public
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * @public
   * <p>Indicate whether to enable acceleration for the VPN connection.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableAcceleration?: boolean;

  /**
   * @public
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a VPN
   *             connection for a device that does not support BGP, you must specify <code>true</code>.
   *             Use <a>CreateVpnConnectionRoute</a> to create a static route.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * @public
   * <p>Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   *          <p>Default: <code>ipv4</code>
   *          </p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion;

  /**
   * @public
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?: VpnTunnelOptionsSpecification[];

  /**
   * @public
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>The type of IPv4 address assigned to the outside interface of the customer gateway device.</p>
   *          <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code>
   *          </p>
   *          <p>Default: <code>PublicIpv4</code>
   *          </p>
   */
  OutsideIpAddressType?: string;

  /**
   * @public
   * <p>The transit gateway attachment ID to use for the VPN tunnel.</p>
   *          <p>Required if <code>OutsideIpAddressType</code> is set to <code>PrivateIpv4</code>.</p>
   */
  TransportTransitGatewayAttachmentId?: string;
}

/**
 * @public
 * <p>Contains the parameters for CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionRequest {
  /**
   * @public
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

  /**
   * @public
   * <p>The type of VPN connection (<code>ipsec.1</code>).</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>The ID of the virtual private gateway. If you specify a virtual private gateway, you
   *             cannot specify a transit gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway. If you specify a transit gateway, you cannot specify a virtual private
   *             gateway.</p>
   */
  TransitGatewayId?: string;

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
   * <p>The options for the VPN connection.</p>
   */
  Options?: VpnConnectionOptionsSpecification;

  /**
   * @public
   * <p>The tags to apply to the VPN connection.</p>
   */
  TagSpecifications?: TagSpecification[];
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
 * @public
 * <p>The internet key exchange (IKE) version permitted for the VPN tunnel.</p>
 */
export interface IKEVersionsListValue {
  /**
   * @public
   * <p>The IKE version.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
 */
export interface CloudWatchLogOptions {
  /**
   * @public
   * <p>Status of VPN tunnel logging feature. Default value is <code>False</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   */
  LogEnabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.</p>
   */
  LogGroupArn?: string;

  /**
   * @public
   * <p>Configured log format. Default format is <code>json</code>.</p>
   *          <p>Valid values: <code>json</code> | <code>text</code>
   *          </p>
   */
  LogOutputFormat?: string;
}

/**
 * @public
 * <p>Options for logging VPN tunnel activity.</p>
 */
export interface VpnTunnelLogOptions {
  /**
   * @public
   * <p>Options for sending VPN tunnel logs to CloudWatch.</p>
   */
  CloudWatchLogOptions?: CloudWatchLogOptions;
}

/**
 * @public
 * <p>The Diffie-Hellmann group number for phase 1 IKE negotiations.</p>
 */
export interface Phase1DHGroupNumbersListValue {
  /**
   * @public
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>The encryption algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * @public
   * <p>The value for the encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The integrity algorithm for phase 1 IKE negotiations.</p>
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * @public
   * <p>The value for the integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The Diffie-Hellmann group number for phase 2 IKE negotiations.</p>
 */
export interface Phase2DHGroupNumbersListValue {
  /**
   * @public
   * <p>The Diffie-Hellmann group number.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>The encryption algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * @public
   * <p>The encryption algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The integrity algorithm for phase 2 IKE negotiations.</p>
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * @public
   * <p>The integrity algorithm.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The VPN tunnel options.</p>
 */
export interface TunnelOption {
  /**
   * @public
   * <p>The external IP address of the VPN tunnel.</p>
   */
  OutsideIpAddress?: string;

  /**
   * @public
   * <p>The range of inside IPv4 addresses for the tunnel.</p>
   */
  TunnelInsideCidr?: string;

  /**
   * @public
   * <p>The range of inside IPv6 addresses for the tunnel.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * @public
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   */
  PreSharedKey?: string;

  /**
   * @public
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * @public
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   */
  Phase2LifetimeSeconds?: number;

  /**
   * @public
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey.</p>
   */
  RekeyMarginTimeSeconds?: number;

  /**
   * @public
   * <p>The percentage of the rekey window determined by <code>RekeyMarginTimeSeconds</code>
   *             during which the rekey time is randomly selected.</p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * @public
   * <p>The number of packets in an IKE replay window.</p>
   */
  ReplayWindowSize?: number;

  /**
   * @public
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   */
  DpdTimeoutSeconds?: number;

  /**
   * @public
   * <p>The action to take after a DPD timeout occurs.</p>
   */
  DpdTimeoutAction?: string;

  /**
   * @public
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * @public
   * <p>The permitted encryption algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * @public
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * @public
   * <p>The permitted integrity algorithms for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * @public
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersListValue[];

  /**
   * @public
   * <p>The permitted Diffie-Hellman group numbers for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersListValue[];

  /**
   * @public
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   */
  IkeVersions?: IKEVersionsListValue[];

  /**
   * @public
   * <p>The action to take when the establishing the VPN tunnels for a VPN connection.</p>
   */
  StartupAction?: string;

  /**
   * @public
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptions;

  /**
   * @public
   * <p>Status of tunnel endpoint lifecycle control feature.</p>
   */
  EnableTunnelLifecycleControl?: boolean;
}

/**
 * @public
 * <p>Describes VPN connection options.</p>
 */
export interface VpnConnectionOptions {
  /**
   * @public
   * <p>Indicates whether acceleration is enabled for the VPN connection.</p>
   */
  EnableAcceleration?: boolean;

  /**
   * @public
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be
   *             used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * @public
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * @public
   * <p>The type of IPv4 address assigned to the outside interface of the customer gateway.</p>
   *          <p>Valid values: <code>PrivateIpv4</code> | <code>PublicIpv4</code>
   *          </p>
   *          <p>Default: <code>PublicIpv4</code>
   *          </p>
   */
  OutsideIpAddressType?: string;

  /**
   * @public
   * <p>The transit gateway attachment ID in use for the VPN tunnel.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * @public
   * <p>Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.</p>
   */
  TunnelInsideIpVersion?: TunnelInsideIpVersion;

  /**
   * @public
   * <p>Indicates the VPN tunnel options.</p>
   */
  TunnelOptions?: TunnelOption[];
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
 * @public
 * <p>Describes a static route for a VPN connection.</p>
 */
export interface VpnStaticRoute {
  /**
   * @public
   * <p>The CIDR block associated with the local subnet of the customer data center.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>Indicates how the routes were provided.</p>
   */
  Source?: VpnStaticRouteSource;

  /**
   * @public
   * <p>The current state of the static route.</p>
   */
  State?: VpnState;
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
 * @public
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface VgwTelemetry {
  /**
   * @public
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * @public
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;

  /**
   * @public
   * <p>The Internet-routable IP address of the virtual private gateway's outside
   *             interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * @public
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: TelemetryStatus;

  /**
   * @public
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * <p>Describes a VPN connection.</p>
 */
export interface VpnConnection {
  /**
   * @public
   * <p>The configuration information for the VPN connection's customer gateway (in the native
   *             XML format). This element is always present in the <a>CreateVpnConnection</a>
   *             response; however, it's present in the <a>DescribeVpnConnections</a> response
   *             only if the VPN connection is in the <code>pending</code> or <code>available</code>
   *             state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * @public
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * @public
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an Amazon Web Services VPN connection. A value of <code>VPN-Classic</code> indicates an Amazon Web Services Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * @public
   * <p>The current state of the VPN connection.</p>
   */
  State?: VpnState;

  /**
   * @public
   * <p>The type of VPN connection.</p>
   */
  Type?: GatewayType;

  /**
   * @public
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * @public
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * @public
   * <p>The ARN of the core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * @public
   * <p>The ARN of the core network attachment.</p>
   */
  CoreNetworkAttachmentArn?: string;

  /**
   * @public
   * <p>The current state of the gateway association.</p>
   */
  GatewayAssociationState?: GatewayAssociationState;

  /**
   * @public
   * <p>The VPN connection options.</p>
   */
  Options?: VpnConnectionOptions;

  /**
   * @public
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: VpnStaticRoute[];

  /**
   * @public
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: VgwTelemetry[];
}

/**
 * @public
 * <p>Contains the output of CreateVpnConnection.</p>
 */
export interface CreateVpnConnectionResult {
  /**
   * @public
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * @public
 * <p>Contains the parameters for CreateVpnConnectionRoute.</p>
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * @public
   * <p>The CIDR block associated with the local subnet of the customer network.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayRequest {
  /**
   * @public
   * <p>The Availability Zone for the virtual private gateway.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The type of VPN connection this virtual private gateway supports.</p>
   */
  Type: GatewayType | undefined;

  /**
   * @public
   * <p>The tags to apply to the virtual private gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * @public
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session. If
   *             you're using a 16-bit ASN, it must be in the 64512 to 65534 range. If you're using a
   *             32-bit ASN, it must be in the 4200000000 to 4294967294 range.</p>
   *          <p>Default: 64512</p>
   */
  AmazonSideAsn?: number;

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
 * <p>Describes a virtual private gateway.</p>
 */
export interface VpnGateway {
  /**
   * @public
   * <p>The Availability Zone where the virtual private gateway was created, if applicable.
   *             This field may be empty or not returned.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The current state of the virtual private gateway.</p>
   */
  State?: VpnState;

  /**
   * @public
   * <p>The type of VPN connection the virtual private gateway supports.</p>
   */
  Type?: GatewayType;

  /**
   * @public
   * <p>Any VPCs attached to the virtual private gateway.</p>
   */
  VpcAttachments?: VpcAttachment[];

  /**
   * @public
   * <p>The ID of the virtual private gateway.</p>
   */
  VpnGatewayId?: string;

  /**
   * @public
   * <p>The private Autonomous System Number (ASN) for the Amazon side of a BGP
   *             session.</p>
   */
  AmazonSideAsn?: number;

  /**
   * @public
   * <p>Any tags assigned to the virtual private gateway.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output of CreateVpnGateway.</p>
 */
export interface CreateVpnGatewayResult {
  /**
   * @public
   * <p>Information about the virtual private gateway.</p>
   */
  VpnGateway?: VpnGateway;
}

/**
 * @public
 */
export interface DeleteCarrierGatewayRequest {
  /**
   * @public
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId: string | undefined;

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
export interface DeleteCarrierGatewayResult {
  /**
   * @public
   * <p>Information about the carrier gateway.</p>
   */
  CarrierGateway?: CarrierGateway;
}

/**
 * @public
 */
export interface DeleteClientVpnEndpointRequest {
  /**
   * @public
   * <p>The ID of the Client VPN to be deleted.</p>
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
export interface DeleteClientVpnEndpointResult {
  /**
   * @public
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: ClientVpnEndpointStatus;
}

/**
 * @public
 */
export interface DeleteClientVpnRouteRequest {
  /**
   * @public
   * <p>The ID of the Client VPN endpoint from which the route is to be deleted.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * @public
   * <p>The ID of the target subnet used by the route.</p>
   */
  TargetVpcSubnetId?: string;

  /**
   * @public
   * <p>The IPv4 address range, in CIDR notation, of the route to be deleted.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteClientVpnRouteResult {
  /**
   * @public
   * <p>The current state of the route.</p>
   */
  Status?: ClientVpnRouteStatus;
}

/**
 * @public
 */
export interface DeleteCoipCidrRequest {
  /**
   * @public
   * <p> A customer-owned IP address range that you want to delete. </p>
   */
  Cidr: string | undefined;

  /**
   * @public
   * <p>
   *         The ID of the customer-owned address pool.
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
 */
export interface DeleteCoipCidrResult {
  /**
   * @public
   * <p>
   *        Information about a range of customer-owned IP addresses.
   *       </p>
   */
  CoipCidr?: CoipCidr;
}

/**
 * @public
 */
export interface DeleteCoipPoolRequest {
  /**
   * @public
   * <p>The ID of the CoIP pool that you want to delete. </p>
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
 */
export interface DeleteCoipPoolResult {
  /**
   * @public
   * <p>Information about the CoIP address pool.</p>
   */
  CoipPool?: CoipPool;
}

/**
 * @public
 * <p>Contains the parameters for DeleteCustomerGateway.</p>
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * @public
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId: string | undefined;

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
export interface DeleteDhcpOptionsRequest {
  /**
   * @public
   * <p>The ID of the DHCP options set.</p>
   */
  DhcpOptionsId: string | undefined;

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
export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnCode?: boolean;
}

/**
 * @public
 */
export interface DeleteFleetsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IDs of the EC2 Fleets.</p>
   */
  FleetIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates whether to terminate the associated instances when the EC2 Fleet is deleted. The default is to
   *          terminate the instances.</p>
   *          <p>To let the instances continue to run after the EC2 Fleet is deleted, specify
   *             <code>no-terminate-instances</code>. Supported only for fleets of type
   *             <code>maintain</code> and <code>request</code>.</p>
   *          <p>For <code>instant</code> fleets, you cannot specify <code>NoTerminateInstances</code>. A
   *          deleted <code>instant</code> fleet with running instances is not supported.</p>
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
 * @public
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface DeleteFleetSuccessItem {
  /**
   * @public
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?: FleetStateCode;

  /**
   * @public
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?: FleetStateCode;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
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
 * @public
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface DeleteFleetError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: DeleteFleetErrorCode;

  /**
   * @public
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface DeleteFleetErrorItem {
  /**
   * @public
   * <p>The error.</p>
   */
  Error?: DeleteFleetError;

  /**
   * @public
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

/**
 * @public
 */
export interface DeleteFleetsResult {
  /**
   * @public
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * @public
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}

/**
 * @public
 */
export interface DeleteFlowLogsRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>One or more flow log IDs.</p>
   *          <p>Constraint: Maximum of 1000 flow log IDs.</p>
   */
  FlowLogIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFlowLogsResult {
  /**
   * @public
   * <p>Information about the flow logs that could not be deleted successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

/**
 * @public
 */
export interface DeleteFpgaImageRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFpgaImageResult {
  /**
   * @public
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DeleteInstanceConnectEndpointRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the EC2 Instance Connect Endpoint to delete.</p>
   */
  InstanceConnectEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceConnectEndpointResult {
  /**
   * @public
   * <p>Information about the EC2 Instance Connect Endpoint.</p>
   */
  InstanceConnectEndpoint?: Ec2InstanceConnectEndpoint;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Specify <code>true</code> to force delete the event window. Use the force delete parameter
   *          if the event window is currently associated with targets.</p>
   */
  ForceDelete?: boolean;

  /**
   * @public
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;
}

/**
 * @public
 * <p>The state of the event window.</p>
 */
export interface InstanceEventWindowStateChange {
  /**
   * @public
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId?: string;

  /**
   * @public
   * <p>The current state of the event window.</p>
   */
  State?: InstanceEventWindowState;
}

/**
 * @public
 */
export interface DeleteInstanceEventWindowResult {
  /**
   * @public
   * <p>The state of the event window.</p>
   */
  InstanceEventWindowState?: InstanceEventWindowStateChange;
}

/**
 * @public
 */
export interface DeleteInternetGatewayRequest {
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
}

/**
 * @public
 */
export interface DeleteIpamRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the IPAM to delete.</p>
   */
  IpamId: string | undefined;

  /**
   * @public
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
   */
  Cascade?: boolean;
}

/**
 * @public
 */
export interface DeleteIpamResult {
  /**
   * @public
   * <p>Information about the results of the deletion.</p>
   */
  Ipam?: Ipam;
}

/**
 * @public
 */
export interface DeleteIpamPoolRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the pool to delete.</p>
   */
  IpamPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamPoolResult {
  /**
   * @public
   * <p>Information about the results of the deletion.</p>
   */
  IpamPool?: IpamPool;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The IPAM resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamResourceDiscoveryResult {
  /**
   * @public
   * <p>The IPAM resource discovery.</p>
   */
  IpamResourceDiscovery?: IpamResourceDiscovery;
}

/**
 * @public
 */
export interface DeleteIpamScopeRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the scope to delete.</p>
   */
  IpamScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpamScopeResult {
  /**
   * @public
   * <p>Information about the results of the deletion.</p>
   */
  IpamScope?: IpamScope;
}

/**
 * @public
 */
export interface DeleteKeyPairRequest {
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DeleteKeyPairResult {
  /**
   * @public
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;

  /**
   * @public
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateRequest {
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
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateResult {
  /**
   * @public
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsRequest {
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
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * @public
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * @public
   * <p>The version numbers of one or more launch template versions to delete. You can specify
   *             up to 200 launch template version numbers.</p>
   */
  Versions: string[] | undefined;
}

/**
 * @public
 * <p>Describes a launch template version that was successfully deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
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
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;
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
 * @public
 * <p>Describes the error that's returned when you cannot delete a launch template
 *             version.</p>
 */
export interface ResponseError {
  /**
   * @public
   * <p>The error code.</p>
   */
  Code?: LaunchTemplateErrorCode;

  /**
   * @public
   * <p>The error message, if applicable.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Describes a launch template version that could not be deleted.</p>
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
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
   * <p>The version number of the launch template.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>Information about the error.</p>
   */
  ResponseError?: ResponseError;
}

/**
 * @public
 */
export interface DeleteLaunchTemplateVersionsResult {
  /**
   * @public
   * <p>Information about the launch template versions that were successfully deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * @public
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteRequest {
  /**
   * @public
   * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>
   *          Use a prefix list in place of <code>DestinationCidrBlock</code>. You cannot use
   *          <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   */
  DestinationPrefixListId?: string;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteResult {
  /**
   * @public
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableRequest {
  /**
   * @public
   * <p>
   *       The ID of the local gateway route table.
   *       </p>
   */
  LocalGatewayRouteTableId: string | undefined;

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
export interface DeleteLocalGatewayRouteTableResult {
  /**
   * @public
   * <p>Information about the local gateway route table.</p>
   */
  LocalGatewayRouteTable?: LocalGatewayRouteTable;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {
  /**
   * @public
   * <p>
   *          The ID of the local gateway route table virtual interface group association.
   *       </p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string | undefined;

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
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}

/**
 * @public
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @public
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId: string | undefined;

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
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @public
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

/**
 * @public
 */
export interface DeleteManagedPrefixListRequest {
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
}

/**
 * @public
 */
export interface DeleteManagedPrefixListResult {
  /**
   * @public
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

/**
 * @public
 */
export interface DeleteNatGatewayRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNatGatewayResult {
  /**
   * @public
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;
}

/**
 * @public
 */
export interface DeleteNetworkAclRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkAclEntryRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>Indicates whether the rule is an egress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * @public
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * @public
   * <p>The rule number of the entry to delete.</p>
   */
  RuleNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeResult {
  /**
   * @public
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId?: string;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId: string | undefined;

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
export interface DeleteNetworkInsightsAccessScopeAnalysisResult {
  /**
   * @public
   * <p>The ID of the Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysisId?: string;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsAnalysisResult {
  /**
   * @public
   * <p>The ID of the network insights analysis.</p>
   */
  NetworkInsightsAnalysisId?: string;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkInsightsPathResult {
  /**
   * @public
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;
}

/**
 * @public
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * @public
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId: string | undefined;

  /**
   * @public
   * <p>Specify <code>true</code> to remove the permission even if the network interface is
   * 			attached to an instance.</p>
   */
  Force?: boolean;

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
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * @public
   * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface DeletePlacementGroupRequest {
  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The name of the placement group.</p>
   */
  GroupName: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicIpv4PoolRequest {
  /**
   * @public
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * @public
   * <p>The ID of the public IPv4 pool you want to delete.</p>
   */
  PoolId: string | undefined;
}

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
  ...(obj.OidcOptions && {
    OidcOptions: CreateVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog(obj.OidcOptions),
  }),
});

/**
 * @internal
 */
export const CreateVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: CreateVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

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
  ...(obj.CustomerGatewayConfiguration && { CustomerGatewayConfiguration: SENSITIVE_STRING }),
  ...(obj.Options && { Options: VpnConnectionOptionsFilterSensitiveLog(obj.Options) }),
});

/**
 * @internal
 */
export const CreateVpnConnectionResultFilterSensitiveLog = (obj: CreateVpnConnectionResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});
