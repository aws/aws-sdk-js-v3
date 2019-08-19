/**
 * <p>Information about errors in a BatchDescribeMergeConflicts operation.</p>
 */
export interface _BatchDescribeMergeConflictsError {
  /**
   * <p>The path to the file.</p>
   */
  filePath: string;

  /**
   * <p>The name of the exception.</p>
   */
  exceptionName: string;

  /**
   * <p>The message provided by the exception.</p>
   */
  message: string;
}

export type _UnmarshalledBatchDescribeMergeConflictsError = _BatchDescribeMergeConflictsError;
