import { _AttributeKey, _UnmarshalledAttributeKey } from "./_AttributeKey";
import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchCreateIndex {
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute is supported.</p>
   */
  OrderedIndexedAttributeList: Array<_AttributeKey> | Iterable<_AttributeKey>;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or not.</p>
   */
  IsUnique: boolean;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: _ObjectReference;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

export interface _UnmarshalledBatchCreateIndex extends _BatchCreateIndex {
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute is supported.</p>
   */
  OrderedIndexedAttributeList: Array<_UnmarshalledAttributeKey>;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: _UnmarshalledObjectReference;
}
