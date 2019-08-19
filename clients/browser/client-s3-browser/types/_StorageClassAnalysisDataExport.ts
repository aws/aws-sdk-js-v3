import {
  _AnalyticsExportDestination,
  _UnmarshalledAnalyticsExportDestination
} from "./_AnalyticsExportDestination";

/**
 * <p/>
 */
export interface _StorageClassAnalysisDataExport {
  /**
   * <p>The version of the output schema to use when exporting data. Must be <code>V_1</code>.</p>
   */
  OutputSchemaVersion: "V_1" | string;

  /**
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: _AnalyticsExportDestination;
}

export interface _UnmarshalledStorageClassAnalysisDataExport
  extends _StorageClassAnalysisDataExport {
  /**
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: _UnmarshalledAnalyticsExportDestination;
}
