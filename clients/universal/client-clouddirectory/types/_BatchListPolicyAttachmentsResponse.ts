/**
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 */
export interface _BatchListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: Array<string> | Iterable<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListPolicyAttachmentsResponse
  extends _BatchListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: Array<string>;
}
