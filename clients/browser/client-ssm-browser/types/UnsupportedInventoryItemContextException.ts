import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code> is not allowed for this inventory type. You can only use the <code>Context</code> attribute with inventory types like <code>AWS:ComplianceItem</code>.</p>
 */
export interface UnsupportedInventoryItemContextException
  extends __ServiceException__<
    _UnsupportedInventoryItemContextExceptionDetails
  > {
  name: "UnsupportedInventoryItemContextException";
}

export interface _UnsupportedInventoryItemContextExceptionDetails {
  /**
   * _InventoryItemTypeName shape
   */
  TypeName?: string;

  /**
   * _String shape
   */
  Message?: string;
}
