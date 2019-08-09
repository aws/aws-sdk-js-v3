import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified state machine is being deleted.</p>
 */
export interface StateMachineDeleting
  extends __ServiceException__<_StateMachineDeletingDetails> {
  name: "StateMachineDeleting";
}

export interface _StateMachineDeletingDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
