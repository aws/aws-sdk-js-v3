import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more content items is not valid.</p>
 */
export interface InvalidItemContentException
  extends __ServiceException__<_InvalidItemContentExceptionDetails> {
  name: "InvalidItemContentException";
}

export interface _InvalidItemContentExceptionDetails {
  /**
   * _InventoryItemTypeName shape
   */
  TypeName?: string;

  /**
   * _String shape
   */
  Message?: string;
}
