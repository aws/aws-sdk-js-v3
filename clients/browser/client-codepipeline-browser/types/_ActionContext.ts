/**
 * <p>Represents the context of an action within the stage of a pipeline to a job worker.</p>
 */
export interface _ActionContext {
  /**
   * <p>The name of the action within the context of a job.</p>
   */
  name?: string;

  /**
   * <p>The system-generated unique ID that corresponds to an action's execution.</p>
   */
  actionExecutionId?: string;
}

export type _UnmarshalledActionContext = _ActionContext;
