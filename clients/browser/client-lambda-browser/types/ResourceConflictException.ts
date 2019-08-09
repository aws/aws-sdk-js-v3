import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceConflictException
  extends __ServiceException__<_ResourceConflictExceptionDetails> {
  name: "ResourceConflictException";
}

export interface _ResourceConflictExceptionDetails {
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}
