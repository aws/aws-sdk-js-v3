/**
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 */
export interface _BatchListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the object.</p>
   */
  AttachedPolicyIds?: Array<string> | Iterable<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListObjectPoliciesResponse
  extends _BatchListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the object.</p>
   */
  AttachedPolicyIds?: Array<string>;
}
