import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have sent too many requests in too short a period of time. The limit helps protect against denial-of-service attacks. Try again later.</p> <p>For information on limits that affect AWS Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Limits of AWS Organizations</a> in the <i>AWS Organizations User Guide.</i> </p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _ExceptionType shape
   */
  Type?: string;

  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
