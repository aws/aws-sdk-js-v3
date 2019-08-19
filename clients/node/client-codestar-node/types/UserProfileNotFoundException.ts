import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user profile was not found.</p>
 */
export interface UserProfileNotFoundException
  extends __ServiceException__<_UserProfileNotFoundExceptionDetails> {
  name: "UserProfileNotFoundException";
}

export interface _UserProfileNotFoundExceptionDetails {}
