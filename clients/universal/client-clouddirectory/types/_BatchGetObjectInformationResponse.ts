import { _SchemaFacet, _UnmarshalledSchemaFacet } from "./_SchemaFacet";

/**
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 */
export interface _BatchGetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: Array<_SchemaFacet> | Iterable<_SchemaFacet>;

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}

export interface _UnmarshalledBatchGetObjectInformationResponse
  extends _BatchGetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: Array<_UnmarshalledSchemaFacet>;
}
