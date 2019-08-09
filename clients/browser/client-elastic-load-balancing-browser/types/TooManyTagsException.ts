import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
 */
export interface TooManyTagsException
  extends __ServiceException__<_TooManyTagsExceptionDetails> {
  name: "TooManyTagsException";
}

export interface _TooManyTagsExceptionDetails {}
