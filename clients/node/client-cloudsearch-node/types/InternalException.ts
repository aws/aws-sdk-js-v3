import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {}
