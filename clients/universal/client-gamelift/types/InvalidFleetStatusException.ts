import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.</p>
 */
export interface InvalidFleetStatusException
  extends __ServiceException__<_InvalidFleetStatusExceptionDetails> {
  name: "InvalidFleetStatusException";
}

export interface _InvalidFleetStatusExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
