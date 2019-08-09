import {
  _AttributeKeyAndValue,
  _UnmarshalledAttributeKeyAndValue
} from "./_AttributeKeyAndValue";

/**
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 */
export interface _BatchGetObjectAttributesResponse {
  /**
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: Array<_AttributeKeyAndValue> | Iterable<_AttributeKeyAndValue>;
}

export interface _UnmarshalledBatchGetObjectAttributesResponse
  extends _BatchGetObjectAttributesResponse {
  /**
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeKeyAndValue>;
}
