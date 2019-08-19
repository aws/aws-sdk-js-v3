import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find an OU with the <code>OrganizationalUnitId</code> that you specified.</p>
 */
export interface OrganizationalUnitNotFoundException
  extends __ServiceException__<_OrganizationalUnitNotFoundExceptionDetails> {
  name: "OrganizationalUnitNotFoundException";
}

export interface _OrganizationalUnitNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
