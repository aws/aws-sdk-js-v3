import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A repository name is required but was not specified.</p>
 */
export interface RepositoryNameRequiredException
  extends __ServiceException__<_RepositoryNameRequiredExceptionDetails> {
  name: "RepositoryNameRequiredException";
}

export interface _RepositoryNameRequiredExceptionDetails {}
