/**
 * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.</p>
 */
export interface _ScalingConstraints {
  /**
   * <p>The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.</p>
   */
  MinCapacity: number;

  /**
   * <p>The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.</p>
   */
  MaxCapacity: number;
}

export type _UnmarshalledScalingConstraints = _ScalingConstraints;
