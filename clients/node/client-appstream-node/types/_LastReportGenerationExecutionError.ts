/**
 * <p>Describes the error that is returned when a usage report can't be generated.</p>
 */
export interface _LastReportGenerationExecutionError {
  /**
   * <p>The error code for the error that is returned when a usage report can't be generated.</p>
   */
  ErrorCode?:
    | "RESOURCE_NOT_FOUND"
    | "ACCESS_DENIED"
    | "INTERNAL_SERVICE_ERROR"
    | string;

  /**
   * <p>The error message for the error that is returned when a usage report can't be generated.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledLastReportGenerationExecutionError = _LastReportGenerationExecutionError;
