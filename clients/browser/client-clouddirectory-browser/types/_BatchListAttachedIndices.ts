import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchListAttachedIndices {
  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchListAttachedIndices
  extends _BatchListAttachedIndices {
  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: _UnmarshalledObjectReference;
}
