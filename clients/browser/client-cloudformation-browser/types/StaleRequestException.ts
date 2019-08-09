import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another operation has been performed on this stack set since the specified operation was performed. </p>
 */
export interface StaleRequestException
  extends __ServiceException__<_StaleRequestExceptionDetails> {
  name: "StaleRequestException";
}

export interface _StaleRequestExceptionDetails {}
