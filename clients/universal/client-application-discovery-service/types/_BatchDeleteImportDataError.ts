/**
 * <p>Error messages returned for each import task that you deleted as a response for this command.</p>
 */
export interface _BatchDeleteImportDataError {
  /**
   * <p>The unique import ID associated with the error that occurred.</p>
   */
  importTaskId?: string;

  /**
   * <p>The type of error that occurred for a specific import task.</p>
   */
  errorCode?: "NOT_FOUND" | "INTERNAL_SERVER_ERROR" | "OVER_LIMIT" | string;

  /**
   * <p>The description of the error that occurred for a specific import task.</p>
   */
  errorDescription?: string;
}

export type _UnmarshalledBatchDeleteImportDataError = _BatchDeleteImportDataError;
