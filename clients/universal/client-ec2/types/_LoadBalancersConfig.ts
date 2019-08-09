import {
  _ClassicLoadBalancersConfig,
  _UnmarshalledClassicLoadBalancersConfig
} from "./_ClassicLoadBalancersConfig";
import {
  _TargetGroupsConfig,
  _UnmarshalledTargetGroupsConfig
} from "./_TargetGroupsConfig";

/**
 * <p>Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.</p>
 */
export interface _LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: _ClassicLoadBalancersConfig;

  /**
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: _TargetGroupsConfig;
}

export interface _UnmarshalledLoadBalancersConfig extends _LoadBalancersConfig {
  /**
   * <p>The Classic Load Balancers.</p>
   */
  ClassicLoadBalancersConfig?: _UnmarshalledClassicLoadBalancersConfig;

  /**
   * <p>The target groups.</p>
   */
  TargetGroupsConfig?: _UnmarshalledTargetGroupsConfig;
}
