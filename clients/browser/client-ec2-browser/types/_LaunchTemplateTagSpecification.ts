import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tag specification for the launch template.</p>
 */
export interface _LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?:
    | "client-vpn-endpoint"
    | "customer-gateway"
    | "dedicated-host"
    | "dhcp-options"
    | "elastic-ip"
    | "fleet"
    | "fpga-image"
    | "host-reservation"
    | "image"
    | "instance"
    | "internet-gateway"
    | "launch-template"
    | "natgateway"
    | "network-acl"
    | "network-interface"
    | "reserved-instances"
    | "route-table"
    | "security-group"
    | "snapshot"
    | "spot-instances-request"
    | "subnet"
    | "traffic-mirror-filter"
    | "traffic-mirror-session"
    | "traffic-mirror-target"
    | "transit-gateway"
    | "transit-gateway-attachment"
    | "transit-gateway-route-table"
    | "volume"
    | "vpc"
    | "vpc-peering-connection"
    | "vpn-connection"
    | "vpn-gateway"
    | string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledLaunchTemplateTagSpecification
  extends _LaunchTemplateTagSpecification {
  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
