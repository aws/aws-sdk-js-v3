import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a precondition is not met.</p>
 */
export interface PreconditionNotMetException
  extends __ServiceException__<_PreconditionNotMetExceptionDetails> {
  name: "PreconditionNotMetException";
}

export interface _PreconditionNotMetExceptionDetails {
  /**
   * <p>The message returned when a precondition is not met.</p>
   */
  message?: string;
}
