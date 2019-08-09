import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified repository and registry combination does not have an associated repository policy.</p>
 */
export interface RepositoryPolicyNotFoundException
  extends __ServiceException__<_RepositoryPolicyNotFoundExceptionDetails> {
  name: "RepositoryPolicyNotFoundException";
}

export interface _RepositoryPolicyNotFoundExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
