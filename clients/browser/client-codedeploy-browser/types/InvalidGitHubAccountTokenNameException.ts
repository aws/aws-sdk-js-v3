import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The format of the specified GitHub account connection name is invalid.</p>
 */
export interface InvalidGitHubAccountTokenNameException
  extends __ServiceException__<_InvalidGitHubAccountTokenNameExceptionDetails> {
  name: "InvalidGitHubAccountTokenNameException";
}

export interface _InvalidGitHubAccountTokenNameExceptionDetails {}
