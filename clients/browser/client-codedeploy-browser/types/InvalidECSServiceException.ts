import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The Amazon ECS service identifier is not valid. </p>
 */
export interface InvalidECSServiceException
  extends __ServiceException__<_InvalidECSServiceExceptionDetails> {
  name: "InvalidECSServiceException";
}

export interface _InvalidECSServiceExceptionDetails {}
