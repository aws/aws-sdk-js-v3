import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the AWS Step Functions Developer Guide.</p>
 */
export interface TooManyTags extends __ServiceException__<_TooManyTagsDetails> {
  name: "TooManyTags";
}

export interface _TooManyTagsDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;

  /**
   * _Arn shape
   */
  resourceName?: string;
}
