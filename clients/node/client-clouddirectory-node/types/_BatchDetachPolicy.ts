import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 */
export interface _BatchDetachPolicy {
  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: _ObjectReference;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchDetachPolicy extends _BatchDetachPolicy {
  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: _UnmarshalledObjectReference;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
