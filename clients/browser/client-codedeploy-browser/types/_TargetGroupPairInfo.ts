import {
  _TargetGroupInfo,
  _UnmarshalledTargetGroupInfo
} from "./_TargetGroupInfo";
import { _TrafficRoute, _UnmarshalledTrafficRoute } from "./_TrafficRoute";

/**
 * <p> Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. </p>
 */
export interface _TargetGroupPairInfo {
  /**
   * <p> One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete. </p>
   */
  targetGroups?: Array<_TargetGroupInfo> | Iterable<_TargetGroupInfo>;

  /**
   * <p> The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. </p>
   */
  prodTrafficRoute?: _TrafficRoute;

  /**
   * <p> An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment. </p>
   */
  testTrafficRoute?: _TrafficRoute;
}

export interface _UnmarshalledTargetGroupPairInfo extends _TargetGroupPairInfo {
  /**
   * <p> One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete. </p>
   */
  targetGroups?: Array<_UnmarshalledTargetGroupInfo>;

  /**
   * <p> The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. </p>
   */
  prodTrafficRoute?: _UnmarshalledTrafficRoute;

  /**
   * <p> An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment. </p>
   */
  testTrafficRoute?: _UnmarshalledTrafficRoute;
}
