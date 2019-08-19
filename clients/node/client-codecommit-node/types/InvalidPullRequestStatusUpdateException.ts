import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusUpdateException
  extends __ServiceException__<
    _InvalidPullRequestStatusUpdateExceptionDetails
  > {
  name: "InvalidPullRequestStatusUpdateException";
}

export interface _InvalidPullRequestStatusUpdateExceptionDetails {}
