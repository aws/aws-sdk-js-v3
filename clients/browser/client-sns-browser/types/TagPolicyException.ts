import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
 */
export interface TagPolicyException
  extends __ServiceException__<_TagPolicyExceptionDetails> {
  name: "TagPolicyException";
}

export interface _TagPolicyExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
