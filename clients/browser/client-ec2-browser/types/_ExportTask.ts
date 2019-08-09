import {
  _ExportToS3Task,
  _UnmarshalledExportToS3Task
} from "./_ExportToS3Task";
import {
  _InstanceExportDetails,
  _UnmarshalledInstanceExportDetails
} from "./_InstanceExportDetails";

/**
 * <p>Describes an instance export task.</p>
 */
export interface _ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: _ExportToS3Task;

  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: _InstanceExportDetails;

  /**
   * <p>The state of the export task.</p>
   */
  State?: "active" | "cancelling" | "cancelled" | "completed" | string;

  /**
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;
}

export interface _UnmarshalledExportTask extends _ExportTask {
  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: _UnmarshalledExportToS3Task;

  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: _UnmarshalledInstanceExportDetails;
}
