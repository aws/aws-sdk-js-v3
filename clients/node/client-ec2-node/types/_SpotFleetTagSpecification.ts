import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tags for a Spot Fleet resource.</p>
 */
export interface _SpotFleetTagSpecification {
  /**
   * <p>The type of resource. Currently, the only resource type that is supported is <code>instance</code>.</p>
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
   * <p>The tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledSpotFleetTagSpecification
  extends _SpotFleetTagSpecification {
  /**
   * <p>The tags.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
