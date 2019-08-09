import {
  _TypedLinkSchemaAndFacetName,
  _UnmarshalledTypedLinkSchemaAndFacetName
} from "./_TypedLinkSchemaAndFacetName";
import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";
import {
  _AttributeNameAndValue,
  _UnmarshalledAttributeNameAndValue
} from "./_AttributeNameAndValue";

/**
 * <p>Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.</p>
 */
export interface _TypedLinkSpecifier {
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: _TypedLinkSchemaAndFacetName;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: _ObjectReference;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: _ObjectReference;

  /**
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues:
    | Array<_AttributeNameAndValue>
    | Iterable<_AttributeNameAndValue>;
}

export interface _UnmarshalledTypedLinkSpecifier extends _TypedLinkSpecifier {
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: _UnmarshalledTypedLinkSchemaAndFacetName;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: _UnmarshalledObjectReference;

  /**
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues: Array<_UnmarshalledAttributeNameAndValue>;
}
