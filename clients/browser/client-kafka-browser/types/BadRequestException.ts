import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 *
 *             <p>Returns information about an error.</p>
 *
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
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
