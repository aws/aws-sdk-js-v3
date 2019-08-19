import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the parameters provided to the operation are not valid.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}
