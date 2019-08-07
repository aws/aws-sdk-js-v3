import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A commit was not specified.</p>
 */
export interface CommitRequiredException
  extends __ServiceException__<_CommitRequiredExceptionDetails> {
  name: "CommitRequiredException";
}

export interface _CommitRequiredExceptionDetails {}
