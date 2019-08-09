/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface _LoadBalancerState {
  /**
   * <p>The state code. The initial state of the load balancer is <code>provisioning</code>. After the load balancer is fully set up and ready to route traffic, its state is <code>active</code>. If the load balancer could not be set up, its state is <code>failed</code>.</p>
   */
  Code?: "active" | "provisioning" | "active_impaired" | "failed" | string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export type _UnmarshalledLoadBalancerState = _LoadBalancerState;
