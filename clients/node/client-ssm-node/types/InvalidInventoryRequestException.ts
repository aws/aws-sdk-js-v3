import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidInventoryRequestException
  extends __ServiceException__<_InvalidInventoryRequestExceptionDetails> {
  name: "InvalidInventoryRequestException";
}

export interface _InvalidInventoryRequestExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
