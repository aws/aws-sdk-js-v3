import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A commit ID was not specified.</p>
 */
export interface CommitIdRequiredException
  extends __ServiceException__<_CommitIdRequiredExceptionDetails> {
  name: "CommitIdRequiredException";
}

export interface _CommitIdRequiredExceptionDetails {}
