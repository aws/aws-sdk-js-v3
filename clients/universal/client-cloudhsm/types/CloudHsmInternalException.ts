import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that an internal error occurred.</p>
 */
export interface CloudHsmInternalException
  extends __ServiceException__<_CloudHsmInternalExceptionDetails> {
  name: "CloudHsmInternalException";
}

export interface _CloudHsmInternalExceptionDetails {}
