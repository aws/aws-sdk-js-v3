/**
 * <p>Represents the status of an export task.</p>
 */
export interface _ExportTaskStatus {
  /**
   * <p>The status code of the export task.</p>
   */
  code?:
    | "CANCELLED"
    | "COMPLETED"
    | "FAILED"
    | "PENDING"
    | "PENDING_CANCEL"
    | "RUNNING"
    | string;

  /**
   * <p>The status message related to the status code.</p>
   */
  message?: string;
}

export type _UnmarshalledExportTaskStatus = _ExportTaskStatus;
