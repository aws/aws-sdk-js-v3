/**
 * <p>Attributes are the entries within the inventory item content. It contains name and value.</p>
 */
export interface _InventoryItemAttribute {
  /**
   * <p>Name of the inventory item attribute.</p>
   */
  Name: string;

  /**
   * <p>The data type of the inventory item attribute. </p>
   */
  DataType: "string" | "number" | string;
}

export type _UnmarshalledInventoryItemAttribute = _InventoryItemAttribute;
