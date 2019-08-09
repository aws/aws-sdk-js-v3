import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * You don't have permissions for this action with the credentials you sent.
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
