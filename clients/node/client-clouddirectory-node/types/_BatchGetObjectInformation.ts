import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchGetObjectInformation {
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchGetObjectInformation
  extends _BatchGetObjectInformation {
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
