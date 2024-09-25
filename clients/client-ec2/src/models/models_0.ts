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
  Min?: number;

  /**
   * <p>The maximum number of accelerators. If this parameter is not specified, there is no
   *          maximum limit.</p>
   * @public
   */
  Max?: number;
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
  Min?: number;

  /**
   * <p>The maximum number of accelerators. To specify no maximum limit, omit this
   *          parameter. To exclude accelerator-enabled instance types, set <code>Max</code> to
   *          <code>0</code>.</p>
   * @public
   */
  Max?: number;
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
  Min?: number;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. If this parameter is not specified,
   *          there is no maximum limit.</p>
   * @public
   */
  Max?: number;
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
  Min?: number;

  /**
   * <p>The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this
   *          parameter.</p>
   * @public
   */
  Max?: number;
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
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.</p>
   * @public
   */
  Value?: string;
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
  ResourceType?: ResourceType;

  /**
   * <p>The tags to apply to the resource.</p>
   * @public
   */
  Tags?: Tag[];
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
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  PublicIp?: string;

  /**
   * <p>The allocation ID of an Elastic IP address.</p>
   * @public
   */
  AllocationId?: string;

  /**
   * <p>The ID of the account that you want to transfer the Elastic IP address to.</p>
   * @public
   */
  TransferAccountId?: string;

  /**
   * <p>The timestamp when the Elastic IP address transfer expired. When the source account starts
   *       the transfer, the transfer account has seven hours to allocate the Elastic IP address to
   *       complete the transfer, or the Elastic IP address will return to its original owner.</p>
   * @public
   */
  TransferOfferExpirationTimestamp?: Date;

  /**
   * <p>The timestamp when the Elastic IP address transfer was accepted.</p>
   * @public
   */
  TransferOfferAcceptedTimestamp?: Date;

  /**
   * <p>The Elastic IP address transfer status.</p>
   * @public
   */
  AddressTransferStatus?: AddressTransferStatus;
}

/**
 * @public
 */
export interface AcceptAddressTransferResult {
  /**
   * <p>An Elastic IP address transfer.</p>
   * @public
   */
  AddressTransfer?: AddressTransfer;
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
  InstanceCount?: number;

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
  DryRun?: boolean;

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
  TargetConfigurations?: TargetConfigurationRequest[];
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
  ExchangeId?: string;
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  SubnetId?: string;

  /**
   * <p>The state of the subnet association.</p>
   * @public
   */
  State?: TransitGatewayMulitcastDomainAssociationState;
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
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of resource, for example a VPC attachment.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * <p> The ID of the Amazon Web Services account that owns the resource.</p>
   * @public
   */
  ResourceOwnerId?: string;

  /**
   * <p>The subnets associated with the multicast domain.</p>
   * @public
   */
  Subnets?: SubnetAssociation[];
}

/**
 * @public
 */
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  /**
   * <p>Information about the multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
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
  DryRun?: boolean;
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
  TransitGatewayId?: string;

  /**
   * <p>The ID of the core network where the transit gateway peer is located.</p>
   * @public
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The Region of the transit gateway.</p>
   * @public
   */
  Region?: string;
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
  DynamicRouting?: DynamicRoutingValue;
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
  Code?: string;

  /**
   * <p>The status message, if applicable.</p>
   * @public
   */
  Message?: string;
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
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the accepter transit gateway attachment.</p>
   * @public
   */
  AccepterTransitGatewayAttachmentId?: string;

  /**
   * <p>Information about the requester transit gateway.</p>
   * @public
   */
  RequesterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Information about the accepter transit gateway.</p>
   * @public
   */
  AccepterTgwInfo?: PeeringTgwInfo;

  /**
   * <p>Details about the transit gateway peering attachment.</p>
   * @public
   */
  Options?: TransitGatewayPeeringAttachmentOptions;

  /**
   * <p>The status of the transit gateway peering attachment.</p>
   * @public
   */
  Status?: PeeringAttachmentStatus;

  /**
   * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState;

  /**
   * <p>The time the transit gateway peering attachment was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway peering attachment.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   * @public
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
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
  DryRun?: boolean;
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
  DnsSupport?: DnsSupportValue;

  /**
   * <p>Enables you to reference a security group across VPCs attached to a transit gateway to simplify security group management.
   *
   * </p>
   *          <p>This option is disabled by default.</p>
   *          <p>For more information about security group referencing, see  <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">Security group referencing</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
   * @public
   */
  SecurityGroupReferencingSupport?: SecurityGroupReferencingSupportValue;

  /**
   * <p>Indicates whether IPv6 support is disabled.</p>
   * @public
   */
  Ipv6Support?: Ipv6SupportValue;

  /**
   * <p>Indicates whether appliance mode support is enabled.</p>
   * @public
   */
  ApplianceModeSupport?: ApplianceModeSupportValue;
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
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   * @public
   */
  VpcOwnerId?: string;

  /**
   * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
   * @public
   */
  State?: TransitGatewayAttachmentState;

  /**
   * <p>The IDs of the subnets.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The VPC attachment options.</p>
   * @public
   */
  Options?: TransitGatewayVpcAttachmentOptions;

  /**
   * <p>The tags for the VPC attachment.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * <p>The VPC attachment.</p>
   * @public
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
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
  DryRun?: boolean;

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
  Code?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   * @public
   */
  Message?: string;
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
  Error?: UnsuccessfulItemError;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;
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
  Unsuccessful?: UnsuccessfulItem[];
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
  DryRun?: boolean;

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
  CidrBlock?: string;
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
  Ipv6CidrBlock?: string;
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
  AllowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
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
  CidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   * @public
   */
  Ipv6CidrBlockSet?: Ipv6CidrBlock[];

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   * @public
   */
  CidrBlockSet?: CidrBlock[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   * @public
   */
  PeeringOptions?: VpcPeeringConnectionOptionsDescription;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The Region in which the VPC is located.</p>
   * @public
   */
  Region?: string;
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
  Code?: VpcPeeringConnectionStateReasonCode;

  /**
   * <p>A message that provides more information about the status, if applicable.</p>
   * @public
   */
  Message?: string;
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
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The time that an unaccepted VPC peering connection will expire.</p>
   * @public
   */
  ExpirationTime?: Date;

  /**
   * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
   * @public
   */
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * <p>The status of the VPC peering connection.</p>
   * @public
   */
  Status?: VpcPeeringConnectionStateReason;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string;
}

/**
 * @public
 */
export interface AcceptVpcPeeringConnectionResult {
  /**
   * <p>Information about the VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnection?: VpcPeeringConnection;
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
  From?: number;

  /**
   * <p>The last port in the range.</p>
   * @public
   */
  To?: number;
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
  Cidr?: string;

  /**
   * <p>Indicates whether the rule is an outbound rule.</p>
   * @public
   */
  Egress?: boolean;

  /**
   * <p>The range of ports.</p>
   * @public
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny traffic that matches the rule.</p>
   * @public
   */
  RuleAction?: string;

  /**
   * <p>The rule number.</p>
   * @public
   */
  RuleNumber?: number;
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
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the analysis component.</p>
   * @public
   */
  Name?: string;
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
  Keyword?: string;

  /**
   * <p>The settings for the keyword.</p>
   * @public
   */
  Settings?: string[];
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
  RuleGroupArn?: string;

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleOptions?: RuleOption[];
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
  RuleGroupArn?: string;

  /**
   * <p>The rule group type. The possible values are <code>Domain List</code> and <code>Suricata</code>.</p>
   * @public
   */
  RuleGroupType?: string;
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
  AdditionalDetailType?: string;

  /**
   * <p>The path component.</p>
   * @public
   */
  Component?: AnalysisComponent;

  /**
   * <p>The VPC endpoint service.</p>
   * @public
   */
  VpcEndpointService?: AnalysisComponent;

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleOptions?: RuleOption[];

  /**
   * <p>The rule group type.</p>
   * @public
   */
  RuleGroupTypePairs?: RuleGroupTypePair[];

  /**
   * <p>The rule options.</p>
   * @public
   */
  RuleGroupRuleOptionsPairs?: RuleGroupRuleOptionsPair[];

  /**
   * <p>The name of the VPC endpoint service.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>The load balancers.</p>
   * @public
   */
  LoadBalancers?: AnalysisComponent[];
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
  LoadBalancerPort?: number;

  /**
   * <p>[Classic Load Balancers] The back-end port for the listener.</p>
   * @public
   */
  InstancePort?: number;
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
  RuleGroupArn?: string;

  /**
   * <p>The source IP addresses, in CIDR notation.</p>
   * @public
   */
  Sources?: string[];

  /**
   * <p>The destination IP addresses, in CIDR notation.</p>
   * @public
   */
  Destinations?: string[];

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: PortRange[];

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: PortRange[];

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string;

  /**
   * <p>The rule action. The possible values are <code>pass</code>, <code>drop</code>, and
   *          <code>alert</code>.</p>
   * @public
   */
  RuleAction?: string;

  /**
   * <p>The direction. The possible values are <code>FORWARD</code> and <code>ANY</code>.</p>
   * @public
   */
  Direction?: string;
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
  RuleGroupArn?: string;

  /**
   * <p>The source IP addresses, in CIDR notation.</p>
   * @public
   */
  Sources?: string[];

  /**
   * <p>The destination IP addresses, in CIDR notation.</p>
   * @public
   */
  Destinations?: string[];

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: PortRange[];

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: PortRange[];

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: number[];

  /**
   * <p>The rule action. The possible values are <code>pass</code>, <code>drop</code>, and
   *          <code>forward_to_site</code>.</p>
   * @public
   */
  RuleAction?: string;

  /**
   * <p>The rule priority.</p>
   * @public
   */
  Priority?: number;
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
  Address?: string;

  /**
   * <p>The Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the instance.</p>
   * @public
   */
  Instance?: AnalysisComponent;

  /**
   * <p>The port on which the target is listening.</p>
   * @public
   */
  Port?: number;
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
  DestinationCidr?: string;

  /**
   * <p>The prefix of the Amazon Web Services service.</p>
   * @public
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of an egress-only internet gateway.</p>
   * @public
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of the gateway, such as an internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string;

  /**
   * <p>The ID of the instance, such as a NAT instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string;

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
  Origin?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   * @public
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string;

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
  State?: string;

  /**
   * <p>The ID of a carrier gateway.</p>
   * @public
   */
  CarrierGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a core network.</p>
   * @public
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of a local gateway.</p>
   * @public
   */
  LocalGatewayId?: string;
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
  Cidr?: string;

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
  Direction?: string;

  /**
   * <p>The security group ID.</p>
   * @public
   */
  SecurityGroupId?: string;

  /**
   * <p>The port range.</p>
   * @public
   */
  PortRange?: PortRange;

  /**
   * <p>The prefix list ID.</p>
   * @public
   */
  PrefixListId?: string;

  /**
   * <p>The protocol name.</p>
   * @public
   */
  Protocol?: string;
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
  DestinationCidr?: string;

  /**
   * <p>The state of the route.</p>
   * @public
   */
  State?: string;

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
  RouteOrigin?: string;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the route attachment.</p>
   * @public
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the resource for the route attachment.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type for the route attachment.</p>
   * @public
   */
  ResourceType?: string;
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
  Acl?: AnalysisComponent;

  /**
   * <p>The network ACL rule.</p>
   * @public
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The IPv4 address, in CIDR notation.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>The IPv4 addresses, in CIDR notation.</p>
   * @public
   */
  Addresses?: string[];

  /**
   * <p>The resource to which the component is attached.</p>
   * @public
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The Availability Zones.</p>
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * <p>The CIDR ranges.</p>
   * @public
   */
  Cidrs?: string[];

  /**
   * <p>The component.</p>
   * @public
   */
  Component?: AnalysisComponent;

  /**
   * <p>The customer gateway.</p>
   * @public
   */
  CustomerGateway?: AnalysisComponent;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   * @public
   */
  DestinationVpc?: AnalysisComponent;

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
  Direction?: string;

  /**
   * <p>The explanation code.</p>
   * @public
   */
  ExplanationCode?: string;

  /**
   * <p>The route table.</p>
   * @public
   */
  IngressRouteTable?: AnalysisComponent;

  /**
   * <p>The internet gateway.</p>
   * @public
   */
  InternetGateway?: AnalysisComponent;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   * @public
   */
  LoadBalancerArn?: string;

  /**
   * <p>The listener for a Classic Load Balancer.</p>
   * @public
   */
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;

  /**
   * <p>The listener port of the load balancer.</p>
   * @public
   */
  LoadBalancerListenerPort?: number;

  /**
   * <p>The target.</p>
   * @public
   */
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;

  /**
   * <p>The target group.</p>
   * @public
   */
  LoadBalancerTargetGroup?: AnalysisComponent;

  /**
   * <p>The target groups.</p>
   * @public
   */
  LoadBalancerTargetGroups?: AnalysisComponent[];

  /**
   * <p>The target port.</p>
   * @public
   */
  LoadBalancerTargetPort?: number;

  /**
   * <p>The load balancer listener.</p>
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The missing component.</p>
   * @public
   */
  MissingComponent?: string;

  /**
   * <p>The NAT gateway.</p>
   * @public
   */
  NatGateway?: AnalysisComponent;

  /**
   * <p>The network interface.</p>
   * @public
   */
  NetworkInterface?: AnalysisComponent;

  /**
   * <p>The packet field.</p>
   * @public
   */
  PacketField?: string;

  /**
   * <p>The VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnection?: AnalysisComponent;

  /**
   * <p>The port.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The port ranges.</p>
   * @public
   */
  PortRanges?: PortRange[];

  /**
   * <p>The prefix list.</p>
   * @public
   */
  PrefixList?: AnalysisComponent;

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: string[];

  /**
   * <p>The route table route.</p>
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The route table.</p>
   * @public
   */
  RouteTable?: AnalysisComponent;

  /**
   * <p>The security group.</p>
   * @public
   */
  SecurityGroup?: AnalysisComponent;

  /**
   * <p>The security group rule.</p>
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The security groups.</p>
   * @public
   */
  SecurityGroups?: AnalysisComponent[];

  /**
   * <p>The source VPC.</p>
   * @public
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The state.</p>
   * @public
   */
  State?: string;

  /**
   * <p>The subnet.</p>
   * @public
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The route table for the subnet.</p>
   * @public
   */
  SubnetRouteTable?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   * @public
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The VPC endpoint.</p>
   * @public
   */
  VpcEndpoint?: AnalysisComponent;

  /**
   * <p>The VPN connection.</p>
   * @public
   */
  VpnConnection?: AnalysisComponent;

  /**
   * <p>The VPN gateway.</p>
   * @public
   */
  VpnGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway.</p>
   * @public
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTable?: AnalysisComponent;

  /**
   * <p>The transit gateway route table route.</p>
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;

  /**
   * <p>The transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachment?: AnalysisComponent;

  /**
   * <p>The Amazon Web Services account for the component.</p>
   * @public
   */
  ComponentAccount?: string;

  /**
   * <p>The Region for the component.</p>
   * @public
   */
  ComponentRegion?: string;

  /**
   * <p>The Network Firewall stateless rule.</p>
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule;

  /**
   * <p>The Network Firewall stateful rule.</p>
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule;
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
  DestinationAddresses?: string[];

  /**
   * <p>The destination port ranges.</p>
   * @public
   */
  DestinationPortRanges?: PortRange[];

  /**
   * <p>The protocol.</p>
   * @public
   */
  Protocol?: string;

  /**
   * <p>The source addresses.</p>
   * @public
   */
  SourceAddresses?: string[];

  /**
   * <p>The source port ranges.</p>
   * @public
   */
  SourcePortRanges?: PortRange[];
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
  SequenceNumber?: number;

  /**
   * <p>The network ACL rule.</p>
   * @public
   */
  AclRule?: AnalysisAclRule;

  /**
   * <p>The resource to which the path component is attached.</p>
   * @public
   */
  AttachedTo?: AnalysisComponent;

  /**
   * <p>The component.</p>
   * @public
   */
  Component?: AnalysisComponent;

  /**
   * <p>The destination VPC.</p>
   * @public
   */
  DestinationVpc?: AnalysisComponent;

  /**
   * <p>The outbound header.</p>
   * @public
   */
  OutboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The inbound header.</p>
   * @public
   */
  InboundHeader?: AnalysisPacketHeader;

  /**
   * <p>The route table route.</p>
   * @public
   */
  RouteTableRoute?: AnalysisRouteTableRoute;

  /**
   * <p>The security group rule.</p>
   * @public
   */
  SecurityGroupRule?: AnalysisSecurityGroupRule;

  /**
   * <p>The source VPC.</p>
   * @public
   */
  SourceVpc?: AnalysisComponent;

  /**
   * <p>The subnet.</p>
   * @public
   */
  Subnet?: AnalysisComponent;

  /**
   * <p>The component VPC.</p>
   * @public
   */
  Vpc?: AnalysisComponent;

  /**
   * <p>The additional details.</p>
   * @public
   */
  AdditionalDetails?: AdditionalDetail[];

  /**
   * <p>The transit gateway.</p>
   * @public
   */
  TransitGateway?: AnalysisComponent;

  /**
   * <p>The route in a transit gateway route table.</p>
   * @public
   */
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;

  /**
   * <p>The explanation codes.</p>
   * @public
   */
  Explanations?: Explanation[];

  /**
   * <p>The load balancer listener.</p>
   * @public
   */
  ElasticLoadBalancerListener?: AnalysisComponent;

  /**
   * <p>The Network Firewall stateless rule.</p>
   * @public
   */
  FirewallStatelessRule?: FirewallStatelessRule;

  /**
   * <p>The Network Firewall stateful rule.</p>
   * @public
   */
  FirewallStatefulRule?: FirewallStatefulRule;

  /**
   * <p>The name of the VPC endpoint service.</p>
   * @public
   */
  ServiceName?: string;
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
  NetworkInsightsAccessScopeAnalysisId?: string;

  /**
   * <p>The ID of the Network Access Scope.</p>
   * @public
   */
  NetworkInsightsAccessScopeId?: string;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  FindingId?: string;

  /**
   * <p>The finding components.</p>
   * @public
   */
  FindingComponents?: PathComponent[];
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
  SourceAddresses?: string[];

  /**
   * <p>The destination addresses.</p>
   * @public
   */
  DestinationAddresses?: string[];

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: string[];

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: string[];

  /**
   * <p>The source prefix lists.</p>
   * @public
   */
  SourcePrefixLists?: string[];

  /**
   * <p>The destination prefix lists.</p>
   * @public
   */
  DestinationPrefixLists?: string[];

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: Protocol[];
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
  Resources?: string[];

  /**
   * <p>The resource types.</p>
   * @public
   */
  ResourceTypes?: string[];
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
  PacketHeaderStatement?: PacketHeaderStatement;

  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatement;
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
  ResourceStatement?: ResourceStatement;
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
  Source?: PathStatement;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: PathStatement;

  /**
   * <p>The through resources.</p>
   * @public
   */
  ThroughResources?: ThroughResourcesStatement[];
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
  SourceAddresses?: string[];

  /**
   * <p>The destination addresses.</p>
   * @public
   */
  DestinationAddresses?: string[];

  /**
   * <p>The source ports.</p>
   * @public
   */
  SourcePorts?: string[];

  /**
   * <p>The destination ports.</p>
   * @public
   */
  DestinationPorts?: string[];

  /**
   * <p>The source prefix lists.</p>
   * @public
   */
  SourcePrefixLists?: string[];

  /**
   * <p>The destination prefix lists.</p>
   * @public
   */
  DestinationPrefixLists?: string[];

  /**
   * <p>The protocols.</p>
   * @public
   */
  Protocols?: Protocol[];
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
  Resources?: string[];

  /**
   * <p>The resource types.</p>
   * @public
   */
  ResourceTypes?: string[];
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
  PacketHeaderStatement?: PacketHeaderStatementRequest;

  /**
   * <p>The resource statement.</p>
   * @public
   */
  ResourceStatement?: ResourceStatementRequest;
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
  ResourceStatement?: ResourceStatementRequest;
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
  Source?: PathStatementRequest;

  /**
   * <p>The destination.</p>
   * @public
   */
  Destination?: PathStatementRequest;

  /**
   * <p>The through resources.</p>
   * @public
   */
  ThroughResources?: ThroughResourcesStatementRequest[];
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
  AttributeValue?: string;
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
  AttributeName?: string;

  /**
   * <p>The values for the account attribute.</p>
   * @public
   */
  AttributeValues?: AccountAttributeValue[];
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
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   * @public
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The health status of the instance. If the status of either the instance status check
   *             or the system status check is <code>impaired</code>, the health status of the instance
   *             is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   * @public
   */
  InstanceHealth?: InstanceHealthStatus;
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
  PrincipalType?: PrincipalType;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   * @public
   */
  Principal?: string;

  /**
   * <p>The ID of the service permission.</p>
   * @public
   */
  ServicePermissionId?: string;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId?: string;
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
  RegionName?: string;
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
  Description?: string;
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
   * <p>The ID of the instance that the address is associated with (if any).</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>The ID representing the allocation of the address.</p>
   * @public
   */
  AllocationId?: string;

  /**
   * <p>The ID representing the association of the address with an instance.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>The network (<code>vpc</code>).</p>
   * @public
   */
  Domain?: DomainType;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network interface.</p>
   * @public
   */
  NetworkInterfaceOwnerId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   * @public
   */
  PrivateIpAddress?: string;

  /**
   * <p>Any tags assigned to the Elastic IP address.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The ID of an address pool.</p>
   * @public
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address associated. This option is only available for network interfaces
   *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   * @public
   */
  CarrierIp?: string;
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
  Value?: string;

  /**
   * <p>The status of the PTR record update.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The reason for the PTR record update.</p>
   * @public
   */
  Reason?: string;
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
  PublicIp?: string;

  /**
   * <p>[EC2-VPC] The allocation ID.</p>
   * @public
   */
  AllocationId?: string;

  /**
   * <p>The pointer (PTR) record for the IP address.</p>
   * @public
   */
  PtrRecord?: string;

  /**
   * <p>The updated PTR record for the IP address.</p>
   * @public
   */
  PtrRecordUpdate?: PtrUpdateStatus;
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
  Asn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

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
  NetworkBorderGroup?: string;
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
  Asn?: string;

  /**
   * <p>The association's CIDR.</p>
   * @public
   */
  Cidr?: string;

  /**
   * <p>The association's status message.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>The association's state.</p>
   * @public
   */
  State?: AsnAssociationState;
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
  Cidr?: string;

  /**
   * <p>The description of the address range.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The BYOIP CIDR associations with ASNs.</p>
   * @public
   */
  AsnAssociations?: AsnAssociation[];

  /**
   * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
   * @public
   */
  StatusMessage?: string;

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
  State?: ByoipCidrState;

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
  NetworkBorderGroup?: string;
}

/**
 * @public
 */
export interface AdvertiseByoipCidrResult {
  /**
   * <p>Information about the address range.</p>
   * @public
   */
  ByoipCidr?: ByoipCidr;
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
  Domain?: DomainType;

  /**
   * <p>The Elastic IP address to recover or an IPv4 address from an address pool.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
   * @public
   */
  PublicIpv4Pool?: string;

  /**
   * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services
   *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
   *       addresses cannot move between network border groups.</p>
   * @public
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
   *         select an address from the address pool. Alternatively, specify a specific
   *         address from the address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The tags to assign to the Elastic IP address.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of an IPAM pool.</p>
   * @public
   */
  IpamPoolId?: string;
}

/**
 * @public
 */
export interface AllocateAddressResult {
  /**
   * <p>The Elastic IP address.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>The ID that represents the allocation of the Elastic IP address.</p>
   * @public
   */
  AllocationId?: string;

  /**
   * <p>The ID of an address pool.</p>
   * @public
   */
  PublicIpv4Pool?: string;

  /**
   * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which Amazon Web Services advertises
   *       IP addresses.</p>
   * @public
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The network (<code>vpc</code>).</p>
   * @public
   */
  Domain?: DomainType;

  /**
   * <p>The customer-owned IP address.</p>
   * @public
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The ID of the customer-owned address pool.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string;

  /**
   * <p>The carrier IP address. This option is only available for network interfaces that reside
   *       in a subnet in a Wavelength Zone.</p>
   * @public
   */
  CarrierIp?: string;
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
   * <p>Indicates whether the host accepts any untargeted instance launches that match its
   *             instance type configuration, or if it only accepts Host tenancy instance launches that
   *             specify its unique host ID. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding"> Understanding auto-placement and affinity</a> in the
   *                 <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>off</code>
   *          </p>
   * @public
   */
  AutoPlacement?: AutoPlacement;

  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you specify an
   *             instance type, the Dedicated Hosts support instances of the specified instance type
   *             only.</p>
   *          <p>If you want the Dedicated Hosts to support multiple instance types in a specific
   *             instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the
   *             same request.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
   *             an instance family, the Dedicated Hosts support multiple instance types within that
   *             instance family.</p>
   *          <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
   *             parameter and specify <b>InstanceType</b> instead. You cannot
   *             specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
   * @public
   */
  InstanceFamily?: string;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters. If you are
   *             allocating the Dedicated Hosts on an Outpost, and you specify <b>AssetIds</b>,
   *             you can omit this parameter. In this case, Amazon EC2 allocates a Dedicated Host on each
   *             specified hardware asset. If you specify both <b>AssetIds</b> and
   *             <b>Quantity</b>, then the value that you specify for
   *             <b>Quantity</b> must be equal to the number of asset IDs specified.</p>
   * @public
   */
  Quantity?: number;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. Host
   *             recovery is disabled by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: <code>off</code>
   *          </p>
   * @public
   */
  HostRecovery?: HostRecovery;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate
   *             the Dedicated Host. If you specify <b>OutpostArn</b>, you can
   *             optionally specify <b>AssetIds</b>.</p>
   *          <p>If you are allocating the Dedicated Host in a Region, omit this parameter.</p>
   * @public
   */
  OutpostArn?: string;

  /**
   * <p>Indicates whether to enable or disable host maintenance for the Dedicated Host. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html">Host
   *                 maintenance</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  HostMaintenance?: HostMaintenance;

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
  AssetIds?: string[];
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
  HostIds?: string[];
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
  DryRun?: boolean;

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
  Cidr?: string;

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
  NetmaskLength?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>A description for the allocation.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A preview of the next available CIDR in a pool.</p>
   * @public
   */
  PreviewNextCidr?: boolean;

  /**
   * <p>Include a particular CIDR range that can be returned by the pool. Allowed CIDRs are only allowed if using netmask length for allocation.</p>
   * @public
   */
  AllowedCidrs?: string[];

  /**
   * <p>Exclude a particular CIDR range from being returned by the pool. Disallowed CIDRs are only allowed if using netmask length for allocation.</p>
   * @public
   */
  DisallowedCidrs?: string[];
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
  Cidr?: string;

  /**
   * <p>The ID of an allocation.</p>
   * @public
   */
  IpamPoolAllocationId?: string;

  /**
   * <p>A description of the pool allocation.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: IpamPoolAllocationResourceType;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  ResourceRegion?: string;

  /**
   * <p>The owner of the resource.</p>
   * @public
   */
  ResourceOwner?: string;
}

/**
 * @public
 */
export interface AllocateIpamPoolCidrResult {
  /**
   * <p>Information about the allocation created.</p>
   * @public
   */
  IpamPoolAllocation?: IpamPoolAllocation;
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
  PrincipalType?: PrincipalType;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   * @public
   */
  Principal?: string;

  /**
   * <p>The ID of the service permission.</p>
   * @public
   */
  ServicePermissionId?: string;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceId?: string;
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
  ComponentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  ComponentArn?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * <p>The IDs of the applied security groups.</p>
   * @public
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface AssignIpv6AddressesRequest {
  /**
   * <p>The number of additional IPv6 addresses to assign to the network interface.
   *     		The specified number of IPv6 addresses are assigned in addition to the
   *     		existing IPv6 addresses that are already assigned to the network interface.
   *     		Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You
   *     		can't use this option if specifying specific IPv6 addresses.</p>
   * @public
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   * @public
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the
   *             network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code>
   *             option.</p>
   * @public
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   * @public
   */
  Ipv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;
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
  AssignedIpv6Addresses?: string[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   * @public
   */
  AssignedIpv6Prefixes?: string[];

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string;
}

/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 * @public
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
   * @public
   */
  AllowReassignment?: boolean;

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
  PrivateIpAddresses?: string[];

  /**
   * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
   * @public
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   * @public
   */
  Ipv4Prefixes?: string[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   * @public
   */
  Ipv4PrefixCount?: number;
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
  Ipv4Prefix?: string;
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
  PrivateIpAddress?: string;
}

/**
 * @public
 */
export interface AssignPrivateIpAddressesResult {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP addresses assigned to the network interface.</p>
   * @public
   */
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   * @public
   */
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[];
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
  PrivateIpAddresses?: string[];

  /**
   * <p>The number of private IP addresses to assign to the NAT gateway. You can't specify this parameter when also specifying private IP addresses.</p>
   * @public
   */
  PrivateIpAddressCount?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   * @public
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the NAT gateway.</p>
   * @public
   */
  PrivateIp?: string;

  /**
   * <p>[Public NAT gateway only] The Elastic IP address associated with the NAT gateway.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>[Public NAT gateway only] The association ID of the Elastic IP address that's associated with the NAT gateway.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>Defines if the IP address is the primary address.</p>
   * @public
   */
  IsPrimary?: boolean;

  /**
   * <p>The address failure message.</p>
   * @public
   */
  FailureMessage?: string;

  /**
   * <p>The address status.</p>
   * @public
   */
  Status?: NatGatewayAddressStatus;
}

/**
 * @public
 */
export interface AssignPrivateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string;

  /**
   * <p>NAT gateway IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface AssociateAddressRequest {
  /**
   * <p>The allocation ID. This is required.</p>
   * @public
   */
  AllocationId?: string;

  /**
   * <p>The ID of the instance. The instance must have exactly one attached network interface.
   *       You can specify either the instance ID or the network interface ID, but not both.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>Deprecated.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>Reassociation is automatic, but you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
   * @public
   */
  AllowReassociation?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
   *          <p>You can specify either the instance ID or the network interface ID, but not both. </p>
   * @public
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
   * @public
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 */
export interface AssociateAddressResult {
  /**
   * <p>The ID that represents the association of the Elastic IP address with an instance.</p>
   * @public
   */
  AssociationId?: string;
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
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  Code?: AssociationStatusCode;

  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface AssociateClientVpnTargetNetworkResult {
  /**
   * <p>The unique ID of the target network association.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>The current state of the target network association.</p>
   * @public
   */
  Status?: AssociationStatus;
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
  DryRun?: boolean;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * <p>The name of the Amazon S3 bucket to which the certificate was uploaded.</p>
   * @public
   */
  CertificateS3BucketName?: string;

  /**
   * <p>The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The
   * 			object key is formatted as follows: <code>role_arn</code>/<code>certificate_arn</code>.</p>
   * @public
   */
  CertificateS3ObjectKey?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the private key of the certificate.</p>
   * @public
   */
  EncryptionKmsKeyId?: string;
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
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   * @public
   */
  Name?: string;
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
  Arn?: string;

  /**
   * <p>The ID of the instance profile.</p>
   * @public
   */
  Id?: string;
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
  AssociationId?: string;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The IAM instance profile.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: IamInstanceProfileAssociationState;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface AssociateIamInstanceProfileResult {
  /**
   * <p>Information about the IAM instance profile association.</p>
   * @public
   */
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
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
  InstanceIds?: string[];

  /**
   * <p>The instance tags to associate with the event window. Any instances associated with the
   *          tags will be associated with the event window.</p>
   * @public
   */
  InstanceTags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts to associate with the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[];
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
  DryRun?: boolean;

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
  InstanceIds?: string[];

  /**
   * <p>The instance tags associated with the event window. Any instances associated with the tags
   *          will be associated with the event window.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The IDs of the Dedicated Hosts associated with the event window.</p>
   * @public
   */
  DedicatedHostIds?: string[];
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
  StartWeekDay?: WeekDay;

  /**
   * <p>The hour when the time range begins.</p>
   * @public
   */
  StartHour?: number;

  /**
   * <p>The day on which the time range ends.</p>
   * @public
   */
  EndWeekDay?: WeekDay;

  /**
   * <p>The hour when the time range ends.</p>
   * @public
   */
  EndHour?: number;
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
  InstanceEventWindowId?: string;

  /**
   * <p>One or more time ranges defined for the event window.</p>
   * @public
   */
  TimeRanges?: InstanceEventWindowTimeRange[];

  /**
   * <p>The name of the event window.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The cron expression defined for the event window.</p>
   * @public
   */
  CronExpression?: string;

  /**
   * <p>One or more targets associated with the event window.</p>
   * @public
   */
  AssociationTarget?: InstanceEventWindowAssociationTarget;

  /**
   * <p>The current state of the event window.</p>
   * @public
   */
  State?: InstanceEventWindowState;

  /**
   * <p>The instance tags associated with the event window.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AssociateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   * @public
   */
  InstanceEventWindow?: InstanceEventWindow;
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
  DryRun?: boolean;

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
  AsnAssociation?: AsnAssociation;
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
  DryRun?: boolean;

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
  TagSpecifications?: TagSpecification[];

  /**
   * <p>A client token.</p>
   * @public
   */
  ClientToken?: string;
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
  OwnerId?: string;

  /**
   * <p>The resource discovery association ID.</p>
   * @public
   */
  IpamResourceDiscoveryAssociationId?: string;

  /**
   * <p>The resource discovery association Amazon Resource Name (ARN).</p>
   * @public
   */
  IpamResourceDiscoveryAssociationArn?: string;

  /**
   * <p>The resource discovery ID.</p>
   * @public
   */
  IpamResourceDiscoveryId?: string;

  /**
   * <p>The IPAM ID.</p>
   * @public
   */
  IpamId?: string;

  /**
   * <p>The IPAM ARN.</p>
   * @public
   */
  IpamArn?: string;

  /**
   * <p>The IPAM home Region.</p>
   * @public
   */
  IpamRegion?: string;

  /**
   * <p>Defines if the resource discovery is the default. When you create an IPAM, a default resource discovery is created for your IPAM and it's associated with your IPAM.</p>
   * @public
   */
  IsDefault?: boolean;

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
  ResourceDiscoveryStatus?: IpamAssociatedResourceDiscoveryStatus;

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
  State?: IpamResourceDiscoveryAssociationState;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AssociateIpamResourceDiscoveryResult {
  /**
   * <p>A resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM.</p>
   * @public
   */
  IpamResourceDiscoveryAssociation?: IpamResourceDiscoveryAssociation;
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
  PrivateIpAddresses?: string[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface AssociateNatGatewayAddressResult {
  /**
   * <p>The ID of the NAT gateway.</p>
   * @public
   */
  NatGatewayId?: string;

  /**
   * <p>The IP addresses.</p>
   * @public
   */
  NatGatewayAddresses?: NatGatewayAddress[];
}

/**
 * @public
 */
export interface AssociateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: string;
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
  State?: RouteTableAssociationStateCode;

  /**
   * <p>The status message, if applicable.</p>
   * @public
   */
  StatusMessage?: string;
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
  AssociationId?: string;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  AssociationState?: RouteTableAssociationState;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockRequest {
  /**
   * <p>The IPv6 CIDR block for your subnet.</p>
   * @public
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of your subnet.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>An IPv6 IPAM pool ID.</p>
   * @public
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>An IPv6 netmask length.</p>
   * @public
   */
  Ipv6NetmaskLength?: number;
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
  State?: SubnetCidrBlockStateCode;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   * @public
   */
  StatusMessage?: string;
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
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The state of the CIDR block.</p>
   * @public
   */
  Ipv6CidrBlockState?: SubnetCidrBlockState;

  /**
   * <p>Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.</p>
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpSource;
}

/**
 * @public
 */
export interface AssociateSubnetCidrBlockResult {
  /**
   * <p>Information about the IPv6 association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  SubnetId?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain associations.</p>
   * @public
   */
  Associations?: TransitGatewayMulticastDomainAssociations;
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
  DryRun?: boolean;
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
  TransitGatewayPolicyTableId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource ID of the transit gateway attachment.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type for the transit gateway policy table association.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * <p>The state of the transit gateway policy table association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState;
}

/**
 * @public
 */
export interface AssociateTransitGatewayPolicyTableResult {
  /**
   * <p>Describes the association of a transit gateway and a transit gateway policy table.</p>
   * @public
   */
  Association?: TransitGatewayPolicyTableAssociation;
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
  DryRun?: boolean;
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
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the attachment.</p>
   * @public
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   * @public
   */
  ResourceType?: TransitGatewayAttachmentResourceType;

  /**
   * <p>The state of the association.</p>
   * @public
   */
  State?: TransitGatewayAssociationState;
}

/**
 * @public
 */
export interface AssociateTransitGatewayRouteTableResult {
  /**
   * <p>The ID of the association.</p>
   * @public
   */
  Association?: TransitGatewayAssociation;
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
  VlanId?: number;

  /**
   * <p>The application key. This applies to the GRE protocol.</p>
   * @public
   */
  GreKey?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  AssociationId?: string;

  /**
   * <p>The ID of the branch network interface.</p>
   * @public
   */
  BranchInterfaceId?: string;

  /**
   * <p>The ID of the trunk network interface.</p>
   * @public
   */
  TrunkInterfaceId?: string;

  /**
   * <p>The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.</p>
   * @public
   */
  InterfaceProtocol?: InterfaceProtocolType;

  /**
   * <p>The ID of the VLAN when you use the VLAN protocol.</p>
   * @public
   */
  VlanId?: number;

  /**
   * <p>The application key when you use the GRE protocol.</p>
   * @public
   */
  GreKey?: number;

  /**
   * <p>The tags for the trunk interface association.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AssociateTrunkInterfaceResult {
  /**
   * <p>Information about the association between the trunk network interface and branch network interface.</p>
   * @public
   */
  InterfaceAssociation?: TrunkInterfaceAssociation;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring
   *                 idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface AssociateVpcCidrBlockRequest {
  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You
   *             cannot specify the range of IPv6 addresses or the size of the CIDR block.</p>
   * @public
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>An IPv4 CIDR block to associate with the VPC.</p>
   * @public
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
   *       to limit the CIDR block to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   *          <p> You can have one IPv6 CIDR block association per network border group.</p>
   * @public
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   * @public
   */
  Ipv6Pool?: string;

  /**
   * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *          <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   * @public
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Associate a CIDR allocated from an IPv4 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv4IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
   *       </p>
   * @public
   */
  Ipv4NetmaskLength?: number;

  /**
   * <p>Associates a CIDR allocated from an IPv6 IPAM pool to a VPC. For more information about Amazon VPC IP Address Manager (IPAM), see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
   * @public
   */
  Ipv6IpamPoolId?: string;

  /**
   * <p>The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
   * @public
   */
  Ipv6NetmaskLength?: number;
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
  State?: VpcCidrBlockStateCode;

  /**
   * <p>A message about the status of the CIDR block, if applicable.</p>
   * @public
   */
  StatusMessage?: string;
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
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   * @public
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   * @public
   */
  CidrBlockState?: VpcCidrBlockState;
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
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   * @public
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   * @public
   */
  Ipv6CidrBlockState?: VpcCidrBlockState;

  /**
   * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
   *       which Amazon Web Services advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
   * @public
   */
  NetworkBorderGroup?: string;

  /**
   * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
   * @public
   */
  Ipv6Pool?: string;

  /**
   * <p>Public IPv6 addresses are those advertised on the internet from Amazon Web Services. Private IP addresses are not and cannot be advertised on the internet from Amazon Web Services.</p>
   * @public
   */
  Ipv6AddressAttribute?: Ipv6AddressAttribute;

  /**
   * <p>The source that allocated the IP address space. <code>byoip</code> or <code>amazon</code> indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). <code>none</code> indicates private space.</p>
   * @public
   */
  IpSource?: IpSource;
}

/**
 * @public
 */
export interface AssociateVpcCidrBlockResult {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   * @public
   */
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   * @public
   */
  CidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
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
  DryRun?: boolean;

  /**
   * <p>The IDs of the security groups. You cannot specify security groups from a different VPC.</p>
   * @public
   */
  Groups: string[] | undefined;

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
}

/**
 * @public
 */
export interface AttachClassicLinkVpcResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;

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
  EnaSrdUdpEnabled?: boolean;
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
  EnaSrdEnabled?: boolean;

  /**
   * <p>Configures ENA Express for UDP network traffic.</p>
   * @public
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification;
}

/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 * @public
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * <p>The index of the device for the network interface attachment.</p>
   * @public
   */
  DeviceIndex: number | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   * @public
   */
  NetworkCardIndex?: number;

  /**
   * <p>Configures ENA Express for the network interface that this action attaches to the instance.</p>
   * @public
   */
  EnaSrdSpecification?: EnaSrdSpecification;
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
  AttachmentId?: string;

  /**
   * <p>The index of the network card.</p>
   * @public
   */
  NetworkCardIndex?: number;
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
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  VerifiedAccessTrustProviderId?: string;

  /**
   * <p>The description of trust provider.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of trust provider (user- or device-based).</p>
   * @public
   */
  TrustProviderType?: TrustProviderType;

  /**
   * <p>The type of user-based trust provider.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType;

  /**
   * <p>The type of device-based trust provider.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType;
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
  VerifiedAccessInstanceId?: string;

  /**
   * <p>A description for the Amazon Web Services Verified Access instance.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The IDs of the Amazon Web Services Verified Access trust providers.</p>
   * @public
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProviderCondensed[];

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether support for Federal Information Processing Standards (FIPS) is enabled on the instance.</p>
   * @public
   */
  FipsEnabled?: boolean;
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
  TenantId?: string;

  /**
   * <p>
   *          The URL Amazon Web Services Verified Access will use to verify the authenticity of the device tokens.
   *       </p>
   * @public
   */
  PublicSigningKeyUrl?: string;
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
  Issuer?: string;

  /**
   * <p>The OIDC authorization endpoint.</p>
   * @public
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The OIDC token endpoint.</p>
   * @public
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC user info endpoint.</p>
   * @public
   */
  UserInfoEndpoint?: string;

  /**
   * <p>The client identifier.</p>
   * @public
   */
  ClientId?: string;

  /**
   * <p>The client secret.</p>
   * @public
   */
  ClientSecret?: string;

  /**
   * <p>The OpenID Connect (OIDC) scope specified.</p>
   * @public
   */
  Scope?: string;
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
  CustomerManagedKeyEnabled?: boolean;

  /**
   * <p>The ARN of the KMS key.</p>
   * @public
   */
  KmsKeyArn?: string;
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
  VerifiedAccessTrustProviderId?: string;

  /**
   * <p>A description for the Amazon Web Services Verified Access trust provider.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of Verified Access trust provider.</p>
   * @public
   */
  TrustProviderType?: TrustProviderType;

  /**
   * <p>The type of user-based trust provider.</p>
   * @public
   */
  UserTrustProviderType?: UserTrustProviderType;

  /**
   * <p>The type of device-based trust provider.</p>
   * @public
   */
  DeviceTrustProviderType?: DeviceTrustProviderType;

  /**
   * <p>The options for an OpenID Connect-compatible user-identity trust provider.</p>
   * @public
   */
  OidcOptions?: OidcOptions;

  /**
   * <p>The options for device-identity trust provider.</p>
   * @public
   */
  DeviceOptions?: DeviceOptions;

  /**
   * <p>The identifier to be used when working with policy rules.</p>
   * @public
   */
  PolicyReferenceName?: string;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: string;

  /**
   * <p>The last updated time.</p>
   * @public
   */
  LastUpdatedTime?: string;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The options in use for server side encryption.</p>
   * @public
   */
  SseSpecification?: VerifiedAccessSseSpecificationResponse;
}

/**
 * @public
 */
export interface AttachVerifiedAccessTrustProviderResult {
  /**
   * <p>Details about the Verified Access trust provider.</p>
   * @public
   */
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider;

  /**
   * <p>Details about the Verified Access instance.</p>
   * @public
   */
  VerifiedAccessInstance?: VerifiedAccessInstance;
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
  DryRun?: boolean;
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
   * <p>The time stamp when the attachment initiated.</p>
   * @public
   */
  AttachTime?: Date;

  /**
   * <p>The device name.</p>
   *          <p>If the volume is attached to a Fargate task, this parameter
   *       returns <code>null</code>.</p>
   * @public
   */
  Device?: string;

  /**
   * <p>The ID of the instance.</p>
   *          <p>If the volume is attached to a Fargate task, this parameter
   *       returns <code>null</code>.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   * @public
   */
  State?: VolumeAttachmentState;

  /**
   * <p>The ID of the volume.</p>
   * @public
   */
  VolumeId?: string;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   * @public
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ARN of the Amazon ECS or Fargate task
   *       to which the volume is attached.</p>
   * @public
   */
  AssociatedResource?: string;

  /**
   * <p>The service principal of Amazon Web Services service that owns the underlying
   *       instance to which the volume is attached.</p>
   *          <p>This parameter is returned only for volumes that are attached to
   *       Fargate tasks.</p>
   * @public
   */
  InstanceOwningService?: string;
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
  DryRun?: boolean;
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
   * <p>The current state of the attachment.</p>
   * @public
   */
  State?: AttachmentStatus;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;
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
  VpcAttachment?: VpcAttachment;
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
  AccessGroupId?: string;

  /**
   * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
   *             clients who successfully establish a VPN connection access to the network. Must be set
   *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
   * @public
   */
  AuthorizeAllGroups?: boolean;

  /**
   * <p>A brief description of the authorization rule.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  Code?: ClientVpnAuthorizationRuleStatusCode;

  /**
   * <p>A message about the status of the authorization rule, if applicable.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface AuthorizeClientVpnIngressResult {
  /**
   * <p>The current state of the authorization rule.</p>
   * @public
   */
  Status?: ClientVpnAuthorizationRuleStatus;
}

/**
 * <p>Describes an IPv4 address range.</p>
 * @public
 */
export interface IpRange {
  /**
   * <p>The IPv4 address range. You can either specify a CIDR block or a source security group,
   *             not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   * @public
   */
  CidrIp?: string;

  /**
   * <p>A description for the security group rule that references this IPv4 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  Description?: string;
}

/**
 * <p>Describes an IPv6 address range.</p>
 * @public
 */
export interface Ipv6Range {
  /**
   * <p>The IPv6 address range. You can either specify a CIDR block or a source security group,
   *         not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   * @public
   */
  CidrIpv6?: string;

  /**
   * <p>A description for the security group rule that references this IPv6 address range.</p>
   *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
   *         spaces, and ._-:/()#,@[]+=&;\{\}!$*</p>
   * @public
   */
  Description?: string;
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
  Description?: string;

  /**
   * <p>The ID of the prefix.</p>
   * @public
   */
  PrefixListId?: string;
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
  Description?: string;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>[Default VPC] The name of the security group. For a security group in a nondefault VPC,
   *          use the security group ID. </p>
   *          <p>For a referenced security group in another VPC, this value is not returned if the
   *             referenced security group is deleted.</p>
   * @public
   */
  GroupName?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   * @public
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of an Amazon Web Services account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *             security group is returned in the response. If the referenced security group is deleted,
   *             this value is not returned.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   * @public
   */
  VpcPeeringConnectionId?: string;
}

/**
 * <p>Describes the permissions for a security group rule.</p>
 * @public
 */
export interface IpPermission {
  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *         If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number;

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
  IpProtocol?: string;

  /**
   * <p>The IPv4 address ranges.</p>
   * @public
   */
  IpRanges?: IpRange[];

  /**
   * <p>The IPv6 address ranges.</p>
   * @public
   */
  Ipv6Ranges?: Ipv6Range[];

  /**
   * <p>The prefix list IDs.</p>
   * @public
   */
  PrefixListIds?: PrefixListId[];

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *           If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *           If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number;

  /**
   * <p>The security group and Amazon Web Services account ID pairs.</p>
   * @public
   */
  UserIdGroupPairs?: UserIdGroupPair[];
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The permissions for the security group rules.</p>
   * @public
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The tags applied to the security group rule.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string;
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
  GroupId?: string;

  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   * @public
   */
  PeeringStatus?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The ID of the VPC peering connection (if applicable).</p>
   * @public
   */
  VpcPeeringConnectionId?: string;
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
  SecurityGroupRuleId?: string;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the security group. </p>
   * @public
   */
  GroupOwnerId?: string;

  /**
   * <p>Indicates whether the security group rule is an outbound rule.</p>
   * @public
   */
  IsEgress?: boolean;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *                 <code>icmpv6</code>) or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). </p>
   *          <p>Use <code>-1</code> to specify all protocols.</p>
   * @public
   */
  IpProtocol?: string;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</p>
   * @public
   */
  FromPort?: number;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *             If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes).
   *             If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   * @public
   */
  ToPort?: number;

  /**
   * <p>The IPv4 CIDR range.</p>
   * @public
   */
  CidrIpv4?: string;

  /**
   * <p>The IPv6 CIDR range.</p>
   * @public
   */
  CidrIpv6?: string;

  /**
   * <p>The ID of the prefix list.</p>
   * @public
   */
  PrefixListId?: string;

  /**
   * <p>Describes the security group that is referenced in the rule.</p>
   * @public
   */
  ReferencedGroupInfo?: ReferencedSecurityGroup;

  /**
   * <p>The security group rule description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags applied to the security group rule.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupEgressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean;

  /**
   * <p>Information about the outbound (egress) security group rules that were added.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[];
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
  CidrIp?: string;

  /**
   * <p>If the protocol is TCP or UDP, this is the start of the port range.
   *            If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  FromPort?: number;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>[Default VPC] The name of the security group. For security groups for a default VPC
   *          you can specify either the ID or the name of the security group. For security groups for
   *          a nondefault VPC, you must specify the ID of the security group.</p>
   * @public
   */
  GroupName?: string;

  /**
   * <p>The permissions for the security group rules.</p>
   * @public
   */
  IpPermissions?: IpPermission[];

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
   *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify all protocols, use <code>-1</code>.</p>
   *          <p>To specify <code>icmpv6</code>, use IP permissions instead.</p>
   *          <p>If you specify a protocol other than one of the supported values, traffic is allowed
   *          on all ports, regardless of any ports that you specify.</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  IpProtocol?: string;

  /**
   * <p>[Default VPC] The name of the source security group.</p>
   *          <p>The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol
   *              and port range, specify a set of IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>The Amazon Web Services account ID for the source security group, if the source security group is
   *          in a different account.</p>
   *          <p>The rule grants full ICMP, UDP, and TCP access. To create a rule with a specific protocol
   *          and port range, use IP permissions instead.</p>
   * @public
   */
  SourceSecurityGroupOwnerId?: string;

  /**
   * <p>If the protocol is TCP or UDP, this is the end of the port range.
   *            If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).
   *            If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</p>
   *          <p>To specify multiple rules and descriptions for the rules, use IP permissions instead.</p>
   * @public
   */
  ToPort?: number;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The tags applied to the security group rule.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface AuthorizeSecurityGroupIngressResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, returns an error.</p>
   * @public
   */
  Return?: boolean;

  /**
   * <p>Information about the inbound (ingress) security group rules that were added.</p>
   * @public
   */
  SecurityGroupRules?: SecurityGroupRule[];
}

/**
 * <p>Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.</p>
 * @public
 */
export interface S3Storage {
  /**
   * <p>The access key ID of the owner of the bucket. Before you specify a value for your access
   *        key ID, review and follow the guidance in <a href="https://docs.aws.amazon.com/accounts/latest/reference/best-practices.html">Best
   *          Practices for Amazon Web Services accounts</a> in the <i>Account ManagementReference
   *            Guide</i>.</p>
   * @public
   */
  AWSAccessKeyId?: string;

  /**
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   * @public
   */
  Bucket?: string;

  /**
   * <p>The beginning of the file name of the AMI.</p>
   * @public
   */
  Prefix?: string;

  /**
   * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
   * @public
   */
  UploadPolicy?: Uint8Array;

  /**
   * <p>The signature of the JSON document.</p>
   * @public
   */
  UploadPolicySignature?: string;
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
  S3?: S3Storage;
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
   * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
   * @public
   */
  Storage: Storage | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
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
  Code?: string;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;
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
   * <p>The ID of the bundle task.</p>
   * @public
   */
  BundleId?: string;

  /**
   * <p>If the task fails, a description of the error.</p>
   * @public
   */
  BundleTaskError?: BundleTaskError;

  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   * @public
   */
  Progress?: string;

  /**
   * <p>The time this task started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The state of the task.</p>
   * @public
   */
  State?: BundleTaskState;

  /**
   * <p>The Amazon S3 storage locations.</p>
   * @public
   */
  Storage?: Storage;

  /**
   * <p>The time of the most recent update for the task.</p>
   * @public
   */
  UpdateTime?: Date;
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
  BundleTask?: BundleTask;
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
  DryRun?: boolean;
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
  BundleTask?: BundleTask;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface CancelCapacityReservationResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

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
  Code?: string;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;
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
  CapacityReservationFleetId?: string;

  /**
   * <p>Information about the Capacity Reservation Fleet cancellation error.</p>
   * @public
   */
  CancelCapacityReservationFleetError?: CancelCapacityReservationFleetError;
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
  CurrentFleetState?: CapacityReservationFleetState;

  /**
   * <p>The previous state of the Capacity Reservation Fleet.</p>
   * @public
   */
  PreviousFleetState?: CapacityReservationFleetState;

  /**
   * <p>The ID of the Capacity Reservation Fleet that was successfully cancelled.</p>
   * @public
   */
  CapacityReservationFleetId?: string;
}

/**
 * @public
 */
export interface CancelCapacityReservationFleetsResult {
  /**
   * <p>Information about the Capacity Reservation Fleets that were successfully cancelled.</p>
   * @public
   */
  SuccessfulFleetCancellations?: CapacityReservationFleetCancellationState[];

  /**
   * <p>Information about the Capacity Reservation Fleets that could not be cancelled.</p>
   * @public
   */
  FailedFleetCancellations?: FailedCapacityReservationFleetCancellationResult[];
}

/**
 * @public
 */
export interface CancelConversionRequest {
  /**
   * <p>The ID of the conversion task.</p>
   * @public
   */
  ConversionTaskId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The reason for canceling the conversion task.</p>
   * @public
   */
  ReasonMessage?: string;
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
  DryRun?: boolean;
}

/**
 * @public
 */
export interface CancelImageLaunchPermissionResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   * @public
   */
  Return?: boolean;
}

/**
 * @public
 */
export interface CancelImportTaskRequest {
  /**
   * <p>The reason for canceling the task.</p>
   * @public
   */
  CancelReason?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the import image or import snapshot task to be canceled.</p>
   * @public
   */
  ImportTaskId?: string;
}

/**
 * @public
 */
export interface CancelImportTaskResult {
  /**
   * <p>The ID of the task being canceled.</p>
   * @public
   */
  ImportTaskId?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   * @public
   */
  PreviousState?: string;

  /**
   * <p>The current state of the task being canceled.</p>
   * @public
   */
  State?: string;
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
  InstanceCount?: number;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   * @public
   */
  State?: ListingState;
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
  Active?: boolean;

  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   * @public
   */
  CurrencyCode?: CurrencyCodeValues;

  /**
   * <p>The fixed price for the term.</p>
   * @public
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   * @public
   */
  Term?: number;
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
  ClientToken?: string;

  /**
   * <p>The time the listing was created.</p>
   * @public
   */
  CreateDate?: Date;

  /**
   * <p>The number of instances in this state.</p>
   * @public
   */
  InstanceCounts?: InstanceCount[];

  /**
   * <p>The price of the Reserved Instance listing.</p>
   * @public
   */
  PriceSchedules?: PriceSchedule[];

  /**
   * <p>The ID of the Reserved Instance.</p>
   * @public
   */
  ReservedInstancesId?: string;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   * @public
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   * @public
   */
  Status?: ListingStatus;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The last modified timestamp of the listing.</p>
   * @public
   */
  UpdateDate?: Date;
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
  ReservedInstancesListings?: ReservedInstancesListing[];
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
  DryRun?: boolean;

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
  CurrentSpotFleetRequestState?: BatchState;

  /**
   * <p>The previous state of the Spot Fleet request.</p>
   * @public
   */
  PreviousSpotFleetRequestState?: BatchState;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string;
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
  Code?: CancelBatchErrorCode;

  /**
   * <p>The description for the error code.</p>
   * @public
   */
  Message?: string;
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
  Error?: CancelSpotFleetRequestsError;

  /**
   * <p>The ID of the Spot Fleet request.</p>
   * @public
   */
  SpotFleetRequestId?: string;
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
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   * @public
   */
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
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
  DryRun?: boolean;

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
  SpotInstanceRequestId?: string;

  /**
   * <p>The state of the Spot Instance request.</p>
   * @public
   */
  State?: CancelSpotInstanceRequestState;
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
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
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
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ConfirmProductInstanceResult {
  /**
   * <p>The Amazon Web Services account ID of the instance owner. This is only present if the
   *             product code is attached to the instance.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The return value of the request. Returns <code>true</code> if the specified product
   *             code is owned by the requester and associated with the specified instance.</p>
   * @public
   */
  Return?: boolean;
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
  DryRun?: boolean;

  /**
   * <p>The ID of the source AFI.</p>
   * @public
   */
  SourceFpgaImageId: string | undefined;

  /**
   * <p>The description for the new AFI.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name for the new AFI. The default is the name of the source AFI.</p>
   * @public
   */
  Name?: string;

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
  ClientToken?: string;
}

/**
 * @public
 */
export interface CopyFpgaImageResult {
  /**
   * <p>The ID of the new AFI.</p>
   * @public
   */
  FpgaImageId?: string;
}

/**
 * <p>Contains the parameters for CopyImage.</p>
 * @public
 */
export interface CopyImageRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>A description for the new AMI in the destination Region.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Specifies whether the destination snapshots of the copied image should be encrypted. You
   *       can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted copy of an
   *       encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default
   *       Key Management Service (KMS) KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with
   *         EBS-backed AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean;

  /**
   * <p>The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating
   *    		encrypted volumes. If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used.
   *    		If you specify a KMS key, you must also set the encrypted state to <code>true</code>.</p>
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
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   *          <p>The specified KMS key must exist in the destination Region.</p>
   *          <p>Amazon EBS does not support asymmetric KMS keys.</p>
   * @public
   */
  KmsKeyId?: string;

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
   * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only
   *   		specify this parameter when copying an AMI from an Amazon Web Services Region to an Outpost.
   *   		The AMI must be in the Region of the destination Outpost. You cannot copy an
   *   		AMI from an Outpost to a Region, from one Outpost to another, or within the same
   *   		Outpost.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshots-outposts.html#copy-amis">Copy AMIs from an Amazon Web Services
   *         Region to an Outpost</a> in the <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  DestinationOutpostArn?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is
   * 			<code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

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
  CopyImageTags?: boolean;

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
   *           <code>snapshot</code>. The same tag is applied to all the new snapshots.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];
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
  ImageId?: string;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * <p>A description for the EBS snapshot.</p>
   * @public
   */
  Description?: string;

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
  DestinationOutpostArn?: string;

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
  DestinationRegion?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
   *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
   *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon EBS User Guide</i>.</p>
   * @public
   */
  Encrypted?: boolean;

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
  KmsKeyId?: string;

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
  PresignedUrl?: string;

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
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * <p>The ID of the new snapshot.</p>
   * @public
   */
  SnapshotId?: string;

  /**
   * <p>Any tags applied to the new snapshot.</p>
   * @public
   */
  Tags?: Tag[];
}

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
  ClientToken?: string;

  /**
   * <p>The instance type for which to reserve capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
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
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   *          <p>Valid range: 1 - 1000</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   * @public
   */
  EbsOptimized?: boolean;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   * @public
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   *          <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
   * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
   * 				<code>unlimited</code>.</p>
   *          <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
   * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
   * @public
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
   * 					provide an <code>EndDate</code> if the <code>EndDateType</code> is
   * 						<code>unlimited</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
   * 					provide an <code>EndDate</code> value if the <code>EndDateType</code> value is
   * 						<code>limited</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>open</code>
   *          </p>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria;

  /**
   * <p>The tags to apply to the Capacity Reservation during launch.</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.</p>
   * @public
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			to create the Capacity Reservation. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlacementGroupArn?: string;
}

/**
 * <p>Information about instance capacity usage for a Capacity Reservation.</p>
 * @public
 */
export interface CapacityAllocation {
  /**
   * <p>The usage type. <code>used</code> indicates that the instance capacity is
   * 			in use by instances that are running in the Capacity Reservation.</p>
   * @public
   */
  AllocationType?: AllocationType;

  /**
   * <p>The amount of instance capacity associated with the usage. For example a value of
   * 			<code>4</code> indicates that instance capacity for 4 instances is currently in use.</p>
   * @public
   */
  Count?: number;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationType = {
  CAPACITY_BLOCK: "capacity-block",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type CapacityReservationType = (typeof CapacityReservationType)[keyof typeof CapacityReservationType];

/**
 * @public
 * @enum
 */
export const CapacityReservationState = {
  active: "active",
  cancelled: "cancelled",
  expired: "expired",
  failed: "failed",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  pending: "pending",
  scheduled: "scheduled",
} as const;

/**
 * @public
 */
export type CapacityReservationState = (typeof CapacityReservationState)[keyof typeof CapacityReservationState];

/**
 * <p>Describes a Capacity Reservation.</p>
 * @public
 */
export interface CapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Capacity Reservation.</p>
   * @public
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
   * @public
   */
  CapacityReservationArn?: string;

  /**
   * <p>The Availability Zone ID of the Capacity Reservation.</p>
   * @public
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tenancy?: CapacityReservationTenancy;

  /**
   * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
   * @public
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   * @public
   */
  AvailableInstanceCount?: number;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
   * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
   * 			optimal I/O performance. This optimization isn't available with all instance types.
   * 			Additional usage charges apply when using an EBS- optimized instance.</p>
   * @public
   */
  EbsOptimized?: boolean;

  /**
   * <p>
   *             <i>Deprecated.</i>
   *          </p>
   * @public
   */
  EphemeralStorage?: boolean;

  /**
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
   * @public
   */
  State?: CapacityReservationState;

  /**
   * <p>The date and time at which the Capacity Reservation was started.</p>
   * @public
   */
  StartDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
   * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
   * 				<code>expired</code> when it reaches its end date and time.</p>
   * @public
   */
  EndDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
   * 			types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndDateType?: EndDateType;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
   * 			include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
   * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
   * 				any additional parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
   * 					(instance type, platform, and Availability Zone), and explicitly target the
   * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
   *             </li>
   *          </ul>
   * @public
   */
  InstanceMatchCriteria?: InstanceMatchCriteria;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   * @public
   */
  CreateDate?: Date;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which the Capacity
   * 	  		Reservation was created.</p>
   * @public
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Capacity Reservation Fleet to which the Capacity Reservation belongs.
   * 			Only valid for Capacity Reservations that were created by a Capacity Reservation Fleet.</p>
   * @public
   */
  CapacityReservationFleetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster placement group in which
   * 			the Capacity Reservation was created. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html">
   * 				Capacity Reservations for cluster placement groups</a> in the
   * 			<i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  PlacementGroupArn?: string;

  /**
   * <p>Information about instance capacity usage.</p>
   * @public
   */
  CapacityAllocations?: CapacityAllocation[];

  /**
   * <p>The type of Capacity Reservation.</p>
   * @public
   */
  ReservationType?: CapacityReservationType;
}

/**
 * @public
 */
export interface CreateCapacityReservationResult {
  /**
   * <p>Information about the Capacity Reservation.</p>
   * @public
   */
  CapacityReservation?: CapacityReservation;
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>
   * 			The ID of the Capacity Reservation from which you want to split the available capacity.
   * 		</p>
   * @public
   */
  SourceCapacityReservationId: string | undefined;

  /**
   * <p>
   * 			The number of instances to split from the source Capacity Reservation.
   * 		</p>
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * <p>
   * 			The tags to apply to the new Capacity Reservation.
   * 		</p>
   * @public
   */
  TagSpecifications?: TagSpecification[];
}

/**
 * @public
 */
export interface CreateCapacityReservationBySplittingResult {
  /**
   * <p>
   * 			Information about the source Capacity Reservation.
   * 		</p>
   * @public
   */
  SourceCapacityReservation?: CapacityReservation;

  /**
   * <p>
   * 			Information about the destination Capacity Reservation.
   * 		</p>
   * @public
   */
  DestinationCapacityReservation?: CapacityReservation;

  /**
   * <p>
   * 			The number of instances in the new Capacity Reservation. The number of instances in the source Capacity Reservation was reduced by this amount.
   * 		</p>
   * @public
   */
  InstanceCount?: number;
}

/**
 * @public
 * @enum
 */
export const FleetInstanceMatchCriteria = {
  open: "open",
} as const;

/**
 * @public
 */
export type FleetInstanceMatchCriteria = (typeof FleetInstanceMatchCriteria)[keyof typeof FleetInstanceMatchCriteria];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  a1_2xlarge: "a1.2xlarge",
  a1_4xlarge: "a1.4xlarge",
  a1_large: "a1.large",
  a1_medium: "a1.medium",
  a1_metal: "a1.metal",
  a1_xlarge: "a1.xlarge",
  c1_medium: "c1.medium",
  c1_xlarge: "c1.xlarge",
  c3_2xlarge: "c3.2xlarge",
  c3_4xlarge: "c3.4xlarge",
  c3_8xlarge: "c3.8xlarge",
  c3_large: "c3.large",
  c3_xlarge: "c3.xlarge",
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_metal: "c5.metal",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c5ad_12xlarge: "c5ad.12xlarge",
  c5ad_16xlarge: "c5ad.16xlarge",
  c5ad_24xlarge: "c5ad.24xlarge",
  c5ad_2xlarge: "c5ad.2xlarge",
  c5ad_4xlarge: "c5ad.4xlarge",
  c5ad_8xlarge: "c5ad.8xlarge",
  c5ad_large: "c5ad.large",
  c5ad_xlarge: "c5ad.xlarge",
  c5d_12xlarge: "c5d.12xlarge",
  c5d_18xlarge: "c5d.18xlarge",
  c5d_24xlarge: "c5d.24xlarge",
  c5d_2xlarge: "c5d.2xlarge",
  c5d_4xlarge: "c5d.4xlarge",
  c5d_9xlarge: "c5d.9xlarge",
  c5d_large: "c5d.large",
  c5d_metal: "c5d.metal",
  c5d_xlarge: "c5d.xlarge",
  c5n_18xlarge: "c5n.18xlarge",
  c5n_2xlarge: "c5n.2xlarge",
  c5n_4xlarge: "c5n.4xlarge",
  c5n_9xlarge: "c5n.9xlarge",
  c5n_large: "c5n.large",
  c5n_metal: "c5n.metal",
  c5n_xlarge: "c5n.xlarge",
  c6a_12xlarge: "c6a.12xlarge",
  c6a_16xlarge: "c6a.16xlarge",
  c6a_24xlarge: "c6a.24xlarge",
  c6a_2xlarge: "c6a.2xlarge",
  c6a_32xlarge: "c6a.32xlarge",
  c6a_48xlarge: "c6a.48xlarge",
  c6a_4xlarge: "c6a.4xlarge",
  c6a_8xlarge: "c6a.8xlarge",
  c6a_large: "c6a.large",
  c6a_metal: "c6a.metal",
  c6a_xlarge: "c6a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_metal: "c6g.metal",
  c6g_xlarge: "c6g.xlarge",
  c6gd_12xlarge: "c6gd.12xlarge",
  c6gd_16xlarge: "c6gd.16xlarge",
  c6gd_2xlarge: "c6gd.2xlarge",
  c6gd_4xlarge: "c6gd.4xlarge",
  c6gd_8xlarge: "c6gd.8xlarge",
  c6gd_large: "c6gd.large",
  c6gd_medium: "c6gd.medium",
  c6gd_metal: "c6gd.metal",
  c6gd_xlarge: "c6gd.xlarge",
  c6gn_12xlarge: "c6gn.12xlarge",
  c6gn_16xlarge: "c6gn.16xlarge",
  c6gn_2xlarge: "c6gn.2xlarge",
  c6gn_4xlarge: "c6gn.4xlarge",
  c6gn_8xlarge: "c6gn.8xlarge",
  c6gn_large: "c6gn.large",
  c6gn_medium: "c6gn.medium",
  c6gn_xlarge: "c6gn.xlarge",
  c6i_12xlarge: "c6i.12xlarge",
  c6i_16xlarge: "c6i.16xlarge",
  c6i_24xlarge: "c6i.24xlarge",
  c6i_2xlarge: "c6i.2xlarge",
  c6i_32xlarge: "c6i.32xlarge",
  c6i_4xlarge: "c6i.4xlarge",
  c6i_8xlarge: "c6i.8xlarge",
  c6i_large: "c6i.large",
  c6i_metal: "c6i.metal",
  c6i_xlarge: "c6i.xlarge",
  c6id_12xlarge: "c6id.12xlarge",
  c6id_16xlarge: "c6id.16xlarge",
  c6id_24xlarge: "c6id.24xlarge",
  c6id_2xlarge: "c6id.2xlarge",
  c6id_32xlarge: "c6id.32xlarge",
  c6id_4xlarge: "c6id.4xlarge",
  c6id_8xlarge: "c6id.8xlarge",
  c6id_large: "c6id.large",
  c6id_metal: "c6id.metal",
  c6id_xlarge: "c6id.xlarge",
  c6in_12xlarge: "c6in.12xlarge",
  c6in_16xlarge: "c6in.16xlarge",
  c6in_24xlarge: "c6in.24xlarge",
  c6in_2xlarge: "c6in.2xlarge",
  c6in_32xlarge: "c6in.32xlarge",
  c6in_4xlarge: "c6in.4xlarge",
  c6in_8xlarge: "c6in.8xlarge",
  c6in_large: "c6in.large",
  c6in_metal: "c6in.metal",
  c6in_xlarge: "c6in.xlarge",
  c7a_12xlarge: "c7a.12xlarge",
  c7a_16xlarge: "c7a.16xlarge",
  c7a_24xlarge: "c7a.24xlarge",
  c7a_2xlarge: "c7a.2xlarge",
  c7a_32xlarge: "c7a.32xlarge",
  c7a_48xlarge: "c7a.48xlarge",
  c7a_4xlarge: "c7a.4xlarge",
  c7a_8xlarge: "c7a.8xlarge",
  c7a_large: "c7a.large",
  c7a_medium: "c7a.medium",
  c7a_metal_48xl: "c7a.metal-48xl",
  c7a_xlarge: "c7a.xlarge",
  c7g_12xlarge: "c7g.12xlarge",
  c7g_16xlarge: "c7g.16xlarge",
  c7g_2xlarge: "c7g.2xlarge",
  c7g_4xlarge: "c7g.4xlarge",
  c7g_8xlarge: "c7g.8xlarge",
  c7g_large: "c7g.large",
  c7g_medium: "c7g.medium",
  c7g_metal: "c7g.metal",
  c7g_xlarge: "c7g.xlarge",
  c7gd_12xlarge: "c7gd.12xlarge",
  c7gd_16xlarge: "c7gd.16xlarge",
  c7gd_2xlarge: "c7gd.2xlarge",
  c7gd_4xlarge: "c7gd.4xlarge",
  c7gd_8xlarge: "c7gd.8xlarge",
  c7gd_large: "c7gd.large",
  c7gd_medium: "c7gd.medium",
  c7gd_metal: "c7gd.metal",
  c7gd_xlarge: "c7gd.xlarge",
  c7gn_12xlarge: "c7gn.12xlarge",
  c7gn_16xlarge: "c7gn.16xlarge",
  c7gn_2xlarge: "c7gn.2xlarge",
  c7gn_4xlarge: "c7gn.4xlarge",
  c7gn_8xlarge: "c7gn.8xlarge",
  c7gn_large: "c7gn.large",
  c7gn_medium: "c7gn.medium",
  c7gn_metal: "c7gn.metal",
  c7gn_xlarge: "c7gn.xlarge",
  c7i_12xlarge: "c7i.12xlarge",
  c7i_16xlarge: "c7i.16xlarge",
  c7i_24xlarge: "c7i.24xlarge",
  c7i_2xlarge: "c7i.2xlarge",
  c7i_48xlarge: "c7i.48xlarge",
  c7i_4xlarge: "c7i.4xlarge",
  c7i_8xlarge: "c7i.8xlarge",
  c7i_flex_2xlarge: "c7i-flex.2xlarge",
  c7i_flex_4xlarge: "c7i-flex.4xlarge",
  c7i_flex_8xlarge: "c7i-flex.8xlarge",
  c7i_flex_large: "c7i-flex.large",
  c7i_flex_xlarge: "c7i-flex.xlarge",
  c7i_large: "c7i.large",
  c7i_metal_24xl: "c7i.metal-24xl",
  c7i_metal_48xl: "c7i.metal-48xl",
  c7i_xlarge: "c7i.xlarge",
  cc1_4xlarge: "cc1.4xlarge",
  cc2_8xlarge: "cc2.8xlarge",
  cg1_4xlarge: "cg1.4xlarge",
  cr1_8xlarge: "cr1.8xlarge",
  d2_2xlarge: "d2.2xlarge",
  d2_4xlarge: "d2.4xlarge",
  d2_8xlarge: "d2.8xlarge",
  d2_xlarge: "d2.xlarge",
  d3_2xlarge: "d3.2xlarge",
  d3_4xlarge: "d3.4xlarge",
  d3_8xlarge: "d3.8xlarge",
  d3_xlarge: "d3.xlarge",
  d3en_12xlarge: "d3en.12xlarge",
  d3en_2xlarge: "d3en.2xlarge",
  d3en_4xlarge: "d3en.4xlarge",
  d3en_6xlarge: "d3en.6xlarge",
  d3en_8xlarge: "d3en.8xlarge",
  d3en_xlarge: "d3en.xlarge",
  dl1_24xlarge: "dl1.24xlarge",
  dl2q_24xlarge: "dl2q.24xlarge",
  f1_16xlarge: "f1.16xlarge",
  f1_2xlarge: "f1.2xlarge",
  f1_4xlarge: "f1.4xlarge",
  g2_2xlarge: "g2.2xlarge",
  g2_8xlarge: "g2.8xlarge",
  g3_16xlarge: "g3.16xlarge",
  g3_4xlarge: "g3.4xlarge",
  g3_8xlarge: "g3.8xlarge",
  g3s_xlarge: "g3s.xlarge",
  g4ad_16xlarge: "g4ad.16xlarge",
  g4ad_2xlarge: "g4ad.2xlarge",
  g4ad_4xlarge: "g4ad.4xlarge",
  g4ad_8xlarge: "g4ad.8xlarge",
  g4ad_xlarge: "g4ad.xlarge",
  g4dn_12xlarge: "g4dn.12xlarge",
  g4dn_16xlarge: "g4dn.16xlarge",
  g4dn_2xlarge: "g4dn.2xlarge",
  g4dn_4xlarge: "g4dn.4xlarge",
  g4dn_8xlarge: "g4dn.8xlarge",
  g4dn_metal: "g4dn.metal",
  g4dn_xlarge: "g4dn.xlarge",
  g5_12xlarge: "g5.12xlarge",
  g5_16xlarge: "g5.16xlarge",
  g5_24xlarge: "g5.24xlarge",
  g5_2xlarge: "g5.2xlarge",
  g5_48xlarge: "g5.48xlarge",
  g5_4xlarge: "g5.4xlarge",
  g5_8xlarge: "g5.8xlarge",
  g5_xlarge: "g5.xlarge",
  g5g_16xlarge: "g5g.16xlarge",
  g5g_2xlarge: "g5g.2xlarge",
  g5g_4xlarge: "g5g.4xlarge",
  g5g_8xlarge: "g5g.8xlarge",
  g5g_metal: "g5g.metal",
  g5g_xlarge: "g5g.xlarge",
  g6_12xlarge: "g6.12xlarge",
  g6_16xlarge: "g6.16xlarge",
  g6_24xlarge: "g6.24xlarge",
  g6_2xlarge: "g6.2xlarge",
  g6_48xlarge: "g6.48xlarge",
  g6_4xlarge: "g6.4xlarge",
  g6_8xlarge: "g6.8xlarge",
  g6_xlarge: "g6.xlarge",
  g6e_12xlarge: "g6e.12xlarge",
  g6e_16xlarge: "g6e.16xlarge",
  g6e_24xlarge: "g6e.24xlarge",
  g6e_2xlarge: "g6e.2xlarge",
  g6e_48xlarge: "g6e.48xlarge",
  g6e_4xlarge: "g6e.4xlarge",
  g6e_8xlarge: "g6e.8xlarge",
  g6e_xlarge: "g6e.xlarge",
  gr6_4xlarge: "gr6.4xlarge",
  gr6_8xlarge: "gr6.8xlarge",
  h1_16xlarge: "h1.16xlarge",
  h1_2xlarge: "h1.2xlarge",
  h1_4xlarge: "h1.4xlarge",
  h1_8xlarge: "h1.8xlarge",
  hi1_4xlarge: "hi1.4xlarge",
  hpc6a_48xlarge: "hpc6a.48xlarge",
  hpc6id_32xlarge: "hpc6id.32xlarge",
  hpc7a_12xlarge: "hpc7a.12xlarge",
  hpc7a_24xlarge: "hpc7a.24xlarge",
  hpc7a_48xlarge: "hpc7a.48xlarge",
  hpc7a_96xlarge: "hpc7a.96xlarge",
  hpc7g_16xlarge: "hpc7g.16xlarge",
  hpc7g_4xlarge: "hpc7g.4xlarge",
  hpc7g_8xlarge: "hpc7g.8xlarge",
  hs1_8xlarge: "hs1.8xlarge",
  i2_2xlarge: "i2.2xlarge",
  i2_4xlarge: "i2.4xlarge",
  i2_8xlarge: "i2.8xlarge",
  i2_xlarge: "i2.xlarge",
  i3_16xlarge: "i3.16xlarge",
  i3_2xlarge: "i3.2xlarge",
  i3_4xlarge: "i3.4xlarge",
  i3_8xlarge: "i3.8xlarge",
  i3_large: "i3.large",
  i3_metal: "i3.metal",
  i3_xlarge: "i3.xlarge",
  i3en_12xlarge: "i3en.12xlarge",
  i3en_24xlarge: "i3en.24xlarge",
  i3en_2xlarge: "i3en.2xlarge",
  i3en_3xlarge: "i3en.3xlarge",
  i3en_6xlarge: "i3en.6xlarge",
  i3en_large: "i3en.large",
  i3en_metal: "i3en.metal",
  i3en_xlarge: "i3en.xlarge",
  i4g_16xlarge: "i4g.16xlarge",
  i4g_2xlarge: "i4g.2xlarge",
  i4g_4xlarge: "i4g.4xlarge",
  i4g_8xlarge: "i4g.8xlarge",
  i4g_large: "i4g.large",
  i4g_xlarge: "i4g.xlarge",
  i4i_12xlarge: "i4i.12xlarge",
  i4i_16xlarge: "i4i.16xlarge",
  i4i_24xlarge: "i4i.24xlarge",
  i4i_2xlarge: "i4i.2xlarge",
  i4i_32xlarge: "i4i.32xlarge",
  i4i_4xlarge: "i4i.4xlarge",
  i4i_8xlarge: "i4i.8xlarge",
  i4i_large: "i4i.large",
  i4i_metal: "i4i.metal",
  i4i_xlarge: "i4i.xlarge",
  im4gn_16xlarge: "im4gn.16xlarge",
  im4gn_2xlarge: "im4gn.2xlarge",
  im4gn_4xlarge: "im4gn.4xlarge",
  im4gn_8xlarge: "im4gn.8xlarge",
  im4gn_large: "im4gn.large",
  im4gn_xlarge: "im4gn.xlarge",
  inf1_24xlarge: "inf1.24xlarge",
  inf1_2xlarge: "inf1.2xlarge",
  inf1_6xlarge: "inf1.6xlarge",
  inf1_xlarge: "inf1.xlarge",
  inf2_24xlarge: "inf2.24xlarge",
  inf2_48xlarge: "inf2.48xlarge",
  inf2_8xlarge: "inf2.8xlarge",
  inf2_xlarge: "inf2.xlarge",
  is4gen_2xlarge: "is4gen.2xlarge",
  is4gen_4xlarge: "is4gen.4xlarge",
  is4gen_8xlarge: "is4gen.8xlarge",
  is4gen_large: "is4gen.large",
  is4gen_medium: "is4gen.medium",
  is4gen_xlarge: "is4gen.xlarge",
  m1_large: "m1.large",
  m1_medium: "m1.medium",
  m1_small: "m1.small",
  m1_xlarge: "m1.xlarge",
  m2_2xlarge: "m2.2xlarge",
  m2_4xlarge: "m2.4xlarge",
  m2_xlarge: "m2.xlarge",
  m3_2xlarge: "m3.2xlarge",
  m3_large: "m3.large",
  m3_medium: "m3.medium",
  m3_xlarge: "m3.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_16xlarge: "m4.16xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_metal: "m5.metal",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m5ad_12xlarge: "m5ad.12xlarge",
  m5ad_16xlarge: "m5ad.16xlarge",
  m5ad_24xlarge: "m5ad.24xlarge",
  m5ad_2xlarge: "m5ad.2xlarge",
  m5ad_4xlarge: "m5ad.4xlarge",
  m5ad_8xlarge: "m5ad.8xlarge",
  m5ad_large: "m5ad.large",
  m5ad_xlarge: "m5ad.xlarge",
  m5d_12xlarge: "m5d.12xlarge",
  m5d_16xlarge: "m5d.16xlarge",
  m5d_24xlarge: "m5d.24xlarge",
  m5d_2xlarge: "m5d.2xlarge",
  m5d_4xlarge: "m5d.4xlarge",
  m5d_8xlarge: "m5d.8xlarge",
  m5d_large: "m5d.large",
  m5d_metal: "m5d.metal",
  m5d_xlarge: "m5d.xlarge",
  m5dn_12xlarge: "m5dn.12xlarge",
  m5dn_16xlarge: "m5dn.16xlarge",
  m5dn_24xlarge: "m5dn.24xlarge",
  m5dn_2xlarge: "m5dn.2xlarge",
  m5dn_4xlarge: "m5dn.4xlarge",
  m5dn_8xlarge: "m5dn.8xlarge",
  m5dn_large: "m5dn.large",
  m5dn_metal: "m5dn.metal",
  m5dn_xlarge: "m5dn.xlarge",
  m5n_12xlarge: "m5n.12xlarge",
  m5n_16xlarge: "m5n.16xlarge",
  m5n_24xlarge: "m5n.24xlarge",
  m5n_2xlarge: "m5n.2xlarge",
  m5n_4xlarge: "m5n.4xlarge",
  m5n_8xlarge: "m5n.8xlarge",
  m5n_large: "m5n.large",
  m5n_metal: "m5n.metal",
  m5n_xlarge: "m5n.xlarge",
  m5zn_12xlarge: "m5zn.12xlarge",
  m5zn_2xlarge: "m5zn.2xlarge",
  m5zn_3xlarge: "m5zn.3xlarge",
  m5zn_6xlarge: "m5zn.6xlarge",
  m5zn_large: "m5zn.large",
  m5zn_metal: "m5zn.metal",
  m5zn_xlarge: "m5zn.xlarge",
  m6a_12xlarge: "m6a.12xlarge",
  m6a_16xlarge: "m6a.16xlarge",
  m6a_24xlarge: "m6a.24xlarge",
  m6a_2xlarge: "m6a.2xlarge",
  m6a_32xlarge: "m6a.32xlarge",
  m6a_48xlarge: "m6a.48xlarge",
  m6a_4xlarge: "m6a.4xlarge",
  m6a_8xlarge: "m6a.8xlarge",
  m6a_large: "m6a.large",
  m6a_metal: "m6a.metal",
  m6a_xlarge: "m6a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_metal: "m6g.metal",
  m6g_xlarge: "m6g.xlarge",
  m6gd_12xlarge: "m6gd.12xlarge",
  m6gd_16xlarge: "m6gd.16xlarge",
  m6gd_2xlarge: "m6gd.2xlarge",
  m6gd_4xlarge: "m6gd.4xlarge",
  m6gd_8xlarge: "m6gd.8xlarge",
  m6gd_large: "m6gd.large",
  m6gd_medium: "m6gd.medium",
  m6gd_metal: "m6gd.metal",
  m6gd_xlarge: "m6gd.xlarge",
  m6i_12xlarge: "m6i.12xlarge",
  m6i_16xlarge: "m6i.16xlarge",
  m6i_24xlarge: "m6i.24xlarge",
  m6i_2xlarge: "m6i.2xlarge",
  m6i_32xlarge: "m6i.32xlarge",
  m6i_4xlarge: "m6i.4xlarge",
  m6i_8xlarge: "m6i.8xlarge",
  m6i_large: "m6i.large",
  m6i_metal: "m6i.metal",
  m6i_xlarge: "m6i.xlarge",
  m6id_12xlarge: "m6id.12xlarge",
  m6id_16xlarge: "m6id.16xlarge",
  m6id_24xlarge: "m6id.24xlarge",
  m6id_2xlarge: "m6id.2xlarge",
  m6id_32xlarge: "m6id.32xlarge",
  m6id_4xlarge: "m6id.4xlarge",
  m6id_8xlarge: "m6id.8xlarge",
  m6id_large: "m6id.large",
  m6id_metal: "m6id.metal",
  m6id_xlarge: "m6id.xlarge",
  m6idn_12xlarge: "m6idn.12xlarge",
  m6idn_16xlarge: "m6idn.16xlarge",
  m6idn_24xlarge: "m6idn.24xlarge",
  m6idn_2xlarge: "m6idn.2xlarge",
  m6idn_32xlarge: "m6idn.32xlarge",
  m6idn_4xlarge: "m6idn.4xlarge",
  m6idn_8xlarge: "m6idn.8xlarge",
  m6idn_large: "m6idn.large",
  m6idn_metal: "m6idn.metal",
  m6idn_xlarge: "m6idn.xlarge",
  m6in_12xlarge: "m6in.12xlarge",
  m6in_16xlarge: "m6in.16xlarge",
  m6in_24xlarge: "m6in.24xlarge",
  m6in_2xlarge: "m6in.2xlarge",
  m6in_32xlarge: "m6in.32xlarge",
  m6in_4xlarge: "m6in.4xlarge",
  m6in_8xlarge: "m6in.8xlarge",
  m6in_large: "m6in.large",
  m6in_metal: "m6in.metal",
  m6in_xlarge: "m6in.xlarge",
  m7a_12xlarge: "m7a.12xlarge",
  m7a_16xlarge: "m7a.16xlarge",
  m7a_24xlarge: "m7a.24xlarge",
  m7a_2xlarge: "m7a.2xlarge",
  m7a_32xlarge: "m7a.32xlarge",
  m7a_48xlarge: "m7a.48xlarge",
  m7a_4xlarge: "m7a.4xlarge",
  m7a_8xlarge: "m7a.8xlarge",
  m7a_large: "m7a.large",
  m7a_medium: "m7a.medium",
  m7a_metal_48xl: "m7a.metal-48xl",
  m7a_xlarge: "m7a.xlarge",
  m7g_12xlarge: "m7g.12xlarge",
  m7g_16xlarge: "m7g.16xlarge",
  m7g_2xlarge: "m7g.2xlarge",
  m7g_4xlarge: "m7g.4xlarge",
  m7g_8xlarge: "m7g.8xlarge",
  m7g_large: "m7g.large",
  m7g_medium: "m7g.medium",
  m7g_metal: "m7g.metal",
  m7g_xlarge: "m7g.xlarge",
  m7gd_12xlarge: "m7gd.12xlarge",
  m7gd_16xlarge: "m7gd.16xlarge",
  m7gd_2xlarge: "m7gd.2xlarge",
  m7gd_4xlarge: "m7gd.4xlarge",
  m7gd_8xlarge: "m7gd.8xlarge",
  m7gd_large: "m7gd.large",
  m7gd_medium: "m7gd.medium",
  m7gd_metal: "m7gd.metal",
  m7gd_xlarge: "m7gd.xlarge",
  m7i_12xlarge: "m7i.12xlarge",
  m7i_16xlarge: "m7i.16xlarge",
  m7i_24xlarge: "m7i.24xlarge",
  m7i_2xlarge: "m7i.2xlarge",
  m7i_48xlarge: "m7i.48xlarge",
  m7i_4xlarge: "m7i.4xlarge",
  m7i_8xlarge: "m7i.8xlarge",
  m7i_flex_2xlarge: "m7i-flex.2xlarge",
  m7i_flex_4xlarge: "m7i-flex.4xlarge",
  m7i_flex_8xlarge: "m7i-flex.8xlarge",
  m7i_flex_large: "m7i-flex.large",
  m7i_flex_xlarge: "m7i-flex.xlarge",
  m7i_large: "m7i.large",
  m7i_metal_24xl: "m7i.metal-24xl",
  m7i_metal_48xl: "m7i.metal-48xl",
  m7i_xlarge: "m7i.xlarge",
  mac1_metal: "mac1.metal",
  mac2_m1ultra_metal: "mac2-m1ultra.metal",
  mac2_m2_metal: "mac2-m2.metal",
  mac2_m2pro_metal: "mac2-m2pro.metal",
  mac2_metal: "mac2.metal",
  p2_16xlarge: "p2.16xlarge",
  p2_8xlarge: "p2.8xlarge",
  p2_xlarge: "p2.xlarge",
  p3_16xlarge: "p3.16xlarge",
  p3_2xlarge: "p3.2xlarge",
  p3_8xlarge: "p3.8xlarge",
  p3dn_24xlarge: "p3dn.24xlarge",
  p4d_24xlarge: "p4d.24xlarge",
  p4de_24xlarge: "p4de.24xlarge",
  p5_48xlarge: "p5.48xlarge",
  r3_2xlarge: "r3.2xlarge",
  r3_4xlarge: "r3.4xlarge",
  r3_8xlarge: "r3.8xlarge",
  r3_large: "r3.large",
  r3_xlarge: "r3.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_metal: "r5.metal",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r5ad_12xlarge: "r5ad.12xlarge",
  r5ad_16xlarge: "r5ad.16xlarge",
  r5ad_24xlarge: "r5ad.24xlarge",
  r5ad_2xlarge: "r5ad.2xlarge",
  r5ad_4xlarge: "r5ad.4xlarge",
  r5ad_8xlarge: "r5ad.8xlarge",
  r5ad_large: "r5ad.large",
  r5ad_xlarge: "r5ad.xlarge",
  r5b_12xlarge: "r5b.12xlarge",
  r5b_16xlarge: "r5b.16xlarge",
  r5b_24xlarge: "r5b.24xlarge",
  r5b_2xlarge: "r5b.2xlarge",
  r5b_4xlarge: "r5b.4xlarge",
  r5b_8xlarge: "r5b.8xlarge",
  r5b_large: "r5b.large",
  r5b_metal: "r5b.metal",
  r5b_xlarge: "r5b.xlarge",
  r5d_12xlarge: "r5d.12xlarge",
  r5d_16xlarge: "r5d.16xlarge",
  r5d_24xlarge: "r5d.24xlarge",
  r5d_2xlarge: "r5d.2xlarge",
  r5d_4xlarge: "r5d.4xlarge",
  r5d_8xlarge: "r5d.8xlarge",
  r5d_large: "r5d.large",
  r5d_metal: "r5d.metal",
  r5d_xlarge: "r5d.xlarge",
  r5dn_12xlarge: "r5dn.12xlarge",
  r5dn_16xlarge: "r5dn.16xlarge",
  r5dn_24xlarge: "r5dn.24xlarge",
  r5dn_2xlarge: "r5dn.2xlarge",
  r5dn_4xlarge: "r5dn.4xlarge",
  r5dn_8xlarge: "r5dn.8xlarge",
  r5dn_large: "r5dn.large",
  r5dn_metal: "r5dn.metal",
  r5dn_xlarge: "r5dn.xlarge",
  r5n_12xlarge: "r5n.12xlarge",
  r5n_16xlarge: "r5n.16xlarge",
  r5n_24xlarge: "r5n.24xlarge",
  r5n_2xlarge: "r5n.2xlarge",
  r5n_4xlarge: "r5n.4xlarge",
  r5n_8xlarge: "r5n.8xlarge",
  r5n_large: "r5n.large",
  r5n_metal: "r5n.metal",
  r5n_xlarge: "r5n.xlarge",
  r6a_12xlarge: "r6a.12xlarge",
  r6a_16xlarge: "r6a.16xlarge",
  r6a_24xlarge: "r6a.24xlarge",
  r6a_2xlarge: "r6a.2xlarge",
  r6a_32xlarge: "r6a.32xlarge",
  r6a_48xlarge: "r6a.48xlarge",
  r6a_4xlarge: "r6a.4xlarge",
  r6a_8xlarge: "r6a.8xlarge",
  r6a_large: "r6a.large",
  r6a_metal: "r6a.metal",
  r6a_xlarge: "r6a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_metal: "r6g.metal",
  r6g_xlarge: "r6g.xlarge",
  r6gd_12xlarge: "r6gd.12xlarge",
  r6gd_16xlarge: "r6gd.16xlarge",
  r6gd_2xlarge: "r6gd.2xlarge",
  r6gd_4xlarge: "r6gd.4xlarge",
  r6gd_8xlarge: "r6gd.8xlarge",
  r6gd_large: "r6gd.large",
  r6gd_medium: "r6gd.medium",
  r6gd_metal: "r6gd.metal",
  r6gd_xlarge: "r6gd.xlarge",
  r6i_12xlarge: "r6i.12xlarge",
  r6i_16xlarge: "r6i.16xlarge",
  r6i_24xlarge: "r6i.24xlarge",
  r6i_2xlarge: "r6i.2xlarge",
  r6i_32xlarge: "r6i.32xlarge",
  r6i_4xlarge: "r6i.4xlarge",
  r6i_8xlarge: "r6i.8xlarge",
  r6i_large: "r6i.large",
  r6i_metal: "r6i.metal",
  r6i_xlarge: "r6i.xlarge",
  r6id_12xlarge: "r6id.12xlarge",
  r6id_16xlarge: "r6id.16xlarge",
  r6id_24xlarge: "r6id.24xlarge",
  r6id_2xlarge: "r6id.2xlarge",
  r6id_32xlarge: "r6id.32xlarge",
  r6id_4xlarge: "r6id.4xlarge",
  r6id_8xlarge: "r6id.8xlarge",
  r6id_large: "r6id.large",
  r6id_metal: "r6id.metal",
  r6id_xlarge: "r6id.xlarge",
  r6idn_12xlarge: "r6idn.12xlarge",
  r6idn_16xlarge: "r6idn.16xlarge",
  r6idn_24xlarge: "r6idn.24xlarge",
  r6idn_2xlarge: "r6idn.2xlarge",
  r6idn_32xlarge: "r6idn.32xlarge",
  r6idn_4xlarge: "r6idn.4xlarge",
  r6idn_8xlarge: "r6idn.8xlarge",
  r6idn_large: "r6idn.large",
  r6idn_metal: "r6idn.metal",
  r6idn_xlarge: "r6idn.xlarge",
  r6in_12xlarge: "r6in.12xlarge",
  r6in_16xlarge: "r6in.16xlarge",
  r6in_24xlarge: "r6in.24xlarge",
  r6in_2xlarge: "r6in.2xlarge",
  r6in_32xlarge: "r6in.32xlarge",
  r6in_4xlarge: "r6in.4xlarge",
  r6in_8xlarge: "r6in.8xlarge",
  r6in_large: "r6in.large",
  r6in_metal: "r6in.metal",
  r6in_xlarge: "r6in.xlarge",
  r7a_12xlarge: "r7a.12xlarge",
  r7a_16xlarge: "r7a.16xlarge",
  r7a_24xlarge: "r7a.24xlarge",
  r7a_2xlarge: "r7a.2xlarge",
  r7a_32xlarge: "r7a.32xlarge",
  r7a_48xlarge: "r7a.48xlarge",
  r7a_4xlarge: "r7a.4xlarge",
  r7a_8xlarge: "r7a.8xlarge",
  r7a_large: "r7a.large",
  r7a_medium: "r7a.medium",
  r7a_metal_48xl: "r7a.metal-48xl",
  r7a_xlarge: "r7a.xlarge",
  r7g_12xlarge: "r7g.12xlarge",
  r7g_16xlarge: "r7g.16xlarge",
  r7g_2xlarge: "r7g.2xlarge",
  r7g_4xlarge: "r7g.4xlarge",
  r7g_8xlarge: "r7g.8xlarge",
  r7g_large: "r7g.large",
  r7g_medium: "r7g.medium",
  r7g_metal: "r7g.metal",
  r7g_xlarge: "r7g.xlarge",
  r7gd_12xlarge: "r7gd.12xlarge",
  r7gd_16xlarge: "r7gd.16xlarge",
  r7gd_2xlarge: "r7gd.2xlarge",
  r7gd_4xlarge: "r7gd.4xlarge",
  r7gd_8xlarge: "r7gd.8xlarge",
  r7gd_large: "r7gd.large",
  r7gd_medium: "r7gd.medium",
  r7gd_metal: "r7gd.metal",
  r7gd_xlarge: "r7gd.xlarge",
  r7i_12xlarge: "r7i.12xlarge",
  r7i_16xlarge: "r7i.16xlarge",
  r7i_24xlarge: "r7i.24xlarge",
  r7i_2xlarge: "r7i.2xlarge",
  r7i_48xlarge: "r7i.48xlarge",
  r7i_4xlarge: "r7i.4xlarge",
  r7i_8xlarge: "r7i.8xlarge",
  r7i_large: "r7i.large",
  r7i_metal_24xl: "r7i.metal-24xl",
  r7i_metal_48xl: "r7i.metal-48xl",
  r7i_xlarge: "r7i.xlarge",
  r7iz_12xlarge: "r7iz.12xlarge",
  r7iz_16xlarge: "r7iz.16xlarge",
  r7iz_2xlarge: "r7iz.2xlarge",
  r7iz_32xlarge: "r7iz.32xlarge",
  r7iz_4xlarge: "r7iz.4xlarge",
  r7iz_8xlarge: "r7iz.8xlarge",
  r7iz_large: "r7iz.large",
  r7iz_metal_16xl: "r7iz.metal-16xl",
  r7iz_metal_32xl: "r7iz.metal-32xl",
  r7iz_xlarge: "r7iz.xlarge",
  r8g_12xlarge: "r8g.12xlarge",
  r8g_16xlarge: "r8g.16xlarge",
  r8g_24xlarge: "r8g.24xlarge",
  r8g_2xlarge: "r8g.2xlarge",
  r8g_48xlarge: "r8g.48xlarge",
  r8g_4xlarge: "r8g.4xlarge",
  r8g_8xlarge: "r8g.8xlarge",
  r8g_large: "r8g.large",
  r8g_medium: "r8g.medium",
  r8g_metal_24xl: "r8g.metal-24xl",
  r8g_metal_48xl: "r8g.metal-48xl",
  r8g_xlarge: "r8g.xlarge",
  t1_micro: "t1.micro",
  t2_2xlarge: "t2.2xlarge",
  t2_large: "t2.large",
  t2_medium: "t2.medium",
  t2_micro: "t2.micro",
  t2_nano: "t2.nano",
  t2_small: "t2.small",
  t2_xlarge: "t2.xlarge",
  t3_2xlarge: "t3.2xlarge",
  t3_large: "t3.large",
  t3_medium: "t3.medium",
  t3_micro: "t3.micro",
  t3_nano: "t3.nano",
  t3_small: "t3.small",
  t3_xlarge: "t3.xlarge",
  t3a_2xlarge: "t3a.2xlarge",
  t3a_large: "t3a.large",
  t3a_medium: "t3a.medium",
  t3a_micro: "t3a.micro",
  t3a_nano: "t3a.nano",
  t3a_small: "t3a.small",
  t3a_xlarge: "t3a.xlarge",
  t4g_2xlarge: "t4g.2xlarge",
  t4g_large: "t4g.large",
  t4g_medium: "t4g.medium",
  t4g_micro: "t4g.micro",
  t4g_nano: "t4g.nano",
  t4g_small: "t4g.small",
  t4g_xlarge: "t4g.xlarge",
  trn1_2xlarge: "trn1.2xlarge",
  trn1_32xlarge: "trn1.32xlarge",
  trn1n_32xlarge: "trn1n.32xlarge",
  u7i_12tb_224xlarge: "u7i-12tb.224xlarge",
  u7ib_12tb_224xlarge: "u7ib-12tb.224xlarge",
  u7in_16tb_224xlarge: "u7in-16tb.224xlarge",
  u7in_24tb_224xlarge: "u7in-24tb.224xlarge",
  u7in_32tb_224xlarge: "u7in-32tb.224xlarge",
  u_12tb1_112xlarge: "u-12tb1.112xlarge",
  u_12tb1_metal: "u-12tb1.metal",
  u_18tb1_112xlarge: "u-18tb1.112xlarge",
  u_18tb1_metal: "u-18tb1.metal",
  u_24tb1_112xlarge: "u-24tb1.112xlarge",
  u_24tb1_metal: "u-24tb1.metal",
  u_3tb1_56xlarge: "u-3tb1.56xlarge",
  u_6tb1_112xlarge: "u-6tb1.112xlarge",
  u_6tb1_56xlarge: "u-6tb1.56xlarge",
  u_6tb1_metal: "u-6tb1.metal",
  u_9tb1_112xlarge: "u-9tb1.112xlarge",
  u_9tb1_metal: "u-9tb1.metal",
  vt1_24xlarge: "vt1.24xlarge",
  vt1_3xlarge: "vt1.3xlarge",
  vt1_6xlarge: "vt1.6xlarge",
  x1_16xlarge: "x1.16xlarge",
  x1_32xlarge: "x1.32xlarge",
  x1e_16xlarge: "x1e.16xlarge",
  x1e_2xlarge: "x1e.2xlarge",
  x1e_32xlarge: "x1e.32xlarge",
  x1e_4xlarge: "x1e.4xlarge",
  x1e_8xlarge: "x1e.8xlarge",
  x1e_xlarge: "x1e.xlarge",
  x2gd_12xlarge: "x2gd.12xlarge",
  x2gd_16xlarge: "x2gd.16xlarge",
  x2gd_2xlarge: "x2gd.2xlarge",
  x2gd_4xlarge: "x2gd.4xlarge",
  x2gd_8xlarge: "x2gd.8xlarge",
  x2gd_large: "x2gd.large",
  x2gd_medium: "x2gd.medium",
  x2gd_metal: "x2gd.metal",
  x2gd_xlarge: "x2gd.xlarge",
  x2idn_16xlarge: "x2idn.16xlarge",
  x2idn_24xlarge: "x2idn.24xlarge",
  x2idn_32xlarge: "x2idn.32xlarge",
  x2idn_metal: "x2idn.metal",
  x2iedn_16xlarge: "x2iedn.16xlarge",
  x2iedn_24xlarge: "x2iedn.24xlarge",
  x2iedn_2xlarge: "x2iedn.2xlarge",
  x2iedn_32xlarge: "x2iedn.32xlarge",
  x2iedn_4xlarge: "x2iedn.4xlarge",
  x2iedn_8xlarge: "x2iedn.8xlarge",
  x2iedn_metal: "x2iedn.metal",
  x2iedn_xlarge: "x2iedn.xlarge",
  x2iezn_12xlarge: "x2iezn.12xlarge",
  x2iezn_2xlarge: "x2iezn.2xlarge",
  x2iezn_4xlarge: "x2iezn.4xlarge",
  x2iezn_6xlarge: "x2iezn.6xlarge",
  x2iezn_8xlarge: "x2iezn.8xlarge",
  x2iezn_metal: "x2iezn.metal",
  z1d_12xlarge: "z1d.12xlarge",
  z1d_2xlarge: "z1d.2xlarge",
  z1d_3xlarge: "z1d.3xlarge",
  z1d_6xlarge: "z1d.6xlarge",
  z1d_large: "z1d.large",
  z1d_metal: "z1d.metal",
  z1d_xlarge: "z1d.xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * <p>Information about an instance type to use in a Capacity Reservation Fleet.</p>
 * @public
 */
export interface ReservationFleetInstanceSpecification {
  /**
   * <p>The instance type for which the Capacity Reservation Fleet reserves capacity.</p>
   * @public
   */
  InstanceType?: _InstanceType;

  /**
   * <p>The type of operating system for which the Capacity Reservation Fleet reserves capacity.</p>
   * @public
   */
  InstancePlatform?: CapacityReservationInstancePlatform;

  /**
   * <p>The number of capacity units provided by the specified instance type. This value, together
   * 			with the total target capacity that you specify for the Fleet determine the number of
   * 			instances for which the Fleet reserves capacity. Both values are based on units that
   * 			make sense for your workload. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#target-capacity">Total target
   * 				capacity</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Weight?: number;

  /**
   * <p>The Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A Capacity
   * 			Reservation Fleet can't span Availability Zones. All instance type specifications that you specify
   * 			for the Fleet must use the same Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone in which the Capacity Reservation Fleet reserves the capacity. A
   * 			Capacity Reservation Fleet can't span Availability Zones. All instance type specifications that you
   * 			specify for the Fleet must use the same Availability Zone.</p>
   * @public
   */
  AvailabilityZoneId?: string;

  /**
   * <p>Indicates whether the Capacity Reservation Fleet supports EBS-optimized instances types. This
   * 			optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack
   * 			to provide optimal I/O performance. This optimization isn't available with all instance types. Additional
   * 			usage charges apply when using EBS-optimized instance types.</p>
   * @public
   */
  EbsOptimized?: boolean;

  /**
   * <p>The priority to assign to the instance type. This value is used to determine which of the
   * 			instance types specified for the Fleet should be prioritized for use. A lower value
   * 			indicates a high priority. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/crfleet-concepts.html#instance-priority">Instance type
   * 				priority</a> in the <i>Amazon EC2 User Guide</i>.</p>
   * @public
   */
  Priority?: number;
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
