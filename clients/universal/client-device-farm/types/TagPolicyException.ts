import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag policy. Correct your request and then retry it.</p>
 */
export interface TagPolicyException
  extends __ServiceException__<_TagPolicyExceptionDetails> {
  name: "TagPolicyException";
}

export interface _TagPolicyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;

  /**
   * _AmazonResourceName shape
   */
  resourceName?: string;
}
