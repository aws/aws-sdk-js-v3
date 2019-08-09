import {
  _FacetAttribute,
  _UnmarshalledFacetAttribute
} from "./_FacetAttribute";

/**
 * <p>A structure that contains information used to update an attribute.</p>
 */
export interface _FacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute?: _FacetAttribute;

  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action?: "CREATE_OR_UPDATE" | "DELETE" | string;
}

export interface _UnmarshalledFacetAttributeUpdate
  extends _FacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute?: _UnmarshalledFacetAttribute;
}
