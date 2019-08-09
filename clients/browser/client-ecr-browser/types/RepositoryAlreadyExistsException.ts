import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified repository already exists in the specified registry.</p>
 */
export interface RepositoryAlreadyExistsException
  extends __ServiceException__<_RepositoryAlreadyExistsExceptionDetails> {
  name: "RepositoryAlreadyExistsException";
}

export interface _RepositoryAlreadyExistsExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
