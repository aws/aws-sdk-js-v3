import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was an internal error for AWS Global Accelerator.</p>
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
