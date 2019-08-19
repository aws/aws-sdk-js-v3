import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource already exists.</p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * <p>409</p>
   */
  ErrorCode?: string;

  /**
   * <p>The resource already exists.</p>
   */
  Message?: string;
}
