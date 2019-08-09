/**
 * <p>Information about an Auto Scaling group.</p>
 */
export interface _AutoScalingGroup {
  /**
   * <p>The Auto Scaling group name.</p>
   */
  name?: string;

  /**
   * <p>An Auto Scaling lifecycle event hook name.</p>
   */
  hook?: string;
}

export type _UnmarshalledAutoScalingGroup = _AutoScalingGroup;
