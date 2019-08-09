import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchAttachPolicy {
  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: _ObjectReference;

  /**
   * <p>The reference that identifies the object to which the policy will be attached.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchAttachPolicy extends _BatchAttachPolicy {
  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: _UnmarshalledObjectReference;

  /**
   * <p>The reference that identifies the object to which the policy will be attached.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
