import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The comment ID is missing or null. A comment ID is required.</p>
 */
export interface CommentIdRequiredException
  extends __ServiceException__<_CommentIdRequiredExceptionDetails> {
  name: "CommentIdRequiredException";
}

export interface _CommentIdRequiredExceptionDetails {}
