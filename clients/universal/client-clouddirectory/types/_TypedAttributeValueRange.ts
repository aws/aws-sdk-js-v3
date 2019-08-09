import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";

/**
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 */
export interface _TypedAttributeValueRange {
  /**
   * <p>The inclusive or exclusive range start.</p>
   */
  StartMode:
    | "FIRST"
    | "LAST"
    | "LAST_BEFORE_MISSING_VALUES"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | string;

  /**
   * <p>The value to start the range at.</p>
   */
  StartValue?: _TypedAttributeValue;

  /**
   * <p>The inclusive or exclusive range end.</p>
   */
  EndMode:
    | "FIRST"
    | "LAST"
    | "LAST_BEFORE_MISSING_VALUES"
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | string;

  /**
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: _TypedAttributeValue;
}

export interface _UnmarshalledTypedAttributeValueRange
  extends _TypedAttributeValueRange {
  /**
   * <p>The value to start the range at.</p>
   */
  StartValue?: _UnmarshalledTypedAttributeValue;

  /**
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: _UnmarshalledTypedAttributeValue;
}
