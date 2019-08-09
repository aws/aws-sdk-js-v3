import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can apply up to 10 custom attributes per resource. You can view the attributes of a resource with <a>ListAttributes</a>. You can remove existing attributes on a resource with <a>DeleteAttributes</a>.</p>
 */
export interface AttributeLimitExceededException
  extends __ServiceException__<_AttributeLimitExceededExceptionDetails> {
  name: "AttributeLimitExceededException";
}

export interface _AttributeLimitExceededExceptionDetails {}
