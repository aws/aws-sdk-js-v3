import {
  _ClassicLoadBalancer,
  _UnmarshalledClassicLoadBalancer
} from "./_ClassicLoadBalancer";

/**
 * <p>Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.</p>
 */
export interface _ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?:
    | Array<_ClassicLoadBalancer>
    | Iterable<_ClassicLoadBalancer>;
}

export interface _UnmarshalledClassicLoadBalancersConfig
  extends _ClassicLoadBalancersConfig {
  /**
   * <p>One or more Classic Load Balancers.</p>
   */
  ClassicLoadBalancers?: Array<_UnmarshalledClassicLoadBalancer>;
}
