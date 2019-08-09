import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You specified invalid keys or values in the <code>Context</code> attribute for <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 */
export interface InvalidInventoryItemContextException
  extends __ServiceException__<_InvalidInventoryItemContextExceptionDetails> {
  name: "InvalidInventoryItemContextException";
}

export interface _InvalidInventoryItemContextExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
