import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more preconditions aren't met.</p>
 */
export interface PreconditionNotMetException
  extends __ServiceException__<_PreconditionNotMetExceptionDetails> {
  name: "PreconditionNotMetException";
}

export interface _PreconditionNotMetExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
