import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 */
export interface RepositoryNotAssociatedWithPullRequestException
  extends __ServiceException__<
    _RepositoryNotAssociatedWithPullRequestExceptionDetails
  > {
  name: "RepositoryNotAssociatedWithPullRequestException";
}

export interface _RepositoryNotAssociatedWithPullRequestExceptionDetails {}
