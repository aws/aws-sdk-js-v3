/**
 * <p>Information about the version of the policy associated with the resource.</p>
 */
export interface _PolicyVersionIdentifier {
  /**
   * <p>The name of the policy.</p>
   */
  policyName?: string;

  /**
   * <p>The ID of the version of the policy associated with the resource.</p>
   */
  policyVersionId?: string;
}

export type _UnmarshalledPolicyVersionIdentifier = _PolicyVersionIdentifier;
