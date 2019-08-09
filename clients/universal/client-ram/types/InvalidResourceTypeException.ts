import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource type is not valid.</p>
 */
export interface InvalidResourceTypeException
  extends __ServiceException__<_InvalidResourceTypeExceptionDetails> {
  name: "InvalidResourceTypeException";
}

export interface _InvalidResourceTypeExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
