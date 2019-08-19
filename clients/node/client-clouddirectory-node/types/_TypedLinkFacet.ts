import {
  _TypedLinkAttributeDefinition,
  _UnmarshalledTypedLinkAttributeDefinition
} from "./_TypedLinkAttributeDefinition";

/**
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.</p>
 */
export interface _TypedLinkFacet {
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string;

  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes:
    | Array<_TypedLinkAttributeDefinition>
    | Iterable<_TypedLinkAttributeDefinition>;

  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTypedLinkFacet extends _TypedLinkFacet {
  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes: Array<_UnmarshalledTypedLinkAttributeDefinition>;

  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: Array<string>;
}
