import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified subnet does not exist.</p>
 */
export interface SubnetNotFoundException
  extends __ServiceException__<_SubnetNotFoundExceptionDetails> {
  name: "SubnetNotFoundException";
}

export interface _SubnetNotFoundExceptionDetails {}
