// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  _InstanceType,
  AddedPrincipal,
  AddIpamOperatingRegion,
  AddPrefixListEntry,
  AddressAttribute,
  AddressAttributeName,
  Affinity,
  ApplianceModeSupportValue,
  AutoPlacement,
  ByoipCidr,
  ClientConnectOptions,
  ClientLoginBannerOptions,
  ClientVpnAuthorizationRuleStatus,
  ConnectionLogOptions,
  CurrencyCodeValues,
  DnsSupportValue,
  EnaSrdSpecification,
  HostRecovery,
  IamInstanceProfileAssociation,
  IamInstanceProfileSpecification,
  InstanceEventWindow,
  IpPermission,
  Ipv6SupportValue,
  PortRange,
  RouteTableAssociationState,
  SelfServicePortal,
  TagSpecification,
  TransitGatewayAttachmentResourceType,
  TransitGatewayMulticastDomainAssociations,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VerifiedAccessInstance,
  VerifiedAccessTrustProvider,
} from "./models_0";
import {
  AttributeValue,
  BlockDeviceMapping,
  CapacityReservationPreference,
  CapacityReservationTarget,
  CreditSpecificationRequest,
  ElasticGpuSpecification,
  FleetExcessCapacityTerminationPolicy,
  FleetLaunchTemplateConfigRequest,
  HostnameType,
  IcmpTypeCode,
  InstanceEventWindowTimeRangeRequest,
  InstanceInterruptionBehavior,
  InstanceIpv6Address,
  Ipam,
  IpamPool,
  IpamResourceDiscovery,
  IpamScope,
  LaunchTemplate,
  LocalGatewayRoute,
  ManagedPrefixList,
  MarketType,
  Placement,
  RequestIpamResourceTag,
  RuleAction,
  ShutdownBehavior,
  SpotInstanceType,
  TargetCapacitySpecificationRequest,
  VolumeType,
} from "./models_1";
import {
  AutoAcceptSharedAttachmentsValue,
  DefaultRouteTableAssociationValue,
  DefaultRouteTablePropagationValue,
  DnsOptionsSpecification,
  IKEVersionsRequestListValue,
  IpAddressType,
  PayerResponsibility,
  Phase1DHGroupNumbersRequestListValue,
  Phase1EncryptionAlgorithmsRequestListValue,
  Phase1IntegrityAlgorithmsRequestListValue,
  Phase2DHGroupNumbersRequestListValue,
  Phase2EncryptionAlgorithmsRequestListValue,
  Phase2IntegrityAlgorithmsRequestListValue,
  SnapshotState,
  TrafficDirection,
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkService,
  TrafficMirrorPortRangeRequest,
  TrafficMirrorRuleAction,
  TrafficMirrorSession,
  TransitGateway,
  TransitGatewayPrefixListReference,
  TransitGatewayRoute,
  VerifiedAccessEndpoint,
  VerifiedAccessEndpointProtocol,
  VerifiedAccessGroup,
  VpnConnection,
  VpnEcmpSupportValue,
  VpnTunnelLogOptionsSpecification,
} from "./models_2";
import {
  ArchitectureValues,
  AttributeBooleanValue,
  BootModeValues,
  ClientVpnConnectionStatus,
  Filter,
  FpgaImageAttribute,
  FpgaImageAttributeName,
  HttpTokensState,
  ImdsSupportValues,
  InstanceAttributeName,
  InstanceAutoRecoveryState,
  InstanceMetadataEndpointState,
  InstanceMetadataOptionsResponse,
  InstanceMetadataProtocolState,
  InstanceMetadataTagsState,
  InstanceState,
  InstanceStatusEvent,
  InstanceTagNotificationAttribute,
  IpamPoolCidr,
  LaunchPermission,
  Monitoring,
  PermissionGroup,
  TpmSupportValues,
} from "./models_3";
import {
  CreateVolumePermission,
  ExcessCapacityTerminationPolicy,
  InstanceNetworkInterfaceSpecification,
  LaunchTemplateConfig,
  NetworkInsightsAccessScopeAnalysis,
  NetworkInsightsAnalysis,
  PublicIpv4PoolRange,
  ReservedInstancesConfiguration,
  RunInstancesMonitoringEnabled,
  ScheduledInstance,
  SnapshotAttributeName,
  SpotFleetRequestConfigData,
  SpotInstanceRequest,
  SpotPlacement,
  VerifiedAccessInstanceLoggingConfiguration,
  VolumeModification,
} from "./models_4";
import {
  DnsServersOptionsModifyStructure,
  InstanceFamilyCreditSpecification,
  IpamResourceCidr,
  Purchase,
  UnlimitedSupportedInstanceFamily,
} from "./models_5";

export interface ModifyClientVpnEndpointRequest {
  /**
   * <p>The ID of the Client VPN endpoint to modify.</p>
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ARN of the server certificate to be used. The server certificate must be provisioned in
   * 			Certificate Manager (ACM).</p>
   */
  ServerCertificateArn?: string;

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
   */
  ConnectionLogOptions?: ConnectionLogOptions;

  /**
   * <p>Information about the DNS servers to be used by Client VPN connections. A Client VPN endpoint can have
   * 			up to two DNS servers.</p>
   */
  DnsServers?: DnsServersOptionsModifyStructure;

  /**
   * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
   *          <p>Valid Values: <code>443</code> | <code>1194</code>
   *          </p>
   *          <p>Default Value: <code>443</code>
   *          </p>
   */
  VpnPort?: number;

  /**
   * <p>A brief description of the Client VPN endpoint.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the VPN is split-tunnel.</p>
   *          <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-tunnel Client VPN endpoint</a> in the
   *         	<i>Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups to apply to the target network.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC to associate with the Client VPN endpoint.</p>
   */
  VpcId?: string;

  /**
   * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
   */
  SelfServicePortal?: SelfServicePortal | string;

  /**
   * <p>The options for managing connection authorization for new client connections.</p>
   */
  ClientConnectOptions?: ClientConnectOptions;

  /**
   * <p>The maximum VPN session duration time in hours.</p>
   *          <p>Valid values: <code>8 | 10 | 12 | 24</code>
   *          </p>
   *          <p>Default value: <code>24</code>
   *          </p>
   */
  SessionTimeoutHours?: number;

  /**
   * <p>Options for enabling a customizable text banner that will be displayed on
   * 			Amazon Web Services provided clients when a VPN session is established.</p>
   */
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
}

export interface ModifyClientVpnEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The instance family.</p>
   */
  InstanceFamily: UnlimitedSupportedInstanceFamily | string | undefined;

  /**
   * <p>The credit option for CPU usage of the instance family.</p>
   *          <p>Valid Values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   */
  CpuCredits: string | undefined;
}

export interface ModifyDefaultCreditSpecificationResult {
  /**
   * <p>The default credit option for CPU usage of the instance family.</p>
   */
  InstanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;
}

export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
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
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</p>
   */
  KmsKeyId?: string;
}

export interface ModifyFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of
   *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: FleetLaunchTemplateConfigRequest[];

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>The size of the EC2 Fleet.</p>
   */
  TargetCapacitySpecification?: TargetCapacitySpecificationRequest;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

export interface ModifyFleetResult {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *          no response is returned, and instead an error message is returned.</p>
   */
  Return?: boolean;
}

/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermissionRequest {
  /**
   * <p>The name of the group.</p>
   */
  Group?: PermissionGroup | string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  UserId?: string;
}

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 */
export interface LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   */
  Add?: LoadPermissionRequest[];

  /**
   * <p>The load permissions to remove.</p>
   */
  Remove?: LoadPermissionRequest[];
}

export enum OperationType {
  add = "add",
  remove = "remove",
}

export interface ModifyFpgaImageAttributeRequest {
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
   * <p>The name of the attribute.</p>
   */
  Attribute?: FpgaImageAttributeName | string;

  /**
   * <p>The operation type.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The Amazon Web Services account IDs. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserIds?: string[];

  /**
   * <p>The user groups. This parameter is valid only when modifying the <code>loadPermission</code> attribute.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The product codes. After you add a product code to an AFI, it can't be removed.
   * 		    This parameter is valid only when modifying the <code>productCodes</code> attribute.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The load permission for the AFI.</p>
   */
  LoadPermission?: LoadPermissionModifications;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;
}

export interface ModifyFpgaImageAttributeResult {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: FpgaImageAttribute;
}

export interface ModifyHostsRequest {
  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   */
  AutoPlacement?: AutoPlacement | string;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   */
  HostIds: string[] | undefined;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   */
  HostRecovery?: HostRecovery | string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support only a specific instance type.</p>
   *          <p>If you want to modify a Dedicated Host to support multiple instance types in its
   *             current instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this
   *             parameter to modify a Dedicated Host to support multiple instance types within its
   *             current instance family.</p>
   *          <p>If you want to modify a Dedicated Host to support a specific instance type only, omit
   *             this parameter and specify <b>InstanceType</b> instead. You
   *             cannot specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   */
  InstanceFamily?: string;
}

export interface ModifyHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the setting
   *             you requested can be used.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface ModifyIdentityIdFormatRequest {
  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. Specify
   *        <code>all</code> to modify the ID format for all IAM users, IAM roles, and the root user of
   *        the account.</p>
   */
  PrincipalArn: string | undefined;

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
   */
  Resource: string | undefined;

  /**
   * <p>Indicates whether the resource should use longer IDs (17-character IDs)</p>
   */
  UseLongIds: boolean | undefined;
}

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
   */
  Resource: string | undefined;

  /**
   * <p>Indicate whether the resource should use longer IDs (17-character IDs).</p>
   */
  UseLongIds: boolean | undefined;
}

/**
 * <p>Describes a launch permission modification.</p>
 */
export interface LaunchPermissionModifications {
  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to add to the list of launch permissions for the AMI.</p>
   */
  Add?: LaunchPermission[];

  /**
   * <p>The Amazon Web Services account ID, organization ARN, or OU ARN to remove from the list of launch permissions for the AMI.</p>
   */
  Remove?: LaunchPermission[];
}

/**
 * <p>Contains the parameters for ModifyImageAttribute.</p>
 */
export interface ModifyImageAttributeRequest {
  /**
   * <p>The name of the attribute to modify.</p>
   *          <p>Valid values: <code>description</code> | <code>launchPermission</code>
   *          </p>
   */
  Attribute?: string;

  /**
   * <p>A new description for the AMI.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>A new launch permission for the AMI.</p>
   */
  LaunchPermission?: LaunchPermissionModifications;

  /**
   * <p>The operation type.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>Not supported.</p>
   */
  ProductCodes?: string[];

  /**
   * <p>The user groups.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserGroups?: string[];

  /**
   * <p>The Amazon Web Services account IDs.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  UserIds?: string[];

  /**
   * <p>The value of the attribute being modified.
   *        This parameter can be used only when the <code>Attribute</code> parameter is <code>description</code>.</p>
   */
  Value?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization. This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OrganizationArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used only when the <code>Attribute</code> parameter is <code>launchPermission</code>.</p>
   */
  OrganizationalUnitArns?: string[];
}

/**
 * <p>Describes information used to set up an EBS volume specified in a block device
 *             mapping.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

/**
 * <p>Describes a block device mapping entry.</p>
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * <p>suppress the specified device included in the block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name.</p>
   */
  VirtualName?: string;
}

export interface BlobAttributeValue {
  Value?: Uint8Array;
}

export interface ModifyInstanceAttributeRequest {
  /**
   * <p>Enable or disable source/destination checks, which ensure that the instance is either
   *             the source or the destination of any traffic that it receives. If the value is
   *                 <code>true</code>, source/destination checks are enabled; otherwise, they are
   *             disabled. The default value is <code>true</code>. You must disable source/destination
   *             checks if the instance runs services such as network address translation, routing, or
   *             firewalls.</p>
   */
  SourceDestCheck?: AttributeBooleanValue;

  /**
   * <p>The name of the attribute to modify.</p>
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
   */
  Attribute?: InstanceAttributeName | string;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently
   *             attached. The volume must be owned by the caller. If no value is specified for
   *                 <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is
   *             deleted when the instance is terminated.</p>
   *          <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when
   *             you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Update the block device mapping when launching an instance</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: InstanceBlockDeviceMappingSpecification[];

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance using the Amazon
   *             EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot
   *             Instances.</p>
   */
  DisableApiTermination?: AttributeBooleanValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal EBS I/O performance. This optimization isn't available with all instance
   *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: AttributeBooleanValue;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the
   *             instance.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  EnaSupport?: AttributeBooleanValue;

  /**
   * <p>[EC2-VPC] Replaces the security groups of the instance with the specified security
   *             groups. You must specify at least one security group, even if it's just the default
   *             security group for the VPC. You must specify the security group ID, not the security
   *             group name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the
   *             instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                 types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is
   *             not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
   */
  InstanceType?: AttributeValue;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Kernel?: AttributeValue;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use
   *             PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Ramdisk?: AttributeValue;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual
   *             Function interface for the instance.</p>
   *          <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function
   *             interface at this time.</p>
   *          <p>This option is supported only for HVM instances. Specifying this option with a PV
   *             instance can make it unreachable.</p>
   */
  SriovNetSupport?: AttributeValue;

  /**
   * <p>Changes the instance's user data to the specified value. If you are using an Amazon Web Services SDK or command line tool, base64-encoding is performed for you, and you
   *             can load the text from a file. Otherwise, you must provide base64-encoded text.</p>
   */
  UserData?: BlobAttributeValue;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>,
   *                 <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or
   *                 <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   */
  Value?: string;

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 Protection</a>.</p>
   *          <p></p>
   */
  DisableApiStop?: AttributeBooleanValue;
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter
 * 			at a time. If you specify <code>CapacityReservationPreference</code> and
 * 			<code>CapacityReservationTarget</code>, the request fails.</p>
 *          <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance
 * 			to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has
 * 			matching attributes (instance type, platform, Availability Zone). Use the
 * 			<code>CapacityReservationTarget</code> parameter to explicitly target a specific
 * 			   	Capacity Reservation or a Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecification {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The
   * 					instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * <p>The ID of the instance to be modified.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification: CapacityReservationSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance.</p>
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   *          <p>Valid values: <code>standard</code> | <code>unlimited</code>
   *          </p>
   *          <p>T3 instances with <code>host</code> tenancy do not support the <code>unlimited</code>
   *             CPU credit option.</p>
   */
  CpuCredits?: string;
}

export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the credit option for CPU usage.</p>
   */
  InstanceCreditSpecifications: InstanceCreditSpecificationRequest[] | undefined;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was
 *             successfully modified.</p>
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export enum UnsuccessfulInstanceCreditSpecificationErrorCode {
  INCORRECT_INSTANCE_STATE = "IncorrectInstanceState",
  INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED = "InstanceCreditSpecification.NotSupported",
  INSTANCE_NOT_FOUND = "InvalidInstanceID.NotFound",
  INVALID_INSTANCE_ID = "InvalidInstanceID.Malformed",
}

/**
 * <p>Information about the error for the burstable performance instance whose credit option
 *             for CPU usage was not modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   */
  Code?: UnsuccessfulInstanceCreditSpecificationErrorCode | string;

  /**
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

/**
 * <p>Describes the burstable performance instance whose credit option for CPU usage was not
 *             modified.</p>
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The applicable error for the burstable performance instance whose credit option for
   *             CPU usage was not modified.</p>
   */
  Error?: UnsuccessfulInstanceCreditSpecificationItemError;
}

export interface ModifyInstanceCreditSpecificationResult {
  /**
   * <p>Information about the instances whose credit option for CPU usage was successfully
   *             modified.</p>
   */
  SuccessfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  /**
   * <p>Information about the instances whose credit option for CPU usage was not
   *             modified.</p>
   */
  UnsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

export interface ModifyInstanceEventStartTimeRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance with the scheduled event.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the event whose date and time you are modifying.</p>
   */
  InstanceEventId: string | undefined;

  /**
   * <p>The new date and time when the event will take place.</p>
   */
  NotBefore: Date | undefined;
}

export interface ModifyInstanceEventStartTimeResult {
  /**
   * <p>Information about the event.</p>
   */
  Event?: InstanceStatusEvent;
}

export interface ModifyInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the event window.</p>
   */
  InstanceEventWindowId: string | undefined;

  /**
   * <p>The time ranges of the event window.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * <p>The cron expression of the event window, for example, <code>* 0-4,20-23 * * 1,5</code>.</p>
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
   */
  CronExpression?: string;
}

export interface ModifyInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export interface ModifyInstanceMaintenanceOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Disables the automatic recovery behavior of your instance or sets it to
   *             default.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyInstanceMaintenanceOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Provides information on the current automatic recovery behavior of your
   *             instance.</p>
   */
  AutoRecovery?: InstanceAutoRecoveryState | string;
}

export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code>
   *             (in other words, set the use of IMDSv2 to <code>optional</code>) or
   *                 <code>required</code> (in other words, set the use of IMDSv2 to
   *                 <code>required</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel. If no parameter is specified,
   *             the existing state is maintained.</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is
   *             not specified, the existing state is maintained.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service. This setting
   *             applies only if you have enabled the HTTP metadata endpoint.</p>
   */
  HttpProtocolIpv6?: InstanceMetadataProtocolState | string;

  /**
   * <p>Set to <code>enabled</code> to allow access to instance tags from the instance
   *             metadata. Set to <code>disabled</code> to turn off access to instance tags from the
   *             instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with
   *                 instance tags using the instance metadata</a>.</p>
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
}

export interface ModifyInstanceMetadataOptionsResult {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The metadata options for the instance.</p>
   */
  InstanceMetadataOptions?: InstanceMetadataOptionsResponse;
}

export enum HostTenancy {
  dedicated = "dedicated",
  host = "host",
}

export interface ModifyInstancePlacementRequest {
  /**
   * <p>The affinity setting for the instance.</p>
   */
  Affinity?: Affinity | string;

  /**
   * <p>The name of the placement group in which to place the instance. For spread placement
   *             groups, the instance must have a tenancy of <code>default</code>. For cluster and
   *             partition placement groups, the instance must have a tenancy of <code>default</code> or
   *                 <code>dedicated</code>.</p>
   *          <p>To remove an instance from a placement group, specify an empty string ("").</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host with which to associate the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The ID of the instance that you are modifying.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tenancy for the instance.</p>
   *          <note>
   *             <p>For T3 instances, you can't change the tenancy from <code>dedicated</code> to
   *                     <code>host</code>, or from <code>host</code> to <code>dedicated</code>.
   *                 Attempting to make one of these unsupported tenancy changes results in the
   *                     <code>InvalidTenancy</code> error code.</p>
   *          </note>
   */
  Tenancy?: HostTenancy | string;

  /**
   * <p>The number of the partition in which to place the instance. Valid only if the
   *             placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ARN of the host resource group in which to place the instance.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The Group Id of a placement group. You must specify the Placement Group <b>Group Id</b> to launch an instance in a shared placement
   *             group.</p>
   */
  GroupId?: string;
}

export interface ModifyInstancePlacementResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

/**
 * <p>Remove an operating Region from an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>
 *          </p>
 */
export interface RemoveIpamOperatingRegion {
  /**
   * <p>The name of the operating Region you want to remove.</p>
   */
  RegionName?: string;
}

export interface ModifyIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM you want to modify.</p>
   */
  IpamId: string | undefined;

  /**
   * <p>The description of the IPAM you want to modify.</p>
   */
  Description?: string;

  /**
   * <p>Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  AddOperatingRegions?: AddIpamOperatingRegion[];

  /**
   * <p>The operating Regions to remove.</p>
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[];
}

export interface ModifyIpamResult {
  /**
   * <p>The results of the modification.</p>
   */
  Ipam?: Ipam;
}

export interface ModifyIpamPoolRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool you want to modify.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The description of the IPAM pool you want to modify.</p>
   */
  Description?: string;

  /**
   * <p>If true, IPAM will continuously look for resources within the CIDR range of this pool
   *          and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for
   *          these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import
   *          a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently
   *          marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM
   *          discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only.
   *       </p>
   *          <p>A locale must be set on the pool for this feature to work.</p>
   */
  AutoImport?: boolean;

  /**
   * <p>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128. The minimum netmask
   *          length must be less than the maximum netmask length.</p>
   */
  AllocationMinNetmaskLength?: number;

  /**
   * <p>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible
   *          netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are  0 - 128.The maximum netmask
   *          length must be greater than the minimum netmask length.</p>
   */
  AllocationMaxNetmaskLength?: number;

  /**
   * <p>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</p>
   */
  AllocationDefaultNetmaskLength?: number;

  /**
   * <p>Clear the default netmask length allocation rule for this pool.</p>
   */
  ClearAllocationDefaultNetmaskLength?: boolean;

  /**
   * <p>Add tag allocation rules to a pool. For more information about allocation rules, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   */
  AddAllocationResourceTags?: RequestIpamResourceTag[];

  /**
   * <p>Remove tag allocation rules from a pool.</p>
   */
  RemoveAllocationResourceTags?: RequestIpamResourceTag[];
}

export interface ModifyIpamPoolResult {
  /**
   * <p>The results of the modification.</p>
   */
  IpamPool?: IpamPool;
}

export interface ModifyIpamResourceCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the resource you want to modify.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The CIDR of the resource you want to modify.</p>
   */
  ResourceCidr: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource you want to modify.</p>
   */
  ResourceRegion: string | undefined;

  /**
   * <p>The ID of the current scope that the resource CIDR is in.</p>
   */
  CurrentIpamScopeId: string | undefined;

  /**
   * <p>The ID of the scope you want to transfer the resource CIDR to.</p>
   */
  DestinationIpamScopeId?: string;

  /**
   * <p>Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.</p>
   */
  Monitored: boolean | undefined;
}

export interface ModifyIpamResourceCidrResult {
  /**
   * <p>The CIDR of the resource.</p>
   */
  IpamResourceCidr?: IpamResourceCidr;
}

export interface ModifyIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A resource discovery ID.</p>
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>A resource discovery description.</p>
   */
  Description?: string;

  /**
   * <p>Add operating Regions to the resource discovery. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
   */
  AddOperatingRegions?: AddIpamOperatingRegion[];

  /**
   * <p>Remove operating Regions.</p>
   */
  RemoveOperatingRegions?: RemoveIpamOperatingRegion[];
}

export interface ModifyIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery.</p>
   */
  IpamResourceDiscovery?: IpamResourceDiscovery;
}

export interface ModifyIpamScopeRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the scope you want to modify.</p>
   */
  IpamScopeId: string | undefined;

  /**
   * <p>The description of the scope you want to modify.</p>
   */
  Description?: string;
}

export interface ModifyIpamScopeResult {
  /**
   * <p>The results of the modification.</p>
   */
  IpamScope?: IpamScope;
}

export interface ModifyLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   *          <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template to set as the default version.</p>
   */
  DefaultVersion?: string;
}

export interface ModifyLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export interface ModifyLocalGatewayRouteRequest {
  /**
   * <p>The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>
   *          The ID of the virtual interface group.
   *       </p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyLocalGatewayRouteResult {
  /**
   * <p>Information about the local gateway route table.</p>
   */
  Route?: LocalGatewayRoute;
}

/**
 * <p>An entry for a prefix list.</p>
 */
export interface RemovePrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   */
  Cidr: string | undefined;
}

export interface ModifyManagedPrefixListRequest {
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
   * <p>The current version of the prefix list.</p>
   */
  CurrentVersion?: number;

  /**
   * <p>A name for the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>One or more entries to add to the prefix list.</p>
   */
  AddEntries?: AddPrefixListEntry[];

  /**
   * <p>One or more entries to remove from the prefix list.</p>
   */
  RemoveEntries?: RemovePrefixListEntry[];

  /**
   * <p>The maximum number of entries for the prefix list. You cannot modify the entries
   *             of a prefix list and modify the size of a prefix list at the same time.</p>
   *          <p>If any of the resources that reference the prefix list cannot support the new
   *             maximum size, the modify operation fails. Check the state message for the IDs of
   *             the first ten resources that do not support the new maximum size.</p>
   */
  MaxEntries?: number;
}

export interface ModifyManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

/**
 * <p>Describes an attachment change.</p>
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

/**
 * <p>Contains the parameters for ModifyNetworkInterfaceAttribute.</p>
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * <p>Information about the interface attachment. If modifying the <code>delete on
   * 				termination</code> attribute, you must specify the ID of the interface
   * 			attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachmentChanges;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: AttributeValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</p>
   */
  Groups?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

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
   * <p>Updates the ENA Express configuration for the network interface that’s attached to the
   * 			instance.</p>
   */
  EnaSrdSpecification?: EnaSrdSpecification;
}

export interface ModifyPrivateDnsNameOptionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name
   *             must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name
   *             must be based on the instance ID. For dual-stack subnets, you can specify whether DNS
   *             names use the instance IPv4 address or the instance ID.</p>
   */
  PrivateDnsHostnameType?: HostnameType | string;

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

export interface ModifyPrivateDnsNameOptionsResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an
   *             error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Contains the parameters for ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesRequest {
  /**
   * <p>The IDs of the Reserved Instances to modify.</p>
   */
  ReservedInstancesIds: string[] | undefined;

  /**
   * <p>A unique, case-sensitive token you provide to ensure idempotency of your modification request. For more information, see
   *    		<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The configuration settings for the Reserved Instances to modify.</p>
   */
  TargetConfigurations: ReservedInstancesConfiguration[] | undefined;
}

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesResult {
  /**
   * <p>The ID for the modification.</p>
   */
  ReservedInstancesModificationId?: string;
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
 *          <p>When you modify a rule, you cannot change the rule type. For example, if the rule
 *             uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4
 *             address range.</p>
 */
export interface SecurityGroupRuleRequest {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *          <p>Use <code>-1</code> to specify all protocols.</p>
   */
  IpProtocol?: string;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the type number. A value of -1 indicates all ICMP/ICMPv6 types.
   *             If you specify all ICMP/ICMPv6 types, you must specify all ICMP/ICMPv6 codes.</p>
   */
  FromPort?: number;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the code. A value of -1 indicates all ICMP/ICMPv6 codes.
   *             If you specify all ICMP/ICMPv6 types, you must specify all ICMP/ICMPv6 codes.</p>
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range. To specify a single IPv4 address, use the /32 prefix length. </p>
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the security group that is referenced in the security group rule.</p>
   */
  ReferencedGroupId?: string;

  /**
   * <p>The description of the security group rule.</p>
   */
  Description?: string;
}

/**
 * <p>Describes an update to a security group rule.</p>
 */
export interface SecurityGroupRuleUpdate {
  /**
   * <p>The ID of the security group rule.</p>
   */
  SecurityGroupRuleId?: string;

  /**
   * <p>Information about the security group rule.</p>
   */
  SecurityGroupRule?: SecurityGroupRuleRequest;
}

export interface ModifySecurityGroupRulesRequest {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>Information about the security group properties to update.</p>
   */
  SecurityGroupRules: SecurityGroupRuleUpdate[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifySecurityGroupRulesResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * <p>Describes modifications to the list of create volume permissions for a volume.</p>
 */
export interface CreateVolumePermissionModifications {
  /**
   * <p>Adds the specified Amazon Web Services account ID or group to the list.</p>
   */
  Add?: CreateVolumePermission[];

  /**
   * <p>Removes the specified Amazon Web Services account ID or group from the list.</p>
   */
  Remove?: CreateVolumePermission[];
}

export interface ModifySnapshotAttributeRequest {
  /**
   * <p>The snapshot attribute to modify. Only volume creation permissions can be modified.</p>
   */
  Attribute?: SnapshotAttributeName | string;

  /**
   * <p>A JSON representation of the snapshot attribute modification.</p>
   */
  CreateVolumePermission?: CreateVolumePermissionModifications;

  /**
   * <p>The group to modify for the snapshot.</p>
   */
  GroupNames?: string[];

  /**
   * <p>The type of operation to perform to the attribute.</p>
   */
  OperationType?: OperationType | string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The account ID to modify for the snapshot.</p>
   */
  UserIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export enum TargetStorageTier {
  archive = "archive",
}

export interface ModifySnapshotTierRequest {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The name of the storage tier. You must specify <code>archive</code>.</p>
   */
  StorageTier?: TargetStorageTier | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifySnapshotTierResult {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The date and time when the archive process was started.</p>
   */
  TieringStartTime?: Date;
}

/**
 * <p>Contains the parameters for ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * <p>Indicates whether running Spot Instances should be terminated if the target capacity
   *             of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: ExcessCapacityTerminationPolicy | string;

  /**
   * <p>The launch template and overrides. You can only use this parameter if you specified a
   *             launch template (<code>LaunchTemplateConfigs</code>) in your Spot Fleet request. If you
   *             specified <code>LaunchSpecifications</code> in your Spot Fleet request, then omit this
   *             parameter.</p>
   */
  LaunchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId: string | undefined;

  /**
   * <p>The size of the fleet.</p>
   */
  TargetCapacity?: number;

  /**
   * <p>The number of On-Demand Instances in the fleet.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;
}

/**
 * <p>Contains the output of ModifySpotFleetRequest.</p>
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * <p>If the request succeeds, the response returns <code>true</code>. If the request fails,
   *             no response is returned, and instead an error message is returned.</p>
   */
  Return?: boolean;
}

export interface ModifySubnetAttributeRequest {
  /**
   * <p>Specify <code>true</code> to indicate that network interfaces created in the
   *             specified subnet should be assigned an IPv6 address. This includes a network interface
   *             that's created when launching an instance into the subnet (the instance therefore
   *             receives an IPv6 address). </p>
   *          <p>If you enable the IPv6 addressing feature for your subnet, your network interface
   *             or instance only receives an IPv6 address if it's created using version
   *                 <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
   */
  AssignIpv6AddressOnCreation?: AttributeBooleanValue;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the
   *             specified subnet should be assigned a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>Specify <code>true</code> to indicate that network interfaces  attached to instances created in the
   *             specified subnet should be assigned a customer-owned IPv4 address.</p>
   *          <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
   */
  MapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;

  /**
   * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
   *          <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet
   *             should return synthetic IPv6 addresses for IPv4-only destinations.</p>
   */
  EnableDns64?: AttributeBooleanValue;

  /**
   * <p>The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an
   *             instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance
   *             DNS name must be based on the instance ID (resource-name).</p>
   */
  PrivateDnsHostnameTypeOnLaunch?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue;

  /**
   * <p>
   *             Indicates the device position for local network interfaces in this subnet. For example,
   *             <code>1</code> indicates local network interfaces in this subnet are the secondary
   *             network interface (eth1). A local network interface cannot be the primary network
   *             interface (eth0).
   *         </p>
   */
  EnableLniAtDeviceIndex?: number;

  /**
   * <p>
   *             Specify <code>true</code> to indicate that local network interfaces at the current
   *             position should be disabled.
   *         </p>
   */
  DisableLniAtDeviceIndex?: AttributeBooleanValue;
}

export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The network service, for example Amazon DNS, that you want to mirror.</p>
   */
  AddNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The network service, for example Amazon DNS, that you no longer want to mirror.</p>
   */
  RemoveNetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * <p>The Traffic Mirror filter that the network service is associated with.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;
}

export enum TrafficMirrorFilterRuleField {
  description = "description",
  destination_port_range = "destination-port-range",
  protocol = "protocol",
  source_port_range = "source-port-range",
}

export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId: string | undefined;

  /**
   * <p>The type of traffic to assign to the rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action to assign to the rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The destination ports that are associated with the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The port range to assign to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example TCP, to assign to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description to assign to the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p>
   *          <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorFilterRuleField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * <p>Modifies a Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;
}

export enum TrafficMirrorSessionField {
  description = "description",
  packet_length = "packet-length",
  virtual_network_id = "virtual-network-id",
}

export interface ModifyTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId: string | undefined;

  /**
   * <p>The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID of the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description to assign to the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The properties that you want to remove from the Traffic Mirror session.</p>
   *          <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
   */
  RemoveFields?: (TrafficMirrorSessionField | string)[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;
}

/**
 * <p>The transit gateway options.</p>
 */
export interface ModifyTransitGatewayOptions {
  /**
   * <p>Adds IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  AddTransitGatewayCidrBlocks?: string[];

  /**
   * <p>Removes CIDR blocks for the transit gateway.</p>
   */
  RemoveTransitGatewayCidrBlocks?: string[];

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *             The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   *          <p>The modify ASN operation is not allowed on a transit gateway with active BGP sessions. You must first delete all transit gateway attachments that have BGP configured prior to modifying the ASN on the transit gateway.</p>
   */
  AmazonSideAsn?: number;
}

export interface ModifyTransitGatewayRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The description for the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The options to modify.</p>
   */
  Options?: ModifyTransitGatewayOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support. The default is <code>enable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>The IDs of one or more subnets to remove.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>The new VPC attachment options.</p>
   */
  Options?: ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the modified attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

/**
 * <p>Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the
 *             <code>load-balancer</code> type.</p>
 */
export interface ModifyVerifiedAccessEndpointLoadBalancerOptions {
  /**
   * <p>The IDs of the subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol | string;

  /**
   * <p>The IP port number.</p>
   */
  Port?: number;
}

/**
 * <p>Options for a network-interface type Verified Access endpoint.</p>
 */
export interface ModifyVerifiedAccessEndpointEniOptions {
  /**
   * <p>The IP protocol.</p>
   */
  Protocol?: VerifiedAccessEndpointProtocol | string;

  /**
   * <p>The IP port number.</p>
   */
  Port?: number;
}

export interface ModifyVerifiedAccessEndpointRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId?: string;

  /**
   * <p>The load balancer details if creating the Amazon Web Services Verified Access endpoint as
   *          <code>load-balancer</code>type.</p>
   */
  LoadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions;

  /**
   * <p>The network interface options.</p>
   */
  NetworkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions;

  /**
   * <p>A description for the Amazon Web Services Verified Access endpoint.</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVerifiedAccessEndpointResult {
  /**
   * <p>The Amazon Web Services Verified Access endpoint details.</p>
   */
  VerifiedAccessEndpoint?: VerifiedAccessEndpoint;
}

export interface ModifyVerifiedAccessEndpointPolicyRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access endpoint.</p>
   */
  VerifiedAccessEndpointId: string | undefined;

  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled: boolean | undefined;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVerifiedAccessEndpointPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

export interface ModifyVerifiedAccessGroupRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId?: string;

  /**
   * <p>A description for the Amazon Web Services Verified Access group.</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVerifiedAccessGroupResult {
  /**
   * <p>Details of Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroup?: VerifiedAccessGroup;
}

export interface ModifyVerifiedAccessGroupPolicyRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access group.</p>
   */
  VerifiedAccessGroupId: string | undefined;

  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled: boolean | undefined;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVerifiedAccessGroupPolicyResult {
  /**
   * <p>The status of the Verified Access policy.</p>
   */
  PolicyEnabled?: boolean;

  /**
   * <p>The Amazon Web Services Verified Access policy document.</p>
   */
  PolicyDocument?: string;
}

export interface ModifyVerifiedAccessInstanceRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access instance.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface ModifyVerifiedAccessInstanceResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
}

/**
 * <p>Options for CloudWatch Logs as a logging destination.</p>
 */
export interface VerifiedAccessLogCloudWatchLogsDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The ID of the CloudWatch Logs log group.</p>
   */
  LogGroup?: string;
}

/**
 * <p>Describes Amazon Kinesis Data Firehose logging options.</p>
 */
export interface VerifiedAccessLogKinesisDataFirehoseDestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The ID of the delivery stream.</p>
   */
  DeliveryStream?: string;
}

/**
 * <p>Options for Amazon S3 as a logging destination.</p>
 */
export interface VerifiedAccessLogS3DestinationOptions {
  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The bucket name.</p>
   */
  BucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Amazon S3 bucket.</p>
   */
  BucketOwner?: string;
}

/**
 * <p>Describes the destinations for Verified Access logs.</p>
 */
export interface VerifiedAccessLogOptions {
  /**
   * <p>Sends Verified Access logs to Amazon S3.</p>
   */
  S3?: VerifiedAccessLogS3DestinationOptions;

  /**
   * <p>Sends Verified Access logs to CloudWatch Logs.</p>
   */
  CloudWatchLogs?: VerifiedAccessLogCloudWatchLogsDestinationOptions;

  /**
   * <p>Sends Verified Access logs to Kinesis.</p>
   */
  KinesisDataFirehose?: VerifiedAccessLogKinesisDataFirehoseDestinationOptions;
}

export interface ModifyVerifiedAccessInstanceLoggingConfigurationRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   */
  VerifiedAccessInstanceId: string | undefined;

  /**
   * <p>The configuration options for Amazon Web Services Verified Access instances.</p>
   */
  AccessLogs: VerifiedAccessLogOptions | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface ModifyVerifiedAccessInstanceLoggingConfigurationResult {
  /**
   * <p>The logging configuration for Amazon Web Services Verified Access instance.</p>
   */
  LoggingConfiguration?: VerifiedAccessInstanceLoggingConfiguration;
}

/**
 * <p>OpenID Connect options for an <code>oidc</code>-type, user-identity based trust
 *          provider.</p>
 */
export interface ModifyVerifiedAccessTrustProviderOidcOptions {
  /**
   * <p>OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to a user's details. Each scope returns a specific set of user attributes.</p>
   */
  Scope?: string;
}

export interface ModifyVerifiedAccessTrustProviderRequest {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProviderId: string | undefined;

  /**
   * <p>The OpenID Connect details for an <code>oidc</code>-type, user-identity based trust provider.</p>
   */
  OidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions;

  /**
   * <p>A description for the Amazon Web Services Verified Access trust provider.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure idempotency of your
   *             modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface ModifyVerifiedAccessTrustProviderResult {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;
}

export interface ModifyVolumeRequest {
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

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or
   *       equal to the existing size of the volume.</p>
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
   *          <p>Default: The existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: The existing type is retained.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The target IOPS rate of the volume. This parameter is valid only for <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes.</p>
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
   *          <p>Default: The existing value is retained if you keep the same volume type. If you change
   *       the volume type to <code>io1</code>, <code>io2</code>, or <code>gp3</code>, the default is 3,000.</p>
   */
  Iops?: number;

  /**
   * <p>The target throughput of the volume, in MiB/s. This parameter is valid only for <code>gp3</code> volumes.
   *       The maximum value is 1,000.</p>
   *          <p>Default: The existing value is retained if the source and target volume type is <code>gp3</code>.
   *       Otherwise, the default value is 125.</p>
   *          <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   * 		volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">
   * 			Nitro-based instances</a> in the same Availability Zone. This parameter is
   * 		supported with <code>io1</code> and <code>io2</code> volumes only. For more information, see
   * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   * 			Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;
}

export interface ModifyVolumeResult {
  /**
   * <p>Information about the volume modification.</p>
   */
  VolumeModification?: VolumeModification;
}

export interface ModifyVolumeAttributeRequest {
  /**
   * <p>Indicates whether the volume should be auto-enabled for I/O operations.</p>
   */
  AutoEnableIO?: AttributeBooleanValue;

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
}

export interface ModifyVpcAttributeRequest {
  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
   */
  EnableDnsHostnames?: AttributeBooleanValue;

  /**
   * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to
   * 			the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP
   * 			address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon
   * 			provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is
   * 			not enabled.</p>
   *          <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
   */
  EnableDnsSupport?: AttributeBooleanValue;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Indicates whether Network Address Usage metrics are enabled for your VPC.</p>
   */
  EnableNetworkAddressUsageMetrics?: AttributeBooleanValue;
}

export interface ModifyVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the
   *             default policy. The default policy allows full access to the service.</p>
   */
  ResetPolicy?: boolean;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must
   *             be in valid JSON format.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to associate with the endpoint.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * <p>(Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.</p>
   */
  RemoveRouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint.
   *             For a Gateway Load Balancer endpoint, you can specify only one subnet.</p>
   */
  AddSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The IDs of the subnets from which to remove the endpoint.</p>
   */
  RemoveSubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The IDs of the security groups to associate with the network interface.</p>
   */
  AddSecurityGroupIds?: string[];

  /**
   * <p>(Interface endpoint) The IDs of the security groups to disassociate from the network interface.</p>
   */
  RemoveSecurityGroupIds?: string[];

  /**
   * <p>The IP address type for the endpoint.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The DNS options for the endpoint.</p>
   */
  DnsOptions?: DnsOptionsSpecification;

  /**
   * <p>(Interface endpoint) Indicates whether a private hosted zone is associated with the
   *             VPC.</p>
   */
  PrivateDnsEnabled?: boolean;
}

export interface ModifyVpcEndpointResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId: string | undefined;

  /**
   * <p>The ARN for the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the endpoint. Valid values are <code>Accept</code>,
   *                 <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: string[];
}

export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</p>
   */
  RemovePrivateDnsName?: boolean;

  /**
   * <p>Indicates whether requests to create an endpoint to your service must be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to add to your service
   *             configuration.</p>
   */
  AddNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveNetworkLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to your service
   *             configuration.</p>
   */
  AddGatewayLoadBalancerArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from your service
   *             configuration.</p>
   */
  RemoveGatewayLoadBalancerArns?: string[];

  /**
   * <p>The IP address types to add to your service configuration.</p>
   */
  AddSupportedIpAddressTypes?: string[];

  /**
   * <p>The IP address types to remove from your service configuration.</p>
   */
  RemoveSupportedIpAddressTypes?: string[];
}

export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ModifyVpcEndpointServicePayerResponsibilityRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The entity that is responsible for the endpoint costs. The default is the endpoint owner.
   *             If you set the payer responsibility to the service owner, you cannot set it back to the
   *             endpoint owner.</p>
   */
  PayerResponsibility: PayerResponsibility | string | undefined;
}

export interface ModifyVpcEndpointServicePayerResponsibilityResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are granted to the principals in this list.
   * 	        To grant permissions to all principals, specify an asterisk (*).</p>
   */
  AddAllowedPrincipals?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the principals.
   * 	        Permissions are revoked for principals in this list.</p>
   */
  RemoveAllowedPrincipals?: string[];
}

export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * <p>Information about the added principals.</p>
   */
  AddedPrincipals?: AddedPrincipal[];

  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
}

/**
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>The VPC peering connection options.</p>
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * <p>If true, enables a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * <p>The VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Describes the VPC peering connection options.</p>
 */
export interface PeeringConnectionOptions {
  /**
   * <p>If true, the public DNS hostnames of instances in the specified VPC resolve to private
   *             IP addresses when queried from instances in the peer VPC.</p>
   */
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from an EC2-Classic instance that's linked to
   *             a local VPC using ClassicLink to instances in a peer VPC.</p>
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>If true, enables outbound communication from instances in a local VPC to an
   *             EC2-Classic instance that's linked to a peer VPC using ClassicLink.</p>
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: PeeringConnectionOptions;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: PeeringConnectionOptions;
}

export enum VpcTenancy {
  default = "default",
}

export interface ModifyVpcTenancyRequest {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The instance tenancy attribute for the VPC. </p>
   */
  InstanceTenancy: VpcTenancy | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVpcTenancyResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an
   *             error.</p>
   */
  ReturnValue?: boolean;
}

export interface ModifyVpnConnectionRequest {
  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The ID of the virtual private gateway at the Amazon Web Services side of the VPN
   *             connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVpnConnectionResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export interface ModifyVpnConnectionOptionsRequest {
  /**
   * <p>The ID of the Site-to-Site VPN connection. </p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  LocalIpv4NetworkCidr?: string;

  /**
   * <p>The IPv4 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>0.0.0.0/0</code>
   *          </p>
   */
  RemoteIpv4NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  LocalIpv6NetworkCidr?: string;

  /**
   * <p>The IPv6 CIDR on the Amazon Web Services side of the VPN connection.</p>
   *          <p>Default: <code>::/0</code>
   *          </p>
   */
  RemoteIpv6NetworkCidr?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVpnConnectionOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export interface ModifyVpnTunnelCertificateRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVpnTunnelCertificateResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

/**
 * <p>The Amazon Web Services Site-to-Site VPN tunnel options to modify.</p>
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
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be
   *             unique across all VPN connections that use the same transit gateway.</p>
   *          <p>Constraints: A size /126 CIDR block from the local <code>fd00::/8</code> range.</p>
   */
  TunnelInsideIpv6Cidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual
   *             private gateway and the customer gateway.</p>
   *          <p>Constraints: Allowed characters are alphanumeric characters, periods (.), and
   *             underscores (_). Must be between 8 and 64 characters in length and cannot start with
   *             zero (0).</p>
   */
  PreSharedKey?: string;

  /**
   * <p>The lifetime for phase 1 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 28,800.</p>
   *          <p>Default: <code>28800</code>
   *          </p>
   */
  Phase1LifetimeSeconds?: number;

  /**
   * <p>The lifetime for phase 2 of the IKE negotiation, in seconds.</p>
   *          <p>Constraints: A value between 900 and 3,600. The value must be less than the value for
   *                 <code>Phase1LifetimeSeconds</code>.</p>
   *          <p>Default: <code>3600</code>
   *          </p>
   */
  Phase2LifetimeSeconds?: number;

  /**
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
   * <p>The percentage of the rekey window (determined by <code>RekeyMarginTimeSeconds</code>)
   *             during which the rekey time is randomly selected.</p>
   *          <p>Constraints: A value between 0 and 100.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  RekeyFuzzPercentage?: number;

  /**
   * <p>The number of packets in an IKE replay window.</p>
   *          <p>Constraints: A value between 64 and 2048.</p>
   *          <p>Default: <code>1024</code>
   *          </p>
   */
  ReplayWindowSize?: number;

  /**
   * <p>The number of seconds after which a DPD timeout occurs.</p>
   *          <p>Constraints: A value greater than or equal to 30.</p>
   *          <p>Default: <code>30</code>
   *          </p>
   */
  DPDTimeoutSeconds?: number;

  /**
   * <p>The action to take after DPD timeout occurs. Specify <code>restart</code> to restart
   *             the IKE initiation. Specify <code>clear</code> to end the IKE session.</p>
   *          <p>Valid Values: <code>clear</code> | <code>none</code> | <code>restart</code>
   *          </p>
   *          <p>Default: <code>clear</code>
   *          </p>
   */
  DPDTimeoutAction?: string;

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 1
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more encryption algorithms that are permitted for the VPN tunnel for phase 2
   *             IKE negotiations.</p>
   *          <p>Valid values: <code>AES128</code> | <code>AES256</code> | <code>AES128-GCM-16</code> |
   *                 <code>AES256-GCM-16</code>
   *          </p>
   */
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE
   *             negotiations.</p>
   *          <p>Valid values: <code>SHA1</code> | <code>SHA2-256</code> | <code>SHA2-384</code> |
   *                 <code>SHA2-512</code>
   *          </p>
   */
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * <p>One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for
   *             phase 1 IKE negotiations.</p>
   *          <p>Valid values: <code>2</code> | <code>14</code> | <code>15</code> | <code>16</code> |
   *                 <code>17</code> | <code>18</code> | <code>19</code> | <code>20</code> |
   *                 <code>21</code> | <code>22</code> | <code>23</code> | <code>24</code>
   *          </p>
   */
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];

  /**
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
   * <p>The IKE versions that are permitted for the VPN tunnel.</p>
   *          <p>Valid values: <code>ikev1</code> | <code>ikev2</code>
   *          </p>
   */
  IKEVersions?: IKEVersionsRequestListValue[];

  /**
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
   * <p>Options for logging VPN tunnel activity.</p>
   */
  LogOptions?: VpnTunnelLogOptionsSpecification;
}

export interface ModifyVpnTunnelOptionsRequest {
  /**
   * <p>The ID of the Amazon Web Services Site-to-Site VPN connection.</p>
   */
  VpnConnectionId: string | undefined;

  /**
   * <p>The external IP address of the VPN tunnel.</p>
   */
  VpnTunnelOutsideIpAddress: string | undefined;

  /**
   * <p>The tunnel options to modify.</p>
   */
  TunnelOptions: ModifyVpnTunnelOptionsSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ModifyVpnTunnelOptionsResult {
  /**
   * <p>Information about the VPN connection.</p>
   */
  VpnConnection?: VpnConnection;
}

export interface MonitorInstancesRequest {
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

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: Monitoring;
}

export interface MonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

export interface MoveAddressToVpcRequest {
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

export enum Status {
  inClassic = "InClassic",
  inVpc = "InVpc",
  moveInProgress = "MoveInProgress",
}

export interface MoveAddressToVpcResult {
  /**
   * <p>The allocation ID for the Elastic IP address.</p>
   */
  AllocationId?: string;

  /**
   * <p>The status of the move of the IP address.</p>
   */
  Status?: Status | string;
}

export interface MoveByoipCidrToIpamRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The BYOIP CIDR.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>The IPAM pool ID.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the IPAM pool.</p>
   */
  IpamPoolOwner: string | undefined;
}

export interface MoveByoipCidrToIpamResult {
  /**
   * <p>The BYOIP CIDR.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific
 *           Amazon Web Services account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Configuring your BYOIP address range</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string | undefined;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string | undefined;
}

export interface ProvisionByoipCidrRequest {
  /**
   * <p>The public IPv4 or IPv6 address range, in CIDR notation. The most specific IPv4 prefix that you can
   *          specify is /24. The most specific IPv6 prefix you can specify is /56. The address range cannot overlap with another address range that you've
   *          brought to this or another Region.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address
   *          range to Amazon using BYOIP.</p>
   */
  CidrAuthorizationContext?: CidrAuthorizationContext;

  /**
   * <p>(IPv6 only) Indicate whether the address range will be publicly advertised to the
   *             internet.</p>
   *          <p>Default: true</p>
   */
  PubliclyAdvertisable?: boolean;

  /**
   * <p>A description for the address range and the address pool.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the address pool.</p>
   */
  PoolTagSpecifications?: TagSpecification[];

  /**
   * <p>Reserved.</p>
   */
  MultiRegion?: boolean;
}

export interface ProvisionByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   */
  ByoipCidr?: ByoipCidr;
}

/**
 * <p>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</p>
 */
export interface IpamCidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message?: string;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature?: string;
}

export interface ProvisionIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool to which you want to assign a CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.</p>
   */
  Cidr?: string;

  /**
   * <p>A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option applies to public pools only.</p>
   */
  CidrAuthorizationContext?: IpamCidrAuthorizationContext;

  /**
   * <p>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.</p>
   */
  NetmaskLength?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export interface ProvisionIpamPoolCidrResult {
  /**
   * <p>Information about the provisioned CIDR.</p>
   */
  IpamPoolCidr?: IpamPoolCidr;
}

export interface ProvisionPublicIpv4PoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool you would like to use to allocate this CIDR.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The ID of the public IPv4 pool you would like to use for this CIDR.</p>
   */
  PoolId: string | undefined;

  /**
   * <p>The netmask length of the CIDR you would like to allocate to the public IPv4 pool.</p>
   */
  NetmaskLength: number | undefined;
}

export interface ProvisionPublicIpv4PoolCidrResult {
  /**
   * <p>The ID of the pool that you want to provision the CIDR to.</p>
   */
  PoolId?: string;

  /**
   * <p>Information about the address range of the public IPv4 pool.</p>
   */
  PoolAddressRange?: PublicIpv4PoolRange;
}

export interface PurchaseHostReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code>, <code>LimitPrice</code>, and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The IDs of the Dedicated Hosts with which the reservation will be associated.</p>
   */
  HostIdSet: string[] | undefined;

  /**
   * <p>The specified limit is checked against the total upfront cost of the reservation
   *             (calculated as the offering's upfront cost multiplied by the host count). If the total
   *             upfront cost is greater than the specified price limit, the request fails. This is used
   *             to ensure that the purchase does not exceed the expected upfront cost of the purchase.
   *             At this time, the only supported currency is <code>USD</code>. For example, to indicate
   *             a limit price of USD 100, specify 100.00.</p>
   */
  LimitPrice?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  OfferingId: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host Reservation during purchase.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export interface PurchaseHostReservationResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and
   *                 <code>totalHourlyPrice</code> amounts are specified. At this time, the only
   *             supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>Describes the details of the purchase.</p>
   */
  Purchase?: Purchase[];

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   */
  TotalUpfrontPrice?: string;
}

/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 */
export interface ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   */
  Amount?: number;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;
}

/**
 * <p>Contains the parameters for PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * <p>The number of Reserved Instances to purchase.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstancesOfferingId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.</p>
   */
  LimitPrice?: ReservedInstanceLimitPrice;

  /**
   * <p>The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  PurchaseTime?: Date;
}

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * <p>The IDs of the purchased Reserved Instances. If your purchase crosses into a discounted
   *       pricing tier, the final Reserved Instances IDs might change. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html#crossing-pricing-tiers">Crossing
   *         pricing tiers</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ReservedInstancesId?: string;
}

/**
 * <p>Describes a request to purchase Scheduled Instances.</p>
 */
export interface PurchaseRequest {
  /**
   * <p>The number of instances.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The purchase token.</p>
   */
  PurchaseToken: string | undefined;
}

/**
 * <p>Contains the parameters for PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesRequest {
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
   * <p>The purchase requests.</p>
   */
  PurchaseRequests: PurchaseRequest[] | undefined;
}

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: ScheduledInstance[];
}

export interface RebootInstancesRequest {
  /**
   * <p>The instance IDs.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Contains the parameters for RegisterImage.</p>
 */
export interface RegisterImageRequest {
  /**
   * <p>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the
   *    		<code>aws-exec-read</code> canned access control list (ACL) to ensure that it can be accessed
   *    		by Amazon EC2. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned ACLs</a> in the
   *    		<i>Amazon S3 Service Developer Guide</i>.</p>
   */
  ImageLocation?: string;

  /**
   * <p>The architecture of the AMI.</p>
   *          <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>.
   *         For instance store-backed AMIs, the architecture specified in the manifest file.</p>
   */
  Architecture?: ArchitectureValues | string;

  /**
   * <p>The block device mapping entries.</p>
   *          <p>If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the encryption state of the volume.</p>
   *          <p>If you create an AMI on an Outpost, then all backing snapshots must be on the same
   *       Outpost or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can
   *       be used to launch instances on the same Outpost only. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">Amazon EBS local
   *         snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for your AMI.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  EnaSupport?: boolean;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>A name for your AMI.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>The billing product codes. Your account must be authorized to specify billing product codes.</p>
   *          <p>If your account is not authorized to specify billing product codes, you can publish AMIs
   *       that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller
   *       on the Amazon Web Services Marketplace. For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/user-guide-for-sellers.html">Getting started as a
   *         seller</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html">AMI-based
   *         products</a> in the <i>Amazon Web Services Marketplace Seller Guide</i>.</p>
   */
  BillingProducts?: string[];

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: string;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI.</p>
   *          <p>There is no way to disable <code>sriovNetSupport</code> at this time.</p>
   *          <p>This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</p>
   */
  SriovNetSupport?: string;

  /**
   * <p>The type of virtualization (<code>hvm</code> | <code>paravirtual</code>).</p>
   *          <p>Default: <code>paravirtual</code>
   *          </p>
   */
  VirtualizationType?: string;

  /**
   * <p>The boot mode of the AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  BootMode?: BootModeValues | string;

  /**
   * <p>Set to <code>v2.0</code> to enable Trusted Platform Module (TPM) support. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  TpmSupport?: TpmSupportValues | string;

  /**
   * <p>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data,
   *       use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the
   *         <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
   *       GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
   *         <i>Amazon EC2 User Guide</i>.</p>
   */
  UefiData?: string;

  /**
   * <p>Set to <code>v2.0</code> to indicate that IMDSv2 is specified in the AMI. Instances
   *       launched from this AMI will have <code>HttpTokens</code> automatically set to
   *         <code>required</code> so that, by default, the instance requires that IMDSv2 is used when
   *       requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to
   *         <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure
   *         the AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <note>
   *             <p>If you set the value to <code>v2.0</code>, make sure that your AMI software can support IMDSv2.</p>
   *          </note>
   */
  ImdsSupport?: ImdsSupportValues | string;
}

/**
 * <p>Contains the output of RegisterImage.</p>
 */
export interface RegisterImageResult {
  /**
   * <p>The ID of the newly registered AMI.</p>
   */
  ImageId?: string;
}

/**
 * <p>Information about the tag keys to register for the current Region. You can either specify
 *       	individual tag keys or register all tag keys in the current Region. You must specify either
 *       	<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * <p>Indicates whether to register all tag keys in the current Region. Specify <code>true</code>
   *       	to register all tag keys.</p>
   */
  IncludeAllTagsOfInstance?: boolean;

  /**
   * <p>The tag keys to register.</p>
   */
  InstanceTagKeys?: string[];
}

export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Information about the tag keys to register.</p>
   */
  InstanceTagAttribute?: RegisterInstanceTagAttributeRequest;
}

export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * <p>The resulting set of tag keys.</p>
   */
  InstanceTagAttribute?: InstanceTagNotificationAttribute;
}

export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group members' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the registered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the registered network interfaces.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * <p>Information about the registered  transit gateway multicast group members.</p>
   */
  RegisteredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}

export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;

  /**
   * <p>The group sources' network interface IDs to register with the  transit gateway multicast group.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

/**
 * <p>Describes the members registered with the  transit gateway multicast group.</p>
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The IDs of the network interfaces members registered with the  transit gateway multicast group.</p>
   */
  RegisteredNetworkInterfaceIds?: string[];

  /**
   * <p>The IP address assigned to the  transit gateway multicast group.</p>
   */
  GroupIpAddress?: string;
}

export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * <p>Information about the  transit gateway multicast group sources.</p>
   */
  RegisteredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;
}

export interface RejectTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface RejectTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
}

export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export interface RejectTransitGatewayVpcAttachmentRequest {
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
}

export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export interface RejectVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of the VPC endpoints.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export interface RejectVpcEndpointConnectionsResult {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface RejectVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC peering connection.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export interface RejectVpcPeeringConnectionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export interface ReleaseAddressRequest {
  /**
   * <p>[EC2-VPC] The allocation ID. Required for EC2-VPC.</p>
   */
  AllocationId?: string;

  /**
   * <p>[EC2-Classic] The Elastic IP address. Required for EC2-Classic.</p>
   */
  PublicIp?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   *          <p>If you provide an incorrect network border group, you receive an <code>InvalidAddress.NotFound</code> error.</p>
   *          <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you
   *       receive an <code>InvalidParameterCombination</code> error.</p>
   */
  NetworkBorderGroup?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ReleaseHostsRequest {
  /**
   * <p>The IDs of the Dedicated Hosts to release.</p>
   */
  HostIds: string[] | undefined;
}

export interface ReleaseHostsResult {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   */
  Successful?: string[];

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error
   *             message.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export interface ReleaseIpamPoolAllocationRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the IPAM pool which contains the allocation you want to release.</p>
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR of the allocation you want to release.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>The ID of the allocation.</p>
   */
  IpamPoolAllocationId: string | undefined;
}

export interface ReleaseIpamPoolAllocationResult {
  /**
   * <p>Indicates if the release was successful.</p>
   */
  Success?: boolean;
}

export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the existing IAM instance profile association.</p>
   */
  AssociationId: string | undefined;
}

export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}

export interface ReplaceNetworkAclAssociationRequest {
  /**
   * <p>The ID of the current association between the original network ACL and the subnet.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new network ACL to associate with the subnet.</p>
   */
  NetworkAclId: string | undefined;
}

export interface ReplaceNetworkAclAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;
}

export interface ReplaceNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   *                 <code>172.16.0.0/24</code>).</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to replace the egress rule.</p>
   *          <p>Default: If no value is specified, we replace the ingress rule.</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:bd8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *            protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   *            allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   *            protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   *            codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   *            and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number of the entry to replace.</p>
   */
  RuleNumber: number | undefined;
}

export interface ReplaceRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR address block used for the destination match. The value that you
   * 			provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>Specifies whether to reset the local route to its default target (<code>local</code>).</p>
   */
  LocalTarget?: boolean;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export interface ReplaceRouteTableAssociationRequest {
  /**
   * <p>The association ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: string | undefined;
}

export interface ReplaceRouteTableAssociationResult {
  /**
   * <p>The ID of the new association.</p>
   */
  NewAssociationId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export interface ReplaceTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether traffic matching this route is to be dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ReplaceTransitGatewayRouteResult {
  /**
   * <p>Information about the modified route.</p>
   */
  Route?: TransitGatewayRoute;
}

export enum ReportInstanceReasonCodes {
  instance_stuck_in_state = "instance-stuck-in-state",
  not_accepting_credentials = "not-accepting-credentials",
  other = "other",
  password_not_available = "password-not-available",
  performance_ebs_volume = "performance-ebs-volume",
  performance_instance_store = "performance-instance-store",
  performance_network = "performance-network",
  performance_other = "performance-other",
  unresponsive = "unresponsive",
}

export enum ReportStatusType {
  impaired = "impaired",
  ok = "ok",
}

export interface ReportInstanceStatusRequest {
  /**
   * <p>Descriptive text about the health state of your instance.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The instances.</p>
   */
  Instances: string[] | undefined;

  /**
   * <p>The reason codes that describe the health state of your instance.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unresponsive</code>: My instance is unresponsive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>not-accepting-credentials</code>: My instance is not accepting my
   *                     credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>password-not-available</code>: A password is not available for my
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-network</code>: My instance is experiencing performance
   *                     problems that I believe are network related.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-instance-store</code>: My instance is experiencing performance
   *                     problems that I believe are related to the instance stores.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-ebs-volume</code>: My instance is experiencing performance
   *                     problems that I believe are related to an EBS volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>performance-other</code>: My instance is experiencing performance
   *                     problems.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>other</code>: [explain using the description parameter]</p>
   *             </li>
   *          </ul>
   */
  ReasonCodes: (ReportInstanceReasonCodes | string)[] | undefined;

  /**
   * <p>The time at which the reported instance health state began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of all instances listed.</p>
   */
  Status: ReportStatusType | string | undefined;
}

/**
 * <p>Contains the parameters for RequestSpotFleet.</p>
 */
export interface RequestSpotFleetRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The configuration for the Spot Fleet request.</p>
   */
  SpotFleetRequestConfig: SpotFleetRequestConfigData | undefined;
}

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 */
export interface RequestSpotFleetResponse {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;
}

/**
 * <p>Describes the launch specification for an instance.</p>
 */
export interface RequestSpotLaunchSpecification {
  /**
   * <p>One or more security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Deprecated.</p>
   */
  AddressingType?: string;

  /**
   * <p>One or more block device mapping entries. You can't specify both a snapshot ID and an encryption value.
   *            This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume,
   *            it is not blank and its encryption status is used for the volume encryption status.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Indicates whether the instance is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. Only one instance type can be specified.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Indicates whether basic or detailed monitoring is enabled for the instance.</p>
   *          <p>Default: Disabled</p>
   */
  Monitoring?: RunInstancesMonitoringEnabled;

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *            subnet IDs and security group IDs using the network interface.</p>
   */
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * <p>The placement information for the instance.</p>
   */
  Placement?: SpotPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The ID of the subnet in which to launch the instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Base64-encoded user data for the instance. User data is limited to 16 KB.</p>
   */
  UserData?: string;
}

/**
 * <p>Contains the parameters for RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesRequest {
  /**
   * <p>The user-specified name for a logical grouping of requests.</p>
   *          <p>When you specify an Availability Zone group in a Spot Instance request, all Spot
   *             Instances in the request are launched in the same Availability Zone. Instance proximity
   *             is maintained with this parameter, but the choice of Availability Zone is not. The group
   *             applies only to requests for Spot Instances of the same instance type. Any additional
   *             Spot Instance requests that are specified with the same Availability Zone group name are
   *             launched in that same Availability Zone, as long as at least one instance from the group
   *             is still active.</p>
   *          <p>If there is no active instance running in the Availability Zone group that you specify
   *             for a new Spot Instance request (all instances are terminated, the request is expired,
   *             or the maximum price you specified falls below current Spot price), then Amazon EC2 launches
   *             the instance in any Availability Zone where the constraint can be met. Consequently, the
   *             subsequent set of Spot Instances could be placed in a different zone from the original
   *             request, even if you specified the same Availability Zone group.</p>
   *          <p>Default: Instances are launched in any available Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>Deprecated.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
   *                 Idempotency</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of Spot Instances to launch.</p>
   *          <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and
   *             terminate together.</p>
   *          <p>Default: Instances are launched and terminated individually</p>
   */
  LaunchGroup?: string;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: RequestSpotLaunchSpecification;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend
   *             using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</p>
   *          </important>
   */
  SpotPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   *          <p>Default: <code>one-time</code>
   *          </p>
   */
  Type?: SpotInstanceType | string;

  /**
   * <p>The start date of the request. If this is a one-time request, the request becomes
   *             active at this date and time and remains active until all instances launch, the request
   *             expires, or the request is canceled. If the request is persistent, the request becomes
   *             active at this date and time and remains active until it expires or is canceled.</p>
   *          <p>The specified start date and time cannot be equal to the current date and time. You
   *             must specify a start date and time that occurs after the current date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format
   *                 (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it. </p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, the request remains active until all instances launch,
   *                     the request is canceled, or the <code>ValidUntil</code> date and time is
   *                     reached. By default, the request is valid for 7 days from the date the request
   *                     was created.</p>
   *             </li>
   *          </ul>
   */
  ValidUntil?: Date;

  /**
   * <p>The key-value pair for tagging the Spot Instance request on creation. The value for
   *             <code>ResourceType</code> must be <code>spot-instances-request</code>, otherwise the
   *             Spot Instance request fails. To tag the Spot Instance request after it has been created,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

/**
 * <p>Contains the output of RequestSpotInstances.</p>
 */
export interface RequestSpotInstancesResult {
  /**
   * <p>One or more Spot Instance requests.</p>
   */
  SpotInstanceRequests?: SpotInstanceRequest[];
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

export interface ResetAddressAttributeResult {
  /**
   * <p>Information about the IP address.</p>
   */
  Address?: AddressAttribute;
}

export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the default KMS key for EBS encryption by default.</p>
   */
  KmsKeyId?: string;
}

export enum ResetFpgaImageAttributeName {
  loadPermission = "loadPermission",
}

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

export interface ResetFpgaImageAttributeResult {
  /**
   * <p>Is <code>true</code> if the request succeeds, and an error otherwise.</p>
   */
  Return?: boolean;
}

export enum ResetImageAttributeName {
  launchPermission = "launchPermission",
}

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

export interface ResetInstanceAttributeRequest {
  /**
   * <p>The attribute to reset.</p>
   *          <important>
   *             <p>You can only reset the following attributes: <code>kernel</code> |
   *                     <code>ramdisk</code> | <code>sourceDestCheck</code>.</p>
   *          </important>
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

export interface RestoreImageFromRecycleBinResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
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

export interface RestoreManagedPrefixListVersionResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
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

export interface RevokeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: ClientVpnAuthorizationRuleStatus;
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

export interface RevokeSecurityGroupIngressRequest {
  /**
   * <p>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</p>
   */
  CidrIp?: string;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the type number. A value of -1 indicates all ICMP types.</p>
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
   *             security group ID or the security group name in the request. For security groups in a
   *             nondefault VPC, you must specify the security group ID.</p>
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
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *          If the protocol is ICMP, this is the code. A value of -1 indicates all ICMP codes.</p>
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
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface SpotMarketOptions {
  /**
   * <p>The maximum hourly price that you're willing to pay for a Spot Instance. We do not
   *             recommend using this parameter because it can lead to increased interruptions. If you do
   *             not specify this parameter, you will pay the current Spot price.</p>
   *          <important>
   *             <p>If you specify a maximum price, your Spot Instances will be interrupted more
   *                 frequently than if you do not specify this parameter.</p>
   *          </important>
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
   *          <ul>
   *             <li>
   *                <p>For a persistent request, the request remains active until the
   *                         <code>ValidUntil</code> date and time is reached. Otherwise, the request
   *                     remains active until you cancel it.</p>
   *             </li>
   *             <li>
   *                <p>For a one-time request, <code>ValidUntil</code> is not supported. The request
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

/**
 * <p>The launch template to use. You must specify either the launch template ID or launch
 *             template name in the request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateId</code> or the
   *                 <code>LaunchTemplateName</code>, but not both.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify the <code>LaunchTemplateName</code> or the
   *                 <code>LaunchTemplateId</code>, but not both.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The launch template version number, <code>$Latest</code>, or
   *             <code>$Default</code>.</p>
   *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch
   *             template.</p>
   *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the
   *             launch template.</p>
   *          <p>Default: The default version of the launch template.</p>
   */
  Version?: string;
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

/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code>
   *             (in other words, set the use of IMDSv2 to <code>optional</code>) or
   *                 <code>required</code> (in other words, set the use of IMDSv2 to
   *                 <code>required</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without
   *             a session token in your request. If you retrieve the IAM role credentials
   *             without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials
   *             using a valid session token, the IMDSv2 role credentials are returned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>required</code> - When IMDSv2 is required, you must send a session token
   *             with any instance metadata retrieval requests. In this state, retrieving the IAM role
   *             credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>optional</code>
   *          </p>
   */
  HttpTokens?: HttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>Enables or disables the HTTP metadata endpoint on your instances.</p>
   *          <p>If you specify a value of <code>disabled</code>, you cannot access your instance
   *             metadata.</p>
   *          <p>Default: <code>enabled</code>
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
   *          <p>Default: <code>disabled</code>
   *          </p>
   */
  InstanceMetadataTags?: InstanceMetadataTagsState | string;
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
   *          <p>Default: <code>m1.small</code>
   *          </p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>[EC2-VPC] The number of IPv6 addresses to associate with the primary network
   *             interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You
   *             cannot specify this option and the option to assign specific IPv6 addresses in the same
   *             request. You can specify this option if you've specified a minimum number of instances
   *             to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the
   *             primary network interface. You cannot specify this option and the option to assign a
   *             number of IPv6 addresses in the same request. You cannot specify this option if you've
   *             specified a minimum number of instances to launch.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
   *             request.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the kernel.</p>
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *          <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *          </important>
   */
  KeyName?: string;

  /**
   * <p>The maximum number of instances to launch. If you specify more instances than Amazon
   *             EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible
   *             number of instances above <code>MinCount</code>.</p>
   *          <p>Constraints: Between 1 and the maximum number you're allowed for the specified
   *             instance type. For more information about the default limits, and how to request an
   *             increase, see <a href="http://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2">How many instances can I
   *                 run in Amazon EC2</a> in the Amazon EC2 FAQ.</p>
   */
  MaxCount: number | undefined;

  /**
   * <p>The minimum number of instances to launch. If you specify a minimum that is more
   *             instances than Amazon EC2 can launch in the target Availability Zone, Amazon EC2
   *             launches no instances.</p>
   *          <p>Constraints: Between 1 and the maximum number you're allowed for the specified
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
   *          <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">PV-GRUB</a> in the
   *                     <i>Amazon EC2 User Guide</i>.</p>
   *          </important>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] The names of the security groups.</p>
   *          <p>If you specify a network interface, you must specify any security groups as part of
   *             the network interface.</p>
   *          <p>Default: Amazon EC2 uses the default security group.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>[EC2-VPC] The ID of the subnet to launch the instance into.</p>
   *          <p>If you specify a network interface, you must specify any subnets as part of the
   *             network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user data script to make available to the instance. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Run
   *                 commands on your Linux instance at launch</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-windows-user-data.html">Run commands on your
   *                 Windows instance at launch</a>. If you are using a command line tool,
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *          <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *             the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after
   *             launch, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>. Alternatively, if you set
   *                 <code>InstanceInitiatedShutdownBehavior</code> to <code>terminate</code>, you can
   *             terminate the instance by running the shutdown command from the instance.</p>
   *          <p>Default: <code>false</code>
   *          </p>
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
   *          <p>Default: <code>false</code>
   *          </p>
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
   *          <p>Default: <code>stop</code>
   *          </p>
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
   *          <p>Only one private IP address can be designated as primary. You can't specify this
   *             option if you've specified the option to designate a private IP address as the primary
   *             IP address in a network interface specification. You cannot specify this option if
   *             you're launching more than one instance in the request.</p>
   *          <p>You cannot specify this option and the network interfaces option in the same
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
   *          <p>You cannot specify accelerators from different generations in the same request.</p>
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * <p>The tags to apply to the resources that are created during instance launch.</p>
   *          <p>You can specify tags for the following resources only:</p>
   *          <ul>
   *             <li>
   *                <p>Instances</p>
   *             </li>
   *             <li>
   *                <p>Volumes</p>
   *             </li>
   *             <li>
   *                <p>Elastic graphics</p>
   *             </li>
   *             <li>
   *                <p>Spot Instance requests</p>
   *             </li>
   *             <li>
   *                <p>Network interfaces</p>
   *             </li>
   *          </ul>
   *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
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
   *          <p>For <a>RunInstances</a>, persistent Spot Instance requests are
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
   *          <p>Default: <code>standard</code> (T2 instances) or <code>unlimited</code> (T3/T3a/T4g
   *             instances)</p>
   *          <p>For T3 instances with <code>host</code> tenancy, only <code>standard</code> is
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
   *          <p>You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same
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
   *          <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same
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

  /**
   * <p>Indicates whether an instance is enabled for stop protection. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection">Stop
   *                 protection</a>. </p>
   */
  DisableApiStop?: boolean;
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
   *          <p>This parameter is valid only for Provisioned IOPS SSD (<code>io1</code> and <code>io2</code>) volumes.</p>
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

/**
 * <p>Describes whether monitoring is enabled for a Scheduled Instance.</p>
 */
export interface ScheduledInstancesMonitoring {
  /**
   * <p>Indicates whether monitoring is enabled.</p>
   */
  Enabled?: boolean;
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

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesResult {
  /**
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: string[];
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

export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

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

export enum MembershipType {
  igmp = "igmp",
  static = "static",
}

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

export interface StartInstancesResult {
  /**
   * <p>Information about the started instances.</p>
   */
  StartingInstances?: InstanceStateChange[];
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

export interface StartNetworkInsightsAccessScopeAnalysisResult {
  /**
   * <p>The Network Access Scope analysis.</p>
   */
  NetworkInsightsAccessScopeAnalysis?: NetworkInsightsAccessScopeAnalysis;
}

export interface StartNetworkInsightsAnalysisRequest {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId: string | undefined;

  /**
   * <p>The member accounts that contain resources that the path can traverse.</p>
   */
  AdditionalAccounts?: string[];

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

export interface StartNetworkInsightsAnalysisResult {
  /**
   * <p>Information about the network insights analysis.</p>
   */
  NetworkInsightsAnalysis?: NetworkInsightsAnalysis;
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

export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  ReturnValue?: boolean;
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
   *          <p> Default: <code>false</code>
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
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Force?: boolean;
}

export interface StopInstancesResult {
  /**
   * <p>Information about the stopped instances.</p>
   */
  StoppingInstances?: InstanceStateChange[];
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

export interface TerminateInstancesRequest {
  /**
   * <p>The IDs of the instances.</p>
   *          <p>Constraints: Up to 1000 instance IDs. We recommend breaking up this request into
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

export interface TerminateInstancesResult {
  /**
   * <p>Information about the terminated instances.</p>
   */
  TerminatingInstances?: InstanceStateChange[];
}

export interface UnassignIpv6AddressesRequest {
  /**
   * <p>The IPv6 addresses to unassign from the network interface.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The IPv6 prefixes to unassign from the network interface.</p>
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;
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

/**
 * <p>Contains the parameters for UnassignPrivateIpAddresses.</p>
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The secondary private IP addresses to unassign from the network interface. You can specify this
   *         	option multiple times to unassign more than one IP address.</p>
   */
  PrivateIpAddresses?: string[];

  /**
   * <p>The IPv4 prefixes to unassign from  the network interface.</p>
   */
  Ipv4Prefixes?: string[];
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

export interface UnmonitorInstancesResult {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: InstanceMonitoring[];
}

/**
 * <p>Describes the description of a security group rule.</p>
 *          <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
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

export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   */
  Return?: boolean;
}

/**
 * @internal
 */
export const ModifyClientVpnEndpointRequestFilterSensitiveLog = (obj: ModifyClientVpnEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClientVpnEndpointResultFilterSensitiveLog = (obj: ModifyClientVpnEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyDefaultCreditSpecificationRequestFilterSensitiveLog = (
  obj: ModifyDefaultCreditSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyDefaultCreditSpecificationResultFilterSensitiveLog = (
  obj: ModifyDefaultCreditSpecificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyEbsDefaultKmsKeyIdRequestFilterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyEbsDefaultKmsKeyIdResultFilterSensitiveLog = (obj: ModifyEbsDefaultKmsKeyIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyFleetRequestFilterSensitiveLog = (obj: ModifyFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyFleetResultFilterSensitiveLog = (obj: ModifyFleetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadPermissionRequestFilterSensitiveLog = (obj: LoadPermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadPermissionModificationsFilterSensitiveLog = (obj: LoadPermissionModifications): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyFpgaImageAttributeRequestFilterSensitiveLog = (obj: ModifyFpgaImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyFpgaImageAttributeResultFilterSensitiveLog = (obj: ModifyFpgaImageAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHostsRequestFilterSensitiveLog = (obj: ModifyHostsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHostsResultFilterSensitiveLog = (obj: ModifyHostsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIdentityIdFormatRequestFilterSensitiveLog = (obj: ModifyIdentityIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIdFormatRequestFilterSensitiveLog = (obj: ModifyIdFormatRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchPermissionModificationsFilterSensitiveLog = (obj: LaunchPermissionModifications): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyImageAttributeRequestFilterSensitiveLog = (obj: ModifyImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsInstanceBlockDeviceSpecificationFilterSensitiveLog = (
  obj: EbsInstanceBlockDeviceSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceBlockDeviceMappingSpecificationFilterSensitiveLog = (
  obj: InstanceBlockDeviceMappingSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlobAttributeValueFilterSensitiveLog = (obj: BlobAttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceAttributeRequestFilterSensitiveLog = (obj: ModifyInstanceAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityReservationSpecificationFilterSensitiveLog = (obj: CapacityReservationSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceCapacityReservationAttributesRequestFilterSensitiveLog = (
  obj: ModifyInstanceCapacityReservationAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceCapacityReservationAttributesResultFilterSensitiveLog = (
  obj: ModifyInstanceCapacityReservationAttributesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCreditSpecificationRequestFilterSensitiveLog = (obj: InstanceCreditSpecificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceCreditSpecificationRequestFilterSensitiveLog = (
  obj: ModifyInstanceCreditSpecificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessfulInstanceCreditSpecificationItemFilterSensitiveLog = (
  obj: SuccessfulInstanceCreditSpecificationItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsuccessfulInstanceCreditSpecificationItemErrorFilterSensitiveLog = (
  obj: UnsuccessfulInstanceCreditSpecificationItemError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsuccessfulInstanceCreditSpecificationItemFilterSensitiveLog = (
  obj: UnsuccessfulInstanceCreditSpecificationItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceCreditSpecificationResultFilterSensitiveLog = (
  obj: ModifyInstanceCreditSpecificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceEventStartTimeRequestFilterSensitiveLog = (
  obj: ModifyInstanceEventStartTimeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceEventStartTimeResultFilterSensitiveLog = (obj: ModifyInstanceEventStartTimeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceEventWindowRequestFilterSensitiveLog = (obj: ModifyInstanceEventWindowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceEventWindowResultFilterSensitiveLog = (obj: ModifyInstanceEventWindowResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceMaintenanceOptionsRequestFilterSensitiveLog = (
  obj: ModifyInstanceMaintenanceOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceMaintenanceOptionsResultFilterSensitiveLog = (
  obj: ModifyInstanceMaintenanceOptionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceMetadataOptionsRequestFilterSensitiveLog = (
  obj: ModifyInstanceMetadataOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstanceMetadataOptionsResultFilterSensitiveLog = (
  obj: ModifyInstanceMetadataOptionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstancePlacementRequestFilterSensitiveLog = (obj: ModifyInstancePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyInstancePlacementResultFilterSensitiveLog = (obj: ModifyInstancePlacementResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveIpamOperatingRegionFilterSensitiveLog = (obj: RemoveIpamOperatingRegion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamRequestFilterSensitiveLog = (obj: ModifyIpamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamResultFilterSensitiveLog = (obj: ModifyIpamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamPoolRequestFilterSensitiveLog = (obj: ModifyIpamPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamPoolResultFilterSensitiveLog = (obj: ModifyIpamPoolResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamResourceCidrRequestFilterSensitiveLog = (obj: ModifyIpamResourceCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamResourceCidrResultFilterSensitiveLog = (obj: ModifyIpamResourceCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamResourceDiscoveryRequestFilterSensitiveLog = (obj: ModifyIpamResourceDiscoveryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamResourceDiscoveryResultFilterSensitiveLog = (obj: ModifyIpamResourceDiscoveryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamScopeRequestFilterSensitiveLog = (obj: ModifyIpamScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyIpamScopeResultFilterSensitiveLog = (obj: ModifyIpamScopeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLaunchTemplateRequestFilterSensitiveLog = (obj: ModifyLaunchTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLaunchTemplateResultFilterSensitiveLog = (obj: ModifyLaunchTemplateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLocalGatewayRouteRequestFilterSensitiveLog = (obj: ModifyLocalGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLocalGatewayRouteResultFilterSensitiveLog = (obj: ModifyLocalGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemovePrefixListEntryFilterSensitiveLog = (obj: RemovePrefixListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyManagedPrefixListRequestFilterSensitiveLog = (obj: ModifyManagedPrefixListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyManagedPrefixListResultFilterSensitiveLog = (obj: ModifyManagedPrefixListResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceAttachmentChangesFilterSensitiveLog = (obj: NetworkInterfaceAttachmentChanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyNetworkInterfaceAttributeRequestFilterSensitiveLog = (
  obj: ModifyNetworkInterfaceAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyPrivateDnsNameOptionsRequestFilterSensitiveLog = (obj: ModifyPrivateDnsNameOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyPrivateDnsNameOptionsResultFilterSensitiveLog = (obj: ModifyPrivateDnsNameOptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReservedInstancesRequestFilterSensitiveLog = (obj: ModifyReservedInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReservedInstancesResultFilterSensitiveLog = (obj: ModifyReservedInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleRequestFilterSensitiveLog = (obj: SecurityGroupRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleUpdateFilterSensitiveLog = (obj: SecurityGroupRuleUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySecurityGroupRulesRequestFilterSensitiveLog = (obj: ModifySecurityGroupRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySecurityGroupRulesResultFilterSensitiveLog = (obj: ModifySecurityGroupRulesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumePermissionModificationsFilterSensitiveLog = (
  obj: CreateVolumePermissionModifications
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotAttributeRequestFilterSensitiveLog = (obj: ModifySnapshotAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotTierRequestFilterSensitiveLog = (obj: ModifySnapshotTierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotTierResultFilterSensitiveLog = (obj: ModifySnapshotTierResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySpotFleetRequestRequestFilterSensitiveLog = (obj: ModifySpotFleetRequestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySpotFleetRequestResponseFilterSensitiveLog = (obj: ModifySpotFleetRequestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySubnetAttributeRequestFilterSensitiveLog = (obj: ModifySubnetAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorFilterNetworkServicesRequestFilterSensitiveLog = (
  obj: ModifyTrafficMirrorFilterNetworkServicesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorFilterNetworkServicesResultFilterSensitiveLog = (
  obj: ModifyTrafficMirrorFilterNetworkServicesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorFilterRuleRequestFilterSensitiveLog = (
  obj: ModifyTrafficMirrorFilterRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorFilterRuleResultFilterSensitiveLog = (
  obj: ModifyTrafficMirrorFilterRuleResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorSessionRequestFilterSensitiveLog = (obj: ModifyTrafficMirrorSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTrafficMirrorSessionResultFilterSensitiveLog = (obj: ModifyTrafficMirrorSessionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayOptionsFilterSensitiveLog = (obj: ModifyTransitGatewayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayRequestFilterSensitiveLog = (obj: ModifyTransitGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayResultFilterSensitiveLog = (obj: ModifyTransitGatewayResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayPrefixListReferenceRequestFilterSensitiveLog = (
  obj: ModifyTransitGatewayPrefixListReferenceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayPrefixListReferenceResultFilterSensitiveLog = (
  obj: ModifyTransitGatewayPrefixListReferenceResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayVpcAttachmentRequestOptionsFilterSensitiveLog = (
  obj: ModifyTransitGatewayVpcAttachmentRequestOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: ModifyTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: ModifyTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointLoadBalancerOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessEndpointLoadBalancerOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointEniOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessEndpointEniOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessEndpointRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointResultFilterSensitiveLog = (obj: ModifyVerifiedAccessEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointPolicyRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessEndpointPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessEndpointPolicyResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessEndpointPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessGroupRequestFilterSensitiveLog = (obj: ModifyVerifiedAccessGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessGroupResultFilterSensitiveLog = (obj: ModifyVerifiedAccessGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessGroupPolicyRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessGroupPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessGroupPolicyResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessGroupPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessInstanceRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessInstanceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessInstanceResultFilterSensitiveLog = (obj: ModifyVerifiedAccessInstanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifiedAccessLogCloudWatchLogsDestinationOptionsFilterSensitiveLog = (
  obj: VerifiedAccessLogCloudWatchLogsDestinationOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifiedAccessLogKinesisDataFirehoseDestinationOptionsFilterSensitiveLog = (
  obj: VerifiedAccessLogKinesisDataFirehoseDestinationOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifiedAccessLogS3DestinationOptionsFilterSensitiveLog = (
  obj: VerifiedAccessLogS3DestinationOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifiedAccessLogOptionsFilterSensitiveLog = (obj: VerifiedAccessLogOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessInstanceLoggingConfigurationRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessInstanceLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessInstanceLoggingConfigurationResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessInstanceLoggingConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderOidcOptionsFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderOidcOptions
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: ModifyVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVolumeRequestFilterSensitiveLog = (obj: ModifyVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVolumeResultFilterSensitiveLog = (obj: ModifyVolumeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVolumeAttributeRequestFilterSensitiveLog = (obj: ModifyVolumeAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcAttributeRequestFilterSensitiveLog = (obj: ModifyVpcAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointRequestFilterSensitiveLog = (obj: ModifyVpcEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointResultFilterSensitiveLog = (obj: ModifyVpcEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointConnectionNotificationRequestFilterSensitiveLog = (
  obj: ModifyVpcEndpointConnectionNotificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointConnectionNotificationResultFilterSensitiveLog = (
  obj: ModifyVpcEndpointConnectionNotificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServiceConfigurationRequestFilterSensitiveLog = (
  obj: ModifyVpcEndpointServiceConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServiceConfigurationResultFilterSensitiveLog = (
  obj: ModifyVpcEndpointServiceConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServicePayerResponsibilityRequestFilterSensitiveLog = (
  obj: ModifyVpcEndpointServicePayerResponsibilityRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServicePayerResponsibilityResultFilterSensitiveLog = (
  obj: ModifyVpcEndpointServicePayerResponsibilityResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServicePermissionsRequestFilterSensitiveLog = (
  obj: ModifyVpcEndpointServicePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcEndpointServicePermissionsResultFilterSensitiveLog = (
  obj: ModifyVpcEndpointServicePermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PeeringConnectionOptionsRequestFilterSensitiveLog = (obj: PeeringConnectionOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcPeeringConnectionOptionsRequestFilterSensitiveLog = (
  obj: ModifyVpcPeeringConnectionOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PeeringConnectionOptionsFilterSensitiveLog = (obj: PeeringConnectionOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcPeeringConnectionOptionsResultFilterSensitiveLog = (
  obj: ModifyVpcPeeringConnectionOptionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcTenancyRequestFilterSensitiveLog = (obj: ModifyVpcTenancyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpcTenancyResultFilterSensitiveLog = (obj: ModifyVpcTenancyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnConnectionRequestFilterSensitiveLog = (obj: ModifyVpnConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnConnectionResultFilterSensitiveLog = (obj: ModifyVpnConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnConnectionOptionsRequestFilterSensitiveLog = (obj: ModifyVpnConnectionOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnConnectionOptionsResultFilterSensitiveLog = (obj: ModifyVpnConnectionOptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnTunnelCertificateRequestFilterSensitiveLog = (obj: ModifyVpnTunnelCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnTunnelCertificateResultFilterSensitiveLog = (obj: ModifyVpnTunnelCertificateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsSpecificationFilterSensitiveLog = (
  obj: ModifyVpnTunnelOptionsSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsRequestFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyVpnTunnelOptionsResultFilterSensitiveLog = (obj: ModifyVpnTunnelOptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitorInstancesRequestFilterSensitiveLog = (obj: MonitorInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMonitoringFilterSensitiveLog = (obj: InstanceMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitorInstancesResultFilterSensitiveLog = (obj: MonitorInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MoveAddressToVpcRequestFilterSensitiveLog = (obj: MoveAddressToVpcRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MoveAddressToVpcResultFilterSensitiveLog = (obj: MoveAddressToVpcResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MoveByoipCidrToIpamRequestFilterSensitiveLog = (obj: MoveByoipCidrToIpamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MoveByoipCidrToIpamResultFilterSensitiveLog = (obj: MoveByoipCidrToIpamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CidrAuthorizationContextFilterSensitiveLog = (obj: CidrAuthorizationContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionByoipCidrRequestFilterSensitiveLog = (obj: ProvisionByoipCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionByoipCidrResultFilterSensitiveLog = (obj: ProvisionByoipCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpamCidrAuthorizationContextFilterSensitiveLog = (obj: IpamCidrAuthorizationContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionIpamPoolCidrRequestFilterSensitiveLog = (obj: ProvisionIpamPoolCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionIpamPoolCidrResultFilterSensitiveLog = (obj: ProvisionIpamPoolCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionPublicIpv4PoolCidrRequestFilterSensitiveLog = (obj: ProvisionPublicIpv4PoolCidrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionPublicIpv4PoolCidrResultFilterSensitiveLog = (obj: ProvisionPublicIpv4PoolCidrResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseHostReservationRequestFilterSensitiveLog = (obj: PurchaseHostReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseHostReservationResultFilterSensitiveLog = (obj: PurchaseHostReservationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceLimitPriceFilterSensitiveLog = (obj: ReservedInstanceLimitPrice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstancesOfferingRequestFilterSensitiveLog = (
  obj: PurchaseReservedInstancesOfferingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstancesOfferingResultFilterSensitiveLog = (
  obj: PurchaseReservedInstancesOfferingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseRequestFilterSensitiveLog = (obj: PurchaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseScheduledInstancesRequestFilterSensitiveLog = (obj: PurchaseScheduledInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseScheduledInstancesResultFilterSensitiveLog = (obj: PurchaseScheduledInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootInstancesRequestFilterSensitiveLog = (obj: RebootInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterImageRequestFilterSensitiveLog = (obj: RegisterImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterImageResultFilterSensitiveLog = (obj: RegisterImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterInstanceTagAttributeRequestFilterSensitiveLog = (
  obj: RegisterInstanceTagAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterInstanceEventNotificationAttributesRequestFilterSensitiveLog = (
  obj: RegisterInstanceEventNotificationAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterInstanceEventNotificationAttributesResultFilterSensitiveLog = (
  obj: RegisterInstanceEventNotificationAttributesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayMulticastGroupMembersRequestFilterSensitiveLog = (
  obj: RegisterTransitGatewayMulticastGroupMembersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastRegisteredGroupMembersFilterSensitiveLog = (
  obj: TransitGatewayMulticastRegisteredGroupMembers
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayMulticastGroupMembersResultFilterSensitiveLog = (
  obj: RegisterTransitGatewayMulticastGroupMembersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayMulticastGroupSourcesRequestFilterSensitiveLog = (
  obj: RegisterTransitGatewayMulticastGroupSourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastRegisteredGroupSourcesFilterSensitiveLog = (
  obj: TransitGatewayMulticastRegisteredGroupSources
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTransitGatewayMulticastGroupSourcesResultFilterSensitiveLog = (
  obj: RegisterTransitGatewayMulticastGroupSourcesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog = (
  obj: RejectTransitGatewayMulticastDomainAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog = (
  obj: RejectTransitGatewayMulticastDomainAssociationsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayPeeringAttachmentRequestFilterSensitiveLog = (
  obj: RejectTransitGatewayPeeringAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayPeeringAttachmentResultFilterSensitiveLog = (
  obj: RejectTransitGatewayPeeringAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayVpcAttachmentRequestFilterSensitiveLog = (
  obj: RejectTransitGatewayVpcAttachmentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectTransitGatewayVpcAttachmentResultFilterSensitiveLog = (
  obj: RejectTransitGatewayVpcAttachmentResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectVpcEndpointConnectionsRequestFilterSensitiveLog = (
  obj: RejectVpcEndpointConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectVpcEndpointConnectionsResultFilterSensitiveLog = (obj: RejectVpcEndpointConnectionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectVpcPeeringConnectionRequestFilterSensitiveLog = (obj: RejectVpcPeeringConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectVpcPeeringConnectionResultFilterSensitiveLog = (obj: RejectVpcPeeringConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseAddressRequestFilterSensitiveLog = (obj: ReleaseAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseHostsRequestFilterSensitiveLog = (obj: ReleaseHostsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseHostsResultFilterSensitiveLog = (obj: ReleaseHostsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseIpamPoolAllocationRequestFilterSensitiveLog = (obj: ReleaseIpamPoolAllocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseIpamPoolAllocationResultFilterSensitiveLog = (obj: ReleaseIpamPoolAllocationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceIamInstanceProfileAssociationRequestFilterSensitiveLog = (
  obj: ReplaceIamInstanceProfileAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceIamInstanceProfileAssociationResultFilterSensitiveLog = (
  obj: ReplaceIamInstanceProfileAssociationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceNetworkAclAssociationRequestFilterSensitiveLog = (
  obj: ReplaceNetworkAclAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceNetworkAclAssociationResultFilterSensitiveLog = (obj: ReplaceNetworkAclAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceNetworkAclEntryRequestFilterSensitiveLog = (obj: ReplaceNetworkAclEntryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceRouteRequestFilterSensitiveLog = (obj: ReplaceRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceRouteTableAssociationRequestFilterSensitiveLog = (
  obj: ReplaceRouteTableAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceRouteTableAssociationResultFilterSensitiveLog = (obj: ReplaceRouteTableAssociationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceTransitGatewayRouteRequestFilterSensitiveLog = (obj: ReplaceTransitGatewayRouteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceTransitGatewayRouteResultFilterSensitiveLog = (obj: ReplaceTransitGatewayRouteResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportInstanceStatusRequestFilterSensitiveLog = (obj: ReportInstanceStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestSpotFleetRequestFilterSensitiveLog = (obj: RequestSpotFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestSpotFleetResponseFilterSensitiveLog = (obj: RequestSpotFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestSpotLaunchSpecificationFilterSensitiveLog = (obj: RequestSpotLaunchSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestSpotInstancesRequestFilterSensitiveLog = (obj: RequestSpotInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestSpotInstancesResultFilterSensitiveLog = (obj: RequestSpotInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetAddressAttributeRequestFilterSensitiveLog = (obj: ResetAddressAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetAddressAttributeResultFilterSensitiveLog = (obj: ResetAddressAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetEbsDefaultKmsKeyIdRequestFilterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetEbsDefaultKmsKeyIdResultFilterSensitiveLog = (obj: ResetEbsDefaultKmsKeyIdResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetFpgaImageAttributeRequestFilterSensitiveLog = (obj: ResetFpgaImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetFpgaImageAttributeResultFilterSensitiveLog = (obj: ResetFpgaImageAttributeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetImageAttributeRequestFilterSensitiveLog = (obj: ResetImageAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetInstanceAttributeRequestFilterSensitiveLog = (obj: ResetInstanceAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetNetworkInterfaceAttributeRequestFilterSensitiveLog = (
  obj: ResetNetworkInterfaceAttributeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetSnapshotAttributeRequestFilterSensitiveLog = (obj: ResetSnapshotAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreAddressToClassicRequestFilterSensitiveLog = (obj: RestoreAddressToClassicRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreAddressToClassicResultFilterSensitiveLog = (obj: RestoreAddressToClassicResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreImageFromRecycleBinRequestFilterSensitiveLog = (obj: RestoreImageFromRecycleBinRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreImageFromRecycleBinResultFilterSensitiveLog = (obj: RestoreImageFromRecycleBinResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreManagedPrefixListVersionRequestFilterSensitiveLog = (
  obj: RestoreManagedPrefixListVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreManagedPrefixListVersionResultFilterSensitiveLog = (
  obj: RestoreManagedPrefixListVersionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreSnapshotFromRecycleBinRequestFilterSensitiveLog = (
  obj: RestoreSnapshotFromRecycleBinRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreSnapshotFromRecycleBinResultFilterSensitiveLog = (
  obj: RestoreSnapshotFromRecycleBinResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreSnapshotTierRequestFilterSensitiveLog = (obj: RestoreSnapshotTierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreSnapshotTierResultFilterSensitiveLog = (obj: RestoreSnapshotTierResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeClientVpnIngressRequestFilterSensitiveLog = (obj: RevokeClientVpnIngressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeClientVpnIngressResultFilterSensitiveLog = (obj: RevokeClientVpnIngressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSecurityGroupEgressRequestFilterSensitiveLog = (obj: RevokeSecurityGroupEgressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSecurityGroupEgressResultFilterSensitiveLog = (obj: RevokeSecurityGroupEgressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSecurityGroupIngressRequestFilterSensitiveLog = (obj: RevokeSecurityGroupIngressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSecurityGroupIngressResultFilterSensitiveLog = (obj: RevokeSecurityGroupIngressResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CpuOptionsRequestFilterSensitiveLog = (obj: CpuOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticInferenceAcceleratorFilterSensitiveLog = (obj: ElasticInferenceAccelerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnclaveOptionsRequestFilterSensitiveLog = (obj: EnclaveOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HibernationOptionsRequestFilterSensitiveLog = (obj: HibernationOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpotMarketOptionsFilterSensitiveLog = (obj: SpotMarketOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMarketOptionsRequestFilterSensitiveLog = (obj: InstanceMarketOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpecificationFilterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConfigurationRequestFilterSensitiveLog = (obj: LicenseConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMaintenanceOptionsRequestFilterSensitiveLog = (obj: InstanceMaintenanceOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMetadataOptionsRequestFilterSensitiveLog = (obj: InstanceMetadataOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrivateDnsNameOptionsRequestFilterSensitiveLog = (obj: PrivateDnsNameOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunInstancesRequestFilterSensitiveLog = (obj: RunInstancesRequest): any => ({
  ...obj,
  ...(obj.UserData && { UserData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ScheduledInstancesEbsFilterSensitiveLog = (obj: ScheduledInstancesEbs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesBlockDeviceMappingFilterSensitiveLog = (
  obj: ScheduledInstancesBlockDeviceMapping
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesIamInstanceProfileFilterSensitiveLog = (
  obj: ScheduledInstancesIamInstanceProfile
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesMonitoringFilterSensitiveLog = (obj: ScheduledInstancesMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesIpv6AddressFilterSensitiveLog = (obj: ScheduledInstancesIpv6Address): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesPrivateIpAddressConfigFilterSensitiveLog = (
  obj: ScheduledInstancesPrivateIpAddressConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesNetworkInterfaceFilterSensitiveLog = (obj: ScheduledInstancesNetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesPlacementFilterSensitiveLog = (obj: ScheduledInstancesPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledInstancesLaunchSpecificationFilterSensitiveLog = (
  obj: ScheduledInstancesLaunchSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunScheduledInstancesRequestFilterSensitiveLog = (obj: RunScheduledInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunScheduledInstancesResultFilterSensitiveLog = (obj: RunScheduledInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchLocalGatewayRoutesRequestFilterSensitiveLog = (obj: SearchLocalGatewayRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchLocalGatewayRoutesResultFilterSensitiveLog = (obj: SearchLocalGatewayRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTransitGatewayMulticastGroupsRequestFilterSensitiveLog = (
  obj: SearchTransitGatewayMulticastGroupsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransitGatewayMulticastGroupFilterSensitiveLog = (obj: TransitGatewayMulticastGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTransitGatewayMulticastGroupsResultFilterSensitiveLog = (
  obj: SearchTransitGatewayMulticastGroupsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTransitGatewayRoutesRequestFilterSensitiveLog = (obj: SearchTransitGatewayRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTransitGatewayRoutesResultFilterSensitiveLog = (obj: SearchTransitGatewayRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendDiagnosticInterruptRequestFilterSensitiveLog = (obj: SendDiagnosticInterruptRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstancesRequestFilterSensitiveLog = (obj: StartInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStateChangeFilterSensitiveLog = (obj: InstanceStateChange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstancesResultFilterSensitiveLog = (obj: StartInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartNetworkInsightsAccessScopeAnalysisRequestFilterSensitiveLog = (
  obj: StartNetworkInsightsAccessScopeAnalysisRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartNetworkInsightsAccessScopeAnalysisResultFilterSensitiveLog = (
  obj: StartNetworkInsightsAccessScopeAnalysisResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartNetworkInsightsAnalysisRequestFilterSensitiveLog = (
  obj: StartNetworkInsightsAnalysisRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartNetworkInsightsAnalysisResultFilterSensitiveLog = (obj: StartNetworkInsightsAnalysisResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVpcEndpointServicePrivateDnsVerificationRequestFilterSensitiveLog = (
  obj: StartVpcEndpointServicePrivateDnsVerificationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVpcEndpointServicePrivateDnsVerificationResultFilterSensitiveLog = (
  obj: StartVpcEndpointServicePrivateDnsVerificationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInstancesRequestFilterSensitiveLog = (obj: StopInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInstancesResultFilterSensitiveLog = (obj: StopInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateClientVpnConnectionsRequestFilterSensitiveLog = (
  obj: TerminateClientVpnConnectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateConnectionStatusFilterSensitiveLog = (obj: TerminateConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateClientVpnConnectionsResultFilterSensitiveLog = (
  obj: TerminateClientVpnConnectionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateInstancesRequestFilterSensitiveLog = (obj: TerminateInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateInstancesResultFilterSensitiveLog = (obj: TerminateInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignIpv6AddressesRequestFilterSensitiveLog = (obj: UnassignIpv6AddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignIpv6AddressesResultFilterSensitiveLog = (obj: UnassignIpv6AddressesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnassignPrivateIpAddressesRequestFilterSensitiveLog = (obj: UnassignPrivateIpAddressesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnmonitorInstancesRequestFilterSensitiveLog = (obj: UnmonitorInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnmonitorInstancesResultFilterSensitiveLog = (obj: UnmonitorInstancesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleDescriptionFilterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsEgressRequestFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsEgressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityGroupRuleDescriptionsEgressResultFilterSensitiveLog = (
  obj: UpdateSecurityGroupRuleDescriptionsEgressResult
): any => ({
  ...obj,
});
