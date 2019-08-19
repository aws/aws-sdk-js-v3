import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of tags per load balancer.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {}
