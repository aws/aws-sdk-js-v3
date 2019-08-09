import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified listener does not exist.</p>
 */
export interface ListenerNotFoundException
  extends __ServiceException__<_ListenerNotFoundExceptionDetails> {
  name: "ListenerNotFoundException";
}

export interface _ListenerNotFoundExceptionDetails {}
