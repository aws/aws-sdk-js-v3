/**
 * <p>Describes a tag.</p>
 */
export interface _TagDescription {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
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
   * <p>The tag value.</p>
   */
  Value?: string;
}

export type _UnmarshalledTagDescription = _TagDescription;
