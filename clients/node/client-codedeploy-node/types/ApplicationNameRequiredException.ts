import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The minimum number of required application names was not specified.</p>
 */
export interface ApplicationNameRequiredException
  extends __ServiceException__<_ApplicationNameRequiredExceptionDetails> {
  name: "ApplicationNameRequiredException";
}

export interface _ApplicationNameRequiredExceptionDetails {}
