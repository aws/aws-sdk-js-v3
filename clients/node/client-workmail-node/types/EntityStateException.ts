import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
 */
export interface EntityStateException
  extends __ServiceException__<_EntityStateExceptionDetails> {
  name: "EntityStateException";
}

export interface _EntityStateExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
