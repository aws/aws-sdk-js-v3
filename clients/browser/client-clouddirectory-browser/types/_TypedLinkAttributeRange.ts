import {
  _TypedAttributeValueRange,
  _UnmarshalledTypedAttributeValueRange
} from "./_TypedAttributeValueRange";

/**
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 */
export interface _TypedLinkAttributeRange {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: _TypedAttributeValueRange;
}

export interface _UnmarshalledTypedLinkAttributeRange
  extends _TypedLinkAttributeRange {
  /**
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: _UnmarshalledTypedAttributeValueRange;
}
