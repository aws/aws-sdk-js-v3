import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 */
export interface PullRequestDoesNotExistException
  extends __ServiceException__<_PullRequestDoesNotExistExceptionDetails> {
  name: "PullRequestDoesNotExistException";
}

export interface _PullRequestDoesNotExistExceptionDetails {}
