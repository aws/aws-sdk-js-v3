import {
  _ObjectReference,
  _UnmarshalledObjectReference
} from "./_ObjectReference";

/**
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 */
export interface _BatchDetachObject {
  /**
   * <p>Parent reference from which the object with the specified link name is detached.</p>
   */
  ParentReference: _ObjectReference;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

export interface _UnmarshalledBatchDetachObject extends _BatchDetachObject {
  /**
   * <p>Parent reference from which the object with the specified link name is detached.</p>
   */
  ParentReference: _UnmarshalledObjectReference;
}
