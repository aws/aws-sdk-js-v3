import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A user profile with that name already exists in this region for the AWS account. AWS CodeStar user profile names must be unique within a region for the AWS account. </p>
 */
export interface UserProfileAlreadyExistsException
  extends __ServiceException__<_UserProfileAlreadyExistsExceptionDetails> {
  name: "UserProfileAlreadyExistsException";
}

export interface _UserProfileAlreadyExistsExceptionDetails {}
