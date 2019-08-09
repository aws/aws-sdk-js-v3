/**
 * <p>Contains details about an error.</p>
 */
export interface _ErrorDetail {
  /**
   * <p>The code associated with this error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledErrorDetail = _ErrorDetail;
