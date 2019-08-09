import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service linked role is locked for deletion. </p>
 */
export interface InvalidServiceLinkedRoleStateException
  extends __ServiceException__<_InvalidServiceLinkedRoleStateExceptionDetails> {
  name: "InvalidServiceLinkedRoleStateException";
}

export interface _InvalidServiceLinkedRoleStateExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
