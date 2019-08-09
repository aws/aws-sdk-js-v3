import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified action cannot be found.</p>
 */
export interface ActionNotFoundException
  extends __ServiceException__<_ActionNotFoundExceptionDetails> {
  name: "ActionNotFoundException";
}

export interface _ActionNotFoundExceptionDetails {}
