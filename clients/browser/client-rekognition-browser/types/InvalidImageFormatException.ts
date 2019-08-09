import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided image format is not supported. </p>
 */
export interface InvalidImageFormatException
  extends __ServiceException__<_InvalidImageFormatExceptionDetails> {
  name: "InvalidImageFormatException";
}

export interface _InvalidImageFormatExceptionDetails {}
