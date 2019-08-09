import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of allowed on-premises instances in a single call was exceeded.</p>
 */
export interface InstanceLimitExceededException
  extends __ServiceException__<_InstanceLimitExceededExceptionDetails> {
  name: "InstanceLimitExceededException";
}

export interface _InstanceLimitExceededExceptionDetails {}
