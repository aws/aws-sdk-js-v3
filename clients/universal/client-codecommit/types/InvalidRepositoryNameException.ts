import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>
 */
export interface InvalidRepositoryNameException
  extends __ServiceException__<_InvalidRepositoryNameExceptionDetails> {
  name: "InvalidRepositoryNameException";
}

export interface _InvalidRepositoryNameExceptionDetails {}
