import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * ResourceConflictException shape
 */
export interface ResourceConflictException
  extends __ServiceException__<_ResourceConflictExceptionDetails> {
  name: "ResourceConflictException";
}

export interface _ResourceConflictExceptionDetails {
  /**
   * <p>409</p>
   */
  Code?: string;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;
}
