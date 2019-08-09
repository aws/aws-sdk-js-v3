import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The call is missing a required GitHub account connection name.</p>
 */
export interface GitHubAccountTokenNameRequiredException
  extends __ServiceException__<
    _GitHubAccountTokenNameRequiredExceptionDetails
  > {
  name: "GitHubAccountTokenNameRequiredException";
}

export interface _GitHubAccountTokenNameRequiredExceptionDetails {}
