import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 *
 *             <p>Returns information about an error.</p>
 *
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
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
