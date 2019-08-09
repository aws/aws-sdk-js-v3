import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified priority is in use.</p>
 */
export interface PriorityInUseException
  extends __ServiceException__<_PriorityInUseExceptionDetails> {
  name: "PriorityInUseException";
}

export interface _PriorityInUseExceptionDetails {}
