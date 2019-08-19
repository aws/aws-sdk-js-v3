import {
  _FacetAttributeDefinition,
  _UnmarshalledFacetAttributeDefinition
} from "./_FacetAttributeDefinition";
import {
  _FacetAttributeReference,
  _UnmarshalledFacetAttributeReference
} from "./_FacetAttributeReference";

/**
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 */
export interface _FacetAttribute {
  /**
   * <p>The name of the facet attribute.</p>
   */
  Name: string;

  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: _FacetAttributeDefinition;

  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: _FacetAttributeReference;

  /**
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   */
  RequiredBehavior?: "REQUIRED_ALWAYS" | "NOT_REQUIRED" | string;
}

export interface _UnmarshalledFacetAttribute extends _FacetAttribute {
  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: _UnmarshalledFacetAttributeDefinition;

  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: _UnmarshalledFacetAttributeReference;
}
