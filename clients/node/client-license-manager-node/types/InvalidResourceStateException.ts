import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>License Manager cannot allocate a license to a resource because of its state. </p> <p>For example, you cannot allocate a license to an instance in the process of shutting down.</p>
 */
export interface InvalidResourceStateException
  extends __ServiceException__<_InvalidResourceStateExceptionDetails> {
  name: "InvalidResourceStateException";
}

export interface _InvalidResourceStateExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
