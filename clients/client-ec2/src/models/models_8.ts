// smithy-typescript generated code
import type {
  _InstanceType,
  AddressAttributeName,
  AmdSevSnpSpecification,
  CapacityManagerStatus,
  HostnameType,
  HttpTokensState,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceBandwidthWeighting,
  InstanceInterruptionBehavior,
  InstanceMetadataEndpointState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  MarketType,
  MembershipType,
  NestedVirtualizationSpecification,
  ReportInstanceReasonCodes,
  ReportStatusType,
  ResetFpgaImageAttributeName,
  ResetImageAttributeName,
  RuleAction,
  SecondaryInterfaceType,
  SeverityLabel,
  ShutdownBehavior,
  SnapshotAttributeName,
  SnapshotState,
  SpotInstanceType,
  SSEType,
  Status,
  TransitGatewayAttachmentResourceType,
  ZeroSizePreference,
} from "./enums";
import type {
  AddressAttribute,
  ByoipCidr,
  ClientVpnAuthorizationRuleStatus,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  IpPermission,
  NatGatewayAddress,
  PortRange,
  RouteTableAssociationState,
  TagSpecification,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
} from "./models_0";
import type {
  BlockDeviceMapping,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  IcmpTypeCode,
  InstanceIpv6Address,
  LocalGatewayRoute,
  ManagedPrefixList,
  OperatorRequest,
  Placement,
} from "./models_1";
import type { TransitGatewayRoute } from "./models_2";
import type { ClientVpnConnectionStatus, Filter } from "./models_3";
import type { InstanceState, NetworkInsightsAccessScopeAnalysis, NetworkInsightsAnalysis } from "./models_4";
import type {
  InstanceNetworkInterfaceSpecification,
  RunInstancesMonitoringEnabled,
  SpotFleetRequestConfigData,
  SpotInstanceRequest,
  SpotPlacement,
} from "./models_5";
import type { CapacityManagerMonitoredTagKey } from "./models_6";
import type { CapacityReservationSpecification, EnclaveOptionsRequest, InstanceMonitoring } from "./models_7";

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * The ID of the transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * The transit gateway peering attachment.
   *
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * Information about the attachment.
   *
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The IDs of the VPC endpoints.
   *
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcEndpointConnectionsResult {
  /**
   * Information about the endpoints that were not rejected, if applicable.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface RejectVpcPeeringConnectionResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ReleaseAddressRequest {
  /**
   * The allocation ID. This parameter is required.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises IP addresses.
   *
   * If you provide an incorrect network border group, you receive an `InvalidAddress.NotFound` error.
   *
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReleaseHostsRequest {
  /**
   * The IDs of the Dedicated Hosts to release.
   *
   * @public
   */
  HostIds: string[] | undefined;
}

/**
 * @public
 */
export interface ReleaseHostsResult {
  /**
   * The IDs of the Dedicated Hosts that were successfully released.
   *
   * @public
   */
  Successful?: string[] | undefined;

  /**
   * The IDs of the Dedicated Hosts that could not be released, including an error message.
   *
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationRequest {
  /**
   * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the IPAM pool which contains the allocation you want to release.
   *
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * The CIDR of the allocation you want to release.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * The ID of the allocation.
   *
   * @public
   */
  IpamPoolAllocationId: string | undefined;
}

/**
 * @public
 */
export interface ReleaseIpamPoolAllocationResult {
  /**
   * Indicates if the release was successful.
   *
   * @public
   */
  Success?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * The ID of the existing IAM instance profile association.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * Information about the IAM instance profile association.
   *
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * The maximum age for allowed images.
 *
 * @public
 */
export interface CreationDateConditionRequest {
  /**
   * The maximum number of days that have elapsed since the image was created. For example, a value of `300` allows images that were created within the last 300 days.
   *
   * @public
   */
  MaximumDaysSinceCreated?: number | undefined;
}

/**
 * The maximum period since deprecation for allowed images.
 *
 * @public
 */
export interface DeprecationTimeConditionRequest {
  /**
   * The maximum number of days that have elapsed since the image was deprecated. Set to `0` to exclude all deprecated images.
   *
   * @public
   */
  MaximumDaysSinceDeprecated?: number | undefined;
}

/**
 * The watermark filter criteria for an allowed image. Each entry can specify one or more fields. All specified fields must match the same watermark on the image.
 *
 * @public
 */
export interface ImageWatermarkFilterRequest {
  /**
   * The `accountId:name` of the watermark. Supports wildcards (`*`, `?`).
   *
   * @public
   */
  WatermarkKey?: string | undefined;

  /**
   * The Region where the watermark was originally created. Supports wildcards (`*`, `?`).
   *
   * @public
   */
  SourceImageRegion?: string | undefined;

  /**
   * The maximum number of days that have elapsed since the source image was created.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaximumDaysSinceSourceImageCreated?: number | undefined;

  /**
   * The maximum number of days that have elapsed since the watermark was attached to the image.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaximumDaysSinceWatermarkCreated?: number | undefined;
}

/**
 * The Amazon Inspector scan-result criteria that an AMI must meet to be allowed. The criteria can limit the highest finding severity. They can also limit, for each severity, the days since Amazon Inspector reported a fix as available.
 *
 * The severity limit applies to all findings, whether or not a fix is available. The day limits for each severity apply only to findings that have a fix available. A scanned AMI that has no fix-available finding of a given severity meets that severity's day limit. AMIs that Amazon Inspector has not scanned are not allowed when you specify this condition.
 *
 * @public
 */
export interface ScanResultConditionRequest {
  /**
   * The maximum number of days that have elapsed since Amazon Inspector last scanned the AMI. For example, a value of `7` allows AMIs that were scanned within the last 7 days. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceLastFindingScan?: number | undefined;

  /**
   * The maximum severity that an AMI's Amazon Inspector findings can have for the AMI to be allowed. Findings count whether or not a fix is available. For example, a value of `medium` allows AMIs whose highest severity is `informational`, `low`, or `medium`.
   *
   * The valid values are the following Amazon Inspector severity levels, which correspond to CVSS score ranges:
   *
   * - `informational` - CVSS score of 0.
   * - `low` - CVSS score of 0.1 to 3.9.
   * - `medium` - CVSS score of 4.0 to 6.9.
   * - `high` - CVSS score of 7.0 to 8.9.
   * - `critical` - CVSS score of 9.0 to 10.0.
   *
   * For more information, see [Software package vulnerability severity](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html#findings-understanding-package-score) in the *Amazon Inspector User Guide*.
   *
   * A scanned AMI that has no findings meets this limit.
   *
   * AMIs that Amazon Inspector has not scanned are not allowed when you specify this condition.
   *
   * @public
   */
  MaximumSeverityLabel?: SeverityLabel | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for an `informational` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `informational` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceInformationalFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `low` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `low` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceLowFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `medium` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `medium` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceMediumFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `high` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `high` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceHighFixAvailable?: number | undefined;

  /**
   * The maximum number of days since Amazon Inspector reported a fix as available for a `critical` severity finding on the AMI. For example, a value of `7` does not allow an AMI if Amazon Inspector reported such a fix more than 7 days ago.
   *
   * A scanned AMI that has no `critical` severity finding with a fix available meets this limit. AMIs that Amazon Inspector has not scanned are not allowed.
   *
   * Constraints: Minimum value of 0. Maximum value of 2147483647.
   *
   * @public
   */
  MaxDaysSinceCriticalFixAvailable?: number | undefined;
}

/**
 * The criteria that are evaluated to determine which AMIs are discoverable and usable in your account for the specified Amazon Web Services Region.
 *
 * The `ImageCriteria` can include up to:
 *
 * - 10 `ImageCriterion`
 *
 * Each `ImageCriterion` can include up to:
 *
 * - 200 values for `ImageProviders`
 * - 50 values for `ImageNames`
 * - 50 values for `MarketplaceProductCodes`
 * - 50 values for `ImageWatermarks`
 *
 * For more information, see [How Allowed AMIs works](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-allowed-amis.html#how-allowed-amis-works) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface ImageCriterionRequest {
  /**
   * The image providers whose images are allowed.
   *
   * Possible values:
   *
   * - `amazon`: Allow AMIs created by Amazon or verified providers.
   * - `aws-marketplace`: Allow AMIs created by verified providers in the Amazon Web Services Marketplace.
   * - `aws-backup-vault`: Allow AMIs created by Amazon Web Services Backup.
   * - 12-digit account ID: Allow AMIs created by the specified accounts. One or more account IDs can be specified.
   * - `none`: Allow AMIs created by your own account only. When `none` is specified, no other values can be specified.
   *
   * Maximum: 200 values
   *
   * @public
   */
  ImageProviders?: string[] | undefined;

  /**
   * The Amazon Web Services Marketplace product codes for allowed images.
   *
   * Length: 1-25 characters
   *
   * Valid characters: Letters (`A–Z, a–z`) and numbers (`0–9`)
   *
   * Maximum: 50 values
   *
   * @public
   */
  MarketplaceProductCodes?: string[] | undefined;

  /**
   * The names of allowed images. Names can include wildcards (`?` and `*`).
   *
   * Length: 1–128 characters. With `?`, the minimum is 3 characters.
   *
   * Valid characters:
   *
   * - Letters: `A–Z, a–z`
   * - Numbers: `0–9`
   * - Special characters: `( ) [ ] . / - ' @ _ * ?`
   * - Spaces
   *
   * Maximum: 50 values
   *
   * @public
   */
  ImageNames?: string[] | undefined;

  /**
   * The maximum period since deprecation for allowed images.
   *
   * @public
   */
  DeprecationTimeCondition?: DeprecationTimeConditionRequest | undefined;

  /**
   * The maximum age for allowed images.
   *
   * @public
   */
  CreationDateCondition?: CreationDateConditionRequest | undefined;

  /**
   * The watermark criteria that an AMI must match to be allowed. An AMI is allowed if it carries at least one watermark that satisfies an ImageWatermarkFilter. A watermark satisfies a filter when all specified fields in the ImageWatermarkFilter match the corresponding values on the watermark of the AMI.
   *
   * Maximum: 50 values
   *
   * @public
   */
  ImageWatermarks?: ImageWatermarkFilterRequest[] | undefined;

  /**
   * The Amazon Inspector scan-result criteria that an AMI must meet to be allowed. The criteria can limit the highest finding severity, the number of days since Amazon Inspector last scanned the AMI, and the number of days since Amazon Inspector reported a fix as available.
   *
   * @public
   */
  ScanResultCondition?: ScanResultConditionRequest | undefined;
}

/**
 * @public
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsRequest {
  /**
   * The list of criteria that are evaluated to determine whether AMIs are discoverable and usable in the account in the specified Amazon Web Services Region.
   *
   * @public
   */
  ImageCriteria?: ImageCriterionRequest[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceImageCriteriaInAllowedImagesSettingsResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * The instance type specification for an AMI, which contains lists of supported and unsupported instance types that define which instance types are compatible with the AMI.
 *
 * @public
 */
export interface InstanceTypeSpecificationRequest {
  /**
   * The instance types that the AMI supports. You can specify instance type names or use wildcard patterns (for example, `t3.*`).
   *
   * Constraints: Maximum 100 entries. Each entry must be 1-24 characters and match the pattern `^[A-Za-z0-9_.*-]+$`. Consecutive wildcard characters (`**`) are not allowed. Entries must be unique within each list and across both lists; duplicate entries cause the request to fail.
   *
   * @public
   */
  SupportedInstanceTypes?: string[] | undefined;

  /**
   * The instance types that the AMI does not support. You can specify instance type names or use wildcard patterns (for example, `t3.*`).
   *
   * Constraints: Maximum 100 entries. Each entry must be 1-24 characters and match the pattern `^[A-Za-z0-9_.*-]+$`. Consecutive wildcard characters (`**`) are not allowed. Entries must be unique within each list and across both lists; duplicate entries cause the request to fail.
   *
   * @public
   */
  UnsupportedInstanceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ReplaceImageInstanceTypeSpecificationRequest {
  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The instance type specification to set on the AMI. Omit this parameter to remove the existing instance type specification.
   *
   * @public
   */
  InstanceTypeSpecification?: InstanceTypeSpecificationRequest | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceImageInstanceTypeSpecificationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the current association between the original network ACL and the subnet.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The ID of the new network ACL to associate with the subnet.
   *
   * @public
   */
  NetworkAclId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclAssociationResult {
  /**
   * The ID of the new association.
   *
   * @public
   */
  NewAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceNetworkAclEntryRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the ACL.
   *
   * @public
   */
  NetworkAclId: string | undefined;

  /**
   * The rule number of the entry to replace.
   *
   * @public
   */
  RuleNumber: number | undefined;

  /**
   * The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * Indicates whether to allow or deny the traffic that matches the rule.
   *
   * @public
   */
  RuleAction: RuleAction | undefined;

  /**
   * Indicates whether to replace the egress rule.
   *
   * Default: If no value is specified, we replace the ingress rule.
   *
   * @public
   */
  Egress: boolean | undefined;

  /**
   * The IPv4 network range to allow or deny, in CIDR notation (for example `172.16.0.0/24`).
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The IPv6 network range to allow or deny, in CIDR notation (for example `2001:bd8:1234:1a00::/64`).
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
   *
   * @public
   */
  IcmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
   *
   * @public
   */
  PortRange?: PortRange | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteRequest {
  /**
   * The ID of the prefix list for the route.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * Specifies whether to reset the local route to its default target (`local`).
   *
   * @public
   */
  LocalTarget?: boolean | undefined;

  /**
   * The ID of a transit gateway.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ID of the local gateway.
   *
   * @public
   */
  LocalGatewayId?: string | undefined;

  /**
   * [IPv4 traffic only] The ID of a carrier gateway.
   *
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the core network.
   *
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ODB network.
   *
   * @public
   */
  OdbNetworkArn?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * The IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * The ID of an internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * [IPv6 traffic only] The ID of an egress-only internet gateway.
   *
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * The ID of a NAT instance in your VPC.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The ID of a network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The ID of a VPC peering connection.
   *
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * [IPv4 traffic only] The ID of a NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The association ID.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The ID of the new route table to associate with the subnet.
   *
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 */
export interface ReplaceRouteTableAssociationResult {
  /**
   * The ID of the new association.
   *
   * @public
   */
  NewAssociationId?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteRequest {
  /**
   * The CIDR range used for the destination match. Routing decisions are based on the most specific match.
   *
   * @public
   */
  DestinationCidrBlock: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * The ID of the attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * Indicates whether traffic matching this route is to be dropped.
   *
   * @public
   */
  Blackhole?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceTransitGatewayRouteResult {
  /**
   * Information about the modified route.
   *
   * @public
   */
  Route?: TransitGatewayRoute | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelRequest {
  /**
   * The ID of the Site-to-Site VPN connection.
   *
   * @public
   */
  VpnConnectionId: string | undefined;

  /**
   * The external IP address of the VPN tunnel.
   *
   * @public
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * Trigger pending tunnel endpoint maintenance.
   *
   * @public
   */
  ApplyPendingMaintenance?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ReplaceVpnTunnelResult {
  /**
   * Confirmation of replace tunnel operation.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ReportInstanceStatusRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The instances.
   *
   * @public
   */
  Instances: string[] | undefined;

  /**
   * The status of all instances listed.
   *
   * @public
   */
  Status: ReportStatusType | undefined;

  /**
   * The time at which the reported instance health state began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the reported instance health state ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The reason codes that describe the health state of your instance.
   *
   * - `instance-stuck-in-state`: My instance is stuck in a state.
   * - `unresponsive`: My instance is unresponsive.
   * - `not-accepting-credentials`: My instance is not accepting my credentials.
   * - `password-not-available`: A password is not available for my instance.
   * - `performance-network`: My instance is experiencing performance problems that I believe are network related.
   * - `performance-instance-store`: My instance is experiencing performance problems that I believe are related to the instance stores.
   * - `performance-ebs-volume`: My instance is experiencing performance problems that I believe are related to an EBS volume.
   * - `performance-other`: My instance is experiencing performance problems.
   * - `other`: [explain using the description parameter]
   *
   * @public
   */
  ReasonCodes: ReportInstanceReasonCodes[] | undefined;

  /**
   * Descriptive text about the health state of your instance.
   *
   * @deprecated This member has been deprecated.
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains the parameters for RequestSpotFleet.
 *
 * @public
 */
export interface RequestSpotFleetRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The configuration for the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

/**
 * Contains the output of RequestSpotFleet.
 *
 * @public
 */
export interface RequestSpotFleetResponse {
  /**
   * The ID of the Spot Fleet request.
   *
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * Describes the launch specification for an instance.
 *
 * @public
 */
export interface RequestSpotLaunchSpecification {
  /**
   * The IDs of the security groups.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  AddressingType?: string | undefined;

  /**
   * The block device mapping entries. You can't specify both a snapshot ID and an encryption value. This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its encryption status is used for the volume encryption status.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * Default: `false`
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type. Only one instance type can be specified.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * Indicates whether basic or detailed monitoring is enabled for the instance.
   *
   * Default: Disabled
   *
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * The network interfaces. If you specify a network interface, you must specify subnet IDs and security group IDs using the network interface.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * The placement information for the instance.
   *
   * @public
   */
  Placement?: SpotPlacement | undefined;

  /**
   * The ID of the RAM disk.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The ID of the subnet in which to launch the instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.
   *
   * @public
   */
  UserData?: string | undefined;
}

/**
 * Contains the parameters for RequestSpotInstances.
 *
 * @public
 */
export interface RequestSpotInstancesRequest {
  /**
   * The launch specification.
   *
   * @public
   */
  LaunchSpecification?: RequestSpotLaunchSpecification | undefined;

  /**
   * The key-value pair for tagging the Spot Instance request on creation. The value for `ResourceType` must be `spot-instances-request`, otherwise the Spot Instance request fails. To tag the Spot Instance request after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The behavior when a Spot Instance is interrupted. The default is `terminate`.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The maximum number of Spot Instances to launch.
   *
   * Default: 1
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Spot Instance request type.
   *
   * Default: `one-time`
   *
   * @public
   */
  Type?: SpotInstanceType | undefined;

  /**
   * The start date of the request. If this is a one-time request, the request becomes active at this date and time and remains active until all instances launch, the request expires, or the request is canceled. If the request is persistent, the request becomes active at this date and time and remains active until it expires or is canceled.
   *
   * The specified start date and time cannot be equal to the current date and time. You must specify a start date and time that occurs after the current date and time.
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The end date of the request, in UTC format (*YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z).
   *
   * - For a persistent request, the request remains active until the `ValidUntil` date and time is reached. Otherwise, the request remains active until you cancel it.
   * - For a one-time request, the request remains active until all instances launch, the request is canceled, or the `ValidUntil` date and time is reached. By default, the request is valid for 7 days from the date the request was created.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The instance launch group. Launch groups are Spot Instances that launch together and terminate together.
   *
   * Default: Instances are launched and terminated individually
   *
   * @public
   */
  LaunchGroup?: string | undefined;

  /**
   * The user-specified name for a logical grouping of requests.
   *
   * When you specify an Availability Zone group in a Spot Instance request, all Spot Instances in the request are launched in the same Availability Zone. Instance proximity is maintained with this parameter, but the choice of Availability Zone is not. The group applies only to requests for Spot Instances of the same instance type. Any additional Spot Instance requests that are specified with the same Availability Zone group name are launched in that same Availability Zone, as long as at least one instance from the group is still active.
   *
   * If there is no active instance running in the Availability Zone group that you specify for a new Spot Instance request (all instances are terminated, the request is expired, or the maximum price you specified falls below current Spot price), then Amazon EC2 launches the instance in any Availability Zone where the constraint can be met. Consequently, the subsequent set of Spot Instances could be placed in a different zone from the original request, even if you specified the same Availability Zone group.
   *
   * Default: Instances are launched in any available Availability Zone.
   *
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;
}

/**
 * Contains the output of RequestSpotInstances.
 *
 * @public
 */
export interface RequestSpotInstancesResult {
  /**
   * The Spot Instance requests.
   *
   * @public
   */
  SpotInstanceRequests?: SpotInstanceRequest[] | undefined;
}

/**
 * @public
 */
export interface ResetAddressAttributeRequest {
  /**
   * [EC2-VPC] The allocation ID.
   *
   * @public
   */
  AllocationId: string | undefined;

  /**
   * The attribute of the IP address.
   *
   * @public
   */
  Attribute: AddressAttributeName | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ResetAddressAttributeResult {
  /**
   * Information about the IP address.
   *
   * @public
   */
  Address?: AddressAttribute | undefined;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ResetFpgaImageAttributeRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the AFI.
   *
   * @public
   */
  FpgaImageId: string | undefined;

  /**
   * The attribute.
   *
   * @public
   */
  Attribute?: ResetFpgaImageAttributeName | undefined;
}

/**
 * @public
 */
export interface ResetFpgaImageAttributeResult {
  /**
   * Is `true` if the request succeeds, and an error otherwise.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * Contains the parameters for ResetImageAttribute.
 *
 * @public
 */
export interface ResetImageAttributeRequest {
  /**
   * The attribute to reset (currently you can only reset the launch permission attribute).
   *
   * @public
   */
  Attribute: ResetImageAttributeName | undefined;

  /**
   * The ID of the AMI.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ResetInstanceAttributeRequest {
  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The attribute to reset.
   *
   * > **Important:** You can only reset the following attributes: `kernel` | `ramdisk` | `sourceDestCheck`.
   *
   * @public
   */
  Attribute: InstanceAttributeName | undefined;
}

/**
 * Contains the parameters for ResetNetworkInterfaceAttribute.
 *
 * @public
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The source/destination checking attribute. Resets the value to `true`.
   *
   * @public
   */
  SourceDestCheck?: string | undefined;
}

/**
 * @public
 */
export interface ResetSnapshotAttributeRequest {
  /**
   * The attribute to reset. Currently, only the attribute for permission to create volumes can be reset.
   *
   * @public
   */
  Attribute: SnapshotAttributeName | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreAddressToClassicRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Elastic IP address.
   *
   * @public
   */
  PublicIp: string | undefined;
}

/**
 * @public
 */
export interface RestoreAddressToClassicResult {
  /**
   * The Elastic IP address.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The move status for the IP address.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinRequest {
  /**
   * The ID of the AMI to restore.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreImageFromRecycleBinResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the prefix list.
   *
   * @public
   */
  PrefixListId: string | undefined;

  /**
   * The version to restore.
   *
   * @public
   */
  PreviousVersion: number | undefined;

  /**
   * The current version number for the prefix list.
   *
   * @public
   */
  CurrentVersion: number | undefined;
}

/**
 * @public
 */
export interface RestoreManagedPrefixListVersionResult {
  /**
   * Information about the prefix list.
   *
   * @public
   */
  PrefixList?: ManagedPrefixList | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinRequest {
  /**
   * The ID of the snapshot to restore.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotFromRecycleBinResult {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The ARN of the Outpost on which the snapshot is stored. For more information, see [Amazon EBS local snapshots on Outposts](https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html) in the *Amazon EBS User Guide*.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the EBS snapshot.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The progress of the snapshot, as a percentage.
   *
   * @public
   */
  Progress?: string | undefined;

  /**
   * The time stamp when the snapshot was initiated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The state of the snapshot.
   *
   * @public
   */
  State?: SnapshotState | undefined;

  /**
   * The ID of the volume that was used to create the snapshot.
   *
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotTierRequest {
  /**
   * The ID of the snapshot to restore.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.
   *
   * To temporarily restore an archived snapshot, specify the number of days and omit the **PermanentRestore** parameter or set it to `false`.
   *
   * @public
   */
  TemporaryRestoreDays?: number | undefined;

  /**
   * Indicates whether to permanently restore an archived snapshot. To permanently restore an archived snapshot, specify `true` and omit the **RestoreSnapshotTierRequest$TemporaryRestoreDays** parameter.
   *
   * @public
   */
  PermanentRestore?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreSnapshotTierResult {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The date and time when the snapshot restore process started.
   *
   * @public
   */
  RestoreStartTime?: Date | undefined;

  /**
   * For temporary restores only. The number of days for which the archived snapshot is temporarily restored.
   *
   * @public
   */
  RestoreDuration?: number | undefined;

  /**
   * Indicates whether the snapshot is permanently restored. `true` indicates a permanent restore. `false` indicates a temporary restore.
   *
   * @public
   */
  IsPermanentRestore?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreVolumeFromRecycleBinRequest {
  /**
   * The ID of the volume to restore.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreVolumeFromRecycleBinResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressRequest {
  /**
   * The ID of the Client VPN endpoint with which the authorization rule is associated.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The IPv4 address range, in CIDR notation, of the network for which access is being removed.
   *
   * @public
   */
  TargetNetworkCidr: string | undefined;

  /**
   * The ID of the Active Directory group for which to revoke access.
   *
   * @public
   */
  AccessGroupId?: string | undefined;

  /**
   * Indicates whether access should be revoked for all groups for a single `TargetNetworkCidr` that earlier authorized ingress for all groups using `AuthorizeAllGroups`. This does not impact other authorization rules that allowed ingress to the same `TargetNetworkCidr` with a specific `AccessGroupId`.
   *
   * @public
   */
  RevokeAllGroups?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeClientVpnIngressResult {
  /**
   * The current state of the authorization rule.
   *
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressRequest {
  /**
   * The IDs of the security group rules.
   *
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify a destination security group.
   *
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify a destination security group.
   *
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify the protocol name or number.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify the port.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify the port.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * Not supported. Use a set of IP permissions to specify the CIDR.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * A security group rule removed with [RevokeSecurityGroupEgress](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html) or [RevokeSecurityGroupIngress](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html).
 *
 * @public
 */
export interface RevokedSecurityGroupRule {
  /**
   * A security group rule ID.
   *
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * A security group ID.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * Defines if a security group rule is an outbound rule.
   *
   * @public
   */
  IsEgress?: boolean | undefined;

  /**
   * The security group rule's protocol.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * The 'from' port number of the security group rule.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The 'to' port number of the security group rule.
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The IPv4 CIDR of the traffic source.
   *
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * The IPv6 CIDR of the traffic source.
   *
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * The ID of a prefix list that's the traffic source.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The ID of a referenced security group.
   *
   * @public
   */
  ReferencedGroupId?: string | undefined;

  /**
   * A description of the revoked security group rule.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupEgressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The outbound rules that were unknown to the service. In some cases, `unknownIpPermissionSet` might be in a different format from the request parameter.
   *
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * Details about the revoked security group rules.
   *
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressRequest {
  /**
   * The CIDR IP address range. You can't specify this parameter when specifying a source security group.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)). Use `-1` to specify all.
   *
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * [Default VPC] The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. The source security group must be in the same VPC. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.
   *
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).
   *
   * @public
   */
  ToPort?: number | undefined;

  /**
   * The IDs of the security group rules.
   *
   * @public
   */
  SecurityGroupRuleIds?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeSecurityGroupIngressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;

  /**
   * The inbound rules that were unknown to the service. In some cases, `unknownIpPermissionSet` might be in a different format from the request parameter.
   *
   * @public
   */
  UnknownIpPermissions?: IpPermission[] | undefined;

  /**
   * Details about the revoked security group rules.
   *
   * @public
   */
  RevokedSecurityGroupRules?: RevokedSecurityGroupRule[] | undefined;
}

/**
 * The CPU options for the instance. Both the core count and threads per core must be specified in the request.
 *
 * @public
 */
export interface CpuOptionsRequest {
  /**
   * The number of CPU cores for the instance.
   *
   * @public
   */
  CoreCount?: number | undefined;

  /**
   * The number of threads per CPU core. To disable multithreading for the instance, specify a value of `1`. Otherwise, specify the default value of `2`.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see [AMD SEV-SNP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   *
   * @public
   */
  AmdSevSnp?: AmdSevSnpSpecification | undefined;

  /**
   * Indicates whether to enable the instance for nested virtualization. Nested virtualization is supported only on 8th generation Intel-based instance types (c8i, m8i, r8i, and their flex variants). When nested virtualization is enabled, Virtual Secure Mode (VSM) is automatically disabled for the instance.
   *
   * @public
   */
  NestedVirtualization?: NestedVirtualizationSpecification | undefined;
}

/**
 * > **Note:** Amazon Elastic Inference is no longer available.
 *
 * Describes an elastic inference accelerator.
 *
 * @public
 */
export interface ElasticInferenceAccelerator {
  /**
   * The type of elastic inference accelerator. The possible values are `eia1.medium`, `eia1.large`, `eia1.xlarge`, `eia2.medium`, `eia2.large`, and `eia2.xlarge`.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The number of elastic inference accelerators to attach to the instance.
   *
   * Default: 1
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface HibernationOptionsRequest {
  /**
   * Set to `true` to enable your instance for hibernation.
   *
   * For Spot Instances, if you set `Configured` to `true`, either omit the `InstanceInterruptionBehavior` parameter (for [`SpotMarketOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotMarketOptions.html)), or set it to `hibernate`. When `Configured` is true:
   *
   * - If you omit `InstanceInterruptionBehavior`, it defaults to `hibernate`.
   * - If you set `InstanceInterruptionBehavior` to a value other than `hibernate`, you'll get an error.
   *
   * Default: `false`
   *
   * @public
   */
  Configured?: boolean | undefined;
}

/**
 * The options for Spot Instances.
 *
 * @public
 */
export interface SpotMarketOptions {
  /**
   * The maximum hourly price that you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * > **Important:**
   * >
   * > If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
   * >
   * > If you specify a maximum price, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an `InvalidParameterValue` error message.
   *
   * @public
   */
  MaxPrice?: string | undefined;

  /**
   * The Spot Instance request type. For [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances), persistent Spot Instance requests are only supported when the instance interruption behavior is either `hibernate` or `stop`.
   *
   * @public
   */
  SpotInstanceType?: SpotInstanceType | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * The end date of the request, in UTC format (*YYYY*-*MM*-*DD*T*HH*:*MM*:*SS*Z). Supported only for persistent requests.
   *
   * - For a persistent request, the request remains active until the `ValidUntil` date and time is reached. Otherwise, the request remains active until you cancel it.
   * - For a one-time request, `ValidUntil` is not supported. The request remains active until all instances launch or you cancel the request.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * If `Configured` (for [`HibernationOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html)) is set to `true`, the `InstanceInterruptionBehavior` parameter is automatically set to `hibernate`. If you set it to `stop` or `terminate`, you'll get an error.
   *
   * If `Configured` (for [`HibernationOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html)) is set to `false` or `null`, the `InstanceInterruptionBehavior` parameter is automatically set to `terminate`. You can also set it to `stop` or `hibernate`.
   *
   * For more information, see [Interruption behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/interruption-behavior.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | undefined;
}

/**
 * Describes the market (purchasing) option for the instances.
 *
 * @public
 */
export interface InstanceMarketOptionsRequest {
  /**
   * The market type.
   *
   * @public
   */
  MarketType?: MarketType | undefined;

  /**
   * The options for Spot Instances.
   *
   * @public
   */
  SpotOptions?: SpotMarketOptions | undefined;
}

/**
 * Describes the launch template to use.
 *
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template.
   *
   * You must specify either the launch template ID or the launch template name, but not both.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The launch template version number, `$Latest`, or `$Default`.
   *
   * A value of `$Latest` uses the latest version of the launch template.
   *
   * A value of `$Default` uses the default version of the launch template.
   *
   * Default: The default version of the launch template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Describes a license configuration.
 *
 * @public
 */
export interface LicenseConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  LicenseConfigurationArn?: string | undefined;
}

/**
 * The maintenance options for the instance.
 *
 * @public
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * Disables the automatic recovery behavior of your instance or sets it to default. For more information, see [Simplified automatic recovery](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery).
   *
   * @public
   */
  AutoRecovery?: InstanceAutoRecoveryState | undefined;
}

/**
 * The metadata options for the instance.
 *
 * @public
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * Indicates whether IMDSv2 is required.
   *
   * - `optional` - IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1.
   * - `required` - IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.
   *
   * Default:
   *
   * - If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0` and the account level default is set to `no-preference`, the default is `required`.
   * - If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0`, but the account level default is set to `V1 or V2`, the default is `optional`.
   *
   * The default value can also be affected by other combinations of parameters. For more information, see [Order of precedence for instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  HttpTokens?: HttpTokensState | undefined;

  /**
   * The maximum number of hops that the metadata token can travel.
   *
   * Possible values: Integers from 1 to 64
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * Enables or disables the HTTP metadata endpoint on your instances.
   *
   * If you specify a value of `disabled`, you cannot access your instance metadata.
   *
   * Default: `enabled`
   *
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;

  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service.
   *
   * Default: `disabled`
   *
   * @public
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | undefined;

  /**
   * Set to `enabled` to allow access to instance tags from the instance metadata. Set to `disabled` to turn off access to instance tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
   *
   * Default: `disabled`
   *
   * @public
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | undefined;
}

/**
 * Configure network performance options for your instance that are geared towards performance improvements based on the workload that it runs.
 *
 * @public
 */
export interface InstanceNetworkPerformanceOptionsRequest {
  /**
   * Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:
   *
   * - **default**
   *
   *   This option uses the standard bandwidth configuration for your instance type.
   *
   * - **vpc-1**
   *
   *   This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth.
   *
   * - **ebs-1**
   *
   *   This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.
   *
   * @public
   */
  BandwidthWeighting?: InstanceBandwidthWeighting | undefined;
}

/**
 * Describes the options for instance hostnames.
 *
 * @public
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
   *
   * @public
   */
  HostnameType?: HostnameType | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   *
   * @public
   */
  EnableResourceNameDnsARecord?: boolean | undefined;

  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   *
   * @public
   */
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}

/**
 * Describes a private IPv4 address for a secondary interface request.
 *
 * @public
 */
export interface InstanceSecondaryInterfacePrivateIpAddressRequest {
  /**
   * The private IPv4 address.
   *
   * @public
   */
  PrivateIpAddress: string | undefined;
}

/**
 * Describes a secondary interface specification for launching an instance.
 *
 * @public
 */
export interface InstanceSecondaryInterfaceSpecificationRequest {
  /**
   * Indicates whether the secondary interface is deleted when the instance is terminated.
   *
   * The only supported value for this field is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The device index for the secondary interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The private IPv4 addresses to assign to the secondary interface.
   *
   * @public
   */
  PrivateIpAddresses?: InstanceSecondaryInterfacePrivateIpAddressRequest[] | undefined;

  /**
   * The number of private IPv4 addresses to assign to the secondary interface.
   *
   * @public
   */
  PrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the secondary subnet.
   *
   * @public
   */
  SecondarySubnetId?: string | undefined;

  /**
   * The type of secondary interface.
   *
   * @public
   */
  InterfaceType?: SecondaryInterfaceType | undefined;

  /**
   * The index of the network card. The network card must support secondary interfaces.
   *
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * @public
 */
export interface RunInstancesRequest {
  /**
   * The block device mapping, which defines the EBS volumes and instance store volumes to attach to the instance at launch. For more information, see [Block device mappings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The instance type. For more information, see [Amazon EC2 Instance Types Guide](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-types.html).
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.
   *
   * You cannot specify this option and the network interfaces option in the same request.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.
   *
   * You cannot specify this option and the network interfaces option in the same request.
   *
   * @public
   */
  Ipv6Addresses?: InstanceIpv6Address[] | undefined;

  /**
   * The ID of the kernel.
   *
   * > **Important:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [PV-GRUB](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair. For more information, see [Create a key pair for your EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html).
   *
   * > **Important:** If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * The maximum number of instances to launch. If you specify a value that is more capacity than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible number of instances above the specified minimum count.
   *
   * Constraints: Between 1 and the quota for the specified instance type for your account for this Region. For more information, see [Amazon EC2 instance type quotas](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html).
   *
   * @public
   */
  MaxCount: number | undefined;

  /**
   * The minimum number of instances to launch. If you specify a value that is more capacity than Amazon EC2 can provide in the target Availability Zone, Amazon EC2 does not launch any instances.
   *
   * Constraints: Between 1 and the quota for the specified instance type for your account for this Region. For more information, see [Amazon EC2 instance type quotas](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-quotas.html).
   *
   * @public
   */
  MinCount: number | undefined;

  /**
   * Specifies whether detailed monitoring is enabled for the instance.
   *
   * @public
   */
  Monitoring?: RunInstancesMonitoringEnabled | undefined;

  /**
   * The placement for the instance.
   *
   * @public
   */
  Placement?: Placement | undefined;

  /**
   * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the kernel ID.
   *
   * > **Important:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [PV-GRUB](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * [Default VPC] The names of the security groups.
   *
   * If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   *
   * Default: Amazon EC2 uses the default security group.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The ID of the subnet to launch the instance into.
   *
   * If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The user data to make available to the instance. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see [Run commands at launch using instance user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html).
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * An elastic GPU to associate with the instance.
   *
   * > **Note:** Amazon Elastic Graphics reached end of life on January 8, 2024.
   *
   * @deprecated (since 2024-01-08) Specifying Elastic Graphics accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[] | undefined;

  /**
   * An elastic inference accelerator to associate with the instance.
   *
   * > **Note:** Amazon Elastic Inference is no longer available.
   *
   * @deprecated (since 2024-01-08) Specifying Elastic Inference accelerators is no longer supported on the RunInstances API.
   * @public
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[] | undefined;

  /**
   * The tags to apply to the resources that are created during instance launch.
   *
   * You can specify tags for the following resources only:
   *
   * - Instances
   * - Volumes
   * - Spot Instance requests
   * - Network interfaces
   *
   * To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The launch template. Any additional parameters that you specify for the new instance overwrite the corresponding parameters included in the launch template.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The market (purchasing) option for the instances.
   *
   * For RunInstances, persistent Spot Instance requests are only supported when **InstanceInterruptionBehavior** is set to either `hibernate` or `stop`.
   *
   * @public
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | undefined;

  /**
   * The credit option for CPU usage of the burstable performance instance. Valid values are `standard` and `unlimited`. To change this attribute after launch, use [ModifyInstanceCreditSpecification](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html). For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `standard` (T2 instances) or `unlimited` (T3/T3a/T4g instances)
   *
   * For T3 instances with `host` tenancy, only `standard` is supported.
   *
   * @public
   */
  CreditSpecification?: CreditSpecificationRequest | undefined;

  /**
   * The CPU options for the instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  CpuOptions?: CpuOptionsRequest | undefined;

  /**
   * Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to `open`, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, and tenancy).
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
   *
   * You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.
   *
   * @public
   */
  HibernationOptions?: HibernationOptionsRequest | undefined;

  /**
   * The license configurations.
   *
   * @public
   */
  LicenseSpecifications?: LicenseConfigurationRequest[] | undefined;

  /**
   * The metadata options for the instance. For more information, see [Configure the Instance Metadata Service options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html).
   *
   * @public
   */
  MetadataOptions?: InstanceMetadataOptionsRequest | undefined;

  /**
   * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see [Amazon Web Services Nitro Enclaves User Guide](https://docs.aws.amazon.com/enclaves/latest/user/).
   *
   * You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.
   *
   * @public
   */
  EnclaveOptions?: EnclaveOptionsRequest | undefined;

  /**
   * The options for the instance hostname. The default values are inherited from the subnet. Applies only if creating a network interface, not attaching an existing one.
   *
   * @public
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest | undefined;

  /**
   * The maintenance and recovery options for the instance.
   *
   * @public
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest | undefined;

  /**
   * Indicates whether an instance is enabled for stop protection. For more information, see [Enable stop protection for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html).
   *
   * @public
   */
  DisableApiStop?: boolean | undefined;

  /**
   * If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if an instance relies on its IPv6 address not changing. When you launch the instance, Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
   *
   * @public
   */
  EnablePrimaryIpv6?: boolean | undefined;

  /**
   * Contains settings for the network performance options for the instance.
   *
   * @public
   */
  NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest | undefined;

  /**
   * Reserved for internal use.
   *
   * @public
   */
  Operator?: OperatorRequest | undefined;

  /**
   * The secondary interfaces to associate with the instance.
   *
   * @public
   */
  SecondaryInterfaces?: InstanceSecondaryInterfaceSpecificationRequest[] | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Indicates whether termination protection is enabled for the instance. The default is `false`, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.
   *
   * @public
   */
  DisableApiTermination?: boolean | undefined;

  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * Default: `stop`
   *
   * @public
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | undefined;

  /**
   * The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
   *
   * Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request.
   *
   * You cannot specify this option and the network interfaces option in the same request.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * For more information, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * Constraints: Maximum 64 ASCII characters
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * The network interfaces to associate with the instance.
   *
   * @public
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileSpecification | undefined;

  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   *
   * Default: `false`
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;
}

/**
 * Describes an EBS volume for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesEbs {
  /**
   * Indicates whether the volume is deleted on instance termination.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that support them.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The number of I/O operations per second (IOPS) to provision for a `gp3`, `io1`, or `io2` volume.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type.
   *
   * Default: `gp2`
   *
   * @public
   */
  VolumeType?: string | undefined;
}

/**
 * Describes a block device mapping for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * The device name (for example, `/dev/sdh` or `xvdh`).
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * Parameters used to set up EBS volumes automatically when the instance is launched.
   *
   * @public
   */
  Ebs?: ScheduledInstancesEbs | undefined;

  /**
   * To omit the device from the block device mapping, specify an empty string.
   *
   * @public
   */
  NoDevice?: string | undefined;

  /**
   * The virtual device name (`ephemeral`N). Instance store volumes are numbered starting from 0. An instance type with two available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.
   *
   * @public
   */
  VirtualName?: string | undefined;
}

/**
 * Describes an IAM instance profile for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * The Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes whether monitoring is enabled for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesMonitoring {
  /**
   * Indicates whether monitoring is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Describes an IPv6 address.
 *
 * @public
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * The IPv6 address.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * Describes a private IPv4 address for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The IPv4 address.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Describes a network interface for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * Indicates whether to assign a public IPv4 address to instances launched in a VPC. The public IPv4 address can only be assigned to a network interface for eth0, and can only be assigned to a new network interface, not an existing one. You cannot specify more than one network interface in the request. If launching into a default subnet, the default value is `true`.
   *
   * Amazon Web Services charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](http://aws.amazon.com/vpc/pricing/).
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * Indicates whether to delete the interface when the instance is terminated.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The index of the device for the network interface attachment.
   *
   * @public
   */
  DeviceIndex?: number | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.
   *
   * @public
   */
  Ipv6AddressCount?: number | undefined;

  /**
   * The specific IPv6 addresses from the subnet range.
   *
   * @public
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The private IPv4 addresses.
   *
   * @public
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[] | undefined;

  /**
   * The number of secondary private IPv4 addresses.
   *
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;
}

/**
 * Describes the placement for a Scheduled Instance.
 *
 * @public
 */
export interface ScheduledInstancesPlacement {
  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The name of the placement group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Describes the launch specification for a Scheduled Instance.
 *
 * If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either `SubnetId` or `NetworkInterface`.
 *
 * @public
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * The block device mapping entries.
   *
   * @public
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[] | undefined;

  /**
   * Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   *
   * Default: `false`
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The IAM instance profile.
   *
   * @public
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI).
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the kernel.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The name of the key pair.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * Enable or disable monitoring for the instances.
   *
   * @public
   */
  Monitoring?: ScheduledInstancesMonitoring | undefined;

  /**
   * The network interfaces.
   *
   * @public
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[] | undefined;

  /**
   * The placement information.
   *
   * @public
   */
  Placement?: ScheduledInstancesPlacement | undefined;

  /**
   * The ID of the RAM disk.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the subnet in which to launch the instances.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The base64-encoded MIME user data.
   *
   * @public
   */
  UserData?: string | undefined;
}

/**
 * Contains the parameters for RunScheduledInstances.
 *
 * @public
 */
export interface RunScheduledInstancesRequest {
  /**
   * Unique, case-sensitive identifier that ensures the idempotency of the request. For more information, see [Ensuring Idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The number of instances.
   *
   * Default: 1
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The launch specification. You must match the instance type, Availability Zone, network, and platform of the schedule that you purchased.
   *
   * @public
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * The Scheduled Instance ID.
   *
   * @public
   */
  ScheduledInstanceId: string | undefined;
}

/**
 * Contains the output of RunScheduledInstances.
 *
 * @public
 */
export interface RunScheduledInstancesResult {
  /**
   * The IDs of the newly launched instances.
   *
   * @public
   */
  InstanceIdSet?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * The ID of the local gateway route table.
   *
   * @public
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * One or more filters.
   *
   * - `prefix-list-id` - The ID of the prefix list.
   * - `route-search.exact-match` - The exact match of the specified filter.
   * - `route-search.longest-prefix-match` - The longest prefix that matches the route.
   * - `route-search.subnet-of-match` - The routes with a subnet that match the specified CIDR filter.
   * - `route-search.supernet-of-match` - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify `supernet-of-match` as 10.0.1.0/30, then the result returns 10.0.1.0/29.
   * - `state` - The state of the route.
   * - `type` - The route type.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface SearchLocalGatewayRoutesResult {
  /**
   * Information about the routes.
   *
   * @public
   */
  Routes?: LocalGatewayRoute[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `group-ip-address` - The IP address of the transit gateway multicast group.
   * - `is-group-member` - The resource is a group member. Valid values are `true` | `false`.
   * - `is-group-source` - The resource is a group source. Valid values are `true` | `false`.
   * - `member-type` - The member type. Valid values are `igmp` | `static`.
   * - `resource-id` - The ID of the resource.
   * - `resource-type` - The type of resource. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `tgw-peering`.
   * - `source-type` - The source type. Valid values are `igmp` | `static`.
   * - `subnet-id` - The ID of the subnet.
   * - `transit-gateway-attachment-id` - The id of the transit gateway attachment.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes the transit gateway multicast group resources.
 *
 * @public
 */
export interface TransitGatewayMulticastGroup {
  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * @public
   */
  GroupIpAddress?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource, for example a VPC attachment.
   *
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.
   *
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * The ID of the transit gateway attachment.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * Indicates that the resource is a transit gateway multicast group member.
   *
   * @public
   */
  GroupMember?: boolean | undefined;

  /**
   * Indicates that the resource is a transit gateway multicast group member.
   *
   * @public
   */
  GroupSource?: boolean | undefined;

  /**
   * The member type (for example, `static`).
   *
   * @public
   */
  MemberType?: MembershipType | undefined;

  /**
   * The source type.
   *
   * @public
   */
  SourceType?: MembershipType | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * Information about the transit gateway multicast group.
   *
   * @public
   */
  MulticastGroups?: TransitGatewayMulticastGroup[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesRequest {
  /**
   * The ID of the transit gateway route table.
   *
   * @public
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * One or more filters. The possible values are:
   *
   * - `attachment.transit-gateway-attachment-id`- The id of the transit gateway attachment.
   * - `attachment.resource-id` - The resource id of the transit gateway attachment.
   * - `attachment.resource-type` - The attachment resource type. Valid values are `vpc` | `vpn` | `direct-connect-gateway` | `peering` | `connect`.
   * - `prefix-list-id` - The ID of the prefix list.
   * - `route-search.exact-match` - The exact match of the specified filter.
   * - `route-search.longest-prefix-match` - The longest prefix that matches the route.
   * - `route-search.subnet-of-match` - The routes with a subnet that match the specified CIDR filter.
   * - `route-search.supernet-of-match` - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29.
   * - `state` - The state of the route (`active` | `blackhole`).
   * - `type` - The type of route (`propagated` | `static`).
   *
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * The maximum number of routes to return. If a value is not provided, the default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchTransitGatewayRoutesResult {
  /**
   * Information about the routes.
   *
   * @public
   */
  Routes?: TransitGatewayRoute[] | undefined;

  /**
   * Indicates whether there are additional routes available.
   *
   * @public
   */
  AdditionalRoutesAvailable?: boolean | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface StartDeclarativePoliciesReportRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The name of the S3 bucket where the report will be saved. The bucket must be in the same Region where the report generation request is made.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The prefix for your S3 object.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The root ID, organizational unit ID, or account ID.
   *
   * Format:
   *
   * - For root: `r-ab12`
   * - For OU: `ou-ab12-cdef1234`
   * - For account: `123456789012`
   *
   * @public
   */
  TargetId: string | undefined;

  /**
   * The tags to apply.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface StartDeclarativePoliciesReportResult {
  /**
   * The ID of the report.
   *
   * @public
   */
  ReportId?: string | undefined;
}

/**
 * @public
 */
export interface StartInstancesRequest {
  /**
   * The IDs of the instances.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes an instance state change.
 *
 * @public
 */
export interface InstanceStateChange {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The current state of the instance.
   *
   * @public
   */
  CurrentState?: InstanceState | undefined;

  /**
   * The previous state of the instance.
   *
   * @public
   */
  PreviousState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface StartInstancesResult {
  /**
   * Information about the started instances.
   *
   * @public
   */
  StartingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * The ID of the Network Access Scope.
   *
   * @public
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * The Network Access Scope analysis.
   *
   * @public
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisRequest {
  /**
   * The ID of the path.
   *
   * @public
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * The member accounts that contain resources that the path can traverse.
   *
   * @public
   */
  AdditionalAccounts?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the resources that the path must traverse.
   *
   * @public
   */
  FilterInArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the resources that the path will ignore.
   *
   * @public
   */
  FilterOutArns?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The tags to apply.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [How to ensure idempotency](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartNetworkInsightsAnalysisResult {
  /**
   * Information about the network insights analysis.
   *
   * @public
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the endpoint service.
   *
   * @public
   */
  ServiceId: string | undefined;
}

/**
 * @public
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * Returns `true` if the request succeeds; otherwise, it returns an error.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesRequest {
  /**
   * The IDs of the instances.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Hibernates the instance if the instance was enabled for hibernation at launch. If the instance cannot hibernate successfully, a normal shutdown occurs. For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  Hibernate?: boolean | undefined;

  /**
   * Specifies whether to bypass the graceful OS shutdown process when the instance is stopped.
   *
   * > **Important:** Bypassing the graceful OS shutdown might result in data loss or corruption (for example, memory contents not flushed to disk or loss of in-flight IOs) or skipped shutdown scripts.
   *
   * Default: `false`
   *
   * @public
   */
  SkipOsShutdown?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Forces the instance to stop. The instance will first attempt a graceful shutdown, which includes flushing file system caches and metadata. If the graceful shutdown fails to complete within the timeout period, the instance shuts down forcibly without flushing the file system caches and metadata.
   *
   * After using this option, you must perform file system check and repair procedures. This option is not recommended for Windows instances. For more information, see [Troubleshoot Amazon EC2 instance stop issues](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `false`
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopInstancesResult {
  /**
   * Information about the stopped instances.
   *
   * @public
   */
  StoppingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * The ID of the Client VPN endpoint to which the client is connected.
   *
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * The ID of the client connection to be terminated.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The name of the user who initiated the connection. Use this option to terminate all active connections for the specified user. This option can only be used if the user has established up to five connections.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Information about a terminated Client VPN endpoint client connection.
 *
 * @public
 */
export interface TerminateConnectionStatus {
  /**
   * The ID of the client connection.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The state of the client connection.
   *
   * @public
   */
  PreviousStatus?: ClientVpnConnectionStatus | undefined;

  /**
   * A message about the status of the client connection, if applicable.
   *
   * @public
   */
  CurrentStatus?: ClientVpnConnectionStatus | undefined;
}

/**
 * @public
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * The ID of the Client VPN endpoint.
   *
   * @public
   */
  ClientVpnEndpointId?: string | undefined;

  /**
   * The user who established the terminated client connections.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The current state of the client connections.
   *
   * @public
   */
  ConnectionStatuses?: TerminateConnectionStatus[] | undefined;
}

/**
 * @public
 */
export interface TerminateInstancesRequest {
  /**
   * The IDs of the instances.
   *
   * Constraints: Up to 1000 instance IDs. We recommend breaking up this request into smaller batches.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Forces the instances to terminate. The instance will first attempt a graceful shutdown, which includes flushing file system caches and metadata. If the graceful shutdown fails to complete within the timeout period, the instance shuts down forcibly without flushing the file system caches and metadata.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * Specifies whether to bypass the graceful OS shutdown process when the instance is terminated.
   *
   * Default: `false`
   *
   * @public
   */
  SkipOsShutdown?: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface TerminateInstancesResult {
  /**
   * Information about the terminated instances.
   *
   * @public
   */
  TerminatingInstances?: InstanceStateChange[] | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * The IPv6 prefixes to unassign from the network interface.
   *
   * @public
   */
  Ipv6Prefixes?: string[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The IPv6 addresses to unassign from the network interface.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignIpv6AddressesResult {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The IPv6 addresses that have been unassigned from the network interface.
   *
   * @public
   */
  UnassignedIpv6Addresses?: string[] | undefined;

  /**
   * The IPv6 prefixes that have been unassigned from the network interface.
   *
   * @public
   */
  UnassignedIpv6Prefixes?: string[] | undefined;
}

/**
 * Contains the parameters for UnassignPrivateIpAddresses.
 *
 * @public
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * The IPv4 prefixes to unassign from the network interface.
   *
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.
   *
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressRequest {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * The private IPv4 addresses you want to unassign.
   *
   * @public
   */
  PrivateIpAddresses: string[] | undefined;

  /**
   * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
   *
   * @public
   */
  MaxDrainDurationSeconds?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnassignPrivateNatGatewayAddressResult {
  /**
   * The ID of the NAT gateway.
   *
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * Information about the NAT gateway IP addresses.
   *
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface UnlockSnapshotRequest {
  /**
   * The ID of the snapshot to unlock.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnlockSnapshotResult {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 */
export interface UnmonitorInstancesRequest {
  /**
   * The IDs of the instances.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UnmonitorInstancesResult {
  /**
   * The monitoring information.
   *
   * @public
   */
  InstanceMonitorings?: InstanceMonitoring[] | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerMonitoredTagKeysRequest {
  /**
   * The tag keys to activate for monitoring. Once activated, these tag keys will be included as dimensions in capacity metric data.
   *
   * @public
   */
  ActivateTagKeys?: string[] | undefined;

  /**
   * The tag keys to deactivate. Deactivated tag keys will no longer be included as dimensions in capacity metric data.
   *
   * @public
   */
  DeactivateTagKeys?: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerMonitoredTagKeysResult {
  /**
   * The list of tag keys affected by the update, including their current status and metadata.
   *
   * @public
   */
  CapacityManagerTagKeys?: CapacityManagerMonitoredTagKey[] | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerOrganizationsAccessRequest {
  /**
   * Specifies whether to enable or disable cross-account access for Amazon Web Services Organizations. When enabled, Capacity Manager aggregates data from all accounts in your organization.
   *
   * @public
   */
  OrganizationsAccess: boolean | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityManagerOrganizationsAccessResult {
  /**
   * The current status of Capacity Manager after the update operation.
   *
   * @public
   */
  CapacityManagerStatus?: CapacityManagerStatus | undefined;

  /**
   * The updated Organizations access setting indicating whether cross-account data aggregation is enabled.
   *
   * @public
   */
  OrganizationsAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationRequest {
  /**
   * The ID of the source Capacity Reservation containing the interruptible allocation to modify.
   *
   * @public
   */
  CapacityReservationId: string | undefined;

  /**
   * The new number of instances to allocate. Enter a higher number to add more capacity to share, or a lower number to reclaim capacity to your source Capacity Reservation.
   *
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies the updated behavior for the interruptible Capacity Reservation when you reduce its allocation to zero instances. Specify `retain` to keep the interruptible Capacity Reservation active at zero capacity so that you can allocate instances to it again later. Specify `default` to cancel the interruptible Capacity Reservation and return the capacity to your source Capacity Reservation.
   *
   * @public
   */
  ZeroSizePreference?: ZeroSizePreference | undefined;
}

/**
 * @public
 */
export interface UpdateInterruptibleCapacityReservationAllocationResult {
  /**
   * The ID of the interruptible Capacity Reservation that was modified.
   *
   * @public
   */
  InterruptibleCapacityReservationId?: string | undefined;

  /**
   * The ID of the source Capacity Reservation to which capacity was reclaimed or from which capacity was allocated.
   *
   * @public
   */
  SourceCapacityReservationId?: string | undefined;

  /**
   * The current number of instances allocated to the interruptible reservation.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The requested number of instances for the interruptible Capacity Reservation.
   *
   * @public
   */
  TargetInstanceCount?: number | undefined;

  /**
   * The current status of the allocation (updating during reclamation, active when complete).
   *
   * @public
   */
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;

  /**
   * The interruption type for the interruptible reservation.
   *
   * @public
   */
  InterruptionType?: InterruptionType | undefined;
}

/**
 * Describes the description of a security group rule.
 *
 * You can use this when you want to update the security group rule description for either an inbound or outbound rule.
 *
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * The ID of the security group rule.
   *
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * The description of the security group rule.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. You must specify either the security group ID or the security group name.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The IP permissions for the security group rule. You must specify either the IP permissions or the description.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * The description for the egress security group rules. You must specify either the description or the IP permissions.
   *
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * [Default VPC] The name of the security group. You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The IP permissions for the security group rule. You must specify either IP permissions or a description.
   *
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * The description for the ingress security group rules. You must specify either a description or IP permissions.
   *
   * @public
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * Returns `true` if the request succeeds; otherwise, returns an error.
   *
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface ValidateSecurityGroupQuotasForInterfaceRequest {
  /**
   * The IDs of the security groups to validate for association with a single network interface. You must specify at least one ID, and each ID must be unique. The number of IDs cannot exceed the maximum number of security groups allowed per network interface.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ValidateSecurityGroupQuotasForInterfaceResult {
  /**
   * Specifies whether the specified security groups can be associated with a single network interface without exceeding the quotas. If associating the security groups would exceed a quota, the operation returns an error.
   *
   * @public
   */
  Valid?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrRequest {
  /**
   * The address range, in CIDR notation.
   *
   * @public
   */
  Cidr: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface WithdrawByoipCidrResult {
  /**
   * Information about the address pool.
   *
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}
