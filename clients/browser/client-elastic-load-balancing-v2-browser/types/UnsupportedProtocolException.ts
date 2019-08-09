import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified protocol is not supported.</p>
 */
export interface UnsupportedProtocolException
  extends __ServiceException__<_UnsupportedProtocolExceptionDetails> {
  name: "UnsupportedProtocolException";
}

export interface _UnsupportedProtocolExceptionDetails {}
