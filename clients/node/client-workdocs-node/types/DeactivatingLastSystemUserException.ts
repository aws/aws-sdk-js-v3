import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The last user in the organization is being deactivated.</p>
 */
export interface DeactivatingLastSystemUserException
  extends __ServiceException__<_DeactivatingLastSystemUserExceptionDetails> {
  name: "DeactivatingLastSystemUserException";
}

export interface _DeactivatingLastSystemUserExceptionDetails {}
