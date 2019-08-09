import {
  _LoadBalancerAddress,
  _UnmarshalledLoadBalancerAddress
} from "./_LoadBalancerAddress";

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface _AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>[Network Load Balancers] The static IP address.</p>
   */
  LoadBalancerAddresses?:
    | Array<_LoadBalancerAddress>
    | Iterable<_LoadBalancerAddress>;
}

export interface _UnmarshalledAvailabilityZone extends _AvailabilityZone {
  /**
   * <p>[Network Load Balancers] The static IP address.</p>
   */
  LoadBalancerAddresses?: Array<_UnmarshalledLoadBalancerAddress>;
}
