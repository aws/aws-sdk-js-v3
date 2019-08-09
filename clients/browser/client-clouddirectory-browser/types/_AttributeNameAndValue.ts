import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";

/**
 * <p>Identifies the attribute name and value for a typed link.</p>
 */
export interface _AttributeNameAndValue {
  /**
   * <p>The attribute name of the typed link.</p>
   */
  AttributeName: string;

  /**
   * <p>The value for the typed link.</p>
   */
  Value: _TypedAttributeValue;
}

export interface _UnmarshalledAttributeNameAndValue
  extends _AttributeNameAndValue {
  /**
   * <p>The value for the typed link.</p>
   */
  Value: _UnmarshalledTypedAttributeValue;
}
