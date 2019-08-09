import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The designated permission has already been given to the user.</p>
 */
export interface PermissionAlreadyExistsException
  extends __ServiceException__<_PermissionAlreadyExistsExceptionDetails> {
  name: "PermissionAlreadyExistsException";
}

export interface _PermissionAlreadyExistsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
