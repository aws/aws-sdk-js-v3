import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the request is made from an AWS account that is not a member of an organization. To make this request, sign in using the credentials of an account that belongs to an organization.</p>
 */
export interface OrganizationsNotInUseException
  extends __ServiceException__<_OrganizationsNotInUseExceptionDetails> {
  name: "OrganizationsNotInUseException";
}

export interface _OrganizationsNotInUseExceptionDetails {}
