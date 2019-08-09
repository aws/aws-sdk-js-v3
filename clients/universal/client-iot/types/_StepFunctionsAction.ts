/**
 * <p>Starts execution of a Step Functions state machine.</p>
 */
export interface _StepFunctionsAction {
  /**
   * <p>(Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID. Step Functions automatically creates a unique name for each state machine execution if one is not provided.</p>
   */
  executionNamePrefix?: string;

  /**
   * <p>The name of the Step Functions state machine whose execution will be started.</p>
   */
  stateMachineName: string;

  /**
   * <p>The ARN of the role that grants IoT permission to start execution of a state machine ("Action":"states:StartExecution").</p>
   */
  roleArn: string;
}

export type _UnmarshalledStepFunctionsAction = _StepFunctionsAction;
