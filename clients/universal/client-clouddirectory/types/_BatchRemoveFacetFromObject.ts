import { _SchemaFacet, _UnmarshalledSchemaFacet } from "./_SchemaFacet";
import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>A batch operation to remove a facet from an object.</p>
 */
export interface _BatchRemoveFacetFromObject {
  /**
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchRemoveFacetFromObject
  extends _BatchRemoveFacetFromObject {
  /**
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: _UnmarshalledSchemaFacet;

  /**
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
