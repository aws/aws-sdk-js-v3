import {
  _ConditionCheck,
  _UnmarshalledConditionCheck
} from "./_ConditionCheck";
import { _Put, _UnmarshalledPut } from "./_Put";
import { _Delete, _UnmarshalledDelete } from "./_Delete";
import { _Update, _UnmarshalledUpdate } from "./_Update";

/**
 * <p>A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.</p>
 */
export interface _TransactWriteItem {
  /**
   * <p>A request to perform a check item operation.</p>
   */
  ConditionCheck?: _ConditionCheck;

  /**
   * <p>A request to perform a <code>PutItem</code> operation.</p>
   */
  Put?: _Put;

  /**
   * <p>A request to perform a <code>DeleteItem</code> operation.</p>
   */
  Delete?: _Delete;

  /**
   * <p>A request to perform an <code>UpdateItem</code> operation.</p>
   */
  Update?: _Update;
}

export interface _UnmarshalledTransactWriteItem extends _TransactWriteItem {
  /**
   * <p>A request to perform a check item operation.</p>
   */
  ConditionCheck?: _UnmarshalledConditionCheck;

  /**
   * <p>A request to perform a <code>PutItem</code> operation.</p>
   */
  Put?: _UnmarshalledPut;

  /**
   * <p>A request to perform a <code>DeleteItem</code> operation.</p>
   */
  Delete?: _UnmarshalledDelete;

  /**
   * <p>A request to perform an <code>UpdateItem</code> operation.</p>
   */
  Update?: _UnmarshalledUpdate;
}
