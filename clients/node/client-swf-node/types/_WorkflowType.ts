/**
 * <p>Represents a workflow type.</p>
 */
export interface _WorkflowType {
  /**
   * <p> The name of the workflow type.</p> <note> <p>The combination of workflow type name and version must be unique with in a domain.</p> </note>
   */
  name: string;

  /**
   * <p> The version of the workflow type.</p> <note> <p>The combination of workflow type name and version must be unique with in a domain.</p> </note>
   */
  version: string;
}

export type _UnmarshalledWorkflowType = _WorkflowType;
