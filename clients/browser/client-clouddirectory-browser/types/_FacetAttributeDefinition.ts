import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";
import { _Rule, _UnmarshalledRule } from "./_Rule";

/**
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 */
export interface _FacetAttributeDefinition {
  /**
   * <p>The type of the attribute.</p>
   */
  Type:
    | "STRING"
    | "BINARY"
    | "BOOLEAN"
    | "NUMBER"
    | "DATETIME"
    | "VARIANT"
    | string;

  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: _TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: _Rule } | Iterable<[string, _Rule]>;
}

export interface _UnmarshalledFacetAttributeDefinition
  extends _FacetAttributeDefinition {
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: _UnmarshalledTypedAttributeValue;

  /**
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: _UnmarshalledRule };
}
