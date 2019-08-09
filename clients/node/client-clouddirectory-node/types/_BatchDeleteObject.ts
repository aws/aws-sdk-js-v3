import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 */
export interface _BatchDeleteObject {
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchDeleteObject extends _BatchDeleteObject {
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
