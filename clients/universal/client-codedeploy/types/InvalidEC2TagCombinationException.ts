import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.</p>
 */
export interface InvalidEC2TagCombinationException
  extends __ServiceException__<_InvalidEC2TagCombinationExceptionDetails> {
  name: "InvalidEC2TagCombinationException";
}

export interface _InvalidEC2TagCombinationExceptionDetails {}
