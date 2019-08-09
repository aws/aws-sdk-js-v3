/**
 * <p> Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. </p>
 */
export interface _TrafficRoute {
  /**
   * <p> The ARN of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one. </p>
   */
  listenerArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTrafficRoute extends _TrafficRoute {
  /**
   * <p> The ARN of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one. </p>
   */
  listenerArns?: Array<string>;
}
