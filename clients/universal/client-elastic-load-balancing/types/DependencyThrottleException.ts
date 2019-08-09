import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 */
export interface DependencyThrottleException
  extends __ServiceException__<_DependencyThrottleExceptionDetails> {
  name: "DependencyThrottleException";
}

export interface _DependencyThrottleExceptionDetails {}
