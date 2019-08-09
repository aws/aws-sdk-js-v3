import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A tag was not specified.</p>
 */
export interface TagRequiredException
  extends __ServiceException__<_TagRequiredExceptionDetails> {
  name: "TagRequiredException";
}

export interface _TagRequiredExceptionDetails {}
