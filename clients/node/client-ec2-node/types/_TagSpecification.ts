import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tags to apply to a resource when the resource is being created.</p>
 */
export interface _TagSpecification {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on creation are: <code>capacity-reservation</code> | <code>client-vpn-endpoint</code> | <code>dedicated-host</code> | <code>fleet</code> | <code>instance</code> | <code>launch-template</code> | <code>snapshot</code> | <code>transit-gateway</code> | <code>transit-gateway-attachment</code> | <code>transit-gateway-route-table</code> | <code>volume</code>.</p> <p>To tag a resource after it has been created, see <a>CreateTags</a>.</p>
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
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTagSpecification extends _TagSpecification {
  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
