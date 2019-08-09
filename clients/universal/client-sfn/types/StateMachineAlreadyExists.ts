import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A state machine with the same name but a different definition or role ARN already exists.</p>
 */
export interface StateMachineAlreadyExists
  extends __ServiceException__<_StateMachineAlreadyExistsDetails> {
  name: "StateMachineAlreadyExists";
}

export interface _StateMachineAlreadyExistsDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
