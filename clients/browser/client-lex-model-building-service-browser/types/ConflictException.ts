import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> There was a conflict processing the request. Try your request again. </p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
