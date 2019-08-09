import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The trigger was specified in an invalid format.</p>
 */
export interface InvalidTriggerConfigException
  extends __ServiceException__<_InvalidTriggerConfigExceptionDetails> {
  name: "InvalidTriggerConfigException";
}

export interface _InvalidTriggerConfigExceptionDetails {}
