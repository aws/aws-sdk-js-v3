import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * PreconditionFailedException shape
 */
export interface PreconditionFailedException
  extends __ServiceException__<_PreconditionFailedExceptionDetails> {
  name: "PreconditionFailedException";
}

export interface _PreconditionFailedExceptionDetails {
  /**
   * <p>412</p>
   */
  Code?: string;

  /**
   * <p>An error message explaining the error or its remedy.</p>
   */
  Message?: string;
}
