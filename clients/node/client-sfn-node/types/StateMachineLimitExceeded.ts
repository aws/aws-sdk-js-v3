import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of state machines has been reached. Existing state machines must be deleted before a new state machine can be created.</p>
 */
export interface StateMachineLimitExceeded
  extends __ServiceException__<_StateMachineLimitExceededDetails> {
  name: "StateMachineLimitExceeded";
}

export interface _StateMachineLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
