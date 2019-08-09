import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An OU with the same name already exists.</p>
 */
export interface DuplicateOrganizationalUnitException
  extends __ServiceException__<_DuplicateOrganizationalUnitExceptionDetails> {
  name: "DuplicateOrganizationalUnitException";
}

export interface _DuplicateOrganizationalUnitExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
