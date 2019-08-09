import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The organization isn't empty. To delete an organization, you must first remove all accounts except the master account, delete all OUs, and delete all policies.</p>
 */
export interface OrganizationNotEmptyException
  extends __ServiceException__<_OrganizationNotEmptyExceptionDetails> {
  name: "OrganizationNotEmptyException";
}

export interface _OrganizationNotEmptyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
