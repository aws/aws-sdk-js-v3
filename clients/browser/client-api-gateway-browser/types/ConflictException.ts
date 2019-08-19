import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
