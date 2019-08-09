import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Organization does is no longer available.</p>
 */
export interface NoAvailableOrganizationException
  extends __ServiceException__<_NoAvailableOrganizationExceptionDetails> {
  name: "NoAvailableOrganizationException";
}

export interface _NoAvailableOrganizationExceptionDetails {}
