import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the <code>force</code> parameter.</p>
 */
export interface InvalidStateTransitionException
  extends __ServiceException__<_InvalidStateTransitionExceptionDetails> {
  name: "InvalidStateTransitionException";
}

export interface _InvalidStateTransitionExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
