import {
  _WeightedTarget,
  _UnmarshalledWeightedTarget
} from "./_WeightedTarget";

/**
 * <p>An object representing the traffic distribution requirements for matched HTTP
 *          requests.</p>
 */
export interface _HttpRouteAction {
  /**
   * <p>The targets that traffic is routed to when a request matches the route. You can specify
   *          one or more targets and their relative weights to distribute traffic with.</p>
   */
  weightedTargets: Array<_WeightedTarget> | Iterable<_WeightedTarget>;
}

export interface _UnmarshalledHttpRouteAction extends _HttpRouteAction {
  /**
   * <p>The targets that traffic is routed to when a request matches the route. You can specify
   *          one or more targets and their relative weights to distribute traffic with.</p>
   */
  weightedTargets: Array<_UnmarshalledWeightedTarget>;
}
