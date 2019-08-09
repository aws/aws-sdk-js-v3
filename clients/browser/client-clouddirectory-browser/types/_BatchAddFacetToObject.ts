import { _SchemaFacet, _UnmarshalledSchemaFacet } from "./_SchemaFacet";
import {
  _AttributeKeyAndValue,
  _UnmarshalledAttributeKeyAndValue
} from "./_AttributeKeyAndValue";
import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Represents the output of a batch add facet to object operation.</p>
 */
export interface _BatchAddFacetToObject {
  /**
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList:
    | Array<_AttributeKeyAndValue>
    | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: _ObjectReference;
}

export interface _UnmarshalledBatchAddFacetToObject
  extends _BatchAddFacetToObject {
  /**
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: _UnmarshalledSchemaFacet;

  /**
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList: Array<_UnmarshalledAttributeKeyAndValue>;

  /**
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;
}
