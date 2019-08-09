import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The GitHub token is not valid.</p>
 */
export interface InvalidGitHubAccountTokenException
  extends __ServiceException__<_InvalidGitHubAccountTokenExceptionDetails> {
  name: "InvalidGitHubAccountTokenException";
}

export interface _InvalidGitHubAccountTokenExceptionDetails {}
