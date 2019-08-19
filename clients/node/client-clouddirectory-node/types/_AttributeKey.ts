/**
 * <p>A unique identifier for an attribute.</p>
 */
export interface _AttributeKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and attribute.</p>
   */
  SchemaArn: string;

  /**
   * <p>The name of the facet that the attribute exists within.</p>
   */
  FacetName: string;

  /**
   * <p>The name of the attribute.</p>
   */
  Name: string;
}

export type _UnmarshalledAttributeKey = _AttributeKey;
