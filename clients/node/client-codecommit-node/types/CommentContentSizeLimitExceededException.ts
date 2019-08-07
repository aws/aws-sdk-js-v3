import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 */
export interface CommentContentSizeLimitExceededException
  extends __ServiceException__<
    _CommentContentSizeLimitExceededExceptionDetails
  > {
  name: "CommentContentSizeLimitExceededException";
}

export interface _CommentContentSizeLimitExceededExceptionDetails {}
