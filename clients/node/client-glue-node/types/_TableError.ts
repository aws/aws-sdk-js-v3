import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * <p>An error record for table operations.</p>
 */
export interface _TableError {
  /**
   * <p>Name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   */
  TableName?: string;

  /**
   * <p>Detail about the error.</p>
   */
  ErrorDetail?: _ErrorDetail;
}

export interface _UnmarshalledTableError extends _TableError {
  /**
   * <p>Detail about the error.</p>
   */
  ErrorDetail?: _UnmarshalledErrorDetail;
}
