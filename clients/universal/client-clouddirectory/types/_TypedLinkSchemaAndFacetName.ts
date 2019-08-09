/**
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.</p>
 */
export interface _TypedLinkSchemaAndFacetName {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  TypedLinkName: string;
}

export type _UnmarshalledTypedLinkSchemaAndFacetName = _TypedLinkSchemaAndFacetName;
