import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception encountered while trying to access your AWS organization.</p>
 */
export interface OrganizationsException
  extends __ServiceException__<_OrganizationsExceptionDetails> {
  name: "OrganizationsException";
}

export interface _OrganizationsExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
