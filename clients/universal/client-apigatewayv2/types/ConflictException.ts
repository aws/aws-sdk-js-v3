import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *  resource associated with the request. Resolve the conflict before retrying this
 *  request. See the accompanying error message for details.</p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}
