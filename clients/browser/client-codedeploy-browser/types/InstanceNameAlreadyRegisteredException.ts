import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified on-premises instance name is already registered.</p>
 */
export interface InstanceNameAlreadyRegisteredException
  extends __ServiceException__<_InstanceNameAlreadyRegisteredExceptionDetails> {
  name: "InstanceNameAlreadyRegisteredException";
}

export interface _InstanceNameAlreadyRegisteredExceptionDetails {}
