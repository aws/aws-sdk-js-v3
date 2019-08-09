/**
 * Details about the error.
 */
export interface _ErrorDetail {
  /**
   * A detailed error code.
   */
  DetailedErrorCode?: string;

  /**
   * A detailed error message.
   */
  DetailedErrorMessage?: string;
}

export type _UnmarshalledErrorDetail = _ErrorDetail;
