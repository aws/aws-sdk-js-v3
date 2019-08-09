import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified inventory group is not valid.</p>
 */
export interface InvalidInventoryGroupException
  extends __ServiceException__<_InvalidInventoryGroupExceptionDetails> {
  name: "InvalidInventoryGroupException";
}

export interface _InvalidInventoryGroupExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
