/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface _EffectivePolicy {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;
}

export type _UnmarshalledEffectivePolicy = _EffectivePolicy;
