import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The command ID and instance ID you specified did not match any invocations. Verify the command ID and the instance ID and try again. </p>
 */
export interface InvocationDoesNotExist
  extends __ServiceException__<_InvocationDoesNotExistDetails> {
  name: "InvocationDoesNotExist";
}

export interface _InvocationDoesNotExistDetails {}
