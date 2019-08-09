import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
 */
export interface RepositoryNotFoundException
  extends __ServiceException__<_RepositoryNotFoundExceptionDetails> {
  name: "RepositoryNotFoundException";
}

export interface _RepositoryNotFoundExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
