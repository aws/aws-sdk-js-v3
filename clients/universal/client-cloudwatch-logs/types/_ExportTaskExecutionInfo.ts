/**
 * <p>Represents the status of an export task.</p>
 */
export interface _ExportTaskExecutionInfo {
  /**
   * <p>The creation time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The completion time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  completionTime?: number;
}

export type _UnmarshalledExportTaskExecutionInfo = _ExportTaskExecutionInfo;
