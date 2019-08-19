import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The instance ID was not specified.</p>
 */
export interface InstanceIdRequiredException
  extends __ServiceException__<_InstanceIdRequiredExceptionDetails> {
  name: "InstanceIdRequiredException";
}

export interface _InstanceIdRequiredExceptionDetails {}
