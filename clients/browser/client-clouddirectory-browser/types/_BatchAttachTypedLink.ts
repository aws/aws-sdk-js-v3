import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import {
  _TypedLinkSchemaAndFacetName,
  _UnmarshalledTypedLinkSchemaAndFacetName
} from "./_TypedLinkSchemaAndFacetName";
import {
  _AttributeNameAndValue,
  _UnmarshalledAttributeNameAndValue
} from "./_AttributeNameAndValue";

/**
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchAttachTypedLink {
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: _ObjectReference;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: _ObjectReference;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: _TypedLinkSchemaAndFacetName;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: Array<_AttributeNameAndValue> | Iterable<_AttributeNameAndValue>;
}

export interface _UnmarshalledBatchAttachTypedLink
  extends _BatchAttachTypedLink {
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: _UnmarshalledTypedLinkSchemaAndFacetName;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: Array<_UnmarshalledAttributeNameAndValue>;
}
