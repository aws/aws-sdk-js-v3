import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A map of tags is required.</p>
 */
export interface TagsMapRequiredException
  extends __ServiceException__<_TagsMapRequiredExceptionDetails> {
  name: "TagsMapRequiredException";
}

export interface _TagsMapRequiredExceptionDetails {}
