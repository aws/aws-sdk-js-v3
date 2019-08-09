import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.
 */
export interface ResourceConflictException
  extends __ServiceException__<_ResourceConflictExceptionDetails> {
  name: "ResourceConflictException";
}

export interface _ResourceConflictExceptionDetails {
  /**
   * The message returned by a ResourceConflictException.
   */
  message: string;
}
