import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your account isn't a member of an organization. To make this request, you must use the credentials of an account that belongs to an organization.</p>
 */
export interface AWSOrganizationsNotInUseException
  extends __ServiceException__<_AWSOrganizationsNotInUseExceptionDetails> {
  name: "AWSOrganizationsNotInUseException";
}

export interface _AWSOrganizationsNotInUseExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
