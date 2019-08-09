import { _Get, _UnmarshalledGet } from "./_Get";

/**
 * <p>Specifies an item to be retrieved as part of the transaction.</p>
 */
export interface _TransactGetItem {
  /**
   * <p>Contains the primary key that identifies the item to get, together with the name of the table that contains the item, and optionally the specific attributes of the item to retrieve.</p>
   */
  Get: _Get;
}

export interface _UnmarshalledTransactGetItem extends _TransactGetItem {
  /**
   * <p>Contains the primary key that identifies the item to get, together with the name of the table that contains the item, and optionally the specific attributes of the item to retrieve.</p>
   */
  Get: _UnmarshalledGet;
}
