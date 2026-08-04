// smithy-typescript generated code
import type {
  CapacityManagerStatus,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  MembershipType,
  TransitGatewayAttachmentResourceType,
} from "./enums";
import type { ByoipCidr, IpPermission, NatGatewayAddress, TagSpecification } from "./models_0";
import type { LocalGatewayRoute } from "./models_1";
import type { TransitGatewayRoute } from "./models_2";
import type { ClientVpnConnectionStatus, Filter } from "./models_3";
import type { InstanceState, NetworkInsightsAccessScopeAnalysis, NetworkInsightsAnalysis } from "./models_4";
import type { CapacityManagerMonitoredTagKey } from "./models_6";
import type { InstanceMonitoring } from "./models_7";

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that
   *          support them.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for a <code>gp3</code>, <code>io1</code>, or <code>io2</code>
   *    	   volume.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default
   *          is the snapshot size.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The volume type.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   * @public
   */
  Ebs?: ScheduledInstancesEbs | undefined;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes an IPv6 address.</p>
 * @public
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The IPv4 address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   * @public
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses.</p>
   * @public
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 * @public
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   * @public
   */
  Monitoring?: ScheduledInstancesMonitoring | undefined;

  /**
   * <p>The network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[] | undefined;

  /**
   * <p>The placement information.</p>
   * @public
   */
  Placement?: ScheduledInstancesPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded MIME user data.</p>
   * @public
   */
  UserData?: string | undefined;
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
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

  /**
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   * @public
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   * @public
   */
  ScheduledInstanceId: string | undefined;
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 * @public
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   * @public
   */
  InstanceIdSet?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
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
   *                   <code>route-search.supernet-of-match</code> - The routes with a CIDR that encompass the CIDR filter.
   *                For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify <code>supernet-of-match</code>
   *                as 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the route.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code> - The route type.</p>
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
 * @public
 */
export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: LocalGatewayRoute[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
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
 * <p>Describes the  transit gateway multicast group resources.</p>
 * @public
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupMember?: boolean | undefined;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   * @public
   */
  GroupSource?: boolean | undefined;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   * @public
   */
  MemberType?: MembershipType | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: MembershipType | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   * @public
   */
  MulticastGroups?: TransitGatewayMulticastGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>attachment.transit-gateway-attachment-id</code>- The id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-id</code> - The resource id of the transit gateway attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.resource-type</code> - The attachment resource type. Valid values
   *                     are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> |
   *                         <code>peering</code> | <code>connect</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code> - The ID of the prefix list.</p>
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
   *                   <code>type</code> - The type of route (<code>propagated</code> |
   *                   <code>static</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return. If a value is not provided, the default is
   *          1000.</p>
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
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   * @public
   */
  Routes?: TransitGatewayRoute[] | undefined;

  /**
   * <p>Indicates whether there are additional routes available.</p>
   * @public
   */
  AdditionalRoutesAvailable?: boolean | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * <p>The ID of the instance.</p>
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
export interface StartDeclarativePoliciesReportRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the report will be saved. The bucket must be in the
   *             same Region where the report generation request is made.</p>
   * @public
   */
  S3Bucket: string | undefined;

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
  TargetId: string | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface StartDeclarativePoliciesReportResult {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an instance state change.</p>
 * @public
 */
export interface InstanceStateChange {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The current state of the instance.</p>
   * @public
   */
  CurrentState?: InstanceState | undefined;

  /**
   * <p>The previous state of the instance.</p>
   * @public
   */
  PreviousState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   * @public
   */
  StartingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
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

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The member accounts that contain resources that the path can traverse.</p>
   * @public
   */
  AdditionalAccounts?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   * @public
   */
  FilterInArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path will ignore.</p>
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">How to ensure idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
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
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your Amazon EC2 instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p> Default: <code>false</code>
   *          </p>
   * @public
   */
  Hibernate?: boolean | undefined;

  /**
   * <p>Specifies whether to bypass the graceful OS shutdown process when the instance is
   *             stopped.</p>
   *          <important>
   *             <p>Bypassing the graceful OS shutdown might result in data loss or corruption (for
   *                 example, memory contents not flushed to disk or loss of in-flight IOs) or skipped
   *                 shutdown scripts.</p>
   *          </important>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipOsShutdown?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Forces the instance to stop. The instance will first attempt a graceful shutdown,
   *             which includes flushing file system caches and metadata. If the graceful shutdown fails
   *             to complete within the timeout period, the instance shuts down forcibly without flushing
   *             the file system caches and metadata.</p>
   *          <p>After using this option, you must perform file system check and repair procedures.
   *             This option is not recommended for Windows instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot
   *                     Amazon EC2 instance stop issues</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   * @public
   */
  StoppingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 * @public
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The state of the client connection.</p>
   * @public
   */
  PreviousStatus?: ClientVpnConnectionStatus | undefined;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   * @public
   */
  CurrentStatus?: ClientVpnConnectionStatus | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * <p>The user who established the terminated client connections.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The current state of the client connections.</p>
   * @public
   */
  ConnectionStatuses?: TerminateConnectionStatus[] | undefined;
}

/**
 * @public
 */
export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *          <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Forces the instances to terminate. The instance will first attempt a graceful
   *             shutdown, which includes flushing file system caches and metadata. If the graceful
   *             shutdown fails to complete within the timeout period, the instance shuts down forcibly
   *             without flushing the file system caches and metadata.</p>
   * @public
   */
  Force?: boolean | undefined;

  /**
   * <p>Specifies whether to bypass the graceful OS shutdown process when the instance is
   *             terminated.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipOsShutdown?: boolean | undefined;

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
export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   * @public
   */
  TerminatingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 prefixes to unassign from the network interface.</p>
   * @public
   */
  Ipv6Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   * @public
   */
  Ipv6Addresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   * @public
   */
  UnassignedIpv6Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 prefixes that have been unassigned from  the network interface.</p>
   * @public
   */
  UnassignedIpv6Prefixes?: string[] | undefined;
}

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 * @public
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can
   *             specify this option multiple times to unassign more than one IP address.</p>
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressRequest {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The private IPv4 addresses you want to unassign.</p>
   * @public
   */
  PrivateIpAddresses: string[] | undefined;

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
export interface UnassignPrivateNatGatewayAddressResult {
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
export interface UnlockSnapshotRequest {
  /**
   * <p>The ID of the snapshot to unlock.</p>
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
 * @public
 */
export interface UnlockSnapshotResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface UnmonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

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
export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerMonitoredTagKeysRequest {
  /**
   * <p>
   * The tag keys to activate for monitoring. Once activated, these tag keys will be included as dimensions in capacity metric data.
   * </p>
   * @public
   */
  ActivateTagKeys?: string[] | undefined;

  /**
   * <p>
   * The tag keys to deactivate. Deactivated tag keys will no longer be included as dimensions in capacity metric data.
   * </p>
   * @public
   */
  DeactivateTagKeys?: string[] | undefined;

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
export interface UpdateCapacityManagerMonitoredTagKeysResult {
  /**
   * <p>
   * The list of tag keys affected by the update, including their current status and metadata.
   * </p>
   * @public
   */
  CapacityManagerTagKeys?: CapacityManagerMonitoredTagKey[] | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerOrganizationsAccessRequest {
  /**
   * <p>
   *     Specifies whether to enable or disable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager aggregates data from all accounts in your organization.
   * </p>
   * @public
   */
  OrganizationsAccess: boolean | undefined;

  /**
   * <p>
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If
   * you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
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
export interface UpdateCapacityManagerOrganizationsAccessResult {
  /**
   * <p>
   * The current status of Capacity Manager after the update operation.
   * </p>
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * <p>
   * The updated Organizations access setting indicating whether cross-account data aggregation is enabled.
   * </p>
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationRequest {
  /**
   * <p>
   * 			The ID of the source Capacity Reservation containing the interruptible allocation to modify.
   * 		</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>
   * 			The new number of instances to allocate. Enter a higher number to add more capacity to share, or a lower number to reclaim capacity to your source Capacity Reservation.
   * 		</p>
   * @public
   */
  TargetInstanceCount: number | undefined;

  /**
   * <p>
   * 			Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   * 		</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationResult {
  /**
   * <p>
   * 			The ID of the interruptible Capacity Reservation that was modified.
   * 		</p>
   * @public
   */
  InterruptibleCapacityReservationId?: string | undefined;

  /**
   * <p>
   * 			The ID of the source Capacity Reservation to which capacity was reclaimed or from which capacity was allocated.
   * 		</p>
   * @public
   */
  SourceCapacityReservationId?: string | undefined;

  /**
   * <p>
   * 			The current number of instances allocated to the interruptible reservation.
   * 		</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>
   * 			The requested number of instances for the interruptible Capacity Reservation.
   * 		</p>
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * <p>
   * 			The current status of the allocation (updating during reclamation, active when complete).
   * 		</p>
   * @public
   */
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;

  /**
   * <p>
   * 			The interruption type for the interruptible reservation.
   * 		</p>
   * @public
   */
  InterruptionType?: InterruptionType | undefined;
}

/**
 * <p>Describes the description of a security group rule.</p>
 *          <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>The description of the security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the
   *             security group ID or the security group name. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
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
export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
