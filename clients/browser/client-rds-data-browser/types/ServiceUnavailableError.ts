import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 */
export interface ServiceUnavailableError
  extends __ServiceException__<_ServiceUnavailableErrorDetails> {
  name: "ServiceUnavailableError";
}

export interface _ServiceUnavailableErrorDetails {}
