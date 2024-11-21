// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

/**
 * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips)
 *          on an instance.</p>
 * @public
 */
export interface AcceleratorCount {
  /**
   * <p>The minimum number of accelerators. If this parameter is not specified, there is no minimum
   *          limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of accelerators. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips)
 *          on an instance. To exclude accelerator-enabled instance types, set <code>Max</code> to
 *             <code>0</code>.</p>
 * @public
 */
export interface AcceleratorCountRequest {
  /**
   * <p>The minimum number of accelerators. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum number of accelerators. To specify no maximum limit, omit this
   *          parameter. To exclude accelerator-enabled instance types, set <code>Max</code> to
   *          <code>0</code>.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AcceleratorManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  HABANA: "habana",
  NVIDIA: "nvidia",
  XILINX: "xilinx",
} as const;

/**
 * @public
 */
export type AcceleratorManufacturer = (typeof AcceleratorManufacturer)[keyof typeof AcceleratorManufacturer];

/**
 * @public
 * @enum
 */
export const AcceleratorName = {
  A100: "a100",
  A10G: "a10g",
  H100: "h100",
  INFERENTIA: "inferentia",
  K520: "k520",
  K80: "k80",
  M60: "m60",
  RADEON_PRO_V520: "radeon-pro-v520",
  T4: "t4",
  T4G: "t4g",
  V100: "v100",
  VU9P: "vu9p",
} as const;

/**
 * @public
 */
export type AcceleratorName = (typeof AcceleratorName)[keyof typeof AcceleratorName];

/**
 * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
 * @public
 */
export interface AcceleratorTotalMemoryMiB {
  /**
   * <p>The minimum amount of accelerator memory, in MiB. If this parameter is not specified,
   *          there is no minimum limit.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. If this parameter is not specified,
   *          there is no maximum limit.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
 * @public
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * <p>The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this
   *          parameter.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AcceleratorType = {
  FPGA: "fpga",
  GPU: "gpu",
  INFERENCE: "inference",
} as const;

/**
 * @public
 */
export type AcceleratorType = (typeof AcceleratorType)[keyof typeof AcceleratorType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  capacity_reservation: "capacity-reservation",
  capacity_reservation_fleet: "capacity-reservation-fleet",
  carrier_gateway: "carrier-gateway",
  client_vpn_endpoint: "client-vpn-endpoint",
  coip_pool: "coip-pool",
  customer_gateway: "customer-gateway",
  dedicated_host: "dedicated-host",
  dhcp_options: "dhcp-options",
  egress_only_internet_gateway: "egress-only-internet-gateway",
  elastic_gpu: "elastic-gpu",
  elastic_ip: "elastic-ip",
  export_image_task: "export-image-task",
  export_instance_task: "export-instance-task",
  fleet: "fleet",
  fpga_image: "fpga-image",
  host_reservation: "host-reservation",
  image: "image",
  import_image_task: "import-image-task",
  import_snapshot_task: "import-snapshot-task",
  instance: "instance",
  instance_connect_endpoint: "instance-connect-endpoint",
  instance_event_window: "instance-event-window",
  internet_gateway: "internet-gateway",
  ipam: "ipam",
  ipam_external_resource_verification_token: "ipam-external-resource-verification-token",
  ipam_pool: "ipam-pool",
  ipam_resource_discovery: "ipam-resource-discovery",
  ipam_resource_discovery_association: "ipam-resource-discovery-association",
  ipam_scope: "ipam-scope",
  ipv4pool_ec2: "ipv4pool-ec2",
  ipv6pool_ec2: "ipv6pool-ec2",
  key_pair: "key-pair",
  launch_template: "launch-template",
  local_gateway: "local-gateway",
  local_gateway_route_table: "local-gateway-route-table",
  local_gateway_route_table_virtual_interface_group_association:
    "local-gateway-route-table-virtual-interface-group-association",
  local_gateway_route_table_vpc_association: "local-gateway-route-table-vpc-association",
  local_gateway_virtual_interface: "local-gateway-virtual-interface",
  local_gateway_virtual_interface_group: "local-gateway-virtual-interface-group",
  natgateway: "natgateway",
  network_acl: "network-acl",
  network_insights_access_scope: "network-insights-access-scope",
  network_insights_access_scope_analysis: "network-insights-access-scope-analysis",
  network_insights_analysis: "network-insights-analysis",
  network_insights_path: "network-insights-path",
  network_interface: "network-interface",
  placement_group: "placement-group",
  prefix_list: "prefix-list",
  replace_root_volume_task: "replace-root-volume-task",
  reserved_instances: "reserved-instances",
  route_table: "route-table",
  security_group: "security-group",
  security_group_rule: "security-group-rule",
  snapshot: "snapshot",
  spot_fleet_request: "spot-fleet-request",
  spot_instances_request: "spot-instances-request",
  subnet: "subnet",
  subnet_cidr_reservation: "subnet-cidr-reservation",
  traffic_mirror_filter: "traffic-mirror-filter",
  traffic_mirror_filter_rule: "traffic-mirror-filter-rule",
  traffic_mirror_session: "traffic-mirror-session",
  traffic_mirror_target: "traffic-mirror-target",
  transit_gateway: "transit-gateway",
  transit_gateway_attachment: "transit-gateway-attachment",
  transit_gateway_connect_peer: "transit-gateway-connect-peer",
  transit_gateway_multicast_domain: "transit-gateway-multicast-domain",
  transit_gateway_policy_table: "transit-gateway-policy-table",
  transit_gateway_route_table: "transit-gateway-route-table",
  transit_gateway_route_table_announcement: "transit-gateway-route-table-announcement",
  verified_access_endpoint: "verified-access-endpoint",
  verified_access_group: "verified-access-group",
  verified_access_instance: "verified-access-instance",
  verified_access_policy: "verified-access-policy",
  verified_access_trust_provider: "verified-access-trust-provider",
  volume: "volume",
  vpc: "vpc",
  vpc_block_public_access_exclusion: "vpc-block-public-access-exclusion",
  vpc_endpoint: "vpc-endpoint",
  vpc_endpoint_connection: "vpc-endpoint-connection",
  vpc_endpoint_connection_device_type: "vpc-endpoint-connection-device-type",
  vpc_endpoint_service: "vpc-endpoint-service",
  vpc_endpoint_service_permission: "vpc-endpoint-service-permission",
  vpc_flow_log: "vpc-flow-log",
  vpc_peering_connection: "vpc-peering-connection",
  vpn_connection: "vpn-connection",
  vpn_connection_device_type: "vpn-connection-device-type",
  vpn_gateway: "vpn-gateway",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>Describes a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters.
   *          May not begin with <code>aws:</code>.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The tags to apply to a resource when the resource is being created. When you specify a tag, you must
 *        specify the resource type to tag, otherwise the request will fail.</p>
 *          <note>
 *             <p>The <code>Valid Values</code> lists all the resource types that can be tagged.
 *             However, the action you're using might not support tagging all of these resource types.
 *             If you try to tag a resource type that is unsupported for the action you're using,
 *             you'll get an error.</p>
 *          </note>
 * @public
 */
export interface TagSpecification {
  /**
   * <p>The type of resource to tag on creation.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptAddressTransferRequest {
  /**
   * <p>The Elastic IP address you are accepting for transfer.</p>
   * @public
   */
  Address: string | undefined;

  /**
   * <p>
   *             <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
   *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
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
}

/**
 * @public
 * @enum
 */
export const AddressTransferStatus = {
  accepted: "accepted",
  disabled: "disabled",
  pending: "pending",
} as const;

/**
 * @public
 */
export type AddressTransferStatus = (typeof AddressTransferStatus)[keyof typeof AddressTransferStatus];

/**
 * <p>Details on the Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @public
 */
export interface AddressTransfer {
  /**
   * <p>The Elastic IP address being transferred.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   * @public
   */
  TransferAccountId?: string | undefined;

  /**
   * <p>The timestamp when the Elastic IP address transfer expired. When the source account starts
   *       the transfer, the transfer account has seven hours to allocate the Elastic IP address to
   *       complete the transfer, or the Elastic IP address will return to its original owner.</p>
   * @public
   */
  TransferOfferExpirationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the Elastic IP address transfer was accepted.</p>
   * @public
   */
  TransferOfferAcceptedTimestamp?: Date | undefined;

  /**
   * <p>The Elastic IP address transfer status.</p>
   * @public
   */
  AddressTransferStatus?: AddressTransferStatus | undefined;
}

/**
 * @public
 */
export interface AcceptAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer | undefined;
}

/**
 * @public
 */
export interface AcceptCapacityReservationBillingOwnershipRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the Capacity Reservation for which to accept the request.</p>
   * @public
   */
  CapacityReservationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptCapacityReservationBillingOwnershipResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * <p>Details about the target configuration.</p>
 * @public
 */
export interface TargetConfigurationRequest {
  /**
   * <p>The number of instances the Convertible Reserved Instance offering can be applied to. This parameter is reserved and cannot
   *       be specified in a request</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The Convertible Reserved Instance offering ID.</p>
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * <p>Contains the parameters for accepting the quote.</p>
 * @public
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Convertible Reserved Instances to exchange for another Convertible
   *             Reserved Instance of the same or higher value.</p>
   * @public
   */
  ReservedInstanceIds: string[] | undefined;

  /**
   * <p>The configuration of the target Convertible Reserved Instance to exchange for your
   *             current Convertible Reserved Instances.</p>
   * @public
   */
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}

/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 * @public
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * <p>The ID of the successful exchange.</p>
   * @public
   */
  ExchangeId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

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
export const TransitGatewayAttachmentResourceType = {
  connect: "connect",
  direct_connect_gateway: "direct-connect-gateway",
  peering: "peering",
  tgw_peering: "tgw-peering",
  vpc: "vpc",
  vpn: "vpn",
} as const;

/**
 * @public
 */
export type TransitGatewayAttachmentResourceType =
  (typeof TransitGatewayAttachmentResourceType)[keyof typeof TransitGatewayAttachmentResourceType];

/**
 * @public
 * @enum
 */
export const TransitGatewayMulitcastDomainAssociationState = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  failed: "failed",
  pendingAcceptance: "pendingAcceptance",
  rejected: "rejected",
} as const;

/**
 * @public
 */
export type TransitGatewayMulitcastDomainAssociationState =
  (typeof TransitGatewayMulitcastDomainAssociationState)[keyof typeof TransitGatewayMulitcastDomainAssociationState];

/**
 * <p>Describes the subnet association with the transit gateway multicast domain.</p>
 * @public
 */
export interface SubnetAssociation {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The state of the subnet association.</p>
   * @public
   */
  State?: TransitGatewayMulitcastDomainAssociationState | undefined;
}

/**
 * <p>Describes the multicast domain associations.</p>
 * @public
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

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
   * <p> The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwnerId?: string | undefined;

  /**
   * <p>The subnets associated with the multicast domain.</p>
   * @public
   */
  Subnets?: SubnetAssociation[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway attachment.</p>
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
 * <p>Information about the transit gateway in the peering attachment.</p>
 * @public
 */
export interface PeeringTgwInfo {
  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of the core network where the transit gateway peer is located.</p>
   * @public
   */
  CoreNetworkId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Region of the transit gateway.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DynamicRoutingValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DynamicRoutingValue = (typeof DynamicRoutingValue)[keyof typeof DynamicRoutingValue];

/**
 * <p>Describes dynamic routing for the transit gateway peering attachment.</p>
 * @public
 */
export interface TransitGatewayPeeringAttachmentOptions {
  /**
   * <p>Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.</p>
   * @public
   */
  DynamicRouting?: DynamicRoutingValue | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitGatewayAttachmentState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  failed: "failed",
  failing: "failing",
  initiating: "initiating",
  initiatingRequest: "initiatingRequest",
  modifying: "modifying",
  pending: "pending",
  pendingAcceptance: "pendingAcceptance",
  rejected: "rejected",
  rejecting: "rejecting",
  rollingBack: "rollingBack",
} as const;

/**
 * @public
 */
export type TransitGatewayAttachmentState =
  (typeof TransitGatewayAttachmentState)[keyof typeof TransitGatewayAttachmentState];

/**
 * <p>The status of the transit gateway peering attachment.</p>
 * @public
 */
export interface PeeringAttachmentStatus {
  /**
   * <p>The status code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The status message, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes the transit gateway peering attachment.</p>
 * @public
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * <p>The ID of the transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The ID of the accepter transit gateway attachment.</p>
   * @public
   */
  AccepterTransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>Information about the requester transit gateway.</p>
   * @public
   */
  RequesterTgwInfo?: PeeringTgwInfo | undefined;

  /**
   * <p>Information about the accepter transit gateway.</p>
   * @public
   */
  AccepterTgwInfo?: PeeringTgwInfo | undefined;

  /**
   * <p>Details about the transit gateway peering attachment.</p>
   * @public
   */
  Options?: TransitGatewayPeeringAttachmentOptions | undefined;

  /**
   * <p>The status of the transit gateway peering attachment.</p>
   * @public
   */
  Status?: PeeringAttachmentStatus | undefined;

  /**
   * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The time the transit gateway peering attachment was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The tags for the transit gateway peering attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayVpcAttachmentRequest {
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
 * @enum
 */
export const ApplianceModeSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type ApplianceModeSupportValue = (typeof ApplianceModeSupportValue)[keyof typeof ApplianceModeSupportValue];

/**
 * @public
 * @enum
 */
export const DnsSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type DnsSupportValue = (typeof DnsSupportValue)[keyof typeof DnsSupportValue];

/**
 * @public
 * @enum
 */
export const Ipv6SupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type Ipv6SupportValue = (typeof Ipv6SupportValue)[keyof typeof Ipv6SupportValue];

/**
 * @public
 * @enum
 */
export const SecurityGroupReferencingSupportValue = {
  disable: "disable",
  enable: "enable",
} as const;

/**
 * @public
 */
export type SecurityGroupReferencingSupportValue =
  (typeof SecurityGroupReferencingSupportValue)[keyof typeof SecurityGroupReferencingSupportValue];

/**
 * <p>Describes the VPC attachment options.</p>
 * @public
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * <p>Indicates whether DNS support is enabled.</p>
   * @public
   */
  DnsSupport?: DnsSupportValue | undefined;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.</p>
   *          <p>This option is enabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue | undefined;

  /**
   * <p>Indicates whether IPv6 support is disabled.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue | undefined;

  /**
   * <p>Indicates whether appliance mode support is enabled.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}

/**
 * <p>Describes a VPC attachment.</p>
 * @public
 */
export interface TransitGatewayVpcAttachment {
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
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   * @public
   */
  VpcOwnerId?: string | undefined;

  /**
   * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The VPC attachment options.</p>
   * @public
   */
  Options?: TransitGatewayVpcAttachmentOptions | undefined;

  /**
   * <p>The tags for the VPC attachment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * <p>The VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}

/**
 * @public
 */
export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC endpoint service.</p>
   * @public
   */
  ServiceId: string | undefined;

  /**
   * <p>The IDs of the interface VPC endpoints.</p>
   * @public
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * <p>Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.</p>
 * @public
 */
export interface UnsuccessfulItemError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The error message accompanying the error code.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 * @public
 */
export interface UnsuccessfulItem {
  /**
   * <p>Information about the error.</p>
   * @public
   */
  Error?: UnsuccessfulItemError | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptVpcEndpointConnectionsResult {
  /**
   * <p>Information about the interface endpoints that were not accepted, if
   *             applicable.</p>
   * @public
   */
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}

/**
 * @public
 */
export interface AcceptVpcPeeringConnectionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the VPC peering connection. You must specify this parameter in the
   * 			request.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * <p>Describes an IPv4 CIDR block.</p>
 * @public
 */
export interface CidrBlock {
  /**
   * <p>The IPv4 CIDR block.</p>
   * @public
   */
  CidrBlock?: string | undefined;
}

/**
 * <p>Describes an IPv6 CIDR block.</p>
 * @public
 */
export interface Ipv6CidrBlock {
  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * <p>Describes the VPC peering connection options.</p>
 * @public
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses
   *         when queried from instances in a peer VPC.</p>
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
 * <p>Describes a VPC in a VPC peering connection.</p>
 * @public
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * <p>The IPv4 CIDR block for the VPC.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   * @public
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[] | undefined;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   * @public
   */
  CidrBlockSet?: CidrBlock[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   * @public
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Region in which the VPC is located.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcPeeringConnectionStateReasonCode = {
  active: "active",
  deleted: "deleted",
  deleting: "deleting",
  expired: "expired",
  failed: "failed",
  initiating_request: "initiating-request",
  pending_acceptance: "pending-acceptance",
  provisioning: "provisioning",
  rejected: "rejected",
} as const;

/**
 * @public
 */
export type VpcPeeringConnectionStateReasonCode =
  (typeof VpcPeeringConnectionStateReasonCode)[keyof typeof VpcPeeringConnectionStateReasonCode];

/**
 * <p>Describes the status of a VPC peering connection.</p>
 * @public
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * <p>The status of the VPC peering connection.</p>
   * @public
   */
  Code?: VpcPeeringConnectionStateReasonCode | undefined;

  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a VPC peering connection.</p>
 * @public
 */
export interface VpcPeeringConnection {
  /**
   * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   * @public
   */
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   * @public
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;

  /**
   * <p>The status of the VPC peering connection.</p>
   * @public
   */
  Status?: VpcPeeringConnectionStateReason | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnection?: VpcPeeringConnection | undefined;
}

/**
 * <p>Describes a range of ports.</p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The first port in the range.</p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The last port in the range.</p>
   * @public
   */
  To?: number | undefined;
}

/**
 * <p>Describes a network access control (ACL) rule.</p>
 * @public
 */
export interface AnalysisAclRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>Indicates whether the rule is an outbound rule.</p>
   * @public
   */
  Egress?: boolean | undefined;

  /**
   * <p>The range of ports.</p>
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>Indicates whether to allow or deny traffic that matches the rule.</p>
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * <p>The rule number.</p>
   * @public
   */
  RuleNumber?: number | undefined;
}

/**
 * <p>Describes a path component.</p>
 * @public
 */
export interface AnalysisComponent {
  /**
   * <p>The ID of the component.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the analysis component.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes additional settings for a stateful rule.</p>
 * @public
 */
export interface RuleOption {
  /**
   * <p>The Suricata keyword.</p>
   * @public
   */
  Keyword?: string | undefined;

  /**
   * <p>The settings for the keyword.</p>
   * @public
   */
  Settings?: string[] | undefined;
}

/**
 * <p>Describes the rule options for a stateful rule group.</p>
 * @public
 */
export interface RuleGroupRuleOptionsPair {
  /**
   * <p>The ARN of the rule group.</p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleOptions?: RuleOption[] | undefined;
}

/**
 * <p>Describes the type of a stateful rule group.</p>
 * @public
 */
export interface RuleGroupTypePair {
  /**
   * <p>The ARN of the rule group.</p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The rule group type. The possible values are <code>Domain List</code> and <code>Suricata</code>.</p>
   * @public
   */
  RuleGroupType?: string | undefined;
}

/**
 * <p>Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.</p>
 * @public
 */
export interface AdditionalDetail {
  /**
   * <p>The additional detail code.</p>
   * @public
   */
  AdditionalDetailType?: string | undefined;

  /**
   * <p>The path component.</p>
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * <p>The VPC endpoint service.</p>
   * @public
   */
  VpcEndpointService?: AnalysisComponent | undefined;

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleOptions?: RuleOption[] | undefined;

  /**
   * <p>The rule group type.</p>
   * @public
   */
  RuleGroupTypePairs?: RuleGroupTypePair[] | undefined;

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleGroupRuleOptionsPairs?: RuleGroupRuleOptionsPair[] | undefined;

  /**
   * <p>The name of the VPC endpoint service.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The load balancers.</p>
   * @public
   */
  LoadBalancers?: AnalysisComponent[] | undefined;
}

/**
 * <p>Describes a load balancer listener.</p>
 * @public
 */
export interface AnalysisLoadBalancerListener {
  /**
   * <p>The port on which the load balancer is listening.</p>
   * @public
   */
  LoadBalancerPort?: number | undefined;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   * @public
   */
  InstancePort?: number | undefined;
}

/**
 * <p>Describes a stateful rule.</p>
 * @public
 */
export interface FirewallStatefulRule {
  /**
   * <p>The ARN of the stateful rule group.</p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The source IP addresses, in CIDR notation.</p>
   * @public
   */
  Sources?: string[] | undefined;

  /**
   * <p>The destination IP addresses, in CIDR notation.</p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The rule action. The possible values are <code>pass</code>, <code>drop</code>, and
   *          <code>alert</code>.</p>
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * <p>The direction. The possible values are <code>FORWARD</code> and <code>ANY</code>.</p>
   * @public
   */
  Direction?: string | undefined;
}

/**
 * <p>Describes a stateless rule.</p>
 * @public
 */
export interface FirewallStatelessRule {
  /**
   * <p>The ARN of the stateless rule group.</p>
   * @public
   */
  RuleGroupArn?: string | undefined;

  /**
   * <p>The source IP addresses, in CIDR notation.</p>
   * @public
   */
  Sources?: string[] | undefined;

  /**
   * <p>The destination IP addresses, in CIDR notation.</p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: PortRange[] | undefined;

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: PortRange[] | undefined;

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: number[] | undefined;

  /**
   * <p>The rule action. The possible values are <code>pass</code>, <code>drop</code>, and
   *          <code>forward_to_site</code>.</p>
   * @public
   */
  RuleAction?: string | undefined;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * <p>Describes a load balancer target.</p>
 * @public
 */
export interface AnalysisLoadBalancerTarget {
  /**
   * <p>The IP address.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Information about the instance.</p>
   * @public
   */
  Instance?: AnalysisComponent | undefined;

  /**
   * <p>The port on which the target is listening.</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * <p>Describes a route table route.</p>
 * @public
 */
export interface AnalysisRouteTableRoute {
  /**
   * <p>The destination IPv4 address, in CIDR notation.</p>
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * <p>The prefix of the Amazon Web Services service.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>The ID of an egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string | undefined;

  /**
   * <p>The ID of the gateway, such as an internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The ID of the instance, such as a NAT instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of a NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>The ID of a network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>Describes how the route was created. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>CreateRouteTable - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>CreateRoute - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>EnableVgwRoutePropagation - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Origin?: string | undefined;

  /**
   * <p>The ID of a transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>The state. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>active</p>
   *             </li>
   *             <li>
   *                <p>blackhole</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ID of a carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a core network.</p>
   * @public
   */
  CoreNetworkArn?: string | undefined;

  /**
   * <p>The ID of a local gateway.</p>
   * @public
   */
  LocalGatewayId?: string | undefined;
}

/**
 * <p>Describes a security group rule.</p>
 * @public
 */
export interface AnalysisSecurityGroupRule {
  /**
   * <p>The IPv4 address range, in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   * @public
   */
  Direction?: string | undefined;

  /**
   * <p>The security group ID.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>The port range.</p>
   * @public
   */
  PortRange?: PortRange | undefined;

  /**
   * <p>The prefix list ID.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The protocol name.</p>
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * <p>Describes a route in a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayRouteTableRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   * @public
   */
  DestinationCidr?: string | undefined;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The route origin. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>static</p>
   *             </li>
   *             <li>
   *                <p>propagated</p>
   *             </li>
   *          </ul>
   * @public
   */
  RouteOrigin?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The ID of the route attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>The ID of the resource for the route attachment.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type for the route attachment.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * <p>Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.</p>
 * @public
 */
export interface Explanation {
  /**
   * <p>The network ACL.</p>
   * @public
   */
  Acl?: AnalysisComponent | undefined;

  /**
   * <p>The network ACL rule.</p>
   * @public
   */
  AclRule?: AnalysisAclRule | undefined;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   * @public
   */
  Addresses?: string[] | undefined;

  /**
   * <p>The resource to which the component is attached.</p>
   * @public
   */
  AttachedTo?: AnalysisComponent | undefined;

  /**
   * <p>The Availability Zones.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The CIDR ranges.</p>
   * @public
   */
  Cidrs?: string[] | undefined;

  /**
   * <p>The component.</p>
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * <p>The customer gateway.</p>
   * @public
   */
  CustomerGateway?: AnalysisComponent | undefined;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: AnalysisComponent | undefined;

  /**
   * <p>The destination VPC.</p>
   * @public
   */
  DestinationVpc?: AnalysisComponent | undefined;

  /**
   * <p>The direction. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>egress</p>
   *             </li>
   *             <li>
   *                <p>ingress</p>
   *             </li>
   *          </ul>
   * @public
   */
  Direction?: string | undefined;

  /**
   * <p>The explanation code.</p>
   * @public
   */
  ExplanationCode?: string | undefined;

  /**
   * <p>The route table.</p>
   * @public
   */
  IngressRouteTable?: AnalysisComponent | undefined;

  /**
   * <p>The internet gateway.</p>
   * @public
   */
  InternetGateway?: AnalysisComponent | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   * @public
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener | undefined;

  /**
   * <p>The listener port of the load balancer.</p>
   * @public
   */
  LoadBalancerListenerPort?: number | undefined;

  /**
   * <p>The target.</p>
   * @public
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget | undefined;

  /**
   * <p>The target group.</p>
   * @public
   */
  LoadBalancerTargetGroup?: AnalysisComponent | undefined;

  /**
   * <p>The target groups.</p>
   * @public
   */
  LoadBalancerTargetGroups?: AnalysisComponent[] | undefined;

  /**
   * <p>The target port.</p>
   * @public
   */
  LoadBalancerTargetPort?: number | undefined;

  /**
   * <p>The load balancer listener.</p>
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;

  /**
   * <p>The missing component.</p>
   * @public
   */
  MissingComponent?: string | undefined;

  /**
   * <p>The NAT gateway.</p>
   * @public
   */
  NatGateway?: AnalysisComponent | undefined;

  /**
   * <p>The network interface.</p>
   * @public
   */
  NetworkInterface?: AnalysisComponent | undefined;

  /**
   * <p>The packet field.</p>
   * @public
   */
  PacketField?: string | undefined;

  /**
   * <p>The VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnection?: AnalysisComponent | undefined;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: PortRange[] | undefined;

  /**
   * <p>The prefix list.</p>
   * @public
   */
  PrefixList?: AnalysisComponent | undefined;

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: string[] | undefined;

  /**
   * <p>The route table route.</p>
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;

  /**
   * <p>The route table.</p>
   * @public
   */
  RouteTable?: AnalysisComponent | undefined;

  /**
   * <p>The security group.</p>
   * @public
   */
  SecurityGroup?: AnalysisComponent | undefined;

  /**
   * <p>The security group rule.</p>
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;

  /**
   * <p>The security groups.</p>
   * @public
   */
  SecurityGroups?: AnalysisComponent[] | undefined;

  /**
   * <p>The source VPC.</p>
   * @public
   */
  SourceVpc?: AnalysisComponent | undefined;

  /**
   * <p>The state.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The subnet.</p>
   * @public
   */
  Subnet?: AnalysisComponent | undefined;

  /**
   * <p>The route table for the subnet.</p>
   * @public
   */
  SubnetRouteTable?: AnalysisComponent | undefined;

  /**
   * <p>The component VPC.</p>
   * @public
   */
  Vpc?: AnalysisComponent | undefined;

  /**
   * <p>The VPC endpoint.</p>
   * @public
   */
  VpcEndpoint?: AnalysisComponent | undefined;

  /**
   * <p>The VPN connection.</p>
   * @public
   */
  VpnConnection?: AnalysisComponent | undefined;

  /**
   * <p>The VPN gateway.</p>
   * @public
   */
  VpnGateway?: AnalysisComponent | undefined;

  /**
   * <p>The transit gateway.</p>
   * @public
   */
  TransitGateway?: AnalysisComponent | undefined;

  /**
   * <p>The transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: AnalysisComponent | undefined;

  /**
   * <p>The transit gateway route table route.</p>
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;

  /**
   * <p>The transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachment?: AnalysisComponent | undefined;

  /**
   * <p>The Amazon Web Services account for the component.</p>
   * @public
   */
  ComponentAccount?: string | undefined;

  /**
   * <p>The Region for the component.</p>
   * @public
   */
  ComponentRegion?: string | undefined;

  /**
   * <p>The Network Firewall stateless rule.</p>
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule | undefined;

  /**
   * <p>The Network Firewall stateful rule.</p>
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule | undefined;
}

/**
 * <p>Describes a header. Reflects any changes made by a component as traffic passes through.
 *          The fields of an inbound header are null except for the first component of a path.</p>
 * @public
 */
export interface AnalysisPacketHeader {
  /**
   * <p>The destination addresses.</p>
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * <p>The destination port ranges.</p>
   * @public
   */
  DestinationPortRanges?: PortRange[] | undefined;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The source addresses.</p>
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * <p>The source port ranges.</p>
   * @public
   */
  SourcePortRanges?: PortRange[] | undefined;
}

/**
 * <p>Describes a path component.</p>
 * @public
 */
export interface PathComponent {
  /**
   * <p>The sequence number.</p>
   * @public
   */
  SequenceNumber?: number | undefined;

  /**
   * <p>The network ACL rule.</p>
   * @public
   */
  AclRule?: AnalysisAclRule | undefined;

  /**
   * <p>The resource to which the path component is attached.</p>
   * @public
   */
  AttachedTo?: AnalysisComponent | undefined;

  /**
   * <p>The component.</p>
   * @public
   */
  Component?: AnalysisComponent | undefined;

  /**
   * <p>The destination VPC.</p>
   * @public
   */
  DestinationVpc?: AnalysisComponent | undefined;

  /**
   * <p>The outbound header.</p>
   * @public
   */
  OutboundHeader?: AnalysisPacketHeader | undefined;

  /**
   * <p>The inbound header.</p>
   * @public
   */
  InboundHeader?: AnalysisPacketHeader | undefined;

  /**
   * <p>The route table route.</p>
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;

  /**
   * <p>The security group rule.</p>
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;

  /**
   * <p>The source VPC.</p>
   * @public
   */
  SourceVpc?: AnalysisComponent | undefined;

  /**
   * <p>The subnet.</p>
   * @public
   */
  Subnet?: AnalysisComponent | undefined;

  /**
   * <p>The component VPC.</p>
   * @public
   */
  Vpc?: AnalysisComponent | undefined;

  /**
   * <p>The additional details.</p>
   * @public
   */
  AdditionalDetails?: AdditionalDetail[] | undefined;

  /**
   * <p>The transit gateway.</p>
   * @public
   */
  TransitGateway?: AnalysisComponent | undefined;

  /**
   * <p>The route in a transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;

  /**
   * <p>The explanation codes.</p>
   * @public
   */
  Explanations?: Explanation[] | undefined;

  /**
   * <p>The load balancer listener.</p>
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;

  /**
   * <p>The Network Firewall stateless rule.</p>
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule | undefined;

  /**
   * <p>The Network Firewall stateful rule.</p>
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule | undefined;

  /**
   * <p>The name of the VPC endpoint service.</p>
   * @public
   */
  ServiceName?: string | undefined;
}

/**
 * <p>Describes a finding for a Network Access Scope.</p>
 * @public
 */
export interface AccessScopeAnalysisFinding {
  /**
   * <p>The ID of the Network Access Scope analysis.</p>
   * @public
   */
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string | undefined;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  FindingId?: string | undefined;

  /**
   * <p>The finding components.</p>
   * @public
   */
  FindingComponents?: PathComponent[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  tcp: "tcp",
  udp: "udp",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * <p>Describes a packet header statement.</p>
 * @public
 */
export interface PacketHeaderStatement {
  /**
   * <p>The source addresses.</p>
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * <p>The destination addresses.</p>
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: string[] | undefined;

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: string[] | undefined;

  /**
   * <p>The source prefix lists.</p>
   * @public
   */
  SourcePrefixLists?: string[] | undefined;

  /**
   * <p>The destination prefix lists.</p>
   * @public
   */
  DestinationPrefixLists?: string[] | undefined;

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * <p>Describes a resource statement.</p>
 * @public
 */
export interface ResourceStatement {
  /**
   * <p>The resources.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The resource types.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * <p>Describes a path statement.</p>
 * @public
 */
export interface PathStatement {
  /**
   * <p>The packet header statement.</p>
   * @public
   */
  PacketHeaderStatement?: PacketHeaderStatement | undefined;

  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatement | undefined;
}

/**
 * <p>Describes a through resource statement.</p>
 * @public
 */
export interface ThroughResourcesStatement {
  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatement | undefined;
}

/**
 * <p>Describes a path.</p>
 * @public
 */
export interface AccessScopePath {
  /**
   * <p>The source.</p>
   * @public
   */
  Source?: PathStatement | undefined;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: PathStatement | undefined;

  /**
   * <p>The through resources.</p>
   * @public
   */
  ThroughResources?: ThroughResourcesStatement[] | undefined;
}

/**
 * <p>Describes a packet header statement.</p>
 * @public
 */
export interface PacketHeaderStatementRequest {
  /**
   * <p>The source addresses.</p>
   * @public
   */
  SourceAddresses?: string[] | undefined;

  /**
   * <p>The destination addresses.</p>
   * @public
   */
  DestinationAddresses?: string[] | undefined;

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: string[] | undefined;

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: string[] | undefined;

  /**
   * <p>The source prefix lists.</p>
   * @public
   */
  SourcePrefixLists?: string[] | undefined;

  /**
   * <p>The destination prefix lists.</p>
   * @public
   */
  DestinationPrefixLists?: string[] | undefined;

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: Protocol[] | undefined;
}

/**
 * <p>Describes a resource statement.</p>
 * @public
 */
export interface ResourceStatementRequest {
  /**
   * <p>The resources.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The resource types.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * <p>Describes a path statement.</p>
 * @public
 */
export interface PathStatementRequest {
  /**
   * <p>The packet header statement.</p>
   * @public
   */
  PacketHeaderStatement?: PacketHeaderStatementRequest | undefined;

  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatementRequest | undefined;
}

/**
 * <p>Describes a through resource statement.</p>
 * @public
 */
export interface ThroughResourcesStatementRequest {
  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatementRequest | undefined;
}

/**
 * <p>Describes a path.</p>
 * @public
 */
export interface AccessScopePathRequest {
  /**
   * <p>The source.</p>
   * @public
   */
  Source?: PathStatementRequest | undefined;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: PathStatementRequest | undefined;

  /**
   * <p>The through resources.</p>
   * @public
   */
  ThroughResources?: ThroughResourcesStatementRequest[] | undefined;
}

/**
 * <p>Describes a value of an account attribute.</p>
 * @public
 */
export interface AccountAttributeValue {
  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * <p>Describes an account attribute.</p>
 * @public
 */
export interface AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The values for the account attribute.</p>
   * @public
   */
  AttributeValues?: AccountAttributeValue[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AccountAttributeName = {
  default_vpc: "default-vpc",
  supported_platforms: "supported-platforms",
} as const;

/**
 * @public
 */
export type AccountAttributeName = (typeof AccountAttributeName)[keyof typeof AccountAttributeName];

/**
 * @public
 * @enum
 */
export const InstanceHealthStatus = {
  HEALTHY_STATUS: "healthy",
  UNHEALTHY_STATUS: "unhealthy",
} as const;

/**
 * @public
 */
export type InstanceHealthStatus = (typeof InstanceHealthStatus)[keyof typeof InstanceHealthStatus];

/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 * @public
 */
export interface ActiveInstance {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The ID of the Spot Instance request.</p>
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * <p>The health status of the instance. If the status of either the instance status check
   *             or the system status check is <code>impaired</code>, the health status of the instance
   *             is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   * @public
   */
  InstanceHealth?: InstanceHealthStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const ActivityStatus = {
  ERROR: "error",
  FULFILLED: "fulfilled",
  PENDING_FULFILLMENT: "pending_fulfillment",
  PENDING_TERMINATION: "pending_termination",
} as const;

/**
 * @public
 */
export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  Account: "Account",
  All: "All",
  OrganizationUnit: "OrganizationUnit",
  Role: "Role",
  Service: "Service",
  User: "User",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * <p>Describes a principal.</p>
 * @public
 */
export interface AddedPrincipal {
  /**
   * <p>The type of principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   * @public
   */
  Principal?: string | undefined;

  /**
   * <p>The ID of the service permission.</p>
   * @public
   */
  ServicePermissionId?: string | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;
}

/**
 * <p>Add an operating Region to an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p>
 *          <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @public
 */
export interface AddIpamOperatingRegion {
  /**
   * <p>The name of the operating Region.</p>
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * <p>Add an Organizational Unit (OU) exclusion to your IPAM. If your IPAM is integrated with Amazon Web Services Organizations and you add an organizational unit (OU) exclusion, IPAM will not manage the IP addresses in accounts in that OU exclusion. There is a limit on the number of exclusions you can create. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html">Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @public
 */
export interface AddIpamOrganizationalUnitExclusion {
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
 * <p>An entry for a prefix list.</p>
 * @public
 */
export interface AddPrefixListEntry {
  /**
   * <p>The CIDR block.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>A description for the entry.</p>
   *          <p>Constraints: Up to 255 characters in length.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainType = {
  standard: "standard",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type DomainType = (typeof DomainType)[keyof typeof DomainType];

/**
 * <p>Describes an Elastic IP address, or a carrier IP address.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The ID representing the allocation of the address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The ID representing the association of the address with an instance.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The network (<code>vpc</code>).</p>
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network interface.</p>
   * @public
   */
  NetworkInterfaceOwnerId?: string | undefined;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Any tags assigned to the Elastic IP address.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of an address pool.</p>
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>The carrier IP address associated. This option is only available for network interfaces
   *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * <p>The ID of the instance that the address is associated with (if any).</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * <p>The status of an updated pointer (PTR) record for an Elastic IP address.</p>
 * @public
 */
export interface PtrUpdateStatus {
  /**
   * <p>The value for the PTR record update.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The status of the PTR record update.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The reason for the PTR record update.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * <p>The attributes associated with an Elastic IP address.</p>
 * @public
 */
export interface AddressAttribute {
  /**
   * <p>The public IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The pointer (PTR) record for the IP address.</p>
   * @public
   */
  PtrRecord?: string | undefined;

  /**
   * <p>The updated PTR record for the IP address.</p>
   * @public
   */
  PtrRecordUpdate?: PtrUpdateStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const AddressAttributeName = {
  domain_name: "domain-name",
} as const;

/**
 * @public
 */
export type AddressAttributeName = (typeof AddressAttributeName)[keyof typeof AddressAttributeName];

/**
 * @public
 * @enum
 */
export const AddressFamily = {
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;

/**
 * @public
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

/**
 * @public
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
   *          You can't advertise only a portion of the provisioned range.</p>
   * @public
   */
  Cidr: string | undefined;

  /**
   * <p>The public 2-byte or 4-byte ASN that you want to advertise.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

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
 * @enum
 */
export const AsnAssociationState = {
  associated: "associated",
  disassociated: "disassociated",
  failed_association: "failed-association",
  failed_disassociation: "failed-disassociation",
  pending_association: "pending-association",
  pending_disassociation: "pending-disassociation",
} as const;

/**
 * @public
 */
export type AsnAssociationState = (typeof AsnAssociationState)[keyof typeof AsnAssociationState];

/**
 * <p>An Autonomous System Number (ASN) and BYOIP CIDR association.</p>
 * @public
 */
export interface AsnAssociation {
  /**
   * <p>The association's ASN.</p>
   * @public
   */
  Asn?: string | undefined;

  /**
   * <p>The association's CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The association's status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The association's state.</p>
   * @public
   */
  State?: AsnAssociationState | undefined;
}

/**
 * @public
 * @enum
 */
export const ByoipCidrState = {
  advertised: "advertised",
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
  provisioned_not_publicly_advertisable: "provisioned-not-publicly-advertisable",
} as const;

/**
 * @public
 */
export type ByoipCidrState = (typeof ByoipCidrState)[keyof typeof ByoipCidrState];

/**
 * <p>Information about an address range that is provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP).</p>
 * @public
 */
export interface ByoipCidr {
  /**
   * <p>The address range, in CIDR notation.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The description of the address range.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The BYOIP CIDR associations with ASNs.</p>
   * @public
   */
  AsnAssociations?: AsnAssociation[] | undefined;

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The state of the address range.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>advertised</code>: The address range is being advertised to the internet by Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deprovisioned</code>: The address range is deprovisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-deprovision</code>: The request to deprovision the address range was unsuccessful. Ensure that all EIPs from the range have been deallocated and try again.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-provision</code>: The request to provision the address range was unsuccessful.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-deprovision</code>: You’ve submitted a request to deprovision an address range and it's pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-provision</code>: You’ve submitted a request to provision an address range and it's pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code>: The address range is provisioned and can be advertised. The range is not currently advertised.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned-not-publicly-advertisable</code>: The address range is provisioned and cannot be advertised.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: ByoipCidrState | undefined;

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
export interface AdvertiseByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr | undefined;
}

/**
 * @public
 * @enum
 */
export const Affinity = {
  default: "default",
  host: "host",
} as const;

/**
 * @public
 */
export type Affinity = (typeof Affinity)[keyof typeof Affinity];

/**
 * @public
 */
export interface AllocateAddressRequest {
  /**
   * <p>The network (<code>vpc</code>).</p>
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * <p>The Elastic IP address to recover or an IPv4 address from an address pool.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services
   *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
   *       addresses cannot move between network border groups.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
   *         select an address from the address pool. Alternatively, specify a specific
   *         address from the address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>The tags to assign to the Elastic IP address.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-eip-pool.html">Allocate sequential Elastic IP addresses from an IPAM pool</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  IpamPoolId?: string | undefined;

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
export interface AllocateAddressResult {
  /**
   * <p>The ID that represents the allocation of the Elastic IP address.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The ID of an address pool.</p>
   * @public
   */
  PublicIpv4Pool?: string | undefined;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The network (<code>vpc</code>).</p>
   * @public
   */
  Domain?: DomainType | undefined;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CustomerOwnedIp?: string | undefined;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>The carrier IP address. This option is only available for network interfaces that reside
   *       in a subnet in a Wavelength Zone.</p>
   * @public
   */
  CarrierIp?: string | undefined;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoPlacement = {
  off: "off",
  on: "on",
} as const;

/**
 * @public
 */
export type AutoPlacement = (typeof AutoPlacement)[keyof typeof AutoPlacement];

/**
 * @public
 * @enum
 */
export const HostMaintenance = {
  off: "off",
  on: "on",
} as const;

/**
 * @public
 */
export type HostMaintenance = (typeof HostMaintenance)[keyof typeof HostMaintenance];

/**
 * @public
 * @enum
 */
export const HostRecovery = {
  off: "off",
  on: "on",
} as const;

/**
 * @public
 */
export type HostRecovery = (typeof HostRecovery)[keyof typeof HostRecovery];

/**
 * @public
 */
export interface AllocateHostsRequest {
  /**
   * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
   *             an instance family, the Dedicated Hosts support multiple instance types within that
   *             instance family.</p>
   *          <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
   *             parameter and specify <b>InstanceType</b> instead. You cannot
   *             specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. Host
   *             recovery is disabled by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>off</code>
   *          </p>
   * @public
   */
  HostRecovery?: HostRecovery | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate
   *             the Dedicated Host. If you specify <b>OutpostArn</b>, you can
   *             optionally specify <b>AssetIds</b>.</p>
   *          <p>If you are allocating the Dedicated Host in a Region, omit this parameter.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Indicates whether to enable or disable host maintenance for the Dedicated Host. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html">Host
   *                 maintenance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance | undefined;

  /**
   * <p>The IDs of the Outpost hardware assets on which to allocate the Dedicated Hosts. Targeting
   *             specific hardware assets on an Outpost can help to minimize latency between your workloads.
   *             This parameter is supported only if you specify <b>OutpostArn</b>.
   *             If you are allocating the Dedicated Hosts in a Region, omit this parameter.</p>
   *          <ul>
   *             <li>
   *                <p>If you specify this parameter, you can omit <b>Quantity</b>.
   *                     In this case, Amazon EC2 allocates a Dedicated Host on each specified hardware
   *                     asset.</p>
   *             </li>
   *             <li>
   *                <p>If you specify both <b>AssetIds</b> and
   *                     <b>Quantity</b>, then the value for
   *                     <b>Quantity</b> must be equal to the number of asset IDs
   *                     specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AssetIds?: string[] | undefined;

  /**
   * <p>Indicates whether the host accepts any untargeted instance launches that match its
   *             instance type configuration, or if it only accepts Host tenancy instance launches that
   *             specify its unique host ID. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding"> Understanding auto-placement and affinity</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>off</code>
   *          </p>
   * @public
   */
  AutoPlacement?: AutoPlacement | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you specify an
   *             instance type, the Dedicated Hosts support instances of the specified instance type
   *             only.</p>
   *          <p>If you want the Dedicated Hosts to support multiple instance types in a specific
   *             instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters. If you are
   *             allocating the Dedicated Hosts on an Outpost, and you specify <b>AssetIds</b>,
   *             you can omit this parameter. In this case, Amazon EC2 allocates a Dedicated Host on each
   *             specified hardware asset. If you specify both <b>AssetIds</b> and
   *             <b>Quantity</b>, then the value that you specify for
   *             <b>Quantity</b> must be equal to the number of asset IDs specified.</p>
   * @public
   */
  Quantity?: number | undefined;

  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   * @public
   */
  AvailabilityZone: string | undefined;
}

/**
 * <p>Contains the output of AllocateHosts.</p>
 * @public
 */
export interface AllocateHostsResult {
  /**
   * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a
   *             specific host.</p>
   * @public
   */
  HostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AllocateIpamPoolCidrRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the IPAM pool from which you would like to allocate a CIDR.</p>
   * @public
   */
  IpamPoolId: string | undefined;

  /**
   * <p>The CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible values: Any available IPv4 or IPv6 CIDR.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If there is no DefaultNetmaskLength allocation rule set on the pool, you must specify either the NetmaskLength or the CIDR.</p>
   *             </li>
   *             <li>
   *                <p>If the DefaultNetmaskLength allocation rule is set on the pool, you can specify either the NetmaskLength or the CIDR and the DefaultNetmaskLength allocation rule will be ignored.</p>
   *             </li>
   *          </ul>
   *          <p>Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</p>
   * @public
   */
  NetmaskLength?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description for the allocation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A preview of the next available CIDR in a pool.</p>
   * @public
   */
  PreviewNextCidr?: boolean | undefined;

  /**
   * <p>Include a particular CIDR range that can be returned by the pool. Allowed CIDRs are only allowed if using netmask length for allocation.</p>
   * @public
   */
  AllowedCidrs?: string[] | undefined;

  /**
   * <p>Exclude a particular CIDR range from being returned by the pool. Disallowed CIDRs are only allowed if using netmask length for allocation.</p>
   * @public
   */
  DisallowedCidrs?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamPoolAllocationResourceType = {
  custom: "custom",
  ec2_public_ipv4_pool: "ec2-public-ipv4-pool",
  eip: "eip",
  ipam_pool: "ipam-pool",
  subnet: "subnet",
  vpc: "vpc",
} as const;

/**
 * @public
 */
export type IpamPoolAllocationResourceType =
  (typeof IpamPoolAllocationResourceType)[keyof typeof IpamPoolAllocationResourceType];

/**
 * <p>In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource.</p>
 * @public
 */
export interface IpamPoolAllocation {
  /**
   * <p>The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and
   *          refers to a range of IP addresses. An IPv4 CIDR example is <code>10.24.34.0/23</code>. An IPv6 CIDR example is <code>2001:DB8::/32</code>.</p>
   * @public
   */
  Cidr?: string | undefined;

  /**
   * <p>The ID of an allocation.</p>
   * @public
   */
  IpamPoolAllocationId?: string | undefined;

  /**
   * <p>A description of the pool allocation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: IpamPoolAllocationResourceType | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  ResourceRegion?: string | undefined;

  /**
   * <p>The owner of the resource.</p>
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface AllocateIpamPoolCidrResult {
  /**
   * <p>Information about the allocation created.</p>
   * @public
   */
  IpamPoolAllocation?: IpamPoolAllocation | undefined;
}

/**
 * @public
 * @enum
 */
export const AllocationState = {
  available: "available",
  pending: "pending",
  permanent_failure: "permanent-failure",
  released: "released",
  released_permanent_failure: "released-permanent-failure",
  under_assessment: "under-assessment",
} as const;

/**
 * @public
 */
export type AllocationState = (typeof AllocationState)[keyof typeof AllocationState];

/**
 * @public
 * @enum
 */
export const AllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacityOptimized",
  CAPACITY_OPTIMIZED_PRIORITIZED: "capacityOptimizedPrioritized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowestPrice",
  PRICE_CAPACITY_OPTIMIZED: "priceCapacityOptimized",
} as const;

/**
 * @public
 */
export type AllocationStrategy = (typeof AllocationStrategy)[keyof typeof AllocationStrategy];

/**
 * @public
 * @enum
 */
export const AllocationType = {
  used: "used",
} as const;

/**
 * @public
 */
export type AllocationType = (typeof AllocationType)[keyof typeof AllocationType];

/**
 * <p>Describes a principal.</p>
 * @public
 */
export interface AllowedPrincipal {
  /**
   * <p>The type of principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   * @public
   */
  Principal?: string | undefined;

  /**
   * <p>The ID of the service permission.</p>
   * @public
   */
  ServicePermissionId?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AllowsMultipleInstanceTypes = {
  off: "off",
  on: "on",
} as const;

/**
 * @public
 */
export type AllowsMultipleInstanceTypes =
  (typeof AllowsMultipleInstanceTypes)[keyof typeof AllowsMultipleInstanceTypes];

/**
 * <p>Describes an potential intermediate component of a feasible path.</p>
 * @public
 */
export interface AlternatePathHint {
  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  ComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the VPC in which the associated target network is located.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can
   * 			be applied to an associated target network.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * <p>The IDs of the applied security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssignIpv6AddressesRequest {
  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the
   *             network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code>
   *             option.</p>
   * @public
   */
  Ipv6PrefixCount?: number | undefined;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   * @public
   */
  Ipv6Addresses?: string[] | undefined;

  /**
   * <p>The number of additional IPv6 addresses to assign to the network interface.
   *     		The specified number of IPv6 addresses are assigned in addition to the
   *     		existing IPv6 addresses that are already assigned to the network interface.
   *     		Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You
   *     		can't use this option if specifying specific IPv6 addresses.</p>
   * @public
   */
  Ipv6AddressCount?: number | undefined;
}

/**
 * @public
 */
export interface AssignIpv6AddressesResult {
  /**
   * <p>The new IPv6 addresses assigned to the network interface. Existing IPv6 addresses
   *         	that were assigned to the network interface before the request are not included.</p>
   * @public
   */
  AssignedIpv6Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   * @public
   */
  AssignedIpv6Prefixes?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 * @public
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: string[] | undefined;

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   * @public
   */
  Ipv4PrefixCount?: number | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p>
   *          <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

  /**
   * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number | undefined;

  /**
   * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
   * @public
   */
  AllowReassignment?: boolean | undefined;
}

/**
 * <p>Describes an IPv4 prefix.</p>
 * @public
 */
export interface Ipv4PrefixSpecification {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to network interfaces</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Ipv4Prefix?: string | undefined;
}

/**
 * <p>Describes the private IP addresses assigned to a network interface.</p>
 * @public
 */
export interface AssignedPrivateIpAddress {
  /**
   * <p>The private IP address assigned to the network interface.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * @public
 */
export interface AssignPrivateIpAddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   * @public
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[] | undefined;

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   * @public
   */
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[] | undefined;
}

/**
 * @public
 */
export interface AssignPrivateNatGatewayAddressRequest {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The private IPv4 addresses you want to assign to the private NAT gateway.</p>
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

  /**
   * <p>The number of private IP addresses to assign to the NAT gateway. You can't specify this parameter when also specifying private IP addresses.</p>
   * @public
   */
  PrivateIpAddressCount?: number | undefined;

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
export const NatGatewayAddressStatus = {
  ASSIGNING: "assigning",
  ASSOCIATING: "associating",
  DISASSOCIATING: "disassociating",
  FAILED: "failed",
  SUCCEEDED: "succeeded",
  UNASSIGNING: "unassigning",
} as const;

/**
 * @public
 */
export type NatGatewayAddressStatus = (typeof NatGatewayAddressStatus)[keyof typeof NatGatewayAddressStatus];

/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 * @public
 */
export interface NatGatewayAddress {
  /**
   * <p>[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The private IP address associated with the NAT gateway.</p>
   * @public
   */
  PrivateIp?: string | undefined;

  /**
   * <p>[Public NAT gateway only] The Elastic IP address associated with the NAT gateway.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>[Public NAT gateway only] The association ID of the Elastic IP address that's associated with the NAT gateway.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>Defines if the IP address is the primary address.</p>
   * @public
   */
  IsPrimary?: boolean | undefined;

  /**
   * <p>The address failure message.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The address status.</p>
   * @public
   */
  Status?: NatGatewayAddressStatus | undefined;
}

/**
 * @public
 */
export interface AssignPrivateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>NAT gateway IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface AssociateAddressRequest {
  /**
   * <p>The allocation ID. This is required.</p>
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * <p>The ID of the instance. The instance must have exactly one attached network interface.
   *       You can specify either the instance ID or the network interface ID, but not both.</p>
   * @public
   */
  InstanceId?: string | undefined;

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

  /**
   * <p>The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
   *          <p>You can specify either the instance ID or the network interface ID, but not both. </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Reassociation is automatic, but you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
   * @public
   */
  AllowReassociation?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateAddressResult {
  /**
   * <p>The ID that represents the association of the Elastic IP address with an instance.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCapacityReservationBillingOwnerRequest {
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
   * <p>The ID of the consumer account to which to assign billing.</p>
   * @public
   */
  UnusedReservationBillingOwnerId: string | undefined;
}

/**
 * @public
 */
export interface AssociateCapacityReservationBillingOwnerResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The ID of the subnet to associate with the Client VPN endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

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
export const AssociationStatusCode = {
  associated: "associated",
  associating: "associating",
  association_failed: "association-failed",
  disassociated: "disassociated",
  disassociating: "disassociating",
} as const;

/**
 * @public
 */
export type AssociationStatusCode = (typeof AssociationStatusCode)[keyof typeof AssociationStatusCode];

/**
 * <p>Describes the state of a target network association.</p>
 * @public
 */
export interface AssociationStatus {
  /**
   * <p>The state of the target network association.</p>
   * @public
   */
  Code?: AssociationStatusCode | undefined;

  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface AssociateClientVpnTargetNetworkResult {
  /**
   * <p>The unique ID of the target network association.</p>
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
export interface AssociateDhcpOptionsRequest {
  /**
   * <p>The ID of the DHCP options set, or <code>default</code> to associate
   *         no DHCP options with the VPC.</p>
   * @public
   */
  DhcpOptionsId: string | undefined;

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
export interface AssociateEnclaveCertificateIamRoleRequest {
  /**
   * <p>The ARN of the ACM certificate with which to associate the IAM role.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM
   * 			certificate.</p>
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
export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * <p>The name of the Amazon S3 bucket to which the certificate was uploaded.</p>
   * @public
   */
  CertificateS3BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The
   * 			object key is formatted as follows: <code>role_arn</code>/<code>certificate_arn</code>.</p>
   * @public
   */
  CertificateS3ObjectKey?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the private key of the certificate.</p>
   * @public
   */
  EncryptionKmsKeyId?: string | undefined;
}

/**
 * <p>Describes an IAM instance profile.</p>
 * @public
 */
export interface IamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface AssociateIamInstanceProfileRequest {
  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Describes an IAM instance profile.</p>
 * @public
 */
export interface IamInstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the instance profile.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IamInstanceProfileAssociationState = {
  ASSOCIATED: "associated",
  ASSOCIATING: "associating",
  DISASSOCIATED: "disassociated",
  DISASSOCIATING: "disassociating",
} as const;

/**
 * @public
 */
export type IamInstanceProfileAssociationState =
  (typeof IamInstanceProfileAssociationState)[keyof typeof IamInstanceProfileAssociationState];

/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 * @public
 */
export interface IamInstanceProfileAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: IamInstanceProfileAssociationState | undefined;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}

/**
 * <p>One or more targets associated with the specified event window. Only one
 *             <i>type</i> of target (instance ID, instance tag, or Dedicated Host ID)
 *          can be associated with an event window.</p>
 * @public
 */
export interface InstanceEventWindowAssociationRequest {
  /**
   * <p>The IDs of the instances to associate with the event window. If the instance is on a
   *          Dedicated Host, you can't specify the Instance ID parameter; you must use the Dedicated
   *          Host ID parameter.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The instance tags to associate with the event window. Any instances associated with the
   *          tags will be associated with the event window.</p>
   * @public
   */
  InstanceTags?: Tag[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts to associate with the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceEventWindowRequest {
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
   * <p>One or more targets associated with the specified event window.</p>
   * @public
   */
  AssociationTarget: InstanceEventWindowAssociationRequest | undefined;
}

/**
 * <p>One or more targets associated with the event window.</p>
 * @public
 */
export interface InstanceEventWindowAssociationTarget {
  /**
   * <p>The IDs of the instances associated with the event window.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The instance tags associated with the event window. Any instances associated with the tags
   *          will be associated with the event window.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IDs of the Dedicated Hosts associated with the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceEventWindowState = {
  active: "active",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
} as const;

/**
 * @public
 */
export type InstanceEventWindowState = (typeof InstanceEventWindowState)[keyof typeof InstanceEventWindowState];

/**
 * @public
 * @enum
 */
export const WeekDay = {
  friday: "friday",
  monday: "monday",
  saturday: "saturday",
  sunday: "sunday",
  thursday: "thursday",
  tuesday: "tuesday",
  wednesday: "wednesday",
} as const;

/**
 * @public
 */
export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 * @public
 */
export interface InstanceEventWindowTimeRange {
  /**
   * <p>The day on which the time range begins.</p>
   * @public
   */
  StartWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range begins.</p>
   * @public
   */
  StartHour?: number | undefined;

  /**
   * <p>The day on which the time range ends.</p>
   * @public
   */
  EndWeekDay?: WeekDay | undefined;

  /**
   * <p>The hour when the time range ends.</p>
   * @public
   */
  EndHour?: number | undefined;
}

/**
 * <p>The event window.</p>
 * @public
 */
export interface InstanceEventWindow {
  /**
   * <p>The ID of the event window.</p>
   * @public
   */
  InstanceEventWindowId?: string | undefined;

  /**
   * <p>One or more time ranges defined for the event window.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRange[] | undefined;

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The cron expression defined for the event window.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>One or more targets associated with the event window.</p>
   * @public
   */
  AssociationTarget?: InstanceEventWindowAssociationTarget | undefined;

  /**
   * <p>The current state of the event window.</p>
   * @public
   */
  State?: InstanceEventWindowState | undefined;

  /**
   * <p>The instance tags associated with the event window.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow | undefined;
}

/**
 * @public
 */
export interface AssociateIpamByoasnRequest {
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
   * <p>The BYOIP CIDR you want to associate with an ASN.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpamByoasnResult {
  /**
   * <p>The ASN and BYOIP CIDR association.</p>
   * @public
   */
  AsnAssociation?: AsnAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateIpamResourceDiscoveryRequest {
  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
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
   * <p>A resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId: string | undefined;

  /**
   * <p>Tag specifications.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>A client token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpamAssociatedResourceDiscoveryStatus = {
  ACTIVE: "active",
  NOT_FOUND: "not-found",
} as const;

/**
 * @public
 */
export type IpamAssociatedResourceDiscoveryStatus =
  (typeof IpamAssociatedResourceDiscoveryStatus)[keyof typeof IpamAssociatedResourceDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const IpamResourceDiscoveryAssociationState = {
  ASSOCIATE_COMPLETE: "associate-complete",
  ASSOCIATE_FAILED: "associate-failed",
  ASSOCIATE_IN_PROGRESS: "associate-in-progress",
  DISASSOCIATE_COMPLETE: "disassociate-complete",
  DISASSOCIATE_FAILED: "disassociate-failed",
  DISASSOCIATE_IN_PROGRESS: "disassociate-in-progress",
  ISOLATE_COMPLETE: "isolate-complete",
  ISOLATE_IN_PROGRESS: "isolate-in-progress",
  RESTORE_IN_PROGRESS: "restore-in-progress",
} as const;

/**
 * @public
 */
export type IpamResourceDiscoveryAssociationState =
  (typeof IpamResourceDiscoveryAssociationState)[keyof typeof IpamResourceDiscoveryAssociationState];

/**
 * <p>An IPAM resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM. IPAM aggregates the resource CIDRs discovered by the associated resource discovery.</p>
 * @public
 */
export interface IpamResourceDiscoveryAssociation {
  /**
   * <p>The Amazon Web Services account ID of the resource discovery owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The resource discovery association ID.</p>
   * @public
   */
  IpamResourceDiscoveryAssociationId?: string | undefined;

  /**
   * <p>The resource discovery association Amazon Resource Name (ARN).</p>
   * @public
   */
  IpamResourceDiscoveryAssociationArn?: string | undefined;

  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string | undefined;

  /**
   * <p>The IPAM ID.</p>
   * @public
   */
  IpamId?: string | undefined;

  /**
   * <p>The IPAM ARN.</p>
   * @public
   */
  IpamArn?: string | undefined;

  /**
   * <p>The IPAM home Region.</p>
   * @public
   */
  IpamRegion?: string | undefined;

  /**
   * <p>Defines if the resource discovery is the default. When you create an IPAM, a default resource discovery is created for your IPAM and it's associated with your IPAM.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The resource discovery status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - Connection or permissions required to read the
   *                results of the resource discovery are intact.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>not-found</code> - Connection or permissions required to read the
   *                results of the resource discovery are broken. This may happen if the owner of the resource discovery stopped sharing it or deleted the resource discovery. Verify the resource discovery still exists and the Amazon Web Services RAM resource share is still intact.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceDiscoveryStatus?: IpamAssociatedResourceDiscoveryStatus | undefined;

  /**
   * <p>The lifecycle state of the association when you associate or disassociate a resource discovery.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>associate-in-progress</code> - Resource discovery is being associated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associate-complete</code> - Resource discovery association is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>associate-failed</code> - Resource discovery association has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociate-in-progress</code> - Resource discovery is being disassociated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociate-complete</code> - Resource discovery disassociation is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>disassociate-failed </code> - Resource discovery disassociation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery association has been removed and the resource discovery associatation is being isolated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>isolate-complete</code> - Resource discovery isolation is complete..</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>restore-in-progress</code> - Resource discovery is being restored.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: IpamResourceDiscoveryAssociationState | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM.</p>
   * @public
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateNatGatewayAddressRequest {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId: string | undefined;

  /**
   * <p>The allocation IDs of EIPs that you want to associate with your NAT gateway.</p>
   * @public
   */
  AllocationIds: string[] | undefined;

  /**
   * <p>The private IPv4 addresses that you want to assign to the NAT gateway.</p>
   * @public
   */
  PrivateIpAddresses?: string[] | undefined;

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
export interface AssociateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string | undefined;

  /**
   * <p>The IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}

/**
 * @public
 */
export interface AssociateRouteTableRequest {
  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteTableAssociationStateCode = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  failed: "failed",
} as const;

/**
 * @public
 */
export type RouteTableAssociationStateCode =
  (typeof RouteTableAssociationStateCode)[keyof typeof RouteTableAssociationStateCode];

/**
 * <p>Describes the state of an association between a route table and a subnet or gateway.</p>
 * @public
 */
export interface RouteTableAssociationState {
  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: RouteTableAssociationStateCode | undefined;

  /**
   * <p>The status message, if applicable.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociateRouteTableResult {
  /**
   * <p>The route table association ID. This ID is required for disassociating the route
   * 			table.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  AssociationState?: RouteTableAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityGroupVpcRequest {
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
 * @enum
 */
export const SecurityGroupVpcAssociationState = {
  associated: "associated",
  associating: "associating",
  association_failed: "association-failed",
  disassociated: "disassociated",
  disassociating: "disassociating",
  disassociation_failed: "disassociation-failed",
} as const;

/**
 * @public
 */
export type SecurityGroupVpcAssociationState =
  (typeof SecurityGroupVpcAssociationState)[keyof typeof SecurityGroupVpcAssociationState];

/**
 * @public
 */
export interface AssociateSecurityGroupVpcResult {
  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: SecurityGroupVpcAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockRequest {
  /**
   * <p>An IPv6 IPAM pool ID.</p>
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * <p>An IPv6 netmask length.</p>
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * <p>The ID of your subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The IPv6 CIDR block for your subnet.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpSource = {
  amazon: "amazon",
  byoip: "byoip",
  none: "none",
} as const;

/**
 * @public
 */
export type IpSource = (typeof IpSource)[keyof typeof IpSource];

/**
 * @public
 * @enum
 */
export const Ipv6AddressAttribute = {
  private: "private",
  public: "public",
} as const;

/**
 * @public
 */
export type Ipv6AddressAttribute = (typeof Ipv6AddressAttribute)[keyof typeof Ipv6AddressAttribute];

/**
 * @public
 * @enum
 */
export const SubnetCidrBlockStateCode = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  failed: "failed",
  failing: "failing",
} as const;

/**
 * @public
 */
export type SubnetCidrBlockStateCode = (typeof SubnetCidrBlockStateCode)[keyof typeof SubnetCidrBlockStateCode];

/**
 * <p>Describes the state of a CIDR block.</p>
 * @public
 */
export interface SubnetCidrBlockState {
  /**
   * <p>The state of a CIDR block.</p>
   * @public
   */
  State?: SubnetCidrBlockStateCode | undefined;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Describes an association between a subnet and an IPv6 CIDR block.</p>
 * @public
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>The state of the CIDR block.</p>
   * @public
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState | undefined;

  /**
   * <p>Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.</p>
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpSource | undefined;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 association.</p>
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
export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to associate with the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
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
export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayPolicyTableRequest {
  /**
   * <p>The ID of the transit gateway policy table to associate with the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayPolicyTableId: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment to associate with the policy table.</p>
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
 * @enum
 */
export const TransitGatewayAssociationState = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
} as const;

/**
 * @public
 */
export type TransitGatewayAssociationState =
  (typeof TransitGatewayAssociationState)[keyof typeof TransitGatewayAssociationState];

/**
 * <p>Describes a transit gateway policy table association.</p>
 * @public
 */
export interface TransitGatewayPolicyTableAssociation {
  /**
   * <p>The ID of the transit gateway policy table.</p>
   * @public
   */
  TransitGatewayPolicyTableId?: string | undefined;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string | undefined;

  /**
   * <p>The resource ID of the transit gateway attachment.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The resource type for the transit gateway policy table association.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;

  /**
   * <p>The state of the transit gateway policy table association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the association of a transit gateway and a transit gateway policy table.</p>
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateTransitGatewayRouteTableRequest {
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
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 * @public
 */
export interface TransitGatewayAssociation {
  /**
   * <p>The ID of the transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableId?: string | undefined;

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
export interface AssociateTransitGatewayRouteTableResult {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  Association?: TransitGatewayAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateTrunkInterfaceRequest {
  /**
   * <p>The ID of the branch network interface.</p>
   * @public
   */
  BranchInterfaceId: string | undefined;

  /**
   * <p>The ID of the trunk network interface.</p>
   * @public
   */
  TrunkInterfaceId: string | undefined;

  /**
   * <p>The ID of the VLAN. This applies to the VLAN protocol.</p>
   * @public
   */
  VlanId?: number | undefined;

  /**
   * <p>The application key. This applies to the GRE protocol.</p>
   * @public
   */
  GreKey?: number | undefined;

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
 * @enum
 */
export const InterfaceProtocolType = {
  GRE: "GRE",
  VLAN: "VLAN",
} as const;

/**
 * @public
 */
export type InterfaceProtocolType = (typeof InterfaceProtocolType)[keyof typeof InterfaceProtocolType];

/**
 * <p>Information about an association between a branch network interface with a trunk network interface.</p>
 * @public
 */
export interface TrunkInterfaceAssociation {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The ID of the branch network interface.</p>
   * @public
   */
  BranchInterfaceId?: string | undefined;

  /**
   * <p>The ID of the trunk network interface.</p>
   * @public
   */
  TrunkInterfaceId?: string | undefined;

  /**
   * <p>The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   * @public
   */
  InterfaceProtocol?: InterfaceProtocolType | undefined;

  /**
   * <p>The ID of the VLAN when you use the VLAN protocol.</p>
   * @public
   */
  VlanId?: number | undefined;

  /**
   * <p>The application key when you use the GRE protocol.</p>
   * @public
   */
  GreKey?: number | undefined;

  /**
   * <p>The tags for the trunk interface association.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AssociateTrunkInterfaceResult {
  /**
   * <p>Information about the association between the trunk network interface and branch network interface.</p>
   * @public
   */
  InterfaceAssociation?: TrunkInterfaceAssociation | undefined;

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
export interface AssociateVpcCidrBlockRequest {
  /**
   * <p>An IPv4 CIDR block to associate with the VPC.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
   *       to limit the CIDR block to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   *          <p> You can have one IPv6 CIDR block association per network border group.</p>
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *          <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  Ipv4NetmaskLength?: number | undefined;

  /**
   * <p>Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6IpamPoolId?: string | undefined;

  /**
   * <p>The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
   * @public
   */
  Ipv6NetmaskLength?: number | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You
   *             cannot specify the range of IPv6 addresses or the size of the CIDR block.</p>
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcCidrBlockStateCode = {
  associated: "associated",
  associating: "associating",
  disassociated: "disassociated",
  disassociating: "disassociating",
  failed: "failed",
  failing: "failing",
} as const;

/**
 * @public
 */
export type VpcCidrBlockStateCode = (typeof VpcCidrBlockStateCode)[keyof typeof VpcCidrBlockStateCode];

/**
 * <p>Describes the state of a CIDR block.</p>
 * @public
 */
export interface VpcCidrBlockState {
  /**
   * <p>The state of the CIDR block.</p>
   * @public
   */
  State?: VpcCidrBlockStateCode | undefined;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 * @public
 */
export interface VpcCidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The IPv4 CIDR block.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>Information about the state of the CIDR block.</p>
   * @public
   */
  CidrBlockState?: VpcCidrBlockState | undefined;
}

/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 * @public
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>Information about the state of the CIDR block.</p>
   * @public
   */
  Ipv6CidrBlockState?: VpcCidrBlockState | undefined;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   * @public
   */
  NetworkBorderGroup?: string | undefined;

  /**
   * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   * @public
   */
  Ipv6Pool?: string | undefined;

  /**
   * <p>Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.</p>
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpSource | undefined;
}

/**
 * @public
 */
export interface AssociateVpcCidrBlockResult {
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
export interface AttachClassicLinkVpcRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the EC2-Classic instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the ClassicLink-enabled VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of the security groups. You cannot specify security groups from a different VPC.</p>
   * @public
   */
  Groups: string[] | undefined;
}

/**
 * @public
 */
export interface AttachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface AttachInternetGatewayRequest {
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
 * <p>ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic
 * 			automatically uses it. However, some UDP-based applications are designed to handle network packets that are
 * 			out of order, without a need for retransmission, such as live video broadcasting or other near-real-time
 * 			applications. For UDP traffic, you can specify whether to use ENA Express, based on your application
 * 			environment needs.</p>
 * @public
 */
export interface EnaSrdUdpSpecification {
  /**
   * <p>Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting,
   * 			you must first enable ENA Express.</p>
   * @public
   */
  EnaSrdUdpEnabled?: boolean | undefined;
}

/**
 * <p>ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the
 * 			maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances.
 * 			With ENA Express, you can communicate between two EC2 instances in the same subnet within the same
 * 			account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.</p>
 *          <p>To improve the reliability of network packet delivery, ENA Express reorders network packets on the
 * 			receiving end by default. However, some UDP-based applications are designed to handle network packets
 * 			that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express
 * 			is enabled, you can specify whether UDP network traffic uses it.</p>
 * @public
 */
export interface EnaSrdSpecification {
  /**
   * <p>Indicates whether ENA Express is enabled for the network interface.</p>
   * @public
   */
  EnaSrdEnabled?: boolean | undefined;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification | undefined;
}

/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 * @public
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;

  /**
   * <p>Configures ENA Express for the network interface that this action attaches to the instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   * @public
   */
  DeviceIndex: number | undefined;
}

/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 * @public
 */
export interface AttachNetworkInterfaceResult {
  /**
   * <p>The ID of the network interface attachment.</p>
   * @public
   */
  AttachmentId?: string | undefined;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number | undefined;
}

/**
 * @public
 */
export interface AttachVerifiedAccessTrustProviderRequest {
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
 * @enum
 */
export const DeviceTrustProviderType = {
  crowdstrike: "crowdstrike",
  jamf: "jamf",
  jumpcloud: "jumpcloud",
} as const;

/**
 * @public
 */
export type DeviceTrustProviderType = (typeof DeviceTrustProviderType)[keyof typeof DeviceTrustProviderType];

/**
 * @public
 * @enum
 */
export const TrustProviderType = {
  device: "device",
  user: "user",
} as const;

/**
 * @public
 */
export type TrustProviderType = (typeof TrustProviderType)[keyof typeof TrustProviderType];

/**
 * @public
 * @enum
 */
export const UserTrustProviderType = {
  iam_identity_center: "iam-identity-center",
  oidc: "oidc",
} as const;

/**
 * @public
 */
export type UserTrustProviderType = (typeof UserTrustProviderType)[keyof typeof UserTrustProviderType];

/**
 * <p>Condensed information about a trust provider.</p>
 * @public
 */
export interface VerifiedAccessTrustProviderCondensed {
  /**
   * <p>The ID of the trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId?: string | undefined;

  /**
   * <p>The description of trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of trust provider (user- or device-based).</p>
   * @public
   */
  TrustProviderType?: TrustProviderType | undefined;

  /**
   * <p>The type of user-based trust provider.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * <p>The type of device-based trust provider.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;
}

/**
 * <p>Describes a Verified Access instance.</p>
 * @public
 */
export interface VerifiedAccessInstance {
  /**
   * <p>The ID of the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstanceId?: string | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IDs of the Amazon Web Services Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProviderCondensed[] | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether support for Federal Information Processing Standards (FIPS) is enabled on the instance.</p>
   * @public
   */
  FipsEnabled?: boolean | undefined;
}

/**
 * <p>Describes the options for an Amazon Web Services Verified Access device-identity based trust provider.</p>
 * @public
 */
export interface DeviceOptions {
  /**
   * <p>The ID of the tenant application with the device-identity provider.</p>
   * @public
   */
  TenantId?: string | undefined;

  /**
   * <p>
   *          The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *       </p>
   * @public
   */
  PublicSigningKeyUrl?: string | undefined;
}

/**
 * <p>Describes the options for an OpenID Connect-compatible user-identity trust
 *          provider.</p>
 * @public
 */
export interface OidcOptions {
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
   * <p>The OpenID Connect (OIDC) scope specified.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * <p>The options in use for server side encryption.</p>
 * @public
 */
export interface VerifiedAccessSseSpecificationResponse {
  /**
   * <p>Indicates whether customer managed KMS keys are in use for server side encryption.</p>
   *          <p>Valid values: <code>True</code> | <code>False</code>
   *          </p>
   * @public
   */
  CustomerManagedKeyEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the KMS key.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Describes a Verified Access trust provider.</p>
 * @public
 */
export interface VerifiedAccessTrustProvider {
  /**
   * <p>The ID of the Amazon Web Services Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProviderId?: string | undefined;

  /**
   * <p>A description for the Amazon Web Services Verified Access trust provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of Verified Access trust provider.</p>
   * @public
   */
  TrustProviderType?: TrustProviderType | undefined;

  /**
   * <p>The type of user-based trust provider.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType | undefined;

  /**
   * <p>The type of device-based trust provider.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;

  /**
   * <p>The options for an OpenID Connect-compatible user-identity trust provider.</p>
   * @public
   */
  OidcOptions?: OidcOptions | undefined;

  /**
   * <p>The options for device-identity trust provider.</p>
   * @public
   */
  DeviceOptions?: DeviceOptions | undefined;

  /**
   * <p>The identifier to be used when working with policy rules.</p>
   * @public
   */
  PolicyReferenceName?: string | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
}

/**
 * @public
 */
export interface AttachVerifiedAccessTrustProviderResult {
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
export interface AttachVolumeRequest {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   * @public
   */
  Device: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the EBS volume. The volume and instance must be within the same Availability
   *       Zone.</p>
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
 * @enum
 */
export const VolumeAttachmentState = {
  attached: "attached",
  attaching: "attaching",
  busy: "busy",
  detached: "detached",
  detaching: "detaching",
} as const;

/**
 * @public
 */
export type VolumeAttachmentState = (typeof VolumeAttachmentState)[keyof typeof VolumeAttachmentState];

/**
 * <p>Describes volume attachment details.</p>
 * @public
 */
export interface VolumeAttachment {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * <p>The ARN of the Amazon ECS or Fargate task
   *       to which the volume is attached.</p>
   * @public
   */
  AssociatedResource?: string | undefined;

  /**
   * <p>The service principal of Amazon Web Services service that owns the underlying
   *       instance to which the volume is attached.</p>
   *          <p>This parameter is returned only for volumes that are attached to
   *       Fargate tasks.</p>
   * @public
   */
  InstanceOwningService?: string | undefined;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   *          <p>If the volume is attached to a Fargate task, this parameter
   *       returns <code>null</code>.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The device name.</p>
   *          <p>If the volume is attached to a Fargate task, this parameter
   *       returns <code>null</code>.</p>
   * @public
   */
  Device?: string | undefined;

  /**
   * <p>The attachment state of the volume.</p>
   * @public
   */
  State?: VolumeAttachmentState | undefined;

  /**
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date | undefined;
}

/**
 * <p>Contains the parameters for AttachVpnGateway.</p>
 * @public
 */
export interface AttachVpnGatewayRequest {
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
 * @enum
 */
export const AttachmentStatus = {
  attached: "attached",
  attaching: "attaching",
  detached: "detached",
  detaching: "detaching",
} as const;

/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 * @public
 */
export interface VpcAttachment {
  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The current state of the attachment.</p>
   * @public
   */
  State?: AttachmentStatus | undefined;
}

/**
 * <p>Contains the output of AttachVpnGateway.</p>
 * @public
 */
export interface AttachVpnGatewayResult {
  /**
   * <p>Information about the attachment.</p>
   * @public
   */
  VpcAttachment?: VpcAttachment | undefined;
}

/**
 * @public
 */
export interface AuthorizeClientVpnIngressRequest {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   * @public
   */
  ClientVpnEndpointId: string | undefined;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the network for which access is being authorized.</p>
   * @public
   */
  TargetNetworkCidr: string | undefined;

  /**
   * <p>The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.</p>
   * @public
   */
  AccessGroupId?: string | undefined;

  /**
   * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
   *             clients who successfully establish a VPN connection access to the network. Must be set
   *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
   * @public
   */
  AuthorizeAllGroups?: boolean | undefined;

  /**
   * <p>A brief description of the authorization rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

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
export const ClientVpnAuthorizationRuleStatusCode = {
  active: "active",
  authorizing: "authorizing",
  failed: "failed",
  revoking: "revoking",
} as const;

/**
 * @public
 */
export type ClientVpnAuthorizationRuleStatusCode =
  (typeof ClientVpnAuthorizationRuleStatusCode)[keyof typeof ClientVpnAuthorizationRuleStatusCode];

/**
 * <p>Describes the state of an authorization rule.</p>
 * @public
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * <p>The state of the authorization rule.</p>
   * @public
   */
  Code?: ClientVpnAuthorizationRuleStatusCode | undefined;

  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}

/**
 * <p>Describes an IPv4 address range.</p>
 * @public
 */
export interface IpRange {
  /**
   * <p>A description for the security group rule that references this IPv4 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IPv4 address range. You can either specify a CIDR block or a source security group,
   *             not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   * @public
   */
  CidrIp?: string | undefined;
}

/**
 * <p>Describes an IPv6 address range.</p>
 * @public
 */
export interface Ipv6Range {
  /**
   * <p>A description for the security group rule that references this IPv6 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IPv6 address range. You can either specify a CIDR block or a source security group,
   *         not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   * @public
   */
  CidrIpv6?: string | undefined;
}

/**
 * <p>Describes a prefix list ID.</p>
 * @public
 */
export interface PrefixListId {
  /**
   * <p>A description for the security group rule that references this prefix list ID.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;\{\}!$*</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the prefix.</p>
   * @public
   */
  PrefixListId?: string | undefined;
}

/**
 * <p>Describes a security group and Amazon Web Services account ID pair.</p>
 * @public
 */
export interface UserIdGroupPair {
  /**
   * <p>A description for the security group rule that references this user ID group
   * 			pair.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *       spaces, and ._-:/()#,@[]+=;\{\}!$*</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of an Amazon Web Services account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *             security group is returned in the response. If the referenced security group is deleted,
   *             this value is not returned.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. For a security group in a nondefault VPC,
   *          use the security group ID. </p>
   *          <p>For a referenced security group in another VPC, this value is not returned if the
   *             referenced security group is deleted.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   * @public
   */
  PeeringStatus?: string | undefined;
}

/**
 * <p>Describes the permissions for a security group rule.</p>
 * @public
 */
export interface IpPermission {
  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>)
   *         or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).</p>
   *          <p>Use <code>-1</code> to specify all protocols. When authorizing
   *         security group rules, specifying <code>-1</code> or a protocol number other than
   *         <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
   *         traffic on all ports, regardless of any port range you specify. For <code>tcp</code>,
   *         <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>,
   *         the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *         If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *           If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The security group and Amazon Web Services account ID pairs.</p>
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;

  /**
   * <p>The IPv4 address ranges.</p>
   * @public
   */
  IpRanges?: IpRange[] | undefined;

  /**
   * <p>The IPv6 address ranges.</p>
   * @public
   */
  Ipv6Ranges?: Ipv6Range[] | undefined;

  /**
   * <p>The prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: PrefixListId[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * <p>The tags applied to the security group rule.</p>
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
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>The permissions for the security group rules.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;
}

/**
 * <p> Describes the security group that is referenced in the security group rule.</p>
 * @public
 */
export interface ReferencedSecurityGroup {
  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   * @public
   */
  PeeringStatus?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the VPC peering connection (if applicable).</p>
   * @public
   */
  VpcPeeringConnectionId?: string | undefined;
}

/**
 * <p>Describes a security group rule.</p>
 * @public
 */
export interface SecurityGroupRule {
  /**
   * <p>The ID of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleId?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the security group. </p>
   * @public
   */
  GroupOwnerId?: string | undefined;

  /**
   * <p>Indicates whether the security group rule is an outbound rule.</p>
   * @public
   */
  IsEgress?: boolean | undefined;

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
   * <p>The IPv4 CIDR range.</p>
   * @public
   */
  CidrIpv4?: string | undefined;

  /**
   * <p>The IPv6 CIDR range.</p>
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>Describes the security group that is referenced in the rule.</p>
   * @public
   */
  ReferencedGroupInfo?: ReferencedSecurityGroup | undefined;

  /**
   * <p>The security group rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags applied to the security group rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ARN of the security group rule.</p>
   * @public
   */
  SecurityGroupRuleArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>Information about the outbound (egress) security group rules that were added.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * <p>The IPv4 address range, in CIDR format.</p>
   *          <p>To specify an IPv6 address range, use IP permissions instead.</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>[Default VPC] The name of the security group. For security groups for a default VPC
   *          you can specify either the ID or the name of the security group. For security groups for
   *          a nondefault VPC, you must specify the ID of the security group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The permissions for the security group rules.</p>
   * @public
   */
  IpPermissions?: IpPermission[] | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify all protocols, use <code>-1</code>.</p>
   *          <p>To specify <code>icmpv6</code>, use IP permissions instead.</p>
   *          <p>If you specify a protocol other than one of the supported values, traffic is allowed
   *          on all ports, regardless of any ports that you specify.</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  IpProtocol?: string | undefined;

  /**
   * <p>[Default VPC] The name of the source security group.</p>
   *          <p>The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol
   *              and port range, specify a set of IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the source security group, if the source security group is
   *          in a different account.</p>
   *          <p>The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol
   *          and port range, use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string | undefined;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *            If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).
   *            If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  ToPort?: number | undefined;

  /**
   * <p>The tags applied to the security group rule.</p>
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
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>Information about the inbound (ingress) security group rules that were added.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}

/**
 * <p>Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed
 *       AMI.</p>
 * @public
 */
export interface S3Storage {
  /**
   * <p>The access key ID of the owner of the bucket. Before you specify a value for your access
   *       key ID, review and follow the guidance in <a href="https://docs.aws.amazon.com/accounts/latest/reference/best-practices.html">Best Practices for Amazon Web Services
   *         accounts</a> in the <i>Account ManagementReference Guide</i>.</p>
   * @public
   */
  AWSAccessKeyId?: string | undefined;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a
   *       new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone
   *       else, Amazon EC2 returns an error.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The beginning of the file name of the AMI.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your
   *       behalf.</p>
   * @public
   */
  UploadPolicy?: Uint8Array | undefined;

  /**
   * <p>The signature of the JSON document.</p>
   * @public
   */
  UploadPolicySignature?: string | undefined;
}

/**
 * <p>Describes the storage location for an instance store-backed AMI.</p>
 * @public
 */
export interface Storage {
  /**
   * <p>An Amazon S3 storage location.</p>
   * @public
   */
  S3?: S3Storage | undefined;
}

/**
 * <p>Contains the parameters for BundleInstance.</p>
 * @public
 */
export interface BundleInstanceRequest {
  /**
   * <p>The ID of the instance to bundle.</p>
   *          <p>Default: None</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a
   *       new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone
   *       else, Amazon EC2 returns an error.</p>
   * @public
   */
  Storage: Storage | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Describes an error for <a>BundleInstance</a>.</p>
 * @public
 */
export interface BundleTaskError {
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
 * @public
 * @enum
 */
export const BundleTaskState = {
  bundling: "bundling",
  cancelling: "cancelling",
  complete: "complete",
  failed: "failed",
  pending: "pending",
  storing: "storing",
  waiting_for_shutdown: "waiting-for-shutdown",
} as const;

/**
 * @public
 */
export type BundleTaskState = (typeof BundleTaskState)[keyof typeof BundleTaskState];

/**
 * <p>Describes a bundle task.</p>
 * @public
 */
export interface BundleTask {
  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ID of the bundle task.</p>
   * @public
   */
  BundleId?: string | undefined;

  /**
   * <p>The state of the task.</p>
   * @public
   */
  State?: BundleTaskState | undefined;

  /**
   * <p>The time this task started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time of the most recent update for the task.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The Amazon S3 storage locations.</p>
   * @public
   */
  Storage?: Storage | undefined;

  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   * @public
   */
  Progress?: string | undefined;

  /**
   * <p>If the task fails, a description of the error.</p>
   * @public
   */
  BundleTaskError?: BundleTaskError | undefined;
}

/**
 * <p>Contains the output of BundleInstance.</p>
 * @public
 */
export interface BundleInstanceResult {
  /**
   * <p>Information about the bundle task.</p>
   * @public
   */
  BundleTask?: BundleTask | undefined;
}

/**
 * <p>Contains the parameters for CancelBundleTask.</p>
 * @public
 */
export interface CancelBundleTaskRequest {
  /**
   * <p>The ID of the bundle task.</p>
   * @public
   */
  BundleId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Contains the output of CancelBundleTask.</p>
 * @public
 */
export interface CancelBundleTaskResult {
  /**
   * <p>Information about the bundle task.</p>
   * @public
   */
  BundleTask?: BundleTask | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationRequest {
  /**
   * <p>The ID of the Capacity Reservation to be cancelled.</p>
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
export interface CancelCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Capacity Reservation Fleets to cancel.</p>
   * @public
   */
  CapacityReservationFleetIds: string[] | undefined;
}

/**
 * <p>Describes a Capacity Reservation Fleet cancellation error.</p>
 * @public
 */
export interface CancelCapacityReservationFleetError {
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
 * <p>Describes a Capacity Reservation Fleet that could not be cancelled.</p>
 * @public
 */
export interface FailedCapacityReservationFleetCancellationResult {
  /**
   * <p>The ID of the Capacity Reservation Fleet that could not be cancelled.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;

  /**
   * <p>Information about the Capacity Reservation Fleet cancellation error.</p>
   * @public
   */
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationFleetState = {
  ACTIVE: "active",
  CANCELLED: "cancelled",
  CANCELLING: "cancelling",
  EXPIRED: "expired",
  EXPIRING: "expiring",
  FAILED: "failed",
  MODIFYING: "modifying",
  PARTIALLY_FULFILLED: "partially_fulfilled",
  SUBMITTED: "submitted",
} as const;

/**
 * @public
 */
export type CapacityReservationFleetState =
  (typeof CapacityReservationFleetState)[keyof typeof CapacityReservationFleetState];

/**
 * <p>Describes a Capacity Reservation Fleet that was successfully cancelled.</p>
 * @public
 */
export interface CapacityReservationFleetCancellationState {
  /**
   * <p>The current state of the Capacity Reservation Fleet.</p>
   * @public
   */
  CurrentFleetState?: CapacityReservationFleetState | undefined;

  /**
   * <p>The previous state of the Capacity Reservation Fleet.</p>
   * @public
   */
  PreviousFleetState?: CapacityReservationFleetState | undefined;

  /**
   * <p>The ID of the Capacity Reservation Fleet that was successfully cancelled.</p>
   * @public
   */
  CapacityReservationFleetId?: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets that were successfully
   * 			cancelled.</p>
   * @public
   */
  SuccessfulFleetCancellations?: CapacityReservationFleetCancellationState[] | undefined;

  /**
   * <p>Information about the Capacity Reservation Fleets that could not be cancelled.</p>
   * @public
   */
  FailedFleetCancellations?: FailedCapacityReservationFleetCancellationResult[] | undefined;
}

/**
 * @public
 */
export interface CancelConversionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the conversion task.</p>
   * @public
   */
  ConversionTaskId: string | undefined;

  /**
   * <p>The reason for canceling the conversion task.</p>
   * @public
   */
  ReasonMessage?: string | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task. This is the ID returned by the
   *     <code>CreateInstanceExportTask</code> and <code>ExportImage</code> operations.</p>
   * @public
   */
  ExportTaskId: string | undefined;
}

/**
 * @public
 */
export interface CancelImageLaunchPermissionRequest {
  /**
   * <p>The ID of the AMI that was shared with your Amazon Web Services account.</p>
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
export interface CancelImageLaunchPermissionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskRequest {
  /**
   * <p>The reason for canceling the task.</p>
   * @public
   */
  CancelReason?: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the import image or import snapshot task to be canceled.</p>
   * @public
   */
  ImportTaskId?: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskResult {
  /**
   * <p>The ID of the task being canceled.</p>
   * @public
   */
  ImportTaskId?: string | undefined;

  /**
   * <p>The current state of the task being canceled.</p>
   * @public
   */
  PreviousState?: string | undefined;

  /**
   * <p>The current state of the task being canceled.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * <p>Contains the parameters for CancelReservedInstancesListing.</p>
 * @public
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * <p>The ID of the Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListingId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListingState = {
  available: "available",
  cancelled: "cancelled",
  pending: "pending",
  sold: "sold",
} as const;

/**
 * @public
 */
export type ListingState = (typeof ListingState)[keyof typeof ListingState];

/**
 * <p>Describes a Reserved Instance listing state.</p>
 * @public
 */
export interface InstanceCount {
  /**
   * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   * @public
   */
  State?: ListingState | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrencyCodeValues = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCodeValues = (typeof CurrencyCodeValues)[keyof typeof CurrencyCodeValues];

/**
 * <p>Describes the price for a Reserved Instance.</p>
 * @public
 */
export interface PriceSchedule {
  /**
   * <p>The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.</p>
   *          <p>A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.</p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues | undefined;

  /**
   * <p>The fixed price for the term.</p>
   * @public
   */
  Price?: number | undefined;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   * @public
   */
  Term?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ListingStatus = {
  active: "active",
  cancelled: "cancelled",
  closed: "closed",
  pending: "pending",
} as const;

/**
 * @public
 */
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];

/**
 * <p>Describes a Reserved Instance listing.</p>
 * @public
 */
export interface ReservedInstancesListing {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
   * 			idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The time the listing was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The number of instances in this state.</p>
   * @public
   */
  InstanceCounts?: InstanceCount[] | undefined;

  /**
   * <p>The price of the Reserved Instance listing.</p>
   * @public
   */
  PriceSchedules?: PriceSchedule[] | undefined;

  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string | undefined;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListingId?: string | undefined;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   * @public
   */
  Status?: ListingStatus | undefined;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The last modified timestamp of the listing.</p>
   * @public
   */
  UpdateDate?: Date | undefined;
}

/**
 * <p>Contains the output of CancelReservedInstancesListing.</p>
 * @public
 */
export interface CancelReservedInstancesListingResult {
  /**
   * <p>The Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}

/**
 * <p>Contains the parameters for CancelSpotFleetRequests.</p>
 * @public
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The IDs of the Spot Fleet requests.</p>
   *          <p>Constraint: You can specify up to 100 IDs in a single request.</p>
   * @public
   */
  SpotFleetRequestIds: string[] | undefined;

  /**
   * <p>Indicates whether to terminate the associated instances when the Spot Fleet request is canceled.
   *         The default is to terminate the instances.</p>
   *          <p>To let the instances continue to run after the Spot Fleet request is canceled, specify
   *           <code>no-terminate-instances</code>.</p>
   * @public
   */
  TerminateInstances: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchState = {
  ACTIVE: "active",
  CANCELLED: "cancelled",
  CANCELLED_RUNNING: "cancelled_running",
  CANCELLED_TERMINATING_INSTANCES: "cancelled_terminating",
  FAILED: "failed",
  MODIFYING: "modifying",
  SUBMITTED: "submitted",
} as const;

/**
 * @public
 */
export type BatchState = (typeof BatchState)[keyof typeof BatchState];

/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 * @public
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * <p>The current state of the Spot Fleet request.</p>
   * @public
   */
  CurrentSpotFleetRequestState?: BatchState | undefined;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   * @public
   */
  PreviousSpotFleetRequestState?: BatchState | undefined;

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
export const CancelBatchErrorCode = {
  FLEET_REQUEST_ID_DOES_NOT_EXIST: "fleetRequestIdDoesNotExist",
  FLEET_REQUEST_ID_MALFORMED: "fleetRequestIdMalformed",
  FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE: "fleetRequestNotInCancellableState",
  UNEXPECTED_ERROR: "unexpectedError",
} as const;

/**
 * @public
 */
export type CancelBatchErrorCode = (typeof CancelBatchErrorCode)[keyof typeof CancelBatchErrorCode];

/**
 * <p>Describes a Spot Fleet error.</p>
 * @public
 */
export interface CancelSpotFleetRequestsError {
  /**
   * <p>The error code.</p>
   * @public
   */
  Code?: CancelBatchErrorCode | undefined;

  /**
   * <p>The description for the error code.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 * @public
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * <p>The error.</p>
   * @public
   */
  Error?: CancelSpotFleetRequestsError | undefined;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string | undefined;
}

/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 * @public
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
   * @public
   */
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[] | undefined;

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   * @public
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[] | undefined;
}

/**
 * <p>Contains the parameters for CancelSpotInstanceRequests.</p>
 * @public
 */
export interface CancelSpotInstanceRequestsRequest {
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
  SpotInstanceRequestIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CancelSpotInstanceRequestState = {
  active: "active",
  cancelled: "cancelled",
  closed: "closed",
  completed: "completed",
  open: "open",
} as const;

/**
 * @public
 */
export type CancelSpotInstanceRequestState =
  (typeof CancelSpotInstanceRequestState)[keyof typeof CancelSpotInstanceRequestState];

/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 * @public
 */
export interface CancelledSpotInstanceRequest {
  /**
   * <p>The ID of the Spot Instance request.</p>
   * @public
   */
  SpotInstanceRequestId?: string | undefined;

  /**
   * <p>The state of the Spot Instance request.</p>
   * @public
   */
  State?: CancelSpotInstanceRequestState | undefined;
}

/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 * @public
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * <p>The Spot Instance requests.</p>
   * @public
   */
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[] | undefined;
}

/**
 * @public
 */
export interface ConfirmProductInstanceRequest {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The product code. This must be a product code that you own.</p>
   * @public
   */
  ProductCode: string | undefined;

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
export interface ConfirmProductInstanceResult {
  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product
   *             code is owned by the requester and associated with the specified instance.</p>
   * @public
   */
  Return?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID of the instance owner. This is only present if the
   *             product code is attached to the instance.</p>
   * @public
   */
  OwnerId?: string | undefined;
}

/**
 * @public
 */
export interface CopyFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>The ID of the source AFI.</p>
   * @public
   */
  SourceFpgaImageId: string | undefined;

  /**
   * <p>The description for the new AFI.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name for the new AFI. The default is the name of the source AFI.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Region that contains the source AFI.</p>
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *       	For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CopyFpgaImageResult {
  /**
   * <p>The ID of the new AFI.</p>
   * @public
   */
  FpgaImageId?: string | undefined;
}

/**
 * <p>Contains the parameters for CopyImage.</p>
 * @public
 */
export interface CopyImageRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of the request. For
   *       more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *       in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description for the new AMI in the destination Region.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies whether the destination snapshots of the copied image should be encrypted. You
   *       can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted copy of an
   *       encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default
   *       Key Management Service (KMS) KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with
   *         EBS-backed AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating encrypted volumes.
   *       If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used. If you
   *       specify a KMS key, you must also set the encrypted state to <code>true</code>.</p>
   *          <p>You can specify a KMS key using any of the following:</p>
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
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier
   *       that is not valid, the action can appear to complete, but eventually fails.</p>
   *          <p>The specified KMS key must exist in the destination Region.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the new AMI in the destination Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the AMI to copy.</p>
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * <p>The name of the Region that contains the AMI to copy.</p>
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only specify this
   *       parameter when copying an AMI from an Amazon Web Services Region to an Outpost. The AMI must be in the
   *       Region of the destination Outpost. You cannot copy an AMI from an Outpost to a Region, from
   *       one Outpost to another, or within the same Outpost.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#copy-amis">Copy AMIs from an Amazon Web Services Region
   *         to an Outpost</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  DestinationOutpostArn?: string | undefined;

  /**
   * <p>Indicates whether to include your user-defined AMI tags when copying the AMI.</p>
   *          <p>The following tags will not be copied:</p>
   *          <ul>
   *             <li>
   *                <p>System tags (prefixed with <code>aws:</code>)</p>
   *             </li>
   *             <li>
   *                <p>For public and shared AMIs, user-defined tags that are attached by other Amazon Web Services
   *           accounts</p>
   *             </li>
   *          </ul>
   *          <p>Default: Your user-defined AMI tags are not copied.</p>
   * @public
   */
  CopyImageTags?: boolean | undefined;

  /**
   * <p>The tags to apply to the new AMI and new snapshots. You can tag the AMI, the snapshots, or
   *       both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the new AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To tag the new snapshots, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all the new snapshots.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
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
}

/**
 * <p>Contains the output of CopyImage.</p>
 * @public
 */
export interface CopyImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * <p>A description for the EBS snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the snapshot. Only
   * 		specify this parameter when copying a snapshot from an Amazon Web Services Region to an Outpost.
   * 		The snapshot must be in the Region for the destination Outpost. You cannot copy a
   * 		snapshot from an Outpost to a Region, from one Outpost to another, or within the same
   * 		Outpost.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#copy-snapshots">
   *   		Copy snapshots from an Amazon Web Services Region to an Outpost</a> in the
   *   		<i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  DestinationOutpostArn?: string | undefined;

  /**
   * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot
   *       copy operation. This parameter is only valid for specifying the destination Region in a
   *         <code>PresignedUrl</code> parameter, where it is required.</p>
   *          <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP
   *     	request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the CLI, this is
   *       specified using the <code>--region</code> parameter or the default Region in your Amazon Web Services
   *       configuration file.</p>
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
   *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
   *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a
   *       pre-signed URL. This parameter is optional for unencrypted snapshots. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query
   *         requests</a>.</p>
   *          <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the
   *         <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>,
   *         <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The
   *         <code>PresignedUrl</code> must be signed using Amazon Web Services Signature Version 4. Because EBS
   *       snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic
   *       that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *         Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>. An
   *       invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail
   *       asynchronously, and the snapshot will move to an <code>error</code> state.</p>
   * @public
   */
  PresignedUrl?: string | undefined;

  /**
   * <p>The ID of the Region that contains the snapshot to be copied.</p>
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * <p>The ID of the EBS snapshot to copy.</p>
   * @public
   */
  SourceSnapshotId: string | undefined;

  /**
   * <p>The tags to apply to the new snapshot.</p>
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
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * <p>Any tags applied to the new snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the new snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationDeliveryPreference = {
  FIXED: "fixed",
  INCREMENTAL: "incremental",
} as const;

/**
 * @public
 */
export type CapacityReservationDeliveryPreference =
  (typeof CapacityReservationDeliveryPreference)[keyof typeof CapacityReservationDeliveryPreference];

/**
 * @public
 * @enum
 */
export const EndDateType = {
  limited: "limited",
  unlimited: "unlimited",
} as const;

/**
 * @public
 */
export type EndDateType = (typeof EndDateType)[keyof typeof EndDateType];

/**
 * @public
 * @enum
 */
export const InstanceMatchCriteria = {
  open: "open",
  targeted: "targeted",
} as const;

/**
 * @public
 */
export type InstanceMatchCriteria = (typeof InstanceMatchCriteria)[keyof typeof InstanceMatchCriteria];

/**
 * @public
 * @enum
 */
export const CapacityReservationInstancePlatform = {
  LINUX_UNIX: "Linux/UNIX",
  LINUX_WITH_SQL_SERVER_ENTERPRISE: "Linux with SQL Server Enterprise",
  LINUX_WITH_SQL_SERVER_STANDARD: "Linux with SQL Server Standard",
  LINUX_WITH_SQL_SERVER_WEB: "Linux with SQL Server Web",
  RED_HAT_ENTERPRISE_LINUX: "Red Hat Enterprise Linux",
  RHEL_WITH_HA: "RHEL with HA",
  RHEL_WITH_HA_AND_SQL_SERVER_ENTERPRISE: "RHEL with HA and SQL Server Enterprise",
  RHEL_WITH_HA_AND_SQL_SERVER_STANDARD: "RHEL with HA and SQL Server Standard",
  RHEL_WITH_SQL_SERVER_ENTERPRISE: "RHEL with SQL Server Enterprise",
  RHEL_WITH_SQL_SERVER_STANDARD: "RHEL with SQL Server Standard",
  RHEL_WITH_SQL_SERVER_WEB: "RHEL with SQL Server Web",
  SUSE_LINUX: "SUSE Linux",
  UBUNTU_PRO_LINUX: "Ubuntu Pro",
  WINDOWS: "Windows",
  WINDOWS_WITH_SQL_SERVER: "Windows with SQL Server",
  WINDOWS_WITH_SQL_SERVER_ENTERPRISE: "Windows with SQL Server Enterprise",
  WINDOWS_WITH_SQL_SERVER_STANDARD: "Windows with SQL Server Standard",
  WINDOWS_WITH_SQL_SERVER_WEB: "Windows with SQL Server Web",
} as const;

/**
 * @public
 */
export type CapacityReservationInstancePlatform =
  (typeof CapacityReservationInstancePlatform)[keyof typeof CapacityReservationInstancePlatform];

/**
 * @public
 * @enum
 */
export const CapacityReservationTenancy = {
  dedicated: "dedicated",
  default: "default",
} as const;

/**
 * @public
 */
export type CapacityReservationTenancy = (typeof CapacityReservationTenancy)[keyof typeof CapacityReservationTenancy];

/**
 * @public
 */
export interface CreateCapacityReservationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The instance type for which to reserve capacity.</p>
   *          <note>
   *             <p>You can request future-dated Capacity Reservations for instance types in the C, M, R, I,
   * 				and T instance families only.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The type of operating system for which to reserve capacity.</p>
   * @public
   */
  InstancePlatform: CapacityReservationInstancePlatform | undefined;

  /**
   * <p>The Availability Zone in which to create the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one
   * 			of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is
   * 					shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant
   * 					hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy | undefined;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   *          <note>
   *             <p>You can request future-dated Capacity Reservations for an instance count
   * 				with a minimum of 100 VPUs. For example, if you request a future-dated Capacity
   * 				Reservation for <code>m5.xlarge</code> instances, you must request at least
   * 				25 instances (<i>25 * m5.xlarge = 100 vCPUs</i>).</p>
   *          </note>
   *          <p>Valid range: 1 - 1000</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This
   * 			optimization provides dedicated throughput to Amazon EBS and an optimized configuration
   * 			stack to provide optimal I/O performance. This optimization isn't available with all
   * 			instance types. Additional usage charges apply when using an EBS- optimized
   * 			instance.</p>
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   * @public
   */
  EphemeralStorage?: boolean | undefined;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity
   * 			Reservation expires, the reserved capacity is released and you can no longer launch
   * 			instances into it. The Capacity Reservation's state changes to <code>expired</code>
   * 			when it reaches its end date and time.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 			<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 			<code>unlimited</code>.</p>
   *          <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation
   * 			is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55
   * 			and 14:30:55 on 5/31/2019.</p>
   *          <p>If you are requesting a future-dated Capacity Reservation, you can't specify an end
   * 			date and time that is within the commitment duration.</p>
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
   * 					explicitly cancel it. Do not provide an <code>EndDate</code> if the
   * 						<code>EndDateType</code> is <code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a
   * 					specified date and time. You must provide an <code>EndDate</code> value if the
   * 						<code>EndDateType</code> value is <code>limited</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The
   * 			options include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation automatically matches all instances
   * 					that have matching attributes (instance type, platform, and Availability Zone).
   * 					Instances that have matching attributes run in the Capacity Reservation
   * 					automatically without specifying any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that
   * 					have matching attributes (instance type, platform, and Availability Zone), and
   * 					explicitly target the Capacity Reservation. This ensures that only permitted
   * 					instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you are requesting a future-dated Capacity Reservation, you must specify <code>targeted</code>.</p>
   *          </note>
   *          <p>Default: <code>open</code>
   *          </p>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;

  /**
   * <p>The tags to apply to the Capacity Reservation during launch.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <note>
   *             <p>Not supported for future-dated Capacity Reservations.</p>
   *          </note>
   *          <p>The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity
   * 			Reservation.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <note>
   *             <p>Not supported for future-dated Capacity Reservations.</p>
   *          </note>
   *          <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			to create the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlacementGroupArn?: string | undefined;

  /**
   * <note>
   *             <p>Required for future-dated Capacity Reservations only. To create a Capacity
   * 			Reservation for immediate use, omit this parameter. </p>
   *          </note>
   *          <p>The date and time at which the future-dated Capacity Reservation should become
   * 			available for use, in the ISO8601 format in the UTC time zone
   * 			(<code>YYYY-MM-DDThh:mm:ss.sssZ</code>).</p>
   *          <p>You can request a future-dated Capacity Reservation between 5 and 120 days in
   * 			advance.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <note>
   *             <p>Required for future-dated Capacity Reservations only. To create a Capacity
   * 			Reservation for immediate use, omit this parameter. </p>
   *          </note>
   *          <p>Specify a commitment duration, in seconds, for the future-dated Capacity Reservation.</p>
   *          <p>The commitment duration is a minimum duration for which you commit to having the
   * 			future-dated Capacity Reservation in the <code>active</code> state in your account
   * 			after it has been delivered.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-concepts.html#cr-commitment-duration">
   * 			Commitment duration</a>.</p>
   * @public
   */
  CommitmentDuration?: number | undefined;

  /**
   * <note>
   *             <p>Required for future-dated Capacity Reservations only. To create a Capacity
   * 			Reservation for immediate use, omit this parameter. </p>
   *          </note>
   *          <p>Indicates that the requested capacity will be delivered in addition to any
   * 			running instances or reserved capacity that you have in your account at the
   * 			requested date and time.</p>
   *          <p>The only supported value is <code>incremental</code>.</p>
   * @public
   */
  DeliveryPreference?: CapacityReservationDeliveryPreference | undefined;
}

/**
 * <p>Information about instance capacity usage for a Capacity Reservation.</p>
 * @public
 */
export interface CapacityAllocation {
  /**
   * <p>The usage type. <code>used</code> indicates that the instance capacity is in use by
   * 			instances that are running in the Capacity Reservation.</p>
   * @public
   */
  AllocationType?: AllocationType | undefined;

  /**
   * <p>The amount of instance capacity associated with the usage. For example a value of
   * 				<code>4</code> indicates that instance capacity for 4 instances is currently in
   * 			use.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * @internal
 */
export const OidcOptionsFilterSensitiveLog = (obj: OidcOptions): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifiedAccessTrustProviderFilterSensitiveLog = (obj: VerifiedAccessTrustProvider): any => ({
  ...obj,
  ...(obj.OidcOptions && { OidcOptions: OidcOptionsFilterSensitiveLog(obj.OidcOptions) }),
});

/**
 * @internal
 */
export const AttachVerifiedAccessTrustProviderResultFilterSensitiveLog = (
  obj: AttachVerifiedAccessTrustProviderResult
): any => ({
  ...obj,
  ...(obj.VerifiedAccessTrustProvider && {
    VerifiedAccessTrustProvider: VerifiedAccessTrustProviderFilterSensitiveLog(obj.VerifiedAccessTrustProvider),
  }),
});

/**
 * @internal
 */
export const S3StorageFilterSensitiveLog = (obj: S3Storage): any => ({
  ...obj,
  ...(obj.UploadPolicySignature && { UploadPolicySignature: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StorageFilterSensitiveLog = (obj: Storage): any => ({
  ...obj,
  ...(obj.S3 && { S3: S3StorageFilterSensitiveLog(obj.S3) }),
});

/**
 * @internal
 */
export const BundleInstanceRequestFilterSensitiveLog = (obj: BundleInstanceRequest): any => ({
  ...obj,
  ...(obj.Storage && { Storage: StorageFilterSensitiveLog(obj.Storage) }),
});

/**
 * @internal
 */
export const BundleTaskFilterSensitiveLog = (obj: BundleTask): any => ({
  ...obj,
  ...(obj.Storage && { Storage: StorageFilterSensitiveLog(obj.Storage) }),
});

/**
 * @internal
 */
export const BundleInstanceResultFilterSensitiveLog = (obj: BundleInstanceResult): any => ({
  ...obj,
  ...(obj.BundleTask && { BundleTask: BundleTaskFilterSensitiveLog(obj.BundleTask) }),
});

/**
 * @internal
 */
export const CancelBundleTaskResultFilterSensitiveLog = (obj: CancelBundleTaskResult): any => ({
  ...obj,
  ...(obj.BundleTask && { BundleTask: BundleTaskFilterSensitiveLog(obj.BundleTask) }),
});

/**
 * @internal
 */
export const CopySnapshotRequestFilterSensitiveLog = (obj: CopySnapshotRequest): any => ({
  ...obj,
  ...(obj.PresignedUrl && { PresignedUrl: SENSITIVE_STRING }),
});
