import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified repository contains images. To delete a repository that contains images, you must force the deletion with the <code>force</code> parameter.</p>
 */
export interface RepositoryNotEmptyException
  extends __ServiceException__<_RepositoryNotEmptyExceptionDetails> {
  name: "RepositoryNotEmptyException";
}

export interface _RepositoryNotEmptyExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
