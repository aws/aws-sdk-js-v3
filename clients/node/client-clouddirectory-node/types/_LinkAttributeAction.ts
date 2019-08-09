import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";

/**
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 */
export interface _LinkAttributeAction {
  /**
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   */
  AttributeActionType?: "CREATE_OR_UPDATE" | "DELETE" | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: _TypedAttributeValue;
}

export interface _UnmarshalledLinkAttributeAction extends _LinkAttributeAction {
  /**
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: _UnmarshalledTypedAttributeValue;
}
