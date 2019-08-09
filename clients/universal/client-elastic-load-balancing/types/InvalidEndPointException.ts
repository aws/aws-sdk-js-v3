import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified endpoint is not valid.</p>
 */
export interface InvalidEndPointException
  extends __ServiceException__<_InvalidEndPointExceptionDetails> {
  name: "InvalidEndPointException";
}

export interface _InvalidEndPointExceptionDetails {}
