/**
 * <p>Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.</p>
 */
export interface _WorkflowTypeFilter {
  /**
   * <p> Name of the workflow type.</p>
   */
  name: string;

  /**
   * <p>Version of the workflow type.</p>
   */
  version?: string;
}

export type _UnmarshalledWorkflowTypeFilter = _WorkflowTypeFilter;
