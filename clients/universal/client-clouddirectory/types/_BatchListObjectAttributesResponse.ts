import {
  _AttributeKeyAndValue,
  _UnmarshalledAttributeKeyAndValue
} from "./_AttributeKeyAndValue";

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 */
export interface _BatchListObjectAttributesResponse {
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the key; attribute value is the value.</p>
   */
  Attributes?: Array<_AttributeKeyAndValue> | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListObjectAttributesResponse
  extends _BatchListObjectAttributesResponse {
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the key; attribute value is the value.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeKeyAndValue>;
}
