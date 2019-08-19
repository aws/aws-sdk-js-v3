import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The service couldn't complete your request because there is a conflict with the current state of the resource.
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
