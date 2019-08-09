import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code> or <code>Server</code>.</p>
 */
export interface InvalidComputePlatformException
  extends __ServiceException__<_InvalidComputePlatformExceptionDetails> {
  name: "InvalidComputePlatformException";
}

export interface _InvalidComputePlatformExceptionDetails {}
