import {
  _ExportTaskStatus,
  _UnmarshalledExportTaskStatus
} from "./_ExportTaskStatus";
import {
  _ExportTaskExecutionInfo,
  _UnmarshalledExportTaskExecutionInfo
} from "./_ExportTaskExecutionInfo";

/**
 * <p>Represents an export task.</p>
 */
export interface _ExportTask {
  /**
   * <p>The ID of the export task.</p>
   */
  taskId?: string;

  /**
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The name of the log group from which logs data was exported.</p>
   */
  logGroupName?: string;

  /**
   * <p>The start time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not exported.</p>
   */
  from?: number;

  /**
   * <p>The end time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.</p>
   */
  to?: number;

  /**
   * <p>The name of Amazon S3 bucket to which the log data was exported.</p>
   */
  destination?: string;

  /**
   * <p>The prefix that was used as the start of Amazon S3 key for every object exported.</p>
   */
  destinationPrefix?: string;

  /**
   * <p>The status of the export task.</p>
   */
  status?: _ExportTaskStatus;

  /**
   * <p>Execution info about the export task.</p>
   */
  executionInfo?: _ExportTaskExecutionInfo;
}

export interface _UnmarshalledExportTask extends _ExportTask {
  /**
   * <p>The status of the export task.</p>
   */
  status?: _UnmarshalledExportTaskStatus;

  /**
   * <p>Execution info about the export task.</p>
   */
  executionInfo?: _UnmarshalledExportTaskExecutionInfo;
}
