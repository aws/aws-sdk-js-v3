import {
  _AttributeValueTarget,
  _UnmarshalledAttributeValueTarget
} from "./_AttributeValueTarget";

/**
 * <p>A name value pair that describes an aspect of an account. </p>
 */
export interface _AccountAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>A list of attribute values.</p>
   */
  AttributeValues?:
    | Array<_AttributeValueTarget>
    | Iterable<_AttributeValueTarget>;
}

export interface _UnmarshalledAccountAttribute extends _AccountAttribute {
  /**
   * <p>A list of attribute values.</p>
   */
  AttributeValues?: Array<_UnmarshalledAttributeValueTarget>;
}
