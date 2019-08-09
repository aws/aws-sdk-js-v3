import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.</p>
 */
export interface NoChangeException
  extends __ServiceException__<_NoChangeExceptionDetails> {
  name: "NoChangeException";
}

export interface _NoChangeExceptionDetails {}
