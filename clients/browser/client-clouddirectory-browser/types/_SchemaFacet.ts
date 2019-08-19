/**
 * <p>A facet.</p>
 */
export interface _SchemaFacet {
  /**
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the facet.</p>
   */
  FacetName?: string;
}

export type _UnmarshalledSchemaFacet = _SchemaFacet;
