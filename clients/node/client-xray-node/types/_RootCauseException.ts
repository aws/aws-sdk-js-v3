/**
 * <p>The exception associated with a root cause.</p>
 */
export interface _RootCauseException {
  /**
   * <p>The name of the exception.</p>
   */
  Name?: string;

  /**
   * <p>The message of the exception.</p>
   */
  Message?: string;
}

export type _UnmarshalledRootCauseException = _RootCauseException;
