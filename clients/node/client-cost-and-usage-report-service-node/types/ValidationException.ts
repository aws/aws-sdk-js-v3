import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException
  extends __ServiceException__<_ValidationExceptionDetails> {
  name: "ValidationException";
}

export interface _ValidationExceptionDetails {
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}
