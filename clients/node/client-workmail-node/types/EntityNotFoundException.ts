import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
 */
export interface EntityNotFoundException
  extends __ServiceException__<_EntityNotFoundExceptionDetails> {
  name: "EntityNotFoundException";
}

export interface _EntityNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
