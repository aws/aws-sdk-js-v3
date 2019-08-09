import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchListObjectPolicies {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
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

export interface _UnmarshalledBatchListObjectPolicies
  extends _BatchListObjectPolicies {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
