/**
 * <p>Information regarding the export status of discovered data. The value is an array of objects.</p>
 */
export interface _ExportInfo {
  /**
   * <p>A unique identifier used to query an export.</p>
   */
  exportId: string;

  /**
   * <p>The status of the data export job.</p>
   */
  exportStatus: "FAILED" | "SUCCEEDED" | "IN_PROGRESS" | string;

  /**
   * <p>A status message provided for API callers.</p>
   */
  statusMessage: string;

  /**
   * <p>A URL for an Amazon S3 bucket where you can review the exported data. The URL is displayed only if the export succeeded.</p>
   */
  configurationsDownloadUrl?: string;

  /**
   * <p>The time that the data export was initiated.</p>
   */
  exportRequestTime: Date | string | number;

  /**
   * <p>If true, the export of agent information exceeded the size limit for a single export and the exported data is incomplete for the requested time range. To address this, select a smaller time range for the export by using <code>startDate</code> and <code>endDate</code>.</p>
   */
  isTruncated?: boolean;

  /**
   * <p>The value of <code>startTime</code> parameter in the <code>StartExportTask</code> request. If no <code>startTime</code> was requested, this result does not appear in <code>ExportInfo</code>.</p>
   */
  requestedStartTime?: Date | string | number;

  /**
   * <p>The <code>endTime</code> used in the <code>StartExportTask</code> request. If no <code>endTime</code> was requested, this result does not appear in <code>ExportInfo</code>.</p>
   */
  requestedEndTime?: Date | string | number;
}

export interface _UnmarshalledExportInfo extends _ExportInfo {
  /**
   * <p>The time that the data export was initiated.</p>
   */
  exportRequestTime: Date;

  /**
   * <p>The value of <code>startTime</code> parameter in the <code>StartExportTask</code> request. If no <code>startTime</code> was requested, this result does not appear in <code>ExportInfo</code>.</p>
   */
  requestedStartTime?: Date;

  /**
   * <p>The <code>endTime</code> used in the <code>StartExportTask</code> request. If no <code>endTime</code> was requested, this result does not appear in <code>ExportInfo</code>.</p>
   */
  requestedEndTime?: Date;
}
