import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 */
export interface InvalidTypeException
  extends __ServiceException__<_InvalidTypeExceptionDetails> {
  name: "InvalidTypeException";
}

export interface _InvalidTypeExceptionDetails {}
