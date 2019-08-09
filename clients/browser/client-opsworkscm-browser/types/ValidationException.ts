import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the provided request parameters are not valid. </p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * <p>Error or informational message that can contain more detail about a validation failure. </p>
   */
  Message?: string;
}
