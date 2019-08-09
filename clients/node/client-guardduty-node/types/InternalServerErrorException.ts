import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Internal server error exception object.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   */
  Type?: string;
}
