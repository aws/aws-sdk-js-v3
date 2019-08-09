/**
 * <p>A document that defines an entity. </p>
 */
export interface _DefinitionDocument {
  /**
   * <p>The language used to define the entity. <code>GRAPHQL</code> is the only valid value.</p>
   */
  language: "GRAPHQL" | string;

  /**
   * <p>The GraphQL text that defines the entity.</p>
   */
  text: string;
}

export type _UnmarshalledDefinitionDocument = _DefinitionDocument;
