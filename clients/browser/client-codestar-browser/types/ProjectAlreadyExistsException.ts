import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account. AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 */
export interface ProjectAlreadyExistsException
  extends __ServiceException__<_ProjectAlreadyExistsExceptionDetails> {
  name: "ProjectAlreadyExistsException";
}

export interface _ProjectAlreadyExistsExceptionDetails {}
