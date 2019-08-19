import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified OU is not empty. Move all accounts to another root or to other OUs, remove all child OUs, and try the operation again.</p>
 */
export interface OrganizationalUnitNotEmptyException
  extends __ServiceException__<_OrganizationalUnitNotEmptyExceptionDetails> {
  name: "OrganizationalUnitNotEmptyException";
}

export interface _OrganizationalUnitNotEmptyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
