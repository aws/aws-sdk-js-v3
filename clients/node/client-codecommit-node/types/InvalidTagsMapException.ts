import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The map of tags is not valid.</p>
 */
export interface InvalidTagsMapException
  extends __ServiceException__<_InvalidTagsMapExceptionDetails> {
  name: "InvalidTagsMapException";
}

export interface _InvalidTagsMapExceptionDetails {}
