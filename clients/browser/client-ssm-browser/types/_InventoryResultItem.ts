/**
 * <p>The inventory result item.</p>
 */
export interface _InventoryResultItem {
  /**
   * <p>The name of the inventory result item type.</p>
   */
  TypeName: string;

  /**
   * <p>The schema version for the inventory result item/</p>
   */
  SchemaVersion: string;

  /**
   * <p>The time inventory item data was captured.</p>
   */
  CaptureTime?: string;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API does not update the inventory item type contents if the MD5 hash has not changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and values. </p>
   */
  Content:
    | Array<{ [key: string]: string } | Iterable<[string, string]>>
    | Iterable<{ [key: string]: string } | Iterable<[string, string]>>;
}

export interface _UnmarshalledInventoryResultItem extends _InventoryResultItem {
  /**
   * <p>Contains all the inventory data of the item type. Results include attribute names and values. </p>
   */
  Content: Array<{ [key: string]: string }>;
}
