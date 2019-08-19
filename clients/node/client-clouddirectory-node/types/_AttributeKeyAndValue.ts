import { _AttributeKey, _UnmarshalledAttributeKey } from "./_AttributeKey";
import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";

/**
 * <p>The combination of an attribute key and an attribute value.</p>
 */
export interface _AttributeKeyAndValue {
  /**
   * <p>The key of the attribute.</p>
   */
  Key: _AttributeKey;

  /**
   * <p>The value of the attribute.</p>
   */
  Value: _TypedAttributeValue;
}

export interface _UnmarshalledAttributeKeyAndValue
  extends _AttributeKeyAndValue {
  /**
   * <p>The key of the attribute.</p>
   */
  Key: _UnmarshalledAttributeKey;

  /**
   * <p>The value of the attribute.</p>
   */
  Value: _UnmarshalledTypedAttributeValue;
}
