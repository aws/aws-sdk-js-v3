// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActiveInstance,
  ActivityStatus,
  AllocationStrategy,
  AlternatePathHint,
  BatchState,
  CurrencyCodeValues,
  Explanation,
  IamInstanceProfileSpecification,
  IpamResourceDiscoveryAssociation,
  IpPermission,
  PathComponent,
  ReservedInstancesListing,
  ResourceType,
  SecurityGroupRule,
  SecurityGroupVpcAssociationState,
  Tag,
  TagSpecification,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  TrunkInterfaceAssociation,
  UserIdGroupPair,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
} from "./models_0";

import {
  _InstanceType,
  AttributeValue,
  BlockDeviceMapping,
  ConnectionTrackingSpecificationRequest,
  EnaSrdSpecificationRequest,
  FleetLaunchTemplateSpecification,
  FleetType,
  InstanceInterruptionBehavior,
  InstanceRequirements,
  IpAddressType,
  Ipam,
  IpamScope,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  KeyType,
  LaunchTemplate,
  MacModificationTask,
  PrivateIpAddressSpecification,
  SpotInstanceType,
  Subnet,
  TargetCapacityUnitType,
  Tenancy,
  VolumeType,
} from "./models_1";

import {
  DnsEntry,
  GroupIdentifier,
  InstanceIpv6Address,
  LaunchTemplateVersion,
  LaunchTemplateVersionFilterSensitiveLog,
  LocalGatewayRouteTable,
  LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
  LocalGatewayRouteTableVpcAssociation,
  LocalGatewayVirtualInterface,
  LocalGatewayVirtualInterfaceGroup,
  ManagedPrefixList,
  NatGateway,
  NetworkAcl,
  NetworkInsightsAccessScope,
  NetworkInsightsPath,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  ReplaceRootVolumeTask,
  RouteServer,
  RouteServerEndpoint,
  RouteServerPeer,
  RouteTable,
  Snapshot,
  SnapshotState,
  SpotDatafeedSubscription,
  SpotInstanceStateFault,
  State,
  StorageTier,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
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
  VpcBlockPublicAccessExclusion,
} from "./models_2";

import { ConnectionNotification, Filter, IdFormat } from "./models_3";

import { AttributeBooleanValue, EventInformation, PermissionGroup, ProductCode } from "./models_4";

/**
 * @public
 */
export interface DescribeIpamResourceDiscoveryAssociationsResult {
  /**
   * <p>The resource discovery associations.</p>
   * @public
   */
  IpamResourceDiscoveryAssociations?: IpamResourceDiscoveryAssociation[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsRequest {
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
   * <p>The IDs of the IPAMs you want information on.</p>
   * @public
   */
  IpamIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the IPAMs.</p>
   * @public
   */
  Ipams?: Ipam[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesRequest {
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
   * <p>The IDs of the scopes you want information on.</p>
   * @public
   */
  IpamScopeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpamScopesResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The scopes you want information on.</p>
   * @public
   */
  IpamScopes?: IpamScope[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsRequest {
  /**
   * <p>The IDs of the IPv6 address pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

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

  /**
   * <p>One or more filters.</p>
   *          <ul>
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
}

/**
 * <p>Describes a CIDR block for an address pool.</p>
 * @public
 */
export interface PoolCidrBlock {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Describes an IPv6 address pool.</p>
 * @public
 */
export interface Ipv6Pool {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The description for the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The CIDR blocks for the address pool.</p>
   * @public
   */
  PoolCidrBlocks?: PoolCidrBlock[] | undefined;

  /**
   * <p>Any tags for the address pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpv6PoolsResult {
  /**
   * <p>Information about the IPv6 address pools.</p>
   * @public
   */
  Ipv6Pools?: Ipv6Pool[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsRequest {
  /**
   * <p>The key pair names.</p>
   *          <p>Default: Describes all of your key pairs.</p>
   * @public
   */
  KeyNames?: string[] | undefined;

  /**
   * <p>The IDs of the key pairs.</p>
   * @public
   */
  KeyPairIds?: string[] | undefined;

  /**
   * <p>If <code>true</code>, the public key material is included in the response.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  IncludePublicKey?: boolean | undefined;

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
   *                   <code>key-pair-id</code> - The ID of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fingerprint</code> - The fingerprint of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key-name</code> - The name of the key pair.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a key pair.</p>
 * @public
 */
export interface KeyPairInfo {
  /**
   * <p>The ID of the key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>The type of key pair.</p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p>Any tags applied to the key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The public key material.</p>
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * <p>If you used Amazon EC2 to create the key pair, this is the date and time when the key
   *             was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   *          <p>If you imported an existing key pair to Amazon EC2, this is the date and time the key
   *             was imported, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO
   *                 8601 date-time format</a>, in the UTC time zone.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The name of the key pair.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which
   *                    is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   *          <p>If you used <a>ImportKeyPair</a> to provide Amazon Web Services the public key:</p>
   *          <ul>
   *             <li>
   *                <p>For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   *             </li>
   *             <li>
   *                <p>For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256
   *                     digest, which is the default for OpenSSH, starting with <a href="http://www.openssh.com/txt/release-6.8">OpenSSH 6.8</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyPairsResult {
  /**
   * <p>Information about the key pairs.</p>
   * @public
   */
  KeyPairs?: KeyPairInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more launch template IDs.</p>
   * @public
   */
  LaunchTemplateIds?: string[] | undefined;

  /**
   * <p>One or more launch template names.</p>
   * @public
   */
  LaunchTemplateNames?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-template-name</code> - The name of the launch template.</p>
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
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplatesResult {
  /**
   * <p>Information about the launch templates.</p>
   * @public
   */
  LaunchTemplates?: LaunchTemplate[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsRequest {
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
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the launch template ID or the launch template name, but not both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>To describe one or more versions of a specified launch template, you must specify
   *             either the launch template name or the launch template ID, but not both.</p>
   *          <p>To describe all the latest or default launch template versions in your account, you
   *             must omit this parameter.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>One or more versions of the launch template. Valid values depend on whether you are
   *             describing a specified launch template (by ID or name) or all launch templates in your
   *             account.</p>
   *          <p>To describe one or more versions of a specified launch template, valid values are
   *                 <code>$Latest</code>, <code>$Default</code>, and numbers.</p>
   *          <p>To describe all launch templates in your account that are defined as the latest
   *             version, the valid value is <code>$Latest</code>. To describe all launch templates in
   *             your account that are defined as the default version, the valid value is
   *                 <code>$Default</code>. You can specify <code>$Latest</code> and
   *                 <code>$Default</code> in the same request. You cannot specify numbers.</p>
   * @public
   */
  Versions?: string[] | undefined;

  /**
   * <p>The version number after which to describe launch template versions.</p>
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * <p>The version number up to which to describe launch template versions.</p>
   * @public
   */
  MaxVersion?: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned <code>NextToken</code> value. This value
   *             can be between 1 and 200.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time the launch template version was
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ebs-optimized</code> - A boolean that indicates whether the instance is
   *                     optimized for Amazon EBS I/O.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-endpoint</code> - Indicates whether the HTTP metadata endpoint on
   *                     your instances is enabled (<code>enabled</code> | <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-protocol-ipv4</code> - Indicates whether the IPv4 endpoint for the
   *                     instance metadata service is enabled (<code>enabled</code> |
   *                         <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-resource-group-arn</code> - The ARN of the host resource group in
   *                     which to launch the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-tokens</code> - The state of token usage for your instance metadata
   *                     requests (<code>optional</code> | <code>required</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-instance-profile</code> - The ARN of the IAM instance
   *                     profile.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>is-default-version</code> - A boolean that indicates whether the launch
   *                     template version is the default version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>license-configuration-arn</code> - The ARN of the license
   *                     configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-card-index</code> - The index of the network card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ram-disk-id</code> - The RAM disk ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>If <code>true</code>, and if a Systems Manager parameter is specified for
   *                 <code>ImageId</code>, the AMI ID is displayed in the response for
   *                 <code>imageId</code>.</p>
   *          <p>If <code>false</code>, and if a Systems Manager parameter is specified for
   *                 <code>ImageId</code>, the parameter is displayed in the response for
   *                 <code>imageId</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id">Use a Systems Manager parameter instead of an AMI ID</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ResolveAlias?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeLaunchTemplateVersionsResult {
  /**
   * <p>Information about the launch template versions.</p>
   * @public
   */
  LaunchTemplateVersions?: LaunchTemplateVersion[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the local gateway route tables.</p>
   * @public
   */
  LocalGatewayRouteTableIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the
   *                local gateway route table.</p>
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
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the local gateway route table.</p>
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
export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * <p>Information about the local gateway route tables.</p>
   * @public
   */
  LocalGatewayRouteTables?: LocalGatewayRouteTable[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the local
   *                gateway route table for the virtual interface group.</p>
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
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual
   *                interface group association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
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
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVirtualInterfaceGroupAssociations?:
    | LocalGatewayRouteTableVirtualInterfaceGroupAssociation[]
    | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociationIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-route-table-arn</code> - The Amazon Resource Name (ARN) of the local
   *                gateway route table for the association.</p>
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
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway route table
   *                for the association.</p>
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
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  LocalGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysRequest {
  /**
   * <p>The IDs of the local gateways.</p>
   * @public
   */
  LocalGatewayIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the association.</p>
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
 * <p>Describes a local gateway.</p>
 * @public
 */
export interface LocalGateway {
  /**
   * <p>The ID of the local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The state of the local gateway.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The tags assigned to the local gateway.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewaysResult {
  /**
   * <p>Information about the local gateways.</p>
   * @public
   */
  LocalGateways?: LocalGateway[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * <p>The IDs of the virtual interface groups.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of a local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-group-id</code> - The ID of the virtual interface group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</p>
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
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * <p>The virtual interface groups.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * <p>The IDs of the virtual interfaces.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local-address</code> - The local address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-bgp-asn</code> - The Border Gateway Protocol (BGP) Autonomous System Number (ASN)
   *                of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-id</code> - The ID of the local gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the local gateway virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-address</code> - The peer address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-bgp-asn</code> - The peer BGP ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the VLAN.</p>
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
export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * <p>Information about the virtual interfaces.</p>
   * @public
   */
  LocalGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lock-state</code> - The state of the snapshot lock (<code>compliance-cooloff</code> |
   *           <code>governance</code> | <code>compliance</code> | <code>expired</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

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
   * <p>The IDs of the snapshots for which to view the lock status.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

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
export const LockState = {
  compliance: "compliance",
  compliance_cooloff: "compliance-cooloff",
  expired: "expired",
  governance: "governance",
} as const;

/**
 * @public
 */
export type LockState = (typeof LockState)[keyof typeof LockState];

/**
 * <p>Information about a locked snapshot.</p>
 * @public
 */
export interface LockedSnapshotsInfo {
  /**
   * <p>The account ID of the Amazon Web Services account that owns the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The state of the snapshot lock. Valid states include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>compliance-cooloff</code> - The snapshot has been locked in
   *           compliance mode but it is still within the cooling-off period. The snapshot can't be
   *           deleted, but it can be unlocked and the lock settings can be modified by users with
   *           appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>governance</code> - The snapshot is locked in governance mode. The
   *           snapshot can't be deleted, but it can be unlocked and the lock settings can be
   *           modified by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - The snapshot is locked in compliance mode and the
   *           cooling-off period has expired. The snapshot can't be unlocked or deleted. The lock
   *           duration can only be increased by users with appropriate permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expired</code> - The snapshot was locked in compliance or governance
   *           mode but the lock duration has expired. The snapshot is not locked and can be deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The period of time for which the snapshot is locked, in days.</p>
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * <p>The compliance mode cooling-off period, in hours.</p>
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * <p>The date and time at which the compliance mode cooling-off period expires, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  CoolOffPeriodExpiresOn?: Date | undefined;

  /**
   * <p>The date and time at which the snapshot was locked, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock duration started, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>If you lock a snapshot that is in the <code>pending</code> state, the lock duration
   *       starts only once the snapshot enters the <code>completed</code> state.</p>
   * @public
   */
  LockDurationStartTime?: Date | undefined;

  /**
   * <p>The date and time at which the lock will expire, in the UTC time zone (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockExpiresOn?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLockedSnapshotsResult {
  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: LockedSnapshotsInfo[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacHostsRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the EC2 Mac Dedicated Host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type size that the EC2 Mac Dedicated Host is
   *                         configured to support.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>
   *             The IDs of the EC2 Mac Dedicated Hosts.
   *         </p>
   * @public
   */
  HostIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *             Information about the EC2 Mac Dedicated Host.
 *         </p>
 * @public
 */
export interface MacHost {
  /**
   * <p>
   *             The EC2 Mac Dedicated Host ID.
   *         </p>
   * @public
   */
  HostId?: string | undefined;

  /**
   * <p>
   *             The latest macOS versions that the EC2 Mac Dedicated Host can launch without being upgraded.
   *         </p>
   * @public
   */
  MacOSLatestSupportedVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMacHostsResult {
  /**
   * <p>
   *             Information about the EC2 Mac Dedicated Hosts.
   *         </p>
   * @public
   */
  MacHosts?: MacHost[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacModificationTasksRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies one or more filters for the request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the task was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task-state</code> - The state of the task (<code>successful</code> | <code>failed</code> |
   *                <code>in-progress</code> | <code>pending</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac-system-integrity-protection-configuration.sip-status</code> - The overall SIP
   *                state requested in the task (<code>enabled</code> | <code>disabled</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start-time</code> - The date and time the task was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>task-type</code> - The type of task (<code>sip-modification</code> | <code>volume-ownership-delegation</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The ID of task.</p>
   * @public
   */
  MacModificationTaskIds?: string[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMacModificationTasksResult {
  /**
   * <p>Information about the tasks.</p>
   * @public
   */
  MacModificationTasks?: MacModificationTask[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
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
   * <p>One or more prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedPrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the prefix lists.</p>
   * @public
   */
  PrefixLists?: ManagedPrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more Elastic IP addresses.</p>
   * @public
   */
  PublicIps?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>moving-status</code> - The status of the Elastic IP address
   *           (<code>MovingToVpc</code> | <code>RestoringToClassic</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *       <code>NextToken</code> value. This value can be between 5 and 1000; if
   *       <code>MaxResults</code> is given a value outside of this range, an error is returned.</p>
   *          <p>Default: If no value is provided, the default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MoveStatus = {
  movingToVpc: "movingToVpc",
  restoringToClassic: "restoringToClassic",
} as const;

/**
 * @public
 */
export type MoveStatus = (typeof MoveStatus)[keyof typeof MoveStatus];

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes the status of a moving Elastic IP address.</p>
 * @public
 */
export interface MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved or restored.</p>
   * @public
   */
  MoveStatus?: MoveStatus | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMovingAddressesResult {
  /**
   * <p>The status for each Elastic IP address.</p>
   * @public
   */
  MovingAddressStatuses?: MovingAddressStatus[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysRequest {
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
   *                   <code>vpc-id</code> - The ID of the VPC in which the NAT gateway resides.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   * 	To get the next page of items, make another request with the token returned in the output.
   * 	For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The IDs of the NAT gateways.</p>
   * @public
   */
  NatGatewayIds?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNatGatewaysResult {
  /**
   * <p>Information about the NAT gateways.</p>
   * @public
   */
  NatGateways?: NatGateway[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsRequest {
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
   * <p>The IDs of the network ACLs.</p>
   * @public
   */
  NetworkAclIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The ID of an association ID for the ACL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.network-acl-id</code> - The ID of the network ACL involved in the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default</code> - Indicates whether the ACL is the default network ACL for the VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.cidr</code> - The IPv4 CIDR range specified in the entry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.icmp.code</code> - The ICMP code specified in the entry, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.icmp.type</code> - The ICMP type specified in the entry, if any.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.ipv6-cidr</code> - The IPv6 CIDR range specified in the entry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.port-range.from</code> - The start of the port range specified in the entry. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.port-range.to</code> - The end of the port range specified in the entry. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.protocol</code> - The protocol specified in the entry (<code>tcp</code> | <code>udp</code> | <code>icmp</code> or a protocol number).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.rule-action</code> - Allows or denies the matching traffic (<code>allow</code> | <code>deny</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.egress</code> - A Boolean that indicates the type of rule. Specify <code>true</code>
   * 		                for egress rules, or <code>false</code> for ingress rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>entry.rule-number</code> - The number of an entry (in other words, rule) in
   *                     the set of ACL entries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-acl-id</code> - The ID of the network ACL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the network ACL.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the network ACL.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkAclsResult {
  /**
   * <p>Information about the network ACLs.</p>
   * @public
   */
  NetworkAcls?: NetworkAcl[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesRequest {
  /**
   * <p>The IDs of the Network Access Scope analyses.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisIds?: string[] | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or after this time.</p>
   * @public
   */
  AnalysisStartTimeBegin?: Date | undefined;

  /**
   * <p>Filters the results based on the start time. The analysis must have started on or before this time.</p>
   * @public
   */
  AnalysisStartTimeEnd?: Date | undefined;

  /**
   * <p>There are no supported filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * @enum
 */
export const FindingsFound = {
  false: "false",
  true: "true",
  unknown: "unknown",
} as const;

/**
 * @public
 */
export type FindingsFound = (typeof FindingsFound)[keyof typeof FindingsFound];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  failed: "failed",
  running: "running",
  succeeded: "succeeded",
} as const;

/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * <p>Describes a Network Access Scope analysis.</p>
 * @public
 */
export interface NetworkInsightsAccessScopeAnalysis {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisArn?: string | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The warning message.</p>
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * <p>The analysis start date.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The analysis end date.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates whether there are findings.</p>
   * @public
   */
  FindingsFound?: FindingsFound | undefined;

  /**
   * <p>The number of network interfaces analyzed.</p>
   * @public
   */
  AnalyzedEniCount?: number | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesResult {
  /**
   * <p>The Network Access Scope analyses.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalyses?: NetworkInsightsAccessScopeAnalysis[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAccessScopesRequest {
  /**
   * <p>The IDs of the Network Access Scopes.</p>
   * @public
   */
  NetworkInsightsAccessScopeIds?: string[] | undefined;

  /**
   * <p>There are no supported filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
export interface DescribeNetworkInsightsAccessScopesResult {
  /**
   * <p>The Network Access Scopes.</p>
   * @public
   */
  NetworkInsightsAccessScopes?: NetworkInsightsAccessScope[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesRequest {
  /**
   * <p>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</p>
   * @public
   */
  NetworkInsightsAnalysisIds?: string[] | undefined;

  /**
   * <p>The ID of the path. You must specify either a path ID or analysis IDs.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

  /**
   * <p>The time when the network insights analyses started.</p>
   * @public
   */
  AnalysisStartTime?: Date | undefined;

  /**
   * <p>The time when the network insights analyses ended.</p>
   * @public
   */
  AnalysisEndTime?: Date | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>path-found - A Boolean value that indicates whether a feasible path is found.</p>
   *             </li>
   *             <li>
   *                <p>status - The status of the analysis (running | succeeded | failed).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * <p>Describes a network insights analysis.</p>
 * @public
 */
export interface NetworkInsightsAnalysis {
  /**
   * <p>The ID of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network insights analysis.</p>
   * @public
   */
  NetworkInsightsAnalysisArn?: string | undefined;

  /**
   * <p>The ID of the path.</p>
   * @public
   */
  NetworkInsightsPathId?: string | undefined;

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
   * <p>The Amazon Resource Names (ARN) of the resources that the path must ignore.</p>
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * <p>The time the analysis started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The status of the network insights analysis.</p>
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * <p>The status message, if the status is <code>failed</code>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The warning message.</p>
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * <p>Indicates whether the destination is reachable from the source.</p>
   * @public
   */
  NetworkPathFound?: boolean | undefined;

  /**
   * <p>The components in the path from source to destination.</p>
   * @public
   */
  ForwardPathComponents?: PathComponent[] | undefined;

  /**
   * <p>The components in the path from destination to source.</p>
   * @public
   */
  ReturnPathComponents?: PathComponent[] | undefined;

  /**
   * <p>The explanations. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
   * @public
   */
  Explanations?: Explanation[] | undefined;

  /**
   * <p>Potential intermediate components.</p>
   * @public
   */
  AlternatePathHints?: AlternatePathHint[] | undefined;

  /**
   * <p>Potential intermediate accounts.</p>
   * @public
   */
  SuggestedAccounts?: string[] | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsAnalysesResult {
  /**
   * <p>Information about the network insights analyses.</p>
   * @public
   */
  NetworkInsightsAnalyses?: NetworkInsightsAnalysis[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInsightsPathsRequest {
  /**
   * <p>The IDs of the paths.</p>
   * @public
   */
  NetworkInsightsPathIds?: string[] | undefined;

  /**
   * <p>The filters. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>destination - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.source-address - The source IPv4 address at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.source-port-range - The source port range at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.destination-address - The destination IPv4 address at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-source.destination-port-range - The destination port range at the source.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.source-address - The source IPv4 address at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.source-port-range - The source port range at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.destination-address - The destination IPv4 address at the destination.</p>
   *             </li>
   *             <li>
   *                <p>filter-at-destination.destination-port-range - The destination port range at the destination.</p>
   *             </li>
   *             <li>
   *                <p>protocol - The protocol.</p>
   *             </li>
   *             <li>
   *                <p>source - The ID of the resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *    To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
export interface DescribeNetworkInsightsPathsResult {
  /**
   * <p>Information about the paths.</p>
   * @public
   */
  NetworkInsightsPaths?: NetworkInsightsPath[] | undefined;

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
export const NetworkInterfaceAttribute = {
  associatePublicIpAddress: "associatePublicIpAddress",
  attachment: "attachment",
  description: "description",
  groupSet: "groupSet",
  sourceDestCheck: "sourceDestCheck",
} as const;

/**
 * @public
 */
export type NetworkInterfaceAttribute = (typeof NetworkInterfaceAttribute)[keyof typeof NetworkInterfaceAttribute];

/**
 * <p>Contains the parameters for DescribeNetworkInterfaceAttribute.</p>
 * @public
 */
export interface DescribeNetworkInterfaceAttributeRequest {
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

  /**
   * <p>The attribute of the network interface. This parameter is required.</p>
   * @public
   */
  Attribute?: NetworkInterfaceAttribute | undefined;
}

/**
 * <p>Contains the output of DescribeNetworkInterfaceAttribute.</p>
 * @public
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * <p>The attachment (if any) of the network interface.</p>
   * @public
   */
  Attachment?: NetworkInterfaceAttachment | undefined;

  /**
   * <p>The description of the network interface.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The security groups associated with the network interface.</p>
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether to assign a public IPv4 address to a network interface. This option
   *             can be enabled for any network interface but will only apply to the primary network
   *             interface (eth0).</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfacePermissions.</p>
 * @public
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * <p>The network interface permission IDs.</p>
   * @public
   */
  NetworkInterfacePermissionIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-permission-id</code> -
   *                     The ID of the permission.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.network-interface-id</code> - The ID of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-account-id</code> - The Amazon Web Services account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.aws-service</code> - The Amazon Web Services
   *                     service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-permission.permission</code> - The type of permission
   *                         (<code>INSTANCE-ATTACH</code> | <code>EIP-ASSOCIATE</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the
   *             end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. If this parameter is not
   *             specified, up to 50 results are returned by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the output for DescribeNetworkInterfacePermissions.</p>
 * @public
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * <p>The network interface permissions.</p>
   * @public
   */
  NetworkInterfacePermissions?: NetworkInterfacePermission[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *                 <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 * @public
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the
   *             end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. You cannot specify this
   *             parameter and the network interface IDs parameter in the same request. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The network interface IDs.</p>
   *          <p>Default: Describes all your network interfaces.</p>
   * @public
   */
  NetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.allocation-id</code> - The allocation ID returned when you
   *                     allocated the Elastic IP address (IPv4) for your network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.association-id</code> - The association ID returned when the
   *                     network interface was associated with an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.owner-id</code> - The owner ID of the addresses
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.association.public-ip</code> - The association ID returned
   *                     when the network interface was associated with the Elastic IP address
   *                     (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.primary</code> - Whether the private IPv4 address is the
   *                     primary IP address associated with the network interface. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>addresses.private-ip-address</code> - The private IPv4 addresses
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.ip-owner-id</code> - The owner of the Elastic IP address
   *                     (IPv4) associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.public-ip</code> - The address of the Elastic IP address
   *                     (IPv4) bound to the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.public-dns-name</code> - The public DNS name for the network
   *                     interface (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attach-time</code> - The time that the network interface was
   *                     attached to an instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.attachment-id</code> - The ID of the interface
   *                     attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.delete-on-termination</code> - Indicates whether the
   *                     attachment is deleted when an instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.device-index</code> - The device index to which the network
   *                     interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-id</code> - The ID of the instance to which the
   *                     network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.instance-owner-id</code> - The owner ID of the instance to
   *                     which the network interface is attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>attachment.status</code> - The status of the attachment
   *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *                         <code>detached</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of a security group associated with the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>interface-type</code> - The type of network interface
   *                         (<code>api_gateway_managed</code> |
   *                         <code>aws_codestar_connections_managed</code> | <code>branch</code> |
   *                         <code>ec2_instance_connect_endpoint</code> | <code>efa</code> |
   *                         <code>efa-only</code> | <code>efs</code> |
   *                         <code>evs</code> |
   *                         <code>gateway_load_balancer</code> |
   *                         <code>gateway_load_balancer_endpoint</code> |
   *                         <code>global_accelerator_managed</code> | <code>interface</code> |
   *                         <code>iot_rules_managed</code> | <code>lambda</code> |
   *                         <code>load_balancer</code> | <code>nat_gateway</code> |
   *                         <code>network_load_balancer</code> | <code>quicksight</code> |
   *                         <code>transit_gateway</code> | <code>trunk</code> |
   *                         <code>vpc_endpoint</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mac-address</code> - The MAC address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface-id</code> - The ID of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.managed</code> - A Boolean that indicates whether this is a
   *                     managed network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>operator.principal</code> - The principal that manages the network
   *                     interface. Only valid for managed network interfaces, where <code>managed</code>
   *                     is <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the network
   *                     interface owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-dns-name</code> - The private DNS name of the network interface
   *                     (IPv4).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>private-ip-address</code> - The private IPv4 address or addresses of the
   *                     network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-id</code> - The alias or Amazon Web Services account ID of the
   *                     principal or service that created the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>requester-managed</code> - Indicates whether the network interface is
   *                     being managed by an Amazon Web Services service (for example, Amazon Web Services Management Console, Auto Scaling, and so on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-dest-check</code> - Indicates whether the network interface
   *                     performs source/destination checking. A value of <code>true</code> means
   *                     checking is enabled, and <code>false</code> means checking is disabled. The
   *                     value must be <code>false</code> for the network interface to perform network
   *                     address translation (NAT) in your VPC. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the network interface. If the network
   *                     interface is not attached to an instance, the status is <code>available</code>;
   *                     if a network interface is attached to an instance the status is
   *                         <code>in-use</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>subnet-id</code> - The ID of the subnet for the network
   *                     interface.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the network interface.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * <p>Information about the network interfaces.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *                 <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsRequest {
  /**
   * <p>The IDs of the Outpost LAGs.</p>
   * @public
   */
  OutpostLagIds?: string[] | undefined;

  /**
   * <p>The filters to use for narrowing down the request. The following filters are
   *          supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-id</code> - The ID of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-arn</code> - The ARN of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-id</code> - The Outpost ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Outpost ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the address pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-address</code> - The local address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-address</code> - The peer address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>peer-bgp-asn</code> - The peer BGP ASN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-lag-id</code> - The Outpost LAG ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>configuration-state</code> - The configuration state of the service link virtual interface.</p>
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
 * <p>Describes an Outpost link aggregation group (LAG).</p>
 * @public
 */
export interface OutpostLag {
  /**
   * <p>The Amazon Resource Number (ARN) of the Outpost LAG.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Outpost LAG owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The current state of the Outpost LAG.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ID of the Outpost LAG.</p>
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * <p>The IDs of the local gateway virtual interfaces associated with the Outpost LAG.</p>
   * @public
   */
  LocalGatewayVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The service link virtual interface IDs associated with the Outpost LAG.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The tags associated with the Outpost LAG.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeOutpostLagsResult {
  /**
   * <p>The Outpost LAGs.</p>
   * @public
   */
  OutpostLags?: OutpostLag[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsRequest {
  /**
   * <p>The IDs of the placement groups.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The names of the placement groups.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You can specify a name only if the placement group is owned by your
   *                     account.</p>
   *             </li>
   *             <li>
   *                <p>If a placement group is <i>shared</i> with your account,
   *                     specifying the name results in an error. You must use the <code>GroupId</code>
   *                     parameter instead.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-name</code> - The name of the placement group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-arn</code> - The Amazon Resource Name (ARN) of the placement
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spread-level</code> - The spread level for the placement group
   *                         (<code>host</code> | <code>rack</code>). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the placement group (<code>pending</code> |
   *                         <code>available</code> | <code>deleting</code> |
   *                     <code>deleted</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>strategy</code> - The strategy of the placement group
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribePlacementGroupsResult {
  /**
   * <p>Information about the placement groups.</p>
   * @public
   */
  PlacementGroups?: PlacementGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>prefix-list-id</code>: The ID of a prefix list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>prefix-list-name</code>: The name of a prefix list.</p>
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
   * <p>One or more prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;
}

/**
 * <p>Describes prefixes for Amazon Web Services services.</p>
 * @public
 */
export interface PrefixList {
  /**
   * <p>The IP address range of the Amazon Web Services service.</p>
   * @public
   */
  Cidrs?: string[] | undefined;

  /**
   * <p>The ID of the prefix.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The name of the prefix.</p>
   * @public
   */
  PrefixListName?: string | undefined;
}

/**
 * @public
 */
export interface DescribePrefixListsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>All available prefix lists.</p>
   * @public
   */
  PrefixLists?: PrefixList[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *             results, make another call with the returned NextToken value. </p>
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
 * <p>PrincipalIdFormat description</p>
 * @public
 */
export interface PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   * @public
   */
  Statuses?: IdFormat[] | undefined;
}

/**
 * @public
 */
export interface DescribePrincipalIdFormatResult {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   * @public
   */
  Principals?: PrincipalIdFormat[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsRequest {
  /**
   * <p>The IDs of the address pools.</p>
   * @public
   */
  PoolIds?: string[] | undefined;

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
   * <p>One or more filters.</p>
   *          <ul>
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
}

/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 * @public
 */
export interface PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   * @public
   */
  FirstAddress?: string | undefined;

  /**
   * <p>The last IP address in the range.</p>
   * @public
   */
  LastAddress?: string | undefined;

  /**
   * <p>The number of addresses in the range.</p>
   * @public
   */
  AddressCount?: number | undefined;

  /**
   * <p>The number of available addresses in the range.</p>
   * @public
   */
  AvailableAddressCount?: number | undefined;
}

/**
 * <p>Describes an IPv4 address pool.</p>
 * @public
 */
export interface PublicIpv4Pool {
  /**
   * <p>The ID of the address pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>A description of the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The address ranges.</p>
   * @public
   */
  PoolAddressRanges?: PublicIpv4PoolRange[] | undefined;

  /**
   * <p>The total number of addresses.</p>
   * @public
   */
  TotalAddressCount?: number | undefined;

  /**
   * <p>The total number of available addresses.</p>
   * @public
   */
  TotalAvailableAddressCount?: number | undefined;

  /**
   * <p>The name of the location from which the address pool is advertised.
   *             A network border group is a unique set of Availability Zones or Local Zones
   *             from where Amazon Web Services advertises public IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>Any tags for the address pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribePublicIpv4PoolsResult {
  /**
   * <p>Information about the address pools.</p>
   * @public
   */
  PublicIpv4Pools?: PublicIpv4Pool[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   * @public
   */
  AllRegions?: boolean | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a Region.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and
   *         <code>not-opted-in</code>.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The name of the Region.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The Region service endpoint.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * <p>Information about the Regions.</p>
   * @public
   */
  Regions?: Region[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplaceRootVolumeTasksRequest {
  /**
   * <p>The ID of the root volume replacement task to view.</p>
   * @public
   */
  ReplaceRootVolumeTaskIds?: string[] | undefined;

  /**
   * <p>Filter to use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-id</code> - The ID of the instance for which the root volume replacement task was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

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
export interface DescribeReplaceRootVolumeTasksResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   * @public
   */
  ReplaceRootVolumeTasks?: ReplaceRootVolumeTask[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OfferingClassType = {
  CONVERTIBLE: "convertible",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type OfferingClassType = (typeof OfferingClassType)[keyof typeof OfferingClassType];

/**
 * @public
 * @enum
 */
export const OfferingTypeValues = {
  All_Upfront: "All Upfront",
  Heavy_Utilization: "Heavy Utilization",
  Light_Utilization: "Light Utilization",
  Medium_Utilization: "Medium Utilization",
  No_Upfront: "No Upfront",
  Partial_Upfront: "Partial Upfront",
} as const;

/**
 * @public
 */
export type OfferingTypeValues = (typeof OfferingTypeValues)[keyof typeof OfferingTypeValues];

/**
 * <p>Contains the parameters for DescribeReservedInstances.</p>
 * @public
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>Describes whether the Reserved Instance is Standard or Convertible.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>One or more Reserved Instance IDs.</p>
   *          <p>Default: Describes all your Reserved Instances, or only those otherwise specified.</p>
   * @public
   */
  ReservedInstancesIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone</code> - The Availability Zone where the Reserved Instance can
   *           be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone where the Reserved
   *           Instance can be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>duration</code> - The duration of the Reserved Instance (one year or three
   *           years), in seconds (<code>31536000</code> | <code>94608000</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>end</code> - The time when the Reserved Instance expires (for example,
   *           2015-08-07T11:54:42.000Z).</p>
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
   *                   <code>scope</code> - The scope of the Reserved Instance (<code>Region</code> or
   *             <code>Availability Zone</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description
   *             (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> | <code>Linux
   *             with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> | <code>SUSE
   *             Linux</code> | <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux
   *             with HA</code> | <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server
   *             Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>start</code> - The time at which the Reserved Instance purchase request was
   *           placed (for example, 2014-08-07T11:54:42.000Z).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Reserved Instance (<code>payment-pending</code>
   *           | <code>active</code> | <code>payment-failed</code> | <code>retired</code>).</p>
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
   *                   <code>usage-price</code> - The usage price of the Reserved Instance, per hour (for
   *           example, 0.84).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01
   *       API version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   *       offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;
}

/**
 * @public
 * @enum
 */
export const RIProductDescription = {
  Linux_UNIX: "Linux/UNIX",
  Linux_UNIX_Amazon_VPC_: "Linux/UNIX (Amazon VPC)",
  Windows: "Windows",
  Windows_Amazon_VPC_: "Windows (Amazon VPC)",
} as const;

/**
 * @public
 */
export type RIProductDescription = (typeof RIProductDescription)[keyof typeof RIProductDescription];

/**
 * @public
 * @enum
 */
export const RecurringChargeFrequency = {
  Hourly: "Hourly",
} as const;

/**
 * @public
 */
export type RecurringChargeFrequency = (typeof RecurringChargeFrequency)[keyof typeof RecurringChargeFrequency];

/**
 * <p>Describes a recurring charge.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The frequency of the recurring charge.</p>
   * @public
   */
  Frequency?: RecurringChargeFrequency | undefined;
}

/**
 * @public
 * @enum
 */
export const Scope = {
  AVAILABILITY_ZONE: "Availability Zone",
  REGIONAL: "Region",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const ReservedInstanceState = {
  active: "active",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  queued: "queued",
  queued_deleted: "queued-deleted",
  retired: "retired",
} as const;

/**
 * @public
 */
export type ReservedInstanceState = (typeof ReservedInstanceState)[keyof typeof ReservedInstanceState];

/**
 * <p>Describes a Reserved Instance.</p>
 * @public
 */
export interface ReservedInstances {
  /**
   * <p>The currency of the Reserved Instance. It's specified using ISO 4217 standard currency
   *       codes. At this time, the only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The tenancy of the instance.</p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>The offering class of the Reserved Instance.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>The scope of the Reserved Instance.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date and time the Reserved Instance started.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The time when the Reserved Instance expires.</p>
   * @public
   */
  End?: Date | undefined;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The number of reservations purchased.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Reserved Instance product platform description.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>The state of the Reserved Instance purchase.</p>
   * @public
   */
  State?: ReservedInstanceState | undefined;
}

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 * @public
 */
export interface DescribeReservedInstancesResult {
  /**
   * <p>A list of Reserved Instances.</p>
   * @public
   */
  ReservedInstances?: ReservedInstances[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesListings.</p>
 * @public
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * <p>One or more Reserved Instance IDs.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>One or more Reserved Instance listing IDs.</p>
   * @public
   */
  ReservedInstancesListingId?: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-listing-id</code> - The ID of the Reserved Instances
   *           listing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instance listing (<code>pending</code> |
   *             <code>active</code> | <code>cancelled</code> | <code>closed</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The reason for the status.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 * @public
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesModifications.</p>
 * @public
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * <p>IDs for the submitted modification request.</p>
   * @public
   */
  ReservedInstancesModificationIds?: string[] | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   *                   <code>modification-result.reserved-instances-id</code> - The ID for the Reserved Instances
   *           created as part of the modification request. This ID is only available when the status of
   *           the modification is <code>fulfilled</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone</code> - The Availability
   *           Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.availability-zone-id</code> - The ID of the
   *           Availability Zone for the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-count </code> - The number of new
   *           Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modification-result.target-configuration.instance-type</code> - The instance type of
   *           the new Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-id</code> - The ID of the Reserved Instances modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-modification-id</code> - The ID of the modification
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code> - The status of the Reserved Instances modification request
   *             (<code>processing</code> | <code>fulfilled</code> | <code>failed</code>).</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the configuration settings for the modified Reserved Instances.</p>
 * @public
 */
export interface ReservedInstancesConfiguration {
  /**
   * <p>The Availability Zone for the modified Reserved Instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of modified Reserved Instances.</p>
   *          <note>
   *             <p>This is a required field for a request.</p>
   *          </note>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The instance type for the modified Reserved Instances.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The network platform of the modified Reserved Instances.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or instances in a
   *       specific Availability Zone.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;
}

/**
 * <p>Describes the modification request/s.</p>
 * @public
 */
export interface ReservedInstancesModificationResult {
  /**
   * <p>The ID for the Reserved Instances that were created as part of the modification request.
   *       This field is only available when the modification is fulfilled.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>The target Reserved Instances configurations supplied as part of the modification
   *       request.</p>
   * @public
   */
  TargetConfiguration?: ReservedInstancesConfiguration | undefined;
}

/**
 * <p>Describes the ID of a Reserved Instance.</p>
 * @public
 */
export interface ReservedInstancesId {
  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * <p>Describes a Reserved Instance modification.</p>
 * @public
 */
export interface ReservedInstancesModification {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   *       idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *       Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The time when the modification request was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The time for the modification to become effective.</p>
   * @public
   */
  EffectiveDate?: Date | undefined;

  /**
   * <p>Contains target configurations along with their corresponding new Reserved Instance
   *       IDs.</p>
   * @public
   */
  ModificationResults?: ReservedInstancesModificationResult[] | undefined;

  /**
   * <p>The IDs of one or more Reserved Instances.</p>
   * @public
   */
  ReservedInstancesIds?: ReservedInstancesId[] | undefined;

  /**
   * <p>A unique ID for the Reserved Instance modification.</p>
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;

  /**
   * <p>The status of the Reserved Instances modification request.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The reason for the status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The time when the modification request was last updated.</p>
   * @public
   */
  UpdateDate?: Date | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 * @public
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Reserved Instance modification information.</p>
   * @public
   */
  ReservedInstancesModifications?: ReservedInstancesModification[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeReservedInstancesOfferings.</p>
 * @public
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Include Reserved Instance Marketplace offerings in the response.</p>
   * @public
   */
  IncludeMarketplace?: boolean | undefined;

  /**
   * <p>The instance type that the reservation will cover (for example, <code>m1.small</code>).
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Amazon EC2 instance types</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 94608000 (3 years)</p>
   * @public
   */
  MaxDuration?: number | undefined;

  /**
   * <p>The maximum number of instances to filter when searching for offerings.</p>
   *          <p>Default: 20</p>
   * @public
   */
  MaxInstanceCount?: number | undefined;

  /**
   * <p>The minimum duration (in seconds) to filter when searching for offerings.</p>
   *          <p>Default: 2592000 (1 month)</p>
   * @public
   */
  MinDuration?: number | undefined;

  /**
   * <p>The offering class of the Reserved Instance. Can be <code>standard</code> or
   *         <code>convertible</code>.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance product platform description. Instances that include <code>(Amazon
   *         VPC)</code> in the description are for use with Amazon VPC.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>One or more Reserved Instances offering IDs.</p>
   * @public
   */
  ReservedInstancesOfferingIds?: string[] | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   *          <p>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> can be specified,
   *       but not both.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
   *                   <code>availability-zone-id</code> - The ID of the Availability Zone where the Reserved
   *           Instance can be used.</p>
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
   *                   <code>instance-type</code> - The instance type that is covered by the reservation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>marketplace</code> - Set to <code>true</code> to show only Reserved Instance
   *           Marketplace offerings. When this filter is not used, which is the default behavior, all
   *           offerings from both Amazon Web Services and the Reserved Instance Marketplace are listed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The Reserved Instance product platform description
   *             (<code>Linux/UNIX</code> | <code>Linux with SQL Server Standard</code> | <code>Linux
   *             with SQL Server Web</code> | <code>Linux with SQL Server Enterprise</code> | <code>SUSE
   *             Linux</code> | <code>Red Hat Enterprise Linux</code> | <code>Red Hat Enterprise Linux
   *             with HA</code> | <code>Windows</code> | <code>Windows with SQL Server Standard</code> |
   *             <code>Windows with SQL Server Web</code> | <code>Windows with SQL Server
   *             Enterprise</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>reserved-instances-offering-id</code> - The Reserved Instances offering ID.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a
   *       tenancy of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant
   *       hardware (i.e., Dedicated Instances).</p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with
   *       this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>The Reserved Instance offering type. If you are using tools that predate the 2011-11-01
   *       API version, you only have access to the <code>Medium Utilization</code> Reserved Instance
   *       offering type. </p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining
   *       results of the initial request can be seen by sending another request with the returned
   *         <code>NextToken</code> value. The maximum is 100.</p>
   *          <p>Default: 100</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 * @public
 */
export interface PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The price per instance.</p>
   * @public
   */
  Price?: number | undefined;
}

/**
 * <p>Describes a Reserved Instance offering.</p>
 * @public
 */
export interface ReservedInstancesOffering {
  /**
   * <p>The currency of the Reserved Instance offering you are purchasing. It's specified using
   *       ISO 4217 standard currency codes. At this time, the only supported currency is
   *         <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The tenancy of the instance.</p>
   * @public
   */
  InstanceTenancy?: Tenancy | undefined;

  /**
   * <p>Indicates whether the offering is available through the Reserved Instance Marketplace
   *       (resale) or Amazon Web Services. If it's a Reserved Instance Marketplace offering, this is
   *       <code>true</code>.</p>
   * @public
   */
  Marketplace?: boolean | undefined;

  /**
   * <p>If <code>convertible</code> it can be exchanged for Reserved Instances of the same or
   *       higher monetary value, with different configurations. If <code>standard</code>, it is not
   *       possible to perform an exchange.</p>
   * @public
   */
  OfferingClass?: OfferingClassType | undefined;

  /**
   * <p>The Reserved Instance offering type.</p>
   * @public
   */
  OfferingType?: OfferingTypeValues | undefined;

  /**
   * <p>The pricing details of the Reserved Instance offering.</p>
   * @public
   */
  PricingDetails?: PricingDetail[] | undefined;

  /**
   * <p>The recurring charge tag assigned to the resource.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>Whether the Reserved Instance is applied to instances in a Region or an Availability
   *       Zone.</p>
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * <p>The ID of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The ID of the Reserved Instance offering. This is the offering ID used in <a>GetReservedInstancesExchangeQuote</a> to confirm that an exchange can be
   *       made.</p>
   * @public
   */
  ReservedInstancesOfferingId?: string | undefined;

  /**
   * <p>The instance type on which the Reserved Instance can be used.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The Availability Zone in which the Reserved Instance can be used.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The duration of the Reserved Instance, in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The usage price of the Reserved Instance, per hour.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The purchase price of the Reserved Instance.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The Reserved Instance product platform description.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;
}

/**
 * <p>Contains the output of DescribeReservedInstancesOfferings.</p>
 * @public
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
   *       when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Reserved Instances offerings.</p>
   * @public
   */
  ReservedInstancesOfferings?: ReservedInstancesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerEndpointsRequest {
  /**
   * <p>The IDs of the route server endpoints to describe.</p>
   * @public
   */
  RouteServerEndpointIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

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
export interface DescribeRouteServerEndpointsResult {
  /**
   * <p>Information about the described route server endpoints.</p>
   * @public
   */
  RouteServerEndpoints?: RouteServerEndpoint[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServerPeersRequest {
  /**
   * <p>The IDs of the route server peers to describe.</p>
   * @public
   */
  RouteServerPeerIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

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
export interface DescribeRouteServerPeersResult {
  /**
   * <p>Information about the described route server peers.</p>
   * @public
   */
  RouteServerPeers?: RouteServerPeer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteServersRequest {
  /**
   * <p>The IDs of the route servers to describe.</p>
   * @public
   */
  RouteServerIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>One or more filters to apply to the describe request.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

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
export interface DescribeRouteServersResult {
  /**
   * <p>Information about the described route servers.</p>
   * @public
   */
  RouteServers?: RouteServer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRouteTablesRequest {
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
   * <p>The IDs of the route tables.</p>
   * @public
   */
  RouteTableIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>association.gateway-id</code> - The ID of the gateway involved in the
   * 		                association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.route-table-association-id</code> - The ID of an association
   *                     ID for the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.route-table-id</code> - The ID of the route table involved in
   *                     the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.subnet-id</code> - The ID of the subnet involved in the
   *                     association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>association.main</code> - Indicates whether the route table is the main
   *                     route table for the VPC (<code>true</code> | <code>false</code>). Route tables
   *                     that do not have an association ID are not returned in the response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route-table-id</code> - The ID of the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-cidr-block</code> - The IPv4 CIDR range specified in a
   *                     route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-ipv6-cidr-block</code> - The IPv6 CIDR range specified in a route in the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.destination-prefix-list-id</code> - The ID (prefix) of the Amazon Web Services
   * 				      service specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.egress-only-internet-gateway-id</code> - The ID of an
   *                     egress-only Internet gateway specified in a route in the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.gateway-id</code> - The ID of a gateway specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.instance-id</code> - The ID of an instance specified in a route in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.nat-gateway-id</code> - The ID of a NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.transit-gateway-id</code> - The ID of a transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.origin</code> - Describes how the route was created.
   *                         <code>CreateRouteTable</code> indicates that the route was automatically
   *                     created when the route table was created; <code>CreateRoute</code> indicates
   *                     that the route was manually added to the route table;
   *                         <code>EnableVgwRoutePropagation</code> indicates that the route was
   *                     propagated by route propagation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.state</code> - The state of a route in the route table
   *                         (<code>active</code> | <code>blackhole</code>). The blackhole state
   *                     indicates that the route's target isn't available (for example, the specified
   *                     gateway isn't attached to the VPC, the specified NAT instance has been
   *                     terminated, and so on).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route.vpc-peering-connection-id</code> - The ID of a VPC peering
   * 		                connection specified in a route in the table.</p>
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
   *                   <code>vpc-id</code> - The ID of the VPC for the route table.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains the output of DescribeRouteTables.</p>
 * @public
 */
export interface DescribeRouteTablesResult {
  /**
   * <p>Information about the route tables.</p>
   * @public
   */
  RouteTables?: RouteTable[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.</p>
 * @public
 */
export interface SlotDateTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  EarliestTime: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start. This value must be later than or equal to the earliest date and at most three months in the future.</p>
   * @public
   */
  LatestTime: Date | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   * @public
   */
  Frequency?: string | undefined;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>Frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday). You can't specify this value with a daily schedule. If the occurrence is relative to the end of the month, you can specify only a single day.</p>
   * @public
   */
  OccurrenceDays?: number[] | undefined;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month. You can't specify this value with a daily schedule.</p>
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * <p>The unit for <code>OccurrenceDays</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).
   *         This value is required for a monthly schedule.
   *         You can't specify <code>DayOfWeek</code> with a weekly schedule.
   *         You can't specify this value with a daily schedule.</p>
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstanceAvailability.</p>
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
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
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  FirstSlotStartTimeRange: SlotDateTimeRangeRequest | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 300.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The maximum available duration, in hours. This value must be greater than <code>MinSlotDurationInHours</code>
   *          and less than 1,720.</p>
   * @public
   */
  MaxSlotDurationInHours?: number | undefined;

  /**
   * <p>The minimum available duration, in hours. The minimum required duration is 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   * @public
   */
  MinSlotDurationInHours?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence: ScheduledInstanceRecurrenceRequest | undefined;
}

/**
 * <p>Describes the recurring schedule for a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstanceRecurrence {
  /**
   * <p>The frequency (<code>Daily</code>, <code>Weekly</code>, or <code>Monthly</code>).</p>
   * @public
   */
  Frequency?: string | undefined;

  /**
   * <p>The interval quantity. The interval unit depends on the value of <code>frequency</code>. For example, every 2
   *          weeks or every 2 months.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The days. For a monthly schedule, this is one or more days of the month (1-31). For a weekly schedule, this is one or more days of the week (1-7, where 1 is Sunday).</p>
   * @public
   */
  OccurrenceDaySet?: number[] | undefined;

  /**
   * <p>Indicates whether the occurrence is relative to the end of the specified week or month.</p>
   * @public
   */
  OccurrenceRelativeToEnd?: boolean | undefined;

  /**
   * <p>The unit for <code>occurrenceDaySet</code> (<code>DayOfWeek</code> or <code>DayOfMonth</code>).</p>
   * @public
   */
  OccurrenceUnit?: string | undefined;
}

/**
 * <p>Describes a schedule that is available for your Scheduled Instances.</p>
 * @public
 */
export interface ScheduledInstanceAvailability {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of available instances.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  FirstSlotStartTime?: Date | undefined;

  /**
   * <p>The hourly price for a single instance.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The instance type. You can specify one of the C3, C4, M4, or R3 instance types.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The maximum term. The only possible value is 365 days.</p>
   * @public
   */
  MaxTermDurationInDays?: number | undefined;

  /**
   * <p>The minimum term. The only possible value is 365 days.</p>
   * @public
   */
  MinTermDurationInDays?: number | undefined;

  /**
   * <p>The network platform.</p>
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The purchase token. This token expires in two hours.</p>
   * @public
   */
  PurchaseToken?: string | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * <p>The number of hours in the schedule.</p>
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 * @public
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the available Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[] | undefined;
}

/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 * @public
 */
export interface SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  EarliestTime?: Date | undefined;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   * @public
   */
  LatestTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for DescribeScheduledInstances.</p>
 * @public
 */
export interface DescribeScheduledInstancesRequest {
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
   *                   <code>availability-zone</code> - The Availability Zone (for example, <code>us-west-2a</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instance-type</code> - The instance type (for example, <code>c4.large</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.
   *          This value can be between 5 and 300. The default value is 100.
   *          To retrieve the remaining results, make another call with the returned
   *          <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Scheduled Instance IDs.</p>
   * @public
   */
  ScheduledInstanceIds?: string[] | undefined;

  /**
   * <p>The time period for the first schedule to start.</p>
   * @public
   */
  SlotStartTimeRange?: SlotStartTimeRangeRequest | undefined;
}

/**
 * <p>Describes a Scheduled Instance.</p>
 * @public
 */
export interface ScheduledInstance {
  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date when the Scheduled Instance was purchased.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The hourly price for a single instance.</p>
   * @public
   */
  HourlyPrice?: string | undefined;

  /**
   * <p>The number of instances.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The network platform.</p>
   * @public
   */
  NetworkPlatform?: string | undefined;

  /**
   * <p>The time for the next schedule to start.</p>
   * @public
   */
  NextSlotStartTime?: Date | undefined;

  /**
   * <p>The platform (<code>Linux/UNIX</code> or <code>Windows</code>).</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The time that the previous schedule ended or will end.</p>
   * @public
   */
  PreviousSlotEndTime?: Date | undefined;

  /**
   * <p>The schedule recurrence.</p>
   * @public
   */
  Recurrence?: ScheduledInstanceRecurrence | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   * @public
   */
  ScheduledInstanceId?: string | undefined;

  /**
   * <p>The number of hours in the schedule.</p>
   * @public
   */
  SlotDurationInHours?: number | undefined;

  /**
   * <p>The end date for the Scheduled Instance.</p>
   * @public
   */
  TermEndDate?: Date | undefined;

  /**
   * <p>The start date for the Scheduled Instance.</p>
   * @public
   */
  TermStartDate?: Date | undefined;

  /**
   * <p>The total number of hours for a single instance for the entire term.</p>
   * @public
   */
  TotalScheduledInstanceHours?: number | undefined;
}

/**
 * <p>Contains the output of DescribeScheduledInstances.</p>
 * @public
 */
export interface DescribeScheduledInstancesResult {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the security groups in your account.</p>
   * @public
   */
  GroupId: string[] | undefined;
}

/**
 * <p>Describes a VPC with a security group that references your security group.</p>
 * @public
 */
export interface SecurityGroupReference {
  /**
   * <p>The ID of your security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the VPC with the referencing security group.</p>
   * @public
   */
  ReferencingVpcId?: string | undefined;

  /**
   * <p>The ID of the VPC peering connection (if applicable). For more information about security group referencing for peering connections, see
   *           <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html">Update your security groups to reference peer security groups</a>
   *           in the <i>VPC Peering Guide</i>.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>The ID of the transit gateway (if applicable).</p>
   * @public
   */
  TransitGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupReferencesResult {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   * @public
   */
  SecurityGroupReferenceSet?: SecurityGroupReference[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesRequest {
  /**
   * <p>One or more filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code> - The ID of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>security-group-rule-id</code> - The ID of the security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the security group rules.</p>
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of
   *             items, make another request with the token returned in the output. This value
   *             can be between 5 and 1000. If this parameter is not specified, then all items are
   *             returned. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupRulesResult {
  /**
   * <p>Information about security group rules.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *             This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * <p>The IDs of the security groups. Required for security groups in a nondefault VPC.</p>
   *          <p>Default: Describes all of your security groups.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>[Default VPC] The names of the security groups. You can specify either
   * 			the security group name or the security group ID.</p>
   *          <p>Default: Describes all of your security groups.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *             Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *             make another request with the token returned in the output. This value can be between 5 and 1000.
   *             If this parameter is not specified, then all items are returned. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
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
   * <p>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code> - The description of the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.cidr</code> - An IPv4 CIDR block for an outbound
   *                     security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.from-port</code> - For an outbound rule, the
   *                     start of port range for the TCP and UDP protocols, or an ICMP type
   *                     number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.group-id</code> - The ID of a security group
   *                     that has been referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.group-name</code> - The name of a security group
   *                     that is referenced in an outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an
   *                     outbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.prefix-list-id</code> - The ID of a prefix list to which a security group rule allows outbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.protocol</code> - The IP protocol for an
   *                     outbound security group rule (<code>tcp</code> | <code>udp</code> |
   *                         <code>icmp</code>, a protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.to-port</code> - For an outbound rule, the end
   *                     of port range for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>egress.ip-permission.user-id</code> - The ID of an Amazon Web Services account that
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
   *                   <code>ip-permission.cidr</code> - An IPv4 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.from-port</code> - For an inbound rule, the start of port
   *                     range for the TCP and UDP protocols, or an ICMP type number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.group-id</code> - The ID of a security group that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.group-name</code> - The name of a security group that is
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.ipv6-cidr</code> - An IPv6 CIDR block for an inbound security
   *                     group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.prefix-list-id</code> - The ID of a prefix list from which a security group rule allows inbound access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.protocol</code> - The IP protocol for an inbound security
   *                 group rule (<code>tcp</code> | <code>udp</code> | <code>icmp</code>, a
   *                 protocol number, or -1 for all protocols).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.to-port</code> - For an inbound rule, the end of port range
   *                     for the TCP and UDP protocols, or an ICMP code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-permission.user-id</code> - The ID of an Amazon Web Services account that has been
   *                     referenced in an inbound security group rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner of the security group.</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes a security group.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The outbound rules associated with the security group.</p>
   * @public
   */
  IpPermissionsEgress?: IpPermission[] | undefined;

  /**
   * <p>Any tags assigned to the security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ARN of the security group.</p>
   * @public
   */
  SecurityGroupArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>A description of the security group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The inbound rules associated with the security group.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the security groups.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsRequest {
  /**
   * <p>Security group VPC association filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>group-id</code>: The security group ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>group-owner-id</code>: The group owner ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-id</code>: The ID of the associated VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-owner-id</code>: The account ID of the VPC owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code>: The state of the association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code>: The key/value combination of a tag assigned to the resource. Use
   *                     the tag key in the filter name and the tag value as the filter value. For
   *                     example, to find all resources that have a tag with the key <code>Owner</code>
   *                     and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter
   *                     name and <code>TeamA</code> for the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-key</code>: The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

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
 * <p>A security group association with a VPC that you made with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateSecurityGroupVpc.html">AssociateSecurityGroupVpc</a>.</p>
 * @public
 */
export interface SecurityGroupVpcAssociation {
  /**
   * <p>The association's security group ID.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The association's VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the VPC.</p>
   * @public
   */
  VpcOwnerId?: string | undefined;

  /**
   * <p>The association's state.</p>
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;

  /**
   * <p>The association's state reason.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the security group.</p>
   * @public
   */
  GroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityGroupVpcAssociationsResult {
  /**
   * <p>The security group VPC associations.</p>
   * @public
   */
  SecurityGroupVpcAssociations?: SecurityGroupVpcAssociation[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesRequest {
  /**
   * <p>The IDs of the service link virtual interfaces.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceIds?: string[] | undefined;

  /**
   * <p>The filters to use for narrowing down the request. The following filters are
   *          supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>outpost-lag-id</code> - The ID of the Outpost LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outpost-arn</code> - The Outpost ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The ID of the Amazon Web Services account that owns the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The  state of the Outpost LAG.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vlan</code> - The ID of the address pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-link-virtual-interface-id</code> - The ID of the service link virtual interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>local-gateway-virtual-interface-id</code> - The ID of the local gateway virtual interface.</p>
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
 * @enum
 */
export const ServiceLinkVirtualInterfaceConfigurationState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;

/**
 * @public
 */
export type ServiceLinkVirtualInterfaceConfigurationState =
  (typeof ServiceLinkVirtualInterfaceConfigurationState)[keyof typeof ServiceLinkVirtualInterfaceConfigurationState];

/**
 * <p>Describes the service link virtual interfaces that establish connectivity between Amazon Web Services Outpost and on-premises networks.</p>
 * @public
 */
export interface ServiceLinkVirtualInterface {
  /**
   * <p>The ID of the service link virtual interface.</p>
   * @public
   */
  ServiceLinkVirtualInterfaceId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) for the service link virtual interface. </p>
   * @public
   */
  ServiceLinkVirtualInterfaceArn?: string | undefined;

  /**
   * <p>The Outpost ID for the service link virtual interface.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>The Outpost Amazon Resource Number (ARN) for the service link virtual interface.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the service link virtual interface..</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The IPv4 address assigned to the local gateway virtual interface on the Outpost side.</p>
   * @public
   */
  LocalAddress?: string | undefined;

  /**
   * <p>The IPv4 peer address for the service link virtual interface.</p>
   * @public
   */
  PeerAddress?: string | undefined;

  /**
   * <p>The ASN for the Border Gateway Protocol (BGP) associated with the service link virtual interface.</p>
   * @public
   */
  PeerBgpAsn?: number | undefined;

  /**
   * <p>The virtual local area network for the service link virtual interface.</p>
   * @public
   */
  Vlan?: number | undefined;

  /**
   * <p>The link aggregation group (LAG) ID for the service link virtual interface.</p>
   * @public
   */
  OutpostLagId?: string | undefined;

  /**
   * <p>The tags associated with the service link virtual interface.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The current state of the service link virtual interface.</p>
   * @public
   */
  ConfigurationState?: ServiceLinkVirtualInterfaceConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLinkVirtualInterfacesResult {
  /**
   * <p>Describes the service link virtual interfaces.</p>
   * @public
   */
  ServiceLinkVirtualInterfaces?: ServiceLinkVirtualInterface[] | undefined;

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
export const SnapshotAttributeName = {
  createVolumePermission: "createVolumePermission",
  productCodes: "productCodes",
} as const;

/**
 * @public
 */
export type SnapshotAttributeName = (typeof SnapshotAttributeName)[keyof typeof SnapshotAttributeName];

/**
 * @public
 */
export interface DescribeSnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute you would like to view.</p>
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

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
 * <p>Describes the user or group to be added or removed from the list of create volume
 *       permissions for a volume.</p>
 * @public
 */
export interface CreateVolumePermission {
  /**
   * <p>The ID of the Amazon Web Services account to be added or removed.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The group to be added or removed. The possible value is <code>all</code>.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotAttributeResult {
  /**
   * <p>The product codes.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The ID of the EBS snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The users and groups that have the permissions for creating volumes from the
   *       snapshot.</p>
   * @public
   */
  CreateVolumePermissions?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
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
   * <p>Scopes the results to snapshots with the specified owners. You can specify a combination of
   *       Amazon Web Services account IDs, <code>self</code>, and <code>amazon</code>.</p>
   * @public
   */
  OwnerIds?: string[] | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.</p>
   * @public
   */
  RestorableByUserIds?: string[] | undefined;

  /**
   * <p>The snapshot IDs.</p>
   *          <p>Default: Describes the snapshots for which you have create volume permissions.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

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
   *           This is not the user-configured Amazon Web Services account alias set using the IAM console.
   *           We recommend that you use the related parameter instead of this filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>owner-id</code> - The Amazon Web Services account ID of the owner. We recommend that
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
   *                   <code>storage-tier</code> - The storage tier of the snapshot (<code>archive</code> |
   *           <code>standard</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transfer-type</code> - The type of operation used to create the snapshot (<code>time-based</code> | <code>standard</code>).</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResult {
  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusRequest {
  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>snapshot-id</code> - The snapshot ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>volume-id</code> - The ID of the volume the snapshot is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>last-tiering-operation</code> - The state of the last archive or restore action. (<code>archival-in-progress</code> | <code>archival-completed</code> |
   *           <code>archival-failed</code> | <code>permanent-restore-in-progress</code> | <code>permanent-restore-completed</code> | <code>permanent-restore-failed</code> |
   * 		<code>temporary-restore-in-progress</code> | <code>temporary-restore-completed</code> | <code>temporary-restore-failed</code>)</p>
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
 * @enum
 */
export const TieringOperationStatus = {
  archival_completed: "archival-completed",
  archival_failed: "archival-failed",
  archival_in_progress: "archival-in-progress",
  permanent_restore_completed: "permanent-restore-completed",
  permanent_restore_failed: "permanent-restore-failed",
  permanent_restore_in_progress: "permanent-restore-in-progress",
  temporary_restore_completed: "temporary-restore-completed",
  temporary_restore_failed: "temporary-restore-failed",
  temporary_restore_in_progress: "temporary-restore-in-progress",
} as const;

/**
 * @public
 */
export type TieringOperationStatus = (typeof TieringOperationStatus)[keyof typeof TieringOperationStatus];

/**
 * <p>Provides information about a snapshot's storage tier.</p>
 * @public
 */
export interface SnapshotTierStatus {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The state of the snapshot.</p>
   * @public
   */
  Status?: SnapshotState | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the snapshot.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The tags that are assigned to the snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   * @public
   */
  StorageTier?: StorageTier | undefined;

  /**
   * <p>The date and time when the last archive or restore process was started.</p>
   * @public
   */
  LastTieringStartTime?: Date | undefined;

  /**
   * <p>The progress of the last archive or restore process, as a percentage.</p>
   * @public
   */
  LastTieringProgress?: number | undefined;

  /**
   * <p>The status of the last archive or restore process.</p>
   * @public
   */
  LastTieringOperationStatus?: TieringOperationStatus | undefined;

  /**
   * <p>A message describing the status of the last archive or restore process.</p>
   * @public
   */
  LastTieringOperationStatusDetail?: string | undefined;

  /**
   * <p>The date and time when the last archive process was completed.</p>
   * @public
   */
  ArchivalCompleteTime?: Date | undefined;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   * @public
   */
  RestoreExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotTierStatusResult {
  /**
   * <p>Information about the snapshot's storage tier.</p>
   * @public
   */
  SnapshotTierStatuses?: SnapshotTierStatus[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items.
   *   This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotDatafeedSubscription.</p>
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
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
 * <p>Contains the output of DescribeSpotDatafeedSubscription.</p>
 * @public
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   * @public
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetInstances.</p>
 * @public
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetInstances.</p>
 * @public
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of
   *             date.</p>
   * @public
   */
  ActiveInstances?: ActiveInstance[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  BATCH_CHANGE: "fleetRequestChange",
  ERROR: "error",
  INFORMATION: "information",
  INSTANCE_CHANGE: "instanceChange",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>Contains the parameters for DescribeSpotFleetRequestHistory.</p>
 * @public
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The type of events to describe. By default, all events are described.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes an event in the history of the Spot Fleet request.</p>
 * @public
 */
export interface HistoryRecord {
  /**
   * <p>Information about the event.</p>
   * @public
   */
  EventInformation?: EventInformation | undefined;

  /**
   * <p>The event type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>error</code> - An error with the Spot Fleet request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fleetRequestChange</code> - A change in the status or configuration of
   *                     the Spot Fleet request.</p>
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
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The date and time of the event, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetRequestHistory.</p>
 * @public
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * <p>Information about the events in the history of the Spot Fleet request.</p>
   * @public
   */
  HistoryRecords?: HistoryRecord[] | undefined;

  /**
   * <p>The last date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             All records up to this time were retrieved.</p>
   *          <p>If <code>nextToken</code> indicates that there are more items, this value is not
   *             present.</p>
   * @public
   */
  LastEvaluatedTime?: Date | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * <p>The starting date and time for the events, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotFleetRequests.</p>
 * @public
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   * @public
   */
  SpotFleetRequestIds?: string[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ExcessCapacityTerminationPolicy = {
  DEFAULT: "default",
  NO_TERMINATION: "noTermination",
} as const;

/**
 * @public
 */
export type ExcessCapacityTerminationPolicy =
  (typeof ExcessCapacityTerminationPolicy)[keyof typeof ExcessCapacityTerminationPolicy];

/**
 * <p>Describes whether monitoring is enabled.</p>
 * @public
 */
export interface SpotFleetMonitoring {
  /**
   * <p>Enables monitoring for the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
   *             The public IP address can only be assigned to a network interface for eth0, and can only
   *             be assigned to a new network interface, not an existing one. You cannot specify more
   *             than one network interface in the request. If launching into a default subnet, the
   *             default value is <code>true</code>.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated.
   *             You can specify <code>true</code> only if creating a new network interface when
   *             launching an instance.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface
   *             when launching an instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The position of the network interface in the attachment order. A primary network
   *             interface has a device index of 0.</p>
   *          <p>If you specify a network interface when launching an instance, you must specify the
   *             device index.</p>
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a
   *             network interface when launching an instance.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the
   *             IPv6 addresses from the range of the subnet. You cannot specify this option and the
   *             option to assign specific IPv6 addresses in the same request. You can specify this
   *             option if you've specified a minimum number of instances to launch.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * <p>The IPv6 addresses to assign to the network interface. You cannot specify this option
   *             and the option to assign a number of IPv6 addresses in the same request. You cannot
   *             specify this option if you've specified a minimum number of instances to launch.</p>
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   *          <p>If you are creating a Spot Fleet, omit this parameter because you can’t specify a
   *             network interface ID in a launch specification.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network
   *             interface when launching an instance. You cannot specify this option if you're launching
   *             more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>
   *             request.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The private IPv4 addresses to assign to the network interface. Only one private IPv4
   *             address can be designated as primary. You cannot specify this option if you're launching
   *             more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>
   *             request.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;

  /**
   * <p>The number of secondary private IPv4 addresses. You can’t specify this parameter and
   *             also specify a secondary private IP address using the <code>PrivateIpAddress</code>
   *             parameter.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>The ID of the subnet associated with the network interface. Applies only if creating a
   *             network interface when launching an instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether to assign a carrier IP address to the network interface.</p>
   *          <p>You can only assign a carrier IP address to a network interface that is in a subnet in
   *             a Wavelength Zone. For more information about carrier IP addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP address</a> in the <i>Amazon Web Services Wavelength Developer
   *                 Guide</i>.</p>
   * @public
   */
  AssociateCarrierIpAddress?: boolean | undefined;

  /**
   * <p>The type of network interface.</p>
   *          <p>If you specify <code>efa-only</code>, do not assign any IP addresses to the network
   *             interface. EFA-only network interfaces do not support IP addresses.</p>
   *          <p>Valid values: <code>interface</code> | <code>efa</code> | <code>efa-only</code>
   *          </p>
   * @public
   */
  InterfaceType?: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards. The
   *             primary network interface must be assigned to network card index 0. The default is
   *             network card index 0.</p>
   *          <p>If you are using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a> to create Spot Instances, omit this parameter because
   *             you can’t specify the network card index when using this API. To specify the network
   *             card index, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>The IPv4 delegated prefixes to be assigned to the network interface. You cannot use
   *             this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv4 delegated prefixes to be automatically assigned to the network
   *             interface. You cannot use this option if you use the <code>Ipv4Prefix</code>
   *             option.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>The IPv6 delegated prefixes to be assigned to the network interface. You cannot use
   *             this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[] | undefined;

  /**
   * <p>The number of IPv6 delegated prefixes to be automatically assigned to the network
   *             interface. You cannot use this option if you use the <code>Ipv6Prefix</code>
   *             option.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>.</p>
   * @public
   */
  PrimaryIpv6?: boolean | undefined;

  /**
   * <p>Specifies the ENA Express settings for the network interface that's attached to
   *             the instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecificationRequest | undefined;

  /**
   * <p>A security group connection tracking specification that enables you to set the timeout
   *             for connection tracking on an Elastic network interface. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts">Connection tracking timeouts</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>The number of ENA queues to be created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;
}

/**
 * <p>Describes Spot Instance placement.</p>
 * @public
 */
export interface SpotPlacement {
  /**
   * <p>The Availability Zone.</p>
   *          <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas;
   *             for example, "us-west-2a, us-west-2b".</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the placement group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
   *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
   *             tenancy is not supported for Spot Instances.</p>
   * @public
   */
  Tenancy?: Tenancy | undefined;
}

/**
 * <p>The tags for a Spot Fleet resource.</p>
 * @public
 */
export interface SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is
   *                 <code>instance</code>. To tag the Spot Fleet request on creation, use the
   *                 <code>TagSpecifications</code> parameter in <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html">SpotFleetRequestConfigData</a>
   *             </code>.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes the launch specification for one or more Spot Instances. If you include
 *           On-Demand capacity in your fleet request or want to specify an EFA network device, you
 *           can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.</p>
 * @public
 */
export interface SpotFleetLaunchSpecification {
  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>One or more block devices that are mapped to the Spot Instances. You can't specify both
   *             a snapshot ID and an encryption value. This is because only blank volumes can be
   *             encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its
   *             encryption status is used for the volume encryption status.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

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
  Monitoring?: SpotFleetMonitoring | undefined;

  /**
   * <p>The network interfaces.</p>
   *          <note>
   *             <p>
   *                <code>SpotFleetLaunchSpecification</code> does not support Elastic Fabric Adapter (EFA).
   *              You must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a> instead.</p>
   *          </note>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The placement information.</p>
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * <p>The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel
   *           requirements for information about whether you need to specify a RAM disk. To find kernel
   *           requirements, refer to the Amazon Web Services Resource Center and search for the kernel ID.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *           increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate
   *          them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *          network interface instead of using this parameter.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *         that you chose to set the target capacity in terms of instances, or a performance
   *         characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *         number of instances to the next whole number. If this value is not specified, the default
   *         is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowestPrice</code> and
   *            <code>priceCapacityOptimized</code> allocation strategies is per
   *            <i>unit</i> hour (where the instance price is divided by the specified
   *            weight). However, if all the specified weights are above the requested
   *            <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *            used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The tags to apply during creation.</p>
   * @public
   */
  TagSpecifications?: SpotFleetTagSpecification[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * <p>The security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *         the network interface instead of using this parameter.</p>
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;
}

/**
 * <p>Describes overrides for a launch template.</p>
 * @public
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to
   *          increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The number of units provided by the specified instance type. These are the same units
   *          that you chose to set the target capacity in terms of instances, or a performance
   *          characteristic such as vCPUs, memory, or I/O.</p>
   *          <p>If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the
   *          number of instances to the next whole number. If this value is not specified, the default
   *          is 1.</p>
   *          <note>
   *             <p>When specifying weights, the price used in the <code>lowestPrice</code> and
   *             <code>priceCapacityOptimized</code> allocation strategies is per
   *             <i>unit</i> hour (where the instance price is divided by the specified
   *             weight). However, if all the specified weights are above the requested
   *             <code>TargetCapacity</code>, resulting in only 1 instance being launched, the price
   *             used is per <i>instance</i> hour.</p>
   *          </note>
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If <code>OnDemandAllocationStrategy</code> is set to <code>prioritized</code>, Spot Fleet
   *          uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *          <code>capacityOptimizedPrioritized</code>, Spot Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the launch template override has the lowest
   *          priority. You can set the same priority for different launch template overrides.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The instance requirements. When you specify instance requirements, Amazon EC2 will identify
   *          instance types with the provided requirements, and then use your On-Demand and Spot
   *          allocation strategies to launch instances from these instance types, in the same way as
   *          when you specify a list of instance types.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceType</code>.</p>
   *          </note>
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;
}

/**
 * <p>Describes a launch template and overrides.</p>
 * @public
 */
export interface LaunchTemplateConfig {
  /**
   * <p>The launch template to use. Make sure that the launch template does not contain the
   *             <code>NetworkInterfaceId</code> parameter because you can't specify a network interface
   *          ID in a Spot Fleet.</p>
   * @public
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   * @public
   */
  Overrides?: LaunchTemplateOverrides[] | undefined;
}

/**
 * <p>Describes a Classic Load Balancer.</p>
 * @public
 */
export interface ClassicLoadBalancer {
  /**
   * <p>The name of the load balancer.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers
 *             the running Spot Instances with these Classic Load Balancers.</p>
 * @public
 */
export interface ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   * @public
   */
  ClassicLoadBalancers?: ClassicLoadBalancer[] | undefined;
}

/**
 * <p>Describes a load balancer target group.</p>
 * @public
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the
 *             running Spot Instances with these target groups.</p>
 * @public
 */
export interface TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;
}

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet
 *             request.</p>
 * @public
 */
export interface LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   * @public
   */
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig | undefined;

  /**
   * <p>The target groups.</p>
   * @public
   */
  TargetGroupsConfig?: TargetGroupsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const OnDemandAllocationStrategy = {
  LOWEST_PRICE: "lowestPrice",
  PRIORITIZED: "prioritized",
} as const;

/**
 * @public
 */
export type OnDemandAllocationStrategy = (typeof OnDemandAllocationStrategy)[keyof typeof OnDemandAllocationStrategy];

/**
 * @public
 * @enum
 */
export const ReplacementStrategy = {
  LAUNCH: "launch",
  LAUNCH_BEFORE_TERMINATE: "launch-before-terminate",
} as const;

/**
 * @public
 */
export type ReplacementStrategy = (typeof ReplacementStrategy)[keyof typeof ReplacementStrategy];

/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *             Spot Instance is at an elevated risk of being interrupted. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity
 *                 rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface SpotCapacityRebalance {
  /**
   * <p>The replacement strategy to use. Only available for fleets of type
   *             <code>maintain</code>.</p>
   *          <p>
   *             <code>launch</code> - Spot Fleet launches a new replacement Spot Instance when a
   *             rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet
   *             does not terminate the instances that receive a rebalance notification. You can
   *             terminate the old instances, or you can leave them running. You are charged for all
   *             instances while they are running. </p>
   *          <p>
   *             <code>launch-before-terminate</code> - Spot Fleet launches a new replacement Spot
   *             Instance when a rebalance notification is emitted for an existing Spot Instance in the
   *             fleet, and then, after a delay that you specify (in <code>TerminationDelay</code>),
   *             terminates the instances that received a rebalance notification.</p>
   * @public
   */
  ReplacementStrategy?: ReplacementStrategy | undefined;

  /**
   * <p>The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot
   *             Instance after launching a new replacement Spot Instance.</p>
   *          <p>Required when <code>ReplacementStrategy</code> is set to <code>launch-before-terminate</code>.</p>
   *          <p>Not valid when <code>ReplacementStrategy</code> is set to <code>launch</code>.</p>
   *          <p>Valid values: Minimum value of <code>120</code> seconds. Maximum value of <code>7200</code> seconds.</p>
   * @public
   */
  TerminationDelay?: number | undefined;
}

/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *             interrupted.</p>
 * @public
 */
export interface SpotMaintenanceStrategies {
  /**
   * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
   *             Spot Instance is at an elevated risk of being interrupted. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html">Capacity
   *                 rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  CapacityRebalance?: SpotCapacityRebalance | undefined;
}

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 * @public
 */
export interface SpotFleetRequestConfigData {
  /**
   * <p>The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance
   *             pools specified by the Spot Fleet launch configuration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html">Allocation
   *                 strategies for Spot Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <dl>
   *             <dt>priceCapacityOptimized (recommended)</dt>
   *             <dd>
   *                <p>Spot Fleet identifies the pools with
   *                    the highest capacity availability for the number of instances that are launching. This means
   *                    that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                    in the near term. Spot Fleet then requests Spot Instances from the lowest priced of these pools.</p>
   *             </dd>
   *             <dt>capacityOptimized</dt>
   *             <dd>
   *                <p>Spot Fleet identifies the pools with
   *                    the highest capacity availability for the number of instances that are launching. This means
   *                    that we will request Spot Instances from the pools that we believe have the lowest chance of interruption
   *                    in the near term. To give certain
   *           instance types a higher chance of launching first, use
   *           <code>capacityOptimizedPrioritized</code>. Set a priority for each instance type by
   *           using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
   *           assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
   *           the priorities on a best-effort basis, but optimizes for capacity first.
   *           <code>capacityOptimizedPrioritized</code> is supported only if your Spot Fleet uses a
   *           launch template. Note that if the <code>OnDemandAllocationStrategy</code> is set to
   *           <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
   *           capacity.</p>
   *             </dd>
   *             <dt>diversified</dt>
   *             <dd>
   *                <p>Spot Fleet requests instances from all of the Spot Instance pools that you
   *           specify.</p>
   *             </dd>
   *             <dt>lowestPrice (not recommended)</dt>
   *             <dd>
   *                <important>
   *                   <p>We don't recommend the <code>lowestPrice</code> allocation strategy because
   *                      it has the highest risk of interruption for your Spot Instances.</p>
   *                </important>
   *                <p>Spot Fleet requests instances from the lowest priced Spot Instance pool that has available
   *                   capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances
   *                   come from the next lowest priced pool that has available capacity. If a pool runs
   *                   out of capacity before fulfilling your desired capacity, Spot Fleet will continue to
   *                   fulfill your request by drawing from the next lowest priced pool. To ensure that
   *                   your desired capacity is met, you might receive Spot Instances from several pools. Because
   *                   this strategy only considers instance price and not capacity availability, it
   *                   might lead to high interruption rates.</p>
   *             </dd>
   *          </dl>
   *          <p>Default: <code>lowestPrice</code>
   *          </p>
   * @public
   */
  AllocationStrategy?: AllocationStrategy | undefined;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
   *             you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order, launching
   *             the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the priority
   *             that you assign to each Spot Fleet launch template override, launching the highest priority
   *             first. If you do not specify a value, Spot Fleet defaults to <code>lowestPrice</code>.</p>
   * @public
   */
  OnDemandAllocationStrategy?: OnDemandAllocationStrategy | undefined;

  /**
   * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
   *             interrupted.</p>
   * @public
   */
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of your
   *             listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if you decrease the
   *             target capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You
   *             cannot set this value.</p>
   * @public
   */
  FulfilledCapacity?: number | undefined;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target
   *             On-Demand capacity.</p>
   * @public
   */
  OnDemandFulfilledCapacity?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that grants the Spot Fleet the permission to request, launch, terminate, and tag instances
   *          on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot
   *             Fleet prerequisites</a> in the <i>Amazon EC2 User Guide</i>. Spot Fleet can
   *          terminate Spot Instances on your behalf when you cancel its Spot Fleet request using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests">CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if you set
   *             <code>TerminateInstancesWithExpiration</code>.</p>
   * @public
   */
  IamFleetRole: string | undefined;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify
   *                 <code>LaunchSpecifications</code>, you can't specify
   *                 <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your
   *             request, you must use <code>LaunchTemplateConfigs</code>.</p>
   *          <note>
   *             <p>If an AMI specified in a launch specification is deregistered or disabled, no new
   *             instances can be launched from the AMI. For fleets of type <code>maintain</code>, the
   *             target capacity will not be maintained.</p>
   *          </note>
   * @public
   */
  LaunchSpecifications?: SpotFleetLaunchSpecification[] | undefined;

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>,
   *             you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity
   *             in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target
   *             capacity in terms of instances or a performance characteristic that is important to your
   *             application workload, such as vCPUs, memory, or I/O. If the request type is
   *                 <code>maintain</code>, you can specify a target capacity of 0 and add capacity
   *             later.</p>
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity in
   *             terms of instances or a performance characteristic that is important to your application
   *             workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>,
   *             you can specify a target capacity of 0 and add capacity later.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay. You
   *             can use the <code>onDemandMaxTotalPrice</code> parameter, the
   *                 <code>spotMaxTotalPrice</code> parameter, or both parameters to ensure that your
   *             fleet cost does not exceed your budget. If you set a maximum price per hour for the
   *             On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the
   *             maximum amount you're willing to pay. When the maximum amount you're willing to pay is
   *             reached, the fleet stops launching instances even if it hasn’t met the target
   *             capacity.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>onDemandMaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>onDemandMaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  OnDemandMaxTotalPrice?: string | undefined;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. You can use
   *          the <code>spotMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code>
   *          parameter, or both parameters to ensure that your fleet cost does not exceed your budget.
   *          If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will
   *          launch instances until it reaches the maximum amount you're willing to pay. When the
   *          maximum amount you're willing to pay is reached, the fleet stops launching instances even
   *          if it hasn’t met the target capacity.</p>
   *          <note>
   *             <p>If your fleet includes T instances that are configured as <code>unlimited</code>,
   *             and if their average CPU usage exceeds the baseline utilization, you will incur a charge
   *             for surplus credits. The <code>spotMaxTotalPrice</code> does not account for surplus
   *             credits, and, if you use surplus credits, your final cost might be higher than what you
   *             specified for <code>spotMaxTotalPrice</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#unlimited-mode-surplus-credits">Surplus credits can incur charges</a> in the
   *                <i>Amazon EC2 User Guide</i>.</p>
   *          </note>
   * @public
   */
  SpotMaxTotalPrice?: string | undefined;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request
   *             expires.</p>
   * @public
   */
  TerminateInstancesWithExpiration?: boolean | undefined;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target
   *             capacity or also attempts to maintain it. When this value is <code>request</code>, the
   *             Spot Fleet only places the required requests. It does not attempt to replenish Spot
   *             Instances if capacity is diminished, nor does it submit requests in alternative Spot
   *             pools if capacity is not available. When this value is <code>maintain</code>, the Spot
   *             Fleet maintains the target capacity. The Spot Fleet places the required requests to meet
   *             capacity and automatically replenishes any interrupted instances. Default:
   *                 <code>maintain</code>. <code>instant</code> is listed but is not used by Spot
   *             Fleet.</p>
   * @public
   */
  Type?: FleetType | undefined;

  /**
   * <p>The start date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             By default, Amazon EC2 starts fulfilling the request immediately.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date and time of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             After the end date and time, no new Spot Instance requests are placed or able to fulfill
   *             the request. If no value is specified, the Spot Fleet request remains until you cancel
   *             it.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   * @public
   */
  ReplaceUnhealthyInstances?: boolean | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet
   *             request. Spot Fleet registers the running Spot Instances with the specified Classic Load
   *             Balancers and target groups.</p>
   *          <p>With Network Load Balancers, Spot Fleet cannot register instances that have the
   *             following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2,
   *             M3, and T1.</p>
   * @public
   */
  LoadBalancersConfig?: LoadBalancersConfig | undefined;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid
   *             only when Spot <b>AllocationStrategy</b> is set to
   *                 <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly
   *             allocates your target Spot capacity across the number of Spot pools that you
   *             specify.</p>
   *          <p>Note that Spot Fleet attempts to draw Spot Instances from the number of pools that you specify on a
   *             best effort basis. If a pool runs out of Spot capacity before fulfilling your target
   *             capacity, Spot Fleet will continue to fulfill your request by drawing from the next cheapest
   *             pool. To ensure that your target capacity is met, you might receive Spot Instances from more than
   *             the number of pools that you specified. Similarly, if most of the pools have no Spot
   *             capacity, you might receive your full target capacity from fewer than the number of
   *             pools that you specified.</p>
   * @public
   */
  InstancePoolsToUseCount?: number | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;

  /**
   * <p>The unit for the target capacity. You can specify this parameter only when
   *          using attribute-based instance type selection.</p>
   *          <p>Default: <code>units</code> (the number of instances)</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * <p>The key-value pair for tagging the Spot Fleet request on creation. The value for
   *                 <code>ResourceType</code> must be <code>spot-fleet-request</code>, otherwise the
   *             Spot Fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
   *                 template</a> (valid only if you use <code>LaunchTemplateConfigs</code>) or in
   *             the <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html">SpotFleetTagSpecification</a>
   *             </code> (valid only if you use
   *                 <code>LaunchSpecifications</code>). For information about tagging after launch, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tag your resources</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * <p>Describes a Spot Fleet request.</p>
 * @public
 */
export interface SpotFleetRequestConfig {
  /**
   * <p>The progress of the Spot Fleet request.
   *           If there is an error, the status is <code>error</code>.
   *           After all requests are placed, the status is <code>pending_fulfillment</code>.
   *           If the size of the fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
   *           If the size of the fleet is decreased, the status is <code>pending_termination</code>
   *           while Spot Instances are terminating.</p>
   * @public
   */
  ActivityStatus?: ActivityStatus | undefined;

  /**
   * <p>The creation date and time of the request.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The configuration of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestConfig?: SpotFleetRequestConfigData | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;

  /**
   * <p>The state of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestState?: BatchState | undefined;

  /**
   * <p>The tags for a Spot Fleet resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the output of DescribeSpotFleetRequests.</p>
 * @public
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the configuration of your Spot Fleet.</p>
   * @public
   */
  SpotFleetRequestConfigs?: SpotFleetRequestConfig[] | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 * @public
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequestIds?: string[] | undefined;

  /**
   * <p>The filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>availability-zone-group</code> - The Availability Zone group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>create-time</code> - The time stamp when the Spot Instance request was
   *                     created.</p>
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
   *                   <code>instance-id</code> - The ID of the instance that fulfilled the
   *                     request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch-group</code> - The Spot Instance launch group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.delete-on-termination</code> - Indicates
   *                     whether the EBS volume is deleted on instance termination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.device-name</code> - The device name for the
   *                     volume in the block device mapping (for example, <code>/dev/sdh</code> or
   *                         <code>xvdh</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot
   *                     for the EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-size</code> - The size of the EBS
   *                     volume, in GiB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume:
   *                     <code>gp2</code> or <code>gp3</code> for General Purpose SSD, <code>io1</code>
   *                     or <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput
   *                     Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for
   *                     Magnetic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-id</code> - The ID of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.group-name</code> - The name of the security group for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.image-id</code> - The ID of the AMI.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.instance-type</code> - The type of instance (for example,
   *                         <code>m3.medium</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.kernel-id</code> - The kernel ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.key-name</code> - The name of the key pair the instance launched
   *                     with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.monitoring-enabled</code> - Whether detailed monitoring is
   *                     enabled for the Spot Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launch.ramdisk-id</code> - The RAM disk ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>launched-availability-zone</code> - The Availability Zone in which the
   *                     request is launched.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.addresses.primary</code> - Indicates whether the IP
   *                     address is the primary private IP address.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.delete-on-termination</code> - Indicates whether the
   *                     network interface is deleted when the instance is terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.description</code> - A description of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.device-index</code> - The index of the device for the
   *                     network interface attachment on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.group-id</code> - The ID of the security group
   *                     associated with the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.network-interface-id</code> - The ID of the network
   *                     interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.private-ip-address</code> - The primary private IP
   *                     address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>product-description</code> - The product description associated with the
   *                     instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-instance-request-id</code> - The Spot Instance request ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>spot-price</code> - The maximum hourly price for any Spot Instance
   *                     launched to fulfill the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>state</code> - The state of the Spot Instance request (<code>open</code>
   *                     | <code>active</code> | <code>closed</code> | <code>cancelled</code> |
   *                         <code>failed</code>). Spot request status information can help you track
   *                     your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot
   *                         request status</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-code</code> - The short code describing the most recent
   *                     evaluation of your Spot Instance request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status-message</code> - The message explaining the status of the Spot
   *                     Instance request.</p>
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
   *                   <code>type</code> - The type of Spot Instance request (<code>one-time</code> |
   *                         <code>persistent</code>).</p>
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
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 * @public
 */
export interface LaunchSpecification {
  /**
   * <p>The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.</p>
   * @public
   */
  UserData?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * <p>The block device mapping entries.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

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
   * <p>The network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * <p>The placement information for the instance.</p>
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   * @public
   */
  SecurityGroups?: GroupIdentifier[] | undefined;

  /**
   * <p>Describes the monitoring of an instance.</p>
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;
}

/**
 * @public
 * @enum
 */
export const SpotInstanceState = {
  active: "active",
  cancelled: "cancelled",
  closed: "closed",
  disabled: "disabled",
  failed: "failed",
  open: "open",
} as const;

/**
 * @public
 */
export type SpotInstanceState = (typeof SpotInstanceState)[keyof typeof SpotInstanceState];

/**
 * <p>Describes the status of a Spot Instance request.</p>
 * @public
 */
export interface SpotInstanceStatus {
  /**
   * <p>The status code. For a list of status codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html#spot-instance-request-status-understand">Spot request status codes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The description for the status code.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The date and time of the most recent status update, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * <p>Describes a Spot Instance request.</p>
 * @public
 */
export interface SpotInstanceRequest {
  /**
   * <p>Deprecated.</p>
   * @public
   */
  ActualBlockHourlyPrice?: string | undefined;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   * @public
   */
  Fault?: SpotInstanceStateFault | undefined;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * <p>Additional information for launching instances.</p>
   * @public
   */
  LaunchSpecification?: LaunchSpecification | undefined;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   * @public
   */
  LaunchedAvailabilityZone?: string | undefined;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>The ID of the Spot Instance request.</p>
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The state of the Spot Instance request. Spot request status information helps track your Spot
   *             Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-request-status.html">Spot request status</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  State?: SpotInstanceState | undefined;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   * @public
   */
  Status?: SpotInstanceStatus | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Spot Instance request type.</p>
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * <p>The start date of the request, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             The request becomes active at this date and time.</p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the <code>validUntil</code> date
   *                     and time is reached. Otherwise, the request remains active until you cancel it.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>validUntil</code> date and time is reached. By default, the
   *                     request is valid for 7 days from the date the request was created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * <p>Contains the output of DescribeSpotInstanceRequests.</p>
 * @public
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * <p>The Spot Instance requests.</p>
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;

  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there
   *          are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeSpotPriceHistory.</p>
 * @public
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The date and time, up to the past 90 days, from which to start retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time, up to the current date, from which to stop retrieving the price
   *             history data, in UTC format (for example,
   *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Filters the results by the specified instance types.</p>
   * @public
   */
  InstanceTypes?: _InstanceType[] | undefined;

  /**
   * <p>Filters the results by the specified basic product descriptions.</p>
   * @public
   */
  ProductDescriptions?: string[] | undefined;

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
  Filters?: Filter[] | undefined;

  /**
   * <p>Filters the results by the specified Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

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
  AvailabilityZone?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>A general description of the AMI.</p>
   * @public
   */
  ProductDescription?: RIProductDescription | undefined;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * <p>The date and time the request was created, in UTC format (for example,
   *                 <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  Timestamp?: Date | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The historical Spot prices.</p>
   * @public
   */
  SpotPriceHistory?: SpotPrice[] | undefined;
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
  DryRun?: boolean | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *           make another request with the token returned in the output. For more information,
   *           see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

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
  FromPort?: number | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number
   *           (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers)</a>.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>The IP ranges. Not applicable for stale security group rules.</p>
   * @public
   */
  IpRanges?: string[] | undefined;

  /**
   * <p>The prefix list IDs. Not applicable for stale security group rules.</p>
   * @public
   */
  PrefixListIds?: string[] | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The security group pairs. Returns the ID of the referenced security group and VPC, and the ID and status of the VPC peering connection.</p>
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;
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
  Description?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The name of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Information about the stale inbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissions?: StaleIpPermission[] | undefined;

  /**
   * <p>Information about the stale outbound rules in the security group.</p>
   * @public
   */
  StaleIpPermissionsEgress?: StaleIpPermission[] | undefined;

  /**
   * <p>The ID of the VPC for the security group.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the stale security groups.</p>
   * @public
   */
  StaleSecurityGroupSet?: StaleSecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksRequest {
  /**
   * <p>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a
   *       request.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

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
   *                   <code>task-state</code> - Returns tasks in a certain state (<code>InProgress</code> |
   *           <code>Completed</code> | <code>Failed</code>)</p>
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
  Filters?: Filter[] | undefined;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this request.
   *          To get the next page of items, make another request with the token returned in the output.
   * 	        For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   *          <p>You cannot specify this parameter and the <code>ImageIds</code> parameter in the same
   *       call.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  AmiId?: string | undefined;

  /**
   * <p>The time the task started.</p>
   * @public
   */
  TaskStartTime?: Date | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   * @public
   */
  S3objectKey?: string | undefined;

  /**
   * <p>The progress of the task as a percentage.</p>
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * <p>The state of the store task (<code>InProgress</code>, <code>Completed</code>, or
   *       <code>Failed</code>).</p>
   * @public
   */
  StoreTaskState?: string | undefined;

  /**
   * <p>If the tasks fails, the reason for the failure is returned. If the task succeeds,
   *       <code>null</code> is returned.</p>
   * @public
   */
  StoreTaskFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStoreImageTasksResult {
  /**
   * <p>The information about the AMI store tasks.</p>
   * @public
   */
  StoreImageTaskResults?: StoreImageTaskResult[] | undefined;

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
   *                   <code>tag</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
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
  Filters?: Filter[] | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   *          <p>Default: Describes all your subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

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
export interface DescribeSubnetsResult {
  /**
   * <p>The token to include in another request to get the next page of items. This value is <code>null</code> when there are no more items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the subnets.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;
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
  DryRun?: boolean | undefined;

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
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return for this request. This value can be between 5 and 1000.
   *          To get the next page of items, make another request with the token returned in the output.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from a previous paginated request.
   *          Pagination continues from the end of the items returned by the previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Key?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: TagDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesRequest {
  /**
   * <p>Traffic filter rule IDs.</p>
   * @public
   */
  TrafficMirrorFilterRuleIds?: string[] | undefined;

  /**
   * <p>Traffic filter ID.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Traffic mirror filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-rule-id</code>: The ID of the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-mirror-filter-id</code>: The ID of the filter that this rule is associated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rule-number</code>: The number of the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rule-action</code>: The action taken on the filtered traffic. Possible actions are <code>accept</code> and <code>reject</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>traffic-direction</code>: The traffic direction. Possible directions are <code>ingress</code> and <code>egress</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>protocol</code>: The protocol, for example UDP, assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-cidr-block</code>: The source CIDR block assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>destination-cidr-block</code>: The destination CIDR block assigned to the Traffic Mirror rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>description</code>: The description of the Traffic Mirror rule.</p>
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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFilterRulesResult {
  /**
   * <p>Traffic mirror rules.</p>
   * @public
   */
  TrafficMirrorFilterRules?: TrafficMirrorFilterRule[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * <p>Information about one or more Traffic Mirror filters.</p>
   * @public
   */
  TrafficMirrorFilters?: TrafficMirrorFilter[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   * @public
   */
  TrafficMirrorSessions?: TrafficMirrorSession[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * <p>The ID of the Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargetIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
}

/**
 * @public
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   * @public
   */
  TrafficMirrorTargets?: TrafficMirrorTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

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
 * <p>Describes an association.</p>
 * @public
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * <p>The ID of the route table for the transit gateway.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
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
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  TransitGatewayOwnerId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The attachment state. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The association.</p>
   * @public
   */
  Association?: TransitGatewayAttachmentAssociation | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The tags for the attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * <p>Information about the attachments.</p>
   * @public
   */
  TransitGatewayAttachments?: TransitGatewayAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectPeersRequest {
  /**
   * <p>The IDs of the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeerIds?: string[] | undefined;

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
export interface DescribeTransitGatewayConnectPeersResult {
  /**
   * <p>Information about the Connect peers.</p>
   * @public
   */
  TransitGatewayConnectPeers?: TransitGatewayConnectPeer[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayConnectsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

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
export interface DescribeTransitGatewayConnectsResult {
  /**
   * <p>Information about the Connect attachments.</p>
   * @public
   */
  TransitGatewayConnects?: TransitGatewayConnect[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainIds?: string[] | undefined;

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
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * <p>Information about the transit gateway multicast domains.</p>
   * @public
   */
  TransitGatewayMulticastDomains?: TransitGatewayMulticastDomain[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * <p>One or more IDs of the transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

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
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * <p>The transit gateway peering attachments.</p>
   * @public
   */
  TransitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayPolicyTablesRequest {
  /**
   * <p>The IDs of the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTableIds?: string[] | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayPolicyTablesResult {
  /**
   * <p>Describes the transit gateway policy tables.</p>
   * @public
   */
  TransitGatewayPolicyTables?: TransitGatewayPolicyTable[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsRequest {
  /**
   * <p>The IDs of the transit gateway route tables that are being advertised.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncementIds?: string[] | undefined;

  /**
   * <p>The filters associated with the transit gateway policy table.</p>
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
export interface DescribeTransitGatewayRouteTableAnnouncementsResult {
  /**
   * <p>Describes the transit gateway route table announcement.</p>
   * @public
   */
  TransitGatewayRouteTableAnnouncements?: TransitGatewayRouteTableAnnouncement[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * <p>The IDs of the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTableIds?: string[] | undefined;

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
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * <p>Information about the transit gateway route tables.</p>
   * @public
   */
  TransitGatewayRouteTables?: TransitGatewayRouteTable[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * <p>The IDs of the transit gateways.</p>
   * @public
   */
  TransitGatewayIds?: string[] | undefined;

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
export interface DescribeTransitGatewaysResult {
  /**
   * <p>Information about the transit gateways.</p>
   * @public
   */
  TransitGateways?: TransitGateway[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * <p>The IDs of the attachments.</p>
   * @public
   */
  TransitGatewayAttachmentIds?: string[] | undefined;

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
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * <p>Information about the VPC attachments.</p>
   * @public
   */
  TransitGatewayVpcAttachments?: TransitGatewayVpcAttachment[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsRequest {
  /**
   * <p>The IDs of the associations.</p>
   * @public
   */
  AssociationIds?: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
  Filters?: Filter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *             To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrunkInterfaceAssociationsResult {
  /**
   * <p>Information about the trunk associations.</p>
   * @public
   */
  InterfaceAssociations?: TrunkInterfaceAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVerifiedAccessEndpointsRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointIds?: string[] | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

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
export interface DescribeVerifiedAccessEndpointsResult {
  /**
   * <p>Details about the Verified Access endpoints.</p>
   * @public
   */
  VerifiedAccessEndpoints?: VerifiedAccessEndpoint[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

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
   *             <li>
   *                <p>
   *                   <code>service-network-resource-association-id</code> - The ID of the
   *                association.</p>
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
 * @internal
 */
export const DescribeLaunchTemplateVersionsResultFilterSensitiveLog = (
  obj: DescribeLaunchTemplateVersionsResult
): any => ({
  ...obj,
  ...(obj.LaunchTemplateVersions && {
    LaunchTemplateVersions: obj.LaunchTemplateVersions.map((item) => LaunchTemplateVersionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SpotFleetLaunchSpecificationFilterSensitiveLog = (obj: SpotFleetLaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SpotFleetRequestConfigDataFilterSensitiveLog = (obj: SpotFleetRequestConfigData): any => ({
  ...obj,
  ...(obj.LaunchSpecifications && {
    LaunchSpecifications: obj.LaunchSpecifications.map((item) => SpotFleetLaunchSpecificationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SpotFleetRequestConfigFilterSensitiveLog = (obj: SpotFleetRequestConfig): any => ({
  ...obj,
  ...(obj.SpotFleetRequestConfig && {
    SpotFleetRequestConfig: SpotFleetRequestConfigDataFilterSensitiveLog(obj.SpotFleetRequestConfig),
  }),
});

/**
 * @internal
 */
export const DescribeSpotFleetRequestsResponseFilterSensitiveLog = (obj: DescribeSpotFleetRequestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchSpecificationFilterSensitiveLog = (obj: LaunchSpecification): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SpotInstanceRequestFilterSensitiveLog = (obj: SpotInstanceRequest): any => ({
  ...obj,
  ...(obj.LaunchSpecification && {
    LaunchSpecification: LaunchSpecificationFilterSensitiveLog(obj.LaunchSpecification),
  }),
});

/**
 * @internal
 */
export const DescribeSpotInstanceRequestsResultFilterSensitiveLog = (obj: DescribeSpotInstanceRequestsResult): any => ({
  ...obj,
  ...(obj.SpotInstanceRequests && {
    SpotInstanceRequests: obj.SpotInstanceRequests.map((item) => SpotInstanceRequestFilterSensitiveLog(item)),
  }),
});

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
