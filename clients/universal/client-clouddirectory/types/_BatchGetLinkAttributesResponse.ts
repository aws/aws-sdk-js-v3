import {
  _AttributeKeyAndValue,
  _UnmarshalledAttributeKeyAndValue
} from "./_AttributeKeyAndValue";

/**
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 */
export interface _BatchGetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: Array<_AttributeKeyAndValue> | Iterable<_AttributeKeyAndValue>;
}

export interface _UnmarshalledBatchGetLinkAttributesResponse
  extends _BatchGetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeKeyAndValue>;
}
