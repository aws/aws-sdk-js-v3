import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An on-premises instance name was not specified.</p>
 */
export interface InstanceNameRequiredException
  extends __ServiceException__<_InstanceNameRequiredExceptionDetails> {
  name: "InstanceNameRequiredException";
}

export interface _InstanceNameRequiredExceptionDetails {}
