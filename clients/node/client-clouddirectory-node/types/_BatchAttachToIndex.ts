import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchAttachToIndex {
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: _ObjectReference;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: _ObjectReference;
}

export interface _UnmarshalledBatchAttachToIndex extends _BatchAttachToIndex {
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: _UnmarshalledObjectReference;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: _UnmarshalledObjectReference;
}
