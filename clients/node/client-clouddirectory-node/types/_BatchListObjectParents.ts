import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * _BatchListObjectParents shape
 */
export interface _BatchListObjectParents {
  /**
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * _NextToken shape
   */
  NextToken?: string;

  /**
   * _NumberResults shape
   */
  MaxResults?: number;
}

export interface _UnmarshalledBatchListObjectParents
  extends _BatchListObjectParents {
  /**
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
