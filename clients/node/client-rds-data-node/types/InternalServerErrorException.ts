import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {}
