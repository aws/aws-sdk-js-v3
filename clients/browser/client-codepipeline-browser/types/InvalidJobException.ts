import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified job was specified in an invalid format or cannot be found.</p>
 */
export interface InvalidJobException
  extends __ServiceException__<_InvalidJobExceptionDetails> {
  name: "InvalidJobException";
}

export interface _InvalidJobExceptionDetails {}
