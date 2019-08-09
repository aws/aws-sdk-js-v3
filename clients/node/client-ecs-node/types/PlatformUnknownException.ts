import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified platform version does not exist.</p>
 */
export interface PlatformUnknownException
  extends __ServiceException__<_PlatformUnknownExceptionDetails> {
  name: "PlatformUnknownException";
}

export interface _PlatformUnknownExceptionDetails {}
