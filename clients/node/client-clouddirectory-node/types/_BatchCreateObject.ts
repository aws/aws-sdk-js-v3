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
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 */
export interface _BatchCreateObject {
  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more information, see <a>arns</a>.</p>
   */
  SchemaFacet: Array<_SchemaFacet> | Iterable<_SchemaFacet>;

  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as the map value.</p>
   */
  ObjectAttributeList:
    | Array<_AttributeKeyAndValue>
    | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: _ObjectReference;

  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

export interface _UnmarshalledBatchCreateObject extends _BatchCreateObject {
  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more information, see <a>arns</a>.</p>
   */
  SchemaFacet: Array<_UnmarshalledSchemaFacet>;

  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as the map value.</p>
   */
  ObjectAttributeList: Array<_UnmarshalledAttributeKeyAndValue>;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: _UnmarshalledObjectReference;
}
