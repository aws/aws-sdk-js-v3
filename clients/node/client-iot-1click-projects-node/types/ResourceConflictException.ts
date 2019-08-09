import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ResourceConflictException
  extends __ServiceException__<_ResourceConflictExceptionDetails> {
  name: "ResourceConflictException";
}

export interface _ResourceConflictExceptionDetails {
  /**
   * _Code shape
   */
  code: string;

  /**
   * _Message shape
   */
  message: string;
}
