import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was a problem with the service account.</p>
 */
export interface ServiceAccountException
  extends __ServiceException__<_ServiceAccountExceptionDetails> {
  name: "ServiceAccountException";
}

export interface _ServiceAccountExceptionDetails {
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}
