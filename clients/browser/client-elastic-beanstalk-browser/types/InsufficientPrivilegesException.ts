import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account does not have sufficient privileges for one or more AWS services.</p>
 */
export interface InsufficientPrivilegesException
  extends __ServiceException__<_InsufficientPrivilegesExceptionDetails> {
  name: "InsufficientPrivilegesException";
}

export interface _InsufficientPrivilegesExceptionDetails {}
