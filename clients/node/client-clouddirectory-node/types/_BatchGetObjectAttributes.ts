import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import { _SchemaFacet, _UnmarshalledSchemaFacet } from "./_SchemaFacet";

/**
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchGetObjectAttributes {
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBatchGetObjectAttributes
  extends _BatchGetObjectAttributes {
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: _UnmarshalledSchemaFacet;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string>;
}
