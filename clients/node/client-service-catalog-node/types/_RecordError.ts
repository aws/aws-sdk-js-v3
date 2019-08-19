/**
 * <p>The error code and description resulting from an operation.</p>
 */
export interface _RecordError {
  /**
   * <p>The numeric value of the error.</p>
   */
  Code?: string;

  /**
   * <p>The description of the error.</p>
   */
  Description?: string;
}

export type _UnmarshalledRecordError = _RecordError;
