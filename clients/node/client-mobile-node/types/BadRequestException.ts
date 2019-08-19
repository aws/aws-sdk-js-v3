import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
