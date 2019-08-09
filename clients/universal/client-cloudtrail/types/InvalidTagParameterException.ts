import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the key or value specified for the tag does not match the regular expression <code>^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$</code>.</p>
 */
export interface InvalidTagParameterException
  extends __ServiceException__<_InvalidTagParameterExceptionDetails> {
  name: "InvalidTagParameterException";
}

export interface _InvalidTagParameterExceptionDetails {}
