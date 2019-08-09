/**
 * <p>Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.</p>
 */
export interface _ELBInfo {
  /**
   * <p>For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.</p>
   */
  name?: string;
}

export type _UnmarshalledELBInfo = _ELBInfo;
