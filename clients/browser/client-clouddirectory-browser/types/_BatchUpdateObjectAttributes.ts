import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import {
  _ObjectAttributeUpdate,
  _UnmarshalledObjectAttributeUpdate
} from "./_ObjectAttributeUpdate";

/**
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 */
export interface _BatchUpdateObjectAttributes {
  /**
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates:
    | Array<_ObjectAttributeUpdate>
    | Iterable<_ObjectAttributeUpdate>;
}

export interface _UnmarshalledBatchUpdateObjectAttributes
  extends _BatchUpdateObjectAttributes {
  /**
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: Array<_UnmarshalledObjectAttributeUpdate>;
}
