import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 */
export interface _BatchAttachObject {
  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: _ObjectReference;

  /**
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: _ObjectReference;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string;
}

export interface _UnmarshalledBatchAttachObject extends _BatchAttachObject {
  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: _UnmarshalledObjectReference;

  /**
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: _UnmarshalledObjectReference;
}
