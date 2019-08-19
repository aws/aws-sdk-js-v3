import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the limit of tags that you can associate with the resource. Kinesis video streams support up to 50 tags. </p>
 */
export interface TagsPerResourceExceededLimitException
  extends __ServiceException__<_TagsPerResourceExceededLimitExceptionDetails> {
  name: "TagsPerResourceExceededLimitException";
}

export interface _TagsPerResourceExceededLimitExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
