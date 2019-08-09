import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchLookupPolicy {
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchLookupPolicy extends _BatchLookupPolicy {
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
