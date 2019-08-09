import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";

/**
 * <p>Contains information about a workflow type.</p>
 */
export interface _WorkflowTypeInfo {
  /**
   * <p>The workflow type this information is about.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>The current status of the workflow type.</p>
   */
  status: "REGISTERED" | "DEPRECATED" | string;

  /**
   * <p>The description of the type registered through <a>RegisterWorkflowType</a>.</p>
   */
  description?: string;

  /**
   * <p>The date when this type was registered.</p>
   */
  creationDate: Date | string | number;

  /**
   * <p>If the type is in deprecated state, then it is set to the date when the type was deprecated.</p>
   */
  deprecationDate?: Date | string | number;
}

export interface _UnmarshalledWorkflowTypeInfo extends _WorkflowTypeInfo {
  /**
   * <p>The workflow type this information is about.</p>
   */
  workflowType: _UnmarshalledWorkflowType;

  /**
   * <p>The date when this type was registered.</p>
   */
  creationDate: Date;

  /**
   * <p>If the type is in deprecated state, then it is set to the date when the type was deprecated.</p>
   */
  deprecationDate?: Date;
}
