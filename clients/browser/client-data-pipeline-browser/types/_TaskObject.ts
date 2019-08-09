import {
  _PipelineObject,
  _UnmarshalledPipelineObject
} from "./_PipelineObject";

/**
 * <p>Contains information about a pipeline task that is assigned to a task runner.</p>
 */
export interface _TaskObject {
  /**
   * <p>An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.</p>
   */
  taskId?: string;

  /**
   * <p>The ID of the pipeline that provided the task.</p>
   */
  pipelineId?: string;

  /**
   * <p>The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.</p>
   */
  attemptId?: string;

  /**
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   */
  objects?:
    | { [key: string]: _PipelineObject }
    | Iterable<[string, _PipelineObject]>;
}

export interface _UnmarshalledTaskObject extends _TaskObject {
  /**
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   */
  objects?: { [key: string]: _UnmarshalledPipelineObject };
}
