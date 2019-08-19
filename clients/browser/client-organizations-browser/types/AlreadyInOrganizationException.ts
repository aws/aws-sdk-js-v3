import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This account is already a member of an organization. An account can belong to only one organization at a time.</p>
 */
export interface AlreadyInOrganizationException
  extends __ServiceException__<_AlreadyInOrganizationExceptionDetails> {
  name: "AlreadyInOrganizationException";
}

export interface _AlreadyInOrganizationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
