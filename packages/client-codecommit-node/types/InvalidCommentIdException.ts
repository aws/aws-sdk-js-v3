import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 */
export interface InvalidCommentIdException
  extends __ServiceException__<_InvalidCommentIdExceptionDetails> {
  name: "InvalidCommentIdException";
}

export interface _InvalidCommentIdExceptionDetails {}
