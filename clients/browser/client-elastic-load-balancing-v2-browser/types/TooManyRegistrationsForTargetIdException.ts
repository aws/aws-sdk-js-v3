import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
 */
export interface TooManyRegistrationsForTargetIdException
  extends __ServiceException__<
    _TooManyRegistrationsForTargetIdExceptionDetails
  > {
  name: "TooManyRegistrationsForTargetIdException";
}

export interface _TooManyRegistrationsForTargetIdExceptionDetails {}
