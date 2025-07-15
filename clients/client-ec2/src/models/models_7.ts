// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AddedPrincipal,
  AddIpamOperatingRegion,
  AddIpamOrganizationalUnitExclusion,
  AddPrefixListEntry,
  AddressAttribute,
  Affinity,
  ApplianceModeSupportValue,
  AutoPlacement,
  ByoipCidr,
  CurrencyCodeValues,
  DnsSupportValue,
  EnaSrdSpecification,
  HostMaintenance,
  HostRecovery,
  InstanceEventWindow,
  Ipv6SupportValue,
  SecurityGroupReferencingSupportValue,
  SubnetAssociation,
  Tag,
  TagSpecification,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayPolicyTableAssociation,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessSseSpecificationResponse,
  VerifiedAccessTrustProvider,
  VerifiedAccessTrustProviderFilterSensitiveLog,
} from "./models_0";

import {
  _InstanceType,
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservation,
  CapacityReservationInstancePlatform,
  CapacityReservationPreference,
  CapacityReservationTarget,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ClientRouteEnforcementOptions,
  ConnectionLogOptions,
  ConnectionTrackingSpecificationRequest,
  DiskImageFormat,
  EndDateType,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostnameType,
  InstanceBandwidthWeighting,
  InstanceEventWindowTimeRangeRequest,
  InstanceMatchCriteria,
  InstanceRequirementsRequest,
  IpAddressType,
  Ipam,
  IpamMeteredAccount,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  IpamTier,
  LaunchTemplate,
  Placement,
  PlatformValues,
  RequestIpamResourceTag,
  SelfServicePortal,
  ShutdownBehavior,
  TargetCapacitySpecificationRequest,
  TargetCapacityUnitType,
  VolumeType,
} from "./models_1";

import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DnsOptionsSpecification,
  InternetGatewayExclusionMode,
  LocalGatewayRoute,
  ManagedPrefixList,
  RouteServer,
  RouteServerPersistRoutesAction,
  SubnetCidrReservation,
  SubnetConfiguration,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  VerifiedAccessEndpoint,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessGroup,
  VerifiedAccessSseSpecificationRequest,
  VpcBlockPublicAccessExclusion,
  VpnEcmpSupportValue,
} from "./models_2";

import {
  Byoasn,
  CapacityBlock,
  CapacityBlockExtension,
  Filter,
  IKEVersionsRequestListValue,
  InstanceTagNotificationAttribute,
  IpamPoolCidr,
  PayerResponsibility,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  VpnConnection,
  VpnConnectionFilterSensitiveLog,
  VpnTunnelLogOptionsSpecification,
} from "./models_3";

import {
  ArchitectureType,
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  ConversionTask,
  ConversionTaskFilterSensitiveLog,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  HttpTokensState,
  ImdsSupportValues,
  ImportImageLicenseConfigurationResponse,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceRebootMigrationState,
  InstanceStatusEvent,
  LaunchPermission,
  Monitoring,
  PermissionGroup,
  SnapshotDetail,
  SnapshotDetailFilterSensitiveLog,
  SnapshotTaskDetail,
  SnapshotTaskDetailFilterSensitiveLog,
  TpmSupportValues,
  VirtualizationType,
} from "./models_4";

import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  InternetGatewayBlockMode,
  LaunchTemplateConfig,
  LockState,
  PublicIpv4PoolRange,
  ReservedInstancesConfiguration,
  ScheduledInstance,
  SnapshotAttributeName,
  VerifiedAccessInstanceLoggingConfiguration,
  VolumeModification,
  VpcBlockPublicAccessOptions,
} from "./models_5";

import {
  InstanceFamilyCreditSpecification,
  IpamResourceCidr,
  Purchase,
  TransitGatewayPropagationState,
  UnlimitedSupportedInstanceFamily,
} from "./models_6";

/**
 * <p>The architecture type, virtualization type, and other attributes for the instance types.
 *          When you specify instance attributes, Amazon EC2 will identify instance types with those
 *          attributes.</p>
 *          <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify
 *          <code>InstanceTypes</code>.</p>
 * @public
 */
export interface InstanceRequirementsWithMetadataRequest {
  /**
   * <p>The architecture type.</p>
   * @public
   */
  ArchitectureTypes?: ArchitectureType[] | undefined;

  /**
   * <p>The virtualization type.</p>
   * @public
   */
  VirtualizationTypes?: VirtualizationType[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   * @public
   */
  InstanceRequirements?: InstanceRequirementsRequest | undefined;
}

/**
 * @public
 */
export interface GetSpotPlacementScoresRequest {
  /**
   * <p>The instance types. We recommend that you specify at least three instance types. If you
   *          specify one or two instance types, or specify variations of a single instance type (for
   *          example, an <code>m3.xlarge</code> with and without instance storage), the returned
   *          placement score will always be low. </p>
   *          <p>If you specify <code>InstanceTypes</code>, you can't specify
   *             <code>InstanceRequirementsWithMetadata</code>.</p>
   * @public
   */
  InstanceTypes?: string[] | undefined;

  /**
   * <p>The target capacity.</p>
   * @public
   */
  TargetCapacity: number | undefined;

  /**
   * <p>The unit for the target capacity.</p>
   * @public
   */
  TargetCapacityUnitType?: TargetCapacityUnitType | undefined;

  /**
   * <p>Specify <code>true</code> so that the response returns a list of scored Availability Zones.
   *          Otherwise, the response returns a list of scored Regions.</p>
   *          <p>A list of scored Availability Zones is useful if you want to launch all of your Spot
   *          capacity into a single Availability Zone.</p>
   * @public
   */
  SingleAvailabilityZone?: boolean | undefined;

  /**
   * <p>The Regions used to narrow down the list of Regions to be scored. Enter the Region code,
   *          for example, <code>us-east-1</code>.</p>
   * @public
   */
  RegionNames?: string[] | undefined;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <p>If you specify <code>InstanceRequirementsWithMetadata</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   * @public
   */
  InstanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
 * <p>The Spot placement score for this Region or Availability Zone. The score is calculated
 *          based on the assumption that the <code>capacity-optimized</code> allocation strategy is
 *          used and that all of the Availability Zones in the Region can be used.</p>
 * @public
 */
export interface SpotPlacementScore {
  /**
   * <p>The Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The placement score, on a scale from <code>1</code> to <code>10</code>. A score of
   *             <code>10</code> indicates that your Spot request is highly likely to succeed in this
   *          Region or Availability Zone. A score of <code>1</code> indicates that your Spot request is
   *          not likely to succeed. </p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  SpotPlacementScores?: SpotPlacementScore[] | undefined;

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
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

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

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSubnetCidrReservationsResult {
  /**
   * <p>Information about the IPv4 subnet CIDR reservations.</p>
   * @public
   */
  SubnetIpv4CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * <p>Information about the IPv6 subnet CIDR reservations.</p>
   * @public
   */
  SubnetIpv6CidrReservations?: SubnetCidrReservation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
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
 * <p>Describes a propagation route table.</p>
 * @public
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * <p>The ID of the propagation route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

  /**
   * <p>The state of the propagation route table.</p>
   * @public
   */
  State?: TransitGatewayPropagationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * <p>Information about the propagation route tables.</p>
   * @public
   */
  TransitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
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
 * <p>Describes the resources associated with the transit gateway multicast domain.</p>
 * @public
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

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
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The subnet associated with the transit gateway multicast domain.</p>
   * @public
   */
  Subnet?: SubnetAssociation | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  MulticastDomainAssociations?: TransitGatewayMulticastDomainAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableAssociationsRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

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
export interface GetTransitGatewayPolicyTableAssociationsResult {
  /**
   * <p>Returns details about the transit gateway policy table association.</p>
   * @public
   */
  Associations?: TransitGatewayPolicyTableAssociation[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesRequest {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

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
 * <p>Describes the meta data tags associated with a transit gateway policy rule.</p>
 * @public
 */
export interface TransitGatewayPolicyRuleMetaData {
  /**
   * <p>The key name for the transit gateway policy rule meta data tag.</p>
   * @public
   */
  MetaDataKey?: string | undefined;

  /**
   * <p>The value of the key for the transit gateway policy rule meta data tag.</p>
   * @public
   */
  MetaDataValue?: string | undefined;
}

/**
 * <p>Describes a rule associated with a transit gateway policy.</p>
 * @public
 */
export interface TransitGatewayPolicyRule {
  /**
   * <p>The source CIDR block for the transit gateway policy rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   * @public
   */
  SourcePortRange?: string | undefined;

  /**
   * <p>The destination CIDR block for the transit gateway policy rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The port range for the transit gateway policy rule. Currently this is set to * (all).</p>
   * @public
   */
  DestinationPortRange?: string | undefined;

  /**
   * <p>The protocol used by the transit gateway policy rule.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The meta data tags used for the transit gateway policy rule.</p>
   * @public
   */
  MetaData?: TransitGatewayPolicyRuleMetaData | undefined;
}

/**
 * <p>Describes a transit gateway policy table entry</p>
 * @public
 */
export interface TransitGatewayPolicyTableEntry {
  /**
   * <p>The rule number for the transit gateway policy table entry.</p>
   * @public
   */
  PolicyRuleNumber?: string | undefined;

  /**
   * <p>The policy rule associated with the transit gateway policy table.</p>
   * @public
   */
  PolicyRule?: TransitGatewayPolicyRule | undefined;

  /**
   * <p>The ID of the target route table.</p>
   * @public
   */
  TargetRouteTableId?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPolicyTableEntriesResult {
  /**
   * <p>The entries for the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableEntries?: TransitGatewayPolicyTableEntry[] | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
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
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * <p>Information about the prefix list references.</p>
   * @public
   */
  TransitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
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
 * <p>Describes an association between a route table and a resource attachment.</p>
 * @public
 */
export interface TransitGatewayRouteTableAssociation {
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
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * <p>Information about the associations.</p>
   * @public
   */
  Associations?: TransitGatewayRouteTableAssociation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
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
 * <p>Describes a route table propagation.</p>
 * @public
 */
export interface TransitGatewayRouteTablePropagation {
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
   * <p>The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The state of the resource.</p>
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
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * <p>Information about the route table propagations.</p>
   * @public
   */
  TransitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

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
export interface GetVerifiedAccessEndpointPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsRequest {
  /**
   * <p>The ID of the network CIDR endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

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
 * <p>Describes the targets for the specified Verified Access endpoint.</p>
 * @public
 */
export interface VerifiedAccessEndpointTarget {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId?: string | undefined;

  /**
   * <p>The IP address of the target.</p>
   * @public
   */
  VerifiedAccessEndpointTargetIpAddress?: string | undefined;

  /**
   * <p>The DNS name of the target.</p>
   * @public
   */
  VerifiedAccessEndpointTargetDns?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessEndpointTargetsResult {
  /**
   * <p>The Verified Access targets.</p>
   * @public
   */
  VerifiedAccessEndpointTargets?: VerifiedAccessEndpointTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

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
export interface GetVerifiedAccessGroupPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceSampleConfigurationRequest {
  /**
   * <p>The <code>VpnConnectionId</code> specifies the Site-to-Site VPN connection used for the sample
   *             configuration.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>Device identifier provided by the <code>GetVpnConnectionDeviceTypes</code> API.</p>
   * @public
   */
  VpnConnectionDeviceTypeId: string | undefined;

  /**
   * <p>The IKE version to be used in the sample configuration file for your customer gateway
   *             device. You can specify one of the following versions: <code>ikev1</code> or
   *                 <code>ikev2</code>.</p>
   * @public
   */
  InternetKeyExchangeVersion?: string | undefined;

  /**
   * <p>The type of sample configuration to generate. Valid values are "compatibility" (includes IKEv1) or "recommended" (throws UnsupportedOperationException for IKEv1).</p>
   * @public
   */
  SampleType?: string | undefined;

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
export interface GetVpnConnectionDeviceSampleConfigurationResult {
  /**
   * <p>Sample configuration file for the specified customer gateway device.</p>
   * @public
   */
  VpnConnectionDeviceSampleConfiguration?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *                 <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>NextToken</code> value. This value
   *             is null when there are no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;

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
 * <p>List of customer gateway devices that have a sample configuration file available for
 *             use. You can also see the list of device types with sample configuration files available
 *             under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer
 *                 gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @public
 */
export interface VpnConnectionDeviceType {
  /**
   * <p>Customer gateway device identifier.</p>
   * @public
   */
  VpnConnectionDeviceTypeId?: string | undefined;

  /**
   * <p>Customer gateway device vendor.</p>
   * @public
   */
  Vendor?: string | undefined;

  /**
   * <p>Customer gateway device platform.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>Customer gateway device software version.</p>
   * @public
   */
  Software?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnConnectionDeviceTypesResult {
  /**
   * <p>List of customer gateway devices that have a sample configuration file available for
   *             use.</p>
   * @public
   */
  VpnConnectionDeviceTypes?: VpnConnectionDeviceType[] | undefined;

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *                 <code>GetVpnConnectionDeviceTypes</code> request. When the results of a
   *                 <code>GetVpnConnectionDeviceTypes</code> request exceed <code>MaxResults</code>,
   *             this value can be used to retrieve the next page of results. This value is null when
   *             there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Details for Site-to-Site VPN tunnel endpoint maintenance events.</p>
 * @public
 */
export interface MaintenanceDetails {
  /**
   * <p>Verify existence of a pending maintenance.</p>
   * @public
   */
  PendingMaintenance?: string | undefined;

  /**
   * <p>The timestamp after which Amazon Web Services will automatically apply maintenance.</p>
   * @public
   */
  MaintenanceAutoAppliedAfter?: Date | undefined;

  /**
   * <p>Timestamp of last applied maintenance.</p>
   * @public
   */
  LastMaintenanceApplied?: Date | undefined;
}

/**
 * @public
 */
export interface GetVpnTunnelReplacementStatusResult {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId?: string | undefined;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the customer gateway.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress?: string | undefined;

  /**
   * <p>Get details of pending tunnel endpoint maintenance.</p>
   * @public
   */
  MaintenanceDetails?: MaintenanceDetails | undefined;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client certificate revocation list applies.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The client certificate revocation list file. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-certificates.html#cvpn-working-certificates-generate">Generate a Client Certificate Revocation List</a> in the
   * 				<i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  CertificateRevocationList: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes the client-specific data.</p>
 * @public
 */
export interface ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The time that the disk upload ends.</p>
   * @public
   */
  UploadEnd?: Date | undefined;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   * @public
   */
  UploadSize?: number | undefined;

  /**
   * <p>The time that the disk upload starts.</p>
   * @public
   */
  UploadStart?: Date | undefined;
}

/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 * @public
 */
export interface UserBucket {
  /**
   * <p>The name of the Amazon S3 bucket where the disk image is located.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The file name of the disk image.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Describes the disk container object for an import image task.</p>
 * @public
 */
export interface ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The block device mapping for the disk.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>OVA</code> | <code>VHD</code> | <code>VHDX</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an
   *    Amazon S3 URL (s3://..)</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * <p>The request information of license configurations.</p>
 * @public
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * <p>The ARN of a license configuration.</p>
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportImageRequest {
  /**
   * <p>The architecture of the virtual machine.</p>
   *          <p>Valid values: <code>i386</code> | <code>x86_64</code>
   *          </p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>The client-specific data.</p>
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * <p>The token to enable idempotency for VM import requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description string for the import image task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk containers.</p>
   * @public
   */
  DiskContainers?: ImageDiskContainer[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies whether the destination AMI of the imported image should be encrypted. The default KMS key for EBS is used
   *    unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor platform.</p>
   *          <p>Valid values: <code>xen</code>
   *          </p>
   * @public
   */
  Hypervisor?: string | undefined;

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
   *                <p>Key alias</p>
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
   * @public
   */
  KmsKeyId?: string | undefined;

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
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The operating system of the virtual machine. If you import a VM that is compatible with
   *    Unified Extensible Firmware Interface (UEFI) using an EBS snapshot, you must specify a value for
   *    the platform.</p>
   *          <p>Valid values: <code>Windows</code> | <code>Linux</code>
   *          </p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The ARNs of the license configurations.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationRequest[] | undefined;

  /**
   * <p>The tags to apply to the import image task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The usage operation value. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#prerequisites">Licensing options</a> in the <i>VM Import/Export User Guide</i>.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The boot mode of the virtual machine.</p>
   *          <note>
   *             <p>The <code>uefi-preferred</code> boot mode isn't supported for importing images. For more
   *     information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites.html#vmimport-boot-modes">Boot modes</a> in
   *     the <i>VM Import/Export User Guide</i>.</p>
   *          </note>
   * @public
   */
  BootMode?: BootModeValues | undefined;
}

/**
 * @public
 */
export interface ImportImageResult {
  /**
   * <p>The architecture of the virtual machine.</p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>A description of the import task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the AMI is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The target hypervisor of the import task.</p>
   * @public
   */
  Hypervisor?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The task ID of the import image task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>The identifier for the symmetric KMS key that was used to create the encrypted AMI.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The license type of the virtual machine.</p>
   * @public
   */
  LicenseType?: string | undefined;

  /**
   * <p>The operating system of the virtual machine.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The progress of the task.</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  SnapshotDetails?: SnapshotDetail[] | undefined;

  /**
   * <p>A brief status of the task.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status message of the import task.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ARNs of the license configurations.</p>
   * @public
   */
  LicenseSpecifications?: ImportImageLicenseConfigurationResponse[] | undefined;

  /**
   * <p>Any tags assigned to the import image task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The usage operation value.</p>
   * @public
   */
  UsageOperation?: string | undefined;
}

/**
 * <p>Describes a disk image.</p>
 * @public
 */
export interface DiskImageDetail {
  /**
   * <p>The disk image format.</p>
   * @public
   */
  Format: DiskImageFormat | undefined;

  /**
   * <p>The size of the disk image, in GiB.</p>
   * @public
   */
  Bytes: number | undefined;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL.
   *    For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication
   *    Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer
   *     Guide</i>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   * @public
   */
  ImportManifestUrl: string | undefined;
}

/**
 * <p>Describes an EBS volume.</p>
 * @public
 */
export interface VolumeDetail {
  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  Size: number | undefined;
}

/**
 * <p>Describes a disk image.</p>
 * @public
 */
export interface DiskImage {
  /**
   * <p>A description of the disk image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk image.</p>
   * @public
   */
  Image?: DiskImageDetail | undefined;

  /**
   * <p>Information about the volume.</p>
   * @public
   */
  Volume?: VolumeDetail | undefined;
}

/**
 * <p>Describes the user data for an instance.</p>
 * @public
 */
export interface UserData {
  /**
   * <p>The user data. If you are using an Amazon Web Services SDK or command line tool, Base64-encoding is performed for you, and you
   *    can load the text from a file. Otherwise, you must provide Base64-encoded text.</p>
   * @public
   */
  Data?: string | undefined;
}

/**
 * <p>Describes the launch specification for VM import.</p>
 * @public
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * <p>The architecture of the instance.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The security group names.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The security group IDs.</p>
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>The Base64-encoded user data to make available to the instance.</p>
   * @public
   */
  UserData?: UserData | undefined;

  /**
   * <p>The instance type. For more information about the instance types that you can import, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-instance-types">Instance Types</a> in the
   *    VM Import/Export User Guide.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The placement information for the instance.</p>
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * <p>Indicates whether monitoring is enabled.</p>
   * @public
   */
  Monitoring?: boolean | undefined;

  /**
   * <p>[EC2-VPC] The ID of the subnet in which to launch the instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the
   *    operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * <p>[EC2-VPC] An available IP address from the IP address range of the subnet.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface ImportInstanceRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A description for the instance being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The launch specification.</p>
   * @public
   */
  LaunchSpecification?: ImportInstanceLaunchSpecification | undefined;

  /**
   * <p>The disk image.</p>
   * @public
   */
  DiskImages?: DiskImage[] | undefined;

  /**
   * <p>The instance operating system.</p>
   * @public
   */
  Platform: PlatformValues | undefined;
}

/**
 * @public
 */
export interface ImportInstanceResult {
  /**
   * <p>Information about the conversion task.</p>
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ImportKeyPairRequest {
  /**
   * <p>The tags to apply to the imported key pair.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique name for the key pair.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKeyMaterial: Uint8Array | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  KeyFingerprint?: string | undefined;

  /**
   * <p>The key pair name that you provided.</p>
   * @public
   */
  KeyName?: string | undefined;

  /**
   * <p>The ID of the resulting key pair.</p>
   * @public
   */
  KeyPairId?: string | undefined;

  /**
   * <p>The tags applied to the imported key pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The disk container object for the import snapshot request.</p>
 * @public
 */
export interface SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The format of the disk image being imported.</p>
   *          <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>RAW</code>
   *          </p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon
   *    S3 URL (s3://..).</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The Amazon S3 bucket for the disk image.</p>
   * @public
   */
  UserBucket?: UserBucket | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotRequest {
  /**
   * <p>The client-specific data.</p>
   * @public
   */
  ClientData?: ClientData | undefined;

  /**
   * <p>Token to enable idempotency for VM import requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The description string for the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the disk container.</p>
   * @public
   */
  DiskContainer?: SnapshotDiskContainer | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is
   *    used unless you specify a non-default KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the
   *     <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

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
   *                <p>Key alias</p>
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the role to use when not using the default role, 'vmimport'.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The tags to apply to the import snapshot task during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface ImportSnapshotResult {
  /**
   * <p>A description of the import snapshot task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the import snapshot task.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>Information about the import snapshot task.</p>
   * @public
   */
  SnapshotTaskDetail?: SnapshotTaskDetail | undefined;

  /**
   * <p>Any tags assigned to the import snapshot task.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportVolumeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The disk image.</p>
   * @public
   */
  Image: DiskImageDetail | undefined;

  /**
   * <p>A description of the volume.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The volume size.</p>
   * @public
   */
  Volume: VolumeDetail | undefined;
}

/**
 * @public
 */
export interface ImportVolumeResult {
  /**
   * <p>Information about the conversion task.</p>
   * @public
   */
  ConversionTask?: ConversionTask | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinRequest {
  /**
   * <p>The IDs of the AMIs to list. Omit this parameter to list all of the AMIs that are in the
   *       Recycle Bin. You can specify up to 20 IDs in a single request.</p>
   * @public
   */
  ImageIds?: string[] | undefined;

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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Information about an AMI that is currently in the Recycle Bin.</p>
 * @public
 */
export interface ImageRecycleBinInfo {
  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the AMI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the AMI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the AMI entered the Recycle Bin.</p>
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * <p>The date and time when the AMI is to be permanently deleted from the Recycle Bin.</p>
   * @public
   */
  RecycleBinExitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImagesInRecycleBinResult {
  /**
   * <p>Information about the AMIs.</p>
   * @public
   */
  Images?: ImageRecycleBinInfo[] | undefined;

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
export interface ListSnapshotsInRecycleBinRequest {
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
   * <p>The IDs of the snapshots to list. Omit this parameter to list all of the
   *       snapshots that are in the Recycle Bin.</p>
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
 * <p>Information about a snapshot that is currently in the Recycle Bin.</p>
 * @public
 */
export interface SnapshotRecycleBinInfo {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the snapshot entered the Recycle Bin.</p>
   * @public
   */
  RecycleBinEnterTime?: Date | undefined;

  /**
   * <p>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</p>
   * @public
   */
  RecycleBinExitTime?: Date | undefined;

  /**
   * <p>The description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the volume from which the snapshot was created.</p>
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsInRecycleBinResult {
  /**
   * <p>Information about the snapshots.</p>
   * @public
   */
  Snapshots?: SnapshotRecycleBinInfo[] | undefined;

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
export const LockMode = {
  compliance: "compliance",
  governance: "governance",
} as const;

/**
 * @public
 */
export type LockMode = (typeof LockMode)[keyof typeof LockMode];

/**
 * @public
 */
export interface LockSnapshotRequest {
  /**
   * <p>The ID of the snapshot to lock.</p>
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

  /**
   * <p>The mode in which to lock the snapshot. Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>governance</code> - Locks the snapshot in governance mode. Snapshots locked in governance
   *           mode can't be deleted until one of the following conditions are met:</p>
   *                <ul>
   *                   <li>
   *                      <p>The lock duration expires.</p>
   *                   </li>
   *                   <li>
   *                      <p>The snapshot is unlocked by a user with the appropriate permissions.</p>
   *                   </li>
   *                </ul>
   *                <p>Users with the appropriate IAM permissions can unlock the snapshot, increase or decrease the lock
   *           duration, and change the lock mode to <code>compliance</code> at any time.</p>
   *                <p>If you lock a snapshot in <code>governance</code> mode, omit <b>
   *           CoolOffPeriod</b>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>compliance</code> - Locks the snapshot in compliance mode. Snapshots locked in compliance
   *           mode can't be unlocked by any user. They can be deleted only after the lock duration expires. Users
   *           can't decrease the lock duration or change the lock mode to <code>governance</code>. However, users
   *           with appropriate IAM permissions can increase the lock duration at any time.</p>
   *                <p>If you lock a snapshot in <code>compliance</code> mode, you can optionally specify
   *           <b>CoolOffPeriod</b>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockMode: LockMode | undefined;

  /**
   * <p>The cooling-off period during which you can unlock the snapshot or modify the lock settings after
   *       locking the snapshot in compliance mode, in hours. After the cooling-off period expires, you can't
   *       unlock or delete the snapshot, decrease the lock duration, or change the lock mode. You can increase
   *       the lock duration after the cooling-off period expires.</p>
   *          <p>The cooling-off period is optional when locking a snapshot in compliance mode. If you are locking
   *       the snapshot in governance mode, omit this parameter.</p>
   *          <p>To lock the snapshot in compliance mode immediately without a cooling-off period, omit this
   *       parameter.</p>
   *          <p>If you are extending the lock duration for a snapshot that is locked in compliance mode after
   *       the cooling-off period has expired, omit this parameter. If you specify a cooling-period in a such
   *       a request, the request fails.</p>
   *          <p>Allowed values: Min 1, max 72.</p>
   * @public
   */
  CoolOffPeriod?: number | undefined;

  /**
   * <p>The period of time for which to lock the snapshot, in days. The snapshot lock will automatically
   *       expire after this period lapses.</p>
   *          <p>You must specify either this parameter or <b>ExpirationDate</b>, but
   *       not both.</p>
   *          <p>Allowed values: Min: 1, max 36500</p>
   * @public
   */
  LockDuration?: number | undefined;

  /**
   * <p>The date and time at which the snapshot lock is to automatically expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>You must specify either this parameter or <b>LockDuration</b>, but
   *       not both.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;
}

/**
 * @public
 */
export interface LockSnapshotResult {
  /**
   * <p>The ID of the snapshot</p>
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
   * <p>The date and time at which the snapshot was locked, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockCreatedOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock will expire, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockExpiresOn?: Date | undefined;

  /**
   * <p>The date and time at which the lock duration started, in the UTC time zone
   *       (<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   * @public
   */
  LockDurationStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface ModifyAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId: string | undefined;

  /**
   * <p>The domain name to modify for the IP address.</p>
   * @public
   */
  DomainName?: string | undefined;

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
export interface ModifyAddressAttributeResult {
  /**
   * <p>Information about the Elastic IP address.</p>
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 * @enum
 */
export const ModifyAvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opted_in: "opted-in",
} as const;

/**
 * @public
 */
export type ModifyAvailabilityZoneOptInStatus =
  (typeof ModifyAvailabilityZoneOptInStatus)[keyof typeof ModifyAvailabilityZoneOptInStatus];

/**
 * @public
 */
export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * <p>The name of the Availability Zone group, Local Zone group, or Wavelength Zone
   *       group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>Indicates whether to opt in to the zone group. The only valid value is <code>opted-in</code>.
   *       You must contact Amazon Web Services Support to opt out of a Local Zone or Wavelength Zone group.</p>
   * @public
   */
  OptInStatus: ModifyAvailabilityZoneOptInStatus | undefined;

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
export interface ModifyAvailabilityZoneGroupResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>The number of instances for which to reserve capacity. The number of instances can't
   * 			be increased or decreased by more than <code>1000</code> in a single request.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity
   * 			Reservation expires, the reserved capacity is released and you can no longer launch
   * 			instances into it. The Capacity Reservation's state changes to <code>expired</code> when
   * 			it reaches its end date and time.</p>
   *          <p>The Capacity Reservation is cancelled within an hour from the specified time. For
   * 			example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to
   * 			end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can
   * 			have one of the following end types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you
   * 					explicitly cancel it. Do not provide an <code>EndDate</code> value if
   * 						<code>EndDateType</code> is <code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a
   * 					specified date and time. You must provide an <code>EndDate</code> value if
   * 						<code>EndDateType</code> is <code>limited</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * <p>Reserved. Capacity Reservations you have created are accepted by default.</p>
   * @public
   */
  Accept?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p> The matching criteria (instance eligibility) that you want to use in the modified
   * 			Capacity Reservation. If you change the instance eligibility of an existing Capacity
   * 			Reservation from <code>targeted</code> to <code>open</code>, any running instances that
   * 			match the attributes of the Capacity Reservation, have the
   * 				<code>CapacityReservationPreference</code> set to <code>open</code>, and are not yet
   * 			running in the Capacity Reservation, will automatically use the modified Capacity
   * 			Reservation. </p>
   *          <p>To modify the instance eligibility, the Capacity Reservation must be completely idle
   * 			(zero usage).</p>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetRequest {
  /**
   * <p>The ID of the Capacity Reservation Fleet to modify.</p>
   * @public
   */
  CapacityReservationFleetId: string | undefined;

  /**
   * <p>The total number of capacity units to be reserved by the Capacity Reservation Fleet.
   * 			This value, together with the instance type weights that you assign to each instance
   * 			type used by the Fleet determine the number of instances for which the Fleet reserves
   * 			capacity. Both values are based on units that make sense for your workload. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TotalTargetCapacity?: number | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation Fleet expires. When the Capacity
   * 			Reservation Fleet expires, its state changes to <code>expired</code> and all of the
   * 			Capacity Reservations in the Fleet expire.</p>
   *          <p>The Capacity Reservation Fleet expires within an hour after the specified time. For
   * 			example, if you specify <code>5/31/2019</code>, <code>13:30:55</code>, the Capacity
   * 			Reservation Fleet is guaranteed to expire between <code>13:30:55</code> and
   * 				<code>14:30:55</code> on <code>5/31/2019</code>.</p>
   *          <p>You can't specify <b>EndDate</b> and <b>
   * 				RemoveEndDate</b> in the same request.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether to remove the end date from the Capacity Reservation Fleet. If you
   * 			remove the end date, the Capacity Reservation Fleet does not expire and it remains
   * 			active until you explicitly cancel it using the <b>CancelCapacityReservationFleet</b> action.</p>
   *          <p>You can't specify <b>RemoveEndDate</b> and <b> EndDate</b> in the same request.</p>
   * @public
   */
  RemoveEndDate?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationFleetResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Information about the DNS server to be used.</p>
 * @public
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to
   * 			two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values
   * 			overwrite the existing values.</p>
   * @public
   */
  CustomDnsServers?: string[] | undefined;

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS
   * 			servers.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN endpoint to modify.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in
   * 			Certificate Manager (ACM).</p>
   * @public
   */
  ServerCertificateArn?: string | undefined;

  /**
   * <p>Information about the client connection logging options.</p>
   *          <p>If you enable client connection logging, data about client connections is sent to a
   * 			Cloudwatch Logs log stream. The following information is logged:</p>
   *          <ul>
   *             <li>
   *                <p>Client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection results (successful and unsuccessful)</p>
   *             </li>
   *             <li>
   *                <p>Reasons for unsuccessful client connection requests</p>
   *             </li>
   *             <li>
   *                <p>Client connection termination time</p>
   *             </li>
   *          </ul>
   * @public
   */
  ConnectionLogOptions?: ConnectionLogOptions | undefined;

  /**
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   * @public
   */
  DnsServers?: DnsServersOptionsModifyStructure | undefined;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   * @public
   */
  VpnPort?: number | undefined;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   *         	<i>Client VPN Administrator Guide</i>.</p>
   * @public
   */
  SplitTunnel?: boolean | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   * @public
   */
  SelfServicePortal?: SelfServicePortal | undefined;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   * @public
   */
  ClientConnectOptions?: ClientConnectOptions | undefined;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   * @public
   */
  SessionTimeoutHours?: number | undefined;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   * @public
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;

  /**
   * <p>Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. T
   * 		his feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.</p>
   *          <p>Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table,
   * 			reverting it back to the expected route configurations.</p>
   * @public
   */
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions | undefined;

  /**
   * <p>Indicates whether the client VPN session is disconnected after the maximum timeout specified in <code>sessionTimeoutHours</code> is reached. If <code>true</code>, users are prompted to reconnect client VPN. If <code>false</code>, client VPN attempts to reconnect automatically. The default value is <code>true</code>.</p>
   * @public
   */
  DisconnectOnSessionTimeout?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClientVpnEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationRequest {
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

  /**
   * <p>The credit option for CPU usage of the instance family.</p>
   *          <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   * @public
   */
  CpuCredits: string | undefined;
}

/**
 * @public
 */
export interface ModifyDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   * @public
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification | undefined;
}

/**
 * @public
 */
export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * <p>The identifier of the KMS key to use for Amazon EBS encryption.
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
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId: string | undefined;

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
export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | undefined;

  /**
   * <p>The launch template and overrides.</p>
   * @public
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[] | undefined;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The size of the EC2 Fleet.</p>
   * @public
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFleetResult {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *          no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes a load permission.</p>
 * @public
 */
export interface LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  Group?: PermissionGroup | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 * @public
 */
export interface LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   * @public
   */
  Add?: LoadPermissionRequest[] | undefined;

  /**
   * <p>The load permissions to remove.</p>
   * @public
   */
  Remove?: LoadPermissionRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  add: "add",
  remove: "remove",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 */
export interface ModifyFpgaImageAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the AFI.</p>
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Attribute?: FpgaImageAttributeName | undefined;

  /**
   * <p>The operation type.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The Amazon Web Services account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * <p>The load permission for the AFI.</p>
   * @public
   */
  LoadPermission?: LoadPermissionModifications | undefined;

  /**
   * <p>A description for the AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A name for the AFI.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ModifyFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   * @public
   */
  FpgaImageAttribute?: FpgaImageAttribute | undefined;
}

/**
 * @public
 */
export interface ModifyHostsRequest {
  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">Host recovery</a> in
   *             the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support only a specific instance type.</p>
   *          <p>If you want to modify a Dedicated Host to support multiple instance types in its
   *             current instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support multiple instance types within its
   *             current instance family.</p>
   *          <p>If you want to modify a Dedicated Host to support a specific instance type only, omit
   *             this parameter and specify <b>InstanceType</b> instead. You
   *             cannot specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>Indicates whether to enable or disable host maintenance for the Dedicated Host. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html">Host
   *                 maintenance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   * @public
   */
  HostIds: string[] | undefined;

  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;
}

/**
 * @public
 */
export interface ModifyHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the setting
   *             you requested can be used.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyIdentityIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *           | <code>network-acl-association</code> | <code>network-interface</code> |
   *           <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *           <code>route-table</code> | <code>route-table-association</code> |
   *           <code>security-group</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *           <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *           currently within their opt-in period for longer IDs.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   * @public
   */
  UseLongIds: boolean | undefined;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   * @public
   */
  PrincipalArn: string | undefined;
}

/**
 * @public
 */
export interface ModifyIdFormatRequest {
  /**
   * <p>The type of resource: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *            | <code>network-acl-association</code> | <code>network-interface</code> |
   *            <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *            <code>route-table</code> | <code>route-table-association</code> |
   *            <code>security-group</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *            <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>Alternatively, use the <code>all-current</code> option to include all resource types that are
   *        currently within their opt-in period for longer IDs.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   * @public
   */
  UseLongIds: boolean | undefined;
}

/**
 * <p>Describes a launch permission modification.</p>
 * @public
 */
export interface LaunchPermissionModifications {
  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to add to the list of
   *       launch permissions for the AMI.</p>
   * @public
   */
  Add?: LaunchPermission[] | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to remove from the list of
   *       launch permissions for the AMI.</p>
   * @public
   */
  Remove?: LaunchPermission[] | undefined;
}

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 * @public
 */
export interface ModifyImageAttributeRequest {
  /**
   * <p>The name of the attribute to modify.</p>
   *          <p>Valid values: <code>description</code> | <code>imdsSupport</code> |
   *         <code>launchPermission</code>
   *          </p>
   * @public
   */
  Attribute?: string | undefined;

  /**
   * <p>A new description for the AMI.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>The ID of the AMI.</p>
   * @public
   */
  ImageId: string | undefined;

  /**
   * <p>A new launch permission for the AMI.</p>
   * @public
   */
  LaunchPermission?: LaunchPermissionModifications | undefined;

  /**
   * <p>The operation type. This parameter can be used only when the <code>Attribute</code>
   *       parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * <p>The user groups. This parameter can be used only when the <code>Attribute</code> parameter
   *       is <code>launchPermission</code>.</p>
   * @public
   */
  UserGroups?: string[] | undefined;

  /**
   * <p>The Amazon Web Services account IDs. This parameter can be used only when the
   *         <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>The value of the attribute being modified. This parameter can be used only when the
   *         <code>Attribute</code> parameter is <code>description</code> or
   *       <code>imdsSupport</code>.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization. This parameter can be used only when
   *       the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OrganizationArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used
   *       only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   * @public
   */
  OrganizationalUnitArns?: string[] | undefined;

  /**
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <important>
   *             <p>Do not use this parameter unless your AMI software supports IMDSv2. After you set the
   *         value to <code>v2.0</code>, you can't undo it. The only way to “reset” your AMI is to create
   *         a new AMI from the underlying snapshot.</p>
   *          </important>
   * @public
   */
  ImdsSupport?: AttributeValue | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>The ID of the EBS volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * <p>Describes a block device mapping entry.</p>
 * @public
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   * @public
   */
  Ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * <p>The virtual device name.</p>
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * <p>Suppresses the specified device included in the block device mapping.</p>
   * @public
   */
  NoDevice?: string | undefined;
}

/**
 * @public
 */
export interface BlobAttributeValue {
  Value?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html">Enable stop
   *                 protection for your instance</a>.</p>
   *          <p></p>
   * @public
   */
  DisableApiStop?: AttributeBooleanValue | undefined;

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
   * <p>The name of the attribute to modify.</p>
   *          <note>
   *             <p>When changing the instance type: If the original instance type is configured for
   *                 configurable bandwidth, and the desired instance type doesn't support configurable
   *                 bandwidth, first set the existing bandwidth configuration to <code>default</code>
   *                 using the <a>ModifyInstanceNetworkPerformanceOptions</a>
   *                 operation.</p>
   *          </note>
   *          <important>
   *             <p>You can modify the following attributes only: <code>disableApiTermination</code> |
   *                     <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> |
   *                     <code>instanceInitiatedShutdownBehavior</code> | <code>blockDeviceMapping</code>
   *                 | <code>userData</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
   *                     <code>ebsOptimized</code> | <code>sriovNetSupport</code> |
   *                     <code>enaSupport</code> | <code>nvmeSupport</code> | <code>disableApiStop</code>
   *                 | <code>enclaveOptions</code>
   *             </p>
   *          </important>
   * @public
   */
  Attribute?: InstanceAttributeName | undefined;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated. You can't modify the <code>DeleteOnTermination</code>
   *             attribute for volumes that are attached to Amazon Web Services-managed resources.</p>
   *          <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Update the block device mapping when launching an instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[] | undefined;

  /**
   * <p>Enable or disable termination protection for the instance. If the value is <code>true</code>,
   *             you can't terminate the instance using the Amazon EC2 console, command line interface, or API.
   *             You can't enable termination protection for Spot Instances.</p>
   * @public
   */
  DisableApiTermination?: AttributeBooleanValue | undefined;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is
   *             not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
   * @public
   */
  InstanceType?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   * @public
   */
  Kernel?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   * @public
   */
  Ramdisk?: AttributeValue | undefined;

  /**
   * <p>Changes the instance's user data to the specified value. User data must be base64-encoded.
   *             Depending on the tool or SDK that you're using, the base64-encoding might be performed for you.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-add-user-data.html">Work with instance user data</a>.</p>
   * @public
   */
  UserData?: BlobAttributeValue | undefined;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   * @public
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue | undefined;

  /**
   * <p>Replaces the security groups of the instance with the specified security groups.
   *             You must specify the ID of at least one security group, even if it's just the default
   *             security group for the VPC.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   * @public
   */
  EbsOptimized?: AttributeBooleanValue | undefined;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *          <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   * @public
   */
  SriovNetSupport?: AttributeValue | undefined;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   * @public
   */
  EnaSupport?: AttributeBooleanValue | undefined;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. </p>
 *          <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance
 * 			to run as an On-Demand Instance, to run in any <code>open</code> Capacity Reservation
 * 			that has matching attributes, or to run only in a Capacity Reservation or Capacity
 * 			Reservation group. Use the <code>CapacityReservationTarget</code> parameter to
 * 			explicitly target a specific Capacity Reservation or a Capacity Reservation
 * 			group.</p>
 *          <p>You can only specify <code>CapacityReservationPreference</code> and
 * 				<code>CapacityReservationTarget</code> if the
 * 				<code>CapacityReservationPreference</code> is
 * 				<code>capacity-reservations-only</code>.</p>
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   * 			include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>capacity-reservations-only</code> - The instance will only run in a
   * 					Capacity Reservation or Capacity Reservation group. If capacity isn't available,
   * 					the instance will fail to launch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity
   * 					Reservation that has matching attributes (instance type, platform, Availability
   * 					Zone, and tenancy). If capacity isn't available, the instance runs as an
   * 					On-Demand Instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance doesn't run in a Capacity Reservation even if
   * 					one is available. The instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation
   * 			group.</p>
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * <p>The ID of the instance to be modified.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   * @public
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCpuOptionsRequest {
  /**
   * <p>The ID of the instance to update.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The number of CPU cores to activate for the specified instance.</p>
   * @public
   */
  CoreCount: number | undefined;

  /**
   * <p>The number of threads to run for each CPU core.</p>
   * @public
   */
  ThreadsPerCore: number | undefined;

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
export interface ModifyInstanceCpuOptionsResult {
  /**
   * <p>The ID of the instance that was updated.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The number of CPU cores that are running for the specified instance after the
   * 			update.</p>
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * <p>The number of threads that are running per CPU core for the specified
   * 			instance after the update.</p>
   * @public
   */
  ThreadsPerCore?: number | undefined;
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 * @public
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   *          <p>T3 instances with <code>host</code> tenancy do not support the <code>unlimited</code>
   *             CPU credit option.</p>
   * @public
   */
  CpuCredits?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information about the credit option for CPU usage.</p>
   * @public
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 * @public
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UnsuccessfulInstanceCreditSpecificationErrorCode = {
  INCORRECT_INSTANCE_STATE: "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED: "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND: "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID: "InvalidInstanceID.Malformed",
} as const;

/**
 * @public
 */
export type UnsuccessfulInstanceCreditSpecificationErrorCode =
  (typeof UnsuccessfulInstanceCreditSpecificationErrorCode)[keyof typeof UnsuccessfulInstanceCreditSpecificationErrorCode];

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | undefined;

  /**
   * <p>The applicable error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 * @public
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   * @public
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceCreditSpecificationResult {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   * @public
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[] | undefined;

  /**
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   * @public
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[] | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeRequest {
  /**
   * <p>Checks whether you have the required permissions for the operation, without actually making the
   *   request, and provides an error response. If you have the required permissions, the error response is
   *   <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the instance with the scheduled event.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the event whose date and time you are modifying.</p>
   * @public
   */
  InstanceEventId: string | undefined;

  /**
   * <p>The new date and time when the event will take place.</p>
   * @public
   */
  NotBefore: Date | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventStartTimeResult {
  /**
   * <p>Information about the event.</p>
   * @public
   */
  Event?: InstanceStatusEvent | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>The time ranges of the event window.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[] | undefined;

  /**
   * <p>The cron expression of the event window, for example, <code>* 0-4,20-23 * *
   *          1,5</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *                   <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *                   <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * <p>Specifies whether to attempt reboot migration during a user-initiated reboot of an
   *             instance that has a scheduled <code>system-reboot</code> event:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - Amazon EC2 attempts to migrate the instance to
   *                     new hardware (reboot migration). If successful, the <code>system-reboot</code>
   *                     event is cleared. If unsuccessful, an in-place reboot occurs and the event
   *                     remains scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disabled</code> - Amazon EC2 keeps the instance on the same
   *                     hardware (in-place reboot). The <code>system-reboot</code> event remains
   *                     scheduled.</p>
   *             </li>
   *          </ul>
   *          <p>This setting only applies to supported instances that have a scheduled reboot event.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration">Enable or disable reboot migration</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;

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
 * @public
 */
export interface ModifyInstanceMaintenanceOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;

  /**
   * <p>Specifies whether to attempt reboot migration during a user-initiated reboot of an
   *             instance that has a scheduled <code>system-reboot</code> event:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - Amazon EC2 attempts to migrate the instance to
   *                     new hardware (reboot migration). If successful, the <code>system-reboot</code>
   *                     event is cleared. If unsuccessful, an in-place reboot occurs and the event
   *                     remains scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disabled</code> - Amazon EC2 keeps the instance on the same
   *                     hardware (in-place reboot). The <code>system-reboot</code> event remains
   *                     scheduled.</p>
   *             </li>
   *          </ul>
   *          <p>This setting only applies to supported instances that have a scheduled reboot event.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration">Enable or disable reboot migration</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  RebootMigration?: InstanceRebootMigrationState | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultInstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
  no_preference: "no-preference",
} as const;

/**
 * @public
 */
export type DefaultInstanceMetadataEndpointState =
  (typeof DefaultInstanceMetadataEndpointState)[keyof typeof DefaultInstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const MetadataDefaultHttpTokensState = {
  no_preference: "no-preference",
  optional: "optional",
  required: "required",
} as const;

/**
 * @public
 */
export type MetadataDefaultHttpTokensState =
  (typeof MetadataDefaultHttpTokensState)[keyof typeof MetadataDefaultHttpTokensState];

/**
 * @public
 * @enum
 */
export const DefaultInstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
  no_preference: "no-preference",
} as const;

/**
 * @public
 */
export type DefaultInstanceMetadataTagsState =
  (typeof DefaultInstanceMetadataTagsState)[keyof typeof DefaultInstanceMetadataTagsState];

/**
 * @public
 */
export interface ModifyInstanceMetadataDefaultsRequest {
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
  HttpTokens?: MetadataDefaultHttpTokensState | undefined;

  /**
   * <p>The maximum number of hops that the metadata token can travel. To indicate no
   *             preference, specify <code>-1</code>.</p>
   *          <p>Possible values: Integers from <code>1</code> to <code>64</code>, and <code>-1</code>
   *             to indicate no preference</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the IMDS endpoint on an instance. When disabled, the instance
   *             metadata can't be accessed.</p>
   * @public
   */
  HttpEndpoint?: DefaultInstanceMetadataEndpointState | undefined;

  /**
   * <p>Enables or disables access to an instance's tags from the instance metadata. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceMetadataTags?: DefaultInstanceMetadataTagsState | undefined;

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
export interface ModifyInstanceMetadataDefaultsResult {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Indicates whether IMDSv2 is required.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - IMDSv2 is optional. You can choose whether to send a
   *                     session token in your instance metadata retrieval requests. If you retrieve
   *                     IAM role credentials without a session token, you receive the IMDSv1 role
   *                     credentials. If you retrieve IAM role credentials using a valid session token,
   *                     you receive the IMDSv2 role credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - IMDSv2 is required. You must send a session token
   *                     in your instance metadata retrieval requests. With this option, retrieving the
   *                     IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are
   *                     not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code> and the account level default is set to
   *                     <code>no-preference</code>, the default is <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI)
   *                     for your instance is <code>v2.0</code>, but the account level default is set to
   *                     <code>V1 or V2</code>, the default is <code>optional</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The default value can also be affected by other combinations of parameters. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence">Order of precedence for instance metadata options</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified,
   *             the existing state is maintained.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is
   *             not specified, the existing state is maintained.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.
   *             Applies only if you enabled the HTTP metadata endpoint.</p>
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceMetadataOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The metadata options for the instance.</p>
   * @public
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceNetworkPerformanceRequest {
  /**
   * <p>The ID of the instance to update.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:</p>
   *          <dl>
   *             <dt>default</dt>
   *             <dd>
   *                <p>This option uses the standard bandwidth configuration for your instance type.</p>
   *             </dd>
   *             <dt>vpc-1</dt>
   *             <dd>
   *                <p>This option boosts your networking baseline bandwidth and reduces your EBS
   *                         baseline bandwidth.</p>
   *             </dd>
   *             <dt>ebs-1</dt>
   *             <dd>
   *                <p>This option boosts your EBS baseline bandwidth and reduces your networking
   *                         baseline bandwidth.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  BandwidthWeighting: InstanceBandwidthWeighting | undefined;

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
export interface ModifyInstanceNetworkPerformanceResult {
  /**
   * <p>The instance ID that was updated.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>Contains the updated configuration for bandwidth weighting on the specified instance.</p>
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * @public
 * @enum
 */
export const HostTenancy = {
  dedicated: "dedicated",
  default: "default",
  host: "host",
} as const;

/**
 * @public
 */
export type HostTenancy = (typeof HostTenancy)[keyof typeof HostTenancy];

/**
 * @public
 */
export interface ModifyInstancePlacementRequest {
  /**
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *          <p>To remove an instance from a placement group, specify an empty string ("").</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The number of the partition in which to place the instance. Valid only if the
   *             placement group strategy is set to <code>partition</code>.</p>
   * @public
   */
  PartitionNumber?: number | undefined;

  /**
   * <p>The ARN of the host resource group in which to place the instance. The instance must
   *             have a tenancy of <code>host</code> to specify this parameter.</p>
   * @public
   */
  HostResourceGroupArn?: string | undefined;

  /**
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tenancy for the instance.</p>
   *          <note>
   *             <p>For T3 instances, you must launch the instance on a Dedicated Host to use a
   *                 tenancy of <code>host</code>. You can't change the tenancy from
   *                 <code>host</code> to <code>dedicated</code> or <code>default</code>.
   *                 Attempting to make one of these unsupported tenancy changes results in an
   *                 <code>InvalidRequest</code> error code.</p>
   *          </note>
   * @public
   */
  Tenancy?: HostTenancy | undefined;

  /**
   * <p>The affinity setting for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-affinity">Host affinity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Affinity?: Affinity | undefined;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   * @public
   */
  HostId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstancePlacementResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Remove an operating Region from an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>
 *          </p>
 * @public
 */
export interface RemoveIpamOperatingRegion {
  /**
   * <p>The name of the operating Region you want to remove.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM you want to modify.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>The description of the IPAM you want to modify.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>The operating Regions to remove.</p>
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * <p>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing > IPAM tab</a>.</p>
   * @public
   */
  Tier?: IpamTier | undefined;

  /**
   * <p>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</p>
   * @public
   */
  EnablePrivateGua?: boolean | undefined;

  /**
   * <p>A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/ipam-enable-cost-distro.html">Enable cost distribution</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipam-owner</code> (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource-owner</code>: The Amazon Web Services account that owns the IP address is charged for the active IP address.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MeteredAccount?: IpamMeteredAccount | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  Ipam?: Ipam | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you want to modify.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The description of the IPAM pool you want to modify.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If true, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   * @public
   */
  AutoImport?: boolean | undefined;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128. The minimum netmask
   *          length must be less than the maximum netmask length.</p>
   * @public
   */
  AllocationMinNetmaskLength?: number | undefined;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.The maximum netmask
   *          length must be greater than the minimum netmask length.</p>
   * @public
   */
  AllocationMaxNetmaskLength?: number | undefined;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   * @public
   */
  AllocationDefaultNetmaskLength?: number | undefined;

  /**
   * <p>Clear the default netmask length allocation rule for this pool.</p>
   * @public
   */
  ClearAllocationDefaultNetmaskLength?: boolean | undefined;

  /**
   * <p>Add tag allocation rules to a pool. For more information about allocation rules, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  AddAllocationResourceTags?: RequestIpamResourceTag[] | undefined;

  /**
   * <p>Remove tag allocation rules from a pool.</p>
   * @public
   */
  RemoveAllocationResourceTags?: RequestIpamResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamPoolResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  IpamPool?: IpamPool | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the resource you want to modify.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The CIDR of the resource you want to modify.</p>
   * @public
   */
  ResourceCidr: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource you want to modify.</p>
   * @public
   */
  ResourceRegion: string | undefined;

  /**
   * <p>The ID of the current scope that the resource CIDR is in.</p>
   * @public
   */
  CurrentIpamScopeId: string | undefined;

  /**
   * <p>The ID of the scope you want to transfer the resource CIDR to.</p>
   * @public
   */
  DestinationIpamScopeId?: string | undefined;

  /**
   * <p>Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.</p>
   * @public
   */
  Monitored: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceCidrResult {
  /**
   * <p>The CIDR of the resource.</p>
   * @public
   */
  IpamResourceCidr?: IpamResourceCidr | undefined;
}

/**
 * <p>Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface RemoveIpamOrganizationalUnitExclusion {
  /**
   * <p>An Amazon Web Services Organizations entity path. Build the path for the OU(s) using Amazon Web Services Organizations IDs separated by a <code>/</code>. Include all child OUs by ending the path with <code>/*</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Example 1</p>
   *                <ul>
   *                   <li>
   *                      <p>Path to a child OU: <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/ou-jkl0-awsddddd/</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>In this example, <code>o-a1b2c3d4e5</code> is the organization ID, <code>r-f6g7h8i9j0example</code> is the root ID , <code>ou-ghi0-awsccccc</code> is an OU ID, and <code>ou-jkl0-awsddddd</code> is a child OU ID.</p>
   *                   </li>
   *                   <li>
   *                      <p>IPAM will not manage the IP addresses in accounts in the child OU.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Example 2</p>
   *                <ul>
   *                   <li>
   *                      <p>Path where all child OUs will be part of the exclusion: <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-ghi0-awsccccc/*</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>In this example, IPAM will not manage the IP addresses in accounts in the OU (<code>ou-ghi0-awsccccc</code>) or in accounts in any OUs that are children of the OU.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>For more information on how to construct an entity path, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path">Understand the Amazon Web Services Organizations entity path</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  OrganizationsEntityPath?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryRequest {
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
   * <p>A resource discovery description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   * @public
   */
  AddOperatingRegions?: AddIpamOperatingRegion[] | undefined;

  /**
   * <p>Remove operating Regions.</p>
   * @public
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[] | undefined;

  /**
   * <p>Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <note>
   *             <p>The resulting set of exclusions must not result in "overlap", meaning two or more OU
   *          exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete">Add or remove OU exclusions
   *          </a> in the <i>Amazon VPC User Guide</i>.</p>
   *          </note>
   * @public
   */
  AddOrganizationalUnitExclusions?: AddIpamOrganizationalUnitExclusion[] | undefined;

  /**
   * <p>Remove an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   *          <note>
   *             <p>The resulting set of exclusions must not result in "overlap", meaning two or more OU
   *             exclusions must not exclude the same OU. For more information and examples, see the Amazon Web Services CLI request process in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html#exclude-ous-create-delete">Add or remove OU exclusions
   *             </a> in the <i>Amazon VPC User Guide</i>.</p>
   *          </note>
   * @public
   */
  RemoveOrganizationalUnitExclusions?: RemoveIpamOrganizationalUnitExclusion[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery.</p>
   * @public
   */
  IpamResourceDiscovery?: IpamResourceDiscovery | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the scope you want to modify.</p>
   * @public
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The description of the scope you want to modify.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIpamScopeResult {
  /**
   * <p>The results of the modification.</p>
   * @public
   */
  IpamScope?: IpamScope | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If a client token isn't specified, a randomly generated token is used in the
   *             request to ensure idempotency.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name, but not
   *             both.</p>
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * <p>The version number of the launch template to set as the default version.</p>
   * @public
   */
  DefaultVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteRequest {
  /**
   * <p>The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *          The ID of the virtual interface group.
   *       </p>
   * @public
   */
  LocalGatewayVirtualInterfaceGroupId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>
   *          The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You
   *          cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
   *       </p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLocalGatewayRouteResult {
  /**
   * <p>Information about the local gateway route table.</p>
   * @public
   */
  Route?: LocalGatewayRoute | undefined;
}

/**
 * <p>An entry for a prefix list.</p>
 * @public
 */
export interface RemovePrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListRequest {
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
   * <p>The current version of the prefix list.</p>
   * @public
   */
  CurrentVersion?: number | undefined;

  /**
   * <p>A name for the prefix list.</p>
   * @public
   */
  PrefixListName?: string | undefined;

  /**
   * <p>One or more entries to add to the prefix list.</p>
   * @public
   */
  AddEntries?: AddPrefixListEntry[] | undefined;

  /**
   * <p>One or more entries to remove from the prefix list.</p>
   * @public
   */
  RemoveEntries?: RemovePrefixListEntry[] | undefined;

  /**
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   *          <p>If any of the resources that reference the prefix list cannot support the new
   *             maximum size, the modify operation fails. Check the state message for the IDs of
   *             the first ten resources that do not support the new maximum size.</p>
   * @public
   */
  MaxEntries?: number | undefined;
}

/**
 * @public
 */
export interface ModifyManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * <p>Describes an attachment change.</p>
 * @public
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * <p>The default number of the ENA queues.</p>
   * @public
   */
  DefaultEnaQueueCount?: boolean | undefined;

  /**
   * <p>The number of ENA queues to be created with the instance.</p>
   * @public
   */
  EnaQueueCount?: number | undefined;

  /**
   * <p>The ID of the network interface attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *             terminated.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;
}

/**
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 * @public
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * <p>Updates the ENA Express configuration for the network interface that’s attached to the
   *             instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification | undefined;

  /**
   * <p>If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have
   *             the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA
   *             address associated with an ENI that you have enabled to use a primary IPv6 address. Use
   *             this option if the instance that this ENI will be attached to relies on its IPv6 address
   *             not changing. Amazon Web Services will automatically assign an IPv6 address associated
   *             with the ENI attached to your instance to be the primary IPv6 address. Once you enable
   *             an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6
   *             GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6
   *             address until the instance is terminated or the network interface is detached. If you
   *             have multiple IPv6 addresses associated with an ENI attached to your instance and you
   *             enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI
   *             becomes the primary IPv6 address.</p>
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * <p>A connection tracking specification.</p>
   * @public
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecificationRequest | undefined;

  /**
   * <p>Indicates whether to assign a public IPv4 address to a network interface. This option
   *             can be enabled for any network interface but will only apply to the primary network
   *             interface (eth0).</p>
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * <p>A list of subnet IDs to associate with the network interface.</p>
   * @public
   */
  AssociatedSubnetIds?: string[] | undefined;

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
   * <p>A description for the network interface.</p>
   * @public
   */
  Description?: AttributeValue | undefined;

  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   * @public
   */
  SourceDestCheck?: AttributeBooleanValue | undefined;

  /**
   * <p>Changes the security groups for the network interface. The new set of groups you
   *             specify replaces the current set. You must specify at least one group, even if it's just
   *             the default security group in the VPC. You must specify the ID of the security group,
   *             not the name.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Information about the interface attachment. If modifying the <code>delete on
   *                 termination</code> attribute, you must specify the ID of the interface
   *             attachment.</p>
   * @public
   */
  Attachment?: NetworkInterfaceAttachmentChanges | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsRequest {
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

  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   * @public
   */
  PrivateDnsHostnameType?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyPrivateDnsNameOptionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an
   *             error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const PublicIpDnsOption = {
  public_dual_stack_dns_name: "public-dual-stack-dns-name",
  public_ipv4_dns_name: "public-ipv4-dns-name",
  public_ipv6_dns_name: "public-ipv6-dns-name",
} as const;

/**
 * @public
 */
export type PublicIpDnsOption = (typeof PublicIpDnsOption)[keyof typeof PublicIpDnsOption];

/**
 * @public
 */
export interface ModifyPublicIpDnsNameOptionsRequest {
  /**
   * <p>A network interface ID.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The public hostname type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html">EC2 instance hostnames, DNS names, and domains</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>public-dual-stack-dns-name</code>: A dual-stack public hostname for a network interface. Requests from within the VPC resolve to both the private IPv4 address and the IPv6 Global Unicast Address of the network interface. Requests from the internet resolve to both the public IPv4 and the IPv6 GUA address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ipv4-dns-name</code>: An IPv4-enabled public hostname for a network interface. Requests from within the VPC resolve to the private primary IPv4 address of the network interface. Requests from the internet resolve to the public IPv4 address of the network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public-ipv6-dns-name</code>: An IPv6-enabled public hostname for a network interface. Requests from within the VPC or from the internet resolve to the IPv6 GUA of the network interface. </p>
   *             </li>
   *          </ul>
   * @public
   */
  HostnameType: PublicIpDnsOption | undefined;

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
export interface ModifyPublicIpDnsNameOptionsResult {
  /**
   * <p>Whether or not the request was successful.</p>
   * @public
   */
  Successful?: boolean | undefined;
}

/**
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 * @public
 */
export interface ModifyReservedInstancesRequest {
  /**
   * <p>The IDs of the Reserved Instances to modify.</p>
   * @public
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification
   *       request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *       Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   * @public
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 * @public
 */
export interface ModifyReservedInstancesResult {
  /**
   * <p>The ID for the modification.</p>
   * @public
   */
  ReservedInstancesModificationId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyRouteServerRequest {
  /**
   * <p>The ID of the route server to modify.</p>
   * @public
   */
  RouteServerId: string | undefined;

  /**
   * <p>Specifies whether to persist routes after all BGP sessions are terminated.</p>
   *          <ul>
   *             <li>
   *                <p>enable: Routes will be persisted in FIB and RIB after all BGP sessions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>disable: Routes will not be persisted in FIB and RIB after all BGP sessions are terminated.</p>
   *             </li>
   *             <li>
   *                <p>reset: If a route server has persisted routes due to all BGP sessions having ended, reset will withdraw all routes and reset route server to an empty FIB and RIB.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PersistRoutes?: RouteServerPersistRoutesAction | undefined;

  /**
   * <p>The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is <code>enabled</code>.</p>
   *          <p>If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.</p>
   * @public
   */
  PersistRoutesDuration?: number | undefined;

  /**
   * <p>Specifies whether to enable SNS notifications for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.</p>
   * @public
   */
  SnsNotificationsEnabled?: boolean | undefined;

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
export interface ModifyRouteServerResult {
  /**
   * <p>Information about the modified route server.</p>
   * @public
   */
  RouteServer?: RouteServer | undefined;
}

/**
 * <p>Describes a security group rule.</p>
 *          <p>You must specify exactly one of the following parameters, based on the rule type:</p>
 *          <ul>
 *             <li>
 *                <p>CidrIpv4</p>
 *             </li>
 *             <li>
 *                <p>CidrIpv6</p>
 *             </li>
 *             <li>
 *                <p>PrefixListId</p>
 *             </li>
 *             <li>
 *                <p>ReferencedGroupId</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                 Amazon Web Services <a href="https://en.wikipedia.org/wiki/Canonicalization">canonicalizes</a> IPv4 and IPv6 CIDRs. For example, if you specify 100.68.0.18/18 for the CIDR block,
 *               Amazon Web Services canonicalizes the CIDR block to 100.68.0.0/18. Any subsequent DescribeSecurityGroups and DescribeSecurityGroupRules calls will
 *               return the canonicalized form of the CIDR block. Additionally, if you attempt to add another rule with the
 *               non-canonical form of the CIDR (such as 100.68.0.18/18) and there is already a rule for the canonicalized
 *               form of the CIDR block (such as 100.68.0.0/18), the API throws an duplicate rule error.</p>
 *          </note>
 *          <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 * @public
 */
export interface SecurityGroupRuleRequest {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *          <p>Use <code>-1</code> to specify all protocols.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *             If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * <p>The description of the security group rule.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Describes an update to a security group rule.</p>
 * @public
 */
export interface SecurityGroupRuleUpdate {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId: string | undefined;

  /**
   * <p>Information about the security group rule.</p>
   * @public
   */
  SecurityGroupRule?: SecurityGroupRuleRequest | undefined;
}

/**
 * @public
 */
export interface ModifySecurityGroupRulesRequest {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>Information about the security group properties to update.</p>
   * @public
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

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
export interface ModifySecurityGroupRulesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 * @public
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   * @public
   */
  Add?: CreateVolumePermission[] | undefined;

  /**
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   * @public
   */
  Remove?: CreateVolumePermission[] | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   * @public
   */
  Attribute?: SnapshotAttributeName | undefined;

  /**
   * <p>A JSON representation of the snapshot attribute modification.</p>
   * @public
   */
  CreateVolumePermission?: CreateVolumePermissionModifications | undefined;

  /**
   * <p>The group to modify for the snapshot.</p>
   * @public
   */
  GroupNames?: string[] | undefined;

  /**
   * <p>The type of operation to perform to the attribute.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The account ID to modify for the snapshot.</p>
   * @public
   */
  UserIds?: string[] | undefined;

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
export const TargetStorageTier = {
  archive: "archive",
} as const;

/**
 * @public
 */
export type TargetStorageTier = (typeof TargetStorageTier)[keyof typeof TargetStorageTier];

/**
 * @public
 */
export interface ModifySnapshotTierRequest {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The name of the storage tier. You must specify <code>archive</code>.</p>
   * @public
   */
  StorageTier?: TargetStorageTier | undefined;

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
export interface ModifySnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The date and time when the archive process was started.</p>
   * @public
   */
  TieringStartTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 * @public
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
   * @public
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;

  /**
   * <p>The number of On-Demand Instances in the fleet.</p>
   * @public
   */
  OnDemandTargetCapacity?: number | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  Context?: string | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The size of the fleet.</p>
   * @public
   */
  TargetCapacity?: number | undefined;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   *          <p>Supported only for fleets of type <code>maintain</code>.</p>
   * @public
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | undefined;
}

/**
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 * @public
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifySubnetAttributeRequest {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *          <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   * @public
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   *          <p>Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses
   * associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing page</a>.</p>
   * @public
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *          <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   * @public
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *          <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   *          <p>You must first configure a NAT gateway in a public subnet (separate from the subnet
   *            containing the IPv6-only workloads). For example, the subnet containing the NAT gateway
   *            should have a <code>0.0.0.0/0</code> route pointing to the internet gateway. For more
   *            information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough">Configure DNS64 and NAT64</a> in the <i>Amazon VPC User Guide</i>.</p>
   * @public
   */
  EnableDns64?: AttributeBooleanValue | undefined;

  /**
   * <p>The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an
   *             instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance
   *             DNS name must be based on the instance ID (resource-name).</p>
   * @public
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   * @public
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   * @public
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue | undefined;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1). A local network interface cannot be the primary network
   *             interface (eth0).
   *         </p>
   * @public
   */
  EnableLniAtDeviceIndex?: number | undefined;

  /**
   * <p>
   *             Specify <code>true</code> to indicate that local network interfaces at the current
   *             position should be disabled.
   *         </p>
   * @public
   */
  DisableLniAtDeviceIndex?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   * @public
   */
  AddNetworkServices?: TrafficMirrorNetworkService[] | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   * @public
   */
  RemoveNetworkServices?: TrafficMirrorNetworkService[] | undefined;

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
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   * @public
   */
  TrafficMirrorFilter?: TrafficMirrorFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorFilterRuleField = {
  description: "description",
  destination_port_range: "destination-port-range",
  protocol: "protocol",
  source_port_range: "source-port-range",
} as const;

/**
 * @public
 */
export type TrafficMirrorFilterRuleField =
  (typeof TrafficMirrorFilterRuleField)[keyof typeof TrafficMirrorFilterRuleField];

/**
 * @public
 */
export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>The type of traffic to assign to the rule.</p>
   * @public
   */
  TrafficDirection?: TrafficDirection | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   * @public
   */
  RuleNumber?: number | undefined;

  /**
   * <p>The action to assign to the rule.</p>
   * @public
   */
  RuleAction?: TrafficMirrorRuleAction | undefined;

  /**
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   * @public
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest | undefined;

  /**
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   * @public
   */
  Protocol?: number | undefined;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   * @public
   */
  SourceCidrBlock?: string | undefined;

  /**
   * <p>The description to assign to the Traffic Mirror rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   * @public
   */
  RemoveFields?: TrafficMirrorFilterRuleField[] | undefined;

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
export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * <note>
   *             <p>Tags are not returned for ModifyTrafficMirrorFilterRule.</p>
   *          </note>
   *          <p>A Traffic Mirror rule.</p>
   * @public
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficMirrorSessionField = {
  description: "description",
  packet_length: "packet-length",
  virtual_network_id: "virtual-network-id",
} as const;

/**
 * @public
 */
export type TrafficMirrorSessionField = (typeof TrafficMirrorSessionField)[keyof typeof TrafficMirrorSessionField];

/**
 * @public
 */
export interface ModifyTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   * @public
   */
  TrafficMirrorTargetId?: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   * @public
   */
  TrafficMirrorFilterId?: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   *          <p>For sessions with Network Load Balancer (NLB) traffic mirror targets, the default <code>PacketLength</code> will be set to 8500. Valid values are 1-8500. Setting a <code>PacketLength</code> greater than 8500 will result in an error response.</p>
   * @public
   */
  PacketLength?: number | undefined;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   * @public
   */
  SessionNumber?: number | undefined;

  /**
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   * @public
   */
  VirtualNetworkId?: number | undefined;

  /**
   * <p>The description to assign to the Traffic Mirror session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   * @public
   */
  RemoveFields?: TrafficMirrorSessionField[] | undefined;

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
export interface ModifyTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   * @public
   */
  TrafficMirrorSession?: TrafficMirrorSession | undefined;
}

/**
 * <p>The transit gateway options.</p>
 * @public
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   * @public
   */
  AddTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Removes CIDR blocks for the transit gateway.</p>
   * @public
   */
  RemoveTransitGatewayCidrBlocks?: string[] | undefined;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   * @public
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | undefined;

  /**
   * <p>Enable or disable DNS support.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   * @public
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | undefined;

  /**
   * <p>Enable or disable automatic association with the default association route table.</p>
   * @public
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | undefined;

  /**
   * <p>The ID of the default association route table.</p>
   * @public
   */
  AssociationDefaultRouteTableId?: string | undefined;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   * @public
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | undefined;

  /**
   * <p>The ID of the default propagation route table.</p>
   * @public
   */
  PropagationDefaultRouteTableId?: string | undefined;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *             The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   *          <p>The modify ASN operation is not allowed on a transit gateway if it has the following attachments:</p>
   *          <ul>
   *             <li>
   *                <p>Dynamic VPN</p>
   *             </li>
   *             <li>
   *                <p>Static VPN</p>
   *             </li>
   *             <li>
   *                <p>Direct Connect Gateway</p>
   *             </li>
   *             <li>
   *                <p>Connect</p>
   *             </li>
   *          </ul>
   *          <p>You must first delete all transit gateway attachments configured prior to modifying the ASN on
   *             the transit gateway.</p>
   * @public
   */
  AmazonSideAsn?: number | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The description for the transit gateway.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The options to modify.</p>
   * @public
   */
  Options?: ModifyTransitGatewayOptions | undefined;

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
export interface ModifyTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   * @public
   */
  TransitGateway?: TransitGateway | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   * @public
   */
  Blackhole?: boolean | undefined;

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
export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   * @public
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference | undefined;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * @public
 */
export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * <p>The IDs of one or more subnets to remove.</p>
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * <p>The new VPC attachment options.</p>
   * @public
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions | undefined;

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
export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the modified attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * <p>Describes the port range for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointPortRange {
  /**
   * <p>The start of the port range.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>The CIDR options for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointCidrOptions {
  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>Describes the options when modifying a Verified Access endpoint with the
 *             <code>network-interface</code> type.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointEniOptions {
  /**
   * <p>The IP protocol.</p>
   * @public
   */
  Protocol?: VerifiedAccessEndpointProtocol | undefined;

  /**
   * <p>The IP port number.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: ModifyVerifiedAccessEndpointPortRange[] | undefined;
}

/**
 * <p>The RDS options for a Verified Access endpoint.</p>
 * @public
 */
export interface ModifyVerifiedAccessEndpointRdsOptions {
  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The RDS endpoint.</p>
   * @public
   */
  RdsEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId?: string | undefined;

  /**
   * <p>The load balancer details if creating the Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   * @public
   */
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions | undefined;

  /**
   * <p>The network interface options.</p>
   * @public
   */
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions | undefined;

  /**
   * <p>A description for the Verified Access endpoint.</p>
   * @public
   */
  Description?: string | undefined;

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

  /**
   * <p>The RDS options.</p>
   * @public
   */
  RdsOptions?: ModifyVerifiedAccessEndpointRdsOptions | undefined;

  /**
   * <p>The CIDR options.</p>
   * @public
   */
  CidrOptions?: ModifyVerifiedAccessEndpointCidrOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointResult {
  /**
   * <p>Details about the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Verified Access endpoint.</p>
   * @public
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessEndpointPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>A description for the Verified Access group.</p>
   * @public
   */
  Description?: string | undefined;

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
export interface ModifyVerifiedAccessGroupResult {
  /**
   * <p>Details about the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroup?: VerifiedAccessGroup | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Verified Access group.</p>
   * @public
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

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

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessGroupPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   * @public
   */
  PolicyEnabled?: boolean | undefined;

  /**
   * <p>The Verified Access policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>A description for the Verified Access instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The custom subdomain.</p>
   * @public
   */
  CidrEndpointsCustomSubDomain?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceResult {
  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}

/**
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 * @public
 */
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * <p>Describes Amazon Kinesis Data Firehose logging options.</p>
 * @public
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

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
export interface VerifiedAccessLogS3DestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;

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
   * <p>The ID of the Amazon Web Services account that owns the Amazon S3 bucket.</p>
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * <p>Options for Verified Access logs.</p>
 * @public
 */
export interface VerifiedAccessLogOptions {
  /**
   * <p>Sends Verified Access logs to Amazon S3.</p>
   * @public
   */
  S3?: VerifiedAccessLogS3DestinationOptions | undefined;

  /**
   * <p>Sends Verified Access logs to CloudWatch Logs.</p>
   * @public
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions | undefined;

  /**
   * <p>Sends Verified Access logs to Kinesis.</p>
   * @public
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions | undefined;

  /**
   * <p>The logging version.</p>
   *          <p>Valid values: <code>ocsf-0.1</code> | <code>ocsf-1.0.0-rc.2</code>
   *          </p>
   * @public
   */
  LogVersion?: string | undefined;

  /**
   * <p>Indicates whether to include trust data sent by trust providers in the logs.</p>
   * @public
   */
  IncludeTrustContext?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  /**
   * <p>The ID of the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>The configuration options for Verified Access instances.</p>
   * @public
   */
  AccessLogs: VerifiedAccessLogOptions | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  /**
   * <p>The logging configuration for the Verified Access instance.</p>
   * @public
   */
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration | undefined;
}

/**
 * <p>Modifies the configuration of the specified device-based Amazon Web Services Verified Access trust provider.</p>
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderDeviceOptions {
  /**
   * <p> The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.</p>
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * <p>Describes the OpenID Connect (OIDC) options.</p>
 * @public
 */
export interface ModifyVerifiedAccessNativeApplicationOidcOptions {
  /**
   * <p>The public signing key endpoint.</p>
   * @public
   */
  PublicSigningKeyEndpoint?: string | undefined;

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
   * <p>The set of user claims to be requested from the IdP.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p>Options for an OpenID Connect-compatible user-identity trust provider.</p>
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  /**
   * <p>The OIDC issuer.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC authorization endpoint.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC token endpoint.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC user info endpoint.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The client identifier.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>The options for an OpenID Connect-compatible user-identity trust provider.</p>
   * @public
   */
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions | undefined;

  /**
   * <p>The options for a device-based trust provider. This parameter is required when the
   *          provider type is <code>device</code>.</p>
   * @public
   */
  DeviceOptions?: ModifyVerifiedAccessTrustProviderDeviceOptions | undefined;

  /**
   * <p>A description for the Verified Access trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The options for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationRequest | undefined;

  /**
   * <p>The OpenID Connect (OIDC) options.</p>
   * @public
   */
  NativeApplicationOidcOptions?: ModifyVerifiedAccessNativeApplicationOidcOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeRequest {
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

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to the existing size of the volume.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 4 - 65,536 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1 - 1024 GiB</p>
   *             </li>
   *          </ul>
   *          <p>Default: The existing size is retained.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html">Amazon EBS volume types</a> in the <i>Amazon EBS User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000 - 16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100 - 64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100 - 256,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on
   * <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">instances
   * built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.</p>
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 	  volume to up to 16 <a href="https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 	  <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  MultiAttachEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeResult {
  /**
   * <p>Information about the volume modification.</p>
   * @public
   */
  VolumeModification?: VolumeModification | undefined;
}

/**
 * @public
 */
export interface ModifyVolumeAttributeRequest {
  /**
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   * @public
   */
  AutoEnableIO?: AttributeBooleanValue | undefined;

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
export interface ModifyVpcAttributeRequest {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   * @public
   */
  EnableDnsHostnames?: AttributeBooleanValue | undefined;

  /**
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   * @public
   */
  EnableDnsSupport?: AttributeBooleanValue | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   * @public
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of an exclusion.</p>
   * @public
   */
  ExclusionId: string | undefined;

  /**
   * <p>The exclusion mode for internet gateway traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow-bidirectional</code>: Allow all internet traffic to and from the excluded VPCs and subnets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>allow-egress</code>: Allow outbound internet traffic from the excluded VPCs and subnets. Block inbound internet traffic to the excluded VPCs and subnets. Only applies when VPC Block Public Access is set to Bidirectional.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InternetGatewayExclusionMode: InternetGatewayExclusionMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessExclusionResult {
  /**
   * <p>Details related to the exclusion.</p>
   * @public
   */
  VpcBlockPublicAccessExclusion?: VpcBlockPublicAccessExclusion | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The mode of VPC BPA.</p>
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
  InternetGatewayBlockMode: InternetGatewayBlockMode | undefined;
}

/**
 * @public
 */
export interface ModifyVpcBlockPublicAccessOptionsResult {
  /**
   * <p>Details related to the VPC Block Public Access (BPA) options.</p>
   * @public
   */
  VpcBlockPublicAccessOptions?: VpcBlockPublicAccessOptions | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   * @public
   */
  ResetPolicy?: boolean | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to associate with the endpoint.</p>
   * @public
   */
  AddRouteTableIds?: string[] | undefined;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.</p>
   * @public
   */
  RemoveRouteTableIds?: string[] | undefined;

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint.
   *             For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   * @public
   */
  AddSubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the subnets from which to remove the endpoint.</p>
   * @public
   */
  RemoveSubnetIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces.</p>
   * @public
   */
  AddSecurityGroupIds?: string[] | undefined;

  /**
   * <p>(Interface endpoint) The IDs of the security groups to disassociate from the endpoint network interfaces.</p>
   * @public
   */
  RemoveSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The IP address type for the endpoint.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The DNS options for the endpoint.</p>
   * @public
   */
  DnsOptions?: DnsOptionsSpecification | undefined;

  /**
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.</p>
   * @public
   */
  PrivateDnsEnabled?: boolean | undefined;

  /**
   * <p>The subnet configurations for the endpoint.</p>
   * @public
   */
  SubnetConfigurations?: SubnetConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationRequest {
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
  ConnectionNotificationId: string | undefined;

  /**
   * <p>The ARN for the SNS topic for the notification.</p>
   * @public
   */
  ConnectionNotificationArn?: string | undefined;

  /**
   * <p>The events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   * @public
   */
  ConnectionEvents?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationRequest {
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
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   * @public
   */
  RemovePrivateDnsName?: boolean | undefined;

  /**
   * <p>Indicates whether requests to create an endpoint to the service must be accepted.</p>
   * @public
   */
  AcceptanceRequired?: boolean | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to the service
   *             configuration.</p>
   * @public
   */
  AddNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from the service
   *             configuration.</p>
   * @public
   */
  RemoveNetworkLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to the service configuration.</p>
   * @public
   */
  AddGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from the service configuration.</p>
   * @public
   */
  RemoveGatewayLoadBalancerArns?: string[] | undefined;

  /**
   * <p>The IP address types to add to the service configuration.</p>
   * @public
   */
  AddSupportedIpAddressTypes?: string[] | undefined;

  /**
   * <p>The IP address types to remove from the service configuration.</p>
   * @public
   */
  RemoveSupportedIpAddressTypes?: string[] | undefined;

  /**
   * <p>The supported Regions to add to the service configuration.</p>
   * @public
   */
  AddSupportedRegions?: string[] | undefined;

  /**
   * <p>The supported Regions to remove from the service configuration.</p>
   * @public
   */
  RemoveSupportedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
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
   * <p>The entity that is responsible for the endpoint costs. The default is the endpoint owner.
   *             If you set the payer responsibility to the service owner, you cannot set it back to the
   *             endpoint owner.</p>
   * @public
   */
  PayerResponsibility: PayerResponsibility | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsRequest {
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
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   * @public
   */
  AddAllowedPrincipals?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are revoked for principals in this list.</p>
   * @public
   */
  RemoveAllowedPrincipals?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the added principals.</p>
   * @public
   */
  AddedPrincipals?: AddedPrincipal[] | undefined;

  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * <p>The VPC peering connection options.</p>
 * @public
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses
   *         when queried from instances in the peer VPC.</p>
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * <p>The VPC peering connection options for the accepter VPC.</p>
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The VPC peering connection options for the requester VPC.</p>
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * <p>Describes the VPC peering connection options.</p>
 * @public
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   * @public
   */
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   * @public
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   * @public
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcTenancy = {
  default: "default",
} as const;

/**
 * @public
 */
export type VpcTenancy = (typeof VpcTenancy)[keyof typeof VpcTenancy];

/**
 * @public
 */
export interface ModifyVpcTenancyRequest {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The instance tenancy attribute for the VPC. </p>
   * @public
   */
  InstanceTenancy: VpcTenancy | undefined;

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
export interface ModifyVpcTenancyResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   * @public
   */
  CustomerGatewayId?: string | undefined;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   * @public
   */
  VpnGatewayId?: string | undefined;

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
export interface ModifyVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  LocalIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   * @public
   */
  RemoteIpv4NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  LocalIpv6NetworkCidr?: string | undefined;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   * @public
   */
  RemoteIpv6NetworkCidr?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnConnectionOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

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
export interface ModifyVpnTunnelCertificateResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * <p>The Amazon Web Services Site-to-Site VPN tunnel options to modify.</p>
 * @public
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
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
   * @public
   */
  TunnelInsideCidr?: string | undefined;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   * @public
   */
  TunnelInsideIpv6Cidr?: string | undefined;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   * @public
   */
  PreSharedKey?: string | undefined;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   * @public
   */
  Phase1LifetimeSeconds?: number | undefined;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   * @public
   */
  Phase2LifetimeSeconds?: number | undefined;

  /**
   * <p>The margin time, in seconds, before the phase 2 lifetime expires, during which the
   *                 Amazon Web Services side of the VPN connection performs an IKE rekey. The exact time
   *             of the rekey is randomly selected based on the value for
   *                 <code>RekeyFuzzPercentage</code>.</p>
   *          <p>Constraints: A value between 60 and half of <code>Phase2LifetimeSeconds</code>.</p>
   *          <p>Default: <code>270</code>
   *          </p>
   * @public
   */
  RekeyMarginTimeSeconds?: number | undefined;

  /**
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   * @public
   */
  RekeyFuzzPercentage?: number | undefined;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   * @public
   */
  ReplayWindowSize?: number | undefined;

  /**
   * <p>The number of seconds after which a DPD timeout occurs. A DPD timeout of 40 seconds means that the VPN endpoint will consider the peer dead 30 seconds after the first failed keep-alive.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>40</code>
   *          </p>
   * @public
   */
  DPDTimeoutSeconds?: number | undefined;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   * @public
   */
  DPDTimeoutAction?: string | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   * @public
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   * @public
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   * @public
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 2 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>5</code> | <code>14</code> | <code>15</code> |
   *                 <code>16</code> | <code>17</code> | <code>18</code> | <code>19</code> |
   *                 <code>20</code> | <code>21</code> | <code>22</code> | <code>23</code> |
   *                 <code>24</code>
   *          </p>
   * @public
   */
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[] | undefined;

  /**
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   * @public
   */
  IKEVersions?: IKEVersionsRequestListValue[] | undefined;

  /**
   * <p>The action to take when the establishing the tunnel for the VPN connection. By
   *             default, your customer gateway device must initiate the IKE negotiation and bring up the
   *             tunnel. Specify <code>start</code> for Amazon Web Services to initiate the IKE
   *             negotiation.</p>
   *          <p>Valid Values: <code>add</code> | <code>start</code>
   *          </p>
   *          <p>Default: <code>add</code>
   *          </p>
   * @public
   */
  StartupAction?: string | undefined;

  /**
   * <p>Options for logging VPN tunnel activity.</p>
   * @public
   */
  LogOptions?: VpnTunnelLogOptionsSpecification | undefined;

  /**
   * <p>Turn on or off tunnel endpoint lifecycle control feature.</p>
   * @public
   */
  EnableTunnelLifecycleControl?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>The tunnel options to modify.</p>
   * @public
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Choose whether or not to trigger immediate tunnel replacement. This is only applicable when turning on or off <code>EnableTunnelLifecycleControl</code>.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  SkipTunnelReplacement?: boolean | undefined;

  /**
   * <p>Specifies the storage mode for the pre-shared key (PSK). Valid values are <code>Standard</code> (stored in Site-to-Site VPN service) or <code>SecretsManager</code> (stored in Amazon Web Services Secrets Manager).</p>
   * @public
   */
  PreSharedKeyStorage?: string | undefined;
}

/**
 * @public
 */
export interface ModifyVpnTunnelOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   * @public
   */
  VpnConnection?: VpnConnection | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesRequest {
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
 * <p>Describes the monitoring of an instance.</p>
 * @public
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The monitoring for the instance.</p>
   * @public
   */
  Monitoring?: Monitoring | undefined;
}

/**
 * @public
 */
export interface MonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * @public
 */
export interface MoveAddressToVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  inClassic: "InClassic",
  inVpc: "InVpc",
  moveInProgress: "MoveInProgress",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface MoveAddressToVpcResult {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The status of the move of the IP address.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The BYOIP CIDR.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The IPAM pool ID.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   * @public
   */
  IpamPoolOwner: string | undefined;
}

/**
 * @public
 */
export interface MoveByoipCidrToIpamResult {
  /**
   * <p>The BYOIP CIDR.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The ID of the Capacity Reservation from which you want to move capacity. </p>
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * <p> The ID of the Capacity Reservation that you want to move capacity into. </p>
   * @public
   */
  DestinationCapacityReservationId: string | undefined;

  /**
   * <p>The number of instances that you want to move from the source Capacity Reservation.
   * 		</p>
   * @public
   */
  InstanceCount: number | undefined;
}

/**
 * @public
 */
export interface MoveCapacityReservationInstancesResult {
  /**
   * <p> Information about the source Capacity Reservation. </p>
   * @public
   */
  SourceCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p> Information about the destination Capacity Reservation. </p>
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation | undefined;

  /**
   * <p> The number of instances that were moved from the source Capacity Reservation to the
   * 			destination Capacity Reservation. </p>
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *           Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Configuring your BYOIP address range</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *           specify is /24. The most specific IPv6 address range that you can bring is /48 for CIDRs that are publicly advertisable and /56 for CIDRs that are not publicly advertisable. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   * @public
   */
  CidrAuthorizationContext?: CidrAuthorizationContext | undefined;

  /**
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *          <p>Default: true</p>
   * @public
   */
  PubliclyAdvertisable?: boolean | undefined;

  /**
   * <p>A description for the address range and the address pool.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the address pool.</p>
   * @public
   */
  PoolTagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MultiRegion?: boolean | undefined;

  /**
   * <p>If you have <a href="https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html">Local Zones</a> enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group.</p>
   *          <p>You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups:</p>
   *          <ul>
   *             <li>
   *                <p>us-east-1-dfw-2</p>
   *             </li>
   *             <li>
   *                <p>us-west-2-lax-1</p>
   *             </li>
   *             <li>
   *                <p>us-west-2-phx-2</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.</p>
   *          </note>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * <p>Provides authorization for Amazon to bring an Autonomous System Number (ASN) to a specific Amazon Web Services account using bring your own ASN (BYOASN).
 *             For details on the format of the message and signature, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @public
 */
export interface AsnAuthorizationContext {
  /**
   * <p>The authorization context's message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The authorization context's signature.</p>
   * @public
   */
  Signature: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>An IPAM ID.</p>
   * @public
   */
  IpamId: string | undefined;

  /**
   * <p>A public 2-byte or 4-byte ASN.</p>
   * @public
   */
  Asn: string | undefined;

  /**
   * <p>An ASN authorization context.</p>
   * @public
   */
  AsnAuthorizationContext: AsnAuthorizationContext | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamByoasnResult {
  /**
   * <p>An ASN and BYOIP CIDR association.</p>
   * @public
   */
  Byoasn?: Byoasn | undefined;
}

/**
 * <p>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</p>
 * @public
 */
export interface IpamCidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   * @public
   */
  Signature?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VerificationMethod = {
  dns_token: "dns-token",
  remarks_x509: "remarks-x509",
} as const;

/**
 * @public
 */
export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod];

/**
 * @public
 */
export interface ProvisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool to which you want to assign a CIDR.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  CidrAuthorizationContext?: IpamCidrAuthorizationContext | undefined;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.</p>
   * @public
   */
  NetmaskLength?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The method for verifying control of a public IP address range. Defaults to <code>remarks-x509</code> if not specified. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  VerificationMethod?: VerificationMethod | undefined;

  /**
   * <p>Verification token ID. This option only applies to IPv4 and IPv6 pools in the public scope.</p>
   * @public
   */
  IpamExternalResourceVerificationTokenId?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionIpamPoolCidrResult {
  /**
   * <p>Information about the provisioned CIDR.</p>
   * @public
   */
  IpamPoolCidr?: IpamPoolCidr | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool you would like to use to allocate this CIDR.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the public IPv4 pool you would like to use for this CIDR.</p>
   * @public
   */
  PoolId: string | undefined;

  /**
   * <p>The netmask length of the CIDR you would like to allocate to the public IPv4 pool. The least specific netmask length you can define is 24.</p>
   * @public
   */
  NetmaskLength: number | undefined;

  /**
   * <p>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-zone-avail">Local Zone availability</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you want to provision the CIDR to.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>Information about the address range of the public IPv4 pool.</p>
   * @public
   */
  PoolAddressRange?: PublicIpv4PoolRange | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The tags to apply to the Capacity Block during launch.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The ID of the Capacity Block offering.</p>
   * @public
   */
  CapacityBlockOfferingId: string | undefined;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   * @public
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockResult {
  /**
   * <p>The Capacity Reservation.</p>
   * @public
   */
  CapacityReservation?: CapacityReservation | undefined;

  /**
   * <p>The Capacity Block.</p>
   * @public
   */
  CapacityBlocks?: CapacityBlock[] | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockExtensionRequest {
  /**
   * <p>The ID of the Capacity Block extension offering to purchase.</p>
   * @public
   */
  CapacityBlockExtensionOfferingId: string | undefined;

  /**
   * <p>The ID of the Capacity reservation to be extended.</p>
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface PurchaseCapacityBlockExtensionResult {
  /**
   * <p>The purchased Capacity Block extensions. </p>
   * @public
   */
  CapacityBlockExtensions?: CapacityBlockExtension[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>, and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   * @public
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   * @public
   */
  LimitPrice?: string | undefined;

  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  OfferingId: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>Describes the details of the purchase.</p>
   * @public
   */
  Purchase?: Purchase[] | undefined;

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   * @public
   */
  TotalHourlyPrice?: string | undefined;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   * @public
   */
  TotalUpfrontPrice?: string | undefined;
}

/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 * @public
 */
export interface ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total
   *       order (instanceCount * price).</p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified. At this time, the
   *       only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;
}

/**
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 * @public
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * <p>The number of Reserved Instances to purchase.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   * @public
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example,
   *         <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   * @public
   */
  PurchaseTime?: Date | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *       the request, and provides an error response. If you have the required permissions, the error
   *       response is <code>DryRunOperation</code>. Otherwise, it is
   *       <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure
   *       that the Reserved Instances are not purchased at unexpected prices.</p>
   * @public
   */
  LimitPrice?: ReservedInstanceLimitPrice | undefined;
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 * @public
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted
   *       pricing tier, the final Reserved Instances IDs might change. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers">Crossing pricing tiers</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;
}

/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 * @public
 */
export interface PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>The purchase token.</p>
   * @public
   */
  PurchaseToken: string | undefined;
}

/**
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 * @public
 */
export interface PurchaseScheduledInstancesRequest {
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
   * <p>The purchase requests.</p>
   * @public
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 * @public
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * <p>Information about the Scheduled Instances.</p>
   * @public
   */
  ScheduledInstanceSet?: ScheduledInstance[] | undefined;
}

/**
 * @public
 */
export interface RebootInstancesRequest {
  /**
   * <p>The instance IDs.</p>
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
 * <p>Contains the parameters for RegisterImage.</p>
 * @public
 */
export interface RegisterImageRequest {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *         <code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be
   *       accessed by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACL</a> in the
   *         <i>Amazon S3 Service Developer Guide</i>.</p>
   * @public
   */
  ImageLocation?: string | undefined;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product
   *       codes.</p>
   *          <p>If your account is not authorized to specify billing product codes, you can publish AMIs
   *       that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller
   *       on the Amazon Web Services Marketplace. For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/user-guide-for-sellers.html">Getting started as an Amazon Web Services Marketplace seller</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html">AMI-based products in Amazon Web Services Marketplace</a> in the <i>Amazon Web Services Marketplace Seller Guide</i>.</p>
   * @public
   */
  BillingProducts?: string[] | undefined;

  /**
   * <p>The boot mode of the AMI. A value of <code>uefi-preferred</code> indicates that the AMI
   *       supports both UEFI and Legacy BIOS.</p>
   *          <note>
   *             <p>The operating system contained in the AMI must be configured to support the specified
   *         boot mode.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Instance launch behavior with Amazon EC2
   *         boot modes</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  BootMode?: BootModeValues | undefined;

  /**
   * <p>Set to <code>v2.0</code> to enable Trusted Platform Module (TPM) support. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  TpmSupport?: TpmSupportValues | undefined;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot for Amazon EC2
   *         instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  UefiData?: string | undefined;

  /**
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If you set the value to <code>v2.0</code>, make sure that your AMI software can support
   *         IMDSv2.</p>
   *          </note>
   * @public
   */
  ImdsSupport?: ImdsSupportValues | undefined;

  /**
   * <p>The tags to apply to the AMI.</p>
   *          <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>. If you
   *       specify another value for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI after it has been registered, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces
   *       ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or
   *       underscores(_)</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for your AMI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>. For instance store-backed AMIs, the
   *       architecture specified in the manifest file.</p>
   * @public
   */
  Architecture?: ArchitectureValues | undefined;

  /**
   * <p>The ID of the kernel.</p>
   * @public
   */
  KernelId?: string | undefined;

  /**
   * <p>The ID of the RAM disk.</p>
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   * @public
   */
  RootDeviceName?: string | undefined;

  /**
   * <p>The block device mapping entries.</p>
   *          <p>If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the
   *       encryption state of the volume.</p>
   *          <p>If you create an AMI on an Outpost, then all backing snapshots must be on the same Outpost
   *       or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can be used
   *       to launch instances on the same Outpost only. For more information, <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#ami">Create AMIs from
   *         local snapshots</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *       Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make
   *       instances launched from the AMI unreachable.</p>
   * @public
   */
  SriovNetSupport?: string | undefined;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any
   *       instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make
   *       instances launched from the AMI unreachable.</p>
   * @public
   */
  EnaSupport?: boolean | undefined;
}

/**
 * <p>Contains the output of RegisterImage.</p>
 * @public
 */
export interface RegisterImageResult {
  /**
   * <p>The ID of the newly registered AMI.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * <p>Information about the tag keys to register for the current Region. You can either
 *          specify individual tag keys or register all tag keys in the current Region. You must
 *          specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the
 *          request</p>
 * @public
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to register all tag keys in the current Region. Specify
   *             <code>true</code> to register all tag keys.</p>
   * @public
   */
  IncludeAllTagsOfInstance?: boolean | undefined;

  /**
   * <p>The tag keys to register.</p>
   * @public
   */
  InstanceTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Information about the tag keys to register.</p>
   * @public
   */
  InstanceTagAttribute: RegisterInstanceTagAttributeRequest | undefined;
}

/**
 * @public
 */
export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   * @public
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the registered network interfaces.</p>
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the registered  transit gateway multicast group members.</p>
   * @public
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 * @public
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   * @public
   */
  RegisteredNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   * @public
   */
  GroupIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the  transit gateway multicast group sources.</p>
   * @public
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources | undefined;
}

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
export const ImageDiskContainerFilterSensitiveLog = (obj: ImageDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportImageRequestFilterSensitiveLog = (obj: ImportImageRequest): any => ({
  ...obj,
  ...(obj.DiskContainers && {
    DiskContainers: obj.DiskContainers.map((item) => ImageDiskContainerFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ImportImageResultFilterSensitiveLog = (obj: ImportImageResult): any => ({
  ...obj,
  ...(obj.SnapshotDetails && {
    SnapshotDetails: obj.SnapshotDetails.map((item) => SnapshotDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DiskImageDetailFilterSensitiveLog = (obj: DiskImageDetail): any => ({
  ...obj,
  ...(obj.ImportManifestUrl && { ImportManifestUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DiskImageFilterSensitiveLog = (obj: DiskImage): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
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
  ...(obj.DiskImages && { DiskImages: obj.DiskImages.map((item) => DiskImageFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportInstanceResultFilterSensitiveLog = (obj: ImportInstanceResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});

/**
 * @internal
 */
export const SnapshotDiskContainerFilterSensitiveLog = (obj: SnapshotDiskContainer): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportSnapshotRequestFilterSensitiveLog = (obj: ImportSnapshotRequest): any => ({
  ...obj,
  ...(obj.DiskContainer && { DiskContainer: SnapshotDiskContainerFilterSensitiveLog(obj.DiskContainer) }),
});

/**
 * @internal
 */
export const ImportSnapshotResultFilterSensitiveLog = (obj: ImportSnapshotResult): any => ({
  ...obj,
  ...(obj.SnapshotTaskDetail && { SnapshotTaskDetail: SnapshotTaskDetailFilterSensitiveLog(obj.SnapshotTaskDetail) }),
});

/**
 * @internal
 */
export const ImportVolumeRequestFilterSensitiveLog = (obj: ImportVolumeRequest): any => ({
  ...obj,
  ...(obj.Image && { Image: DiskImageDetailFilterSensitiveLog(obj.Image) }),
});

/**
 * @internal
 */
export const ImportVolumeResultFilterSensitiveLog = (obj: ImportVolumeResult): any => ({
  ...obj,
  ...(obj.ConversionTask && { ConversionTask: ConversionTaskFilterSensitiveLog(obj.ConversionTask) }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessNativeApplicationOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
  ...(obj.OidcOptions && {
    OidcOptions: ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog(obj.OidcOptions),
  }),
  ...(obj.NativeApplicationOidcOptions && {
    NativeApplicationOidcOptions: ModifyVerifiedAccessNativeApplicationOidcOptionsFilterSensitiveLog(
      obj.NativeApplicationOidcOptions
    ),
  }),
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionResultFilterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnConnectionOptionsResultFilterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelCertificateResultFilterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsSpecificationFilterSensitiveLog = (
  obj: ModifyVpnTunnelOptionsSpecification
): any => ({
  ...obj,
  ...(obj.PreSharedKey && { PreSharedKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsRequestFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
  ...obj,
  ...(obj.TunnelOptions && { TunnelOptions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsResultFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
  ...obj,
  ...(obj.VpnConnection && { VpnConnection: VpnConnectionFilterSensitiveLog(obj.VpnConnection) }),
});
