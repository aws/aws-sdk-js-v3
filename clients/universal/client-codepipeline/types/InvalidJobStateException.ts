import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified job state was specified in an invalid format.</p>
 */
export interface InvalidJobStateException
  extends __ServiceException__<_InvalidJobStateExceptionDetails> {
  name: "InvalidJobStateException";
}

export interface _InvalidJobStateExceptionDetails {}
