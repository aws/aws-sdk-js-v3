/**
 * <p>Information about a static IP address for a load balancer.</p>
 */
export interface _LoadBalancerAddress {
  /**
   * <p>The static IP address.</p>
   */
  IpAddress?: string;

  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address.</p>
   */
  AllocationId?: string;
}

export type _UnmarshalledLoadBalancerAddress = _LoadBalancerAddress;
