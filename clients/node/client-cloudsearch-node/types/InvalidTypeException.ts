import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it specified an invalid type definition.</p>
 */
export interface InvalidTypeException
  extends __ServiceException__<_InvalidTypeExceptionDetails> {
  name: "InvalidTypeException";
}

export interface _InvalidTypeExceptionDetails {}
