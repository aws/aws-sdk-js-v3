import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 */
export interface _BatchListObjectChildren {
  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate number.</p>
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchListObjectChildren
  extends _BatchListObjectChildren {
  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
