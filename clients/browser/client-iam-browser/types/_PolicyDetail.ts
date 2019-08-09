/**
 * <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface _PolicyDetail {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument?: string;
}

export type _UnmarshalledPolicyDetail = _PolicyDetail;
