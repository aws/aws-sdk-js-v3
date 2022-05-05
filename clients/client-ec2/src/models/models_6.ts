// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  _InstanceType,
  AddressAttribute,
  AddressAttributeName,
  ByoipCidr,
  ClientVpnAuthorizationRuleStatus,
  HostnameType,
  IamInstanceProfileSpecification,
  IpPermission,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
} from "./models_0";
import {
  BlockDeviceMapping,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  LocalGatewayRoute,
  ManagedPrefixList,
  MarketType,
  Placement,
  ShutdownBehavior,
  SnapshotState,
  SpotInstanceType,
} from "./models_1";
import { ClientVpnConnectionStatus, Filter, TransitGatewayRoute } from "./models_2";
import {
  HttpTokensState,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceState,
  NetworkInsightsAccessScopeAnalysis,
  NetworkInsightsAnalysis,
} from "./models_3";
import {
  InstanceNetworkInterfaceSpecification,
  RunInstancesMonitoringEnabled,
  SnapshotAttributeName,
  SpotInstanceRequest,
} from "./models_4";
import { CapacityReservationSpecification, InstanceMonitoring, Status } from "./models_5";

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];
}

export namespace RequestSpotInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeRequest {
  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   */
  AllocationId: string | undefined;

  /**
   * <p>The attribute of the IP address.</p>
   */
  Attribute: AddressAttributeName | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetAddressAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAddressAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetAddressAttributeResult {
  /**
   * <p>Information about the IP address.</p>
   */
  Address?: AddressAttribute;
}

export namespace ResetAddressAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAddressAttributeResult): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetEbsDefaultKmsKeyIdRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdRequest): any => ({
    ...obj,
  });
}

export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
}

export namespace ResetEbsDefaultKmsKeyIdResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdResult): any => ({
    ...obj,
  });
}

export type ResetFpgaImageAttributeName = "loadPermission";

export interface ResetFpgaImageAttributeRequest {
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
   * <p>The attribute.</p>
   */
  Attribute?: ResetFpgaImageAttributeName | string;
}

export namespace ResetFpgaImageAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export namespace ResetFpgaImageAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetFpgaImageAttributeResult): any => ({
    ...obj,
  });
}

export type ResetImageAttributeName = "launchPermission";

/**
 * <p>Contains the parameters for ResetImageAttribute.</p>
 */
export interface ResetImageAttributeRequest {
  /**
   * <p>The attribute to reset (currently you can only reset the launch permission attribute).</p>
   */
  Attribute: ResetImageAttributeName | string | undefined;

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

export namespace ResetImageAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetImageAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetInstanceAttributeRequest {
  /**
   * <p>The attribute to reset.</p>
   *         <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>.</p>
   *         </important>
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

export namespace ResetInstanceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetInstanceAttributeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ResetNetworkInterfaceAttribute.</p>
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The source/destination checking attribute. Resets the value to <code>true</code>.</p>
   */
  SourceDestCheck?: string;
}

export namespace ResetNetworkInterfaceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetNetworkInterfaceAttributeRequest): any => ({
    ...obj,
  });
}

export interface ResetSnapshotAttributeRequest {
  /**
   * <p>The attribute to reset. Currently, only the attribute for permission to create volumes can
   *       be reset.</p>
   */
  Attribute: SnapshotAttributeName | string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace ResetSnapshotAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetSnapshotAttributeRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp: string | undefined;
}

export namespace RestoreAddressToClassicRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreAddressToClassicRequest): any => ({
    ...obj,
  });
}

export interface RestoreAddressToClassicResult {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The move status for the IP address.</p>
   */
  Status?: Status | string;
}

export namespace RestoreAddressToClassicResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreAddressToClassicResult): any => ({
    ...obj,
  });
}

export interface RestoreImageFromRecycleBinRequest {
  /**
   * <p>The ID of the AMI to restore.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RestoreImageFromRecycleBinRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreImageFromRecycleBinRequest): any => ({
    ...obj,
  });
}

export interface RestoreImageFromRecycleBinResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace RestoreImageFromRecycleBinResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreImageFromRecycleBinResult): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The version to restore.</p>
   */
  PreviousVersion: number | undefined;

  /**
   * <p>The current version number for the prefix list.</p>
   */
  CurrentVersion: number | undefined;
}

export namespace RestoreManagedPrefixListVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionRequest): any => ({
    ...obj,
  });
}

export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace RestoreManagedPrefixListVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreManagedPrefixListVersionResult): any => ({
    ...obj,
  });
}

export interface RestoreSnapshotFromRecycleBinRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RestoreSnapshotFromRecycleBinRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreSnapshotFromRecycleBinRequest): any => ({
    ...obj,
  });
}

export interface RestoreSnapshotFromRecycleBinResult {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the snapshot.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>The ID of the volume that was used to create the snapshot.</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;
}

export namespace RestoreSnapshotFromRecycleBinResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreSnapshotFromRecycleBinResult): any => ({
    ...obj,
  });
}

export interface RestoreSnapshotTierRequest {
  /**
   * <p>The ID of the snapshot to restore.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Specifies the number of days for which to temporarily restore an archived snapshot.
   *       Required for temporary restores only. The snapshot will be automatically re-archived
   *       after this period.</p>
   *          <p>To temporarily restore an archived snapshot, specify the number of days and omit
   *       the <b>PermanentRestore</b> parameter or set it to
   *       <code>false</code>.</p>
   */
  TemporaryRestoreDays?: number;

  /**
   * <p>Indicates whether to permanently restore an archived snapshot. To permanently restore
   *       an archived snapshot, specify <code>true</code> and omit the
   *       <b>RestoreSnapshotTierRequest$TemporaryRestoreDays</b> parameter.</p>
   */
  PermanentRestore?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RestoreSnapshotTierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreSnapshotTierRequest): any => ({
    ...obj,
  });
}

export interface RestoreSnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The date and time when the snapshot restore process started.</p>
   */
  RestoreStartTime?: Date;

  /**
   * <p>For temporary restores only. The number of days for which the archived snapshot
   *       is temporarily restored.</p>
   */
  RestoreDuration?: number;

  /**
   * <p>Indicates whether the snapshot is permanently restored. <code>true</code> indicates a permanent
   *       restore. <code>false</code> indicates a temporary restore.</p>
   */
  IsPermanentRestore?: boolean;
}

export namespace RestoreSnapshotTierResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreSnapshotTierResult): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being removed.</p>
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the Active Directory group for which to revoke access. </p>
   */
  AccessGroupId?: string;

  /**
   * <p>Indicates whether access should be revoked for all clients.</p>
   */
  RevokeAllGroups?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace RevokeClientVpnIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

export namespace RevokeClientVpnIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeClientVpnIngressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or
   *             number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a
   *            destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security
   *             group.</p>
   */
  SourceSecurityGroupOwnerId?: string;
}

export namespace RevokeSecurityGroupEgressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The outbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupEgressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupEgressResult): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   */
  CidrIp?: string;

  /**
   * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number. For the ICMP type number,
   *         use <code>-1</code> to specify all ICMP types.</p>
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   *            security group name in the request. For security groups in a nondefault VPC, you must
   *            specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   *            security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *         (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).
   *         Use <code>-1</code> to specify all.</p>
   */
  IpProtocol?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. For EC2-VPC, the source security group must be in the same VPC. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>[EC2-Classic] The Amazon Web Services account ID of the source security group, if the source security group is in a different account. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</p>
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number. For the ICMP code number,
   *         use <code>-1</code> to specify all ICMP codes for the ICMP type.</p>
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the security group rules.</p>
   */
  SecurityGroupRuleIds?: string[];
}

export namespace RevokeSecurityGroupIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressRequest): any => ({
    ...obj,
  });
}

export interface RevokeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;

  /**
   * <p>The inbound rules that were unknown to the service. In some cases,
   *                 <code>unknownIpPermissionSet</code> might be in a different format from the request
   *             parameter. </p>
   */
  UnknownIpPermissions?: IpPermission[];
}

export namespace RevokeSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be
 *             specified in the request.</p>
 */
export interface CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading for the instance,
   *             specify a value of <code>1</code>. Otherwise, specify the default value of
   *                 <code>2</code>.</p>
   */
  ThreadsPerCore?: number;
}

export namespace CpuOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CpuOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *            Describes an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAccelerator {
  /**
   * <p>
   *         	The type of elastic inference accelerator. The possible values are <code>eia1.medium</code>, <code>eia1.large</code>, <code>eia1.xlarge</code>, <code>eia2.medium</code>, <code>eia2.large</code>, and <code>eia2.xlarge</code>.
   *         </p>
   */
  Type: string | undefined;

  /**
   * <p>
   *             The number of elastic inference accelerators to attach to the instance.
   *         </p>
   *          <p>Default: 1</p>
   */
  Count?: number;
}

export namespace ElasticInferenceAccelerator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
 *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro
 *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
 *                 Guide</i>.</p>
 */
export interface EnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to
   *                 <code>true</code>.</p>
   */
  Enabled?: boolean;
}

export namespace EnclaveOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnclaveOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, your instance is enabled for
   *             hibernation.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

export namespace HibernationOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HibernationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. The default is
   *             the On-Demand price.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type. For <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances">RunInstances</a>, persistent
   *             Spot Instance requests are only supported when the instance interruption behavior is
   *             either <code>hibernate</code> or <code>stop</code>.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
   *             Supported only for persistent requests.</p>
   *         <ul>
   *             <li>
   *                 <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                 <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
   *                     remains active until all instances launch or you cancel the request.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is
   *                 <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace SpotMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the market (purchasing) option for the instances.</p>
 */
export interface InstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: SpotMarketOptions;
}

export namespace InstanceMarketOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The launch template to use. You must specify either the launch template ID or launch
 *             template name in the request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template.</p>
   *         <p>Default: The default version for the launch template.</p>
   */
  Version?: string;
}

export namespace LaunchTemplateSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LicenseConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LicenseConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The maintenance options for the instance.</p>
 */
export interface InstanceMaintenanceOptionsRequest {
  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to default. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState | string;
}

export namespace InstanceMaintenanceOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMaintenanceOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>The state of token usage for your instance metadata requests.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are
   *             returned. If you retrieve the IAM role credentials using a valid signed
   *             token, the version 2.0 role credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM
   *             role credentials always returns the version 2.0 credentials; the version 1.0 credentials
   *             are not available.</p>
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
   * <p>Enables or disables the HTTP metadata endpoint on your instances.</p>
   *         <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   *         <p>Default: <code>enabled</code>
   *          </p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *         <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
}

export namespace InstanceMetadataOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface PrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A
   *             records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA
   *             records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace PrivateDnsNameOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateDnsNameOptionsRequest): any => ({
    ...obj,
  });
}

export interface RunInstancesRequest {
  /**
   * <p>The block device mapping, which defines the EBS volumes and instance store volumes to
   *             attach to the instance at launch. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device
   *                 mappings</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of the AMI. An AMI ID is required to launch an instance and must be specified
   *             here or in a launch template.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *         <p>Default: <code>m1.small</code>
   *          </p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>[EC2-VPC] The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon
   *             EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible
   *             number of instances above <code>MinCount</code>.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a minimum that is more
   *             instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches no instances.</p>
   *         <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 General FAQ.</p>
   */
  MinCount: number | undefined;

  /**
   * <p>Specifies whether detailed monitoring is enabled for the instance.</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: Placement;

  /**
   * <p>The ID of the RAM disk to select. Some kernels require additional drivers at launch.
   *             Check the kernel requirements for information about whether you need to specify a RAM
   *             disk. To find kernel requirements, go to the Amazon Web Services Resource Center and
   *             search for the kernel ID.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *         </important>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] The names of the security groups. For a nondefault VPC, you
   *             must use security group IDs instead.</p>
   *         <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   *         <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>[EC2-VPC] The ID of the subnet to launch the instance into.</p>
   *         <p>If you specify a network interface, you must specify any subnets as part of the
   *             network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user data script to make available to the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run commands
   *                 on your Linux instance at launch</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html">Run commands on your Windows instance at launch</a>. If you are using a command line tool,
   *             base64-encoding is performed for you, and you can load the text from a file. Otherwise,
   *             you must provide base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. If you do not specify a client token, a randomly generated token is used for
   *             the request to ensure idempotency.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance
   *             profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The network interfaces to associate with the instance. If you specify a network
   *             interface, you must specify any security groups and subnets as part of the network
   *             interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address
   *             range of the subnet.</p>
   *         <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *         <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>An elastic GPU to associate with the instance. An Elastic GPU is a GPU resource that
   *             you can attach to your Windows instance to accelerate the graphics performance of your
   *             applications. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon EC2 Elastic GPUs</a> in
   *             the <i>Amazon EC2 User Guide</i>.</p>
   */
  ElasticGpuSpecification?: ElasticGpuSpecification[];

  /**
   * <p>An elastic inference accelerator to associate with the instance. Elastic inference
   *             accelerators are a resource you can attach to your Amazon EC2 instances to accelerate
   *             your Deep Learning (DL) inference workloads.</p>
   *         <p>You cannot specify accelerators from different generations in the same request.</p>
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The launch template to use to launch the instances. Any parameters that you specify in
   *                 <a>RunInstances</a> override the same parameters in the launch template.
   *             You can specify either the name or ID of a launch template, but not both.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The market (purchasing) option for the instances.</p>
   *         <p>For <a>RunInstances</a>, persistent Spot Instance requests are
   *             only supported when <b>InstanceInterruptionBehavior</b> is set
   *             to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the burstable performance instance. Valid values
   *             are <code>standard</code> and <code>unlimited</code>. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html">
   *                 ModifyInstanceCreditSpecification</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a
   *             instances)</p>
   *
   *         <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
   *             supported.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  CpuOptions?: CpuOptionsRequest;

  /**
   * <p>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the
   *             instance's Capacity Reservation preference defaults to <code>open</code>, which enables
   *             it to run in any open Capacity Reservation that has matching attributes (instance type,
   *             platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: CapacityReservationSpecification;

  /**
   * <p>Indicates whether an instance is enabled for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same
   *             instance.</p>
   */
  HibernationOptions?: HibernationOptionsRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LicenseConfigurationRequest[];

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   */
  MetadataOptions?: InstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For
   *             more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"> What is Amazon Web Services Nitro
   *                 Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User
   *                 Guide</i>.</p>
   *         <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same
   *             instance.</p>
   */
  EnclaveOptions?: EnclaveOptionsRequest;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the
   *             subnet.</p>
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;

  /**
   * <p>The maintenance and recovery options for the instance.</p>
   */
  MaintenanceOptions?: InstanceMaintenanceOptionsRequest;
}

export namespace RunInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunInstancesRequest): any => ({
    ...obj,
    ...(obj.UserData && { UserData: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that support them.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for an <code>io1</code> or <code>io2</code> volume, with a maximum
   *    		ratio of 50 IOPS/GiB for <code>io1</code>, and 500 IOPS/GiB for <code>io2</code>. Range is 100 to 64,000 IOPS for
   *    		volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">instances built on the Nitro System</a>. Other instance families guarantee performance up to
   *    		32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *    		<i>Amazon EC2 User Guide</i>.</p>
   *    	     <p>This parameter is valid only for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   *          <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose SSD, <code>io1</code> or <code> io2</code> for Provisioned IOPS SSD, Throughput Optimized HDD
   *          for <code>st1</code>, Cold HDD for <code>sc1</code>, or <code>standard</code> for
   *          Magnetic.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: string;
}

export namespace ScheduledInstancesEbs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesEbs): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: ScheduledInstancesEbs;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *          starting from 0. An instance type with two available instance store volumes can specify mappings
   *          for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store
   *          volumes depends on the instance type. After you connect to the instance, you must mount the
   *          volume.</p>
   *          <p>Constraints: For M3 instances, you must specify instance store volumes in the block device
   *          mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes
   *          specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

export namespace ScheduledInstancesBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The name.</p>
   */
  Name?: string;
}

export namespace ScheduledInstancesIamInstanceProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesIamInstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace ScheduledInstancesMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace ScheduledInstancesIpv6Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a private IPv4 address for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * <p>Indicates whether this is a primary IPv4 address. Otherwise, this is a secondary IPv4 address.</p>
   */
  Primary?: boolean;

  /**
   * <p>The IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace ScheduledInstancesPrivateIpAddressConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesPrivateIpAddressConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The
   *          public IPv4 address can only be assigned to a network interface for eth0, and can only be
   *          assigned to a new network interface, not an existing one. You cannot specify more than one
   *          network interface in the request. If launching into a default subnet, the default value is
   *          <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?: ScheduledInstancesIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace ScheduledInstancesNetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesNetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesPlacement {
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;
}

export namespace ScheduledInstancesPlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p>
 *          <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet.
 *           You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[];

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: ScheduledInstancesIamInstanceProfile;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: ScheduledInstancesMonitoring;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: ScheduledInstancesNetworkInterface[];

  /**
   * <p>The placement information.</p>
   */
  Placement?: ScheduledInstancesPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The base64-encoded MIME user data.</p>
   */
  UserData?: string;
}

export namespace ScheduledInstancesLaunchSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledInstancesLaunchSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesRequest {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The number of instances.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone,
   *          network, and platform of the schedule that you purchased.</p>
   */
  LaunchSpecification: ScheduledInstancesLaunchSpecification | undefined;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId: string | undefined;
}

export namespace RunScheduledInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: string[];
}

export namespace RunScheduledInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunScheduledInstancesResult): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>One or more filters.</p>
   *          <ul>
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

export namespace SearchLocalGatewayRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchLocalGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: LocalGatewayRoute[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchLocalGatewayRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchLocalGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>One or more filters. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>group-ip-address</code> - The IP address of the  transit gateway multicast group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-member</code> - The resource is a group member. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>is-group-source</code> - The resource is a group source. Valid values are <code>true</code> | <code>false</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>member-type</code> - The member type. Valid values are <code>igmp</code> | <code>static</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-id</code> - The ID of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>resource-type</code> - The type of resource. Valid values are <code>vpc</code> | <code>vpn</code> | <code>direct-connect-gateway</code> | <code>tgw-peering</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source-type</code> - The source type. Valid values are <code>igmp</code> | <code>static</code>.</p>
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

export namespace SearchTransitGatewayMulticastGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsRequest): any => ({
    ...obj,
  });
}

export type MembershipType = "igmp" | "static";

/**
 * <p>Describes the  transit gateway multicast group resources.</p>
 */
export interface TransitGatewayMulticastGroup {
  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain group resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupMember?: boolean;

  /**
   * <p>Indicates that the resource is a  transit gateway multicast group member.</p>
   */
  GroupSource?: boolean;

  /**
   * <p>The member type (for example, <code>static</code>).</p>
   */
  MemberType?: MembershipType | string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: MembershipType | string;
}

export namespace TransitGatewayMulticastGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastGroup): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * <p>Information about the  transit gateway multicast group.</p>
   */
  MulticastGroups?: TransitGatewayMulticastGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace SearchTransitGatewayMulticastGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayMulticastGroupsResult): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
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
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The maximum number of routes to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace SearchTransitGatewayRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesRequest): any => ({
    ...obj,
  });
}

export interface SearchTransitGatewayRoutesResult {
  /**
   * <p>Information about the routes.</p>
   */
  Routes?: TransitGatewayRoute[];

  /**
   * <p>Indicates whether there are additional routes available.</p>
   */
  AdditionalRoutesAvailable?: boolean;
}

export namespace SearchTransitGatewayRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTransitGatewayRoutesResult): any => ({
    ...obj,
  });
}

export interface SendDiagnosticInterruptRequest {
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

export namespace SendDiagnosticInterruptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendDiagnosticInterruptRequest): any => ({
    ...obj,
  });
}

export interface StartInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace StartInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance state change.</p>
 */
export interface InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: InstanceState;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: InstanceState;
}

export namespace InstanceStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStateChange): any => ({
    ...obj,
  });
}

export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   */
  StartingInstances?: InstanceStateChange[];
}

export namespace StartInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstancesResult): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * <p>The ID of the Network Access Scope.</p>
   */
  NetworkInsightsAccessScopeId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace StartNetworkInsightsAccessScopeAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAccessScopeAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis;
}

export namespace StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAccessScopeAnalysisResult): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources that the path must traverse.</p>
   */
  FilterInArns?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace StartNetworkInsightsAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
}

export namespace StartNetworkInsightsAnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNetworkInsightsAnalysisResult): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId: string | undefined;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationRequest): any => ({
    ...obj,
  });
}

export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export namespace StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartVpcEndpointServicePrivateDnsVerificationResult): any => ({
    ...obj,
  });
}

export interface StopInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Hibernates the instance if the instance was enabled for hibernation at launch. If the
   *             instance cannot hibernate successfully, a normal shutdown occurs. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p> Default: <code>false</code>
   *          </p>
   */
  Hibernate?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Forces the instances to stop. The instances do not have an opportunity to flush file
   *             system caches or file system metadata. If you use this option, you must perform file
   *             system check and repair procedures. This option is not recommended for Windows
   *             instances.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  Force?: boolean;
}

export namespace StopInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstancesRequest): any => ({
    ...obj,
  });
}

export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
}

export namespace StopInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstancesResult): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsRequest {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the client connection to be terminated.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The name of the user who initiated the connection. Use this option to terminate all active connections for
   * 			the specified user. This option can only be used if the user has established up to five connections.</p>
   */
  Username?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateClientVpnConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 */
export interface TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: ClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: ClientVpnConnectionStatus;
}

export namespace TerminateConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
    ...obj,
  });
}

export interface TerminateClientVpnConnectionsResult {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The user who established the terminated client connections.</p>
   */
  Username?: string;

  /**
   * <p>The current state of the client connections.</p>
   */
  ConnectionStatuses?: TerminateConnectionStatus[];
}

export namespace TerminateClientVpnConnectionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateClientVpnConnectionsResult): any => ({
    ...obj,
  });
}

export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *         <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
   *             smaller batches.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace TerminateInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateInstancesRequest): any => ({
    ...obj,
  });
}

export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

export namespace TerminateInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminateInstancesResult): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>One or more IPv6 prefixes to unassign from the network interface.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
}

export namespace UnassignIpv6AddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesRequest): any => ({
    ...obj,
  });
}

export interface UnassignIpv6AddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv6 addresses that have been unassigned from the network interface.</p>
   */
  UnassignedIpv6Addresses?: string[];

  /**
   * <p>The IPv4 prefixes that have been unassigned from  the network interface.</p>
   */
  UnassignedIpv6Prefixes?: string[];
}

export namespace UnassignIpv6AddressesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignIpv6AddressesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   */
  Ipv4Prefixes?: string[];
}

export namespace UnassignPrivateIpAddressesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnassignPrivateIpAddressesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace UnmonitorInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnmonitorInstancesRequest): any => ({
    ...obj,
  });
}

export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export namespace UnmonitorInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnmonitorInstancesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the description of a security group rule.</p>
 *         <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

export namespace SecurityGroupRuleDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[Default VPC] The name of the security group. You must specify either the security group
   * 			ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either the IP permissions
   * 		    or the description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The description for the egress security group rules. You must specify either the
   *             description or the IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsEgressResult): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group. You must specify either the security group ID or the
   * 			security group name in the request. For security groups in a nondefault VPC, you must
   * 			specify the security group ID.</p>
   */
  GroupId?: string;

  /**
   * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
   * 			security group ID or the security group name in the request.</p>
   */
  GroupName?: string;

  /**
   * <p>The IP permissions for the security group rule. You must specify either IP permissions
   * 		    or a description.</p>
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>[VPC only] The description for the ingress security group rules. You must specify either
   *             a description or IP permissions.</p>
   */
  SecurityGroupRuleDescriptions?: SecurityGroupRuleDescription[];
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

export namespace UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityGroupRuleDescriptionsIngressResult): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace WithdrawByoipCidrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WithdrawByoipCidrRequest): any => ({
    ...obj,
  });
}

export interface WithdrawByoipCidrResult {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: ByoipCidr;
}

export namespace WithdrawByoipCidrResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WithdrawByoipCidrResult): any => ({
    ...obj,
  });
}
