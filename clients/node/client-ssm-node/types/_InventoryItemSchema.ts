import {
  _InventoryItemAttribute,
  _UnmarshalledInventoryItemAttribute
} from "./_InventoryItemAttribute";

/**
 * <p>The inventory item schema definition. Users can use this to compose inventory query filters.</p>
 */
export interface _InventoryItemSchema {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with AWS. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.</p>
   */
  TypeName: string;

  /**
   * <p>The schema version for the inventory item.</p>
   */
  Version?: string;

  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   */
  Attributes:
    | Array<_InventoryItemAttribute>
    | Iterable<_InventoryItemAttribute>;

  /**
   * <p>The alias name of the inventory type. The alias name is used for display purposes.</p>
   */
  DisplayName?: string;
}

export interface _UnmarshalledInventoryItemSchema extends _InventoryItemSchema {
  /**
   * <p>The schema attributes for inventory. This contains data type and attribute name.</p>
   */
  Attributes: Array<_UnmarshalledInventoryItemAttribute>;
}
