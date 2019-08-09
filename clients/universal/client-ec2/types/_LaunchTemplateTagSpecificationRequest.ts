import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The tags specification for the launch template.</p>
 */
export interface _LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on creation are <code>instance</code> and <code>volume</code>. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
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

export interface _UnmarshalledLaunchTemplateTagSpecificationRequest
  extends _LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
