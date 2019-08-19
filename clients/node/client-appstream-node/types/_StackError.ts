/**
 * <p>Describes a stack error.</p>
 */
export interface _StackError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: "STORAGE_CONNECTOR_ERROR" | "INTERNAL_SERVICE_ERROR" | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledStackError = _StackError;
