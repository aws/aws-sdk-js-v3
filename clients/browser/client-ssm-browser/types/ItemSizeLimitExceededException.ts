import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The inventory item size has exceeded the size limit.</p>
 */
export interface ItemSizeLimitExceededException
  extends __ServiceException__<_ItemSizeLimitExceededExceptionDetails> {
  name: "ItemSizeLimitExceededException";
}

export interface _ItemSizeLimitExceededExceptionDetails {
  /**
   * _InventoryItemTypeName shape
   */
  TypeName?: string;

  /**
   * _String shape
   */
  Message?: string;
}
