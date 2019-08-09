import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import { _SchemaFacet, _UnmarshalledSchemaFacet } from "./_SchemaFacet";

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 */
export interface _BatchListObjectAttributes {
  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain facet.</p>
   */
  FacetFilter?: _SchemaFacet;
}

export interface _UnmarshalledBatchListObjectAttributes
  extends _BatchListObjectAttributes {
  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain facet.</p>
   */
  FacetFilter?: _UnmarshalledSchemaFacet;
}
