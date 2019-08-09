import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because you did not complete all the prerequisite steps.</p>
 */
export interface PreconditionNotMetException
  extends __ServiceException__<_PreconditionNotMetExceptionDetails> {
  name: "PreconditionNotMetException";
}

export interface _PreconditionNotMetExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
