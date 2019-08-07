/**
 * <p>Error messages for environment variables that could not be applied.</p>
 */
export interface _EnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export type _UnmarshalledEnvironmentError = _EnvironmentError;
