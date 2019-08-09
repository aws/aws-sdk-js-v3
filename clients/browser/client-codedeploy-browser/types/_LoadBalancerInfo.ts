import { _ELBInfo, _UnmarshalledELBInfo } from "./_ELBInfo";
import {
  _TargetGroupInfo,
  _UnmarshalledTargetGroupInfo
} from "./_TargetGroupInfo";
import {
  _TargetGroupPairInfo,
  _UnmarshalledTargetGroupPairInfo
} from "./_TargetGroupPairInfo";

/**
 * <p>Information about the Elastic Load Balancing load balancer or target group used in a deployment.</p>
 */
export interface _LoadBalancerInfo {
  /**
   * <p>An array that contains information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.</p> <note> <p> Adding more than one load balancer to the array is not supported. </p> </note>
   */
  elbInfoList?: Array<_ELBInfo> | Iterable<_ELBInfo>;

  /**
   * <p>An array that contains information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.</p> <note> <p> Adding more than one target group to the array is not supported. </p> </note>
   */
  targetGroupInfoList?: Array<_TargetGroupInfo> | Iterable<_TargetGroupInfo>;

  /**
   * <p> The target group pair information. This is an array of <code>TargeGroupPairInfo</code> objects with a maximum size of one. </p>
   */
  targetGroupPairInfoList?:
    | Array<_TargetGroupPairInfo>
    | Iterable<_TargetGroupPairInfo>;
}

export interface _UnmarshalledLoadBalancerInfo extends _LoadBalancerInfo {
  /**
   * <p>An array that contains information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.</p> <note> <p> Adding more than one load balancer to the array is not supported. </p> </note>
   */
  elbInfoList?: Array<_UnmarshalledELBInfo>;

  /**
   * <p>An array that contains information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.</p> <note> <p> Adding more than one target group to the array is not supported. </p> </note>
   */
  targetGroupInfoList?: Array<_UnmarshalledTargetGroupInfo>;

  /**
   * <p> The target group pair information. This is an array of <code>TargeGroupPairInfo</code> objects with a maximum size of one. </p>
   */
  targetGroupPairInfoList?: Array<_UnmarshalledTargetGroupPairInfo>;
}
