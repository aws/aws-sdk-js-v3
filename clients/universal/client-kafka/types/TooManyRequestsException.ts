import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 *
 *             <p>Returns information about an error.</p>
 *
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   *
   *             <p>The parameter that caused the error.</p>
   *
   */
  InvalidParameter?: string;

  /**
   *
   *             <p>The description of the error.</p>
   *
   */
  Message?: string;
}
