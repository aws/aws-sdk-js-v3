import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The account making this call is not a member of an organization.</p>
 */
export interface NoAvailableOrganizationException
  extends __ServiceException__<_NoAvailableOrganizationExceptionDetails> {
  name: "NoAvailableOrganizationException";
}

export interface _NoAvailableOrganizationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
