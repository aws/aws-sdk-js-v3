import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A value could not be validated.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
