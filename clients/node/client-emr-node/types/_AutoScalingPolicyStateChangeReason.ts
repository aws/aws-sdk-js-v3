/**
 * <p>The reason for an <a>AutoScalingPolicyStatus</a> change.</p>
 */
export interface _AutoScalingPolicyStateChangeReason {
  /**
   * <p>The code indicating the reason for the change in status.<code>USER_REQUEST</code> indicates that the scaling policy status was changed by a user. <code>PROVISION_FAILURE</code> indicates that the status change was because the policy failed to provision. <code>CLEANUP_FAILURE</code> indicates an error.</p>
   */
  Code?: "USER_REQUEST" | "PROVISION_FAILURE" | "CLEANUP_FAILURE" | string;

  /**
   * <p>A friendly, more verbose message that accompanies an automatic scaling policy state change.</p>
   */
  Message?: string;
}

export type _UnmarshalledAutoScalingPolicyStateChangeReason = _AutoScalingPolicyStateChangeReason;
