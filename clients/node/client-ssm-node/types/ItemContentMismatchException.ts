import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The inventory item has invalid content. </p>
 */
export interface ItemContentMismatchException
  extends __ServiceException__<_ItemContentMismatchExceptionDetails> {
  name: "ItemContentMismatchException";
}

export interface _ItemContentMismatchExceptionDetails {
  /**
   * _InventoryItemTypeName shape
   */
  TypeName?: string;

  /**
   * _String shape
   */
  Message?: string;
}
