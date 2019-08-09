import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified state machine does not exist.</p>
 */
export interface StateMachineDoesNotExist
  extends __ServiceException__<_StateMachineDoesNotExistDetails> {
  name: "StateMachineDoesNotExist";
}

export interface _StateMachineDoesNotExistDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
