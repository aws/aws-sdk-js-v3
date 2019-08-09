import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A parameter is specified incorrectly.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {}
