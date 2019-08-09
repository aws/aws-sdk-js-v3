import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * <p>An error record for table-version operations.</p>
 */
export interface _TableVersionError {
  /**
   * <p>The name of the table in question.</p>
   */
  TableName?: string;

  /**
   * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;

  /**
   * <p>Detail about the error.</p>
   */
  ErrorDetail?: _ErrorDetail;
}

export interface _UnmarshalledTableVersionError extends _TableVersionError {
  /**
   * <p>Detail about the error.</p>
   */
  ErrorDetail?: _UnmarshalledErrorDetail;
}
