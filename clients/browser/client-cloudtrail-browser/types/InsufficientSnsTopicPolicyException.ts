import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the policy on the SNS topic is not sufficient.</p>
 */
export interface InsufficientSnsTopicPolicyException
  extends __ServiceException__<_InsufficientSnsTopicPolicyExceptionDetails> {
  name: "InsufficientSnsTopicPolicyException";
}

export interface _InsufficientSnsTopicPolicyExceptionDetails {}
