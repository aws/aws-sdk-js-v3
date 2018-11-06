import {_StorageClassAnalysisDataExport, _UnmarshalledStorageClassAnalysisDataExport} from './_StorageClassAnalysisDataExport';

/**
 * _StorageClassAnalysis shape
 */
export interface _StorageClassAnalysis {
    /**
     * <p>A container used to describe how data related to the storage class analysis should be exported.</p>
     */
    DataExport?: _StorageClassAnalysisDataExport;
}

export interface _UnmarshalledStorageClassAnalysis extends _StorageClassAnalysis {
    /**
     * <p>A container used to describe how data related to the storage class analysis should be exported.</p>
     */
    DataExport?: _UnmarshalledStorageClassAnalysisDataExport;
}