import {
  _TypedLinkAttributeDefinition,
  _UnmarshalledTypedLinkAttributeDefinition
} from "./_TypedLinkAttributeDefinition";

/**
 * <p>A typed link facet attribute update.</p>
 */
export interface _TypedLinkFacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute: _TypedLinkAttributeDefinition;

  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action: "CREATE_OR_UPDATE" | "DELETE" | string;
}

export interface _UnmarshalledTypedLinkFacetAttributeUpdate
  extends _TypedLinkFacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute: _UnmarshalledTypedLinkAttributeDefinition;
}
