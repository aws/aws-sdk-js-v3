import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No GitHub account connection exists with the named specified in the call.</p>
 */
export interface GitHubAccountTokenDoesNotExistException
  extends __ServiceException__<
    _GitHubAccountTokenDoesNotExistExceptionDetails
  > {
  name: "GitHubAccountTokenDoesNotExistException";
}

export interface _GitHubAccountTokenDoesNotExistExceptionDetails {}
