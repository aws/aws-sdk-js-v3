import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified receipt handle isn't valid.</p>
 */
export interface ReceiptHandleIsInvalid
  extends __ServiceException__<_ReceiptHandleIsInvalidDetails> {
  name: "ReceiptHandleIsInvalid";
}

export interface _ReceiptHandleIsInvalidDetails {}
