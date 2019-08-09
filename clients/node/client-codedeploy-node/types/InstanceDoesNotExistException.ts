import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified instance does not exist in the deployment group.</p>
 */
export interface InstanceDoesNotExistException
  extends __ServiceException__<_InstanceDoesNotExistExceptionDetails> {
  name: "InstanceDoesNotExistException";
}

export interface _InstanceDoesNotExistExceptionDetails {}
