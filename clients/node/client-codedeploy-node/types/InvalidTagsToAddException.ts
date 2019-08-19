import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The specified tags are not valid. </p>
 */
export interface InvalidTagsToAddException
  extends __ServiceException__<_InvalidTagsToAddExceptionDetails> {
  name: "InvalidTagsToAddException";
}

export interface _InvalidTagsToAddExceptionDetails {}
