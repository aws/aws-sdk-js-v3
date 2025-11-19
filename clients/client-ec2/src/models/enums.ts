// smithy-typescript generated code
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
  GAUDI_HL_205: "gaudi-hl-205",
  H100: "h100",
  INFERENTIA: "inferentia",
  INFERENTIA2: "inferentia2",
  K520: "k520",
  K80: "k80",
  L4: "l4",
  L40S: "l40s",
  M60: "m60",
  RADEON_PRO_V520: "radeon-pro-v520",
  T4: "t4",
  T4G: "t4g",
  TRAINIUM: "trainium",
  TRAINIUM2: "trainium2",
  U30: "u30",
  V100: "v100",
  VU9P: "vu9p",
} as const;
/**
 * @public
 */
export type AcceleratorName = (typeof AcceleratorName)[keyof typeof AcceleratorName];

/**
 * @public
 * @enum
 */
export const AcceleratorType = {
  FPGA: "fpga",
  GPU: "gpu",
  INFERENCE: "inference",
  MEDIA: "media",
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
  capacity_block: "capacity-block",
  capacity_manager_data_export: "capacity-manager-data-export",
  capacity_reservation: "capacity-reservation",
  capacity_reservation_fleet: "capacity-reservation-fleet",
  carrier_gateway: "carrier-gateway",
  client_vpn_endpoint: "client-vpn-endpoint",
  coip_pool: "coip-pool",
  customer_gateway: "customer-gateway",
  declarative_policies_report: "declarative-policies-report",
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
  image_usage_report: "image-usage-report",
  import_image_task: "import-image-task",
  import_snapshot_task: "import-snapshot-task",
  instance: "instance",
  instance_connect_endpoint: "instance-connect-endpoint",
  instance_event_window: "instance-event-window",
  internet_gateway: "internet-gateway",
  ipam: "ipam",
  ipam_external_resource_verification_token: "ipam-external-resource-verification-token",
  ipam_pool: "ipam-pool",
  ipam_prefix_list_resolver: "ipam-prefix-list-resolver",
  ipam_prefix_list_resolver_target: "ipam-prefix-list-resolver-target",
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
  mac_modification_task: "mac-modification-task",
  natgateway: "natgateway",
  network_acl: "network-acl",
  network_insights_access_scope: "network-insights-access-scope",
  network_insights_access_scope_analysis: "network-insights-access-scope-analysis",
  network_insights_analysis: "network-insights-analysis",
  network_insights_path: "network-insights-path",
  network_interface: "network-interface",
  outpost_lag: "outpost-lag",
  placement_group: "placement-group",
  prefix_list: "prefix-list",
  replace_root_volume_task: "replace-root-volume-task",
  reserved_instances: "reserved-instances",
  route_server: "route-server",
  route_server_endpoint: "route-server-endpoint",
  route_server_peer: "route-server-peer",
  route_table: "route-table",
  security_group: "security-group",
  security_group_rule: "security-group-rule",
  service_link_virtual_interface: "service-link-virtual-interface",
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
  verified_access_endpoint_target: "verified-access-endpoint-target",
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
  vpn_concentrator: "vpn-concentrator",
  vpn_connection: "vpn-connection",
  vpn_connection_device_type: "vpn-connection-device-type",
  vpn_gateway: "vpn-gateway",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

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
 * @public
 * @enum
 */
export const TransitGatewayAttachmentResourceType = {
  connect: "connect",
  direct_connect_gateway: "direct-connect-gateway",
  network_function: "network-function",
  peering: "peering",
  tgw_peering: "tgw-peering",
  vpc: "vpc",
  vpn: "vpn",
  vpn_concentrator: "vpn-concentrator",
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
 * @public
 * @enum
 */
export const VpnTunnelProvisioningStatus = {
  available: "available",
  failed: "failed",
  pending: "pending",
} as const;
/**
 * @public
 */
export type VpnTunnelProvisioningStatus =
  (typeof VpnTunnelProvisioningStatus)[keyof typeof VpnTunnelProvisioningStatus];

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
 * @public
 * @enum
 */
export const ServiceManaged = {
  alb: "alb",
  nlb: "nlb",
  rnat: "rnat",
} as const;
/**
 * @public
 */
export type ServiceManaged = (typeof ServiceManaged)[keyof typeof ServiceManaged];

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
  future: "future",
  used: "used",
} as const;
/**
 * @public
 */
export type AllocationType = (typeof AllocationType)[keyof typeof AllocationType];

/**
 * @public
 * @enum
 */
export const AllowedImagesSettingsDisabledState = {
  disabled: "disabled",
} as const;
/**
 * @public
 */
export type AllowedImagesSettingsDisabledState =
  (typeof AllowedImagesSettingsDisabledState)[keyof typeof AllowedImagesSettingsDisabledState];

/**
 * @public
 * @enum
 */
export const AllowedImagesSettingsEnabledState = {
  audit_mode: "audit-mode",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type AllowedImagesSettingsEnabledState =
  (typeof AllowedImagesSettingsEnabledState)[keyof typeof AllowedImagesSettingsEnabledState];

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
 * @public
 * @enum
 */
export const RouteServerAssociationState = {
  ASSOCIATED: "associated",
  ASSOCIATING: "associating",
  DISASSOCIATING: "disassociating",
} as const;
/**
 * @public
 */
export type RouteServerAssociationState =
  (typeof RouteServerAssociationState)[keyof typeof RouteServerAssociationState];

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
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  io2: "io2",
  sc1: "sc1",
  st1: "st1",
  standard: "standard",
} as const;
/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

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
 * @enum
 */
export const OutputFormat = {
  CSV: "csv",
  PARQUET: "parquet",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const Schedule = {
  HOURLY: "hourly",
} as const;
/**
 * @public
 */
export type Schedule = (typeof Schedule)[keyof typeof Schedule];

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
  assessing: "assessing",
  cancelled: "cancelled",
  delayed: "delayed",
  expired: "expired",
  failed: "failed",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  pending: "pending",
  scheduled: "scheduled",
  unavailable: "unavailable",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type CapacityReservationState = (typeof CapacityReservationState)[keyof typeof CapacityReservationState];

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
  c7i_flex_12xlarge: "c7i-flex.12xlarge",
  c7i_flex_16xlarge: "c7i-flex.16xlarge",
  c7i_flex_2xlarge: "c7i-flex.2xlarge",
  c7i_flex_4xlarge: "c7i-flex.4xlarge",
  c7i_flex_8xlarge: "c7i-flex.8xlarge",
  c7i_flex_large: "c7i-flex.large",
  c7i_flex_xlarge: "c7i-flex.xlarge",
  c7i_large: "c7i.large",
  c7i_metal_24xl: "c7i.metal-24xl",
  c7i_metal_48xl: "c7i.metal-48xl",
  c7i_xlarge: "c7i.xlarge",
  c8g_12xlarge: "c8g.12xlarge",
  c8g_16xlarge: "c8g.16xlarge",
  c8g_24xlarge: "c8g.24xlarge",
  c8g_2xlarge: "c8g.2xlarge",
  c8g_48xlarge: "c8g.48xlarge",
  c8g_4xlarge: "c8g.4xlarge",
  c8g_8xlarge: "c8g.8xlarge",
  c8g_large: "c8g.large",
  c8g_medium: "c8g.medium",
  c8g_metal_24xl: "c8g.metal-24xl",
  c8g_metal_48xl: "c8g.metal-48xl",
  c8g_xlarge: "c8g.xlarge",
  c8gd_12xlarge: "c8gd.12xlarge",
  c8gd_16xlarge: "c8gd.16xlarge",
  c8gd_24xlarge: "c8gd.24xlarge",
  c8gd_2xlarge: "c8gd.2xlarge",
  c8gd_48xlarge: "c8gd.48xlarge",
  c8gd_4xlarge: "c8gd.4xlarge",
  c8gd_8xlarge: "c8gd.8xlarge",
  c8gd_large: "c8gd.large",
  c8gd_medium: "c8gd.medium",
  c8gd_metal_24xl: "c8gd.metal-24xl",
  c8gd_metal_48xl: "c8gd.metal-48xl",
  c8gd_xlarge: "c8gd.xlarge",
  c8gn_12xlarge: "c8gn.12xlarge",
  c8gn_16xlarge: "c8gn.16xlarge",
  c8gn_24xlarge: "c8gn.24xlarge",
  c8gn_2xlarge: "c8gn.2xlarge",
  c8gn_48xlarge: "c8gn.48xlarge",
  c8gn_4xlarge: "c8gn.4xlarge",
  c8gn_8xlarge: "c8gn.8xlarge",
  c8gn_large: "c8gn.large",
  c8gn_medium: "c8gn.medium",
  c8gn_metal_24xl: "c8gn.metal-24xl",
  c8gn_metal_48xl: "c8gn.metal-48xl",
  c8gn_xlarge: "c8gn.xlarge",
  c8i_12xlarge: "c8i.12xlarge",
  c8i_16xlarge: "c8i.16xlarge",
  c8i_24xlarge: "c8i.24xlarge",
  c8i_2xlarge: "c8i.2xlarge",
  c8i_32xlarge: "c8i.32xlarge",
  c8i_48xlarge: "c8i.48xlarge",
  c8i_4xlarge: "c8i.4xlarge",
  c8i_8xlarge: "c8i.8xlarge",
  c8i_96xlarge: "c8i.96xlarge",
  c8i_flex_12xlarge: "c8i-flex.12xlarge",
  c8i_flex_16xlarge: "c8i-flex.16xlarge",
  c8i_flex_2xlarge: "c8i-flex.2xlarge",
  c8i_flex_4xlarge: "c8i-flex.4xlarge",
  c8i_flex_8xlarge: "c8i-flex.8xlarge",
  c8i_flex_large: "c8i-flex.large",
  c8i_flex_xlarge: "c8i-flex.xlarge",
  c8i_large: "c8i.large",
  c8i_metal_48xl: "c8i.metal-48xl",
  c8i_metal_96xl: "c8i.metal-96xl",
  c8i_xlarge: "c8i.xlarge",
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
  f2_12xlarge: "f2.12xlarge",
  f2_48xlarge: "f2.48xlarge",
  f2_6xlarge: "f2.6xlarge",
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
  g6f_2xlarge: "g6f.2xlarge",
  g6f_4xlarge: "g6f.4xlarge",
  g6f_large: "g6f.large",
  g6f_xlarge: "g6f.xlarge",
  gr6_4xlarge: "gr6.4xlarge",
  gr6_8xlarge: "gr6.8xlarge",
  gr6f_4xlarge: "gr6f.4xlarge",
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
  i7i_12xlarge: "i7i.12xlarge",
  i7i_16xlarge: "i7i.16xlarge",
  i7i_24xlarge: "i7i.24xlarge",
  i7i_2xlarge: "i7i.2xlarge",
  i7i_48xlarge: "i7i.48xlarge",
  i7i_4xlarge: "i7i.4xlarge",
  i7i_8xlarge: "i7i.8xlarge",
  i7i_large: "i7i.large",
  i7i_metal_24xl: "i7i.metal-24xl",
  i7i_metal_48xl: "i7i.metal-48xl",
  i7i_xlarge: "i7i.xlarge",
  i7ie_12xlarge: "i7ie.12xlarge",
  i7ie_18xlarge: "i7ie.18xlarge",
  i7ie_24xlarge: "i7ie.24xlarge",
  i7ie_2xlarge: "i7ie.2xlarge",
  i7ie_3xlarge: "i7ie.3xlarge",
  i7ie_48xlarge: "i7ie.48xlarge",
  i7ie_6xlarge: "i7ie.6xlarge",
  i7ie_large: "i7ie.large",
  i7ie_metal_24xl: "i7ie.metal-24xl",
  i7ie_metal_48xl: "i7ie.metal-48xl",
  i7ie_xlarge: "i7ie.xlarge",
  i8g_12xlarge: "i8g.12xlarge",
  i8g_16xlarge: "i8g.16xlarge",
  i8g_24xlarge: "i8g.24xlarge",
  i8g_2xlarge: "i8g.2xlarge",
  i8g_48xlarge: "i8g.48xlarge",
  i8g_4xlarge: "i8g.4xlarge",
  i8g_8xlarge: "i8g.8xlarge",
  i8g_large: "i8g.large",
  i8g_metal_24xl: "i8g.metal-24xl",
  i8g_xlarge: "i8g.xlarge",
  i8ge_12xlarge: "i8ge.12xlarge",
  i8ge_18xlarge: "i8ge.18xlarge",
  i8ge_24xlarge: "i8ge.24xlarge",
  i8ge_2xlarge: "i8ge.2xlarge",
  i8ge_3xlarge: "i8ge.3xlarge",
  i8ge_48xlarge: "i8ge.48xlarge",
  i8ge_6xlarge: "i8ge.6xlarge",
  i8ge_large: "i8ge.large",
  i8ge_metal_24xl: "i8ge.metal-24xl",
  i8ge_metal_48xl: "i8ge.metal-48xl",
  i8ge_xlarge: "i8ge.xlarge",
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
  m7i_flex_12xlarge: "m7i-flex.12xlarge",
  m7i_flex_16xlarge: "m7i-flex.16xlarge",
  m7i_flex_2xlarge: "m7i-flex.2xlarge",
  m7i_flex_4xlarge: "m7i-flex.4xlarge",
  m7i_flex_8xlarge: "m7i-flex.8xlarge",
  m7i_flex_large: "m7i-flex.large",
  m7i_flex_xlarge: "m7i-flex.xlarge",
  m7i_large: "m7i.large",
  m7i_metal_24xl: "m7i.metal-24xl",
  m7i_metal_48xl: "m7i.metal-48xl",
  m7i_xlarge: "m7i.xlarge",
  m8a_12xlarge: "m8a.12xlarge",
  m8a_16xlarge: "m8a.16xlarge",
  m8a_24xlarge: "m8a.24xlarge",
  m8a_2xlarge: "m8a.2xlarge",
  m8a_48xlarge: "m8a.48xlarge",
  m8a_4xlarge: "m8a.4xlarge",
  m8a_8xlarge: "m8a.8xlarge",
  m8a_large: "m8a.large",
  m8a_medium: "m8a.medium",
  m8a_metal_24xl: "m8a.metal-24xl",
  m8a_metal_48xl: "m8a.metal-48xl",
  m8a_xlarge: "m8a.xlarge",
  m8g_12xlarge: "m8g.12xlarge",
  m8g_16xlarge: "m8g.16xlarge",
  m8g_24xlarge: "m8g.24xlarge",
  m8g_2xlarge: "m8g.2xlarge",
  m8g_48xlarge: "m8g.48xlarge",
  m8g_4xlarge: "m8g.4xlarge",
  m8g_8xlarge: "m8g.8xlarge",
  m8g_large: "m8g.large",
  m8g_medium: "m8g.medium",
  m8g_metal_24xl: "m8g.metal-24xl",
  m8g_metal_48xl: "m8g.metal-48xl",
  m8g_xlarge: "m8g.xlarge",
  m8gd_12xlarge: "m8gd.12xlarge",
  m8gd_16xlarge: "m8gd.16xlarge",
  m8gd_24xlarge: "m8gd.24xlarge",
  m8gd_2xlarge: "m8gd.2xlarge",
  m8gd_48xlarge: "m8gd.48xlarge",
  m8gd_4xlarge: "m8gd.4xlarge",
  m8gd_8xlarge: "m8gd.8xlarge",
  m8gd_large: "m8gd.large",
  m8gd_medium: "m8gd.medium",
  m8gd_metal_24xl: "m8gd.metal-24xl",
  m8gd_metal_48xl: "m8gd.metal-48xl",
  m8gd_xlarge: "m8gd.xlarge",
  m8i_12xlarge: "m8i.12xlarge",
  m8i_16xlarge: "m8i.16xlarge",
  m8i_24xlarge: "m8i.24xlarge",
  m8i_2xlarge: "m8i.2xlarge",
  m8i_32xlarge: "m8i.32xlarge",
  m8i_48xlarge: "m8i.48xlarge",
  m8i_4xlarge: "m8i.4xlarge",
  m8i_8xlarge: "m8i.8xlarge",
  m8i_96xlarge: "m8i.96xlarge",
  m8i_flex_12xlarge: "m8i-flex.12xlarge",
  m8i_flex_16xlarge: "m8i-flex.16xlarge",
  m8i_flex_2xlarge: "m8i-flex.2xlarge",
  m8i_flex_4xlarge: "m8i-flex.4xlarge",
  m8i_flex_8xlarge: "m8i-flex.8xlarge",
  m8i_flex_large: "m8i-flex.large",
  m8i_flex_xlarge: "m8i-flex.xlarge",
  m8i_large: "m8i.large",
  m8i_metal_48xl: "m8i.metal-48xl",
  m8i_metal_96xl: "m8i.metal-96xl",
  m8i_xlarge: "m8i.xlarge",
  mac1_metal: "mac1.metal",
  mac2_m1ultra_metal: "mac2-m1ultra.metal",
  mac2_m2_metal: "mac2-m2.metal",
  mac2_m2pro_metal: "mac2-m2pro.metal",
  mac2_metal: "mac2.metal",
  mac_m4_metal: "mac-m4.metal",
  mac_m4pro_metal: "mac-m4pro.metal",
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
  p5_4xlarge: "p5.4xlarge",
  p5e_48xlarge: "p5e.48xlarge",
  p5en_48xlarge: "p5en.48xlarge",
  p6_b200_48xlarge: "p6-b200.48xlarge",
  p6e_gb200_36xlarge: "p6e-gb200.36xlarge",
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
  r8a_12xlarge: "r8a.12xlarge",
  r8a_16xlarge: "r8a.16xlarge",
  r8a_24xlarge: "r8a.24xlarge",
  r8a_2xlarge: "r8a.2xlarge",
  r8a_48xlarge: "r8a.48xlarge",
  r8a_4xlarge: "r8a.4xlarge",
  r8a_8xlarge: "r8a.8xlarge",
  r8a_large: "r8a.large",
  r8a_medium: "r8a.medium",
  r8a_metal_24xl: "r8a.metal-24xl",
  r8a_metal_48xl: "r8a.metal-48xl",
  r8a_xlarge: "r8a.xlarge",
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
  r8gb_12xlarge: "r8gb.12xlarge",
  r8gb_16xlarge: "r8gb.16xlarge",
  r8gb_24xlarge: "r8gb.24xlarge",
  r8gb_2xlarge: "r8gb.2xlarge",
  r8gb_4xlarge: "r8gb.4xlarge",
  r8gb_8xlarge: "r8gb.8xlarge",
  r8gb_large: "r8gb.large",
  r8gb_medium: "r8gb.medium",
  r8gb_metal_24xl: "r8gb.metal-24xl",
  r8gb_xlarge: "r8gb.xlarge",
  r8gd_12xlarge: "r8gd.12xlarge",
  r8gd_16xlarge: "r8gd.16xlarge",
  r8gd_24xlarge: "r8gd.24xlarge",
  r8gd_2xlarge: "r8gd.2xlarge",
  r8gd_48xlarge: "r8gd.48xlarge",
  r8gd_4xlarge: "r8gd.4xlarge",
  r8gd_8xlarge: "r8gd.8xlarge",
  r8gd_large: "r8gd.large",
  r8gd_medium: "r8gd.medium",
  r8gd_metal_24xl: "r8gd.metal-24xl",
  r8gd_metal_48xl: "r8gd.metal-48xl",
  r8gd_xlarge: "r8gd.xlarge",
  r8gn_12xlarge: "r8gn.12xlarge",
  r8gn_16xlarge: "r8gn.16xlarge",
  r8gn_24xlarge: "r8gn.24xlarge",
  r8gn_2xlarge: "r8gn.2xlarge",
  r8gn_48xlarge: "r8gn.48xlarge",
  r8gn_4xlarge: "r8gn.4xlarge",
  r8gn_8xlarge: "r8gn.8xlarge",
  r8gn_large: "r8gn.large",
  r8gn_medium: "r8gn.medium",
  r8gn_metal_24xl: "r8gn.metal-24xl",
  r8gn_metal_48xl: "r8gn.metal-48xl",
  r8gn_xlarge: "r8gn.xlarge",
  r8i_12xlarge: "r8i.12xlarge",
  r8i_16xlarge: "r8i.16xlarge",
  r8i_24xlarge: "r8i.24xlarge",
  r8i_2xlarge: "r8i.2xlarge",
  r8i_32xlarge: "r8i.32xlarge",
  r8i_48xlarge: "r8i.48xlarge",
  r8i_4xlarge: "r8i.4xlarge",
  r8i_8xlarge: "r8i.8xlarge",
  r8i_96xlarge: "r8i.96xlarge",
  r8i_flex_12xlarge: "r8i-flex.12xlarge",
  r8i_flex_16xlarge: "r8i-flex.16xlarge",
  r8i_flex_2xlarge: "r8i-flex.2xlarge",
  r8i_flex_4xlarge: "r8i-flex.4xlarge",
  r8i_flex_8xlarge: "r8i-flex.8xlarge",
  r8i_flex_large: "r8i-flex.large",
  r8i_flex_xlarge: "r8i-flex.xlarge",
  r8i_large: "r8i.large",
  r8i_metal_48xl: "r8i.metal-48xl",
  r8i_metal_96xl: "r8i.metal-96xl",
  r8i_xlarge: "r8i.xlarge",
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
  trn2_3xlarge: "trn2.3xlarge",
  trn2_48xlarge: "trn2.48xlarge",
  u7i_12tb_224xlarge: "u7i-12tb.224xlarge",
  u7i_6tb_112xlarge: "u7i-6tb.112xlarge",
  u7i_8tb_112xlarge: "u7i-8tb.112xlarge",
  u7ib_12tb_224xlarge: "u7ib-12tb.224xlarge",
  u7in_16tb_224xlarge: "u7in-16tb.224xlarge",
  u7in_24tb_224xlarge: "u7in-24tb.224xlarge",
  u7in_32tb_224xlarge: "u7in-32tb.224xlarge",
  u7inh_32tb_480xlarge: "u7inh-32tb.480xlarge",
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
  x8g_12xlarge: "x8g.12xlarge",
  x8g_16xlarge: "x8g.16xlarge",
  x8g_24xlarge: "x8g.24xlarge",
  x8g_2xlarge: "x8g.2xlarge",
  x8g_48xlarge: "x8g.48xlarge",
  x8g_4xlarge: "x8g.4xlarge",
  x8g_8xlarge: "x8g.8xlarge",
  x8g_large: "x8g.large",
  x8g_medium: "x8g.medium",
  x8g_metal_24xl: "x8g.metal-24xl",
  x8g_metal_48xl: "x8g.metal-48xl",
  x8g_xlarge: "x8g.xlarge",
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
 * @public
 * @enum
 */
export const FleetCapacityReservationTenancy = {
  default: "default",
} as const;
/**
 * @public
 */
export type FleetCapacityReservationTenancy =
  (typeof FleetCapacityReservationTenancy)[keyof typeof FleetCapacityReservationTenancy];

/**
 * @public
 * @enum
 */
export const CarrierGatewayState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;
/**
 * @public
 */
export type CarrierGatewayState = (typeof CarrierGatewayState)[keyof typeof CarrierGatewayState];

/**
 * @public
 * @enum
 */
export const ClientVpnAuthenticationType = {
  certificate_authentication: "certificate-authentication",
  directory_service_authentication: "directory-service-authentication",
  federated_authentication: "federated-authentication",
} as const;
/**
 * @public
 */
export type ClientVpnAuthenticationType =
  (typeof ClientVpnAuthenticationType)[keyof typeof ClientVpnAuthenticationType];

/**
 * @public
 * @enum
 */
export const EndpointIpAddressType = {
  dual_stack: "dual-stack",
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;
/**
 * @public
 */
export type EndpointIpAddressType = (typeof EndpointIpAddressType)[keyof typeof EndpointIpAddressType];

/**
 * @public
 * @enum
 */
export const SelfServicePortal = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type SelfServicePortal = (typeof SelfServicePortal)[keyof typeof SelfServicePortal];

/**
 * @public
 * @enum
 */
export const TrafficIpAddressType = {
  dual_stack: "dual-stack",
  ipv4: "ipv4",
  ipv6: "ipv6",
} as const;
/**
 * @public
 */
export type TrafficIpAddressType = (typeof TrafficIpAddressType)[keyof typeof TrafficIpAddressType];

/**
 * @public
 * @enum
 */
export const TransportProtocol = {
  tcp: "tcp",
  udp: "udp",
} as const;
/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

/**
 * @public
 * @enum
 */
export const ClientVpnEndpointStatusCode = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending_associate: "pending-associate",
} as const;
/**
 * @public
 */
export type ClientVpnEndpointStatusCode =
  (typeof ClientVpnEndpointStatusCode)[keyof typeof ClientVpnEndpointStatusCode];

/**
 * @public
 * @enum
 */
export const ClientVpnRouteStatusCode = {
  active: "active",
  creating: "creating",
  deleting: "deleting",
  failed: "failed",
} as const;
/**
 * @public
 */
export type ClientVpnRouteStatusCode = (typeof ClientVpnRouteStatusCode)[keyof typeof ClientVpnRouteStatusCode];

/**
 * @public
 * @enum
 */
export const GatewayType = {
  ipsec_1: "ipsec.1",
} as const;
/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * @enum
 */
export const BlockPublicAccessMode = {
  block_bidirectional: "block-bidirectional",
  block_ingress: "block-ingress",
  off: "off",
} as const;
/**
 * @public
 */
export type BlockPublicAccessMode = (typeof BlockPublicAccessMode)[keyof typeof BlockPublicAccessMode];

/**
 * @public
 * @enum
 */
export const HostnameType = {
  ip_name: "ip-name",
  resource_name: "resource-name",
} as const;
/**
 * @public
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

/**
 * @public
 * @enum
 */
export const SubnetState = {
  available: "available",
  failed: "failed",
  failed_insufficient_capacity: "failed-insufficient-capacity",
  pending: "pending",
  unavailable: "unavailable",
} as const;
/**
 * @public
 */
export type SubnetState = (typeof SubnetState)[keyof typeof SubnetState];

/**
 * @public
 * @enum
 */
export const VpcEncryptionControlMode = {
  enforce: "enforce",
  monitor: "monitor",
} as const;
/**
 * @public
 */
export type VpcEncryptionControlMode = (typeof VpcEncryptionControlMode)[keyof typeof VpcEncryptionControlMode];

/**
 * @public
 * @enum
 */
export const VpcEncryptionControlExclusionState = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  enabling: "enabling",
} as const;
/**
 * @public
 */
export type VpcEncryptionControlExclusionState =
  (typeof VpcEncryptionControlExclusionState)[keyof typeof VpcEncryptionControlExclusionState];

/**
 * @public
 * @enum
 */
export const VpcEncryptionControlState = {
  available: "available",
  creating: "creating",
  delete_failed: "delete-failed",
  deleted: "deleted",
  deleting: "deleting",
  enforce_failed: "enforce-failed",
  enforce_in_progress: "enforce-in-progress",
  monitor_failed: "monitor-failed",
  monitor_in_progress: "monitor-in-progress",
} as const;
/**
 * @public
 */
export type VpcEncryptionControlState = (typeof VpcEncryptionControlState)[keyof typeof VpcEncryptionControlState];

/**
 * @public
 * @enum
 */
export const Tenancy = {
  dedicated: "dedicated",
  default: "default",
  host: "host",
} as const;
/**
 * @public
 */
export type Tenancy = (typeof Tenancy)[keyof typeof Tenancy];

/**
 * @public
 * @enum
 */
export const VpcState = {
  available: "available",
  pending: "pending",
} as const;
/**
 * @public
 */
export type VpcState = (typeof VpcState)[keyof typeof VpcState];

/**
 * @public
 * @enum
 */
export const MacSystemIntegrityProtectionSettingStatus = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type MacSystemIntegrityProtectionSettingStatus =
  (typeof MacSystemIntegrityProtectionSettingStatus)[keyof typeof MacSystemIntegrityProtectionSettingStatus];

/**
 * @public
 * @enum
 */
export const MacModificationTaskState = {
  failed: "failed",
  inprogress: "in-progress",
  pending: "pending",
  successful: "successful",
} as const;
/**
 * @public
 */
export type MacModificationTaskState = (typeof MacModificationTaskState)[keyof typeof MacModificationTaskState];

/**
 * @public
 * @enum
 */
export const MacModificationTaskType = {
  SIPModification: "sip-modification",
  VolumeOwnershipDelegation: "volume-ownership-delegation",
} as const;
/**
 * @public
 */
export type MacModificationTaskType = (typeof MacModificationTaskType)[keyof typeof MacModificationTaskType];

/**
 * @public
 * @enum
 */
export const FleetExcessCapacityTerminationPolicy = {
  NO_TERMINATION: "no-termination",
  TERMINATION: "termination",
} as const;
/**
 * @public
 */
export type FleetExcessCapacityTerminationPolicy =
  (typeof FleetExcessCapacityTerminationPolicy)[keyof typeof FleetExcessCapacityTerminationPolicy];

/**
 * @public
 * @enum
 */
export const BareMetal = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];

/**
 * @public
 * @enum
 */
export const BurstablePerformance = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type BurstablePerformance = (typeof BurstablePerformance)[keyof typeof BurstablePerformance];

/**
 * @public
 * @enum
 */
export const CpuManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  APPLE: "apple",
  INTEL: "intel",
} as const;
/**
 * @public
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];

/**
 * @public
 * @enum
 */
export const InstanceGeneration = {
  CURRENT: "current",
  PREVIOUS: "previous",
} as const;
/**
 * @public
 */
export type InstanceGeneration = (typeof InstanceGeneration)[keyof typeof InstanceGeneration];

/**
 * @public
 * @enum
 */
export const LocalStorage = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];

/**
 * @public
 * @enum
 */
export const LocalStorageType = {
  HDD: "hdd",
  SSD: "ssd",
} as const;
/**
 * @public
 */
export type LocalStorageType = (typeof LocalStorageType)[keyof typeof LocalStorageType];

/**
 * @public
 * @enum
 */
export const FleetOnDemandAllocationStrategy = {
  LOWEST_PRICE: "lowest-price",
  PRIORITIZED: "prioritized",
} as const;
/**
 * @public
 */
export type FleetOnDemandAllocationStrategy =
  (typeof FleetOnDemandAllocationStrategy)[keyof typeof FleetOnDemandAllocationStrategy];

/**
 * @public
 * @enum
 */
export const FleetCapacityReservationUsageStrategy = {
  USE_CAPACITY_RESERVATIONS_FIRST: "use-capacity-reservations-first",
} as const;
/**
 * @public
 */
export type FleetCapacityReservationUsageStrategy =
  (typeof FleetCapacityReservationUsageStrategy)[keyof typeof FleetCapacityReservationUsageStrategy];

/**
 * @public
 * @enum
 */
export const SpotAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED: "capacity-optimized-prioritized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;
/**
 * @public
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

/**
 * @public
 * @enum
 */
export const SpotInstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;
/**
 * @public
 */
export type SpotInstanceInterruptionBehavior =
  (typeof SpotInstanceInterruptionBehavior)[keyof typeof SpotInstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const FleetReplacementStrategy = {
  LAUNCH: "launch",
  LAUNCH_BEFORE_TERMINATE: "launch-before-terminate",
} as const;
/**
 * @public
 */
export type FleetReplacementStrategy = (typeof FleetReplacementStrategy)[keyof typeof FleetReplacementStrategy];

/**
 * @public
 * @enum
 */
export const DefaultTargetCapacityType = {
  CAPACITY_BLOCK: "capacity-block",
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;
/**
 * @public
 */
export type DefaultTargetCapacityType = (typeof DefaultTargetCapacityType)[keyof typeof DefaultTargetCapacityType];

/**
 * @public
 * @enum
 */
export const TargetCapacityUnitType = {
  MEMORY_MIB: "memory-mib",
  UNITS: "units",
  VCPU: "vcpu",
} as const;
/**
 * @public
 */
export type TargetCapacityUnitType = (typeof TargetCapacityUnitType)[keyof typeof TargetCapacityUnitType];

/**
 * @public
 * @enum
 */
export const FleetType = {
  INSTANT: "instant",
  MAINTAIN: "maintain",
  REQUEST: "request",
} as const;
/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 * @enum
 */
export const InstanceLifecycle = {
  ON_DEMAND: "on-demand",
  SPOT: "spot",
} as const;
/**
 * @public
 */
export type InstanceLifecycle = (typeof InstanceLifecycle)[keyof typeof InstanceLifecycle];

/**
 * @public
 * @enum
 */
export const PlatformValues = {
  Windows: "Windows",
} as const;
/**
 * @public
 */
export type PlatformValues = (typeof PlatformValues)[keyof typeof PlatformValues];

/**
 * @public
 * @enum
 */
export const DestinationFileFormat = {
  parquet: "parquet",
  plain_text: "plain-text",
} as const;
/**
 * @public
 */
export type DestinationFileFormat = (typeof DestinationFileFormat)[keyof typeof DestinationFileFormat];

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  cloud_watch_logs: "cloud-watch-logs",
  kinesis_data_firehose: "kinesis-data-firehose",
  s3: "s3",
} as const;
/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * @public
 * @enum
 */
export const FlowLogsResourceType = {
  NetworkInterface: "NetworkInterface",
  Subnet: "Subnet",
  TransitGateway: "TransitGateway",
  TransitGatewayAttachment: "TransitGatewayAttachment",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type FlowLogsResourceType = (typeof FlowLogsResourceType)[keyof typeof FlowLogsResourceType];

/**
 * @public
 * @enum
 */
export const TrafficType = {
  ACCEPT: "ACCEPT",
  ALL: "ALL",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 * @enum
 */
export const SnapshotLocationEnum = {
  LOCAL: "local",
  REGIONAL: "regional",
} as const;
/**
 * @public
 */
export type SnapshotLocationEnum = (typeof SnapshotLocationEnum)[keyof typeof SnapshotLocationEnum];

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
 * @enum
 */
export const Ec2InstanceConnectEndpointState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  update_complete: "update-complete",
  update_failed: "update-failed",
  update_in_progress: "update-in-progress",
} as const;
/**
 * @public
 */
export type Ec2InstanceConnectEndpointState =
  (typeof Ec2InstanceConnectEndpointState)[keyof typeof Ec2InstanceConnectEndpointState];

/**
 * @public
 * @enum
 */
export const ContainerFormat = {
  ova: "ova",
} as const;
/**
 * @public
 */
export type ContainerFormat = (typeof ContainerFormat)[keyof typeof ContainerFormat];

/**
 * @public
 * @enum
 */
export const DiskImageFormat = {
  RAW: "RAW",
  VHD: "VHD",
  VMDK: "VMDK",
} as const;
/**
 * @public
 */
export type DiskImageFormat = (typeof DiskImageFormat)[keyof typeof DiskImageFormat];

/**
 * @public
 * @enum
 */
export const ExportEnvironment = {
  citrix: "citrix",
  microsoft: "microsoft",
  vmware: "vmware",
} as const;
/**
 * @public
 */
export type ExportEnvironment = (typeof ExportEnvironment)[keyof typeof ExportEnvironment];

/**
 * @public
 * @enum
 */
export const ExportTaskState = {
  active: "active",
  cancelled: "cancelled",
  cancelling: "cancelling",
  completed: "completed",
} as const;
/**
 * @public
 */
export type ExportTaskState = (typeof ExportTaskState)[keyof typeof ExportTaskState];

/**
 * @public
 * @enum
 */
export const IpamMeteredAccount = {
  ipam_owner: "ipam-owner",
  resource_owner: "resource-owner",
} as const;
/**
 * @public
 */
export type IpamMeteredAccount = (typeof IpamMeteredAccount)[keyof typeof IpamMeteredAccount];

/**
 * @public
 * @enum
 */
export const IpamTier = {
  advanced: "advanced",
  free: "free",
} as const;
/**
 * @public
 */
export type IpamTier = (typeof IpamTier)[keyof typeof IpamTier];

/**
 * @public
 * @enum
 */
export const IpamState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;
/**
 * @public
 */
export type IpamState = (typeof IpamState)[keyof typeof IpamState];

/**
 * @public
 * @enum
 */
export const IpamExternalResourceVerificationTokenState = {
  CREATE_COMPLETE: "create-complete",
  CREATE_FAILED: "create-failed",
  CREATE_IN_PROGRESS: "create-in-progress",
  DELETE_COMPLETE: "delete-complete",
  DELETE_FAILED: "delete-failed",
  DELETE_IN_PROGRESS: "delete-in-progress",
} as const;
/**
 * @public
 */
export type IpamExternalResourceVerificationTokenState =
  (typeof IpamExternalResourceVerificationTokenState)[keyof typeof IpamExternalResourceVerificationTokenState];

/**
 * @public
 * @enum
 */
export const TokenState = {
  expired: "expired",
  valid: "valid",
} as const;
/**
 * @public
 */
export type TokenState = (typeof TokenState)[keyof typeof TokenState];

/**
 * @public
 * @enum
 */
export const IpamPoolAwsService = {
  ec2: "ec2",
} as const;
/**
 * @public
 */
export type IpamPoolAwsService = (typeof IpamPoolAwsService)[keyof typeof IpamPoolAwsService];

/**
 * @public
 * @enum
 */
export const IpamPoolPublicIpSource = {
  amazon: "amazon",
  byoip: "byoip",
} as const;
/**
 * @public
 */
export type IpamPoolPublicIpSource = (typeof IpamPoolPublicIpSource)[keyof typeof IpamPoolPublicIpSource];

/**
 * @public
 * @enum
 */
export const IpamPoolSourceResourceType = {
  vpc: "vpc",
} as const;
/**
 * @public
 */
export type IpamPoolSourceResourceType = (typeof IpamPoolSourceResourceType)[keyof typeof IpamPoolSourceResourceType];

/**
 * @public
 * @enum
 */
export const IpamScopeType = {
  private: "private",
  public: "public",
} as const;
/**
 * @public
 */
export type IpamScopeType = (typeof IpamScopeType)[keyof typeof IpamScopeType];

/**
 * @public
 * @enum
 */
export const IpamPoolState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;
/**
 * @public
 */
export type IpamPoolState = (typeof IpamPoolState)[keyof typeof IpamPoolState];

/**
 * @public
 * @enum
 */
export const IpamPrefixListResolverRuleConditionOperation = {
  equals: "equals",
  not_equals: "not-equals",
  subnet_of: "subnet-of",
} as const;
/**
 * @public
 */
export type IpamPrefixListResolverRuleConditionOperation =
  (typeof IpamPrefixListResolverRuleConditionOperation)[keyof typeof IpamPrefixListResolverRuleConditionOperation];

/**
 * @public
 * @enum
 */
export const IpamResourceType = {
  eip: "eip",
  eni: "eni",
  ipv6_pool: "ipv6-pool",
  public_ipv4_pool: "public-ipv4-pool",
  subnet: "subnet",
  vpc: "vpc",
} as const;
/**
 * @public
 */
export type IpamResourceType = (typeof IpamResourceType)[keyof typeof IpamResourceType];

/**
 * @public
 * @enum
 */
export const IpamPrefixListResolverRuleType = {
  ipam_pool_cidr: "ipam-pool-cidr",
  ipam_resource_cidr: "ipam-resource-cidr",
  static_cidr: "static-cidr",
} as const;
/**
 * @public
 */
export type IpamPrefixListResolverRuleType =
  (typeof IpamPrefixListResolverRuleType)[keyof typeof IpamPrefixListResolverRuleType];

/**
 * @public
 * @enum
 */
export const IpamPrefixListResolverVersionCreationStatus = {
  failure: "failure",
  pending: "pending",
  success: "success",
} as const;
/**
 * @public
 */
export type IpamPrefixListResolverVersionCreationStatus =
  (typeof IpamPrefixListResolverVersionCreationStatus)[keyof typeof IpamPrefixListResolverVersionCreationStatus];

/**
 * @public
 * @enum
 */
export const IpamPrefixListResolverState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;
/**
 * @public
 */
export type IpamPrefixListResolverState =
  (typeof IpamPrefixListResolverState)[keyof typeof IpamPrefixListResolverState];

/**
 * @public
 * @enum
 */
export const IpamPrefixListResolverTargetState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
  sync_complete: "sync-complete",
  sync_failed: "sync-failed",
  sync_in_progress: "sync-in-progress",
} as const;
/**
 * @public
 */
export type IpamPrefixListResolverTargetState =
  (typeof IpamPrefixListResolverTargetState)[keyof typeof IpamPrefixListResolverTargetState];

/**
 * @public
 * @enum
 */
export const IpamResourceDiscoveryState = {
  CREATE_COMPLETE: "create-complete",
  CREATE_FAILED: "create-failed",
  CREATE_IN_PROGRESS: "create-in-progress",
  DELETE_COMPLETE: "delete-complete",
  DELETE_FAILED: "delete-failed",
  DELETE_IN_PROGRESS: "delete-in-progress",
  ISOLATE_COMPLETE: "isolate-complete",
  ISOLATE_IN_PROGRESS: "isolate-in-progress",
  MODIFY_COMPLETE: "modify-complete",
  MODIFY_FAILED: "modify-failed",
  MODIFY_IN_PROGRESS: "modify-in-progress",
  RESTORE_IN_PROGRESS: "restore-in-progress",
} as const;
/**
 * @public
 */
export type IpamResourceDiscoveryState = (typeof IpamResourceDiscoveryState)[keyof typeof IpamResourceDiscoveryState];

/**
 * @public
 * @enum
 */
export const IpamScopeExternalAuthorityType = {
  infoblox: "infoblox",
} as const;
/**
 * @public
 */
export type IpamScopeExternalAuthorityType =
  (typeof IpamScopeExternalAuthorityType)[keyof typeof IpamScopeExternalAuthorityType];

/**
 * @public
 * @enum
 */
export const IpamScopeState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  isolate_complete: "isolate-complete",
  isolate_in_progress: "isolate-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_in_progress: "restore-in-progress",
} as const;
/**
 * @public
 */
export type IpamScopeState = (typeof IpamScopeState)[keyof typeof IpamScopeState];

/**
 * @public
 * @enum
 */
export const KeyFormat = {
  pem: "pem",
  ppk: "ppk",
} as const;
/**
 * @public
 */
export type KeyFormat = (typeof KeyFormat)[keyof typeof KeyFormat];

/**
 * @public
 * @enum
 */
export const KeyType = {
  ed25519: "ed25519",
  rsa: "rsa",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const CapacityReservationPreference = {
  capacity_reservations_only: "capacity-reservations-only",
  none: "none",
  open: "open",
} as const;
/**
 * @public
 */
export type CapacityReservationPreference =
  (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

/**
 * @public
 * @enum
 */
export const AmdSevSnpSpecification = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type AmdSevSnpSpecification = (typeof AmdSevSnpSpecification)[keyof typeof AmdSevSnpSpecification];

/**
 * @public
 * @enum
 */
export const ShutdownBehavior = {
  stop: "stop",
  terminate: "terminate",
} as const;
/**
 * @public
 */
export type ShutdownBehavior = (typeof ShutdownBehavior)[keyof typeof ShutdownBehavior];

/**
 * @public
 * @enum
 */
export const MarketType = {
  capacity_block: "capacity-block",
  spot: "spot",
} as const;
/**
 * @public
 */
export type MarketType = (typeof MarketType)[keyof typeof MarketType];

/**
 * @public
 * @enum
 */
export const InstanceInterruptionBehavior = {
  hibernate: "hibernate",
  stop: "stop",
  terminate: "terminate",
} as const;
/**
 * @public
 */
export type InstanceInterruptionBehavior =
  (typeof InstanceInterruptionBehavior)[keyof typeof InstanceInterruptionBehavior];

/**
 * @public
 * @enum
 */
export const SpotInstanceType = {
  one_time: "one-time",
  persistent: "persistent",
} as const;
/**
 * @public
 */
export type SpotInstanceType = (typeof SpotInstanceType)[keyof typeof SpotInstanceType];

/**
 * @public
 * @enum
 */
export const LaunchTemplateAutoRecoveryState = {
  default: "default",
  disabled: "disabled",
} as const;
/**
 * @public
 */
export type LaunchTemplateAutoRecoveryState =
  (typeof LaunchTemplateAutoRecoveryState)[keyof typeof LaunchTemplateAutoRecoveryState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type LaunchTemplateInstanceMetadataEndpointState =
  (typeof LaunchTemplateInstanceMetadataEndpointState)[keyof typeof LaunchTemplateInstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataProtocolIpv6 = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type LaunchTemplateInstanceMetadataProtocolIpv6 =
  (typeof LaunchTemplateInstanceMetadataProtocolIpv6)[keyof typeof LaunchTemplateInstanceMetadataProtocolIpv6];

/**
 * @public
 * @enum
 */
export const LaunchTemplateHttpTokensState = {
  optional: "optional",
  required: "required",
} as const;
/**
 * @public
 */
export type LaunchTemplateHttpTokensState =
  (typeof LaunchTemplateHttpTokensState)[keyof typeof LaunchTemplateHttpTokensState];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type LaunchTemplateInstanceMetadataTagsState =
  (typeof LaunchTemplateInstanceMetadataTagsState)[keyof typeof LaunchTemplateInstanceMetadataTagsState];

/**
 * @public
 * @enum
 */
export const InstanceBandwidthWeighting = {
  DEFAULT: "default",
  EBS_1: "ebs-1",
  VPC_1: "vpc-1",
} as const;
/**
 * @public
 */
export type InstanceBandwidthWeighting = (typeof InstanceBandwidthWeighting)[keyof typeof InstanceBandwidthWeighting];

/**
 * @public
 * @enum
 */
export const LaunchTemplateInstanceMetadataOptionsState = {
  applied: "applied",
  pending: "pending",
} as const;
/**
 * @public
 */
export type LaunchTemplateInstanceMetadataOptionsState =
  (typeof LaunchTemplateInstanceMetadataOptionsState)[keyof typeof LaunchTemplateInstanceMetadataOptionsState];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteState = {
  active: "active",
  blackhole: "blackhole",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;
/**
 * @public
 */
export type LocalGatewayRouteState = (typeof LocalGatewayRouteState)[keyof typeof LocalGatewayRouteState];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteType = {
  propagated: "propagated",
  static: "static",
} as const;
/**
 * @public
 */
export type LocalGatewayRouteType = (typeof LocalGatewayRouteType)[keyof typeof LocalGatewayRouteType];

/**
 * @public
 * @enum
 */
export const LocalGatewayRouteTableMode = {
  coip: "coip",
  direct_vpc_routing: "direct-vpc-routing",
} as const;
/**
 * @public
 */
export type LocalGatewayRouteTableMode = (typeof LocalGatewayRouteTableMode)[keyof typeof LocalGatewayRouteTableMode];

/**
 * @public
 * @enum
 */
export const LocalGatewayVirtualInterfaceConfigurationState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;
/**
 * @public
 */
export type LocalGatewayVirtualInterfaceConfigurationState =
  (typeof LocalGatewayVirtualInterfaceConfigurationState)[keyof typeof LocalGatewayVirtualInterfaceConfigurationState];

/**
 * @public
 * @enum
 */
export const LocalGatewayVirtualInterfaceGroupConfigurationState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  incomplete: "incomplete",
  pending: "pending",
} as const;
/**
 * @public
 */
export type LocalGatewayVirtualInterfaceGroupConfigurationState =
  (typeof LocalGatewayVirtualInterfaceGroupConfigurationState)[keyof typeof LocalGatewayVirtualInterfaceGroupConfigurationState];

/**
 * @public
 * @enum
 */
export const PrefixListState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_failed: "delete-failed",
  delete_in_progress: "delete-in-progress",
  modify_complete: "modify-complete",
  modify_failed: "modify-failed",
  modify_in_progress: "modify-in-progress",
  restore_complete: "restore-complete",
  restore_failed: "restore-failed",
  restore_in_progress: "restore-in-progress",
} as const;
/**
 * @public
 */
export type PrefixListState = (typeof PrefixListState)[keyof typeof PrefixListState];

/**
 * @public
 * @enum
 */
export const ConnectivityType = {
  PRIVATE: "private",
  PUBLIC: "public",
} as const;
/**
 * @public
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

/**
 * @public
 * @enum
 */
export const NatGatewayState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type NatGatewayState = (typeof NatGatewayState)[keyof typeof NatGatewayState];

/**
 * @public
 * @enum
 */
export const RuleAction = {
  allow: "allow",
  deny: "deny",
} as const;
/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceCreationType = {
  branch: "branch",
  efa: "efa",
  efa_only: "efa-only",
  trunk: "trunk",
} as const;
/**
 * @public
 */
export type NetworkInterfaceCreationType =
  (typeof NetworkInterfaceCreationType)[keyof typeof NetworkInterfaceCreationType];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  api_gateway_managed: "api_gateway_managed",
  aws_codestar_connections_managed: "aws_codestar_connections_managed",
  branch: "branch",
  efa: "efa",
  efa_only: "efa-only",
  gateway_load_balancer: "gateway_load_balancer",
  gateway_load_balancer_endpoint: "gateway_load_balancer_endpoint",
  global_accelerator_managed: "global_accelerator_managed",
  interface: "interface",
  iot_rules_managed: "iot_rules_managed",
  lambda: "lambda",
  load_balancer: "load_balancer",
  natGateway: "natGateway",
  network_load_balancer: "network_load_balancer",
  quicksight: "quicksight",
  transit_gateway: "transit_gateway",
  trunk: "trunk",
  vpc_endpoint: "vpc_endpoint",
} as const;
/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

/**
 * @public
 * @enum
 */
export const NetworkInterfaceStatus = {
  associated: "associated",
  attaching: "attaching",
  available: "available",
  detaching: "detaching",
  in_use: "in-use",
} as const;
/**
 * @public
 */
export type NetworkInterfaceStatus = (typeof NetworkInterfaceStatus)[keyof typeof NetworkInterfaceStatus];

/**
 * @public
 * @enum
 */
export const InterfacePermissionType = {
  EIP_ASSOCIATE: "EIP-ASSOCIATE",
  INSTANCE_ATTACH: "INSTANCE-ATTACH",
} as const;
/**
 * @public
 */
export type InterfacePermissionType = (typeof InterfacePermissionType)[keyof typeof InterfacePermissionType];

/**
 * @public
 * @enum
 */
export const NetworkInterfacePermissionStateCode = {
  granted: "granted",
  pending: "pending",
  revoked: "revoked",
  revoking: "revoking",
} as const;
/**
 * @public
 */
export type NetworkInterfacePermissionStateCode =
  (typeof NetworkInterfacePermissionStateCode)[keyof typeof NetworkInterfacePermissionStateCode];

/**
 * @public
 * @enum
 */
export const SpreadLevel = {
  host: "host",
  rack: "rack",
} as const;
/**
 * @public
 */
export type SpreadLevel = (typeof SpreadLevel)[keyof typeof SpreadLevel];

/**
 * @public
 * @enum
 */
export const PlacementStrategy = {
  cluster: "cluster",
  partition: "partition",
  spread: "spread",
} as const;
/**
 * @public
 */
export type PlacementStrategy = (typeof PlacementStrategy)[keyof typeof PlacementStrategy];

/**
 * @public
 * @enum
 */
export const PlacementGroupState = {
  available: "available",
  deleted: "deleted",
  deleting: "deleting",
  pending: "pending",
} as const;
/**
 * @public
 */
export type PlacementGroupState = (typeof PlacementGroupState)[keyof typeof PlacementGroupState];

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
 * @enum
 */
export const RouteServerPersistRoutesAction = {
  DISABLE: "disable",
  ENABLE: "enable",
  RESET: "reset",
} as const;
/**
 * @public
 */
export type RouteServerPersistRoutesAction =
  (typeof RouteServerPersistRoutesAction)[keyof typeof RouteServerPersistRoutesAction];

/**
 * @public
 * @enum
 */
export const RouteServerPersistRoutesState = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  MODIFYING: "modifying",
  RESETTING: "resetting",
} as const;
/**
 * @public
 */
export type RouteServerPersistRoutesState =
  (typeof RouteServerPersistRoutesState)[keyof typeof RouteServerPersistRoutesState];

/**
 * @public
 * @enum
 */
export const RouteServerState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  MODIFYING: "modifying",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type RouteServerState = (typeof RouteServerState)[keyof typeof RouteServerState];

/**
 * @public
 * @enum
 */
export const RouteServerEndpointState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETE_FAILED: "delete-failed",
  DELETING: "deleting",
  FAILED: "failed",
  FAILING: "failing",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type RouteServerEndpointState = (typeof RouteServerEndpointState)[keyof typeof RouteServerEndpointState];

/**
 * @public
 * @enum
 */
export const RouteServerPeerLivenessMode = {
  BFD: "bfd",
  BGP_KEEPALIVE: "bgp-keepalive",
} as const;
/**
 * @public
 */
export type RouteServerPeerLivenessMode =
  (typeof RouteServerPeerLivenessMode)[keyof typeof RouteServerPeerLivenessMode];

/**
 * @public
 * @enum
 */
export const RouteServerBfdState = {
  DOWN: "down",
  UP: "up",
} as const;
/**
 * @public
 */
export type RouteServerBfdState = (typeof RouteServerBfdState)[keyof typeof RouteServerBfdState];

/**
 * @public
 * @enum
 */
export const RouteServerBgpState = {
  DOWN: "down",
  UP: "up",
} as const;
/**
 * @public
 */
export type RouteServerBgpState = (typeof RouteServerBgpState)[keyof typeof RouteServerBgpState];

/**
 * @public
 * @enum
 */
export const RouteServerPeerState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  FAILED: "failed",
  FAILING: "failing",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type RouteServerPeerState = (typeof RouteServerPeerState)[keyof typeof RouteServerPeerState];

/**
 * @public
 * @enum
 */
export const RouteOrigin = {
  Advertisement: "Advertisement",
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
  filtered: "filtered",
} as const;
/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

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
 * @enum
 */
export const TransferType = {
  standard: "standard",
  time_based: "time-based",
} as const;
/**
 * @public
 */
export type TransferType = (typeof TransferType)[keyof typeof TransferType];

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
export const VerifiedAccessEndpointProtocol = {
  http: "http",
  https: "https",
  tcp: "tcp",
} as const;
/**
 * @public
 */
export type VerifiedAccessEndpointProtocol =
  (typeof VerifiedAccessEndpointProtocol)[keyof typeof VerifiedAccessEndpointProtocol];

/**
 * @public
 * @enum
 */
export const VerifiedAccessEndpointType = {
  cidr: "cidr",
  load_balancer: "load-balancer",
  network_interface: "network-interface",
  rds: "rds",
} as const;
/**
 * @public
 */
export type VerifiedAccessEndpointType = (typeof VerifiedAccessEndpointType)[keyof typeof VerifiedAccessEndpointType];

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
 * @enum
 */
export const InternetGatewayExclusionMode = {
  allow_bidirectional: "allow-bidirectional",
  allow_egress: "allow-egress",
} as const;
/**
 * @public
 */
export type InternetGatewayExclusionMode =
  (typeof InternetGatewayExclusionMode)[keyof typeof InternetGatewayExclusionMode];

/**
 * @public
 * @enum
 */
export const VpcBlockPublicAccessExclusionState = {
  create_complete: "create-complete",
  create_failed: "create-failed",
  create_in_progress: "create-in-progress",
  delete_complete: "delete-complete",
  delete_in_progress: "delete-in-progress",
  disable_complete: "disable-complete",
  disable_in_progress: "disable-in-progress",
  update_complete: "update-complete",
  update_failed: "update-failed",
  update_in_progress: "update-in-progress",
} as const;
/**
 * @public
 */
export type VpcBlockPublicAccessExclusionState =
  (typeof VpcBlockPublicAccessExclusionState)[keyof typeof VpcBlockPublicAccessExclusionState];

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
 * @enum
 */
export const VpcEndpointType = {
  Gateway: "Gateway",
  GatewayLoadBalancer: "GatewayLoadBalancer",
  Interface: "Interface",
  Resource: "Resource",
  ServiceNetwork: "ServiceNetwork",
} as const;
/**
 * @public
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];

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
  Partial: "Partial",
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
 * @enum
 */
export const VpnConcentratorType = {
  ipsec_1: "ipsec.1",
} as const;
/**
 * @public
 */
export type VpnConcentratorType = (typeof VpnConcentratorType)[keyof typeof VpnConcentratorType];

/**
 * @public
 * @enum
 */
export const VpnTunnelBandwidth = {
  large: "large",
  standard: "standard",
} as const;
/**
 * @public
 */
export type VpnTunnelBandwidth = (typeof VpnTunnelBandwidth)[keyof typeof VpnTunnelBandwidth];

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
 * @enum
 */
export const DeleteQueuedReservedInstancesErrorCode = {
  RESERVED_INSTANCES_ID_INVALID: "reserved-instances-id-invalid",
  RESERVED_INSTANCES_NOT_IN_QUEUED_STATE: "reserved-instances-not-in-queued-state",
  UNEXPECTED_ERROR: "unexpected-error",
} as const;
/**
 * @public
 */
export type DeleteQueuedReservedInstancesErrorCode =
  (typeof DeleteQueuedReservedInstancesErrorCode)[keyof typeof DeleteQueuedReservedInstancesErrorCode];

/**
 * @public
 * @enum
 */
export const AsnState = {
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
} as const;
/**
 * @public
 */
export type AsnState = (typeof AsnState)[keyof typeof AsnState];

/**
 * @public
 * @enum
 */
export const IpamPoolCidrFailureCode = {
  cidr_not_available: "cidr-not-available",
  limit_exceeded: "limit-exceeded",
} as const;
/**
 * @public
 */
export type IpamPoolCidrFailureCode = (typeof IpamPoolCidrFailureCode)[keyof typeof IpamPoolCidrFailureCode];

/**
 * @public
 * @enum
 */
export const IpamPoolCidrState = {
  deprovisioned: "deprovisioned",
  failed_deprovision: "failed-deprovision",
  failed_import: "failed-import",
  failed_provision: "failed-provision",
  pending_deprovision: "pending-deprovision",
  pending_import: "pending-import",
  pending_provision: "pending-provision",
  provisioned: "provisioned",
} as const;
/**
 * @public
 */
export type IpamPoolCidrState = (typeof IpamPoolCidrState)[keyof typeof IpamPoolCidrState];

/**
 * @public
 * @enum
 */
export const SnapshotReturnCodes = {
  ERROR_CODE_CLIENT_ERROR: "client-error",
  ERROR_CODE_INTERNAL_ERROR: "internal-error",
  ERROR_MISSING_PERMISSIONS: "missing-permissions",
  SUCCESS: "success",
  WARN_SKIPPED: "skipped",
} as const;
/**
 * @public
 */
export type SnapshotReturnCodes = (typeof SnapshotReturnCodes)[keyof typeof SnapshotReturnCodes];

/**
 * @public
 * @enum
 */
export const AvailabilityZoneOptInStatus = {
  not_opted_in: "not-opted-in",
  opt_in_not_required: "opt-in-not-required",
  opted_in: "opted-in",
} as const;
/**
 * @public
 */
export type AvailabilityZoneOptInStatus =
  (typeof AvailabilityZoneOptInStatus)[keyof typeof AvailabilityZoneOptInStatus];

/**
 * @public
 * @enum
 */
export const AvailabilityZoneState = {
  available: "available",
  constrained: "constrained",
  impaired: "impaired",
  information: "information",
  unavailable: "unavailable",
} as const;
/**
 * @public
 */
export type AvailabilityZoneState = (typeof AvailabilityZoneState)[keyof typeof AvailabilityZoneState];

/**
 * @public
 * @enum
 */
export const MetricType = {
  aggregate_latency: "aggregate-latency",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const PeriodType = {
  fifteen_minutes: "fifteen-minutes",
  five_minutes: "five-minutes",
  one_day: "one-day",
  one_hour: "one-hour",
  one_week: "one-week",
  three_hours: "three-hours",
} as const;
/**
 * @public
 */
export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];

/**
 * @public
 * @enum
 */
export const StatisticType = {
  p50: "p50",
} as const;
/**
 * @public
 */
export type StatisticType = (typeof StatisticType)[keyof typeof StatisticType];

/**
 * @public
 * @enum
 */
export const CapacityBlockExtensionStatus = {
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  PAYMENT_SUCCEEDED: "payment-succeeded",
} as const;
/**
 * @public
 */
export type CapacityBlockExtensionStatus =
  (typeof CapacityBlockExtensionStatus)[keyof typeof CapacityBlockExtensionStatus];

/**
 * @public
 * @enum
 */
export const CapacityBlockResourceState = {
  active: "active",
  cancelled: "cancelled",
  expired: "expired",
  failed: "failed",
  payment_failed: "payment-failed",
  payment_pending: "payment-pending",
  scheduled: "scheduled",
  unavailable: "unavailable",
} as const;
/**
 * @public
 */
export type CapacityBlockResourceState = (typeof CapacityBlockResourceState)[keyof typeof CapacityBlockResourceState];

/**
 * @public
 * @enum
 */
export const CapacityBlockInterconnectStatus = {
  impaired: "impaired",
  insufficient_data: "insufficient-data",
  ok: "ok",
} as const;
/**
 * @public
 */
export type CapacityBlockInterconnectStatus =
  (typeof CapacityBlockInterconnectStatus)[keyof typeof CapacityBlockInterconnectStatus];

/**
 * @public
 * @enum
 */
export const CapacityManagerDataExportStatus = {
  DELIVERED: "delivered",
  FAILED: "failed",
  IN_PROGRESS: "in-progress",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type CapacityManagerDataExportStatus =
  (typeof CapacityManagerDataExportStatus)[keyof typeof CapacityManagerDataExportStatus];

/**
 * @public
 * @enum
 */
export const CallerRole = {
  odcr_owner: "odcr-owner",
  unused_reservation_billing_owner: "unused-reservation-billing-owner",
} as const;
/**
 * @public
 */
export type CallerRole = (typeof CallerRole)[keyof typeof CallerRole];

/**
 * @public
 * @enum
 */
export const CapacityReservationBillingRequestStatus = {
  accepted: "accepted",
  cancelled: "cancelled",
  expired: "expired",
  pending: "pending",
  rejected: "rejected",
  revoked: "revoked",
} as const;
/**
 * @public
 */
export type CapacityReservationBillingRequestStatus =
  (typeof CapacityReservationBillingRequestStatus)[keyof typeof CapacityReservationBillingRequestStatus];

/**
 * @public
 * @enum
 */
export const ClientVpnConnectionStatusCode = {
  active: "active",
  failed_to_terminate: "failed-to-terminate",
  terminated: "terminated",
  terminating: "terminating",
} as const;
/**
 * @public
 */
export type ClientVpnConnectionStatusCode =
  (typeof ClientVpnConnectionStatusCode)[keyof typeof ClientVpnConnectionStatusCode];

/**
 * @public
 * @enum
 */
export const AssociatedNetworkType = {
  vpc: "vpc",
} as const;
/**
 * @public
 */
export type AssociatedNetworkType = (typeof AssociatedNetworkType)[keyof typeof AssociatedNetworkType];

/**
 * @public
 * @enum
 */
export const ClientVpnEndpointAttributeStatusCode = {
  applied: "applied",
  applying: "applying",
} as const;
/**
 * @public
 */
export type ClientVpnEndpointAttributeStatusCode =
  (typeof ClientVpnEndpointAttributeStatusCode)[keyof typeof ClientVpnEndpointAttributeStatusCode];

/**
 * @public
 * @enum
 */
export const VpnProtocol = {
  openvpn: "openvpn",
} as const;
/**
 * @public
 */
export type VpnProtocol = (typeof VpnProtocol)[keyof typeof VpnProtocol];

/**
 * @public
 * @enum
 */
export const ConversionTaskState = {
  active: "active",
  cancelled: "cancelled",
  cancelling: "cancelling",
  completed: "completed",
} as const;
/**
 * @public
 */
export type ConversionTaskState = (typeof ConversionTaskState)[keyof typeof ConversionTaskState];

/**
 * @public
 * @enum
 */
export const ReportState = {
  cancelled: "cancelled",
  complete: "complete",
  error: "error",
  running: "running",
} as const;
/**
 * @public
 */
export type ReportState = (typeof ReportState)[keyof typeof ReportState];

/**
 * @public
 * @enum
 */
export const ElasticGpuStatus = {
  Impaired: "IMPAIRED",
  Ok: "OK",
} as const;
/**
 * @public
 */
export type ElasticGpuStatus = (typeof ElasticGpuStatus)[keyof typeof ElasticGpuStatus];

/**
 * @public
 * @enum
 */
export const ElasticGpuState = {
  Attached: "ATTACHED",
} as const;
/**
 * @public
 */
export type ElasticGpuState = (typeof ElasticGpuState)[keyof typeof ElasticGpuState];

/**
 * @public
 * @enum
 */
export const FastLaunchResourceType = {
  SNAPSHOT: "snapshot",
} as const;
/**
 * @public
 */
export type FastLaunchResourceType = (typeof FastLaunchResourceType)[keyof typeof FastLaunchResourceType];

/**
 * @public
 * @enum
 */
export const FastLaunchStateCode = {
  disabling: "disabling",
  disabling_failed: "disabling-failed",
  enabled: "enabled",
  enabled_failed: "enabled-failed",
  enabling: "enabling",
  enabling_failed: "enabling-failed",
} as const;
/**
 * @public
 */
export type FastLaunchStateCode = (typeof FastLaunchStateCode)[keyof typeof FastLaunchStateCode];

/**
 * @public
 * @enum
 */
export const FastSnapshotRestoreStateCode = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  enabling: "enabling",
  optimizing: "optimizing",
} as const;
/**
 * @public
 */
export type FastSnapshotRestoreStateCode =
  (typeof FastSnapshotRestoreStateCode)[keyof typeof FastSnapshotRestoreStateCode];

/**
 * @public
 * @enum
 */
export const FleetEventType = {
  FLEET_CHANGE: "fleet-change",
  INSTANCE_CHANGE: "instance-change",
  SERVICE_ERROR: "service-error",
} as const;
/**
 * @public
 */
export type FleetEventType = (typeof FleetEventType)[keyof typeof FleetEventType];

/**
 * @public
 * @enum
 */
export const FleetActivityStatus = {
  ERROR: "error",
  FULFILLED: "fulfilled",
  PENDING_FULFILLMENT: "pending_fulfillment",
  PENDING_TERMINATION: "pending_termination",
} as const;
/**
 * @public
 */
export type FleetActivityStatus = (typeof FleetActivityStatus)[keyof typeof FleetActivityStatus];

/**
 * @public
 * @enum
 */
export const FpgaImageAttributeName = {
  description: "description",
  loadPermission: "loadPermission",
  name: "name",
  productCodes: "productCodes",
} as const;
/**
 * @public
 */
export type FpgaImageAttributeName = (typeof FpgaImageAttributeName)[keyof typeof FpgaImageAttributeName];

/**
 * @public
 * @enum
 */
export const PermissionGroup = {
  all: "all",
} as const;
/**
 * @public
 */
export type PermissionGroup = (typeof PermissionGroup)[keyof typeof PermissionGroup];

/**
 * @public
 * @enum
 */
export const ProductCodeValues = {
  devpay: "devpay",
  marketplace: "marketplace",
} as const;
/**
 * @public
 */
export type ProductCodeValues = (typeof ProductCodeValues)[keyof typeof ProductCodeValues];

/**
 * @public
 * @enum
 */
export const FpgaImageStateCode = {
  available: "available",
  failed: "failed",
  pending: "pending",
  unavailable: "unavailable",
} as const;
/**
 * @public
 */
export type FpgaImageStateCode = (typeof FpgaImageStateCode)[keyof typeof FpgaImageStateCode];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "AllUpfront",
  NO_UPFRONT: "NoUpfront",
  PARTIAL_UPFRONT: "PartialUpfront",
} as const;
/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "active",
  CANCELLED: "cancelled",
  DELAYED: "delayed",
  EXPIRED: "expired",
  FAILED: "failed",
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  PENDING: "pending",
  RETIRED: "retired",
  SCHEDULED: "scheduled",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

/**
 * @public
 * @enum
 */
export const ImageAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  bootMode: "bootMode",
  deregistrationProtection: "deregistrationProtection",
  description: "description",
  imdsSupport: "imdsSupport",
  kernel: "kernel",
  lastLaunchedTime: "lastLaunchedTime",
  launchPermission: "launchPermission",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  sriovNetSupport: "sriovNetSupport",
  tpmSupport: "tpmSupport",
  uefiData: "uefiData",
} as const;
/**
 * @public
 */
export type ImageAttributeName = (typeof ImageAttributeName)[keyof typeof ImageAttributeName];

/**
 * @public
 * @enum
 */
export const ImageReferenceResourceType = {
  EC2_INSTANCE: "ec2:Instance",
  EC2_LAUNCH_TEMPLATE: "ec2:LaunchTemplate",
  IMAGE_BUILDER_CONTAINER_RECIPE: "imagebuilder:ContainerRecipe",
  IMAGE_BUILDER_IMAGE_RECIPE: "imagebuilder:ImageRecipe",
  SSM_PARAMETER: "ssm:Parameter",
} as const;
/**
 * @public
 */
export type ImageReferenceResourceType = (typeof ImageReferenceResourceType)[keyof typeof ImageReferenceResourceType];

/**
 * @public
 * @enum
 */
export const ImageReferenceOptionName = {
  STATE_NAME: "state-name",
  VERSION_DEPTH: "version-depth",
} as const;
/**
 * @public
 */
export type ImageReferenceOptionName = (typeof ImageReferenceOptionName)[keyof typeof ImageReferenceOptionName];

/**
 * @public
 * @enum
 */
export const ArchitectureValues = {
  arm64: "arm64",
  arm64_mac: "arm64_mac",
  i386: "i386",
  x86_64: "x86_64",
  x86_64_mac: "x86_64_mac",
} as const;
/**
 * @public
 */
export type ArchitectureValues = (typeof ArchitectureValues)[keyof typeof ArchitectureValues];

/**
 * @public
 * @enum
 */
export const BootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
  uefi_preferred: "uefi-preferred",
} as const;
/**
 * @public
 */
export type BootModeValues = (typeof BootModeValues)[keyof typeof BootModeValues];

/**
 * @public
 * @enum
 */
export const HypervisorType = {
  ovm: "ovm",
  xen: "xen",
} as const;
/**
 * @public
 */
export type HypervisorType = (typeof HypervisorType)[keyof typeof HypervisorType];

/**
 * @public
 * @enum
 */
export const ImageTypeValues = {
  kernel: "kernel",
  machine: "machine",
  ramdisk: "ramdisk",
} as const;
/**
 * @public
 */
export type ImageTypeValues = (typeof ImageTypeValues)[keyof typeof ImageTypeValues];

/**
 * @public
 * @enum
 */
export const ImdsSupportValues = {
  v2_0: "v2.0",
} as const;
/**
 * @public
 */
export type ImdsSupportValues = (typeof ImdsSupportValues)[keyof typeof ImdsSupportValues];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;
/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const ImageState = {
  available: "available",
  deregistered: "deregistered",
  disabled: "disabled",
  error: "error",
  failed: "failed",
  invalid: "invalid",
  pending: "pending",
  transient: "transient",
} as const;
/**
 * @public
 */
export type ImageState = (typeof ImageState)[keyof typeof ImageState];

/**
 * @public
 * @enum
 */
export const TpmSupportValues = {
  v2_0: "v2.0",
} as const;
/**
 * @public
 */
export type TpmSupportValues = (typeof TpmSupportValues)[keyof typeof TpmSupportValues];

/**
 * @public
 * @enum
 */
export const VirtualizationType = {
  hvm: "hvm",
  paravirtual: "paravirtual",
} as const;
/**
 * @public
 */
export type VirtualizationType = (typeof VirtualizationType)[keyof typeof VirtualizationType];

/**
 * @public
 * @enum
 */
export const InstanceAttributeName = {
  blockDeviceMapping: "blockDeviceMapping",
  disableApiStop: "disableApiStop",
  disableApiTermination: "disableApiTermination",
  ebsOptimized: "ebsOptimized",
  enaSupport: "enaSupport",
  enclaveOptions: "enclaveOptions",
  groupSet: "groupSet",
  instanceInitiatedShutdownBehavior: "instanceInitiatedShutdownBehavior",
  instanceType: "instanceType",
  kernel: "kernel",
  productCodes: "productCodes",
  ramdisk: "ramdisk",
  rootDeviceName: "rootDeviceName",
  sourceDestCheck: "sourceDestCheck",
  sriovNetSupport: "sriovNetSupport",
  userData: "userData",
} as const;
/**
 * @public
 */
export type InstanceAttributeName = (typeof InstanceAttributeName)[keyof typeof InstanceAttributeName];

/**
 * @public
 * @enum
 */
export const InstanceStateName = {
  pending: "pending",
  running: "running",
  shutting_down: "shutting-down",
  stopped: "stopped",
  stopping: "stopping",
  terminated: "terminated",
} as const;
/**
 * @public
 */
export type InstanceStateName = (typeof InstanceStateName)[keyof typeof InstanceStateName];

/**
 * @public
 * @enum
 */
export const InstanceBootModeValues = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
} as const;
/**
 * @public
 */
export type InstanceBootModeValues = (typeof InstanceBootModeValues)[keyof typeof InstanceBootModeValues];

/**
 * @public
 * @enum
 */
export const InstanceLifecycleType = {
  capacity_block: "capacity-block",
  scheduled: "scheduled",
  spot: "spot",
} as const;
/**
 * @public
 */
export type InstanceLifecycleType = (typeof InstanceLifecycleType)[keyof typeof InstanceLifecycleType];

/**
 * @public
 * @enum
 */
export const InstanceAutoRecoveryState = {
  default: "default",
  disabled: "disabled",
} as const;
/**
 * @public
 */
export type InstanceAutoRecoveryState = (typeof InstanceAutoRecoveryState)[keyof typeof InstanceAutoRecoveryState];

/**
 * @public
 * @enum
 */
export const InstanceRebootMigrationState = {
  default: "default",
  disabled: "disabled",
} as const;
/**
 * @public
 */
export type InstanceRebootMigrationState =
  (typeof InstanceRebootMigrationState)[keyof typeof InstanceRebootMigrationState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataEndpointState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type InstanceMetadataEndpointState =
  (typeof InstanceMetadataEndpointState)[keyof typeof InstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataProtocolState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type InstanceMetadataProtocolState =
  (typeof InstanceMetadataProtocolState)[keyof typeof InstanceMetadataProtocolState];

/**
 * @public
 * @enum
 */
export const HttpTokensState = {
  optional: "optional",
  required: "required",
} as const;
/**
 * @public
 */
export type HttpTokensState = (typeof HttpTokensState)[keyof typeof HttpTokensState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataTagsState = {
  disabled: "disabled",
  enabled: "enabled",
} as const;
/**
 * @public
 */
export type InstanceMetadataTagsState = (typeof InstanceMetadataTagsState)[keyof typeof InstanceMetadataTagsState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataOptionsState = {
  applied: "applied",
  pending: "pending",
} as const;
/**
 * @public
 */
export type InstanceMetadataOptionsState =
  (typeof InstanceMetadataOptionsState)[keyof typeof InstanceMetadataOptionsState];

/**
 * @public
 * @enum
 */
export const MonitoringState = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  pending: "pending",
} as const;
/**
 * @public
 */
export type MonitoringState = (typeof MonitoringState)[keyof typeof MonitoringState];

/**
 * @public
 * @enum
 */
export const HaStatus = {
  active: "active",
  invalid: "invalid",
  processing: "processing",
  standby: "standby",
} as const;
/**
 * @public
 */
export type HaStatus = (typeof HaStatus)[keyof typeof HaStatus];

/**
 * @public
 * @enum
 */
export const SqlServerLicenseUsage = {
  full: "full",
  waived: "waived",
} as const;
/**
 * @public
 */
export type SqlServerLicenseUsage = (typeof SqlServerLicenseUsage)[keyof typeof SqlServerLicenseUsage];

/**
 * @public
 * @enum
 */
export const StatusName = {
  reachability: "reachability",
} as const;
/**
 * @public
 */
export type StatusName = (typeof StatusName)[keyof typeof StatusName];

/**
 * @public
 * @enum
 */
export const StatusType = {
  failed: "failed",
  initializing: "initializing",
  insufficient_data: "insufficient-data",
  passed: "passed",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const SummaryStatus = {
  impaired: "impaired",
  initializing: "initializing",
  insufficient_data: "insufficient-data",
  not_applicable: "not-applicable",
  ok: "ok",
} as const;
/**
 * @public
 */
export type SummaryStatus = (typeof SummaryStatus)[keyof typeof SummaryStatus];

/**
 * @public
 * @enum
 */
export const EventCode = {
  instance_reboot: "instance-reboot",
  instance_retirement: "instance-retirement",
  instance_stop: "instance-stop",
  system_maintenance: "system-maintenance",
  system_reboot: "system-reboot",
} as const;
/**
 * @public
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

/**
 * @public
 * @enum
 */
export const LocationType = {
  availability_zone: "availability-zone",
  availability_zone_id: "availability-zone-id",
  outpost: "outpost",
  region: "region",
} as const;
/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

/**
 * @public
 * @enum
 */
export const AttachmentLimitType = {
  DEDICATED: "dedicated",
  SHARED: "shared",
} as const;
/**
 * @public
 */
export type AttachmentLimitType = (typeof AttachmentLimitType)[keyof typeof AttachmentLimitType];

/**
 * @public
 * @enum
 */
export const EbsOptimizedSupport = {
  default: "default",
  supported: "supported",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type EbsOptimizedSupport = (typeof EbsOptimizedSupport)[keyof typeof EbsOptimizedSupport];

/**
 * @public
 * @enum
 */
export const EbsEncryptionSupport = {
  supported: "supported",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type EbsEncryptionSupport = (typeof EbsEncryptionSupport)[keyof typeof EbsEncryptionSupport];

/**
 * @public
 * @enum
 */
export const EbsNvmeSupport = {
  REQUIRED: "required",
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type EbsNvmeSupport = (typeof EbsNvmeSupport)[keyof typeof EbsNvmeSupport];

/**
 * @public
 * @enum
 */
export const InstanceTypeHypervisor = {
  NITRO: "nitro",
  XEN: "xen",
} as const;
/**
 * @public
 */
export type InstanceTypeHypervisor = (typeof InstanceTypeHypervisor)[keyof typeof InstanceTypeHypervisor];

/**
 * @public
 * @enum
 */
export const DiskType = {
  hdd: "hdd",
  ssd: "ssd",
} as const;
/**
 * @public
 */
export type DiskType = (typeof DiskType)[keyof typeof DiskType];

/**
 * @public
 * @enum
 */
export const InstanceStorageEncryptionSupport = {
  required: "required",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type InstanceStorageEncryptionSupport =
  (typeof InstanceStorageEncryptionSupport)[keyof typeof InstanceStorageEncryptionSupport];

/**
 * @public
 * @enum
 */
export const EphemeralNvmeSupport = {
  REQUIRED: "required",
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type EphemeralNvmeSupport = (typeof EphemeralNvmeSupport)[keyof typeof EphemeralNvmeSupport];

/**
 * @public
 * @enum
 */
export const BandwidthWeightingType = {
  DEFAULT: "default",
  EBS_1: "ebs-1",
  VPC_1: "vpc-1",
} as const;
/**
 * @public
 */
export type BandwidthWeightingType = (typeof BandwidthWeightingType)[keyof typeof BandwidthWeightingType];

/**
 * @public
 * @enum
 */
export const EnaSupport = {
  required: "required",
  supported: "supported",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type EnaSupport = (typeof EnaSupport)[keyof typeof EnaSupport];

/**
 * @public
 * @enum
 */
export const FlexibleEnaQueuesSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type FlexibleEnaQueuesSupport = (typeof FlexibleEnaQueuesSupport)[keyof typeof FlexibleEnaQueuesSupport];

/**
 * @public
 * @enum
 */
export const NitroEnclavesSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type NitroEnclavesSupport = (typeof NitroEnclavesSupport)[keyof typeof NitroEnclavesSupport];

/**
 * @public
 * @enum
 */
export const NitroTpmSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type NitroTpmSupport = (typeof NitroTpmSupport)[keyof typeof NitroTpmSupport];

/**
 * @public
 * @enum
 */
export const PhcSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type PhcSupport = (typeof PhcSupport)[keyof typeof PhcSupport];

/**
 * @public
 * @enum
 */
export const PlacementGroupStrategy = {
  cluster: "cluster",
  partition: "partition",
  spread: "spread",
} as const;
/**
 * @public
 */
export type PlacementGroupStrategy = (typeof PlacementGroupStrategy)[keyof typeof PlacementGroupStrategy];

/**
 * @public
 * @enum
 */
export const ArchitectureType = {
  arm64: "arm64",
  arm64_mac: "arm64_mac",
  i386: "i386",
  x86_64: "x86_64",
  x86_64_mac: "x86_64_mac",
} as const;
/**
 * @public
 */
export type ArchitectureType = (typeof ArchitectureType)[keyof typeof ArchitectureType];

/**
 * @public
 * @enum
 */
export const SupportedAdditionalProcessorFeature = {
  AMD_SEV_SNP: "amd-sev-snp",
} as const;
/**
 * @public
 */
export type SupportedAdditionalProcessorFeature =
  (typeof SupportedAdditionalProcessorFeature)[keyof typeof SupportedAdditionalProcessorFeature];

/**
 * @public
 * @enum
 */
export const RebootMigrationSupport = {
  SUPPORTED: "supported",
  UNSUPPORTED: "unsupported",
} as const;
/**
 * @public
 */
export type RebootMigrationSupport = (typeof RebootMigrationSupport)[keyof typeof RebootMigrationSupport];

/**
 * @public
 * @enum
 */
export const BootModeType = {
  legacy_bios: "legacy-bios",
  uefi: "uefi",
} as const;
/**
 * @public
 */
export type BootModeType = (typeof BootModeType)[keyof typeof BootModeType];

/**
 * @public
 * @enum
 */
export const RootDeviceType = {
  ebs: "ebs",
  instance_store: "instance-store",
} as const;
/**
 * @public
 */
export type RootDeviceType = (typeof RootDeviceType)[keyof typeof RootDeviceType];

/**
 * @public
 * @enum
 */
export const UsageClassType = {
  capacity_block: "capacity-block",
  on_demand: "on-demand",
  spot: "spot",
} as const;
/**
 * @public
 */
export type UsageClassType = (typeof UsageClassType)[keyof typeof UsageClassType];

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
 * @public
 * @enum
 */
export const InitializationType = {
  default: "default",
  provisioned_rate: "provisioned-rate",
  volume_copy: "volume-copy",
} as const;
/**
 * @public
 */
export type InitializationType = (typeof InitializationType)[keyof typeof InitializationType];

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
 * @public
 * @enum
 */
export const VolumeStatusInfoStatus = {
  impaired: "impaired",
  insufficient_data: "insufficient-data",
  ok: "ok",
  warning: "warning",
} as const;
/**
 * @public
 */
export type VolumeStatusInfoStatus = (typeof VolumeStatusInfoStatus)[keyof typeof VolumeStatusInfoStatus];

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
 * @public
 * @enum
 */
export const CapacityManagerStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type CapacityManagerStatus = (typeof CapacityManagerStatus)[keyof typeof CapacityManagerStatus];

/**
 * @public
 * @enum
 */
export const ImageBlockPublicAccessDisabledState = {
  unblocked: "unblocked",
} as const;
/**
 * @public
 */
export type ImageBlockPublicAccessDisabledState =
  (typeof ImageBlockPublicAccessDisabledState)[keyof typeof ImageBlockPublicAccessDisabledState];

/**
 * @public
 * @enum
 */
export const RouteServerPropagationState = {
  AVAILABLE: "available",
  DELETING: "deleting",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type RouteServerPropagationState =
  (typeof RouteServerPropagationState)[keyof typeof RouteServerPropagationState];

/**
 * @public
 * @enum
 */
export const SnapshotBlockPublicAccessState = {
  block_all_sharing: "block-all-sharing",
  block_new_sharing: "block-new-sharing",
  unblocked: "unblocked",
} as const;
/**
 * @public
 */
export type SnapshotBlockPublicAccessState =
  (typeof SnapshotBlockPublicAccessState)[keyof typeof SnapshotBlockPublicAccessState];

/**
 * @public
 * @enum
 */
export const TransitGatewayPropagationState = {
  disabled: "disabled",
  disabling: "disabling",
  enabled: "enabled",
  enabling: "enabling",
} as const;
/**
 * @public
 */
export type TransitGatewayPropagationState =
  (typeof TransitGatewayPropagationState)[keyof typeof TransitGatewayPropagationState];

/**
 * @public
 * @enum
 */
export const ImageBlockPublicAccessEnabledState = {
  block_new_sharing: "block-new-sharing",
} as const;
/**
 * @public
 */
export type ImageBlockPublicAccessEnabledState =
  (typeof ImageBlockPublicAccessEnabledState)[keyof typeof ImageBlockPublicAccessEnabledState];

/**
 * @public
 * @enum
 */
export const ClientCertificateRevocationListStatusCode = {
  active: "active",
  pending: "pending",
} as const;
/**
 * @public
 */
export type ClientCertificateRevocationListStatusCode =
  (typeof ClientCertificateRevocationListStatusCode)[keyof typeof ClientCertificateRevocationListStatusCode];

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  INGESTION_COMPLETE: "ingestion-complete",
  INGESTION_FAILED: "ingestion-failed",
  INITIAL_INGESTION_IN_PROGRESS: "initial-ingestion-in-progress",
} as const;
/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 * @enum
 */
export const Comparison = {
  EQUALS: "equals",
  IN: "in",
} as const;
/**
 * @public
 */
export type Comparison = (typeof Comparison)[keyof typeof Comparison];

/**
 * @public
 * @enum
 */
export const FilterByDimension = {
  ACCOUNT_ID: "account-id",
  AVAILABILITY_ZONE_ID: "availability-zone-id",
  INSTANCE_FAMILY: "instance-family",
  INSTANCE_PLATFORM: "instance-platform",
  INSTANCE_TYPE: "instance-type",
  RESERVATION_ARN: "reservation-arn",
  RESERVATION_CREATE_TIMESTAMP: "reservation-create-timestamp",
  RESERVATION_END_DATE_TYPE: "reservation-end-date-type",
  RESERVATION_END_TIMESTAMP: "reservation-end-timestamp",
  RESERVATION_ID: "reservation-id",
  RESERVATION_INSTANCE_MATCH_CRITERIA: "reservation-instance-match-criteria",
  RESERVATION_START_TIMESTAMP: "reservation-start-timestamp",
  RESERVATION_STATE: "reservation-state",
  RESERVATION_TYPE: "reservation-type",
  RESERVATION_UNUSED_FINANCIAL_OWNER: "reservation-unused-financial-owner",
  RESOURCE_REGION: "resource-region",
  TENANCY: "tenancy",
} as const;
/**
 * @public
 */
export type FilterByDimension = (typeof FilterByDimension)[keyof typeof FilterByDimension];

/**
 * @public
 * @enum
 */
export const GroupBy = {
  ACCOUNT_ID: "account-id",
  AVAILABILITY_ZONE_ID: "availability-zone-id",
  INSTANCE_FAMILY: "instance-family",
  INSTANCE_PLATFORM: "instance-platform",
  INSTANCE_TYPE: "instance-type",
  RESERVATION_ARN: "reservation-arn",
  RESERVATION_CREATE_TIMESTAMP: "reservation-create-timestamp",
  RESERVATION_END_DATE_TYPE: "reservation-end-date-type",
  RESERVATION_END_TIMESTAMP: "reservation-end-timestamp",
  RESERVATION_ID: "reservation-id",
  RESERVATION_INSTANCE_MATCH_CRITERIA: "reservation-instance-match-criteria",
  RESERVATION_START_TIMESTAMP: "reservation-start-timestamp",
  RESERVATION_STATE: "reservation-state",
  RESERVATION_TYPE: "reservation-type",
  RESERVATION_UNUSED_FINANCIAL_OWNER: "reservation-unused-financial-owner",
  RESOURCE_REGION: "resource-region",
  TENANCY: "tenancy",
} as const;
/**
 * @public
 */
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy];

/**
 * @public
 * @enum
 */
export const Metric = {
  RESERVATION_AVG_COMMITTED_SIZE_INST: "reservation-avg-committed-size-inst",
  RESERVATION_AVG_COMMITTED_SIZE_VCPU: "reservation-avg-committed-size-vcpu",
  RESERVATION_AVG_FUTURE_SIZE_INST: "reservation-avg-future-size-inst",
  RESERVATION_AVG_FUTURE_SIZE_VCPU: "reservation-avg-future-size-vcpu",
  RESERVATION_AVG_UTILIZATION_INST: "reservation-avg-utilization-inst",
  RESERVATION_AVG_UTILIZATION_VCPU: "reservation-avg-utilization-vcpu",
  RESERVATION_MAX_COMMITTED_SIZE_INST: "reservation-max-committed-size-inst",
  RESERVATION_MAX_COMMITTED_SIZE_VCPU: "reservation-max-committed-size-vcpu",
  RESERVATION_MAX_FUTURE_SIZE_INST: "reservation-max-future-size-inst",
  RESERVATION_MAX_FUTURE_SIZE_VCPU: "reservation-max-future-size-vcpu",
  RESERVATION_MAX_SIZE_INST: "reservation-max-size-inst",
  RESERVATION_MAX_SIZE_VCPU: "reservation-max-size-vcpu",
  RESERVATION_MAX_UNUSED_SIZE_INST: "reservation-max-unused-size-inst",
  RESERVATION_MAX_UNUSED_SIZE_VCPU: "reservation-max-unused-size-vcpu",
  RESERVATION_MAX_UTILIZATION: "reservation-max-utilization",
  RESERVATION_MIN_COMMITTED_SIZE_INST: "reservation-min-committed-size-inst",
  RESERVATION_MIN_COMMITTED_SIZE_VCPU: "reservation-min-committed-size-vcpu",
  RESERVATION_MIN_FUTURE_SIZE_INST: "reservation-min-future-size-inst",
  RESERVATION_MIN_FUTURE_SIZE_VCPU: "reservation-min-future-size-vcpu",
  RESERVATION_MIN_SIZE_INST: "reservation-min-size-inst",
  RESERVATION_MIN_SIZE_VCPU: "reservation-min-size-vcpu",
  RESERVATION_MIN_UNUSED_SIZE_INST: "reservation-min-unused-size-inst",
  RESERVATION_MIN_UNUSED_SIZE_VCPU: "reservation-min-unused-size-vcpu",
  RESERVATION_MIN_UTILIZATION: "reservation-min-utilization",
  RESERVATION_TOTAL_CAPACITY_HRS_INST: "reservation-total-capacity-hrs-inst",
  RESERVATION_TOTAL_CAPACITY_HRS_VCPU: "reservation-total-capacity-hrs-vcpu",
  RESERVATION_TOTAL_COUNT: "reservation-total-count",
  RESERVATION_TOTAL_ESTIMATED_COST: "reservation-total-estimated-cost",
  RESERVATION_UNUSED_TOTAL_CAPACITY_HRS_INST: "reservation-unused-total-capacity-hrs-inst",
  RESERVATION_UNUSED_TOTAL_CAPACITY_HRS_VCPU: "reservation-unused-total-capacity-hrs-vcpu",
  RESERVATION_UNUSED_TOTAL_ESTIMATED_COST: "reservation-unused-total-estimated-cost",
  RESERVED_TOTAL_ESTIMATED_COST: "reserved-total-estimated-cost",
  RESERVED_TOTAL_USAGE_HRS_INST: "reserved-total-usage-hrs-inst",
  RESERVED_TOTAL_USAGE_HRS_VCPU: "reserved-total-usage-hrs-vcpu",
  SPOT_AVG_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-avg-run-time-before-interruption-inst",
  SPOT_MAX_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-max-run-time-before-interruption-inst",
  SPOT_MIN_RUN_TIME_BEFORE_INTERRUPTION_INST: "spot-min-run-time-before-interruption-inst",
  SPOT_TOTAL_ESTIMATED_COST: "spot-total-estimated-cost",
  SPOT_TOTAL_USAGE_HRS_INST: "spot-total-usage-hrs-inst",
  SPOT_TOTAL_USAGE_HRS_VCPU: "spot-total-usage-hrs-vcpu",
  UNRESERVED_TOTAL_ESTIMATED_COST: "unreserved-total-estimated-cost",
  UNRESERVED_TOTAL_USAGE_HRS_INST: "unreserved-total-usage-hrs-inst",
  UNRESERVED_TOTAL_USAGE_HRS_VCPU: "unreserved-total-usage-hrs-vcpu",
} as const;
/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * @enum
 */
export const ReservationEndDateType = {
  LIMITED: "limited",
  UNLIMITED: "unlimited",
} as const;
/**
 * @public
 */
export type ReservationEndDateType = (typeof ReservationEndDateType)[keyof typeof ReservationEndDateType];

/**
 * @public
 * @enum
 */
export const ReservationType = {
  CAPACITY_BLOCK: "capacity-block",
  ODCR: "odcr",
} as const;
/**
 * @public
 */
export type ReservationType = (typeof ReservationType)[keyof typeof ReservationType];

/**
 * @public
 * @enum
 */
export const CapacityTenancy = {
  DEDICATED: "dedicated",
  DEFAULT: "default",
} as const;
/**
 * @public
 */
export type CapacityTenancy = (typeof CapacityTenancy)[keyof typeof CapacityTenancy];

/**
 * @public
 * @enum
 */
export const UnlimitedSupportedInstanceFamily = {
  t2: "t2",
  t3: "t3",
  t3a: "t3a",
  t4g: "t4g",
} as const;
/**
 * @public
 */
export type UnlimitedSupportedInstanceFamily =
  (typeof UnlimitedSupportedInstanceFamily)[keyof typeof UnlimitedSupportedInstanceFamily];

/**
 * @public
 * @enum
 */
export const PartitionLoadFrequency = {
  DAILY: "daily",
  MONTHLY: "monthly",
  NONE: "none",
  WEEKLY: "weekly",
} as const;
/**
 * @public
 */
export type PartitionLoadFrequency = (typeof PartitionLoadFrequency)[keyof typeof PartitionLoadFrequency];

/**
 * @public
 * @enum
 */
export const EkPubKeyFormat = {
  der: "der",
  tpmt: "tpmt",
} as const;
/**
 * @public
 */
export type EkPubKeyFormat = (typeof EkPubKeyFormat)[keyof typeof EkPubKeyFormat];

/**
 * @public
 * @enum
 */
export const EkPubKeyType = {
  ECC_SEC_P384: "ecc-sec-p384",
  RSA_2048: "rsa-2048",
} as const;
/**
 * @public
 */
export type EkPubKeyType = (typeof EkPubKeyType)[keyof typeof EkPubKeyType];

/**
 * @public
 * @enum
 */
export const IpamComplianceStatus = {
  compliant: "compliant",
  ignored: "ignored",
  noncompliant: "noncompliant",
  unmanaged: "unmanaged",
} as const;
/**
 * @public
 */
export type IpamComplianceStatus = (typeof IpamComplianceStatus)[keyof typeof IpamComplianceStatus];

/**
 * @public
 * @enum
 */
export const IpamOverlapStatus = {
  ignored: "ignored",
  nonoverlapping: "nonoverlapping",
  overlapping: "overlapping",
} as const;
/**
 * @public
 */
export type IpamOverlapStatus = (typeof IpamOverlapStatus)[keyof typeof IpamOverlapStatus];

/**
 * @public
 * @enum
 */
export const IpamAddressHistoryResourceType = {
  eip: "eip",
  instance: "instance",
  network_interface: "network-interface",
  subnet: "subnet",
  vpc: "vpc",
} as const;
/**
 * @public
 */
export type IpamAddressHistoryResourceType =
  (typeof IpamAddressHistoryResourceType)[keyof typeof IpamAddressHistoryResourceType];

/**
 * @public
 * @enum
 */
export const IpamDiscoveryFailureCode = {
  assume_role_failure: "assume-role-failure",
  throttling_failure: "throttling-failure",
  unauthorized_failure: "unauthorized-failure",
} as const;
/**
 * @public
 */
export type IpamDiscoveryFailureCode = (typeof IpamDiscoveryFailureCode)[keyof typeof IpamDiscoveryFailureCode];

/**
 * @public
 * @enum
 */
export const IpamPublicAddressType = {
  AMAZON_OWNED_CONTIG: "amazon-owned-contig",
  AMAZON_OWNED_EIP: "amazon-owned-eip",
  BYOIP: "byoip",
  EC2_PUBLIC_IP: "ec2-public-ip",
  SERVICE_MANAGED_BYOIP: "service-managed-byoip",
  SERVICE_MANAGED_IP: "service-managed-ip",
} as const;
/**
 * @public
 */
export type IpamPublicAddressType = (typeof IpamPublicAddressType)[keyof typeof IpamPublicAddressType];

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAssociationStatus = {
  ASSOCIATED: "associated",
  DISASSOCIATED: "disassociated",
} as const;
/**
 * @public
 */
export type IpamPublicAddressAssociationStatus =
  (typeof IpamPublicAddressAssociationStatus)[keyof typeof IpamPublicAddressAssociationStatus];

/**
 * @public
 * @enum
 */
export const IpamPublicAddressAwsService = {
  AGA: "global-accelerator",
  DMS: "database-migration-service",
  EC2_LB: "load-balancer",
  ECS: "elastic-container-service",
  NAT_GATEWAY: "nat-gateway",
  OTHER: "other",
  RDS: "relational-database-service",
  REDSHIFT: "redshift",
  S2S_VPN: "site-to-site-vpn",
} as const;
/**
 * @public
 */
export type IpamPublicAddressAwsService =
  (typeof IpamPublicAddressAwsService)[keyof typeof IpamPublicAddressAwsService];

/**
 * @public
 * @enum
 */
export const IpamResourceCidrIpSource = {
  amazon: "amazon",
  byoip: "byoip",
  none: "none",
} as const;
/**
 * @public
 */
export type IpamResourceCidrIpSource = (typeof IpamResourceCidrIpSource)[keyof typeof IpamResourceCidrIpSource];

/**
 * @public
 * @enum
 */
export const IpamNetworkInterfaceAttachmentStatus = {
  available: "available",
  in_use: "in-use",
} as const;
/**
 * @public
 */
export type IpamNetworkInterfaceAttachmentStatus =
  (typeof IpamNetworkInterfaceAttachmentStatus)[keyof typeof IpamNetworkInterfaceAttachmentStatus];

/**
 * @public
 * @enum
 */
export const IpamManagementState = {
  ignored: "ignored",
  managed: "managed",
  unmanaged: "unmanaged",
} as const;
/**
 * @public
 */
export type IpamManagementState = (typeof IpamManagementState)[keyof typeof IpamManagementState];

/**
 * @public
 * @enum
 */
export const RouteServerRouteInstallationStatus = {
  INSTALLED: "installed",
  REJECTED: "rejected",
} as const;
/**
 * @public
 */
export type RouteServerRouteInstallationStatus =
  (typeof RouteServerRouteInstallationStatus)[keyof typeof RouteServerRouteInstallationStatus];

/**
 * @public
 * @enum
 */
export const RouteServerRouteStatus = {
  IN_FIB: "in-fib",
  IN_RIB: "in-rib",
} as const;
/**
 * @public
 */
export type RouteServerRouteStatus = (typeof RouteServerRouteStatus)[keyof typeof RouteServerRouteStatus];

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
 * @enum
 */
export const ReportInstanceReasonCodes = {
  instance_stuck_in_state: "instance-stuck-in-state",
  not_accepting_credentials: "not-accepting-credentials",
  other: "other",
  password_not_available: "password-not-available",
  performance_ebs_volume: "performance-ebs-volume",
  performance_instance_store: "performance-instance-store",
  performance_network: "performance-network",
  performance_other: "performance-other",
  unresponsive: "unresponsive",
} as const;
/**
 * @public
 */
export type ReportInstanceReasonCodes = (typeof ReportInstanceReasonCodes)[keyof typeof ReportInstanceReasonCodes];

/**
 * @public
 * @enum
 */
export const ReportStatusType = {
  impaired: "impaired",
  ok: "ok",
} as const;
/**
 * @public
 */
export type ReportStatusType = (typeof ReportStatusType)[keyof typeof ReportStatusType];

/**
 * @public
 * @enum
 */
export const ResetFpgaImageAttributeName = {
  loadPermission: "loadPermission",
} as const;
/**
 * @public
 */
export type ResetFpgaImageAttributeName =
  (typeof ResetFpgaImageAttributeName)[keyof typeof ResetFpgaImageAttributeName];

/**
 * @public
 * @enum
 */
export const ResetImageAttributeName = {
  launchPermission: "launchPermission",
} as const;
/**
 * @public
 */
export type ResetImageAttributeName = (typeof ResetImageAttributeName)[keyof typeof ResetImageAttributeName];

/**
 * @public
 * @enum
 */
export const MembershipType = {
  igmp: "igmp",
  static: "static",
} as const;
/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];
