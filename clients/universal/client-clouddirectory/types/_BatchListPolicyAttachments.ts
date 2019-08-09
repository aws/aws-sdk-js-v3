import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchListPolicyAttachments {
  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchListPolicyAttachments
  extends _BatchListPolicyAttachments {
  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: _UnmarshalledObjectReference;
}
