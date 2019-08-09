import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified on-premises instance is not registered.</p>
 */
export interface InstanceNotRegisteredException
  extends __ServiceException__<_InstanceNotRegisteredExceptionDetails> {
  name: "InstanceNotRegisteredException";
}

export interface _InstanceNotRegisteredExceptionDetails {}
