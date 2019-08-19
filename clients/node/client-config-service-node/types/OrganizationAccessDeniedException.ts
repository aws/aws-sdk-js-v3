import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No permission to call the EnableAWSServiceAccess API.</p>
 */
export interface OrganizationAccessDeniedException
  extends __ServiceException__<_OrganizationAccessDeniedExceptionDetails> {
  name: "OrganizationAccessDeniedException";
}

export interface _OrganizationAccessDeniedExceptionDetails {}
