import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified target could not be found. You can view your available container instances with <a>ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and Region-specific.</p>
 */
export interface TargetNotFoundException
  extends __ServiceException__<_TargetNotFoundExceptionDetails> {
  name: "TargetNotFoundException";
}

export interface _TargetNotFoundExceptionDetails {}
