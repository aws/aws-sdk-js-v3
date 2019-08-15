import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the number of filter polices in your AWS account exceeds the limit. To add more filter polices, submit an SNS Limit Increase case in the AWS Support Center.</p>
 */
export interface FilterPolicyLimitExceededException
  extends __ServiceException__<_FilterPolicyLimitExceededExceptionDetails> {
  name: "FilterPolicyLimitExceededException";
}

export interface _FilterPolicyLimitExceededExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
