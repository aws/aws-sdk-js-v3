import {
  _LoadBalancerDescription,
  _UnmarshalledLoadBalancerDescription
} from "./_LoadBalancerDescription";

/**
 * <p>Describes the AWS resources in use by this environment. This data is not live data.</p>
 */
export interface _EnvironmentResourcesDescription {
  /**
   * <p>Describes the LoadBalancer.</p>
   */
  LoadBalancer?: _LoadBalancerDescription;
}

export interface _UnmarshalledEnvironmentResourcesDescription
  extends _EnvironmentResourcesDescription {
  /**
   * <p>Describes the LoadBalancer.</p>
   */
  LoadBalancer?: _UnmarshalledLoadBalancerDescription;
}
