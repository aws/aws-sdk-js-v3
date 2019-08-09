import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of actions per rule.</p>
 */
export interface TooManyActionsException
  extends __ServiceException__<_TooManyActionsExceptionDetails> {
  name: "TooManyActionsException";
}

export interface _TooManyActionsExceptionDetails {}
