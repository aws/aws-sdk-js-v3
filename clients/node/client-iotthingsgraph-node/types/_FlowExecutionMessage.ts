/**
 * <p>An object that contains information about a flow event.</p>
 */
export interface _FlowExecutionMessage {
  /**
   * <p>The unique identifier of the message.</p>
   */
  messageId?: string;

  /**
   * <p>The type of flow event .</p>
   */
  eventType?:
    | "EXECUTION_STARTED"
    | "EXECUTION_FAILED"
    | "EXECUTION_ABORTED"
    | "EXECUTION_SUCCEEDED"
    | "STEP_STARTED"
    | "STEP_FAILED"
    | "STEP_SUCCEEDED"
    | "ACTIVITY_SCHEDULED"
    | "ACTIVITY_STARTED"
    | "ACTIVITY_FAILED"
    | "ACTIVITY_SUCCEEDED"
    | "START_FLOW_EXECUTION_TASK"
    | "SCHEDULE_NEXT_READY_STEPS_TASK"
    | "THING_ACTION_TASK"
    | "THING_ACTION_TASK_FAILED"
    | "THING_ACTION_TASK_SUCCEEDED"
    | "ACKNOWLEDGE_TASK_MESSAGE"
    | string;

  /**
   * <p>The date and time when the message was last updated.</p>
   */
  timestamp?: Date | string | number;

  /**
   * <p>A string containing information about the flow event.</p>
   */
  payload?: string;
}

export interface _UnmarshalledFlowExecutionMessage
  extends _FlowExecutionMessage {
  /**
   * <p>The date and time when the message was last updated.</p>
   */
  timestamp?: Date;
}
