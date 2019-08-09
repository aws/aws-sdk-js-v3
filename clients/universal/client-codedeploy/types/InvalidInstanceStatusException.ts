import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified instance status does not exist.</p>
 */
export interface InvalidInstanceStatusException
  extends __ServiceException__<_InvalidInstanceStatusExceptionDetails> {
  name: "InvalidInstanceStatusException";
}

export interface _InvalidInstanceStatusExceptionDetails {}
