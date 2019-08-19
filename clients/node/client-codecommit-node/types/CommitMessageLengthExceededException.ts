import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit message is too long. Provide a shorter string. </p>
 */
export interface CommitMessageLengthExceededException
  extends __ServiceException__<_CommitMessageLengthExceededExceptionDetails> {
  name: "CommitMessageLengthExceededException";
}

export interface _CommitMessageLengthExceededExceptionDetails {}
