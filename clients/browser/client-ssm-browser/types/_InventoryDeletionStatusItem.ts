import {
  _InventoryDeletionSummary,
  _UnmarshalledInventoryDeletionSummary
} from "./_InventoryDeletionSummary";

/**
 * <p>Status information returned by the <code>DeleteInventory</code> action.</p>
 */
export interface _InventoryDeletionStatusItem {
  /**
   * <p>The deletion ID returned by the <code>DeleteInventory</code> action.</p>
   */
  DeletionId?: string;

  /**
   * <p>The name of the inventory data type.</p>
   */
  TypeName?: string;

  /**
   * <p>The UTC timestamp when the delete operation started.</p>
   */
  DeletionStartTime?: Date | string | number;

  /**
   * <p>The status of the operation. Possible values are InProgress and Complete.</p>
   */
  LastStatus?: "InProgress" | "Complete" | string;

  /**
   * <p>Information about the status.</p>
   */
  LastStatusMessage?: string;

  /**
   * <p>Information about the delete operation. For more information about this summary, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete">Understanding the Delete Inventory Summary</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: _InventoryDeletionSummary;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   */
  LastStatusUpdateTime?: Date | string | number;
}

export interface _UnmarshalledInventoryDeletionStatusItem
  extends _InventoryDeletionStatusItem {
  /**
   * <p>The UTC timestamp when the delete operation started.</p>
   */
  DeletionStartTime?: Date;

  /**
   * <p>Information about the delete operation. For more information about this summary, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-custom.html#sysman-inventory-delete">Understanding the Delete Inventory Summary</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: _UnmarshalledInventoryDeletionSummary;

  /**
   * <p>The UTC timestamp of when the last status report.</p>
   */
  LastStatusUpdateTime?: Date;
}
