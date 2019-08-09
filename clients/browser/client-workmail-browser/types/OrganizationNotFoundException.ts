import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
 */
export interface OrganizationNotFoundException
  extends __ServiceException__<_OrganizationNotFoundExceptionDetails> {
  name: "OrganizationNotFoundException";
}

export interface _OrganizationNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
