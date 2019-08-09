import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An API function was called too frequently.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {}
