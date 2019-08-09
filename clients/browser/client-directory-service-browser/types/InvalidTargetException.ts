import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified shared target is not valid.</p>
 */
export interface InvalidTargetException
  extends __ServiceException__<_InvalidTargetExceptionDetails> {
  name: "InvalidTargetException";
}

export interface _InvalidTargetExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
