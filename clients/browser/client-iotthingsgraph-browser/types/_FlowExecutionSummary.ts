/**
 * <p>An object that contains summary information about a flow execution.</p>
 */
export interface _FlowExecutionSummary {
  /**
   * <p>The ID of the flow execution.</p>
   */
  flowExecutionId?: string;

  /**
   * <p>The current status of the flow execution.</p>
   */
  status?: "RUNNING" | "ABORTED" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>The ID of the system instance that contains the flow.</p>
   */
  systemInstanceId?: string;

  /**
   * <p>The ID of the flow.</p>
   */
  flowTemplateId?: string;

  /**
   * <p>The date and time when the flow execution summary was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The date and time when the flow execution summary was last updated.</p>
   */
  updatedAt?: Date | string | number;
}

export interface _UnmarshalledFlowExecutionSummary
  extends _FlowExecutionSummary {
  /**
   * <p>The date and time when the flow execution summary was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the flow execution summary was last updated.</p>
   */
  updatedAt?: Date;
}
