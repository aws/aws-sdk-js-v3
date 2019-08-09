import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export interface ResourceConflictException
  extends __ServiceException__<_ResourceConflictExceptionDetails> {
  name: "ResourceConflictException";
}

export interface _ResourceConflictExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;

  /**
   * _NonEmptyString shape
   */
  Code?: string;
}
