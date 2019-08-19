import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
