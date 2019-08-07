/**
 * <p>Specifies the days since the initiation of an Incomplete Multipart Upload that Lifecycle will wait before permanently removing all parts of the upload.</p>
 */
export interface _AbortIncompleteMultipartUpload {
  /**
   * <p>Indicates the number of days that must pass since initiation for Lifecycle to abort an Incomplete Multipart Upload.</p>
   */
  DaysAfterInitiation?: number;
}

export type _UnmarshalledAbortIncompleteMultipartUpload = _AbortIncompleteMultipartUpload;
