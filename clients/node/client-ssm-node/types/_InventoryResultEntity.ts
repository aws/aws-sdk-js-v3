import {
  _InventoryResultItem,
  _UnmarshalledInventoryResultItem
} from "./_InventoryResultItem";

/**
 * <p>Inventory query results.</p>
 */
export interface _InventoryResultEntity {
  /**
   * <p>ID of the inventory result entity. For example, for managed instance inventory the result will be the managed instance ID. For EC2 instance inventory, the result will be the instance ID. </p>
   */
  Id?: string;

  /**
   * <p>The data section in the inventory result entity JSON.</p>
   */
  Data?:
    | { [key: string]: _InventoryResultItem }
    | Iterable<[string, _InventoryResultItem]>;
}

export interface _UnmarshalledInventoryResultEntity
  extends _InventoryResultEntity {
  /**
   * <p>The data section in the inventory result entity JSON.</p>
   */
  Data?: { [key: string]: _UnmarshalledInventoryResultItem };
}
