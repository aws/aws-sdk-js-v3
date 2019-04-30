import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pull request event type is not valid. </p>
 */
export interface InvalidPullRequestEventTypeException
  extends __ServiceException__<_InvalidPullRequestEventTypeExceptionDetails> {
  name: "InvalidPullRequestEventTypeException";
}

export interface _InvalidPullRequestEventTypeExceptionDetails {}
