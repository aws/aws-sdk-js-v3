import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 *
 *             <p>Returns information about an error.</p>
 *
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
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
