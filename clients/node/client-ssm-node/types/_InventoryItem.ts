/**
 * <p>Information collected from managed instances based on your inventory policy document</p>
 */
export interface _InventoryItem {
  /**
   * <p>The name of the inventory type. Default inventory item type names start with AWS. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.</p>
   */
  TypeName: string;

  /**
   * <p>The schema version for the inventory item.</p>
   */
  SchemaVersion: string;

  /**
   * <p>The time the inventory information was collected.</p>
   */
  CaptureTime: string;

  /**
   * <p>MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API does not update the inventory item type contents if the MD5 hash has not changed since last update. </p>
   */
  ContentHash?: string;

  /**
   * <p>The inventory data of the inventory type.</p>
   */
  Content?:
    | Array<{ [key: string]: string } | Iterable<[string, string]>>
    | Iterable<{ [key: string]: string } | Iterable<[string, string]>>;

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>, <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledInventoryItem extends _InventoryItem {
  /**
   * <p>The inventory data of the inventory type.</p>
   */
  Content?: Array<{ [key: string]: string }>;

  /**
   * <p>A map of associated properties for a specified inventory type. For example, with this attribute, you can specify the <code>ExecutionId</code>, <code>ExecutionType</code>, <code>ComplianceType</code> properties of the <code>AWS:ComplianceItem</code> type.</p>
   */
  Context?: { [key: string]: string };
}
