import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchDetachFromIndex {
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: _ObjectReference;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: _ObjectReference;
}

export interface _UnmarshalledBatchDetachFromIndex
  extends _BatchDetachFromIndex {
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: _UnmarshalledObjectReference;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: _UnmarshalledObjectReference;
}
