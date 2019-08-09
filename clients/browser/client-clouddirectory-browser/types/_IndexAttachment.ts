import {
  _AttributeKeyAndValue,
  _UnmarshalledAttributeKeyAndValue
} from "./_AttributeKeyAndValue";

/**
 * <p>Represents an index and an attached object.</p>
 */
export interface _IndexAttachment {
  /**
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?:
    | Array<_AttributeKeyAndValue>
    | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   */
  ObjectIdentifier?: string;
}

export interface _UnmarshalledIndexAttachment extends _IndexAttachment {
  /**
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?: Array<_UnmarshalledAttributeKeyAndValue>;
}
