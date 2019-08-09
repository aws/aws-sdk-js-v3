import { _AttributeKey, _UnmarshalledAttributeKey } from "./_AttributeKey";
import {
  _TypedAttributeValueRange,
  _UnmarshalledTypedAttributeValueRange
} from "./_TypedAttributeValueRange";

/**
 * <p>A range of attributes.</p>
 */
export interface _ObjectAttributeRange {
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: _AttributeKey;

  /**
   * <p>The range of attribute values being selected.</p>
   */
  Range?: _TypedAttributeValueRange;
}

export interface _UnmarshalledObjectAttributeRange
  extends _ObjectAttributeRange {
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: _UnmarshalledAttributeKey;

  /**
   * <p>The range of attribute values being selected.</p>
   */
  Range?: _UnmarshalledTypedAttributeValueRange;
}
