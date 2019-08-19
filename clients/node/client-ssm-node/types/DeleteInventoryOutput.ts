import { _UnmarshalledInventoryDeletionSummary } from "./_InventoryDeletionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteInventoryOutput shape
 */
export interface DeleteInventoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Every <code>DeleteInventory</code> action is assigned a unique ID. This option returns a unique ID. You can use this ID to query the status of a delete operation. This option is useful for ensuring that a delete operation has completed before you begin other actions. </p>
   */
  DeletionId?: string;

  /**
   * <p>The name of the inventory data type specified in the request.</p>
   */
  TypeName?: string;

  /**
   * <p>A summary of the delete operation. For more information about this summary, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-delete.html#sysman-inventory-delete-summary">Understanding the Delete Inventory Summary</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  DeletionSummary?: _UnmarshalledInventoryDeletionSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
