import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The format of the <code>StreamARN</code> is invalid.</p>
 */
export interface InvalidResourceFormatException
  extends __ServiceException__<_InvalidResourceFormatExceptionDetails> {
  name: "InvalidResourceFormatException";
}

export interface _InvalidResourceFormatExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
