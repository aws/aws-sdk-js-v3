import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified action type cannot be found.</p>
 */
export interface ActionTypeNotFoundException
  extends __ServiceException__<_ActionTypeNotFoundExceptionDetails> {
  name: "ActionTypeNotFoundException";
}

export interface _ActionTypeNotFoundExceptionDetails {}
