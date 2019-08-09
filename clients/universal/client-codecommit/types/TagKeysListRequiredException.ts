import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A list of tag keys is required. The list cannot be empty or null.</p>
 */
export interface TagKeysListRequiredException
  extends __ServiceException__<_TagKeysListRequiredExceptionDetails> {
  name: "TagKeysListRequiredException";
}

export interface _TagKeysListRequiredExceptionDetails {}
