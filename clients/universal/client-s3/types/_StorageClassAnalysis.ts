import {
  _StorageClassAnalysisDataExport,
  _UnmarshalledStorageClassAnalysisDataExport
} from "./_StorageClassAnalysisDataExport";

/**
 * <p>Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface _StorageClassAnalysis {
  /**
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.</p>
   */
  DataExport?: _StorageClassAnalysisDataExport;
}

export interface _UnmarshalledStorageClassAnalysis
  extends _StorageClassAnalysis {
  /**
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.</p>
   */
  DataExport?: _UnmarshalledStorageClassAnalysisDataExport;
}
