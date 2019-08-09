import {
  _TargetInstance,
  _UnmarshalledTargetInstance
} from "./_TargetInstance";

/**
 * <p> Details on the modification recommendation.</p>
 */
export interface _ModifyRecommendationDetail {
  /**
   * <p> Identifies whether this instance type is the Amazon Web Services default recommendation.</p>
   */
  TargetInstances?: Array<_TargetInstance> | Iterable<_TargetInstance>;
}

export interface _UnmarshalledModifyRecommendationDetail
  extends _ModifyRecommendationDetail {
  /**
   * <p> Identifies whether this instance type is the Amazon Web Services default recommendation.</p>
   */
  TargetInstances?: Array<_UnmarshalledTargetInstance>;
}
