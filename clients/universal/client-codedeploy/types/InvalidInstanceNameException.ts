import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The on-premises instance name was specified in an invalid format.</p>
 */
export interface InvalidInstanceNameException
  extends __ServiceException__<_InvalidInstanceNameExceptionDetails> {
  name: "InvalidInstanceNameException";
}

export interface _InvalidInstanceNameExceptionDetails {}
