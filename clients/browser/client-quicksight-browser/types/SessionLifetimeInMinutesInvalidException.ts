import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of minutes specified for the lifetime of a session is not valid. The session lifetime must be from 15 to 600 minutes.</p>
 */
export interface SessionLifetimeInMinutesInvalidException
  extends __ServiceException__<
    _SessionLifetimeInMinutesInvalidExceptionDetails
  > {
  name: "SessionLifetimeInMinutesInvalidException";
}

export interface _SessionLifetimeInMinutesInvalidExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
