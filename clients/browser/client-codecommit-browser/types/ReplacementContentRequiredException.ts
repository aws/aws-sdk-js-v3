import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>USE_NEW_CONTENT was specified but no replacement content has been provided.</p>
 */
export interface ReplacementContentRequiredException
  extends __ServiceException__<_ReplacementContentRequiredExceptionDetails> {
  name: "ReplacementContentRequiredException";
}

export interface _ReplacementContentRequiredExceptionDetails {}
