import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for ConflictException
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
