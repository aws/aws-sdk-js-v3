import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";

/**
 * <p>The action to take on the object attribute.</p>
 */
export interface _ObjectAttributeAction {
  /**
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   */
  ObjectAttributeActionType?: "CREATE_OR_UPDATE" | "DELETE" | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: _TypedAttributeValue;
}

export interface _UnmarshalledObjectAttributeAction
  extends _ObjectAttributeAction {
  /**
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: _UnmarshalledTypedAttributeValue;
}
